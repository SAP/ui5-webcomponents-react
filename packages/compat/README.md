# @ui5/webcomponents-react-compat

The `compat` (compatibility) package provides components that were removed in the v2 release but are still available for backwards compatibility.

Some of these components lack accessibility or design support, while others have been replaced by UI5 web components. In general, we recommend using components from this package only as a temporary solution.

## Component Support

Components in this package will not receive any new features. Only critical bugs, that are outside the component's inherent limitations, will be addressed. This package will be maintained until the next major release (which is not currently on our roadmap).

## Installation

```bash
npm install @ui5/webcomponents-react-compat
```

## Importing Components

As the v1 `ui5-table` (`Table`) component is part of this package and some custom element names are equal to the new v2 `ui5-table`, importing components from the root (`import { Table } from "@ui5/webcomponents-react-compat"`) is discouraged.
The primary reason is that tree-shaking capabilities are limited in the default configurations of most bundlers in dev mode. As a result, custom elements for the v1 table will still be defined, even if only the `Toolbar` is imported. This can cause unexpected behavior if the v2 table is also used in the same app.

**Please only import components from the file path!**

E.g.:

- `import { Table } from '@ui5/webcomponents-react-compat/dist/components/Table/index.js';`
- `import { Toolbar } from '@ui5/webcomponents-react-compat/dist/components/Toolbar/index.js';`

**It is not supported using the v1 `Table` and the v2 `Table` in the same application!**

## Documentation

You can find an interactive documentation in our [Storybook](https://sap.github.io/ui5-webcomponents-react/) (Legacy Components).

## Contribute

Please check our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/SAP/ui5-webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/SAP/ui5-webcomponents-react).

<!-- Use the force 2 -->
