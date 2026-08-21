import emailjs from '@emailjs/browser'
import { trackEvent } from './cookie-consent'

// Credenciales de EmailJS de ZentroSoft (las claves públicas son visibles en el bundle por diseño)
const EMAILJS_PUBLIC_KEY = 'v9Gg4_hoWSHtFF_yI'
const EMAILJS_SERVICE_ID = 'service_mp1yyv8'
const EMAILJS_TEMPLATE_ID = 'template_tp6gkjb'
const CONTACT_EMAIL = 'fernandomenesesda@gmail.com'

type StatusType = 'success' | 'error' | 'info'

export function initContactForm(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement | null
  const statusBox = document.getElementById('form-status')
  if (!form || !statusBox) return

  const setStatus = (message: string, type: StatusType) => {
    statusBox.textContent = message
    statusBox.className = `form-status form-status-${type}`
  }

  const clearStatus = () => {
    statusBox.textContent = ''
    statusBox.className = 'form-status'
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    clearStatus()

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const honeypot = form.querySelector<HTMLInputElement>('.hp-field')
    if (honeypot && honeypot.value.trim() !== '') {
      setStatus('Su mensaje ha sido enviado. Nos pondremos en contacto pronto.', 'success')
      form.reset()
      return
    }

    const submitBtn = form.querySelector<HTMLButtonElement>('#form-submit')
    const originalLabel = submitBtn?.textContent ?? ''
    if (submitBtn) {
      submitBtn.disabled = true
      submitBtn.textContent = 'Enviando...'
    }

    const data = new FormData(form)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: String(data.get('nombre') || ''),
          from_email: String(data.get('email') || ''),
          phone: String(data.get('telefono') || ''),
          company: String(data.get('empresa') || ''),
          service: String(data.get('servicio') || 'No especificado'),
          message: String(data.get('mensaje') || ''),
          to_name: 'ZentroSoft',
          reply_to: String(data.get('email') || '')
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('¡Gracias por contactarnos! Un experto se pondrá en contacto con usted muy pronto.', 'success')
      trackEvent('generate_lead', {
        service: String(data.get('servicio') || 'No especificado')
      })
      form.reset()
    } catch {
      setStatus(
        `No fue posible enviar su mensaje en este momento. Inténtelo nuevamente o escríbanos a ${CONTACT_EMAIL}.`,
        'error'
      )
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false
        submitBtn.textContent = originalLabel
      }
    }
  })
}
