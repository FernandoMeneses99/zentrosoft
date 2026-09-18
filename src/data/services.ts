export interface Service {
  title: string;
  description: string;
  icon: string;
  accent: 'blue' | 'green';
}

const svgOpen = (accent: 'blue' | 'green') =>
  `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${accent === 'blue' ? '#4B82C3' : '#4FD290'}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">`;

export const services: Service[] = [
  {
    title: 'Creación de Landing Pages',
    description:
      'Diseño, desarrollo e implementación de páginas de aterrizaje enfocadas en la conversión y CTAs efectivas que transforman visitas en clientes.',
    accent: 'blue',
    icon: `${svgOpen('blue')}<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><circle cx="6.5" cy="6" r="0.5" fill="#4B82C3"/><circle cx="9.5" cy="6" r="0.5" fill="#4B82C3"/><path d="M7 14l2-2-2-2"/><path d="M12 15h4"/></svg>`,
  },
  {
    title: 'Optimización SEO',
    description:
      'Implementación de prácticas SEO on-page, etiquetas meta, estructuras de encabezados, optimización de imágenes y contenido para posicionar tu marca.',
    accent: 'green',
    icon: `${svgOpen('green')}<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><polyline points="8 12 10.5 9.5 13 12 16 8.5"/></svg>`,
  },
  {
    title: 'Consultoría y Capacitación',
    description:
      'Asesoramiento para pequeñas empresas y emprendedores sobre presencia web y herramientas como WordPress, para que tomes el control de tu proyecto.',
    accent: 'blue',
    icon: `${svgOpen('blue')}<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    title: 'Soporte Técnico',
    description:
      'Resolución de problemas en sitios web, configuración de dominios, hosting y correos electrónicos. Tu operación nunca se detiene.',
    accent: 'green',
    icon: `${svgOpen('green')}<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>`,
  },
  {
    title: 'Desarrollo Frontend',
    description:
      'Creación de interfaces modernas con Bootstrap e implementación de componentes interactivos con JavaScript que elevan la experiencia de tus usuarios.',
    accent: 'blue',
    icon: `${svgOpen('blue')}<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  },
  {
    title: 'Mantenimiento Web',
    description:
      'Actualización de contenido, corrección de errores, optimización de velocidad y actualización de temas o plugins para un sitio siempre al día.',
    accent: 'green',
    icon: `${svgOpen('green')}<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  },
  {
    title: 'Software a Medida',
    description:
      'Desarrollo de software personalizado y sistemas web adaptados 100% a tu operación. Creación de plataformas digitales y aplicaciones empresariales que automatizan procesos y hacen crecer tu negocio.',
    accent: 'blue',
    icon: `${svgOpen('blue')}<path d="M8 6L13 12L8 18"/><path d="M13 6L18 12L13 18"/></svg>`,
  },
  {
    title: 'Desarrollo de Aplicaciones Web',
    description:
      'Creamos aplicaciones web escalables y seguras como plataforma SaaS, software empresarial y sistemas en la nube. Soluciones de automatización de procesos listas para operar en cualquier dispositivo.',
    accent: 'green',
    icon: `${svgOpen('green')}<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  },
  {
    title: 'Desarrollo SaaS y Plataformas',
    description:
      'Construimos soluciones SaaS y plataformas digitales multi-usuario para transformar digitalmente tu empresa. Aplicaciones empresariales a medida con tecnología moderna y modelo de suscripción.',
    accent: 'blue',
    icon: `${svgOpen('blue')}<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  },
];
