import ListItem from './list-item';
import '../styles/todo-list.css';

const ListItems = [
    {
    id: 1,
    title: 'item 1',
    description: 'A description of the item'
},

{
    id: 2,
    title: 'item 2',
    description: 'A description of the item'
},

{
    id: 3,
    title: 'item 3',
    description: 'A description of the item'
},

{
    id: 4,
    title: 'item 4',
    description: 'A description of the item'
},
];

function TodoList() {
    return (
        <ul>
            {ListItems.map(function (todoItem) {
                return( 
                    <ListItem 
                        key={todoItem.id} 
                        item={todoItem} 
                    />
                );
            })}
        </ul>
    );
}




export default TodoList;