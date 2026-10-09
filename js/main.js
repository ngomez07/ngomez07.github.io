// =====================================================================
// Lógica del sitio. Normalmente no necesitas editar este archivo:
// el contenido de los proyectos está en js/proyectos.js
// =====================================================================

let lang = "es";

// ----- Utilidades -----
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tx = (obj) => (obj ? (obj[lang] || obj.es || "") : "");
const isVideo = (src) => /\.mp4$/i.test(src);

// ----- Tarjetas de proyectos (desde js/proyectos.js) -----
function renderProjects() {
  const grid = document.getElementById("grid");
  grid.innerHTML = PROYECTOS.map((p, i) => {
    const n = p.galeria.length;
    const hasVideo = p.galeria.some((m) => isVideo(m.src));
    const badge = n > 1 ? (hasVideo ? `${n} · video` : `${n} ${lang === "en" ? "photos" : "fotos"}`) : "";
    return `
      <article class="card" data-cat="${p.categoria === "biomedica" ? "biomed" : "interactive"}">
        <figure class="card-img" data-project="${i}">
          <img src="${esc(p.portada)}" alt="${esc(tx(p.titulo))}" loading="lazy">
          ${badge ? `<span class="count">${badge}</span>` : ""}
        </figure>
        <div class="card-body">
          <p class="card-meta">${esc(tx(p.meta))}</p>
          <h3>${esc(tx(p.titulo))}</h3>
          <p>${esc(tx(p.descripcion))}</p>
          <ul class="tags">${p.etiquetas.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
          ${p.resultado ? `<p class="outcome">${esc(tx(p.resultado))}</p>` : ""}
        </div>
      </article>`;
  }).join("");
  applyFilter();
}

// ----- Trayectoria y formación (desde js/perfil.js) -----
function renderPerfil() {
  document.getElementById("timeline").innerHTML = TRAYECTORIA.map((r) => `
    <li><span class="t-date">${esc(r.fechas)}</span>
      <div><strong>${esc(tx(r.cargo))}</strong><span>${esc(r.lugar)}</span>
      <p class="t-sum">${esc(tx(r.resumen))}</p></div></li>`).join("");
  const item = (x) => `<li><strong>${esc(tx(x.nombre))}</strong><span>${esc(x.lugar)} · ${esc(x.fecha)}</span></li>`;
  document.getElementById("f-titulos").innerHTML = FORMACION.titulos.map(item).join("");
  document.getElementById("f-cursos").innerHTML = FORMACION.cursos.map(item).join("");
  document.getElementById("f-idiomas").innerHTML = FORMACION.idiomas.map((x) => `
    <li><div class="lang-row"><strong>${esc(tx(x.nombre))}</strong><span>${esc(tx(x.nivel))}</span></div>
      <div class="lang-bar"><i style="width:${+x.valor}%"></i></div></li>`).join("");
}

// ----- Idioma ES / EN -----
const nodes = document.querySelectorAll("[data-i18n]");
const ES = {};
nodes.forEach((n) => { ES[n.dataset.i18n] = n.textContent; }); // el español se toma del HTML

function setLang(l) {
  lang = l;
  const dict = l === "en" ? EN : ES;
  nodes.forEach((n) => { const t = dict[n.dataset.i18n]; if (t) n.textContent = t; });
  document.documentElement.lang = l;
  document.getElementById("langToggle").textContent = l === "en" ? "ES" : "EN";
  try { localStorage.setItem("lang", l); } catch (e) {}
  if (rotEl) rotEl.textContent = ROTATOR[l][rotI % ROTATOR[l].length];
  renderProjects();
  renderPerfil();
}

// ----- Filtro de proyectos -----
let filter = "all";
function applyFilter() {
  document.querySelectorAll(".card").forEach((c) => {
    c.classList.toggle("hidden", filter !== "all" && c.dataset.cat !== filter);
  });
}
document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    applyFilter();
  });
});

// ----- Galería (fotos y videos) -----
const lb = document.getElementById("lightbox");
const lbImg = lb.querySelector("img");
const lbVid = lb.querySelector("video");
const lbCount = lb.querySelector(".lb-count");
let gallery = [], idx = 0;

function show(i) {
  idx = (i + gallery.length) % gallery.length;
  const item = gallery[idx];
  const video = isVideo(item.src);
  lbVid.pause();
  lbImg.hidden = video;
  lbVid.hidden = !video;
  if (video) {
    lbVid.poster = item.src.replace(/\.mp4$/i, "-poster.jpg");
    lbVid.src = item.src;
    lbVid.play().catch(() => {});
  } else {
    lbImg.src = item.src;
    lbImg.alt = tx(item);
  }
  const n = gallery.length > 1 ? `${idx + 1} / ${gallery.length}` : "";
  const cap = tx(item);
  lbCount.textContent = cap ? (n ? `${n} · ${cap}` : cap) : n;
  lb.querySelector(".lb-prev").hidden = lb.querySelector(".lb-next").hidden = gallery.length < 2;
}
function closeLb() { lb.hidden = true; lbVid.pause(); }

document.getElementById("grid").addEventListener("click", (e) => {
  const fig = e.target.closest("[data-project]");
  if (!fig) return;
  gallery = PROYECTOS[+fig.dataset.project].galeria;
  show(0);
  lb.hidden = false;
});
lb.querySelector(".lb-close").onclick = closeLb;
lb.querySelector(".lb-prev").onclick = (e) => { e.stopPropagation(); show(idx - 1); };
lb.querySelector(".lb-next").onclick = (e) => { e.stopPropagation(); show(idx + 1); };
lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") show(idx - 1);
  if (e.key === "ArrowRight") show(idx + 1);
});

// ----- Palabra rotativa del encabezado -----
const ROTATOR = {
  es: ["IA generativa", "sensores y Kinect", "realidad extendida", "datos y Python", "luz y proyección"],
  en: ["generative AI", "sensors and Kinect", "extended reality", "data and Python", "light and projection"],
};
let rotI = 0;
const rotEl = document.getElementById("rotator");
function rotate() {
  const words = ROTATOR[lang];
  rotI = (rotI + 1) % words.length;
  rotEl.textContent = words[rotI];
}
const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion) setInterval(rotate, 2200);

// ----- Inicio -----
document.getElementById("langToggle").addEventListener("click", () => setLang(lang === "en" ? "es" : "en"));
document.getElementById("year").textContent = new Date().getFullYear();

let saved = new URLSearchParams(location.search).get("lang");
if (!saved) { try { saved = localStorage.getItem("lang"); } catch (e) {} }
setLang(saved === "en" ? "en" : "es");
