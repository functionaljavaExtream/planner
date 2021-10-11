import React from 'react'
import '../css/Item.css'
import '../css/bulma/css/bulma.min.css';
import '../css/fontawesome/css/all.css';
import Progress from './Progress'
import Check from './Check'

const Item = ({index, todo, changeTodoStatus, deleteTodo}) => {

    
    // const itemClassName = todo.status === 'done' ? 'done' : ''
    // const classNames =`itemCss ${itemClassName}`

    const deleteItem = (e) => {
        const delId = e.target.parentElement.dataset.id
         deleteTodo(delId)
    }

    return (
        <>
            <tr>
                <th>{index}</th>
                <td>{todo.title}</td>
                <td>{todo.writer}</td>
                <td>{todo.eta}h</td>
                <td>
                    <Progress status={todo.status}/>
                </td>
                <td data-id={todo.id}>
                    <Check changeTodoStatus={changeTodoStatus} status={todo.status}/>
                </td>
                <td data-id={todo.id}>                    
                    <button className='button is-danger' onClick={deleteItem}>delete</button>
                </td>
            </tr>
        </>

    )
}


export default Item;