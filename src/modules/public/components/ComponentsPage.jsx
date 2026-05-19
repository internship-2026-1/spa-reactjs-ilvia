import React, { useState } from 'react';

import {
  Sumador,
  Button,
  RadioButton,
  Table,
  Table2,
  SearchBar,
  Input,
  FormField,
  Card,
  CardGrid,
  PromoCard,
  InfoCard
} from 'lib-components-react';

function ComponentsPage() {
  const [cantidad, setCantidad] = useState(1);
  const [opcion, setOpcion] = useState('A');
  const [query, setQuery] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const manejarCambio = (e) => {
    setOpcion(e.target.value);
  };

  const handleSearch = () => {
    alert(`Buscando: ${query}`);
  };

  const tableData = [
    {
      id: 1,
      name: 'RTX 4090',
      category: 'GPU',
      stock: 12,
      price: 1849,
      status: 'Activo',
      isActive: true
    },
    {
      id: 2,
      name: 'Ryzen 9',
      category: 'CPU',
      stock: 8,
      price: 699,
      status: 'Activo',
      isActive: true
    }
  ];

  const columns = [
    {
      key: 'name',
      header: 'PRODUCTO'
    },
    {
      key: 'price',
      header: 'PRECIO',
      render: (row) => `Q${row.price}`
    },
    {
      key: 'status',
      header: 'ESTADO'
    }
  ];

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}
    >
      <h1 style={{ fontSize: '2.5rem' }}>Laboratorio de Componentes</h1>

      {/* SUMADOR */}
      <section>
        <h2>Sumador</h2>
        <Sumador
          value={cantidad}
          onChange={setCantidad}
          min={1}
          max={10}
        />
      </section>

      {/* BOTONES */}
      <section>
        <h2>Botones</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg">
            Enviar
          </Button>

          <Button variant="secondary" size="lg">
            Comprar
          </Button>

          <Button variant="tertiary" size="lg">
            Configuración
          </Button>
        </div>
      </section>

      {/* RADIO BUTTON */}
      <section>
        <h2>RadioButton</h2>

        <div style={{ display: 'flex', gap: '30px' }}>
          <label>
            <RadioButton
              name="grupo1"
              value="A"
              checked={opcion === 'A'}
              onChange={manejarCambio}
            />
            Opción A
          </label>

          <label>
            <RadioButton
              name="grupo1"
              value="B"
              checked={opcion === 'B'}
              onChange={manejarCambio}
            />
            Opción B
          </label>
        </div>

        <p>Seleccionado: {opcion}</p>
      </section>

      {/* SEARCHBAR */}
      <section>
        <h2>SearchBar</h2>

        <div style={{ maxWidth: '600px' }}>
          <SearchBar
            query={query}
            placeholder="Buscar producto"
            buttonText="Buscar"
            onQueryChange={setQuery}
            onSearch={handleSearch}
          />
        </div>
      </section>

      {/* TABLE */}
      <section>
        <h2>Table</h2>

        <Table
          data={tableData}
          columns={columns}
          itemsPerPage={5}
        />
      </section>

      {/* TABLE2 */}
      <section>
        <h2>Table2</h2>

        <div style={{ maxWidth: '800px' }}>
          <Table2
            variant="simple"
            title="Especificaciones Técnicas"
            rows={[
              { label: 'Procesador', value: 'Intel Core i7' },
              { label: 'RAM', value: '16 GB' },
              { label: 'Disco', value: '512 GB SSD' },
              { label: 'Sistema', value: 'Windows 11' }
            ]}
          />
        </div>
      </section>

      {/* INPUTS */}
      <section>
        <h2>Inputs</h2>

        <div style={{ maxWidth: '500px' }}>
          <FormField label="Nombre" name="nombre">
            <Input
              name="nombre"
              placeholder="Ingresa tu nombre"
              changeValue={setNombre}
            />
          </FormField>

          <br />

          <FormField label="Email" name="email">
            <Input
              name="email"
              type="email"
              placeholder="correo@ejemplo.com"
              changeValue={setEmail}
            />
          </FormField>
        </div>

        <p><strong>Nombre:</strong> {nombre}</p>
        <p><strong>Email:</strong> {email}</p>
      </section>

      {/* CARDS */}
      <section>
        <h2>Cards</h2>

        <CardGrid columns={2} gap={30}>
          <Card
            title="Laptop Gamer"
            description="RTX 4090 + Ryzen 9"
            badge="NUEVO"
            tags={['64GB RAM', '2TB SSD']}
            footer={
              <Button variant="primary">
                Detalles
              </Button>
            }
          />

          <PromoCard
            title="Promoción"
            description="15% de descuento este mes"
          />
        </CardGrid>

        <br />

        <InfoCard
          title="Soporte Técnico"
          description="Asistencia técnica 24/7"
        />
      </section>
    </div>
  );
}

export default ComponentsPage;