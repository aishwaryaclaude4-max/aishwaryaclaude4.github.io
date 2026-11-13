(() => {
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const wa = t => `https://wa.me/${S.whatsapp}` + (t ? `?text=${encodeURIComponent(t)}` : "");
  document.documentElement.classList.add("js");

  /* ---------- contact + text binding ---------- */
  $$("[data-wa]").forEach(a => a.href = wa(S.waGreeting));
  $$("[data-tel]").forEach(a => { a.href = `tel:+${S.whatsapp}`; a.textContent = S.phone; });
  $$("[data-mail]").forEach(a => { a.href = `mailto:${S.email}`; a.textContent = S.email; });
  $$("[data-ig]").forEach(a => a.href = S.instagram);
  $("#about-name").textContent = S.name;
  $("#about-role").textContent = S.role;
  $("#bio").innerHTML = S.bio.map(p => `<p>${esc(p)}</p>`).join("");
  $("#yr").textContent = new Date().getFullYear();

  /* ---------- helpers ---------- */
  const frame = (file, alt, label) =>
    `<div class="frame" data-label="${esc(label)}"><img src="${S.base}${file}" alt="${esc(alt)}" loading="lazy" decoding="async" onerror="this.closest('.frame').classList.add('missing')"></div>`;
  const lists = {};
  const tile = (key, i, item) =>
    `<button class="art" data-g="${key}" data-i="${i}" aria-label="View ${esc(item.title)}">${frame(item.file, item.title + (item.cat ? ", " + item.cat : ""), item.ph || item.title)}<span class="cap">${esc(item.title)}${item.cat ? `<small>${esc(item.cat)}</small>` : ""}</span></button>`;

  /* ---------- portfolio ---------- */
  const art = [];
  S.portfolioSlots.forEach(([cat, folder, prefix, n]) => {
    for (let i = 1; i <= n; i++) {
      const num = String(i).padStart(2, "0");
      art.push({ file: `${folder}/${prefix}-${num}.jpg`, title: `${cat} ${num}`, cat, ph: `Add artwork: ${folder}/${prefix}-${num}.jpg` });
    }
  });
  S.extraArtworks.forEach(a => art.push(a));
  const cats = ["All", ...S.portfolioSlots.map(s => s[0])];
  let current = "All";
  const filters = $("#filters");
  filters.innerHTML = cats.map(c => `<button class="chip" aria-pressed="${c === current}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  const draw = () => {
    lists.art = art.filter(a => current === "All" || a.cat === current);
    $("#grid").innerHTML = lists.art.length ? lists.art.map((a, i) => tile("art", i, a)).join("") : '<p class="empty">No artwork in this category yet.</p>';
  };
  filters.addEventListener("click", e => {
    const b = e.target.closest(".chip"); if (!b) return;
    current = b.dataset.c;
    $$(".chip", filters).forEach(c => c.setAttribute("aria-pressed", c === b));
    draw();
  });
  draw();

  /* ---------- academy ---------- */
  $("#grades").innerHTML = S.grades.map(([g, s, t]) => `<article class="card rv"><h3>${esc(g)}</h3><em>${esc(s)}</em><p>${esc(t)}</p></article>`).join("");
  $("#levels").innerHTML = S.levels.map(([l, t]) => `<article class="card rv"><h3>${esc(l)}</h3><p>${esc(t)}</p></article>`).join("");

  /* ---------- achievements, exhibitions, certificates ---------- */
  $("#timeline").innerHTML = S.achievements.length
    ? S.achievements.map(a => `<li class="rv"><b>${esc(a.year || "")}</b><h3>${esc(a.title)}</h3><p>${esc(a.detail || "")}</p></li>`).join("")
    : '<li class="none">Achievements and exhibitions will appear here. Add them in js/content.js.</li>';
  const gallery = (id, key, items, phLabel) => {
    lists[key] = items;
    const shown = items.length ? items : [1, 2, 3].map(n => ({ file: "none.jpg", title: phLabel, ph: phLabel }));
    $(id).innerHTML = shown.map((it, i) => tile(key, i, it)).join("");
  };
  gallery("#exhibitions", "ex", S.exhibitions, "Add exhibition photos to assets/images/exhibitions");
  gallery("#certificates", "cert", S.certificates, "Add certificates to assets/images/certificates");

  /* ---------- lightbox ---------- */
  const lb = $("#lb"), lbImg = $("img", lb), lbCap = $("figcaption", lb);
  let key = "", idx = 0;
  const show = () => {
    const it = lists[key][idx];
    lbImg.src = S.base + it.file; lbImg.alt = it.title;
    lbCap.textContent = it.title + (it.cat ? " · " + it.cat : "");
  };
  const step = d => { const n = lists[key].length; idx = (idx + d + n) % n; show(); };
  document.addEventListener("click", e => {
    const t = e.target.closest("[data-g]"); if (!t) return;
    if ($(".frame", t).classList.contains("missing")) return; // nothing to enlarge yet
    key = t.dataset.g; idx = +t.dataset.i; show(); lb.showModal();
  });
  $(".prev", lb).onclick = () => step(-1);
  $(".next", lb).onclick = () => step(1);
  $(".x", lb).onclick = () => lb.close();
  lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", e => { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });

  /* ---------- enquiry form (opens WhatsApp or email, no backend) ---------- */
  const f = $("#enq");
  const msg = () => {
    const d = new FormData(f);
    return `Hello Aishwarya, I'd like to enquire about AURA Drawing Class.\nName: ${d.get("name")}\nPhone: ${d.get("phone")}\nStudent's class: ${d.get("grade")}\nMessage: ${d.get("message") || "-"}`;
  };
  f.addEventListener("submit", e => { e.preventDefault(); if (f.reportValidity()) window.open(wa(msg()), "_blank", "noopener"); });
  $("#mail").addEventListener("click", () => {
    if (f.reportValidity()) location.href = `mailto:${S.email}?subject=${encodeURIComponent("Drawing class enquiry")}&body=${encodeURIComponent(msg())}`;
  });

  /* ---------- mobile menu + active link ---------- */
  const burger = $(".burger"), nav = $("#nav");
  burger.addEventListener("click", () => { const o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", o); });
  nav.addEventListener("click", e => { if (e.target.closest("a")) { nav.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });
  if ("IntersectionObserver" in window) {
    const links = $$("nav a");
    const spy = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(s => spy.observe(s));
    const rv = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); rv.unobserve(en.target); } }), { threshold: .12 });
    $$(".rv").forEach(el => rv.observe(el));
  } else $$(".rv").forEach(el => el.classList.add("in"));
})();
