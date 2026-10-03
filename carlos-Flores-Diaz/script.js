'use strict';

/* =========================================================
   CONFIGURACIÓN — edita aquí tus datos
   ========================================================= */
const WHATSAPP = '525573316238';

// Escribe aquí tu clave o cédula de agente de seguros para que aparezca
// en la sección de Estrategia. Ejemplo: 'Agente autorizado · Cédula CNSF: 00000'
// Si lo dejas vacío, no se muestra nada.
const AGENT_ID = '';

// Enlaces de pago (Stripe) y agenda
const LINKS = {
  mx:       'https://buy.stripe.com/9B66oA3BbazibBFfV6gw004',   // Immunocal MX · $1,499
  platinum: 'https://buy.stripe.com/4gMdR2fjTgXG49d24ggw002',   // Immunocal Platinum · $1,899
  sport:    'https://buy.stripe.com/eVq7sE8Vv0YIfRV4cogw003',   // Immunocal Sport · $2,099
  optimizer:'https://buy.stripe.com/fZu00cgnX8rabBF8sEgw007',   // Immunocal Optimizer · $1,199
  omega:    'https://buy.stripe.com/cNi8wI9Zz22M0X1gZagw006',   // Omega Gen V · $729
  bionutric:'https://buy.stripe.com/7sYaEQb3DePyeNRfV6gw005',   // Bionutric · $649
  paqMxPlat:'https://buy.stripe.com/4gMbIU3Bb36QgVZ9wIgw008',   // Paquete Immunocal MX + Platinum · $3,499
  paq2Plat: 'https://buy.stripe.com/4gM8wI4FfgXG215dMYgw009',   // Paquete 2 Immunocal Platinum · $3,799
  reserva:  'https://book.stripe.com/eVq6oAc7HdLu0X1eR2gw000',  // Reserva de cita · $150
  agenda:   'https://calendar.app.google/JmoM3sEjhGuNkshaA',
  cafe:     'https://calendar.app.google/PsiHGaARBLMncEug8',     // Café virtual de 15 min    // Cuestionario y horarios
  patentes: 'assets/patentes-immunotec.pdf',
  pdr:      'assets/immunocal-pdr.pdf'   // Ficha de Immunocal en el Physicians' Desk Reference
};

// Direcciones (el botón "Cómo llegar" abre Google Maps)
const ADDRESS = {
  strategy: { name: 'Seguros Monterrey New York Life', text: 'Av. Paseo de la Reforma 342, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX' },
  rehab:    { name: 'Clínica Rhinos Quiro',            text: "Rómulo O'Farrill 298, Olivar de los Padres, Álvaro Obregón, 01780 Ciudad de México, CDMX" }
};
const mapsLink = q => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

/* =========================================================
   CONTENIDO DE CADA SECCIÓN
   ========================================================= */
const DATA = {
  strategy: {
    title: 'ESTRATEGIA',
    sub: 'SEGUROS DE VIDA',
    intro: 'Soluciones de protección, ahorro y retiro diseñadas a partir de tus objetivos.',
    items: [
      { title: 'SEGUROS INDIVIDUALES', text: 'Protección que se adapta a tu historia.' },
      { title: 'PROTECCIÓN Y AHORRO', text: 'Una estrategia que combina protección con la posibilidad de construir ahorro para tus objetivos.' },
      { title: 'PLAN PERSONAL DE AHORRO Y RETIRO (PPR)', text: 'Planea hoy el futuro que quieres vivir mañana.' },
      { title: 'PATRIMONIO / HERENCIA', text: 'Protege lo que has construido y planea cómo quieres dejarlo a quienes más importan.' },
      { title: 'EDUCACIÓN UNIVERSITARIA DE TUS HIJOS', text: 'Prepara desde hoy uno de los proyectos más importantes de tus hijos.' },
      { title: 'GASTOS MÉDICOS MAYORES', text: 'Una herramienta de protección financiera para hacer frente a gastos médicos importantes.' },
      { title: 'PROTECCIÓN EXCLUSIVA PARA MUJERES', text: 'Una alternativa de protección que considera las necesidades y etapas específicas de la mujer.' }
    ],
    note: 'Asesoría como agente de seguros. Coberturas, sumas aseguradas, primas y condiciones dependen de la aseguradora, del producto contratado y de la evaluación de cada caso.'
  },

  rehab: {
    title: 'REHABILITACIÓN',
    sub: 'CLÍNICA DE FISIOTERAPIA',
    intro: 'Recupera tu movimiento con un proceso claro, guiado y acompañado.',
    items: [
      { title: 'FISIOTERAPIA', text: 'Recuperar, mantener y mejorar el movimiento y la funcionalidad del cuerpo.' },
      { title: 'VALORACIÓN', text: 'Cada caso es diferente. La valoración permite conocer tus necesidades específicas.' },
      { title: 'TRATAMIENTOS', text: 'Los tratamientos varían de acuerdo con las necesidades y características de cada caso.' },
      { title: 'REHABILITACIÓN', text: 'Un proceso explicado, guiado y acompañado en todo momento.' },
      { title: 'LO QUE PUEDES ENCONTRAR', list: [
        'Terapias clínicas y postquirúrgicas',
        'Ventosas · Kinesiotaping · Ultrasonido',
        'Presoterapia · Drenaje linfático manual',
        'Lesiones deportivas',
        'Terapia dermatofuncional · Reducción de talla',
        'Electrolipólisis',
        'Cavitación · Radiofrecuencia · Lipoláser'
      ] }
    ]
  },

  wellness: {
    title: 'BIENESTAR',
    sub: 'IMMUNOTEC',
    intro: 'Suplementos precursores de glutatión para complementar un estilo de vida saludable.',
    items: [
      { title: '¿QUÉ ES EL GLUTATIÓN?', cta: false,
        text: 'El glutatión (glu-ta-TIÓN) está presente en cada célula de tu cuerpo. Se le conoce como el “antioxidante maestro” porque participa de forma continua en la defensa de las células.' },
      { title: '¿POR QUÉ IMPORTA?', cta: false,
        text: 'Con la edad, la producción natural de glutatión disminuye. Mantener niveles adecuados contribuye a que las células se defiendan del estrés oxidativo y conserven su equilibrio.' },
      { title: 'BENEFICIOS', cta: false, list: [
        'Contribuye al funcionamiento del sistema inmunológico',
        'Ayuda a proteger las células frente al estrés oxidativo',
        'Apoya la energía y la recuperación',
        'Complementa una alimentación correcta y la actividad física'
      ] }
    ],
    products: [
      { name: 'Immunocal MX', line: 'DEFENSA', price: '$1,499 MXN', img: 'assets/azul.webp', pay: 'mx' },
      { name: 'Immunocal Platinum', line: 'LONGEVIDAD', price: '$1,899 MXN', img: 'assets/Platinum.webp', pay: 'platinum' },
      { name: 'Immunocal Sport', line: 'RENDIMIENTO', price: '$2,099 MXN', img: 'assets/sport.webp', pay: 'sport' },
      { group: 'Complementos' },
      { name: 'Immunocal Optimizer', line: 'ROJOS Y VERDES', price: '$1,199 MXN', img: 'assets/nuevos/optimizer.webp', fit: true, pay: 'optimizer',
        desc: 'Más de 50 vegetales y frutas con sulforafano y selenio, activadores Nrf2 que complementan el glutatión de Immunocal. 30 sobres.' },
      { name: 'Omega Gen V', line: 'CORAZÓN Y CEREBRO', price: '$729 MXN', img: 'assets/nuevos/omega-gen-v.webp', fit: true, pay: 'omega',
        desc: 'Omega 3 con 33% más aceite de pescado, CoQ10, cúrcuma, vitamina E y pimienta. 120 cápsulas.' },
      { name: 'Bionutric', line: 'ARTICULACIONES', price: '$649 MXN', img: 'assets/nuevos/bionutric.webp', fit: true, pay: 'bionutric',
        desc: 'Glucosamina, condroitina y MSM para apoyar la salud de tus articulaciones. 120 tabletas.' },
      { group: 'Paquetes' },
      { name: 'Immunocal MX + Platinum', line: 'PAQUETE', price: '$3,499 MXN', img: 'assets/nuevos/paquete-mx-platinum.webp', fit: true, pay: 'paqMxPlat',
        desc: 'Incluye 1 Immunocal MX y 1 Immunocal Platinum.' },
      { name: '2 Immunocal Platinum', line: 'PAQUETE', price: '$3,799 MXN', img: 'assets/nuevos/paquete-2-platinum.webp', fit: true, pay: 'paq2Plat',
        desc: 'Incluye 2 cajas de Immunocal Platinum.' }
    ],
    productsNote: 'Envío incluido en todos los precios. Entrega de 3 a 5 días hábiles. Al pagar te pediremos tu nombre completo, dirección de envío y correo electrónico. Precios sujetos a cambio sin previo aviso.',
    legal: 'Suplemento alimenticio. Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo recomienda y de quien lo usa.'
  }
};

/* =========================================================
   UTILIDADES
   ========================================================= */
const $ = (sel, root = document) => root.querySelector(sel);

/* MODO LIGERO: en celulares y equipos modestos se apagan los efectos más pesados
   (desenfoques detrás de las tarjetas, nebulosas animadas, menos estrellas) para que nada se trabe.
   Si la página va lenta en cualquier equipo, se activa sola a los pocos segundos. */
const LITE_REASONS = [
  matchMedia('(pointer: coarse)').matches && Math.min(screen.width, screen.height) < 820,
  (navigator.hardwareConcurrency || 8) <= 4,
  (navigator.deviceMemory || 8) <= 4,
  !!(navigator.connection && navigator.connection.saveData)
];
let LITE = LITE_REASONS.some(Boolean);
// En celulares, la barra de direcciones se esconde al deslizar y el navegador avisa "cambio de tamaño" aunque
// el ancho sea el mismo. Ese aviso se ignora para no rehacer el fondo ni volver a medir toda la página.
const TOUCH_DEVICE = matchMedia('(pointer: coarse)').matches;
let __lastW = innerWidth;
window.__skipResize = false;
window.addEventListener('resize', () => { window.__skipResize = TOUCH_DEVICE && innerWidth === __lastW; __lastW = innerWidth; });
if (LITE) document.documentElement.classList.add('lite');
(function watchFps() {
  if (LITE || !window.requestAnimationFrame) return;
  let n = 0, t0 = 0, slow = 0;
  const f = t => {
    if (!t0) t0 = t;
    n++;
    if (t - t0 >= 1000) {                       // cada segundo revisa cuántos cuadros hubo
      slow = n < 40 && !document.hidden ? slow + 1 : 0;
      n = 0; t0 = t;
      if (slow >= 3) { LITE = true; document.documentElement.classList.add('lite'); window.dispatchEvent(new Event('lite')); return; }
    }
    if (performance.now() < 20000) requestAnimationFrame(f);   // solo vigila los primeros 20 s
  };
  requestAnimationFrame(f);
})();
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const waLink = msg => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
const ctaHTML = (label, msg) =>
  `<a class="btn" href="${waLink(msg)}" target="_blank" rel="noopener">${esc(label)} <span aria-hidden="true">→</span></a>`;

/* =========================================================
   TOQUE PERSONAL
   - Recuerda el nombre del visitante durante su visita (no se envía a ningún lado).
   - Los resultados de las herramientas hablan con la voz de Carlos y su foto.
   - Horario de atención para el indicador "Disponible ahora".
   ========================================================= */
const AVATAR = 'assets/avatar-carlos.jpg';
const HORARIO = { dias: [1, 2, 3, 4, 5, 6], desde: 9, hasta: 20 };   // lunes a sábado, 9:00 a 20:00 (hora CDMX)

const VISITOR = {
  _n: '',
  get name() { try { return sessionStorage.getItem('nombre') || this._n; } catch (e) { return this._n; } },
  set(n) {
    n = String(n || '').trim().split(/\s+/)[0].slice(0, 20);
    if (!n) return;
    n = n.charAt(0).toUpperCase() + n.slice(1);
    this._n = n;
    try { sessionStorage.setItem('nombre', n); } catch (e) {}
    document.dispatchEvent(new CustomEvent('visitor'));
  }
};
// "Ana, ideal para..."  ó  "Ideal para..."
const personal = t => VISITOR.name ? `${esc(VISITOR.name)}, ${t.charAt(0).toLowerCase()}${t.slice(1)}` : t;
// nota con la foto de Carlos
const cnote = html => `<div class="cnote"><img src="${AVATAR}" alt=""><p>${html}</p></div>`;
const NOTE_RENDERERS = [];
document.addEventListener('visitor', () => NOTE_RENDERERS.forEach(f => f()));

// Si ya sabemos su nombre, los mensajes de WhatsApp lo incluyen: "Hola Carlos, soy Ana. ..."
function personalizeWA(url) {
  const n = VISITOR.name;
  if (!n) return url;
  const m = url.match(/[?&]text=([^&]*)/);
  if (!m) return url;
  let t = decodeURIComponent(m[1].replace(/\+/g, ' '));
  if (/\bsoy\s/i.test(t) || !/^Hola Carlos[,.]/.test(t)) return url;
  t = t.replace(/^Hola Carlos[,.]\s*/, '');
  t = `Hola Carlos, soy ${n}. ${t.charAt(0).toUpperCase()}${t.slice(1)}`;
  return waLink(t);
}
document.addEventListener('click', e => {
  const a = e.target.closest && e.target.closest('a[href*="wa.me/"]');
  if (a) a.href = personalizeWA(a.href);
}, true);

// Disponibilidad según la hora de Ciudad de México
function availability() {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Mexico_City', weekday: 'short', hour: 'numeric', hour12: false }).formatToParts(new Date());
  const wd = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[parts.find(p => p.type === 'weekday').value];
  const h = +parts.find(p => p.type === 'hour').value % 24;
  const today = HORARIO.dias.includes(wd);
  if (today && h >= HORARIO.desde && h < HORARIO.hasta) return { on: true, txt: 'Disponible ahora · te respondo hoy' };
  let when = 'hoy';
  if (!(today && h < HORARIO.desde)) {
    let d = 1; while (!HORARIO.dias.includes((wd + d) % 7)) d++;
    when = d === 1 ? 'mañana' : ['el domingo', 'el lunes', 'el martes', 'el miércoles', 'el jueves', 'el viernes', 'el sábado'][(wd + d) % 7];
  }
  return { on: false, txt: `Te respondo ${when} a partir de las ${HORARIO.desde}:00` };
}
function paintAvail() {
  const a = availability();
  $$('[data-avail]').forEach(el => { el.classList.toggle('on', a.on); el.textContent = a.txt; });
  $$('[data-avail-short]').forEach(el => { el.textContent = a.on ? 'Carlos está disponible ahora' : 'Respuestas automáticas'; el.classList.toggle('off', !a.on); });
}

