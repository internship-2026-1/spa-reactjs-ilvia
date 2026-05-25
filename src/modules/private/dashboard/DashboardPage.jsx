import React from 'react';
import {
  FiShoppingCart, FiPackage, FiTrendingUp, FiDollarSign,
  FiEye,
  FiEdit,
  FiFilter,
  FiDownload,
  FiSearch,
  FiUser
} from 'react-icons/fi';
import './dashboard.css';

export default function DashboardPage() {
  return (
    <div className="dashboard-page">

      <main className="dashboard-container">

        {/* HEADER */}
        <section className="dashboard-header">
          <div>
            <h1>Panel de Control</h1>
            <p>Gestión de inventario y métricas de rendimiento en tiempo real.</p>
          </div>
          <div className="dashboard-header__buttons">
            <button className="btn-export">
              <FiDownload /> EXPORTAR
            </button>
            <button className="btn-primary">
              + NUEVO PRODUCTO
            </button>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-top">
              <FiDollarSign />
              <small className="green">+12.4%</small>
            </div>
            <h4>VENTAS TOTALES</h4>
            <strong>Q142,590</strong>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <FiPackage />
              <small className="red">-4.2%</small>
            </div>
            <h4>STOCK DISPONIBLE</h4>
            <strong>1,240 UDS</strong>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <FiShoppingCart />
              <small className="green">+8.1%</small>
            </div>
            <h4>PEDIDOS PENDIENTES</h4>
            <strong>38</strong>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <FiTrendingUp />
              <small className="gray">ESTABLE</small>
            </div>
            <h4>VALOR INVENTARIO</h4>
            <strong>Q582K</strong>
          </div>
        </section>

        {/* TABLE CARD */}
        <section className="inventory-card">
          <div className="inventory-header">
            <h3>Gestión de Inventario</h3>
            <div className="inventory-actions">
              <div className="search-container">
                <FiSearch />
                <input type="text" placeholder="Buscar producto..." />
              </div>
              <button className="btn-filter">
                <FiFilter />
              </button>
            </div>
          </div>

          <table className="inventory-table">
            <thead>
              <tr>
                <th>PRODUCTO</th>
                <th>CATEGORÍA</th>
                <th>SKU</th>
                <th>STOCK</th>
                <th>PRECIO</th>
                <th>ESTADO</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {/* PRODUCTO 1 */}
              <tr>
                <td className="product-cell">
                  <img src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200&auto=format&fit=crop" alt="" />
                  <div>
                    <strong>RTX 4090 OC Edition</strong>
                    <span>24GB GDDR6X</span>
                  </div>
                </td>
                <td><span className="tag blue">GPU</span></td>
                <td>TS-GPU-4090-01</td>
                <td>
                  12
                  <div className="stock-bar">
                    <div className="stock-fill blue-fill"></div>
                  </div>
                </td>
                <td>Q1,849.00</td>
                <td><span className="status green-dot">● Activo</span></td>
                <td>
                  <div className="actions">
                    <FiEdit />
                    <FiEye />
                  </div>
                </td>
              </tr>

              {/* PRODUCTO 2 */}
              <tr>
                <td className="product-cell">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" alt="" />
                  <div>
                    <strong>AMD Ryzen 9 7950X</strong>
                    <span>16 Cores / 32 Threads</span>
                  </div>
                </td>
                <td><span className="tag purple">CPU</span></td>
                <td>TS-CPU-R979-50</td>
                <td>
                  4
                  <div className="stock-bar">
                    <div className="stock-fill red-fill"></div>
                  </div>
                </td>
                <td>Q599.00</td>
                <td><span className="status red-dot">● Stock Bajo</span></td>
                <td>
                  <div className="actions">
                    <FiEdit />
                    <FiEye />
                  </div>
                </td>
              </tr>

              {/* PRODUCTO 3 */}
              <tr>
                <td className="product-cell">
                  <img src="https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=1200&auto=format&fit=crop" alt="" />
                  <div>
                    <strong>Dominator Platinum DDR5</strong>
                    <span>32GB (2x16GB) 6000MHz</span>
                  </div>
                </td>
                <td><span className="tag gray-tag">RAM</span></td>
                <td>TS-RAM-DOMT-32</td>
                <td>
                  0
                  <div className="stock-bar">
                    <div className="stock-fill gray-fill"></div>
                  </div>
                </td>
                <td>Q224.00</td>
                <td><span className="status gray-dot">● Desactivado</span></td>
                <td>
                  <div className="actions">
                    <FiEdit />
                    <FiEye />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* TABLE FOOTER */}
          <div className="inventory-footer">
            <p>Mostrando 3 de 156 productos</p>
            <div className="pagination">
              <button>‹</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>›</button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER GLOBAL */}
      <footer className="dashboard-footer">
        <div className="footer-brand">
          <h4>TECHSPEC</h4>
          <p>© 2024 TECHSPEC. ENGINEERED FOR PERFORMANCE.</p>
        </div>
        <div className="footer-column">
          <h5>Legal</h5>
          <div className="links-group">
            <a href="/">PRIVACY POLICY</a>
            <a href="/">TERMS OF SERVICE</a>
          </div>
        </div>
        <div className="footer-column">
          <h5>Soporte</h5>
          <div className="links-group">
            <a href="/">SUPPORT</a>
            <a href="/">RETURNS</a>
          </div>
        </div>
        <div className="footer-column">
          <h5>Logística</h5>
          <div className="links-group">
            <a href="/">SHIPPING</a>
            <a href="/">TECHNICAL SPECS</a>
          </div>
        </div>
      </footer>

    </div>
  );
}