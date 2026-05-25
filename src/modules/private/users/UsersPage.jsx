import {
  useEffect,
  useState
} from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  Table,
  Button,
  SearchBar
} from "lib-components-react";

import "./users.css";

import {

  fetchUsers,

  selectUsers,

  selectUsersLoading,

  selectUsersError,

} from "../../../store/slices/usersSlice";

// =========================
// COLUMNS
// =========================

const COLUMNS = [

  { key: "id", header: "ID" },

  { key: "first_name", header: "Nombre" },

  { key: "email", header: "Email" },

  { key: "role", header: "Rol" },

  { key: "gender", header: "Género" },

  { key: "country", header: "País" },

];

// =========================
// COMPONENT
// =========================

export default function Users() {

  // =========================
  // STATE
  // =========================

  const [query, setQuery] =
    useState("");

  // =========================
  // REDUX
  // =========================

  const dispatch =
    useDispatch();

  const users =
    useSelector(selectUsers);

  const loading =
    useSelector(selectUsersLoading);

  const error =
    useSelector(selectUsersError);

  // =========================
  // FETCH USERS
  // =========================

  useEffect(() => {

    dispatch(fetchUsers());

  }, [dispatch]);

  // =========================
  // FILTER
  // =========================

  const filtered =
    users.filter((u) => {

      const q =
        query.toLowerCase();

      return (

        (u.first_name || "")
          .toLowerCase()
          .includes(q)

        ||

        (u.email || "")
          .toLowerCase()
          .includes(q)

        ||

        (u.role || "")
          .toLowerCase()
          .includes(q)

        ||

        (u.country || "")
          .toLowerCase()
          .includes(q)

      );

    });

  // =========================
  // LOADING
  // =========================

  if (loading) {

    return (

      <div className="admin-module">

        <h2>
          Cargando usuarios...
        </h2>

      </div>

    );

  }

  // =========================
  // ERROR
  // =========================

  if (error) {

    return (

      <div className="admin-module">

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

    <section
      className="admin-module"
      aria-labelledby="users-title"
    >

      <header className="admin-module__header">

        <div className="admin-module__titles">

          <p className="admin-module__eyebrow">
            Administración
          </p>

          <h1
            id="users-title"
            className="admin-module__title"
          >
            Usuarios
          </h1>

        </div>

        <div className="admin-module__actions">

          <SearchBar
            query={query}
            onQueryChange={setQuery}
            onSearch={() => {}}
            placeholder="Buscar usuario..."
            buttonText="Buscar"
          />

          <Button
            variant="primary"
            iconName="Plus"
          >
            Nuevo usuario
          </Button>

        </div>

      </header>

      <Table
        data={filtered}
        columns={COLUMNS}
        keyField="id"
        emptyMessage="No hay usuarios."
        itemsPerPage={10}
      />

    </section>

  );

}