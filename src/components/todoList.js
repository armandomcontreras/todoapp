import React, { useState } from 'react';
import TodoForm from './todoForm';

function Todolist() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.text(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos);
    }

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm />
        </div>
    );
}

export default Todolist;
