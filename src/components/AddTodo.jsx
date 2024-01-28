import { useState } from "react";

function AddTodo({onNewitem}) {

  const [todoName , setTodoName] = useState();
  const [todoDate , setTodoDate] = useState();

  const handleNameChange = (e)=>{
console.log(e.target.value)
setTodoName(e.target.value)
  }

  const handleDateChange = (e)=>{
    setTodoDate(e.target.value)
    console.log(e.target.value)
  }

  const handleAddButton = ()=> {
    onNewitem(todoName,todoDate)
    setTodoName("");
    setTodoDate("")
  }

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">
          <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange}  />
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-success kg-button" onClick={handleAddButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;