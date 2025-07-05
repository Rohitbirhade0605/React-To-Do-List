import React from 'react'
import { useState } from 'react';


const AddTask = ({taskValue, setTaskValue, addToDo, setAddToDo}) => {
  
const handleInput = (e)=> { 
setTaskValue(e.target.value);
};

const handleClickAdd = ()=> {
    if (taskValue.trim() && addToDo.length <= 6) {
      setAddToDo([...addToDo, taskValue.trim()]);
      setTaskValue('');
    } else if (taskValue.trim()) {
         setTaskValue("You've reached the limit. Remove a task to add another.");
    } 
};

const handleKeyAdd = (e)=> {
  if (e.key === "Enter"){
    handleClickAdd();
  }
};

  return (
    <div className='flex flex-col items-center min-h-[10rem] w-[82rem] rounded-[6px] bg-white shadow-md  absolute top-[7rem] left-[7rem]'>

        <input type="text" placeholder='What would you like to do?' maxLength={55} value={`${taskValue}`} onChange={handleInput} onKeyDown={handleKeyAdd}   
            className = {`w-181 h-10 text-[26px] pl-2 mt-8 border-b focus:outline-none placeholder:text-center 
            ${taskValue === "You've reached the limit. Remove a task to add another." ? 'text-red-600 font-semibold' : ''}`} />

        <button  className='w-[8rem] h-[2rem] rounded-[4px] cursor-pointer mt-6 text-[18px] text-white bg-orange-500
           active:bg-orange-600 active:text-[16px]' onClick={handleClickAdd} >  Add 
        </button>

    </div>
  )
}

export default AddTask


