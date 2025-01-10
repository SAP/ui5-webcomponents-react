import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as s}from"./index-B7tNCeqj.js";import{A as p}from"./ArgTypesWithNote-BFrPgAXx.js";import{C as a}from"./ControlsWithNote-B8QYrWkE.js";import{D as m}from"./DocsHeader-LOHVzfgU.js";import{F as l}from"./CommandsAndQueries-BHuf3U1K.js";import"./index-7xNF_gm9.js";import"./products-B8km3JGR.js";import"./index-CjmQ2z5u.js";import"./WrappingType-CW8URInd.js";import"./Title-HEcUckFf.js";import{ae as u,af as d,ah as c,aj as h}from"./index-oCq4DVA_.js";import{C as g,D as n,W as r}from"./Wizard.stories-hSsvrwfH.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils--fxPZxKN.js";import"./index-CY-aFc8B.js";import"./withWebComponent-DbOtF11K.js";import"./utils-5ouIlTbN.js";import"./useIsomorphicLayoutEffect-U1V4gMqc.js";import"./slot-Df15G--e.js";import"./event-strict-C2lE4gn2.js";import"./i18n-BLQCbquq.js";import"./Button-Df0TC0Md.js";import"./Keys-DundVx7l.js";import"./AccessibilityTextsHelper-DhVMExKx.js";import"./Icon-DiKvMA1d.js";import"./parameters-bundle.css-BzaqQttB.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-CxBV-rFR.js";import"./toLowercaseEnumValue-BQhMonSq.js";import"./i18n-defaults-Do22Zz-4.js";import"./decline-DrrSJfqv.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-CbqKdr-p.js";import"./information-DA6q7hAT.js";import"./sys-enter-2-DZyqnfP0.js";import"./sys-enter-2-BQuGujks.js";import"./TagDesign-Dou_yO3g.js";import"./index-bI5-aUrJ.js";import"./index-DGl0hLba.js";import"./index-B_alDUrx.js";import"./Tag-4_eO7NFx.js";import"./sys-help-2-CiQ-GoLU.js";import"./index-BibcJJNq.js";import"./Link-D-wjqtz_.js";import"./index-uo5_YZoe.js";import"./Popover-BEou1Y9a.js";import"./PopupsCommon.css-IJUzQyRd.js";import"./FocusableElements-DKyPTCYZ.js";import"./isElementHidden-Bpu2V8BK.js";import"./isElementClickable-C7H9UXMP.js";import"./getActiveElement-BL9Yqj8a.js";import"./ResizeHandler-y4ADtKuu.js";import"./MediaRange-CQ-a3KRn.js";import"./getEffectiveScrollbarStyle-DY0HYxPj.js";import"./chunk-NUUEMKO5-Dahq-XaZ.js";import"./iframe-C-WG3Fxu.js";import"../sb-preview/runtime.js";import"./client-CY4f97Aa.js";import"./copy-CtVlzodN.js";import"./copy-08oD3P1Y.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-BTksmC1d.js";import"./index-DmqQyrGp.js";import"./I18nStore-CG8U7JCg.js";import"./useStylesheet-CGem_MOm.js";import"./index-BTIftX-2.js";import"./index-DnJL0qev.js";import"./Label-qWriTtuJ.js";import"./index-C7c7stHm.js";import"./index-C-cAGxuE.js";import"./Text-C2JOarjX.js";import"./addCustomCSSWithScoping-DOW-YdFK.js";import"./index-C-b0WtXR.js";import"./BusyIndicator-D8_NMEhC.js";import"./index-DFo5s-d0.js";import"./index-tKYk34_N.js";import"./AvatarSize-BceVhWoP.js";import"./employee-bNtHwQyf.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index-CSwJlPeW.js";import"./CheckBox-bRFke2s8.js";import"./ValueState-CyC8gWMA.js";import"./accept-C8IONXec.js";import"./index-BYOUMPoh.js";import"./Input-TvY9Jm1Z.js";import"./ResponsivePopoverCommon.css-B2_65n15.js";import"./ValueStateMessage.css-CyJYgSNK.js";import"./Suggestions.css-D3Y3wDhP.js";import"./index-ClfRmt76.js";import"./ItemNavigation-oZzng-oK.js";import"./debounce-jW346lN3.js";import"./i18n-defaults-BeKUSBuv.js";import"./parameters-bundle.css-lWn4zk3B.js";import"./ResponsivePopover-DhwVJmwv.js";import"./Dialog-B5eXWXJL.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
`,e.jsx(m,{since:"0.12.0"}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(d,{of:n,sourceState:"none"}),`
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
`,e.jsx(a,{of:n}),`
`,e.jsx(c,{children:S}),`
`,e.jsx(t.h2,{id:"wizardstep",children:"WizardStep"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(p,{hideHTMLPropsNote:!0,exclude:f,of:r}),`
`,e.jsx(l,{})]})}function lt(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{lt as default};
