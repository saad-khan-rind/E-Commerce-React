import '../App.css'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <>
      <header>
        <nav>
          <ul>
            
            <li><Link to='/' >Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <li className="cart-button">
                <FaShoppingCart />
                <span className="cart-item-count">{' : 0'}</span>
              </li>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
