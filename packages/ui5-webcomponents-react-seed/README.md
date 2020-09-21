<a name="top"></a>

<p align="center">
  <img src="https://user-images.githubusercontent.com/8363610/93131219-1e36c300-f6aa-11ea-90e6-581d3f8a4491.png" alt="UI5 Web Components for React Seed Logo" />
</p>
<p align="center">
  <a href="https://app.netlify.com/sites/ui5-webcomponents-react-seed/deploys" target="_blank">
    <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/f74e468b-77e5-4acc-b8af-27992ddc5b30/deploy-status">
  </a>
  <a href='https://app.circleci.com/pipelines/github/LuisValgoi/ui5-webcomponents-react-seed' target="_blank">
    <img alt='CircleCI Status' src='https://circleci.com/gh/LuisValgoi/ui5-webcomponents-react-seed.svg?style=shield' />
  </a>
  <a href='https://coveralls.io/github/LuisValgoi/ui5-webcomponents-react-seed' target="_blank">
    <img alt='Coverage Status' src='https://coveralls.io/repos/github/LuisValgoi/ui5-webcomponents-react-seed/badge.svg' />
  </a>
  <a href="https://github.com/prettier/prettier" target="_blank">
    <img alt="code style: prettier" src="https://badgen.net/badge/code%20style/prettier?color=pink">
  </a>
  <a href="https://www.npmjs.com/package/cra-template-ui5-webcomponents-react-seed" target="_blank">
    <img alt="code style: prettier" src="https://badgen.net/npm/v/cra-template-ui5-webcomponents-react-seed?icon=npm">
  </a>
</p>

`ui5-webcomponents-react-seed` deacreases the boostrap time spent on new projects, POCs or MVPs which uses **React + UI5 WebComponents React** by leveraging several out-of-the-box components, scripts & configurations.

# Usage

- open the terminal;
- `npx create-react-app PROJECT_NAME --template ui5-webcomponents-react-seed`;
- cd into `PROJECT_NAME`;
- (no need to run `yarn install` since it already installs it for you);
- run the available scripts.

PS.: It is important to add the `--template ui5-webcomponents-react-seed` at the end to get our template.

# Configuration Included

- JEST Up & Runnning;

- ESLint & EditorConfig Up & Running;

- CommitLint Up & Running;

- Enviroment Variables Up & Running;

- Internalization Up & Running;

- PR Template;

- IE Support;

- Multiple Scripts.

# Engine Included

- Fallback Engine (`<ErrorBoundary />`, `<NotFound />` and `<Error />`);

- MockServer Engine (w/ `json-server`);

- HTTP Request Engine (w/ `Request` and `URLProvider`);

- Permission Engine (w/ `RouteValidator` and `ComponentValidator`).

# Hooks Included

- `useRequest`: Which includes `get`, `post`, `patch`, `delete`, `put` HTTP helpers;

- `useAuthority`: Which includes `hasAccess` helpers.

# Scripts Included

In the project directory, you can run:

## Up & Running

### `yarn start`

Runs the app in the development mode @ [http://localhost:3000](http://localhost:3000).

⚠️ It requires an AppRouter or a BackEnd up & running @ `<domain>:<port>/api`.

### `yarn mock`

Runs the app in the development mode @ [http://localhost:3001](http://localhost:3000) w/ json-server.

## Testing

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn test:ci`

Executes the test runner without the interactive watch mode.

### `yarn test:coverage`

Executes the test runner and generates the report.

## Checks

### `yarn lint`

Checks all the files of the project according to the `.eslintrc.js` pre stablished configuration.

### `yarn lint:fix`

Fixes all the files of the project according to the `.eslintrc.js` pre stablished configuration.

### `yarn prettier`

Checks all the files of the project according to the `.prettierrc` pre stablished configuration.

### `yarn prettier:fix`

Fixes all the files of the project according to the `.prettierrc` pre stablished configuration.

## Deploy

### `yarn build`

Builds the app for production to the `build` folder.

# Suggested Extensions

### [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

This will help you when building the JSX files by renaming the closing for you.

### [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

This will help you to use the defined coding style at the `.editoronfig` file during development.

### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

This will help you to use the defined coding style at the `.eslintrc` file during development.

### [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) & [Jest Runner](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

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

### `react-device-detect``

Used to identify the device, browser, ratios and etc.

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
