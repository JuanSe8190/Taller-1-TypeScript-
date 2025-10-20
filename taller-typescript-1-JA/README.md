# Taller TypeScript 1 (solución básica)

Este proyecto usa **solo lo básico de TypeScript**: clases, arrays y DOM. No hay frameworks.

## Estructura
- `src/Serie.ts`: clase `Serie` con atributos básicos.
- `src/data.ts`: datos de ejemplo (puedes ampliarlos o basarte en el gist sugerido).
- `src/app.ts`: lógica para pintar la tabla y calcular el promedio.
- `index.html`: tabla con Bootstrap 4.
- `tsconfig.json`: configuración mínima.
- `package.json`: script de build.

## Cómo ejecutar
1) Instala dependencias (necesitas Node 18+):
```bash
npm install
```

2) Compila TypeScript a JavaScript:
```bash
npm run build
```

3) Abre `index.html` en tu navegador. (Recomendado servir con un servidor estático, por ejemplo `npx http-server`.
Si abres el archivo directo y tu navegador bloquea módulos, usa un servidor local).

## Notas
- El promedio se redondea a 2 decimales.
- Puedes editar `src/data.ts` para usar más campos si quieres.
