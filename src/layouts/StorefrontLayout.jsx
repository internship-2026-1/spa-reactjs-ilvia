import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  FaShoppingCart,
  FaUser,
  FaSearch
} from 'react-icons/fa';

import './StorefrontLayout.css';

function StorefrontLayout() {
  const location = useLocation();
  const showSearch = location.pathname === '/';
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (

    <div className="layout-storefront">

      {/* HEADER */}

      <header className="storefront-header">

        {/* LOGO */}

        <div className="storefront-brand">

          <Link
            to="/"
            className="storefront-logo"
          >
            TECHSPEC
          </Link>

        </div>

        {/* NAV */}

        <nav className="storefront-nav">

          <Link to="/">
            Sistemas
          </Link>

          <Link
            to="/"
            className="nav-active"
          >
            Componentes
          </Link>

          <Link to="/">
            Promociones
          </Link>

        </nav>

        {showSearch && (
          <div className="storefront-search">

            <div className="storefront-search-icon">
              <FaSearch />
            </div>

            <input
              type="text"
              placeholder="Buscar hardware..."
              className="storefront-search-input"
            />

          </div>
        )}

        {/* ACTIONS */}

        <div className="storefront-actions">

         <Link to="/cart" className="storefront-action-button">
           <FaShoppingCart />
           {totalItems > 0 && (
             <span className="storefront-cart-count">{totalItems}</span>
           )}
         </Link>
         
         <Link to="/login" 
         className="storefront-action-button" > 
         <FaUser /> 
         </Link>

        </div>

      </header>

      {/* CONTENT */}

      <main className="storefront-main">
        <Outlet />
      </main>

    </div>

  );
}

export default StorefrontLayout;