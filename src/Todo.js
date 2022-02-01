import React, { useState } from "react";
import "./Todo.css";

const Todo = (props) => {
  const { todo, id } = props.todoObj;
  const [editTodo, setEditTodo] = useState(todo);

  const [isActive, setIsActive] = useState(false);

  const editForm = (
    <input
      className="Todo-edit-form"
      type="text"
      value={editTodo}
      onChange={(event) => setEditTodo(event.target.value)}
    />
  );

  const handleApply = (event) => {
    setIsActive(!isActive);
    props.editTodoList(id, editTodo);
  };

  const handleDelete = () => {
    props.deleteTodoList(id);
  };

  const applyFormButton = <button onClick={handleApply}>Apply</button>;

  return (
    <>
      <div className="Todo">
        {isActive ? (
          <div className="Todo-edit-form">
            {editForm}
            {applyFormButton}
          </div>
        ) : (
          <>
            <h4>{editTodo}</h4>
            <div className="Todo-buttons">
              <button onClick={() => setIsActive(!isActive)} name="edit">
                Edit
              </button>
              <button onClick={handleDelete} name="delete">
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Todo;
