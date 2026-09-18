export interface Plan {
  name: string;
  category: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
  message: string;
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    name: 'Zentro Start',
    category: 'Presencia digital',
    description: 'Una presencia web profesional para comenzar a posicionar tu negocio en Internet.',
    price: 'Desde $600.000 COP',
    features: [
      'Landing page profesional',
      'Diseño responsive',
      'Hasta 5 secciones',
      'Integración con WhatsApp',
      'Formulario de contacto',
      'Integración con redes sociales',
      'SEO básico',
      'Optimización básica de velocidad',
      'Configuración de Google Search Console',
      'Configuración de dominio y hosting',
      '1 ronda de ajustes',
    ],
    cta: 'Solicitar asesoría',
    message: 'Hola ZentroSoft, me interesa el plan Zentro Start. Quisiera una asesoría.',
  },
  {
    name: 'Zentro Business',
    category: 'Presencia + posicionamiento',
    description:
      'Una solución web más completa para empresas que buscan fortalecer su presencia digital y captar clientes.',
    price: 'Desde $1.200.000 COP',
    features: [
      'Sitio web profesional',
      'Diseño personalizado',
      'Hasta 8-10 secciones',
      'Diseño responsive',
      'SEO técnico',
      'SEO on-page',
      'Optimización de títulos y metadescripciones',
      'Estructura H1/H2/H3',
      'Datos estructurados cuando corresponda',
      'Google Search Console',
      'Google Analytics',
      'Optimización de imágenes',
      'Animaciones profesionales',
      'Integración con WhatsApp',
      'Formularios personalizados',
      'Blog básico',
      'Sitemap.xml',
      'robots.txt',
      '2 rondas de ajustes',
    ],
    cta: 'Solicitar asesoría',
    message: 'Hola ZentroSoft, me interesa el plan Zentro Business. Quisiera una asesoría.',
    featured: true,
  },
  {
    name: 'Zentro Pro',
    category: 'Plataforma digital',
    description:
      'Para negocios que necesitan más que una página web y requieren una solución digital funcional.',
    price: 'Desde $3.000.000 COP',
    features: [
      'Diseño UI/UX',
      'Desarrollo frontend',
      'Backend cuando sea necesario',
      'Base de datos',
      'Autenticación de usuarios',
      'Panel administrativo',
      'Formularios avanzados',
      'Gestión de información',
      'Integraciones con APIs',
      'Automatización de procesos',
      'SEO técnico',
      'Optimización de rendimiento',
      'Responsive',
      'Seguridad básica',
      'Deploy',
      'Configuración de producción',
      'Documentación básica',
    ],
    cta: 'Hablemos de tu proyecto',
    message:
      'Hola ZentroSoft, me interesa el plan Zentro Pro. Quisiera hablar de mi proyecto. Entiendo que el precio final depende del alcance y los requerimientos.',
  },
  {
    name: 'Zentro Custom',
    category: 'Software a medida',
    description:
      'Desarrollamos soluciones personalizadas para procesos y necesidades específicas de cada empresa.',
    price: 'Cotización personalizada',
    features: [
      'Análisis de requerimientos',
      'Arquitectura de software',
      'Diseño UI/UX',
      'Frontend',
      'Backend',
      'Base de datos',
      'APIs',
      'Autenticación',
      'Roles y permisos',
      'Panel administrativo',
      'Automatización',
      'Integraciones externas',
      'Reportes',
      'Notificaciones',
      'Integraciones de pago',
      'Deploy',
      'Documentación',
    ],
    cta: 'Cuéntanos tu proyecto',
    message: 'Hola ZentroSoft, quiero contarles mi proyecto para una cotización personalizada.',
  },
];

export const plansNote =
  'Los precios son valores iniciales de referencia. El valor final depende del alcance y los requerimientos de cada proyecto.';
