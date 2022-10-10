import React from 'react';
import AddNote from './AddNote';
import Note from './Note';
import EditNote from './EditNote';
export default function Home() {
  return (
    <>
      <div className="container">
        <h2>Add a note :</h2>
        <AddNote />
        <h2 className="my-3">Your Notes :</h2>
        <Note />
        <EditNote />
      </div>
    </>
  );
}
