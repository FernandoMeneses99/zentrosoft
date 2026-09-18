// Contenido de la página VelarisPOS separado de la presentación (Fase 8).
// Textos e imágenes idénticos al sitio anterior.

export interface VpCard {
  img: string;
  alt: string;
  title: string;
  desc: string;
}

export const solucionCards: VpCard[] = [
  {
    img: '/img/velarispos/prob-inventario.svg',
    alt: 'La caja no habla con el inventario',
    title: 'La caja no habla con el inventario',
    desc: 'Vendes sin saber si hay stock real, provocando ventas fallidas y clientes inconformes.',
  },
  {
    img: '/img/velarispos/prob-tiempo.svg',
    alt: 'Sin visión en tiempo real',
    title: 'Sin visión en tiempo real',
    desc: 'Los reportes llegan tarde y mal. Decides con información desactualizada o inexistente.',
  },
  {
    img: '/img/velarispos/prob-perdidas.svg',
    alt: 'Productos perdidos',
    title: 'Productos perdidos',
    desc: 'Falta de alertas de stock, vencimientos y stock muerto: dinero que se pierde sin darte cuenta.',
  },
  {
    img: '/img/velarispos/sol-sistema.svg',
    alt: 'Un solo sistema',
    title: 'Un solo sistema',
    desc: 'Reemplaza 4 a 5 programas (POS, inventario, facturación, CRM, contabilidad) por uno solo.',
  },
  {
    img: '/img/velarispos/sol-datos.svg',
    alt: 'Datos al instante',
    title: 'Datos al instante',
    desc: 'Tienda, almacén, online y administración compartiendo la misma información en tiempo real.',
  },
  {
    img: '/img/velarispos/sol-decisiones.svg',
    alt: 'Decisiones informadas',
    title: 'Decisiones informadas',
    desc: 'Más de 60 reportes, panel de indicadores e inteligencia de negocios para crecer con claridad.',
  },
];

export const pilares: VpCard[] = [
  {
    img: '/img/velarispos/pilar-vender.svg',
    alt: 'Vender',
    title: 'Vender',
    desc: 'Punto de venta táctil, facturación, cotizaciones, pedidos, devoluciones y gift cards desde la caja.',
  },
  {
    img: '/img/velarispos/pilar-controlar.svg',
    alt: 'Controlar',
    title: 'Controlar',
    desc: 'Inventario multi-almacén, lotes, números de serie, caducidades, traslados y alertas de stock.',
  },
  {
    img: '/img/velarispos/pilar-vender-online.svg',
    alt: 'Vender online',
    title: 'Vender online',
    desc: 'Tienda en línea propia con tu marca, integrada con WooCommerce y Shopify y pasarelas de pago.',
  },
  {
    img: '/img/velarispos/pilar-decidir.svg',
    alt: 'Decidir',
    title: 'Decidir',
    desc: 'Más de 60 reportes, panel 3D, inteligencia de negocios e informes con IA para decidir bien.',
  },
];

export interface VpFeature {
  img: string;
  alt: string;
  title: string;
  items: string[];
}

