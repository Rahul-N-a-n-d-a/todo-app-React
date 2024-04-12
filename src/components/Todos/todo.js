import React, { useState } from 'react'
import './todo.css'

function Todo() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  
  return (
    <div className='todo-container col-md-6'>
      <h2 className='heading mb-4'>Todo Lists</h2>
      <div className="input-area mb-4">
        <input className='p-1' type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter todos' />
        <button className='add-btn p-1' onClick={() => {
          setTodos([...todos, {id: Date.now(), task:task}])
          setTask('')
        }
      }>Add</button>
      </div>
      <section className='show-todos'>
        <ul>
          {todos.map((item,index) => {
            return(
              <li key={index}>{item.task} <i onClick={() => {
                setTodos(todos.filter(value => value.id !== item.id))
              }} className="fa-solid fa-trash"></i></li>
            )
          })
        }
        </ul>
      </section>
    </div>
  )
}

export default Todo