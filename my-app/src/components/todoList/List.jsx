import React, {useState} from "react";
import '../css/bulma/css/bulma.min.css';
import Item from './Item'


const List = ({todos,changeTodoStatus,deleteTodo }) => {
    // const todoList = todos.map( todo => <li key={todo.id}>{todo.title}</li>)
    const todoList = todos.map( (todo,index) => 
        <Item key={todo.id} index={index +1} todo={todo} changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo}/>
    )
    
    return(
        <table className='table is-fullwidth'>
            <thead>
                <tr>
                  <th><abbr title="Position">No.</abbr></th>
                  <th>Todo</th>
                  <th><abbr title="writer">Writer</abbr></th>
                  <th><abbr title="ETA">ETA</abbr></th>
                  <th><abbr title="done">Done</abbr></th>
                  <th><abbr title="check">Check</abbr></th>
                  <th><abbr title="delete">Delete</abbr></th>
                </tr>
            </thead>
            <tbody>
              {todoList}
            </tbody>
        </table>        
    )

}

export default List;