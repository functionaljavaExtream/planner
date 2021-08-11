import React, {useState} from "react";
import Item from './Item'

const List = ({todos,changeTodoStatus}) => {
    // const todoList = todos.map( todo => <li key={todo.id}>{todo.title}</li>)
    const todoList = todos.map( todo => 
        <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus}/>
    )

    return(
        <ul>        
         {todoList}
        </ul>
    )

}

export default List;