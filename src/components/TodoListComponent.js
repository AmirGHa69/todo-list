import React from "react";

function TodoListComponent({ todos, toggleTodo, deleteTodo }) {
    if (todos.length === 0) {
        return <p>No todos</p>;
    }

    return (
        <ul className="list">
            {todos.map((todo) => (
                <li key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        {todo.title}
                    </label>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TodoListComponent;
