# TestOrange

## Descripción

Proyecto de automatización de pruebas desarrollado con Cypress sobre la aplicación de demostración de OrangeHRM.

El objetivo de este proyecto es practicar pruebas End-to-End (E2E), validando el flujo de autenticación de usuarios y verificando elementos importantes de la interfaz después del inicio de sesión.

## Tecnologías utilizadas

- JavaScript
- Cypress
- Node.js
- NPM

## Sitio utilizado para las pruebas

OrangeHRM Demo:

https://opensource-demo.orangehrmlive.com/

## Escenario automatizado

### Login y validación del Dashboard

La prueba realiza las siguientes acciones:

1. Accede a la página de inicio de sesión.
2. Verifica que los elementos principales de la interfaz sean visibles.
3. Ingresa credenciales válidas.
4. Ejecuta el proceso de autenticación.
5. Verifica que el usuario haya iniciado sesión correctamente.
6. Valida información visible dentro del Dashboard.

### Validaciones realizadas

- Logo de OrangeHRM visible.
- Campo Username visible.
- Campo Password visible.
- Botón Login visible.
- Información de copyright visible.
- Nombre del usuario visible después del login.
- Widget "Time at Work" visible en el Dashboard.

## Estructura del proyecto

```text
TestOrange/
│
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   └── support/
│
├── evitenciaExtraTest/
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Instalar dependencias:

```bash
npm install
```

## Ejecución de pruebas

Abrir Cypress:

```bash
npx cypress open
```

Ejecutar pruebas en modo headless:

```bash
npx cypress run
```

## Objetivos de aprendizaje

Este proyecto fue desarrollado para fortalecer conocimientos en:

- Automatización de pruebas E2E.
- Uso de Cypress.
- Validación de elementos en el DOM.
- Manejo de selectores CSS.
- Assertions (Aserciones).
- Automatización de flujos de autenticación.
- Buenas prácticas en pruebas automatizadas.

## Evidencias

La carpeta `evitenciaExtraTest` contiene evidencias y recursos relacionados con la ejecución de las pruebas realizadas durante la práctica.

## Autor

Camilo González

Proyecto desarrollado con fines educativos como parte de mi proceso de formación en Quality Assurance (QA) y Automatización de Pruebas.