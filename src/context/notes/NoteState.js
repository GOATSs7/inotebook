import NoteContext from "./noteContext";

const NoteState = (props) => {
  // creat another state

  return (
    <NoteContext.Provider value={{}}>{props.children}</NoteContext.Provider>
  );
};
export default NoteState;
