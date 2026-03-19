// STEPFlow — Centro de Mando · script.js V2
// Fuente de datos: stepflow_dashboard.json (embebido para funcionar sin servidor)

const DATA = {
  "periodo": "Semana del 11 al 17 de marzo 2025",
  "ultima_actualizacion": "Hoy, 09:42 hs",

  "kpis": {
    "prospectos_nuevos":   { "valor": 38, "vs": "+12", "tendencia": "up",   "label": "Prospectos nuevos",   "barra": 76 },
    "contactados":         { "valor": 31, "vs": "+8",  "tendencia": "up",   "label": "Contactados",         "barra": 82 },
    "respondieron":        { "valor": 11, "vs": "+2",  "tendencia": "up",   "label": "Respondieron",        "barra": 35 },
    "reuniones_agendadas": { "valor": 4,  "vs": "+1",  "tendencia": "up",   "label": "Reuniones agendadas", "barra": 36 },
    "clientes_cerrados":   { "valor": 1,  "vs": "=",   "tendencia": "flat", "label": "Clientes cerrados",   "barra": 25 }
  },

  "tasas": [
    { "label": "Tasa de respuesta",   "actual": 35, "objetivo": 25, "status": "ok" },
    { "label": "Consultas → Reunión", "actual": 13, "objetivo": 8,  "status": "ok" },
    { "label": "Reuniones → Cierre",  "actual": 25, "objetivo": 20, "status": "ok" }
  ],

  "jordan": {
    "estado": "activo",
    "version": "V1.0",
    "prioridad_actual": "Inmobiliarias y servicios locales",
    "foco": "Validación de V1 — primer flujo real funcionando",
    "accion_en_curso": "Outreach + seguimiento automático en paralelo",
    "nicho_priorizado": "inmobiliaria",
    "decision_estrategica": "Profundizar en un nicho antes de expandir. Inmobiliaria tiene la mayor tasa de conversión esta semana (38%).",
    "proximo_ajuste": "Evaluar activar canal email para leads que no responden por WhatsApp"
  },

  "agentes": [
    {
      "nombre": "Agente Think",
      "rol": "Análisis y detección de patrones",
      "estado": "activo",
      "ultimo_ciclo": "Hace 3 horas",
      "decision_reciente": "Template inmobiliaria_v2 cayó al 17% — recomienda pausar y reactivar v1"
    },
    {
      "nombre": "Orquestador",
      "rol": "Coordinación de ejecución",
      "estado": "activo",
      "ultimo_ciclo": "Hace 12 minutos",
      "decision_reciente": "19 leads en secuencia activa — 3 próximos a recibir seguimiento"
    }
  ],

  "agustina": {
    "estado": "activo",
    "rol": "Conversaciones y cierre",
    "conversaciones_activas": 4,
    "leads_calientes": 2,
    "objeciones_detectadas": ["No tengo tiempo ahora", "Ya tenemos algo parecido"],
    "cierres_en_proceso": 1,
    "ultima_conversacion": {
      "prospecto": "Hernán Castillo",
      "empresa": "Castillo Inmobiliaria",
      "ultimo_mensaje": "Hernán: 'Suena interesante. ¿Tienen casos de éxito en Córdoba?'",
      "estado": "esperando respuesta",
      "accion": "Enviar caso de éxito de inmobiliaria en Córdoba"
    }
  },

  "acciones": [
    { "prioridad": "alta",  "emoji": "🔥", "accion": "Responder a Hernán Castillo con caso de éxito",        "razon": "Lead caliente — respondió con señal de interés alta" },
    { "prioridad": "alta",  "emoji": "📅", "accion": "Confirmar reunión con Valeria Méndez — jueves 15hs",    "razon": "Reunión sin confirmar hace 6 horas" },
    { "prioridad": "media", "emoji": "⚠️", "accion": "Pausar template inmobiliaria_v2",                       "razon": "Tasa de respuesta 17% — por debajo del umbral mínimo" },
    { "prioridad": "media", "emoji": "🔁", "accion": "Reintentar contacto con Carla Benítez",                 "razon": "Sin actividad en 3 días — riesgo de perder el lead" },
    { "prioridad": "baja",  "emoji": "📊", "accion": "Revisar resultados del ciclo de aprendizaje semanal",   "razon": "Ciclo completado — datos listos para análisis" }
  ],

  "skills": [
    { "nombre": "Outreach Engine",   "estado": "activo",  "mensajes_hoy": 12, "tasa_respuesta": 35,   "alertas": 0, "descripcion": "Captación y primer contacto" },
    { "nombre": "Seguimiento",       "estado": "alerta",  "mensajes_hoy": 7,  "tasa_respuesta": 17,   "alertas": 1, "descripcion": "Follow-up automático" },
    { "nombre": "Clasificador",      "estado": "activo",  "mensajes_hoy": 19, "tasa_respuesta": null, "alertas": 0, "descripcion": "Detección de nicho y prioridad" },
    { "nombre": "Message Generator", "estado": "activo",  "mensajes_hoy": 19, "tasa_respuesta": null, "alertas": 0, "descripcion": "Generación de mensajes personalizados" },
    { "nombre": "Demo Builder",      "estado": "pausado", "mensajes_hoy": 0,  "tasa_respuesta": null, "alertas": 0, "descripcion": "Construcción de demos para prospectos" },
    { "nombre": "Sales Closer",      "estado": "activo",  "mensajes_hoy": 3,  "tasa_respuesta": 67,   "alertas": 0, "descripcion": "Manejo de objeciones y cierre" }
  ],

  "insights": [
    { "tipo": "rubro",   "emoji": "🏆", "titulo": "Mejor rubro esta semana",  "valor": "Inmobiliaria",       "detalle": "38% de tasa de respuesta — el doble que el promedio" },
    { "tipo": "canal",   "emoji": "📲", "titulo": "Mejor canal",               "valor": "WhatsApp directo",   "detalle": "31% respuesta vs 12% por email en el mismo período" },
    { "tipo": "mensaje", "emoji": "✍️", "titulo": "Mejor mensaje",             "valor": "Template v3 inmob",  "detalle": "Ganó A/B test con 55% más conversión que v2" },
    { "tipo": "alerta",  "emoji": "💡", "titulo": "Recomendación del sistema", "valor": "Expandir a salud",   "detalle": "Clínica Torres respondió en < 5 min — nicho con alta urgencia de respuesta" }
  ],

  "pipeline": {
    "Nuevo":      { "leads": [
      { "nombre": "Marcos Villalba",  "empresa": "Constructora Norte",    "nicho": "inmobiliaria",      "tier": "A", "dias": 0 },
      { "nombre": "Elena Paredes",    "empresa": "Centro Médico Paredes", "nicho": "salud",             "tier": "A", "dias": 1 },
      { "nombre": "Ricardo Font",     "empresa": "Font Automotores",      "nicho": "automotriz",        "tier": "B", "dias": 1 }
    ]},
    "Contactado": { "leads": [
      { "nombre": "Sofía Ríos",       "empresa": "Academia Crecer",        "nicho": "educacion",        "tier": "A", "dias": 2 },
      { "nombre": "Julián Mora",      "empresa": "Restaurante El Origen",  "nicho": "gastronomia",      "tier": "B", "dias": 3 },
      { "nombre": "Carla Benítez",    "empresa": "Benítez Propiedades",    "nicho": "inmobiliaria",     "tier": "B", "dias": 3 }
    ]},
    "Respondió":  { "leads": [
      { "nombre": "Pablo Gutiérrez",  "empresa": "TechOps SRL",           "nicho": "servicios_locales", "tier": "A", "dias": 4 },
      { "nombre": "Ana Lucía Torres", "empresa": "Clínica Torres",        "nicho": "salud",             "tier": "A", "dias": 5 }
    ]},
    "Interesado": { "leads": [
      { "nombre": "Hernán Castillo",  "empresa": "Castillo Inmobiliaria", "nicho": "inmobiliaria",      "tier": "A", "dias": 6 }
    ]},
    "Reunión":    { "leads": [
      { "nombre": "Valeria Méndez",   "empresa": "Grupo Méndez",          "nicho": "servicios_locales", "tier": "A", "dias": 8 },
      { "nombre": "Diego Salas",      "empresa": "Salas & Hijos",         "nicho": "gastronomia",       "tier": "A", "dias": 9 }
    ]},
    "Cerrado":    { "leads": [
      { "nombre": "Lucía Romero",     "empresa": "Romero Propiedades",    "nicho": "inmobiliaria",      "tier": "A", "dias": 14 }
    ], "cerrado": true }
  },

  "actividad": [
    { "tipo": "mensaje_enviado",    "texto": "Jordan envió primer contacto a Marcos Villalba — Constructora Norte",        "tiempo": "Hace 8 min",  "nivel": "normal" },
    { "tipo": "respuesta_recibida", "texto": "Ana Lucía Torres respondió con interés — Clínica Torres",                    "tiempo": "Hace 22 min", "nivel": "positivo" },
    { "tipo": "reunion_agendada",   "texto": "Reunión confirmada con Valeria Méndez — jueves 15:00 hs",                    "tiempo": "Hace 1 hora", "nivel": "exito" },
    { "tipo": "alerta",             "texto": "Template inmobiliaria_v2 con tasa 17% — por debajo del umbral mínimo (25%)", "tiempo": "Hace 2 hs",   "nivel": "alerta" },
    { "tipo": "cliente_cerrado",    "texto": "Lucía Romero firmó contrato. Cliente #7 cerrado.",                           "tiempo": "Hace 3 hs",   "nivel": "exito" },
    { "tipo": "alerta",             "texto": "Carla Benítez sin actividad en 3 días — requiere revisión manual",           "tiempo": "Hace 6 hs",   "nivel": "alerta" }
  ],

  "base_prospectos": [
    { "nombre": "Hernán Castillo",  "empresa": "Castillo Inmobiliaria",  "rubro": "inmobiliaria",      "ciudad": "Córdoba",      "origen": "Prospecting",  "interes_principal": "Automatizar seguimiento de consultas", "temperatura": "caliente", "estado": "Interesado",  "ultima_interaccion": "Hace 1 día",   "siguiente_paso": "Enviar caso de éxito + proponer reunión" },
    { "nombre": "Valeria Méndez",   "empresa": "Grupo Méndez",           "rubro": "servicios_locales", "ciudad": "Buenos Aires", "origen": "Inbound",      "interes_principal": "Captar más clientes B2B",             "temperatura": "caliente", "estado": "Reunión",     "ultima_interaccion": "Hace 1 hora",  "siguiente_paso": "Confirmar reunión jueves 15hs" },
    { "nombre": "Ana Lucía Torres", "empresa": "Clínica Torres",         "rubro": "salud",             "ciudad": "Rosario",      "origen": "Prospecting",  "interes_principal": "Respuesta rápida a consultas",        "temperatura": "caliente", "estado": "Respondió",   "ultima_interaccion": "Hace 22 min",  "siguiente_paso": "Calificar y proponer demo" },
    { "nombre": "Sofía Ríos",       "empresa": "Academia Crecer",        "rubro": "educacion",         "ciudad": "Córdoba",      "origen": "Lista propia", "interes_principal": "Aumentar inscripciones",              "temperatura": "tibio",    "estado": "Contactado",  "ultima_interaccion": "Hace 2 días",  "siguiente_paso": "Seguimiento automático en 48hs" },
    { "nombre": "Julián Mora",      "empresa": "Restaurante El Origen",  "rubro": "gastronomia",       "ciudad": "Mendoza",      "origen": "Inbound",      "interes_principal": "Fidelización de clientes",            "temperatura": "tibio",    "estado": "Contactado",  "ultima_interaccion": "Hace 3 días",  "siguiente_paso": "Segundo mensaje con caso de éxito" },
    { "nombre": "Ricardo Font",     "empresa": "Font Automotores",       "rubro": "automotriz",        "ciudad": "Buenos Aires", "origen": "Prospecting",  "interes_principal": "Gestión de leads de test drive",      "temperatura": "tibio",    "estado": "Nuevo",       "ultima_interaccion": "Hace 1 día",   "siguiente_paso": "Primer mensaje programado" },
    { "nombre": "Carla Benítez",    "empresa": "Benítez Propiedades",    "rubro": "inmobiliaria",      "ciudad": "Buenos Aires", "origen": "Lista propia", "interes_principal": "Seguimiento de consultas de portal",  "temperatura": "frio",     "estado": "Contactado",  "ultima_interaccion": "Hace 3 días",  "siguiente_paso": "Reintento manual urgente" },
    { "nombre": "Pablo Gutiérrez",  "empresa": "TechOps SRL",            "rubro": "servicios_locales", "ciudad": "Buenos Aires", "origen": "Prospecting",  "interes_principal": "Automatizar captación B2B",           "temperatura": "tibio",    "estado": "Respondió",   "ultima_interaccion": "Hace 4 días",  "siguiente_paso": "Enviar propuesta + demo" },
    { "nombre": "Marcos Villalba",  "empresa": "Constructora Norte",     "rubro": "inmobiliaria",      "ciudad": "Santa Fe",     "origen": "Prospecting",  "interes_principal": "Captación de compradores",            "temperatura": "frio",     "estado": "Nuevo",       "ultima_interaccion": "Hace 8 min",   "siguiente_paso": "Esperar respuesta al primer mensaje" },
    { "nombre": "Lucía Romero",     "empresa": "Romero Propiedades",     "rubro": "inmobiliaria",      "ciudad": "Buenos Aires", "origen": "Inbound",      "interes_principal": "Sistema completo de captación",       "temperatura": "caliente", "estado": "Cerrado ✓",   "ultima_interaccion": "Hace 3 horas", "siguiente_paso": "Onboarding — llamada de bienvenida" }
  ]
};

