import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as s}from"./index-ChplMHeC.js";import{A as p}from"./ArgTypesWithNote-BFV98Ew_.js";import{C as a}from"./ControlsWithNote-CADrsMFw.js";import{D as m}from"./DocsHeader-CmH0iYHc.js";import{F as l}from"./CommandsAndQueries-BeO2nfZ6.js";import"./index-hrp50IaA.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-DC3LwAUi.js";import{M as u,C as d,a as c,D as h}from"./index-B-5Yj3Zs.js";import{C as g,D as n,W as r}from"./Wizard.stories-CJz_VaFL.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-BpdWIk01.js";import"./index-DLPFLlG_.js";import"./withWebComponent-CkJkBj4X.js";import"./utils-Cc7kMCdT.js";import"./useIsomorphicLayoutEffect-ycvDkpIR.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-BxO28PWq.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-BnglGdU1.js";import"./parameters-bundle.css-BQD_Xb6z.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BESgvrT7.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-CGhQ9j18.js";import"./i18n-defaults-CifGXSvE.js";import"./information-KDvoX9uY.js";import"./information-C8_9afp4.js";import"./sys-enter-2-CsrJiGdz.js";import"./sys-enter-2-Ci_i_5eG.js";import"./TagDesign-Dou_yO3g.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-DSQIUmMV.js";import"./Tag-DzIJgOv0.js";import"./sys-help-2-B4q7nDXu.js";import"./index-CP6VInro.js";import"./Link-Bcg9H63G.js";import"./index-CL5etcr3.js";import"./Popover-C6ZUNzDq.js";import"./PopupsCommon.css-rRFtJ1Vd.js";import"./FocusableElements-C53XHRKH.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-tQZDysQP.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-CnJfJsUV.js";import"./iframe-TAURSOwn.js";import"./client-lwzJIAjg.js";import"./copy-5h2KIO4T.js";import"./copy-VunZ5yu1.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-Bb8E3hqz.js";import"./I18nStore-B-mmBzjK.js";import"./useStylesheet-hr5H-IMi.js";import"./index-Zv7eDdGR.js";import"./index-DkYwStNe.js";import"./Label-CcC1A6T7.js";import"./index-D7PKo4Nn.js";import"./index-BMvJLi4H.js";import"./Text-D4h1PrIo.js";import"./addCustomCSSWithScoping-DGzs2l-b.js";import"./index-CpccB1hQ.js";import"./index-CG_Gq9FR.js";import"./BusyIndicator-2oz_Gfhw.js";import"./index-Bap_Ptt8.js";import"./index-CA4K88X9.js";import"./AvatarSize-BceVhWoP.js";import"./employee-C3v0q24u.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index-p1McOn1d.js";import"./CheckBox-BfMEDbJE.js";import"./ValueState-Bg0UWejw.js";import"./accept-BmSATcDT.js";import"./index-B9v5pxv1.js";import"./Input-cNTTcojQ.js";import"./ResponsivePopoverCommon.css-pmf1x_Fb.js";import"./ValueStateMessage.css-B89AOckr.js";import"./Suggestions.css-BIKZHaOm.js";import"./index-D5g_kGq7.js";import"./ItemNavigation-T0V7Tj1H.js";import"./debounce-TTkz9ISH.js";import"./i18n-defaults-CJXxxQPr.js";import"./parameters-bundle.css-B5NQRWWq.js";import"./ResponsivePopover-DH4hdRET.js";import"./Dialog-CjGZgoGI.js";import"./main-BL2DbqAR.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
