import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{C as p,A as m}from"./DomRefTable.module-QuC-s2Dq.js";import{D as l}from"./DocsHeader-77GkObLO.js";import{F as u}from"./Footer-fC3w50rW.js";import"./index-OjgoNOWw.js";import{M as d,C as c,b as g,e as h}from"./chunk-HLWAVYOI-6usYnijc.js";import{C as S,D as o,W as s}from"./Wizard.stories-MAoTwiwX.js";import{S as f}from"./SubcomponentsSection-pzdPLcqE.js";import{e as v}from"./utils-77gZ8405.js";import{u as a}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-79Jfovnl.js";import"./iframe-RXQu8Ybn.js";import"../sb-preview/runtime.js";import"./UI5Element-_cJDeK03.js";import"./i18nBundle-YDapVb1x.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent-UxvJwa3A.js";import"./utils-rNFQc6Ui.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-qyLuyi2a.js";import"./Icons-1V9ErOOl.js";import"./decline-1i68oG_p.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-LBZ9LJI-.js";import"./alert-wj9gYQbS.js";import"./class-map--zj6Ctao.js";import"./Button-kjIKsCqk.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-IIWnNm9Y.js";import"./index-G1ylA0vb.js";import"./clsx-Zbgk8kpT.js";import"./i18n-defaults-a20Pyi7e.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-evY60Rnm.js";import"./index-QYh6idnL.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-fxF1oxJv.js";import"./index-jZT4W7-m.js";import"./Integer-kog98579.js";import"./index-A0jmAlfl.js";import"./Avatar-3d4E78pi.js";import"./ResizeHandler-xTi6PJ7P.js";import"./employee-zEMWRMpH.js";import"./Link-kuayvrPB.js";import"./WrappingType-avPrqc94.js";import"./index--AU5-jgA.js";import"./index-G8s_GnsG.js";import"./index-sHoRIkfF.js";import"./TableOfContent-ZjVOXjLR.js";import"./index-m5rAO5ZE.js";import"./Label-Zjx1tiqV.js";import"./index-kbbh15fs.js";import"./index-qbhnVYcU.js";import"./Popover-ALm1fb4C.js";import"./PopupUtils-WqNPYdCF.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-GS9FVPNx.js";import"./FocusableElements-YRGIpHeQ.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-21pwAbrQ.js";import"./BrowserScrollbar.css-piSU4CQM.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-z3VktcOy.js";import"./mapValues-Iyc0g4nJ.js";import"./_baseUniq-PeaQ4i79.js";import"./index-PPLHz8o0.js";import"./index-ru46B3pF.js";import"./index-VFYOIMBi.js";import"./CheckBox-vcMhKlRJ.js";import"./ValueState-zUcANXoY.js";import"./accept-weNF-yLT.js";import"./index-HcQbvDn7.js";import"./Input-iOj7CFV-.js";import"./ResponsivePopoverCommon.css-9bTUQJb7.js";import"./ValueStateMessage.css-J2AOpXaz.js";import"./index-HdPNeAOO.js";import"./Title-qniGFt20.js";import"./ItemNavigation-3zBNmLVM.js";import"./Float-0fEWDOdp.js";import"./debounce-8VpZswfd.js";import"./ResponsivePopover-VOpNnSI-.js";import"./Dialog-pzhs5CsA.js";import"./i18n-defaults-mCcOgfSQ.js";import"./parameters-bundle.css-jS5Rgmp1.js";function ot(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(r,{})})):r();function r(){const t=Object.assign({h2:"h2",pre:"pre",code:"code"},a(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:S}),`
`,e.jsx(l,{since:"0.12.0"}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:o,sourceState:"none"}),`
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
`,e.jsx(p,{of:o}),`
`,e.jsx(g,{children:f}),`
`,e.jsx(t.h2,{id:"wizardstep",children:"WizardStep"}),`
`,e.jsx(h,{of:s}),`
`,e.jsx(m,{hideHTMLPropsNote:!0,exclude:v,of:s}),`
`,e.jsx(u,{})]})}}export{ot as default};
