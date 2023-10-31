import React, { useState, useEffect } from "react";

export default function ListeTodo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(storedTodos.split(","));
    }
  }, []);

  const addTodo = () => {
    const Tasks = [...todos, input];
    setTodos(Tasks);
    localStorage.setItem("todos", Tasks.join(","));
    setInput("");
  };

  const deleteTodo = (todo) => {
    const Tasks = todos.filter((t) => t !== todo);
    setTodos(Tasks);
    localStorage.setItem("todos", Tasks.join(","));
  };

  return (
    <div>
      <header>
        <h1>My TO Do Liste </h1>
      </header>
      <div className="all">
        <input
        placeholder="Add a task to do"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="button" onClick={addTodo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
              stroke="#fffffff"
              stroke-width="2"
            ></path>
            <path
              d="M17 15V18M17 21V18M17 18H14M17 18H20"
              stroke="#fffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          Add Task to do
        </button>
      </div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo}
          <button onClick={() => deleteTodo(todo)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
}
