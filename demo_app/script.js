// STEPFlow Demo — script.js V3
// 100% mock data. Sin conexiones reales.

// ── NICHO PERSONALIZADO ────────────────────────────────────────────────────────
const _params = new URLSearchParams(window.location.search);
const _nicho  = (_params.get('nicho') || 'inmobiliaria').toLowerCase();
const NICHO_CONFIG = {
  marketing:    { empresa: 'Agencia Digital Impulso',  sector: 'Marketing · Buenos Aires' },
  agencia:      { empresa: 'Agencia Digital Impulso',  sector: 'Marketing · Buenos Aires' },
  restaurante:  { empresa: 'Restaurante La Esquina',   sector: 'Gastronomía · Palermo'    },
  gastronomia:  { empresa: 'Restaurante La Esquina',   sector: 'Gastronomía · Palermo'    },
  salon:        { empresa: 'Salón Estilo & Co.',        sector: 'Belleza · Caballito'      },
  belleza:      { empresa: 'Salón Estilo & Co.',        sector: 'Belleza · Caballito'      },
  clinica:      { empresa: 'Centro Médico Norte',       sector: 'Salud · Belgrano'         },
  salud:        { empresa: 'Centro Médico Norte',       sector: 'Salud · Belgrano'         },
  ecommerce:    { empresa: 'Tienda Moda AR',            sector: 'E-commerce · Online'      },
  tienda:       { empresa: 'Tienda Moda AR',            sector: 'E-commerce · Online'      },
  gym:          { empresa: 'Gimnasio FitPro',           sector: 'Fitness · Flores'         },
  gimnasio:     { empresa: 'Gimnasio FitPro',           sector: 'Fitness · Flores'         },
  inmobiliaria: { empresa: 'Inmobiliaria Del Sur',      sector: 'Inmobiliaria · Bs As'     },
};
const _cfg = NICHO_CONFIG[_nicho] || { empresa: 'Tu Negocio', sector: _nicho + ' · Argentina' };
document.addEventListener('DOMContentLoaded', () => {
  const nameEl = document.querySelector('.header-company-name');
  const metaEl = document.querySelector('.header-company-meta');
  if (nameEl) nameEl.textContent = _cfg.empresa;
  if (metaEl) metaEl.textContent = _cfg.sector;
  document.title = 'STEPFlow — ' + _cfg.empresa;
});

// ── MOCK DATA ──────────────────────────────────────────────────────────────────

