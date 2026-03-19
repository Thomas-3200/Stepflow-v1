// STEPFlow Demo — script.js V1
// Lee demo_company.json y renderiza toda la demo dinámicamente.

const ACTIVITY_ICONS = {
  mensaje_enviado:       "📤",
  respuesta_recibida:    "💬",
  demo_sugerida:         "📅",
  seguimiento_pendiente: "🔔",
  cierre:                "✅"
};

const STEP_ICONS = ["🎯", "⚡", "🔁", "🏆"];

async function cargarDatos() {
  const res = await fetch("./data/demo_company.json");
  if (!res.ok) throw new Error("No se pudo cargar demo_company.json");
  return res.json();
}

function aplicarColor(color) {
  document.documentElement.style.setProperty("--brand", color);
  // Derivar variantes
  document.documentElement.style.setProperty("--brand-light", color + "18");
}

function renderHeader(data) {
  document.getElementById("header-company-name").textContent = data.nombre_empresa;
  document.getElementById("header-company-meta").textContent =
    `${data.rubro} · ${data.ciudad}`;
}

function renderTagline(data) {
  document.getElementById("tagline").textContent = data.textos.tagline;
}

function renderMetricas(metricas) {
  const labels = {
    leads_nuevos:       "Leads nuevos",
    leads_contactados:  "Contactados",
    leads_interesados:  "Interesados",
    demos_agendadas:    "Demos agendadas",
    cierres_estimados:  "Cierres estimados"
  };

  const subs = {
    leads_nuevos:       "Esta semana",
    leads_contactados:  "Primer mensaje enviado",
    leads_interesados:  "Respondieron con interés",
    demos_agendadas:    "Confirmadas",
    cierres_estimados:  "En proceso de cierre"
  };

  const container = document.getElementById("metrics-grid");
  container.innerHTML = Object.entries(metricas).map(([key, val]) => `
    <div class="metric-card">
      <div class="metric-label">${labels[key] || key}</div>
      <div class="metric-value">${val}</div>
      <div class="metric-sub">${subs[key] || ""}</div>
    </div>
  `).join("");
}

function renderPipeline(pipeline) {
  const board = document.getElementById("pipeline-board");
  board.innerHTML = Object.entries(pipeline).map(([col, leads]) => `
    <div class="pipeline-col">
      <div class="pipeline-col-header">
        <span class="pipeline-col-name">${col}</span>
        <span class="pipeline-count">${leads.length}</span>
      </div>
      <div class="pipeline-cards">
        ${leads.map(lead => `
          <div class="pipeline-card" data-tier="${lead.tier}">
            <span class="tier-badge tier-${lead.tier}">Tier ${lead.tier}</span>
            <div class="pipeline-card-name">${lead.nombre}</div>
            <div class="pipeline-card-empresa">${lead.empresa}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function renderActividad(actividad) {
  const list = document.getElementById("activity-list");
  list.innerHTML = actividad.map(item => `
    <div class="activity-item">
      <div class="activity-icon ${item.tipo}">${ACTIVITY_ICONS[item.tipo] || "•"}</div>
      <div class="activity-body">
        <div class="activity-texto">${item.texto}</div>
        <div class="activity-tiempo">${item.tiempo}</div>
      </div>
    </div>
  `).join("");
}

function renderLeadDestacado(lead) {
  document.getElementById("lead-name").textContent = lead.nombre;
  document.getElementById("lead-empresa-sub").textContent =
    `${lead.cargo} · ${lead.empresa}`;

  document.getElementById("lead-meta").innerHTML = `
    <div class="lead-meta-item">
      <div class="lead-meta-label">Fuente</div>
      <div class="lead-meta-value">${lead.fuente}</div>
    </div>
    <div class="lead-meta-item">
      <div class="lead-meta-label">Ciudad</div>
      <div class="lead-meta-value">${lead.ciudad}</div>
    </div>
    <div class="lead-meta-item">
      <div class="lead-meta-label">Prioridad</div>
      <div class="lead-meta-value">
        <span class="tier-badge tier-${lead.tier}">Tier ${lead.tier}</span>
      </div>
    </div>
    <div class="lead-meta-item">
      <div class="lead-meta-label">Estado</div>
      <div class="lead-meta-value">${lead.estado}</div>
    </div>
  `;

  document.getElementById("score-fill").style.width = lead.score + "%";
  document.getElementById("score-value").textContent = lead.score + " / 100";
  document.getElementById("lead-mensaje").textContent = lead.mensaje_generado;
  document.getElementById("lead-siguiente").textContent = "→ " + lead.siguiente_paso;
}

function renderHowItWorks(data) {
  document.getElementById("how-title").textContent =
    `Cómo trabajaría STEPFlow en ${data.nombre_empresa}`;
  document.getElementById("how-desc").textContent =
    data.textos.descripcion_sistema;

  document.getElementById("how-steps").innerHTML = data.textos.pasos.map((paso, i) => `
    <div class="how-step">
      <div class="how-step-icon">${STEP_ICONS[i]}</div>
      <div class="how-step-num">Paso ${i + 1}</div>
      <div class="how-step-title">${paso.titulo}</div>
      <div class="how-step-desc">${paso.descripcion}</div>
    </div>
  `).join("");

  document.getElementById("cta-btn").textContent = data.textos.cta;
}

async function init() {
  try {
    const data = await cargarDatos();
    aplicarColor(data.color_principal);
    renderHeader(data);
    renderTagline(data);
    renderMetricas(data.metricas);
    renderPipeline(data.pipeline);
    renderActividad(data.actividad);
    renderLeadDestacado(data.lead_destacado);
    renderHowItWorks(data);
  } catch (err) {
    document.body.innerHTML = `
      <div style="padding:40px;text-align:center;color:#dc2626;font-family:sans-serif">
        <h2>Error cargando la demo</h2>
        <p style="margin-top:8px;color:#64748b">${err.message}</p>
        <p style="margin-top:8px;color:#64748b;font-size:12px">
          Asegurate de abrir la demo desde un servidor local (Live Server, Python, etc.)
        </p>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", init);
