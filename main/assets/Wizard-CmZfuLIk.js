import{j as e}from"./ManagedStyles-CGOl3myG.js";import{useMDXComponents as s}from"./index-_byTH_QA.js";import{A as p,F as a}from"./ProjectTemplate-DEztgVYf.js";import{C as m}from"./ControlsWithNote-qOH7Jmpz.js";import{D as l}from"./DocsHeader-DvBVygYI.js";import"./index-Dl6G-zuu.js";import{M as u,d,e as c,f as h}from"./index-BcYSoVkD.js";import{C as g,D as n,W as r}from"./Wizard.stories-LVPnGITV.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-B_p4vt7G.js";import"./index-BgYfxxoj.js";import"./clsx-B-dksMZM.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-5daRW75o.js";import"./i18n-defaults-z_6XcBmn.js";import"./i18nBundle-Bsmczzvl.js";import"./Boot-Cnne3s27.js";import"./EventProvider-B3ZIXKWe.js";import"./I18nContext-BcGksm2n.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./ThemingParameters--AGRs54p.js";import"./index-B4uZZmdX.js";import"./iframe-CX1kMpsI.js";import"../sb-preview/runtime.js";import"./UI5Element-tLl76uRl.js";import"./CustomElementsScopeUtils-B75AoQkl.js";import"./withWebComponent-M0bhuh56.js";import"./utils-CeXI0Hi-.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./decline-BbDtzwS9.js";import"./Icons-CBAKipU6.js";import"./i18n-defaults-BdfZArTM.js";import"./information-I51WcrjF.js";import"./alert-aIGc7Sj9.js";import"./class-map-BfEumRh6.js";import"./Icon-jwLSXa4t.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./Button-WvH_Wkyp.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-BS_6etQn.js";import"./chunk-HLWAVYOI-C7i6e8Nh.js";import"./react-18-Bamk9FSf.js";import"./index-D1_ZHIBm.js";import"./index-B81-j-0s.js";import"./useStylesheet-CxAEQokk.js";import"./index-DJzcDS_W.js";import"./Label-CbTMDkBb.js";import"./WrappingType-CW8URInd.js";import"./index-Dz0JocfY.js";import"./index-BDBGDk-z.js";import"./Link-Dr8oTSuf.js";import"./index-Czm7_3jX.js";import"./Popover-DyMce1L3.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-ChEyoFp6.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-DiaJFluj.js";import"./FocusableElements-B13w0nQJ.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DFfXzzyE.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-wgSlw8JF.js";import"./BrowserScrollbar.css-1pcdmAMh.js";import"./index-DYfcvCZD.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-BzrCsXtN.js";import"./index-Jphd1cKU.js";import"./index-CN5pUlq0.js";import"./Avatar-D5wHCZAB.js";import"./employee-BBO6Qv_x.js";import"./index-Cf3vqSEb.js";import"./index-0OwgrVgA.js";import"./sys-help-2-DBxBNdVt.js";import"./copy-D4uznMtW.js";import"./GitHub-Mark-cyXF45vO.js";import"./TableOfContent-BkNqN_Yu.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-DTQpHR-X.js";import"./index-DrFu-skq.js";import"./index-DaahwhWE.js";import"./CheckBox-B-ZI2a77.js";import"./ValueState-Bn-H2OaL.js";import"./accept-ui7GG3Oe.js";import"./index-BfjL_uTO.js";import"./Input-Sg8P8gaA.js";import"./ResponsivePopoverCommon.css-Cd3HwT2I.js";import"./ValueStateMessage.css-CkQHzbyA.js";import"./index-BdLCxVjB.js";import"./Title-AWxW94U7.js";import"./ItemNavigation-DJhA13rd.js";import"./Float-BYyKuwHF.js";import"./debounce-jW346lN3.js";import"./ResponsivePopover-DpTNbMPM.js";import"./Dialog-DUYY9JQ6.js";import"./i18n-defaults-DHnUMPqY.js";import"./parameters-bundle.css-C7eXkTg2.js";import"./main-HWtSBowW.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
