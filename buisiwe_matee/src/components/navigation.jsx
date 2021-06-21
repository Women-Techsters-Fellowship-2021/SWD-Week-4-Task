import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {

    let isLoggedIn = false;

	return (
		<>
			{isLoggedIn ? (
				<>
					<Link to='/shopping-list'>My List</Link>
					<br />
					<span>Logout</span>
				</>
			) : (
				<>
					<Link to='/login'>Login</Link>
					<br />
					<Link to='/register'>Register</Link>
					<br />
				</>
			)}
		</>
	);
}

export default Navigation;