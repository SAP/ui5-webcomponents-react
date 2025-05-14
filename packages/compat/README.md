# @ui5/webcomponents-react-compat

The `compat` (compatibility) package provides components that were removed in the v2 release but are still available for backwards compatibility.

Some of these components lack accessibility or design support, while others have been replaced by UI5 web components. In general, we recommend using components from this package only as a temporary solution.

## Component Support

Components in this package will not receive any new features. Only critical bugs, that are outside the component's inherent limitations, will be addressed. This package will be maintained until the next major release (which is not currently on our roadmap).

## Installation

```bash
npm install @ui5/webcomponents-react-compat
```

> ⚠️ **Warning:** It is not supported using the v1 `Table` and the v2 `Table` in the same application!

> ⚠️ **Warning:** Please only import components from this package via the file path!

## Compatibility

The legacy v1 (compat) `Table` and the modern v2 `Table` component and some subcomponents both register the same custom element names for `ui5-table`, `ui5-table-row` and `ui5-table-cell`, which will lead to conflicts when they coexist in the same application.

### Recommendation

We strongly recommend migrating fully to the v2 `Table`, especially if the `FilterBar` or `VariantManagement` component is used!

### Importing Components

Importing components from the root (`import { Toolbar } from "@ui5/webcomponents-react-compat"`) is discouraged.
The primary reason is that tree-shaking capabilities are limited in the default configurations of most bundlers in dev mode. As a result, custom elements for the v1 table will still be defined, even if only the `Toolbar` is imported. This can cause unexpected behavior if the v2 table is also used in the same app.

E.g.:

- `import { Table } from '@ui5/webcomponents-react-compat/dist/components/Table/index.js';`
- `import { Toolbar } from '@ui5/webcomponents-react-compat/dist/components/Toolbar/index.js';`

In case you're still facing issues with the custom element definitions of the `Table` in development environments, you can add the web component import before any other component import in your application.

Following are the imports of duplicate custom element names:

- `Table` (`ui5-table`): `import '@ui5/webcomponents-compat/dist/Table.js';`
- `TableCell` (`ui5-table-cell`): `import "@ui5/webcomponents-compat/dist/TableCell.js";`
- `TableRow` (`ui5-table-row`): `import "@ui5/webcomponents-compat/dist/TableRow.js";`

### Experimental Patch Script

The `patch-compat-table` script (included in the `@ui5/webcomponents-react-cli` package) is developed to address specific compatibility issues that arise when using the legacy v1 Table component in conjunction with the `FilterBar` or `VariantManagement` components. These components internally rely on the v2 `Table`, and therefore conflicts will occur when using the v1 `Table`.
The script will change the custom element name by adding a `-v1` suffix (via [patch-package](https://github.com/ds300/patch-package)) to all duplicate v1 table components.

> ⚠️ **Experimental**: This script is in experimental state and not subject to semantic versioning.

> ⚠️ **Temporary Solution:** This script is intended as a temporary workaround. It is strongly recommended to plan for a migration to the v2 Table component to ensure long-term compatibility and support.

<details style="cursor:auto;">

<summary><h4 style="display: inline; margin: 0; font-size:18px; cursor:pointer;">Using the script</h4></summary>

<br />

**What it does**

<p>The script patches the `@ui5/webcomponents-compat` and `@ui5/webcomponents-react-compat` table component and subcomponents components and subcomponents to render with a different custom element name (tag name) compared to the v2 implementation.
This is done internally using `patch-package` to adjust the implementation in the **node_modules**.</p>

**How to use**

<p><b>Install</b> the `@ui5/webcomponents-react-cli` and `@ui5/webcomponents-compat` packages:</p>

```
// install `@ui5/webcomponents-compat` explicitly
npm i @ui5/webcomponents-react-cli @ui5/webcomponents-compat
```

<p><b>Run</b> the script:</p>

```
// ui5-wcr is an executable added by the `@ui5/webcomponents-react-cli` package
ui5-wcr patch-compat-table
```

<p>The `ui5-wcr` executable is provided by the `@ui5/webcomponents-react-cli` package. The `patch-compat-table` command applies the necessary patches.</p>

<p><b>Recommendation:</b></p>

<p>Add the script as `postinstall` script in the `package.json`, so it runs after every module update.</p>

```
{
  "//": "rest of your applications package.json",
  "scripts": {
    "//": "your other scripts",
    "postinstall": "ui5-wcr patch-compat-table"
  }
}
```

</details>

## Documentation

You can find an interactive documentation in our [Storybook](https://sap.github.io/ui5-webcomponents-react/) (Legacy Components).

## Contribute

Please check our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/SAP/ui5-webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/SAP/ui5-webcomponents-react).

<!-- Use the force 2 -->
