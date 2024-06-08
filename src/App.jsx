import TaskForm from './components/TaskForm.jsx';

import React from 'react'
import "./App.css";
import TaskColumn from './components/TaskColumn.jsx';

import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const App = () => {
  return (
    <div className='app'>
        <TaskForm/>
        <main className='app_main'>
            <TaskColumn icon={todoIcon} title="To do"/>
            <TaskColumn icon={doingIcon} title="Doing"/>
            <TaskColumn icon={doneIcon} title="Done"/>
            
        </main>
    </div>
  )
}

export default App
