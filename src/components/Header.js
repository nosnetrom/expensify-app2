import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="activeNavLink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" exact activeClassName="activeNavLink">
            Add Expense
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" exact activeClassName="activeNavLink">
            Help
          </NavLink>
        </li>
      </ul>
    </nav>
    <h1>Expensify!</h1>
  </header>
);

export default Header;
