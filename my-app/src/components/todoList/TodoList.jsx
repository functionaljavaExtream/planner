import React, { Component, useState, useEffect } from 'react';
import '../css/bulma/css/bulma.min.css';
import '../css/TodoList.css';
// import { Button, Form, Field } from 'react-bulma-components';
import List from "./List.jsx"
import Header from "./Header"
const dbReadyurl = 'http://localhost:4000/init'
const dbReady =  (setTodos) => {
  fetch(dbReadyurl,{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'same-origin' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  })
  .then(response => response.json())
  .then(dataArr=>{
    let dbTodos = []
    dataArr.resultData.map(data => {
      const todo = {
        title: '',
        id : ``,
        status: 'todo',
        writer: '',
        todo: '',
        eta: '',
      }
      todo.title = data.todolistTitle
      todo.todo = data.todolistTodo
      todo.eta = data.todolistETA
      todo.writer = data.todolistWriter
      todo.id = data.todolistCd.toString()      
      dbTodos.push(todo)
    })
    setTodos([...dbTodos])
  })

}


const TodoList = () => {


  const [todos, setTodos] = useState([]);

  const todo = {
    title: '',
    id : ``,
    status: 'todo',
    writer: '',
    todo: '',
    eta: '',
  }
  useEffect( () => {
    dbReady(setTodos)
  }, [])


  // 새로 추가될 리스트상태
  const [newTodo, setNewTodo] = useState(todo);

  // 제목에 있는 내용상태
  const [inputTitle, setInputTitle] = useState('');
  const [inputWriter, setInputWriter] = useState('');
  const [inputTodo, setInputTodo] = useState('');
  const [inputETA, setInputETA] = useState('');

  // input태그에 내용이 바뀔때 상태 관리
  const changeInputTitle = (e) => {
    setInputTitle(e.target.value)    
    setNewTodo(newTodo)
  }

  const changeInputWriter = (e) => {
    setInputWriter(e.target.value)
    newTodo.writer= e.target.value
    setNewTodo(newTodo)
  }

  const changeInputTodo = (e) => {
    setInputTodo(e.target.value)
    newTodo.todo= e.target.value
    setNewTodo(newTodo)
  }

  const changeInputETA = (e) => {
    setInputETA(e.target.value)
    newTodo.eta= e.target.value
    setNewTodo(newTodo)
  } 

  // 할일 추가 버튼 눌렀을 때 상태관리  
  const dbfetch =  async (url,data) => {
    const response = await fetch(url,{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'same-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data)// body data type must match "Content-Type" header
    })
    .then(response => response.json())
    return response    
  }

  const addTodo = async (e) => {
    e.preventDefault();

    todo.title = inputTitle
    todo.writer = inputWriter
    todo.todo = inputTodo
    todo.eta = inputETA
 
    const data = {
      title: inputTitle,
      writer: inputWriter,
      todo: inputTodo,
      eta: inputETA
    }

    // DB서버와 연동 가능?
    const url = 'http://localhost:4000/save'

    const result = await dbfetch(url,data)
    if(result.result === 'failure') {
      window.location.href = '/error'
    }
    setTodos([...todos, todo]);
    setInputTitle('')
    setInputWriter('')
    setInputTodo('')
    setInputETA('')
    closeModal()
  }


  // +버튼 눌렀을 때 모달 띄우기
  const openModal = (e) => {
    e.preventDefault();
    const modal = document.getElementById("modal")
    modal.setAttribute('class', 'is-active')    
  }

  // cancel, x버튼 눌렀을 때 모달 끄기
  const closeModal = (e) => {
    if(e) e.preventDefault();
    const modal = document.getElementById("modal")
    modal.setAttribute('class', 'modal')    
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
  const dbDeletefetch =  async (url,data) => {
    const response = await fetch(url,{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'same-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data)// body data type must match "Content-Type" header
    })
    .then(response => response.json())
    return response    
  }
  
  const deleteTodo = async (id) => {
    const deleteUrl = `http://localhost:4000/delete/${id}`
    const dbDeletefetch = (url) => {
      fetch(url,{
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
      })
    }
    todos.map( (todo,index) => {
      console.log(todo.id, 'todo.id')
      console.log(id , 'id')       
      if(todo.id === id) { 
        todos.splice(index,1)
      }
    })
    setTodos([...todos])
    await dbDeletefetch(deleteUrl)
  }

  return (
    <>
    <div className="container">
      <Header todos={todos}/>
      <div className="container">
        <div className="box">
            <form  className='form' action="">
                <div className="column">
                  {/* <input className='input input-length' type="text" name="" value={inputText} onChange={changeInputData}/> */}
                  {/* <button className='button is-primary'  onClick={addTodo}>할일추가</button> */}
                  <button className='button is-primary'  onClick={openModal}>+</button>
                </div>
            </form>
            <List todos={todos} changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo}/>
        </div>
      </div>

      <div className="modal" id="modal">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">할 일</p>
              <button className="delete" aria-label="close" onClick={closeModal} ></button>
            </header>
            <section className="modal-card-body text-left">
              <div className="container">
                <div>
                  <label htmlFor="todoTitle">제목
                    <input className='input' id="todoTitle" type="text" name="" value={inputTitle} onChange={changeInputTitle}/>
                  </label>
                  <label htmlFor="todoWriter">글쓴이
                    <input className='input' id="todoWriter" type="text" name="" value={inputWriter} onChange={changeInputWriter}/>
                  </label>
                  <label htmlFor="todoContent">내용
                    <input className='input' id="todoContent" type="text" name="" value={inputTodo} onChange={changeInputTodo}/>
                  </label>
                  <label htmlFor="todoETA">ETA
                    <input className='input' id="todoETA" type="text" name="" value={inputETA} onChange={changeInputETA}/>
                  </label>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" id='save' onClick={addTodo}>Save changes</button>
              <button className="button" id='cancel'  onClick={closeModal}>Cancel</button>
            </footer>
          </div>
        </div>
    </div>

    </>
  )
}
export default TodoList;
