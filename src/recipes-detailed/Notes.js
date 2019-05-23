import React from 'react'
import { setLocal } from '../services'

export default function Notes({ id }) {
  const handleSave = (notes, id) => {
    setLocal(`${id}Notes`, notes)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const notes = event.target.notesInput.value
    handleSave(notes, id)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="notes">Here you may take some personal notes: </label>
      <textarea id="notes" name="notesInput" type="text" placeholder="" />
      <button>Save notes</button>
    </form>
  )
}