const MOCK = {
  metricas: {
    consultas_recibidas:          47,
    contactadas_automaticamente:  38,
    respondieron_con_interes:     14,
    reuniones_confirmadas:         6,
    operaciones_en_proceso:        3,
  },

  pipeline: {
    "Consulta nueva":     [{ nombre:"Roberto Sosa", tier:"A" }, { nombre:"Valeria Ruiz", tier:"B" }],
    "Contactado":         [{ nombre:"Gustavo Pérez", tier:"A" }, { nombre:"Marina Cano", tier:"B" }, { nombre:"Luis Herrera", tier:"C" }],
    "Respondió":          [{ nombre:"Patricia Vidal", tier:"A" }, { nombre:"Carlos Méndez", tier:"A" }],
    "Interesado":         [{ nombre:"Ana Romero", tier:"A" }, { nombre:"Fernando Gil", tier:"B" }],
    "Reunión agendada":   [{ nombre:"Silvia Torres", tier:"A" }],
    "Operación cerrada":  [{ nombre:"Jorge Blanco", tier:"A" }],
  },

  leads: [
    { nombre:"Marta González",  canal:"WhatsApp",  interes:"Depto 2 amb en Palermo",          ciudad:"Buenos Aires",  temperatura:"caliente", estado:"Respondió con interés",  siguiente_accion:"Proponer visita esta semana" },
    { nombre:"Lucas Pereyra",   canal:"Zonaprop",  interes:"Casa zona norte, presupuesto alto",ciudad:"San Isidro",    temperatura:"caliente", estado:"Reunión agendada",        siguiente_accion:"Confirmar visita — martes 11hs" },
    { nombre:"Javier Núñez",    canal:"WhatsApp",  interes:"PH con jardín en Belgrano",       ciudad:"Buenos Aires",  temperatura:"caliente", estado:"Interesado",              siguiente_accion:"Enviar tasación y proponer reunión" },
    { nombre:"Sandra Vásquez",  canal:"Argenprop", interes:"Inversora — evalúa 2 propiedades",ciudad:"Córdoba",       temperatura:"tibio",    estado:"Contactada",              siguiente_accion:"Follow-up automático en 48 hs" },
    { nombre:"Diego Morales",   canal:"Instagram", interes:"Local comercial gastronómico",    ciudad:"Rosario",       temperatura:"tibio",    estado:"En seguimiento",          siguiente_accion:"Segundo mensaje programado" },
    { nombre:"Romina Farías",   canal:"Zonaprop",  interes:"Alquiler temporario — sin resp.", ciudad:"Mendoza",       temperatura:"frio",     estado:"Sin respuesta",           siguiente_accion:"Reintento automático mañana" },
  ],

  actividad: [
    { tipo:"mensaje_enviado",       texto:"StepFlow respondió la consulta de Roberto Sosa en 3 minutos",          tiempo:"Hace 4 min" },
    { tipo:"respuesta_recibida",    texto:"Patricia Vidal respondió: '¿Cuándo podemos ver la propiedad?'",        tiempo:"Hace 18 min" },
    { tipo:"reunion_agendada",      texto:"Reunión confirmada con Silvia Torres — martes 10:00 hs",               tiempo:"Hace 1 hora" },
    { tipo:"seguimiento_pendiente", texto:"Seguimiento automático programado para Fernando Gil en 48 hs",         tiempo:"Hace 2 horas" },
    { tipo:"cierre",                texto:"Jorge Blanco firmó boleto. Operación cerrada.",                        tiempo:"Hace 3 horas" },
    { tipo:"mensaje_enviado",       texto:"Segundo seguimiento enviado a Luis Herrera — sin respuesta previa",    tiempo:"Hace 5 horas" },
  ],

  pasos: [
    { titulo:"Consulta entra",          descripcion:"Llega desde Zonaprop, Argenprop o WhatsApp. StepFlow responde en menos de 5 minutos." },
    { titulo:"Calificación automática", descripcion:"El sistema detecta si es comprador serio, inversor o solo explorando y asigna prioridad." },
    { titulo:"Seguimiento sin olvidos", descripcion:"Si no responde, StepFlow hace el follow-up en el momento correcto. Ninguna consulta queda sin atender." },
    { titulo:"Vos cerrás la operación", descripcion:"Solo te involucrás cuando el interesado está calificado y listo para visitar o negociar." },
  ],

  // ── MARKETING MOCK ──────────────────────────────────────────────────────────

  chartSemanal: {
    dias:  ["Lun 14", "Mar 15", "Mié 16", "Jue 17", "Vie 18", "Sáb 19", "Dom 20"],
    ig:    [210, 185, 412, 220, 290, 180,  95],
    fb:    [ 45,  38,  72,  51,  63,  42,  20],
  },

  crm: [
    { titulo:"Propiedad en Palermo · 3 amb",     red:"instagram",  estado:"publicado",    fecha:"15 Mar",  interacciones:284 },
    { titulo:"¿Conviene alquilar o comprar?",     red:"instagram",  estado:"publicado",    fecha:"14 Mar",  interacciones:412 },
    { titulo:"Inversión en San Isidro",           red:"facebook",   estado:"publicado",    fecha:"14 Mar",  interacciones:95  },
    { titulo:"Testimonio: Martina García",        red:"instagram",  estado:"publicado",    fecha:"13 Mar",  interacciones:189 },
    { titulo:"Depto en Belgrano · 2 amb",         red:"instagram",  estado:"publicado",    fecha:"12 Mar",  interacciones:203 },
    { titulo:"Oportunidad en Recoleta",           red:"instagram",  estado:"publicado",    fecha:"11 Mar",  interacciones:156 },
    { titulo:"Tips para compradores",             red:"facebook",   estado:"reprogramado", fecha:"20 Mar",  interacciones:null },
    { titulo:"Casa en zona norte — nueva!",       red:"instagram",  estado:"pendiente",    fecha:"21 Mar",  interacciones:null },
    { titulo:"Mercado inmobiliario 2026",         red:"linkedin",   estado:"pendiente",    fecha:"22 Mar",  interacciones:null },
    { titulo:"Nueva propiedad disponible",        red:"instagram",  estado:"pendiente",    fecha:"23 Mar",  interacciones:null },
    { titulo:"Cómo elegir el barrio ideal",       red:"facebook",   estado:"reprogramado", fecha:"24 Mar",  interacciones:null },
    { titulo:"Tasación gratuita este mes",        red:"instagram",  estado:"pendiente",    fecha:"25 Mar",  interacciones:null },
  ],

  calendario: [
    { dia:"Lun 18", posts:[] },
    { dia:"Mar 19", posts:[{ titulo:"Follow-up Silvia Torres", tipo:"whatsapp", estado:"enviado" }] },
    { dia:"Mié 20", posts:[{ titulo:"Propiedad destacada — Recoleta", tipo:"instagram", estado:"enviado" }, { titulo:"Consulta respondida — Roberto", tipo:"whatsapp", estado:"enviado" }] },
    { dia:"Jue 21", posts:[{ titulo:"Casa zona norte", tipo:"instagram", estado:"pendiente" }] },
    { dia:"Vie 22", posts:[{ titulo:"Tips compradores", tipo:"facebook", estado:"reprogramado" }, { titulo:"Mercado inmobiliario 2026", tipo:"linkedin", estado:"pendiente" }] },
    { dia:"Sáb 23", posts:[{ titulo:"Nueva propiedad disponible", tipo:"instagram", estado:"pendiente" }] },
    { dia:"Dom 24", posts:[] },
  ],

  upcoming: [
    { titulo:"Casa en zona norte",      red:"instagram", fecha:"Mañana · 10:00",   estado:"pendiente"   },
    { titulo:"Mercado inmobiliario 2026",red:"linkedin",  fecha:"Dom · 12:00",      estado:"pendiente"   },
    { titulo:"Tips para compradores",   red:"facebook",  fecha:"Lun · 09:00",      estado:"reprogramado"},
    { titulo:"Nueva propiedad dispon.", red:"instagram", fecha:"Mar · 11:00",      estado:"pendiente"   },
    { titulo:"Testimonio cliente 2",    red:"instagram", fecha:"Mié · 10:30",      estado:"pendiente"   },
    { titulo:"Cómo elegir el barrio",   red:"facebook",  fecha:"Jue · 09:00",      estado:"reprogramado"},
  ],
};

