import{j as e}from"./useIsomorphicLayoutEffect-wJjydpYF.js";import{useMDXComponents as s}from"./index-3-_tf5dF.js";import{A as p}from"./ArgTypesWithNote-Ce4oC5_B.js";import{C as a}from"./ControlsWithNote-Cn_1sHek.js";import{D as m}from"./DocsHeader-C3v5OPJW.js";import{F as l}from"./ProjectTemplate-gVkbSQXV.js";import"./index-BP8_t0zE.js";import{M as u,C as d,d as c,D as h}from"./index-CCkaSnpQ.js";import{C as g,D as n,W as r}from"./Wizard.stories-CS_NW9RQ.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-BeLf4cpI.js";import"./index-VPobHLLI.js";import"./iframe-DAxFJEDZ.js";import"../sb-preview/runtime.js";import"./UI5Element-DC8MZeOy.js";import"./Boot-DRGCpzpB.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-yz8rUzbr.js";import"./withWebComponent-CWrtEEjV.js";import"./utils-EaJipdFl.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-BdneKiEM.js";import"./decline--LpgiSgn.js";import"./Icons-CG6FlOJ_.js";import"./i18n-defaults-BdfZArTM.js";import"./information-CWnHh7YX.js";import"./alert-BiuXmsCV.js";import"./class-map-B9wLsnvZ.js";import"./Icon-CmpPkOGs.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-CtgfEhuk.js";import"./Button-BrKU6WlN.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-DKt7VHOa.js";import"./index-BxmsGmlx.js";import"./index-BPFCvkaN.js";import"./sys-help-2-BljVJXa3.js";import"./WrappingType-CW8URInd.js";import"./index-C1jxEFca.js";import"./Popover-D2WBCDl9.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-C_R40Sx-.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BVkg1U_d.js";import"./FocusableElements-CrwTZl4-.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DEdNEOKg.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-MmmenpP7.js";import"./BrowserScrollbar.css-cD_o1v9b.js";import"./index-Cw0KyrCq.js";import"./Link-Bsw9emR4.js";import"./chunk-HLWAVYOI-Bl2kAm6K.js";import"./client-Di-4O7We.js";import"./copy-3Ib5ZJqq.js";import"./index-DhB1J8YZ.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DShc4-AB.js";import"./index-6h8N-xs_.js";import"./i18n-defaults-DzvGxznN.js";import"./I18nContext-RJHUyvz-.js";import"./index-CSI8GtFb.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-BXZU7gws.js";import"./TableOfContent-B45Q_XG4.js";import"./index-irHfn_cB.js";import"./Label-IIemeO1C.js";import"./index-BuH4bgle.js";import"./addCustomCSSWithScoping-Bzep2v3d.js";import"./index-CGmCjizk.js";import"./index-D9imeZ_B.js";import"./Avatar-CzFTtzk7.js";import"./employee-DAykk7OJ.js";import"./index-L1DwQRLS.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./index-JFi-jReJ.js";import"./CheckBox-BZj6MKWp.js";import"./ValueState-Bn-H2OaL.js";import"./accept-5SoBdaHQ.js";import"./index-D-ml35qv.js";import"./Input-B1woo9T2.js";import"./ResponsivePopoverCommon.css-BI8MPqTJ.js";import"./ValueStateMessage.css-Caexp31Y.js";import"./index-WItkIHKa.js";import"./Title-IUvBxdmV.js";import"./ItemNavigation-am3g3xGz.js";import"./Float-BYyKuwHF.js";import"./debounce-jW346lN3.js";import"./ResponsivePopover-DzElSN_X.js";import"./Dialog-DHFoNWVc.js";import"./i18n-defaults-ks1On1_f.js";import"./parameters-bundle.css-B8uAP-oB.js";import"./main-HWtSBowW.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
