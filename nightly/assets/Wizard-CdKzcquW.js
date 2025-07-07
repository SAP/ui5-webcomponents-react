import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-B5Ip8tK9.js";import{A as p}from"./ArgTypesWithNote-DFfxkP1o.js";import{C as a}from"./ControlsWithNote-DUBIoqLW.js";import{D as m}from"./DocsHeader-oBlPuHj3.js";import{F as l}from"./CommandsAndQueries-DXNhHqxU.js";import"./index-R-JzRtwA.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-Bkeyeot9.js";import{M as u,C as d,a as c,D as h}from"./index-BlxXrl7Y.js";import{C as g,D as n,W as r}from"./Wizard.stories-Bo3duGCD.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-Deqqhi4Y.js";import"./index-BARq89zH.js";import"./jsx-runtime-7DBFq8Nb.js";import"./CustomElementsScope-CL9zjcNa.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CmBjANX3.js";import"./Keys-CLf_QmYW.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-BZ5EcdIf.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DsLvoCTe.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-D1yurQHO.js";import"./decline-CtrqdeOl.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-B6RSzyEp.js";import"./information-D1jL324h.js";import"./sys-enter-2-DS9n4Dub.js";import"./sys-enter-2-A7Y23Pfh.js";import"./alert-DnTkm5F5.js";import"./Tag-afvhVdQ_.js";import"./sys-help-2-BWOTEP1y.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-Buk-oTHM.js";import"./index-BN2x7G99.js";import"./Link-5JEABESN.js";import"./index-CsHriDy7.js";import"./Popover-D2Ha4YTk.js";import"./PopupsCommon.css-CIF0SfCa.js";import"./FocusableElements-Dc0aSsUl.js";import"./isElementHidden-gS67o0pl.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Ccnh5zsM.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy-EaiX1lyC.js";import"./copy-ByMwA9ho.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-CmksOPNG.js";import"./I18nStore-DeTYyh4o.js";import"./useStylesheet-DBqLMi8E.js";import"./index-C-zAQpBb.js";import"./index-8sYBluu0.js";import"./Label-CMG0rVlp.js";import"./index-BtDHGh6c.js";import"./index-CXHwHWL0.js";import"./Text-CteZtvAO.js";import"./preview-DXF9ym6j.js";import"./iframe-C94VYfSB.js";import"./DocsRenderer-CFRXHY34-DVwStvZN.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-BTrjrnXc.js";import"./index-qwwFDXH5.js";import"./BusyIndicator-eqRCVs2M.js";import"./index-D0D5cipM.js";import"./index-jzDBtRn1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BzbMOLEH.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-Dc5pGmFc.js";import"./CheckBox-XoOc1if0.js";import"./ValueState-Bg0UWejw.js";import"./accept-BRic3XtZ.js";import"./index-CQxYAtsl.js";import"./Input-DdJo6M8j.js";import"./ResponsivePopoverCommon.css-DyB0cOzJ.js";import"./ValueStateMessage.css-DBwWFUV0.js";import"./Suggestions.css-BTrO4jSE.js";import"./index-QG24MGrD.js";import"./ItemNavigation-zF11pVKR.js";import"./debounce-TTkz9ISH.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-BcDcM98N.js";import"./ResponsivePopover-DqKz3OLZ.js";import"./Dialog-D-LeMYyq.js";import"./main-Dn6sLQP9.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
