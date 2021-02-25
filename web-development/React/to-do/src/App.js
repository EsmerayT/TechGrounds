import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import Todo from './Components/Todo/Todo'
import Form from './Components/Todo/Form'
import {nanoid} from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    })
    setTasks(updatedTasks);
    console.log(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.map(task => (
  <Todo
  id={task.id}
  name={task.name}
  completed={task.completed}
  key={task.id}
  toggleTaskCompleted={toggleTaskCompleted}
  deleteTask={deleteTask}
  />
  )
  );

  function addTask(name) {
    const newTask = {id:"todo-" + nanoid(), name: name, completed: false};
    setTasks([...tasks, newTask]);
  }

  return (

    <div className="todoapp stack-large">
          <Calendar />
      <Form addTask={addTask} />
      {/* <h1>ToDolist</h1> */}
 
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      {taskList}
      </ul>
      </div>
  );
}

export default App;