// ── NAVEGACIÓN ─────────────────────────────────────────────────────────────────

let activePanel = "conversaciones";
let mktInitialized = false;

function switchPanel(panel, btn) {
  if (panel === activePanel) return;

  // Ocultar panel actual
  const current = document.getElementById("panel-" + activePanel);
  current.classList.remove("active");
  current.classList.add("leaving");
  setTimeout(() => current.classList.remove("leaving"), 300);

  // Mostrar nuevo
  setTimeout(() => {
    const next = document.getElementById("panel-" + panel);
    next.classList.add("active");
    activePanel = panel;

    if (panel === "marketing" && !mktInitialized) {
      mktInitialized = true;
      initMarketing();
    }
  }, 150);

  // Sidebar active state
  document.querySelectorAll(".sidebar-item:not(.locked)").forEach(el => el.classList.remove("active"));
  btn.classList.add("active");
}

// ── INIT ────────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  initConversaciones();
  initChatChips();
  iniciarChatAnimado();
});

// ── CONVERSACIONES ──────────────────────────────────────────────────────────────

function initConversaciones() {
  renderMetricas();
  renderLeads();
  renderPipelineMini();
  renderSeguimiento();
  renderReactivacion();
  renderActividad();
  renderHowSteps();
}

const METRIC_LABELS = {
  consultas_recibidas:          "Consultas recibidas",
  contactadas_automaticamente:  "Respondidas automáticamente",
  respondieron_con_interes:     "Con interés real",
  reuniones_confirmadas:        "Reuniones confirmadas",
  operaciones_en_proceso:       "Operaciones en proceso",
};

