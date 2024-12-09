# OpenTelemetry Instrumentation para Navegador

Este archivo, `dist/otel-instrument.js`, contiene la instrumentación automática para capturar trazas de las solicitudes HTTP realizadas mediante las APIs `fetch` y `XMLHttpRequest` en el navegador.

## ¿Cómo generar `dist/otel-instrument.js`?

1. **Instalar dependencias**:

   Asegúrate de tener las dependencias necesarias:

   ```bash
   npm install --save @opentelemetry/sdk-trace-web @opentelemetry/sdk-trace-base @opentelemetry/exporter-trace-otlp-http @opentelemetry/instrumentation-fetch @opentelemetry/instrumentation-xml-http-request
Crear el archivo de instrumentación (otel-instrument.js):

El archivo otel-instrument.js debe contener la configuración para crear un proveedor de trazas, un exportador OTLP y la instrumentación de las APIs fetch y XMLHttpRequest. Aquí hay un ejemplo básico:

javascript
Copiar código
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';
import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request';

// Crear el exportador de trazas para enviar los datos
const traceExporter = new OTLPTraceExporter({
  url: 'http://your-otel-collector:4318/v1/traces', // Reemplaza con tu URL de colector
});

// Crear el proveedor de trazas
const provider = new WebTracerProvider({
  spanProcessors: [
    new SimpleSpanProcessor(traceExporter), // Procesador de trazas para enviar al colector
  ],
});

// Registrar el proveedor
provider.register();

// Instrumentar automáticamente las solicitudes HTTP
new FetchInstrumentation();
new XMLHttpRequestInstrumentation();
Compilar el archivo con Webpack:

Ejecuta el siguiente comando para empaquetar el archivo para su uso en el navegador:

bash
Copiar código
npx webpack --config webpack.config.js
Esto generará el archivo dist/otel-instrument.js.

¿Qué hace otel-instrument.js?
Instrumenta automáticamente las solicitudes HTTP realizadas con fetch y XMLHttpRequest.
Captura las trazas de las solicitudes HTTP y las envía a un colector OTLP para su visualización y análisis.
Facilita la observabilidad de las interacciones HTTP de la aplicación sin necesidad de modificar el código de la aplicación.
Requisitos
Un colector de OpenTelemetry configurado para recibir las trazas a través del protocolo OTLP.