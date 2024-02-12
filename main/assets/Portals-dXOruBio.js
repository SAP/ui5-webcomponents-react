import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{M as p}from"./chunk-HLWAVYOI-LlT6VNpv.js";import{F as a}from"./ProjectTemplate-3G0S_6oc.js";import"./index-OjgoNOWw.js";import"./index-QYh6idnL.js";import{T as s}from"./TableOfContent-sYmgJ9Ya.js";import{u as r}from"./index-RwE9nQVW.js";import"./iframe-KUJzbspR.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./react-jss.esm-tmBtHfec.js";import"./index-cyTk__JO.js";import"./UI5Element-J5BIXSmd.js";import"./i18nBundle-hBv5shGA.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent--kEkWNJH.js";import"./utils-rNFQc6Ui.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./decline-TLe42uKS.js";import"./Icons-w8Ubykga.js";import"./i18n-defaults-iZnAAWr4.js";import"./information-mLcAhNUH.js";import"./alert-EvF5vfgw.js";import"./class-map-Y-YjCFqX.js";import"./Icon-9mGrp6sQ.js";import"./Keys-Mzj2D4aO.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./Button-3dE37AvA.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-KF6OS2eD.js";import"./index-W62_3BtY.js";import"./clsx-Zbgk8kpT.js";import"./index-cQAMLrg2.js";import"./Label-z2EGRvw-.js";import"./WrappingType-avPrqc94.js";import"./index-_HlTlQh5.js";import"./index-VbqqGkBQ.js";import"./Link-qPsX_s-9.js";import"./index-WpIsg02C.js";import"./Popover-_i-9Nlxt.js";import"./Integer-kog98579.js";import"./PopupUtils-vEkjvavX.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-mpuHIMki.js";import"./FocusableElements-yiWWnti0.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-nsiBebAr.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5njKSr-C.js";import"./BrowserScrollbar.css-f5JVpLjm.js";import"./index-I2ZSoiFx.js";import"./i18n-defaults-i_6r8m_B.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-cXf_ADaj.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-QKBhLXCa.js";import"./index-9SnBeFbB.js";import"./index-8Uj6lUKo.js";import"./Avatar-DMnS_15W.js";import"./employee-E8ifPoB6.js";import"./index-Fff8eCiy.js";function Ft(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?t.jsx(n,Object.assign({},o,{children:t.jsx(i,{})})):i();function i(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},r(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Working with Portals"}),`
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
