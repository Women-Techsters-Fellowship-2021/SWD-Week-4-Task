import React, { Component } from 'react';
import FlipMove from "react-flip-move";

class TodoItem  extends Component {
 
    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    
    createTasks(item){
        return <li onClick={()=> this.delete(item.key)} 
                            key={item.key}>{item.text}</li>
    }
    
    delete(key){
        this.props.delete(this.props);
    }
    render() { 

        var xEnteries = this.props.entries;
        var list = xEnteries.map(this.createTasks)
        
        return ( <div>
        <div class="listSt">
            <FlipMove duration={250} easing="ease-out">    
              {list}     
              </FlipMove>
         </div>
        </div>       
        );
    }
}
 
export default TodoItem;