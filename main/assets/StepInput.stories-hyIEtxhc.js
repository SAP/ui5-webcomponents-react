import{M as d,C as c,f as l,b as h}from"./chunk-HLWAVYOI-E-hYVLTa.js";import{S as r}from"./index-kEeKa11F.js";import{V as a}from"./ValueState-I_-hGNIb.js";import{b as x}from"./DomRefTable.module-y-qtgfhA.js";import{D as f}from"./DocsHeader-kz9fGWGq.js";import{F as j}from"./Footer-mrYFs9PK.js";import{j as t}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{u as n}from"./index-RwE9nQVW.js";import"./iframe-t1eVxq3x.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./UI5Element-Jt3C0_FN.js";import"./i18nBundle-ZoJ37UJR.js";import"./VersionInfo-LCCO4Ig5.js";import"./CustomElementsScopeUtils-M7hMRmEH.js";import"./withWebComponent-I1wSIv4y.js";import"./utils-KU8RGjGn.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-G6aW2FRW.js";import"./Icons-Nr5kgAbF.js";import"./ValueState-zUcANXoY.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./Float-0fEWDOdp.js";import"./Integer-kog98579.js";import"./i18n-defaults-zEJ36VRV.js";import"./less-QDIj1n9L.js";import"./add-ekPsCsFz.js";import"./i18n-defaults-CPLPRuO1.js";import"./Input-24IzCGJD.js";import"./ResizeHandler-mTFvwsyT.js";import"./getActiveElement-IIKAy3xo.js";import"./decline-4Ez_2Sev.js";import"./Suggestions.css-EG0pM5Z2.js";import"./information-bkjyqQzA.js";import"./alert-7Etxrsap.js";import"./Popover-5ANP4Jn7.js";import"./PopupUtils-QCyiTOMI.js";import"./PopupsCommon.css-NvRre6vc.js";import"./FocusableElements-sOHKyey_.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-xQ1SPtMO.js";import"./class-map-CHDPODen.js";import"./BrowserScrollbar.css-R_PDLCAQ.js";import"./ResponsivePopoverCommon.css-wcLb9RY0.js";import"./ValueStateMessage.css-T_IO2uU8.js";import"./react-jss.esm-tmBtHfec.js";import"./index-r_VsGxII.js";import"./Button-CV8gKi73.js";import"./MarkedEvents-aYv14vsS.js";import"./index-2_yHJzy3.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-8YolVglE.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-B37rLD-H.js";import"./index-dBVYy2Lw.js";import"./index-ymcZtJR2.js";import"./Avatar-VKhV6EwI.js";import"./employee-9rldWxaE.js";import"./index-Whljgpch.js";import"./index-PuiUN97y.js";import"./Link-ipgrhFOm.js";import"./WrappingType-avPrqc94.js";import"./index-XbOz6Cvl.js";import"./index-bWwzC2qz.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./TableOfContent-AMxyMkMf.js";import"./index-4ZV9NEq2.js";import"./Label-Xo_6xXB6.js";import"./index-7qCLIi66.js";import"./index-JZmr7vOT.js";const g=`## Usage

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
