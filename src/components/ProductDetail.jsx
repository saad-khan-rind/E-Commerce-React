import React, { useState, useEffect } from 'react';

const ProductDetail = ({ productId, addToCart }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);


  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [productId]);

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    setQuantity(parseInt(value));
  }

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
    } else {
      alert("Quantity should be more than 0");
    }
  }
  return (
    <div>
      {product ? (
        <>
          <h1 style={{ fontWeight: 'bold' }}>{product.title}</h1>
          <img src={product.image} alt={product.title} style={{ float: 'right', marginLeft: '20px', maxWidth: '50%' }} />
          <p>{product.description}</p>
          <p> <span style={{ marginLeft: '5px' }}>Units Available: {product.rating.count}</span></p>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange} />
           
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <span id="price">{product.price}</span>
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetail;
