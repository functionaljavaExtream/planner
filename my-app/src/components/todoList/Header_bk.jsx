import React from "react"
import '../css/Header.css'
import '../css/bulma/css/bulma.min.css';

const Header = ({todos}) => {

    // done이 아닌것만 카운트
    const notDones = todos.filter(todo => todo.status !== 'done')

    return (
        <div className="todolist-header">
            <div className="headerInfo">
                <div className='todo-filter'>
                    <select className='todofilter' name="" id=""></select>
                    <div className="countInfo">
                        you have {notDones.length} todos. Go Ahead
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header