# Goal

To deacrease the boostrap time spent on projects which uses **React + UI5 WebComponents React**.

[![Coverage Status](https://coveralls.io/repos/github/LuisValgoi/ui5-webcomponents-react-seed/badge.svg?branch=master)](https://coveralls.io/github/LuisValgoi/ui5-webcomponents-react-seed?branch=master)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f74e468b-77e5-4acc-b8af-27992ddc5b30/deploy-status)](https://app.netlify.com/sites/ui5-webcomponents-react-seed/deploys)

# Usage

- open the terminal;
- go to a random folder you want;
- `npx create-react-app folderrr --template ui5-webcomponents-react-seed`;
- cd into `folderrr`;
- (no need to run `yarn install` since it already installs it for you);
- run `yarn test:ci` or any other;
- have fun with the other scripts;

PS.: It is important to add the `--template ui5-webcomponents-react-seed` at the end to get our template.

# Getting Started

Once you have created your project using the `ui5-webcomponents-react-seed` template, you can start by:

- `yarn install`: To install this project dependencies.

- `yarn mock`: To run this project with json-server.

- `yarn start`: To run this project with backend (⚠️ currently not supported).

# Configuration Included

- JEST Up & Runnning.

- ESLint & EditorConfig Up & Running.

- CommitLint Up & Running.

- Enviroment Variables Up & Running.

- Internalization Up & Running.

- PR Template.

- IE Support.

- Multiple Scripts.

# Engine Included

- Fallback Engine (`<ErrorBoundary />`, `<NotFound />` and `<Error />`).

- MockServer Engine (w/ `json-server`).

- HTTP Request Engine (w/ `Request` and `URLProvider`).

- Permission Engine (w/ `RouteValidator` and `ComponentValidator`)

# Hooks Included

- `useBrowser`: Which identifies the user browser.

- `useIsMobile`: Which identifies the user device perspective.

- `useRequest`: Which includes `get`, `post`, `patch`, `delete`, `put` HTTP helpers.

- `useAuthority`: Which includes `hasAccess` helpers.

# Scripts Included

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode @ [http://localhost:3000](http://localhost:3000).

### `yarn mock`

Runs the app in the development mode @ [http://localhost:3001](http://localhost:3000) w/ json-server.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn test:ci`

Executes the test runner without the interactive watch mode.

### `yarn test:coverage`

Executes the test runner and generates the report.

### `yarn build`

Builds the app for production to the `build` folder.

# Suggested Extensions

### [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

This will help you when building the JSX files by renaming the closing for you.

### [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

This will help you to use the defined coding style at the `.editoronfig` file during development.

### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

This will help you to use the defined coding style at the `.eslintrc` file during development.

### [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest#the-aim) & [Jest Runner](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

This will help you run and debug your `*.test.js` file during file during test-development.

### [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)

This will help you better see the folders and files icons according to its extensions/subject.

### [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

This will enforces a consistent style by parsing your code and re-printing it with its own rules, wrapping code when necessary.

# Dependencies Included

### `types/jest`

Autocomplete/Intelissense your testing methods from the JEST lib.

### `react-query`

Used to manipulate async request, data fetching, cache and more (no redux / saga anymore).

[Tutorial Link](https://www.youtube.com/watch?v=yccbCol546c), [Random Post](https://blog.bitsrc.io/how-to-start-using-react-query-4869e3d5680d) and [Creator Official Video](https://www.youtube.com/watch?v=seU46c6Jz7E).

### `react-helmet`

Used to manpilate DOM attributes through JSX such as `<head>`.

### `react-i18next`

Used to translate strings and text in the application following the Internationalization pattern.

### `i18next-browser-languagedetector`

Used to identify the browsers culture and change the applications text accordingly.

### `commitlint`

Used to check the commits before actually commits.

### `env-cmd`

Used for embed the enviroment variables during the API URL build.

### `husky`

Used to provide a checker before actions.

### `nodemon`

Used to update the files without restarting the server.

### `npm-run-all`

Used to run multiple commands without worrying about OS syntax.

### `react-app-polyfill`

Used to support old browsers.

### `jest & jest-enviroment-jsom-sixteen`

Used to support jest and its scripts with the new engine.

# Contributing

Take a look into our Kanban Board [here](https://github.com/LuisValgoi/ui5-webcomponents-react-seed/projects/1?fullscreen=true).
