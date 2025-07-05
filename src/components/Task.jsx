import React from 'react'
import { useState } from 'react';

// React icons 
import { RiDeleteBinLine } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { FaRegCircle } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineFileDownloadDone } from "react-icons/md";


const Tasks = ({taskValue, setTaskValue, addToDo, setAddToDo, index}) => {


const [isEditing, setIsEditing] = useState(false);
const [editValue, setEditValue] = useState(taskValue);
const [toggleTask, setToggleTask] = useState(false);


const taskComplete = ()=> {
     setToggleTask(!toggleTask);
  };


const handleEdit = ()=> {
  setIsEditing(true);
  setEditValue(taskValue); 
};


const handleSave = () => {
  if (editValue.trim()) {
     const newTasks = [...addToDo];
     newTasks[index] = editValue.trim();
     setAddToDo(newTasks);
     setIsEditing(false);
  };
 };


const handleKeys = (e) => {

  if (e.key === 'Escape') {
     setIsEditing(false);
  }

  if (e.key === 'Enter') {s
      handleSave();
  }
};


const handleDelete = (index)=> {
 setAddToDo( (prev) => prev.filter((_,i) => i !== index ));
 setTaskValue('');
};


return (
  <div className='h-11 w-326 bg-white flex justify-center relative left-[7.2rem] bottom-[23.3rem] border-b border-gray-300 mb-2 pt-2.5 pr-43'>

        <div> 

            <button onClick={taskComplete}>
              { toggleTask ? ( <IoCheckmarkCircle className='h-[24px] w-[22px] inline stroke-amber-600 fill-green-500 cursor-pointer'/> ) 
              : <FaRegCircle className='h-5.5 w-5.5 inline cursor-pointer ' /> }
            </button>

        </div>

        <div className="font-Merriweather mx-17 relative left-[10rem] "> 

          {/* Logic to show input for edit or basic h1 with final input  */}
          { isEditing ? (<input value={editValue} onChange={(e) => setEditValue(e.target.value)} onKeyDown={handleKeys}
             autoFocus maxLength={65} className='w-120 h-6 border-none focus:outline-none '/> 
            ) : <h1 className= { `w-120 h-8 ${toggleTask && "line-through decoration-gray-600 text-gray-600"}`} > 
                  {taskValue}
                </h1> }
                
        </div>

        <div className="relative left-[10rem]">   
  
          {/* Handles the Input that gets sent to taskvalue through handleSave */}
          { isEditing ? ( <button onClick={handleSave}> <MdOutlineFileDownloadDone className='inline h-5.5 w-5.5 mr-2 fill-green-500 cursor-pointer' /> </button> 
          ) : <button onClick={handleEdit}>  <TbEdit className='inline stroke-gray-500 h-5.5 w-5.5 mr-2 cursor-pointer'/>  </button> }
          
           {/* Handle Delete */}
          <button onClick={ ()=> handleDelete(index)}> <RiDeleteBinLine className='inline fill-red-500 h-5.5 w-5.5 cursor-pointer' /> </button>

        </div>

  </div>
)
 }   

export default Tasks

