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
// FETCH USERS
// =========================

export const fetchUsers =
  createAsyncThunk(

    "users/fetchUsers",

    async (_, thunkAPI) => {

      try {

        const response =
          await apiService.get(
            "/user/api/v1/users/"
          );

        console.log(
          "USERS RESPONSE:",
          response
        );

        return response;

      } catch (error) {

        return thunkAPI.rejectWithValue(

          error.message ||
          "Error al cargar usuarios"

        );

      }

    }

  );

// =========================
// CREATE USER
// =========================

export const createUserApi =
  createAsyncThunk(

    "users/createUserApi",

    async (
      userData,
      thunkAPI
    ) => {

      try {

        const response =
          await apiService.post(

            "/user/api/v1/register/",

            userData

          );

        return response;

      } catch (error) {

        return thunkAPI.rejectWithValue(

          error.message ||
          "Error al crear usuario"

        );

      }

    }

  );

// =========================
// LOGIN USER
// =========================

export const loginUserApi =
  createAsyncThunk(

    "users/loginUserApi",

    async (
      credentials,
      thunkAPI
    ) => {

      try {

        const response =
          await apiService.post(

            "/user/api/v1/login/",

            credentials

          );

        // =========================
        // SAVE JWT
        // =========================

        sessionStorage.setItem(

          "jwt",

          response.data.access

        );

        sessionStorage.setItem(

          "user",

          JSON.stringify(
            response.data.user
          )

        );

        return response;

      } catch (error) {

        return thunkAPI.rejectWithValue(

          error.message ||
          "Error al iniciar sesión"

        );

      }

    }

  );

// =========================
// SLICE
// =========================

const usersSlice = createSlice({

  name: "users",

  initialState,

  reducers: {

    logout(state) {

      sessionStorage.removeItem(
        "jwt"
      );

      sessionStorage.removeItem(
        "user"
      );

      state.message =
        "Sesión cerrada";

    },

  },

  extraReducers: (builder) => {

    builder

      // =========================
      // FETCH USERS
      // =========================

      .addCase(
        fetchUsers.pending,
        (state) => {

          state.loading = true;

          state.error = null;

          state.message =
            "Cargando usuarios...";

        }
      )

      .addCase(
        fetchUsers.fulfilled,
        (state, action) => {

          state.loading = false;

          state.items =
            action.payload.data;

          state.message =
            "Usuarios cargados correctamente";

        }
      )

      .addCase(
        fetchUsers.rejected,
        (state, action) => {

          state.loading = false;

          state.error =
            action.payload;

          state.message =
            "Error al cargar usuarios";

        }
      )

      // =========================
      // CREATE USER
      // =========================

      .addCase(
        createUserApi.pending,
        (state) => {

          state.loading = true;

          state.error = null;

          state.message =
            "Creando usuario...";

        }
      )

      .addCase(
        createUserApi.fulfilled,
        (state, action) => {

          state.loading = false;

          state.items.push(
            action.payload.data
          );

          state.message =
            "Usuario creado correctamente";

        }
      )

      .addCase(
        createUserApi.rejected,
        (state, action) => {

          state.loading = false;

          state.error =
            action.payload;

          state.message =
            "Error al crear usuario";

        }
      )

      // =========================
      // LOGIN USER
      // =========================

      .addCase(
        loginUserApi.pending,
        (state) => {

          state.loading = true;

          state.error = null;

          state.message =
            "Iniciando sesión...";

        }
      )

      .addCase(
        loginUserApi.fulfilled,
        (state) => {

          state.loading = false;

          state.message =
            "Sesión iniciada correctamente";

        }
      )

      .addCase(
        loginUserApi.rejected,
        (state, action) => {

          state.loading = false;

          state.error =
            action.payload;

          state.message =
            "Error al iniciar sesión";

        }
      );

  },

});

// =========================
// ACTIONS
// =========================

export const {
  logout
} = usersSlice.actions;

// =========================
// SELECTORS
// =========================

export const selectUsers =
  (state) => state.users.items;

export const selectUsersLoading =
  (state) => state.users.loading;

export const selectUsersError =
  (state) => state.users.error;

export const selectUsersMessage =
  (state) => state.users.message;

// =========================
// EXPORT
// =========================

export default usersSlice.reducer;