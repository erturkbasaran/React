import React, { useState, useEffect } from 'react'
import './App.css'
//Importing Components
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  
  //States
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  //Use Effect
  useEffect(() => {
     filterHandler();
  },[todos, status])

  //Functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }
 

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
      inputText={inputText} 
      setInputText={setInputText} 
      todos={todos} 
      setTodos={setTodos} 
      setStatus={setStatus}
      
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>

      <footer>Created by Ertürk - <a href="https://github.com/erturkbasaran"><i className="fab fa-github"></i></a></footer>
    </div>
  )
}

export default App;
