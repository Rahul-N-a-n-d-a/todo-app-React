import React, { useEffect, useState } from 'react'
import './todo.css'

function Todo() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [completedTodos, setCompletedTodos] = useState([])
  const handleAddTodo = () => {
    if (task === '') {
      alert('No todos entered')
    } else {
      setTodos([...todos, { id: Date.now(), task: task }])
      setTask('')
    }
  }
  const handleShowTodos = () => {
    return (
      <ul>
        {todos.map((item, index) => {
          return (
            <li className='p-1' key={index}>{item.task} <i onClick={() => {
              setCompletedTodos([...completedTodos, item])
              setTodos(todos.filter(value => value.id !== item.id))
            }} className="fa-solid fa-check ms-auto me-3"></i>
              <i onClick={() => {
                setTodos(todos.filter(value => value.id !== item.id))
              }} className="fa-solid fa-trash"></i></li>
          )
        })
        }
      </ul>
    )
  }
  const showCompletedTodos = () => {
    return (
      <ul>
        {completedTodos.map((item, index) => {
          return (
            <li className='p-1' key={index}>{item.task} <i onClick={() => {
              setCompletedTodos(completedTodos.filter(value => value.id !== item.id))
            }} className="fa-solid fa-trash"></i></li>
          )
        })
        }
      </ul>
    )
  }
  useEffect(() => {
    setCompleted(false)
  }, [])
  

  return (
    <div className='todo-container col-md-6'>
      <h2 className='heading mb-4'>Todo Lists</h2>
      <div className="input-area mb-4">
        <input className='p-1' type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter todos' />
        <button className='add-btn p-1' onClick={() => handleAddTodo()}>Add</button>
      </div>
      <section className='show-todos'>
        <div className="todo-btns">
          <button className={`show-todo-btn ${completed === false ? 'btn-clicked' : ''}`} onClick={() => {setCompleted(false);handleShowTodos()}}>Active Todos</button>
          <button className={`show-todo-btn ${completed === true ? 'btn-clicked' : ''}`} onClick={() => {setCompleted(true); showCompletedTodos()}}>Completed Todos</button>
        </div>
        <div className="display-todos">
          {completed ? showCompletedTodos() : handleShowTodos()}
        </div>
      </section>
    </div >
  )
}

export default Todo;