/* =========================================================
   CARRUSEL
   ========================================================= */
const deck = $('#deck');
const cards = $$('.card', deck);
const dots = $$('#dots button');
const N = cards.length;
const SWIPE = 55; // píxeles mínimos para contar como deslizamiento
let active = 1;

function render() {
  cards.forEach((card, i) => {
    const pos = ['center', 'right', 'left'][(i - active + N) % N];
    const isCenter = pos === 'center';
    card.dataset.pos = pos;
    card.classList.remove('tilt');
    card.style.removeProperty('--rx');
    card.style.removeProperty('--ry');
    card.setAttribute('aria-hidden', String(!isCenter));
    if (!isCenter) card.classList.remove('show-back', 'flipping');
    // Solo la tarjeta del centro es navegable con teclado
    $$('button, a', card).forEach(el => { el.tabIndex = isCenter ? 0 : -1; });
  });
  dots.forEach((d, i) => d.setAttribute('aria-current', i === active ? 'true' : 'false'));
}
let blurTimer;
const go = i => {
  const next = (i + N) % N;
  if (next === active) return;
  active = next;
  // Desenfoque de movimiento mientras giran las tarjetas
  deck.classList.add('moving');
  clearTimeout(blurTimer);
  blurTimer = setTimeout(() => deck.classList.remove('moving'), 320);
  render();
  if (typeof setZone === 'function') setZone();
  if (typeof restartAuto === 'function') restartAuto();
};
const move = d => go(active + d);

$('#prev').addEventListener('click', () => { move(-1); userTouched(); });
$('#next').addEventListener('click', () => { move(1); userTouched(); });
dots.forEach(d => d.addEventListener('click', () => { go(Number(d.dataset.go)); userTouched(); }));

/* ---- Giro automático: cada 6 s; se pausa con el mouse encima, al usarlo, con el panel abierto o fuera de vista ---- */
const AUTO_MS = 6000;
let autoTimer = null, pausedUntil = 0, hovering = false, heroVisible = true;
function userTouched() { pausedUntil = Date.now() + 12000; restartAuto(); window.sfx?.('whoosh'); }
function canAuto() {
  return !REDUCE_MOTION && !hovering && heroVisible && !document.hidden && modal.hidden && startX === null && Date.now() >= pausedUntil && !deck.querySelector('.card.show-back');
}
function restartAuto() {
  clearTimeout(autoTimer);
  // la barrita del punto activo se llena mientras corre el tiempo
  dots.forEach(d => d.classList.remove('timing'));
  if (REDUCE_MOTION) return;
  const wait = Math.max(AUTO_MS, pausedUntil - Date.now());
  const active = dots[active_index()];
  if (canAuto() && active) { void active.offsetWidth; active.classList.add('timing'); }
  autoTimer = setTimeout(() => { if (canAuto()) move(1); restartAuto(); }, canAuto() ? AUTO_MS : Math.min(wait, 1500));
}
const active_index = () => active;
const REDUCE_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
$('.deck-area').addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { hovering = true; restartAuto(); } });
$('.deck-area').addEventListener('pointerleave', () => { hovering = false; restartAuto(); });
document.addEventListener('visibilitychange', restartAuto);
if ('IntersectionObserver' in window) {
  new IntersectionObserver(([en]) => { heroVisible = en.isIntersecting; restartAuto(); }, { threshold: 0.4 }).observe(deck);
}

// Deslizar con dedo o mouse (sin capturar el puntero, para no bloquear los clics)
let startX = null;
let dragged = false;
deck.addEventListener('pointerdown', e => {
  if (e.pointerType === 'mouse' && e.button !== 0) return;
  startX = e.clientX;
  dragged = false;
});
window.addEventListener('pointermove', e => {
  if (startX === null) return;
  const dx = e.clientX - startX;
  if (Math.abs(dx) > 10) dragged = true;
  if (dragged) {
    // las tarjetas siguen al dedo / mouse mientras arrastras (con un poco de resistencia)
    deck.classList.add('dragging');
    if (deck.classList.contains('orbit')) { window.__deckDx = dx; return; }   // la órbita lee el valor directo, sin recalcular estilos
    const limit = deck.clientWidth * 0.35;
    const eased = Math.sign(dx) * Math.min(Math.abs(dx) * 0.6, limit);
    deck.style.setProperty('--dx', `${eased.toFixed(1)}px`);
  }
});
function endDrag(e) {
  if (startX === null) return;
  const dx = e && e.clientX != null ? e.clientX - startX : 0;
  startX = null;
  deck.classList.remove('dragging');
  if (!deck.classList.contains('orbit')) deck.style.setProperty('--dx', '0px');
  if (Math.abs(dx) > SWIPE) move(dx < 0 ? 1 : -1);
  userTouched();
}
window.addEventListener('pointerup', endDrag);
window.addEventListener('pointercancel', () => endDrag(null));

/* ---- Reverso de cada tarjeta: 3 datos clave y un botón de acción ---- */
const BACK = {
  rehab: { acc: '#ff5a78', tag: 'CLÍNICA DE FISIOTERAPIA', title: 'Rehabilitación',
    items: ['Valoración personalizada de tu caso', 'Lesiones deportivas y postquirúrgicas', 'Aparta tu cita por $150'],
    action: `<a class="btn primary" href="https://calendar.app.google/JmoM3sEjhGuNkshaA" target="_blank" rel="noopener">ELEGIR HORARIO <span aria-hidden="true">→</span></a>` },
  strategy: { acc: '#a2a6ac', tag: 'SEGUROS DE VIDA', title: 'Estrategia',
    items: ['Seguros de vida y plan de retiro (PPR)', 'Patrimonio y educación de tus hijos', 'Gastos médicos mayores'],
    action: `<button class="btn primary" type="button" data-open="strategy" data-goto="asesoria-panel">AGENDAR ASESORÍA <span aria-hidden="true">→</span></button>` },
  wellness: { acc: '#e8c67a', tag: 'IMMUNOTEC', title: 'Bienestar',
    items: ['Precursor de glutatión, el “antioxidante maestro”', 'Immunocal MX, Platinum y Sport', 'Envío incluido en el precio'],
    action: `<button class="btn primary" type="button" data-open="wellness">VER PRODUCTOS <span aria-hidden="true">→</span></button>` }
};
cards.forEach(card => {
  const b = BACK[card.dataset.area];
  card.style.setProperty('--acc', b.acc);

});
function flipCard(card, toBack) {
  if (!card || card.classList.contains('show-back') === toBack) return;
  card.classList.remove('tilt'); card.style.removeProperty('--rx'); card.style.removeProperty('--ry');
  if (REDUCE_MOTION) { card.classList.toggle('show-back', toBack); restartAuto(); return; }
  card.classList.add('flipping');
  setTimeout(() => {
    card.classList.toggle('show-back', toBack);
    card.classList.remove('flipping');
    if (toBack) $('.back .btn', card)?.focus({ preventScroll: true });
    restartAuto();
  }, 260);
}
deck.addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (e.target.closest('.flip')) { e.stopPropagation(); flipCard(card, true); userTouched(); }
  else if (e.target.closest('.unflip')) { e.stopPropagation(); flipCard(card, false); }
}, true);

// Clic en tarjetas: la del centro abre su sección; las de los lados pasan al centro
deck.addEventListener('click', e => {
  if (e.target.closest('.flip, .back')) return;
  if (dragged) { dragged = false; return; }
  const card = e.target.closest('.card');
  if (!card) return;
  if (card.dataset.pos !== 'center') { go(Number(card.dataset.index)); return; }
  openArea(card.dataset.area, card);
});

