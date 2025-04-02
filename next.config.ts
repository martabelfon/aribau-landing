

const nextConfig = {
  experimental: {
    nextScriptWorkers: false, // Deshabilita algunas herramientas internas
  },
  devIndicators: {
    buildActivity: false, // Oculta el indicador de compilación
    autoPrerender: false, // Oculta los indicadores de prerenderizado
  },
};

export default nextConfig;

