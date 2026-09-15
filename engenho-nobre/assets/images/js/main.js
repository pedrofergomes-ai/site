// Formulário de Contato WhatsApp
const WHATSAPP_NUMBER = '5583996818192';

function sendContactWhatsapp(e) {
  e.preventDefault();
  const rawName = document.getElementById('c-name').value;
  const rawPhone = document.getElementById('c-phone').value;
  const rawMsg = document.getElementById('c-msg').value;

  const sanitize = (str) => str.replace(/<[^>]*>?/gm, '').trim();
  const name = sanitize(rawName);
  const phone = sanitize(rawPhone);
  const msg = sanitize(rawMsg);

  if (!name || !phone) {
    alert('Por favor, preencha o nome e o telefone.');
    return false;
  }

  const text = encodeURIComponent(`Olá, Engenho Nobre!\nMeu nome é *${name}* (${phone}).\n\nMensagem:\n${msg}`);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  return false;
}

// Carrossel de Depoimentos
function scrollTestimonials(direction) {
  const container = document.getElementById('testimonials-container');
  if (container) {
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
}

// Inicialização após o carregamento da página
document.addEventListener('DOMContentLoaded', () => {
  // Menu Mobile
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileBtn && mobileMenu) {
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Animação de Reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});