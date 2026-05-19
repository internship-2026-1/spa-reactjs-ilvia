import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import SimpleLayout from '../layouts/SimpleLayout.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import PublicRoute from './PublicRoute.jsx';
import HomePage from '../modules/public/home/HomePage.jsx';
import LoginPage from '../modules/public/login/LoginPage.jsx';
import RegisterPage from '../modules/public/register/RegisterPage.jsx';
import DashboardPage from '../modules/private/dashboard/DashboardPage.jsx';
import ComponentsPage from '../modules/public/components/ComponentsPage.jsx';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SimpleLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="/components" element={<ComponentsPage />} />

      </Route>

      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