// ── HELPERS ───────────────────────────────────────────────────────────────────

const ACT_ICONS = {
  mensaje_enviado:    "📤",
  respuesta_recibida: "💬",
  reunion_agendada:   "🗓",
  alerta:             "⚠️",
  cliente_cerrado:    "✅"
};

function donut(pct, status) {
  const r = 20, c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return `
    <svg width="52" height="52" viewBox="0 0 52 52">
      <circle class="tasa-donut-bg"   cx="26" cy="26" r="${r}" />
      <circle class="tasa-donut-fill ${status}" cx="26" cy="26" r="${r}"
        stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}" />
    </svg>
    <div class="tasa-donut-label">${pct}%</div>`;
}

// ── RENDER FUNCTIONS ──────────────────────────────────────────────────────────

function renderHeader(d) {
  document.getElementById("header-periodo").textContent = d.periodo;
  document.getElementById("header-update").textContent  = "Actualizado: " + d.ultima_actualizacion;
}

function renderKPIs(kpis) {
  document.getElementById("kpi-grid").innerHTML = Object.values(kpis).map(k => `
    <div class="kpi-card">
      <div class="kpi-top">
        <div class="kpi-label">${k.label}</div>
        <div class="kpi-trend ${k.tendencia}">
          ${k.tendencia === "up" ? "↑" : k.tendencia === "down" ? "↓" : "—"} ${k.vs}
        </div>
      </div>
      <div class="kpi-value">${k.valor}</div>
      <div class="kpi-bar-wrap"><div class="kpi-bar" style="width:${k.barra}%"></div></div>
    </div>`).join("");
}

