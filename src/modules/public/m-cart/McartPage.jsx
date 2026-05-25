import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaArrowLeft,
  FaTrash,
  FaShieldAlt,
  FaLock
} from 'react-icons/fa';

import {
  Sumador,
  Button,
  Input
} from 'lib-components-react';

import './mcart.css';

function McartPage() {

  const [gpuQty, setGpuQty] = useState(1);
  const [ramQty, setRamQty] = useState(1);
  const [keyboardQty, setKeyboardQty] = useState(22);

  return (

    <div className="mcart-page">

      <div className="mcart-container">

        {/* TITLE */}

        <div className="mcart-title">

          <FaArrowLeft />

          <h1>
            Carrito de Compras
          </h1>

        </div>

        {/* PRODUCT 1 */}

        <div className="mcart-card">

          <div className="mcart-product-left">

            <img
              src="src/assets/images/product1.png"
              alt="GPU"
            />

            <div>

              <h3>
                RTX 4090 OC Edition
              </h3>

              <p>
                24GB GDDR6X • DLSS 3.0
              </p>

              <div className="mcart-qty">

                <Sumador
                  value={gpuQty}
                  min={1}
                  max={99}
                  onChange={setGpuQty}
                />

              </div>

            </div>

          </div>

          <div className="mcart-product-right">

            <FaTrash className="mcart-trash" />

            <h2 className="mcart-price">
              $1,599.00
            </h2>

          </div>

        </div>

        {/* PRODUCT 2 */}

        <div className="mcart-card">

          <div className="mcart-product-left">

            <img
              src="src/assets/images/product2.png"
              alt="RAM"
            />

            <div>

              <h3>
                DOMINATOR TITANIUM
              </h3>

              <p>
                64GB (2x32GB) • DDR5 6000MHz
              </p>

              <div className="mcart-qty">

                <Sumador
                  value={ramQty}
                  min={1}
                  max={99}
                  onChange={setRamQty}
                />

              </div>

            </div>

          </div>

          <div className="mcart-product-right">

            <FaTrash className="mcart-trash" />

            <h2 className="mcart-price">
              $329.99
            </h2>

          </div>

        </div>

        {/* PRODUCT 3 */}

        <div className="mcart-card">

          <div className="mcart-product-left">

            <img
              src="src/assets/images/product3.png"
              alt="Keyboard"
            />

            <div>

              <h3>
                Precision Pro TKL
              </h3>

              <p>
                Switches Ópticos • Chasis de Aluminio
              </p>

              <div className="mcart-qty">

                <Sumador
                  value={keyboardQty}
                  min={1}
                  max={99}
                  onChange={setKeyboardQty}
                />

              </div>

            </div>

          </div>

          <div className="mcart-product-right">

            <FaTrash className="mcart-trash" />

            <h2 className="mcart-price">
              $189.00
            </h2>

          </div>

        </div>

        {/* SUMMARY */}

        <div className="mcart-summary">

          <h2>
            Resumen de Compra
          </h2>

          <div className="mcart-row">

            <span>
              Subtotal (3 productos)
            </span>

            <span>
              $2,117.99
            </span>

          </div>

          <div className="mcart-row">

            <span>
              Envío Express
            </span>

            <span>
              Gratis
            </span>

          </div>

          <div className="mcart-row">

            <span>
              Impuestos (IVA 16%)
            </span>

            <span>
              $338.88
            </span>

          </div>

          <hr />

          <div className="mcart-total">

            <span>
              Total
            </span>

            <h1>
              $2,456.87
            </h1>

          </div>

          {/* COUPON */}

          <div className="mcart-coupon">

            <Input
              placeholder="Código de descuento"
            />

            <Button className="mcart-apply-btn">

              Aplicar

            </Button>

          </div>

          {/* BUTTON */}

          <Button className="mcart-checkout-btn">

            Finalizar Compra

          </Button>

          {/* INFO */}

          <div className="mcart-info">

            <p>

              <FaShieldAlt />

              Garantía oficial TECHSPEC de 2 años

            </p>

            <p>

              <FaLock />

              Pago seguro encriptado de 256 bits

            </p>

          </div>

        </div>

        {/* FOOTER */}

        <footer className="mcart-footer">

          <div>

            <h4>TECHSPEC</h4>

            <p>
              © 2024 TECHSPEC.
              ENGINEERED FOR PERFORMANCE.
            </p>

          </div>

          <div>

            <h5>SOPORTE</h5>

            <span>SUPPORT</span>

            <span>RETURNS</span>

            <span>SHIPPING</span>

          </div>

          <div>

            <h5>LEGAL</h5>

            <span>PRIVACY POLICY</span>

            <span>TERMS OF SERVICE</span>

          </div>

          <div>

            <h5>RECURSOS</h5>

            <span>TECHNICAL SPECS</span>

          </div>

        </footer>

      </div>

    </div>

  );
}

export default McartPage;