# @ui5/webcomponents-react-charts

Chart library built on top of [recharts](https://recharts.org/) for ui5-webcomponents-react.

## Installation

```bash
npm install @ui5/webcomponents-react-charts
```

## Accessibility

Charts only offer limited accessibility support with only basic built-in features, so it’s essential to ensure your implementation meets the accessibility standards of your application.

## React 19 support

To use this library with React 19 you have to override your `react-is` version to match your React version!

- **npm:**

  ```json
    "overrides": {
      "react-is": "19.1.0"
    },
  ```

- **yarn**

  ```json
    "resolutions": {
      "react-is": "19.1.0"
    },
  ```

## Static CSS

If you’ve enabled `staticCSSInjected` on the `ThemeProvider` component ([learn more here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-server-side-rendering--docs#add-to-existing-project)), make sure to also import the `charts` stylesheet. Otherwise, charts won’t be rendered correctly.

```ts
import '@ui5/webcomponents-react-charts/styles.css';
```

## Documentation

You can find an interactive documentation in our [Storybook](https://sap.github.io/ui5-webcomponents-react/).

## Contribute

Please check our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/SAP/ui5-webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/SAP/ui5-webcomponents-react).

<!-- Use the force -->
