import{j as t}from"./useIsomorphicLayoutEffect-CZEdMYkS.js";import{useMDXComponents as i}from"./index-DcZOShwE.js";import"./chunk-HLWAVYOI-DZv-XghG.js";import{M as r}from"./index-B0pBqCh5.js";import"./index-DQ-tqfo-.js";import"./TagDesign-B60Yj3Pp.js";import"./index-gJgmXzrm.js";import"./index-DjqRnomV.js";import"./Boot-Bi0-wsLc.js";import"./copy-CtgKK3fC.js";import"./Button-Do_F120z.js";import{F as p}from"./ProjectTemplate-BdjanEFy.js";import{T as a}from"./TableOfContent-DM9CSZp5.js";import"./WrappingType-CW8URInd.js";import"./iframe-DIXxBug1.js";import"../sb-preview/runtime.js";import"./client-DNfJn3vO.js";import"./_baseForOwn-CLRePLhI.js";import"./mapValues-B_fQXYuL.js";import"./_baseUniq-C22BvjpN.js";import"./index-DPb1xiaU.js";import"./index-DrFu-skq.js";import"./UI5Element-BSD7m3Nn.js";import"./CustomElementsScopeUtils-DQm3oQ75.js";import"./EventProvider-CVfkyUHo.js";import"./withWebComponent-DbBZwVV6.js";import"./utils-D-LpYKBL.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-D-vhNEte.js";import"./decline-CbvxqJl_.js";import"./Icons-DNVx3qDv.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-BBm6bxfd.js";import"./alert-C_nh5Qt7.js";import"./class-map-CgjcvVes.js";import"./Icon-CxSx41s_.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./i18n-defaults-Dk6PQJ4F.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-Bvgs6qEF.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-IiibRSM5.js";import"./Popover-XR-C8_HJ.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-BweN9FxF.js";import"./FocusableElements-PMYTkUzF.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BZa0Uicw.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D9IWnstk.js";import"./BrowserScrollbar.css-YdZmbuMe.js";import"./index-BtorMJMB.js";import"./Label-gsrpWG-u.js";import"./index-B9iAwakS.js";import"./index-DLNRzpBv.js";import"./Link-CIE5ONNA.js";import"./index-weVWm35j.js";import"./index-CPNTbpoD.js";import"./i18n-defaults-DXj3O94t.js";import"./I18nContext-D8i4N15C.js";import"./index-D-IgYp8E.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-BWMWV5L6.js";import"./useIsomorphicId-BEB4eg8l.js";import"./addCustomCSSWithScoping-DAUcWKpH.js";import"./index-DzwsR14B.js";import"./index-BzZ3dUoL.js";import"./Avatar-8WJ7r5CK.js";import"./employee-CU0PuroF.js";import"./index-CF6zCdXp.js";function n(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Working with Portals"}),`
`,t.jsx(e.h1,{id:"working-with-portals",children:"Working with Portals"}),`
`,t.jsx(e.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,t.jsx("br",{}),`
`,t.jsx(a,{headingSelector:"h2"}),`
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
`,t.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Ot(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n(o)}export{Ot as default};
