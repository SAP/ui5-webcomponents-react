import{M as d,C as c,f as l,b as h}from"./chunk-HLWAVYOI-_9n66bf6.js";import{S as r}from"./index-XXDPl61M.js";import{V as a}from"./ValueState-I_-hGNIb.js";import{b as x}from"./DomRefTable.module-ynb6hwXd.js";import{D as f}from"./DocsHeader-FPlS5NvR.js";import{F as j}from"./Footer-v2scdNrl.js";import{j as t}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{u as n}from"./index-RwE9nQVW.js";import"./iframe-L6Utug_T.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./UI5Element-4kitL615.js";import"./i18nBundle-h5yKZf-0.js";import"./VersionInfo-yX_RFFR1.js";import"./CustomElementsScopeUtils-icazltFf.js";import"./withWebComponent-y_2h_qsG.js";import"./utils-jDGQm03y.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-ic8wGgAs.js";import"./Icons-cDXElGrC.js";import"./ValueState-zUcANXoY.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./Float-0fEWDOdp.js";import"./Integer-kog98579.js";import"./i18n-defaults-zEJ36VRV.js";import"./less-1XbP0FTk.js";import"./add-fqJ9JQl6.js";import"./i18n-defaults-CPLPRuO1.js";import"./Input-L2JYwab7.js";import"./ResizeHandler-_S6lmbp5.js";import"./getActiveElement-IIKAy3xo.js";import"./decline-tlNcqIac.js";import"./Suggestions.css-uaF39uGK.js";import"./information-txDdHyyj.js";import"./alert-sbIfV1of.js";import"./Popover-jBPmsweJ.js";import"./PopupUtils-9DzRw33t.js";import"./PopupsCommon.css-Honr3Kcv.js";import"./FocusableElements-eRJsgpvJ.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-cRo_ADDP.js";import"./class-map-aNJl42Aw.js";import"./BrowserScrollbar.css-IWLYYIFQ.js";import"./ResponsivePopoverCommon.css-A5n-yhJ1.js";import"./ValueStateMessage.css-_uSbOmUY.js";import"./react-jss.esm-tmBtHfec.js";import"./index-CGxUGaDU.js";import"./Button-dXtUjl7w.js";import"./MarkedEvents-aYv14vsS.js";import"./index-IPJJPG41.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-EHbh3l3V.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-DWXxr99t.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-kI6DTjO7.js";import"./index-JdcpimEN.js";import"./index-sDVpnFiV.js";import"./Avatar-DexMZin0.js";import"./employee-jQid-Nvn.js";import"./index-SVYUcyQr.js";import"./index-RDIZrQgX.js";import"./Link-yiZ7VLOd.js";import"./WrappingType-avPrqc94.js";import"./index-2x067cu6.js";import"./TableOfContent-O1JTp2D_.js";import"./index-_ZapS8ms.js";import"./Label-avDcfEez.js";import"./index-S2gYgxwM.js";import"./index-oIVlQnY8.js";const g=`## Usage

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
