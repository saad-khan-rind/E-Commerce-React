import '../App.css'
import { useState} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavBar() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <header>
        <nav>
          <ul>
            
            <li><Link to='/' >Home</Link></li>
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
