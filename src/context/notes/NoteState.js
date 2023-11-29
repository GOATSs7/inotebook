import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const noteInitial = [
    {
      _id: "6564936ad53cg8e172cdb52a6",
      user: "6564473802e2de287740ec3e",
      title: "my title",
      description: "please this is my is note xcvb",
      tag: "personal",
      date: "2023-11-27T13:02:34.043Z",
      __v: 0,
    },
    {
      _id: "6566d5aee6d65b60fd937dc01",
      user: "6564473802e2de287740ec3e",
      title: "my title",
      description: "please this is my is note  cd xcvb",
      tag: "personal",
      date: "2023-11-29T06:09:50.915Z",
      __v: 0,
    },
    {
      _id: "6566d5b9e66x5b60fd937dc03",
      user: "6564473802e2de287740ec3e",
      title: "my titledd dc",
      description: "please this is my is note  cd xcvb",
      tag: "personal",
      date: "2023-11-29T06:10:01.666Z",
      __v: 0,
    },
    {
      _id: "6566d5bfe66d5b6v0fd937dc05",
      user: "6564473802e2de287740ec3e",
      title: "my titledd dc",
      description: "please  ddvg this is my is note  cd xcvb",
      tag: "personal",
      date: "2023-11-29T06:10:07.035Z",
      __v: 0,
    },
    {
      _id: "6566d5c2e665b60fvd937dc07",
      user: "6564473802e2de287740ec3e",
      title: "my titledd dc",
      description: "please  ddvg this  dccis my is note  cd xcvb",
      tag: "personal",
      date: "2023-11-29T06:10:10.391Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(noteInitial);
  //Add Note function
  const addNote = (title, description, tag) => {
    const note = {
      _id: "6566d5c2e665b60fvd937dc07",
      user: "6564473802e2de287740ec3e",
      title: title,
      description: description,
      tag: tag,
      date: "2023-11-29T06:10:10.391Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete Note function
  const deleteNote = () => {};
  //Edit Note function
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
