import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as s}from"./index-ChplMHeC.js";import{A as p}from"./ArgTypesWithNote-DCEICjCt.js";import{C as a}from"./ControlsWithNote-BLYzoChM.js";import{D as m}from"./DocsHeader-BTweCqmJ.js";import{F as l}from"./CommandsAndQueries-D9c_V-bH.js";import"./index-qnRJQVoQ.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-BQdI3h8O.js";import{M as u,C as d,a as c,D as h}from"./index-Z9suDlzg.js";import{C as g,D as n,W as r}from"./Wizard.stories-Ds7uab_D.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-CTiFIUnS.js";import"./index-vS7eettY.js";import"./withWebComponent-DMqncVPl.js";import"./utils-C2XfIY3Y.js";import"./useIsomorphicLayoutEffect-C1EF3yoB.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-BzyjfDHJ.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-C9C2dQAU.js";import"./parameters-bundle.css-3_Pq1j61.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DFGxyfr2.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-CB2Xqvf8.js";import"./i18n-defaults-CifGXSvE.js";import"./information-BUHLFqRk.js";import"./information-BiCqrnzz.js";import"./sys-enter-2-CHAD7uKM.js";import"./sys-enter-2-DbI-3aq9.js";import"./TagDesign-Dou_yO3g.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-ZH-RZJzv.js";import"./Tag-BRYgkqac.js";import"./sys-help-2-Cg3brO7T.js";import"./index-B7nGJ2tS.js";import"./Link-DuU4BxE_.js";import"./index-B20XONiy.js";import"./Popover-KVxD3zt0.js";import"./PopupsCommon.css-DbH0sKjP.js";import"./FocusableElements-BTi29GnT.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DeJaGaPJ.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-lxq_R9wx.js";import"./iframe-CyjXMGiF.js";import"./client-lwzJIAjg.js";import"./copy-D0YprZuO.js";import"./copy-BavmS0zW.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-DPJokzl1.js";import"./I18nStore-BFxg9tvA.js";import"./useStylesheet-4xWfxLte.js";import"./index-DvtALA7k.js";import"./index-C8zDtCGl.js";import"./Label-dsgxfrkZ.js";import"./index-DW0x8ghk.js";import"./index-CFV8P0hB.js";import"./Text-BzZxAxrt.js";import"./addCustomCSSWithScoping-BOEXtufo.js";import"./index-CwpH1SbG.js";import"./index-Ahxuog19.js";import"./BusyIndicator-B-9XtNdv.js";import"./index--3sYbX0a.js";import"./index-iU1rSOy8.js";import"./AvatarSize-BceVhWoP.js";import"./employee-CpIGAUgT.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index-C5ppn34M.js";import"./CheckBox-DYErWeq8.js";import"./ValueState-Bg0UWejw.js";import"./accept-DYQK76Td.js";import"./index-Bhm4iIHL.js";import"./Input-CYP_SOtO.js";import"./ResponsivePopoverCommon.css-CPIeEzRy.js";import"./ValueStateMessage.css-BawsjOA2.js";import"./Suggestions.css-CtJ1S49e.js";import"./index-Btz1Ddnq.js";import"./ItemNavigation-DVbu9sly.js";import"./debounce-TTkz9ISH.js";import"./i18n-defaults-CJXxxQPr.js";import"./parameters-bundle.css-Cc6TJcRD.js";import"./ResponsivePopover-Ct_gfHhj.js";import"./Dialog-BUTBf08H.js";import"./main-BL2DbqAR.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
