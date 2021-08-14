import React from 'react'
import './css/Item.css'

const Item = ({todo, changeTodoStatus, deleteTodo}) => {

    const toggleItem = (e) => {
        const id = e.target.parentElement.dataset.id
        changeTodoStatus(id)
    }
    const count = parseInt(todo.id) + 1
    const itemClassName = todo.status === 'done' ? 'done' : ''
    const classNames =`itemCss ${itemClassName}`

    const deleteItem = (e) => {
        const delId = e.target.parentElement.dataset.id
        // console.log(delId)
         deleteTodo(delId)
    }

    return (
        <>
            <li data-id={todo.id} className={classNames}>
                {todo.title}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={toggleItem}>done</button>
                <button onClick={deleteItem}>delete</button>               
            </li>

        </>

    )
}


export default Item;