# Panadería Marchenilla / Pan de cada día

Landing local en HTML5, CSS3 y JavaScript vanilla. No requiere instalación, dependencias, compilación ni servicios externos para mostrarse. Proyecto independiente; no se han editado otras carpetas ni realizado despliegues.

## Abrir

Abre `index.html` con **Live Server** desde VS Code. También funciona abriendo el archivo directamente; si el navegador no permite acceder al portapapeles, el botón muestra un campo seleccionable para copiar el teléfono manualmente.

Los enlaces telefónicos utilizan `tel:+34956716395`. Su apertura depende de la aplicación de llamadas configurada en el dispositivo. «Contactar» desplaza al contacto; «Cómo llegar» abre una búsqueda de dirección en Google Maps en otra pestaña.

## Archivos

```text
panaderia-marchenilla/
├── index.html
├── css/
│   ├── style.css
│   └── fonts/              # Tipografías locales y licencias OFL
├── js/script.js
├── img/                    # JPEG de respaldo y WebP optimizados
├── favicon.svg
├── .gitignore
└── README.md
```

Las comprobaciones y capturas de desarrollo se guardan en `.qa/`, excluido de Git. Esa carpeta no es necesaria para que funcione la web.

## Investigación y criterio editorial

Consulta realizada el **26 de octubre de 2026**. Los datos identificativos proceden del encargo y coinciden con varias referencias públicas:

| Dato utilizado | Fuente y criterio |
| --- | --- |
| Nombre y actividad de panadería | [Panaderías Artesanas, El Bosque](https://panaderiasartesanas.com/andalucia/cadiz/el-bosque/), [Tartapan](https://tartapan.com/panaderia-marchenilla-el-bosque/) y [Panadería Santa Elena](https://panaderiasantaelena.es/panaderia-marchenilla/). |
| Avenida Juan XXIII, 46, 11670 El Bosque, Cádiz | Coincide con el encargo y con las tres referencias anteriores. También figura en [Panadería Parte](https://www.panaderiaparte.com/15156-panaderia-marchenilla-panaderia-en-el-bosque-cadiz/). |
| 956 716 395 | Coincide con el encargo, los directorios anteriores y [TodosBiz](https://www.todosbiz.es/marchenilla_1c-956-71-63-95). |

**Discrepancia documentada:** TodosBiz y QDQ sitúan el negocio en el número 20 de la misma avenida. Se ha utilizado el número **46**, facilitado expresamente por el usuario y corroborado por otras fichas. No se han incorporado coordenadas.

Las fuentes son directorios de terceros, no una confirmación directa del propietario. No se ha identificado una web oficial o una red social inequívocamente oficial. No se ha obtenido autorización de uso de fotografías auténticas del establecimiento.

Aunque algunos directorios publican horarios y reseñas que mencionan molletes, barras, vienas o determinadas técnicas, no se presentan como oferta actual ni como procesos confirmados. La web se limita a la actividad general de panadería y ofrece consultar disponibilidad, formatos, precios y horario por teléfono. No publica años de actividad, historia familiar, ingredientes, masa madre, horno de leña, premios, reseñas, puntuaciones, precios, encargos, reparto, WhatsApp, correo ni venta en línea.

«Pan de cada día» es el concepto de identidad del proyecto. Las escenas cotidianas descritas son sugerencias de uso del pan, no afirmaciones sobre productos o servicios del negocio. No se ha simulado un catálogo para alargar la página.

## Fotografías y licencias

Todas las fotografías son **ilustrativas de archivo**. No muestran productos, instalaciones ni personal de Marchenilla. Se indica en los textos alternativos, pies de imagen y aviso general. Se descargaron desde el CDN de Pexels, tras consultar la ficha individual y la [licencia de Pexels](https://www.pexels.com/license/). Esta permite uso comercial, edición y publicación en una web; no implica respaldo del fotógrafo al negocio.

| Archivos locales | Autor / ficha de procedencia | Original descargado | Versiones optimizadas |
| --- | --- | --- | --- |
| `pan-mesa.jpg`, `pan-mesa.webp` | ready made · [Sliced Bread On Brown Wooden Chopping Board, 3851050](https://www.pexels.com/photo/sliced-bread-on-brown-wooden-chopping-board-3851050/) | [CDN JPEG](https://images.pexels.com/photos/3851050/pexels-photo-3851050.jpeg?auto=compress&cs=tinysrgb&w=1600&q=85) | 1600 × 1067 px; JPEG 163.745 bytes / WebP 113.736 bytes |
| `pan-en-tabla.jpg`, `pan-en-tabla.webp` | Hatice Uyar · [Close-up of Freshly Sliced Wheat Bread Loaf, 30693941](https://www.pexels.com/photo/close-up-of-freshly-sliced-wheat-bread-loaf-30693941/) | [CDN JPEG](https://images.pexels.com/photos/30693941/pexels-photo-30693941.jpeg?auto=compress&cs=tinysrgb&w=1200&q=85) | 1200 × 1800 px; JPEG 121.230 bytes / WebP 70.850 bytes |
| `rebanadas.jpg`, `rebanadas.webp` | Polina Tankilevitch · [Close-Up Shot of Slices of Bread, 8599591](https://www.pexels.com/photo/close-up-shot-of-slices-of-bread-8599591/) | [CDN JPEG](https://images.pexels.com/photos/8599591/pexels-photo-8599591.jpeg?auto=compress&cs=tinysrgb&w=1200&q=85) | 1200 × 1800 px; JPEG 166.114 bytes / WebP 142.806 bytes |

Se verificaron el formato JPEG real, dimensiones, lectura y decodificación con Sharp; se volvieron a codificar los JPEG y se generaron archivos WebP reales. No se ha cambiado una extensión para simular una conversión. Los navegadores compatibles descargan aproximadamente **327 KB** entre las tres fotografías WebP. Se mantienen respaldos JPEG mediante `<picture>`. Portada prioritaria; fotografías interiores con carga diferida nativa, dimensiones explícitas y contenido siempre visible.

### Tipografía y gráficos

- **Fredoka**, peso variable 300–700, para titulares y marca. [Proyecto Google Fonts](https://github.com/google/fonts/tree/main/ofl/fredoka). Licencia SIL OFL 1.1 incluida en `css/fonts/Fredoka-OFL.txt`.
- **Epilogue**, peso variable 100–900, para lectura y navegación. [Proyecto Google Fonts](https://github.com/google/fonts/tree/main/ofl/epilogue). Licencia SIL OFL 1.1 incluida en `css/fonts/Epilogue-OFL.txt`.
- Fuentes servidas localmente, con `font-display: swap`, sin peticiones a Google Fonts.
- Monograma, favicon e iconos dibujados expresamente en SVG. No se utilizan emojis ni bibliotecas de iconos.

## Diseño y auditoría de originalidad

Se leyeron el HTML y el CSS de los seis proyectos accesibles en el espacio de trabajo. La comparación es de sus fuentes locales; no se presenta como una revisión visual en navegador de las otras webs.

| Proyecto comparado | Diferencia principal de Marchenilla |
| --- | --- |
| Panadería El Rescoldo | Se sustituye su gran nombre horizontal seguido de fotografía rectangular por un nombre partido en dos líneas, entrelazado con fotografía ovalada inclinada sobre corteza. Fredoka/Epilogue frente a Archivo/Manrope. No hay catálogo de categorías, secuencia de oficio ni galería ampliable. El contacto es una ficha clara sobre naranja, en lugar de una gran sección oscura. |
| Chacinas Olmedo | Sin serif Fraunces, color vino, fotografía de cabecera rectangular o botones con muescas. Composición tipográfica redondeada, foto ovalada y botones de pulsación con sombra inferior. |
| La Despensa de Nerea | Sin escaparate modular verde, tipografía Anybody ni cuadrícula de paneles de portada. La identidad se articula mediante letras grandes, un solo producto fotográfico y superficies naranja/amarillo/tinta. |
| Miel El Bosque | Sin enfoque apícola, tipografía editorial serif ni recorrido por variedades/origen. Navegación horizontal visible tras la portada y fotografía de pan con recortes propios. |
| Abacería de Julián | Sin Gloock/Instrument Sans, fotografía panorámica de producto ni bloques de categorías y acordeones. La ubicación se representa con un número de portal de gran escala y el teléfono con una ficha inclinada. |
| Venta Mateo | Sin barra lateral numerada, estructura de carretera, tipografía Barlow/Public ni presentación de cocina y espacios. Navegación horizontal compacta, sin numeración, situada tras la portada; dirección y contacto en bloques diferenciados. |

La paleta respeta harina `#F5EAD2`, corteza `#D88B45`, mantequilla `#EBC76E`, tinta `#292722` y blanco cálido `#FFF9EE`. El marrón adicional se utiliza para texto con contraste sobre blanco. El recorrido combina presentación cotidiana, pan y consulta de disponibilidad, contexto de uso, ubicación, información previa a la visita y contacto. No sigue la secuencia sobre nosotros → catálogo → galería.

Se han diseñado nuevos gráficos y estilos, sin copiar archivos ni imágenes de los proyectos anteriores. Se comparten únicamente patrones estándar de la web, como enlaces de ancla, teléfono y Google Maps.

## Accesibilidad y comportamiento

- Navegación visible en todas las anchuras, sin menú colapsado ni dependencia de JavaScript para acceder a los enlaces. Por ello no hay un control de apertura/cierre ni `aria-expanded` que sincronizar.
- Enlace de salto al contenido, regiones semánticas, un H1, encabezados jerárquicos, foco visible, imágenes con alternativas y decoración oculta a lectores de pantalla.
- Botones y enlaces nativos. Confirmación del copiado mediante región `role="status"` y alternativa manual si falla el portapapeles.
- Indicador de sección activa mediante `aria-current="location"` y `IntersectionObserver`, con mejora progresiva.
- Animación de entrada del pequeño rótulo, movimiento contenido en enlaces y fotografías y pulsación de botones. No se ocultan imágenes con JavaScript, no hay carruseles ni scroll secuestrado.
- `prefers-reduced-motion` desactiva animaciones, transiciones y desplazamiento suave.
- Metadatos en español, Open Graph y JSON-LD `Bakery` con nombre, teléfono, dirección y enlace de mapa. Sin horarios, productos o puntuaciones en datos estructurados.
- No hay analítica, formularios, cookies de seguimiento ni inserciones de mapas que carguen recursos externos al abrir la página.

## Verificación ejecutada

Pruebas con **Chrome real en modo headless**, controlado mediante el controlador Playwright ya disponible en el entorno, y servidor HTTP local. No son dependencias de la web.

- Capturas completas y revisión visual a **375, 768, 1440 y 1920 px**. Sin desbordamiento horizontal en esas cuatro anchuras.
- Respuesta HTTP 200, tipografías locales cargadas, tres imágenes decodificadas y visibles, sin destinos de ancla inexistentes ni errores de JavaScript o recursos HTTP fallidos durante las pruebas.
- Ejecución de los cuatro enlaces de navegación en móvil; comprobación de que los destinos quedan bajo la barra fija.
- Activación de los cuatro enlaces de navegación de escritorio mediante foco y tecla Enter; destinos visibles. JSON-LD leído y analizado como JSON válido en el navegador.
- Copiado al portapapeles del valor `956 716 395`, lectura posterior para comprobarlo y ejecución de la alternativa manual sin API disponible.
- Enlace de salto activado por teclado; estados de movimiento reducido comprobados en estilos calculados.
- Página probada con JavaScript desactivado: imágenes, navegación y contenido disponibles; botón de copiado oculto y teléfono accesible como enlace.
- Validación del destino de todos los enlaces `tel:` y de las dos URL de Google Maps, sus parámetros, nueva pestaña y `noopener noreferrer`.
- Comprobación sintáctica mediante `node --check js/script.js`.

**Límites:** no se ha realizado una llamada telefónica real, no se ha comprobado la ruta externa calculada por Google Maps, no se ha verificado el negocio con su propietario y no se ha ejecutado una auditoría manual con lector de pantalla ni pruebas en Safari/Firefox. La información publicada evita convertir los datos inciertos en afirmaciones comerciales.

Open Graph utiliza una ruta de imagen relativa porque no existe dominio público confirmado. Antes de publicar en un dominio propio conviene sustituirla por su URL absoluta y añadir las URL canónicas definitivas; aquí no se inventa ningún dominio ni se configura alojamiento.
