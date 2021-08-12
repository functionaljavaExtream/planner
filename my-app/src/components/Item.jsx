import React from 'react'
import './css/Item.css'

const Item = ({todo, changeTodoStatus, todos}) => {

    const toggleItem = (e) => {
        const id = e.target.parentElement.dataset.id
        changeTodoStatus(id)
    }
    const count = parseInt(todo.id) + 1

    const itemClassName = todo.status === 'done' ? 'done' : ''
    const classNames =`itemCss ${itemClassName}`
    return (
        <>
            <div data-id={todo.id} className={classNames}>
                {count}.&nbsp;&nbsp;
                {todo.title}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={toggleItem}>done</button>
                <button>delete</button>               
            </div>

        </>

    )
}


export default Item;