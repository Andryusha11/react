import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductList from './ProductList';

class ShoppingCart extends Component {
  state = {
    cartItems: [
      {
        id: 1,
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: 2,
        name: 'iPad Pro',
        price: 799,
      },
    ],
  };
  render() {
    const count = this.state.cartItems.length;
    return (
      <div className="column">
        <CartTitle userName={this.props.userData.firstName} count={count} />
        <ProductList cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;