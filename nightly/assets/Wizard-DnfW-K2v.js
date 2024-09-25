import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import{A as a}from"./ArgTypesWithNote-CjnT3YzX.js";import{C as p}from"./ControlsWithNote-BgTtwvfP.js";import{D as m}from"./DocsHeader-Dhz-9cZW.js";import{F as l}from"./CommandsAndQueries-BgbPLLWF.js";import"./index-B3xkXEHq.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CAqRFLM1.js";import{ae as u,af as d,ag as c,ah as h}from"./index-D6QiAyR0.js";import{C as g,D as n,W as r}from"./Wizard.stories-BzCJzTP9.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-CFUOPfhd.js";import"./index-D7Nv88Gg.js";import"./withWebComponent-BS26LpJo.js";import"./utils-4GUSeNxV.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BUZJrdsA.js";import"./decline-ChPQ5Vpc.js";import"./Icon-BwGmtu7y.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-C_Bqjk9j.js";import"./alert-qaECYIyO.js";import"./class-map-CcXho7vk.js";import"./Button-BoqZ1Nk6.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BJ6YdIbZ.js";import"./i18n-defaults-DyAOnJXW.js";import"./TagDesign-Dou_yO3g.js";import"./index-sbqOYYIm.js";import"./index-CDPCSlUD.js";import"./Tag-C2WChDcP.js";import"./sys-help-2-KG0RzPfQ.js";import"./index-Je_4VAbv.js";import"./Popover-CC4eno7O.js";import"./PopupsCommon.css-D2k_TiiU.js";import"./FocusableElements-DE2dOMez.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CmgjED1E.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-DYOeniYq.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-B8rq_Cwn.js";import"./Link-DWmmrhq6.js";import"./chunk-NUUEMKO5-FKHHA80i.js";import"./iframe-Dl5aFziO.js";import"../sb-preview/runtime.js";import"./client-BzooOYO_.js";import"./copy-CLCnF9Ex.js";import"./copy-B8ijgEE_.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-bhM-b_eu.js";import"./index-mpbf_k2E.js";import"./I18nStore-ZvXQBe85.js";import"./useStylesheet-CIcp3lSM.js";import"./index-QTXGjbpF.js";import"./index-D5w6Jnaw.js";import"./Label-DeMESwab.js";import"./index-DOubndiy.js";import"./index-CHNB8-uH.js";import"./addCustomCSSWithScoping-nMrqEq1r.js";import"./index-DYrmYIPb.js";import"./BusyIndicator-DLv3RVXJ.js";import"./index-Z34fJdHI.js";import"./index-BNw2TIlH.js";import"./Avatar-D0wBket6.js";import"./employee-BnxYOghN.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./index-OP7SWVWD.js";import"./CheckBox-Bh-hd90L.js";import"./ValueState-Bg0UWejw.js";import"./accept-DENHAmCe.js";import"./index-Chq0VNNc.js";import"./Input-hf-Vd_ud.js";import"./ResponsivePopoverCommon.css-BOr3WOvu.js";import"./ValueStateMessage.css-sKGRcLml.js";import"./ResponsivePopover-DRXUZ-Yn.js";import"./Dialog-zzL9k4HV.js";import"./index-B8vlftc9.js";import"./ItemNavigation-DY9WPMGj.js";import"./debounce-TTkz9ISH.js";import"./i18n-defaults-DycAtGW_.js";import"./parameters-bundle.css-By19-ehE.js";import"./main-C6oD7XT2.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
`,e.jsx(p,{of:n}),`
`,e.jsx(c,{children:S}),`
`,e.jsx(t.h2,{id:"wizardstep",children:"WizardStep"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(a,{hideHTMLPropsNote:!0,exclude:f,of:r}),`
`,e.jsx(l,{})]})}function st(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{st as default};
