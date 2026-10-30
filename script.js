'use strict';
/* ===== DATA (edit di sini) ===== */
const SKILLS = ['Web Security', 'Pentest Basics', 'Bug Bounty', 'Linux', 'Burp Suite', 'Hiking', 'Navigation', 'Teamwork'];
const STEPS = [
  ['⌕', 'RECON', 'Memahami target, ruang lingkup, dan aturan program.'],
  ['◎', 'ANALYZE', 'Memetakan alur aplikasi dan titik masuk yang menarik.'],
  ['✎', 'VALIDATE', 'Menguji temuan secara etis, tanpa merusak data.'],
  ['</>', 'REPORT', 'Menulis laporan jelas dengan langkah reproduksi dan dampak.'],
  ['➤', 'SECURE', 'Mengusulkan perbaikan dan memverifikasi hasilnya.']
];
// src: path foto, contoh 'img/rinjani.jpg'. Kosong = placeholder.
const PHOTOS = [
  { src: 'img/Raung.jpeg', place: 'Gunung Raung', date: '3332 MDPL', note: 'Top 3 Jatim' },
  { src: 'img/Buthak.jpeg', place: 'Gunung Buthak', date: '2868 MDPL', note: 'Miniatur Argopuro' },
  { src: 'img/kld.jpg', place: 'Gunung Kelud', date: '1731 MDPL', note: 'Terindah' },
  { src: 'img/Kawi.PNG', place: 'Gunung Kawi', date: '2603 MDPL', note: 'Tempat Cari Pesugihan' },
  { src: 'img/mongkrang.jpg', place: 'Gunung Mongkrang', date: '2194 MDPL', note: 'Badai Ges' },
  { src: 'img/bokong.jpg', place: 'Gunung Bokong', date: '1746 MDPL', note: 'Sunrisenya Cakep' },
  { src: 'img/potos.jpg', place: 'Puncak Potos', date: '2235 MDPL', note: 'B aja ini wkwk' },
  { src: 'img/pegat.jpg', place: 'Gunung Pegat', date: '343 MDPL', note: 'Markas Pegat Academy' }
];
// Sertifikat: taruh file di folder img/, lalu isi src (jpg/png). Kosong = placeholder.
const CERTS = [
  { src: 'img/juara2.png', title: 'Juara 2 Bug Bounty', issuer: 'Pusdatin Kemendikdasmen', year: '2026' },
  { src: 'img/Finalis.jpg', title: 'Finalis Bug Bounty', issuer: 'Pusdatin Kemendikdasmen', year: '2025' },
  { src: 'img/UBSQL.jpg', title: 'Apresiasi Temuan Kerentanan', issuer: 'DTI UB', year: '2026' }
];
// Riwayat pendidikan: isi nama, tahun, alamat, dan koordinat (lat, lng) dari Google Maps.
// Cara ambil koordinat: di Google Maps klik kanan pada titik sekolah, klik angka yang muncul (otomatis tersalin).
// Angka pertama = lat, angka kedua = lng. Contoh: lat: -7.9666, lng: 112.6326
const SCHOOLS = [
  // logo: taruh file logo di folder img/ (PNG transparan paling bagus). Jika tidak ada, bulatan menampilkan tulisan jenjang.
  { level: 'TK',  logo: 'img/TK ABA.png',  name: 'TK AISYIYAH BUSTANUL ATHFAL 15 DONOMULYO', years: '2011  - 2013', addr: 'RT. 10 RW. 02, Dusun Bandung, Desa Donomulyo, Kecamatan Donomulyo, Kabupaten Malang, Jawa Timur', lat: -8.27824697836379, lng: 112.42359199108509 },
  { level: 'SD',  logo: 'img/SDN 9.jpg',  name: 'SDN 09 Donomulyo', years: '2014 - 2019', addr: 'JL. Sowikromo RT. 6 RW. 2 Dusun Kalipakem, Kec. Donomulyo, Kab. Malang, Prov. Jawa Timur', lat: -8.279105369101226, lng: 112.41533520317773 },
  { level: 'SMP', logo: 'img/ARNESA.png', name: 'SMPN 1 Donomulyo', years: '2020 - 2023', addr: 'Jl. Raya 60 Donomulyo, Kec. Donomulyo, Kab. Malang, Prov. Jawa Timur', lat: -8.283060914424567, lng: 112.4303257637958 },
  { level: 'SMK', logo: 'img/SMEKID.png', name: 'SMKS Islam Donomulyo', years: '2024 - 2026', addr: 'JL. Hasanudin 04, Kec. Donomulyo, Kab. Malang, Prov. Jawa Timur', lat: -8.286955946829769, lng: 112.42833542450053 },
  { level: 'PT',  logo: 'img/UB.jpg',  name: 'Universitas Brawijaya', years: '2026 - Sekarang', addr: 'Jl. Veteran No. 1, Ketawanggede, Lowokwaru, Kota Malang, Jawa Timur.', lat: -7.952475617730529, lng: 112.61371991093603 }
];
// Ikon sosial: [label, tautan, isi SVG]. Tambah baris baru untuk telepon/YouTube/X jika ingin.
const LINKS = [
  ['Email', 'mailto:naufalarifkurniawan2@gmail.com', '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'],
  ['LinkedIn', 'https://www.linkedin.com/in/naufal-arif-62419a2bb', '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'],
  ['GitHub', 'https://github.com/NaufalArif99', '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'],
  ['Instagram', 'https://www.instagram.com/naufal_arifk/', '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>']
];

