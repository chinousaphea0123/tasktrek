import React, { useState } from 'react'
import "./TaskForm.css";
import Tag from './Tag.jsx';
const TaskForm = () => {
      const [TaskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
      })
const handleChange = e => {
  const {name, value} = e.target;
  setTaskData((prev) => {
    return { ...prev, [name]: value}
  })
 
}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(TaskData);
  }
  
  

  const selectTag = (tag) => {
  if (taskData.tags.some((item) => item === tag)) {
    const filterTags = taskData.tags.filter((item) => item !== tag);
    setTaskData((prev) => {
      return {...prev, tags: filterTags}
    });
  }else {
    setTaskData((prev) => {
      return {
        ...prev, tags: [...prev.tags,tag]

      };
    });
  }
  }
  
  return (
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            className='task_input'
            placeholder='Enter your task'
            name='task'
            onChange={handleChange}
            />
            <div className='task_form_button_line'>
              <div>
                
                
                <Tag selectTag={selectTag} tagName = "HTML"/>
                <Tag selectTag={selectTag} tagName = "CSS"/>
                <Tag selectTag={selectTag} tagName = "JavaScript"/>
                <Tag selectTag={selectTag} tagName = "React"/>
                
              </div>
              <div>
                <select className='task_status' 
                name='status'
                onChange={handleChange} >
                    <option value="todo">To do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
              </div>
                
                <button type='submit' 
                    className='task_submit'>
                     + Add task
                </button>
            </div>
        </form>
    </header>
  )
}

export default TaskForm