// Inclinación 3D de la tarjeta del centro siguiendo el mouse
let tiltCard = null, tiltR = null;
deck.addEventListener('pointermove', e => {
  if (deck.classList.contains('orbit')) return;
  if (e.pointerType !== 'mouse' || startX !== null) return;
  const card = e.target.closest('.card[data-pos="center"]');
  if (card !== tiltCard) {
    if (tiltCard) resetTilt(tiltCard);
    tiltCard = card; tiltR = card ? card.getBoundingClientRect() : null;
  }
  if (!card) return;
  const r = tiltR;
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  card.classList.add('tilt');
  card.style.setProperty('--ry', `${(x * 10).toFixed(2)}deg`);
  card.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`);
});
deck.addEventListener('pointerleave', () => { tiltCard = null; cards.forEach(resetTilt); });
function resetTilt(c) {
  c.style.removeProperty('--rx');
  c.style.removeProperty('--ry');
  setTimeout(() => c.classList.remove('tilt'), 200);
}

/* =========================================================
   PANEL (MODAL)
   ========================================================= */
const modal = $('#modal');
const panel = $('.panel', modal);
const panelContent = $('#panelContent');
let lastFocus = null;

const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE = 'cubic-bezier(.2, .8, .2, 1)';
let closing = false;

// Abre el panel. Si viene de una tarjeta o foto (origin), el panel "sale" de ella.
function openPanel(html, origin) {
  lastFocus = document.activeElement;
  // numerar los bloques para que entren en cascada
  panelContent.innerHTML = html;
  $$('.panel-intro, .tile, .section-title, .product, .cta-row, .legal, .note, .privacy', panelContent)
    .forEach((el, i) => el.style.setProperty('--i', i));
  modal.hidden = false;
  closing = false;
  document.documentElement.classList.add('modal-open');
  panelContent.scrollTop = 0;
  $('.close', modal).focus({ preventScroll: true });
  if (REDUCE || !panel.animate) return;

  let from = 'translate(-50%, -50%) translateY(40px) scale(.9)';
  if (origin) {
    const o = origin.getBoundingClientRect();
    const p = panel.getBoundingClientRect();
    const dx = (o.left + o.width / 2) - (p.left + p.width / 2);
    const dy = (o.top + o.height / 2) - (p.top + p.height / 2);
    const k = Math.max(0.25, Math.min(1, o.width / p.width));
    from = `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(${k})`;
  }
  panel.animate(
    [{ transform: from, opacity: 0.2, filter: 'blur(8px)' },
     { transform: 'translate(-50%, -50%)', opacity: 1, filter: 'blur(0px)' }],
    { duration: 750, easing: EASE }
  );
  $('.backdrop', modal).animate([{ opacity: 0 }, { opacity: 1 }], { duration: 450, easing: 'ease-out' });
}

function closeModal() {
  if (modal.hidden || closing) return;
  const done = () => {
    modal.hidden = true;
    closing = false;
    document.documentElement.classList.remove('modal-open');
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
  };
  if (REDUCE || !panel.animate) return done();
  closing = true;
  panel.animate(
    [{ transform: 'translate(-50%, -50%)', opacity: 1 },
     { transform: 'translate(-50%, -50%) translateY(30px) scale(.94)', opacity: 0, filter: 'blur(6px)' }],
    { duration: 320, easing: 'ease-in', fill: 'forwards' }
  ).onfinish = e => { e.target.cancel(); done(); };
  $('.backdrop', modal).animate([{ opacity: 1 }, { opacity: 0 }], { duration: 320, fill: 'forwards' })
    .onfinish = e => e.target.cancel();
}
modal.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });

// Al tocar un apartado del panel, su contorno se ilumina como un botón seleccionado
panelContent.addEventListener('click', e => {
  if (e.target.closest('form, a, button, input, select')) return;
  const item = e.target.closest('.tile, .product');
  if (!item) return;
  $$('.tile.selected, .product.selected', panelContent).forEach(el => { if (el !== item) el.classList.remove('selected'); });
  item.classList.add('selected');
});

function header(mini, title, intro) {
  return `<p class="mini">${esc(mini)}</p><h2 id="panelTitle">${esc(title)}</h2>` +
         (intro ? `<p class="panel-intro">${esc(intro)}</p>` : '');
}

function tileHTML(item, i, area) {
  const num = String(i + 1).padStart(2, '0');
  const body = item.list
    ? `<ul>${item.list.map(li => `<li>${esc(li)}</li>`).join('')}</ul>`
    : `<p>${esc(item.text)}</p>`;
  const cta = item.cta === false ? '' :
    ctaHTML('QUIERO MÁS INFORMACIÓN', `Hola Carlos, me interesa información sobre: ${item.title} (${area}).`);
  return `<article class="tile"><strong><span class="num">${num}</span>${esc(item.title)}</strong>${body}${cta}</article>`;
}

/* ---------- Bloques que se usan en la sección y en el panel ---------- */
const DOC_ICON = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M12 11v6m-3-3 3 3 3-3"/></svg>';
const PIN = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.6"/></svg>';

function placeHTML(key) {
  const a = ADDRESS[key];
  return `<div class="place">${PIN}<div><strong>${esc(a.name)}</strong><span>${esc(a.text)}</span></div>
    <a class="btn ghost small" href="${mapsLink(a.name + ', ' + a.text)}" target="_blank" rel="noopener">CÓMO LLEGAR <span aria-hidden="true">→</span></a></div>`;
}

function stepsHTML() {
  const steps = [
    { href: LINKS.agenda, t: 'Elige tu horario', s: 'Llena el cuestionario y escoge un horario disponible' },
    { href: LINKS.reserva, t: 'Apartar cita · $150', s: 'Pago seguro con tarjeta' },
    { href: waLink('Hola Carlos, ya agendé y pagué mi reserva de fisioterapia. Mi nombre es: '), t: 'Confirma por WhatsApp', s: 'Mándame tu confirmación y te respondo' }
  ];
  return `<ol class="steps" aria-label="Reserva tu cita en 3 pasos">${steps.map((st, i) => `
    <li><a class="step${i === 0 ? ' current' : ''}" data-step="${i}" href="${st.href}" target="_blank" rel="noopener">
      <span class="n">${i + 1}</span><span class="st"><b>${esc(st.t)}</b><small>${esc(st.s)}</small></span>
      <span class="arr" aria-hidden="true">→</span></a></li>`).join('')}</ol>`;
}

let formCount = 0;
function asesoriaHTML() {
  const n = ++formCount;
  const opts = DATA.strategy.items.map(it => it.title).concat('Aún no lo sé, quiero orientación');
  return `<form class="asesoria" data-asesoria novalidate>
    <p class="form-title">Agenda tu asesoría</p>
    <div class="fields">
      <label for="as-nombre-${n}">Tu nombre
        <input id="as-nombre-${n}" name="nombre" type="text" autocomplete="name" placeholder="Escribe tu nombre" required></label>
      <label for="as-estrategia-${n}">Estrategia que te interesa
        <select id="as-estrategia-${n}" name="estrategia" required>
          <option value="">Elige una opción</option>
          ${opts.map(o => `<option>${esc(o)}</option>`).join('')}
        </select></label>
    </div>
    <p class="form-error" hidden>Escribe tu nombre y elige una estrategia.</p>
    <button class="btn primary" type="submit">QUIERO AGENDAR MI ASESORÍA POR WHATSAPP <span aria-hidden="true">→</span></button>
    <p class="fine">Se abrirá WhatsApp con tu mensaje listo para enviar. Esta página no guarda tus datos.</p>
  </form>`;
}

// Enviar formulario de asesoría → abre WhatsApp con el mensaje armado
document.addEventListener('submit', e => {
  const f = e.target.closest('[data-asesoria]');
  if (!f) return;
  e.preventDefault();
  const nombre = f.nombre.value.trim();
  if (nombre) VISITOR.set(nombre);
  const estrategia = f.estrategia.value;
  const err = $('.form-error', f);
  if (!nombre || !estrategia) {
    err.hidden = false;
    (nombre ? f.estrategia : f.nombre).focus();
    return;
  }
  err.hidden = true;
  const url = waLink(`Hola Carlos, soy ${nombre}. Quiero agendar mi asesoría. Me interesa: ${estrategia}.`);
  // abrir en pestaña nueva sin salir de la página
  const link = Object.assign(document.createElement('a'), { href: url, target: '_blank', rel: 'noopener' });
  document.body.appendChild(link); link.click(); link.remove();
});

// Pasos de reserva: al abrir uno se marca como hecho y se ilumina el siguiente
const stepState = [false, false, false];
function paintSteps() {
  const next = stepState.indexOf(false);
  $$('.steps').forEach(list => $$('.step', list).forEach((a, i) => {
    a.classList.toggle('done', stepState[i]);
    a.classList.toggle('current', i === next);
  }));
}
document.addEventListener('click', e => {
  const a = e.target.closest('.step');
  if (!a) return;
  stepState[Number(a.dataset.step)] = true;
  paintSteps();
});

const AREA_IMG = {
  strategy: 'assets/card-estrategia.jpg',
  rehab: 'assets/card-rehabilitacion.jpg',
  wellness: 'assets/card-bienestar.jpg'
};

function openArea(key, origin) {
  const d = DATA[key];
  if (!d) return;
  const pos = key === 'strategy' ? 'style="object-position: 50% 58%"' : '';
  let html = `<div class="panel-hero"><img src="${AREA_IMG[key]}" alt="" ${pos}>
      <div class="panel-hero-text"><p class="mini">${esc(d.sub)}</p><h2 id="panelTitle">${esc(d.title)}</h2></div></div>` +
    (d.intro ? `<p class="panel-intro">${esc(d.intro)}</p>` : '');
  html += `<div class="grid">${d.items.map((it, i) => tileHTML(it, i, d.title)).join('')}</div>`;

  if (d.products) {
    const n = String(d.items.length + 1).padStart(2, '0');
    html += `<h3 class="section-title"><span class="num">${n}</span>PRODUCTOS Y PRECIOS</h3>`;
    html += `<div class="products-grid">${d.products.map(p => p.group ? `<p class="products-group">${esc(p.group)}</p>` : `
      <article class="product">
        <img src="${esc(p.img)}" alt="Producto ${esc(p.name)}" loading="lazy"${p.fit ? ' class="fit"' : ''}>
        <small>${esc(p.line)}</small>
        <strong>${esc(p.name)}</strong>
        ${p.desc ? `<p class="product-desc">${esc(p.desc)}</p>` : ''}
        <span class="price">${esc(p.price)}</span>
        <a class="btn primary" href="${LINKS[p.pay]}" target="_blank" rel="noopener">COMPRAR <span aria-hidden="true">→</span></a>
        <a class="text-link" href="${waLink(`Hola Carlos, tengo una pregunta sobre ${p.name}.`)}" target="_blank" rel="noopener">Preguntar por WhatsApp</a>
      </article>`).join('')}</div>`;
    if (d.productsNote) html += `<p class="note">${esc(d.productsNote)}</p>`;
    html += `<div class="cta-row"><a class="btn" href="${LINKS.patentes}" download="Patentes-Immunotec.pdf">${DOC_ICON}DESCARGAR PATENTES (PDF)</a><a class="btn" href="${LINKS.pdr}" download="Immunocal-PDR.pdf">${DOC_ICON}FICHA MÉDICA PDR (PDF)</a></div>`;
  }

  if (key === 'rehab') html += `<h3 class="section-title">RESERVA TU CITA EN 3 PASOS</h3><div class="cta-row">${stepsHTML()}</div>`;
  if (ADDRESS[key]) html += `<div class="cta-row">${placeHTML(key)}</div>`;

  if (key === 'strategy') html += `<div class="cta-row" id="asesoria-panel">${asesoriaHTML()}</div>`;
  else html += `<div class="cta-row">${ctaHTML('CONTACTAR POR WHATSAPP', `Hola Carlos, quiero información sobre ${d.title} (${d.sub}).`)}</div>`;

  if (d.legal) html += `<p class="legal">${esc(d.legal)}</p>`;
  if (d.note) html += `<p class="note">${esc(d.note)}${AGENT_ID ? '<br>' + esc(AGENT_ID) : ''}</p>`;

  openPanel(html, origin);
  paintSteps();
}

// "Sobre mí" baja hasta su sección
// Menú organizado (botón "••• MENÚ" y ☰ del menú fijo)
const mega = $('#mega');
function openMega() {
  mega.hidden = false; $('#aboutBtn').setAttribute('aria-expanded', 'true');
  requestAnimationFrame(() => mega.classList.add('in'));
  $('.mega-col a', mega)?.focus({ preventScroll: true });
}
function closeMega() {
  if (mega.hidden) return;
  mega.classList.remove('in'); $('#aboutBtn').setAttribute('aria-expanded', 'false');
  setTimeout(() => { if (!mega.classList.contains('in')) mega.hidden = true; }, REDUCE ? 0 : 300);
}
$('#aboutBtn').addEventListener('click', () => mega.hidden ? openMega() : closeMega());
$$('[data-mega-open]').forEach(b => b.addEventListener('click', openMega));
mega.addEventListener('click', e => { if (e.target.closest('[data-mega-close]') || e.target.closest('a')) closeMega(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMega(); });

// Enlaces internos (menú fijo, "Descubre más"): salto al hiperespacio y bajada suave
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const t = document.querySelector(a.getAttribute('href'));
  if (!t) return;
  e.preventDefault();
  if (a.dataset.tab) $('#' + a.dataset.tab)?.click();     // abre la calculadora indicada
  window.warpJump?.();
  t.scrollIntoView({ behavior: REDUCE ? 'auto' : 'smooth', block: 'start' });
});

// Botones "VER OPCIONES" de las secciones abren el panel de detalle
$$('[data-open]').forEach(b => b.addEventListener('click', () => {
  openArea(b.dataset.open, b.closest('.feature')?.querySelector('.feature-media'));
  if (b.dataset.goto) setTimeout(() => {
    const t = $('#' + b.dataset.goto, panelContent);
    if (t) { t.scrollIntoView({ behavior: REDUCE ? 'auto' : 'smooth', block: 'center' }); $('input', t)?.focus({ preventScroll: true }); }
  }, REDUCE ? 0 : 800);
}));

// Bloques de dirección, pasos y formulario dentro de las secciones
$$('[data-place]').forEach(el => { el.outerHTML = placeHTML(el.dataset.place); });
$$('[data-steps]').forEach(el => { el.outerHTML = stepsHTML(); });
$$('[data-buy]').forEach(a => { a.href = LINKS[a.dataset.buy]; });
$$('[data-patentes]').forEach(a => { a.href = LINKS.patentes; a.insertAdjacentHTML('afterbegin', DOC_ICON); });
$$('[data-doc]').forEach(a => { a.href = LINKS[a.dataset.doc]; a.insertAdjacentHTML('afterbegin', DOC_ICON); });

// Enlaces de WhatsApp con mensaje ya escrito
$$('[data-wa]').forEach(a => { a.href = waLink(a.dataset.wa); });

$('#privacyBtn').addEventListener('click', () => {
  openPanel(
    header('CARLOS FLORES DÍAZ', 'AVISO DE PRIVACIDAD') +
    `<div class="privacy">
      <p><strong>Responsable:</strong> Carlos Flores Díaz, con correo de contacto carlosfloresdiaz44@gmail.com.</p>
      <p><strong>Datos que se recaban:</strong> nombre, teléfono y correo electrónico que compartas al contactarme por WhatsApp o correo.</p>
      <p><strong>Finalidad:</strong> responder tus solicitudes, darte información sobre los servicios y productos que te interesan y dar seguimiento a tu atención.</p>
      <p><strong>Transferencias:</strong> tus datos no se venden ni se comparten con terceros, salvo con la aseguradora o proveedor que corresponda cuando tú solicites un producto o servicio.</p>
      <p><strong>Derechos ARCO:</strong> puedes solicitar el acceso, rectificación, cancelación u oposición al uso de tus datos escribiendo a carlosfloresdiaz44@gmail.com.</p>
    </div>`
  );
});

/* =========================================================
   TECLADO
   ========================================================= */
document.addEventListener('keydown', e => {
  if (!modal.hidden) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab') {             // mantener el foco dentro del panel
      const f = $$('button, a[href], input, select', panel).filter(el => !el.disabled);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    return;                            // no mover el carrusel con el panel abierto
  }
  if (e.key === 'Escape') flipCard(deck.querySelector('.card.show-back'), false);
  if (e.key === 'ArrowRight') { move(1); userTouched(); }
  if (e.key === 'ArrowLeft') { move(-1); userTouched(); }
});

/* =========================================================
   FONDO ESPACIAL ANIMADO
   Estrellas en 3 profundidades que avanzan y titilan,
   estrellas fugaces y efecto de profundidad con el mouse.
   ========================================================= */
(function starfield() {
  const canvas = $('#starfield');
  const layer = $('#parallax');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const COLORS = ['255,255,255', '255,255,255', '255,244,214', '247,220,149', '232,232,232'];   // blancos y dorados
  let W = 0, H = 0, stars = [], shooters = [];
  let nextShoot = 2000, last = 0, running = false;
  let mx = 0, my = 0, tx = 0, ty = 0;   // posición del mouse (-1 a 1), suavizada
  let mpx = -9999, mpy = -9999;         // posición del mouse en pixeles (estrellas que se apartan)
  let warp = 0, warpTarget = 0, warpTimer;   // salto al hiperespacio
  window.warpJump = () => {
    window.sfx?.('warp');
    if (reduce) return;
    warpTarget = 1; clearTimeout(warpTimer);
    warpTimer = setTimeout(() => { warpTarget = 0; }, 650);
  };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, LITE ? 1.25 : 2);
    W = innerWidth; H = innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(LITE ? 150 : 420, (W * H) / (LITE ? 6500 : 4200)));
    stars = Array.from({ length: count }, () => {
      const z = Math.random();            // 0 = lejos, 1 = cerca
      return {
        x: Math.random() * W, y: Math.random() * H, z,
        r: 0.35 + z * z * 1.5,
        speed: 0.04 + z * 0.22,
        tw: Math.random() * Math.PI * 2,
        tws: 0.6 + Math.random() * 2.2,
        c: 'rgb(' + COLORS[(Math.random() * COLORS.length) | 0] + ')',
        ox: 0, oy: 0
      };
    });
    if (reduce) draw(0, 0);
  }

  function spawnShooter(t) {
    const fromLeft = Math.random() < 0.5;
    shooters.push({
      x: fromLeft ? Math.random() * W * 0.6 : W * 0.4 + Math.random() * W * 0.6,
      y: Math.random() * H * 0.45,
      vx: (fromLeft ? 1 : -1) * (7 + Math.random() * 5),
      vy: 2.2 + Math.random() * 2.5,
      life: 0, max: 55 + Math.random() * 35
    });
    nextShoot = t + 3500 + Math.random() * 6000;   // una cada 3.5 a 9.5 segundos
  }

  function draw(t, dt) {
    tx += (mx - tx) * 0.04; ty += (my - ty) * 0.04;
    warp += (warpTarget - warp) * Math.min(1, (warpTarget ? 0.12 : 0.06) * dt);
    if (warp < 0.002) warp = 0;
    ctx.clearRect(0, 0, W, H);
    const cx = W / 2, cy = H / 2;

    for (const s of stars) {
      s.x -= s.speed * dt;
      if (warp) {                        // hiperespacio: las estrellas salen disparadas del centro
        const k = 0.035 * warp * dt * (0.4 + s.z);
        s.x += (s.x - cx) * k; s.y += (s.y - cy) * k;
      }
      if (s.x < -20 || s.x > W + 20 || s.y < -20 || s.y > H + 20) {
        if (warp > 0.1) { s.x = cx + (Math.random() - .5) * W * .5; s.y = cy + (Math.random() - .5) * H * .5; }
        else { s.x = s.x < -20 ? W + 5 : Math.random() * W; s.y = Math.random() * H; }
      }
      let px = s.x - tx * s.z * 28;
      let py = s.y - ty * s.z * 18;
      // estrellas cercanas se apartan un poco del cursor
      let tox = 0, toy = 0;
      if (s.z > 0.35) {
        const dx = px - mpx, dy = py - mpy, d = Math.hypot(dx, dy);
        if (d < 140 && d > 0.1) { const push = (1 - d / 140) * 30 * s.z; tox = dx / d * push; toy = dy / d * push; }
      }
      s.ox += (tox - s.ox) * 0.08 * dt; s.oy += (toy - s.oy) * 0.08 * dt;
      px += s.ox; py += s.oy;
      const a = 0.35 + 0.65 * Math.abs(Math.sin(s.tw + t * 0.001 * s.tws));
      if (warp > 0.03) {                 // dibujar como línea de luz
        const L = warp * 0.22 * (0.3 + s.z);
        ctx.globalAlpha = Math.min(1, 0.4 + warp) * (0.5 + s.z * 0.5);
        ctx.strokeStyle = s.c; ctx.lineWidth = Math.max(0.6, s.r * 1.1); ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px - (px - cx) * L, py - (py - cy) * L); ctx.stroke();
        continue;
      }
      ctx.globalAlpha = a * (0.45 + s.z * 0.55);
      ctx.fillStyle = s.c;
      ctx.beginPath(); ctx.arc(px, py, s.r, 0, Math.PI * 2); ctx.fill();
      if (s.r > 1.45 && a > 0.8) {         // destello en cruz en las estrellas grandes
        ctx.globalAlpha = (a - 0.8) * 1.5;
        ctx.fillRect(px - s.r * 4, py - 0.4, s.r * 8, 0.8);
        ctx.fillRect(px - 0.4, py - s.r * 4, 0.8, s.r * 8);
      }
    }

    if (!reduce) {
      if (t > nextShoot) spawnShooter(t);
      shooters = shooters.filter(m => m.life < m.max);
      for (const m of shooters) {
        m.life += dt; m.x += m.vx * dt; m.y += m.vy * dt;
        const k = 1 - m.life / m.max;
        const ex = m.x - m.vx * 14, ey = m.y - m.vy * 14;
        const g = ctx.createLinearGradient(m.x, m.y, ex, ey);
        g.addColorStop(0, `rgba(255,255,255,${k})`);
        g.addColorStop(1, 'rgba(205,208,210,0)');
        ctx.globalAlpha = 1; ctx.strokeStyle = g; ctx.lineWidth = 1.6; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(ex, ey); ctx.stroke();
      }
    }
    if (warp > 0.03) {                   // resplandor azul en el centro durante el salto
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(W, H) * 0.6);
      g.addColorStop(0, `rgba(194,198,201,${0.22 * warp})`);
      g.addColorStop(1, 'rgba(141,144,154,0)');
      ctx.globalAlpha = 1; ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    }
    ctx.globalAlpha = 1;
  }

  let loopId = 0;
  function frame(t, id) {
    if (!running || id !== loopId) return;
    requestAnimationFrame(tt => frame(tt, id));
    // en modo ligero se dibuja a ~30 cuadros por segundo (la mitad de trabajo)
    if (LITE && last && t - last < 30) return;
    if (LITE && (window.__orbitBusy || t - (window.__scrollT || 0) < 160)) return;   // y también mientras deslizas   // en celular, las estrellas ceden el turno mientras gira el carrusel
    const dt = last ? Math.min((t - last) / 16.67, 3) : 1;
    last = t;
    draw(t, dt);
  }
  window.addEventListener('lite', () => resize());
  function start() {
    if (running || reduce) return;
    running = true; last = 0; const id = ++loopId; requestAnimationFrame(t => frame(t, id));
  }

  // Pausa la animación cuando la pestaña no está visible (ahorra batería)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) running = false; else start();
  });

  // Efecto de profundidad: el fondo se mueve un poco con el mouse
  window.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse' || reduce) return;
    mpx = e.clientX; mpy = e.clientY;
    mx = (e.clientX / W) * 2 - 1;
    my = (e.clientY / H) * 2 - 1;
    layer.style.setProperty('--px', `${(-mx * 18).toFixed(1)}px`);
    layer.style.setProperty('--py', `${(-my * 12).toFixed(1)}px`);
  });

  document.addEventListener('pointerleave', () => { mpx = mpy = -9999; });
  let rt;
  window.addEventListener('resize', () => { if (window.__skipResize) return; clearTimeout(rt); rt = setTimeout(resize, 150); });
  resize();
  start();
})();

/* =========================================================
   ANIMACIONES AL BAJAR
   Cada sección entra cuando aparece en pantalla;
   la frase gigante aparece palabra por palabra.
   ========================================================= */
(function scrollReveal() {
  const targets = [...$$('.feature, .about-section, .tool, .constellation, .story > .reveal'), ...$$('.statement span')];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.25, rootMargin: '0px 0px -8% 0px' });
  targets.forEach(t => io.observe(t));
  // Respaldo: si bajas muy rápido, todo lo que ya pasó por la pantalla se muestra de todos modos
  let pending = targets.slice(), tick = false;
  addEventListener('scroll', () => {
    if (tick || !pending.length) return;
    tick = true;
    setTimeout(() => requestAnimationFrame(() => {
      pending = pending.filter(t => !t.classList.contains('in'));
      const lim = innerHeight * 0.9;
      const show = pending.filter(t => t.getBoundingClientRect().top < lim);   // primero se lee todo…
      show.forEach(t => { t.classList.add('in'); io.unobserve(t); });           // …y luego se escribe
      pending = pending.filter(t => !show.includes(t));
      tick = false;
    }), 200);
  }, { passive: true });
})();

/* =========================================================
   HERRAMIENTA 1 · CALCULADORA DE RETIRO
   Rendimiento ilustrativo: cambia TASA_ANUAL si quieres otro supuesto.
   ========================================================= */
(function calculadora() {
  const TASA_ANUAL = 0.05, EDAD_RETIRO = 65;
  const edad = $('#calc-edad'), ahorro = $('#calc-ahorro'), svg = $('#calc-svg'), tip = $('#calc-tip');
  if (!edad) return;
  const money = n => '$' + Math.round(n).toLocaleString('es-MX');
  const short = n => n >= 1e6 ? '$' + (n / 1e6).toFixed(n >= 1e7 ? 0 : 1).replace('.0', '') + ' M' : n >= 1e3 ? '$' + Math.round(n / 1e3) + ' mil' : '$' + Math.round(n);
  const W = 640, H = 300, L = 62, R = 96, T = 16, B = 34;
  let series = [];

  function niceMax(v) {
    const p = Math.pow(10, Math.floor(Math.log10(v)));
    for (const m of [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]) if (m * p >= v) return m * p;
    return 10 * p;
  }
  function calc() {
    const e = +edad.value, a = +ahorro.value, r = TASA_ANUAL / 12;
    series = [];
    let bal = 0;
    for (let age = e; age <= EDAD_RETIRO; age++) {
      const months = (age - e) * 12;
      if (age > e) for (let m = 0; m < 12; m++) bal = bal * (1 + r) + a;
      series.push({ age, aporte: a * months, total: bal });
    }
    const last = series[series.length - 1];
    $('#calc-edad-out').textContent = e + ' años';
    $('#calc-ahorro-out').textContent = money(a);
    $('#calc-aporte').textContent = money(last.aporte);
    $('#calc-total').textContent = money(last.total);
    $('#calc-note').innerHTML = cnote(personal(`Si empiezas hoy, a los ${EDAD_RETIRO} podrías tener cerca de <b>${money(last.total)}</b>. Entre antes empieces, más trabaja el tiempo a tu favor.`));
    $('#calc-wa').href = waLink(`Hola Carlos, tengo ${e} años y puedo ahorrar ${money(a)} al mes. Quiero armar mi plan de retiro.`);
    $('#calc-desc').textContent = `Si empiezas a los ${e} años con ${money(a)} al mes, a los ${EDAD_RETIRO} habrías aportado ${money(last.aporte)} y podrías acumular alrededor de ${money(last.total)} con un rendimiento supuesto de 5% anual.`;
    draw();
  }
  function draw() {
    const n = series.length, maxY = niceMax(series[n - 1].total || 1);
    const x = i => L + (W - L - R) * (n > 1 ? i / (n - 1) : 0);
    const y = v => T + (H - T - B) * (1 - v / maxY);
    const path = key => series.map((d, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(d[key]).toFixed(1)}`).join('');
    const area = key => `${path(key)}L${x(n - 1).toFixed(1)},${y(0)}L${x(0)},${y(0)}Z`;
    let g = '';
    for (let k = 0; k <= 4; k++) {                       // rejilla y eje Y
      const v = maxY * k / 4, yy = y(v).toFixed(1);
      g += `<line class="grid" x1="${L}" x2="${W - R}" y1="${yy}" y2="${yy}"/><text class="axis" x="${L - 10}" y="${+yy + 4}" text-anchor="end">${short(v)}</text>`;
    }
    const step = n > 30 ? 10 : 5;                       // eje X (edades)
    series.forEach((d, i) => { if (d.age % step === 0 || i === 0 || i === n - 1) g += `<text class="axis" x="${x(i).toFixed(1)}" y="${H - 10}" text-anchor="middle">${d.age}</text>`; });
    const lt = series[n - 1];
    const yt = y(lt.total), ya = y(lt.aporte);
    const sep = Math.abs(yt - ya) < 30 ? 15 - Math.abs(yt - ya) / 2 : 0;
    g += `<path class="area-b" d="${area('total')}"/><path class="area-a" d="${area('aporte')}"/>
      <path class="line-b" d="${path('total')}"/><path class="line-a" d="${path('aporte')}"/>
      <circle class="dot-b" cx="${x(n - 1)}" cy="${yt}" r="5"/><circle class="dot-a" cx="${x(n - 1)}" cy="${ya}" r="5"/>
      <text class="lbl" x="${x(n - 1) + 10}" y="${yt - sep + 4}">${short(lt.total)}</text>
      <text class="lbl muted" x="${x(n - 1) + 10}" y="${ya + sep + 4}">${short(lt.aporte)}</text>
      <line class="cross" id="calc-cross" y1="${T}" y2="${H - B}" x1="-10" x2="-10"/>
      <rect class="hit" x="${L}" y="${T}" width="${W - L - R}" height="${H - T - B}"/>`;
    svg.innerHTML = g;
    const hit = $('.hit', svg), cross = $('#calc-cross');
    const show = e => {
      const pt = svg.getBoundingClientRect();
      const sx = (e.clientX - pt.left) * (W / pt.width);
      const i = Math.max(0, Math.min(n - 1, Math.round((sx - L) / ((W - L - R) / Math.max(1, n - 1)))));
      const d = series[i];
      cross.setAttribute('x1', x(i)); cross.setAttribute('x2', x(i));
      tip.hidden = false;
      tip.innerHTML = `<b>${d.age} años</b><span><i class="sw sw-b"></i>Con rendimiento <strong>${money(d.total)}</strong></span><span><i class="sw sw-a"></i>Lo que aportas <strong>${money(d.aporte)}</strong></span>`;
      const px = x(i) / W * pt.width;
      tip.style.left = Math.min(pt.width - tip.offsetWidth - 4, Math.max(4, px - tip.offsetWidth / 2)) + 'px';
    };
    let showRaf = 0, showE = null;
    const showSoon = e => { showE = e; if (!showRaf) showRaf = requestAnimationFrame(() => { showRaf = 0; show(showE); }); };   // máximo una vez por cuadro
    hit.addEventListener('pointermove', showSoon);
    hit.addEventListener('pointerdown', show);
    hit.addEventListener('pointerleave', () => { tip.hidden = true; cross.setAttribute('x1', -10); cross.setAttribute('x2', -10); });
  }
  $('.calc-results').insertAdjacentHTML('afterend', '<div id="calc-note"></div>');
  NOTE_RENDERERS.push(calc);
  let calcRaf = 0;
  const calcSoon = () => { if (!calcRaf) calcRaf = requestAnimationFrame(() => { calcRaf = 0; calc(); }); };   // máximo un cálculo por cuadro
  edad.addEventListener('input', calcSoon);
  ahorro.addEventListener('input', calcSoon);
  calc();
})();

