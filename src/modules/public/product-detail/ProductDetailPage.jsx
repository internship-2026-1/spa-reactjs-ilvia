import React, {
  useState,
  useEffect
} from 'react';

import {
  useParams
} from 'react-router-dom';

import {
  useDispatch,
  useSelector
} from 'react-redux';

import {
  FaShoppingCart,
  FaStar,
  FaLaptop,
  FaThLarge,
  FaWifi,
  FaLock
} from 'react-icons/fa';

import './product-detail.css';

import detalleImg
  from '../../../assets/images/detalle.png';

import product1
  from '../../../assets/images/product1.png';

import product2
  from '../../../assets/images/product2.png';

import product3
  from '../../../assets/images/product3.png';

import {
  addItem
} from '../../../store/slices/cartSlice';

import {
  selectProducts
} from '../../../store/slices/productsSlice';

export default function ProductDetailPage() {

  // =========================
  // REDUX
  // =========================

  const dispatch =
    useDispatch();

  const products =
    useSelector(selectProducts);

  // =========================
  // PARAMS
  // =========================

  const { id } =
    useParams();

  // =========================
  // FIND PRODUCT
  // =========================

  const product =
    products.find(
      (p) =>
        String(p.id) === id
    );

  // =========================
  // LOADING
  // =========================

  if (!product) {

    return (

      <div
        style={{
          padding: '40px',
          fontSize: '24px'
        }}
      >

        Cargando producto...

      </div>

    );

  }

  // =========================
  // GALLERY
  // =========================

  const gallery = [

    product.image ||
    product.img ||
    product1,

    product.image ||
    product.img ||
    product2,

    product.image ||
    product.img ||
    product3,

  ];

  // =========================
  // MAIN IMAGE
  // =========================

  const [mainImage, setMainImage] =
    useState(gallery[0]);

  useEffect(() => {

    setMainImage(gallery[0]);

    window.scrollTo(0, 0);

  }, [id]);

  return (

    <div className="product-detail-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="pd-hero-section">

        {/* ================= GALLERY ================= */}

        <div className="pd-gallery-container">

          {/* MAIN IMAGE */}

          <div className="pd-main-box">

            <img
              src={mainImage}
              alt={product.name}
              onError={(e) => {
                e.target.src =
                  product1;
              }}
            />

          </div>

          {/* THUMBNAILS */}

          <div className="pd-thumbs-box">

            {gallery.map((src, idx) => (

              <button
                key={idx}
                className={`pd-thumb-btn ${
                  mainImage === src
                    ? 'active'
                    : ''
                }`}
                onClick={() =>
                  setMainImage(src)
                }
              >

                <img
                  src={src}
                  alt={`thumb-${idx}`}
                  onError={(e) => {
                    e.target.src =
                      product1;
                  }}
                />

              </button>

            ))}

          </div>

        </div>

        {/* ================= INFO ================= */}

        <div className="pd-info-container">

          {/* CATEGORY */}

          <span className="pd-series-tag">

            {product.category ||
              'TECNOLOGÍA'}

          </span>

          {/* TITLE */}

          <h1 className="pd-main-title">

            {product.name}

          </h1>

          {/* RATING */}

          <div className="pd-rating-container">

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

            <span className="pd-reviews-count">

              (124 reseñas)

            </span>

          </div>

          {/* DESCRIPTION */}

          <p className="pd-main-desc">

            {product.description ||
              'Producto tecnológico de alto rendimiento optimizado para profesionales.'}

          </p>

          {/* TAGS */}

          <div className="pd-pills-wrapper">

            <span className="pd-spec-pill">
              Alto Rendimiento
            </span>

            <span className="pd-spec-pill">
              Tecnología Pro
            </span>

            <span className="pd-spec-pill">
              Garantía Oficial
            </span>

          </div>

          {/* ================= BUY CARD ================= */}

          <div className="pd-transaction-card">

            <span className="pd-price-label">

              PRECIO TOTAL

            </span>

            <div className="pd-price-row">

              <span className="pd-price-value">

                Q
                {Number(
                  product.price || 0
                ).toFixed(2)}

              </span>

              <span className="pd-shipping-info">

                Envío prioritario incluido

              </span>

            </div>

            {/* ADD TO CART */}

            <button
              className="pd-btn-cart"
              onClick={() =>
                dispatch(
                  addItem(product)
                )
              }
            >

              <FaShoppingCart />

              Añadir al Carrito

            </button>

            {/* CONFIG */}

            <button className="pd-btn-config">

              Configurar Producto

            </button>

          </div>

        </div>

      </section>

      {/* =====================================
          SPECS
      ===================================== */}

      <section className="pd-specs-section">

        <h2 className="pd-specs-section-title">

          Especificaciones Técnicas

        </h2>

        <div className="pd-specs-columns-grid">

          {/* ================= LEFT ================= */}

          <div className="pd-specs-column">

            <h3 className="pd-column-title">

              <FaLaptop
                style={{
                  color: '#2563eb',
                  fontSize: '15px'
                }}
              />

              Rendimiento

            </h3>

            <div className="pd-clean-row">

              <span className="pd-clean-label">
                PRODUCTO
              </span>

              <span className="pd-clean-val">
                {product.name}
              </span>

            </div>

            <div className="pd-clean-row">

              <span className="pd-clean-label">
                CATEGORÍA
              </span>

              <span className="pd-clean-val">
                {product.category ||
                  'Tecnología'}
              </span>

            </div>

            <div className="pd-clean-row">

              <span className="pd-clean-label">
                PRECIO
              </span>

              <span className="pd-clean-val">

                Q
                {Number(
                  product.price || 0
                ).toFixed(2)}

              </span>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="pd-specs-column">

            <h3 className="pd-column-title">

              <FaThLarge
                style={{
                  color: '#2563eb',
                  fontSize: '15px'
                }}
              />

              Información General

            </h3>

            <div className="pd-clean-row">

              <span className="pd-clean-label">
                GARANTÍA
              </span>

              <span className="pd-clean-val">
                12 meses
              </span>

            </div>

            <div className="pd-clean-row">

              <span className="pd-clean-label">
                ENVÍO
              </span>

              <span className="pd-clean-val">
                Express 24h
              </span>

            </div>

            <div className="pd-clean-row">

              <span className="pd-clean-label">
                STOCK
              </span>

              <span className="pd-clean-val">
                Disponible
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================
          BOTTOM SHOWCASE
      ===================================== */}

      <section className="pd-bottom-showcase">

        {/* ================= BANNER ================= */}

        <div className="pd-banner-thermal">

          <img
            src={detalleImg}
            alt="Sistema térmico"
          />

          <div className="pd-banner-content">

            <h4>
              Tecnología de Última Generación
            </h4>

            <p>
              Equipos diseñados para
              alto rendimiento con
              arquitectura moderna y
              componentes premium.
            </p>

          </div>

        </div>

        {/* ================= CARDS ================= */}

        <div className="pd-grid-side-cards">

          {/* CARD */}

          <div className="pd-card-gray">

            <h4>

              <FaWifi
                style={{
                  color: '#2563eb',
                  fontSize: '14px'
                }}
              />

              Conectividad Total

            </h4>

            <p>
              Compatible con tecnologías
              modernas y conexiones de
              alta velocidad.
            </p>

          </div>

          {/* CARD */}

          <div className="pd-card-gray">

            <h4>

              <FaLock
                style={{
                  color: '#2563eb',
                  fontSize: '14px'
                }}
              />

              Seguridad Pro

            </h4>

            <p>
              Componentes certificados
              y garantía oficial para
              máxima seguridad.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================
          FOOTER
      ===================================== */}

      <footer className="product-footer">

        <div className="product-footer-brand">

          <h4>
            TECHSPEC
          </h4>

          <p>
            © 2026 TECHSPEC.
            ENGINEERED FOR PERFORMANCE.
          </p>

        </div>

        <div className="product-footer-links">

          <h5>
            SOPORTE
          </h5>

          <ul>

            <li>
              SUPPORT
            </li>

            <li>
              TECHNICAL SPECS
            </li>

          </ul>

        </div>

        <div className="product-footer-links">

          <h5>
            LEGAL
          </h5>

          <ul>

            <li>
              PRIVACY POLICY
            </li>

            <li>
              TERMS OF SERVICE
            </li>

          </ul>

        </div>

        <div className="product-footer-links">

          <h5>
            PEDIDOS
          </h5>

          <ul>

            <li>
              RETURNS
            </li>

            <li>
              SHIPPING
            </li>

          </ul>

        </div>

      </footer>

    </div>

  );

}