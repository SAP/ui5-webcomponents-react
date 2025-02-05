import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as e}from"./index-ChplMHeC.js";import"./DocsRenderer-CFRXHY34-CnJfJsUV.js";import{M as p}from"./index-B-5Yj3Zs.js";import"./index-hrp50IaA.js";import{B as i}from"./index-C4RoqVH2.js";import{B as s}from"./index-D7PKo4Nn.js";import{M as m}from"./index-DLPFLlG_.js";import"./TagDesign-Dou_yO3g.js";import"./index-D23YZj_x.js";import"./index-DJ2M8xrO.js";import"./Button-BxO28PWq.js";import"./withWebComponent-CkJkBj4X.js";import"./copy-VunZ5yu1.js";import{F as c}from"./CommandsAndQueries-BeO2nfZ6.js";import"./WrappingType-CW8URInd.js";import"./Title-DC3LwAUi.js";import"./iframe-TAURSOwn.js";import"./client-lwzJIAjg.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./Bar-DThQu_GI.js";import"./slot-_4yKMUwC.js";import"./ResizeHandler-tQZDysQP.js";import"./parameters-bundle.css-BQD_Xb6z.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Icon-BnglGdU1.js";import"./useIsomorphicLayoutEffect-ycvDkpIR.js";import"./Keys-Can65e7H.js";import"./decline-CGhQ9j18.js";import"./i18n-defaults-CifGXSvE.js";import"./information-KDvoX9uY.js";import"./information-C8_9afp4.js";import"./sys-enter-2-CsrJiGdz.js";import"./sys-enter-2-Ci_i_5eG.js";import"./i18n-defaults-CjsTKlnu.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BESgvrT7.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./utils-Cc7kMCdT.js";import"./Popover-C6ZUNzDq.js";import"./PopupsCommon.css-rRFtJ1Vd.js";import"./FocusableElements-C53XHRKH.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-Zv7eDdGR.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-hr5H-IMi.js";import"./index-DkYwStNe.js";import"./Label-CcC1A6T7.js";import"./index-CP6VInro.js";import"./Link-Bcg9H63G.js";import"./index-CL5etcr3.js";import"./index-BMvJLi4H.js";import"./Text-D4h1PrIo.js";import"./addCustomCSSWithScoping-DGzs2l-b.js";import"./index-CpccB1hQ.js";import"./index-CG_Gq9FR.js";import"./BusyIndicator-2oz_Gfhw.js";import"./index-Bap_Ptt8.js";import"./index-CA4K88X9.js";import"./AvatarSize-BceVhWoP.js";import"./employee-C3v0q24u.js";import"./index-Bb8E3hqz.js";import"./I18nStore-B-mmBzjK.js";const a=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(s,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(s,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Handling Slots"}),`
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
`,t.jsx(c,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Ht(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Ht as default};
