import{j as e}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{useMDXComponents as s}from"./index-D3szj05g.js";import{A as p}from"./ArgTypesWithNote-DChsEhrG.js";import{C as a}from"./ControlsWithNote-zsBDyhlJ.js";import{D as m}from"./DocsHeader-CamJUDW7.js";import{F as l}from"./CommandsAndQueries-Ck8HLIx5.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{M as u,C as d,d as c,D as h}from"./index-Bdi8YhVx.js";import{C as g,D as n,W as r}from"./Wizard.stories-PuEY09tc.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-Pzg-4hDJ.js";import"./index-evewZYN6.js";import"./iframe-Cpwv2kZr.js";import"../sb-preview/runtime.js";import"./withWebComponent-Dj0CMfaz.js";import"./utils-B21VtmG1.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-vPfkXYRc.js";import"./decline-Dtt8f7gG.js";import"./Icon-8rAbDJhl.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B8mU3KX1.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-Cz0fD7oZ.js";import"./information-pNQtyMX0.js";import"./alert-D6VWtbrR.js";import"./class-map-DwAhupCS.js";import"./Button-LAxw2z5E.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BrbxGX_s.js";import"./TagDesign-Dou_yO3g.js";import"./index-C3ZJCerc.js";import"./index-zhh5wtul.js";import"./Tag-DOc2KdyV.js";import"./sys-help-2-CBpcyxoA.js";import"./index-lUF5OGIV.js";import"./Popover-C3k48onv.js";import"./PopupsCommon.css-CL-yqmiO.js";import"./getEffectiveScrollbarStyle-CFKww5-v.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CuRzO4ve.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CpZMqJvf.js";import"./BrowserScrollbar.css-C7k9hgHd.js";import"./index-oMrLWbiO.js";import"./Link-B1bLgUAx.js";import"./chunk-HLWAVYOI-BT0LMQ_Z.js";import"./client-B23sEKGq.js";import"./copy-DzY-XerN.js";import"./copy-eLLizoPG.js";import"./index-PGreZEtb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-waKyCe7Y.js";import"./index-BZAvLi5K.js";import"./I18nStore-D1uEcPVD.js";import"./GitHub-Mark-CULGv64g.js";import"./TableOfContent-CMIG7w1r.js";import"./index-CZOyK1t3.js";import"./Label-DYSmE5xX.js";import"./index-NmxPYmSL.js";import"./index-DxE19OZ0.js";import"./addCustomCSSWithScoping-B01F51vr.js";import"./index-C_Lm8VTo.js";import"./index-Bu9ywWCe.js";import"./index-z--DETqp.js";import"./Avatar-CTO3QSeR.js";import"./employee-CIkKCEkx.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./index-CuZboMXb.js";import"./CheckBox-BhcLB9oj.js";import"./ValueState-Bg0UWejw.js";import"./accept-D3yUlJXE.js";import"./index-DGHfrJZy.js";import"./Input-DLNQeRLK.js";import"./ResponsivePopoverCommon.css-DaYz8FsC.js";import"./ValueStateMessage.css-C92lQkka.js";import"./ResponsivePopover-C7RtNVm8.js";import"./Dialog-Fj3WCMI6.js";import"./Title-CUVSx8J8.js";import"./index-DlOta8fc.js";import"./ItemNavigation-C9YbrAXd.js";import"./debounce-TTkz9ISH.js";import"./i18n-defaults-Bog_jvWR.js";import"./parameters-bundle.css-BwFDz0XS.js";import"./main-CzLLrZqh.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
`,e.jsx(l,{})]})}function ot(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{ot as default};
