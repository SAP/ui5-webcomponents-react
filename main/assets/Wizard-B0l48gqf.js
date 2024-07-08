import{j as e}from"./useIsomorphicLayoutEffect-kTr5k6y8.js";import{useMDXComponents as s}from"./index-yodfxRVR.js";import{A as p}from"./ArgTypesWithNote-BZOCHbso.js";import{C as a}from"./ControlsWithNote-CmDlbeKT.js";import{D as m}from"./DocsHeader-CqqzRRy3.js";import{F as l}from"./CommandsAndQueries-DI5XyRZa.js";import"./index-BQ1WsyJB.js";import"./WrappingType-CW8URInd.js";import{M as u,C as d,d as c,D as h}from"./index-BnKJrDrT.js";import{C as g,D as n,W as r}from"./Wizard.stories-2Drj3719.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-cOAgcv71.js";import"./index-Dr767vWE.js";import"./iframe-DSY2u4nw.js";import"../sb-preview/runtime.js";import"./UI5Element-CpDKvy14.js";import"./CustomElementsScopeUtils-CUyxdJhU.js";import"./withWebComponent-BS5KmJ8y.js";import"./utils-BKwn1mod.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BnWtnlV0.js";import"./decline-U1USmITW.js";import"./Icons-CXhWYR-U.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Tp9XErmR.js";import"./alert-CzwHodYh.js";import"./class-map-C2xEFFE_.js";import"./if-defined-fOOg8zCW.js";import"./Icon-B_ypp_jl.js";import"./Device-RcFucVeJ.js";import"./Keys-pFVWso__.js";import"./parameters-bundle.css-BFbT_feV.js";import"./Button-BNnZDQ19.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-CTWfTbaq.js";import"./TagDesign-Dou_yO3g.js";import"./index-BLtMylri.js";import"./index-8cofChYn.js";import"./Tag-CEZ3zqRQ.js";import"./sys-help-2-BHmG1jpg.js";import"./index-CLvSIE45.js";import"./Popover-qZ8usbia.js";import"./PopupsCommon.css-Dy04e_xP.js";import"./FocusableElements-Bv7oiNdI.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DrydYuxf.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BYlmazPT.js";import"./BrowserScrollbar.css-BHkuoGam.js";import"./index-1PiQ4fof.js";import"./Link-qJoZgSbT.js";import"./chunk-HLWAVYOI-D59b4eZt.js";import"./client-CM2XqZNc.js";import"./copy-BAvEiGLT.js";import"./copy-SEOB1pIL.js";import"./index-DrLbuP9z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CLr2-W5J.js";import"./index-DxXMIf9X.js";import"./I18nStore-CUUv0VZ2.js";import"./ModalsContext-BoMRhsMb.js";import"./useIsomorphicId-8WwglsiH.js";import"./GitHub-Mark-D3Wkw5er.js";import"./TableOfContent-F0yicvL_.js";import"./index-Zhn8S82z.js";import"./Label-q6_PzA5e.js";import"./index-Cwb37R1p.js";import"./index-DhSsqwHT.js";import"./addCustomCSSWithScoping-CgvYqGaR.js";import"./index-DeDIcOBk.js";import"./index-DooJVriu.js";import"./index-CJe2gumX.js";import"./Avatar-3swUBYi8.js";import"./employee-BYHCCK7_.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./index-CvWGb4NI.js";import"./CheckBox-5dqs80VY.js";import"./ValueState-Bg0UWejw.js";import"./accept-Bh1zuBLx.js";import"./index-Dxs1jGDs.js";import"./Input-DqjSuFtJ.js";import"./ResponsivePopoverCommon.css-CFhxTWp0.js";import"./ValueStateMessage.css-v6-laWvE.js";import"./ResponsivePopover-CLhNpBnN.js";import"./Dialog-D9IwuRsq.js";import"./Title-B_zpGxqG.js";import"./index-CK2u7mIU.js";import"./ItemNavigation-B3IUttqO.js";import"./debounce-TTkz9ISH.js";import"./i18n-defaults-C17jjp2l.js";import"./parameters-bundle.css-BwFDz0XS.js";import"./main-CzLLrZqh.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
`,e.jsx(l,{})]})}function dt(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{dt as default};
