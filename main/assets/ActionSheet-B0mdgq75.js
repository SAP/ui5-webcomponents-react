import{j as e}from"./ManagedStyles-B3AuKgSD.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import{M as p,C as s}from"./index-BKZdiHtk.js";import{C as c}from"./ControlsWithNote-BwDeRmX7.js";import{D as h}from"./DocsHeader-BD37YK9q.js";import{F as m}from"./ProjectTemplate-ahOcSkK1.js";import"./index-BP8_t0zE.js";import{C as a,D as o}from"./ActionSheet.stories-hzJ3ejqQ.js";import{M as d}from"./index-uvEx9q7l.js";import"./iframe-BGAkIJgT.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-CMwG8sGf.js";import"./main-HWtSBowW.js";import"./index-BTJKT648.js";import"./UI5Element-BDMamLf2.js";import"./Boot-DOb84JFo.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-CyqSdClf.js";import"./withWebComponent-B6oBGWld.js";import"./utils-BFMQrOqR.js";import"./useIsomorphicLayoutEffect-CnI1knHw.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-VOPn86Vc.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BO7pZwTn.js";import"./Icons-BEU0Gkqb.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-CG8awnKl.js";import"./sys-help-2-DvC0Pbzk.js";import"./information-BKTX2iJj.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-DA8J16Yf.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-YvCKXLrH.js";import"./index-Bn7p9pq8.js";import"./Popover-CIglqovv.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DrS11q-G.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CQ0KG_Or.js";import"./FocusableElements-B5R4EUYo.js";import"./isElementHidden-Bpu2V8BK.js";import"./AriaLabelHelper-CzOXVcye.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DS8KPGJE.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-C_Zo2l27.js";import"./class-map-k-XuEcbQ.js";import"./BrowserScrollbar.css-ljOou4G0.js";import"./index-B2BTOVlh.js";import"./Link-VbEG4eoi.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./chunk-HLWAVYOI-BhU0hfhA.js";import"./client-Di-4O7We.js";import"./copy-C1-wxiKi.js";import"./index-DOzijD-M.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-NUMS3nLe.js";import"./index-xGquCu8c.js";import"./i18n-defaults-DlmaUOWU.js";import"./I18nContext-RJHUyvz-.js";import"./index-CGRQZsF8.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-ZT-4UEle.js";import"./TableOfContent-BaU6aMqa.js";import"./index-BTojAsDI.js";import"./Label-DpitxhM9.js";import"./index-kYbwgQiD.js";import"./Button-BZkI_7BG.js";import"./addCustomCSSWithScoping-D_wcte3H.js";import"./index-JVzwfOzG.js";import"./index-Bu8D03iS.js";import"./Avatar-BGro6qG4.js";import"./employee-Cmzn10U8.js";import"./index-DpMpEd69.js";import"./accept-BVRA-9LX.js";import"./decline-DIsY4YnD.js";import"./delete-C8CN1ZJh.js";import"./index-BPPGNIvf.js";import"./ResponsivePopover-DEqx_bxM.js";import"./Dialog-DGaZFEDF.js";import"./ValueState-Bn-H2OaL.js";import"./Title-DGwJIp2N.js";function r(n){const t={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:a}),`
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
