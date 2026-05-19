import './home.css';
import heroGpu from '../../../assets/images/hero-gpu.png';


export default function HomePage() {
  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}

      <header className="home-navbar">

        <div className="home-navbar__left">
          <h2 className="logo">TECHSPEC</h2>

          <nav className="home-navbar__links">
            <a href="/">Sistemas</a>
            <a href="/" className="active">Componentes</a>
            <a href="/">Promociones</a>
          </nav>
        </div>

        <div className="home-navbar__right">

          <div className="search-box">
            <input
              type="text"
              placeholder="Buscar hardware..."
            />
          </div>

          <button className="icon-button">🛒</button>
          <button className="icon-button">👤</button>

        </div>

      </header>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero__content">

          <span className="hero-badge">
            NOVEDAD
          </span>

          <h1>Ingeniería al Límite.</h1>

          <p>
            Presentamos la nueva serie de procesadores y GPUs
            optimizados para estaciones de trabajo de alto rendimiento.
          </p>

          <button className="hero-button">
            Explorar Catálogo
          </button>

        </div>

        <div className="hero__image">

          <img
            src={heroGpu}
            alt="Hardware"
          />

        </div>

      </section>

      {/* ================= FILTERS ================= */}

      <section className="filters">

        <div className="filters-left">
          <button className="active">Todos</button>
          <button>Tarjetas Gráficas</button>
          <button>Procesadores</button>
          <button>Placas Base</button>
          <button>Memoria RAM</button>
        </div>

        <div className="filters-right">
          <span>Ordenar por:</span>
          <select>
            <option>Más recientes</option>
            <option>Precio</option>
          </select>
        </div>

      </section>

      {/* ================= PRODUCTS ================= */}

      <section className="products-grid">

        {/* CARD */}

        <div className="product-card">

          <span className="product-badge dark">
            EN STOCK
          </span>

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

          <span className="product-category">
            PROCESADOR
          </span>

          <h3>Core i9-14900K</h3>

          <div className="product-specs">

            <div className="spec-row">
              <span>Núcleos</span>
              <strong>24</strong>
            </div>

            <div className="spec-row">
              <span>Frecuencia</span>
              <strong>6.0 GHz</strong>
            </div>

            <div className="spec-row">
              <span>TDP</span>
              <strong>125W</strong>
            </div>

          </div>

          <div className="product-footer">
            <strong>589,00€</strong>
            <button>🛒</button>
          </div>

        </div>

        {/* CARD */}

        <div className="product-card">

          <span className="product-badge blue">
            OFERTA
          </span>

          <img
            src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

          <span className="product-category">
            TARJETA GRÁFICA
          </span>

          <h3>RTX 4080 Super</h3>

          <div className="product-specs">

            <div className="spec-row">
              <span>Memoria</span>
              <strong>16GB GDDR6X</strong>
            </div>

            <div className="spec-row">
              <span>DLSS</span>
              <strong>DLSS 3.5</strong>
            </div>

            <div className="spec-row">
              <span>Puerto</span>
              <strong>PCIe 4.0</strong>
            </div>

          </div>

          <div className="product-footer">
            <strong>1049,00€</strong>
            <button>🛒</button>
          </div>

        </div>

        {/* CARD */}

        <div className="product-card">

          <img
            src="https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

          <span className="product-category">
            MEMORIA RAM
          </span>

          <h3>32GB DDR5 6400MHz</h3>

          <div className="product-specs">

            <div className="spec-row">
              <span>Kit</span>
              <strong>2 x 16GB</strong>
            </div>

            <div className="spec-row">
              <span>Latencia</span>
              <strong>CL32</strong>
            </div>

            <div className="spec-row">
              <span>Voltaje</span>
              <strong>1.4V</strong>
            </div>

          </div>

          <div className="product-footer">
            <strong>145,00€</strong>
            <button>🛒</button>
          </div>

        </div>

        {/* CARD */}

        <div className="product-card">

          <img
            src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

          <span className="product-category">
            PLACA BASE
          </span>

          <h3>Z790 Master X</h3>

          <div className="product-specs">

            <div className="spec-row">
              <span>Socket</span>
              <strong>LGA1700</strong>
            </div>

            <div className="spec-row">
              <span>Factor</span>
              <strong>E-ATX</strong>
            </div>

            <div className="spec-row">
              <span>Red</span>
              <strong>Wi-Fi 7</strong>
            </div>

          </div>

          <div className="product-footer">
            <strong>620,00€</strong>
            <button>🛒</button>
          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="features">

        <div className="feature-card">

          <h3>Validación de Fábrica</h3>

          <p>
            Cada componente pasa pruebas avanzadas antes del envío.
          </p>

        </div>

        <div className="feature-card">

          <h3>Rendimiento Optimizado</h3>

          <p>
            Configuraciones diseñadas para alto desempeño.
          </p>

        </div>

        <div className="feature-card">

          <h3>Soporte Prioritario</h3>

          <p>
            Acceso directo a ingenieros especializados.
          </p>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div>
          <h4>TECHSPEC</h4>
          <p>
            © 2024 TECHSPEC. ENGINEERED FOR PERFORMANCE.
          </p>
        </div>

        <div>
          <h5>PRODUCTOS</h5>
          <a href="/">COMPONENTES</a>
          <a href="/">SISTEMAS</a>
          <a href="/">TECHNICAL SPECS</a>
        </div>

        <div>
          <h5>SOPORTE</h5>
          <a href="/">SUPPORT</a>
          <a href="/">RETURNS</a>
          <a href="/">SHIPPING</a>
        </div>

        <div>
          <h5>LEGAL</h5>
          <a href="/">PRIVACY POLICY</a>
          <a href="/">TERMS OF SERVICE</a>
        </div>

      </footer>

    </div>
  );
}