import form from '../styles/form.css';
import { useState, useRef } from 'react';

function Form() { 

    const [ title, setTitle] = useState('');
    const descRef = useRef('');


    return(
        <div>
            <form action=''>
                <input 
                value ={title}
                onChange={(target) => setTitle(target.value)}
                type='text' 
                name='title' 
                id='title' 
                placeholder='Task' 
                />

                <textarea 
                type='text' 
                ref={descRef}
                name='desc' 
                id='desc'
                placeholder='Notes'
                />

                <button class='btn' type='submit'> 
                    Add task                    
                </button> 

                
            </form><p>Value of our title box: {title}</p>
        </div>
    );
}

export default Form;