const METRIC_ICONS = {
  consultas_recibidas:"◎", contactadas_automaticamente:"⚡",
  respondieron_con_interes:"◉", reuniones_confirmadas:"📅", operaciones_en_proceso:"✓",
};

function renderMetricas() {
  document.getElementById("metrics-grid").innerHTML =
    Object.entries(MOCK.metricas).map(([k,v]) => `
      <div class="metric-card anim-fade-up">
        <div class="metric-icon">${METRIC_ICONS[k]||"•"}</div>
        <div class="metric-value" data-target="${v}">0</div>
        <div class="metric-label">${METRIC_LABELS[k]||k}</div>
      </div>`).join("");
  animateCounters(document.getElementById("metrics-grid"));
}

function renderLeads() {
  const tempIcon  = { caliente:"🔥", tibio:"⏰", frio:"❄️" };
  const tempCls   = { caliente:"temp-caliente", tibio:"temp-tibio", frio:"temp-frio" };
  const estadoCls = {
    "Respondió con interés":"est-interes","Reunión agendada":"est-reunion",
    "Interesado":"est-interesado","Contactada":"est-contactado",
    "En seguimiento":"est-seguimiento","Sin respuesta":"est-frio",
  };
  document.getElementById("leadsList").innerHTML = MOCK.leads.map(l => `
    <div class="demo-lead-item ${tempCls[l.temperatura]||''}">
      <div class="demo-lead-temp">${tempIcon[l.temperatura]||"•"}</div>
      <div class="demo-lead-body">
        <div class="demo-lead-name">${l.nombre}</div>
        <div class="demo-lead-sub">${l.canal} · ${l.ciudad}</div>
        <div class="demo-lead-interes">${l.interes}</div>
      </div>
      <div class="demo-lead-right">
        <span class="demo-lead-estado ${estadoCls[l.estado]||''}">${l.estado}</span>
        <div class="demo-lead-accion">${l.siguiente_accion}</div>
      </div>
    </div>`).join("");
}

function renderPipelineMini() {
  const total = Object.values(MOCK.pipeline).reduce((s,a)=>s+a.length,0);
  document.getElementById("pipelineMini").innerHTML =
    Object.entries(MOCK.pipeline).map(([col,leads])=>{
      const pct = total > 0 ? Math.round(leads.length/total*100) : 0;
      return `<div class="pipe-mini-item">
        <div class="pipe-mini-header">
          <span class="pipe-mini-name">${col}</span>
          <span class="pipe-mini-count">${leads.length}</span>
        </div>
        <div class="pipe-mini-bar"><div class="pipe-mini-fill" style="width:${pct}%"></div></div>
      </div>`;
    }).join("");
}

function renderSeguimiento() {
  const iconMap  = { caliente:"🔥", tibio:"⏰" };
  const badgeCls = { caliente:"seg-badge-caliente", tibio:"seg-badge-tibio" };
  const activos  = MOCK.leads.filter(l=>l.temperatura!=="frio");
  document.getElementById("seguimientoList").innerHTML = activos.map(l=>`
    <div class="seg-row">
      <div class="seg-row-icon">${iconMap[l.temperatura]||"•"}</div>
      <div class="seg-row-body">
        <div class="seg-row-name">${l.nombre}</div>
        <div class="seg-row-next">${l.siguiente_accion}</div>
        <div class="seg-row-canal">${l.canal}</div>
      </div>
      <span class="seg-badge ${badgeCls[l.temperatura]||''}">${l.estado}</span>
    </div>`).join("");
}