export const features: VpFeature[] = [
  {
    img: '/img/velarispos/func-pos.svg',
    alt: 'Punto de Venta',
    title: 'Punto de Venta (POS)',
    items: [
      'Pantalla táctil rápida para cajeros',
      'Búsqueda por escáner y código de barras',
      'Arqueo de caja y cierres de turno',
      'Pantalla para el cliente y de cocina',
    ],
  },
  {
    img: '/img/velarispos/func-inventario.svg',
    alt: 'Inventario',
    title: 'Inventario',
    items: [
      'Multi-almacén y traslados entre sucursales',
      'Lotes, números de serie y caducidades',
      'Alertas de stock mínimo y stock muerto',
      'Conteo físico y ajustes auditados',
    ],
  },
  {
    img: '/img/velarispos/func-tienda.svg',
    alt: 'Tienda en línea',
    title: 'Tienda en línea',
    items: [
      'Tienda web con tu marca (color, logo, banners)',
      'Cupones, promociones y flash sales',
      'Portal para clientes (facturas y pagos)',
      'Integración WooCommerce y Shopify',
    ],
  },
  {
    img: '/img/velarispos/func-finanzas.svg',
    alt: 'Finanzas y contabilidad',
    title: 'Finanzas y contabilidad',
    items: [
      'Plan de cuentas, balance y P&L',
      'Flujo de caja y cuentas por cobrar/pagar',
      'Multi-moneda y transferencias internas',
      'Reportes fiscales exportables',
    ],
  },
  {
    img: '/img/velarispos/func-rrhh.svg',
    alt: 'Equipo, RR.HH. y nómina',
    title: 'Equipo, RR.HH. y nómina',
    items: [
      'Empleados, departamentos y asistencia',
      'Vacaciones, permisos y festivos',
      'Nómina / payroll integrado',
      'Comisiones por vendedor',
    ],
  },
  {
    img: '/img/velarispos/func-crm.svg',
    alt: 'CRM, marketing y fidelización',
    title: 'CRM, marketing y fidelización',
    items: [
      'Ficha de cliente con historial completo',
      'Puntos de fidelidad y recompensas',
      'Campañas por correo, SMS y WhatsApp',
      'E-wallet / monedero digital',
    ],
  },
];

export interface VpIndustry {
  img: string;
  label: string;
}

export const industries: VpIndustry[] = [
  { img: '/img/velarispos/ind-hospital.svg', label: 'Hospital / Clínica' },
  { img: '/img/velarispos/ind-escuela.svg', label: 'Escuela / Colegio' },
  { img: '/img/velarispos/ind-farmacia.svg', label: 'Farmacia' },
  { img: '/img/velarispos/ind-restaurante.svg', label: 'Restaurante' },
  { img: '/img/velarispos/ind-inmobiliaria.svg', label: 'Inmobiliaria' },
  { img: '/img/velarispos/ind-flota.svg', label: 'Flota / Vehículos' },
  { img: '/img/velarispos/ind-manufactura.svg', label: 'Manufactura / MRP' },
  { img: '/img/velarispos/ind-servicio-tecnico.svg', label: 'Servicio técnico' },
  { img: '/img/velarispos/ind-retail.svg', label: 'Retail' },
  { img: '/img/velarispos/ind-proyectos.svg', label: 'Proyectos' },
];

export const vpStackTiles = [
  { img: '/img/stack/laravel.svg', label: 'Laravel' },
  { img: '/img/stack/javascript.svg', label: 'Vue 3' },
  { img: '/img/stack/mysql.svg', label: 'MySQL' },
  { img: '/img/stack/tailwindcss.svg', label: 'Tailwind CSS' },
];

export interface VpTechItem {
  strong: string;
  span: string;
}

export const vpTechItems: VpTechItem[] = [
  { strong: 'Laravel (PHP 8)', span: 'Backend robusto y seguro, estándar de la industria' },
  { strong: 'Vue 3 + Ant Design', span: 'Interfaz de administración moderna y fluida' },
  { strong: 'MySQL', span: 'Datos relacionales y transaccionales' },
  { strong: 'Stripe · PayPal · QuickBooks', span: 'Pasarelas de pago e integraciones contables' },
  { strong: 'WooCommerce · Shopify', span: 'Sincroniza productos, pedidos y stock' },
  { strong: 'Español · English · Français · العربية', span: 'Multilenguaje con soporte RTL' },
];

export const vpReports: VpTechItem[] = [
  { strong: 'Ventas', span: 'Ingresos, ticket promedio, comparativos por día, mes y tienda.' },
  {
    strong: 'Inventario',
    span: 'Stock disponible, alertas, valorización y productos de lento movimiento.',
  },
  {
    strong: 'Finanzas',
    span: 'Flujo de caja, cuentas por cobrar/pagar y estado de resultados.',
  },
  {
    strong: 'Clientes y equipo',
    span: 'Tendencia de compras, fidelización, comisiones y desempeño por vendedor.',
  },
  {
    strong: 'Inteligencia con IA',
    span: 'Resúmenes automáticos y predicciones para anticiparte a tu demanda.',
  },
];
