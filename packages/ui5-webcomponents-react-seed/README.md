# Description
The goal of this repository is to increase the boostrap time spent on a new project with several things already set.

# Features

## From a Configuration point of view, it includes:

- JEST Up & Runnning.

- ESLint & EditorConfig Up & Running.

- CommitLint Up & Running.

- Enviroment Variables Up & Running.

- Internalization Up & Running.

- PR Template.

- IE Support.

- Multiple Scripts.

## From a Engine point of view, it includes:

- Fallback Engine (`<ErrorBoundary />`, `<NotFound />` and `<Error />`).

- MockServer Engine (w/ `json-server`).

- HTTP Request Engine (w/ `Request` and `URLProvider`).

- Permission Engine (w/ `RouteValidator` and `ComponentValidator`)

<!-- - SessionTimeout Dialog.

- Information Dialog. -->

## From a Hook point of view, it includes:

- `useBrowser`: Which identifies the user browser.

- `useIsMobile`: Which identifies the user device perspective.

- `useRequest`: Which includes `get`, `post`, `patch`, `delete`, `put` HTTP helpers.

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
