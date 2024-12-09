import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';
import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request';
import { registerInstrumentations } from '@opentelemetry/instrumentation';

// Crear el exportador de trazas para enviar datos
const traceExporter = new OTLPTraceExporter({
    url: 'http://your-otel-collector:4318/v1/traces', // Cambia esta URL por la de tu colector OTLP
    // Puedes añadir más configuraciones necesarias aquí, como headers si es necesario
  });
  
  // Crear un nuevo proveedor de trazas y configurar el SimpleSpanProcessor
  const provider = new WebTracerProvider({
    spanProcessors: [
      new SimpleSpanProcessor(traceExporter)  // Procesador de trazas que exporta a OTLP
    ],
  });

// Registrar el proveedor
provider.register();

// Registering instrumentations
registerInstrumentations({
  instrumentations: [
    new FetchInstrumentation(),
    new XMLHttpRequestInstrumentation(),
  ],
});