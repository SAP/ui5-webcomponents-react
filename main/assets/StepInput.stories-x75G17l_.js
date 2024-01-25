import{M as d,C as c,f as l,b as h}from"./chunk-HLWAVYOI-N2i_KDE5.js";import{S as r}from"./index-qn_u6j7j.js";import{V as a}from"./ValueState-I_-hGNIb.js";import{b as x}from"./DomRefTable.module-gdwOkt7r.js";import{D as f}from"./DocsHeader-K1oBacuK.js";import{F as j}from"./Footer-tYiCkylP.js";import{j as t}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{u as n}from"./index-RwE9nQVW.js";import"./iframe-ACaCm_Z0.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./UI5Element-kBA_KQxG.js";import"./i18nBundle-7ihWi2Lo.js";import"./VersionInfo-quO5DfnC.js";import"./CustomElementsScopeUtils-QKoQ990a.js";import"./withWebComponent-22JjwLkL.js";import"./utils-3rf7SAGj.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-r6t1Zphl.js";import"./Icons-jRef6OLh.js";import"./ValueState-zUcANXoY.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./Float-0fEWDOdp.js";import"./Integer-kog98579.js";import"./i18n-defaults-QBShB6vc.js";import"./less-cqbCFC3l.js";import"./add-VNrMzBh9.js";import"./i18n-defaults-CPLPRuO1.js";import"./Input-qnG8UDCs.js";import"./ResizeHandler-3FzJmCyz.js";import"./getActiveElement-IIKAy3xo.js";import"./decline-XpWJwTfv.js";import"./Suggestions.css-uuIiA8km.js";import"./information-U_TSW4LN.js";import"./alert-kkNs8dOr.js";import"./Popover-qTobexuh.js";import"./PopupUtils-FgdW7Gkh.js";import"./PopupsCommon.css-fa8QSlgN.js";import"./FocusableElements-jbTazhpM.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-duavIDje.js";import"./class-map-2qwEQoLI.js";import"./BrowserScrollbar.css-aT2mYiFz.js";import"./ResponsivePopoverCommon.css-h8Z4T2yV.js";import"./ValueStateMessage.css-fNiak5rA.js";import"./react-jss.esm-tmBtHfec.js";import"./index-cgN4LxGr.js";import"./Button-jlOsC8Op.js";import"./MarkedEvents-aYv14vsS.js";import"./index-9hLZiafD.js";import"./clsx-Zbgk8kpT.js";import"./i18n-defaults-gX8Lho5I.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-YJVSj-ci.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-Ha-6ONKz.js";import"./index-ng8PCN7N.js";import"./index-8I_g-aQR.js";import"./Avatar-kcq5ywk4.js";import"./employee-APVUdoZS.js";import"./index-cFi4ldgP.js";import"./index-7vdExtDt.js";import"./Link-xIUn2Lee.js";import"./WrappingType-avPrqc94.js";import"./index-f1R-0qJ_.js";import"./TableOfContent-NsYyuEB7.js";import"./index-gc-K8bnN.js";import"./Label-yPOoTXIn.js";import"./index-1dQbWacc.js";import"./index-79FjeM2A.js";const g=`## Usage

The default step is 1 but the app developer can set a different one. App developers can set a maximum and minimum value for the \`StepInput\`. The increase/decrease button and the up/down keyboard navigation become disabled when the value reaches the max/min or a new value is entered from the input which is greater/less than the max/min.

### When to use:

- To adjust amounts, quantities, or other values quickly.
- To adjust values for a specific step.

### When not to use:

- To enter a static number (for example, postal code, phone number, or ID). In this case, use the regular \`Input\` instead.
- To display a value that rarely needs to be adjusted and does not pertain to a particular step. In this case, use the regular \`Input\` instead.
- To enter dates and times. In this case, use date/time related components instead.
`;function S(e={}){const{wrapper:i}=Object.assign({},n(),e.components);return i?t.jsx(i,{...e,children:t.jsx(p,{})}):p();function p(){const m=Object.assign({h2:"h2"},n(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Inputs / StepInput",component:r,argTypes:{valueStateMessage:{control:{disable:!0}}},args:{valueState:a.None}}),`
`,t.jsx(f,{since:"0.15.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(m.h2,{id:"example",children:"Example"}),`
`,t.jsx(c,{children:t.jsx(l,{name:"Default",children:u=>t.jsx(r,{...u})})}),`
`,t.jsx(m.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(x,{story:"Default"}),`
`,t.jsx(h,{children:g}),`
`,t.jsx(j,{})]})}}const s=e=>t.jsx(r,{...e});s.storyName="Default";s.parameters={storySource:{source:`args => {
  return <StepInput {...args} />;
}`}};const o={title:"Inputs / StepInput",component:r,args:{valueState:a.None},argTypes:{valueStateMessage:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:S};const Kt=["defaultStory"];export{Kt as __namedExportsOrder,o as default,s as defaultStory};
