import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as e}from"./index-B7tNCeqj.js";import"./chunk-NUUEMKO5-Dahq-XaZ.js";import{ae as p}from"./index-oCq4DVA_.js";import"./index-7xNF_gm9.js";import{B as i}from"./index-DnSsR-wm.js";import{B as s}from"./index-C7c7stHm.js";import{M as m}from"./index-CY-aFc8B.js";import"./TagDesign-Dou_yO3g.js";import"./index-CjmQ2z5u.js";import"./index-bI5-aUrJ.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";import"./Button-Df0TC0Md.js";import"./withWebComponent-DbOtF11K.js";import"./copy-08oD3P1Y.js";import{F as a}from"./CommandsAndQueries-BHuf3U1K.js";import"./products-B8km3JGR.js";import"./WrappingType-CW8URInd.js";import"./Title-HEcUckFf.js";import"./iframe-C-WG3Fxu.js";import"../sb-preview/runtime.js";import"./client-CY4f97Aa.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./Bar-CHDDtIh1.js";import"./slot-Df15G--e.js";import"./ResizeHandler-y4ADtKuu.js";import"./parameters-bundle.css-BzaqQttB.js";import"./event-strict-C2lE4gn2.js";import"./i18n-BLQCbquq.js";import"./Icon-DiKvMA1d.js";import"./useIsomorphicLayoutEffect-U1V4gMqc.js";import"./Keys-DundVx7l.js";import"./decline-DrrSJfqv.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-CbqKdr-p.js";import"./information-DA6q7hAT.js";import"./sys-enter-2-DZyqnfP0.js";import"./sys-enter-2-BQuGujks.js";import"./i18n-defaults-Do22Zz-4.js";import"./AccessibilityTextsHelper-DhVMExKx.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-CxBV-rFR.js";import"./toLowercaseEnumValue-BQhMonSq.js";import"./utils-5ouIlTbN.js";import"./Popover-BEou1Y9a.js";import"./PopupsCommon.css-IJUzQyRd.js";import"./FocusableElements-DKyPTCYZ.js";import"./isElementHidden-Bpu2V8BK.js";import"./isElementClickable-C7H9UXMP.js";import"./getActiveElement-BL9Yqj8a.js";import"./MediaRange-CQ-a3KRn.js";import"./getEffectiveScrollbarStyle-DY0HYxPj.js";import"./index-BTIftX-2.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CGem_MOm.js";import"./index-DnJL0qev.js";import"./Label-qWriTtuJ.js";import"./index-BibcJJNq.js";import"./Link-D-wjqtz_.js";import"./index-uo5_YZoe.js";import"./index-C-cAGxuE.js";import"./Text-C2JOarjX.js";import"./addCustomCSSWithScoping-DOW-YdFK.js";import"./index-C-b0WtXR.js";import"./BusyIndicator-D8_NMEhC.js";import"./index-DFo5s-d0.js";import"./index-tKYk34_N.js";import"./AvatarSize-BceVhWoP.js";import"./employee-bNtHwQyf.js";import"./index-DmqQyrGp.js";import"./I18nStore-CG8U7JCg.js";const c=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(s,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(c,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(s,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Handling Slots"}),`
`,t.jsx(o.h1,{id:"adding-custom-react-components-to-slots",children:"Adding custom React components to slots"}),`
`,t.jsx(m,{hideCloseButton:!0,children:"Using a custom React component still requires the expected web component(s) to be rendered."}),`
`,t.jsxs(o.p,{children:["With our wrapper we provide an easy way to consume the ",t.jsx(o.code,{children:"slots"})," of the UI5 Web Components by attaching them to a ",t.jsx(o.code,{children:"prop"}),`.
In most cases you don't have to take anything into account, and the props can be used in a typical React way. However, there is an exception with custom components:`]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const BarStart = () => {
  return <div>Start</div>;
};
const BarEnd = () => {
  return <Button>Close</Button>;
};
export const BarComponent = () => {
  return (
    <Bar startContent={<BarStart />} endContent={<BarEnd />}>
      <div>I'm not a custom component</div>
    </Bar>
  );
};
`})}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(l,{}),`
`,t.jsxs(o.p,{children:[`As you can see, both custom components are not displayed in the right place.
Our wrapper does add the `,t.jsx(o.code,{children:"slot"})," prop to the custom component, but the most outer HTML-Element/component (e.g. ",t.jsx(o.code,{children:"<div>Start</div>"}),") does not accept it and therefore cannot use it."]}),`
`,t.jsxs(o.p,{children:["To fix this the ",t.jsx(o.code,{children:"slot"})," prop must also be passed to the outer element of the component:"]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const BarStart = (props) => {
  return <div slot={props.slot}>Start</div>;
};
const BarEnd = (props) => {
  return <Button slot={props.slot}>Close</Button>;
};
export const BarComponent = () => {
  return (
    <Bar startContent={<BarStart />} endContent={<BarEnd />}>
      <div>I'm not a custom component</div>
    </Bar>
  );
};
`})}),`
`,t.jsxs(o.p,{children:["Now the ",t.jsx(o.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(x,{}),`
`,t.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function At(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{At as default};
