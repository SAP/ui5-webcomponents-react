import{j as t}from"./jsx-runtime-6b79a019.js";import{C as p,A as m}from"./DomRefTable.module-0deca827.js";import{D as h}from"./DocsHeader-6052bdae.js";import{F as l}from"./Footer-3e7afb62.js";import"./index-ccf6a75d.js";import{M as d,C as c,b as n}from"./chunk-PCJTTTQV-7486b0f8.js";import{C as u,D as s,W as g}from"./Wizard.stories-e6536d29.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{u as a}from"./index-f2208173.js";import"./react-jss.esm-0528916b.js";import"./inheritsLoose-93e09647.js";import"./index-212fcdfb.js";import"./iframe-3c17aa59.js";import"../sb-preview/runtime.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-03662f7f.js";import"./utils-f515de3e.js";import"./useIsomorphicLayoutEffect-0a189966.js";import"./slot-76e48863.js";import"./Icon-3498e12d.js";import"./Icons-234bf59e.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./information-2644a02f.js";import"./class-map-341004db.js";import"./Button-3da2aede.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-1a83921e.js";import"./index-d3b71bde.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-2d3c4974.js";import"./index-dabbc199.js";import"./Integer-f7f172c9.js";import"./index-d4c08482.js";import"./Avatar-d7b74462.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-b3f1ebe8.js";import"./index-cd180eaf.js";import"./Link-6cd3dd1c.js";import"./WrappingType-b81e595a.js";import"./index-c4470453.js";import"./TableOfContent-6d956274.js";import"./index-a03453fb.js";import"./Label-f867a533.js";import"./index-8d7a8128.js";import"./index-10622f2d.js";import"./index-ae4783af.js";import"./Popover-1f09fd29.js";import"./PopupsCommon.css-fd974b5a.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-9183c00a.js";import"./BrowserScrollbar.css-bcc05298.js";import"./react-18-74db5ca2.js";import"./mapValues-4f30c9d2.js";import"./_baseForOwn-1047660d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-f4b610e7.js";import"./_baseUniq-a28bb1ec.js";import"./index-356e4a49.js";import"./index-d0d27867.js";import"./CheckBox-05a648ec.js";import"./ValueState-2c5e5904.js";import"./accept-6c83709e.js";import"./ValueState-ab6838cc.js";import"./index-a09dddb5.js";import"./Input-2543fb7f.js";import"./Suggestions.css-439ce336.js";import"./ResponsivePopoverCommon.css-94d32982.js";import"./ValueStateMessage.css-e895ae9f.js";import"./index-8d47918b.js";import"./Title-01e28931.js";import"./ItemNavigation-a882fb90.js";import"./Float-99d99064.js";import"./debounce-9c2fb7dd.js";import"./ResponsivePopover-63d0a1b7.js";import"./Dialog-b040586c.js";import"./i18n-defaults-b490e4f6.js";import"./parameters-bundle.css-f9dc8928.js";const b=`## Structure

### Navigation area

The top most area of the \`Wizard\` is occupied by the navigation area. It shows the sequence of steps, where the recommended number of steps is between 3 and 8 steps.

- Steps can have different visual representations - numbers or icons.
- Steps might have labels for better readability - titleText and subTitleText.
- Steps are defined by using the \`Wizard-step\` as slotted element within the \`Wizard\`.

**Note:** If no selected step is defined, the first step will be auto selected.  
**Note:** If multiple selected steps are defined, the last step will be selected.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Wizard\` exposes the following CSS Shadow Parts:

- navigator - Used to style the progress navigator of the \`Wizard\`.
- step-content - Used to style a \`Wizard-step\` container.

## Keyboard Handling

The user can navigate using the following keyboard shortcuts:

### Wizard Progress Navigation

- \\[LEFT\\], \\[DOWN\\] - Focus moves backward to the WizardProgressNavAnchors.
- \\[UP\\], \\[RIGHT\\] - Focus moves forward to the WizardProgressNavAnchor.
- \\[SPACE\\] or \\[ENTER\\], \\[RETURN\\] - Selects an active step
- \\[HOME\\] or \\[PAGE UP\\] - Focus goes to the first step
- \\[END\\] or \\[PAGE DOWN\\] - Focus goes to the last step

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`

### Content

The content occupies the main part of the page. It can hold any type of HTML elements. It's defined by using the \`Wizard-step\` as slotted element within the \`Wizard\`.

## Scrolling

The component handles user scrolling by selecting the closest step, based on the current scroll position and scrolls to particular place, when the user clicks on the step within the navigation area.

**Important:** In order the component's scrolling behaviour to work, it has to be limited from the outside parent element in terms of height. The component or its parent has to be given percentage or absolute height. Otherwise, the component will be scrolled out with the entire page.

**For example:**

\`<Dialog style="height: 80%">   \`\`<Wizard></Wizard>   \`\`</Dialog>\`

### Moving to next step

The \`Wizard-step\` provides the necessary API and it's up to the user of the component to use it to move to the next step. You have to set its \`selected\` property (and remove the \`disabled\` one if set) to \`true\`. The \`Wizard\` will automatically scroll to the content of the newly selected step.

The Fiori 3 guidelines recommends having a "nextStep" button in the content area. You can place a button, or any other type of element to trigger step change, inside the \`Wizard-step\`, and show/hide it when certain fields are filled or user defined criteria is met.

## Usage

### When to use:

When the user has to accomplish a long or unfamiliar task.

### When not to use:

When the task has less than 3 steps.

## Responsive Behavior

On small widths the step's titleText, subtitleText and separators in the navigation area shrink and from particular point the steps are grouped together and overlap. Tapping on them will show a popover to select the step to navigate to. On mobile device, the grouped steps are presented within a dialog.
`,w=`**Since:** 0.12.0  
**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).

A component that represents a logical step as part of the \`Wizard\`. It is meant to aggregate arbitrary HTML elements that form the content of a single step.

### Structure

- Each wizard step has arbitrary content.
- Each wizard step might have texts - defined by the \`titleText\` and \`subtitleText\` properties.
- Each wizard step might have an icon - defined by the \`icon\` property.
- Each wizard step might display a number in place of the \`icon\`, when it's missing.

### Usage

The \`WizardStep\` component should be used only as slot of the \`Wizard\` component and should not be used standalone
`;function Vt(e={}){const{wrapper:i}=Object.assign({},a(),e.components);return i?t.jsx(i,Object.assign({},e,{children:t.jsx(r,{})})):r();function r(){const o=Object.assign({h2:"h2"},a(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:u}),`
`,t.jsx(h,{since:"0.12.0"}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(c,{of:s}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(p,{of:s}),`
`,t.jsx(n,{children:b}),`
`,t.jsx(n,{children:f}),`
`,t.jsx(o.h2,{id:"wizardstep",children:"WizardStep"}),`
`,t.jsx(n,{children:w}),`
`,t.jsx(m,{of:g}),`
`,t.jsx(l,{})]})}}export{Vt as default};
//# sourceMappingURL=Wizard-cb740e88.js.map