/* ===== Util ===== */
const $ = s => document.querySelector(s);
const el = (t, c, x) => { const e = document.createElement(t); if (c) e.className = c; if (x !== undefined) e.textContent = x; return e; };
const pad = n => String(n).padStart(2, '0');

/* ===== Render ===== */
const ch = $('#chips'); SKILLS.forEach(s => ch.append(el('span', '', s)));
const st = $('#steps');
STEPS.forEach((s, i) => {
  const li = el('li', 'rv'), b = el('div');
  b.append(el('h4', '', s[1]), el('p', '', s[2]));
  li.append(el('span', 'nn', pad(i + 1)), el('span', 'ic', s[0]), b); st.append(li);
});
const ul = $('#links');
LINKS.forEach(([label, href, svg]) => {
  const li = el('li'), a = el('a'); a.href = href; a.setAttribute('aria-label', label); a.title = label;
  if (href.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; }
  a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + svg + '</svg>'; li.append(a); ul.append(li);
});
// Riwayat pendidikan (klik = animasi bumi menuju sekolah)
SCHOOLS.forEach((sc, i) => {
  const li = el('li', 'rv'); li.style.transitionDelay = (i * 140) + 'ms';
  const b = el('button', 'sc'); b.type = 'button'; b.setAttribute('aria-label', 'Lihat lokasi ' + sc.name + ' di peta');
  const lv = el('span', 'lv'), fb = () => { lv.textContent = sc.level; lv.classList.add('txt'); };
  if (sc.logo) { const im = new Image(); im.src = sc.logo; im.alt = 'Logo ' + sc.name; im.loading = 'lazy'; im.onerror = () => { im.remove(); fb(); }; lv.append(im); } else fb();
  const d = el('span', 'sd'); d.append(el('em', 'lvl', sc.level), el('b', '', sc.name), el('small', '', sc.years), el('small', '', sc.addr));
  b.append(lv, d, el('span', 'go', '📍'));
  b.addEventListener('click', () => openGlobe(sc)); li.append(b); $('#schools').append(li);
});

/* Galeri + lightbox */
function img(p) {
  const i = new Image(); i.src = p.src; i.alt = p.place; i.loading = 'lazy'; i.onerror = () => i.remove(); return i;
}
const lb = $('#lb');
function addShot(box, p, cls) {
  const b = el('button', 'sh' + (cls === 'ct' ? ' rv' : '') + (cls ? ' ' + cls : '')); b.type = 'button'; b.setAttribute('aria-label', 'Buka ' + p.place);
  if (p.src) b.append(img(p));
  b.append(el('span', '', `${p.place} · ${p.date}`));
  b.addEventListener('click', () => {
    $('#lbImg').replaceChildren(p.src ? img(p) : document.createTextNode('[gambar: ' + p.place + ']'));
    $('#lbCap').textContent = `${p.place} · ${p.date} — ${p.note}`; lb.hidden = false; $('#lbX').focus();
  });
  box.append(b);
}
PHOTOS.forEach(p => addShot($('#gal'), p));
CERTS.forEach(c => addShot($('#certGrid'), { src: c.src, place: c.title, date: c.year, note: c.issuer }, 'ct'));
const closeLb = () => { lb.hidden = true; };
$('#lbX').addEventListener('click', closeLb);
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

/* Menu mobile */
const menu = $('#menu'), mb = $('#menuBtn');
mb.addEventListener('click', () => mb.setAttribute('aria-expanded', menu.classList.toggle('open')));
menu.addEventListener('click', e => { if (e.target.tagName === 'A') { menu.classList.remove('open'); mb.setAttribute('aria-expanded', false); } });

