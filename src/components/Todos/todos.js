import React from 'react'
import './todos.css'

function todos() {
  return (
    <div className='todo-container col-md-6'>
      <h2 className='heading mb-4'>Todo Lists</h2>
      <div className="input-area mb-4">
        <input className='p-1' type="text" placeholder='Enter todos'/>
        <button className='add-btn p-1'>Add</button>
      </div>
      <section className='show-todos'>
        <ul>
          <li>item <i className="fa-solid fa-trash"></i></li>
          <li>item <i className="fa-solid fa-trash"></i></li>
        </ul>
      </section>
    </div>
  )
}

export default todos