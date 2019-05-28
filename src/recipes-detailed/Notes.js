import React, { useState } from 'react'
import { getLocal, setLocal } from '../services'

import {
  BoxContainer,
  NotesForm,
  NotesLabel,
  NotesArea,
  Button,
} from './recipeDetailedStyle'

export default function Notes({ id }) {
  const [note, setNote] = useState(getLocal(`${id}Notes`) || '')

  function handleChange(event) {
    setNote(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const notes = event.target.notesArea.value
    handleSave(notes, id)
  }
  const handleSave = (notes, id) => {
    setLocal(`${id}Notes`, notes)
  }

  return (
    <BoxContainer>
      <NotesForm onSubmit={handleSubmit}>
        <NotesLabel htmlFor="notes">Notes: </NotesLabel>
        <NotesArea
          id="notes"
          name="notesArea"
          type="text"
          placeholder="Please insert your notes here ..."
          value={note}
          onChange={handleChange}
        />
        <Button>Save my notes</Button>
      </NotesForm>
    </BoxContainer>
  )
}
