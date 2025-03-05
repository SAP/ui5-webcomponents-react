import{j as t}from"./useIsomorphicLayoutEffect-CRjHBNH3.js";import{useMDXComponents as n}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-lGe2rtn5.js";import{M as r}from"./index-y53uacrZ.js";import{F as p}from"./ProjectTemplate-IbU-at1j.js";import"./copy-CMUu1AT6.js";import"./index-BP8_t0zE.js";import{T as m}from"./TableOfContent-7RRAQGxT.js";import"./iframe-CR0up_Yh.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-GV3X1JHy.js";import"./main-HWtSBowW.js";import"./index-D15fe23r.js";import"./UI5Element-B2h7kErG.js";import"./Boot-C8BaHzi_.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-CE64eqAB.js";import"./withWebComponent-D63zXRZq.js";import"./utils-D8cetgVj.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-kZ6-2cpn.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BU2Bb3zG.js";import"./Icons-YiE9tW4T.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-_D3nLw4H.js";import"./sys-help-2-Bvno1uwq.js";import"./information-C8ax4bqa.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-k6AQLLnO.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-C_UMjLXx.js";import"./index-uUsIfzfD.js";import"./Link-DXfsQCHY.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-BvrWhPKo.js";import"./decline-CokZCuO3.js";import"./class-map-BQhMMhlU.js";import"./Button-Bt2u8cP6.js";import"./Tooltips-C-7203Cu.js";import"./index-Dletu86Y.js";import"./Popover-D-vbAx4K.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BojsCAVA.js";import"./getActiveElement-BL9Yqj8a.js";import"./getEffectiveScrollbarStyle-BIR1dSFp.js";import"./PopupsCommon.css-Uumup36k.js";import"./FocusableElements-vHT1UwsK.js";import"./isElementHidden-Bpu2V8BK.js";import"./ResizeHandler-NsOSmMjZ.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-BqCgMbDz.js";import"./index-DBtBcav3.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DfMTMFhn.js";import"./index-Cj1pZIKL.js";import"./Label-Cdlv07NW.js";import"./index-TQA7guYE.js";import"./index-Cyo93O8-.js";import"./i18n-defaults-B3GLB-7B.js";import"./I18nContext-RJHUyvz-.js";import"./index-DW5hgAYR.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-CO3cnNRp.js";import"./index-bSK0E_Ur.js";import"./index-C7N0fzvx.js";import"./Avatar-DvrVWNUR.js";import"./employee-CM2OuJvM.js";import"./index-D3X7zxMg.js";function i(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Working with Portals"}),`
`,t.jsx(e.h1,{id:"working-with-portals",children:"Working with Portals"}),`
`,t.jsx(e.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,t.jsx("br",{}),`
`,t.jsx(m,{headingSelector:"h2"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"why-portals",children:"Why Portals?"}),`
`,t.jsxs(e.p,{children:["In most cases when a React component like the ",t.jsx(e.code,{children:"AnalyticalTable"})," implements a popover like a ",t.jsx(e.code,{children:"Dialog"})," or ",t.jsx(e.code,{children:"ResponsivePopover"}),", we use a ",t.jsx(e.a,{href:"https://react.dev/reference/react-dom/createPortal",rel:"nofollow",children:"React Portal"})," to mount it outside the parents DOM hierarchy, to prevent unwanted side effects (wrong positioning, alignment, etc.)."]}),`
`,t.jsx(e.p,{children:"For example:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const DialogComponent = () => {
  const dialogRef = useRef(null);
  const onButtonClick = () => {
    dialogRef.current.show();
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Dialog</Button>
      {createPortal(<Dialog ref={dialogRef} />, document.body)}
    </>
  );
};
`})}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"pitfalls",children:"Pitfalls"}),`
`,t.jsxs(e.p,{children:[`In some cases you may want to add a class or attribute that is affecting all the components HTML elements. Since the popover is outside the DOM hierarchy of the most outer element of the component, the class/attribute/etc. will not be applied to it.
Or maybe you just don't want the popover to be mounted on the `,t.jsx(e.code,{children:"body"}),` element (which is the default).
For this we offer the `,t.jsx(e.code,{children:"portalContainer"})," prop. This prop is available on all components that implement a popover, and with its help you can define the container into which the popover is mounted."]}),`
`,t.jsxs(e.p,{children:["For example, if you want to display the ",t.jsx(e.code,{children:"AnalyticalTable"})," in compact mode, while the rest of the app stays in cozy mode, then you could achieve that like this:"]}),`
`,t.jsx(e.p,{children:"Define a container somewhere in your DOM tree, where the portal should be rendered into and add the respective attribute/class/etc. to it."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<div id="modalContainer" class="ui5-content-density-compact" />
`})}),`
`,t.jsxs(e.p,{children:["Then, set the ",t.jsx(e.code,{children:"portalContainer"})," to the respective element."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<AnalyticalTable
  className="ui5-content-density-compact"
  portalContainer={document.getElementById('modalContainer')}
  data={data}
  columns={columns}
/>
`})}),`
`,t.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Wt(o={}){const{wrapper:e}={...n(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{Wt as default};
