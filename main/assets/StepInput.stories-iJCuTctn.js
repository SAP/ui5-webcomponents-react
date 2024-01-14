import{M as d,C as c,f as l,b as h}from"./chunk-HLWAVYOI-MCQNUQmd.js";import{S as r}from"./index-t4EW-xHg.js";import{V as a}from"./ValueState-I_-hGNIb.js";import{b as x}from"./DomRefTable.module-PSjNMhMH.js";import{D as f}from"./DocsHeader-nNFVJN9L.js";import{F as j}from"./Footer-VEHpcmPw.js";import{j as t}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{u as n}from"./index-RwE9nQVW.js";import"./iframe-tde2EVJP.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./UI5Element-N46uHiF6.js";import"./i18nBundle-1uTNzT_G.js";import"./VersionInfo-doEI4kCH.js";import"./CustomElementsScopeUtils--FMJdKyV.js";import"./withWebComponent-m2csmhkT.js";import"./utils-7qe6Bov5.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-q2l1h21j.js";import"./Icons-JGtWxtgH.js";import"./ValueState-zUcANXoY.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./Float-0fEWDOdp.js";import"./Integer-kog98579.js";import"./i18n-defaults-Hnw7H5Tc.js";import"./less-v1O0OF-W.js";import"./add-9oMutkQ4.js";import"./i18n-defaults-CPLPRuO1.js";import"./Input-OkSwExZB.js";import"./ResizeHandler-pjwwRwdX.js";import"./getActiveElement-IIKAy3xo.js";import"./decline-tUGLActy.js";import"./Suggestions.css-uQ9_NsdF.js";import"./information-rXvvQTyd.js";import"./alert-n6PTDijY.js";import"./Popover-QuSZvfFm.js";import"./PopupUtils-K8GVBVSe.js";import"./PopupsCommon.css-T6pSPG1a.js";import"./FocusableElements-p1LB11Hl.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-2OzZTNdj.js";import"./class-map-lkLxloiQ.js";import"./BrowserScrollbar.css-WTCBaVgb.js";import"./ResponsivePopoverCommon.css-upzcAADh.js";import"./ValueStateMessage.css-ohPnUUCe.js";import"./react-jss.esm-tmBtHfec.js";import"./index-SMxEqHrW.js";import"./Button-5EpXIGtS.js";import"./MarkedEvents-aYv14vsS.js";import"./index-O1qeqEwP.js";import"./clsx-Zbgk8kpT.js";import"./i18n-defaults-PpubpVn0.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-UNdDePUO.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-SeojittA.js";import"./index-05T_lT8t.js";import"./index-_IH5dn7b.js";import"./Avatar-3tdvLPxl.js";import"./employee-1rhW5wth.js";import"./index-p4IwmQxv.js";import"./index-3dmqDf_s.js";import"./Link-GBCkwT5X.js";import"./WrappingType-avPrqc94.js";import"./index-W62_3BtY.js";import"./TableOfContent-C5PzJmz6.js";import"./index-Y5ya3XsY.js";import"./Label-lanRvJLA.js";import"./index-leAE3qzA.js";import"./index-v47exs0D.js";const g=`## Usage

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