/* =========================================================
   LA REALIDAD: 86 de 100 · contador de pagos · empleo
   ========================================================= */
(function realidad() {
  const sec = $('#realidad');
  if (!sec) return;
  const box = $('#pillars');
  if (!box) return;
  // los pilares se llenan una sola vez, al aparecer en pantalla
  function play() { box.classList.add('filled'); }
  // cifras que cuentan hacia arriba
  function countUp(el) {
    const to = +el.dataset.count, dec = +el.dataset.dec || 0, t0 = performance.now(), dur = 1400;
    const step = t => { const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); el.textContent = (to * e).toFixed(dec); if (k < 1) requestAnimationFrame(step); };
    REDUCE ? (el.textContent = to.toFixed(dec)) : requestAnimationFrame(step);
  }
  new IntersectionObserver((ens, io) => ens.forEach(en => {
    if (!en.isIntersecting) return;
    play(); $$('[data-count]', sec).forEach(countUp); io.disconnect();
  }), { threshold: 0.3 }).observe(box);
  // contador en vivo: 552 millones al día ≈ 6,389 pesos por segundo (AMIS 2024)
  const PER_MS = 552000000 / 86400000, t0 = Date.now(), pc = $('#payCounter');
  const fmt = new Intl.NumberFormat('es-MX');
  let payTimer = 0, payVisible = false;
  const payTick = () => { pc.textContent = '$' + fmt.format(Math.floor((Date.now() - t0) * PER_MS)); };
  const paySync = () => {
    const on = payVisible && !document.hidden;
    if (on && !payTimer) { payTick(); payTimer = setInterval(payTick, 120); }
    if (!on && payTimer) { clearInterval(payTimer); payTimer = 0; }
  };
  if (pc) {
    new IntersectionObserver(ens => { payVisible = ens[0].isIntersecting; paySync(); }).observe(pc);
    document.addEventListener('visibilitychange', paySync);
  }
  // pregunta directa
  const R = {
    no: ['Estás en el grupo de 86 de cada 100. Vamos a ver quién depende de ti y cuánto necesitarían.', 'familia'],
    trabajo: ['Ese seguro depende de tu empleo: si cambias de trabajo o te quedas sin él, tu familia pierde la protección. Calculemos cuánto necesitan de verdad.', 'proteccion'],
    si: ['¡Bien! Ahora revisemos si tu suma asegurada realmente alcanza para tu familia.', 'proteccion']
  };
  $('#realAns').addEventListener('click', e => {
    const b = e.target.closest('.ans'); if (!b) return;
    $$('.ans').forEach(x => x.classList.toggle('on', x === b));
    const [msg, go] = R[b.dataset.a];
    $('#ansReply').innerHTML = `${personal(esc(msg))} <button type="button" class="text-link" data-jump="${go}">Continuar →</button>`;
  });
  document.addEventListener('click', e => {
    const j = e.target.closest('[data-jump]'); if (!j) return;
    window.warpJump?.();
    $('#' + j.dataset.jump).scrollIntoView({ behavior: REDUCE ? 'auto' : 'smooth', block: 'start' });
  });
})();

