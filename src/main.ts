import './style.css'
import { initCookieConsent, trackEvent } from './cookie-consent'
import { initContactForm } from './contact-form'

const app = document.querySelector<HTMLDivElement>('#app')!

const PREFERS_REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// WhatsApp de contacto (formato internacional sin "+"): 57 + número
const WHATSAPP_NUMBER = '573009047298'
const WHATSAPP_MESSAGE = 'Hola ZentroSoft, quiero cotizar mi página web.'

app.innerHTML = `
<!-- ===== HEADER ===== -->
<header class="header" role="banner">
  <div class="container header-inner">
    <a href="#" class="logo" aria-label="ZentroSoft - Inicio">
      <img src="/img/logo.avif" alt="ZentroSoft - Agencia de Desarrollo Web en Bogotá" width="140" height="40" />
    </a>
    <nav class="nav-links" aria-label="Navegación principal">
      <a href="#servicios">Servicios</a>
      <a href="#productos">Productos</a>
      <a href="#nosotros">Nosotros</a>
      <a href="#clientes">Clientes</a>
      <a href="#contacto" class="nav-cta">Cotiza tu proyecto</a>
    </nav>
    <button class="menu-toggle" aria-label="Abrir menú de navegación">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<!-- ===== HERO ===== -->
<section class="hero" id="inicio" aria-label="Bienvenida a ZentroSoft - Desarrollo Web">
    <div class="hero-slides">
    <div class="hero-slide active">
      <img src="/img/Hero-1.avif" srcset="/img/Hero-1-960.avif 960w, /img/Hero-1-1440.avif 1440w, /img/Hero-1.avif 1920w" sizes="100vw" alt="Interfaces y landing pages desarrolladas por ZentroSoft" loading="eager" fetchpriority="high" width="1920" height="1080" />
    </div>
    <div class="hero-slide">
      <img src="/img/Hero-2.avif" srcset="/img/Hero-2-960.avif 960w, /img/Hero-2-1440.avif 1440w, /img/Hero-2.avif 1920w" sizes="100vw" alt="Equipo de desarrollo web de ZentroSoft trabajando en soluciones digitales" loading="eager" width="1920" height="1080" />
    </div>
  </div>

  <div class="container hero-content">
    <div class="hero-badge">
      <span class="hero-badge-dot"></span>
      Agencia de desarrollo web en Bogotá
    </div>
    <h1>
      Desarrollo Web y<br/>
      <span class="highlight"><span id="rotating-word">Soluciones Digitales</span><span class="type-caret" aria-hidden="true"></span></span>
    </h1>
    <p class="hero-text">
      Creamos landing pages que convierten visitas en clientes, optimizamos tu posicionamiento en buscadores y acompañamos la operación de tu sitio con soporte técnico especializado. Tecnología moderna para pymes y emprendedores.
    </p>
    <div class="hero-actions">
      <a href="#servicios" class="btn-primary">
        Ver Servicios
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a href="#contacto" class="btn-outline">
        Cotiza tu proyecto
      </a>
    </div>
    <div class="hero-stats">
      <div>
        <div class="hero-stat-number"><span data-count="2">2</span><span class="accent">+</span></div>
        <div class="hero-stat-label">Años de experiencia</div>
      </div>
      <div>
        <div class="hero-stat-number"><span data-count="6">6</span></div>
        <div class="hero-stat-label">Servicios especializados</div>
      </div>
      <div>
        <div class="hero-stat-number"><span data-count="2">2</span></div>
        <div class="hero-stat-label">Productos propios</div>
      </div>
    </div>
  </div>

  <div class="hero-indicators">
    <button class="hero-indicator active" data-slide="0" aria-label="Slide 1"></button>
    <button class="hero-indicator" data-slide="1" aria-label="Slide 2"></button>
  </div>
</section>

<!-- ===== SERVICES ===== -->
<main>
<section class="value-prop" id="servicios">
  <div class="container">
    <div class="value-prop-header">
      <div class="section-label">Nuestros Servicios</div>
      <h2 class="section-title">Todo lo que tu negocio necesita para triunfar en internet</h2>
      <p class="section-subtitle">
        De la idea al lanzamiento y más allá: cubrimos todo el ciclo de vida de tu sitio web con servicios especializados.
      </p>
    </div>

    <div class="value-grid value-grid--six">
      <div class="value-card">
        <div class="value-card-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4B82C3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><circle cx="6.5" cy="6" r="0.5" fill="#4B82C3"/><circle cx="9.5" cy="6" r="0.5" fill="#4B82C3"/><path d="M7 14l2-2-2-2"/><path d="M12 15h4"/></svg>
        </div>
        <h3>Creación de Landing Pages</h3>
        <p>Diseño, desarrollo e implementación de páginas de aterrizaje enfocadas en la conversión y CTAs efectivas que transforman visitas en clientes.</p>
      </div>

      <div class="value-card">
        <div class="value-card-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4FD290" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><polyline points="8 12 10.5 9.5 13 12 16 8.5"/></svg>
        </div>
        <h3>Optimización SEO</h3>
        <p>Implementación de prácticas SEO on-page, etiquetas meta, estructuras de encabezados, optimización de imágenes y contenido para posicionar tu marca.</p>
      </div>

      <div class="value-card">
        <div class="value-card-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4B82C3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h3>Consultoría y Capacitación</h3>
        <p>Asesoramiento para pequeñas empresas y emprendedores sobre presencia web y herramientas como WordPress, para que tomes el control de tu proyecto.</p>
      </div>

      <div class="value-card">
        <div class="value-card-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4FD290" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>
        </div>
        <h3>Soporte Técnico</h3>
        <p>Resolución de problemas en sitios web, configuración de dominios, hosting y correos electrónicos. Tu operación nunca se detiene.</p>
      </div>

      <div class="value-card">
        <div class="value-card-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4B82C3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </div>
        <h3>Desarrollo Frontend</h3>
        <p>Creación de interfaces modernas con Bootstrap e implementación de componentes interactivos con JavaScript que elevan la experiencia de tus usuarios.</p>
      </div>

      <div class="value-card">
        <div class="value-card-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4FD290" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
        </div>
        <h3>Mantenimiento Web</h3>
        <p>Actualización de contenido, corrección de errores, optimización de velocidad y actualización de temas o plugins para un sitio siempre al día.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== ABOUT / NUESTRA ORGANIZACIÓN ===== -->
<section class="about" id="nosotros">
  <div class="container">

    <!-- Misión + Propósito -->
    <div class="about-header">
      <div class="about-header-text">
        <div class="section-label">Nuestra Organización</div>
        <h2 class="section-title">Tu aliado tecnológico en Bogotá</h2>
      </div>
    </div>

    <div class="about-mission-grid">
      <div class="about-mission-card">
        <div class="about-mission-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B82C3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </div>
        <h3>Nuestra Misión</h3>
        <p>Empoderamos a pequeñas empresas y emprendedores mediante el diseño y desarrollo de soluciones web modernas, funcionales y accesibles. Combinamos tecnología actualizada, buenas prácticas de desarrollo y un servicio cercano para que cada proyecto se convierta en una herramienta real de crecimiento para su negocio.</p>
      </div>

      <div class="about-mission-card">
        <div class="about-mission-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4FD290" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <h3>Nuestro Propósito</h3>
        <p>Creemos que toda empresa, sin importar su tamaño, merece una presencia web profesional. Por eso acompañamos a nuestros clientes en cada etapa de su transformación digital: los asesoramos, los formamos y les brindamos soporte continuo, para que la tecnología sea una ventaja competitiva y no una barrera.</p>
      </div>
    </div>

    <!-- Valores -->
    <div class="about-values">
      <h3 class="about-values-title">Nuestros Valores</h3>
      <div class="about-values-grid">
        <div class="about-value-item">
          <div class="about-value-dot"></div>
          <div>
            <h4>Compromiso con Resultados</h4>
            <p>Cada proyecto se mide por el impacto real que genera en el negocio de nuestros clientes.</p>
          </div>
        </div>
        <div class="about-value-item">
          <div class="about-value-dot"></div>
          <div>
            <h4>Transparencia Total</h4>
            <p>Comunicación clara en cada etapa: alcances, plazos y costos sin sorpresas.</p>
          </div>
        </div>
        <div class="about-value-item">
          <div class="about-value-dot"></div>
          <div>
            <h4>Innovación Continua</h4>
            <p>Adoptamos tecnologías modernas para entregar soluciones actuales, rápidas y escalables.</p>
          </div>
        </div>
        <div class="about-value-item">
          <div class="about-value-dot"></div>
          <div>
            <h4>Cercanía y Servicio</h4>
            <p>Trabajamos codo a codo con pymes y emprendedores, entendiendo sus necesidades reales.</p>
          </div>
        </div>
        <div class="about-value-item">
          <div class="about-value-dot"></div>
          <div>
            <h4>Calidad y Detalle</h4>
            <p>Código limpio, buen rendimiento y cuidado estético en cada entrega.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Stack tecnológico -->
    <div class="about-partner" id="stack">
      <div class="about-partner-content">
        <h3>Tecnologías que Dominamos</h3>
        <p>Trabajamos con un stack moderno y probado para construir soluciones rápidas, seguras y escalables: desde interfaces atractivas hasta bases de datos robustas que soportan el crecimiento de tu negocio.</p>
        <div class="stack-grid">
          <span class="stack-tile" role="img" aria-label="JavaScript" title="JavaScript"><img src="/img/stack/javascript.svg" alt="" loading="lazy" width="38" height="38" /></span>
          <span class="stack-tile" role="img" aria-label="Next.js" title="Next.js"><img src="/img/stack/nextjs.svg" alt="" loading="lazy" width="38" height="38" style="filter: invert(1)" /></span>
          <span class="stack-tile" role="img" aria-label="Tailwind CSS" title="Tailwind CSS"><img src="/img/stack/tailwindcss.svg" alt="" loading="lazy" width="38" height="38" /></span>
          <span class="stack-tile" role="img" aria-label="Laravel" title="Laravel"><img src="/img/stack/laravel.svg" alt="" loading="lazy" width="38" height="38" /></span>
          <span class="stack-tile" role="img" aria-label="PHP" title="PHP"><img src="/img/stack/php.svg" alt="" loading="lazy" width="38" height="38" /></span>
          <span class="stack-tile" role="img" aria-label="Bootstrap" title="Bootstrap"><img src="/img/stack/bootstrap.svg" alt="" loading="lazy" width="38" height="38" /></span>
          <span class="stack-tile" role="img" aria-label="MySQL" title="MySQL"><img src="/img/stack/mysql.svg" alt="" loading="lazy" width="38" height="38" /></span>
          <span class="stack-tile" role="img" aria-label="PostgreSQL" title="PostgreSQL"><img src="/img/stack/postgresql.svg" alt="" loading="lazy" width="38" height="38" /></span>
        </div>
      </div>
    </div>

    <!-- Stats highlights -->
    <div class="about-highlights">
      <div class="about-highlight">
        <div class="about-highlight-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4B82C3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </div>
        <h4>Foco en</h4>
        <span>Desarrollo Web</span>
      </div>
      <div class="about-highlight">
        <div class="about-highlight-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4FD290" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h4>+2 Años de</h4>
        <span>Experiencia</span>
      </div>
      <div class="about-highlight">
        <div class="about-highlight-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4B82C3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
        </div>
        <h4>2 Productos</h4>
        <span>Propios</span>
      </div>
      <div class="about-highlight">
        <div class="about-highlight-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4FD290" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <h4>Sede en</h4>
        <span>Bogotá D.C.</span>
      </div>
    </div>

  </div>
</section>

<!-- ===== CLIENTS CAROUSEL ===== -->
<section class="logos-section" id="clientes" aria-label="Clientes de ZentroSoft">
  <div class="container">
    <div class="logos-section-header">
      <div class="section-label">Nuestros Clientes</div>
      <h2 class="section-title">Marcas que Confían en Nosotros</h2>
    </div>
  </div>
  <div class="logos-track-wrapper">
    <div class="logos-track">
      <!-- Logos de ejemplo: reemplazar con los logos reales de los clientes -->
      <div class="logo-item"><img src="/img/clients/horizonte.svg" alt="Horizonte Inmobiliaria - Cliente de ZentroSoft" loading="lazy" width="150" height="50" /></div>
      <div class="logo-item"><img src="/img/clients/origen.svg" alt="Origen Café - Cliente de ZentroSoft" loading="lazy" width="150" height="50" /></div>
      <div class="logo-item"><img src="/img/clients/vitalis.svg" alt="Vitalis Centro Médico - Cliente de ZentroSoft" loading="lazy" width="150" height="50" /></div>
      <div class="logo-item"><img src="/img/clients/aurora.svg" alt="Aurora Boutique - Cliente de ZentroSoft" loading="lazy" width="150" height="50" /></div>
      <div class="logo-item"><img src="/img/clients/rumbo.svg" alt="Rumbo Logística - Cliente de ZentroSoft" loading="lazy" width="150" height="50" /></div>
      <div class="logo-item"><img src="/img/clients/Dolphin.avif" alt="Dolphi - Cliente de ZentroSoft" loading="lazy" width="50" height="50" /></div>
      <div class="logo-item"><img src="/img/clients/Krokori.webp" alt="Krokori - Cliente de ZentroSoft" loading="lazy" width="120" height="48" /></div>
      <div class="logo-item"><img src="/img/clients/RealTime.avif" alt="RealTime - Cliente de ZentroSoft" loading="lazy" width="146" height="40" /></div>
      <div class="logo-item"><img src="/img/clients/PsicoStephania.svg" alt="PsicoStephania - Cliente de ZentroSoft" loading="lazy" width="150" height="50" /></div>
      <!-- Duplicate set for infinite scroll -->
      <div class="logo-item" aria-hidden="true"><img src="/img/clients/horizonte.svg" alt="" loading="lazy" width="150" height="50" /></div>
      <div class="logo-item" aria-hidden="true"><img src="/img/clients/origen.svg" alt="" loading="lazy" width="150" height="50" /></div>
      <div class="logo-item" aria-hidden="true"><img src="/img/clients/vitalis.svg" alt="" loading="lazy" width="150" height="50" /></div>
      <div class="logo-item" aria-hidden="true"><img src="/img/clients/aurora.svg" alt="" loading="lazy" width="150" height="50" /></div>
      <div class="logo-item" aria-hidden="true"><img src="/img/clients/rumbo.svg" alt="" loading="lazy" width="150" height="50" /></div>
      <div class="logo-item" aria-hidden="true"><img src="/img/clients/Dolphin.avif" alt="" loading="lazy" width="50" height="50" /></div>
      <div class="logo-item" aria-hidden="true"><img src="/img/clients/Krokori.webp" alt="" loading="lazy" width="120" height="48" /></div>
      <div class="logo-item" aria-hidden="true"><img src="/img/clients/RealTime.avif" alt="" loading="lazy" width="146" height="40" /></div>
      <div class="logo-item" aria-hidden="true"><img src="/img/clients/PsicoStephania.svg" alt="" loading="lazy" width="150" height="50" /></div>
    </div>
  </div>
</section>

<!-- ===== PRODUCTS ===== -->
<section class="news-section" id="productos" aria-label="Productos propios de ZentroSoft">
  <div class="container">
    <div class="news-header">
      <div>
        <div class="section-label">Nuestros Productos</div>
        <h2 class="section-title">Soluciones Propias ZentroSoft</h2>
        <p class="section-subtitle">Productos desarrollados internamente con nuestro stack tecnológico, listos para impulsar la operación de tu negocio.</p>
      </div>
      <div class="news-nav">
        <button class="news-nav-btn" id="news-prev" aria-label="Producto anterior">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button class="news-nav-btn" id="news-next" aria-label="Siguiente producto">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>

    <div class="news-carousel-wrapper">
      <div class="news-carousel" id="news-carousel">
        <article class="news-card">
          <div class="news-card-image">
            <img src="/img/product-velarispos.svg" alt="VelarisPOS - Sistema de punto de venta de ZentroSoft" loading="lazy" width="380" height="220" />
            <span class="news-card-tag">Punto de Venta</span>
          </div>
          <div class="news-card-body">
            <h3 class="news-card-title">VelarisPOS</h3>
            <p class="news-card-excerpt">Sistema de punto de venta ágil e intuitivo para gestionar ventas, inventario y reportes de tu negocio desde una sola plataforma. Diseñado para comercios que necesitan velocidad, control y claridad en cada transacción.</p>
            <a href="/velarispos.html" target="_blank" rel="noopener noreferrer" class="btn-primary news-card-btn" aria-label="Conocer VelarisPOS (se abre en nueva pestaña)">Conocer VelarisPOS</a>
          </div>
        </article>

        <article class="news-card">
          <div class="news-card-image">
            <img src="/img/product-zentro-inmobiliaria.svg" alt="Zentro Inmobiliaria - Plataforma de gestión inmobiliaria de ZentroSoft" loading="lazy" width="380" height="220" />
            <span class="news-card-tag">Gestión Inmobiliaria</span>
          </div>
          <div class="news-card-body">
            <h3 class="news-card-title">Zentro Inmobiliaria</h3>
            <p class="news-card-excerpt">Plataforma integral para administrar propiedades, contratos y clientes. Optimiza la operación de empresas y agentes inmobiliarios centralizando toda la información del portafolio en un solo lugar.</p>
            <a href="https://zentro.com.co" target="_blank" rel="noopener noreferrer" class="btn-primary news-card-btn" aria-label="Conocer Zentro Inmobiliaria (se abre en nueva pestaña)">Conocer Zentro Inmobiliaria</a>
          </div>
        </article>

        <article class="news-card news-card--cta">
          <div class="news-card-body news-card-body--cta">
            <span class="news-card-tag">Proyectos a la Medida</span>
            <h3 class="news-card-title">¿Tienes un proyecto en mente?</h3>
            <p class="news-card-excerpt">Aplicamos nuestra experiencia construyendo productos propios para desarrollar la solución digital que tu negocio necesita: sistemas web, plataformas de gestión o tu próxima gran idea.</p>
            <a href="#contacto" class="btn-primary news-card-btn">
              Cuéntanos tu idea
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
<!-- ===== FAQ ===== -->
<section class="faq-section" id="faq" aria-label="Preguntas frecuentes">
  <div class="container">
    <div class="value-prop-header">
      <div class="section-label">Preguntas Frecuentes</div>
      <h2 class="section-title">Resolvemos tus dudas</h2>
      <p class="section-subtitle">Todo lo que necesitas saber antes de iniciar tu proyecto con nosotros.</p>
    </div>

    <div class="faq-list">
      <details class="faq-item">
        <summary>
          <span>¿Qué servicios ofrece ZentroSoft?</span>
          <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <p>Ofrecemos creación de landing pages enfocadas en conversión, optimización SEO on-page, consultoría y capacitación en presencia web y WordPress, soporte técnico de dominios, hosting y correos, desarrollo frontend con Bootstrap y JavaScript, y mantenimiento web completo.</p>
      </details>

      <details class="faq-item">
        <summary>
          <span>¿Qué tecnologías utiliza ZentroSoft?</span>
          <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <p>Trabajamos con un stack moderno que incluye JavaScript, Next.js, Tailwind CSS, Laravel, PHP, Bootstrap, MySQL y PostgreSQL, además de herramientas como WordPress según las necesidades de cada proyecto.</p>
      </details>

      <details class="faq-item">
        <summary>
          <span>¿Cuánto cuesta desarrollar una landing page?</span>
          <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <p>El valor depende del alcance del proyecto: número de secciones, funcionalidades, integraciones y contenido. Escríbenos por el formulario o WhatsApp y recibirás una propuesta clara adaptada a tus necesidades y presupuesto.</p>
      </details>

      <details class="faq-item">
        <summary>
          <span>¿Qué productos propios ofrece ZentroSoft?</span>
          <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <p>Contamos con dos productos propios: VelarisPOS, un sistema de punto de venta para gestionar ventas, inventario y reportes; y Zentro Inmobiliaria, una plataforma integral para administrar propiedades, contratos y clientes.</p>
      </details>

      <details class="faq-item">
        <summary>
          <span>¿En dónde opera ZentroSoft?</span>
          <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <p>Nuestra sede está en Bogotá D.C., Colombia, y acompañamos a pymes y emprendedores de todo el país tanto de forma presencial como remota.</p>
      </details>

      <details class="faq-item">
        <summary>
          <span>¿Por qué mi negocio necesita una landing page?</span>
          <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <p>Una landing page profesional concentra la atención del visitante en una sola acción: comprar, cotizar o contactarte. Combinada con buenas prácticas SEO y llamadas a la acción efectivas, convierte más visitas en clientes y le da a tu marca credibilidad inmediata.</p>
      </details>
    </div>
  </div>
</section>
</main>

<!-- ===== CONTACT FORM ===== -->
<section class="contact" id="contacto" aria-label="Formulario de contacto">
  <div class="container">
    <div class="contact-grid">

      <div class="contact-info">
        <div class="section-label">Contacto</div>
        <h2 class="section-title">Hablemos de tu proyecto</h2>
        <p class="section-subtitle">
          Completa el formulario y recibe una propuesta clara y personalizada para tu sitio web o producto digital.
        </p>

        <ul class="contact-details">
          <li class="contact-detail">
            <span class="contact-detail-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4FD290" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </span>
            <div>
              <span class="contact-detail-label">Correo</span>
              <a href="mailto:contacto@zentrosoft.com">contacto@zentrosoft.com</a>
            </div>
          </li>
          <li class="contact-detail">
            <span class="contact-detail-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4FD290" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </span>
            <div>
              <span class="contact-detail-label">Teléfono</span>
              <a href="tel:+573009047298">+57 300 904 7298</a>
            </div>
          </li>
          <li class="contact-detail">
            <span class="contact-detail-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4FD290" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <div>
              <span class="contact-detail-label">Ubicación</span>
              <span>Bogotá D.C., Colombia</span>
            </div>
          </li>
        </ul>

        <div class="contact-badge">
          <span class="hero-badge-dot"></span>
          Respuesta en menos de 24 horas hábiles
        </div>
      </div>

      <div class="contact-form-card">
        <form id="contact-form" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label for="cf-nombre">Nombre completo <span aria-hidden="true">*</span></label>
              <input type="text" id="cf-nombre" name="nombre" required autocomplete="name" placeholder="Su nombre" />
            </div>
            <div class="form-group">
              <label for="cf-email">Correo electrónico <span aria-hidden="true">*</span></label>
              <input type="email" id="cf-email" name="email" required autocomplete="email" placeholder="nombre@tuempresa.com" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="cf-telefono">Teléfono / WhatsApp</label>
              <input type="tel" id="cf-telefono" name="telefono" autocomplete="tel" placeholder="+57 300 000 0000" />
            </div>
            <div class="form-group">
              <label for="cf-empresa">Empresa <span aria-hidden="true">*</span></label>
              <input type="text" id="cf-empresa" name="empresa" required autocomplete="organization" placeholder="Nombre de tu empresa o emprendimiento" />
            </div>
          </div>

          <div class="form-group">
            <label for="cf-servicio">Servicio de interés</label>
            <select id="cf-servicio" name="servicio">
              <option value="">Seleccione una opción (opcional)</option>
              <option value="Creación de Landing Pages">Creación de Landing Pages</option>
              <option value="Optimización SEO">Optimización SEO</option>
              <option value="Consultoría y Capacitación">Consultoría y Capacitación</option>
              <option value="Soporte Técnico">Soporte Técnico</option>
              <option value="Desarrollo Frontend">Desarrollo Frontend</option>
              <option value="Mantenimiento Web">Mantenimiento Web</option>
              <option value="VelarisPOS">VelarisPOS (Producto)</option>
              <option value="Zentro Inmobiliaria">Zentro Inmobiliaria (Producto)</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div class="form-group">
            <label for="cf-mensaje">Mensaje <span aria-hidden="true">*</span></label>
            <textarea id="cf-mensaje" name="mensaje" rows="5" required placeholder="Cuéntanos sobre tu proyecto o necesidad"></textarea>
          </div>

          <input type="text" name="website" class="hp-field" tabindex="-1" autocomplete="off" aria-hidden="true" />

          <div class="form-consent">
            <input type="checkbox" id="cf-consent" name="consentimiento" required />
            <label for="cf-consent">
              Autorizo de manera libre, expresa e informada el tratamiento de mis datos personales conforme a la
              <a href="/politica-privacidad.html" target="_blank" rel="noopener noreferrer">Política de Privacidad y Tratamiento de Datos Personales</a>
              de ZentroSoft. <span aria-hidden="true">*</span>
            </label>
          </div>

          <button type="submit" id="form-submit" class="btn-primary form-submit">
            Enviar mensaje
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>

          <p id="form-status" class="form-status" role="status" aria-live="polite"></p>
        </form>
      </div>

    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="#" class="logo">
          <img src="/img/logo.avif" alt="ZentroSoft - Agencia de Desarrollo Web" width="140" height="40" />
        </a>
        <p>Agencia de desarrollo web en Bogotá. Diseñamos y construimos experiencias digitales que convierten visitantes en clientes.</p>
      </div>

      <div class="footer-col">
        <h4>Servicios</h4>
        <ul>
          <li><a href="#servicios">Landing Pages</a></li>
          <li><a href="#servicios">Optimización SEO</a></li>
          <li><a href="#servicios">Desarrollo Frontend</a></li>
          <li><a href="#servicios">Soporte Técnico</a></li>
          <li><a href="#servicios">Mantenimiento Web</a></li>
          <li><a href="#servicios">Consultoría</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Empresa</h4>
        <ul>
          <li><a href="#nosotros">Sobre Nosotros</a></li>
          <li><a href="#productos">VelarisPOS</a></li>
          <li><a href="#productos">Zentro Inmobiliaria</a></li>
          <li><a href="#clientes">Nuestros Clientes</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contacto</h4>
        <ul>
          <li><a href="mailto:contacto@zentrosoft.com">contacto@zentrosoft.com</a></li>
          <li><a href="#contacto">Bogotá, Colombia</a></li>
          <li><a href="tel:+573009047298">+57 300 904 7298</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} ZentroSoft. Todos los derechos reservados.</p>
      <ul class="footer-legal-links">
        <li><a href="/politica-privacidad.html" target="_blank" rel="noopener noreferrer">Política de Privacidad</a></li>
        <li><a href="/politica-cookies.html" target="_blank" rel="noopener noreferrer">Política de Cookies</a></li>
        <li><a href="/terminos-servicio.html" target="_blank" rel="noopener noreferrer">Términos de Servicio</a></li>
        <li><button type="button" id="cookie-settings" class="footer-legal-button">Configuración de Cookies</button></li>
      </ul>
      <div class="footer-socials">
        <a href="https://www.linkedin.com/company/zentrosoftco/" class="footer-social-link" aria-label="LinkedIn">in</a>
        <a href="#" class="footer-social-link" aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="#" class="footer-social-link" aria-label="Facebook">f</a>
      </div>
    </div>
  </div>
</footer>

<!-- ===== WHATSAPP FLOATING BUTTON ===== -->
<a
  href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}"
  class="whatsapp-btn"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Escríbenos por WhatsApp"
>
  <span class="whatsapp-btn-label">¿Hablamos?</span>
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
</a>
`

