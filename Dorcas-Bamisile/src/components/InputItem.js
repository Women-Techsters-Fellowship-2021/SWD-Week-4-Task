import React from 'react'
import './InputItem.css'
import ListItems from './ListItems';

class InputItem extends React.Component {
    constructor(props) {
      super(props);
      // define state
      this.state={
        items:[],
        currentItem:[
          {
          name:'',
          key:''
          },{
          email:'',
          key:''
          }, {
          age:'',
          key:''
          }
        ]
      }
      // binding the method to the constructor
      this.handleInput = this.handleInput.bind(this);
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.setUpdate = this.setUpdate.bind(this);
    }
  //  define handleInput method
    handleInput(e) {
      this.setState({
        currentItem:[
          {
          text: e.target.value,
          key:'name'
          }, {
            email: e.target.value,
            key:'email'
          }, {
            age: e.target.value,
            key:'age'
          }
        ]
      })
    }
  
  
  // Add item method
    addItem(e) {
      // prevent the page from refreshing
      e.preventDefault();
      const newItem = this.state.currentItem;
      console.log(newItem);
      //check if input is not empty
      if(newItem.name!=="" || newItem.email!=="" || newItem.age!=="") {
        const newItems = [...this.state.items, newItem];
        this.setState({
          items:newItems,
          currentItem: [
            {
              name:'',
              key:''
            }, {
              email:'',
              key:''
            }, {
              age: '',
              key: ''
            }
          ]
        })
      }
    }
  
    deleteItem(key) {
      const filteredItems = this.state.items.filter(item => 
        item.key!==key);
        this.setState({
          items:filteredItems
        })
    }
  
    setUpdate(name, email, age, key) {
      const items = this.state.items;
      items.map(item =>{
        if(item.key===key){
          item.name=name;
        }
      })
      this.setState({
        items: items
      })
    }
  
    render(){
      return (
        <div className="App">
          <header>
            {/* To do form */}
            {/* handleInput{ text:"Enter input" key"} */}
            <form id="form" onSubmit={this.addItem}>
              {/* link input field to the current item */}
              <input type="text" placeholder="Firstname and Lastname" value={this.state.currentItem.name} onChange={this.handleInput}></input>
              <input type="email" placeholder="Email"  value={this.state.currentItem.email} onChange={this.handleInput}></input>
              <input type="number" placeholder="Age"  value={this.state.currentItem.age} onChange={this.handleInput}></input>
              {/* Add button */}
              <button type="submit">Add</button>
            </form>
          </header>
          <ListItems items = {this.state.items} 
           deleteItem = {this.deleteItem}
           setUpdate = {this.setUpdate}
          ></ListItems>
        </div>
      );
    }
  }


export default InputItem