import React from "react";

export const AddTask = ({tasks,setTasks ,myTask,setMyTask,edited,setEdited}) => {
  
  const handelSubmit=(event)=>{
  if (edited){
    event.preventDefault();
    const date = new Date();
    const selectedTask = tasks.find(task => task.id === edited);
    const updateTask = tasks.map((e) => (e.id === selectedTask.id ? (e = {id: e.id, name: myTask, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}) : {id: e.id, name: e.name, time: e.time}));
    setEdited(0);
    setTasks(updateTask)
    setMyTask("");
    return;
  }
 if (myTask){
  event.preventDefault();
  const date = new Date()
  const newTask = {id:date.getTime(),name:event.target.task.value,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}
  setTasks([...tasks,newTask])
  
  setMyTask("");
}}
  return (
    <div className="addTask">
      <form onSubmit={handelSubmit} >
        <input type="text" value={myTask} name="task" placeholder="Add Task" onChange={(e) => setMyTask(e.target.value)}></input>
        <button>{edited ? "Update" :"Add"}</button>
      </form>
    </div>
  );
};
