import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {

  const initialtodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  const [todoItems , setTodoItems] = useState(initialtodoItems);
  const handleNewItem = (itemName , itemDate) => {  
console.log(`new item added ${itemName} and due date is ${itemDate}`)
const newTodoItems = [...todoItems,{  name: itemName,
dueDate:itemDate}]
setTodoItems(newTodoItems)
  }
 
  const handleDltBtn = (dltName)=>{
    let newValAfterDlt = todoItems.filter((val) => val.name!==dltName) 
  // console.log(newValAfterDlt)
  setTodoItems(newValAfterDlt)
  }
    
  


  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewitem = {handleNewItem}/>
     {todoItems.length === 0  && <WelcomeMessage></WelcomeMessage>}  
      <TodoItems todoItems={todoItems} onClickDltBtn = {handleDltBtn}></TodoItems>
    </center>
  );
}

export default App;