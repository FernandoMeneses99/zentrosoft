// Lógica exclusiva de la home: carrusel hero, typewriter, carrusel de
// productos y CTA de diagnóstico. Port fiel del sitio Vite anterior.
import { PREFERS_REDUCED_MOTION } from './ui';
import { trackEvent } from './cookie-consent';

export function initHeroCarousel(): void {
  const slides = document.querySelectorAll<HTMLDivElement>('.hero-slide');
  const indicators = document.querySelectorAll<HTMLButtonElement>('.hero-indicator');
  if (slides.length < 2) return;
  let currentSlide = 0;
  let timer: number | undefined;

  function goToSlide(index: number) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    indicators[currentSlide].setAttribute('aria-selected', 'false');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    indicators[currentSlide].setAttribute('aria-selected', 'true');
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  function startAutoplay() {
    if (PREFERS_REDUCED_MOTION) return;
    stopAutoplay();
    timer = window.setTimeout(function tick() {
      if (document.hidden) {
        timer = window.setTimeout(tick, 3000);
        return;
      }
      nextSlide();
      timer = window.setTimeout(tick, 5000);
    }, 5000);
  }

  function stopAutoplay() {
    if (timer !== undefined) window.clearTimeout(timer);
  }

  startAutoplay();

  indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
      const slideIndex = parseInt(indicator.dataset.slide || '0', 10);
      goToSlide(slideIndex);
      startAutoplay();
    });
  });
}

export function initRotatingWord(): void {
  const wordEl = document.getElementById('rotating-word');
  if (!wordEl || PREFERS_REDUCED_MOTION) return;

  const words = [
    'centraliza tu operación',
    'automatiza tus procesos',
    'impulsa tu crecimiento',
    'software a medida',
    'aplicaciones web',
    'plataformas SaaS',
  ];
  let wordIndex = 0;
  let charIndex = words[0].length;
  let isDeleting = false;

  const tick = () => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      charIndex++;
      wordEl.textContent = currentWord.slice(0, charIndex);
      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(tick, 2400);
        return;
      }
      setTimeout(tick, 75);
    } else {
      charIndex--;
      wordEl.textContent = currentWord.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(tick, 350);
        return;
      }
      setTimeout(tick, 38);
    }
  };

  setTimeout(tick, 2400);
}

export function initNewsCarousel(): void {
  const carousel = document.getElementById('news-carousel') as HTMLDivElement | null;
  const prevBtn = document.getElementById('news-prev') as HTMLButtonElement | null;
  const nextBtn = document.getElementById('news-next') as HTMLButtonElement | null;

  if (!carousel || !prevBtn || !nextBtn) return;

  const scrollAmount = 380;

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}

export function initDiagnosticCTA(): void {
  const ctaBandBtn = document.querySelector<HTMLAnchorElement>('.js-diagnostic-cta');
  if (!ctaBandBtn) return;

  ctaBandBtn.addEventListener('click', () => {
    const select = document.getElementById('cf-servicio') as HTMLSelectElement | null;
    if (select) {
      select.value = ctaBandBtn.dataset.servicio || '';
    }
    trackEvent('cta_diagnostico', { location: 'banda_proceso' });
  });
}
