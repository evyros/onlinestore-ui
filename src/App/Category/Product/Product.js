import React from 'react';
import ProductService from '../../services/product.service';
import './Product.scss';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions';

class Product extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			product: {}
		};
	}

	componentDidMount() {
		ProductService.getById(this.props.match.params.id)
			.then(res => res.json())
			.then(product => this.setState({product}));
	}

	addToCart() {
		this.props.addToCart(this.state.product.id);
	}

	render() {
		return (
			<div>
				<h1>Product page</h1>
				{this.state.product.title}
				{this.state.product.price}
				<br />
				<br />
				<hr />
				<button className="btn-add-to-cart"
						onClick={this.addToCart.bind(this)}>Add to Cart</button>
		</div>
		);
	}
}

export default connect(null, {
	addToCart
})(Product);