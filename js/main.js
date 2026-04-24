/* =========================================================================
   MAYRA HOMES — Main JS
   - Lenis smooth scroll
   - GSAP scroll-triggered animations
   - Navbar behavior
   - Lead form → opens WhatsApp with pre-filled message
   - Counter animations for stats
   - Image gallery lightbox
   ========================================================================= */

// ================  CONFIG  ================
const CONFIG = {
  WHATSAPP_NUMBER: '918859990524', // No +, no spaces
  PHONE_DISPLAY:   '+91 88599 90524',
  BRAND:           'Mayra Homes',
};

// ================  SMOOTH SCROLL (Lenis)  ================
let lenis;
if (window.Lenis) {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

// ================  NAVBAR  ================
const nav = document.querySelector('.nav');
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');

function onScroll() {
  if (!nav) return;
  if (window.scrollY > 80) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}
window.addEventListener('scroll', onScroll);
onScroll();

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ================  HERO TITLE REVEAL  ================
document.querySelectorAll('.hero-title .line-inner').forEach((el, i) => {
  el.style.transition = `transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + i * 0.12}s`;
  requestAnimationFrame(() => { el.style.transform = 'translateY(0)'; });
});

// ================  SCROLL REVEAL  ================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ================  STAT COUNTER  ================
function animateCount(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString();
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => statObserver.observe(el));

// ================  PARALLAX (hero bg)  ================
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
  }, { passive: true });
}

// ================  GSAP SCROLL ANIMATIONS  ================
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  // Parallax effect on project card bgs
  gsap.utils.toArray('.project-card-bg').forEach(bg => {
    gsap.to(bg, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: bg.closest('.project-card'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  // Section title stagger
  gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
      },
    });
  });

  // Hero bg subtle scale
  if (heroBg) {
    gsap.to(heroBg, {
      scale: 1.15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }
}

// ================  LEAD FORM → WhatsApp  ================
const leadForms = document.querySelectorAll('.lead-form-el');
leadForms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name=name]').value.trim();
    const phone = form.querySelector('[name=phone]').value.trim();
    const projectEl = form.querySelector('[name=project]');
    const project = projectEl ? projectEl.value : '';
    const messageEl = form.querySelector('[name=message]');
    const extra = messageEl ? messageEl.value.trim() : '';

    if (!name || !phone) {
      showToast('Please fill in your name and phone.');
      return;
    }

    // Validate phone (10 digits expected, optionally with +91)
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) {
      showToast('Please enter a valid phone number.');
      return;
    }

    // Compose WhatsApp message
    let msg = `Hello ${CONFIG.BRAND},\n\n`;
    msg += `I would like to know more about ${project || 'your projects'}.\n\n`;
    msg += `Name: ${name}\n`;
    msg += `Phone: ${phone}\n`;
    if (extra) msg += `\nMessage: ${extra}\n`;
    msg += `\nPlease share the price and details.`;

    const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    showToast('Opening WhatsApp...');
    setTimeout(() => {
      window.open(url, '_blank');
      form.reset();
    }, 400);
  });
});

// ================  STICKY ENQUIRE scroll-to-form  ================
document.querySelectorAll('[data-scroll-to]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(el.dataset.scrollTo);
    if (!target) return;
    if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.4 });
    else target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ================  TOAST  ================
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> ${msg}`;
  t.classList.add('show');
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => t.classList.remove('show'), 2800);
}

// ================  GALLERY LIGHTBOX  ================
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (!img || !lightbox || !lightboxImg) return;
    lightboxImg.src = img.src;
    lightbox.classList.add('open');
  });
});

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox') || e.target.classList.contains('lightbox-close')) {
      lightbox.classList.remove('open');
    }
  });
}

// ================  LAYOUT VIEWER ZOOM (suncity)  ================
const layoutImg = document.querySelector('.layout-viewer img');
if (layoutImg) {
  let zoomed = false;
  layoutImg.addEventListener('click', () => {
    zoomed = !zoomed;
    layoutImg.style.transform = zoomed ? 'scale(1.8)' : 'scale(1)';
    layoutImg.style.cursor = zoomed ? 'zoom-out' : 'zoom-in';
  });
}

// ================  LUCIDE ICONS  ================
if (window.lucide) {
  lucide.createIcons();
}
