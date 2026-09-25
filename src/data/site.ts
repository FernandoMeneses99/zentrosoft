export const WHATSAPP_NUMBER = '573009047298';
export const WHATSAPP_MESSAGE = 'Hola ZentroSoft, quiero cotizar mi página web.';
export const VP_WHATSAPP_MESSAGE = 'Hola ZentroSoft, quiero una demo de VelarisPOS para mi negocio.';
export const CONTACT_EMAIL = 'zentrosoft.co@gmail.com';
export const PHONE_DISPLAY = '+57 300 904 7298';
// Cambia el dominio en un solo lugar: variable PUBLIC_SITE_URL o aquí.
// Fase 1: apunta a tu dominio propio cuando lo compres (ej. https://zentrosoft.co)
export const SITE_URL =
  import.meta.env.PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://zentrosoft.dev';

export function whatsappLink(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
