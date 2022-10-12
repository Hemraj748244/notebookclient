import React, { useState } from 'react';

const EditNote = ({ _id, title, description, tag }) => {
  console.log('sdss ' + _id + title + description + tag);
  return (
    <>
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
                    Title+{title}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="add a title here!"
                    value={title}
                    // onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    value={description}
                    // onChange={handleChange}
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
                    id="tag"
                    name="tag"
                    value={tag}
                    // onChange={handleChange}
                  />
                </div>
                {/* <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Add Note
      </button> */}
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
              <button type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditNote;
