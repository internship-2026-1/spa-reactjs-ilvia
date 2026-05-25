import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";

import { apiService } from "../../services/api.service";

// =========================
// INITIAL STATE
// =========================

const initialState = {

  items: [],
  loading: false,
  error: null,
  message: "",

};

// =========================
// API URL
// =========================

const PRODUCTS_URL ="/core/api/v1/catalog/products/";

// =========================
// GET PRODUCTS
// =========================

export const fetchProducts =
  createAsyncThunk(

    "products/fetchProducts",

    async (_, thunkAPI) => {

      try {

        const response =
          await apiService.get(
            PRODUCTS_URL
          );

        return response;

      } catch (error) {

        return thunkAPI.rejectWithValue(
          error.message ||
          "Error al cargar productos"
        );

      }

    }

  );

// =========================
// CREATE PRODUCT
// =========================

export const createProductApi =
  createAsyncThunk(

    "products/createProductApi",

    async (productData, thunkAPI) => {

      try {

        const response =
          await apiService.post(
            PRODUCTS_URL,
            productData
          );

        return response;

      } catch (error) {

        return thunkAPI.rejectWithValue(
          error.message ||
          "Error al crear producto"
        );

      }

    }

  );

// =========================
// UPDATE PRODUCT
// =========================

export const updateProductApi =
  createAsyncThunk(

    "products/updateProductApi",

    async (
      { id, data },
      thunkAPI
    ) => {

      try {

        const response =
          await apiService.put(
            `${PRODUCTS_URL}${id}/`,
            data
          );

        return response;

      } catch (error) {

        return thunkAPI.rejectWithValue(
          error.message ||
          "Error al actualizar producto"
        );

      }

    }

  );

// =========================
// DELETE PRODUCT
// =========================

export const deleteProductApi =
  createAsyncThunk(

    "products/deleteProductApi",

    async (id, thunkAPI) => {

      try {

        await apiService.delete(
          `${PRODUCTS_URL}${id}/`
        );

        return id;

      } catch (error) {

        return thunkAPI.rejectWithValue(
          error.message ||
          "Error al eliminar producto"
        );

      }

    }

  );

// =========================
// SLICE
// =========================

const productsSlice = createSlice({

  name: "products",

  initialState,

  reducers: {},

  extraReducers: (builder) => {

    builder

      // =========================
      // FETCH PRODUCTS
      // =========================

      .addCase(
        fetchProducts.pending,
        (state) => {

          state.loading = true;
          state.error = null;
          state.message =
            "Cargando productos...";

        }
      )

      .addCase(
        fetchProducts.fulfilled,
        (state, action) => {

          state.loading = false;

          state.items =
            action.payload;

          state.message =
            "Productos cargados correctamente";

        }
      )

      .addCase(
        fetchProducts.rejected,
        (state, action) => {

          state.loading = false;

          state.error =
            action.payload;

          state.message =
            "Error al cargar productos";

        }
      )

      // =========================
      // CREATE PRODUCT
      // =========================

      .addCase(
        createProductApi.pending,
        (state) => {

          state.loading = true;
          state.error = null;
          state.message =
            "Creando producto...";

        }
      )

      .addCase(
        createProductApi.fulfilled,
        (state, action) => {

          state.loading = false;

          state.items.push(
            action.payload
          );

          state.message =
            "Producto creado correctamente";

        }
      )

      .addCase(
        createProductApi.rejected,
        (state, action) => {

          state.loading = false;

          state.error =
            action.payload;

          state.message =
            "Error al crear producto";

        }
      )

      // =========================
      // UPDATE PRODUCT
      // =========================

      .addCase(
        updateProductApi.pending,
        (state) => {

          state.loading = true;
          state.error = null;
          state.message =
            "Actualizando producto...";

        }
      )

      .addCase(
        updateProductApi.fulfilled,
        (state, action) => {

          state.loading = false;

          const idx =
            state.items.findIndex(
              (p) =>
                p.id === action.payload.id
            );

          if (idx !== -1) {

            state.items[idx] =
              action.payload;

          }

          state.message =
            "Producto actualizado correctamente";

        }
      )

      .addCase(
        updateProductApi.rejected,
        (state, action) => {

          state.loading = false;

          state.error =
            action.payload;

          state.message =
            "Error al actualizar producto";

        }
      )

      // =========================
      // DELETE PRODUCT
      // =========================

      .addCase(
        deleteProductApi.pending,
        (state) => {

          state.loading = true;
          state.error = null;
          state.message =
            "Eliminando producto...";

        }
      )

      .addCase(
        deleteProductApi.fulfilled,
        (state, action) => {

          state.loading = false;

          state.items =
            state.items.filter(
              (p) =>
                p.id !== action.payload
            );

          state.message =
            "Producto eliminado correctamente";

        }
      )

      .addCase(
        deleteProductApi.rejected,
        (state, action) => {

          state.loading = false;

          state.error =
            action.payload;

          state.message =
            "Error al eliminar producto";

        }
      );

  },

});

// =========================
// SELECTORS
// =========================

export const selectProducts =
  (state) => state.products.items;

export const selectProductsLoading =
  (state) => state.products.loading;

export const selectProductsError =
  (state) => state.products.error;

export const selectProductsMessage =
  (state) => state.products.message;

export const selectProductById =
  (id) => (state) =>
    state.products.items.find(
      (p) => p.id === id
    );

// =========================
// EXPORT
// =========================

export default productsSlice.reducer;