import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to='/movies'>Movies</Link></li>
        <li><Link to='/tv'>TV shows</Link></li>
        <li><a href="">Recommended</a></li>
        <li><a href="">Reviews</a></li>
      </ul>
    </nav>
  );
}