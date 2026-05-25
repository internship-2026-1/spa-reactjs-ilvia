import React, {
  useEffect,
  useState
} from 'react';

import {
  useDispatch,
  useSelector
} from 'react-redux';

import {

  fetchOrders,

  selectAllOrders,

  selectOrdersError,

  selectOrdersLoading,

} from '../../../store/slices/ordersSlice';

import './orders.css';

export default function OrdersPage() {

  // =========================
  // REDUX
  // =========================

  const dispatch =
    useDispatch();

  const orders =
    useSelector(
      selectAllOrders
    );

  const ordersLoading =
    useSelector(
      selectOrdersLoading
    );

  const ordersError =
    useSelector(
      selectOrdersError
    );

  // =========================
  // PAGINATION
  // =========================

  const [currentPage, setCurrentPage] =
    useState(1);

  const itemsPerPage = 5;

  const totalPages =
    Math.ceil(
      orders.length / itemsPerPage
    );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentOrders =
    orders.slice(
      startIndex,
      startIndex + itemsPerPage
    );

  // =========================
  // FETCH ORDERS
  // =========================

  useEffect(() => {

    dispatch(fetchOrders());

  }, [dispatch]);

  // =========================
  // LOADING
  // =========================

  if (ordersLoading) {

    return (

      <div className="orders-page">

        <h2>
          Cargando pedidos...
        </h2>

      </div>

    );

  }

  // =========================
  // ERROR
  // =========================

  if (ordersError) {

    return (

      <div className="orders-page">

        <h2>
          Error: {ordersError}
        </h2>

      </div>

    );

  }

  // =========================
  // JSX
  // =========================

  return (

    <div className="orders-page">

      <section className="orders-header">

        <div>

          <span className="orders-label">
            Pedidos
          </span>

          <h1>
            Pedidos
          </h1>

        </div>

        <div className="orders-actions">

          <button className="btn-primary">
            Buscar
          </button>

        </div>

      </section>

      <section className="orders-table-card">

        <div className="orders-table-header">

          <h3>
            Pedidos recientes
          </h3>

        </div>

        <table className="orders-table">

          <thead>

            <tr>

              <th>ID</th>
              <th>CLIENTE</th>
              <th>FECHA</th>
              <th>ARTÍCULOS</th>
              <th>TOTAL</th>
              <th>ESTADO</th>

            </tr>

          </thead>

          <tbody>

            {currentOrders.map((order) => (

              <tr key={order.id}>

                {/* ID */}

                <td>
                  {order.id}
                </td>

                {/* CLIENT */}

                <td>
                  Cliente ERP
                </td>

                {/* DATE */}

                <td>

                  {new Date(
                    order.created_at
                  ).toLocaleDateString()}

                </td>

                {/* ITEMS */}

                <td>

                  {order.products?.length || 0}

                </td>

                {/* TOTAL */}

                <td>

                  Q{
                    Number(order.total)
                      .toFixed(2)
                  }

                </td>

                {/* STATUS */}

                <td>

                  <span
                    className={`order-status ${
                      order.status === 'PENDING'
                        ? 'status-red'
                        : order.status === 'CANCELLED'
                        ? 'status-gray'
                        : 'status-green'
                    }`}
                  >

                    {order.status}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* =========================
            PAGINATION
        ========================= */}

        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
          }}
        >

          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage(
                currentPage - 1
              )
            }
          >
            Anterior
          </button>

          <span>

            Página {currentPage}
            de {totalPages || 1}

          </span>

          <button
            disabled={
              currentPage === totalPages ||
              totalPages === 0
            }
            onClick={() =>
              setCurrentPage(
                currentPage + 1
              )
            }
          >
            Siguiente
          </button>

        </div>

      </section>

    </div>

  );

}