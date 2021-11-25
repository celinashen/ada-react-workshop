import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    return (
        //props.todoItems contains all the inputted text items we inputted in our text box
        //For every text item that we create and is added to our todo items array, 
        // we want to create a todo component to put into our todolist

        //
        props.todoItems.map(todo => {
            return <Todo todoText = {todo}/>
        })
    )
}

export default TodoList;