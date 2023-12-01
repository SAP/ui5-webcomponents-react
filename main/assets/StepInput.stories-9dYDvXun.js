import{M as d,C as c,e as l,b as h}from"./chunk-HLWAVYOI-AABJgk6B.js";import{S as r}from"./index-d1iuCuNC.js";import{V as a}from"./ValueState-I_-hGNIb.js";import{A as x}from"./DomRefTable.module-y7-HkbCy.js";import{D as f}from"./DocsHeader-EPVNMGxw.js";import{F as j}from"./Footer-ZWB7q-DY.js";import{j as t}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{u as m}from"./index-RwE9nQVW.js";import"./iframe-v8ywtMLh.js";import"../sb-preview/runtime.js";import"./index-GL4gBoyB.js";import"./index-QYh6idnL.js";import"./mapValues-HzTlT2lF.js";import"./_baseForOwn-UZJwRxDU.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./UI5Element-Y0uzLFOr.js";import"./i18nBundle-Crssojm_.js";import"./VersionInfo-hBCHoyLi.js";import"./CustomElementsScopeUtils-5j4ES8UU.js";import"./withWebComponent-l-jCeTa1.js";import"./utils-NoXYr8Q_.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-bdsWWJur.js";import"./Icons-WRZ8WMWs.js";import"./ValueState-zUcANXoY.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./Float-0fEWDOdp.js";import"./Integer-kog98579.js";import"./i18n-defaults-RBzcmDt8.js";import"./less-SxpWieiK.js";import"./add-BP-PAngp.js";import"./i18n-defaults-n2A5pq_J.js";import"./Input-w0RPGTV7.js";import"./ResizeHandler-YlQCt_sN.js";import"./getActiveElement-IIKAy3xo.js";import"./decline-tcMkvtbY.js";import"./Suggestions.css-gWk1MJ99.js";import"./information-bLrgXyhK.js";import"./alert-hH0G14f_.js";import"./Popover-F3UgQy3P.js";import"./PopupUtils-7oRQuqE1.js";import"./PopupsCommon.css-QWf1zPQp.js";import"./FocusableElements-SaTJsZH1.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-IagzN5gT.js";import"./class-map-kmjzTHDs.js";import"./BrowserScrollbar.css-aoBbOOT0.js";import"./ResponsivePopoverCommon.css-qnvKwXX1.js";import"./ValueStateMessage.css-AHMe5yzO.js";import"./react-jss.esm-tmBtHfec.js";import"./index-VJljkrsP.js";import"./Button-2q6zbrjb.js";import"./MarkedEvents-aYv14vsS.js";import"./index-A5agBEX2.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-cIbBWf4j.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-_6wxL5DG.js";import"./index-cWZCyHzc.js";import"./index-Z4rI6ZDf.js";import"./Avatar-iPKVYLtK.js";import"./employee-fYGGLuhG.js";import"./index-JoO-oAmy.js";import"./index-ZgK1wdf3.js";import"./Link-tRmLKUhK.js";import"./WrappingType-avPrqc94.js";import"./index-q8oiNN3v.js";import"./index-ZcOIUVJX.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./TableOfContent-C5vpZYpS.js";import"./index-jepwTIrp.js";import"./Label-ZVCbnRu4.js";import"./index-nIpdKB01.js";import"./index-91hO-5DI.js";const g=`## Usage

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
//# sourceMappingURL=StepInput.stories-9dYDvXun.js.map
