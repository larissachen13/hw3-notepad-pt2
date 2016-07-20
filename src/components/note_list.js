import React from 'react';
import Note from './note';

const NoteList = (props) => {
  const noteItems = props.notes.entrySeq().map(([id, note]) => {
    return <Note note={note} id={id} key={id} onTextChange={props.onTextChange} />;
  });

  return (
    <ul>
       {noteItems}
    </ul>
  );
};

export default NoteList;