/* ============================================
   HERO CAROUSEL - Auto-rotate every 3 seconds
   ============================================ */
function initHeroCarousel() {
  const slides = document.querySelectorAll<HTMLDivElement>('.hero-slide')
  const indicators = document.querySelectorAll<HTMLButtonElement>('.hero-indicator')
  let currentSlide = 0

  function goToSlide(index: number) {
    slides[currentSlide].classList.remove('active')
    indicators[currentSlide].classList.remove('active')
    currentSlide = index
    slides[currentSlide].classList.add('active')
    indicators[currentSlide].classList.add('active')
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length)
  }

  if (!PREFERS_REDUCED_MOTION) {
    setInterval(nextSlide, 3000)
  }

  indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
      const slideIndex = parseInt(indicator.dataset.slide || '0')
      goToSlide(slideIndex)
    })
  })
}

/* ============================================
   PRODUCTS CAROUSEL - Navigation buttons
   ============================================ */
function initNewsCarousel() {
  const carousel = document.getElementById('news-carousel') as HTMLDivElement
  const prevBtn = document.getElementById('news-prev') as HTMLButtonElement
  const nextBtn = document.getElementById('news-next') as HTMLButtonElement

  if (!carousel || !prevBtn || !nextBtn) return

  const scrollAmount = 380

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  })

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  })
}

