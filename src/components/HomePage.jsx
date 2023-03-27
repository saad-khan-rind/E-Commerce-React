import { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';
import '../App.css';

function HomePage() {
  var item_key = sessionStorage.getItem("item_key");
  if (!item_key) {
    item_key = 'electronics';
  }
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/'+ item_key)
      .then(res => res.json())
      .then(json => setProducts(json));
  }, [item_key]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleViewMore = (product) => {
    setSelectedProduct(product);
  }

  return (
    <>
      <header>
        {selectedProduct ? null : (
          <div className="search-bar">
            <input type="text" placeholder="Search Products" value={searchTerm} onChange={handleSearch} />
          </div>
        )}
      </header>
      <main>
        {selectedProduct ? (
          <ProductDetail productId={selectedProduct.id} />
        ) : (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card-container" onClick={() => handleViewMore(product)}>
                <div className="product-card" >
                  <img src={product.image} alt={product.title} width="100" height="100" />
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                  <button className='view-more'>View More</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
  
}

export default HomePage;