function renderTasas(tasas) {
  document.getElementById("tasas-section").innerHTML = tasas.map(t => `
    <div class="tasa-card">
      <div class="tasa-donut ${t.status}">${donut(t.actual, t.status)}</div>
      <div class="tasa-info">
        <div class="tasa-label">${t.label}</div>
        <div class="tasa-nums">
          <span class="tasa-actual">${t.actual}%</span>
          <span class="tasa-objetivo">objetivo: ${t.objetivo}%</span>
        </div>
        <div class="tasa-status ${t.status}">
          ${t.status === "ok" ? "✓ Por encima del objetivo" : "⚠ Por debajo del objetivo"}
        </div>
      </div>
    </div>`).join("");
}

function renderCerebro(jordan, agentes) {
  document.getElementById("cerebro-panel").innerHTML = `
    <div class="cerebro-card">

      <div class="cerebro-header">
        <div class="cerebro-title-row">
          <div class="jordan-badge">
            <span class="jordan-dot"></span>
            Jordan ${jordan.version}
          </div>
          <span class="cerebro-estado">● ${jordan.estado.toUpperCase()}</span>
        </div>
        <div class="cerebro-rol">Agente central de STEPFlow</div>
      </div>

      <div class="cerebro-fields">
        <div class="cerebro-field">
          <span class="cerebro-field-label">Prioridad actual</span>
          <span class="cerebro-field-value highlight">${jordan.prioridad_actual}</span>
        </div>
        <div class="cerebro-field">
          <span class="cerebro-field-label">Foco</span>
          <span class="cerebro-field-value">${jordan.foco}</span>
        </div>
        <div class="cerebro-field">
          <span class="cerebro-field-label">Acción en curso</span>
          <span class="cerebro-field-value">${jordan.accion_en_curso}</span>
        </div>
        <div class="cerebro-field">
          <span class="cerebro-field-label">Nicho priorizado</span>
          <span class="cerebro-field-value highlight">${jordan.nicho_priorizado}</span>
        </div>
      </div>

      <div class="cerebro-decision">
        <div class="cerebro-decision-label">Decisión estratégica</div>
        <div class="cerebro-decision-text">"${jordan.decision_estrategica}"</div>
      </div>

      <div class="cerebro-proximo">
        <span class="cerebro-proximo-label">Próximo ajuste →</span>
        <span class="cerebro-proximo-text">${jordan.proximo_ajuste}</span>
      </div>

      <div class="cerebro-agentes">
        ${agentes.map(ag => `
          <div class="agente-row">
            <div class="agente-dot ${ag.estado}"></div>
            <div class="agente-info">
              <div class="agente-nombre">${ag.nombre} <span class="agente-rol">· ${ag.rol}</span></div>
              <div class="agente-decision">${ag.decision_reciente}</div>
            </div>
            <div class="agente-ciclo">${ag.ultimo_ciclo}</div>
          </div>`).join("")}
      </div>

    </div>`;
}

