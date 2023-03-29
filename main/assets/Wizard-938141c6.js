import{j as t,a as p,F as m}from"./jsx-runtime-670450c2.js";import{C as h,A as l}from"./DomRefTable.module-27ff0d58.js";import{D as d}from"./DocsHeader-3f707486.js";import{F as c}from"./Footer-625b5790.js";import"./index-f1f749bf.js";import{M as u,C as g,a as n}from"./chunk-PCJTTTQV-033e93ae.js";import{C as f,D as s,W as b}from"./Wizard.stories-b668296f.js";import{S as w}from"./SubcomponentsSection-6138f2fc.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-bd788123.js";import"./iframe-05f772a0.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-94bcf4c7.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-88b92467.js";import"./TableOfContent-376139fb.js";import"./index-ba3d49cb.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-3f7df9e3.js";import"./Label-ccc234fe.js";import"./index-96c5f47c.js";import"./index-1171b3d3.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./react-18-3458636e.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-cd599a0b.js";import"./index-d24f9d1c.js";import"./CheckBox-80dd6e5f.js";import"./ValueState-2c5e5904.js";import"./accept-d8c33d70.js";import"./ValueState-ab6838cc.js";import"./index-51a30b85.js";import"./Input-4940ecdf.js";import"./Suggestions.css-154c701b.js";import"./ResponsivePopoverCommon.css-ca4e9b7c.js";import"./ValueStateMessage.css-f5f87de3.js";import"./index-7e5c7359.js";import"./Title-129aeb28.js";import"./languageAware-b2dd96bd.js";import"./fastNavigation-8b41cdda.js";import"./ItemNavigation-8e291cfa.js";import"./Float-99d99064.js";import"./debounce-9c2fb7dd.js";import"./ResponsivePopover-fcaf2b05.js";import"./Dialog-43ec4fb1.js";import"./i18n-defaults-0a7ef706.js";import"./parameters-bundle.css-6b4a2ffb.js";const v=`## Structure

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
`,W="**Since:** 0.12.0\n\nA component that represents a logical step as part of the `Wizard`. It is meant to aggregate arbitrary HTML elements that form the content of a single step.\n\n### Structure\n\n- Each wizard step has arbitrary content.\n- Each wizard step might have texts - defined by the `titleText` and `subtitleText` properties.\n- Each wizard step might have an icon - defined by the `icon` property.\n- Each wizard step might display a number in place of the `icon`, when it's missing.\n\n### Usage\n\nThe `WizardStep` component should be used only as slot of the `Wizard` component and should not be used standalone\n";function te(e={}){const{wrapper:i}=Object.assign({},a(),e.components);return i?t(i,Object.assign({},e,{children:t(r,{})})):r();function r(){const o=Object.assign({h2:"h2"},a(),e.components);return p(m,{children:[t(u,{of:f}),`
`,t(d,{since:"0.12.0"}),`
`,t(o.h2,{children:"Example"}),`
`,t(g,{of:s}),`
`,t(o.h2,{children:"Properties"}),`
`,t(h,{of:s}),`
`,t(n,{children:v}),`
`,t(n,{children:w}),`
`,t(o.h2,{children:"WizardStep"}),`
`,t(n,{children:W}),`
`,t(l,{of:b}),`
`,t(c,{})]})}}export{te as default};
//# sourceMappingURL=Wizard-938141c6.js.map
