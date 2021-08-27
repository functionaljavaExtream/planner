import React from 'react';
import { IconContext } from 'react-icons';
import { ImUser } from 'react-icons/im';
import '../css/Navbar.css';
const Navbar = () => (
  <nav className="d-flex d-flex flex-center mainNav">
    <div className="d-flex flex-center links-container">
      <a href="#home" className="logo">TodoList</a>
      <ul className="d-flex nav-links">
        <li>
          <a href="#home">Lists</a>
        </li>
        <li>
          <a href="#home">CATEGORIES</a>
        </li>
      </ul>
    </div>
    <a href="#home" className="user-icon d-flex flex-center">
      <IconContext.Provider value={{ className: 'user-color' }}>
        <ImUser />
      </IconContext.Provider>
    </a>
  </nav>
);

export default Navbar;