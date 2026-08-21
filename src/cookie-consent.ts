const CONSENT_COOKIE_NAME = 'zentrosoft_cookie_consent'
const CONSENT_MAX_AGE = 180 * 24 * 60 * 60
const CONSENT_VERSION = 1

// ID de analítica: acepta contenedor GTM (GTM-XXXXXXX) o GA4 (G-XXXXXXXXXX)
// TODO: Reemplazar con el ID real de ZentroSoft cuando esté disponible
const ANALYTICS_ID: string = ''

const PRIVACY_POLICY_URL = '/politica-privacidad.html'
const COOKIES_POLICY_URL = '#'

interface StoredConsent {
  version: number
  timestamp: string
  analitica: boolean
  marketing: boolean
}

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

function readStoredConsent(): StoredConsent | null {
  const match = document.cookie.match(new RegExp('(?:^|; )' + CONSENT_COOKIE_NAME + '=([^;]*)'))
  if (!match) return null
  try {
    const parsed = JSON.parse(decodeURIComponent(match[1])) as Partial<StoredConsent>
    if (
      parsed.version !== CONSENT_VERSION ||
      typeof parsed.analitica !== 'boolean' ||
      typeof parsed.marketing !== 'boolean'
    ) {
      return null
    }
    return parsed as StoredConsent
  } catch {
    return null
  }
}

function writeStoredConsent(consent: StoredConsent): void {
  const value = encodeURIComponent(JSON.stringify(consent))
  document.cookie = `${CONSENT_COOKIE_NAME}=${value}; max-age=${CONSENT_MAX_AGE}; path=/; SameSite=Lax; Secure`
}

let analyticsLoaded = false

