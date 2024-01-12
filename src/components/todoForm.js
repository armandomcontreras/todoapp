import React, { useState } from 'react'

function todoForm() {
    const [input, setInput] = useState('');

  return (
    <div>
          <form className="todo-form">
              <input
                  type='text'
                  placeholder='add a todo'
                  value={input}
                  name='text'
                  className='todo-input'
              />
              <button className='todo-button'>Add todo</button>
      </form>
    </div>
  )
}

export default todoForm
