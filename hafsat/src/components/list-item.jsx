function ListItem({item}) {
    return( 
        <li>
            <h3 className='title'>{item.title}</h3>
                <p className='description'>{item.description}</p>
                <button className ='btn'>Edit</button>
                <button className ='btn remove'>Remove</button>
        </li>

    );
}





export default ListItem;