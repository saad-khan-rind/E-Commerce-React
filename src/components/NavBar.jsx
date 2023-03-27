import '../App.css'
import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavBar() {

  const [categories, setCategories] = useState([]);
  const [showCart, setShowCart] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://fakestoreapi.com/products/categories');
      const categories = await result.json();
      setCategories(categories);
    }
    fetchData();
  }, []);



  return (
    <>
      <header>
        <nav>
          <ul>
            {categories.map((categoryData, index) => (
              <li key={index}><Link to='/' onClick={(event) => {sessionStorage.setItem("item_key", categoryData)}}>{categoryData}</Link></li>
            ))}
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <button className="cart-button" onClick={() => setShowCart(!showCart)}>
                <FaShoppingCart />
                <span className="cart-item-count">{0}</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