function renderReactivacion() {
  const frios = MOCK.leads.filter(l=>l.temperatura==="frio");
  const msgs  = [
    "Hola {n}, hace un tiempo consultaste con nosotros. ¿Seguís con la búsqueda? Tenemos novedades que podrían interesarte.",
    "{n}, volvemos a escribirte. Sabemos que el timing importa — ¿hay algo en lo que podamos ayudarte hoy?",
  ];
  document.getElementById("reactivacionList").innerHTML = frios.map((l,i)=>`
    <div class="react-row">
      <div class="react-header">
        <span class="react-icon">❄️</span>
        <span class="react-name">${l.nombre}</span>
        <span class="react-badge">Dormido</span>
      </div>
      <div class="react-interes">${l.interes}</div>
      <div class="react-msg">${msgs[i%msgs.length].replace("{n}",l.nombre.split(" ")[0])}</div>
      <button class="react-btn" onclick="this.textContent='Listo para enviar ✓';this.style.color='var(--success)';this.style.borderColor='var(--success)';this.disabled=true">Ver mensaje →</button>
    </div>`).join("");
}

function renderActividad() {
  const icons = { mensaje_enviado:"📤", respuesta_recibida:"💬", reunion_agendada:"📅", seguimiento_pendiente:"⏰", cierre:"✓" };
  document.getElementById("activity-list").innerHTML = MOCK.actividad.map(a=>`
    <div class="activity-item">
      <div class="activity-icon">${icons[a.tipo]||"•"}</div>
      <div class="activity-body">
        <div class="activity-texto">${a.texto}</div>
        <div class="activity-tiempo">${a.tiempo}</div>
      </div>
    </div>`).join("");
}

function renderHowSteps() {
  const icons = ["◎","⚡","↺","✓"];
  document.getElementById("how-steps").innerHTML = MOCK.pasos.map((p,i)=>`
    <div class="how-step">
      <div class="how-step-icon">${icons[i]}</div>
      <div class="how-step-num">Paso ${i+1}</div>
      <div class="how-step-title">${p.titulo}</div>
      <div class="how-step-desc">${p.descripcion}</div>
    </div>`).join("");
}

// ── CHAT DEMO ───────────────────────────────────────────────────────────────────

const RESPONSES = {
  disponible: "Sí, la propiedad sigue disponible. ¿Cuándo te vendría bien para coordinar una visita?",
  precio:     "Con gusto te paso los valores actualizados. ¿Me dejás un número para enviarte la información completa?",
  turno:      "Tenemos disponibilidad esta semana. ¿Preferís mañana o pasado? Te confirmo el horario enseguida.",
  horario:    "Atendemos de lunes a sábado de 9 a 20 hs. También podemos coordinar fuera de horario si lo necesitás.",
  palermo:    "En Palermo tenemos un departamento de 3 ambientes con balcón en piso 4, muy bien ubicado. ¿Querés que te mande las fotos?",
  zona:       "Trabajamos en toda el área metropolitana: Palermo, Belgrano, San Isidro, Zona Norte y más. ¿Tenés alguna zona en mente?",
  gracias:    "¡A vos! Cualquier cosa que necesitás, acá estamos. ¡Que tengas un excelente día!",
  default:    ["Recibimos tu consulta. Un asesor te va a responder en breve con toda la información.", "Gracias por escribirnos. Tomamos nota y te contactamos enseguida.", "Perfecto, anotamos tu consulta. ¿Hay algo más que quieras saber?"],
};

function getResponse(txt) {
  const t = txt.toLowerCase();
  if (t.includes("disponible")||t.includes("sigue")||t.includes("está"))   return RESPONSES.disponible;
  if (t.includes("precio")||t.includes("valor")||t.includes("cuánto"))     return RESPONSES.precio;
  if (t.includes("turno")||t.includes("cita")||t.includes("visita"))       return RESPONSES.turno;
  if (t.includes("horario")||t.includes("hora"))                           return RESPONSES.horario;
  if (t.includes("palermo"))                                               return RESPONSES.palermo;
  if (t.includes("zona")||t.includes("barrio"))                            return RESPONSES.zona;
  if (t.includes("gracias")||t.includes("ok")||t.includes("perfecto"))     return RESPONSES.gracias;
  const d = RESPONSES.default;
  return d[Math.floor(Math.random()*d.length)];
}

