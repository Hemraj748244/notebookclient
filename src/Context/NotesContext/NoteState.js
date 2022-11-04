import React, { useState } from "react";
import NoteContext from "./NoteContext";
import EditNote from "../../Components/EditNote";

const NoteState = (props) => {
  const host = "https://inotebookbackend.hemraj748244.repl.co";
  const [notes, setNotes] = useState([]);
  const [enote, setEnote] = useState({});
  const getAllNotes = async (authtoken) => {
    try {
      const res = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authtoken,
        },
      });

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      setNotes(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  //Add a note
  const addNotes = async (title, description, tag, authtoken) => {
    //Api Call
    const res = await fetch(`${host}/api/notes/createnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken,
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
  const deleteNote = async (id, authtoken) => {
    const res = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken,
      },
    });

    const newNotes = notes.filter((note) => {
      return note._id != id;
    });
    setNotes(newNotes);
  };

  //Edit a note

  const editNote = async (eid, etitle, edescription, etag, authtoken) => {
    const res = await fetch(`${host}/api/notes/updatenote/${eid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken,
      },
      body: JSON.stringify({
        title: etitle,
        description: edescription,
        tag: etag,
      }),
    });
    const updatednotes = JSON.parse(JSON.stringify(notes));
    const note = await res.json();
    const item = updatednotes.find((ele) => ele._id === eid);
    const index = updatednotes.indexOf(item);

    updatednotes[index] = note;

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
