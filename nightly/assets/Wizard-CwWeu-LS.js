import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as s}from"./index-ChplMHeC.js";import{A as p}from"./ArgTypesWithNote-ziTYeOmM.js";import{C as a}from"./ControlsWithNote-CoGWEYsP.js";import{D as m}from"./DocsHeader-BHjEcH7_.js";import{F as l}from"./CommandsAndQueries-D21qUJVs.js";import"./index-DbKmUOdi.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-Bnj9fnoW.js";import{M as u,C as d,a as c,D as h}from"./index-B7Y30QpB.js";import{C as g,D as n,W as r}from"./Wizard.stories-kLRpv9vl.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-DU-TBzWZ.js";import"./index-DuvBkkWn.js";import"./withWebComponent-DIBLIPif.js";import"./utils-DKbukTmU.js";import"./useIsomorphicLayoutEffect-BuGJanM4.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./Button-BYnClEc8.js";import"./Keys-Df3IBHp2.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-DVlQjg5y.js";import"./parameters-bundle.css-C_3tvNHF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-Cq5L8-91.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Cyg2J0QB.js";import"./decline-CkvCC5iV.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-aOc0GfxQ.js";import"./information-B7lIx4H4.js";import"./sys-enter-2-Cn8hrStw.js";import"./sys-enter-2-DXus7nkZ.js";import"./TagDesign-Dou_yO3g.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-KpIA7GSc.js";import"./Tag-MzUi0FzG.js";import"./sys-help-2-COroZqns.js";import"./index-DoDMd5jQ.js";import"./Link-Cr8wHvq2.js";import"./index-CkeY3nPI.js";import"./Popover-DWH7u18I.js";import"./PopupsCommon.css-CLlsUzpB.js";import"./FocusableElements-Da8ni1pm.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Bn2o07mV.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-BNtuNZ5T.js";import"./iframe-_R4aFT0D.js";import"./client-lwzJIAjg.js";import"./copy-Bnrg9YBK.js";import"./copy-C92HBupN.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-Cpjnqi-b.js";import"./I18nStore-DlsSjWbm.js";import"./useStylesheet-BO3w5Xt1.js";import"./index-D9YMktiz.js";import"./index-Dbb581IU.js";import"./Label-DMEL6fX-.js";import"./index-Pj1kAMZ-.js";import"./index-Cs_Ztk0v.js";import"./Text-DZiuAp7s.js";import"./addCustomCSSWithScoping-Dkzu7Yq-.js";import"./index-B5N8tz-A.js";import"./index-D1TSxMr6.js";import"./BusyIndicator-CgjmT3Fu.js";import"./index-CKTWv80J.js";import"./index-DN8baC31.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DObyMRaP.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index-CfCQVb3G.js";import"./CheckBox-CGo4rroA.js";import"./ValueState-Bg0UWejw.js";import"./accept-BUcVz_-s.js";import"./index-DrRHidBf.js";import"./Input-BnVofimq.js";import"./ResponsivePopoverCommon.css-Cm0qzI48.js";import"./ValueStateMessage.css-BLSNnWvj.js";import"./Suggestions.css-CG4RWD_1.js";import"./index-D_w2Lc5B.js";import"./ItemNavigation-C5DuLcvK.js";import"./debounce-TTkz9ISH.js";import"./i18n-defaults-BeKUSBuv.js";import"./parameters-bundle.css-Ct7P_Fpa.js";import"./ResponsivePopover-BCkoypY8.js";import"./Dialog-DUUAZhby.js";import"./main-rGL2KZiJ.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
`,e.jsx(l,{})]})}function at(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{at as default};