/* Reveal saat scroll */
const io = 'IntersectionObserver' in window
  ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 })
  : null;
document.querySelectorAll('.rv').forEach(n => io ? io.observe(n) : n.classList.add('in'));
$('#yr').textContent = new Date().getFullYear();


/* ===== Carousel Adventure Log (geser kanan-kiri) ===== */
(function carousel() {
  const tr = $('#gal'); if (!tr) return;
  const prev = $('#gPrev'), next = $('#gNext'), bar = $('#gBar'), cnt = $('#gCount');
  const cards = [...tr.children], reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const step = () => (cards[0] ? cards[0].getBoundingClientRect().width : 300) + 16;
  const go = d => tr.scrollBy({ left: d * step(), behavior: reduce ? 'auto' : 'smooth' });
  prev.addEventListener('click', () => go(-1)); next.addEventListener('click', () => go(1));
  function update() {
    const w = tr.clientWidth, mid = tr.getBoundingClientRect().left + w / 2; let best = 0, bd = 1e9;
    cards.forEach((c, i) => {
      const r = c.getBoundingClientRect(), d = Math.abs(r.left + r.width / 2 - mid), k = Math.min(1, d / (w * .6));
      if (!reduce) { c.style.setProperty('--s', (1 - .1 * k).toFixed(3)); c.style.setProperty('--o', (1 - .55 * k).toFixed(3)); }
      if (d < bd) { bd = d; best = i; }
    });
    cnt.textContent = `${pad(best + 1)} / ${pad(cards.length)}`;
    const max = tr.scrollWidth - w;
    bar.style.width = (max > 0 ? 12 + 88 * tr.scrollLeft / max : 100) + '%';
    prev.disabled = tr.scrollLeft < 4; next.disabled = tr.scrollLeft > max - 4;
  }
  let tick = false;
  tr.addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(() => { update(); tick = false; }); } }, { passive: true });
  addEventListener('resize', update); update();
  // seret dengan mouse (sentuhan sudah bisa digeser bawaan browser)
  let down = false, sx = 0, sl = 0, moved = 0;
  tr.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = 0; sx = e.clientX; sl = tr.scrollLeft; });
  addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - sx; moved = Math.max(moved, Math.abs(dx)); if (moved > 5) { tr.classList.add('drag'); tr.scrollLeft = sl - dx; } });
  addEventListener('pointerup', () => { if (!down) return; down = false; tr.classList.remove('drag'); });
  tr.addEventListener('click', e => { if (moved > 5) { e.stopPropagation(); e.preventDefault(); moved = 0; } }, true);
  tr.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); go(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); } });
})();

