import emailjs from '@emailjs/browser'

// TODO: Reemplazar con las credenciales reales de la cuenta de EmailJS de ZentroSoft
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const CONTACT_EMAIL = 'contacto@zentrosoft.com'

type StatusType = 'success' | 'error' | 'info'

function isEmailJSConfigured(): boolean {
  return (
    EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY' &&
    EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID'
  )
}

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

    if (!isEmailJSConfigured()) {
      setStatus(
        'El formulario aún no está conectado al servicio de envío. Configure las credenciales de EmailJS.',
        'error'
      )
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
