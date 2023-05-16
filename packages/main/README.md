# Why this fork?
This is a fork of @ui5/webcomponents-react meant for internal use at Fioneer.

- **A TreeTable (AnalyticalTable) with variable line heights** is needed. A property called `rowHeight` has been added and can be provided to the data / rows and will be used as line height.
  - To prevent an empty line to appear below a table, it might be needed to set the `rowHeight` prop of the `<AnalyticalTable>` to a non-empty string, e.g. `"individual"`.
- **The AnalyticalTable should contain sections**. To highlight the section title rows (called *section headers* from here on) in the same colour as the header of the table, a property called `isSectionHeader` has been implemented and can be provided to the data / rows.
  - The colour is set to `sapList_HeaderBackground`, which is not used in the story book. 
  - Section headers should also not have a padding in the leftmost cell. It is therefore checked if the row has the property `isSectionHeader`.
- **Subcomponents in an AnalyticalTable do not reserve space**. Therefore, showing subcomponents results in needing to scroll if there are not many rows. To prevent this, a prop for the `<AnalyticalTable>` has been added: `tableHeight`. It sets a fixed height of the table in pixels.

All modifications are commented with `MODIFICATION` in the code to facilitate updating this repository when it is synced with the original @ui5/webcomponents-react repository.


## Default README:

# @ui5/webcomponents-react

React components with Fiori compliant style by leveraging [UI5 Web Components](https://sap.github.io/ui5-webcomponents/).

## Installation

```bash
npm install @ui5/webcomponents-react
```

## Documentation

You can find an interactive documentation in our [Storybook](https://sap.github.io/ui5-webcomponents-react/).

## Contribute

Please check our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/SAP/ui5-webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/SAP/ui5-webcomponents-react).

<!-- Use the force -->
