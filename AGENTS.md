# TKD Register — Memoria del Proyecto (AGENTS.md)

## 1. Propósito del Proyecto y Modelo de Negocio
**TKD Register** (`https://tkdregister.com/` / hosting en Firebase `https://tkd-register-premium.web.app`) es la página informativa y comercial oficial de un ecosistema digital especializado en **artes marciales y Taekwondo**, creado como un producto de **Interpres Digital** (`https://interpresdigital.com/`).

El ecosistema cubre **dos líneas principales de solución**:
1. **Plataformas para Torneos de Taekwondo (Esquema de Renta Personalizada por Evento)**:
   - **Diferenciador clave**: A diferencia de las plataformas de renta genéricas donde el organizador debe adaptarse a reglas fijas y promocionar la marca del proveedor, TKD Register renta por el mismo rango de precio una plataforma **100% personalizada** con la marca, colores, patrocinadores, convocatoria y reglamento del organizador.
   - **Los 6 pilares del paquete de torneo**:
     1. Página de ventas y promoción oficial con convocatoria.
     2. Sistema de registro y portal de escuelas (por peso, edad, cinta Kup/Dan y modalidades: Kyorugi, Poomsae, TK5, festivales).
     3. Panel administrativo y cuentas claras en tiempo real (ingresos, pagos validados, pendientes por escuela, cortes de caja).
     4. Gafetes y credenciales con **ID único** listos para imprimir para agilizar pesaje y acceso a tatamis (**NUNCA mencionar código QR**, es estrictamente con **ID**).
     5. **App PWA incluida para elaborar gráficas en 45 segundos**: Aplicación progresiva instalable donde se ingresan o sincronizan los IDs de los competidores pesados y arma las llaves en 45 segundos con algoritmo antichoques (evita que alumnos del mismo dojang se enfrenten en primera ronda). No es una pantalla digital de arbitraje, sino una herramienta rápida de generación de gráficas.
     6. Dominio web propio o subdominio oficial de TKDRegister.
2. **Plataforma SaaS / ERP / CRM para Escuelas de Taekwondo (Dojangs) con Agentes de IA**:
   - Kardex de alumnos, asistencias e historial de grados y cinturones (**Kup/Dan** — siempre escribir **Kup**, nunca *Gup*).
   - Control de mensualidades, pagos y estados de cuenta.
   - Integración de **Agentes de Inteligencia Artificial en WhatsApp 24/7** para atender dudas de padres de familia (horarios, costos de examen, uniformes).

---

## 2. Arquitectura Técnica
- **Framework Frontend**: React 19 + TypeScript (`~5.8.2`) + Vite 6 (`@vitejs/plugin-react`).
- **Enrutamiento**: `react-router-dom` v7 (`/` renderiza `Landing.tsx`; `/dashboard` renderiza una vista interna demostrativa `AppLayout` + `Dashboard.tsx`, aunque **no debe enlazarse desde la Landing pública**).
- **Estilos y Animaciones**:
  - Tailwind CSS v4 integrado vía `@tailwindcss/vite` en `src/index.css`.
  - Animaciones fluidas con `framer-motion` e iconografía con `lucide-react`.
  - **Nota técnica importante de Tailwind v4**: Dentro de bloques de reglas CSS puras en `src/index.css` (ej. pseudo-elementos `::after`), usar propiedades CSS estándar (`pointer-events: none;`) y no nombres de utilidades de Tailwind sin `@apply`.
- **SEO Técnico e Indexación Híbrida**:
  - `index.html` incorpora metadatos completos (`lang="es-MX"`, canonical `https://tkdregister.com/`, Open Graph, Twitter Cards), datos estructurados **Schema.org JSON-LD** (`@graph` con `Organization`, `WebSite`, `SoftwareApplication`, `Service` y `FAQPage`) y un bloque semántico completo dentro de `<noscript>` para crawlers e IA sin provocar parpadeo visual (**FOUC**) al cargar React.
  - Estilo crítico inline en `<head>` (`background-color: #070B14; color: #FFFFFF;`) para evitar destellos blancos antes de hidratar la SPA.
- **Hospedaje**: Firebase Hosting configurado en el proyecto `tkd-register`, sitio específico `tkd-register-premium`.

---

## 3. Estructura de Carpetas y Archivos Clave
```text
/
├── index.html                  # Punto de entrada HTML, SEO meta tags, Open Graph, JSON-LD y fallback <noscript>
├── public/                     # Archivos estáticos copiados tal cual a dist/ en cada build (NO ignorar en Git)
│   ├── robots.txt              # Permite rastreo global y apunta a https://tkdregister.com/sitemap.xml
│   └── sitemap.xml             # Sitemap XML canónico de https://tkdregister.com/
├── src/
│   ├── main.tsx                # Montaje de React en #root
│   ├── App.tsx                 # Definición de rutas BrowserRouter (/ y /dashboard)
│   ├── index.css               # Tema Tailwind v4 (@theme) y utilidades (.premium-card, .premium-card-glow, .light-beam, .mesh-grid)
│   ├── pages/
│   │   ├── Landing.tsx         # Landing page comercial principal (archivo central de negocio)
│   │   └── Dashboard.tsx       # Vista secundaria de demostración de panel
│   ├── layouts/
│   │   └── AppLayout.tsx       # Layout lateral para /dashboard
│   ├── components/ui/
│   │   ├── Button.tsx          # Botón con biseles metálicos, degradados y reflejos
│   │   └── Card.tsx            # Componente base de tarjeta
│   └── lib/
│       └── utils.ts            # Helper cn() (clsx + tailwind-merge)
├── firebase.json               # Configuración de Firebase Hosting (site: tkd-register-premium, public: dist, SPA rewrite)
├── .firebaserc                 # Proyecto por defecto: tkd-register
├── vite.config.ts              # Configuración de Vite, Tailwind v4 y alias @/
├── tsconfig.json               # Configuración TypeScript
└── package.json                # Scripts y dependencias
```

