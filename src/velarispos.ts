import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const PREFERS_REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const WHATSAPP_NUMBER = '573009047298'
const WHATSAPP_MESSAGE = 'Hola ZentroSoft, quiero una demo de VelarisPOS para mi negocio.'

app.innerHTML = `
<!-- ===== HEADER ===== -->
<header class="header" role="banner">
  <div class="container header-inner">
    <a href="/velarispos.html" class="logo" aria-label="VelarisPOS - Inicio">
      <span class="vp-logo-mark">Velaris<span class="vp-logo-accent">POS</span></span>
    </a>
    <nav class="nav-links" aria-label="Navegación principal VelarisPOS">
      <a href="#inicio">Inicio</a>
      <a href="#funcionalidades">Funcionalidades</a>
      <a href="#pilares">Cómo funciona</a>
      <a href="#reportes">Reportes</a>
      <a href="#tecnologia">Tecnología</a>
      <a href="#contacto" class="nav-cta">Solicita tu demo</a>
    </nav>
    <button class="menu-toggle" aria-label="Abrir menú de navegación">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<!-- ===== HERO ===== -->
<section class="vp-hero" id="inicio" aria-label="Bienvenida a VelarisPOS">
  <div class="container vp-hero-grid">
    <div class="vp-hero-content">
      <div class="hero-badge">
        <span class="hero-badge-dot"></span>
        Punto de Venta + ERP todo-en-uno
      </div>
      <h1>
        Vende, controla y decide<br />
        <span class="highlight">desde una sola plataforma</span>
      </h1>
      <p class="hero-text">
        VelarisPOS une tu punto de venta, el inventario, la tienda online, la facturación,
        la contabilidad y tu equipo en un solo sistema con datos en tiempo real.
        Un solo registro, una sola pantalla, todo tu negocio bajo control.
      </p>
      <div class="hero-actions">
        <a href="#contacto" class="btn-primary">
          Solicita tu demo
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="#funcionalidades" class="btn-outline">
          Ver funcionalidades
        </a>
      </div>
      <div class="hero-stats">
        <div>
          <div class="hero-stat-number"><span data-count="45">45</span><span class="accent">+</span></div>
          <div class="hero-stat-label">Módulos integrados</div>
        </div>
        <div>
          <div class="hero-stat-number"><span data-count="60">60</span><span class="accent">+</span></div>
          <div class="hero-stat-label">Reportes en tiempo real</div>
        </div>
        <div>
          <div class="hero-stat-number"><span data-count="4">4</span></div>
          <div class="hero-stat-label">Idiomas soportados</div>
        </div>
      </div>
    </div>

    <div class="vp-hero-visual">
      <div class="vp-visual-card">
        <div class="vp-visual-top">
          <span class="vp-visual-dot"></span><span class="vp-visual-dot"></span><span class="vp-visual-dot"></span>
        </div>
        <div class="vp-visual-total">Total a cobrar</div>
        <div class="vp-visual-amount">$128.500</div>
        <div class="vp-visual-lines">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="vp-visual-foo">
          <span class="vp-visual-foo-chip">Efectivo</span>
          <span class="vp-visual-foo-chip">Tarjeta</span>
          <span class="vp-visual-foo-chip">Billetera</span>
        </div>
      </div>
      <div class="vp-visual-chip vp-visual-chip--1">
        <strong>+250</strong> ventas hoy
      </div>
      <div class="vp-visual-chip vp-visual-chip--2">
        <strong>Stock</strong> en tiempo real
      </div>
    </div>
  </div>
</section>

<main>
<!-- ===== PROBLEMA / SOLUCIÓN ===== -->
<section class="value-prop" id="inicio-solucion">
  <div class="container">
    <div class="value-prop-header">
      <div class="section-label">El problema que resolvemos</div>
      <h2 class="section-title">¿Tu negocio opera con sistemas desconectados?</h2>
      <p class="section-subtitle">
        Muchos comercios manejan la caja, el inventario, las ventas online y la contabilidad por separado.
        Eso genera pérdidas, errores al cobrar y decisiones tomadas "a ojo".
      </p>
    </div>

    <div class="value-grid value-grid--six">
      <div class="value-card">
        <div class="value-card-icon">
          <img src="/img/velarispos/prob-inventario.svg" alt="La caja no habla con el inventario" loading="lazy" width="56" height="56" />
        </div>
        <h3>La caja no habla con el inventario</h3>
        <p>Vendes sin saber si hay stock real, provocando ventas fallidas y clientes inconformes.</p>
      </div>
      <div class="value-card">
        <div class="value-card-icon">
          <img src="/img/velarispos/prob-tiempo.svg" alt="Sin visión en tiempo real" loading="lazy" width="56" height="56" />
        </div>
        <h3>Sin visión en tiempo real</h3>
        <p>Los reportes llegan tarde y mal. Decides con información desactualizada o inexistente.</p>
      </div>
      <div class="value-card">
        <div class="value-card-icon">
          <img src="/img/velarispos/prob-perdidas.svg" alt="Productos perdidos" loading="lazy" width="56" height="56" />
        </div>
        <h3>Productos perdidos</h3>
        <p>Falta de alertas de stock, vencimientos y stock muerto: dinero que se pierde sin darte cuenta.</p>
      </div>

      <div class="value-card">
        <div class="value-card-icon">
          <img src="/img/velarispos/sol-sistema.svg" alt="Un solo sistema" loading="lazy" width="56" height="56" />
        </div>
        <h3>Un solo sistema</h3>
        <p>Reemplaza 4 a 5 programas (POS, inventario, facturación, CRM, contabilidad) por uno solo.</p>
      </div>
      <div class="value-card">
        <div class="value-card-icon">
          <img src="/img/velarispos/sol-datos.svg" alt="Datos al instante" loading="lazy" width="56" height="56" />
        </div>
        <h3>Datos al instante</h3>
        <p>Tienda, almacén, online y administración compartiendo la misma información en tiempo real.</p>
      </div>
      <div class="value-card">
        <div class="value-card-icon">
          <img src="/img/velarispos/sol-decisiones.svg" alt="Decisiones informadas" loading="lazy" width="56" height="56" />
        </div>
        <h3>Decisiones informadas</h3>
        <p>Más de 60 reportes, panel de indicadores e inteligencia de negocios para crecer con claridad.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== PILARES ===== -->
<section class="vp-pillars" id="pilares">
  <div class="container">
    <div class="news-header">
      <div>
        <div class="section-label">Cómo funciona</div>
        <h2 class="section-title">4 pilares para controlar tu negocio</h2>
        <p class="section-subtitle">Todo integrado nativamente, en una misma base de datos y una misma interfaz.</p>
      </div>
    </div>

    <div class="vp-pillar-grid">
      <div class="vp-pillar">
        <div class="vp-pillar-ico">
          <img src="/img/velarispos/pilar-vender.svg" alt="Vender" loading="lazy" width="88" height="88" />
        </div>
        <h3>Vender</h3>
        <p>Punto de venta táctil, facturación, cotizaciones, pedidos, devoluciones y gift cards desde la caja.</p>
      </div>
      <div class="vp-pillar">
        <div class="vp-pillar-ico">
          <img src="/img/velarispos/pilar-controlar.svg" alt="Controlar" loading="lazy" width="88" height="88" />
        </div>
        <h3>Controlar</h3>
        <p>Inventario multi-almacén, lotes, números de serie, caducidades, traslados y alertas de stock.</p>
      </div>
      <div class="vp-pillar">
        <div class="vp-pillar-ico">
          <img src="/img/velarispos/pilar-vender-online.svg" alt="Vender online" loading="lazy" width="88" height="88" />
        </div>
        <h3>Vender online</h3>
        <p>Tienda en línea propia con tu marca, integrada con WooCommerce y Shopify y pasarelas de pago.</p>
      </div>
      <div class="vp-pillar">
        <div class="vp-pillar-ico">
          <img src="/img/velarispos/pilar-decidir.svg" alt="Decidir" loading="lazy" width="88" height="88" />
        </div>
        <h3>Decidir</h3>
        <p>Más de 60 reportes, panel 3D, inteligencia de negocios e informes con IA para decidir bien.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== FUNCIONALIDADES ===== -->
<section class="vp-features" id="funcionalidades">
  <div class="container">
    <div class="value-prop-header">
      <div class="section-label">Funcionalidades</div>
      <h2 class="section-title">45+ módulos que trabajan juntos</h2>
      <p class="section-subtitle">Una plataforma que crece con tu negocio, sin importar la industria.</p>
    </div>

    <div class="vp-feature-grid">
      <div class="vp-feature">
        <div class="vp-feature-ico">
          <img src="/img/velarispos/func-pos.svg" alt="Punto de Venta" loading="lazy" width="56" height="56" />
        </div>
        <h3>Punto de Venta (POS)</h3>
        <ul>
          <li>Pantalla táctil rápida para cajeros</li>
          <li>Búsqueda por escáner y código de barras</li>
          <li>Arqueo de caja y cierres de turno</li>
          <li>Pantalla para el cliente y de cocina</li>
        </ul>
      </div>
      <div class="vp-feature">
        <div class="vp-feature-ico">
          <img src="/img/velarispos/func-inventario.svg" alt="Inventario" loading="lazy" width="56" height="56" />
        </div>
        <h3>Inventario</h3>
        <ul>
          <li>Multi-almacén y traslados entre sucursales</li>
          <li>Lotes, números de serie y caducidades</li>
          <li>Alertas de stock mínimo y stock muerto</li>
          <li>Conteo físico y ajustes auditados</li>
        </ul>
      </div>
      <div class="vp-feature">
        <div class="vp-feature-ico">
          <img src="/img/velarispos/func-tienda.svg" alt="Tienda en línea" loading="lazy" width="56" height="56" />
        </div>
        <h3>Tienda en línea</h3>
        <ul>
          <li>Tienda web con tu marca (color, logo, banners)</li>
          <li>Cupones, promociones y flash sales</li>
          <li>Portal para clientes (facturas y pagos)</li>
          <li>Integración WooCommerce y Shopify</li>
        </ul>
      </div>
      <div class="vp-feature">
        <div class="vp-feature-ico">
          <img src="/img/velarispos/func-finanzas.svg" alt="Finanzas y contabilidad" loading="lazy" width="56" height="56" />
        </div>
        <h3>Finanzas y contabilidad</h3>
        <ul>
          <li>Plan de cuentas, balance y P&amp;L</li>
          <li>Flujo de caja y cuentas por cobrar/pagar</li>
          <li>Multi-moneda y transferencias internas</li>
          <li>Reportes fiscales exportables</li>
        </ul>
      </div>
      <div class="vp-feature">
        <div class="vp-feature-ico">
          <img src="/img/velarispos/func-rrhh.svg" alt="Equipo, RR.HH. y nómina" loading="lazy" width="56" height="56" />
        </div>
        <h3>Equipo, RR.HH. y nómina</h3>
        <ul>
          <li>Empleados, departamentos y asistencia</li>
          <li>Vacaciones, permisos y festivos</li>
          <li>Nómina / payroll integrado</li>
          <li>Comisiones por vendedor</li>
        </ul>
      </div>
      <div class="vp-feature">
        <div class="vp-feature-ico">
          <img src="/img/velarispos/func-crm.svg" alt="CRM, marketing y fidelización" loading="lazy" width="56" height="56" />
        </div>
        <h3>CRM, marketing y fidelización</h3>
        <ul>
          <li>Ficha de cliente con historial completo</li>
          <li>Puntos de fidelidad y recompensas</li>
          <li>Campañas por correo, SMS y WhatsApp</li>
          <li>E-wallet / monedero digital</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ===== VERTICALES ===== -->
<section class="vp-industries" id="industrias">
  <div class="container">
    <div class="news-header">
      <div>
        <div class="section-label">Para cada industria</div>
        <h2 class="section-title">Módulos verticales listos para usar</h2>
        <p class="section-subtitle">VelarisPOS se adapta al sector de tu negocio con módulos especializados.</p>
      </div>
    </div>
    <div class="vp-industry-chips">
      <span class="vp-industry-chip"><img src="/img/velarispos/ind-hospital.svg" alt="" loading="lazy" width="24" height="24" />Hospital / Clínica</span>
      <span class="vp-industry-chip"><img src="/img/velarispos/ind-escuela.svg" alt="" loading="lazy" width="24" height="24" />Escuela / Colegio</span>
      <span class="vp-industry-chip"><img src="/img/velarispos/ind-farmacia.svg" alt="" loading="lazy" width="24" height="24" />Farmacia</span>
      <span class="vp-industry-chip"><img src="/img/velarispos/ind-restaurante.svg" alt="" loading="lazy" width="24" height="24" />Restaurante</span>
      <span class="vp-industry-chip"><img src="/img/velarispos/ind-inmobiliaria.svg" alt="" loading="lazy" width="24" height="24" />Inmobiliaria</span>
      <span class="vp-industry-chip"><img src="/img/velarispos/ind-flota.svg" alt="" loading="lazy" width="24" height="24" />Flota / Vehículos</span>
      <span class="vp-industry-chip"><img src="/img/velarispos/ind-manufactura.svg" alt="" loading="lazy" width="24" height="24" />Manufactura / MRP</span>
      <span class="vp-industry-chip"><img src="/img/velarispos/ind-servicio-tecnico.svg" alt="" loading="lazy" width="24" height="24" />Servicio técnico</span>
      <span class="vp-industry-chip"><img src="/img/velarispos/ind-retail.svg" alt="" loading="lazy" width="24" height="24" />Retail</span>
      <span class="vp-industry-chip"><img src="/img/velarispos/ind-proyectos.svg" alt="" loading="lazy" width="24" height="24" />Proyectos</span>
    </div>
  </div>
</section>

<!-- ===== TECNOLOGÍA ===== -->
<section class="vp-tech" id="tecnologia">
  <div class="container vp-tech-grid">
    <div class="about-partner-content vp-tech-copy">
      <div class="section-label">Tecnología y seguridad</div>
      <h2 class="vp-tech-title">Construido con tecnología moderna y segura</h2>
      <p>
        VelarisPOS usa un stack probado en la industria para garantizar robustez, seguridad y escalabilidad.
        Con permisos granulares, auditoría, backups con un clic y soporte multilingüe y multi-moneda,
        está listo para crecer tan rápido como tu negocio.
      </p>
      <div class="stack-grid">
        <span class="stack-tile" role="img" aria-label="Laravel" title="Laravel"><img src="/img/stack/laravel.svg" alt="" loading="lazy" width="38" height="38" /></span>
        <span class="stack-tile" role="img" aria-label="Vue 3" title="Vue 3"><img src="/img/stack/javascript.svg" alt="" loading="lazy" width="38" height="38" /></span>
        <span class="stack-tile" role="img" aria-label="MySQL" title="MySQL"><img src="/img/stack/mysql.svg" alt="" loading="lazy" width="38" height="38" /></span>
        <span class="stack-tile" role="img" aria-label="Tailwind CSS" title="Tailwind CSS"><img src="/img/stack/tailwindcss.svg" alt="" loading="lazy" width="38" height="38" /></span>
      </div>
    </div>
    <div class="vp-tech-list">
      <div class="vp-tech-item"><strong>Laravel (PHP 8)</strong><span>Backend robusto y seguro, estándar de la industria</span></div>
      <div class="vp-tech-item"><strong>Vue 3 + Ant Design</strong><span>Interfaz de administración moderna y fluida</span></div>
      <div class="vp-tech-item"><strong>MySQL</strong><span>Datos relacionales y transaccionales</span></div>
      <div class="vp-tech-item"><strong>Stripe · PayPal · QuickBooks</strong><span>Pasarelas de pago e integraciones contables</span></div>
      <div class="vp-tech-item"><strong>WooCommerce · Shopify</strong><span>Sincroniza productos, pedidos y stock</span></div>
      <div class="vp-tech-item"><strong>Español · English · Français · العربية</strong><span>Multilenguaje con soporte RTL</span></div>
    </div>
  </div>
</section>

<!-- ===== REPORTES / INTELLIGENCE ===== -->
<section class="vp-reports" id="reportes">
  <div class="container">
    <div class="vp-reports-grid">
      <div class="vp-reports-visual">
        <img src="/img/velarispos/dashboard-reportes.svg" alt="Panel de reportes y métricas en tiempo real de VelarisPOS" loading="lazy" width="760" height="440" />
      </div>
      <div class="vp-reports-copy">
        <div class="section-label">Reportes e inteligencia de negocio</div>
        <h2 class="vp-tech-title">Toda tu operación en un solo panel</h2>
        <p>
          VelarisPOS convierte los datos de cada venta, producto y cliente en reportes claros y
          en tiempo real. Deja de decidir &laquo;a ojo&raquo; y toma el control con indicadores accionables.
        </p>
        <ul class="vp-reports-list">
          <li>
            <strong>Ventas</strong>
            <span>Ingresos, ticket promedio, comparativos por día, mes y tienda.</span>
          </li>
          <li>
            <strong>Inventario</strong>
            <span>Stock disponible, alertas, valorización y productos de lento movimiento.</span>
          </li>
          <li>
            <strong>Finanzas</strong>
            <span>Flujo de caja, cuentas por cobrar/pagar y estado de resultados.</span>
          </li>
          <li>
            <strong>Clientes y equipo</strong>
            <span>Tendencia de compras, fidelización, comisiones y desempeño por vendedor.</span>
          </li>
          <li>
            <strong>Inteligencia con IA</strong>
            <span>Resúmenes automáticos y predicciones para anticiparte a tu demanda.</span>
          </li>
        </ul>
        <a href="#contacto" class="btn-primary">
          Ver reportes en tu demo
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ===== CTA BANNER ===== -->
<section class="vp-cta">
  <div class="container vp-cta-inner">
    <div>
      <h2 class="vp-cta-title">¿Listo para tomar el control de tu negocio?</h2>
      <p class="vp-cta-text">Solicita una demo en vivo y una cotización a la medida de tu operación.</p>
    </div>
    <a href="#contacto" class="btn-primary">
      Solicita tu demo
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </div>
</section>

<!-- ===== FAQ ===== -->
<section class="faq-section" id="faq" aria-label="Preguntas frecuentes VelarisPOS">
  <div class="container">
    <div class="value-prop-header">
      <div class="section-label">Preguntas Frecuentes</div>
      <h2 class="section-title">Resolvemos tus dudas</h2>
      <p class="section-subtitle">Todo lo que necesitas saber antes de implementar VelarisPOS en tu negocio.</p>
    </div>

    <div class="faq-list">
      <details class="faq-item">
        <summary>
          <span>¿Qué es VelarisPOS?</span>
          <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <p>VelarisPOS es un sistema de punto de venta (POS) y gestión empresarial (ERP) todo-en-uno. Integra ventas en tienda, ventas online, inventario, facturación, contabilidad, RR.HH. y marketing en una sola plataforma con datos en tiempo real.</p>
      </details>

      <details class="faq-item">
        <summary>
          <span>¿Para qué tipo de negocio sirve?</span>
          <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <p>Sirve para comercios, retail y pymes, y también incluye módulos verticales para hospitales, clínicas, escuelas, farmacias, restaurantes, inmobiliarias, flotas, manufactura y servicio técnico.</p>
      </details>

      <details class="faq-item">
        <summary>
          <span>¿Puedo vender en línea con VelarisPOS?</span>
          <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <p>Sí. Incluye una tienda en línea propia con tu marca e integraciones con WooCommerce y Shopify, para sincronizar productos, pedidos y stock entre la tienda física y la web.</p>
      </details>

      <details class="faq-item">
        <summary>
          <span>¿Cómo se gestiona la seguridad y los permisos?</span>
          <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <p>VelarisPOS cuenta con roles y permisos granulares por módulo y usuario, control de dispositivos de login, encriptación de datos sensibles, backups con un clic y registro de auditoría.</p>
      </details>

      <details class="faq-item">
        <summary>
          <span>¿Cuál es el proceso de implementación?</span>
          <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <p>Diagnóstico de tu operación, configuración de marca, alta del catálogo (importación desde Excel), instalación del POS y tienda online, capacitación del equipo y acompañamiento continuo.</p>
      </details>
    </div>
  </div>
</section>

<!-- ===== CONTACTO ===== -->
<section class="contact" id="contacto" aria-label="Solicitar demo de VelarisPOS">
  <div class="container">
    <div class="contact-grid">
      <div class="contact-info">
        <div class="section-label">Solicita tu demo</div>
        <h2 class="section-title">Agenda una demostración en vivo</h2>
        <p class="section-subtitle">
          Cuéntanos sobre tu negocio y te mostraremos cómo VelarisPOS puede centralizar toda tu operación.
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
              <span class="contact-detail-label">WhatsApp</span>
              <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}">+57 300 904 7298</a>
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
        <a href="#" class="btn-outline vp-back-btn" id="vp-back-home">
          &larr; Volver a ZentroSoft
        </a>
      </div>

      <div class="contact-form-card">
        <form id="vp-form" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label for="vp-nombre">Nombre completo <span aria-hidden="true">*</span></label>
              <input type="text" id="vp-nombre" name="nombre" required autocomplete="name" placeholder="Su nombre" />
            </div>
            <div class="form-group">
              <label for="vp-empresa">Empresa <span aria-hidden="true">*</span></label>
              <input type="text" id="vp-empresa" name="empresa" required autocomplete="organization" placeholder="Nombre de tu negocio" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="vp-correo">Correo electrónico <span aria-hidden="true">*</span></label>
              <input type="email" id="vp-correo" name="correo" required autocomplete="email" placeholder="nombre@tuempresa.com" />
            </div>
            <div class="form-group">
              <label for="vp-telefono">Teléfono / WhatsApp</label>
              <input type="tel" id="vp-telefono" name="telefono" autocomplete="tel" placeholder="+57 300 000 0000" />
            </div>
          </div>

          <div class="form-group">
            <label for="vp-negocio">Tipo de negocio</label>
            <select id="vp-negocio" name="negocio">
              <option value="">Seleccione una opción</option>
              <option value="Retail / Tienda">Retail / Tienda</option>
              <option value="Restaurante">Restaurante</option>
              <option value="Farmacia">Farmacia</option>
              <option value="Inmobiliaria">Inmobiliaria</option>
              <option value="Salud / Clínica">Salud / Clínica</option>
              <option value="Educación">Educación</option>
              <option value="Manufactura">Manufactura</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div class="form-group">
            <label for="vp-mensaje">Mensaje <span aria-hidden="true">*</span></label>
            <textarea id="vp-mensaje" name="mensaje" rows="4" required placeholder="Cuéntanos sobre tu operación y necesidades"></textarea>
          </div>

          <button type="submit" id="vp-submit" class="btn-primary form-submit">
            Solicitar demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <p id="vp-status" class="form-status" role="status" aria-live="polite"></p>
        </form>
      </div>
    </div>
  </div>
</section>
</main>

<!-- ===== FOOTER ===== -->
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="vp-logo-mark vp-logo-mark--dark">Velaris<span class="vp-logo-accent">POS</span></span>
        <p>Sistema de punto de venta y gestión empresarial (ERP) todo-en-uno. Desarrollado por ZentroSoft.</p>
      </div>
      <div class="footer-col">
        <h4>Producto</h4>
        <ul>
          <li><a href="#funcionalidades">Punto de Venta</a></li>
          <li><a href="#funcionalidades">Inventario</a></li>
          <li><a href="#funcionalidades">Tienda en línea</a></li>
          <li><a href="#funcionalidades">Contabilidad</a></li>
          <li><a href="#reportes">Reportes</a></li>
          <li><a href="#tecnologia">Tecnología</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>ZentroSoft</h4>
        <ul>
          <li><a href="https://zentrosoft.vercel.app/" target="_blank" rel="noopener noreferrer">Ir a ZentroSoft</a></li>
          <li><a href="https://zentrosoft.vercel.app/#productos" target="_blank" rel="noopener noreferrer">Nuestros productos</a></li>
          <li><a href="https://zentrosoft.vercel.app/#contacto" target="_blank" rel="noopener noreferrer">Contacto</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contacto</h4>
        <ul>
          <li><a href="mailto:contacto@zentrosoft.com">contacto@zentrosoft.com</a></li>
          <li><a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}" target="_blank" rel="noopener noreferrer">+57 300 904 7298</a></li>
          <li><a href="#contacto">Bogotá, Colombia</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} VelarisPOS · Desarrollado por ZentroSoft. Todos los derechos reservados.</p>
      <ul class="footer-legal-links">
        <li><a href="https://zentrosoft.vercel.app/politica-privacidad.html" target="_blank" rel="noopener noreferrer">Política de Privacidad</a></li>
        <li><a href="https://zentrosoft.vercel.app/politica-cookies.html" target="_blank" rel="noopener noreferrer">Política de Cookies</a></li>
        <li><a href="https://zentrosoft.vercel.app/terminos-servicio.html" target="_blank" rel="noopener noreferrer">Términos de Servicio</a></li>
      </ul>
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
  <span class="whatsapp-btn-label">¿Quieres una demo?</span>
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
</a>
`

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
   SCROLL ANIMATIONS - Intersection Observer + Stagger
   ============================================ */
