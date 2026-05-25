import React, {
  useEffect,
  useState
} from 'react';

import {
  useDispatch,
  useSelector
} from 'react-redux';

import {
  useNavigate
} from 'react-router-dom';

import {
  FaShoppingCart,
  FaShieldAlt,
  FaMicrochip,
  FaHeadset
} from 'react-icons/fa';

import './home.css';

import heroGpu
  from '../../../assets/images/hero-gpu.png';

import defaultProductImage
  from '../../../assets/images/product1.png';

import {
  addItem
} from '../../../store/slices/cartSlice';

import {
  fetchProducts,
  selectProducts
} from '../../../store/slices/productsSlice';

export default function HomePage() {

  // =========================
  // REDUX
  // =========================

  const dispatch =
    useDispatch();

  const navigate =
    useNavigate();

  const products =
    useSelector(selectProducts);

  // =========================
  // FILTER
  // =========================

  const [activeFilter, setActiveFilter] =
    useState('Todos');

  // =========================
  // FETCH PRODUCTS
  // =========================

  useEffect(() => {

    dispatch(fetchProducts());

  }, [dispatch]);

  // =========================
  // FILTER PRODUCTS
  // =========================

  const filteredProducts =
    products.filter((product) => {

      if (activeFilter === 'Todos')
        return true;

      return (
        product.category ===
        activeFilter
      );

    });

  return (

    <div className="home-page">

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero__content">

          <span className="hero-badge">
            NUEVA GENERACIÓN
          </span>

          <h1>
            Ingeniería al Límite.
          </h1>

          <p>
            Descubre hardware de alto
            rendimiento optimizado para
            gaming, IA y estaciones de
            trabajo profesionales.
          </p>

          <button className="hero-button">
            Explorar Catálogo
          </button>

        </div>

        <div className="hero__image">

          <img
            src={heroGpu}
            alt="GPU"
          />

        </div>

      </section>

      {/* ================= FILTERS ================= */}

      <section className="filters">

        <div className="filters-left">

          {[
            'Todos',
            'Procesadores',
            'Tarjeta Gráfica',
            'Herramientas',
            'Disco Duro'
          ].map((tab) => (

            <button
              key={tab}
              className={
                activeFilter === tab
                  ? 'active'
                  : ''
              }
              onClick={() =>
                setActiveFilter(tab)
              }
            >

              {tab}

            </button>

          ))}

        </div>

      </section>

      {/* ================= PRODUCTS ================= */}

      <section className="products-grid">

        {filteredProducts.map((product) => (

          <div
            key={product.id}
            className="product-card"
            onClick={() =>
              navigate(
                `/product/${product.id}`
              )
            }
          >

            {/* IMAGE */}

            <div className="product-img-container">

              <img
                src={
                  product.image ||
                  product.img ||
                  defaultProductImage
                }
                alt={product.name}
                onError={(e) => {
                  e.target.src =
                    defaultProductImage;
                }}
              />

            </div>

            {/* CATEGORY */}

            <span className="product-category">

              {product.category ||
                'TECNOLOGÍA'}

            </span>

            {/* NAME */}

            <h3>

              {product.name}

            </h3>

            {/* DESCRIPTION */}

            <p className="product-description">

              {product.description ||
                'Producto tecnológico de alto rendimiento.'}

            </p>

            {/* PRICE */}

            <div
              className="product-footer"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <div className="price-box">

                <strong>

                  Q
                  {Number(
                    product.price || 0
                  ).toFixed(2)}

                </strong>

              </div>

              {/* CART */}

              <button
                type="button"
                className="cart-btn"
                onClick={(e) => {

                  e.stopPropagation();

                  dispatch(
                    addItem(product)
                  );

                }}
              >

                <FaShoppingCart />

              </button>

            </div>

          </div>

        ))}

      </section>

      {/* ================= FEATURES ================= */}

      <section className="home-excellence">

        <div className="home-section-header">

          <h2>
            Excelencia Técnica
          </h2>

          <p>
            Tecnología diseñada para
            profesionales exigentes.
          </p>

        </div>

        <div className="home-feature-grid">

          {/* CARD 1 */}

          <div className="home-feature-card">

            <FaShieldAlt className="feature-icon" />

            <h3>
              Validación Profesional
            </h3>

            <p>
              Cada componente pasa
              pruebas de rendimiento
              y estabilidad.
            </p>

          </div>

          {/* CARD 2 */}

          <div className="home-feature-card">

            <FaMicrochip className="feature-icon" />

            <h3>
              Máximo Rendimiento
            </h3>

            <p>
              Equipos optimizados
              para gaming y IA.
            </p>

          </div>

          {/* CARD 3 */}

          <div className="home-feature-card">

            <FaHeadset className="feature-icon" />

            <h3>
              Soporte Especializado
            </h3>

            <p>
              Atención técnica para
              configuraciones avanzadas.
            </p>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="home-footer">

        <div className="footer-column">

          <h3>
            TECHSPEC
          </h3>

          <p>
            © 2026 TECHSPEC.
            HARDWARE FOR ELITE USERS.
          </p>

        </div>

      </footer>

    </div>

  );

}