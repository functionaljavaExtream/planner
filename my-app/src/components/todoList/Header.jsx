import React from "react"
import '../css/Header.css'

const Header = ({todos}) => {

    // done이 아닌것만 카운트
    const notDones = todos.filter(todo => todo.status !== 'done')

    return (
        <div>
            <a>home</a>
            <h1>Hello Todo Application</h1>
            <div className="countInfo">
                you have {notDones.length} todos. Go Ahead
            </div>
        </div>
    )

        // done이 아닌것만 카운트

//         return (
//             <div>
//                 <h1>Hello Todo Application</h1>
//             </div>
//         )
}

export default Header