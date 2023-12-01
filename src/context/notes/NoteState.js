import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const noteInitial = [];
  const [notes, setNotes] = useState(noteInitial);

  //get all nots
  const getNotes = async (title, description, tag) => {
    //Api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NDQ3MzgwMmUyZGUyODc3NDBlYzNlIn0sImlhdCI6MTcwMTA3MDY0OH0.E4rX8RBTbeCf7ofW6NjAQ-qCfIVhD-iL03jlmwqGhtY",
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  };

  //Add Note function
  const addNote = async (title, description, tag) => {
    //Api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NDQ3MzgwMmUyZGUyODc3NDBlYzNlIn0sImlhdCI6MTcwMTA3MDY0OH0.E4rX8RBTbeCf7ofW6NjAQ-qCfIVhD-iL03jlmwqGhtY",
      },
      body: JSON.stringify({ title, description, tag }), // Convert data to JSON string
    });
    const note = await response.json();
    // console.log(json);

    setNotes(notes.concat(note));
  };
  //Delete Note function
  const deleteNote = async (id) => {
    // ?? Api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NDQ3MzgwMmUyZGUyODc3NDBlYzNlIn0sImlhdCI6MTcwMTA3MDY0OH0.E4rX8RBTbeCf7ofW6NjAQ-qCfIVhD-iL03jlmwqGhtY",
      },
    });
    const json = await response.json();
    // console.log(json);
    // console.log("deleting note" + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };
  //Edit Note function
  const editNote = async (id, title, description, tag) => {
    //Api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NDQ3MzgwMmUyZGUyODc3NDBlYzNlIn0sImlhdCI6MTcwMTA3MDY0OH0.E4rX8RBTbeCf7ofW6NjAQ-qCfIVhD-iL03jlmwqGhtY",
      },
      body: JSON.stringify({ title, description, tag }), // Convert data to JSON string
    });
    const json = await response.json();
    console.log(json);
    //logic to edit
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
