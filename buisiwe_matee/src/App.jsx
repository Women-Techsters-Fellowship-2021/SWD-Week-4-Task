import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './components/navigation'
import Login from "./components/pages/login"
import Register from "./components/pages/register"
import ShopList from "./components/List";


class App extends Component {

	/* creating an array and use useState to check the values */
	render() {

		return (
			<div>
				<BrowserRouter>
					<Navigation />

					<Switch>
					<Route path='/login' component={Login} />
					
					<Route path='/register'>
						<Register />
					</Route>
					<Route path='/shopping-list'>
						<ShopList />
					</Route>
					<Route>
						<Login />
					</Route>
				</Switch>
				</BrowserRouter>
			</div>
			// <div className="container">
			// 	<div className="row">
			// 		<div className="col-10 col-md-8 mx-auto mt-4">
			// 			<h3 className="text-capitalize text-center">Buisiwe To Do List Site!</h3>
			// 			<TodoInput
			// 				item={this.state.item}
			// 				handleChange={this.handleChange}
			// 				handleSubmit={this.handleSubmit}
			// 			/>

			// 			{/*creating event listers for buttons*/}
			// 			<TodoList
			// 				items={items}
			// 				filterDoneTasks={this.filterDoneTasks}
			// 				clearList={this.clearList}
			// 				handleDelete={this.handleDelete}
			// 				handleEdit={this.handleEdit}
			// 				handleDoneTask={this.handleDoneTask}
			// 				handleDeleteDoneTasks={this.handleDeleteDoneTasks}
			// 				updateTodosToShow={this.updateTodosToShow}
			// 			/>
			// 		</div>
			// 	</div>
			// </div>
		);
	}
}

export default App;
