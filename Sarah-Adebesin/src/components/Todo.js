const Todo = (props) => {

    const items = props.items;

    //loop through every item in the list and store it in a variable called listItems
    const listItems = items.map(item => {
        return <div className="card" key={item.key}>
                    <h2 className="card-heading">
                    {/* put an input field inside the heading tag to make it's content editable */}
                        <input 
                            type="text" 
                            id={item.key} 
                            value={item.text}
                            onChange={(e) => {
                                props.editItem(e.target.value, item.key)
                            }}
                        /> 
                    </h2>
                    <button className="btn" onClick={ () => props.deleteItem(item.key)}>Delete</button>
                </div>           
    })

   
    return (
        <div>
            {listItems}
        </div>
    )
}

export default Todo;