import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import List from './components/List';

function App() {

  const [todo, setTodo] = useState(''); //state for todo items
  const [list, setList] = useState([]); //state for list array of todos
  const [isEditing, setIsEditing] = useState(false); //edit mode state
  const [editID, setEditID] = useState(null); //edit id state
  const [alert, setAlert] = useState({
    showAlert: false,
    message: ''
  }); //state for setting up alert message

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!todo) {
      //when input is not filled show warning
      setAlert({showAlert:true, message: 'Please fill the input field!'})
    }
    else if (todo && isEditing) {
      //when on edit mode, set list item to edited item
      setList(
        list.map((item) => {
          //if id of item equals id of editID, replace text
          if (item.id === editID) {
            return { ...item, title: todo };
          }
          return item;
        })
      )
      //once edit has been done
      setTodo(''); //clear field
      setEditID(null); //reset id to default
      setIsEditing(false); //set it back to not editing
    }
    else {
      //add item to list
      // created a new item object
      const newItem = { id: new Date().getTime().toString(), title: todo, completed:false };
      setList([...list, newItem]); //add item object to exisiting list
      setTodo(''); //clear input field
      setAlert({showAlert: false, message:''}); //alert message empty
    }
  }

  // edit item function
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id); //if item is clicked
    setIsEditing(true); //edit mode is set to true/on
    setEditID(id); //id that will be used to access edit item and edit
    setTodo(specificItem.title); //edit title
  }
  
  // complete item function
  //wanted to find out though if I wanted to toggle between true and false on the todo completed property, how would I go about it
  const completedItem = (id) => {
    const itemCompleted = list.map((item) => {
      //if id matches, set completed to true
      if (item.id === id) {
        return { ...item, completed: true };
      }
      return item;
    });
    setList(itemCompleted); //update list to item completed 
  }

  return (
    <main>
      <section className="section-form">
        <h1>To-Do App</h1>

        <form onSubmit={handleSubmit}>
          
          {/* whether to show alert message or not */}
          {alert.showAlert ? <Alert message={alert.message} /> : ''}
        
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder='to-do item'
          />
          {/* if editing, set btn to edit else save */}
          <button type="submit" className="save-btn">{ isEditing ? 'edit' : 'save'}</button>
        </form>
      </section>
      <section className="section-list">
        {/* props to push to List component */}
        <List todos={list} editItem={editItem} completedItem={completedItem} />
      </section>
    </main>
  )  
}

export default App;