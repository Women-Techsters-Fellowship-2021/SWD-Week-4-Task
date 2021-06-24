import React from 'react';
import Todo from './Todo';

class Form extends React.Component{
    //handling input value and adding items to list
    constructor(props) {
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
        //bind the 'this' keyword separatelyto the constructor
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    //function to handle the text entered in the input field and store it in an object variable
    handleInput(e){
        this.setState({
            currentItem:{
                text: e.target.value,
                key:Date.now()
            }
        })
    }

    //items in object variable is then added to a list of array
    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        //console.log(newItem);
        if (newItem.text !== "") {
            //destructuring assignment -first parameter unpacks the items in the list and converts them into individual items, 
            //second parameter,'new list' adds items to the list
            const newItems=[...this.state.items, newItem];
            this.setState({ //update the setState method and set the new items to items, then set the value of current items back to being empty
                items:newItems, 
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
    }
    //function to delete item fromthe list
    deleteItem(key) {
        //filter all items and store them in the filteredItems variable
        const filteredItems = this.state.items.filter(item => item.key !== key);
        this.setState({
            items:filteredItems
        })
    }
    //function to make the inputted list editable
    editItem(text, key) {
        const items  = this.state.items.map(item => {
            if (item.key === key) {
                item.text = text       
            }
            return item;
        })
        this.setState({ //update the test to the new edit
            items: items
        })
    }
    render(){
        return (
            <div className="form-container">
                <h1 className="main-heading">My Todo List</h1>
                <form onSubmit={this.addItem}>
                    <input 
                        type="text" 
                        className="myForm" 
                        placeholder="Write your plans here..." 
                        value={this.state.currentItem.text} //link input field to the current item
                        onChange={this.handleInput} //handle input such that it is stored i
                    />
                    <button className="add-btn">Add</button>
                </form>
                <Todo items={this.state.items} deleteItem={this.deleteItem} editItem={this.editItem}>
                </Todo>
            </div>
        ); 
    }
}

export default Form;