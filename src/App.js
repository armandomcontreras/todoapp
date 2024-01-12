import React from 'react';
import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todolist';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;
