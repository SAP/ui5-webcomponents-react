import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-B5Ip8tK9.js";import{A as p}from"./ArgTypesWithNote-CshhhXvv.js";import{C as a}from"./ControlsWithNote-C89PVL4k.js";import{D as m}from"./DocsHeader-Cxwragic.js";import{F as l}from"./CommandsAndQueries-DEzg1y1t.js";import"./index-Durg-kLH.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-zAoAJako.js";import{M as u,C as d,a as c,D as h}from"./index-eohv63Mf.js";import{C as g,D as n,W as r}from"./Wizard.stories-B8JeM8Ds.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-owyskn23.js";import"./index-Ultsg-G0.js";import"./jsx-runtime-BCizSm9J.js";import"./CustomElementsScope-lRvT7iCm.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-C3KIEZ_B.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-D8gJIGEW.js";import"./parameters-bundle.css-BLEjIEH9.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DBnVRLcV.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-B8cpOtV2.js";import"./decline-CO_yryFo.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-BiJmvry2.js";import"./information-BA_ST16a.js";import"./sys-enter-2-L9fob0bg.js";import"./sys-enter-2-C09nDPBO.js";import"./alert-BjJeIaiS.js";import"./TagDesign-Ga50IS6u.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-sa6HOp3c.js";import"./Tag-JkllhvLP.js";import"./sys-help-2-bRrqGaJr.js";import"./index-BQnCm__z.js";import"./Link-DU2LYizk.js";import"./index-DogrUJhP.js";import"./Popover-ZaMaqrll.js";import"./PopupsCommon.css-DkWsY6As.js";import"./FocusableElements-BcTTx3-_.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DMSxvinm.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-D5y8ERWb.js";import"./copy-BJ2RS-I5.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-BHatGF86.js";import"./I18nStore-BqSUVB5y.js";import"./useStylesheet-N7C2bzZq.js";import"./index-Dtw3V25N.js";import"./index-Cvp8w3St.js";import"./Label-efMMm_Yw.js";import"./index-DoqJBpXZ.js";import"./index-BCr_l6cl.js";import"./Text-ahyk1WrN.js";import"./preview-BFbk0Qc1.js";import"./iframe-CCo7ormT.js";import"./DocsRenderer-CFRXHY34-Cazidr3p.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-BBYkOVIV.js";import"./index-CWu8VubW.js";import"./BusyIndicator-CXYqK0WZ.js";import"./index-GxH6uhPh.js";import"./index-D-WnL20f.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIU74CR3.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CFkZlA4A.js";import"./CheckBox-BRq3_G1m.js";import"./ValueState-Bg0UWejw.js";import"./accept-Bmwffvy6.js";import"./index-DwXCYttw.js";import"./Input-8X4hKszE.js";import"./ResponsivePopoverCommon.css-GWs4D-OS.js";import"./ValueStateMessage.css-BMlIHNzi.js";import"./Suggestions.css-BfKccsl2.js";import"./index-Bb2qNNsG.js";import"./ItemNavigation-CI8VBZuZ.js";import"./debounce-TTkz9ISH.js";import"./i18n-defaults-C268ZfY_.js";import"./parameters-bundle.css-Bs_zJ0h6.js";import"./ResponsivePopover-BAaf0na0.js";import"./Dialog-CrFT51rq.js";import"./main-DXdDxF5b.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