function addBubble(text, from) {
  const c = document.getElementById("chatMessages");
  const now = new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"});
  const div = document.createElement("div");
  div.className = `demo-bubble-wrap from-${from}`;
  div.innerHTML = `<div class="demo-bubble">${text}</div><div class="demo-bubble-time">${from==="agent"?"StepFlow · ":""}${now}</div>`;
  div.style.cssText = "opacity:0;transform:translateY(8px);transition:opacity .25s,transform .25s";
  c.appendChild(div);
  c.scrollTop = c.scrollHeight;
  requestAnimationFrame(()=>{ div.style.opacity="1"; div.style.transform="translateY(0)"; });
}

function showTypingBubble() {
  const c = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.id = "agent-typing";
  div.className = "demo-bubble-wrap from-agent";
  div.innerHTML = `<div class="demo-typing"><span></span><span></span><span></span></div>`;
  c.appendChild(div);
  c.scrollTop = c.scrollHeight;
}

function removeTypingBubble() { document.getElementById("agent-typing")?.remove(); }

function sendDemoMsg() {
  const inp = document.getElementById("demoInput");
  const txt = inp.value.trim(); if(!txt) return;
  inp.value = "";
  addBubble(txt, "lead");
  showTypingBubble();
  setTimeout(()=>{ removeTypingBubble(); addBubble(getResponse(txt),"agent"); }, 900+Math.random()*600);
}

function initChatChips() {
  const chips = ["¿Tienen propiedades en Palermo?","¿Cuánto cuesta?","¿Tienen turno disponible?","¿Qué zonas manejan?"];
  document.getElementById("demoChips").innerHTML = chips.map(c=>`<span class="demo-chip" onclick="document.getElementById('demoInput').value='${c}';sendDemoMsg()">${c}</span>`).join("");
}

function iniciarChatAnimado() {
  const guion = [
    { from:"lead",  text:"Hola, vi la propiedad en Zonaprop, sigue disponible?",              delay:800  },
    { from:"agent", text:"¡Hola! Sí, la propiedad sigue disponible. ¿Cuándo te vendría bien para coordinar una visita?", delay:2400 },
    { from:"lead",  text:"esta semana si pueden",                                              delay:4200 },
    { from:"agent", text:"Perfecto. ¿El martes a las 10 o el jueves a las 16, cuál preferís?",delay:5800 },
    { from:"lead",  text:"martes a las 10 perfecto!",                                          delay:7400 },
    { from:"agent", text:"Confirmado para el martes a las 10. Te mando los detalles por este canal. ¡Hasta el martes!", delay:8800 },
  ];
  const c = document.getElementById("chatMessages");
  c.innerHTML = "";
  guion.forEach((msg,i)=>{
    setTimeout(()=>{
      addBubble(msg.text, msg.from==="agent"?"agent":"lead");
      if(i===guion.length-1) setTimeout(()=>iniciarChatAnimado(), 5000);
    }, msg.delay);
  });
}

// ── MARKETING ───────────────────────────────────────────────────────────────────

function initMarketing() {
  animateCounters(document.getElementById("panel-marketing"));
  renderChart();
  renderCRM("all");
  renderCalendar();
  renderUpcoming();
}

// Gráfico de barras SVG
function renderChart() {
  const { dias, ig, fb } = MOCK.chartSemanal;
  const max = Math.max(...ig, ...fb);
  const W = 520, H = 160, padL = 8, padR = 8, barW = 16, gap = 8;
  const groupW = barW*2 + gap + 20;
  const colors = { ig:"#2563eb", fb:"#1877f2" };

  let bars = "";
  dias.forEach((dia, i) => {
    const x = padL + i * groupW;
    const igH = Math.round((ig[i]/max)*H);
    const fbH = Math.round((fb[i]/max)*H);
    bars += `
      <rect x="${x}" y="${H-igH}" width="${barW}" height="${igH}" fill="${colors.ig}" rx="3" opacity=".85" class="chart-bar">
        <title>Instagram: ${ig[i]}</title>
      </rect>
      <rect x="${x+barW+gap}" y="${H-fbH}" width="${barW}" height="${fbH}" fill="${colors.fb}" rx="3" opacity=".75" class="chart-bar">
        <title>Facebook: ${fb[i]}</title>
      </rect>`;
  });

  const totalW = padL + dias.length * groupW + padR;
  document.getElementById("mktChart").innerHTML = `
    <svg viewBox="0 0 ${totalW} ${H}" preserveAspectRatio="none" style="width:100%;height:${H}px;display:block">
      ${bars}
    </svg>`;

  document.getElementById("mktChartLabels").innerHTML = dias.map((d,i)=>`
    <span style="flex:1;text-align:center;font-size:10px;color:#64748b">${d}</span>`).join("");
}

