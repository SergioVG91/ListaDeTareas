import React from 'react';
import { FaHome, FaClipboardList, FaRegPlusSquare, FaWrench, FaUserAlt } from 'react-icons/fa';
import '../assets/styles/components/navbar.scss';
import { Link } from 'react-router-dom';

const SIZE = '24px';

const Navbar = () => (
  <div className="navbar__menu">
    <Link to="/" className="navbar__icon">
      <FaHome size={SIZE} />
    </Link>
    <Link to="/" className="navbar__icon">
      <FaClipboardList size={SIZE} />
    </Link>
    <Link to="/" className="navbar__icon">
      <FaRegPlusSquare size={SIZE} />
    </Link>
    <Link to="/" className="navbar__icon">
      <FaWrench size={SIZE} />
    </Link>
    <Link to="/" className="navbar__icon">
      <FaUserAlt size={SIZE} />
    </Link>
  </div>
);

export default Navbar;