/* ===== Animasi rute pendakian (mengikuti scroll, pelan) ===== */
(function expedition() {
  const svg = $('#routeSvg'); if (!svg) return;
  const NS = 'http://www.w3.org/2000/svg';
  const route = $('#route'), dot = $('#dot'), halo = $('#dotHalo'), cps = $('#cps');
  const L = route.getTotalLength();
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const pts = PHOTOS.map(p => ({ name: p.place.replace('Gunung ', '').replace('Puncak ', ''), alt: parseInt(p.date) || 0 })).sort((a, b) => a.alt - b.alt);
  const n = pts.length;
  pts.forEach((p, i) => {
    p.t = n > 1 ? .07 + .93 * i / (n - 1) : .9;          // jarak antar checkpoint merata
    const pt = route.getPointAtLength(p.t * L), g = document.createElementNS(NS, 'g'); g.setAttribute('class', 'cp');
    const c = document.createElementNS(NS, 'circle'); c.setAttribute('cx', pt.x); c.setAttribute('cy', pt.y); c.setAttribute('r', 7);
    const t1 = document.createElementNS(NS, 'text'), t2 = document.createElementNS(NS, 'text');
    const last = i === n - 1, up = last || i % 2 === 0, ax = last ? 'end' : 'middle', x0 = pt.x + (last ? 12 : 0);
    // puncak terakhir (Raung): label dinaikkan lebih tinggi agar tidak menabrak label Buthak
    const lift = last ? 10 : 0;
    // geser label horizontal agar Bokong dan Mongkrang tidak berdempetan
    const SHIFT = { 'BOKONG': -18, 'MONGKRANG': 18 };
    const x = x0 + (SHIFT[p.name.toUpperCase()] || 0);
    t1.setAttribute('x', x); t1.setAttribute('y', up ? pt.y - 34 - lift : pt.y + 36); t1.setAttribute('text-anchor', ax); t1.textContent = p.name.toUpperCase();
    t2.setAttribute('x', x); t2.setAttribute('y', up ? pt.y - 15 - lift : pt.y + 54); t2.setAttribute('text-anchor', ax); t2.setAttribute('class', 'sub'); t2.textContent = p.alt + ' MDPL';
    g.append(c, t1, t2); cps.append(g); p.g = g;
  });
  const keys = [[0, 0], ...pts.map(p => [p.t, p.alt])];   // ketinggian dihitung per ruas agar cocok dengan checkpoint
  const altAt = q => { for (let i = 1; i < keys.length; i++) if (q <= keys[i][0]) { const [t0, a0] = keys[i - 1], [t1, a1] = keys[i]; return a0 + (a1 - a0) * ((q - t0) / (t1 - t0 || 1)); } return keys[keys.length - 1][1]; };
  route.style.strokeDasharray = L;
  function render(p) {
    const q = Math.max(0, Math.min(1, p));
    route.style.strokeDashoffset = L * (1 - q);
    const pt = route.getPointAtLength(q * L);
    dot.setAttribute('cx', pt.x); dot.setAttribute('cy', pt.y); halo.setAttribute('cx', pt.x); halo.setAttribute('cy', pt.y);
    let lastOn = null; pts.forEach(k => { const on = q >= k.t - .005; k.g.classList.toggle('on', on); if (on) lastOn = k; });
    $('#altNum').textContent = Math.round(altAt(q)).toLocaleString('id-ID');
    $('#altState').textContent = (q < .02 ? 'BASECAMP' : lastOn === pts[n - 1] ? 'SUMMIT REACHED' : 'ASCENDING') + (lastOn ? ' · ' + lastOn.name.toUpperCase() : '');
    $('#ridgeB').style.transform = `translateY(${(q * -10).toFixed(1)}px)`;
    $('#ridgeF').style.transform = `translateY(${(q * 14).toFixed(1)}px)`;
  }
  if (reduce) { render(1); return; }
  const EASE = .085, RANGE = 0.76;   // EASE kecil = gerak lebih lambat; RANGE besar = butuh scroll lebih panjang
  let target = 0, cur = 0, ticking = false;
  const measure = () => {
    const r = $('#stage').getBoundingClientRect();
    target = Math.max(0, Math.min(1, (innerHeight * .9 - r.top) / (innerHeight * RANGE)));
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(measure); } }, { passive: true });
  addEventListener('resize', measure); measure();
  (function loop() { cur += (target - cur) * EASE; render(cur); requestAnimationFrame(loop); })();
})();