/* ============================================
   HEADER SCROLL EFFECT
   ============================================ */
function initHeaderScroll() {
  const header = document.querySelector<HTMLDivElement>('.header')
  if (!header) return

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(10, 22, 40, 0.95)'
    } else {
      header.style.background = 'rgba(10, 22, 40, 0.85)'
    }
  })
}

/* ============================================
   SMOOTH SCROLL for anchor links
   ============================================ */
function initSmoothScroll() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
}

/* ============================================
   COUNT-UP - Hero stats animate when visible
   ============================================ */
function initCountUp() {
  const counters = document.querySelectorAll<HTMLElement>('[data-count]')
  if (!counters.length || PREFERS_REDUCED_MOTION) return

  const animateCounter = (el: HTMLElement) => {
    const target = parseInt(el.dataset.count || '0', 10)
    const duration = 1200
    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      el.textContent = String(Math.round(target * eased))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        animateCounter(entry.target as HTMLElement)
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.4 }
  )

  counters.forEach((el) => {
    el.textContent = '0'
    observer.observe(el)
  })
}

/* ============================================
   ROTATING WORD - Typewriter in hero title
   ============================================ */
function initRotatingWord() {
  const wordEl = document.getElementById('rotating-word')
  if (!wordEl || PREFERS_REDUCED_MOTION) return

  const words = ['Soluciones Digitales', 'Landing Pages', 'Optimización SEO', 'Soporte Especializado']
  let wordIndex = 0
  let charIndex = words[0].length
  let isDeleting = false

  const tick = () => {
    const currentWord = words[wordIndex]

    if (!isDeleting) {
      charIndex++
      wordEl.textContent = currentWord.slice(0, charIndex)
      if (charIndex === currentWord.length) {
        isDeleting = true
        setTimeout(tick, 2400)
        return
      }
      setTimeout(tick, 75)
    } else {
      charIndex--
      wordEl.textContent = currentWord.slice(0, charIndex)
      if (charIndex === 0) {
        isDeleting = false
        wordIndex = (wordIndex + 1) % words.length
        setTimeout(tick, 350)
        return
      }
      setTimeout(tick, 38)
    }
  }

  setTimeout(tick, 2400)
}

