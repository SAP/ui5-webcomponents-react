**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).<br/>**Since:** 0.12.0

A component that represents a logical step as part of the `Wizard`. It is meant to aggregate arbitrary HTML elements that form the content of a single step.

### Structure

- Each wizard step has arbitrary content.
- Each wizard step might have texts - defined by the `titleText` and `subtitleText` properties.
- Each wizard step might have an icon - defined by the `icon` property.
- Each wizard step might display a number in place of the `icon`, when it's missing.

### Usage

The `WizardStep` component should be used only as slot of the `Wizard` component and should not be used standalone