function renderAcciones(acciones) {
  document.getElementById("acciones-panel").innerHTML = acciones.map(a => `
    <div class="accion-item prioridad-${a.prioridad}">
      <div class="accion-top">
        <span class="accion-emoji">${a.emoji}</span>
        <span class="accion-texto">${a.accion}</span>
        <span class="accion-badge ${a.prioridad}">${a.prioridad}</span>
      </div>
      <div class="accion-razon">${a.razon}</div>
    </div>`).join("");
}

function renderPipeline(pipeline) {
  document.getElementById("pipeline-board").innerHTML = Object.entries(pipeline).map(([col, data]) => `
    <div class="pipeline-col${data.cerrado ? " col-cerrado" : ""}">
      <div class="pipeline-col-header">
        <span class="pipeline-col-name">${col}</span>
        <span class="pipeline-count">${data.leads.length}</span>
      </div>
      <div class="pipeline-cards">
        ${data.leads.map(l => `
          <div class="pipeline-card" data-tier="${l.tier}">
            <div class="pc-top">
              <div class="pc-name">${l.nombre}</div>
              <span class="tier-badge tier-${l.tier}">${l.tier}</span>
            </div>
            <div class="pc-empresa">${l.empresa}</div>
            <div class="pc-meta">
              <span class="pc-nicho">${l.nicho.replace("_", " ")}</span>
              <span class="pc-dias ${l.dias > 5 ? "late" : ""}">${l.dias}d</span>
            </div>
          </div>`).join("")}
      </div>
    </div>`).join("");
}

