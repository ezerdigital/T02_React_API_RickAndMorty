import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * ! habilita plug-in para darle soporte a react con vite
   */
  plugins: [react()],
  /**
   * ! cambiar puerto para desarrollo
   */
  server: {
    port: 3030,
  },
  /**
   * ! cambiar puerto para despues del build
   */
  preview: {
    port: 4270,
  },
  /**
   * ! personalizar procesos para produccion (/dist)
   */
  build: {
    // acelera proceso de compilacion de archivos al generar el build (.js, .jsx, .css, etc.)
    incremental: true,
    // habilitar trabajo en conjunto con Babel para controlar las versiones compatibles con el navegador
    babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
    //  acelera proceso de compilacion de archivos construidos con TS a JS
    typescript: {
      tsconfing: "./tsconfig.json",
    },
    // habilitar cache para optimizar recursos disponibles en /dist
    cache: true,
    // habilitar compresion optimizada para minimizar archivos generados
    minify: true,
    // habilitar modo entorno para el cual estamos generando el build ("development", "production", "pre-production")
    mode: "production",
    // habilitar configuracion para build con chunks parcelados
    chunks: true,
    // habilitar configuracion para minimizar el tamaño de las librerias del proyecto  que pasara al desarrollo.
    moduleBundling: true,
    // OPTIONAL: pre-carga de modulos de ruta
    prerenderPaths: [],
    // OPTIONAL: pre-carga general del codigo antes de visitarse
    modulePreload: true,
    // OPTIONAL: especifica el directorio de salida
    outDir: "build",
    // habilitar inspector de recomendaciones
    devcode: true,
    // habilitar inspector de recomendaciones y errores
    debug: true,
    // OPTIONAL: Permite inyectar automáticamente un polyfill de precarga de módulo
    polyfillModulePreload: true,
    // >>> ADD <<< : permite generar un archivo de manifiesto de la aplicación. (describe estructura de la App y sus recursos)
    manifest: {
      filename: "manifest.json"
    }
  },
});



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
