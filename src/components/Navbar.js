import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button type='button' className='toggle-btn' onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>

        <ul>
          <li>
            <Link to='/' class='btn btn-primary'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' class='btn btn-primary'>
              About
            </Link>
          </li>
          <li>
            {' '}
            <Link to='/project' class='btn btn-primary'>
              Projects
            </Link>
          </li>
          <li>
            {' '}
            <Link to='/contact' class='btn btn-primary'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
