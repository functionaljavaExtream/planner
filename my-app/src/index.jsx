import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = "Ki"
const ele =   <h1>Hello, {name}</h1>;
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  ele,
  document.getElementById('root')
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
