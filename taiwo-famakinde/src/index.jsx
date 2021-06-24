import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const DATA = [
	{ id: 'todo-0', name: 'Pick up laundry', completed: true },
	{ id: 'todo-1', name: 'Get fruits for Kevin', completed: false },
	{ id: 'todo-2', name: 'Do grocery shopping', completed: false },
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById('root'));
