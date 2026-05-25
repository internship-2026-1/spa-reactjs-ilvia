import React from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import './MainLayout.css';

function MainLayout() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <div className="admin-layout">
      <header className="admin-topbar">
        <div className="admin-topbar-left">
          <h2>
            SPA ILVIA :)
          </h2>

          <nav className="admin-nav">

            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/productos">
              Productos
            </Link>

            <Link to="/categorias">
              Categorías
            </Link>

            <Link to="/pedidos">
              Pedidos
            </Link>

            <Link to="/usuarios">
              Usuarios
            </Link>

             <Link to="/integracion">
              Integración
            </Link> 

          </nav>
        </div>

        <div className="admin-actions">

          <span>
            Admin
          </span>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      </header>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;