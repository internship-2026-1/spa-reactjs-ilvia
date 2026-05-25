import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaHeart,
  FaShieldAlt,
  FaTruck,
  FaShoppingCart,
  FaMicrochip,
  FaMemory,
  FaDesktop,
  FaHdd
} from 'react-icons/fa';

import {
  Button
} from 'lib-components-react';

import './Mproduct.css';

function MproductPage() {

  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    'src/assets/images/product1.png',
    'src/assets/images/product2.png',
    'src/assets/images/product3.png'
  ];

  return (

    <div className="mproduct-page">

      <div className="mproduct-container">

        {/* IMAGE */}

        <div className="mproduct-gallery">

          <img
            src={images[imageIndex]}
            alt="Laptop"
          />

          <div className="mproduct-dots">

            {images.map((_, index) => (

              <span
                key={index}
                className={
                  imageIndex === index
                    ? 'active'
                    : ''
                }
                onClick={() =>
                  setImageIndex(index)
                }
              />

            ))}

          </div>

        </div>

        {/* INFO */}

        <div className="mproduct-info">

          <div className="mproduct-top">

            <span className="mproduct-badge">

              NUEVO

            </span>

            <FaHeart />

          </div>

          <h1>
            X-PRO ZENITH 16
          </h1>

          <p className="mproduct-description">

            Estación de trabajo de alto rendimiento
            para profesionales creativos y desarrolladores.

          </p>

          <div className="mproduct-price">

            <h2>
              Q,499.00 Q
            </h2>

            <span>
              1999.00 Q -20%
            </span>

          </div>

          <p className="mproduct-tax">

            IVA incluido. Envío gratuito en 24h.

          </p>

        </div>

        {/* FEATURES */}

        <div className="mproduct-features">

          <div className="mproduct-feature">

            <FaMicrochip />

            <div>

              <span>
                Procesador
              </span>

              <p>
                Intel i9-13900H
              </p>

            </div>

          </div>

          <div className="mproduct-feature">

            <FaMemory />

            <div>

              <span>
                Memoria RAM
              </span>

              <p>
                32GB DDR5
              </p>

            </div>

          </div>

          <div className="mproduct-feature">

            <FaHdd />

            <div>

              <span>
                Almacenamiento
              </span>

              <p>
                1TB NVMe Gen4
              </p>

            </div>

          </div>

          <div className="mproduct-feature">

            <FaDesktop />

            <div>

              <span>
                Pantalla
              </span>

              <p>
                16" 4K OLED 120Hz
              </p>

            </div>

          </div>

        </div>

        {/* SPECS */}

        <div className="mproduct-specs">

          <h3>
            Especificaciones Técnicas
          </h3>

          <div className="mproduct-spec-row">

            <span>
              Gráficos
            </span>

            <p>
              RTX 4070 8GB GDDR6
            </p>

          </div>

          <div className="mproduct-spec-row">

            <span>
              Batería
            </span>

            <p>
              90.9 Wh (12 horas)
            </p>

          </div>

          <div className="mproduct-spec-row">

            <span>
              Peso
            </span>

            <p>
              1.85 kg
            </p>

          </div>

          <div className="mproduct-spec-row">

            <span>
              SO
            </span>

            <p>
              Windows 11 Pro
            </p>

          </div>

        </div>

        {/* BENEFITS */}

        <div className="mproduct-benefits">

          <div className="mproduct-benefit">

            <FaShieldAlt />

            <div>

              <h4>
                Garantía TECHSPEC Premium
              </h4>

              <p>
                3 años de protección total incluida.
              </p>

            </div>

          </div>

          <div className="mproduct-benefit">

            <FaTruck />

            <div>

              <h4>
                Entrega Express
              </h4>

              <p>
                Recíbelo mañana antes de las 14:00.
              </p>

            </div>

          </div>

        </div>

        {/* FOOTER */}

        <footer className="mproduct-footer">

          <div>

            <h4>
              TECHSPEC
            </h4>

            <p>
              © 2024 TECHSPEC.
              ENGINEERED FOR PERFORMANCE.
            </p>

          </div>

          <div>

            <h5>
              SUPPORT
            </h5>

            <span>
              TECHNICAL SPECS
            </span>

            <span>
              RETURNS
            </span>

          </div>

          <div>

            <h5>
              LEGAL
            </h5>

            <span>
              PRIVACY POLICY
            </span>

            <span>
              TERMS OF SERVICE
            </span>

          </div>

        </footer>

      </div>

      {/* FIXED BAR */}

      <div className="mproduct-bottom">

        <div>

          <span>
            Precio final
          </span>

          <h3>
            1999.00 Q
          </h3>

        </div>

        <Button className="mproduct-cart-btn">

          <FaShoppingCart />

          Añadir al carrito

        </Button>

      </div>

    </div>

  );
}

export default MproductPage;