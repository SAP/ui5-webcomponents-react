import{j as t}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as n}from"./index-DtGqrCZN.js";import"./chunk-HLWAVYOI-Ck7AfsuC.js";import{M as r}from"./index-DI6VfJam.js";import{F as p}from"./ProjectTemplate-zZw9Vs6U.js";import"./index-Cu9bd8lq.js";import"./index-Ckls47V4.js";import"./copy-CM5pqsHd.js";import{T as m}from"./TableOfContent-D0HrRMLy.js";import"./iframe-BwYX9Hla.js";import"../sb-preview/runtime.js";import"./react-18-CyVMVvrE.js";import"./inheritsLoose-D8L2VVdp.js";import"./_baseForOwn-CD7metVA.js";import"./mapValues-DbyeKAf9.js";import"./_baseUniq-Dmu8z6NP.js";import"./index-D-lniKcH.js";import"./index-DrFu-skq.js";import"./react-jss.esm-BpNdaHSZ.js";import"./theming.esm-BaGMLphO.js";import"./index-CD3vby3i.js";import"./UI5Element-DtnZiShc.js";import"./Boot-DwA_pgKp.js";import"./VersionInfo-Bnh5Htkx.js";import"./CustomElementsScopeUtils-BkU30VC6.js";import"./withWebComponent-B8IC4jtY.js";import"./utils-CiHlOjk7.js";import"./useIsomorphicLayoutEffect-CDseMwwv.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-CW3QmvUh.js";import"./decline-DqGOoHuM.js";import"./Icons-Dptlkq46.js";import"./i18n-defaults-BdfZArTM.js";import"./information-CElEnJTC.js";import"./alert-BU8JezYB.js";import"./class-map-m3fFtNZw.js";import"./Icon-BSolOZRA.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./Button-CVOwl4eG.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-ByZSnYVg.js";import"./index-CrxHuApl.js";import"./clsx-B-dksMZM.js";import"./index-CCP14paK.js";import"./Label-BBrs9RjN.js";import"./WrappingType-CW8URInd.js";import"./index-CyJY5mpX.js";import"./index-CP4DwF4n.js";import"./Link-DlttXuw3.js";import"./index-Bu7HVzj5.js";import"./Popover-jLsmKY5f.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DV-WEd1e.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-D4CwgKUt.js";import"./FocusableElements-D39FYWGM.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-CBU2dt4G.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-CtdHLryf.js";import"./BrowserScrollbar.css-Dc6KEEQV.js";import"./index-BO8bU_Iz.js";import"./i18n-defaults-k3KOTM4I.js";import"./I18nContext-lEOM8vPx.js";import"./ThemingParameters--AGRs54p.js";import"./index-CIus2qXS.js";import"./useStylesheet-BSfe7C-7.js";import"./ModalsContext-DDUwbLsf.js";import"./useIsomorphicId-CHfKDsSO.js";import"./addCustomCSSWithScoping-D1RPuXTz.js";import"./index-DPQTQdMk.js";import"./index-AfRP8CNA.js";import"./Avatar-BlVXo_BW.js";import"./employee-BdaP6Y8j.js";import"./index-BHAGY1XH.js";function i(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Working with Portals"}),`
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
