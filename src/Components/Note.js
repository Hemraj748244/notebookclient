import React, { useContext, useEffect } from 'react';
import NoteContext from '../Context/NotesContext/NoteContext';
import NoteItem from './NoteItem';
export default function Note() {
  const context = useContext(NoteContext);
  const { notes, getAllNotes } = context;

  useEffect(() => {
    getAllNotes();
  }, []);

  notes.reverse();

  return (
    <div className="container">
        <div className="row">
      {notes.map((note) => {
          return (
          <div className="col-md-6" key={note.time}>
            <NoteItem everyNote={note} />
          </div>
          );
      
      })}
        </div>;
    </div>
  );
}
