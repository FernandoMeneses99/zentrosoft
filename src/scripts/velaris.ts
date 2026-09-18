// Lógica exclusiva de VelarisPOS. Port fiel del sitio Vite anterior:
// el formulario de demo coordina por WhatsApp (sin backend).
const WHATSAPP_NUMBER = '573009047298';
const WHATSAPP_MESSAGE = 'Hola ZentroSoft, quiero una demo de VelarisPOS para mi negocio.';

export function initBackLink(): void {
  const backBtn = document.getElementById('vp-back-home');
  if (!backBtn) return;
  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/';
  });
}

export function initVpForm(): void {
  const form = document.getElementById('vp-form') as HTMLFormElement | null;
  const status = document.getElementById('vp-status');
  const submitBtn = document.getElementById('vp-submit') as HTMLButtonElement | null;
  if (!form || !status || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = (document.getElementById('vp-nombre') as HTMLInputElement).value.trim();
    const empresa = (document.getElementById('vp-empresa') as HTMLInputElement).value.trim();
    const correo = (document.getElementById('vp-correo') as HTMLInputElement).value.trim();
    const mensaje = (document.getElementById('vp-mensaje') as HTMLTextAreaElement).value.trim();

    if (!nombre || !empresa || !correo || !mensaje) {
      status.textContent = 'Por favor completa todos los campos obligatorios.';
      status.className = 'form-status form-status-error';
      return;
    }

    const waText = encodeURIComponent(
      `Hola ZentroSoft, quiero una demo de VelarisPOS.%0A%0ANombre: ${nombre}%0AEmpresa: ${empresa}%0ACorreo: ${correo}%0A%0A${mensaje}`,
    );
    submitBtn.disabled = true;
    status.textContent = 'Gracias por tu interés. Abriendo WhatsApp para coordinar tu demo...';
    status.className = 'form-status form-status-success';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`, '_blank');
    setTimeout(() => {
      submitBtn.disabled = false;
      form.reset();
      status.textContent = 'Tu solicitud está lista. ¡Te esperamos en la demo!';
    }, 4000);
  });
}

export const VP_WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
