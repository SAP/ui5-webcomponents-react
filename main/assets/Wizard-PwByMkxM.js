import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{u as s}from"./index-7dsiwP88.js";import{A as p,F as a}from"./ProjectTemplate-frDrJ2ir.js";import{C as m}from"./ControlsWithNote-8L1gcONj.js";import{D as l}from"./DocsHeader-r-VrSXvy.js";import"./index-OjgoNOWw.js";import{M as u,C as d,f as c,D as h}from"./index-J4kAUfVD.js";import{C as g,D as n,W as r}from"./Wizard.stories-AOUBXoe_.js";import{S}from"./SubcomponentsSection-pzdPLcqE.js";import{e as f}from"./utils-Xxz8MZVp.js";import"./react-jss.esm-xcDNpBdl.js";import"./inheritsLoose-O2jMHMzR.js";import"./theming.esm-g_6oAtQL.js";import"./index-wzxclzrl.js";import"./iframe-KtFHT45j.js";import"../sb-preview/runtime.js";import"./UI5Element-9EXj3atz.js";import"./Boot-vTaFuwdG.js";import"./VersionInfo-ldzxTIVv.js";import"./CustomElementsScopeUtils-orabJqjR.js";import"./withWebComponent-LTFbYRvs.js";import"./utils-d3BcYjeO.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./i18nBundle-j8vDD4VY.js";import"./decline-j4MODHQ_.js";import"./Icons-Vbmmw7bO.js";import"./i18n-defaults-9hHjZPfp.js";import"./information-6141dtH3.js";import"./alert--0SE21sY.js";import"./class-map-gjOVarQw.js";import"./Icon-kyep1SqZ.js";import"./Keys-ZEuNsqmZ.js";import"./parameters-bundle.css-EKzfhWK3.js";import"./Button-DcwyQdV9.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./willShowContent-MSvI8sYo.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-X1FTyPSK.js";import"./chunk-HLWAVYOI-BlrsuQpP.js";import"./client-YBMdkTkG.js";import"./index-QYh6idnL.js";import"./index-rfQtyIW1.js";import"./clsx-Zbgk8kpT.js";import"./index-vM1inL8T.js";import"./Label-mY98SzPQ.js";import"./WrappingType-avPrqc94.js";import"./index-U5QxZm6L.js";import"./index-9wQB3AW8.js";import"./Link-9XR0tYIs.js";import"./index-bLjSo4TN.js";import"./Popover-Yl5FRmf7.js";import"./Integer-kog98579.js";import"./PopupUtils-kUkkQSCb.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-xzQQME9v.js";import"./FocusableElements-xTkOlDEw.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-_qRzLmqT.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-tejh5TI3.js";import"./BrowserScrollbar.css-wlj1ktzG.js";import"./index-60zCs_zk.js";import"./i18n-defaults-Ph_9MK3s.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-9EhBcD4E.js";import"./useStylesheet-MWHnOiB7.js";import"./ModalsContext-T9gUbaXC.js";import"./addCustomCSSWithScoping-ZfvsxM11.js";import"./index-THRYlrPI.js";import"./index-sAnHdcGI.js";import"./Avatar-tUVXUHcz.js";import"./employee-EyN-jrGw.js";import"./index-leCEX2H4.js";import"./index-HBFvqeKk.js";import"./sys-help-2-QhGERdVJ.js";import"./copy-hCLuyOUN.js";import"./GitHub-Mark-JYujJlUX.js";import"./TableOfContent-wpOh8gdr.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-0eYhXGum.js";import"./index-PPLHz8o0.js";import"./index-LDJtHUdL.js";import"./CheckBox-W7r2Z5M4.js";import"./ValueState-zUcANXoY.js";import"./accept-IjkrYMVs.js";import"./index-bq4NgP0k.js";import"./Input-l-VGVNnc.js";import"./ResponsivePopoverCommon.css-jkbZ-5Gq.js";import"./ValueStateMessage.css-ulM_ieaz.js";import"./index-sUNVp-4H.js";import"./Title-yLgJni0m.js";import"./ItemNavigation-F0c19DRy.js";import"./Float-0fEWDOdp.js";import"./debounce-8VpZswfd.js";import"./ResponsivePopover-NpDqijfo.js";import"./Dialog-Kb1Go7sM.js";import"./i18n-defaults-MpaKYGWX.js";import"./parameters-bundle.css--8JKw2Pt.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
`,e.jsx(l,{since:"0.12.0"}),`
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
`,e.jsx(m,{of:n}),`
`,e.jsx(c,{children:S}),`
`,e.jsx(t.h2,{id:"wizardstep",children:"WizardStep"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(p,{hideHTMLPropsNote:!0,exclude:f,of:r}),`
`,e.jsx(a,{})]})}function gt(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{gt as default};
