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
