import React, { Component, useState, useEffect } from 'react';
import '../css/bulma/css/bulma.min.css';
import '../css/TodoList.css';
// import { Button, Form, Field } from 'react-bulma-components';
import List from "./List.jsx"
import Header from "./Header"


const TodoList = () => {

  // 할일 리스트상태
  const [todos, setTodos] = useState([]);

  // 새로 추가될 리스트상태
  const [newTodo, setNewTodo] = useState();

  // input태그에 있는 내용상태
  const [inputText, setInputText] = useState();

  // input태그에 내용이 바뀔때 상태 관리
  const changeInputData = (e) => {
    setInputText(e.target.value)
    setNewTodo(e.target.value)
  }

  // 할일 추가 버튼 눌렀을 때 상태관리
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { 'title' : newTodo, 'id' : `${todos.length}`, 'status': 'todo'}]);
    setInputText('')
  }

  // useEffect( () => {
  //   console.log("새로운 내용이 랜더링 되었습니다.", todos)
  // }, [todos])

  // 할일 리스트의 done 버튼을 눌렀을 때 상태관리
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


  // 할일 리스트의 delete 버튼을 눌렀을 때 상태관리
  const deleteTodo = (id) => {
     todos.map( (todo,index) => {
      if(todo.id === id) {
        todos.splice(index,1)
      }
    })
    setTodos([...todos])
  }

  return (
    <>    
      <Header todos={todos}/>
      <div className="container">
        <div className="box">
            <form  className='form' action="">
                <div className="column">
                  <input className='input input-length' type="text" name="" value={inputText} onChange={changeInputData}/>
                  <button className='button is-primary'  onClick={addTodo}>할일추가</button>
                </div>
            </form>
            <List todos={todos} changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo}/>
        </div>
      </div>



    </>
  )
}
export default TodoList;
