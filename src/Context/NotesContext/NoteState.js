import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
  const host = 'https://inotebookbackend.hemraj748244.repl.co';
  const [notes, setNotes] = useState([]);
  const getAllNotes = async () => {
    try {
      const res = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxNzRkMGY3YjE4YmE0YWVmZjJjYmE2In0sImlhdCI6MTY2MjUyNzU1NX0.I6SamXOEGCpuyAr36wHX0cN6SKGyL124_mhEx3BLs08',
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
  const addNotes = (title, description, tag) => {
    //Api Call

    const note = {
      _id: '631a025886d09fb6e50a2ddca',
      user: '631a015f86d09fb6e530addc2',
      title: title,
      description: description,
      tag: tag,
      time: '2022-09-08T14:55:20.247Z',
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = async (id) => {
    const res = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxNzRkMGY3YjE4YmE0YWVmZjJjYmE2In0sImlhdCI6MTY2MjUyNzU1NX0.I6SamXOEGCpuyAr36wHX0cN6SKGyL124_mhEx3BLs08',
      },
    });
    console.log('note deleted with id ' + id);
    const newNotes = notes.filter((note) => {
      return note._id != id;
    });
    setNotes(newNotes);
  };

  //Edit a note
  const editNote = (id, title, description, tag) => {
    console.log('Editing note with id ' + id);
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
