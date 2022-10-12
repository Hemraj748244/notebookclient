import React, { useContext, useEffect, useState } from 'react';
import NoteContext from '../Context/NotesContext/NoteContext';
import EditNote from './EditNote';
const NoteItem = (props) => {
  const context = useContext(NoteContext);

  const { inote, updatenote } = props;
  const { deleteNote } = context;

  return (
    <div className="card my-2">
      <div className="card-header d-flex justify-content-between">
        <strong> {inote.title} </strong>
        <div>
          <i
            className="fa-solid fa-trash mx-2"
            onClick={() => {
              deleteNote(inote._id);
            }}
          ></i>

          <i
            className="fa-solid fa-pen-to-square mx-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              updatenote(inote);
            }}
          ></i>
        </div>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{inote.description}</p>
          <footer className="blockquote-footer">
            Tag : {inote.tag}
            <cite> @time : {inote.time} </cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default NoteItem;
