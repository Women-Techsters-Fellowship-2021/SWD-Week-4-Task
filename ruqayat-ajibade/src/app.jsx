import './app.css';

import {useState} from 'react';
import Form from './Components/todo-form';
import TodoList from './Components/todo-list';


function App() {

	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [todoEditingText, setTodoEditingText] = useState("");

  return (
	<div className="App" >
		<h1>My Todo List</h1>
		<Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}  />
		<TodoList todos={todos} setTodos={setTodos}
		 todoEditingText={todoEditingText} setTodoEditingText={setTodoEditingText} />
		
	</div>
  );
};

export default App;


