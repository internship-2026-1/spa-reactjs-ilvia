import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function MainLayout() {
  return (
    <div className="layout-main">
      <Navbar />
      <main className="layout-main__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
