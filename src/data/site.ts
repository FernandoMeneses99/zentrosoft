export const WHATSAPP_NUMBER = '573009047298';
export const WHATSAPP_MESSAGE = 'Hola ZentroSoft, quiero cotizar mi página web.';
export const VP_WHATSAPP_MESSAGE = 'Hola ZentroSoft, quiero una demo de VelarisPOS para mi negocio.';
export const CONTACT_EMAIL = 'contacto@zentrosoft.com';
export const PHONE_DISPLAY = '+57 300 904 7298';
export const SITE_URL = 'https://zentrosoft.vercel.app';

export function whatsappLink(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
