/**
 * app.js — Lógica compartida del panel admin StepFlow.
 * Inyecta sidebar, maneja polling y utilidades comunes.
 */

// ── SIDEBAR INJECTION ──────────────────────────────────────────────────────

const NAV_ITEMS = [
  { href: "dashboard.html", icon: "▦",  label: "Dashboard"   },
  { href: "leads.html",     icon: "◎",  label: "Leads"       },
  { href: "payments.html",  icon: "◈",  label: "Pagos"       },
  { href: "customers.html", icon: "◉",  label: "Clientes"    },
  { href: "jordan.html",    icon: "◆",  label: "Jordan"      },
];

function renderSidebar(activePage) {
  const current = location.pathname.split("/").pop();
  const active = activePage || current;

  const navHTML = NAV_ITEMS.map(item => `
    <a href="${item.href}" class="sf-nav-item ${active === item.href ? "active" : ""}">
      <span class="icon">${item.icon}</span>
      ${item.label}
    </a>
  `).join("");

  return `
    <aside class="sf-sidebar">
      <div class="sf-logo">
        <div class="sf-logo-name">StepFlow</div>
        <div class="sf-logo-tag">Panel Interno</div>
      </div>
      <nav class="sf-nav">
        <div class="sf-nav-section">Menú</div>
        ${navHTML}
      </nav>
      <div class="sf-sidebar-footer">
        <button class="sf-logout-btn" onclick="doLogout()">
          ← Cerrar sesión
        </button>
      </div>
    </aside>
  `;
}

function injectSidebar(activePage) {
  const placeholder = document.getElementById("sf-sidebar-placeholder");
  if (placeholder) placeholder.outerHTML = renderSidebar(activePage);
}

// ── AUTH ───────────────────────────────────────────────────────────────────

function doLogout() {
  logout();
  window.location.href = "login.html";
}

// ── DATA LOADING ───────────────────────────────────────────────────────────

async function loadJSON(path) {
  try {
    const resp = await fetch(path + "?t=" + Date.now());
    if (!resp.ok) return null;
    return await resp.json();
  } catch {
    return null;
  }
}

// ── POLLING ────────────────────────────────────────────────────────────────

function startPolling(fn, intervalMs = 30000) {
  fn();
  return setInterval(fn, intervalMs);
}

// ── FORMATTERS ────────────────────────────────────────────────────────────

function fmtDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("es-AR", {
    day: "2-digit", month: "2-digit", year: "numeric"
  });
}

function fmtDateTime(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit" }) +
    " " + d.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });
}

function fmtMoney(amount, currency = "USD") {
  return new Intl.NumberFormat("es-AR", {
    style: "currency", currency, maximumFractionDigits: 0
  }).format(amount);
}

// ── BADGE HELPERS ─────────────────────────────────────────────────────────

function badgeEstadoPago(estado) {
  const map = {
    aprobado:  ["badge-success", "Aprobado"],
    pendiente: ["badge-warning", "Pendiente"],
    rechazado: ["badge-danger",  "Rechazado"],
  };
  const [cls, label] = map[estado] || ["badge-muted", estado];
  return `<span class="badge ${cls}">${label}</span>`;
}

function badgeOnboarding(estado) {
  const map = {
    completo:    ["badge-success", "Completo"],
    en_progreso: ["badge-warning", "En progreso"],
    pendiente:   ["badge-muted",   "Pendiente"],
  };
  const [cls, label] = map[estado] || ["badge-muted", estado];
  return `<span class="badge ${cls}">${label}</span>`;
}

function badgePlan(plan) {
  const map = {
    Starter: "badge-accent",
    Pro:     "badge-blue",
    Scale:   "badge-warning",
  };
  return `<span class="badge ${map[plan] || "badge-muted"}">${plan}</span>`;
}

function badgePipeline(etapa) {
  const map = {
    nuevo:      ["badge-muted",    "Nuevo"],
    contactado: ["badge-accent",   "Contactado"],
    respondio:  ["badge-blue",     "Respondió"],
    interesado: ["badge-warning",  "Interesado"],
    reunion:    ["badge-warning",  "Reunión"],
    cerrado:    ["badge-success",  "Cerrado"],
  };
  const [cls, label] = map[etapa] || ["badge-muted", etapa];
  return `<span class="badge ${cls}">${label}</span>`;
}

// ── SEARCH FILTER ─────────────────────────────────────────────────────────

function filterTable(inputId, tableId) {
  const q = document.getElementById(inputId).value.toLowerCase();
  const rows = document.querySelectorAll(`#${tableId} tbody tr`);
  rows.forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(q) ? "" : "none";
  });
}

// ── TOPBAR CLOCK ──────────────────────────────────────────────────────────

function startClock(elementId) {
  function tick() {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.textContent = new Date().toLocaleTimeString("es-AR", {
      hour: "2-digit", minute: "2-digit", second: "2-digit"
    });
  }
  tick();
  setInterval(tick, 1000);
}
