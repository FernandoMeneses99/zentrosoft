// Única fuente de verdad para datos estructurados (Fase 14).
// No existe JSON-LD en JavaScript: cada página lo recibe como prop serializada
// desde el layout. El eslogan oficial es "Centraliza. Automatiza. Crece.".

export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://zentrosoft.vercel.app/#organization',
      name: 'ZentroSoft',
      alternateName: 'ZentroSoft - Agencia de Desarrollo Web y Software a Medida',
      url: 'https://zentrosoft.vercel.app/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zentrosoft.vercel.app/img/Logo.png',
        width: 600,
        height: 200,
      },
      description:
        'ZentroSoft es una empresa de desarrollo de software y agencia de desarrollo web en Bogotá, especializada en software a medida, desarrollo de aplicaciones web, desarrollo SaaS, landing pages, optimización SEO, desarrollo frontend, consultoría, soporte técnico y mantenimiento web para pymes y emprendedores.',
      slogan: 'Centraliza. Automatiza. Crece.',
      foundingDate: '2025',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bogotá',
        addressRegion: 'Bogotá D.C.',
        addressCountry: 'CO',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Colombia',
      },
      knowsAbout: [
        'JavaScript',
        'Next.js',
        'Tailwind CSS',
        'Laravel',
        'PHP',
        'Bootstrap',
        'MySQL',
        'PostgreSQL',
        'WordPress',
        'SEO',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'contacto@zentrosoft.com',
        availableLanguage: 'Spanish',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://zentrosoft.vercel.app/#website',
      url: 'https://zentrosoft.vercel.app/',
      name: 'ZentroSoft - Agencia de Desarrollo Web y Software a Medida',
      description:
        'Desarrollo de software, desarrollo de aplicaciones web, desarrollo SaaS, desarrollo web y SEO en Bogotá, Colombia',
      publisher: {
        '@id': 'https://zentrosoft.vercel.app/#organization',
      },
      inLanguage: 'es',
    },
    {
      '@type': 'Service',
      name: 'Desarrollo de Software y Desarrollo Web a Medida',
      description:
        'Desarrollo de software a medida, desarrollo de aplicaciones web, desarrollo SaaS, creación de landing pages, optimización SEO, consultoría y capacitación, soporte técnico, desarrollo frontend y mantenimiento web para pymes y emprendedores.',
      provider: {
        '@id': 'https://zentrosoft.vercel.app/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Colombia',
      },
      serviceType: [
        'Desarrollo de Software a Medida',
        'Desarrollo de Aplicaciones Web',
        'Desarrollo SaaS',
        'Creación de Landing Pages',
        'Optimización SEO',
        'Consultoría y Capacitación',
        'Soporte Técnico',
        'Desarrollo Frontend',
        'Mantenimiento Web',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de ZentroSoft',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Creación de Landing Pages',
              description:
                'Diseño, desarrollo e implementación de páginas de aterrizaje enfocadas en la conversión y CTAs efectivas.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Optimización SEO',
              description:
                'Implementación de prácticas SEO on-page, etiquetas meta, estructuras de encabezados, optimización de imágenes y contenido.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Consultoría y Capacitación',
              description:
                'Asesoramiento para pequeñas empresas y emprendedores sobre presencia web y herramientas como WordPress.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Soporte Técnico',
              description:
                'Resolución de problemas en sitios web, configuración de dominios, hosting y correos electrónicos.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Desarrollo Frontend',
              description:
                'Creación de interfaces con Bootstrap e implementación de componentes interactivos con JavaScript.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mantenimiento Web',
              description:
                'Actualización de contenido, corrección de errores, optimización de velocidad y actualización de temas o plugins.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Desarrollo de Software a Medida',
              description:
                'Desarrollo de software personalizado y sistemas web adaptados a la operación del cliente, con automatización de procesos.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Desarrollo de Aplicaciones Web',
              description:
                'Creación de aplicaciones web escalables, aplicaciones empresariales y plataformas digitales seguras.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Desarrollo SaaS y Plataformas Digitales',
              description:
                'Construcción de soluciones SaaS multi-usuario y software empresarial en la nube para transformación digital.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'SoftwareApplication',
              name: 'VelarisPOS',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description:
                'Sistema de punto de venta ágil e intuitivo para gestionar ventas, inventario y reportes del negocio desde una sola plataforma.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'COP',
                description:
                  'Sistema de punto de venta y gestión empresarial (ERP) todo-en-uno. Solicite una demo y cotización a la medida.',
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'SoftwareApplication',
              name: 'Zentro Inmobiliaria',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description:
                'Plataforma integral para administrar propiedades, contratos y clientes, optimizando la operación de empresas y agentes inmobiliarios.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'COP',
                description:
                  'Plataforma integral de administración inmobiliaria. Solicite una demo personalizada.',
              },
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué servicios ofrece ZentroSoft?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZentroSoft ofrece creación de landing pages enfocadas en conversión, optimización SEO on-page, consultoría y capacitación en presencia web y WordPress, soporte técnico de dominios, hosting y correos, desarrollo frontend con Bootstrap y JavaScript, y mantenimiento web de contenidos, plugins y velocidad.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué tecnologías utiliza ZentroSoft?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Trabajamos con un stack moderno que incluye JavaScript, Next.js, Tailwind CSS, Laravel, PHP, Bootstrap, MySQL y PostgreSQL, además de herramientas como WordPress según las necesidades de cada proyecto.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta desarrollar una landing page?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El valor depende del alcance del proyecto: número de secciones, funcionalidades, integraciones y contenido. Escríbenos a través del formulario de contacto y recibirás una propuesta clara adaptada a tus necesidades y presupuesto.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué productos propios ofrece ZentroSoft?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contamos con dos productos propios: VelarisPOS, un sistema de punto de venta para gestionar ventas, inventario y reportes; y Zentro Inmobiliaria, una plataforma integral para administrar propiedades, contratos y clientes.',
          },
        },
        {
          '@type': 'Question',
          name: '¿En dónde opera ZentroSoft?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nuestra sede está en Bogotá D.C., Colombia, y acompañamos a pymes y emprendedores de todo el país tanto de forma presencial como remota.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué mi negocio necesita una landing page?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Una landing page profesional concentra la atención del visitante en una sola acción: comprar, cotizar o contactarte. Combinada con buenas prácticas SEO y llamadas a la acción efectivas, convierte más visitas en clientes y le da a tu marca credibilidad inmediata.',
          },
        },
      ],
    },
  ],
};

export const velarisJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'VelarisPOS',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://zentrosoft.vercel.app/velarispos.html',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
        description:
          'Sistema de punto de venta y gestión empresarial (ERP) todo-en-uno. Solicite una demo y cotización a la medida.',
      },
      description:
        'VelarisPOS es un sistema de Punto de Venta y gestión empresarial (ERP) todo-en-uno que une ventas en tienda, ventas online, inventario, facturación, contabilidad, equipo humano y marketing en una sola plataforma.',
      featureList: [
        'Punto de Venta táctil',
        'Inventario multi-almacén',
        'Tienda en línea propia',
        'Contabilidad y reportes',
        'Nómina y RR.HH.',
        'Fidelización y e-wallet',
        'Multi-idioma y multi-moneda',
      ],
      publisher: {
        '@type': 'Organization',
        name: 'ZentroSoft',
        url: 'https://zentrosoft.vercel.app/',
      },
      inLanguage: 'es',
    },
  ],
};
