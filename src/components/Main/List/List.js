import React, { useState } from "react";

import "./List.scss";

const List = () => {
  const todos1 = {
    todos: [
      { todo: "Make breakfast", done: false },
      { todo: "Go to bed", done: false },
      { todo: "Go to bed", done: false },
      { todo: "Go to bed", done: false },
      { todo: "Go to bed", done: false }
    ]
  };
  const [todos, setTodos] = useState(todos1.todos);
  const handleDone = (index, e) => {
    let todo = todos[index];
    console.log("Before:", todos);
    todo.done = !todos[index].done;
    console.log("After:", todos);
    let newTodo = [...todos];
    console.log(todos);
    console.log("NewTodo:", newTodo);
    setTodos(newTodo);
    if (todo.done === true) {
      e.target.parentElement.firstElementChild.style.textDecoration =
        "line-through";
      e.target.textContent = "Undone";
    } else {
      e.target.parentElement.firstElementChild.style.textDecoration = "none";
      e.target.textContent = "Done";
    }
  };

  const handleDelete = (index, e) => {
    const filteredTodos = todos.filter(todo => {
      console.log(todos.indexOf(todo), index);
      return todos.indexOf(todo) !== index;
    });
    console.log("Filtered Todos:", filteredTodos);
    setTodos(filteredTodos);
  };

  const todoList = todos.map((todo, index) => {
    console.log("todo", todos);

    return (
      <div className="list-item">
        <p key={index} id="todo">
          {index + 1 + "- \t " + todo.todo}
        </p>
        <p
          id="done"
          onClick={e => {
            handleDone(index, e);
          }}
        >
          Done
        </p>
        <p
          id="delete"
          onClick={e => {
            handleDelete(index, e);
          }}
        >
          Delete
        </p>
      </div>
    );
  });

  return <div className="list">{todoList}</div>;
};

export default List;