/* =========================================================
   TU CONSTELACIÓN FAMILIAR
   ========================================================= */
(function constelacionFamiliar() {
  const svg = $('#famiSvg');
  if (!svg) return;
  const CX = 350, CY = 190, MAX = 8;
  const COLORS = { Pareja: '#ff7a9c', Hijo: '#c3c7c9', Hija: '#c3c7c9', 'Mamá': '#e8c67a', 'Papá': '#e8c67a', Otro: '#d0ced4' };
  window.famNames = [];
  // estrellitas de fondo
  let bg = '';
  for (let i = 0; i < 60; i++) bg += `<circle class="cstar" cx="${(Math.random() * 700).toFixed(0)}" cy="${(Math.random() * 380).toFixed(0)}" r="${(Math.random() * 1.2 + .4).toFixed(1)}" style="--t:${(Math.random() * 4).toFixed(1)}s"/>`;
  function pos(i, n) {
    const a = -Math.PI / 2 + (i / Math.max(n, 1)) * Math.PI * 2 + (n % 2 ? 0 : Math.PI / n / 2);
    const rx = n <= 3 ? 190 : 250, ry = n <= 3 ? 120 : 140;
    return [CX + Math.cos(a) * rx, CY + Math.sin(a) * ry];
  }
  function draw(newIdx = -1) {
    const F = window.famNames, n = F.length;
    let g = bg;
    F.forEach((f, i) => { const [x, y] = pos(i, n); g += `<line class="flink${i === newIdx ? ' new' : ''}" x1="${CX}" y1="${CY}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="${COLORS[f.role]}"/>`; });
    for (let i = 0; i < n && n > 2; i++) { const [x1, y1] = pos(i, n), [x2, y2] = pos((i + 1) % n, n); g += `<line class="fring" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"/>`; }
    g += `<g class="fme"><circle cx="${CX}" cy="${CY}" r="26" class="fme-glow"/><circle cx="${CX}" cy="${CY}" r="11" class="fme-core"/><text x="${CX}" y="${CY + 46}" class="flabel me">Tú</text></g>`;
    F.forEach((f, i) => {
      const [x, y] = pos(i, n), c = COLORS[f.role];
      g += `<g class="fstar${i === newIdx ? ' new' : ''}" style="--c:${c}">
        <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="16" fill="${c}" opacity=".18"/>
        <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7" fill="${c}"/>
        <text x="${x.toFixed(1)}" y="${(y + 32).toFixed(1)}" class="flabel">${esc(f.name)}</text>
        <text x="${x.toFixed(1)}" y="${(y + 47).toFixed(1)}" class="frole">${esc(f.role)}</text>
        <g class="fdel" data-del="${i}" role="button" aria-label="Quitar ${esc(f.name)}" tabindex="0"><circle cx="${(x + 16).toFixed(1)}" cy="${(y - 16).toFixed(1)}" r="9"/><text x="${(x + 16).toFixed(1)}" y="${(y - 12.5).toFixed(1)}">×</text></g>
      </g>`;
    });
    svg.innerHTML = g;
    const msg = $('#famiMsg');
    if (!n) msg.textContent = 'Tu estrella está en el centro. Agrega a tu familia.';
    else msg.innerHTML = `<b>${VISITOR.name ? esc(VISITOR.name) + ', ' : ''}${n} ${n === 1 ? 'persona cuenta' : 'personas cuentan'} contigo.</b> Esto es lo que proteges.`;
    $('#famiGo').hidden = !n;
    window.renderScenario?.();
  }
  $('#famiForm').addEventListener('submit', e => {
    e.preventDefault();
    const inp = $('#famiName'), name = inp.value.trim().replace(/\s+/g, ' ');
    if (!name) { inp.focus(); return; }
    if (window.famNames.length >= MAX) { $('#famiMsg').textContent = `Puedes agregar hasta ${MAX} personas.`; return; }
    window.famNames.push({ name: name.slice(0, 18), role: $('#famiRole').value });
    inp.value = ''; inp.focus();
    draw(window.famNames.length - 1);
    window.sfx?.('whoosh');
  });
  svg.addEventListener('click', e => {
    const d = e.target.closest('[data-del]'); if (!d) return;
    window.famNames.splice(+d.dataset.del, 1); draw();
  });
  svg.addEventListener('keydown', e => {
    const d = e.target.closest('[data-del]'); if (d && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); window.famNames.splice(+d.dataset.del, 1); draw(); }
  });
  $('#famiGo').addEventListener('click', () => {
    const kids = window.famNames.filter(f => f.role === 'Hijo' || f.role === 'Hija').length;
    window.famSetKids?.(kids);
    window.warpJump?.();
    $('#proteccion').scrollIntoView({ behavior: REDUCE ? 'auto' : 'smooth', block: 'start' });
  });
  draw();
})();

/* =========================================================
   MITOS VS. REALIDAD (tarjetas que se voltean)
   ========================================================= */
(function mitos() {
  const box = $('#myths');
  if (!box) return;
  const M = [
    ['“Es muy caro.”', 'Hay planes para distintos presupuestos y muchas veces cuesta menos de lo que imaginas. Lo que sale caro es no tenerlo. Cotizar conmigo no cuesta nada.'],
    ['“Soy joven, no lo necesito.”', 'Entre más joven y sano contratas, más fácil es calificar y la prima suele ser más baja. Esperar casi siempre sale más caro.'],
    ['“Ya tengo el de mi trabajo.”', 'Ese seguro depende de tu empleo: si cambias de trabajo o te quedas sin él, lo pierdes. Y la suma suele ser baja para lo que tu familia necesita.'],
    ['“Las aseguradoras no pagan.”', 'En 2024 las aseguradoras en México pagaron en promedio 552 millones de pesos al día en seguros de vida (AMIS). Con una buena asesoría, tus beneficiarios saben exactamente qué hacer.']
  ];
  box.innerHTML = M.map(([m, r], i) => `<button type="button" class="myth" aria-pressed="false" style="--i:${i}">
    <span class="myth-face m-front"><small>MITO</small><b>${m}</b><em>Toca para ver la realidad ↻</em></span>
    <span class="myth-face m-back"><small>REALIDAD</small><span>${r}</span></span>
  </button>`).join('');
  box.addEventListener('click', e => {
    const c = e.target.closest('.myth'); if (!c) return;
    const on = c.classList.toggle('flipped');
    c.setAttribute('aria-pressed', String(on));
    window.sfx?.('whoosh');
  });
})();

/* =========================================================
   HERRAMIENTA · ¿CUÁNTO NECESITA TU FAMILIA? (seguro de vida)
   Cambia EDU_POR_HIJO si quieres otro supuesto de educación.
   ========================================================= */
(function proteccionFamiliar() {
  const EDU_POR_HIJO = 400000;
  const $i = id => $('#fam-' + id);
  if (!$i('ingreso')) return;
  const money = n => '$' + Math.round(n).toLocaleString('es-MX');
  let hijos = 2;
  const PARTS = [
    { k: 'ingreso', label: 'Ingreso para tu familia', c: '#8e9399' },
    { k: 'deudas', label: 'Liquidar deudas', c: '#c9577a' },
    { k: 'edu', label: 'Educación de tus hijos', c: '#a8843a' }
  ];
  function calc() {
    const ing = +$i('ingreso').value, anos = +$i('anos').value, deu = +$i('deudas').value, aho = +$i('ahorro').value;
    const v = { ingreso: ing * 12 * anos, deudas: deu, edu: hijos * EDU_POR_HIJO };
    const bruto = v.ingreso + v.deudas + v.edu;
    const total = Math.max(0, bruto - aho);
    $i('ingreso-out').textContent = money(ing);
    $i('anos-out').textContent = anos + (anos === 1 ? ' año' : ' años');
    $i('hijos-out').textContent = hijos === 0 ? 'Sin hijos' : hijos + (hijos === 1 ? ' hijo' : ' hijos');
    $i('deudas-out').textContent = money(deu);
    $i('ahorro-out').textContent = money(aho);
    $i('kids').innerHTML = hijos ? Array.from({ length: hijos }, () => '<i></i>').join('') : '<span>—</span>';
    $i('menos').disabled = hijos <= 0; $i('mas').disabled = hijos >= 6;
    $i('total').textContent = money(total);
    $i('note').innerHTML = cnote(personal(`Con estos números, tu familia estaría cubierta con unos <b>${money(total)}</b>. Lo revisamos juntos y buscamos un plan que se ajuste a tu presupuesto.`));
    // barra apilada (proporción de cada componente)
    const bar = $i('bar');
    bar.innerHTML = PARTS.filter(p => v[p.k] > 0).map(p =>
      `<span style="flex:${v[p.k]};background:${p.c}" data-tip="${p.label}: ${money(v[p.k])}"></span>`).join('');
    bar.setAttribute('aria-label', PARTS.map(p => `${p.label} ${money(v[p.k])}`).join(', '));
    $i('legend').innerHTML = PARTS.map(p => `<li><i class="sw" style="background:${p.c}"></i><span>${p.label}</span><b>${money(v[p.k])}</b></li>`).join('');
    const less = $i('less');
    less.hidden = !aho;
    less.textContent = aho ? `Menos ${money(Math.min(aho, bruto))} de ahorros y seguros que ya tienes` : '';
    renderScenario({ ing, anos, deu, aho, total, edu: v.edu });
    $i('wa').href = waLink(`Hola Carlos, usé tu calculadora de protección: ingreso ${money(ing)} al mes, ${anos} años de protección, ${hijos} hijo(s) y ${money(deu)} en deudas. Me sugirió una suma asegurada de ${money(total)}. Quiero cotizar mi seguro de vida.`);
  }
  // ---- Escenario "Sin seguro / Con seguro"
  let sc = 'sin', lastV = null;
  function familyLabel() {
    const n = (window.famNames || []).map(f => f.name);
    if (!n.length) return 'tu familia';
    if (n.length === 1) return n[0];
    return n.slice(0, -1).join(', ') + ' y ' + n[n.length - 1];
  }
  function renderScenario(v) {
    if (v) lastV = v; else v = lastV;
    if (!v) return;
    const fam = familyLabel(), F = fam.charAt(0).toUpperCase() + fam.slice(1);
    const pl = (window.famNames || []).length > 1;           // varios nombres → verbo en plural
    const vb = (uno, varios) => pl ? varios : uno;
    const meses = v.ing ? Math.floor(v.aho / v.ing) : 0;
    const hijosTxt = hijos === 0 ? 'Los planes de tu familia' : hijos === 1 ? 'La educación de tu hijo' : `La educación de tus ${hijos} hijos`;
    const L = sc === 'sin' ? [
      ['Primer mes', `${F} ${vb('cubre', 'cubren')} los gastos y trámites con lo que ${vb('tenga', 'tengan')} ahorrado.`],
      [meses ? `Mes ${meses + 1}` : 'Desde el mes 1', meses ? `Tus ahorros alcanzaban para ${meses} ${meses === 1 ? 'mes' : 'meses'}. Los ${money(v.ing)} que aportabas cada mes ya no llegan.` : `Los ${money(v.ing)} que aportabas cada mes ya no llegan, y no hay ahorro para cubrirlos.`],
      ['Primer año', v.deu ? `La deuda de ${money(v.deu)} sigue ahí y hay que pagarla.` : 'Hay que reorganizar la casa con un ingreso menos.'],
      ['Después', `${hijosTxt} ${hijos ? 'queda' : 'quedan'} en pausa o ${hijos ? 'depende' : 'dependen'} de la ayuda de otros.`]
    ] : [
      ['Primer mes', `${F} ${vb('recibe', 'reciben')} la suma asegurada de ${money(v.total)}.`],
      ['Cada mes', `Se mantiene el ingreso de ${money(v.ing)} durante ${v.anos} años.`],
      ['Deudas', v.deu ? `Se liquidan los ${money(v.deu)} y la casa queda libre.` : 'No quedan deudas pendientes.'],
      ['Futuro', hijos ? `${hijosTxt} sigue adelante, como lo planeaste.` : 'Los planes de tu familia siguen adelante, como los planeaste.']
    ];
    $('#scLead').textContent = sc === 'sin' ? `Si mañana faltas y no tienes seguro, esto es lo que ${vb('viviría', 'vivirían')} ${fam}:` : `Con un seguro de vida, la historia de ${fam} cambia:`;
    $('#scLine').innerHTML = L.map(([t, d], i) => `<li style="--i:${i}"><b>${t}</b><span>${esc(d)}</span></li>`).join('');
    $('.scenario').dataset.sc = sc;
  }
  window.renderScenario = () => renderScenario();
  $$('.seg-btn').forEach(b => b.addEventListener('click', () => {
    sc = b.dataset.sc;
    $$('.seg-btn').forEach(x => x.setAttribute('aria-selected', String(x === b)));
    renderScenario();
  }));
  window.famSetKids = n => { hijos = Math.max(0, Math.min(6, n)); calc(); };

  $i('wa').insertAdjacentHTML('beforebegin', '<div id="fam-note"></div>');
  NOTE_RENDERERS.push(calc);
  let calcRaf = 0;
  const calcSoon = () => { if (!calcRaf) calcRaf = requestAnimationFrame(() => { calcRaf = 0; calc(); }); };   // máximo un cálculo por cuadro
  ['ingreso', 'anos', 'deudas', 'ahorro'].forEach(id => $i(id).addEventListener('input', calcSoon));
  $i('menos').addEventListener('click', () => { hijos = Math.max(0, hijos - 1); calc(); });
  $i('mas').addEventListener('click', () => { hijos = Math.min(6, hijos + 1); calc(); });
  // tooltip de la barra
  const bar = $i('bar');
  const tip = document.createElement('div'); tip.className = 'chart-tip'; tip.hidden = true; bar.parentElement.style.position = 'relative'; bar.after(tip);
  bar.addEventListener('pointermove', e => {
    const seg = e.target.closest('span[data-tip]');
    if (!seg) { tip.hidden = true; return; }
    tip.textContent = seg.dataset.tip; tip.hidden = false;
    const pr = bar.parentElement.getBoundingClientRect();
    tip.style.top = (bar.offsetTop + bar.offsetHeight + 8) + 'px';
    tip.style.left = Math.max(0, Math.min(pr.width - tip.offsetWidth, e.clientX - pr.left - tip.offsetWidth / 2)) + 'px';
  });
  bar.addEventListener('pointerleave', () => { tip.hidden = true; });
  calc();
})();

