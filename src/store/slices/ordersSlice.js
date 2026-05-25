import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";

import {
  apiService
} from "../../services/api.service";

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
// FETCH ORDERS
// =========================

export const fetchOrders =
  createAsyncThunk(

    "orders/fetchOrders",

    async (_, thunkAPI) => {

      try {

        const response =
          await apiService.get(
            "/core/api/v1/orders/orders/"
          );

        return response;

      } catch (error) {

        return thunkAPI.rejectWithValue(
          error.message ||
          "Error al cargar pedidos"
        );

      }

    }

  );

// =========================
// CREATE ORDER
// =========================

export const createOrderApi =
  createAsyncThunk(

    "orders/createOrderApi",

    async (
      orderData,
      thunkAPI
    ) => {

      try {

        const response =
          await apiService.post(

            "/core/api/v1/orders/orders/",

            orderData

          );

        return response;

      } catch (error) {

        return thunkAPI.rejectWithValue(

          error.message ||
          "Error al crear pedido"

        );

      }

    }

  );

// =========================
// SLICE
// =========================

const ordersSlice = createSlice({

  name: "orders",

  initialState,

  reducers: {},

  extraReducers: (builder) => {

    builder

      // =========================
      // FETCH ORDERS
      // =========================

      .addCase(
        fetchOrders.pending,
        (state) => {

          state.loading = true;
          state.error = null;
          state.message =
            "Cargando pedidos...";

        }
      )

      .addCase(
        fetchOrders.fulfilled,
        (state, action) => {

          state.loading = false;

          state.items =
            action.payload;

          state.message =
            "Pedidos cargados correctamente";

        }
      )

      .addCase(
        fetchOrders.rejected,
        (state, action) => {

          state.loading = false;

          state.error =
            action.payload;

          state.message =
            "Error al cargar pedidos";

        }
      )

      // =========================
      // CREATE ORDER
      // =========================

      .addCase(
        createOrderApi.pending,
        (state) => {

          state.loading = true;
          state.error = null;
          state.message =
            "Creando pedido...";

        }
      )

      .addCase(
        createOrderApi.fulfilled,
        (state, action) => {

          state.loading = false;

          state.items.unshift(
            action.payload
          );

          state.message =
            "Pedido creado correctamente";

        }
      )

      .addCase(
        createOrderApi.rejected,
        (state, action) => {

          state.loading = false;

          state.error =
            action.payload;

          state.message =
            "Error al crear pedido";

        }
      );

  },

});

// =========================
// SELECTORS
// =========================

export const selectAllOrders =
  (state) => state.orders.items;

export const selectOrdersLoading =
  (state) => state.orders.loading;

export const selectOrdersError =
  (state) => state.orders.error;

export const selectOrdersMessage =
  (state) => state.orders.message;

export const selectLastOrder =
  (state) =>
    state.orders.items[0] ?? null;

// =========================
// EXPORT
// =========================

export default ordersSlice.reducer;