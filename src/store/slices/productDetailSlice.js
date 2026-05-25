import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    {
      id: 1,
      gama: 'GAMA PERFORMANCE',
      title: 'Core i9-14900K',
      rating: 4.9,
      reviews: 128,
      description:
        'El procesador Intel Core i9-14900K redefine el rendimiento para escritorio. Con 24 núcleos y frecuencias de hasta 6.0 GHz, es la opción ideal para renderizado, gaming y desarrollo profesional.',
      specsHighlights: [
        '24 núcleos · 32 hilos · 6.0 GHz Turbo',
        'Socket LGA1700 · TDP 125W',
        'Compatible DDR5-5600 / DDR4-3200',
      ],
      price: 'Q525,00',
      image: 'https://placehold.co/600x420/0d1117/ffffff?text=Core+i9-14900K',
      specs: [
        {
          title: 'Rendimiento',
          rows: [
            { label: 'Núcleos', value: '24 (8P + 16E)' },
            { label: 'Frecuencia turbo', value: '6.0 GHz' },
            { label: 'Caché', value: '36 MB Intel Smart Cache' },
            { label: 'TDP', value: '125W (PL2: 253W)' },
          ],
        },
        {
          title: 'Compatibilidad',
          rows: [
            { label: 'Socket', value: 'LGA1700' },
            { label: 'Memoria', value: 'DDR5-5600 / DDR4-3200' },
            { label: 'PCIe', value: 'PCIe 5.0 x16 / 4.0 x4' },
            { label: 'Proceso', value: 'Intel 7 (10nm ESF)' },
          ],
        },
      ],
    },
    {
      id: 2,
      gama: 'GAMA ENTHUSIAST',
      title: 'RTX 4080 Super',
      rating: 4.8,
      reviews: 214,
      description:
        'La NVIDIA GeForce RTX 4080 Super ofrece rendimiento de nivel profesional para gaming 4K y creación de contenido. Arquitectura Ada Lovelace con 10240 CUDA cores.',
      specsHighlights: [
        '10240 CUDA Cores · 2550 MHz Boost',
        '16 GB GDDR6X · Bus 256-bit',
        'TDP 320W · PCIe 4.0 x16',
      ],
      price: 'Q1.100,00',
      image: 'https://placehold.co/600x420/0d1117/00d4ff?text=RTX+4080+Super',
      specs: [
        {
          title: 'Rendimiento Gráfico',
          rows: [
            { label: 'CUDA Cores', value: '10240' },
            { label: 'Frecuencia boost', value: '2550 MHz' },
            { label: 'VRAM', value: '16 GB GDDR6X' },
            { label: 'Ancho de banda', value: '736 GB/s' },
          ],
        },
        {
          title: 'Conectividad',
          rows: [
            { label: 'Interfaz', value: 'PCIe 4.0 x16' },
            { label: 'Salidas de video', value: '3x DP 1.4a, 1x HDMI 2.1' },
            { label: 'Resolución máx', value: '7680×4320 (8K)' },
            { label: 'TDP', value: '320W' },
          ],
        },
      ],
    },
    {
      id: 3,
      gama: 'GAMA MEMORIA',
      title: '32GB DDR5 6400MHz',
      rating: 4.7,
      reviews: 89,
      description:
        'Kit de memoria Kingston Fury Beast DDR5 optimizado para plataformas Intel y AMD de última generación. Perfiles XMP 3.0 y EXPO para overclocking automático.',
      specsHighlights: [
        '32 GB Kit (2×16 GB) · 6400 MHz',
        'Latencia CL32-39-39-102',
        'XMP 3.0 / EXPO compatible',
      ],
      price: 'Q145,50',
      image: 'https://placehold.co/600x420/0d1117/ffffff?text=DDR5+6400MHz',
      specs: [
        {
          title: 'Rendimiento',
          rows: [
            { label: 'Capacidad', value: '32 GB (2×16 GB)' },
            { label: 'Frecuencia', value: '6400 MHz' },
            { label: 'Latencia', value: 'CL32-39-39-102' },
            { label: 'Voltaje', value: '1.4V' },
          ],
        },
        {
          title: 'Compatibilidad',
          rows: [
            { label: 'Tipo', value: 'DDR5 DIMM 288-pin' },
            { label: 'Perfil', value: 'XMP 3.0 / EXPO' },
            { label: 'Factor de forma', value: 'UDIMM' },
            { label: 'Garantía', value: 'Lifetime' },
          ],
        },
      ],
    },
    {
      id: 4,
      gama: 'GAMA PRO',
      title: 'Z790 Master X',
      rating: 4.8,
      reviews: 56,
      description:
        'La ASUS ROG Maximus Z790 es la placa base definitiva para la plataforma Intel 13a y 14a generación. VRM de 20 fases y soporte completo para DDR5 y PCIe 5.0.',
      specsHighlights: [
        'Socket LGA1700 · Chipset Z790',
        '4x DDR5 · hasta 192 GB',
        'PCIe 5.0 x16 · Wi-Fi 7',
      ],
      price: 'Q620,00',
      image: 'https://placehold.co/600x420/0d1117/ffffff?text=Z790+Master+X',
      specs: [
        {
          title: 'Características',
          rows: [
            { label: 'Socket', value: 'LGA1700' },
            { label: 'Chipset', value: 'Intel Z790' },
            { label: 'Ranuras RAM', value: '4x DDR5 (hasta 192 GB)' },
            { label: 'VRM', value: '20+1+2 fases' },
          ],
        },
        {
          title: 'Conectividad',
          rows: [
            { label: 'PCIe', value: '1x PCIe 5.0 x16 · 2x PCIe 4.0 x16' },
            { label: 'M.2', value: '5x M.2 (hasta PCIe 5.0)' },
            { label: 'USB', value: 'Thunderbolt 4 · USB4 40Gbps' },
            { label: 'Red', value: '2.5G LAN + Wi-Fi 7' },
          ],
        },
      ],
    },
    {
      id: 5,
      gama: 'GAMA PERIFÉRICOS',
      title: 'Mouse Precision X1',
      rating: 4.6,
      reviews: 302,
      description:
        'El Logitech G Pro X Superlight 2 es el mouse inalámbrico más avanzado para gaming competitivo. Con tecnología LIGHTSPEED y sensor HERO 25K, ofrece 0 compromisos.',
      specsHighlights: [
        'Sensor HERO 25K · 100–25600 DPI',
        'LIGHTSPEED 2.4 GHz · 70h batería',
        'Peso: 61g · 6 botones programables',
      ],
      price: 'Q125,00',
      image: 'https://placehold.co/600x420/0d1117/ffffff?text=Mouse+Precision+X1',
      specs: [
        {
          title: 'Sensor y Rendimiento',
          rows: [
            { label: 'Sensor', value: 'HERO 25K' },
            { label: 'DPI', value: '100 – 25600' },
            { label: 'Tasa de encuesta', value: '1000 Hz' },
            { label: 'Botones', value: '6 programables' },
          ],
        },
        {
          title: 'Diseño y Conectividad',
          rows: [
            { label: 'Peso', value: '61 g' },
            { label: 'Conectividad', value: 'LIGHTSPEED 2.4 GHz' },
            { label: 'Batería', value: '70 horas' },
            { label: 'Compatibilidad', value: 'Windows / macOS / Linux' },
          ],
        },
      ],
    },
    {
      id: 6,
      gama: 'GAMA ALMACENAMIENTO',
      title: '2TB Gen5 SSD',
      rating: 4.9,
      reviews: 175,
      description:
        'El Samsung 990 Pro PCIe Gen 5 establece un nuevo estándar en velocidades de almacenamiento. Con lecturas de hasta 14500 MB/s, es el SSD más rápido para workstations.',
      specsHighlights: [
        'Lectura secuencial: 14500 MB/s',
        'PCIe Gen 5.0 x4 · NVMe 2.0 · M.2 2280',
        '2 TB · V-NAND MLC · 5 años garantía',
      ],
      price: 'Q209,00',
      image: 'https://placehold.co/600x420/0d1117/00d4ff?text=2TB+Gen5+SSD',
      specs: [
        {
          title: 'Rendimiento',
          rows: [
            { label: 'Lectura secuencial', value: '14500 MB/s' },
            { label: 'Escritura secuencial', value: '13500 MB/s' },
            { label: 'IOPS lectura', value: '2.200.000' },
            { label: 'IOPS escritura', value: '2.600.000' },
          ],
        },
        {
          title: 'Especificaciones',
          rows: [
            { label: 'Interfaz', value: 'PCIe Gen 5.0 x4 NVMe 2.0' },
            { label: 'Factor de forma', value: 'M.2 2280' },
            { label: 'NAND', value: 'Samsung V-NAND MLC' },
            { label: 'Garantía', value: '5 años / 2400 TBW' },
          ],
        },
      ],
    },
    {
      id: 7,
      gama: 'GAMA REFRIGERACIÓN',
      title: 'Hydro Elite 360',
      rating: 4.7,
      reviews: 93,
      description:
        'El Corsair H150i Elite Capellix es el sistema de refrigeración líquida AIO de 360mm más completo del mercado. Incluye tres ventiladores LL120 RGB y bomba de 3000 RPM.',
      specsHighlights: [
        'Radiador 360mm · 3x Ventiladores LL120 RGB',
        'Bomba 3000 RPM · Ruido máx 37 dBA',
        'Compatible LGA1700 / AM5 / AM4',
      ],
      price: 'Q159,00',
      image: 'https://placehold.co/600x420/0d1117/ffffff?text=Hydro+Elite+360',
      specs: [
        {
          title: 'Refrigeración',
          rows: [
            { label: 'Radiador', value: '360mm (3×120mm)' },
            { label: 'Ventiladores', value: '3× LL120 RGB · 400–2400 RPM' },
            { label: 'Bomba', value: '3000 RPM ±10%' },
            { label: 'Ruido máximo', value: '37 dBA' },
          ],
        },
        {
          title: 'Compatibilidad',
          rows: [
            { label: 'Sockets Intel', value: 'LGA1700 / 1200 / 115x' },
            { label: 'Sockets AMD', value: 'AM5 / AM4' },
            { label: 'Iluminación', value: 'iCUE RGB' },
            { label: 'Garantía', value: '5 años' },
          ],
        },
      ],
    },
    {
      id: 8,
      gama: 'GAMA FUENTES',
      title: '1200W Titanium',
      rating: 4.9,
      reviews: 61,
      description:
        'La Seasonic Prime TX-1200 es la fuente de poder con la mayor eficiencia del mercado. Certificación 80 PLUS Titanium y diseño completamente modular para instalaciones perfectas.',
      specsHighlights: [
        '1200W · 80+ Titanium (>94% eficiencia)',
        'Completamente modular · 2x 12VHPWR',
        'Protecciones OVP/UVP/OCP/SCP · 12 años garantía',
      ],
      price: 'Q145,00',
      image: 'https://placehold.co/600x420/0d1117/ffffff?text=1200W+Titanium',
      specs: [
        {
          title: 'Rendimiento Eléctrico',
          rows: [
            { label: 'Potencia', value: '1200W' },
            { label: 'Eficiencia', value: '80+ Titanium (>94% @ 50%)' },
            { label: 'Factor de forma', value: 'ATX (150×86×170 mm)' },
            { label: 'Ventilador', value: '135mm Fluid Dynamic Bearing' },
          ],
        },
        {
          title: 'Conectividad y Seguridad',
          rows: [
            { label: 'Cables', value: 'Completamente modular' },
            { label: 'Conectores 12VHPWR', value: '2×' },
            { label: 'Protecciones', value: 'OVP · UVP · OCP · OPP · SCP · OTP' },
            { label: 'Garantía', value: '12 años' },
          ],
        },
      ],
    },
  ],
}

const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {},
})

export const selectProductById = (id) => (state) =>
  state.productDetail.products.find((p) => p.id === Number(id))

export default productDetailSlice.reducer
