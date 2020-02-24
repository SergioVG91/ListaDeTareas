import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <div className="App">
    <Header />
    {children}
    <Navbar />
  </div>
);

export default Layout;
