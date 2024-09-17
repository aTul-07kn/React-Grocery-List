import ListItem from "./ListItem";

const Content = ({groceryList, setGroceryList, handleChange, handleDelClick}) => {
    return (
        <div className='content'>
            {/* {groceryList.length ? 
                (<ListItem 
                    groceryList={groceryList} 
                    handleChange={handleChange} 
                    handleDelClick={handleDelClick}
                    setGroceryList={setGroceryList} />) 
                : 
                (
                    
                    <p style={{fontSize: "1.5rem", color: "tomato"}}>Your list is empty..</p>
                )
            } */}
            <ListItem 
                    groceryList={groceryList} 
                    handleChange={handleChange} 
                    handleDelClick={handleDelClick}
                    setGroceryList={setGroceryList} />
        </div>
    )
}

export default Content