import React, { useState } from 'react';


export default function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
          delt
        />
        <label className="todo-label"
          htmlFor={props.id}>
          {props.name}
        </label>
        <button type="button" className="btn-delete"
          onClick={() => props.deleteTask(props.id)}>
          X <span className="visually-hidden">{props.name}</span>
        </button>
        <hr />
      </div>
    </li>
  );
}







