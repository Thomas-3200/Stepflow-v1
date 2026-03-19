# STEPFlow Access Policy

## PRINCIPIO GENERAL
Claude Code opera dentro de STEPFLOW_V1 con permisos limitados y controlados.

---

## ACCIONES PERMITIDAS
- Leer archivos del proyecto
- Crear y editar archivos del proyecto
- Ejecutar scripts locales
- Usar variables de entorno autorizadas
- Preparar automatizaciones

---

## ACCIONES RESTRINGIDAS
- No exponer secretos
- No acceder fuera del proyecto sin necesidad
- No ejecutar comandos destructivos
- No modificar sistema operativo
- No borrar archivos críticos

---

## REQUIERE CONFIRMACIÓN
- Envíos masivos
- Uso de APIs en producción
- Pagos
- Automatizaciones en vivo

---

## INTEGRACIONES
- n8n
- Meta
- WhatsApp
- Email
- Bases de datos

---

## REGLA
Principio de mínimo privilegio siempre.