---

## 4. Comandos de Desarrollo, Compilación y Despliegue
- **Instalar dependencias**:
  ```bash
  npm install
  ```
- **Servidor de desarrollo local** (puerto 3000):
  ```bash
  npm run dev
  ```
- **Verificación de tipos TypeScript**:
  ```bash
  npm run lint
  ```
- **Compilar para producción** (genera carpeta `dist/` incluyendo `public/robots.txt` y `public/sitemap.xml`):
  ```bash
  npm run build
  ```
- **Desplegar en Firebase Hosting**:
  ```bash
  firebase deploy --only hosting:tkd-register-premium
  ```

---

## 5. Reglas Intocables de Diseño Visual, UX y Copywriting
Cualquier iteración futura debe respetar estrictamente estas directrices acordadas con el propietario del proyecto:

1. **Paleta de Colores e Identidad Premium**:
   - Mantener la base Azul Medianoche / Marino Oscuro (`#06090F`, `#0B111F`, `#141E33`) combinada con Verde Esmeralda (`#28AF90`, `#34D399`, `#10B981`).
   - Estética de alto nivel: biseles metálicos, contornos luminosos (`premium-card-glow`), glassmorphism profundo (`premium-card`), haces de luz (`light-beam`) y textura reticular sutil (`mesh-grid`).
2. **Simetría Estricta en Cuadrículas de Tarjetas**:
   - En la sección *"Todo lo que incluye la plataforma de tu torneo"* deben mantenerse **6 tarjetas 100% simétricas** (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) sin incrustar fotos solo en algunas tarjetas (para no desproporcionar alturas). Las fotografías de registro y gafetes viven en su propio bloque simétrico de 2 columnas justo debajo.
   - En la sección *"TKDRegister es para ti si…"* deben mantenerse **6 tarjetas simétricas** en cuadrícula `3x2`.
   - En **Preguntas Frecuentes (FAQ)** deben mantenerse todas las preguntas institucionales y operativas distribuidas en **2 columnas** (`md:grid-cols-2`).
3. **Hero Limpio y Directo**:
   - Prohibido poner barras de scroll horizontal (`overflow-x-auto`) o botones recortados en el Hero.
   - El encabezado fijo (`nav`) nunca debe tapar el título principal del Hero.
   - Prohibido agregar botones inventados como *"Ver el panel"*, calculadoras inventadas o cotizadores falsos.
4. **Terminología y Reglas de Negocio Exactas**:
   - Escribir siempre **Kup** (`Kup/Dan`), jamás *Gup*.
   - Referirse siempre a **Gafetes con ID** (nunca mencionar *QR*).
   - No inventar funciones que el sistema no hace ni eliminar la filosofía institucional (*"Nace de una necesidad real dentro del taekwondo"*, *"No se trata solo de digitalizar un proceso. Se trata de elevar la experiencia, el orden y la presentación del deporte"*).
5. **Llamados a la Acción (CTAs) Oficiales**:
   - Todos los CTAs principales (Navbar, Hero y Cierre Final) deben invitar a **agendar una videollamada** y enlazar a:
     `https://panel.interpresdigital.com/#/book`
6. **Footer Institucional**:
   - Conservar en el pie de página la leyenda *"Un producto de"* acompañada del logotipo oficial de **Interpres Digital** con hipervínculo a `https://interpresdigital.com/`.

---

## 6. Recursos Multimedia Activos (Cloudflare R2 CDN)
Todos los activos gráficos cargan desde el bucket público R2 (`referrerPolicy="no-referrer"`):
- **Logo Blanco (Navbar y Footer)**: `https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/LOGO%20BLANCO.png`
- **Logo Color (Favicon y JSON-LD)**: `https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/LOGO%20COLOR%20PNG.png`
- **Imagen Open Graph (`og:image` / `twitter:image`)**: `https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/Untitled%20design.png`
- **Imagen 1 (Hero — Arena de Torneo)**: `https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/1.png`
- **Imagen 2 (App PWA Gráficas en 45s sobre Tatami)**: `https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/2.png`
- **Imagen 3 (Gafetes y Credenciales con ID)**: `https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/3.png`
- **Imagen 4 (Dojang ERP & IA)**: `https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/4.png`
- **Imagen 5b (Misión — Necesidad Real)**: `https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/5b.png`
- **Imagen 6b (Profesor registrando competidores en tablet)**: `https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/6b.png`
- **Logo Interpres Digital (Footer)**: `https://pub-de208707a70b434880056475d98329db.r2.dev/INTERPRES%20DIGITAL/PNG/24.png`

---

## 7. Estado Actual y Pendientes Opcionales
- **Estado actual**: Sitio 100% funcional, compilando limpio con `npm run build` y desplegado en producción con SEO técnico completo (`robots.txt`, `sitemap.xml`, JSON-LD, Open Graph y sin FOUC).
- **Seguimiento recomendado / futuros alcances**:
  - Monitorear en Google Search Console la validación de `https://tkdregister.com/sitemap.xml` y revisar si alguna URL antigua 404 requiere redirección 301 en `firebase.json`.
  - Si en el futuro se decide expandir el posicionamiento orgánico por solución individual, evaluar páginas dedicadas SEO-friendly (ej. para torneos, gráficas PWA o ERP de Dojangs) conservando siempre el diseño y discurso comercial aprobado.
