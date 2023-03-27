import React, { useState } from 'react';

const Cart = ({ products, onRemoveProduct }) => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(!showCart);
  }

  const getDistinctProductCount = () => {
    return Object.keys(products).length;
  }

  const handleRemoveProduct = (productId) => {
    onRemoveProduct(productId);
  }

  const calculateSubtotal = () => {
    let subtotal = 0;
    Object.keys(products).forEach((productId) => {
      subtotal += products[productId].price * products[productId].quantity;
    });
    return subtotal.toFixed(2);
  }

  const renderCartItems = () => {
    return Object.keys(products).map((productId) => {
      const product = products[productId];
      return (
        <div key={productId}>
          <span>{product.title} ({product.quantity} x {product.price})</span>
          <button onClick={() => handleRemoveProduct(productId)}>Remove</button>
        </div>
      );
    });
  }

  return (
    <>
      <button onClick={handleShowCart}>Cart ({getDistinctProductCount()})</button>
      {showCart && (
        <div>
          {renderCartItems()}
          <div>
            <span>Subtotal: ${calculateSubtotal()}</span>
          </div>
          <button onClick={() => {}}>Checkout</button>
        </div>
      )}
    </>
  );
}

export default Cart;
