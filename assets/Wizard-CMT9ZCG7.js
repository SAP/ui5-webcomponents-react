import{j as e}from"./useIsomorphicLayoutEffect-BZqdrUgG.js";import{useMDXComponents as s}from"./index-3-_tf5dF.js";import{A as p}from"./ArgTypesWithNote-xtsqpqsr.js";import{C as a}from"./ControlsWithNote-DnSsDLIA.js";import{D as m}from"./DocsHeader-CwvvpvBd.js";import{F as l}from"./ProjectTemplate-5GlQDb_i.js";import"./index-BP8_t0zE.js";import{M as u,C as d,d as c,D as h}from"./index-Ha3Eymnb.js";import{C as g,D as n,W as r}from"./Wizard.stories-DZuo9uq4.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-BJrzIWg9.js";import"./index-BP3GWWnk.js";import"./iframe-0t0bluh7.js";import"../sb-preview/runtime.js";import"./UI5Element-DH5oRWb7.js";import"./Boot-DdVREbXE.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-5eeswjJY.js";import"./withWebComponent-CFCcsgaR.js";import"./utils-B_1Wl3Io.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-VKnKJfRd.js";import"./decline-BKu2yS0R.js";import"./Icons-Ce4pu5im.js";import"./i18n-defaults-BdfZArTM.js";import"./information-B6WCub9Q.js";import"./alert-sERyhXNI.js";import"./class-map-BVs8Mnz-.js";import"./Icon-5sSxuG1B.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-BZWwXjHP.js";import"./Button-C7MkX4Mc.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-B3SMwW1O.js";import"./index-BxmsGmlx.js";import"./index-AcmEfHsG.js";import"./sys-help-2-B8iW5g3p.js";import"./WrappingType-CW8URInd.js";import"./index-n0fkOAT5.js";import"./Popover-DRLSd65f.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BU2QZN3s.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-DFDsyNUc.js";import"./FocusableElements-DPTH-2DQ.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-SVe57yR2.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-4J279J6B.js";import"./BrowserScrollbar.css-RQCcsA_4.js";import"./index-BowageyY.js";import"./Link-iD7tARGw.js";import"./chunk-HLWAVYOI-BPnhSji2.js";import"./client-Di-4O7We.js";import"./copy-G9rVuVfS.js";import"./index-BpzLxWcJ.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DdJpFDQo.js";import"./index-DXYWpQLV.js";import"./i18n-defaults-CNtbapJN.js";import"./I18nContext-RJHUyvz-.js";import"./index-BYuIjXoA.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-BxlqkPuV.js";import"./TableOfContent-C5W6TYrc.js";import"./index-DxJV5SPg.js";import"./Label-CxCcCr4B.js";import"./index-CKBLKqiI.js";import"./addCustomCSSWithScoping-DdG0dXFN.js";import"./index-Ef76ooZA.js";import"./index-Bgmqgcz3.js";import"./Avatar-C7-CIAtb.js";import"./employee-CZvuBdeB.js";import"./index-CRQsAHr7.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./index-BbFlY2Zm.js";import"./CheckBox-DcGAf_qw.js";import"./ValueState-Bn-H2OaL.js";import"./accept-Y8n9yLj0.js";import"./index-3s_6nXrH.js";import"./Input-CJRKgCvZ.js";import"./ResponsivePopoverCommon.css-ydlfhhBW.js";import"./ValueStateMessage.css-BvpysoMu.js";import"./index-Bf8zqNN9.js";import"./Title-CZ4mgGsM.js";import"./ItemNavigation-O39MJWnD.js";import"./Float-BYyKuwHF.js";import"./debounce-jW346lN3.js";import"./ResponsivePopover-DNtrR931.js";import"./Dialog-D5jzYMoy.js";import"./i18n-defaults-BiDPwFvU.js";import"./parameters-bundle.css-BfeWTp2S.js";import"./main-HWtSBowW.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
`,e.jsx(l,{})]})}function ht(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{ht as default};
