import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    const handleAddTodo = () => {
        if (task.trim() !== '') {
            setTodos([...todos, task]);
            setTask('')
        }
    }

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }
    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={handleAddTodo}>Add Task</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default Todo