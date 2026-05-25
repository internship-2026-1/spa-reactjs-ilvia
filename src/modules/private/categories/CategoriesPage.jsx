import React, { useEffect, useState } from 'react';

import {
  useDispatch,
  useSelector
} from 'react-redux';

import './categories.css';

import {

  fetchCategories,
  createCategoryApi,
  selectCategories,

} from '../../../store/slices/categoriesSlice';

export default function CategoriesPage() {

  const dispatch = useDispatch();

  const categories =
    useSelector(selectCategories);

  const [showModal, setShowModal] =
    useState(false);

  const [newCategory, setNewCategory] =
    useState({
      name: '',
      description: '',
    });


  // =========================
  // CARGAR CATEGORIAS
  // =========================

  useEffect(() => {

    dispatch(fetchCategories());

  }, [dispatch]);


  // =========================
  // GUARDAR
  // =========================

  const handleSave = () => {

    dispatch(
      createCategoryApi(newCategory)
    );

    setNewCategory({
      name: '',
      description: '',
    });

    setShowModal(false);

  };


  return (

    <div className="categories-page">

      {/* HEADER */}

      <section className="categories-header">

        <div>

          <span className="categories-label">
            Categorías
          </span>

          <h1>
            Categorías
          </h1>

        </div>

        <div className="categories-actions">

          <button
            className="btn-primary"
            onClick={() => setShowModal(true)}
          >
            + NUEVA CATEGORÍA
          </button>

        </div>

      </section>


      {/* TABLA */}

      <section className="categories-table-card">

        <div className="categories-table-header">

          <h3>
            Listado de categorías
          </h3>

        </div>

        <table className="categories-table">

          <thead>

            <tr>
              <th>ID</th>
              <th>CATEGORÍA</th>
              <th>DESCRIPCIÓN</th>
            </tr>

          </thead>

          <tbody>

            {categories.map((category) => (

              <tr key={category.id}>

                <td>
                  {category.id}
                </td>

                <td>
                  {category.name}
                </td>

                <td>
                  {category.description}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </section>


      {/* MODAL */}

      {showModal && (

        <div className="modal-overlay">

          <div className="category-modal">

            <div className="modal-header">

              <h2>
                Nueva categoría
              </h2>

              <button
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>

            </div>

            <div className="modal-body">

              {/* NOMBRE */}

              <div className="form-group">

                <label>
                  Nombre
                </label>

                <input
                  type="text"
                  value={newCategory.name}
                  onChange={(e) =>
                    setNewCategory({
                      ...newCategory,
                      name: e.target.value
                    })
                  }
                  placeholder="Ej: GPUs"
                />

              </div>


              {/* DESCRIPCION */}

              <div className="form-group">

                <label>
                  Descripción
                </label>

                <input
                  type="text"
                  value={newCategory.description}
                  onChange={(e) =>
                    setNewCategory({
                      ...newCategory,
                      description: e.target.value
                    })
                  }
                  placeholder="Descripción"
                />

              </div>

            </div>

            <div className="modal-footer">

              <button
                className="btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>

              <button
                className="btn-primary"
                onClick={handleSave}
              >
                Guardar
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}