import '../Styles/todo-list.css';

import Todo from './todo';

// This imports the todos array and the states
function TodoList({todos, setTodos}) {
    // This returns a ul which is populated by the a list item created for every todo inputed
    return (

       <div className="todo-list-container">
            <ul className="todo-list">
               {todos.map((todo) => (
                   <Todo text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} todo={todo}/>
               ))}
            </ul>
        </div>
    );
};

export default TodoList;