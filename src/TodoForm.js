import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = (props) => {
  const [todoTask, setTodoTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addToTodoList(todoTask);
    setTodoTask("");
  };

  return (
    <>
      <form className="TodoNewForm">
        <label htmlFor="todo">New Todo </label>
        <input
          type="text"
          value={todoTask}
          id="todo"
          onChange={(event) => setTodoTask(event.target.value)}
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
    </>
  );
};

export default TodoForm;
