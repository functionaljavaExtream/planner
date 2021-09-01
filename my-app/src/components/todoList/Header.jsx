import React from "react"
import '../css/Header.css'
import '../css/bulma/css/bulma.min.css';

const Header = ({todos}) => {

    // done이 아닌것만 카운트
    const notDones = todos.filter(todo => todo.status !== 'done')

    return (
        <div className="container">
            <div className="box">
                    <div className="todolist-header">
                        <div className="headerInfo">
                            <div className='todo-filter'>
                                <div className="countInfo">
                                    <h1>you have {notDones.length} todos. Go Ahead</h1>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    )
}

export default Header