import '../App.css'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar({ cart }) {
  const [isCartVisible, setCartVisible] = useState(false);

  const handleCartClick = () => {
    if (cart.length > 0) {
      setCartVisible(!isCartVisible);
    } else {
      setCartVisible(false);
    }
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {cart.length > 0 && (
              <li className="cart-button">
                <Link to="/cart">
                  <FaShoppingCart />
                  <span className="cart-item-count">{' : ' + cart.length}</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );  
}

export default NavBar;