function renderAgustina(ag) {
  const uc = ag.ultima_conversacion;
  document.getElementById("agustina-panel").innerHTML = `
    <div class="agustina-header">
      <div class="agustina-estado-row">
        <span class="agustina-dot ${ag.estado}"></span>
        <span class="agustina-estado-label">Agustina · ${ag.rol}</span>
        <span class="agustina-badge-activo">● ACTIVA</span>
      </div>
    </div>

    <div class="agustina-stats">
      <div class="agustina-stat">
        <div class="agustina-stat-value">${ag.conversaciones_activas}</div>
        <div class="agustina-stat-label">Conversaciones activas</div>
      </div>
      <div class="agustina-stat highlight">
        <div class="agustina-stat-value">${ag.leads_calientes}</div>
        <div class="agustina-stat-label">Leads calientes</div>
      </div>
      <div class="agustina-stat">
        <div class="agustina-stat-value">${ag.cierres_en_proceso}</div>
        <div class="agustina-stat-label">Cierres en proceso</div>
      </div>
    </div>

    <div class="agustina-objeciones">
      <div class="agustina-objeciones-label">Objeciones detectadas esta semana</div>
      <div class="agustina-objeciones-tags">
        ${ag.objeciones_detectadas.map(o => `<span class="objecion-tag">${o}</span>`).join("")}
      </div>
    </div>

    <div class="agustina-conversacion">
      <div class="agustina-conv-header">
        <span class="agustina-conv-nombre">${uc.prospecto}</span>
        <span class="agustina-conv-empresa">· ${uc.empresa}</span>
        <span class="agustina-conv-estado">${uc.estado}</span>
      </div>
      <div class="agustina-conv-mensaje">${uc.ultimo_mensaje}</div>
      <div class="agustina-conv-accion">→ ${uc.accion}</div>
    </div>`;
}

