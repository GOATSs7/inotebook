import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleclick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container my-5" style={{ width: "40%" }}>
        <h3>Add a Note</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              <h3>Title</h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              <h3>Description</h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              <h3>Tag</h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={onChange}
            />
          </div>
          <div className="container my-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleclick}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      ;
    </>
  );
};

export default AddNote;
