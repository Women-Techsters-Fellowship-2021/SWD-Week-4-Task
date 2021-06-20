import React from 'react'
import'./ListItems.css'

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p>
                    <input type="text" 
                     id={item.key} 
                     value={item.text}
                     onChange={
                         (e) => {
                             props.setUpdate(e.target.value, item.key)
                         }
                     }
                    />
                <span onClick={() => props.deleteItem(item.key)}>
                   <button>Delete</button> 
                </span>
                </p>
            </div>
        })
    return(
        // display the listItems
        <div>{listItems}</div>
    )
}

export default ListItems;