// CRM tabla
const RED_ICONS = { instagram:"IG", facebook:"FB", linkedin:"IN", whatsapp:"WA" };
const RED_COLORS = { instagram:"#e1306c", facebook:"#1877f2", linkedin:"#0a66c2", whatsapp:"#25d366" };

function renderCRM(filter) {
  const rows = filter==="all" ? MOCK.crm : MOCK.crm.filter(r=>r.estado===filter);
  document.getElementById("crmBody").innerHTML = rows.map(r=>`
    <tr class="crm-row" data-estado="${r.estado}">
      <td class="crm-titulo">${r.titulo}</td>
      <td><span class="crm-red" style="background:${RED_COLORS[r.red]}20;color:${RED_COLORS[r.red]}">${RED_ICONS[r.red]||r.red}</span></td>
      <td><span class="crm-estado crm-${r.estado}">${r.estado.charAt(0).toUpperCase()+r.estado.slice(1)}</span></td>
      <td class="crm-fecha">${r.fecha}</td>
      <td class="crm-interacciones">${r.interacciones !== null ? `<span class="crm-num">${r.interacciones.toLocaleString("es-AR")}</span>` : '<span style="color:#94a3b8">—</span>'}</td>
    </tr>`).join("");
}

function filterCRM(filter, btn) {
  document.querySelectorAll(".mkt-filter").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  renderCRM(filter);
}

// Calendario
const CAL_COLORS = { instagram:"#e1306c", facebook:"#1877f2", linkedin:"#0a66c2", whatsapp:"#25d366" };
const CAL_ESTADO_CLS = { enviado:"cal-enviado", pendiente:"cal-pendiente", reprogramado:"cal-reprog" };

function renderCalendar() {
  document.getElementById("mktCalendar").innerHTML = MOCK.calendario.map(dia=>`
    <div class="cal-col">
      <div class="cal-day-header">${dia.dia}</div>
      <div class="cal-day-posts">
        ${dia.posts.length === 0
          ? `<div class="cal-empty">—</div>`
          : dia.posts.map(p=>`
            <div class="cal-post ${CAL_ESTADO_CLS[p.estado]||''}">
              <div class="cal-post-dot" style="background:${CAL_COLORS[p.tipo]||'#64748b'}"></div>
              <div class="cal-post-title">${p.titulo}</div>
            </div>`).join("")
        }
      </div>
    </div>`).join("");
}

// Próximas publicaciones
const RED_LABELS = { instagram:"Instagram", facebook:"Facebook", linkedin:"LinkedIn", whatsapp:"WhatsApp" };
const UPC_ESTADO_CLS = { pendiente:"upc-pendiente", reprogramado:"upc-reprog" };

function renderUpcoming() {
  document.getElementById("mktUpcoming").innerHTML = MOCK.upcoming.map(u=>`
    <div class="upc-item">
      <div class="upc-red" style="color:${RED_COLORS[u.red]||'#64748b'}">${RED_ICONS[u.red]||u.red}</div>
      <div class="upc-body">
        <div class="upc-titulo">${u.titulo}</div>
        <div class="upc-fecha">${u.fecha}</div>
      </div>
      <span class="upc-badge ${UPC_ESTADO_CLS[u.estado]||''}">${u.estado}</span>
    </div>`).join("");
}

// ── ANIMACIONES ─────────────────────────────────────────────────────────────────

function animateCounters(scope) {
  const els = (scope||document).querySelectorAll("[data-target]");
  els.forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || "";
    const duration = 900;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(ease * target);
      el.textContent = value.toLocaleString("es-AR") + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}
