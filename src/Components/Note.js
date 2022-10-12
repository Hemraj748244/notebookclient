import React, { useContext, useEffect, useState, useRef } from 'react';
import NoteContext from '../Context/NotesContext/NoteContext';
import NoteItem from './NoteItem';
export default function Note() {
  const context = useContext(NoteContext);
  const { notes, getAllNotes, editNote } = context;

  useEffect(() => {
    getAllNotes();
  }, []);

  notes.reverse();

  const [note, setNote] = useState({
    eid: '',
    etitle: '',
    edescription: '',
    etag: '',
  });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  //Note to be added
  // console.log('Note to be added' + note);
  // const ref = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    editNote(note.eid, note.etitle, note.edescription, note.etag);
    console.log('updating the note' + JSON.stringify(note));

    // addNotes(note.title, note.description, note.tag);
  };

  const EditNote = (enote) => {
    // ref.current.click();
    setNote({
      eid: enote._id,
      etitle: enote.title,
      edescription: enote.description,
      etag: enote.tag,
    });
    console.log(
      'sdss ' + note.eid + note.etitle + note.edescription + note.etag
    );
  };

  return (
    <div className="container">
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        // ref={ref}
      >
        Launch demo modal
      </button> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    placeholder="add a title here!"
                    value={note.etitle}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    rows="3"
                    value={note.edescription}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tags{' '}
                  </label>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    aria-label=".form-control-sm example"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {notes.map((note) => {
          return (
            <div className="col-md-6" key={note.time}>
              <NoteItem inote={note} updatenote={EditNote} />
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
}
