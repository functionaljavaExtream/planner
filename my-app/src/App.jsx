import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import TodoList from "./components/todoList/TodoList"
import Dairy from "./components/dairy/dairy"
import Navbar from "./components/navbar/Navbar"
import SideBar from "./components/navbar/SideBar"
import './components/css/bulma/css/bulma.min.css';
import './components/css/App.css';
import './components/css/sidbar.css';


const App = () => {
  return (
    <>
    <div className='App'>
    <Router>
    <SideBar/>
        <Switch>
          <Route path='/dairy'component={Dairy}/>
          <Route path='/' component={TodoList} />
          

        </Switch>
      </Router>   
    </div>
    </>
  )
}
export default App;
