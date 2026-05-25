import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  FaTrash,
  FaTruck,
  FaShieldAlt,
  FaCreditCard,
  FaUniversity,
  FaThLarge
} from 'react-icons/fa';

import { Link, useNavigate } from 'react-router-dom';
import { Button, Sumador } from 'lib-components-react';

import { removeItem, increaseQty, decreaseQty } from '../../../store/slices/cartSlice.js';

import './cart.css';

function CartPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalItems = useSelector((state) => state.cart.totalItems);

  const parsePrice = (value) => Number(String(value).replace(/[^0-9.-]/g, '')) || 0;
  const formatCurrency = (value) => `Q${value.toFixed(2)}`;

  const subtotal = items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );
  const taxes = subtotal * 0.16;
  const total = subtotal + taxes;

  return (

    <div className="cart-page">

      <h1 className="cart-title">
        Tu Carrito de Compra
      </h1>

      <div className="cart-layout">

        {/* LEFT */}

        <div className="cart-left">

          {items.length === 0 ? (
            <div className="cart-empty">
              <h2>Tu carrito está vacío</h2>
              <p>Añade productos desde la página de inicio para comenzar.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-product">

                <img
                  className="cart-product-image"
                  src={item.img}
                  alt={item.name}
                />

                <div className="cart-product-info">

                  <h3>{item.name}</h3>

                  <p>SKU: TS-{item.id}</p>

                  <div className="cart-tags">
                    <span>{item.category}</span>
                    {item.badge && <span>{item.badge}</span>}
                  </div>

                </div>

                <div className="cart-product-right">

                  <h2>{formatCurrency(parsePrice(item.price))}</h2>

                <div className="cart-qty-control">

                  <Sumador
                    value={item.quantity}
                    onChange={(value) => {
                      if (value > item.quantity) {
                        dispatch(increaseQty(item.id));
                      } else {
                        dispatch(decreaseQty(item.id));
                      }
                    }}
                    min={1}
                    max={99}
                  />

                </div>

                  <button
                    type="button"
                    className="cart-remove"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    <FaTrash />
                    Eliminar
                  </button>

                </div>

              </div>
            ))
          )}

          <div className="cart-continue">
            <FaThLarge />

            <p>
              ¿Buscas algo más? Explora nuestros componentes certificados.
            </p>

            <Link to="/">
              Continuar Comprando
            </Link>
          </div>
        </div>

        {/* RIGHT */}

        <div className="cart-summary">

          <h2>
            Resumen del Pedido
          </h2>

          <div className="cart-summary-row">

            <span>
              Subtotal ({totalItems} producto{totalItems !== 1 ? 's' : ''})
            </span>

            <span>
              {formatCurrency(subtotal)}
            </span>

          </div>

          <div className="cart-summary-row">

            <span>
              Envío estimado
            </span>

            <span className="free">

              Gratis

            </span>

          </div>

          <div className="cart-summary-row">

            <span>
              Impuestos (IVA 16%)
            </span>

            <span>
              {formatCurrency(taxes)}
            </span>

          </div>

          <hr />

          <div className="cart-total">

            <span>Total</span>

            <h1>{formatCurrency(total)}</h1>

          </div>

          <button
            className="cart-primary-btn"
            onClick={() => navigate('/checkout')}
          >

            PROCEDER AL PAGO

          </button>

          <button className="cart-secondary-btn">

            GUARDAR PARA DESPUÉS

          </button>

          <div className="cart-delivery">

            <FaTruck />

            <div>

              <h4>
                Entrega Prioritaria
              </h4>

              <p>
                Recibe tus componentes en 24-48 horas hábiles.
              </p>

            </div>

          </div>

          <div className="cart-trust">

            <FaCreditCard />

            <FaUniversity />

            <FaShieldAlt />

          </div>

        </div>

      </div>

    </div>

  );
}

export default CartPage;