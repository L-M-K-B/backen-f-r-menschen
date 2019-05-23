import React from 'react'

export default function Notes({ onSave }) {
  function handleSubmit(event) {
    event.preventDefault()
    const notes = event.target.notesInput.value
    onSave(notes)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="notes">Here you may take some personal notes: </label>
      <textarea id="notes" name="notesInput" type="text" placeholder="" />
      <button type="button">Save notes</button>
    </form>
  )
}
