import React from "react";

export const Task = ({tasks,setTasks,myTask,setMyTask,edited,setEdited}) => {
 
  const handleEdit = (id) => {
    const selectedTask = tasks.find(task => task.id === id);
    setMyTask(selectedTask.name);
    setEdited(selectedTask.id)
    
  }

  const handleDelete =(id)=>{
    const newTask=tasks.filter(task =>task.id !== id)
    setTasks(newTask)
  }
  return (
    <div className="showTask">
      <p className="head">
        <span>
          <span className="title">Todo</span>
        </span>
        <span className="clearAll" onClick={()=>setTasks([])} >Clear All</span>
      </p>
      <ul>
        {tasks.map( (task)=>(
        <li key={task.id}>
          <p>
            <span className="name">{task.name}</span>
            <span className="time">{task.time}</span>
          </p>
          <i className="bi bi-pencil-square" onClick={()=>handleEdit(task.id)}></i>
          <i className="bi bi-trash" onClick={() => handleDelete(task.id)} ></i>
        </li>))}
      </ul>
    </div>
  );
};