function renderActividad(actividad) {
  document.getElementById("activity-list").innerHTML = actividad.map(a => `
    <div class="activity-item nivel-${a.nivel}">
      <div class="act-icon">${ACT_ICONS[a.tipo] || "•"}</div>
      <div class="act-content">
        <div class="act-texto">
          ${a.nivel === "alerta" ? `<span class="alerta-tag">ALERTA</span> ` : ""}
          ${a.texto}
        </div>
        <div class="act-tiempo">${a.tiempo}</div>
      </div>
    </div>`).join("");
}

function renderSkills(skills) {
  document.getElementById("skills-grid").innerHTML = skills.map(s => {
    const estadoFinal = s.alertas > 0 ? "alerta" : s.estado;
    const estadoLabel = s.alertas > 0 ? "alerta" : s.estado;
    return `
    <div class="skill-card estado-${estadoFinal}">
      <div class="skill-top">
        <div class="skill-nombre">${s.nombre}</div>
        <div class="skill-estado ${estadoFinal}">${estadoLabel}</div>
      </div>
      <div class="skill-descripcion">${s.descripcion}</div>
      <div class="skill-stats">
        <div class="skill-stat">
          <span class="skill-stat-num">${s.mensajes_hoy}</span>
          <span class="skill-stat-label">mensajes hoy</span>
        </div>
        ${s.tasa_respuesta !== null ? `
        <div class="skill-stat">
          <span class="skill-stat-num ${s.tasa_respuesta >= 25 ? "ok" : "warn"}">${s.tasa_respuesta}%</span>
          <span class="skill-stat-label">respuesta</span>
        </div>` : ""}
      </div>
      ${s.alertas > 0 ? `<div class="skill-alerta">⚠ ${s.alertas} alerta — requiere atención</div>` : ""}
    </div>`;
  }).join("");
}

function renderInsights(insights) {
  document.getElementById("insights-grid").innerHTML = insights.map(i => `
    <div class="insight-card tipo-${i.tipo}">
      <div class="insight-emoji">${i.emoji}</div>
      <div class="insight-titulo">${i.titulo}</div>
      <div class="insight-valor">${i.valor}</div>
      <div class="insight-detalle">${i.detalle}</div>
    </div>`).join("");
}

function renderCRM(prospectos) {
  document.getElementById("crm-body").innerHTML = prospectos.map(p => `
    <tr>
      <td>
        <div class="crm-nombre">${p.nombre}</div>
        <div class="crm-empresa">${p.empresa}</div>
      </td>
      <td>${p.rubro.replace("_", " ")}</td>
      <td>${p.ciudad}</td>
      <td>${p.origen}</td>
      <td class="crm-interes">${p.interes_principal}</td>
      <td><span class="temp-badge ${p.temperatura}">${p.temperatura}</span></td>
      <td><span class="estado-tag">${p.estado}</span></td>
      <td class="crm-tiempo">${p.ultima_interaccion}</td>
      <td class="siguiente-paso-crm">${p.siguiente_paso}</td>
    </tr>`).join("");
}

// ── JORDAN CHAT ───────────────────────────────────────────────────────────────

const JORDAN_CHIPS = [
  "¿Qué leads priorizo hoy?",
  "¿Cómo está Agustina?",
  "Acciones urgentes",
  "Mejor nicho esta semana"
];

