import React from 'react';
import Home from '../../pages/Home/Home';
import './Layout.css';
import Menus from '../Menus/Menus';
import MobileNav from '../MobileNav/MobileNav';

const Layout = () => {

  return (
    <>
        <div className="layout-container">
        <div className="sidebar desktop-only">
          <Menus />
        </div>

        <div className="mobile-only">
          <MobileNav />
        </div>

        <div className="container">
          <Home />
        </div>
      </div>
    </>
  )
}

export default Layout
