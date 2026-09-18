// Comportamientos compartidos (sin framework, solo donde se necesita JS).
// Port fiel de la lógica validada del sitio Vite anterior.

export const PREFERS_REDUCED_MOTION =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initHeaderScroll(): void {
  const header = document.querySelector<HTMLElement>('.header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

export function initSmoothScroll(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: PREFERS_REDUCED_MOTION ? 'auto' : 'smooth',
        block: 'start',
      });
      if (target.tabIndex < 0) target.tabIndex = -1;
      window.setTimeout(() => target.focus({ preventScroll: true }), PREFERS_REDUCED_MOTION ? 0 : 500);
    });
  });
}

export function initMobileMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
  const nav = document.querySelector<HTMLElement>('.nav-links');
  if (!toggle || !nav) return;

  const setOpen = (open: boolean) => {
    nav.classList.toggle('nav-open', open);
    toggle.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
  };

  toggle.addEventListener('click', () => {
    setOpen(!nav.classList.contains('nav-open'));
  });

  nav.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('nav-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
}

export function initCountUp(): void {
  const counters = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!counters.length || PREFERS_REDUCED_MOTION) return;

  const animateCounter = (el: HTMLElement) => {
    const target = parseInt(el.dataset.count || '0', 10);
    const duration = 1200;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.4 },
  );

  counters.forEach((el) => {
    el.textContent = '0';
    observer.observe(el);
  });
}

const DEFAULT_REVEAL_SELECTORS =
  '.value-card, .about-mission-card, .about-value-item, .about-highlight, .news-card, .faq-item, .process-card';

const DEFAULT_STAGGER_CONTAINERS = [
  '.value-grid',
  '.about-mission-grid',
  '.about-values-grid',
  '.about-highlights',
  '.news-carousel',
  '.faq-list',
  '.process-grid',
];

export function initScrollAnimations(
  targetSelectors = DEFAULT_REVEAL_SELECTORS,
  staggerContainers = DEFAULT_STAGGER_CONTAINERS,
): void {
  const targets = document.querySelectorAll<HTMLElement>(targetSelectors);
  if (!targets.length || PREFERS_REDUCED_MOTION) return;

  staggerContainers.forEach((selector) => {
    const container = document.querySelector(selector);
    if (!container) return;
    Array.from(container.children).forEach((child, index) => {
      (child as HTMLElement).style.setProperty('--reveal-delay', `${Math.min(index * 80, 400)}ms`);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );

  targets.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

export function initToTop(): void {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  const toggle = () => btn.classList.toggle('show', window.scrollY > 400);
  window.addEventListener('scroll', toggle, { passive: true });
  btn.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: PREFERS_REDUCED_MOTION ? 'auto' : 'smooth' }),
  );
  toggle();
}
