import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiService } from "../../services/api.service";

const initialState = {

  items: [],
  loading: false,
  error: null,
  message: "",

};

const CATEGORIES_URL =   "/core/api/v1/catalog/catalogs/";


// =========================
// GET CATEGORIES
// =========================

export const fetchCategories = createAsyncThunk(

  "categories/fetchCategories",

  async (_, thunkAPI) => {

    try {

      const response =
        await apiService.get(CATEGORIES_URL);

      return response;

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.message || "Error al cargar categorías"
      );

    }

  }

);


// =========================
// CREATE CATEGORY
// =========================

export const createCategoryApi = createAsyncThunk(

  "categories/createCategoryApi",

  async (categoryData, thunkAPI) => {

    try {

      const response =
        await apiService.post(
          CATEGORIES_URL,
          categoryData
        );

      return response;

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.message || "Error al crear categoría"
      );

    }

  }

);


// =========================
// UPDATE CATEGORY
// =========================

export const updateCategoryApi = createAsyncThunk(

  "categories/updateCategoryApi",

  async ({ id, data }, thunkAPI) => {

    try {

      const response =
        await apiService.put(
          `${CATEGORIES_URL}${id}/`,
          data
        );

      return response;

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.message || "Error al actualizar categoría"
      );

    }

  }

);


// =========================
// DELETE CATEGORY
// =========================

export const deleteCategoryApi = createAsyncThunk(

  "categories/deleteCategoryApi",

  async (id, thunkAPI) => {

    try {

      await apiService.delete(
        `${CATEGORIES_URL}${id}/`
      );

      return id;

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.message || "Error al eliminar categoría"
      );

    }

  }

);


const categoriesSlice = createSlice({

  name: "categories",

  initialState,

  reducers: {},

  extraReducers: (builder) => {

    builder

      // =========================
      // FETCH
      // =========================

      .addCase(fetchCategories.pending, (state) => {

        state.loading = true;
        state.error = null;
        state.message = "Cargando categorías...";

      })

      .addCase(fetchCategories.fulfilled, (state, action) => {

        state.loading = false;
        state.items = action.payload;
        state.message = "Categorías cargadas correctamente";

      })

      .addCase(fetchCategories.rejected, (state, action) => {

        state.loading = false;
        state.error = action.payload;
        state.message = "Error al cargar categorías";

      })


      // =========================
      // CREATE
      // =========================

      .addCase(createCategoryApi.pending, (state) => {

        state.loading = true;
        state.error = null;
        state.message = "Creando categoría...";

      })

      .addCase(createCategoryApi.fulfilled, (state, action) => {

        state.loading = false;

        state.items.push(action.payload);

        state.message = "Categoría creada correctamente";

      })

      .addCase(createCategoryApi.rejected, (state, action) => {

        state.loading = false;
        state.error = action.payload;
        state.message = "Error al crear categoría";

      })


      // =========================
      // UPDATE
      // =========================

      .addCase(updateCategoryApi.pending, (state) => {

        state.loading = true;
        state.error = null;
        state.message = "Actualizando categoría...";

      })

      .addCase(updateCategoryApi.fulfilled, (state, action) => {

        state.loading = false;

        const idx = state.items.findIndex(
          (c) => c.id === action.payload.id
        );

        if (idx !== -1) {

          state.items[idx] = action.payload;

        }

        state.message = "Categoría actualizada correctamente";

      })

      .addCase(updateCategoryApi.rejected, (state, action) => {

        state.loading = false;
        state.error = action.payload;
        state.message = "Error al actualizar categoría";

      })


      // =========================
      // DELETE
      // =========================

      .addCase(deleteCategoryApi.pending, (state) => {

        state.loading = true;
        state.error = null;
        state.message = "Eliminando categoría...";

      })

      .addCase(deleteCategoryApi.fulfilled, (state, action) => {

        state.loading = false;

        state.items = state.items.filter(
          (c) => c.id !== action.payload
        );

        state.message = "Categoría eliminada correctamente";

      })

      .addCase(deleteCategoryApi.rejected, (state, action) => {

        state.loading = false;
        state.error = action.payload;
        state.message = "Error al eliminar categoría";

      });

  },

});


// =========================
// SELECTORS
// =========================

export const selectCategories =
  (state) => state.categories.items;

export const selectCategoriesLoading =
  (state) => state.categories.loading;

export const selectCategoriesError =
  (state) => state.categories.error;

export const selectCategoriesMessage =
  (state) => state.categories.message;


export default categoriesSlice.reducer;