/* =========================================================
   ASISTENTE VIRTUAL "DÍAZ"
   Conversación guiada: hace 2 preguntas y arma el mensaje de WhatsApp.
   ========================================================= */
(function asistente() {
  const fab = $('#botFab'), bot = $('#bot'), log = $('#botLog'), opts = $('#botOpts'), form = $('#botForm'), nameIn = $('#botName');
  if (!fab) return;
  const FLOWS = {
    strategy: { intro: '¡Perfecto! Hablemos de tu protección y tu futuro.', qs: [
      { q: '¿Qué te interesa más?', o: ['Seguro de vida', 'Ahorro para el retiro (PPR)', 'Educación de mis hijos', 'Gastos médicos mayores', 'Aún no lo sé'] },
      { q: '¿Cuándo te gustaría empezar?', o: ['Lo antes posible', 'En los próximos meses', 'Solo estoy explorando'] } ] },
    rehab: { intro: 'Vamos a ver cómo te puedo ayudar con tu recuperación.', qs: [
      { q: '¿Dónde tienes la molestia?', o: ['Cuello', 'Hombro', 'Espalda', 'Codo', 'Muñeca o mano', 'Cadera', 'Rodilla', 'Tobillo o pie'] },
      { q: '¿Desde cuándo?', o: ['Menos de 2 semanas', 'De 1 a 3 meses', 'Más de 3 meses', 'Es después de una cirugía'] } ] },
    wellness: { intro: 'Te ayudo a encontrar el Immunocal ideal.', qs: [
      { q: '¿Qué buscas?', o: ['Reforzar mis defensas', 'Envejecer mejor', 'Rendimiento deportivo'] },
      { q: '¿Ya conoces Immunocal?', o: ['Sí, ya lo he tomado', 'No, es la primera vez'] } ] },
    talk: { intro: 'Claro, te comunico directo con Carlos.', qs: [] }
  };
  const START = [['Proteger a mi familia o mi futuro', 'strategy'], ['Tengo una lesión o dolor', 'rehab'], ['Quiero más energía y bienestar', 'wellness'], ['Solo quiero hablar con Carlos', 'talk']];
  let flow = null, answers = [], name = '', busy = false, opened = false;

  const wait = ms => new Promise(r => setTimeout(r, REDUCE ? 0 : ms));
  const scrollLog = () => { log.scrollTop = log.scrollHeight; };
  async function say(html, ms = 650) {
    const typing = document.createElement('div');
    typing.className = 'msg bot-msg typing'; typing.innerHTML = '<i></i><i></i><i></i>';
    log.appendChild(typing); scrollLog();
    await wait(ms);
    typing.classList.remove('typing'); typing.innerHTML = html; scrollLog();
  }
  function me(text) {
    const m = document.createElement('div'); m.className = 'msg me-msg'; m.textContent = text; log.appendChild(m); scrollLog();
  }
  function choices(list) {
    opts.innerHTML = list.map((o, i) => `<button type="button" class="bopt" data-i="${i}">${esc(o[0])}</button>`).join('');
    opts._list = list;
  }
  async function start() {
    log.innerHTML = ''; opts.innerHTML = ''; form.hidden = true; flow = null; answers = []; name = '';
    await say(`¡Hola${VISITOR.name ? ', ' + esc(VISITOR.name) : ''}! Soy el asistente de <b>Carlos</b>. Él lee personalmente cada mensaje.`, 500);
    await say('¿En qué te puedo ayudar hoy?', 600);
    choices(START.map(([t, k]) => [t, () => pickFlow(k, t)]));
  }
  async function pickFlow(k, label) {
    me(label); opts.innerHTML = ''; flow = k;
    await say(FLOWS[k].intro);
    ask(0);
  }
  async function ask(i) {
    const f = FLOWS[flow];
    if (i >= f.qs.length) return askName();
    await say(f.qs[i].q, 500);
    choices(f.qs[i].o.map(t => [t, async () => { me(t); opts.innerHTML = ''; answers[i] = t; ask(i + 1); }]));
  }
  async function askName() {
    if (VISITOR.name) { name = VISITOR.name; return finish(); }
    await say('¿Cómo te llamas? Así Carlos sabe con quién habla.', 550);
    form.hidden = false; opts.innerHTML = '<button type="button" class="bopt ghost" data-skip>Prefiero no decirlo</button>';
    nameIn.value = ''; nameIn.focus({ preventScroll: true });
  }
  function summary() {
    const hola = name ? `Hola Carlos, soy ${name}.` : 'Hola Carlos.';
    if (flow === 'strategy') return `${hola} Me interesa: ${answers[0]}. Quiero empezar: ${answers[1].toLowerCase()}.`;
    if (flow === 'rehab') return `${hola} Tengo una molestia en: ${answers[0]} (${answers[1].toLowerCase()}). Me gustaría una valoración.`;
    if (flow === 'wellness') return `${hola} Busco: ${answers[0].toLowerCase()}. ${answers[1] === 'Sí, ya lo he tomado' ? 'Ya he tomado Immunocal.' : 'Es mi primera vez con Immunocal.'} ¿Cuál me recomiendas?`;
    return `${hola} Me gustaría hablar contigo.`;
  }
  async function finish() {
    form.hidden = true; opts.innerHTML = '';
    const msg = summary();
    const wa = `<a class="btn primary small" href="${waLink(msg)}" target="_blank" rel="noopener">ENVIAR POR WHATSAPP →</a>`;
    await say(`${name ? `Gracias, <b>${esc(name)}</b>. ` : ''}Este es el mensaje que le voy a pasar a Carlos:<blockquote>${esc(msg)}</blockquote>`, 700);
    let extra = '';
    if (flow === 'strategy') extra = `<button type="button" class="btn ghost small" data-goto="proteccion">CALCULAR CUÁNTO NECESITA MI FAMILIA</button>`;
    if (flow === 'rehab') extra = `<a class="btn ghost small" href="${LINKS.agenda}" target="_blank" rel="noopener">AGENDAR VALORACIÓN</a>`;
    if (flow === 'wellness') {
      const k = answers[0] === 'Rendimiento deportivo' ? 'sport' : answers[0] === 'Envejecer mejor' ? 'platinum' : 'mx';
      const n = { mx: 'Immunocal MX', platinum: 'Immunocal Platinum', sport: 'Immunocal Sport' }[k];
      await say(`Por lo que me cuentas, te podría ir bien <b>${n}</b>.`, 500);
      extra = `<a class="btn ghost small" href="${LINKS[k]}" target="_blank" rel="noopener">COMPRAR ${n.toUpperCase()}</a>`;
    }
    await say(`<div class="msg-actions">${wa}${extra}</div>`, 350);
  }
  // clics en opciones
  opts.addEventListener('click', async e => {
    const b = e.target.closest('.bopt');
    if (!b || busy) return;
    busy = true;
    if (b.hasAttribute('data-skip')) { me('Prefiero no decirlo'); name = ''; await finish(); }
    else await opts._list[+b.dataset.i][1]();
    busy = false;
  });
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const v = nameIn.value.trim();
    if (!v || busy) return;
    busy = true; name = v.slice(0, 40); VISITOR.set(name); me(name); await finish(); busy = false;
  });
  log.addEventListener('click', e => {
    const g = e.target.closest('[data-goto]');
    if (!g) return;
    close(); window.warpJump?.();
    $('#' + g.dataset.goto)?.scrollIntoView({ behavior: REDUCE ? 'auto' : 'smooth', block: 'start' });
  });
  function open() {
    bot.hidden = false; fab.setAttribute('aria-expanded', 'true'); fab.classList.add('open');
    $('#botTeaser').classList.remove('show');
    if (!opened) { opened = true; start(); }
    requestAnimationFrame(() => bot.classList.add('in'));
  }
  function close() {
    bot.classList.remove('in'); fab.setAttribute('aria-expanded', 'false'); fab.classList.remove('open');
    setTimeout(() => { if (!bot.classList.contains('in')) bot.hidden = true; }, REDUCE ? 0 : 300);
  }
  fab.addEventListener('click', () => bot.hidden ? open() : close());
  $('#botClose').addEventListener('click', () => { close(); fab.focus(); });
  $('#botRestart').addEventListener('click', () => { if (!busy) start(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !bot.hidden) close(); });
  // mensajito de invitación a los 8 segundos (una sola vez)
  setTimeout(() => { if (!opened) { $('#botTeaser').classList.add('show'); setTimeout(() => $('#botTeaser').classList.remove('show'), 6000); } }, 8000);
})();

/* =========================================================
   HERRAMIENTA 2 · MAPA DEL CUERPO
   ========================================================= */
(function mapaCuerpo() {
  const info = $('#zone-info');
  if (!info) return;
  const ZONAS = {
    cuello:  { t: 'Cuello', d: 'Tensión, contracturas y rigidez por postura o estrés.', tx: ['Fisioterapia', 'Ventosas', 'Ultrasonido'] },
    hombro:  { t: 'Hombro', d: 'Dolor al levantar el brazo, lesiones deportivas o recuperación después de una cirugía.', tx: ['Fisioterapia', 'Kinesiotaping', 'Ultrasonido', 'Terapia postquirúrgica'] },
    espalda: { t: 'Espalda y columna', d: 'Dolor de espalda baja o media, postura y movilidad.', tx: ['Fisioterapia', 'Ventosas', 'Kinesiotaping'] },
    codo:    { t: 'Codo', d: 'Sobrecarga por trabajo, deporte o uso repetido (codo de tenista o de golfista).', tx: ['Fisioterapia', 'Ultrasonido', 'Kinesiotaping'] },
    muneca:  { t: 'Muñeca y mano', d: 'Dolor por uso de computadora o celular, esguinces y recuperación después de una fractura.', tx: ['Fisioterapia', 'Kinesiotaping', 'Ultrasonido'] },
    cadera:  { t: 'Cadera', d: 'Movilidad limitada, molestias al caminar o recuperación después de una cirugía.', tx: ['Fisioterapia', 'Terapia postquirúrgica'] },
    rodilla: { t: 'Rodilla', d: 'Lesiones deportivas, molestias al correr o subir escaleras, o recuperación después de una cirugía.', tx: ['Fisioterapia', 'Kinesiotaping', 'Terapia postquirúrgica'] },
    tobillo: { t: 'Tobillo y pie', d: 'Torceduras, inflamación y regreso a la actividad.', tx: ['Fisioterapia', 'Kinesiotaping', 'Presoterapia', 'Drenaje linfático'] }
  };
  $('#zone-chips').innerHTML = Object.entries(ZONAS).map(([k, z]) => `<button type="button" class="zchip" data-zone="${k}">${z.t}</button>`).join('');
  function pick(k) {
    const z = ZONAS[k];
    $$('.spot, .zchip').forEach(b => b.classList.toggle('on', b.dataset.zone === k));
    info.innerHTML = `<div class="zone-card">
      <p class="mini">ZONA SELECCIONADA</p>
      <h3>${z.t}</h3>
      <p>${z.d}</p>
      ${cnote(personal('Yo también pasé por una recuperación larga. Con acompañamiento y constancia se sale adelante; empecemos con una valoración.'))}
      <p class="zone-lbl">Lo que solemos trabajar</p>
      <ul class="zone-tx">${z.tx.map(t => `<li>${t}</li>`).join('')}</ul>
      <p class="fine">Tu tratamiento se define en la valoración, según tu caso.</p>
      <div class="actions">
        <a class="btn primary" href="${LINKS.agenda}" target="_blank" rel="noopener">AGENDAR VALORACIÓN <span aria-hidden="true">→</span></a>
        <a class="btn ghost" href="${waLink(`Hola Carlos, tengo una molestia en: ${z.t}. Me gustaría una valoración.`)}" target="_blank" rel="noopener">WHATSAPP</a>
      </div>
      <button type="button" class="text-link zone-back">← Elegir otra zona</button>
    </div>`;
    if (innerWidth <= 700) info.scrollIntoView({ behavior: REDUCE ? 'auto' : 'smooth', block: 'nearest' });
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('.spot, .zchip');
    if (b) { pick(b.dataset.zone); return; }
    if (e.target.closest('.zone-back')) {
      $$('.spot').forEach(s => s.classList.remove('on'));
      info.innerHTML = `<div class="zone-empty"><p class="zone-hint">Elige una zona</p><div class="zone-chips">${Object.entries(ZONAS).map(([k, z]) => `<button type="button" class="zchip" data-zone="${k}">${z.t}</button>`).join('')}</div></div>`;
    }
  });
})();

/* =========================================================
   HERRAMIENTA 3 · ¿QUÉ IMMUNOCAL ES PARA TI?
   ========================================================= */
