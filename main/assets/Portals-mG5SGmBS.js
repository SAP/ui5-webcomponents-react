import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{M as p}from"./chunk-HLWAVYOI-4Q6K_oWx.js";import{F as a}from"./ProjectTemplate-J5KhVjc2.js";import"./index-OjgoNOWw.js";import"./index-QYh6idnL.js";import{T as s}from"./TableOfContent-_qgtBB6g.js";import{u as r}from"./index-RwE9nQVW.js";import"./iframe-79yzDAC3.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-z3VktcOy.js";import"./mapValues-Iyc0g4nJ.js";import"./_baseUniq-PeaQ4i79.js";import"./index-PPLHz8o0.js";import"./index-ru46B3pF.js";import"./react-jss.esm-tmBtHfec.js";import"./index-y6zG2pCc.js";import"./UI5Element-_cJDeK03.js";import"./i18nBundle-YDapVb1x.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent--kEkWNJH.js";import"./utils-rNFQc6Ui.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./decline-TrFDzgUZ.js";import"./Icons-dG5I7pqk.js";import"./i18n-defaults-iZnAAWr4.js";import"./information-hXM74YAc.js";import"./alert-dnfYKYS3.js";import"./class-map-Y-YjCFqX.js";import"./Icon-1HyKfQwB.js";import"./Keys-Mzj2D4aO.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./Button-Q_btruTx.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-3YbdkqSs.js";import"./index-ndaVN1fR.js";import"./clsx-Zbgk8kpT.js";import"./index-ssfDoOt4.js";import"./Label-GIHgrMyy.js";import"./WrappingType-avPrqc94.js";import"./index-V5rDfUAP.js";import"./index-9XMkO08Y.js";import"./Link--uQmFIhM.js";import"./index-yyKLCNs7.js";import"./Popover-4Jmhfo0j.js";import"./Integer-kog98579.js";import"./PopupUtils-WqNPYdCF.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-U0zEo08F.js";import"./FocusableElements-YRGIpHeQ.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-xTi6PJ7P.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5njKSr-C.js";import"./BrowserScrollbar.css-OKoQbzr6.js";import"./index-G1ylA0vb.js";import"./i18n-defaults-a20Pyi7e.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-evY60Rnm.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-fxF1oxJv.js";import"./index-dIi-qWiC.js";import"./index--1ZNpseG.js";import"./Avatar-zEbB_F4h.js";import"./employee-2wNDT3_m.js";import"./index-gFkbDL1E.js";function Ft(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?t.jsx(n,Object.assign({},o,{children:t.jsx(i,{})})):i();function i(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},r(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Working with Portals"}),`
`,t.jsx(e.h1,{id:"working-with-portals",children:"Working with Portals"}),`
`,t.jsx(e.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,t.jsx("br",{}),`
`,t.jsx(s,{headingSelector:"h2"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"why-portals",children:"Why Portals?"}),`
`,t.jsxs(e.p,{children:["In most cases when a React component like the ",t.jsx(e.code,{children:"AnalyticalTable"})," implements a popover like a ",t.jsx(e.code,{children:"Dialog"})," or ",t.jsx(e.code,{children:"ResponsivePopover"}),", we use a ",t.jsx(e.a,{href:"https://react.dev/reference/react-dom/createPortal",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Portal"})," to mount it outside the parents DOM hierarchy, to prevent unwanted side effects (wrong positioning, alignment, etc.)."]}),`
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
`,t.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2}})]})}}export{Ft as default};
