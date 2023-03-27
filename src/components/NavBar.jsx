import '../App.css'
import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

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
              <li key={index}><a href='/' onClick={(event) => {sessionStorage.setItem("item_key", categoryData)}}>{categoryData}</a></li>
            ))}
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
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
