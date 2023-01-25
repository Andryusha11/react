import React, { Component } from 'react';

const CartTitle = ({ userName, count }) => {
  return (
    <div className="cart-title">{`${userName}, you added ${count} items`}</div>
  );
};

export default CartTitle;
