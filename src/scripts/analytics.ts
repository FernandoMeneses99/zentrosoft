// Eventos de conversión (GA4 vía GTM consent-aware).
// form_start: primer foco en el formulario. form_submit: intento de envío.
// generate_lead: SOLO después de un envío exitoso (lo dispara contact-form.ts).
import { trackEvent } from './cookie-consent';

export function initConversionTracking(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || link.classList.contains('js-diagnostic-cta')) return;
      if (link.closest('.whatsapp-btn')) return;
      const destino = href.replace('#', '') || 'inicio';
      trackEvent('cta_click', {
        destino,
        ubicacion: (link.className || 'desconocida').slice(0, 60),
      });
    });
  });

  document.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]').forEach((link) => {
    link.addEventListener('click', () => trackEvent('contact_phone_click', { metodo: 'telefono' }));
  });

  document.querySelectorAll<HTMLAnchorElement>('a[href^="mailto:"]').forEach((link) => {
    link.addEventListener('click', () => trackEvent('contact_email_click', { metodo: 'correo' }));
  });

  const scrollThresholds = [25, 50, 75, 100];
  const reachedScroll = new Set<number>();
  let scrollTrackingTimer: number | undefined;

  window.addEventListener(
    'scroll',
    () => {
      if (scrollTrackingTimer) window.clearTimeout(scrollTrackingTimer);
      scrollTrackingTimer = window.setTimeout(() => {
        const scrollTop = window.scrollY;
        const docHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const percent = Math.min(Math.round((scrollTop / docHeight) * 100), 100);
        scrollThresholds.forEach((threshold) => {
          if (percent >= threshold && !reachedScroll.has(threshold)) {
            reachedScroll.add(threshold);
            trackEvent('scroll_depth', { porcentaje: String(threshold) });
          }
        });
      }, 200);
    },
    { passive: true },
  );

  const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;
  if (contactForm && !contactForm.dataset.formStartTracked) {
    contactForm.dataset.formStartTracked = '1';
    contactForm.addEventListener(
      'focus',
      (e) => {
        const target = e.target as HTMLElement;
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
          trackEvent('form_start', { campo: target.getAttribute('name') || 'desconocido' });
        }
      },
      { once: true, capture: true },
    );
  }

  document.querySelectorAll<HTMLAnchorElement>('.whatsapp-btn').forEach((link) => {
    link.addEventListener('click', () => {
      trackEvent('contact_whatsapp', { method: 'boton_flotante' });
    });
  });

  document.querySelectorAll<HTMLDetailsElement>('.faq-item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open || item.dataset.faqTracked) return;
      item.dataset.faqTracked = '1';
      const question = item.querySelector('summary span')?.textContent?.trim() ?? '';
      trackEvent('faq_open', { question: question.slice(0, 80) });
    });
  });
}
