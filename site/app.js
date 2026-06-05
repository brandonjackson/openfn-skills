"use strict";

const state = {
  manifest: null,
  pack: null,
  activeCategory: "all",
  query: "",
};

const els = {
  packSelect: document.getElementById("pack-select"),
  packName: document.getElementById("pack-name"),
  packDescription: document.getElementById("pack-description"),
  packStats: document.getElementById("pack-stats"),
  packSource: document.getElementById("pack-source"),
  search: document.getElementById("search"),
  categoryFilters: document.getElementById("category-filters"),
  resultsCount: document.getElementById("results-count"),
  grid: document.getElementById("skill-grid"),
  emptyState: document.getElementById("empty-state"),
  modal: document.getElementById("skill-modal"),
  modalCategory: document.getElementById("modal-category"),
  modalTitle: document.getElementById("modal-title"),
  modalDescription: document.getElementById("modal-description"),
  modalSource: document.getElementById("modal-source"),
  modalPrompt: document.getElementById("modal-prompt"),
  modalClose: document.getElementById("modal-close"),
  copyBtn: document.getElementById("copy-prompt"),
};

async function init() {
  try {
    const res = await fetch("./packs/manifest.json", { cache: "no-cache" });
    state.manifest = await res.json();
  } catch (err) {
    showLoadError(err);
    return;
  }

  els.packSelect.innerHTML = state.manifest.packs
    .map((p) => `<option value="${p.id}">${escapeHtml(p.name)}</option>`)
    .join("");

  const initial = pickInitialPack();
  els.packSelect.value = initial;
  els.packSelect.addEventListener("change", () => loadPack(els.packSelect.value, true));
  els.search.addEventListener("input", (e) => {
    state.query = e.target.value.trim().toLowerCase();
    render();
  });
  els.modalClose.addEventListener("click", closeModal);
  els.modal.addEventListener("click", (e) => {
    if (e.target.dataset.close === "true") closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !els.modal.hidden) closeModal();
  });
  els.copyBtn.addEventListener("click", copyPrompt);

  window.addEventListener("hashchange", handleHashChange);
  await loadPack(initial, false);
  handleHashChange();
}

function pickInitialPack() {
  const hashPack = parseHash().pack;
  const ids = state.manifest.packs.map((p) => p.id);
  if (hashPack && ids.includes(hashPack)) return hashPack;
  return state.manifest.default || ids[0];
}

