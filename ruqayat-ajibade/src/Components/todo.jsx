import React from 'react';

import '../Styles/todo.css';


function Todo({text, todo, todos, setTodos, inputText, todoEditingText, setTodoEditingText}) {

    // This function handles the completed checkbox and sets completed to true
    function CheckboxHandler() {
       setTodos(todos.map((item) => {
           if(item.id === todo.id) {
                return{
                    ...item, completed: !item.completed,
                }
           } 
           return item;
        })
        );
    };
    // This function edits the text in the todos array
    function EditHandler() {
        alert('Hi')

    }

        // This removes the item that is clicked 
    function DeleteHandler() {
        console.log('Hi')
        setTodos(todos.filter((item) => item.id !== todo.id));

    }

    return (
        <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <p>{text}</p>
            <input className="complete-btn" type="checkbox" onClick={CheckboxHandler} /> 
            <input className="item-btn" type="submit" value="Edit" onClick={EditHandler} />
            <input className="item-btn" type="submit" value="Delete" onClick={DeleteHandler} />
        </li>
        </div>
    )
}

export default Todo;

