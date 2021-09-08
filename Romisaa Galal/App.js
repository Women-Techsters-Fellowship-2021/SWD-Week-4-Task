import React, {useState, useEffect} from 'react';
import './App.css';
// Importing Components
import Form from "./components/Form";
import todolist from './components/todo-list';
import Todo from './components/Todo';

function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Use Effect
  useEffect(() =>{
    filterHandler();
  }, [todos, status]);

  // Functions
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;


    }
  }

  return (
    <div className="App">
      <header>
        <h1>My To-Do App</h1>
      </header>
      <Form 
        inputText = {inputText} 
        todos = {todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus = {setStatus}
         />

      <todolist filteredTodos = {filteredTodos} setTodos = {setTodos} todos={todos}/>
    </div>
  );
};

export default App;
