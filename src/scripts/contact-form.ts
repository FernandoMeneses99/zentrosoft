// Formulario de contacto (EmailJS en carga diferida).
// Tras el éxito: generate_lead + redirección a /gracias.html (Fase 12).
// Arquitectura lista para migrar a endpoint backend/serverless: todo el envío
// vive en `sendLead()`; basta reemplazar su cuerpo.
import { trackEvent } from './cookie-consent';

const EMAILJS_PUBLIC_KEY = 'v9Gg4_hoWSHtFF_yI';
const EMAILJS_SERVICE_ID = 'service_mp1yyv8';
const EMAILJS_TEMPLATE_ID = 'template_tp6gkjb';
const CONTACT_EMAIL = 'contacto@zentrosoft.com';

type StatusType = 'success' | 'error' | 'info';

interface LeadPayload {
  from_name: string;
  from_email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
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
      window.location.href = '/gracias.html';
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
      window.location.href = '/gracias.html';
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