function loadAnalytics(): void {
  if (analyticsLoaded || !ANALYTICS_ID) return
  analyticsLoaded = true

  const script = document.createElement('script')
  script.async = true

  if (ANALYTICS_ID.startsWith('GTM-')) {
    script.src = `https://www.googletagmanager.com/gtm.js?id=${ANALYTICS_ID}`
    document.head.appendChild(script)
    return
  }

  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`
  document.head.appendChild(script)
  window.gtag('js', new Date())
  window.gtag('config', ANALYTICS_ID)
}

function updateGoogleConsent(analitica: boolean, marketing: boolean): void {
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
  }
  window.gtag('consent', 'update', {
    analytics_storage: analitica ? 'granted' : 'denied',
    ad_storage: marketing ? 'granted' : 'denied',
    ad_user_data: marketing ? 'granted' : 'denied',
    ad_personalization: marketing ? 'granted' : 'denied'
  })
}

function applyDecision(analitica: boolean, marketing: boolean): void {
  writeStoredConsent({
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    analitica,
    marketing
  })
  updateGoogleConsent(analitica, marketing)
  if (analitica || marketing) loadAnalytics()
}

function createBanner(): HTMLElement {
  const banner = document.createElement('div')
  banner.className = 'cookie-banner'
  banner.id = 'cookie-banner'
  banner.setAttribute('role', 'dialog')
  banner.setAttribute('aria-modal', 'false')
  banner.setAttribute('aria-label', 'Aviso de uso de cookies')

  banner.innerHTML = `
    <div class="cookie-banner-inner">
      <div class="cookie-banner-text">
        <h2>Uso de cookies</h2>
        <p>
          Utilizamos cookies propias y de terceros para el funcionamiento del sitio, fines analíticos y de
          personalización. Puede aceptar todas, rechazar las opcionales o configurar su preferencia. Para más
          información consulte nuestra
          <a href="${COOKIES_POLICY_URL}" id="cookie-policy-link">Política de Cookies</a> y nuestra
          <a href="${PRIVACY_POLICY_URL}" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>.
        </p>
      </div>
      <div class="cookie-banner-actions">
        <button type="button" class="cookie-btn cookie-btn-ghost" data-cookie-action="reject">Solo esenciales</button>
        <button type="button" class="cookie-btn cookie-btn-ghost" data-cookie-action="configure">Configurar</button>
        <button type="button" class="cookie-btn cookie-btn-primary" data-cookie-action="accept">Aceptar todas</button>
      </div>
    </div>
    <div class="cookie-preferences" id="cookie-preferences" hidden>
      <ul class="cookie-options">
        <li class="cookie-option">
          <div class="cookie-option-info">
            <span class="cookie-option-title">Estrictamente necesarias</span>
            <span class="cookie-option-desc">Imprescindibles para la navegación y el correcto funcionamiento del sitio. Siempre activas.</span>
          </div>
          <label class="cookie-switch">
            <input type="checkbox" checked disabled aria-label="Cookies estrictamente necesarias (siempre activas)" />
            <span class="cookie-slider"></span>
          </label>
        </li>
        <li class="cookie-option">
          <div class="cookie-option-info">
            <span class="cookie-option-title">Analítica</span>
            <span class="cookie-option-desc">Nos permiten medir y analizar el uso del sitio para mejorarlo de forma agregada y anónima.</span>
          </div>
          <label class="cookie-switch">
            <input type="checkbox" id="cookie-analitica" aria-label="Permitir cookies de analítica" />
            <span class="cookie-slider"></span>
          </label>
        </li>
        <li class="cookie-option">
          <div class="cookie-option-info">
            <span class="cookie-option-title">Marketing y personalización</span>
            <span class="cookie-option-desc">Utilizadas para mostrar contenido y publicidad relevante según sus intereses.</span>
          </div>
          <label class="cookie-switch">
            <input type="checkbox" id="cookie-marketing" aria-label="Permitir cookies de marketing y personalización" />
            <span class="cookie-slider"></span>
          </label>
        </li>
      </ul>
      <div class="cookie-preferences-actions">
        <button type="button" class="cookie-btn cookie-btn-primary" data-cookie-action="save">Guardar preferencias</button>
      </div>
    </div>
  `
  return banner
}

function openPreferences(banner: HTMLElement): void {
  const stored = readStoredConsent()
  const preferences = banner.querySelector<HTMLDivElement>('#cookie-preferences')
  if (!preferences) return
  if (stored) {
    const analiticaInput = banner.querySelector<HTMLInputElement>('#cookie-analitica')
    const marketingInput = banner.querySelector<HTMLInputElement>('#cookie-marketing')
    if (analiticaInput) analiticaInput.checked = stored.analitica
    if (marketingInput) marketingInput.checked = stored.marketing
  }
  preferences.hidden = false
  preferences.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}

export function initCookieConsent(): void {
  const stored = readStoredConsent()

  if (stored) {
    updateGoogleConsent(stored.analitica, stored.marketing)
    if (stored.analitica || stored.marketing) loadAnalytics()
  }

  const banner = createBanner()
  document.body.appendChild(banner)

  if (stored) {
    banner.classList.add('cookie-banner-hidden')
    return
  }

  requestAnimationFrame(() => banner.classList.add('cookie-banner-visible'))

  const acceptBtn = banner.querySelector<HTMLButtonElement>('[data-cookie-action="accept"]')
  acceptBtn?.focus({ preventScroll: true })

  banner.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    const action = target.closest<HTMLElement>('[data-cookie-action]')?.dataset.cookieAction
    if (!action) return

    switch (action) {
      case 'accept':
        applyDecision(true, true)
        dismissBanner(banner)
        break
      case 'reject':
        applyDecision(false, false)
        dismissBanner(banner)
        break
      case 'configure':
        openPreferences(banner)
        break
      case 'save': {
        const analitica = banner.querySelector<HTMLInputElement>('#cookie-analitica')?.checked ?? false
        const marketing = banner.querySelector<HTMLInputElement>('#cookie-marketing')?.checked ?? false
        applyDecision(analitica, marketing)
        dismissBanner(banner)
        break
      }
    }
  })

  document.addEventListener('click', (event) => {
    const trigger = (event.target as HTMLElement).closest('#cookie-settings')
    if (trigger) {
      event.preventDefault()
      banner.classList.remove('cookie-banner-hidden')
      banner.classList.add('cookie-banner-visible')
      openPreferences(banner)
    }
  })
}

function dismissBanner(banner: HTMLElement): void {
  banner.classList.remove('cookie-banner-visible')
  banner.addEventListener(
    'transitionend',
    () => banner.classList.add('cookie-banner-hidden'),
    { once: true }
  )
}
