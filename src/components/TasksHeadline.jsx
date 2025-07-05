import React from 'react'

const TasksHeadline = () => {
  return (

    <div className='h-99 w-327 rounded-[8px] bg-white shadow-2xl absolute top-[18rem] left-[7.1rem]' >
        
        <div className='h-8 w-327 bg-gray-100 text-gray-500 font-semibold absolute top-[1rem] flex items-center'>
           <span className='ml-50'>Complete</span>
           <span className='ml-50'>List</span>
           <span className='ml-130'>Edit/Delete</span>
        </div>

    </div>
  )
}

export default TasksHeadline