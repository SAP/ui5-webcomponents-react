import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-B5Ip8tK9.js";import{A as p}from"./ArgTypesWithNote-BLrggIoB.js";import{C as a}from"./ControlsWithNote-G77e46SE.js";import{D as m}from"./DocsHeader-CceMMirt.js";import{F as l}from"./CommandsAndQueries-YyjvLpx0.js";import"./index-CLuOyduY.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-Bi6E7_f2.js";import{M as u,C as d,a as c,D as h}from"./index-CXaUEerm.js";import{C as g,D as n,W as r}from"./Wizard.stories-Cw0s20fL.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-DmZpjfxD.js";import"./index-CIMhrZAh.js";import"./jsx-runtime-gx_Zcjo3.js";import"./CustomElementsScope-CjZbIYTD.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-BhunxXU0.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-CZw5gRks.js";import"./parameters-bundle.css-Dkq9X0yL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-8xifowfb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-B158X0Y5.js";import"./decline-BwbUHmi7.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-Beb07qW6.js";import"./information-DPOcXyRn.js";import"./sys-enter-2-SJ-ADG9s.js";import"./sys-enter-2-3iNjTkh9.js";import"./alert-OoqNCaQj.js";import"./TagDesign-Ga50IS6u.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-1QWibL0k.js";import"./Tag-CEzSQIl5.js";import"./sys-help-2-RmNMPhxT.js";import"./index-ODLz_ueb.js";import"./Link-CCYqxCbK.js";import"./index-D2zfHA8P.js";import"./Popover-inHmHWag.js";import"./PopupsCommon.css-C6QW1NU3.js";import"./FocusableElements-B0ox-u2n.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DeuUg-iv.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-CbwaFUHa.js";import"./copy-1xAMALOS.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-BA7gVVM7.js";import"./I18nStore-XmjZR7rr.js";import"./useStylesheet-DUe1LpVj.js";import"./index-BFqlvNkW.js";import"./index-zB6304Ns.js";import"./Label-Xvb1prxJ.js";import"./index-BWd6G_fU.js";import"./index-_2xpPfjR.js";import"./Text-CkerREnW.js";import"./preview-760OLYS_.js";import"./iframe-C-Cwxepg.js";import"./DocsRenderer-CFRXHY34-_zU1UWIH.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-PCpHaHtG.js";import"./index-D9fhKjZm.js";import"./BusyIndicator-DjtkhCPk.js";import"./index-DkwX2oO3.js";import"./index-DWxMKmlL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-qIXMnRwj.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CQzhEwbd.js";import"./CheckBox-WFu_Bb_l.js";import"./ValueState-Bg0UWejw.js";import"./accept-tKQJV64V.js";import"./index-BO8hXXW1.js";import"./Input-CBdxscU9.js";import"./ResponsivePopoverCommon.css-ngelvl8I.js";import"./ValueStateMessage.css-E0DjtdJ4.js";import"./Suggestions.css-CNnloLYM.js";import"./index-Cpm4wPLr.js";import"./ItemNavigation-DmP37oe7.js";import"./debounce-TTkz9ISH.js";import"./i18n-defaults-BpYbS4V6.js";import"./parameters-bundle.css-VMdlhyu5.js";import"./ResponsivePopover-Blp0O4E4.js";import"./Dialog-BSquvsbt.js";import"./main-DnREbZ5I.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
