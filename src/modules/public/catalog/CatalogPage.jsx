import React from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch, FaHeart, FaMicrochip, FaMemory, FaSnowflake
} from 'react-icons/fa';
import { Button, Card, SearchBar } from 'lib-components-react';

import './catalog.css';

function CatalogPage() {

  return (

    <div className="catalog-page">

      {/* SEARCH */}

      <div className="catalog-search">

        <FaSearch className="catalog-search-icon" />

        <input
          type="text"
          placeholder="Buscar componentes o sistemas..."
        />

      </div>

      {/* FILTERS */}

      <div className="catalog-filters">

        <Button className="catalog-filter active">
          Todos
        </Button>

        <Button className="catalog-filter">
          Procesadores
        </Button>

        <Button className="catalog-filter">
          Gráficas
        </Button>

        <Button className="catalog-filter">
          Memoria
        </Button>

        <Button className="catalog-filter">
          Almacenamiento
        </Button>

      </div>

      {/* PRODUCTS */}

      <div className="catalog-products">

        {/* CARD 1 */}

        <div className="catalog-card">

          <span className="catalog-badge blue">
            En Stock
          </span>

          <div className="catalog-image">

            <img
              src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200&auto=format&fit=crop"
              alt="GPU"
            />

          </div>

          <div className="catalog-info">

            <div className="catalog-top">

              <div>

                <h4>NVIDIA SERIES</h4>

                <h3>RTX 4090 OC Edition</h3>

              </div>

              <span className="catalog-price">
                Q1,849
              </span>

            </div>

            <div className="catalog-specs">

              <span>
                <FaMicrochip />
                24GB GDDR6X
              </span>

              <span>
                <FaSnowflake />
                Triple Fan Airflow
              </span>

              <span>
                <FaMemory />
                450W TDP
              </span>

            </div>

            <div className="catalog-actions">

              <Button className="catalog-cart-btn">
                Añadir al Carrito
              </Button>

              <Button className="catalog-favorite">

                <FaHeart />

              </Button>

            </div>

          </div>

        </div>

        {/* CARD 2 */}

        <div className="catalog-card">

          <span className="catalog-badge dark">
            PROMOCIÓN
          </span>

          <div className="catalog-image">

            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
              alt="CPU"
            />

          </div>

          <div className="catalog-info">

            <div className="catalog-top">

              <div>

                <h4>AMD RYZEN</h4>

                <h3>Ryzen 9 7950X3D</h3>

              </div>

              <div className="catalog-price-group">

                <small>Q729</small>

                <span className="catalog-price blue">
                  Q659
                </span>

              </div>

            </div>

            <div className="catalog-specs">

              <span>
                <FaMicrochip />
                16 Cores / 32 Threads
              </span>

              <span>
                <FaSnowflake />
                Socket AM5
              </span>

              <span>
                <FaMemory />
                128MB L3 Cache
              </span>

            </div>

            <div className="catalog-actions">

              <Button className="catalog-cart-btn">
                Añadir al Carrito
              </Button>

              <Button className="catalog-favorite">

                <FaHeart />

              </Button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default CatalogPage;