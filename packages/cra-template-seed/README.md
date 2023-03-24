<a name="top"></a>

<p align="center">
  <img src="https://user-images.githubusercontent.com/8363610/93131219-1e36c300-f6aa-11ea-90e6-581d3f8a4491.png" alt="UI5 Web Components for React Seed Logo" />
</p>

This seed decreases the bootstrap time spent on new projects, POCs or MVPs using [**UI5 Web Components for React**](https://github.com/SAP/ui5-webcomponents-react) by leveraging several out-of-the-box components, scripts & configurations.

# Usage

```shell script
npx create-react-app my-app --template @ui5/webcomponents-react-seed
npm run start
```

# Configuration Included

- JEST Up & Running;

- ESLint & EditorConfig Up & Running;

- CommitLint Up & Running;

- Environment Variables Up & Running;

- Internalization Up & Running;

# Engine & Samples Included

- Fallback Engine (`<ErrorBoundary />`, `<NotFound />` and `<Error />`);

- MockServer Engine (w/ `json-server`);

- API HTTP Request Engine (w/ `Request`);

- Permission Engine (w/ `RouteWithAuthorizationRestriction` and `ComponentWithAuthorizationRestriction`).

- ToDo Form Edition w/ `yup` and `formik`.

# Hooks Included

- `useAuthority`: Which includes `hasAccess` helpers.

- `useLocalStorageState`: Helps you to sync your component state with the `localStorage`.

# Project Structure

Following one of the several recommendations for structuring files on a React based project, the seed use: [Grouping by file type](https://reactjs.org/docs/faq-structure.html#grouping-by-file-type).

The only custom change we have incremented were the Custom Components and the folder for each project containing the `tests` artefacts.

# Scripts Included

In the project directory, you can run:

## Up & Running

### `npm run start`

Runs the app in the development mode @ [http://localhost:3000](http://localhost:3000) with mock data.

In case you have a local approuter or backend running, you can create a `.env.development.local` file and copy the
contents of `.env.production` into that file. This will then skip the start of the mockserver and connect to your
"real" backend.

More Information about creating local environment overrides can be found in the
[create-react-app documentation](https://create-react-app.dev/docs/adding-custom-environment-variables).

## Testing

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run test:ci`

Executes the test runner without the interactive watch mode.

### `npm run test:coverage`

Executes the test runner and generates the report.

## Checks

### `npm run lint`

Checks all the files of the project according to the `eslint` config.

### `npm run lint:fix`

Fixes all the files of the project according to the `eslint` config.

### `npm run prettier`

Checks all the files of the project according to the `.prettierrc` configuration.

### `npm run prettier:fix`

Fixes all the files of the project according to the `.prettierrc` configuration.

## Deploy

### `npm run build`

Builds the app for production to the `build` folder.

# Suggested Extensions

### [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

This will help you when building the JSX files by renaming the closing for you.

### [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

This will help you to use the defined coding style at the `.editoronfig` file during development.

### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

This will help you to use the defined coding style at the `.eslintrc` file during development.

### [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) & [Jest Runner](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

This will help you run and debug your `*.test.js` file during test-development.

### [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)

This will help you better see the folders and files icons according to its extensions/subject.

### [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

This will enforces a consistent style by parsing your code and re-printing it with its own rules, wrapping code when necessary.

# Dependencies Included

### `types/jest`

Autocomplete/Intellisense your testing methods from the JEST lib.

### `react-query`

Used to manipulate async request, data fetching, cache and more.

[Tutorial Link](https://www.youtube.com/watch?v=yccbCol546c), [Random Post](https://blog.bitsrc.io/how-to-start-using-react-query-4869e3d5680d) and [Creator Official Video](https://www.youtube.com/watch?v=seU46c6Jz7E).

### `react-helmet`

Used to manipulate DOM attributes through JSX such as `<head>`.

### `react-i18next`

Used to translate strings and text in the application following the Internationalization pattern.

### `i18next-browser-languagedetector`

Used to identify the browsers culture and change the applications text accordingly.

### `commitlint`

Used to check the commits before actually commits.

### `husky` & `lint-staged`

Used to run checks before committing changes to git.

### `nodemon`

Used to update the files without restarting the server.

### `npm-run-all`

Used to run multiple commands without worrying about OS syntax.

### `jest & jest-enviroment-jsom-sixteen`

Used to support jest and its scripts with the new engine.

<!-- Use the force -->
