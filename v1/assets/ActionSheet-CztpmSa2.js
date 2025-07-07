import{j as e}from"./useIsomorphicLayoutEffect-DvGGtHJq.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import{M as p,C as s}from"./index--T7WpkkW.js";import{C as c}from"./ControlsWithNote-Bns57EG6.js";import{D as h}from"./DocsHeader-CFj0UfHK.js";import{F as m}from"./ProjectTemplate-CJllqwz5.js";import"./index-BP8_t0zE.js";import{C as a,D as o}from"./ActionSheet.stories-BG0LpFqa.js";import{M as d}from"./index-CkZ7NgZn.js";import"./iframe-BqnnHtrP.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./chunk-HLWAVYOI-CPEPKB62.js";import"./client-Di-4O7We.js";import"./copy-Bqd9q-RL.js";import"./Boot-DcdhI_RK.js";import"./EventProvider-B3ZIXKWe.js";import"./Icons-BFUWD3ZY.js";import"./i18nBundle-B0EGx0z0.js";import"./index-oNko3MXv.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DWFaJupJ.js";import"./index-DMnhoXDr.js";import"./i18n-defaults-i2-x_YLi.js";import"./I18nContext-RJHUyvz-.js";import"./index-C94UiMU3.js";import"./CustomElementsScope-Dt2MhVrA.js";import"./ThemingParameters-pyhX3s39.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./utils-62fEIYF3.js";import"./main-HWtSBowW.js";import"./GitHub-Mark-Dq260Kwm.js";import"./TableOfContent-nCnKioMQ.js";import"./index-DkMZbiOL.js";import"./Link-CFu6ETcl.js";import"./UI5Element-infrDpAf.js";import"./withWebComponent-Czp6OQvU.js";import"./utils-lAiJ6aRh.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./WrappingType-CW8URInd.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-h9yeeTQy.js";import"./parameters-bundle.css-6UUskKkY.js";import"./index-DlwMO8AW.js";import"./Label-CfM8R4Pi.js";import"./index-TeWI8zc9.js";import"./Button-DKDZYIHc.js";import"./slot-Df15G--e.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-BHdqPbjc.js";import"./Icon-BkC3Ogwn.js";import"./index-C1r-v56s.js";import"./sys-help-2-D3V3v6Ov.js";import"./information-D3hZp6VX.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-Byts_AR-.js";import"./index-tB9F6Qj5.js";import"./Popover-_-p9RFGN.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DbhQg9BC.js";import"./getActiveElement-BL9Yqj8a.js";import"./getEffectiveScrollbarStyle-BIR1dSFp.js";import"./PopupsCommon.css-Bjwtaph5.js";import"./FocusableElements-Bm8VlCBw.js";import"./isElementHidden-Bpu2V8BK.js";import"./ResizeHandler-DMczlk5E.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-Bl1Jni_s.js";import"./class-map-DfcPub6e.js";import"./addCustomCSSWithScoping-BRtIHklr.js";import"./index-CWw44QoS.js";import"./index-eBe1fr1x.js";import"./Avatar-CPYvyFBz.js";import"./employee-0nfTRhP-.js";import"./index-YX2K6Gl5.js";import"./accept-BahrlDLa.js";import"./decline-CV74VQxx.js";import"./delete-DfewoQIu.js";import"./index-DLrzBHFr.js";import"./ResponsivePopover-Dph49aw3.js";import"./Dialog-BNcPSCma.js";import"./ValueState-Bn-H2OaL.js";import"./Title-CWSO6p0j.js";function r(t){const n={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:a}),`
`,e.jsx(h,{subComponents:["Button"]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(n.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"since-0220",children:"since 0.22.0"}),`
`,e.jsxs(n.p,{children:["We recommend opening and closing the ",e.jsx(n.code,{children:"ActionSheet"})," component in a declarative way using the ",e.jsx(n.code,{children:"open"})," and ",e.jsx(n.code,{children:"opener"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithActionSheet = () => {
  const [actionSheetIsOpen, setActionSheetIsOpen] = useState(false);
  return (
    <>
      <Button
        id={'openActionSheetBtn'}
        onClick={() => {
          setActionSheetIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <ActionSheet
        opener={'openActionSheetBtn'}
        open={actionSheetIsOpen}
        onAfterClose={() => {
          setActionSheetIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Opening an ",e.jsx(n.code,{children:"ActionSheet"})," by reference and not by ",e.jsx(n.code,{children:"id"})]})}),`
`,e.jsxs(n.p,{children:["This web component exposes a way to pass a reference of an element instead of an ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"opener"})," prop. Since this is not supported when passing the reference in a declarative way to a React ",e.jsx(n.code,{children:"prop"}),`, you have to attach the ref directly on the web component.
You can do that by e.g. leveraging a React Ref, and then set the corresponding property there.`]}),`
`,e.jsx(d,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
  using this approach!`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
  const popoverRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpenerClick = (e) => {
    if (popoverRef.current) {
      popoverRef.current.opener = e.target;
      setOpen((prev) => !prev);
    }
  };
  return (
    <>
      <Button onClick={handleOpenerClick}>Opener</Button>
      <ActionSheet ref={popoverRef} open={open}>
        {/* Content */}
      </ActionSheet>
    </>
  );
};
`})}),`
`,e.jsx(n.h4,{id:"before-0220",children:"before 0.22.0"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ActionSheets"})," can only be opened by attaching a ",e.jsx(n.code,{children:"ref"})," to the component and then call the corresponding ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"showAt"})})," method. The method receives the target element - ",e.jsxs(n.em,{children:["on which the ",e.jsx(n.code,{children:"ActionSheet"})," is to be opened"]})," - as parameter."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
  const actionSheetRef = useRef(null);
  const onButtonClick = (e) => {
    actionSheetRef.current.showAt(e.target);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open ActionSheet</Button>
      <ActionSheet ref={actionSheetRef}>
        <Button icon="add">Accept</Button>
        <Button>Reject</Button>
        <Button>This is my super long text!</Button>
      </ActionSheet>
    </>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"using-actionsheets-inside-other-components",children:"Using ActionSheets inside other components"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ActionSheets"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e.jsx(n.a,{href:"https://reactjs.org/docs/portals.html",rel:"nofollow",children:"createPortal"})," to mount the ",e.jsx(n.code,{children:"ActionSheet"})," outside of the DOM hierarchy of the parent component."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-JSX",children:`const ActionSheetComponent = () => {
  const actionSheetRef = useRef(null);
  const onButtonClick = (e) => {
    actionSheetRef.current.showAt(e.target);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open ActionSheet</Button>
      {createPortal(
        <ActionSheet ref={actionSheetRef}>
          <Button icon="add">Accept</Button>
          <Button>Reject</Button>
          <Button>This is my super long text!</Button>
        </ActionSheet>,
        document.body
      )}
    </>
  );
};
`})}),`
`,e.jsx(m,{})]})}function Ve(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{Ve as default};