(function quiz() {
  const box = $('#quiz-box');
  if (!box) return;
  const Q = [
    { q: '¿Qué buscas principalmente?', o: [
      ['Reforzar mis defensas', { mx: 3 }],
      ['Envejecer mejor y cuidar mis células', { platinum: 3 }],
      ['Rendir y recuperarme mejor al entrenar', { sport: 3 }] ] },
    { q: '¿Cuánta actividad física haces?', o: [
      ['Poca o nada', { mx: 1, platinum: 1 }],
      ['Algo, 1 a 3 veces por semana', { mx: 1, platinum: 1, sport: 1 }],
      ['Entreno fuerte, 4 o más veces', { sport: 2 }] ] },
    { q: '¿En qué rango de edad estás?', o: [
      ['Menos de 35', { mx: 1, sport: 1 }],
      ['De 35 a 50', { mx: 1, platinum: 1 }],
      ['Más de 50', { platinum: 2 }] ] }
  ];
  const P = {
    mx: { name: 'Immunocal MX', line: 'DEFENSA', price: '$1,499 MXN', img: 'assets/azul.webp', why: 'Ideal para empezar: apoya a tus células a producir glutatión y a mantener tus defensas.' },
    platinum: { name: 'Immunocal Platinum', line: 'LONGEVIDAD', price: '$1,899 MXN', img: 'assets/Platinum.webp', why: 'Pensado para quien quiere cuidar su bienestar a largo plazo y el equilibrio de sus células.' },
    sport: { name: 'Immunocal Sport', line: 'RENDIMIENTO', price: '$2,099 MXN', img: 'assets/sport.webp', why: 'Para quien entrena seguido y busca apoyar su energía y recuperación.' }
  };
  let step = 0, score = {};
  function render() {
    if (step < Q.length) {
      const q = Q[step];
      box.innerHTML = `<div class="quiz-card">
        <div class="quiz-progress" aria-label="Pregunta ${step + 1} de ${Q.length}">${Q.map((_, i) => `<i class="${i < step ? 'done' : i === step ? 'cur' : ''}"></i>`).join('')}</div>
        <p class="mini">PREGUNTA ${step + 1} DE ${Q.length}</p>
        <h3>${q.q}</h3>
        <div class="quiz-opts">${q.o.map((o, i) => `<button type="button" class="qopt" data-i="${i}"><span class="qk">${'ABC'[i]}</span>${o[0]}</button>`).join('')}</div>
        ${step ? '<button type="button" class="text-link quiz-prev">← Anterior</button>' : ''}
      </div>`;
      return;
    }
    const best = ['platinum', 'sport', 'mx'].reduce((a, b) => (score[b] || 0) > (score[a] || 0) ? b : a, 'mx');
    const p = P[best];
    box.innerHTML = `<div class="quiz-card quiz-result">
      <img src="${p.img}" alt="Caja de ${p.name}">
      <div>
        <p class="mini">TU RECOMENDACIÓN</p>
        <small class="qline">${p.line}</small>
        <h3>${p.name}</h3>
        ${cnote(personal(p.why))}
        <p class="qprice">${p.price} <span>· envío incluido</span></p>
        <div class="actions">
          <a class="btn primary" href="${LINKS[best]}" target="_blank" rel="noopener">COMPRAR <span aria-hidden="true">→</span></a>
          <a class="btn ghost" href="${waLink(`Hola Carlos, hice el test de tu página y me recomendó ${p.name}. Tengo algunas preguntas.`)}" target="_blank" rel="noopener">PREGUNTAR POR WHATSAPP</a>
        </div>
        <button type="button" class="text-link quiz-restart">↻ Volver a hacer el test</button>
        <p class="fine">Recomendación orientativa. Suplemento alimenticio. Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo recomienda y de quien lo usa.</p>
      </div>
    </div>`;
  }
  const hist = [];
  box.addEventListener('click', e => {
    const o = e.target.closest('.qopt');
    if (o) {
      const pts = Q[step].o[+o.dataset.i][1];
      hist.push(pts);
      for (const k in pts) score[k] = (score[k] || 0) + pts[k];
      o.classList.add('picked');
      setTimeout(() => { step++; render(); }, REDUCE ? 0 : 280);
    } else if (e.target.closest('.quiz-prev')) {
      const pts = hist.pop(); for (const k in pts) score[k] -= pts[k]; step--; render();
    } else if (e.target.closest('.quiz-restart')) {
      step = 0; score = {}; hist.length = 0; render();
    }
  });
  render();
})();

/* =========================================================
   CONSTELACIÓN DE LAS TRES ÁREAS
   ========================================================= */
(function constelacion() {
  const wrap = $('#constWrap');
  if (!wrap) return;
  const NS = 'http://www.w3.org/2000/svg';
  const rnd = (a, b) => a + Math.random() * (b - a);
  // estrellitas de fondo
  const bg = $('#constBg');
  for (let i = 0; i < 70; i++) {
    const c = document.createElementNS(NS, 'circle');
    c.setAttribute('cx', rnd(10, 790).toFixed(1)); c.setAttribute('cy', rnd(10, 510).toFixed(1));
    c.setAttribute('r', rnd(.6, 1.8).toFixed(1));
    c.setAttribute('class', 'cstar'); c.style.setProperty('--t', rnd(0, 4).toFixed(2) + 's');
    bg.appendChild(c);
  }
  // estrellas sobre cada lado del triángulo
  const N = { strategy: [400, 70], rehab: [120, 440], wellness: [680, 440] };
  const EDGES = [['strategy', 'rehab'], ['rehab', 'wellness'], ['wellness', 'strategy']];
  const es = $('#constEdgeStars');
  EDGES.forEach(([a, b], ei) => [.25, .5, .75].forEach((t, j) => {
    const c = document.createElementNS(NS, 'circle');
    c.setAttribute('cx', (N[a][0] + (N[b][0] - N[a][0]) * t).toFixed(1));
    c.setAttribute('cy', (N[a][1] + (N[b][1] - N[a][1]) * t).toFixed(1));
    c.setAttribute('r', j === 1 ? 3 : 2.2);
    c.setAttribute('class', `estar e-${a} e-${b}`);
    c.style.setProperty('--d', (0.4 + ei * 0.5 + t * 0.5).toFixed(2) + 's');
    es.appendChild(c);
  }));
  // resaltar las líneas de la estrella que señalas
  $$('.node', wrap).forEach(n => {
    n.addEventListener('pointerenter', () => { wrap.dataset.hl = n.dataset.k; document.body.dataset.zone = n.dataset.k; });
    n.addEventListener('pointerleave', () => { delete wrap.dataset.hl; setZone(); });
    n.addEventListener('focus', () => { wrap.dataset.hl = n.dataset.k; });
    n.addEventListener('blur', () => { delete wrap.dataset.hl; });
    n.addEventListener('click', () => {
      window.warpJump?.();
      $('#' + n.dataset.target).scrollIntoView({ behavior: REDUCE ? 'auto' : 'smooth', block: 'start' });
    });
  });
})();


/* =========================================================
   BIENVENIDA: se quita sola después de ~1.3 s (o al tocarla)
   ========================================================= */
(function bienvenida() {
  const sp = $('#splash');
  if (!sp) return;
  const bye = () => { sp.classList.add('out'); setTimeout(() => sp.remove(), 500); };
  if (REDUCE) { sp.remove(); return; }
  sp.addEventListener('click', bye);
  setTimeout(bye, 1300);
})();


/* =========================================================
   TONO DEL FONDO SEGÚN LA SECCIÓN
   Estrategia = azul · Rehabilitación = rojo · Bienestar = dorado.
   En el inicio, el tono sigue a la tarjeta del centro.
   ========================================================= */
const ZONES = [
  { el: $('#inicio'), zone: null, nav: null },
  { el: $('#sobre-mi'), zone: 'rehab', nav: 'sobre-mi' },
  { el: $('#constelacion'), zone: null, nav: null },
  { el: $('#estrategia'), zone: 'strategy', nav: 'estrategia' },
  { el: $('#rehabilitacion'), zone: 'rehab', nav: 'rehabilitacion' },
  { el: $('#bienestar'), zone: 'wellness', nav: 'bienestar' },
  { el: $('.statement'), zone: 'gold', nav: null },
  { el: $('#contacto'), zone: 'strategy', nav: null }
];
let currentSection = ZONES[0];
function setZone() {
  const z = currentSection.zone || cards[active].dataset.area;
  document.body.dataset.zone = z;
  $$('.snav a[data-sec]').forEach(a => a.classList.toggle('on', a.dataset.sec === currentSection.nav));
}
/* Posiciones guardadas: se miden solo al cargar o cuando cambia el tamaño de la página,
   nunca mientras bajas (así el navegador no recalcula todo en cada cuadro y no se traba). */
const LAYOUT = { zones: [], stmtTop: 0, stmtH: 0, depth: [], docH: 0, vh: innerHeight };
function absTop(el) { return el.getBoundingClientRect().top + scrollY; }
function measureLayout() {
  LAYOUT.vh = innerHeight;
  LAYOUT.docH = document.documentElement.scrollHeight;
  LAYOUT.zones = ZONES.map(z => (z.el ? absTop(z.el) : Infinity));
  if (stmt) { LAYOUT.stmtTop = absTop(stmt); LAYOUT.stmtH = stmt.offsetHeight; }
  LAYOUT.depth = depthEls.map(el => {
    const r = el.getBoundingClientRect();
    const iy = parseFloat(el.style.getPropertyValue('--iy')) || 0;
    return { el, top: r.top + scrollY - iy, h: r.height };
  });
  document.dispatchEvent(new Event('layoutmeasured'));
}
function pickSection(y) {
  const mid = y + LAYOUT.vh * 0.45;
  let best = ZONES[0];
  ZONES.forEach((z, i) => { if (LAYOUT.zones[i] <= mid) best = z; });
  if (best !== currentSection) { currentSection = best; setZone(); }
}

/* =========================================================
   MENÚ FIJO + BARRA DE AVANCE + WHATSAPP FLOTANTE
   ========================================================= */
const snav = $('.snav');
const bar = $('.snav .progress i');
let ticking = false;
const depthEls = $$('.feature-media, .about-photo');
const stmt = $('.statement');
const words = $$('.statement span');
let lastP = -1;
function fillStatement(y) {
  if (!stmt) return;
  if (REDUCE) { words.forEach(w => w.style.setProperty('--f', 1)); return; }
  const top = LAYOUT.stmtTop - y, vh = LAYOUT.vh;
  const start = vh * 0.85, end = vh * 0.2 - LAYOUT.stmtH * 0.45;
  const P = Math.max(0, Math.min(1, (start - top) / (start - end)));
  if (Math.abs(P - lastP) < 0.002) return;          // sin cambios: no tocar nada
  lastP = P;
  words.forEach((w, i) => w.style.setProperty('--f', Math.max(0, Math.min(1, P * words.length - i)).toFixed(3)));
}
const planet = $('.planet');
function onScroll() {
  window.__scrollT = performance.now();
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    // solo se lee scrollY (barato); todo lo demás viene de LAYOUT
    const y = scrollY, vh = LAYOUT.vh;
    const max = LAYOUT.docH - vh;
    const k = max > 0 ? Math.min(1, y / max) : 0;
    bar.style.transform = `scaleX(${k.toFixed(4)})`;
    snav.classList.toggle('show', y > vh * 0.55);
    pickSection(y);
    // 5. el planeta viaja con el scroll (la variable va solo en el planeta, no en toda la página)
    if (planet && !LITE) planet.style.setProperty('--sp', k.toFixed(4));
    // 7. la frase gigante se llena de luz palabra por palabra
    fillStatement(y);
    // 8. las fotos se mueven más lento que el texto (profundidad)
    if (!REDUCE && !LITE) LAYOUT.depth.forEach(d => {
      const top = d.top - y;
      if (top + d.h < -100 || top > vh + 100) return;
      const off = Math.max(-28, Math.min(28, (top + d.h / 2 - vh / 2) * -0.09));
      d.el.style.setProperty('--iy', off.toFixed(1) + 'px');
    });
  });
}
let measureTimer;
function remeasure() { clearTimeout(measureTimer); measureTimer = setTimeout(() => { measureLayout(); onScroll(); }, 120); }
function remeasureOnResize() { if (!window.__skipResize) remeasure(); }
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', remeasureOnResize);
addEventListener('load', remeasure);
if ('ResizeObserver' in window) new ResizeObserver(remeasure).observe(document.body);
document.fonts?.ready?.then(remeasure);
measureLayout();
$('.snav .brand-mini').addEventListener('click', () => { window.warpJump?.(); scrollTo({ top: 0, behavior: REDUCE ? 'auto' : 'smooth' }); go(1); });

/* =========================================================
   BOTONES MAGNÉTICOS + ONDA DE LUZ AL HACER CLIC
   ========================================================= */
if (!REDUCE && matchMedia('(hover: hover)').matches) {
  let magEl = null, magR = null;
  document.addEventListener('pointermove', e => {
    const b = e.target.closest?.('.btn, .go, .wa-fab');
    if (b !== magEl) {
      if (magEl) { magEl.classList.remove('magnet'); magEl.style.removeProperty('--mx'); magEl.style.removeProperty('--my'); }
      magEl = b; magR = b ? b.getBoundingClientRect() : null;   // se mide una sola vez al entrar
    }
    if (!b) return;
    const r = magR;
    const x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    b.classList.add('magnet');
    b.style.setProperty('--mx', `${(x * 6).toFixed(1)}px`);
    b.style.setProperty('--my', `${(y * 5).toFixed(1)}px`);
  }, { passive: true });
}
document.addEventListener('pointerdown', e => {
  if (REDUCE) return;
  const el = e.target.closest?.('.btn, .nav, .buy, .step, .tile, .product, .snav a, .wa-fab');
  if (!el) return;
  const r = el.getBoundingClientRect();
  const size = Math.max(r.width, r.height) * 2.2;
  const rip = document.createElement('span');
  rip.className = 'ripple';
  rip.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
  el.appendChild(rip);
  rip.addEventListener('animationend', () => rip.remove());
});

/* =========================================================
   "YO YA TE CONTÉ MI HISTORIA. ¿CUÁL ES LA TUYA?"
   ========================================================= */
(function tuHistoria() {
  const opts = $('#tellOpts'), form = $('#tellForm');
  if (!opts) return;
  const T = {
    familia: 'Estoy formando una familia y me gustaría saber cómo protegerla.',
    lesion: 'Me estoy recuperando de una lesión y me gustaría que me orientaras.',
    futuro: 'Me preocupa mi futuro y mi retiro. Me gustaría platicarlo contigo.',
    salud: 'Quiero cuidar más mi salud. ¿Me orientas?',
    conocer: 'Me gustaría conocerte.'
  };
  let pick = null;
  opts.addEventListener('click', e => {
    const b = e.target.closest('.ans'); if (!b) return;
    pick = b.dataset.t;
    $$('.ans', opts).forEach(x => x.classList.toggle('on', x === b));
    form.hidden = false;
    const inp = $('#tellName');
    if (!inp.value && VISITOR.name) inp.value = VISITOR.name;
    inp.focus({ preventScroll: true });
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!pick) return;
    const n = $('#tellName').value.trim();
    if (n) VISITOR.set(n);
    const msg = `${n ? `Hola Carlos, soy ${VISITOR.name}.` : 'Hola Carlos.'} Leí tu historia. ${T[pick]}`;
    const link = Object.assign(document.createElement('a'), { href: waLink(msg), target: '_blank', rel: 'noopener' });
    document.body.appendChild(link); link.click(); link.remove();
    form.insertAdjacentHTML('afterend', `<div class="tell-thanks">${cnote(`Gracias${VISITOR.name ? ', ' + esc(VISITOR.name) : ''}. Tu mensaje ya está listo en WhatsApp; en cuanto lo envíes, lo leo personalmente.`)}</div>`);
    form.hidden = true;
  });
})();

