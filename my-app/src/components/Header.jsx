import React from "react"
import './css/Header.css'

const Header = ({todos}) => {
    return (
        <div>
            <h1>Hello Todo Application</h1>
            <div className="countInfo">
                you have {todos.length} todos. Go Ahead
            </div>
        </div>
    )
}

export default Header