import React from 'react';

import {
  useForm
} from 'react-hook-form';

import {
  useDispatch,
  useSelector
} from 'react-redux';

import {
  useNavigate
} from 'react-router-dom';

import {
  FaCreditCard,
  FaUniversity,
  FaLock
} from 'react-icons/fa';

import './payment.css';

import {
  apiService
} from '../../../services/api.service';

import {

  clearCart,

  selectCartItems,

  selectCartSubtotal

} from '../../../store/slices/cartSlice';

function PaymentPage() {

  // =========================
  // REDUX
  // =========================

  const dispatch =
    useDispatch();

  const navigate =
    useNavigate();

  const cartItems =
    useSelector(
      selectCartItems
    );

  const total =
    useSelector(
      selectCartSubtotal
    );

  // =========================
  // FORM
  // =========================

  const {
    register,
    handleSubmit,
  } = useForm();

  // =========================
  // SUBMIT
  // =========================

  const onSubmit = async (data) => {

    try {

      console.log(
        'DATOS TARJETA',
        data
      );

      // =========================
      // BACKEND FORMAT
      // =========================

      const orderData = {

        products:
          cartItems.map((item) => ({

            product_id:
              String(item.id),

            quantity:
              Number(item.quantity),

          })),

      };

      console.log(
        'ORDER DATA',
        orderData
      );

      // =========================
      // CREATE ORDER
      // =========================

      const createdOrder =
        await apiService.post(

          "/core/api/v1/orders/orders/",

          orderData

        );

      console.log(
        'ORDEN CREADA',
        createdOrder
      );

      // =========================
      // PAY ORDER
      // =========================

      await apiService.post(

        `/core/api/v1/orders/orders/${createdOrder.id}/pay/`,

        {}

      );

      console.log(
        'PAGO CONFIRMADO'
      );

      // =========================
      // CLEAR CART
      // =========================

      dispatch(
        clearCart()
      );

      // =========================
      // SUCCESS
      // =========================


      navigate('/success');

    } catch (error) {

      console.error(error);

    

    }

  };

  return (

    <section className="payment-page">

      {/* HEADER */}

      <div className="payment-header">

        <h1>
          Método de Pago
        </h1>

        <p>
          Configure sus detalles de facturación con precisión técnica.
        </p>

      </div>

      {/* CARD PREVIEW */}

      <div className="payment-card-preview">

        <div className="payment-card-top">

          <span>
            TECHSPEC ELITE
          </span>

          <FaCreditCard />

        </div>

        <div className="payment-card-number">

          **** **** **** 8842

        </div>

        <div className="payment-card-bottom">

          <div>

            <small>
              TITULAR
            </small>

            <strong>
              ilvita
            </strong>

          </div>

          <div>

            <small>
              EXPIRA
            </small>

            <strong>
              12/29
            </strong>

          </div>

        </div>

      </div>

      {/* PAYMENT TABS */}

      <div className="payment-tabs">

        <button
          type="button"
          className="payment-tab active"
        >

          <FaCreditCard />

          Tarjeta

        </button>

        <button
          type="button"
          className="payment-tab"
        >

          <FaUniversity />

          Transferencia

        </button>

      </div>

      {/* FORM */}

      <form
        className="payment-form"
        onSubmit={
          handleSubmit(onSubmit)
        }
      >

        {/* NAME */}

        <div className="form-group">

          <label>
            Nombre en la tarjeta
          </label>

          <input
            type="text"
            placeholder="ilvita"
            {...register(
              'card_name'
            )}
          />

        </div>

        {/* CARD NUMBER */}

        <div className="form-group">

          <label>
            Número de tarjeta
          </label>

          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            {...register(
              'card_number'
            )}
          />

        </div>

        {/* ROW */}

        <div className="payment-row">

          {/* EXP */}

          <div className="form-group">

            <label>
              Fecha de expiración
            </label>

            <input
              type="text"
              placeholder="MM/YY"
              {...register(
                'card_expiration'
              )}
            />

          </div>

          {/* CVC */}

          <div className="form-group">

            <label>
              CVC / CCV
            </label>

            <input
              type="text"
              placeholder="•••"
              {...register(
                'card_cvc'
              )}
            />

          </div>

        </div>

        {/* SAVE CARD */}

        <div className="payment-checkbox">

          <input
            type="checkbox"
            {...register(
              'save_card'
            )}
          />

          <span>
            Guardar información para futuras compras
          </span>

        </div>

        {/* ORDER SUMMARY */}

        <div
          style={{
            marginBottom: '20px',
            padding: '16px',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
          }}
        >

          <h3
            style={{
              marginBottom: '12px',
            }}
          >

            Resumen del Pedido

          </h3>

          {cartItems.map((item) => {

            const cleanPrice =
              parseFloat(
                String(item.price)
                  .replace(/[^\d.-]/g, '')
              ) || 0;

            return (

              <div
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >

                <span>

                  {item.name}
                  {' '}
                  x
                  {item.quantity}

                </span>

                <span>

                  Q
                  {(
                    cleanPrice *
                    Number(item.quantity)
                  ).toFixed(2)}

                </span>

              </div>

            );

          })}

          <hr
            style={{
              margin: '12px 0',
            }}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: '700',
              fontSize: '20px',
            }}
          >

            <span>
              Total
            </span>

            <span>

              Q
              {parseFloat(total || 0).toFixed(2)}

            </span>

          </div>

        </div>

        {/* SUBMIT */}

        <button
          type="submit"
          className="payment-submit"
        >

          Confirmar Pago

          <FaLock />

        </button>

        {/* SECURITY */}

        <p className="payment-security">

          <FaLock />

          Transacción cifrada bajo protocolo AES 256

        </p>

      </form>

    </section>

  );

}

export default PaymentPage;