function initScrollAnimations() {
  const targets = document.querySelectorAll<HTMLElement>(
    '.value-card, .vp-pillar, .vp-feature, .vp-tech-item, .vp-industry-chip, .vp-reports-list li'
  )
  if (!targets.length || PREFERS_REDUCED_MOTION) return

  const staggerContainers = [
    '.value-grid',
    '.vp-pillar-grid',
    '.vp-feature-grid',
    '.vp-tech-list',
    '.vp-industry-chips',
    '.vp-reports-list'
  ]
  const delayMap = new Map<HTMLElement, number>()

  staggerContainers.forEach((selector) => {
    const container = document.querySelector(selector)
    if (!container) return
    Array.from(container.children).forEach((child, index) => {
      delayMap.set(child as HTMLElement, Math.min(index * 90, 360))
    })
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        el.classList.add('visible')
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
   BACK LINK - navegar a la home de ZentroSoft
   ============================================ */
function initBackLink() {
  const backBtn = document.getElementById('vp-back-home')
  if (!backBtn) return
  backBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = '/'
  })
}

/* ============================================
   CONTACT FORM (demo) - simula envío
   ============================================ */
function initForm() {
  const form = document.getElementById('vp-form') as HTMLFormElement
  const status = document.getElementById('vp-status') as HTMLElement
  const submitBtn = document.getElementById('vp-submit') as HTMLButtonElement
  if (!form || !status || !submitBtn) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = (document.getElementById('vp-nombre') as HTMLInputElement).value.trim()
    const empresa = (document.getElementById('vp-empresa') as HTMLInputElement).value.trim()
    const correo = (document.getElementById('vp-correo') as HTMLInputElement).value.trim()
    const mensaje = (document.getElementById('vp-mensaje') as HTMLTextAreaElement).value.trim()

    if (!nombre || !empresa || !correo || !mensaje) {
      status.textContent = 'Por favor completa todos los campos obligatorios.'
      status.className = 'form-status form-status-error'
      return
    }

    const waText = encodeURIComponent(
      `Hola ZentroSoft, quiero una demo de VelarisPOS.%0A%0ANombre: ${nombre}%0AEmpresa: ${empresa}%0ACorreo: ${correo}%0A%0A${mensaje}`
    )
    submitBtn.disabled = true
    status.textContent = 'Gracias por tu interés. Abriendo WhatsApp para coordinar tu demo...'
    status.className = 'form-status form-status-success'
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`, '_blank')
    setTimeout(() => {
      submitBtn.disabled = false
      form.reset()
      status.textContent = 'Tu solicitud está lista. ¡Te esperamos en la demo!'
    }, 4000)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll()
  initSmoothScroll()
  initCountUp()
  initScrollAnimations()
  initMobileMenu()
  initBackLink()
  initForm()
})
