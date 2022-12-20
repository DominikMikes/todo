

# Todo

This project is used for many todo apps with many different frameworks.

## Development server

Run `ng serve express-backend` for a dev server with an express backend running.

Run `ng serve react-todo` for a dev server with a react app running. Navigate to http://localhost:4201/. The app will automatically reload if you change any of the source files.

Run `ng serve ng-todo` for a dev server with an angular app running. Navigate to http://localhost:4202/. The app will automatically reload if you change any of the source files.

## Build

Run `ng build react-todo`, `ng build ng-todo` or `ng build express-backend` to build the projects. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

<br><br>
# 🚀 Deployment and Hosting
Hosted app (ng-todo only) with Firebase<br>
Deploy steps:
1. `nx build --prod`
2. `firebase deploy`

Deploy folder `"public": "dist/apps/ng-todo"`.

Visit the app: [Todo](https://todo-7671a.web.app/)

Usefull documentation for Firebase hosting on Github:<br>
https://github.com/marketplace/actions/deploy-to-firebase-hosting
