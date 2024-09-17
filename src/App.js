import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header'
import React, { useState } from 'react';

function App() {

  const [groceryList, setGroceryList]=useState([
    {
        id: 1,
        item: "Pan cake",
        checked: true
    },
    {
        id: 2,
        item: "Chili Oil",
        checked: false
    },
    {
        id: 3,
        item: "Garlic Salad",
        checked: true
    }
  ])

  const handleChange=(id)=>{
      let listItems=groceryList.map((item)=>{
          return (item.id===id ? {...item, checked:!item.checked} : item)
      })
      setGroceryList(listItems);
      localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  }

  const handleDelClick=(id)=>{
      const listItems=groceryList.filter((item)=>item.id!==id )
      setGroceryList(listItems);
      localStorage.setItem("shoppinglist", JSON.stringify(listItems))
  }

  return (
    <div className="App">
      <Header title="Neela" />
      <Content 
      handleChange={handleChange} 
      handleDelClick={handleDelClick} 
      groceryList={groceryList} 
      setGroceryList={setGroceryList} />
      
      <Footer total={groceryList.length} />
    </div>
  );
}

export default App;
