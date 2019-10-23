import React from 'react';
import './Admin.scss';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Products from "./Products/Products";
import UserService from "../services/user.service";
import CreateProduct from "./Products/CreateProduct/CreateProduct";

class Admin extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		UserService
			.me()
			.then(response => response.json())
			.then(user => {
				if(! user.isAdmin) {
					this.props.history.push('/');
				}
			});
	}

	render() {
		return (
			<Router>
				<div>
					<div className="row">
						<div className="col-sm-3">
							<ul className="list-group">
								<li className="list-group-item">
									<Link to="/admin/products">Products</Link>
								</li>
								<li className="list-group-item">
									<Link to="/admin/categories">Categories</Link>
								</li>
								<li className="list-group-item">
									<Link to="/admin/users">Users</Link>
								</li>
							</ul>
						</div>
						<div className="col-sm-9">
							<Route path="/admin/products" exact component={Products} />
							<Route path="/admin/products/create" component={CreateProduct} />
						</div>
					</div>
				</div>
			</Router>

		);
	}
}

export default Admin;