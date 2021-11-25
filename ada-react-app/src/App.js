import React, { useState, useRef } from 'react'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  
  function handleAddTodo(e){
    const name = todoNameRef.current.value

    setTodos(prevTodos => {
      return [...prevTodos, {name: name, completed: false}]
    })

    todoNameRef.current.value = null
  }

  function handleClearTodos(e){
    setTodos([])
  }
  
  return (
    //This is the component that contains our todo list
    //This can also be written as <TodoList></TodoList>, but we can shorthand it to <TodoList/>
    <>
      <TodoList todoItems = {todos}/>
      <input ref = {todoNameRef} type ="text"/>
      <button onClick = {handleAddTodo}>Add</button>
      <button onClick = {handleClearTodos}>Clear</button>
    </>
  )
}

export default App;
