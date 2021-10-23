import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import TodoList from "./components/todoList/TodoList"
import Dairy from "./components/dairy/dairy"
import ErrorPage from "./components/error/Error"
import Navbar from "./components/navbar/Navbar"
import SideBar from "./components/navbar/SideBar"
import './components/css/bulma/css/bulma.min.css';
import './components/css/App.css';
import './components/css/sidbar.css';




const App = () => {
  // 할일 리스트상태
 
  return (
    <>
    <div className='App'>
    <Router>
    <SideBar/>
        <Switch>
          <Route path='/dairy' component={Dairy}/>
          <Route path='/error' component={ErrorPage}/>
          {/* <Route path='/' render={(result) => (<TodoList data={result} />)}/> */}
          <Route path='/' component={TodoList}/>
          

        </Switch>
      </Router>   
    </div>
    </>
  )
}
export default App;
