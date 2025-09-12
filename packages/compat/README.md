# @ui5/webcomponents-react-compat

The `compat` (compatibility) package provides components that were removed in the v2 release but are still available for backwards compatibility.

Some of these components lack accessibility or design support, while others have been replaced by UI5 web components. In general, we recommend using components from this package only as a temporary solution.

## Component Support

Components in this package will not receive any new features. Only critical bugs, that are outside the component's inherent limitations, will be addressed. This package will be maintained until the next major release (which is not currently on our roadmap).

## Installation

```bash
npm install @ui5/webcomponents-react-compat
```

> ⚠️ **Warning:** It is not supported using the v1 `Table` and the v2 `Table` in the same application without "compat" package scoping!

> ⚠️ **Warning:** Please only import components from this package via the file path!

## Compatibility

The legacy v1 (compat) `Table` and the modern v2 `Table` component and some subcomponents both register the same custom element names for `ui5-table`, `ui5-table-row` and `ui5-table-cell`, which will lead to conflicts when they coexist in the same application. To solve this, please see the section about scoping below.

### Recommendation

We strongly recommend migrating fully to the v2 `Table`, especially if the `FilterBar` or `VariantManagement` component is used!

### Importing Components

Importing components from the root (`import { Toolbar } from "@ui5/webcomponents-react-compat"`) is discouraged.
The primary reason is that tree-shaking capabilities are limited in the default configurations of most bundlers in dev mode. As a result, custom elements for the v1 table will still be defined, even if only the `Toolbar` is imported. This can cause unexpected behavior if the v2 table is also used in the same app.

Following are the imports of duplicate custom element names:

- `Table` (`ui5-table`): `import '@ui5/webcomponents-compat/dist/Table.js';`
- `TableCell` (`ui5-table-cell`): `import "@ui5/webcomponents-compat/dist/TableCell.js";`
- `TableRow` (`ui5-table-row`): `import "@ui5/webcomponents-compat/dist/TableRow.js";`

To avoid issues, please always import components from the compat package via the file path.

**Before v2.14.0:**

- `import { Table } from '@ui5/webcomponents-react-compat/dist/components/Table/index.js';`
- `import { Toolbar } from '@ui5/webcomponents-react-compat/dist/components/Toolbar/index.js';`

**Since v2.14.0:**

- `import { Table } from '@ui5/webcomponents-react-compat/Table';`
- `import { Toolbar } from '@ui5/webcomponents-react-compat/Toolbar';`

In case you're still facing issues with the custom element definitions of the `Table` in development environments, please consider using compat package scoping.

### Compat Scoping: Using the Compat (v1) Table Together with the v2 Table in One Application

As of **v2.12.0** of `@ui5/webcomponents-compat`, a dedicated **scoping mechanism** is available for custom elements from the compat package.

> **Note:** This feature is different from the general [scoping mechanism](https://sap.github.io/ui5-webcomponents/docs/advanced/scoping/) and applies **only** to custom elements from the compatibility package (Table and its subcomponents).

Setting up scoping for the compat package is done in the same way as general scoping, but with specific methods coming from `@ui5/webcomponents-compat`.

```js
//scoping.js
import { setCompatCustomElementsScopingSuffix } from '@ui5/webcomponents-compat/dist/utils/CompatCustomElementsScope.js';
setCompatCustomElementsScopingSuffix('compat');

// app main file, e.g index.js, main.tsx, etc.
import './scoping.js';
// now, all other component imports - the scoping config import must be the first import of the app
import { Table } from '@ui5/webcomponents-react-compat/Table';
```

## Documentation

You can find an interactive documentation in our [Storybook](https://sap.github.io/ui5-webcomponents-react/) (Legacy Components).

## Contribute

Please check our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/SAP/ui5-webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/UI5/webcomponents-react).

<!-- Use the force 2 -->