/* =========================================================
   INICIO
   ========================================================= */
$('#homeBtn').addEventListener('click', () => {
  if (scrollY > 50) window.warpJump?.();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  go(1);
});
// Pestañas de las calculadoras
$$('.calc-tabs [role="tab"]').forEach(t => t.addEventListener('click', () => {
  const retiro = t.id === 'tab-retiro';
  $$('.calc-tabs [role="tab"]').forEach(x => x.setAttribute('aria-selected', String(x === t)));
  $('#panel-fam').hidden = retiro; $('#panel-scenario').hidden = retiro; $('#panel-retiro').hidden = !retiro;
  window.sfx?.('whoosh');
}));

// Saludo con su nombre en el menú
function paintHi() {
  const hi = $('#snavHi'); if (!hi) return;
  hi.hidden = !VISITOR.name;
  hi.textContent = VISITOR.name ? `Hola, ${VISITOR.name}` : '';
}
document.addEventListener('visitor', paintHi);
paintHi();

$('#year').textContent = new Date().getFullYear();
paintAvail();
setInterval(paintAvail, 60000);
render();
setZone();
onScroll();
restartAuto();

/* =========================================================
   DESPUÉS DEL PAGO (Stripe → tu página)
   En cada enlace de pago de Stripe, en "Después del pago", elige
   "Redirigir a tu sitio web" y pega:
     https://TU-DOMINIO/?pago=CLAVE&folio={CHECKOUT_SESSION_ID}
   CLAVE es la del enlace (mx, platinum, sport, optimizer, omega,
   bionutric, paqMxPlat, paq2Plat, reserva).
   La página muestra un aviso y un botón para mandarte el comprobante por WhatsApp.
   ========================================================= */
const PAGO_NOMBRES = {
  mx: 'Immunocal MX', platinum: 'Immunocal Platinum', sport: 'Immunocal Sport',
  optimizer: 'Immunocal Optimizer', omega: 'Omega Gen V', bionutric: 'Bionutric',
  paqMxPlat: 'Paquete Immunocal MX + Platinum', paq2Plat: 'Paquete 2 Immunocal Platinum',
  reserva: 'Reserva de cita de rehabilitación'
};
(function pagoRecibido() {
  const q = new URLSearchParams(location.search);
  const clave = q.get('pago');
  if (!clave || !PAGO_NOMBRES[clave]) return;
  const folio = (q.get('folio') || '').replace(/[^\w-]/g, '').slice(0, 80);
  const prod = PAGO_NOMBRES[clave];
  const esCita = clave === 'reserva';
  const msg = `Hola Carlos, ya realicé mi pago de ${prod}.${folio ? ` Folio: ${folio}.` : ''} Te envío mi comprobante.`;
  const html = `<div class="pago-ok">
      <div class="pago-check" aria-hidden="true">✓</div>
      <p class="mini">PAGO RECIBIDO</p>
      <h2 id="panelTitle">¡Gracias por tu ${esCita ? 'reserva' : 'compra'}!</h2>
      <p class="panel-intro"><b>${esc(prod)}</b>${folio ? `<br><small>Folio: ${esc(folio)}</small>` : ''}</p>
      <p class="panel-intro">Stripe te envió el recibo a tu correo. Mándame tu comprobante por WhatsApp: toca el botón, adjunta la captura o el PDF del recibo y envíalo.
      ${esCita ? 'En cuanto lo reciba, te confirmo tu cita.' : 'Tu pedido llega en 3 a 5 días hábiles; te aviso cuando salga.'}</p>
      <div class="cta-row"><a class="btn primary" href="${waLink(msg)}" target="_blank" rel="noopener">ENVIAR COMPROBANTE POR WHATSAPP <span aria-hidden="true">→</span></a></div>
    </div>`;
  history.replaceState(null, '', location.pathname + location.hash);
  sessionStorage.setItem('splashVisto', '1');
  $('#splash')?.remove();
  openPanel(html);
})();


/* =========================================================
   SOBRE MÍ: la línea de la historia se llena de luz al bajar
   ========================================================= */
(function historiaLuz() {
  const ol = $('.story-line');
  if (!ol) return;
  const items = [...ol.children];
  if (REDUCE) { ol.style.setProperty('--p', 1); items.forEach(li => li.classList.add('lit')); return; }
  ol.classList.add('js');
  let raf = 0, top = 0, h = 1, offs = [], lastP = -1;
  const measure = () => {
    const r = ol.getBoundingClientRect();
    top = r.top + scrollY; h = r.height || 1;
    offs = items.map(li => li.offsetTop);          // relativo a la lista, sin transformaciones
    lastP = -1; update();
  };
  const update = () => {
    raf = 0;
    const p = Math.max(0, Math.min(1, (innerHeight * 0.62 - (top - scrollY)) / h));
    if (Math.abs(p - lastP) < 0.001) return;
    lastP = p;
    ol.style.setProperty('--p', p.toFixed(3));
    const filled = p * h;
    items.forEach((li, i) => li.classList.toggle('lit', filled >= offs[i] + 8));
  };
  addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
  document.addEventListener('layoutmeasured', measure);
  measure();
})();

/* =========================================================
   ÓRBITA 3D: las tarjetas giran en círculo alrededor del emblema
   ========================================================= */
(function orbit() {
  if (!deck) return;
  deck.classList.add('orbit');
  const core = $('.orbit-core', deck), path = $('.orbit-path', deck);
  const dims = cards.map(card => { const d = document.createElement('div'); d.className = 'dim'; d.setAttribute('aria-hidden', 'true'); card.appendChild(d); card.style.opacity = '1'; return d; });
  const STEP = 360 / N;
  let rot = active, tgt = active, raf = null, geo = null, lastT = 0, lastDrag = 0;
  const lastZ = cards.map(() => ''), lastDim = cards.map(() => '');
  let tx = 0, ty = 0, cx = 0, cy = 0, deckR = null;   // inclinación suave de la tarjeta del frente
  function measure() {
    const W = deck.clientWidth, c = cards[0];
    const cw = c.offsetWidth, ch = c.offsetHeight;
    const phone = W < 701;
    const R = phone ? W * 0.30 : Math.min(W * 0.36, 580);
    const lift = ch * (phone ? 0.10 : 0.10);            // las tarjetas bajan un poco para dejar ver el emblema
    geo = { W, cw, ch, R, ringY: ch * 0.5 + 6 + lift, lift, phone };
    path.style.width = path.style.height = (2 * R) + 'px';
    path.style.transform = `translate(-50%,-50%) translate3d(0, ${geo.ringY}px, ${-R}px) rotateX(90deg)`;
    const coreW = phone ? Math.min(W * 0.15, 60) : Math.min(ch * 0.30, 130);
    core.style.setProperty('--core-w', coreW + 'px');
    // el emblema queda justo encima del borde superior de la tarjeta del frente
    const cs = getComputedStyle(deck), Hd = deck.clientHeight;
    const P = parseFloat(cs.perspective) || 1600;
    const oy = (parseFloat(cs.perspectiveOrigin.split(' ')[1]) || 0) - Hd / 2;   // origen de la cámara respecto al centro
    const s = P / (P + R);
    const wantBottom = -ch / 2 + lift - (phone ? 4 : 10);
    const coreY = oy + (wantBottom - oy) / s;
    core.style.transform = `translate(-50%, -100%) translate3d(0, ${coreY.toFixed(1)}px, ${-R}px)`;
  }
  function frame(now) {
    raf = null;
    now = now || performance.now();
    const dt = lastT ? Math.min(0.1, (now - lastT) / 1000) : 1 / 60;   // segundos desde el cuadro anterior
    lastT = now;
    const kRot = 1 - Math.exp(-dt / 0.17), kTilt = 1 - Math.exp(-dt / 0.12);   // mismo ritmo en cualquier equipo
    if (!geo) measure();
    const isDragging = deck.classList.contains('dragging');
    let drag = 0;
    if (isDragging) {
      const lim = geo.W * 0.6, dx = Math.max(-lim, Math.min(lim, window.__deckDx || 0));
      drag = -dx / (geo.W * 0.75);
      lastDrag = drag;
    } else if (lastDrag) {
      rot += lastDrag;          // al soltar, el giro continúa desde donde quedó el dedo (sin brinco)
      lastDrag = 0; window.__deckDx = 0;
    }
    rot += (tgt - rot) * kRot;
    if (Math.abs(tgt - rot) < 0.002) rot = tgt;
    cx += (tx - cx) * kTilt; cy += (ty - cy) * kTilt;
    const tiltMoving = Math.abs(tx - cx) > 0.02 || Math.abs(ty - cy) > 0.02;
    if (!tiltMoving) { cx = tx; cy = ty; }
    const r = rot + drag;
    cards.forEach((card, i) => {
      const th = (i - r) * STEP * Math.PI / 180;
      const x = geo.R * Math.sin(th), z = geo.R * Math.cos(th) - geo.R;
      const d = (1 + Math.cos(th)) / 2;            // 1 = al frente, 0 = atrás
      const ry = -Math.sin(th) * 24;
      const tilt = d > 0.6 ? ` rotateX(${(cy * d).toFixed(2)}deg) rotateY(${(cx * d).toFixed(2)}deg)` : '';
      card.style.transform = `translate(-50%,-50%) translate3d(${x.toFixed(1)}px, ${geo.lift.toFixed(1)}px, ${z.toFixed(1)}px) rotateY(${ry.toFixed(1)}deg)${tilt}`;
      // las de atrás se oscurecen con una capa negra encima (ligero, y no se traslucen entre sí)
      const dm = (0.78 * (1 - d * d)).toFixed(2), zi = String(Math.round(d * 10));
      if (dm !== lastDim[i]) { dims[i].style.opacity = dm; lastDim[i] = dm; }
      if (zi !== lastZ[i]) { card.style.zIndex = zi; lastZ[i] = zi; }
    });
    const busy = rot !== tgt || tiltMoving || isDragging;
    window.__orbitBusy = rot !== tgt || isDragging;
    if (busy) raf = requestAnimationFrame(frame); else lastT = 0;
  }
  const kick = () => { if (!raf) raf = requestAnimationFrame(frame); };
  const baseRender = render;
  render = function () {
    baseRender();
    let diff = ((active - tgt) % N + N) % N;
    if (diff > N / 2) diff -= N;
    tgt += diff;
    kick();
  };
  window.addEventListener('pointermove', () => { if (deck.classList.contains('dragging')) kick(); }, { passive: true });
  deck.addEventListener('pointerenter', () => { deckR = deck.getBoundingClientRect(); });
  deck.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse' || startX !== null) return;
    if (!deckR) deckR = deck.getBoundingClientRect();
    const x = (e.clientX - deckR.left) / deckR.width - 0.5, y = (e.clientY - deckR.top) / deckR.height - 0.5;
    tx = Math.max(-1, Math.min(1, x * 2)) * 6; ty = -Math.max(-1, Math.min(1, y * 2)) * 4;
    kick();
  }, { passive: true });
  deck.addEventListener('pointerleave', () => { tx = ty = 0; deckR = null; kick(); });
  window.addEventListener('scroll', () => { deckR = null; }, { passive: true });
  window.addEventListener('resize', () => { if (window.__skipResize) return; geo = null; kick(); });
  if ('ResizeObserver' in window) new ResizeObserver(() => { geo = null; kick(); }).observe(deck);
  measure(); kick();
})();


/* =========================================================
   BARRAS DESLIZANTES EN PANTALLAS TÁCTILES
   En un celular, la barra nativa atrapa el dedo: si al bajar la página el dedo cae sobre ella,
   se mueve la barra en lugar de la página. Aquí la barra solo responde a un arrastre horizontal
   (o a un toque), y cualquier movimiento vertical baja la página con normalidad.
   ========================================================= */
(function touchSliders() {
  if (!TOUCH_DEVICE) return;
  document.documentElement.classList.add('touch-sliders');
  $$('.range').forEach(wrap => {
    const inp = wrap.querySelector('input[type="range"]');
    if (!inp) return;
    let st = null;
    const num = a => parseFloat(inp.getAttribute(a));
    const setFromRatio = k => {
      const min = num('min'), max = num('max'), step = num('step') || 1;
      let v = min + Math.max(0, Math.min(1, k)) * (max - min);
      v = Math.round((v - min) / step) * step + min;
      v = Math.max(min, Math.min(max, v));
      if (String(v) !== inp.value) { inp.value = v; inp.dispatchEvent(new Event('input', { bubbles: true })); }
    };
    const ratioOf = v => (v - num('min')) / (num('max') - num('min'));
    wrap.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      const r = inp.getBoundingClientRect();
      if (Math.abs(e.clientY - (r.top + r.height / 2)) > 26) return;       // solo la franja de la barra
      st = { id: e.pointerId, x0: e.clientX, y0: e.clientY, left: r.left, w: r.width, k0: ratioOf(parseFloat(inp.value)), active: false, sy: scrollY };
      st.onThumb = Math.abs(e.clientX - (r.left + st.k0 * r.width)) < 30;
    });
    wrap.addEventListener('pointermove', e => {
      if (!st || e.pointerId !== st.id) return;
      const dx = e.clientX - st.x0, dy = e.clientY - st.y0;
      if (!st.active) {
        if (Math.abs(dx) < 6 || Math.abs(dx) < Math.abs(dy) * 1.2) return;  // todavía no es un arrastre horizontal claro
        st.active = true;
        try { wrap.setPointerCapture(st.id); } catch (err) {}
      }
      // desde el círculo: movimiento relativo; desde la línea: va a donde está el dedo
      setFromRatio(st.onThumb ? st.k0 + dx / st.w : (e.clientX - st.left) / st.w);
    });
    const end = e => {
      if (!st || (e && e.pointerId !== st.id)) return;
      const s = st; st = null;
      if (!e || e.type === 'pointercancel') return;                          // el navegador tomó el gesto para bajar la página
      if (!s.active) {
        // toque corto sin moverse ni bajar la página: la barra salta a ese punto
        if (Math.abs(e.clientX - s.x0) < 8 && Math.abs(e.clientY - s.y0) < 8 && Math.abs(scrollY - s.sy) < 4) setFromRatio((e.clientX - s.left) / s.w);
        else return;
      }
      inp.dispatchEvent(new Event('change', { bubbles: true }));
    };
    wrap.addEventListener('pointerup', end);
    wrap.addEventListener('pointercancel', end);
  });
})();
