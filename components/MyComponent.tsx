import Script from 'next/script';

export default function MyComponent() {
  return (
    <div>
      <h1>Search Atlas Integration</h1>
      {/* Carga del script dinámico */}
      <Script
        id="sa-dynamic-optimization"
        strategy="afterInteractive" // Carga después de que la página se haya renderizado
        dangerouslySetInnerHTML={{
          __html: `
            var script = document.createElement("script");
            script.setAttribute("nowprocket", "");
            script.setAttribute("nitro-exclude", "");
            script.src = "https://dashboard.linkgraph.com/scripts/dynamic_optimization.js";
            script.dataset.uuid = "30c99e62-9faf-445c-aa56-91e145fb696e";
            script.id = "sa-dynamic-optimization-loader";
            document.head.appendChild(script);
          `
        }}
      />
    </div>
  );
}
