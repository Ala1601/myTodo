import { useState } from "react";

import { Header} from "./components/Header"; 
import { AddTask} from "./components/AddTask"; 

import { Task} from "./components/Task"; 
import "./App.css";
function App() {
  const [tasks,setTasks]=useState([])
  const [myTask,setMyTask]=useState([])
  const [edited,setEdited]=useState(0)
  return(
  <div className="container">
    <Header />
    <AddTask tasks={tasks} setTasks={setTasks} myTask={myTask} setMyTask={setMyTask} edited={edited} setEdited={setEdited}/>
    <Task tasks={tasks} setTasks={setTasks}  myTask={myTask} setMyTask={setMyTask} edited={edited} setEdited={setEdited}/>
  </div>
  )
}

export default App;
