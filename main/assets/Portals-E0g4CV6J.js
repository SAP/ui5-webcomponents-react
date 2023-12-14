import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{M as p}from"./chunk-HLWAVYOI-_9n66bf6.js";import"./DomRefTable.module-ynb6hwXd.js";import"./index-OjgoNOWw.js";import{T as a}from"./TableOfContent-O1JTp2D_.js";import{F as s}from"./Footer-v2scdNrl.js";import{u as r}from"./index-RwE9nQVW.js";import"./iframe-L6Utug_T.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./react-jss.esm-tmBtHfec.js";import"./index-CGxUGaDU.js";import"./UI5Element-4kitL615.js";import"./i18nBundle-h5yKZf-0.js";import"./VersionInfo-yX_RFFR1.js";import"./CustomElementsScopeUtils-icazltFf.js";import"./withWebComponent-y_2h_qsG.js";import"./utils-jDGQm03y.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-ic8wGgAs.js";import"./Icons-cDXElGrC.js";import"./decline-tlNcqIac.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-txDdHyyj.js";import"./alert-sbIfV1of.js";import"./class-map-aNJl42Aw.js";import"./Button-dXtUjl7w.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-zEJ36VRV.js";import"./index-IPJJPG41.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-EHbh3l3V.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-DWXxr99t.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-kI6DTjO7.js";import"./index-JdcpimEN.js";import"./Integer-kog98579.js";import"./index-sDVpnFiV.js";import"./Avatar-DexMZin0.js";import"./ResizeHandler-_S6lmbp5.js";import"./employee-jQid-Nvn.js";import"./index-SVYUcyQr.js";import"./index-RDIZrQgX.js";import"./Link-yiZ7VLOd.js";import"./WrappingType-avPrqc94.js";import"./index-2x067cu6.js";import"./index-_ZapS8ms.js";import"./Label-avDcfEez.js";import"./index-S2gYgxwM.js";import"./index-oIVlQnY8.js";import"./Popover-jBPmsweJ.js";import"./PopupUtils-9DzRw33t.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-Honr3Kcv.js";import"./FocusableElements-eRJsgpvJ.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-cRo_ADDP.js";import"./BrowserScrollbar.css-IWLYYIFQ.js";function Ot(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?t.jsx(n,Object.assign({},o,{children:t.jsx(i,{})})):i();function i(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},r(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Working with Portals"}),`
`,t.jsx(e.h1,{id:"working-with-portals",children:"Working with Portals"}),`
`,t.jsx(e.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,t.jsx("br",{}),`
`,t.jsx(a,{headingSelector:"h2"}),`
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
`,t.jsx(s,{style:{position:"fixed",bottom:0,zIndex:2}})]})}}export{Ot as default};
