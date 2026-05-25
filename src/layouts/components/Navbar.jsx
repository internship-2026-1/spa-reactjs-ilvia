import React from 'react';

import { Link } from 'react-router-dom';

import {
  FaShoppingCart,
  FaUser
} from 'react-icons/fa';

import { useAuth } from '../../context/AuthContext.jsx';

function Navbar() {

  const {
    user,
    logout,
    isAuthenticated
  } = useAuth();

  return (

    <header className="navbar">

      <div className="navbar__row">

        {/* LOGO */}

        <Link
          to="/"
          className="navbar__brand"
        >
          TECHSPEC
        </Link>

        {/* MENU */}

        {isAuthenticated && (

          <>
            <nav className="navbar__menu">

              <Link
                className="nav-link"
                to="/dashboard"
              >
                Dashboard
              </Link>

              <Link
                className="nav-link"
                to="/perfil"
              >
                Perfil
              </Link>

              <Link
                className="nav-link"
                to="/catalog"
              >
                Catálogo
              </Link>

            </nav>

            {/* SEARCH */}

            <div className="navbar__search">

              <input
                type="search"
                className="navbar__search-input"
                placeholder="Buscar productos"
              />

            </div>

          </>

        )}

        {/* ICONOS */}

        <div className="navbar__icons">

          {/* CARRITO */}

          <Link
            to="/mcart"
            className="navbar__icon-link"
          >

            <FaShoppingCart />

          </Link>

          {/* USER */}

          <Link
            to="/login"
            className="navbar__icon-link"
          >

            <FaUser />

          </Link>

        </div>

        {/* ACTIONS */}

        <div className="navbar__actions">

          {isAuthenticated ? (

            <>

              <div className="navbar__profile">

                <span className="navbar__user">

                  {user?.name || user?.email}

                </span>

                <span className="navbar__status">

                  Activo

                </span>

              </div>

              <button
                type="button"
                className="navbar__logout"
                onClick={logout}
              >

                Cerrar sesión

              </button>

            </>

          ) : (

            <>

              <Link
                className="nav-link"
                to="/login"
              >
                Iniciar sesión
              </Link>

              <Link
                className="nav-link nav-link--button"
                to="/register"
              >
                Crear cuenta
              </Link>

            </>

          )}

        </div>

      </div>

    </header>

  );
}

export default Navbar;