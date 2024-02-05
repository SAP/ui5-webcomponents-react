import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{C as p,A as l}from"./DomRefTable.module-LHJ0ZIQi.js";import{D as m}from"./DocsHeader-ZDevwnkx.js";import{F as d}from"./Footer-OysVQoF4.js";import"./index-OjgoNOWw.js";import{M as u,C as c,b as i}from"./chunk-HLWAVYOI-B_V0TZ77.js";import{C as h,D as r,W as g}from"./Wizard.stories-CQptgVFu.js";import{S as b}from"./SubcomponentsSection-pzdPLcqE.js";import{e as f}from"./utils-77gZ8405.js";import{u as a}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-LGGRPT4j.js";import"./iframe-2PsvGQLY.js";import"../sb-preview/runtime.js";import"./UI5Element-kBA_KQxG.js";import"./i18nBundle-7ihWi2Lo.js";import"./VersionInfo-quO5DfnC.js";import"./CustomElementsScopeUtils-QKoQ990a.js";import"./withWebComponent-22JjwLkL.js";import"./utils-3rf7SAGj.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-r6t1Zphl.js";import"./Icons-jRef6OLh.js";import"./decline-XpWJwTfv.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-U_TSW4LN.js";import"./alert-kkNs8dOr.js";import"./class-map-2qwEQoLI.js";import"./Button-jlOsC8Op.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-QBShB6vc.js";import"./index-9hLZiafD.js";import"./clsx-Zbgk8kpT.js";import"./i18n-defaults-gX8Lho5I.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-YJVSj-ci.js";import"./index-QYh6idnL.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-Ha-6ONKz.js";import"./index-NYknlsde.js";import"./Integer-kog98579.js";import"./index-aheLxRqA.js";import"./Avatar-kcq5ywk4.js";import"./ResizeHandler-3FzJmCyz.js";import"./employee-APVUdoZS.js";import"./index-fN1anW_a.js";import"./index-CVFAOpPp.js";import"./Link-xIUn2Lee.js";import"./WrappingType-avPrqc94.js";import"./index-f1R-0qJ_.js";import"./TableOfContent-40qT7xEU.js";import"./index-cLvDMCwu.js";import"./Label-yPOoTXIn.js";import"./index-6RHxBUb2.js";import"./index-63HCzXXy.js";import"./Popover-qTobexuh.js";import"./PopupUtils-FgdW7Gkh.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-fa8QSlgN.js";import"./FocusableElements-jbTazhpM.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-duavIDje.js";import"./BrowserScrollbar.css-aT2mYiFz.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-z3VktcOy.js";import"./mapValues-Iyc0g4nJ.js";import"./_baseUniq-PeaQ4i79.js";import"./index-PPLHz8o0.js";import"./index-ru46B3pF.js";import"./index-5KSxUmIK.js";import"./CheckBox-vOrD_Qxh.js";import"./ValueState-zUcANXoY.js";import"./accept-RviPAaVm.js";import"./ValueState-I_-hGNIb.js";import"./index-SH8urZar.js";import"./Input-qnG8UDCs.js";import"./Suggestions.css-uuIiA8km.js";import"./ResponsivePopoverCommon.css-h8Z4T2yV.js";import"./ValueStateMessage.css-fNiak5rA.js";import"./index-q4t-tESX.js";import"./Title-dLDxQQ5A.js";import"./ItemNavigation-1Qtl9Bqn.js";import"./Float-0fEWDOdp.js";import"./debounce-8VpZswfd.js";import"./ResponsivePopover-wHlXl3nI.js";import"./Dialog-Y9sM4F0U.js";import"./i18n-defaults-HK6lzlSV.js";import"./parameters-bundle.css--e9CNYD5.js";const v=`## Structure

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
`;function at(n={}){const{wrapper:o}=Object.assign({},a(),n.components);return o?e.jsx(o,Object.assign({},n,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h2:"h2",pre:"pre",code:"code"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:h}),`
`,e.jsx(m,{since:"0.12.0"}),`
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
`,e.jsx(d,{})]})}}export{at as default};
