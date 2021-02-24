import React from 'react'
import './App.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


function App(props) {
  return (
    <div className="todoapp stack-large">
      <Calendar />
      <h1>Todolist</h1>
      <form>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
      </form>
      <button type="submit" className="btn btn__primary btn__lg">
        Add task to my ToDolist
        </button>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Huiswerk
            </label>
            <button type="button" className="btn btn__danger">
              X <span className="visually-hidden"></span>
            </button>
          </div>
        </li>


        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Schoonmaken
            </label>
            <button type="button" className="btn btn__danger">
              X <span className="visually-hidden"></span>
            </button>
          </div>
        </li>


        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Toneelspelen
            </label>
            <button type="button" className="btn btn__danger">
              X <span className="visually-hidden"></span>
            </button>
          </div>
        </li>


        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Slapen
            </label>
            <button type="button" className="btn btn__danger">
              X <span className="visually-hidden"></span>
            </button>
          </div>
        </li>


        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Test
            </label>
            <button type="button" className="btn btn__danger">
              X <span className="visually-hidden"></span>
            </button>
          </div>
        </li>




        {/* <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li> */}
      </ul>
    </div>
  );

}

export default App;
