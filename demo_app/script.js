// STEPFlow Demo — script.js V4
// 100% mock data. Sin conexiones reales.

// ── NICHO ──────────────────────────────────────────────────────────────────────
const _params = new URLSearchParams(window.location.search);
const _nicho  = (_params.get('nicho') || 'inmobiliaria').toLowerCase();

const NICHO_MAP = {
  agencia:'marketing', marketing:'marketing',
  restaurante:'restaurante', gastronomia:'restaurante',
  salon:'salon', belleza:'salon', peluqueria:'salon',
  clinica:'clinica', salud:'clinica', medico:'clinica',
  ecommerce:'ecommerce', tienda:'ecommerce',
  gym:'gym', gimnasio:'gym', fitness:'gym',
  inmobiliaria:'inmobiliaria',
  automotriz:'concesionaria', concesionaria:'concesionaria', autos:'concesionaria', vehiculos:'concesionaria',
};
const _key = NICHO_MAP[_nicho] || 'inmobiliaria';

// ── MOCK DATA POR NICHO ────────────────────────────────────────────────────────

const ALL_MOCK = {

  // ── MARKETING ──────────────────────────────────────────────────────────────
  marketing: {
    empresa: 'Agencia Digital Impulso', sector: 'Marketing · Buenos Aires',
    metricas: { consultas_recibidas:61, contactadas_automaticamente:54, respondieron_con_interes:22, reuniones_confirmadas:9, operaciones_en_proceso:4 },
    pipeline: {
      "Consulta nueva":   [{ nombre:"Fernanda Ríos", tier:"A" }, { nombre:"Tomás Acosta", tier:"B" }],
      "Contactado":       [{ nombre:"Diego Salinas", tier:"A" }, { nombre:"Camila Ibáñez", tier:"B" }, { nombre:"Ramiro Vega", tier:"C" }],
      "Respondió":        [{ nombre:"Luciana Paredes", tier:"A" }, { nombre:"Sebastián Mora", tier:"A" }],
      "Interesado":       [{ nombre:"Valeria Cruz", tier:"A" }, { nombre:"Martín Reyes", tier:"B" }],
      "Reunión agendada": [{ nombre:"Claudia Stein", tier:"A" }],
      "Cerrado":          [{ nombre:"Pablo Ojeda", tier:"A" }],
    },
    leads: [
      { nombre:"Fernanda Ríos",    canal:"Instagram",  interes:"Gestión de redes para consultora de RRHH", ciudad:"Buenos Aires", temperatura:"caliente", estado:"Respondió con interés",  siguiente_accion:"Enviar propuesta de redes esta semana" },
      { nombre:"Tomás Acosta",     canal:"WhatsApp",   interes:"Campaña de ads para lanzar su e-commerce", ciudad:"Córdoba",       temperatura:"caliente", estado:"Reunión agendada",       siguiente_accion:"Demo del sistema — miércoles 15hs" },
      { nombre:"Diego Salinas",    canal:"Instagram",  interes:"Contenido mensual para marca de indumentaria",ciudad:"Rosario",    temperatura:"caliente", estado:"Interesado",             siguiente_accion:"Llamar para cerrar plan mensual" },
      { nombre:"Camila Ibáñez",    canal:"WhatsApp",   interes:"SEO y manejo de Google Ads",               ciudad:"Buenos Aires", temperatura:"tibio",    estado:"Contactada",             siguiente_accion:"Follow-up automático en 48 hs" },
      { nombre:"Ramiro Vega",      canal:"Facebook",   interes:"Diseño gráfico y branding completo",       ciudad:"Mendoza",      temperatura:"tibio",    estado:"En seguimiento",         siguiente_accion:"Segundo mensaje programado" },
      { nombre:"Nicolás Flores",   canal:"Instagram",  interes:"Quiere más info pero no respondió",        ciudad:"Tucumán",      temperatura:"frio",     estado:"Sin respuesta",          siguiente_accion:"Reintento automático mañana" },
    ],
    actividad: [
      { tipo:"mensaje_enviado",       texto:"StepFlow respondió a Fernanda Ríos en 2 minutos desde Instagram",         tiempo:"Hace 6 min" },
      { tipo:"respuesta_recibida",    texto:"Tomás Acosta confirmó reunión: 'El miércoles a las 15 perfecto'",         tiempo:"Hace 22 min" },
      { tipo:"reunion_agendada",      texto:"Demo agendada con Claudia Stein — jueves 11:00 hs",                       tiempo:"Hace 1 hora" },
      { tipo:"seguimiento_pendiente", texto:"Seguimiento programado para Martín Reyes en 48 hs",                       tiempo:"Hace 2 horas" },
      { tipo:"cierre",                texto:"Pablo Ojeda firmó contrato mensual. Plan Redes + Ads cerrado.",            tiempo:"Hace 4 horas" },
      { tipo:"mensaje_enviado",       texto:"Segundo seguimiento enviado a Nicolás Flores — sin respuesta previa",     tiempo:"Hace 6 horas" },
    ],
    pasos: [
      { titulo:"Consulta entra",          descripcion:"Llega desde Instagram, WhatsApp o Facebook Ads. StepFlow responde en menos de 3 minutos." },
      { titulo:"Calificación automática", descripcion:"El sistema detecta si busca redes, ads, contenido o branding, y prioriza según urgencia." },
      { titulo:"Seguimiento sin olvidos", descripcion:"Si el prospecto no responde, StepFlow hace follow-up en el momento justo. Sin perder ningún lead." },
      { titulo:"Vos cerrás el contrato",  descripcion:"Solo aparecés cuando el cliente está calificado y listo para hablar de propuesta y precios." },
    ],
    chatChips: ["¿Qué servicios ofrecen?","¿Cuánto cuesta el plan mensual?","¿Hacen ads en Google?","¿Tienen portfolio?"],
    guion: [
      { from:"lead",  text:"Hola! Vi su perfil en Instagram, busco alguien que me maneje las redes de mi negocio", delay:800 },
      { from:"agent", text:"Hola! Qué bien que escribiste. Claro que sí, eso es justo lo que hacemos. De qué rubro es tu negocio?", delay:2200 },
      { from:"lead",  text:"Tengo una clínica estética, quiero crecer en instagram", delay:4000 },
      { from:"agent", text:"Perfecto, estética tiene muy buen potencial en IG. Te armo una propuesta con contenido + ads. Te mando info?", delay:5600 },
      { from:"lead",  text:"sí dale, me interesa saber precios también", delay:7200 },
      { from:"agent", text:"Te mando todo ahora. Y si querés te hago una reunión rápida para mostrarte resultados de clientes similares.", delay:8600 },
    ],
    responses: {
      precio:    "Tenemos planes desde $150.000/mes según la cantidad de redes y servicios incluidos. Te paso el detalle completo ahora.",
      servicio:  "Hacemos gestión de redes, diseño de contenido, campañas de ads en Meta y Google, y branding completo. ¿Qué necesitás?",
      reunion:   "Claro, puedo agendarte una reunión esta semana para mostrarte resultados reales y hacerte una propuesta personalizada.",
      horario:   "Atendemos de lunes a viernes de 9 a 18 hs. También podemos coordinar reunión por Zoom si preferís.",
      portfolio:  "Sí, tenemos portfolio con casos de éxito en distintos rubros. Te lo mando ahora mismo por este canal.",
      default:   ["Recibimos tu consulta. Te respondo en breve con toda la info.", "Anotamos tu consulta. ¿Hay algo específico que quieras saber?", "Gracias por escribirnos. Un asesor te contacta enseguida."],
    },
    crm: [
      { titulo:"Caso de éxito — clínica estética",        red:"instagram",  estado:"publicado",    fecha:"15 Mar",  interacciones:341 },
      { titulo:"Resultados de campaña Meta Ads",           red:"facebook",   estado:"publicado",    fecha:"14 Mar",  interacciones:198 },
      { titulo:"Tips para crecer en Instagram en 2026",    red:"instagram",  estado:"publicado",    fecha:"13 Mar",  interacciones:512 },
      { titulo:"Antes y después: cliente ecommerce",       red:"instagram",  estado:"publicado",    fecha:"12 Mar",  interacciones:287 },
      { titulo:"Cómo elegir tu agencia de marketing",      red:"linkedin",   estado:"publicado",    fecha:"11 Mar",  interacciones:143 },
      { titulo:"¿Cuánto cuesta hacer publicidad online?",  red:"facebook",   estado:"publicado",    fecha:"10 Mar",  interacciones:376 },
      { titulo:"Nuevo caso de éxito — restaurante",        red:"instagram",  estado:"pendiente",    fecha:"21 Mar",  interacciones:null },
      { titulo:"Guía de contenido para pymes",             red:"linkedin",   estado:"pendiente",    fecha:"22 Mar",  interacciones:null },
      { titulo:"Errores comunes en redes sociales",        red:"facebook",   estado:"reprogramado", fecha:"23 Mar",  interacciones:null },
      { titulo:"Campaña de Pascua — clientes activos",     red:"instagram",  estado:"pendiente",    fecha:"24 Mar",  interacciones:null },
    ],
    chartSemanal: { dias:["Lun 14","Mar 15","Mié 16","Jue 17","Vie 18","Sáb 19","Dom 20"], ig:[310,275,498,340,410,220,88], fb:[72,61,95,80,88,55,22] },
    calendario: [
      { dia:"Lun 18", posts:[] },
      { dia:"Mar 19", posts:[{ titulo:"Follow-up Tomás Acosta", tipo:"whatsapp", estado:"enviado" }] },
      { dia:"Mié 20", posts:[{ titulo:"Caso éxito estética", tipo:"instagram", estado:"enviado" }, { titulo:"Seguimiento Camila", tipo:"whatsapp", estado:"enviado" }] },
      { dia:"Jue 21", posts:[{ titulo:"Guía de contenido pymes", tipo:"linkedin", estado:"pendiente" }] },
      { dia:"Vie 22", posts:[{ titulo:"Errores en redes", tipo:"facebook", estado:"reprogramado" }] },
      { dia:"Sáb 23", posts:[{ titulo:"Campaña Pascua", tipo:"instagram", estado:"pendiente" }] },
      { dia:"Dom 24", posts:[] },
    ],
    upcoming: [
      { titulo:"Caso éxito restaurante",    red:"instagram", fecha:"Mañana · 10:00", estado:"pendiente"   },
      { titulo:"Guía contenido pymes",      red:"linkedin",  fecha:"Mié · 12:00",   estado:"pendiente"   },
      { titulo:"Errores en redes",          red:"facebook",  fecha:"Jue · 09:00",   estado:"reprogramado" },
      { titulo:"Campaña de Pascua",         red:"instagram", fecha:"Vie · 11:00",   estado:"pendiente"   },
    ],
  },

  // ── RESTAURANTE ────────────────────────────────────────────────────────────
  restaurante: {
    empresa: 'Restaurante La Esquina', sector: 'Gastronomía · Palermo',
    metricas: { consultas_recibidas:83, contactadas_automaticamente:79, respondieron_con_interes:41, reuniones_confirmadas:28, operaciones_en_proceso:12 },
    pipeline: {
      "Consulta nueva":    [{ nombre:"Sofía Mendez", tier:"A" }, { nombre:"Ariel Gómez", tier:"B" }],
      "Contactado":        [{ nombre:"Natalia Ríos", tier:"A" }, { nombre:"Esteban Cano", tier:"B" }, { nombre:"Laura Prieto", tier:"C" }],
      "Respondió":         [{ nombre:"Gabriel Torres", tier:"A" }, { nombre:"Verónica Lima", tier:"A" }],
      "Interesado":        [{ nombre:"Hernán Quiroga", tier:"A" }, { nombre:"Cecilia Bravo", tier:"B" }],
      "Reserva confirmada":[{ nombre:"Rodrigo Salas", tier:"A" }],
      "Mesa cerrada":      [{ nombre:"Marcela Font", tier:"A" }],
    },
    leads: [
      { nombre:"Sofía Mendez",    canal:"Instagram",  interes:"Reserva para cumpleaños — sábado 12 personas", ciudad:"Buenos Aires", temperatura:"caliente", estado:"Respondió con interés",  siguiente_accion:"Confirmar menú y señar esta semana" },
      { nombre:"Ariel Gómez",     canal:"WhatsApp",   interes:"Consulta carta vegana y precios por persona",  ciudad:"Palermo",       temperatura:"caliente", estado:"Reserva confirmada",      siguiente_accion:"Confirmar detalles — viernes 20hs" },
      { nombre:"Natalia Ríos",    canal:"WhatsApp",   interes:"Evento corporativo — 40 personas",             ciudad:"Buenos Aires", temperatura:"caliente", estado:"Interesado",             siguiente_accion:"Enviar propuesta de menú corporativo" },
      { nombre:"Esteban Cano",    canal:"Facebook",   interes:"Reserva romántica para 2 — aniversario",      ciudad:"Palermo",      temperatura:"tibio",    estado:"Contactado",             siguiente_accion:"Follow-up automático en 24 hs" },
      { nombre:"Laura Prieto",    canal:"Instagram",  interes:"Preguntó horario y carta — no respondió más", ciudad:"Buenos Aires", temperatura:"tibio",    estado:"En seguimiento",         siguiente_accion:"Segundo mensaje programado" },
      { nombre:"Omar Castillo",   canal:"WhatsApp",   interes:"Consultó delivery — sin respuesta",           ciudad:"Villa Crespo", temperatura:"frio",     estado:"Sin respuesta",          siguiente_accion:"Reintento automático mañana" },
    ],
    actividad: [
      { tipo:"mensaje_enviado",       texto:"StepFlow confirmó reserva de Sofía Mendez en 90 segundos desde Instagram",  tiempo:"Hace 3 min" },
      { tipo:"respuesta_recibida",    texto:"Ariel Gómez confirmó: 'Perfecto, reservamos para el viernes a las 20'",     tiempo:"Hace 15 min" },
      { tipo:"reunion_agendada",      texto:"Evento corporativo de Natalia Ríos — propuesta enviada, esperando ok",       tiempo:"Hace 45 min" },
      { tipo:"seguimiento_pendiente", texto:"Seguimiento automático programado para Esteban Cano en 24 hs",               tiempo:"Hace 2 horas" },
      { tipo:"cierre",                texto:"Marcela Font completó su cena. Mesa con ticket promedio $48.000.",            tiempo:"Hace 3 horas" },
      { tipo:"mensaje_enviado",       texto:"Mensaje de reactivación enviado a Omar Castillo — sin respuesta previa",     tiempo:"Hace 5 horas" },
    ],
    pasos: [
      { titulo:"Consulta entra",          descripcion:"Llega desde WhatsApp, Instagram o Facebook. StepFlow responde en segundos con disponibilidad y carta." },
      { titulo:"Reserva automática",      descripcion:"El sistema toma los datos del cliente, confirma fecha y hora, y envía recordatorio automático 2 hs antes." },
      { titulo:"Seguimiento y reactivación", descripcion:"Si no confirman, StepFlow hace follow-up. Si cancelan, intenta reubicarlos en otra fecha." },
      { titulo:"Vos solo atendés la mesa", descripcion:"El restaurante funciona sin estar pegado al teléfono. Tu equipo enfocado en la experiencia gastronómica." },
    ],
    chatChips: ["¿Tienen mesa para esta noche?","¿Cuál es el menú?","¿Hacen eventos?","¿Tienen menú vegano?"],
    guion: [
      { from:"lead",  text:"Hola! Tienen mesa disponible para el sábado a las 21 para 4 personas?", delay:800 },
      { from:"agent", text:"Hola! Sí, tenemos disponibilidad el sábado a las 21. Te la reservo con tu nombre?", delay:2100 },
      { from:"lead",  text:"Sí dale, a nombre de Martínez", delay:3800 },
      { from:"agent", text:"Listo, mesa para 4 el sábado a las 21 a nombre de Martínez. Te mando confirmación por acá.", delay:5200 },
      { from:"lead",  text:"Perfecto gracias! Tienen menú sin TACC?", delay:6800 },
      { from:"agent", text:"Sí, tenemos varias opciones sin TACC. Te mando la carta completa ahora mismo.", delay:8100 },
    ],
    responses: {
      precio:    "Nuestro menú de pasos tiene opciones desde $18.000 por persona. La carta completa te la mando ahora.",
      reserva:   "Claro, te reservo la mesa. Dame tu nombre, el día, hora y cantidad de personas y lo confirmo enseguida.",
      horario:   "Abrimos de martes a domingo: almuerzo de 12 a 15:30 y cena de 20 a 00:30 hs.",
      evento:    "Sí hacemos eventos corporativos y celebraciones privadas. Dame más detalles y te armo una propuesta.",
      tacc:      "Sí, tenemos opciones sin TACC en platos principales y postres. Te comparto la carta completa.",
      default:   ["Anotamos tu consulta. Un instante y te respondemos.", "Gracias por escribirnos. Te confirmamos en segundos.", "Recibimos tu mensaje. Qué más necesitás saber?"],
    },
    crm: [
      { titulo:"Nueva carta de otoño 2026",             red:"instagram",  estado:"publicado",    fecha:"15 Mar",  interacciones:892 },
      { titulo:"Noche de vinos — jueves especial",       red:"facebook",   estado:"publicado",    fecha:"14 Mar",  interacciones:445 },
      { titulo:"El plato del chef esta semana",          red:"instagram",  estado:"publicado",    fecha:"13 Mar",  interacciones:634 },
      { titulo:"Reservá tu mesa para Pascua",            red:"instagram",  estado:"publicado",    fecha:"12 Mar",  interacciones:1120 },
      { titulo:"Menú para grupos — eventos privados",    red:"facebook",   estado:"publicado",    fecha:"11 Mar",  interacciones:287 },
      { titulo:"Reseña 5 estrellas — Google",           red:"instagram",  estado:"publicado",    fecha:"10 Mar",  interacciones:503 },
      { titulo:"Menú de Semana Santa",                  red:"instagram",  estado:"pendiente",    fecha:"21 Mar",  interacciones:null },
      { titulo:"Tarde de brunch — sábados",             red:"facebook",   estado:"pendiente",    fecha:"22 Mar",  interacciones:null },
      { titulo:"Especial aniversario — mesa romántica", red:"instagram",  estado:"reprogramado", fecha:"23 Mar",  interacciones:null },
    ],
    chartSemanal: { dias:["Lun 14","Mar 15","Mié 16","Jue 17","Vie 18","Sáb 19","Dom 20"], ig:[420,390,610,480,820,950,380], fb:[95,88,120,105,180,210,75] },
    calendario: [
      { dia:"Lun 18", posts:[] },
      { dia:"Mar 19", posts:[{ titulo:"Recordatorio reservas", tipo:"whatsapp", estado:"enviado" }] },
      { dia:"Mié 20", posts:[{ titulo:"Plato del chef", tipo:"instagram", estado:"enviado" }, { titulo:"Noche de vinos", tipo:"facebook", estado:"enviado" }] },
      { dia:"Jue 21", posts:[{ titulo:"Menú Semana Santa", tipo:"instagram", estado:"pendiente" }] },
      { dia:"Vie 22", posts:[{ titulo:"Brunch sábados", tipo:"facebook", estado:"pendiente" }] },
      { dia:"Sáb 23", posts:[{ titulo:"Mesa romántica aniversario", tipo:"instagram", estado:"reprogramado" }] },
      { dia:"Dom 24", posts:[] },
    ],
    upcoming: [
      { titulo:"Menú Semana Santa",       red:"instagram", fecha:"Mañana · 11:00", estado:"pendiente"   },
      { titulo:"Brunch de sábados",       red:"facebook",  fecha:"Vie · 10:00",   estado:"pendiente"   },
      { titulo:"Mesa romántica",          red:"instagram", fecha:"Sáb · 12:00",   estado:"reprogramado" },
    ],
  },

  // ── SALÓN DE BELLEZA ───────────────────────────────────────────────────────
  salon: {
    empresa: 'Salón Estilo & Co.', sector: 'Belleza · Caballito',
    metricas: { consultas_recibidas:74, contactadas_automaticamente:71, respondieron_con_interes:48, reuniones_confirmadas:35, operaciones_en_proceso:18 },
    pipeline: {
      "Consulta nueva":   [{ nombre:"Valentina Suárez", tier:"A" }, { nombre:"Rocío Paredes", tier:"B" }],
      "Contactado":       [{ nombre:"Florencia Medina", tier:"A" }, { nombre:"Daniela Ríos", tier:"B" }, { nombre:"Milagros Ponce", tier:"C" }],
      "Respondió":        [{ nombre:"Tamara Gómez", tier:"A" }, { nombre:"Paola Ferreira", tier:"A" }],
      "Interesado":       [{ nombre:"Agustina Reyes", tier:"A" }, { nombre:"Lorena Ibáñez", tier:"B" }],
      "Turno confirmado": [{ nombre:"Carla Romero", tier:"A" }],
      "Clienta fiel":     [{ nombre:"Jessica Blanco", tier:"A" }],
    },
    leads: [
      { nombre:"Valentina Suárez",  canal:"Instagram",  interes:"Keratina + corte, pregunta precio y disponibilidad", ciudad:"Caballito",    temperatura:"caliente", estado:"Respondió con interés",  siguiente_accion:"Confirmar turno para el jueves" },
      { nombre:"Rocío Paredes",     canal:"WhatsApp",   interes:"Quiere hacerse mechas californianas",                ciudad:"Flores",       temperatura:"caliente", estado:"Turno confirmado",        siguiente_accion:"Turno viernes 15:00 — recordatorio enviado" },
      { nombre:"Florencia Medina",  canal:"Instagram",  interes:"Consulta por tratamiento capilar intensivo",         ciudad:"Caballito",    temperatura:"caliente", estado:"Interesado",             siguiente_accion:"Enviar info de tratamiento y precio" },
      { nombre:"Daniela Ríos",      canal:"WhatsApp",   interes:"Quiere cotizar novias — se casa en mayo",            ciudad:"Buenos Aires", temperatura:"tibio",    estado:"Contactada",             siguiente_accion:"Follow-up automático en 24 hs" },
      { nombre:"Milagros Ponce",    canal:"Facebook",   interes:"Consulta manicura y pedicura — sin respuesta",      ciudad:"Almagro",      temperatura:"tibio",    estado:"En seguimiento",         siguiente_accion:"Segundo mensaje programado" },
      { nombre:"Sonia Vera",        canal:"Instagram",  interes:"Preguntó colores disponibles — no volvió a escribir",ciudad:"Villa del Parque",temperatura:"frio",  estado:"Sin respuesta",          siguiente_accion:"Reintento automático mañana" },
    ],
    actividad: [
      { tipo:"mensaje_enviado",       texto:"StepFlow respondió a Valentina Suárez en 2 minutos con precios y disponibilidad",  tiempo:"Hace 5 min" },
      { tipo:"respuesta_recibida",    texto:"Rocío Paredes confirmó turno: 'El viernes a las 15 perfecto!'",                   tiempo:"Hace 20 min" },
      { tipo:"reunion_agendada",      texto:"Cotización de novia enviada a Daniela Ríos — aguardando respuesta",               tiempo:"Hace 1 hora" },
      { tipo:"seguimiento_pendiente", texto:"Seguimiento automático para Lorena Ibáñez programado en 24 hs",                   tiempo:"Hace 2 horas" },
      { tipo:"cierre",                texto:"Jessica Blanco — su 12va visita este año. Clienta fiel recurrente.",              tiempo:"Hace 3 horas" },
      { tipo:"mensaje_enviado",       texto:"Mensaje de reactivación a Sonia Vera — 10 días sin respuesta",                    tiempo:"Hace 6 horas" },
    ],
    pasos: [
      { titulo:"Consulta entra",          descripcion:"Llega desde Instagram o WhatsApp. StepFlow responde al instante con disponibilidad y precios." },
      { titulo:"Turno automático",        descripcion:"El sistema confirma el turno, envía recordatorio 2 horas antes y avisa si hay cancelación." },
      { titulo:"Seguimiento y fidelización", descripcion:"Después de cada visita, StepFlow saluda y propone el próximo turno. Clientes que vuelven solos." },
      { titulo:"Vos solo atendés",         descripcion:"Sin interrupciones en medio de un servicio. El salón lleno, vos enfocada en tu trabajo." },
    ],
    chatChips: ["¿Cuánto sale la keratina?","¿Tienen turnos esta semana?","¿Hacen novias?","¿Qué tratamientos tienen?"],
    guion: [
      { from:"lead",  text:"Hola! Quiero saber cuánto sale una keratina y si tienen turno esta semana", delay:800 },
      { from:"agent", text:"Hola! La keratina sale $35.000 según el largo. Tenemos disponible el miércoles y el viernes. Cuál te queda mejor?", delay:2200 },
      { from:"lead",  text:"El viernes, a qué hora?", delay:3900 },
      { from:"agent", text:"El viernes tenemos a las 10, 14 o 16 hs. Cuál preferís?", delay:5300 },
      { from:"lead",  text:"A las 14 perfecto!", delay:6800 },
      { from:"agent", text:"Listo! Reservamos el viernes a las 14 a tu nombre. Te mando recordatorio el día anterior.", delay:8100 },
    ],
    responses: {
      precio:    "Los precios varían según el servicio: keratina desde $35.000, mechas desde $28.000, corte desde $8.000. Te paso lista completa.",
      turno:     "Tenemos disponibilidad esta semana. Dame tu nombre y el servicio que querés y te digo los horarios disponibles.",
      novias:    "Sí, hacemos servicios para novias: peinado, maquillaje y tratamientos especiales. Te mando el pack de servicios ahora.",
      horario:   "Atendemos de lunes a sábado de 9 a 20 hs. Los domingos tenemos turno solo con reserva previa.",
      default:   ["Recibimos tu consulta. Te respondemos en segundos.", "Anotamos tu consulta. Qué servicio te interesa?", "Gracias por escribirnos. Un momento y te ayudamos."],
    },
    crm: [
      { titulo:"Antes y después — mechas californianas", red:"instagram",  estado:"publicado",    fecha:"15 Mar",  interacciones:1243 },
      { titulo:"Keratina resultado 30 días después",     red:"instagram",  estado:"publicado",    fecha:"14 Mar",  interacciones:876 },
      { titulo:"Pack de novia — reservá tu fecha",       red:"facebook",   estado:"publicado",    fecha:"13 Mar",  interacciones:592 },
      { titulo:"Tips para cuidar el cabello en casa",    red:"instagram",  estado:"publicado",    fecha:"12 Mar",  interacciones:741 },
      { titulo:"Colores tendencia otoño 2026",           red:"instagram",  estado:"publicado",    fecha:"11 Mar",  interacciones:1089 },
      { titulo:"Reseña cliente — Valentina",             red:"facebook",   estado:"publicado",    fecha:"10 Mar",  interacciones:334 },
      { titulo:"Promo de abril — keratina + corte",      red:"instagram",  estado:"pendiente",    fecha:"21 Mar",  interacciones:null },
      { titulo:"Tutorial peinado en casa",               red:"instagram",  estado:"pendiente",    fecha:"22 Mar",  interacciones:null },
      { titulo:"Lanzamiento — manicura gel nueva",       red:"facebook",   estado:"reprogramado", fecha:"23 Mar",  interacciones:null },
    ],
    chartSemanal: { dias:["Lun 14","Mar 15","Mié 16","Jue 17","Vie 18","Sáb 19","Dom 20"], ig:[580,620,890,710,940,1100,290], fb:[120,98,145,130,175,200,55] },
    calendario: [
      { dia:"Lun 18", posts:[] },
      { dia:"Mar 19", posts:[{ titulo:"Recordatorio turnos", tipo:"whatsapp", estado:"enviado" }] },
      { dia:"Mié 20", posts:[{ titulo:"Antes y después keratina", tipo:"instagram", estado:"enviado" }] },
      { dia:"Jue 21", posts:[{ titulo:"Promo abril", tipo:"instagram", estado:"pendiente" }] },
      { dia:"Vie 22", posts:[{ titulo:"Tutorial peinado", tipo:"instagram", estado:"pendiente" }, { titulo:"Manicura gel", tipo:"facebook", estado:"reprogramado" }] },
      { dia:"Sáb 23", posts:[] },
      { dia:"Dom 24", posts:[] },
    ],
    upcoming: [
      { titulo:"Promo abril keratina",    red:"instagram", fecha:"Mañana · 10:00", estado:"pendiente"   },
      { titulo:"Tutorial peinado",        red:"instagram", fecha:"Vie · 11:00",   estado:"pendiente"   },
      { titulo:"Manicura gel nueva",      red:"facebook",  fecha:"Vie · 14:00",   estado:"reprogramado" },
    ],
  },

  // ── CLÍNICA ────────────────────────────────────────────────────────────────
  clinica: {
    empresa: 'Centro Médico Norte', sector: 'Salud · Belgrano',
    metricas: { consultas_recibidas:98, contactadas_automaticamente:95, respondieron_con_interes:67, reuniones_confirmadas:54, operaciones_en_proceso:21 },
    pipeline: {
      "Consulta nueva":    [{ nombre:"Roberto Paz", tier:"A" }, { nombre:"Liliana Ortiz", tier:"B" }],
      "Contactado":        [{ nombre:"Gustavo Mena", tier:"A" }, { nombre:"Sandra Ríos", tier:"B" }, { nombre:"Pablo Ruiz", tier:"C" }],
      "Respondió":         [{ nombre:"Claudia Vera", tier:"A" }, { nombre:"Mario Suárez", tier:"A" }],
      "Interesado":        [{ nombre:"Elena Castro", tier:"A" }, { nombre:"Jorge Ibarra", tier:"B" }],
      "Turno confirmado":  [{ nombre:"Marcela Rojas", tier:"A" }],
      "Paciente activo":   [{ nombre:"Héctor Blanco", tier:"A" }],
    },
    leads: [
      { nombre:"Roberto Paz",     canal:"WhatsApp",   interes:"Turno con clínico general — tiene fiebre hace 2 días", ciudad:"Belgrano",     temperatura:"caliente", estado:"Respondió con interés",  siguiente_accion:"Confirmar turno para hoy o mañana" },
      { nombre:"Liliana Ortiz",   canal:"Instagram",  interes:"Consulta kinesiología — dolor lumbar crónico",         ciudad:"Palermo",      temperatura:"caliente", estado:"Turno confirmado",        siguiente_accion:"Turno martes 10:00 — recordatorio enviado" },
      { nombre:"Gustavo Mena",    canal:"WhatsApp",   interes:"Chequeo médico completo — primera vez",                ciudad:"Belgrano",     temperatura:"caliente", estado:"Interesado",             siguiente_accion:"Enviar info de paquete chequeo completo" },
      { nombre:"Sandra Ríos",     canal:"Facebook",   interes:"Turno con nutricionista — quiere bajar de peso",       ciudad:"Núñez",        temperatura:"tibio",    estado:"Contactada",             siguiente_accion:"Follow-up automático en 24 hs" },
      { nombre:"Pablo Ruiz",      canal:"WhatsApp",   interes:"Consulta cardiología — sin cobertura médica",          ciudad:"Villa Urquiza", temperatura:"tibio",   estado:"En seguimiento",         siguiente_accion:"Enviar info de planes particulares" },
      { nombre:"Carmen Iglesias", canal:"Instagram",  interes:"Turno dermatología — no respondió",                   ciudad:"Colegiales",   temperatura:"frio",     estado:"Sin respuesta",          siguiente_accion:"Reintento automático mañana" },
    ],
    actividad: [
      { tipo:"mensaje_enviado",       texto:"StepFlow respondió a Roberto Paz con disponibilidad en menos de 1 minuto",   tiempo:"Hace 4 min" },
      { tipo:"respuesta_recibida",    texto:"Liliana Ortiz confirmó: 'El martes a las 10 perfecto, gracias!'",            tiempo:"Hace 18 min" },
      { tipo:"reunion_agendada",      texto:"Info paquete chequeo completo enviada a Gustavo Mena — aguarda respuesta",   tiempo:"Hace 50 min" },
      { tipo:"seguimiento_pendiente", texto:"Seguimiento automático para Jorge Ibarra programado en 24 hs",               tiempo:"Hace 2 horas" },
      { tipo:"cierre",                texto:"Héctor Blanco — 8vo turno este año. Paciente recurrente.",                   tiempo:"Hace 3 horas" },
      { tipo:"mensaje_enviado",       texto:"Recordatorio de turno enviado a Marcela Rojas — mañana a las 11",            tiempo:"Hace 4 horas" },
    ],
    pasos: [
      { titulo:"Consulta entra",          descripcion:"Llega desde WhatsApp, Instagram o el sitio web. StepFlow responde en segundos con disponibilidad de turnos." },
      { titulo:"Turno automático",        descripcion:"El sistema asigna turno según el médico solicitado, envía confirmación y recordatorio previo." },
      { titulo:"Seguimiento del paciente",descripcion:"Después de cada consulta, StepFlow hace follow-up y facilita la renovación de turno o derivación." },
      { titulo:"Vos solo atendés",        descripcion:"El centro médico organizado sin estar pegado al teléfono. Más tiempo para tus pacientes." },
    ],
    chatChips: ["¿Tienen turno hoy?","¿Cuánto cuesta la consulta?","¿Qué especialidades tienen?","¿Aceptan mi obra social?"],
    guion: [
      { from:"lead",  text:"Hola, necesito turno con un clínico lo antes posible, tengo fiebre desde ayer", delay:800 },
      { from:"agent", text:"Hola! Entendemos la urgencia. Tenemos turno hoy a las 16 o mañana a las 9. Cuál preferís?", delay:2100 },
      { from:"lead",  text:"hoy a las 16 perfecto", delay:3700 },
      { from:"agent", text:"Listo, reservamos turno hoy a las 16 con el Dr. Martínez. Traé tu DNI. Te mando la dirección.", delay:5100 },
      { from:"lead",  text:"Aceptan OSDE?", delay:6600 },
      { from:"agent", text:"Sí, trabajamos con OSDE, Swiss Medical, PAMI y más de 20 obras sociales. Traé el carnet.", delay:8000 },
    ],
    responses: {
      precio:    "La consulta particular cuesta $18.000. Con obra social puede tener cobertura. ¿Cuál es tu obra social?",
      turno:     "Dame tu nombre, la especialidad que necesitás y si tenés obra social, y te digo la disponibilidad ahora.",
      os:        "Trabajamos con OSDE, Swiss Medical, Medicus, PAMI, IOMA y más de 20 obras sociales. ¿Cuál tenés?",
      horario:   "Atendemos de lunes a viernes de 8 a 20 hs y sábados de 9 a 14 hs. Guardias telefónicas las 24 hs.",
      default:   ["Recibimos tu consulta. Te respondemos al instante.", "Anotamos tu mensaje. ¿Cuál es tu obra social?", "Gracias por escribirnos. Un momento y te ayudamos."],
    },
    crm: [
      { titulo:"Consejos para el invierno — salud respiratoria", red:"instagram",  estado:"publicado",    fecha:"15 Mar",  interacciones:723 },
      { titulo:"Chequeo médico completo — por qué hacerlo",      red:"facebook",   estado:"publicado",    fecha:"14 Mar",  interacciones:489 },
      { titulo:"Nutrición y hábitos: guía práctica",             red:"instagram",  estado:"publicado",    fecha:"13 Mar",  interacciones:612 },
      { titulo:"Kinesiología — cuándo consultar",                red:"facebook",   estado:"publicado",    fecha:"12 Mar",  interacciones:298 },
      { titulo:"Vacunas disponibles este otoño",                 red:"instagram",  estado:"publicado",    fecha:"11 Mar",  interacciones:841 },
      { titulo:"Testimonios de pacientes",                       red:"instagram",  estado:"publicado",    fecha:"10 Mar",  interacciones:534 },
      { titulo:"Semana de la salud — chequeo gratis",            red:"instagram",  estado:"pendiente",    fecha:"21 Mar",  interacciones:null },
      { titulo:"Tips para dormir mejor",                         red:"facebook",   estado:"pendiente",    fecha:"22 Mar",  interacciones:null },
    ],
    chartSemanal: { dias:["Lun 14","Mar 15","Mié 16","Jue 17","Vie 18","Sáb 19","Dom 20"], ig:[340,290,480,370,420,180,65], fb:[88,72,110,95,108,45,20] },
    calendario: [
      { dia:"Lun 18", posts:[] },
      { dia:"Mar 19", posts:[{ titulo:"Recordatorio turnos", tipo:"whatsapp", estado:"enviado" }] },
      { dia:"Mié 20", posts:[{ titulo:"Consejos de salud", tipo:"instagram", estado:"enviado" }] },
      { dia:"Jue 21", posts:[{ titulo:"Semana de la salud", tipo:"instagram", estado:"pendiente" }] },
      { dia:"Vie 22", posts:[{ titulo:"Tips para dormir", tipo:"facebook", estado:"pendiente" }] },
      { dia:"Sáb 23", posts:[] },
      { dia:"Dom 24", posts:[] },
    ],
    upcoming: [
      { titulo:"Semana de la salud",  red:"instagram", fecha:"Mañana · 09:00", estado:"pendiente" },
      { titulo:"Tips para dormir",    red:"facebook",  fecha:"Vie · 10:00",   estado:"pendiente" },
    ],
  },

  // ── E-COMMERCE ────────────────────────────────────────────────────────────
  ecommerce: {
    empresa: 'Tienda Moda AR', sector: 'E-commerce · Online',
    metricas: { consultas_recibidas:142, contactadas_automaticamente:139, respondieron_con_interes:87, reuniones_confirmadas:61, operaciones_en_proceso:34 },
    pipeline: {
      "Consulta nueva":    [{ nombre:"Betina Sosa", tier:"A" }, { nombre:"Ignacio Paz", tier:"B" }],
      "Contactado":        [{ nombre:"Marisol Acuña", tier:"A" }, { nombre:"Facundo Torres", tier:"B" }, { nombre:"Yanina Ruiz", tier:"C" }],
      "Respondió":         [{ nombre:"Pilar Gomez", tier:"A" }, { nombre:"Damián Ríos", tier:"A" }],
      "Interesado":        [{ nombre:"Carolina Vega", tier:"A" }, { nombre:"Lucas Peralta", tier:"B" }],
      "Comprando":         [{ nombre:"Agostina Díaz", tier:"A" }],
      "Compra cerrada":    [{ nombre:"Natalia Ruiz", tier:"A" }],
    },
    leads: [
      { nombre:"Betina Sosa",     canal:"Instagram",  interes:"Consulta talle y disponibilidad vestido negro ref 2034", ciudad:"Buenos Aires", temperatura:"caliente", estado:"Respondió con interés",  siguiente_accion:"Confirmar stock y enviar link de compra" },
      { nombre:"Ignacio Paz",     canal:"WhatsApp",   interes:"Quiere combo remeras — 3 x 2 del banner",               ciudad:"Córdoba",      temperatura:"caliente", estado:"Comprando",              siguiente_accion:"Enviar link de pago y coordinar envío" },
      { nombre:"Marisol Acuña",   canal:"Instagram",  interes:"Pregunta si hacen cambios y devoluciones",              ciudad:"Rosario",      temperatura:"caliente", estado:"Interesado",             siguiente_accion:"Explicar política y enviar catálogo" },
      { nombre:"Facundo Torres",  canal:"WhatsApp",   interes:"Quiere saber tiempos de entrega a interior",            ciudad:"Mendoza",      temperatura:"tibio",    estado:"Contactado",             siguiente_accion:"Follow-up automático en 24 hs" },
      { nombre:"Yanina Ruiz",     canal:"Facebook",   interes:"Consultó precio zapatillas pero no completó la compra", ciudad:"Tucumán",      temperatura:"tibio",    estado:"En seguimiento",         siguiente_accion:"Recordatorio de carrito abandonado" },
      { nombre:"Santiago Molina", canal:"Instagram",  interes:"Vio el reels pero no escribió más",                    ciudad:"Salta",        temperatura:"frio",     estado:"Sin respuesta",          siguiente_accion:"Reintento automático mañana" },
    ],
    actividad: [
      { tipo:"mensaje_enviado",       texto:"StepFlow respondió a Betina Sosa con disponibilidad de talle en 90 segundos",  tiempo:"Hace 3 min" },
      { tipo:"respuesta_recibida",    texto:"Ignacio Paz confirmó: 'Dale, quiero el combo. Cómo pago?'",                   tiempo:"Hace 12 min" },
      { tipo:"reunion_agendada",      texto:"Política de cambios explicada a Marisol — respondió que va a comprar",        tiempo:"Hace 40 min" },
      { tipo:"seguimiento_pendiente", texto:"Recordatorio de carrito abandonado enviado a Yanina Ruiz",                    tiempo:"Hace 1 hora" },
      { tipo:"cierre",                texto:"Natalia Ruiz completó compra por $74.000. Envío coordinado a Palermo.",       tiempo:"Hace 2 horas" },
      { tipo:"mensaje_enviado",       texto:"Reactivación enviada a Santiago Molina — 7 días sin respuesta",               tiempo:"Hace 5 horas" },
    ],
    pasos: [
      { titulo:"Consulta entra",          descripcion:"Llega desde Instagram, WhatsApp o Facebook Ads. StepFlow responde al instante con stock, talles y precios." },
      { titulo:"Asistencia de compra",    descripcion:"El sistema guía al cliente hasta el pago: talles, disponibilidad, métodos de pago y envíos." },
      { titulo:"Carrito abandonado",      descripcion:"Si no completan la compra, StepFlow envía recordatorio automático con el producto que vieron." },
      { titulo:"Vos solo enviás pedidos", descripcion:"Sin responder consultas manualmente. Tu tienda vende 24/7 aunque estés durmiendo." },
    ],
    chatChips: ["¿Tienen el talle L?","¿Cuánto tarda el envío?","¿Hacen cambios?","¿Cómo pago?"],
    guion: [
      { from:"lead",  text:"Hola! Tienen el vestido negro de la foto en talle M?", delay:800 },
      { from:"agent", text:"Hola! Sí, tenemos el vestido negro en talle M disponible. Querés que te reserve uno?", delay:2100 },
      { from:"lead",  text:"Sí! Cuánto cuesta y cómo pago?", delay:3700 },
      { from:"agent", text:"Sale $48.000. Podés pagar por MercadoPago, transferencia o tarjeta. Te mando el link ahora.", delay:5100 },
      { from:"lead",  text:"Y el envío a Rosario cuánto sale?", delay:6600 },
      { from:"agent", text:"El envío a Rosario son $3.800 y llega en 3-4 días hábiles. Con compras sobre $60.000 el envío es gratis!", delay:8100 },
    ],
    responses: {
      talle:   "Tenemos talles S, M, L y XL. Cuál necesitás? Te confirmo disponibilidad en segundos.",
      envio:   "Enviamos a todo el país. CABA y GBA en 24-48 hs. Interior del país en 3-5 días hábiles.",
      cambio:  "Sí, hacemos cambios dentro de los 30 días con el producto sin uso. El envío de vuelta es a cargo del cliente.",
      pago:    "Aceptamos MercadoPago, transferencia bancaria y todas las tarjetas. Hasta 6 cuotas sin interés.",
      default: ["Recibimos tu consulta. Te respondemos en segundos.", "Anotamos. Qué producto te interesa?", "Gracias por escribirnos. Un instante y te ayudamos."],
    },
    crm: [
      { titulo:"Nueva colección otoño 2026",               red:"instagram",  estado:"publicado",    fecha:"15 Mar",  interacciones:2140 },
      { titulo:"3 x 2 en remeras — solo por hoy",           red:"instagram",  estado:"publicado",    fecha:"14 Mar",  interacciones:3280 },
      { titulo:"Review clientas — vestidos de noche",       red:"instagram",  estado:"publicado",    fecha:"13 Mar",  interacciones:1876 },
      { titulo:"Guía de talles — cómo elegir el tuyo",      red:"facebook",   estado:"publicado",    fecha:"12 Mar",  interacciones:942 },
      { titulo:"Envíos gratis en compras desde $60.000",    red:"instagram",  estado:"publicado",    fecha:"11 Mar",  interacciones:4120 },
      { titulo:"Lookbook otoño — fotos del estudio",        red:"instagram",  estado:"publicado",    fecha:"10 Mar",  interacciones:1654 },
      { titulo:"Promo Semana Santa — 20% off",              red:"instagram",  estado:"pendiente",    fecha:"21 Mar",  interacciones:null },
      { titulo:"Nuevas zapatillas — llegaron!",             red:"instagram",  estado:"pendiente",    fecha:"22 Mar",  interacciones:null },
      { titulo:"Campaña retargeting — carritos abandonados",red:"facebook",   estado:"pendiente",    fecha:"23 Mar",  interacciones:null },
    ],
    chartSemanal: { dias:["Lun 14","Mar 15","Mié 16","Jue 17","Vie 18","Sáb 19","Dom 20"], ig:[890,1240,2100,1380,1920,2850,1100], fb:[210,280,420,310,390,580,220] },
    calendario: [
      { dia:"Lun 18", posts:[] },
      { dia:"Mar 19", posts:[{ titulo:"Reactivación carritos", tipo:"whatsapp", estado:"enviado" }] },
      { dia:"Mié 20", posts:[{ titulo:"Promo 3x2 remeras", tipo:"instagram", estado:"enviado" }] },
      { dia:"Jue 21", posts:[{ titulo:"Promo Semana Santa", tipo:"instagram", estado:"pendiente" }] },
      { dia:"Vie 22", posts:[{ titulo:"Nuevas zapatillas", tipo:"instagram", estado:"pendiente" }, { titulo:"Retargeting carritos", tipo:"facebook", estado:"pendiente" }] },
      { dia:"Sáb 23", posts:[] },
      { dia:"Dom 24", posts:[] },
    ],
    upcoming: [
      { titulo:"Promo Semana Santa",      red:"instagram", fecha:"Mañana · 10:00", estado:"pendiente" },
      { titulo:"Nuevas zapatillas",       red:"instagram", fecha:"Vie · 11:00",   estado:"pendiente" },
      { titulo:"Retargeting carritos",    red:"facebook",  fecha:"Vie · 13:00",   estado:"pendiente" },
    ],
  },

  // ── GIMNASIO ───────────────────────────────────────────────────────────────
  gym: {
    empresa: 'Gimnasio FitPro', sector: 'Fitness · Flores',
    metricas: { consultas_recibidas:56, contactadas_automaticamente:53, respondieron_con_interes:31, reuniones_confirmadas:22, operaciones_en_proceso:14 },
    pipeline: {
      "Consulta nueva":   [{ nombre:"Sebastián Ruiz", tier:"A" }, { nombre:"Micaela Ponce", tier:"B" }],
      "Contactado":       [{ nombre:"Leandro Torres", tier:"A" }, { nombre:"Celeste Medina", tier:"B" }, { nombre:"Ramiro Paz", tier:"C" }],
      "Respondió":        [{ nombre:"Agustín Díaz", tier:"A" }, { nombre:"Natalia Gómez", tier:"A" }],
      "Interesado":       [{ nombre:"Federico Leal", tier:"A" }, { nombre:"Romina Peña", tier:"B" }],
      "Prueba agendada":  [{ nombre:"Martín Vargas", tier:"A" }],
      "Socio activo":     [{ nombre:"Cecilia Ríos", tier:"A" }],
    },
    leads: [
      { nombre:"Sebastián Ruiz",  canal:"Instagram",  interes:"Consulta planes y precios para empezar a entrenar", ciudad:"Flores",       temperatura:"caliente", estado:"Respondió con interés",  siguiente_accion:"Invitar a clase de prueba esta semana" },
      { nombre:"Micaela Ponce",   canal:"WhatsApp",   interes:"Busca clases de spinning — quiere horarios",        ciudad:"Caballito",    temperatura:"caliente", estado:"Prueba agendada",         siguiente_accion:"Clase de prueba jueves 18:00" },
      { nombre:"Leandro Torres",  canal:"Instagram",  interes:"Quiere bajar de peso — consulta nutrición + gym",   ciudad:"Flores",       temperatura:"caliente", estado:"Interesado",             siguiente_accion:"Enviar plan integral gym + nutrición" },
      { nombre:"Celeste Medina",  canal:"WhatsApp",   interes:"Clases de funcional para principiantes",            ciudad:"Villa del Parque",temperatura:"tibio", estado:"Contactada",             siguiente_accion:"Follow-up automático en 24 hs" },
      { nombre:"Ramiro Paz",      canal:"Facebook",   interes:"Consulta pileta y zona de musculación",             ciudad:"Flores",       temperatura:"tibio",    estado:"En seguimiento",         siguiente_accion:"Segundo mensaje programado" },
      { nombre:"Daniela Cano",    canal:"Instagram",  interes:"Vio clase de yoga — no volvió a escribir",         ciudad:"Almagro",      temperatura:"frio",     estado:"Sin respuesta",          siguiente_accion:"Reintento automático mañana" },
    ],
    actividad: [
      { tipo:"mensaje_enviado",       texto:"StepFlow respondió a Sebastián Ruiz con planes y horarios en 2 minutos",     tiempo:"Hace 5 min" },
      { tipo:"respuesta_recibida",    texto:"Micaela Ponce confirmó: 'El jueves a las 18 estoy, anótenme!'",              tiempo:"Hace 24 min" },
      { tipo:"reunion_agendada",      texto:"Plan integral gym+nutrición enviado a Leandro Torres — interesado",          tiempo:"Hace 1 hora" },
      { tipo:"seguimiento_pendiente", texto:"Seguimiento automático para Romina Peña programado en 24 hs",                tiempo:"Hace 2 horas" },
      { tipo:"cierre",                texto:"Cecilia Ríos renovó cuota mensual. 14 meses como socia activa.",             tiempo:"Hace 3 horas" },
      { tipo:"mensaje_enviado",       texto:"Reactivación enviada a Daniela Cano — 8 días sin respuesta",                 tiempo:"Hace 6 horas" },
    ],
    pasos: [
      { titulo:"Consulta entra",          descripcion:"Llega desde Instagram o WhatsApp. StepFlow responde con horarios, precios y clases disponibles." },
      { titulo:"Clase de prueba",         descripcion:"El sistema agenda la clase de prueba, envía confirmación y recordatorio automático antes de la clase." },
      { titulo:"Seguimiento y renovación",descripcion:"Cuando el socio se acerca al vencimiento, StepFlow envía recordatorio y facilita la renovación." },
      { titulo:"Vos solo entrenás",       descripcion:"Sin interrupciones atendiendo consultas. El gimnasio lleno, vos enfocado en tus clases." },
    ],
    chatChips: ["¿Cuánto sale la cuota?","¿Tienen spinning?","¿Tienen clase de prueba?","¿Qué horarios tienen?"],
    guion: [
      { from:"lead",  text:"Hola! Quería saber cuánto sale la cuota mensual y qué actividades tienen", delay:800 },
      { from:"agent", text:"Hola! La cuota mensual sale $28.000 e incluye todas las actividades: musculación, funcional, spinning y yoga.", delay:2200 },
      { from:"lead",  text:"Qué horarios de spinning tienen?", delay:3900 },
      { from:"agent", text:"Spinning está: lunes y miércoles 7:00, 9:00 y 19:00 hs. Martes y jueves 18:30 y 20:00 hs. Querés reservar una clase?", delay:5500 },
      { from:"lead",  text:"Si! Puedo ir de prueba primero?", delay:7100 },
      { from:"agent", text:"Claro! La primera clase es gratis. ¿Cuándo te queda bien? Te reservo el lugar ahora.", delay:8500 },
    ],
    responses: {
      precio:   "La cuota mensual es $28.000 e incluye todas las actividades. También tenemos planes de 3 y 6 meses con descuento.",
      horario:  "Abrimos de lunes a viernes de 6:30 a 22 hs y sábados de 8 a 18 hs. Cada actividad tiene sus horarios específicos.",
      prueba:   "Sí, la primera clase es completamente gratis. Cuándo querés venir? Te reservo el lugar enseguida.",
      spinning: "Spinning hay lunes, miércoles y viernes a las 7:00, 9:00 y 19:00 hs. ¿Cuál horario te queda mejor?",
      default:  ["Recibimos tu consulta. Te respondemos en segundos.", "Anotamos. Qué actividad te interesa?", "Gracias por escribirnos. Un instante y te ayudamos."],
    },
    crm: [
      { titulo:"Resultados reales — 3 meses en FitPro",   red:"instagram",  estado:"publicado",    fecha:"15 Mar",  interacciones:1432 },
      { titulo:"Nueva clase de HIIT — cupos limitados",    red:"instagram",  estado:"publicado",    fecha:"14 Mar",  interacciones:876 },
      { titulo:"Spinning challenge — sumate este mes",     red:"facebook",   estado:"publicado",    fecha:"13 Mar",  interacciones:621 },
      { titulo:"Nutrición deportiva — tips básicos",       red:"instagram",  estado:"publicado",    fecha:"12 Mar",  interacciones:943 },
      { titulo:"Testimonios de socios — resultados reales",red:"instagram",  estado:"publicado",    fecha:"11 Mar",  interacciones:1287 },
      { titulo:"Promo primer mes — 50% off",               red:"facebook",   estado:"publicado",    fecha:"10 Mar",  interacciones:2140 },
      { titulo:"Semana de la salud — clases abiertas",     red:"instagram",  estado:"pendiente",    fecha:"21 Mar",  interacciones:null },
      { titulo:"Rutina en casa — sin excusas",             red:"instagram",  estado:"pendiente",    fecha:"22 Mar",  interacciones:null },
      { titulo:"Promo invierno — plan 3 meses",            red:"facebook",   estado:"reprogramado", fecha:"23 Mar",  interacciones:null },
    ],
    chartSemanal: { dias:["Lun 14","Mar 15","Mié 16","Jue 17","Vie 18","Sáb 19","Dom 20"], ig:[520,480,780,610,840,920,310], fb:[115,98,165,130,178,195,65] },
    calendario: [
      { dia:"Lun 18", posts:[] },
      { dia:"Mar 19", posts:[{ titulo:"Recordatorio vencimientos", tipo:"whatsapp", estado:"enviado" }] },
      { dia:"Mié 20", posts:[{ titulo:"Resultados socios", tipo:"instagram", estado:"enviado" }] },
      { dia:"Jue 21", posts:[{ titulo:"Semana de la salud", tipo:"instagram", estado:"pendiente" }] },
      { dia:"Vie 22", posts:[{ titulo:"Rutina en casa", tipo:"instagram", estado:"pendiente" }, { titulo:"Promo invierno", tipo:"facebook", estado:"reprogramado" }] },
      { dia:"Sáb 23", posts:[] },
      { dia:"Dom 24", posts:[] },
    ],
    upcoming: [
      { titulo:"Semana de la salud",  red:"instagram", fecha:"Mañana · 10:00", estado:"pendiente"   },
      { titulo:"Rutina en casa",      red:"instagram", fecha:"Vie · 11:00",   estado:"pendiente"   },
      { titulo:"Promo invierno",      red:"facebook",  fecha:"Vie · 14:00",   estado:"reprogramado" },
    ],
  },

  // ── INMOBILIARIA (default) ─────────────────────────────────────────────────
  inmobiliaria: {
    empresa: 'Inmobiliaria Del Sur', sector: 'Inmobiliaria · Buenos Aires',
    metricas: { consultas_recibidas:47, contactadas_automaticamente:38, respondieron_con_interes:14, reuniones_confirmadas:6, operaciones_en_proceso:3 },
    pipeline: {
      "Consulta nueva":   [{ nombre:"Roberto Sosa", tier:"A" }, { nombre:"Valeria Ruiz", tier:"B" }],
      "Contactado":       [{ nombre:"Gustavo Pérez", tier:"A" }, { nombre:"Marina Cano", tier:"B" }, { nombre:"Luis Herrera", tier:"C" }],
      "Respondió":        [{ nombre:"Patricia Vidal", tier:"A" }, { nombre:"Carlos Méndez", tier:"A" }],
      "Interesado":       [{ nombre:"Ana Romero", tier:"A" }, { nombre:"Fernando Gil", tier:"B" }],
      "Visita agendada":  [{ nombre:"Silvia Torres", tier:"A" }],
      "Operación cerrada":[{ nombre:"Jorge Blanco", tier:"A" }],
    },
    leads: [
      { nombre:"Marta González",  canal:"WhatsApp",  interes:"Depto 2 amb en Palermo",          ciudad:"Buenos Aires",  temperatura:"caliente", estado:"Respondió con interés",  siguiente_accion:"Proponer visita esta semana" },
      { nombre:"Lucas Pereyra",   canal:"Zonaprop",  interes:"Casa zona norte, presupuesto alto",ciudad:"San Isidro",    temperatura:"caliente", estado:"Visita agendada",         siguiente_accion:"Confirmar visita — martes 11hs" },
      { nombre:"Javier Núñez",    canal:"WhatsApp",  interes:"PH con jardín en Belgrano",       ciudad:"Buenos Aires",  temperatura:"caliente", estado:"Interesado",             siguiente_accion:"Enviar tasación y proponer visita" },
      { nombre:"Sandra Vásquez",  canal:"Argenprop", interes:"Inversora — evalúa 2 propiedades",ciudad:"Córdoba",       temperatura:"tibio",    estado:"Contactada",             siguiente_accion:"Follow-up automático en 48 hs" },
      { nombre:"Diego Morales",   canal:"Instagram", interes:"Local comercial gastronómico",    ciudad:"Rosario",       temperatura:"tibio",    estado:"En seguimiento",         siguiente_accion:"Segundo mensaje programado" },
      { nombre:"Romina Farías",   canal:"Zonaprop",  interes:"Alquiler temporario — sin resp.", ciudad:"Mendoza",       temperatura:"frio",     estado:"Sin respuesta",          siguiente_accion:"Reintento automático mañana" },
    ],
    actividad: [
      { tipo:"mensaje_enviado",       texto:"StepFlow respondió la consulta de Roberto Sosa en 3 minutos",          tiempo:"Hace 4 min" },
      { tipo:"respuesta_recibida",    texto:"Patricia Vidal respondió: '¿Cuándo podemos ver la propiedad?'",        tiempo:"Hace 18 min" },
      { tipo:"reunion_agendada",      texto:"Visita confirmada con Silvia Torres — martes 10:00 hs",                tiempo:"Hace 1 hora" },
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
    chatChips: ["¿Tienen propiedades en Palermo?","¿Cuánto cuesta?","¿Tienen visita disponible?","¿Qué zonas manejan?"],
    guion: [
      { from:"lead",  text:"Hola, vi la propiedad en Zonaprop, sigue disponible?",              delay:800  },
      { from:"agent", text:"Hola! Sí, la propiedad sigue disponible. ¿Cuándo te vendría bien para coordinar una visita?", delay:2400 },
      { from:"lead",  text:"esta semana si pueden",                                              delay:4200 },
      { from:"agent", text:"Perfecto. ¿El martes a las 10 o el jueves a las 16, cuál preferís?",delay:5800 },
      { from:"lead",  text:"martes a las 10 perfecto!",                                          delay:7400 },
      { from:"agent", text:"Confirmado para el martes a las 10. Te mando los detalles por este canal. ¡Hasta el martes!", delay:8800 },
    ],
    responses: {
      disponible: "Sí, la propiedad sigue disponible. ¿Cuándo te vendría bien para coordinar una visita?",
      precio:     "Con gusto te paso los valores actualizados. ¿Me dejás un número para enviarte la información completa?",
      turno:      "Tenemos disponibilidad esta semana. ¿Preferís mañana o pasado? Te confirmo el horario enseguida.",
      zona:       "Trabajamos en toda el área metropolitana: Palermo, Belgrano, San Isidro, Zona Norte y más.",
      default:    ["Recibimos tu consulta. Un asesor te responde en breve.", "Gracias por escribirnos. Tomamos nota y te contactamos enseguida.", "Perfecto, anotamos tu consulta. ¿Hay algo más que quieras saber?"],
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
    ],
    chartSemanal: { dias:["Lun 14","Mar 15","Mié 16","Jue 17","Vie 18","Sáb 19","Dom 20"], ig:[210,185,412,220,290,180,95], fb:[45,38,72,51,63,42,20] },
    calendario: [
      { dia:"Lun 18", posts:[] },
      { dia:"Mar 19", posts:[{ titulo:"Follow-up Silvia Torres", tipo:"whatsapp", estado:"enviado" }] },
      { dia:"Mié 20", posts:[{ titulo:"Propiedad Recoleta", tipo:"instagram", estado:"enviado" }, { titulo:"Consulta respondida", tipo:"whatsapp", estado:"enviado" }] },
      { dia:"Jue 21", posts:[{ titulo:"Casa zona norte", tipo:"instagram", estado:"pendiente" }] },
      { dia:"Vie 22", posts:[{ titulo:"Tips compradores", tipo:"facebook", estado:"reprogramado" }, { titulo:"Mercado inmobiliario 2026", tipo:"linkedin", estado:"pendiente" }] },
      { dia:"Sáb 23", posts:[{ titulo:"Nueva propiedad disponible", tipo:"instagram", estado:"pendiente" }] },
      { dia:"Dom 24", posts:[] },
    ],
    upcoming: [
      { titulo:"Casa en zona norte",       red:"instagram", fecha:"Mañana · 10:00",  estado:"pendiente"   },
      { titulo:"Mercado inmobiliario 2026",red:"linkedin",  fecha:"Dom · 12:00",     estado:"pendiente"   },
      { titulo:"Tips para compradores",    red:"facebook",  fecha:"Lun · 09:00",     estado:"reprogramado"},
    ],
  },

  // ── CONCESIONARIA ───────────────────────────────────────────────────────────
  concesionaria: {
    empresa: 'AutoMax Buenos Aires', sector: 'Concesionaria · Buenos Aires',
    metricas: { consultas_recibidas:74, contactadas_automaticamente:68, respondieron_con_interes:29, reuniones_confirmadas:11, operaciones_en_proceso:5 },
    pipeline: {
      "Consulta nueva":   [{ nombre:"Rodrigo Méndez", tier:"A" }, { nombre:"Valeria Sosa", tier:"B" }],
      "Contactado":       [{ nombre:"Javier Herrera", tier:"A" }, { nombre:"Lucía Campos", tier:"B" }, { nombre:"Matías Ruiz", tier:"C" }],
      "Test drive":       [{ nombre:"Carolina Vidal", tier:"A" }, { nombre:"Gustavo Peralta", tier:"A" }],
      "Negociando":       [{ nombre:"Florencia Paz", tier:"A" }, { nombre:"Ignacio Torres", tier:"B" }],
      "Turno confirmado": [{ nombre:"Silvana Gómez", tier:"A" }],
      "Cerrado":          [{ nombre:"Marcos Ibáñez", tier:"A" }],
    },
    leads: [
      { nombre:"Rodrigo Méndez",   canal:"WhatsApp",  interes:"Interesado en Volkswagen Vento 2024", ciudad:"Buenos Aires", temperatura:"caliente", estado:"Consulta nueva",       siguiente_accion:"Enviar ficha técnica y precio" },
      { nombre:"Valeria Sosa",     canal:"Instagram", interes:"Quiere cotización Toyota Corolla",    ciudad:"Palermo",      temperatura:"caliente", estado:"Turno confirmado",     siguiente_accion:"Test drive — viernes 11:00 hs" },
      { nombre:"Javier Herrera",   canal:"WhatsApp",  interes:"Busca SUV familiar hasta $30M",       ciudad:"San Isidro",   temperatura:"caliente", estado:"Negociando",           siguiente_accion:"Llamar para cerrar financiación" },
      { nombre:"Lucía Campos",     canal:"Instagram", interes:"Primera compra, busca 0km económico", ciudad:"Caballito",    temperatura:"tibio",    estado:"Contactada",           siguiente_accion:"Follow-up en 48 hs" },
      { nombre:"Matías Ruiz",      canal:"Facebook",  interes:"Interesado en usados garantizados",   ciudad:"Lanús",        temperatura:"tibio",    estado:"En seguimiento",       siguiente_accion:"Segundo mensaje programado" },
      { nombre:"Pablo Acosta",     canal:"WhatsApp",  interes:"Consultó precio pero no respondió",   ciudad:"Quilmes",      temperatura:"frio",     estado:"Sin respuesta",        siguiente_accion:"Reintento automático mañana" },
    ],
    actividad: [
      { tipo:"mensaje_enviado",       texto:"StepFlow respondió a Rodrigo Méndez en 90 segundos — cotización Vento enviada",  tiempo:"Hace 8 min" },
      { tipo:"respuesta_recibida",    texto:"Valeria Sosa confirmó test drive: 'El viernes a las 11 perfecto'",               tiempo:"Hace 25 min" },
      { tipo:"reunion_agendada",      texto:"Turno agendado con Silvana Gómez — lunes 10:00 hs",                              tiempo:"Hace 1 hora" },
      { tipo:"seguimiento_pendiente", texto:"Seguimiento programado para Lucía Campos en 48 hs",                              tiempo:"Hace 2 horas" },
      { tipo:"cierre",                texto:"Marcos Ibáñez firmó contrato — Chevrolet Tracker 0km cerrado",                   tiempo:"Hace 5 horas" },
      { tipo:"mensaje_enviado",       texto:"Segundo seguimiento enviado a Pablo Acosta — sin respuesta previa",              tiempo:"Hace 7 horas" },
    ],
    pasos: [
      { icon:"💬", titulo:"Responde al instante", desc:"Cada consulta por WhatsApp o Instagram recibe respuesta en menos de 2 minutos, 24/7." },
      { icon:"🚗", titulo:"Califica al comprador", desc:"El sistema detecta qué modelo busca, el presupuesto y urgencia antes de que hables vos." },
      { icon:"📅", titulo:"Agenda el test drive", desc:"StepFlow propone turnos disponibles y coordina la visita sin intervención del equipo." },
      { icon:"🤝", titulo:"Vos cerrás la venta",  desc:"Llegás a la reunión con el cliente ya calificado. Solo falta firmar." },
    ],
    chatChips: ["¿Tienen Volkswagen Vento?", "¿Qué SUVs tienen disponibles?", "Quiero financiar un 0km", "¿Hacen tasación de usados?"],
    guion: [
      { from:"user", text:"Hola, vi que tienen el Toyota Corolla, ¿me pueden dar un precio?" },
      { from:"bot",  text:"Hola! Sí, tenemos el Corolla 2024 disponible. ¿Lo buscás 0km o estás abierto a usados garantizados también?" },
      { from:"user", text:"0km preferentemente. ¿Tienen financiación?" },
      { from:"bot",  text:"Sí, tenemos planes propios y financiación bancaria. ¿Querés que te arme una simulación de cuotas?" },
      { from:"user", text:"Sí, me interesa" },
      { from:"bot",  text:"Perfecto, ya te la preparo. ¿Te animás a pasar a verlo esta semana? Podemos coordinar un test drive sin compromiso." },
    ],
    responses: {
      "vento":       "El Vento 2024 está disponible en versiones Comfortline y Highline. ¿Buscás automático o manual?",
      "corolla":     "Tenemos el Corolla 2024 0km. ¿Querés que te arme una simulación de cuotas?",
      "suv":         "Contamos con Volkswagen T-Cross, Toyota RAV4 y Chevrolet Tracker. ¿Cuál es tu presupuesto aproximado?",
      "financiar":   "Tenemos planes propios desde 30% de anticipo y financiación bancaria. ¿Querés una simulación?",
      "usado":       "Nuestros usados pasan por 100 puntos de revisión y tienen garantía de 6 meses. ¿Qué modelo te interesa?",
      "precio":      "Depende del modelo y versión. ¿Cuál te interesa? Te paso el precio actualizado.",
      "tasacion":    "Hacemos tasaciones sin turno. Traés el auto y en 30 min tenés el valor. ¿Querés coordinar?",
      "turno":       "Podemos coordinar un test drive esta semana. ¿Cuándo te queda mejor?",
      "default":     "Claro, con gusto te ayudo. ¿Qué modelo o consulta tenés?",
    },
    crm: [
      { titulo:"¿Por qué cambiar tu auto ahora?", tipo:"instagram", estado:"publicado",    alcance:"4.200",  interacciones:"312" },
      { titulo:"Test drive sin turno este sábado", tipo:"facebook",  estado:"publicado",    alcance:"5.800",  interacciones:"490" },
      { titulo:"Financiación en 60 cuotas fijas",  tipo:"instagram", estado:"programado",   alcance:"—",      interacciones:"—"   },
      { titulo:"Corolla 2024 disponible",           tipo:"instagram", estado:"borrador",     alcance:"—",      interacciones:"—"   },
      { titulo:"Tips para comprar tu primer 0km",   tipo:"facebook",  estado:"programado",   alcance:"—",      interacciones:"—"   },
    ],
    chartSemanal: {
      labels:["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"],
      instagram:[12,18,14,22,19,28,16],
      facebook: [8,11,9,15,13,20,11],
    },
    calendario: [
      { dia:"Lun 18", posts:[{ titulo:"Tips primer 0km", tipo:"instagram", estado:"publicado" }] },
      { dia:"Mar 19", posts:[{ titulo:"Financiación 60 cuotas", tipo:"facebook", estado:"publicado" }] },
      { dia:"Mié 20", posts:[] },
      { dia:"Jue 21", posts:[{ titulo:"Corolla 2024", tipo:"instagram", estado:"programado" }] },
      { dia:"Vie 22", posts:[{ titulo:"Test drive sábado", tipo:"facebook", estado:"publicado" }] },
      { dia:"Sáb 23", posts:[{ titulo:"Oferta fin de semana", tipo:"instagram", estado:"pendiente" }] },
      { dia:"Dom 24", posts:[] },
    ],
    upcoming: [
      { titulo:"Financiación 60 cuotas fijas", red:"instagram", fecha:"Mañana · 10:00", estado:"pendiente"    },
      { titulo:"Test drive este sábado",        red:"facebook",  fecha:"Vie · 09:00",    estado:"programado"   },
      { titulo:"Corolla 2024 disponible",       red:"instagram", fecha:"Jue · 12:00",    estado:"borrador"     },
    ],
  },
};

// ── SELECCIÓN DE MOCK ──────────────────────────────────────────────────────────
const MOCK_FULL = ALL_MOCK[_key] || ALL_MOCK.inmobiliaria;
const MOCK = MOCK_FULL;

// Parámetros opcionales para personalizar por prospecto
const _empresa = _params.get('empresa') ? decodeURIComponent(_params.get('empresa')) : null;
const _ciudad  = _params.get('ciudad')  ? decodeURIComponent(_params.get('ciudad'))  : null;
const _sector  = _params.get('sector')  ? decodeURIComponent(_params.get('sector'))  : null;

// Actualizar todos los textos dinámicamente con datos del nicho
document.addEventListener('DOMContentLoaded', () => {
  const e = _empresa || MOCK_FULL.empresa;
  const s = _ciudad  ? ((_sector || MOCK_FULL.sector.split('·')[0].trim()) + ' · ' + _ciudad)
                     : (_sector ? _sector + ' · ' + MOCK_FULL.sector.split('·')[1]?.trim()
                                : MOCK_FULL.sector);
  const nameEl = document.querySelector('.header-company-name');
  const metaEl = document.querySelector('.header-company-meta');
  if (nameEl) nameEl.textContent = e;
  if (metaEl) metaEl.textContent = s;
  document.title = 'STEPFlow — ' + e;
  const tagline  = document.getElementById('tagline');
  const chatName = document.getElementById('chatName');
  const howTitle = document.getElementById('howTitle');
  const ctaBtn   = document.getElementById('ctaBtn');
  const mktSub   = document.getElementById('mktPageSub');
  const client   = document.getElementById('clientName');
  if (tagline)  tagline.textContent  = 'Así operaría ' + e + ' con StepFlow activo';
  if (chatName) chatName.textContent = 'Asistente de ' + e;
  if (howTitle) howTitle.textContent = 'Cómo trabajaría StepFlow en ' + e;
  if (ctaBtn)   ctaBtn.textContent   = 'Activar StepFlow en ' + e;
  if (mktSub)   mktSub.textContent   = e + ' · Marzo 2026';
  if (client)   client.textContent   = e.split(' ').slice(0,2).join(' ');
});

// ── NAVEGACIÓN ─────────────────────────────────────────────────────────────────

let activePanel = "conversaciones";
let mktInitialized = false;

function switchPanel(panel, btn) {
  if (panel === activePanel) return;
  const current = document.getElementById("panel-" + activePanel);
  current.classList.remove("active");
  current.classList.add("leaving");
  setTimeout(() => current.classList.remove("leaving"), 300);
  setTimeout(() => {
    const next = document.getElementById("panel-" + panel);
    next.classList.add("active");
    activePanel = panel;
    if (panel === "marketing" && !mktInitialized) { mktInitialized = true; initMarketing(); }
  }, 150);
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
  consultas_recibidas:"Consultas recibidas", contactadas_automaticamente:"Respondidas automáticamente",
  respondieron_con_interes:"Con interés real", reuniones_confirmadas:"Reuniones confirmadas", operaciones_en_proceso:"Operaciones en proceso",
};
const METRIC_ICONS = {
  consultas_recibidas:"◎", contactadas_automaticamente:"⚡", respondieron_con_interes:"◉", reuniones_confirmadas:"📅", operaciones_en_proceso:"✓",
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
    "Respondió con interés":"est-interes","Reunión agendada":"est-reunion","Visita agendada":"est-reunion",
    "Turno confirmado":"est-reunion","Reserva confirmada":"est-reunion","Comprando":"est-reunion",
    "Interesado":"est-interesado","Contactada":"est-contactado","Contactado":"est-contactado",
    "En seguimiento":"est-seguimiento","Sin respuesta":"est-frio","Prueba agendada":"est-reunion",
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
        <div class="pipe-mini-header"><span class="pipe-mini-name">${col}</span><span class="pipe-mini-count">${leads.length}</span></div>
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
    "Hola {n}, hace un tiempo consultaste con nosotros. ¿Seguís interesado? Tenemos novedades que podrían servirte.",
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

function getResponse(txt) {
  const t = txt.toLowerCase();
  const r = MOCK_FULL.responses;
  for (const [key, val] of Object.entries(r)) {
    if (key === 'default') continue;
    if (t.includes(key)) return val;
  }
  const d = r.default;
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
  const chips = MOCK_FULL.chatChips || [];
  document.getElementById("demoChips").innerHTML = chips.map(c=>`<span class="demo-chip" onclick="document.getElementById('demoInput').value='${c}';sendDemoMsg()">${c}</span>`).join("");
}

function iniciarChatAnimado() {
  const guion = MOCK_FULL.guion || [];
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
      <rect x="${x}" y="${H-igH}" width="${barW}" height="${igH}" fill="${colors.ig}" rx="3" opacity=".85" class="chart-bar"><title>Instagram: ${ig[i]}</title></rect>
      <rect x="${x+barW+gap}" y="${H-fbH}" width="${barW}" height="${fbH}" fill="${colors.fb}" rx="3" opacity=".75" class="chart-bar"><title>Facebook: ${fb[i]}</title></rect>`;
  });
  const totalW = padL + dias.length * groupW + padR;
  document.getElementById("mktChart").innerHTML = `<svg viewBox="0 0 ${totalW} ${H}" preserveAspectRatio="none" style="width:100%;height:${H}px;display:block">${bars}</svg>`;
  document.getElementById("mktChartLabels").innerHTML = dias.map(d=>`<span style="flex:1;text-align:center;font-size:10px;color:#64748b">${d}</span>`).join("");
}

const RED_ICONS  = { instagram:"IG", facebook:"FB", linkedin:"IN", whatsapp:"WA" };
const RED_COLORS = { instagram:"#e1306c", facebook:"#1877f2", linkedin:"#0a66c2", whatsapp:"#25d366" };

function renderCRM(filter) {
  const rows = filter==="all" ? MOCK.crm : MOCK.crm.filter(r=>r.estado===filter);
  document.getElementById("crmBody").innerHTML = rows.map(r=>`
    <tr class="crm-row">
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

const CAL_COLORS    = { instagram:"#e1306c", facebook:"#1877f2", linkedin:"#0a66c2", whatsapp:"#25d366" };
const CAL_ESTADO_CLS= { enviado:"cal-enviado", pendiente:"cal-pendiente", reprogramado:"cal-reprog" };

function renderCalendar() {
  document.getElementById("mktCalendar").innerHTML = MOCK.calendario.map(dia=>`
    <div class="cal-col">
      <div class="cal-day-header">${dia.dia}</div>
      <div class="cal-day-posts">
        ${dia.posts.length === 0 ? `<div class="cal-empty">—</div>` :
          dia.posts.map(p=>`
            <div class="cal-post ${CAL_ESTADO_CLS[p.estado]||''}">
              <div class="cal-post-dot" style="background:${CAL_COLORS[p.tipo]||'#64748b'}"></div>
              <div class="cal-post-title">${p.titulo}</div>
            </div>`).join("")}
      </div>
    </div>`).join("");
}

const RED_LABELS    = { instagram:"Instagram", facebook:"Facebook", linkedin:"LinkedIn", whatsapp:"WhatsApp" };
const UPC_ESTADO_CLS= { pendiente:"upc-pendiente", reprogramado:"upc-reprog" };

function renderUpcoming() {
  document.getElementById("mktUpcoming").innerHTML = MOCK.upcoming.map(u=>`
    <div class="upc-item">
      <div class="upc-red" style="color:${RED_COLORS[u.red]||'#64748b'}">${RED_ICONS[u.red]||u.red}</div>
      <div class="upc-body"><div class="upc-titulo">${u.titulo}</div><div class="upc-fecha">${u.fecha}</div></div>
      <span class="upc-badge ${UPC_ESTADO_CLS[u.estado]||''}">${u.estado}</span>
    </div>`).join("");
}

// ── ANIMACIONES ─────────────────────────────────────────────────────────────────

function animateCounters(scope) {
  const els = (scope||document).querySelectorAll("[data-target]");
  els.forEach(el => {
    const target = parseInt(el.dataset.target);
    const duration = 900;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(ease * target).toLocaleString("es-AR");
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}
