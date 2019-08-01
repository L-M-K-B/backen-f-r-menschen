import React, { useState } from 'react';
import { getLocal, setLocal } from '../services';

import {
  NotesForm,
  NotesLabel,
  NotesArea,
  Button,
} from './recipeDetailedStyle';
import { BoxContainer } from '../common/containerStyles';

export default function Notes({ id }) {
  const [note, setNote] = useState(getLocal(`${id}Notes`) || '');

  function handleChange(event) {
    setNote(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const notes = event.target.notesArea.value;
    setLocal(`${id}Notes`, notes);
  }

  return (
    <BoxContainer>
      <NotesForm onSubmit={handleSubmit}>
        <NotesLabel htmlFor="notes">Notes: </NotesLabel>
        <NotesArea
          id="notes"
          name="notesArea"
          placeholder="Please insert your notes here ..."
          value={note}
          onChange={handleChange}
        />
        <Button>Save my notes</Button>
      </NotesForm>
    </BoxContainer>
  );
}