function parseHash() {
  const hash = window.location.hash.replace(/^#/, "");
  const out = {};
  for (const part of hash.split("&")) {
    if (!part) continue;
    const [k, v] = part.split("=");
    out[decodeURIComponent(k)] = v ? decodeURIComponent(v) : "";
  }
  return out;
}

function setHash(updates) {
  const current = parseHash();
  const next = { ...current, ...updates };
  const str = Object.entries(next)
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
  const target = str ? `#${str}` : "";
  if (target !== window.location.hash) {
    history.replaceState(null, "", target || window.location.pathname);
  }
}

async function loadPack(packId, updateHash) {
  const entry = state.manifest.packs.find((p) => p.id === packId);
  if (!entry) return;
  const res = await fetch(`./packs/${entry.file}`, { cache: "no-cache" });
  state.pack = await res.json();
  state.activeCategory = "all";
  state.query = "";
  els.search.value = "";
  if (updateHash) setHash({ pack: packId, skill: undefined });
  renderHero();
  renderCategoryFilters();
  render();
}

function renderHero() {
  const p = state.pack;
  els.packName.textContent = p.name;
  els.packDescription.textContent = p.description || "";
  els.packStats.textContent = `${p.skills.length} skills · ${p.categories.length} categories`;
  if (p.source_url) {
    els.packSource.textContent = "View source ↗";
    els.packSource.href = p.source_url;
    els.packSource.style.display = "";
  } else {
    els.packSource.style.display = "none";
  }
}

function renderCategoryFilters() {
  const p = state.pack;
  const items = [
    { slug: "all", label: "All", count: p.skills.length },
    ...p.categories.map((c) => ({
      slug: c.slug,
      label: c.label,
      count: c.skill_ids.length,
    })),
  ];
  els.categoryFilters.innerHTML =
    `<p class="nav-heading">Categories</p>` +
    items
      .map(
        (c) =>
          `<button type="button" class="cat-link${
            c.slug === state.activeCategory ? " active" : ""
          }" data-cat="${escapeAttr(c.slug)}">${escapeHtml(c.label)}<span class="count">${c.count}</span></button>`
      )
      .join("");
  for (const btn of els.categoryFilters.querySelectorAll(".cat-link")) {
    btn.addEventListener("click", () => {
      state.activeCategory = btn.dataset.cat;
      renderCategoryFilters();
      render();
    });
  }
}

function filteredSkills() {
  const { activeCategory, query } = state;
  return state.pack.skills.filter((s) => {
    if (activeCategory !== "all" && s.category !== activeCategory) return false;
    if (!query) return true;
    const hay = `${s.title} ${s.description} ${s.category_label}`.toLowerCase();
    return hay.includes(query);
  });
}

function render() {
  const skills = filteredSkills();
  els.resultsCount.textContent = `${skills.length} skill${skills.length === 1 ? "" : "s"}`;
  if (skills.length === 0) {
    els.grid.innerHTML = "";
    els.emptyState.hidden = false;
    return;
  }
  els.emptyState.hidden = true;
  els.grid.innerHTML = skills.map(renderCard).join("");
  for (const card of els.grid.querySelectorAll(".skill-card")) {
    card.addEventListener("click", () => openSkill(card.dataset.id));
  }
}

function renderCard(s) {
  return `
    <button type="button" class="skill-card" data-id="${escapeAttr(s.id)}">
      <span class="cat">${escapeHtml(s.category_label)}</span>
      <h3>${escapeHtml(s.title)}</h3>
      <p>${escapeHtml(s.description || "")}</p>
      ${s.planned ? '<span class="planned-tag">Planned</span>' : ""}
    </button>
  `;
}

function openSkill(id) {
  const skill = state.pack.skills.find((s) => s.id === id);
  if (!skill) return;
  els.modalCategory.textContent = skill.category_label;
  els.modalTitle.textContent = skill.title;
  els.modalDescription.textContent = skill.description || "";
  if (skill.prompt && skill.prompt.trim()) {
    els.modalPrompt.textContent = skill.prompt;
    els.modalPrompt.classList.remove("empty");
    els.copyBtn.disabled = false;
    els.copyBtn.style.display = "";
  } else {
    els.modalPrompt.textContent =
      "This skill is planned but the prompt body hasn't been authored yet.";
    els.modalPrompt.classList.add("empty");
    els.copyBtn.style.display = "none";
  }
  if (skill.source_url) {
    els.modalSource.href = skill.source_url;
    els.modalSource.hidden = false;
  } else {
    els.modalSource.hidden = true;
  }
  els.copyBtn.textContent = "Copy prompt";
  els.copyBtn.classList.remove("copied");
  els.modal.hidden = false;
  document.body.style.overflow = "hidden";
  setHash({ pack: state.pack.id, skill: skill.id });
}

function closeModal() {
  els.modal.hidden = true;
  document.body.style.overflow = "";
  setHash({ skill: undefined });
}

async function copyPrompt() {
  const text = els.modalPrompt.textContent;
  try {
    await navigator.clipboard.writeText(text);
    els.copyBtn.textContent = "Copied!";
    els.copyBtn.classList.add("copied");
    setTimeout(() => {
      els.copyBtn.textContent = "Copy prompt";
      els.copyBtn.classList.remove("copied");
    }, 1400);
  } catch {
    els.copyBtn.textContent = "Copy failed";
  }
}

function handleHashChange() {
  const { pack, skill } = parseHash();
  if (pack && state.pack && pack !== state.pack.id) {
    els.packSelect.value = pack;
    loadPack(pack, false).then(() => {
      if (skill) openSkill(skill);
    });
    return;
  }
  if (skill && state.pack) openSkill(skill);
}

function showLoadError(err) {
  document.body.innerHTML = `
    <div style="padding:48px;font-family:sans-serif;max-width:640px;margin:0 auto">
      <h1>Couldn't load skills</h1>
      <p>Failed to fetch <code>packs/manifest.json</code>. Make sure you're serving this site over HTTP — opening <code>index.html</code> directly with <code>file://</code> blocks fetch.</p>
      <pre>${escapeHtml(String(err))}</pre>
      <p>Try: <code>cd site &amp;&amp; python3 -m http.server 8000</code></p>
    </div>
  `;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(s) {
  return escapeHtml(s);
}

init();
