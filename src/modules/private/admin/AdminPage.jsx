import React from 'react';

import {
  FaArrowTrendUp,
  FaBoxesStacked,
  FaTruck,
  FaUsers,
  FaPlus,
  FaBarcode,
  FaFileInvoice,
  FaRightLeft
} from 'react-icons/fa6';

import {
  Button
} from 'lib-components-react';

import './admin.css';

function AdminPage() {

  return (

    <div className="admin-page">

      {/* HEADER */}
      

      <div className="admin-header">

        <h1>
          Panel de Control
        </h1>

        <span>
          HOY, 24 MAYO
        </span>

      </div>

      {/* STATS */}

      <div className="admin-stats">

        {/* CARD 1 */}

        <div className="admin-card">

          <div className="admin-card-top">

            <FaArrowTrendUp />

            <span className="positive">
              +12%
            </span>

          </div>

          <small>
            VENTAS NETAS
          </small>

          <h2>
            $42.8k
          </h2>

        </div>

        {/* CARD 2 */}

        <div className="admin-card">

          <div className="admin-card-top">

            <FaBoxesStacked />

            <span className="negative">
              -4
            </span>

          </div>

          <small>
            STOCK BAJO
          </small>

          <h2>
            18 Items
          </h2>

        </div>

        {/* CARD 3 */}

        <div className="admin-card">

          <div className="admin-card-top">

            <FaTruck />

            <span className="positive">
              Pend.
            </span>

          </div>

          <small>
            ENVÍOS
          </small>

          <h2>
            24
          </h2>

        </div>

        {/* CARD 4 */}

        <div className="admin-card">

          <div className="admin-card-top">

            <FaUsers />

            <span className="positive">
              +8
            </span>

          </div>

          <small>
            CLIENTES
          </small>

          <h2>
            1.2k
          </h2>

        </div>

      </div>

      {/* INVENTARIO */}

      <div className="admin-section">

        <div className="admin-section-top">

          <h3>
            INVENTARIO CRÍTICO
          </h3>

          <Button>
            VER TODO
          </Button>

        </div>

        <div className="inventory-wrapper">

          {/* ITEM 1 */}

          <div className="inventory-item">

            <div className="inventory-left">

              <img
                src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200&auto=format&fit=crop"
                alt=""
              />

              <div>

                <h4>
                  RTX 4080 Super
                </h4>

                <p>
                  Stock:
                  <span className="danger">
                    {' '}2 unid.
                  </span>
                </p>

              </div>

            </div>

            <Button className="inventory-btn">
              Pedir
            </Button>

          </div>

          {/* ITEM 2 */}

          <div className="inventory-item">

            <div className="inventory-left">

              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                alt=""
              />

              <div>

                <h4>
                  Core i9-14900K
                </h4>

                <p>
                  Stock:
                  <span className="danger">
                    {' '}0 unid.
                  </span>
                </p>

              </div>

            </div>

            <Button className="inventory-btn">
              Pedir
            </Button>

          </div>

          {/* ITEM 3 */}

          <div className="inventory-item">

            <div className="inventory-left">

              <img
                src="https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?q=80&w=1200&auto=format&fit=crop"
                alt=""
              />

              <div>

                <h4>
                  32GB DDR5 6000Mhz
                </h4>

                <p>
                  Stock:
                  <span>
                    {' '}5 unid.
                  </span>
                </p>

              </div>

            </div>

            <Button className="inventory-btn">
              Pedir
            </Button>

          </div>

        </div>

      </div>

      {/* ACTIONS */}

      <div className="admin-section">

        <h3>
          ACCIONES RÁPIDAS
        </h3>

        <div className="admin-actions">

          <div className="action-card">

            <FaPlus />

            <span>
              Nuevo Item
            </span>

          </div>

          <div className="action-card">

            <FaBarcode />

            <span>
              Escanear
            </span>

          </div>

          <div className="action-card">

            <FaFileInvoice />

            <span>
              Facturar
            </span>

          </div>

          <div className="action-card">

            <FaRightLeft />

            <span>
              Transferir
            </span>

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <footer className="admin-footer">

        <div>

          <h4>
            TECHSPEC
          </h4>

          <p>
            © 2024 TECHSPEC. ENGINEERED FOR PERFORMANCE.
          </p>

        </div>

        <div>

          <h5>
            SOPORTE
          </h5>

          <a>
            TECHNICAL SPECS
          </a>

          <a>
            RETURNS
          </a>

        </div>

        <div>

          <h5>
            LEGAL
          </h5>

          <a>
            PRIVACY POLICY
          </a>

          <a>
            TERMS OF SERVICE
          </a>

        </div>

      </footer>

    </div>

  );
}

export default AdminPage;