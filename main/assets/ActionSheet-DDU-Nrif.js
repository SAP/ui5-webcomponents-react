import{j as e}from"./ManagedStyles-0Bwp9t5R.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import{M as p,C as s}from"./index-CHs2jRtN.js";import{C as c}from"./ControlsWithNote-DwLyHAv3.js";import{D as h}from"./DocsHeader-CsPcff1r.js";import{F as m}from"./ProjectTemplate-fVoe9LNg.js";import"./index-BP8_t0zE.js";import{C as a,D as o}from"./ActionSheet.stories-Dfurh6fL.js";import{M as d}from"./index-DDQ_XT5-.js";import"./iframe-T8bF6CMc.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-DaHSXCuS.js";import"./main-HWtSBowW.js";import"./index-g_WJmeQy.js";import"./UI5Element-BfPpwo_k.js";import"./Boot-BtdVcW0c.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-CjWOyBed.js";import"./withWebComponent-DdLYI_QY.js";import"./utils-VXdlHuBA.js";import"./useIsomorphicLayoutEffect-CnI1knHw.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-Dx46P1iz.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-CDo0XdyR.js";import"./Icons-DgaaT5sV.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./sys-help-2-BtjmRNex.js";import"./information-CIM5_BNu.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-DaAYzDGJ.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-BFrvdQTW.js";import"./index-BTRGQOJT.js";import"./Popover-BRx0aMsU.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BDyegTwa.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BGWtnzwQ.js";import"./FocusableElements-FQMFYvMw.js";import"./isElementHidden-Bpu2V8BK.js";import"./AriaLabelHelper-CzOXVcye.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-BxP3RYN1.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-BhswnH6I.js";import"./class-map-DwUNpVO-.js";import"./BrowserScrollbar.css-BmT0sFnr.js";import"./index-BAus-ghq.js";import"./Link-Ca8TnKXf.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./chunk-HLWAVYOI-DzdAMzW3.js";import"./client-Di-4O7We.js";import"./copy-FfYDXqvA.js";import"./index-lyPlTZJl.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DXQOMd9Q.js";import"./index-CCV2VZkT.js";import"./i18n-defaults-B3VmmZkh.js";import"./I18nContext-RJHUyvz-.js";import"./index-CIMqV4DH.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-QeDVj3uD.js";import"./TableOfContent-ClJxKlFX.js";import"./index-D1XApIPR.js";import"./Label-B0QBRtjK.js";import"./index-Cb9UHz9Y.js";import"./Button-C4siPQ_G.js";import"./addCustomCSSWithScoping-B4X1apx3.js";import"./index-DAdrcYy4.js";import"./index-DPpMYsrE.js";import"./Avatar-DDfgA5P5.js";import"./employee-Cmog-JUE.js";import"./index-eC-nXWVd.js";import"./accept-kIYT9b9U.js";import"./decline-Bq4uAF5d.js";import"./delete-CzF8pxqX.js";import"./index-Dlo0u0cE.js";import"./ResponsivePopover-BSbuHI1C.js";import"./Dialog-DhuoG6wg.js";import"./ValueState-Bn-H2OaL.js";import"./Title-ClrU0KnW.js";function r(n){const t={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:a}),`
`,e.jsx(h,{subComponents:["Button"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(t.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h4,{id:"since-0220",children:"since 0.22.0"}),`
`,e.jsxs(t.p,{children:["We recommend opening and closing the ",e.jsx(t.code,{children:"ActionSheet"})," component in a declarative way using the ",e.jsx(t.code,{children:"open"})," and ",e.jsx(t.code,{children:"opener"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const MyComponentWithActionSheet = () => {
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
`,e.jsx(t.p,{children:e.jsxs(t.strong,{children:["Opening an ",e.jsx(t.code,{children:"ActionSheet"})," by reference and not by ",e.jsx(t.code,{children:"id"})]})}),`
`,e.jsxs(t.p,{children:["This web component exposes a way to pass a reference of an element instead of an ",e.jsx(t.code,{children:"id"})," to the ",e.jsx(t.code,{children:"opener"})," prop. Since this is not supported when passing the reference in a declarative way to a React ",e.jsx(t.code,{children:"prop"}),`, you have to attach the ref directly on the web component.
You can do that by e.g. leveraging a React Ref, and then set the corresponding property there.`]}),`
`,e.jsx(d,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
  using this approach!`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
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
`,e.jsx(t.h4,{id:"before-0220",children:"before 0.22.0"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"ActionSheets"})," can only be opened by attaching a ",e.jsx(t.code,{children:"ref"})," to the component and then call the corresponding ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"showAt"})})," method. The method receives the target element - ",e.jsxs(t.em,{children:["on which the ",e.jsx(t.code,{children:"ActionSheet"})," is to be opened"]})," - as parameter."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
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
`,e.jsx(t.h2,{id:"using-actionsheets-inside-other-components",children:"Using ActionSheets inside other components"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"ActionSheets"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e.jsx(t.a,{href:"https://reactjs.org/docs/portals.html",rel:"nofollow",children:"createPortal"})," to mount the ",e.jsx(t.code,{children:"ActionSheet"})," outside of the DOM hierarchy of the parent component."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-JSX",children:`const ActionSheetComponent = () => {
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
`,e.jsx(m,{})]})}function Ze(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{Ze as default};
