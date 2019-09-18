import React from 'react';
import './Products.scss';
import {ErrorMessage, Field, Form, Formik} from "formik";
import Product from "../../models/product";
import CategoryService from '../../services/category.service';

class Products extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			submitting: false
		};
	}

	componentDidMount() {
		CategoryService
			.getAll()
			.then(res => res.json())
			.then(categories => {
				this.setState({categories});
			});
	}

	send(values) {
		console.log(values);
	}

	render() {
		return (
			<div>
				<h1>Products</h1>
				<Formik
					initialValues={{title: '', categoryId: '', price: '', image: ''}}
					validationSchema={Product}
					onSubmit={this.send.bind(this)}>
					<Form className="col-sm-6">
						<div className="form-group">
							<label>Title:</label>
							<Field name="title" type="text" className="form-control" />
						</div>
						<div className="form-group">
							<label>Category:</label>
							<Field name="categoryId" component="select" className="form-control">
								<option defaultValue>Choose category</option>
								{this.state.categories.map((category, index) => {
									return <option key={index} value={category.id}>
										{category.name}
									</option>
								})}
							</Field>
						</div>
						<div className="form-group">
							<label>Price:</label>
							<Field name="price" type="number" className="form-control" />
						</div>
						<div className="form-group">
							<label>Image:</label>
							<Field name="image" type="file" />
						</div>
						<div className="form-group">
							<input type="submit"
							       value="Submit"
							       className="btn btn-primary"
							       disabled={this.state.submitting} />
						</div>
					</Form>
				</Formik>
			</div>
		);
	}
}

export default Products;