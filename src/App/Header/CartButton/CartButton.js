import React from 'react';
import './CartButton.scss';
import CartService from '../../services/cart.service';

class CartButton extends React.Component {

	productCount(){
		return CartService.getAll().length;
	}

	render() {
		return (
			<div className="CartButton badge badge-light">
				Cart: {this.productCount()}
			</div>
		);
	}
}

export default CartButton;