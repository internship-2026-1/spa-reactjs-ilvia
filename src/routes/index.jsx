import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout.jsx';
import StorefrontLayout from '../layouts/StorefrontLayout.jsx';
import SimpleLayout from '../layouts/SimpleLayout.jsx';

import PrivateRoute from './PrivateRoute.jsx';
import PublicRoute from './PublicRoute.jsx';

import HomePage from '../modules/public/home/HomePage.jsx';
import LoginPage from '../modules/public/login/LoginPage.jsx';
import RegisterPage from '../modules/public/register/RegisterPage.jsx';
import ComponentsPage from '../modules/public/components/ComponentsPage.jsx';
import ProductDetailPage from '../modules/public/product-detail/ProductDetailPage.jsx';
import CheckoutPage from '../modules/public/checkout/CheckoutPage.jsx';
import DashboardPage from '../modules/private/dashboard/DashboardPage.jsx';
import PaymentPage from '../modules/public/payment/PaymentPage.jsx';
import CatalogPage from '../modules/public/catalog/CatalogPage.jsx';
import CartPage from '../modules/public/cart/CartPage.jsx';
import AdminPage from '../modules/private/admin/AdminPage.jsx';
import McartPage from '../modules/public/m-cart/McartPage.jsx';
import MproductPage from '../modules/public/mproduct/MproductPage.jsx';
import ProductsPage from '../modules/private/products/ProductsPage.jsx';
import CategoriesPage from '../modules/private/categories/CategoriesPage.jsx';
import OrdersPage from '../modules/private/orders/OrdersPage.jsx';
import UsersPage from '../modules/private/users/UsersPage.jsx';
import IntegracionPage from '../modules/private/integracion/IntegracionPage.jsx';
import SuccessPage from '../modules/public/success/SuccessPage.jsx';

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

      {/* PUBLIC STORE */}

      <Route element={<StorefrontLayout />}>

        <Route
          index
          element={<HomePage />}
        />

        {/* PRODUCT DETAIL */}

        <Route
          path="/product/:id"
          element={<ProductDetailPage />}
        />
          /* CART */
        <Route
          path="/cart"
          element={<CartPage />}
        />
        /* M CART */
        <Route
          path="/mcart"
          element={<McartPage />}
        />

        /* M PRODUCT */
        <Route
          path="/mproduct"
          element={<MproductPage />}
        />
         /* CATALOG */
        <Route path="/catalog" element={<CatalogPage />}/>
        
         /* PAYMENT */
        <Route path="/payment" element={<PaymentPage />} />
        
          /* SUCCESS */
        <Route path="/success" element={<SuccessPage />} />

        {/* CHECKOUT */}

        <Route
          path="/checkout"
          element={<CheckoutPage />}
        />

      </Route>
    

      {/* SIMPLE PAGES */}

      <Route element={<SimpleLayout />}>

        <Route element={<PublicRoute />}>

          <Route
            path="/login"
            element={<LoginPage />}
          />

          <Route
            path="/register"
            element={<RegisterPage />}
          />

        </Route>

        <Route
          path="/components"
          element={<ComponentsPage />}
        />

      </Route>

      <Route path="/admin" element={<AdminPage />} />

      {/* PRIVATE ADMIN */}

      <Route element={<PrivateRoute />}>

        <Route element={<MainLayout />}>          
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />
          <Route
            path="/productos"
            element={<ProductsPage />}
          />
          <Route
            path="/categorias"
            element={<CategoriesPage />}
          />
          <Route
            path="/pedidos"
            element={<OrdersPage />}
          />
          <Route
            path="/usuarios"
            element={<UsersPage />}
          />
          <Route
            path="/integracion"
            element={<IntegracionPage />}
          />
        </Route>

      </Route>

      {/* 404 */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>

  );
}