import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: " ",
  });
  const handleclick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
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
              minLength={5}
              required
              value={note.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              <h3>Description</h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength={5}
              required
              value={note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              <h3>Tag</h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              value={note.tag}
            />
          </div>
          <div className="container my-3">
            <button
              disabled={note.title.length < 5 || note.description.length < 5}
              type="submit"
              className="btn btn-primary"
              onClick={handleclick}
            >
              Add Note
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNote;
