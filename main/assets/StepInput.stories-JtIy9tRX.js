import{M as d,C as c,e as l,b as h}from"./chunk-HLWAVYOI-U_dfTQDE.js";import{S as r}from"./index-w8AlvPgt.js";import{V as a}from"./ValueState-I_-hGNIb.js";import{A as x}from"./DomRefTable.module-4Rg-XpGT.js";import{D as f}from"./DocsHeader-8yu9Zzwb.js";import{F as j}from"./Footer-TcoeSlCc.js";import{j as t}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{u as m}from"./index-RwE9nQVW.js";import"./iframe-geWbhrES.js";import"../sb-preview/runtime.js";import"./index-GL4gBoyB.js";import"./index-QYh6idnL.js";import"./mapValues-HzTlT2lF.js";import"./_baseForOwn-UZJwRxDU.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./UI5Element-OBgzz0fv.js";import"./i18nBundle-Crssojm_.js";import"./VersionInfo-hBCHoyLi.js";import"./CustomElementsScopeUtils-kYmWas10.js";import"./withWebComponent-6ZcDnwha.js";import"./utils-5CTKRvkw.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-2m0rU9av.js";import"./Icons-zRUxeAje.js";import"./ValueState-zUcANXoY.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./Float-0fEWDOdp.js";import"./Integer-kog98579.js";import"./i18n-defaults-RBzcmDt8.js";import"./less-Br7ZQf5O.js";import"./add-JVetM4-4.js";import"./i18n-defaults-n2A5pq_J.js";import"./Input-0gTIU_XC.js";import"./ResizeHandler-jV9qqcaG.js";import"./getActiveElement-IIKAy3xo.js";import"./decline-P9scilyE.js";import"./Suggestions.css-yUfmf6_5.js";import"./information-eS-oBj3B.js";import"./alert-SMfrQE5J.js";import"./Popover-SxOPU5wi.js";import"./PopupUtils-7oRQuqE1.js";import"./PopupsCommon.css-dlrgNDf3.js";import"./FocusableElements-vmTxt0Po.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-oXcF1--7.js";import"./class-map-dxoND1Lf.js";import"./BrowserScrollbar.css-gfEIeu7r.js";import"./ResponsivePopoverCommon.css-6WNiAmDC.js";import"./ValueStateMessage.css-eVPOpCbJ.js";import"./react-jss.esm-tmBtHfec.js";import"./index-iakX8MtZ.js";import"./Button-UDaVhcBU.js";import"./MarkedEvents-aYv14vsS.js";import"./index-ETl9kWYS.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-PmTGElot.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-cCePQQVr.js";import"./index-lk8hPXwv.js";import"./index-vNLy12RC.js";import"./Avatar-LWFiEvrj.js";import"./employee-DNZboz-g.js";import"./index-j-aTtmG5.js";import"./index-nk0shU_k.js";import"./Link-Gs09ax_S.js";import"./WrappingType-avPrqc94.js";import"./index-q8oiNN3v.js";import"./index-z1nBCz-L.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-IMpNFjIe.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./TableOfContent-JJN2Zw3u.js";import"./index-RUThaOqm.js";import"./Label-bo0gz_aS.js";import"./index-EJa_-ZXW.js";import"./index-MLMRuhzi.js";const g=`## Usage

The default step is 1 but the app developer can set a different one. App developers can set a maximum and minimum value for the \`StepInput\`. The increase/decrease button and the up/down keyboard navigation become disabled when the value reaches the max/min or a new value is entered from the input which is greater/less than the max/min.

### When to use:

- To adjust amounts, quantities, or other values quickly.
- To adjust values for a specific step.

### When not to use:

- To enter a static number (for example, postal code, phone number, or ID). In this case, use the regular \`Input\` instead.
- To display a value that rarely needs to be adjusted and does not pertain to a particular step. In this case, use the regular \`Input\` instead.
- To enter dates and times. In this case, use date/time related components instead.
`;function S(e={}){const{wrapper:i}=Object.assign({},m(),e.components);return i?t.jsx(i,{...e,children:t.jsx(p,{})}):p();function p(){const n=Object.assign({h2:"h2"},m(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Inputs / StepInput",component:r,argTypes:{valueStateMessage:{control:{disable:!0}}},args:{valueState:a.None}}),`
`,t.jsx(f,{since:"0.15.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(n.h2,{id:"example",children:"Example"}),`
`,t.jsx(c,{children:t.jsx(l,{name:"Default",children:u=>t.jsx(r,{...u})})}),`
`,t.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(x,{story:"Default"}),`
`,t.jsx(h,{children:g}),`
`,t.jsx(j,{})]})}}const s=e=>t.jsx(r,{...e});s.storyName="Default";s.parameters={storySource:{source:`args => {
  return <StepInput {...args} />;
}`}};const o={title:"Inputs / StepInput",component:r,args:{valueState:a.None},argTypes:{valueStateMessage:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:S};const Jt=["defaultStory"];export{Jt as __namedExportsOrder,o as default,s as defaultStory};
//# sourceMappingURL=StepInput.stories-JtIy9tRX.js.map
