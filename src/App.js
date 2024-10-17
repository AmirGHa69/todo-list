import React, { useState, useEffect } from "react";
import "./style.css";
import Title from "./components/Title";
import NewTodoForm from "./components/NewTodoForm";
import TodoListComponent from "./components/TodoListComponent";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (title) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Date.now(), title, completed: false },
    ]);
    setNewItem("");
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
        currentTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
      <div className="App">
        <Title />
        <NewTodoForm newItem={newItem} setNewItem={setNewItem} handleAddTodo={handleAddTodo} />
        <TodoListComponent todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
  );
}

export default App;
