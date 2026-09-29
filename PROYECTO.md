# HTG Accesorios Monte Grande — mapa operativo

- Tipo: réplica funcional de una home aprobada. Fuente visual: captura de 821 × 1536, representación reducida de escritorio.
- Acción principal: ingresar al catálogo mayorista; acción secundaria: solicitar alta.
- Público: locales, técnicos y revendedores. Promesa aprobada: «Lo que más busca tu cliente, lo conseguís acá».
- Primera versión: home, catálogo navegable por rubros y búsqueda de rubros, alta por correo. Sin productos/precios/stock reales ni autenticación.
- Tecnología: HTML/CSS/JS estático; apertura local y hosting estático. No hay repositorio o plataforma previa en este espacio.

## Activos y estado

| Elemento | Fuente | Estado |
|---|---|---|
| Fotografías hero, stock, rubros, banners e Instagram | Banco reconstruido en la tarea anterior | Provisional: composición y paleta; sujetos no verificados |
| Logo HTG | Captura únicamente | Provisional: composición tipográfica/CSS en web; sustituir por SVG oficial |
| Logos de marcas | Nombres visibles en captura | Provisional: texto tipográfico, sustituir por SVG oficiales |
| Íconos | Interfaz dibujada con CSS/texto Unicode | Provisional: sustituir por íconos finales vectorizados |
| Mapa y direcciones de sucursales | Captura borrosa | Bloqueado: no se inventa información geográfica |
| Productos, precios, stock y usuario | No entregados | Bloqueados: no se simulan datos comerciales |
| Teléfono, email, usuario de Instagram | Visibles pero no verificables en captura | Revisar antes de publicar; constantes centralizadas |

## Despiece medible

El ancho útil de la captura es 821 px, margen lateral aproximado 20–32 px. Escala objetivo escritorio 1440 px, margen 34–55 px. Alto relativo: encabezado 3 %, hero 22 %, categorías 15 %, stock + compra 18 %, marcas 5 %, banners 11 %, Instagram 7 %, sucursales 6 %, footer 13 %. Hero 2,4:1; categorías con fotografías ~1,18:1 en retícula de seis; dos promos ~2,42:1; módulo stock ~1,63:1 a la izquierda y columna negra a la derecha. Paleta carbón #111111, naranja #ff5428, crema #f5f0eb, blanco.

## Mobile antes de implementar

| Elemento | Decisión |
|---|---|
| Encabezado | Logo, búsqueda y menú desplegable; CTA de alta dentro del menú |
| Hero | Titular primero; foto con foco a la derecha y oscurecimiento a izquierda; ventajas en dos columnas |
| Categorías | Retícula de dos columnas, tarjetas completas sin cortes oblicuos muy estrechos |
| Stock/compra | Fotografía arriba, pasos debajo, detalle fotográfico lateral oculto |
| Marcas | Fila deslizable sin pérdida de nombres |
| Banners | Una columna; titular HTML sobre campo de color y foto al extremo derecho |
| Instagram | Carrusel horizontal con tarjetas táctiles |
| Sucursales | Tarjetas apiladas con región y datos por confirmar |

## Movimiento

Metáfora: recorrido por góndolas. Hover de tarjetas desplaza la imagen 3 %; anclas y menú orientan sin apariciones decorativas. Duración 180–260 ms. `prefers-reduced-motion` elimina transiciones y scroll suave.

## Decisiones abiertas

- Confirmar SVG de logo, datos de contacto, direcciones y URL de Instagram antes de publicar.
- Integrar catálogo real, precios, stock y autenticación cuando exista fuente de datos y plataforma.
- Estado de entrega permitido con los activos actuales: borrador técnico navegable: falta render y comparación visual, además de los datos comerciales.
