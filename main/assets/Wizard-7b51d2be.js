import{j as e}from"./jsx-runtime-d079401a.js";import{C as p,b as l}from"./DomRefTable.module-94a50048.js";import{D as d}from"./DocsHeader-63762db6.js";import{F as m}from"./Footer-700232a6.js";import"./index-f1f2c4b1.js";import{M as u,C as c,b as i}from"./chunk-S4VUQJ4A-6fea4634.js";import{C as h,D as r,W as g}from"./Wizard.stories-40db4e90.js";import{S as b}from"./SubcomponentsSection-6138f2fc.js";import{e as f}from"./utils-b1ef2149.js";import{u as a}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-fdf54b3f.js";import"./iframe-3886dcc1.js";import"../sb-preview/runtime.js";import"./UI5Element-6dcea8dd.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b7f7d9e7.js";import"./Icons-e937042c.js";import"./decline-d1fe7fdd.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-a40f0e71.js";import"./class-map-0ab40ab9.js";import"./Button-6bb9ed58.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-d675a36d.js";import"./index-bb1f9706.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-5ee8a8c4.js";import"./index-d936e926.js";import"./Integer-f7f172c9.js";import"./index-d1199ad4.js";import"./Avatar-faa225d6.js";import"./ResizeHandler-e83234a4.js";import"./employee-f0b5ef8f.js";import"./index-fb334448.js";import"./index-35b19f57.js";import"./Link-34530090.js";import"./WrappingType-b81e595a.js";import"./index-fb6e8b5e.js";import"./TableOfContent-cff43a5c.js";import"./index-ab626788.js";import"./Label-c4db564a.js";import"./index-b42968db.js";import"./index-6addbf4c.js";import"./index-798783a7.js";import"./Popover-8ece70a3.js";import"./PopupsCommon.css-2b73575b.js";import"./FocusableElements-ae22402e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-22391551.js";import"./index-d203965f.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./index-0f256155.js";import"./CheckBox-6d778514.js";import"./ValueState-2c5e5904.js";import"./accept-d5698387.js";import"./ValueState-ab6838cc.js";import"./index-eee413a0.js";import"./Input-ee14120b.js";import"./Suggestions.css-64d314d5.js";import"./ResponsivePopoverCommon.css-32174dbe.js";import"./ValueStateMessage.css-ee317505.js";import"./index-b83f6b06.js";import"./Title-e46bbbf5.js";import"./ItemNavigation-f231b836.js";import"./Float-99d99064.js";import"./debounce-9c2fb7dd.js";import"./ResponsivePopover-b745dfe5.js";import"./Dialog-ea4c9a60.js";import"./i18n-defaults-2dcf78e8.js";import"./parameters-bundle.css-f9dc8928.js";const v=`## Structure

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
`,S=`**Since:** 0.12.0  
**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).

A component that represents a logical step as part of the \`Wizard\`. It is meant to aggregate arbitrary HTML elements that form the content of a single step.

### Structure

- Each wizard step has arbitrary content.
- Each wizard step might have texts - defined by the \`titleText\` and \`subtitleText\` properties.
- Each wizard step might have an icon - defined by the \`icon\` property.
- Each wizard step might display a number in place of the \`icon\`, when it's missing.

### Usage

The \`WizardStep\` component should be used only as slot of the \`Wizard\` component and should not be used standalone
`;function Ze(n={}){const{wrapper:o}=Object.assign({},a(),n.components);return o?e.jsx(o,Object.assign({},n,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h2:"h2",pre:"pre",code:"code"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:h}),`
`,e.jsx(d,{since:"0.12.0"}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:r,sourceState:"none"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const WizardComponent = () => {
  const [selected, setSelected] = useState('1');
  const [disabled, setDisabled] = useState<Record<string, boolean>>({ '2': true, '3': true, '4': true });
  const [hidden, setHidden] = useState<Record<string, boolean>>({ step3Btn: true, finalizeBtn: true });
  const goToStep2 = () => {
    setDisabled((prev) => {
      const { '2': _omit, ...rest } = prev;
      return rest;
    });
    setSelected('2');
  };
  const goToStep3 = () => {
    setDisabled((prev) => {
      const { '3': _omit, ...rest } = prev;
      return rest;
    });
    setSelected('3');
  };
  const handleStep2Completed = (e) => {
    if (e.target.checked) {
      setHidden((prev) => {
        const { step3Btn: _omit, ...rest } = prev;
        return rest;
      });
    }
  };
  const finalizeWizard = () => {
    alert('Wizard is now completed!');
  };
  const handlePriceInput = (e) => {
    if (e.target.value) {
      setHidden((prev) => {
        const { finalizeBtn: _omit, ...rest } = prev;
        return rest;
      });
    }
  };
  const handleStepChange = (e) => {
    setSelected(e.detail.step.dataset.step);
    args.onStepChange(e);
  };

  return (
    <Wizard {...args} onStepChange={handleStepChange}>
      <WizardStep icon={productIcon} titleText="Product Type" selected={selected === '1'} data-step={'1'}>
        <Title>1. Product Type</Title>
        <MessageStrip design={MessageStripDesign.Information}>
          The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work
          with.
        </MessageStrip>
        <Label wrappingType={WrappingType.None}>
          Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada
          diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit
          amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla
          tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce
          quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis
          metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor
          et, varius quam. Aliquam erat volutpat
        </Label>
        <Button design={ButtonDesign.Emphasized} onClick={goToStep2}>
          Step 2
        </Button>
      </WizardStep>
      <WizardStep
        icon={hintIcon}
        titleText="Product Information"
        disabled={disabled['2']}
        selected={selected === '2'}
        data-step={'2'}
      >
        <Title>2. Product Information</Title>
        <Label wrappingType={WrappingType.None}>
          Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse
          arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis
          ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet
          dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula,
          quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie
          aliquet dui. Donec pulvinar, sapien
        </Label>
        <CheckBox onChange={handleStep2Completed} text="Step Completed" />
        <br />
        {!hidden['step3Btn'] && (
          <Button design={ButtonDesign.Emphasized} onClick={goToStep3}>
            Step 3
          </Button>
        )}
      </WizardStep>
      <WizardStep
        icon={leadIcon}
        titleText="Pricing"
        disabled={disabled['3']}
        selected={selected === '3'}
        data-step={'3'}
      >
        <Title>3. Pricing</Title>
        <Label wrappingType={WrappingType.None}>
          Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse
          arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis
          ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet
          dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula,
          quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie
          aliquet dui. Donec pulvinar, sapien
        </Label>
        <Input placeholder="Item Price" onInput={handlePriceInput} />
        {Br}
        {!hidden['finalizeBtn'] && (
          <Button design={ButtonDesign.Emphasized} onClick={finalizeWizard}>
            Finalize
          </Button>
        )}
      </WizardStep>
    </Wizard>
  );
};
`})})]}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:r}),`
`,e.jsx(i,{children:v}),`
`,e.jsx(i,{children:b}),`
`,e.jsx(t.h2,{id:"wizardstep",children:"WizardStep"}),`
`,e.jsx(i,{children:S}),`
`,e.jsx(l,{hideHTMLPropsNote:!0,exclude:f,of:g}),`
`,e.jsx(m,{})]})}}export{Ze as default};
//# sourceMappingURL=Wizard-7b51d2be.js.map
