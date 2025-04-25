import React from 'react';
import { Link } from 'react-router-dom';

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
