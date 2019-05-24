import React, { useState, useEffect } from 'react'
import { getLocal, setLocal } from '../services'

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="notes">Here you may take some personal notes: </label>
      <textarea
        id="notes"
        name="notesArea"
        type="text"
        placeholder=""
        value={note}
        onChange={handleChange}
      />
      <button>Save notes</button>
    </form>
  )
}
