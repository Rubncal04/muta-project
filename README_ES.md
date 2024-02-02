# Muta Project

Este es un proyecto de prueba para aplicar al cargo de Backend Developer para la empresa Muta.

## Instalación

Para comenzar, descarga el proyecto del repositorio [Repo](https://github.com/Rubncal04/muta-project). Una vez descargado, sigue estos pasos:

1. Instala las dependencias ejecutando el siguiente comando en la raíz del proyecto:

```bash
npm install
```

2. Crea un archivo llamado `.env` en la carpeta raíz del proyecto y agrega las siguientes variables de entorno:

```
USER_NAME=
PASSWORD=
DATABASE=
HOST=
DIALECT=
DATABASE_PORT=
SSL=
USE_UTC=
LOGGING=
PORT=
NODE_ENV=test
JWT_KEY=
```

Asegúrate de configurar los valores según tus preferencias. Es importante destacar que la variable `NODE_ENV` debe estar establecida en "test".

## Configuraciones finales del proyecto

Una vez instaladas las dependencias y configurado el archivo `.env`, ejecuta los siguientes comandos para finalizar la configuración del proyecto:

1. Para crear la base de datos en local, ejecuta:

```bash
npm run create_db
```

2. Luego, para crear las tablas necesarias, ejecuta:

```bash
npm run migrations_test
```

Con estos comandos, tu proyecto estará completamente configurado.

## Empezar a trabajar

Una vez configurado, puedes iniciar el servidor ejecutando el siguiente comando:

```bash
npm start
```

o

```bash
npm run start
```

¡Ahora estás listo para empezar a trabajar en tu proyecto!

Aquí está la sección adicional sobre los test de modelos y rutas:


## Pruebas de Modelos

Dentro del proyecto, encontrarás una carpeta llamada `specs`, y dentro de ella, una carpeta llamada `models`, donde se alojan todas las pruebas de modelos para las diferentes entidades manejadas.

Para ejecutar los tests, puedes utilizar el siguiente comando:

```bash
npm run test
```

Este comando ejecutará todos los tests integrados en el proyecto. Si deseas especificar qué tests ejecutar, puedes hacerlo de la siguiente manera:

```bash
npm run test {ruta del archivo que quieres testear}
```

Por ejemplo:

```bash
npm run test ./src/specs/models/user.spec.js
```

## Pruebas de Rutas

Al igual que con los modelos, existen pruebas para probar las rutas y asegurarse de que estas estén creando los diferentes registros correctamente.

Para ejecutar los tests de rutas, puedes utilizar el siguiente comando para ejecutar todos los tests existentes dentro del proyecto:

```bash
npm run test
```

O, si deseas ejecutar solo un archivo de test específico, puedes hacerlo de la siguiente manera:

```bash
npm run test {ruta del archivo de prueba}
```

Por ejemplo:

```bash
npm run test ./src/specs/routes/user.spec.js
```

Es importante tener en cuenta que en los tests hay información pegada, por lo que si necesitas que todos los tests pasen, debes asegurarte de tener registros en la base de datos y modificar los tokens de autenticación según sea necesario.