/* ===== Animasi bumi -> lokasi sekolah ===== */
let gAnim = 0, libs = null;
const loadScript = src => new Promise((ok, no) => { const t = document.createElement('script'); t.src = src; t.onload = ok; t.onerror = no; document.head.append(t); });
const loadLibs = () => libs || (libs = loadScript('https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js')
  .then(() => loadScript('https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js'))
  .then(() => fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/land-110m.json')).then(r => r.json())
  .then(t => topojson.feature(t, t.objects.land)).catch(e => { libs = null; throw e; }));
function closeGlobe() { gAnim++; $('#geo').hidden = true; $('#gmap').removeAttribute('src'); }
$('#geoX').addEventListener('click', closeGlobe);
$('#geo').addEventListener('click', e => { if (e.target.id === 'geo') closeGlobe(); });
addEventListener('keydown', e => { if (e.key === 'Escape') closeGlobe(); });
async function openGlobe(sc) {
  const geo = $('#geo'), wrap = $('.gwrap'), cv = $('#globe'), cap = $('#geoCap'), link = $('#geoLink'), fr = $('#gmap');
  const has = sc.lat != null && sc.lng != null, T = has ? { lat: sc.lat, lng: sc.lng } : { lat: -2.5, lng: 118 };
  const mapSrc = `https://maps.google.com/maps?q=${T.lat},${T.lng}&z=17&t=h&output=embed`;
  const showMap = () => { if (!fr.getAttribute('src')) fr.src = mapSrc; wrap.classList.add('map'); link.href = `https://www.google.com/maps?q=${T.lat},${T.lng}`; link.hidden = false; cap.textContent = `${sc.level} · ${sc.name}`; };
  geo.hidden = false; wrap.classList.remove('map'); fr.removeAttribute('src'); link.hidden = true; $('#geoX').focus();
  cap.textContent = has ? 'Memuat bumi…' : `Koordinat ${sc.level} belum diisi di SCHOOLS (script.js).`;
  const id = ++gAnim; let land = null;
  try { land = await loadLibs(); } catch (e) { /* tanpa pustaka: langsung ke peta */ }
  if (id !== gAnim) return;
  if (!land) { if (has) showMap(); else cap.textContent += ' (bumi gagal dimuat)'; return; }
  if (has) cap.textContent = `Menuju ${sc.name}…`;
  const rm = matchMedia('(prefers-reduced-motion:reduce)').matches, size = wrap.clientWidth, dpr = devicePixelRatio || 1;
  cv.width = cv.height = size * dpr; const ctx = cv.getContext('2d'); ctx.scale(dpr, dpr);
  const R0 = size * .4, R1 = R0 * 220, T1 = rm ? 500 : 2600, T2 = rm ? 400 : 2200;
  const proj = d3.geoOrthographic().translate([size / 2, size / 2]).clipAngle(90).precision(.6), path = d3.geoPath(proj, ctx);
  const grat = d3.geoGraticule10(), sph = { type: 'Sphere' }, lon0 = T.lng - 150, lat0 = 12, t0 = performance.now();
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  (function frame(now) {
    if (id !== gAnim) return;
    const t = now - t0, a = ease(Math.min(1, t / T1)), z = has ? Math.max(0, Math.min(1, (t - T1 - 250) / T2)) : 0, ze = z * z;
    proj.rotate([-(lon0 + (T.lng - lon0) * a), -(lat0 + (T.lat - lat0) * a)]).scale(R0 * Math.pow(R1 / R0, ze));
    const s = proj.scale(); ctx.clearRect(0, 0, size, size);
    if (s < R0 * 1.4) { const g = ctx.createRadialGradient(size / 2, size / 2, s * .96, size / 2, size / 2, s * 1.2); g.addColorStop(0, 'rgba(47,123,255,.5)'); g.addColorStop(1, 'rgba(47,123,255,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, size, size); }
    ctx.beginPath(); path(sph); ctx.fillStyle = '#06183d'; ctx.fill();
    ctx.beginPath(); path(grat); ctx.strokeStyle = 'rgba(120,175,255,.18)'; ctx.lineWidth = .6; ctx.stroke();
    ctx.beginPath(); path(land); ctx.fillStyle = '#1d56b8'; ctx.fill(); ctx.strokeStyle = 'rgba(170,205,255,.65)'; ctx.lineWidth = .7; ctx.stroke();
    const p = proj([T.lng, T.lat]);
    if (p && a > .55) { const k = (t / 700) % 1; ctx.beginPath(); ctx.arc(p[0], p[1], 5, 0, 7); ctx.fillStyle = '#fff'; ctx.fill(); ctx.beginPath(); ctx.arc(p[0], p[1], 6 + k * 22, 0, 7); ctx.strokeStyle = `rgba(255,255,255,${1 - k})`; ctx.lineWidth = 1.5; ctx.stroke(); }
    if (has && z > .12 && !fr.getAttribute('src')) fr.src = mapSrc;      // muat peta lebih awal
    if (has && z > .72 && !wrap.classList.contains('map')) showMap();
    if (z < 1 || !has) requestAnimationFrame(frame);
  })(t0);
}

/* ===== Cahaya mengikuti kursor ===== */
(function cursorLight() {
  if (!matchMedia('(pointer:fine)').matches || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  const glow = el('div'), ring = el('div');
  glow.id = 'glow'; ring.id = 'ring'; glow.setAttribute('aria-hidden', 'true'); ring.setAttribute('aria-hidden', 'true');
  document.body.append(glow, ring);
  let tx = innerWidth / 2, ty = innerHeight / 2, gx = tx, gy = ty, rx = tx, ry = ty;
  const giant = document.querySelector('.giant');
  addEventListener('pointermove', e => {
    tx = e.clientX; ty = e.clientY; document.body.classList.add('lit');
    ring.classList.toggle('big', !!e.target.closest('a,button,.sh,.pc,.chips span'));
    const c = e.target.closest('.pv,.chips span,.sh,.quote');
    if (c) { const r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px'); }
  }, { passive: true });
  document.addEventListener('pointerleave', () => document.body.classList.remove('lit'));
  (function loop() {
    gx += (tx - gx) * .12; gy += (ty - gy) * .12;   // cahaya besar: halus dan tertinggal
    rx += (tx - rx) * .3;  ry += (ty - ry) * .12;    // cincin: lebih cepat
    glow.style.transform = `translate(${gx}px,${gy}px)`;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    if (giant) { const r = giant.getBoundingClientRect(); giant.style.setProperty('--gx', (gx - r.left) + 'px'); giant.style.setProperty('--gy', (gy - r.top) + 'px'); }
    requestAnimationFrame(loop);
  })();
})();
