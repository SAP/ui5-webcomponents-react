import{j as t}from"./jsx-runtime-5926aa06.js";import{C as p,A as m}from"./DomRefTable.module-2c3fee7b.js";import{D as h}from"./DocsHeader-7a932e7b.js";import{F as l}from"./Footer-172042a0.js";import"./index-ebeaab24.js";import{M as d,C as c,a as n}from"./chunk-PCJTTTQV-4e89d9f3.js";import{C as u,D as s,W as g}from"./Wizard.stories-46cb2d50.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{u as a}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-2b834fa7.js";import"./iframe-d7e4e9dc.js";import"../sb-preview/runtime.js";import"./UI5Element-784c80b7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-a5230073.js";import"./Icons-e56d104a.js";import"./decline-02d24632.js";import"./i18n-defaults-80781f7e.js";import"./information-aaa07e0e.js";import"./class-map-519e9c6d.js";import"./Button-0cdf0df4.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-c65c86f0.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-a40016d3.js";import"./index-672bfa7a.js";import"./Link-d48f545c.js";import"./WrappingType-b81e595a.js";import"./index-8c5338d1.js";import"./Label-07c40881.js";import"./index-9c09ad76.js";import"./index-00054e05.js";import"./Popover-aaa493d1.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6cc8839e.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-a5a6237e.js";import"./FocusableElements-9503dbb2.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-846eb684.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./index-9aabde06.js";import"./index-22bfd3da.js";import"./CheckBox-0dc7f77e.js";import"./ValueState-2c5e5904.js";import"./accept-83b05845.js";import"./ValueState-ab6838cc.js";import"./index-44dd9054.js";import"./Input-5ed4a2bb.js";import"./Suggestions.css-4e0c49ee.js";import"./ResponsivePopoverCommon.css-b43b8141.js";import"./ValueStateMessage.css-202e3b47.js";import"./index-8b4a9b90.js";import"./Title-693a182d.js";import"./ItemNavigation-18d1bc39.js";import"./Float-99d99064.js";import"./debounce-9c2fb7dd.js";import"./ResponsivePopover-53484bae.js";import"./Dialog-5c8482e3.js";import"./i18n-defaults-217b10b4.js";import"./parameters-bundle.css-deb4e0b1.js";const b=`## Structure

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

\` <Dialog style="height: 80%">   \`\`<Wizard></Wizard>   \`\`</Dialog> \`

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
`,w="**Since:** 0.12.0\n\nA component that represents a logical step as part of the `Wizard`. It is meant to aggregate arbitrary HTML elements that form the content of a single step.\n\n### Structure\n\n- Each wizard step has arbitrary content.\n- Each wizard step might have texts - defined by the `titleText` and `subtitleText` properties.\n- Each wizard step might have an icon - defined by the `icon` property.\n- Each wizard step might display a number in place of the `icon`, when it's missing.\n\n### Usage\n\nThe `WizardStep` component should be used only as slot of the `Wizard` component and should not be used standalone\n";function qt(e={}){const{wrapper:i}=Object.assign({},a(),e.components);return i?t.jsx(i,Object.assign({},e,{children:t.jsx(r,{})})):r();function r(){const o=Object.assign({h2:"h2"},a(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:u}),`
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
`,t.jsx(l,{})]})}}export{qt as default};
//# sourceMappingURL=Wizard-1b9f5e5f.js.map
