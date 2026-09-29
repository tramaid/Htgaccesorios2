# HTG Accesorios — web navegable

Abrí `index.html` en un navegador o serví la carpeta con:

```bash
python3 -m http.server 8000
```

Luego entrá a `http://localhost:8000/`. No necesita instalación ni build.

## Recorridos

- Home: navegación por anclas, categorías y destacados.
- Catálogo: búsqueda de rubros y enlaces con interés precargado para el alta.
- Alta mayorista: formulario validado en el navegador que descarga una solicitud `.txt` para enviar por el canal comercial oficial. No transmite ni guarda datos.

## Antes de publicar

1. Sustituir la marca tipográfica/CSS por el SVG oficial de HTG y los nombres tipográficos por logos autorizados de marcas.
2. Confirmar fotografías reales de local, equipo y productos. Los WebP actuales son recreaciones provisionales del prototipo.
3. Confirmar nombres, direcciones, teléfono, email y cuenta de Instagram; la web no enlaza a datos no verificados.
4. Conectar catálogo, stock, precios y autenticación al sistema comercial elegido.
5. Configurar un destino real y tratamiento de datos para el alta. El formulario actual sólo prepara un archivo local.
6. Renderizar escritorio y móvil, comparar contra el prototipo y corregir diferencias visuales antes de publicar.

La referencia visual y el inventario de decisiones están en `PROYECTO.md`.
