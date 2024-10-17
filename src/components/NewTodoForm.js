import React from "react";

function NewTodoForm({ newItem, setNewItem, handleAddTodo }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.trim() === "") return;
        handleAddTodo(newItem);
    };

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                    id="item"
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
            </div>
            <button className="btn" type="submit">
                Add
            </button>
        </form>
    );
}

export default NewTodoForm;
