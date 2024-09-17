import React from 'react'
import { MdAddBox } from "react-icons/md";

const AddItem = ({newItem, setNewItem, handleSubmit}) => {

  return (
    <form className='addForm item' onSubmit={handleSubmit}>
        <input 
        type="text"
        id='itemInput'
        placeholder='Add Item'
        required 
        autoFocus 
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        />
        <button type="submit"><MdAddBox id='add-btn' aria-label='add item' /></button>
    </form>
  )
}

export default AddItem