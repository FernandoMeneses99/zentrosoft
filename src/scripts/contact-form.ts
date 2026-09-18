// Formulario de contacto (EmailJS en carga diferida).
// Tras el éxito: generate_lead + redirección a /gracias.html (Fase 12).
// Arquitectura lista para migrar a endpoint backend/serverless: todo el envío
// vive en `sendLead()`; basta reemplazar su cuerpo.
import { trackEvent } from './cookie-consent';

const EMAILJS_PUBLIC_KEY = 'v9Gg4_hoWSHtFF_yI';
const EMAILJS_SERVICE_ID = 'service_mp1yyv8';
const EMAILJS_TEMPLATE_ID = 'template_tp6gkjb';
const CONTACT_EMAIL = 'zentrosoft.co@gmail.com';

type StatusType = 'success' | 'error' | 'info';

interface LeadPayload {
  from_name: string;
  from_email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const TOAST_DURATION_MS = 5000;

function showSuccessToast(): void {
  document.querySelector('.toast')?.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.innerHTML = `
    <span class="toast-icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
    <div class="toast-text">
      <strong>¡Mensaje enviado!</strong>
      <span>Te contactaremos en menos de 24 horas hábiles.</span>
    </div>
    <button type="button" class="toast-close" aria-label="Cerrar notificación">&times;</button>
    <span class="toast-progress" aria-hidden="true"></span>
  `;
  document.body.appendChild(toast);

  const timers: number[] = [];
  const dismiss = (returnHome: boolean) => {
    timers.forEach((t) => window.clearTimeout(t));
    toast.classList.remove('show');
    window.setTimeout(() => toast.remove(), 400);
    if (returnHome) {
      const home = document.getElementById('inicio');
      home?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  toast.querySelector('.toast-close')?.addEventListener('click', () => dismiss(false));
  document.addEventListener(
    'keydown',
    (e) => {
      if (e.key === 'Escape' && document.body.contains(toast)) dismiss(false);
    },
    { once: true },
  );

  requestAnimationFrame(() => toast.classList.add('show'));
  timers.push(window.setTimeout(() => dismiss(true), TOAST_DURATION_MS));
}

async function sendLead(payload: LeadPayload): Promise<void> {
  const { default: emailjs } = await import('@emailjs/browser');
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      ...payload,
      to_name: 'ZentroSoft',
      reply_to: payload.from_email,
    },
    { publicKey: EMAILJS_PUBLIC_KEY },
  );
}

export function initContactForm(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  const statusBox = document.getElementById('form-status');
  if (!form || !statusBox) return;

  const setStatus = (message: string, type: StatusType) => {
    statusBox.textContent = message;
    statusBox.className = `form-status form-status-${type}`;
  };

  const clearStatus = () => {
    statusBox.textContent = '';
    statusBox.className = 'form-status';
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearStatus();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const honeypot = form.querySelector<HTMLInputElement>('.hp-field');
    if (honeypot && honeypot.value.trim() !== '') {
      showSuccessToast();
      form.reset();
      return;
    }

    const submitBtn = form.querySelector<HTMLButtonElement>('#form-submit');
    const originalHTML = submitBtn?.innerHTML ?? '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.setAttribute('aria-busy', 'true');
      submitBtn.textContent = 'Enviando…';
    }

    const data = new FormData(form);
    const service = String(data.get('servicio') || 'No especificado');
    trackEvent('form_submit', { service });

    try {
      await sendLead({
        from_name: String(data.get('nombre') || ''),
        from_email: String(data.get('email') || ''),
        phone: String(data.get('telefono') || ''),
        company: String(data.get('empresa') || ''),
        service,
        message: String(data.get('mensaje') || ''),
      });
      trackEvent('generate_lead', { service });
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.removeAttribute('aria-busy');
        submitBtn.innerHTML = originalHTML;
      }
      form.reset();
      showSuccessToast();
    } catch {
      setStatus(
        `No fue posible enviar su mensaje en este momento. Inténtelo nuevamente o escríbanos a ${CONTACT_EMAIL}.`,
        'error',
      );
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.removeAttribute('aria-busy');
        submitBtn.innerHTML = originalHTML;
      }
    }
  });
}
