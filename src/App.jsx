import React, { useState, useEffect} from 'react'
import TodoList from './components/TodoList'
import AddTask from './components/AddTask'
import Task from './components/Task'
import TasksHeadline from './components/TasksHeadline'

const App = () => {
  
  const [taskValue, setTaskValue] = useState("");

  //UseState that Load tasks from localStorage on startup if not return empty Array
  const [addToDo, setAddToDo] = useState(() => {
  const stored = localStorage.getItem('LocalTask');
  return stored ? JSON.parse(stored) : [];
});


  //UseEffect that Saves tasks to localStorage whenever change detect in addToDo
  useEffect(() => {
    localStorage.setItem('LocalTask', JSON.stringify(addToDo));
  }, [addToDo]);


  return (
    <>
     <TodoList/>
     <AddTask taskValue={taskValue} setTaskValue={setTaskValue}  addToDo = {addToDo} setAddToDo = {setAddToDo}  />   
     <TasksHeadline/>

    {/* Mapped UseState to render Task Component */}
     {addToDo.map((task, index) => (
     <Task key={index} index={index} taskValue={task} setTaskValue={setTaskValue} addToDo={addToDo} setAddToDo={setAddToDo} />   ))}         
    </>
    )
}

export default App

