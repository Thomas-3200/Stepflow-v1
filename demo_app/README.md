# STEPFlow Demo App — V1

Demo visual para prospectos. Simula un panel CRM operativo personalizado para el negocio del prospecto.

---

## Cómo abrir la demo localmente

La demo usa `fetch()` para cargar el JSON, por lo que **no funciona si abrís index.html directo desde el explorador de archivos** (protocolo `file://`).

Necesitás un servidor local. Dos opciones simples:

### Opción A — VS Code Live Server (recomendado)
1. Instalar la extensión **Live Server** en VS Code
2. Click derecho sobre `index.html` → "Open with Live Server"
3. Se abre en el navegador automáticamente

### Opción B — Python
```bash
cd demo_app
python -m http.server 8080
```
Luego abrir: `http://localhost:8080`

---

## Cómo personalizar para otro prospecto

Todo está en un solo archivo:

```
demo_app/data/demo_company.json
```

Campos a cambiar:

| Campo | Descripción |
|---|---|
| `nombre_empresa` | Nombre real del prospecto |
| `rubro` | Industria del negocio |
| `ciudad` | Ciudad principal |
| `color_principal` | Color de marca en hex (ej: `#2563eb`) |
| `metricas` | Números simulados realistas para el rubro |
| `pipeline` | Leads ficticios por etapa, con nombres del nicho |
| `actividad` | Feed de eventos recientes |
| `lead_destacado` | Lead de ejemplo con mensaje personalizado |
| `textos` | Tagline, descripción del sistema, pasos y CTA |

### Para crear una demo para un nuevo prospecto:

1. Duplicar `demo_company.json` → ej: `demo_constructora_norte.json`
2. Editar todos los campos con los datos del prospecto
3. En `script.js`, cambiar la línea:
   ```javascript
   const res = await fetch("./data/demo_company.json");
   ```
   por:
   ```javascript
   const res = await fetch("./data/demo_constructora_norte.json");
   ```
4. Guardar y refrescar el navegador

Tiempo estimado: **5 a 10 minutos por demo**.
