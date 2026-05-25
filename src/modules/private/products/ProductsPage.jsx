import React, {
  useEffect,
  useState
} from 'react';

import {
  useDispatch,
  useSelector
} from 'react-redux';

import './products.css';

import {
  fetchProducts,
  updateProductApi,
  selectProducts,
  selectProductsLoading,
  selectProductsError
} from '../../../store/slices/productsSlice';

export default function ProductsPage() {

  // =========================
  // REDUX
  // =========================

  const dispatch =
    useDispatch();

  const products =
    useSelector(selectProducts);

  const loading =
    useSelector(selectProductsLoading);

  const error =
    useSelector(selectProductsError);

  // =========================
  // PAGINATION
  // =========================

  const [currentPage, setCurrentPage] =
    useState(1);

  const itemsPerPage = 5;

  const totalPages =
    Math.ceil(
      products.length / itemsPerPage
    );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentProducts =
    products.slice(
      startIndex,
      startIndex + itemsPerPage
    );

  // =========================
  // EDIT PRODUCT
  // =========================

  const [editingId, setEditingId] =
    useState(null);

  const [newName, setNewName] =
    useState("");

  const handleEdit = (product) => {

    setEditingId(product.id);

    setNewName(product.name);

  };

  const handleSave = (product) => {

    dispatch(
      updateProductApi({
        id: product.id,
        data: {
          name: newName
        }
      })
    );

    setEditingId(null);

  };

  // =========================
  // FETCH PRODUCTS
  // =========================

  useEffect(() => {

    dispatch(fetchProducts());

  }, [dispatch]);

  // =========================
  // LOADING
  // =========================

  if (loading) {

    return (

      <div className="products-page">

        <h2>
          Cargando productos...
        </h2>

      </div>

    );

  }

  // =========================
  // ERROR
  // =========================

  if (error) {

    return (

      <div className="products-page">

        <h2>
          Error: {error}
        </h2>

      </div>

    );

  }

  // =========================
  // JSX
  // =========================

  return (

    <div className="products-page">

      <section className="products-header">

        <div>

          <span className="products-label">
            Productos
          </span>

          <h1>
            Productos
          </h1>

        </div>

        <div className="products-actions">

          <button className="btn-primary">
            Buscar
          </button>

        </div>

      </section>

      <section className="products-table-card">

        <div className="products-table-header">

          <h3>
            Listado de productos
          </h3>

        </div>

        <table className="products-table">

          <thead>

            <tr>

              <th>PRODUCTO</th>
              <th>CATÁLOGO</th>
              <th>SKU</th>
              <th>STOCK</th>
              <th>PRECIO</th>
              <th>ESTADO</th>
              <th>ACCIONES</th>

            </tr>

          </thead>

          <tbody>

            {currentProducts.map((product) => {

              const isLowStock =
                product.stock > 0 &&
                product.stock < 10;

              return (

                <tr key={product.id}>

                  {/* NAME */}

                  <td>

                    {editingId === product.id ? (

                      <input
                        value={newName}
                        onChange={(e) =>
                          setNewName(
                            e.target.value
                          )
                        }
                      />

                    ) : (

                      product.name

                    )}

                  </td>

                  {/* CATALOG */}

                  <td>

                    {product.catalog ||
                      "Sin catálogo"}

                  </td>

                  {/* SKU */}

                  <td>
                    {product.sku}
                  </td>

                  {/* STOCK */}

                  <td>
                    {product.stock}
                  </td>

                  {/* PRICE */}

                  <td>

                    Q{
                      Number(product.price)
                        .toFixed(2)
                    }

                  </td>

                  {/* STATUS */}

                  <td>

                    <span
                      className={`product-status ${
                        isLowStock
                          ? 'status-red'
                          : 'status-green'
                      }`}
                    >
                      {product.status}
                    </span>

                  </td>

                  {/* ACTIONS */}

                  <td>

                    {editingId === product.id ? (

                      <button
                        onClick={() =>
                          handleSave(product)
                        }
                      >
                        Guardar
                      </button>

                    ) : (

                      <button
                        onClick={() =>
                          handleEdit(product)
                        }
                      >
                        Editar
                      </button>

                    )}

                  </td>

                </tr>

              );

            })}

          </tbody>

        </table>

        {/* =========================
            PAGINATION
        ========================= */}

        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            gap: '10px',
            justifyContent: 'center'
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
            de {totalPages}

          </span>

          <button
            disabled={
              currentPage === totalPages
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