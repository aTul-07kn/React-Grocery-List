import React, { useState } from 'react'
import Item from "./Item"
import AddItem from './AddItem'

const ListItem = ({groceryList, handleChange, handleDelClick, setGroceryList}) => {

    const addItem=(newItem)=>{
        const itemObj={
            id: groceryList.length ? groceryList[groceryList.length-1].id+1 : 1,
            item: newItem,
            checked:false
        }
        console.log(groceryList.length)
        console.log(itemObj)
        const listItems=[...groceryList, itemObj];
        setGroceryList(listItems);
        localStorage.setItem("shoppinglist", JSON.stringify(listItems));
    }

    const [newItem, setNewItem] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        addItem(newItem);
        setNewItem("");
    }

  return (
    <ul type="none" className='container'>
        <AddItem 
        newItem={newItem} 
        setNewItem={setNewItem} 
        handleSubmit={handleSubmit} />
        {
            groceryList.length ? (
                groceryList.map((item)=>{
                    return(
                        <Item 
                        item={item} 
                        handleChange={handleChange} 
                        handleDelClick={handleDelClick} 
                        key={item.id}/>
                    )
                })
            )
            :
            (
                <p style={{fontSize: "1.5rem", color: "tomato"}}>Your list is empty..</p>
            )
        }
    </ul>
  )
}

export default ListItem