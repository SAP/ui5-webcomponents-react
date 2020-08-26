# Description
This repository is the boostratp for all your UI5 WebComponents React project.

# Features

## From a Configuration point of view, it includes:

- Jest Up & Runnning.

- ESLint & EditorConfig Up & Running.

- CommitLint Up & Running.

<!-- - Redux Up & Running. -->

- IE Support.

- Multiple Scripts.


## From a Components and Engines point of view, it inclues:

- Fallback pages (`<ErrorBoundary />`, `<NotFound />` and `<Error />`).

- MockServer Engine (w/ `json-server`).

- HTTP Request Engine (w/ `Request` and `URLProvider`).

<!-- - SessionTimeout Dialog.

- Information Dialog. -->

## From a Hooks point of view, it inclues:

- useActions: Which wraps the redux action.

- useBrowser: Which identifies the user browser.

- useIsMobile: Which identifies the user device perspective.

# Available Scripts

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


## Dev & Not Dev Dependencies

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
