import React, { useState } from "react";
import NoteContext from "./NoteContext";
import EditNote from "../../Components/EditNote";

const NoteState = (props) => {
  const host = "https://inotebookbackend.hemraj748244.repl.co";
  const [notes, setNotes] = useState([]);
  const [enote, setEnote] = useState({});
  const getAllNotes = async () => {
    try {
      const res = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxNzRkMGY3YjE4YmE0YWVmZjJjYmE2In0sImlhdCI6MTY2MjUyNzU1NX0.I6SamXOEGCpuyAr36wHX0cN6SKGyL124_mhEx3BLs08",
        },
      });

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();
      console.log(data);
      setNotes(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  //Add a note
  const addNotes = async (title, description, tag) => {
    //Api Call
    const res = await fetch(`${host}/api/notes/createnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxNzRkMGY3YjE4YmE0YWVmZjJjYmE2In0sImlhdCI6MTY2MjUyNzU1NX0.I6SamXOEGCpuyAr36wHX0cN6SKGyL124_mhEx3BLs08",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag,
      }),
    });
    const note = await res.json();
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = async (id) => {
    const res = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxNzRkMGY3YjE4YmE0YWVmZjJjYmE2In0sImlhdCI6MTY2MjUyNzU1NX0.I6SamXOEGCpuyAr36wHX0cN6SKGyL124_mhEx3BLs08",
      },
    });
    console.log("note deleted with id " + id);
    const newNotes = notes.filter((note) => {
      return note._id != id;
    });
    setNotes(newNotes);
  };

  //Edit a note

  const editNote = async (eid, etitle, edescription, etag) => {
    console.log("note id :" + eid);
    const res = await fetch(`${host}/api/notes/updatenote/${eid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxNzRkMGY3YjE4YmE0YWVmZjJjYmE2In0sImlhdCI6MTY2MjUyNzU1NX0.I6SamXOEGCpuyAr36wHX0cN6SKGyL124_mhEx3BLs08",
      },
      body: JSON.stringify({
        title: etitle,
        description: edescription,
        tag: etag,
      }),
    });
    const updatednotes = JSON.parse(JSON.stringify(notes));
    const note = await res.json();
    const item = updatednotes.find((ele) => ele._id == eid);
    const index = updatednotes.indexOf(item);
    console.log(index);
    updatednotes[index] = note;
    console.log("updation completed :" + JSON.stringify(note));
    setNotes(updatednotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, getAllNotes, addNotes, editNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