/* ============================================
   SCROLL ANIMATIONS - Intersection Observer + Stagger
   ============================================ */
function initScrollAnimations() {
  const targets = document.querySelectorAll<HTMLElement>(
    '.value-card, .about-mission-card, .about-value-item, .about-highlight, .news-card, .faq-item'
  )
  if (!targets.length || PREFERS_REDUCED_MOTION) return

  const staggerContainers = [
    '.value-grid',
    '.about-mission-grid',
    '.about-values-grid',
    '.about-highlights',
    '.news-carousel',
    '.faq-list'
  ]
  const delayMap = new Map<HTMLElement, number>()

  staggerContainers.forEach((selector) => {
    const container = document.querySelector(selector)
    if (!container) return
    Array.from(container.children).forEach((child, index) => {
      delayMap.set(child as HTMLElement, Math.min(index * 90, 450))
    })
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        el.classList.add('visible')
        const delay = delayMap.get(el) ?? 0
        window.setTimeout(() => {
          el.style.transitionDelay = '0ms'
        }, delay + 650)
        observer.unobserve(el)
      })
    },
    { threshold: 0.1 }
  )

  targets.forEach((el) => {
    const delay = delayMap.get(el) ?? 0
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`
    observer.observe(el)
  })
}

/* Add visible state */
const style = document.createElement('style')
style.textContent = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`
document.head.appendChild(style)

/* ============================================
   MOBILE MENU
   ============================================ */
function initMobileMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
  const nav = document.querySelector<HTMLDivElement>('.nav-links')
  if (!toggle || !nav) return

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open')
    toggle.classList.toggle('menu-open', isOpen)
    toggle.setAttribute('aria-expanded', String(isOpen))
  })

  nav.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).tagName === 'A') {
      nav.classList.remove('nav-open')
      toggle.classList.remove('menu-open')
      toggle.setAttribute('aria-expanded', 'false')
    }
  })
}

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel()
  initCountUp()
  initRotatingWord()
  initNewsCarousel()
  initHeaderScroll()
  initSmoothScroll()
  initScrollAnimations()
  initMobileMenu()
  injectDynamicJSONLD()
