import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-B5Ip8tK9.js";import{A as p}from"./ArgTypesWithNote-CyNbLCej.js";import{C as a}from"./ControlsWithNote-DlHQLD1n.js";import{D as m}from"./DocsHeader-DpVHoQtz.js";import{F as l}from"./CommandsAndQueries-BLprD20N.js";import"./index-ByvJQHnB.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-l18RNg85.js";import{M as u,C as d,a as c,D as h}from"./index-vLczZoL0.js";import{C as g,D as n,W as r}from"./Wizard.stories-Cy5vV-Zm.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-Db738PEy.js";import"./index-Bh0L8GxH.js";import"./jsx-runtime-2NO35c9p.js";import"./CustomElementsScope-BZQ-yqK5.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-DsiN4KEf.js";import"./Keys-CLf_QmYW.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-Dy5MqRQN.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DqK_Zwt1.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Wx6G1HAa.js";import"./decline-Cf8Y7eZn.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-CPeQ-J71.js";import"./information-DVtVmQQs.js";import"./sys-enter-2-DM7CihIf.js";import"./sys-enter-2-D_EhgDRM.js";import"./alert-B-6XnuHB.js";import"./Tag-B8Y5CAT_.js";import"./sys-help-2-CQSD8GDX.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-WWlNSEWj.js";import"./index-CpZlRrqk.js";import"./Link-CIigJXcZ.js";import"./index-39R8lAwY.js";import"./Popover-DHgn1IwJ.js";import"./PopupsCommon.css-1ftV5PB8.js";import"./FocusableElements--dusX2Bm.js";import"./isElementHidden-gS67o0pl.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DGDOSiJK.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy--eUL3OtC.js";import"./copy-C9kEgeiD.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-CBOQwH6I.js";import"./I18nStore-Bb3vbAIQ.js";import"./useStylesheet-DhspXHhi.js";import"./index-C2w1dnoB.js";import"./index-49bJeJce.js";import"./Label-DvK4qyHf.js";import"./index-C2cs6waD.js";import"./index-Z1IFI4-r.js";import"./Text-CWzAOMGb.js";import"./preview-DdjaCmfv.js";import"./iframe-CBhKbC4f.js";import"./DocsRenderer-CFRXHY34-kTPR8cuw.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-BPwSVJcY.js";import"./index-B-i0fidp.js";import"./BusyIndicator-kBFPsFJK.js";import"./index-B61k-92l.js";import"./index-6SfSTYbY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DTc-n_gr.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-Qeju87TG.js";import"./CheckBox-Cwy3o2MP.js";import"./ValueState-Bg0UWejw.js";import"./accept-CcEwUC-x.js";import"./index-Decu0Ba9.js";import"./Input-nF73XYAZ.js";import"./ResponsivePopoverCommon.css-D8oCtj4w.js";import"./ValueStateMessage.css-26HjZ_sA.js";import"./Suggestions.css-LA4jUZtL.js";import"./index-Fa27a8jx.js";import"./ItemNavigation-D8f2eHwJ.js";import"./debounce-TTkz9ISH.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-BcDcM98N.js";import"./ResponsivePopover-DbareGdm.js";import"./Dialog-TYaONLew.js";import"./main-Dn6sLQP9.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
