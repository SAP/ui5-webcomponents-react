import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-zdXs1Etw.js";import{A as p}from"./ArgTypesWithNote-0RtpiTIw.js";import{C as a}from"./ControlsWithNote-uaxCzQeR.js";import{D as m}from"./DocsHeader-CBzNdJFQ.js";import{F as l}from"./CommandsAndQueries-Bt_U1nrG.js";import"./index-DKh9xRXh.js";import"./index-C--kS4iy.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BZr7m-U9.js";import{M as u,C as d,a as c,D as h}from"./index-Dxwx1dKU.js";import{C as g,D as n,W as r}from"./Wizard.stories-C0kLbhl8.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-CZlJfYDT.js";import"./index-Ckh4UXjO.js";import"./jsx-runtime-TYk6ziax.js";import"./CustomElementsScope-BUTWMsdD.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CDUAIOHY.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-CJfyoCyo.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DGo6fNOA.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-Ctf1iLC2.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CaDfZmsc.js";import"./information-axph4kwY.js";import"./sys-enter-2-W20sQgrM.js";import"./sys-enter-2-Dj0rlhGw.js";import"./TagDesign-Ga50IS6u.js";import"./index-DJcrgQOn.js";import"./index-B-pEBbkX.js";import"./index-C0P7u1b2.js";import"./Tag-DIF-afEZ.js";import"./sys-help-2-3dHH1qFA.js";import"./index-DG9f8b92.js";import"./Link-DJmP58JE.js";import"./index-C4AHKFdV.js";import"./Popover-CYWkC5M7.js";import"./PopupsCommon.css-C4odaWdv.js";import"./FocusableElements-B0h6XdH-.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BhhEdsAZ.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-CzED_nep.js";import"./copy-BIm13QSs.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-Bzt3eeAv.js";import"./index-DFh5kwJx.js";import"./I18nStore-DdNtknPF.js";import"./useStylesheet-D-3zc5-n.js";import"./index-D8BvuigD.js";import"./index-BxZpBR5v.js";import"./Label-CNIQ9f-B.js";import"./index-DmVWxwwF.js";import"./index-DA4Nf3tz.js";import"./Text-BE7aNcNC.js";import"./preview-Cb-rr16-.js";import"./iframe-DoZVV7fl.js";import"./DocsRenderer-CFRXHY34-CTd9-PxE.js";import"./react-18-DGA_MWY9.js";import"./addCustomCSSWithScoping-_tNs8Q2d.js";import"./index-CkLIGxQ0.js";import"./BusyIndicator-DRlXpx-R.js";import"./index-PdcYfHMq.js";import"./index-BGMpZMYY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCPNHV1H.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-B7yuF-9p.js";import"./CheckBox-DRScB4rn.js";import"./ValueState-Bg0UWejw.js";import"./accept-C4wh916l.js";import"./index-Bf87bq2d.js";import"./Input-DQ7L6WVO.js";import"./ResponsivePopoverCommon.css-Dyu-3t3O.js";import"./ValueStateMessage.css-hLRGYX_8.js";import"./Suggestions.css-DPbvJQOA.js";import"./index-CZSXVSiI.js";import"./ItemNavigation-CAinmIbD.js";import"./debounce-TTkz9ISH.js";import"./i18n-defaults-P_CK-S23.js";import"./parameters-bundle.css-COB6mtRm.js";import"./ResponsivePopover-B1wBYLBj.js";import"./Dialog-BomKBOpU.js";import"./main-BZcY5MQX.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
`,e.jsx(l,{})]})}function pt(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{pt as default};
