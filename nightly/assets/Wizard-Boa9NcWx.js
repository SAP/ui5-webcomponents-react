import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-B5Ip8tK9.js";import{A as p}from"./ArgTypesWithNote-BiujPofG.js";import{C as a}from"./ControlsWithNote-DxOWoMOg.js";import{D as m}from"./DocsHeader-CikJ8O4A.js";import{F as l}from"./CommandsAndQueries-BXylRvwM.js";import"./index-Cn2JAFr3.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-JqJU4F4n.js";import{M as u,C as d,a as c,D as h}from"./index-bsJpvoGF.js";import{C as g,D as n,W as r}from"./Wizard.stories-WJ-q-5p5.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-6HDH5IqE.js";import"./index-8msv1YOk.js";import"./jsx-runtime-CTdjW1dy.js";import"./CustomElementsScope-BI7irdrP.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CddyUUJt.js";import"./Keys-BxH5KEHJ.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-Cq4WdPfD.js";import"./parameters-bundle.css-CKhNLE8L.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CywStIph.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Bwpyempw.js";import"./decline-CzIZ7Vnl.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-C85sdt-6.js";import"./information-CovZJhop.js";import"./sys-enter-2-LJy9JDcm.js";import"./sys-enter-2-CUlYw7x6.js";import"./alert-DKjZxuBr.js";import"./Tag-BGp0HQg1.js";import"./sys-help-2-CdqLSqXL.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-DjYHlBL_.js";import"./index-xR1I-Wi5.js";import"./Link-BvcafW2a.js";import"./index-GYOhI-mh.js";import"./Popover-D3TB1XeJ.js";import"./PopupsCommon.css-3rSjbG44.js";import"./FocusableElements-Cvm20E5b.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B38a0cLW.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy-iFL-9i7I.js";import"./copy-DVi57tol.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-huMtOpZD.js";import"./I18nStore-C5X80oUZ.js";import"./useStylesheet-4DYJndCZ.js";import"./index-D71WPoKU.js";import"./index-BNsc4RDp.js";import"./Label-CxXPup1E.js";import"./index-CK7zNLqv.js";import"./index-OzB7lNJQ.js";import"./Text-DZG3aMF7.js";import"./preview-CT10fIVj.js";import"./iframe-vzWAetNr.js";import"./DocsRenderer-CFRXHY34-BqBqZM1d.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-B6DvbxXy.js";import"./index-DPnISxA_.js";import"./BusyIndicator-BKaUugOY.js";import"./index-CnTKSd9L.js";import"./index-Dj0HSimA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1lbVTklO.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-53qLainG.js";import"./CheckBox-B3wYHGWl.js";import"./ValueState-Bg0UWejw.js";import"./accept-COVgYUg4.js";import"./index-DHqfWIPz.js";import"./Input-CG_zxEZs.js";import"./ResponsivePopoverCommon.css-CrKOj95L.js";import"./ValueStateMessage.css-D9C9dNfs.js";import"./Suggestions.css-B2XvoZKI.js";import"./index-D1Et8aR6.js";import"./ItemNavigation-DNb9B6_M.js";import"./debounce-TTkz9ISH.js";import"./i18n-defaults-9FLHnk33.js";import"./parameters-bundle.css-BSPpStCH.js";import"./ResponsivePopover-CSpqicr4.js";import"./Dialog-MPSfdmEc.js";import"./main-DirjBNUD.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
