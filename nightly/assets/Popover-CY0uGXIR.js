import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-B7tNCeqj.js";import{ae as n,af as e}from"./index-CD7E-jaC.js";import"./index-C1n754Ql.js";import"./index-KFcweoO8.js";import{C as s}from"./ControlsWithNote-BmdgDf9i.js";import{D as a}from"./DocsHeader-BkL8Zsrb.js";import{F as c}from"./CommandsAndQueries-wC3BrSXO.js";import"./products-B8km3JGR.js";import"./index-CjmQ2z5u.js";import"./WrappingType-CW8URInd.js";import"./Title-Dvor2iJZ.js";import{C as d,D as p}from"./Popover.stories-B13Q690w.js";import"./iframe-BcGCdDWx.js";import"../sb-preview/runtime.js";import"./index-bI5-aUrJ.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-BAC46Qgl.js";import"./utils-DHWaO16c.js";import"./useIsomorphicLayoutEffect-BrM9ZQ9f.js";import"./slot-Df15G--e.js";import"./event-strict-C2lE4gn2.js";import"./i18n-BLQCbquq.js";import"./Button-D2qpVKd_.js";import"./Keys-icCwrzTr.js";import"./AccessibilityTextsHelper-DhVMExKx.js";import"./Icon-KwQmOmwG.js";import"./parameters-bundle.css-BzaqQttB.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-PdAMeIDX.js";import"./toLowercaseEnumValue-BQhMonSq.js";import"./i18n-defaults-Cyg2J0QB.js";import"./decline-Cvlv1555.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-DXlV02Fk.js";import"./information-xqs3OhY3.js";import"./sys-enter-2-CSX9nspg.js";import"./sys-enter-2-DbnliBdY.js";import"./TagDesign-Dou_yO3g.js";import"./utils-MkX9vSBS.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";import"./index-B80W41n0.js";import"./Tag-Bslz7m5D.js";import"./sys-help-2-2JKOolh2.js";import"./index-Dga5kidR.js";import"./Link-D-9JsuZq.js";import"./index-DyiqWDN1.js";import"./Popover-D3Aa3r1P.js";import"./PopupsCommon.css-BjVEqPfo.js";import"./FocusableElements-CWhrFN4y.js";import"./isElementHidden-Bpu2V8BK.js";import"./isElementClickable-C7H9UXMP.js";import"./getActiveElement-BL9Yqj8a.js";import"./ResizeHandler-DZGQLi_B.js";import"./MediaRange-CQ-a3KRn.js";import"./getEffectiveScrollbarStyle-DY0HYxPj.js";import"./chunk-NUUEMKO5-DQvy33nz.js";import"./client-CY4f97Aa.js";import"./copy-D5I8fHsc.js";import"./copy-0ABXfWaL.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-BTksmC1d.js";import"./index-CLa517s8.js";import"./I18nStore-ZZUdxPPL.js";import"./useStylesheet-HR5-WzWz.js";import"./index-Oz33ecUz.js";import"./index-CBHUUcbt.js";import"./Label-CEj5rW2N.js";import"./index-NooZRknG.js";import"./index-f_HIS5b8.js";import"./Text-CKbp8M25.js";import"./addCustomCSSWithScoping-CrhCyCCs.js";import"./index-BYWKQNiy.js";import"./index-BJBRTTXf.js";import"./BusyIndicator-CLoFvcyK.js";import"./index-CFz6ke_V.js";import"./index-yEmNeK-_.js";import"./AvatarSize-BceVhWoP.js";import"./employee-BdFbn1ih.js";import"./settings-BSj8F63X.js";import"./index-DbS3XIkS.js";import"./List-BIAA9V9V.js";import"./ItemNavigation-h15b09Mr.js";import"./DropIndicator-Ogk3tsUA.js";import"./getNormalizedTarget-Cm-6g3pi.js";import"./debounce-jW346lN3.js";import"./TabbableElements-Bq860v1p.js";import"./index-BS1V6ddN.js";import"./ListItemStandard-CYZyNhF_.js";import"./ListItemTemplate-BIBE7761.js";import"./ListItemAdditionalText.css-DuUC6WAc.js";import"./slim-arrow-right-D2XuyzXG.js";import"./RadioButton-ZhhbvTA9.js";import"./ValueState-CyC8gWMA.js";import"./CheckBox-ste1dXck.js";import"./accept-D_3Be4Ov.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:d}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(r.h2,{id:"example",children:"Example"}),`
`,o.jsx(e,{of:p}),`
`,o.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:p}),`
`,o.jsx(r.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(r.p,{children:["You can open and close the ",o.jsx(r.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(r.code,{children:"open"})," and ",o.jsx(r.code,{children:"opener"})," prop."]}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <Popover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(c,{})]})}function mr(t={}){const{wrapper:r}={...m(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{mr as default};
