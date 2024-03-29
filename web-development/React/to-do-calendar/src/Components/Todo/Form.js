import React, { useState } from 'react';

function Form(props) {
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    function handleChange(e) {
        setName(e.target.value);
    }
    return (

        <form onSubmit={handleSubmit}>

            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    ToDoList
          </label>
            </h2>

            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />

            <br />
            <button type="submit" className="btn">
                Add task to my ToDoList
        </button>
        </form>
    );
}

export default Form;