/* ============================================
   EVENTOS DE CONVERSIÓN (GA4)
   ============================================ */
function initConversionTracking() {
  document.querySelectorAll<HTMLAnchorElement>('.whatsapp-btn').forEach((link) => {
    link.addEventListener('click', () => {
      trackEvent('contact_whatsapp', { method: 'boton_flotante' })
    })
  })

  document.querySelectorAll<HTMLDetailsElement>('.faq-item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open || item.dataset.faqTracked) return
      item.dataset.faqTracked = '1'
      const question = item.querySelector('summary span')?.textContent?.trim() ?? ''
      trackEvent('faq_open', { question: question.slice(0, 80) })
    })
  })
}

initCookieConsent()
initContactForm()
initConversionTracking()
})

/* ============================================
   DYNAMIC JSON-LD - Services & FAQ
   ============================================ */
function injectDynamicJSONLD() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Desarrollo Web y Soluciones Digitales",
    "provider": {
      "@type": "Organization",
      "name": "ZentroSoft",
      "url": "https://zentrosoft.vercel.app/"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de ZentroSoft",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Creación de Landing Pages",
            "description": "Diseño, desarrollo e implementación de páginas de aterrizaje enfocadas en la conversión y CTAs efectivas."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Optimización SEO",
            "description": "Implementación de prácticas SEO on-page, etiquetas meta, estructuras de encabezados, optimización de imágenes y contenido."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoría y Capacitación",
            "description": "Asesoramiento para pequeñas empresas y emprendedores sobre presencia web y herramientas como WordPress."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Soporte Técnico",
            "description": "Resolución de problemas en sitios web, configuración de dominios, hosting y correos electrónicos."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo Frontend",
            "description": "Creación de interfaces con Bootstrap e implementación de componentes interactivos con JavaScript."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mantenimiento Web",
            "description": "Actualización de contenido, corrección de errores, optimización de velocidad y actualización de temas o plugins."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "VelarisPOS",
            "url": "https://zentrosoft.vercel.app/velarispos.html",
            "description": "Sistema de punto de venta ágil e intuitivo para gestionar ventas, inventario y reportes del negocio."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Zentro Inmobiliaria",
            "url": "https://zentro.com.co",
            "description": "Plataforma integral para administrar propiedades, contratos y clientes inmobiliarios."
          }
        }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué servicios ofrece ZentroSoft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos creación de landing pages enfocadas en conversión, optimización SEO on-page, consultoría y capacitación en presencia web y WordPress, soporte técnico de dominios, hosting y correos, desarrollo frontend con Bootstrap y JavaScript, y mantenimiento web."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tecnologías utiliza ZentroSoft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabajamos con JavaScript, Next.js, Tailwind CSS, Laravel, PHP, Bootstrap, MySQL y PostgreSQL, además de herramientas como WordPress según las necesidades del proyecto."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta desarrollar una landing page?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El valor depende del alcance del proyecto: número de secciones, funcionalidades, integraciones y contenido. Contáctanos y recibirás una propuesta clara adaptada a tus necesidades y presupuesto."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué productos propios ofrece ZentroSoft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contamos con VelarisPOS, sistema de punto de venta para gestionar ventas, inventario y reportes; y Zentro Inmobiliaria, plataforma integral para administrar propiedades, contratos y clientes."
        }
      },
      {
        "@type": "Question",
        "name": "¿En dónde opera ZentroSoft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestra sede está en Bogotá D.C., Colombia, y acompañamos a pymes y emprendedores de todo el país tanto de forma presencial como remota."
        }
      }
    ]
  }

  const serviceScript = document.createElement('script')
  serviceScript.type = 'application/ld+json'
  serviceScript.text = JSON.stringify(serviceSchema)
  document.head.appendChild(serviceScript)

  const faqScript = document.createElement('script')
  faqScript.type = 'application/ld+json'
  faqScript.text = JSON.stringify(faqSchema)
  document.head.appendChild(faqScript)
}
