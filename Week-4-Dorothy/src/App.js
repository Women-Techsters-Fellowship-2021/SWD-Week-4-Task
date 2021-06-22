import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from './components/TodoList';

import './components/Form.css'

function App() {
  return (
      
      <Router>
       
        <Switch>
          
          {/* render Todolist Component when we hit /todo */}
          <div className="todo-app">
					<Route exact path='/'>
						<TodoList />
					</Route>
          </div>
        </Switch>
      </Router>
     
    
  );
}

export default App;
