import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="container">
    <h1>Math Magicians</h1>
    <ul className="nav">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <span className="v-line" />
      <li><Link to="/calculator">Calculator</Link></li>
      <span className="v-line" />
      <li><Link to="/quote">Quote</Link></li>
    </ul>
  </header>
);

export default Header;
