import{j as t}from"./jsx-runtime-5926aa06.js";import{C as p,A as m}from"./DomRefTable.module-dd6030b3.js";import{D as h}from"./DocsHeader-281904b3.js";import{F as l}from"./Footer-1912d03f.js";import"./index-ebeaab24.js";import{M as d,C as c,a as n}from"./chunk-PCJTTTQV-122c6379.js";import{C as u,D as s,W as g}from"./Wizard.stories-d5286822.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{u as a}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-14010a30.js";import"./iframe-161b2af3.js";import"../sb-preview/runtime.js";import"./UI5Element-b6f0d493.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-d703a0b9.js";import"./Icons-e2180d53.js";import"./decline-b90c4a5f.js";import"./i18n-defaults-80781f7e.js";import"./information-33412b2a.js";import"./class-map-6a9bd920.js";import"./Button-dc6eb42e.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-3f99aa96.js";import"./i18n-defaults-18f6652d.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-aaf25c56.js";import"./index-9f57ca12.js";import"./Integer-f7f172c9.js";import"./index-5e0fad08.js";import"./Avatar-81a3aee4.js";import"./ResizeHandler-021ae412.js";import"./employee-dc1adeb6.js";import"./index-fc03c687.js";import"./index-c26c5899.js";import"./Link-96b46196.js";import"./WrappingType-b81e595a.js";import"./index-b9e92427.js";import"./TableOfContent-db5a1d46.js";import"./index-9ddd836b.js";import"./Label-4abbc3da.js";import"./index-9c09ad76.js";import"./index-2a9353aa.js";import"./Popover-fafbd2ef.js";import"./PopupUtils-46fb16e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-47573c24.js";import"./FocusableElements-6ebe483a.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./index-55baf48f.js";import"./index-a55662b8.js";import"./CheckBox-ac24e34a.js";import"./ValueState-2c5e5904.js";import"./accept-cf6ab22a.js";import"./ValueState-ab6838cc.js";import"./index-5fce8ba1.js";import"./Input-ebe84755.js";import"./Suggestions.css-c09befdb.js";import"./ResponsivePopoverCommon.css-50da1549.js";import"./ValueStateMessage.css-b22c5ae7.js";import"./index-29d89fed.js";import"./Title-6c23a67a.js";import"./ItemNavigation-9ba0e1fe.js";import"./Float-99d99064.js";import"./debounce-9c2fb7dd.js";import"./ResponsivePopover-02c632f2.js";import"./Dialog-75ee043a.js";import"./i18n-defaults-44d0f21e.js";import"./parameters-bundle.css-5626463c.js";const b=`## Structure

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
`,w="**Since:** 0.12.0\n\nA component that represents a logical step as part of the `Wizard`. It is meant to aggregate arbitrary HTML elements that form the content of a single step.\n\n### Structure\n\n- Each wizard step has arbitrary content.\n- Each wizard step might have texts - defined by the `titleText` and `subtitleText` properties.\n- Each wizard step might have an icon - defined by the `icon` property.\n- Each wizard step might display a number in place of the `icon`, when it's missing.\n\n### Usage\n\nThe `WizardStep` component should be used only as slot of the `Wizard` component and should not be used standalone\n";function Zt(e={}){const{wrapper:i}=Object.assign({},a(),e.components);return i?t.jsx(i,Object.assign({},e,{children:t.jsx(r,{})})):r();function r(){const o=Object.assign({h2:"h2"},a(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:u}),`
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
`,t.jsx(l,{})]})}}export{Zt as default};
//# sourceMappingURL=Wizard-a4693e5e.js.map
