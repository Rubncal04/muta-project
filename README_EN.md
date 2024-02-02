# Muta Project

This is a test project to apply for the position of Backend Developer at Muta company.

## Installation

To get started, download the project from the repository [Repo](https://github.com/Rubncal04/muta-project). Once downloaded, follow these steps:

1. Install the dependencies by running the following command at the root of the project:

```bash
npm install
```

2. Create a file named `.env` in the root folder of the project and add the following environment variables:

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

Make sure to configure the values according to your preferences. It is important to note that the `NODE_ENV` variable should be set to "test".

## Final Project Configurations

Once the dependencies are installed and the `.env` file is configured, run the following commands to finalize the project setup:

1. To create the local database, run:

```bash
npm run create_db
```

2. Then, to create the necessary tables, run:

```bash
npm run migrations_test
```

With these commands, your project will be fully configured.

## Getting Started

Once configured, you can start the server by running the following command:

```bash
npm start
```

or

```bash
npm run start
```

Now you are ready to start working on your project!

Aquí está la sección adicional sobre las pruebas de modelos y rutas agregada al README en formato Markdown, pero esta vez en inglés:

## Model Tests

Inside the project, you will find a folder named `specs`, and within it, a folder named `models`, where all model tests for the different entities managed are housed.

To run the tests, you can use the following command:

```bash
npm run test
```

This command will execute all integrated tests in the project. If you wish to specify which tests to run, you can do so as follows:

```bash
npm run test {path to the file you want to test}
```

For example:

```bash
npm run test ./src/specs/models/user.spec.js
```

## Route Tests

Similar to model tests, there are tests to test the routes and ensure that they are creating the different records correctly.

To execute the route tests, you can use the following command to run all existing tests within the project:

```bash
npm run test
```

Alternatively, if you want to run only a specific test file, you can do so as follows:

```bash
npm run test {path to the test file}
```

For example:

```bash
npm run test ./src/specs/routes/user.spec.js
```

It is important to note that there is hardcoded information in the tests, so if you need all tests to pass, you must ensure that there are records in the database and modify authentication tokens as needed.