function jordanRespond(input) {
  const q = input.toLowerCase();
  const d = DATA;

  if (/lead|prioriz|prioridad/.test(q)) {
    return `Tres para atacar hoy:\n🔥 Hernán Castillo — enviar caso de éxito (caliente, 6d en pipeline)\n📅 Valeria Méndez — reunión sin confirmar hace 6 horas\n🔁 Carla Benítez — 3 días sin actividad, riesgo de pérdida`;
  }
  if (/agustina/.test(q)) {
    const ag = d.agustina;
    return `${ag.conversaciones_activas} conversaciones activas. ${ag.leads_calientes} calientes. ${ag.cierres_en_proceso} cierre en proceso.\nObjeciones detectadas: "${ag.objeciones_detectadas.join('" · "')}"\nUrgente: ${ag.ultima_conversacion.accion}.`;
  }
  if (/skill|automatizaci/.test(q)) {
    const alerta = d.skills.find(s => s.alertas > 0);
    const activas = d.skills.filter(s => s.estado === 'activo').length;
    return `${activas} de ${d.skills.length} skills activas.\n${alerta ? `⚠ Alerta en ${alerta.nombre} — tasa ${alerta.tasa_respuesta}%, debajo del umbral (25%). Pausar template_v2 y reactivar v1.` : 'Todas dentro de parámetros.'}`;
  }
  if (/nicho|mejor|rubro/.test(q)) {
    const top = d.insights.find(i => i.tipo === 'rubro');
    const alerta = d.insights.find(i => i.tipo === 'alerta');
    return `${top.valor} lidera: ${top.detalle}\nSeñal emergente: ${alerta.detalle}\nDecisión: profundizar antes de expandir.`;
  }
  if (/accion|urgente/.test(q)) {
    const items = d.acciones.map((a, i) => `${i + 1}. ${a.accion} (${a.prioridad})`).join('\n');
    return `Acciones en orden:\n${items}`;
  }
  if (/decisi|estrategia|foco/.test(q)) {
    return `Foco: ${d.jordan.foco}.\n${d.jordan.decision_estrategica}\nPróximo ajuste: ${d.jordan.proximo_ajuste}.`;
  }

  return `Puedo ayudarte con prioridades, Agustina, skills, nichos o acciones urgentes. Probá una de las sugerencias.`;
}

function nowTime() {
  const n = new Date();
  return n.getHours().toString().padStart(2, '0') + ':' + n.getMinutes().toString().padStart(2, '0');
}

function addJordanMessage(rol, texto) {
  const history = document.getElementById('jordan-chat-history');
  const div = document.createElement('div');
  div.className = `jordan-msg ${rol}`;
  div.innerHTML = `
    <div class="jordan-msg-bubble">${texto}</div>
    <div class="jordan-msg-time">${nowTime()}</div>`;
  history.appendChild(div);
  history.scrollTop = history.scrollHeight;
}

function sendJordanMessage(text) {
  if (!text.trim()) return;
  addJordanMessage('user', text);
  setTimeout(() => addJordanMessage('jordan', jordanRespond(text)), 550);
}

function initJordanChat() {
  const trigger  = document.getElementById('jordan-chat-trigger');
  const drawer   = document.getElementById('jordan-drawer');
  const overlay  = document.getElementById('jordan-overlay');
  const closeBtn = document.getElementById('jordan-drawer-close');
  const input    = document.getElementById('jordan-chat-input');
  const sendBtn  = document.getElementById('jordan-chat-send');
  const chipsEl  = document.getElementById('jordan-suggestions');

  // Mensaje inicial de Jordan
  addJordanMessage('jordan',
    `Sistema activo. Esta semana inmobiliaria lidera con 38% de respuesta.\nHernán Castillo es el lead más urgente — esperando caso de éxito.`
  );

  // Chips de sugerencias
  chipsEl.innerHTML = JORDAN_CHIPS.map(s =>
    `<button class="jordan-chip" onclick="sendJordanMessage('${s}')">${s}</button>`
  ).join('');

  // Abrir / cerrar drawer
  const openDrawer  = () => { drawer.classList.add('open'); overlay.classList.add('open'); };
  const closeDrawer = () => { drawer.classList.remove('open'); overlay.classList.remove('open'); };

  trigger.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Enviar mensaje
  const send = () => { sendJordanMessage(input.value); input.value = ''; };
  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
}

// ── INIT ──────────────────────────────────────────────────────────────────────

function init() {
  const d = DATA;
  renderHeader(d);
  renderKPIs(d.kpis);
  renderTasas(d.tasas);
  renderCerebro(d.jordan, d.agentes);
  renderAcciones(d.acciones);
  renderPipeline(d.pipeline);
  renderAgustina(d.agustina);
  renderActividad(d.actividad);
  renderSkills(d.skills);
  renderInsights(d.insights);
  renderCRM(d.base_prospectos);
}

document.addEventListener("DOMContentLoaded", () => { init(); initJordanChat(); });
