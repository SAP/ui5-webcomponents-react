import{j as e}from"./useIsomorphicLayoutEffect-Dhma_bjk.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import{A as a}from"./ArgTypesWithNote--NZiPQVx.js";import{C as p}from"./ControlsWithNote-DEv-jFaz.js";import{D as m}from"./DocsHeader-H_RejM3e.js";import{F as l}from"./CommandsAndQueries-CIdosNgV.js";import"./index-Dll-TxMJ.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-sU8Eh0Pe.js";import{ae as u,af as d,ag as c,ah as h}from"./index-BEKtEr_p.js";import{C as g,D as n,W as r}from"./Wizard.stories-dU68zIkt.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{e as f}from"./utils-CIDokbCC.js";import"./index-BXDvD5Ag.js";import"./withWebComponent-YgbOdVTg.js";import"./utils-C_Hfx9mc.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CRmnyxU0.js";import"./decline-Di3Z0MBP.js";import"./Icon-DDA-V63S.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-ExggBqKR.js";import"./alert-nKQG-ySE.js";import"./class-map-D12-v36h.js";import"./Button-CkiVa5Iu.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BUwKP62u.js";import"./i18n-defaults-PZPXNaBc.js";import"./TagDesign-Dou_yO3g.js";import"./index-sbqOYYIm.js";import"./index-Cdmm4y_7.js";import"./Tag-gh5rEq7q.js";import"./sys-help-2-Dg0HLnT_.js";import"./index-C4dnCzjA.js";import"./Popover-COhsAIU7.js";import"./PopupsCommon.css-U0xQpWGd.js";import"./FocusableElements-BostZfMq.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D085ltoF.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-HUTC8E5D.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-Dz1nSNRn.js";import"./Link-V-qm0Bxn.js";import"./chunk-HLWAVYOI-BDhWYuGd.js";import"./iframe-D9CtqDqz.js";import"../sb-preview/runtime.js";import"./client-BZNFO7bv.js";import"./copy-C5P79WCS.js";import"./copy-BaVgvVlS.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-CnYostSV.js";import"./TableOfContent-J0xBpY2P.js";import"./index-Bpj6kmjj.js";import"./I18nStore-5-32Wrgv.js";import"./useStylesheet-DcbwKAeb.js";import"./index-3WD7if5i.js";import"./index-DYtJKmyC.js";import"./Label-CPv3jFl2.js";import"./index-gHGG7lEc.js";import"./index-DIFmT50V.js";import"./addCustomCSSWithScoping-kPHcp3gn.js";import"./index-GP3fnmag.js";import"./BusyIndicator-DuGIcogQ.js";import"./index-CA4K8WmR.js";import"./index-CTeNKttK.js";import"./Avatar-DOs7P2bF.js";import"./employee-uQoQn_HB.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./index-CRK1Dczu.js";import"./CheckBox-DXsnNZgR.js";import"./ValueState-Bg0UWejw.js";import"./accept-BfX4whS3.js";import"./index-BnXL--el.js";import"./Input-ltHfrqFq.js";import"./ResponsivePopoverCommon.css-DbB4vIHs.js";import"./ValueStateMessage.css-BJPkzP8W.js";import"./ResponsivePopover-CMO3c_7J.js";import"./Dialog-_QHdeRl1.js";import"./index-6lmZJCz8.js";import"./ItemNavigation-oOANHwJF.js";import"./debounce-TTkz9ISH.js";import"./i18n-defaults-CN4zZShS.js";import"./parameters-bundle.css-By19-ehE.js";import"./main-C6oD7XT2.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
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
