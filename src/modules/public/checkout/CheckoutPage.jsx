import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  FaArrowLeft,
  FaLock,
  FaFacebookF,
  FaXTwitter
} from 'react-icons/fa6';

import {
  Button,
  RadioButton,
  Input
} from 'lib-components-react';

import {
  selectCartItems,
} from '../../../store/slices/cartSlice';

import {
  selectShippingAddress,
  selectShippingMethod,
  selectCouponCode,
  setShippingAddress,
  setShippingMethod,
  setCouponCode,
} from '../../../store/slices/checkout.js';

import './checkout.css';

const shippingMethods = [
  {
    id: 'express',
    label: 'Envío Express',
    cost: 15.0,
    description: '1-2 días hábiles',
  },
  {
    id: 'standard',
    label: 'Estándar',
    cost: 0,
    description: '3-5 días hábiles',
  },
];

function CheckoutPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // PRODUCTOS DEL CARRITO
  const cartItems = useSelector(selectCartItems);

  // CALCULAR SUBTOTAL REAL
  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum +
      (Number(String(item.price).replace(/[^0-9.-]/g, '')) || 0) *
        item.quantity,
    0
  );

  // DATOS CHECKOUT
  const shippingAddress = useSelector(selectShippingAddress);
  const shippingMethod = useSelector(selectShippingMethod);
  const couponCode = useSelector(selectCouponCode);

  // TOTALES
  const shipping = shippingMethod?.cost ?? 0;
  const taxes = subtotal * 0.16;
  const discount = 0;
  const total = subtotal + shipping + taxes - discount;

  // FORMATEAR PRECIOS
  const formatPrice = (value) =>
    new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'GTQ',
      minimumFractionDigits: 2,
    }).format(value);

  // INPUTS DIRECCIÓN
  const handleAddressChange = (field) => (event) => {
    dispatch(
      setShippingAddress({
        [field]: event.target.value,
      })
    );
  };

  // CAMBIAR MÉTODO ENVÍO
  const handleMethodChange = (method) => () => {
    dispatch(setShippingMethod(method));
  };

  // CUPÓN
  const handleCouponChange = (event) => {
    dispatch(setCouponCode(event.target.value));
  };

  // CONTINUAR
  const handleCheckout = () => {

    const checkoutData = {
      shippingAddress,
      shippingMethod,
      couponCode,
      items: cartItems,
      subtotal,
      taxes,
      total,
    };

    console.log('CHECKOUT DATA:', checkoutData);

    navigate('/payment');
  };

  return (

    <div className="checkout-page">

      {/* STEPS */}

      <div className="checkout-steps">

        <div className="step active">
          <span>1</span>
          <p>Envío</p>
        </div>

        <div className="line"></div>

        <div className="step">
          <span>2</span>
          <p>Pago</p>
        </div>

        <div className="line"></div>

        <div className="step">
          <span>3</span>
          <p>Revisión</p>
        </div>

      </div>

      <div className="checkout-layout">

        {/* LEFT */}

        <div className="checkout-left">

          <div className="checkout-card">

            <h1>Dirección de Envío</h1>

            <div className="checkout-form-grid">

              <div className="form-group">

                <label>Nombre completo</label>

                <Input
                  type="text"
                  value={shippingAddress.fullName}
                  onChange={handleAddressChange('fullName')}
                  placeholder="Ej. Juan Pérez"
                />

              </div>

              <div className="form-group">

                <label>Correo electrónico</label>

                <Input
                  type="email"
                  value={shippingAddress.email}
                  onChange={handleAddressChange('email')}
                  placeholder="juan@techspec.com"
                />

              </div>

            </div>

            <div className="form-group">

              <label>Dirección de la calle</label>

              <Input
                type="text"
                value={shippingAddress.street}
                onChange={handleAddressChange('street')}
                placeholder="Av. Insurgentes Sur 123"
              />

            </div>

            <div className="checkout-form-grid three">

              <div className="form-group">

                <label>Ciudad</label>

                <Input
                  type="text"
                  value={shippingAddress.city}
                  onChange={handleAddressChange('city')}
                />

              </div>

              <div className="form-group">

                <label>Estado / Provincia</label>

                <Input
                  type="text"
                  value={shippingAddress.state}
                  onChange={handleAddressChange('state')}
                />

              </div>

              <div className="form-group">

                <label>Código Postal</label>

                <Input
                  type="text"
                  value={shippingAddress.zip}
                  onChange={handleAddressChange('zip')}
                />

              </div>

            </div>

            {/* SHIPPING */}

            <div className="shipping-title">
              Método de Envío
            </div>

            <div className="shipping-options">

              {shippingMethods.map((method) => {

                const active = shippingMethod?.id === method.id;

                return (

                  <div
                    key={method.id}
                    className={`shipping-box ${active ? 'active' : ''}`}
                    onClick={handleMethodChange(method)}
                  >

                    <div className="shipping-left">

                      <RadioButton checked={active} />

                      <div>

                        <h4>{method.label}</h4>

                        <p>{method.description}</p>

                      </div>

                    </div>

                    <span>
                      {method.cost > 0
                        ? formatPrice(method.cost)
                        : 'Gratis'}
                    </span>

                  </div>

                );
              })}

            </div>

            {/* ACTIONS */}

            <div className="checkout-actions">

              <Button
                className="back-btn"
                onClick={() => navigate('/cart')}
              >

                <FaArrowLeft />

                Volver al carrito

              </Button>

              <Button
                className="continue-btn"
                onClick={handleCheckout}
              >

                Continuar al Pago

              </Button>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="checkout-summary">

          <h2>Resumen de Orden</h2>

          {cartItems.length === 0 ? (

            <div className="summary-empty">

              <p>No hay productos en el carrito.</p>

            </div>

          ) : (

            cartItems.map((item) => (

              <div
                key={item.id}
                className="summary-product"
              >

                <img
                  src={
                    item.img ||
                    item.image ||
                    'https://via.placeholder.com/120'
                  }
                  alt={
                    item.name ||
                    item.category ||
                    'Producto'
                  }
                />

                <div>

                  <h4>{item.name}</h4>

                  <p>
                    {item.desc ||
                      item.category ||
                      'Artículo TECHSPEC'}
                  </p>

                </div>

                <span>{item.price}</span>

              </div>

            ))

          )}

          <div className="summary-divider"></div>

          {/* TOTALS */}

          <div className="summary-row">

            <span>Subtotal</span>

            <span>{formatPrice(subtotal)}</span>

          </div>

          <div className="summary-row">

            <span>Envío</span>

            <span>{formatPrice(shipping)}</span>

          </div>

          <div className="summary-row">

            <span>Impuestos (IVA 16%)</span>

            <span>{formatPrice(taxes)}</span>

          </div>

          <div className="summary-total">

            <span>Total</span>

            <h1>{formatPrice(total)}</h1>

          </div>

          {/* CUPÓN */}

          <div className="coupon-box">

            <Input
              type="text"
              value={couponCode}
              onChange={handleCouponChange}
              placeholder="Código de descuento"
            />

            <Button type="button">

              Aplicar

            </Button>

          </div>

          {/* SECURITY */}

          <div className="checkout-security">

            <FaLock />

            <p>
              Pago seguro encriptado con tecnología SSL de 256 bits.
            </p>

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <footer className="checkout-footer">

        <div>

          <h4>TECHSPEC</h4>

          <p>
            © 2024 TECHSPEC. ENGINEERED FOR PERFORMANCE.
          </p>

        </div>

        <div>

          <h5>COMPAÑÍA</h5>

          <a>TECHNICAL SPECS</a>
          <a>PRIVACY POLICY</a>
          <a>TERMS OF SERVICE</a>

        </div>

        <div>

          <h5>SOPORTE</h5>

          <a>SUPPORT</a>
          <a>RETURNS</a>
          <a>SHIPPING</a>

        </div>

        <div>

          <h5>SOCIAL</h5>

          <div className="socials">

            <FaFacebookF />
            <FaXTwitter />

          </div>

        </div>

      </footer>

    </div>

  );
}

export default CheckoutPage;
