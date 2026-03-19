# STEPFlow — Owner App V1

Panel interno de operaciones. Solo para uso del equipo de STEPFlow.

**No confundir con `demo_app/`** — esa es la demo para prospectos externos.

---

## Cómo abrir

Abrir `index.html` directamente en el navegador con doble click.

No requiere servidor local porque los datos están embebidos en `script.js`.

---

## Qué muestra

- KPIs de la semana (prospectos, contactados, reuniones, cierres)
- Tasas de conversión con indicador visual vs. objetivo
- Pipeline comercial completo de STEPFlow
- Actividad reciente del sistema con alertas
- Prospecto prioritario con siguiente acción recomendada
- Estado de cada automatización activa

---

## Cómo actualizar los datos

Editar el objeto `DATA` al inicio de `script.js`.

En V2, este objeto será reemplazado por una llamada a Supabase.
