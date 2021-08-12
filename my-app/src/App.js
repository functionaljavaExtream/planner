import React, { Component, useState, useEffect } from 'react';
import './App.css';
import List from "./components/List.jsx"
import Header from "./components/Header"


const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  const changeInputData = (e) => {
    setNewTodo(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { 'title' : newTodo, 'id' : `${todos.length}`, 'status': 'todo'}]);
  }

  // useEffect( () => {
  //   console.log("새로운 내용이 랜더링 되었습니다.", todos)
  // }, [todos])


  const changeTodoStatus = (id) => {
    const updateTodos = todos.map( todo => {
      if(todo.id === id) {
        if(todo.status === "done") todo.status = "todo";
        else todo.status = "done"
      }
      return todo
    })

    setTodos(updateTodos)
  }

  return (
    <>    
      <Header todos={todos}/>
        <form action="">
          <input type="text" name="" onChange={changeInputData}/>
          <button onClick={addTodo}>할일추가</button>
        </form>

    <List todos={todos} changeTodoStatus={changeTodoStatus}/>
    </>
  )
}
export default App;
