# Portafolio — cómo funciona

- **Ver el sitio:** doble clic en `index.html`.
- **Proyectos (tarjetas, textos, fotos, videos):** todo está en `js/proyectos.js`. Un bloque por proyecto, en español e inglés. El orden de la lista es el orden en la página. Para agregar uno, copia un bloque y cambia los datos.
- **Resto de textos** (encabezado, cifras, trayectoria, contacto): español en `index.html`, inglés en `js/i18n.js` (misma clave `data-i18n`).
- **Imágenes y videos para el sitio:** solo en `assets/images/<proyecto>/`, ya optimizados (fotos ~1600 px y < 300 KB; videos .mp4 cortos < 4 MB con su `-poster.jpg`). Es la única carpeta de `assets/` que se publica.
- **Material original** (videos pesados, presentaciones, fichas): cualquier otra carpeta dentro de `assets/`. Queda fuera de la publicación por `.gitignore`.
- **Colores y fuentes:** al inicio de `css/styles.css`.

## Flujo para mantenerlo vivo
1. Me cuentas un proyecto o una novedad.
2. Lo registro completo en Notion (CareerOS → Notas de Perfil → Datos verificados).
3. Decidimos qué parte es pública.
4. Actualizo `js/proyectos.js` y, si aplica, el CV Maestro.
5. Tú publicas con GitHub Desktop (Commit → Push).

## Pendiente antes de publicar
- Después del 23-oct-2026: actualizar Sala Nido con la apertura y fotos con público.
- Publicar con GitHub Pages siempre con git (el `.gitignore` no protege si se sube arrastrando la carpeta).
