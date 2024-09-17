import React from 'react'
import { MdDelete } from "react-icons/md";

const Item = ({item, handleChange, handleDelClick}) => {
  return (
    <li className='item'>
        <div>    
            <input onChange={()=>handleChange(item.id)} type='checkbox' checked={item.checked} />
            <label style={item.checked ? {textDecoration: "line-through"}: null} onDoubleClick={()=>handleChange(item.id)}>{item.item}</label>
        </div>
        <div onClick={()=> handleDelClick(item.id)} className='del-icon'><MdDelete aria-label={`delete ${item.item}`} /></div>
    </li>
  )
}

export default Item