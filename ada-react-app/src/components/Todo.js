import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <label>
                <input type = "checkbox" checked = {props.todoText.complete}/>
                {props.todoText.name}
            </label>
        </div>
    )
}

export default Todo;