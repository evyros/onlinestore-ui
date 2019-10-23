import React from 'react';
import { Link } from "react-router-dom";
import CartButton from "./CartButton/CartButton";
import './Header.scss';
import cookie from 'react-cookies';

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	logout() {
		cookie.remove('user');
	}

	render() {
		return (
			<header className="Header container">
				<ul className="menu">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/register">Register</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/profile">Profile</Link></li>
					<li><Link to="/cart">Cart</Link></li>
				</ul>
				<CartButton />
				<button onClick={this.logout.bind(this)}>Logout</button>
			</header>
		);
	}
}

export default Header;