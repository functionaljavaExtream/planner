import React, { Component, useState, useEffect } from 'react';

import TodoList from "./components/todoList/TodoList"
import Navbar from "./components/navbar/Navbar"
import './components/css/App.css';


const App = () => {
  return (
    <>
    <div className='App'>    
      <TodoList/>
    </div>
    </>
  )
}
export default App;
