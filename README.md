# Validación de los backends de observabilidad de Grafana

Un despliegue básico para probar Cortex, Loki y Tempo.

Despliega el proyecto [WASAPhoto](https://github.com/aleiis/WASAPhoto) como un sandbox para probar los principales backends de observabilidad de Grafana: Cortex, Loki y Tempo. Este sandbox se divide en tres partes: 

- **Frontend**: Aplicación web desarrollada en Vue.js que permite subir imágenes y visualizarlas. Está desplegada sobre un servidor Nginx.
- **Backend**: API REST desarrollada en Go que gestiona toda la lógica de la aplicación.
- **Base de datos**: Base de datos MySQL que almacena toda la información de los usuarios y las fotos subidas. 

Nota: A pesar de que toda la información de los usuarios y las fotos subidas se almacena en una base de datos MySQL, el binario de las fotos se almacena junto con el backend.

## Requisitos

Para ejecutar este proyecto, asegúrate de tener instalados los siguientes programas:

- **Docker**: Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.
  - [Instrucciones de instalación](https://docs.docker.com/get-docker/)
- **Docker Compose**: Herramienta para definir y ejecutar aplicaciones de múltiples contenedores con Docker.
  - [Instrucciones de instalación](https://docs.docker.com/compose/install/)

## Despliegue

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/aleiis/grafana-stack-validation.git
```

2. Accede al directorio del proyecto:

```bash
cd grafana-stack-validation
```

3. Inicia los servicios de Grafana, Cortex, Loki y Tempo:

```bash
docker-compose up -d
```

4. Accede a Grafana en tu navegador web: [http://localhost:3003](http://localhost:3003)  

5. Inicia sesión con las siguientes credenciales: 
    - **Usuario**: admin
    - **Contraseña**: admin

6. Interactua con la aplicación para ver los datos obtenidos: [http://localhost:9191](http://localhost:9191)

## Contenidos

El proyecto está estructurado de la siguiente manera:

* `dashboards/`: contiene algunos dashboard para visualzar los datos de la aplicación.
* `grafana/`: bindmount para almacenar los datos de Grafana.
* `selenium/`: contiene los tests de Selenium para probar la aplicación.
* `config.alloy`: configuración de Grafana Alloy para la recolección de logs de todos los contenedores de Docker. 
* `cortex-config.yaml`: configuración de Cortex.
* `docker-compose.yaml`
* `loki-config.yaml`: configuración de Loki.
* `mysql-exporter-permissions.sql`: script para crear el usuario junto con los permisos necesarios para exportar métricas de MySQL con MySQL Server Exporter.
* `otel-collector-config.yaml`: configuración de OpenTelemetry Collector.
* `prometheus-config.yaml`: configuración de Prometheus.
* `tempo-config.yaml`: configuración de Tempo.
* `wasaphoto-config.yaml`: configuración de la aplicación WASAPhoto.

## Cortex

Cortex es un sistema de almacenamiento de series temporales de alto rendimiento y multi-tenant. Permite almacenar, indexar y consultar métricas. Se trata de una implementación de la API de Prometheus que permite almacenar métricas en un almacenamiento de series temporales distribuido.

Toda la información sobre los módulos y la implementación de Cortex se puede encontrar en su documentación oficial: [https://cortexmetrics.io/](https://cortexmetrics.io/)
