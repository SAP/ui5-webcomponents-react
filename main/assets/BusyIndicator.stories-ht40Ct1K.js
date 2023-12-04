import{M as y,C as s,f as d,b as x}from"./chunk-HLWAVYOI-iADFgVrK.js";import{B as r}from"./index--g4Vwoqs.js";import{B as c}from"./BusyIndicator-NyevkSlP.js";import{S as l}from"./index-2nogTquR.js";import{T as j}from"./index-CrFnN6zV.js";import{b}from"./DomRefTable.module-AjWW9FBo.js";import{D as g}from"./DocsHeader-gqVA7hBL.js";import{F as f}from"./Footer-ip-Gk5OI.js";import{j as t}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{u}from"./index-RwE9nQVW.js";import"./iframe-7ikZeVBB.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./withWebComponent-l-jCeTa1.js";import"./utils-NoXYr8Q_.js";import"./VersionInfo-hBCHoyLi.js";import"./CustomElementsScopeUtils-5j4ES8UU.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./UI5Element-Y0uzLFOr.js";import"./i18nBundle-Crssojm_.js";import"./Icons-WRZ8WMWs.js";import"./Integer-kog98579.js";import"./Label-KPXg4zHG.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-Xpt9ffmz.js";import"./class-map-kmjzTHDs.js";import"./Select-zpkYYY-S.js";import"./Icon-bdsWWJur.js";import"./slot-HSrR9XJ-.js";import"./Popover-4c8T_r5P.js";import"./PopupUtils-7oRQuqE1.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-rFaoTaej.js";import"./FocusableElements-SaTJsZH1.js";import"./isElementHidden-d3-Fo4V6.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./decline-nB1v5zp8.js";import"./i18n-defaults-CPLPRuO1.js";import"./ResizeHandler-YlQCt_sN.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-IagzN5gT.js";import"./BrowserScrollbar.css-aoBbOOT0.js";import"./InvisibleMessage-yI1s4DPy.js";import"./ValueState-zUcANXoY.js";import"./slim-arrow-down-kCxSOfJs.js";import"./information-7q7IEdiC.js";import"./alert-hH0G14f_.js";import"./ListItemBase-1oP3quAZ.js";import"./ItemNavigation-KSoe0GH9.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./ResponsivePopover-xsao_97F.js";import"./Dialog-LW0FgXVi.js";import"./Button-udd0QuU3.js";import"./MarkedEvents-aYv14vsS.js";import"./Title-QMeEqdxD.js";import"./StandardListItem-_FwtV3qH.js";import"./ListItem-3TA4XaMY.js";import"./RadioButton-oXXhC_M8.js";import"./CheckBox-6Jr3q4fw.js";import"./accept-QwIZktij.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-SUiVGFkg.js";import"./Avatar-PRs4M-6Z.js";import"./employee-fYGGLuhG.js";import"./ResponsivePopoverCommon.css-qnvKwXX1.js";import"./ValueStateMessage.css-AHMe5yzO.js";import"./ValueState-I_-hGNIb.js";import"./clsx-c3LcQGjR.js";import"./react-jss.esm-tmBtHfec.js";import"./i18n-defaults-b_JjHWlv.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-rQ8Iu6mO.js";import"./addCustomCSSWithScoping-_6wxL5DG.js";import"./index-57hqUjdW.js";import"./index-lFsFjy7D.js";import"./index-iuqez5uB.js";import"./index-F3cd6aGy.js";import"./Link-iRvTdZPp.js";import"./index-5ETO3hDj.js";import"./index-ZcOIUVJX.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./TableOfContent-ZDaZt6vB.js";import"./index-v3T7Zjj9.js";import"./index-EEQdfMon.js";import"./index-X4i2aBF7.js";const v=`## Usage

For the \`BusyIndicator\` you can define the size, the text and whether it is shown or hidden. In order to hide it, use the "active" property.

In order to show busy state over an HTML element, simply nest the HTML element in a \`BusyIndicator\` instance.  
**Note:** Since \`BusyIndicator\` has \`display: inline-block;\` by default and no width of its own, whenever you need to wrap a block-level element, you should set \`display: block\` to the busy indicator as well.

### When to use:

- The user needs to be able to cancel the operation.
- Only part of the application or a particular component is affected.

### When not to use:

- The operation takes less than one second.
- You need to block the screen and prevent the user from starting another activity.
- Do not show multiple busy indicators at once.
`;function S(e={}){const{wrapper:m}=Object.assign({},u(),e.components);return m?t.jsx(m,{...e,children:t.jsx(p,{})}):p();function p(){const o=Object.assign({h2:"h2",h1:"h1",p:"p"},u(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(y,{title:"User Feedback / BusyIndicator",component:r,argTypes:{children:{control:{disable:!0}}},args:{size:c.Medium,delay:1e3,active:!0}}),`
`,t.jsx(g,{since:"0.4.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{children:t.jsx(d,{name:"Default",children:n=>t.jsx(r,{...n})})}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(b,{story:"Default"}),`
`,t.jsx(x,{children:v}),`
`,t.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"busyindicator-with-children",children:"BusyIndicator with children"}),`
`,t.jsx(s,{children:t.jsx(d,{name:"With children",args:{active:!0},children:n=>t.jsx(r,{...n,children:t.jsx(l,{})})})}),`
`,t.jsx(s,{mdxSource:'<BusyIndicator active><Text><p>{"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\\ndolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita\\nkasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\\nsadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\\nvoluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata\\nsanctus est Lorem ipsum dolor sit amet."}</p></Text></BusyIndicator>',children:t.jsx(r,{active:!0,children:t.jsx(j,{children:t.jsx(o.p,{children:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
sanctus est Lorem ipsum dolor sit amet.`})})})}),`
`,t.jsx(f,{})]})}}const h=e=>t.jsx(r,{...e});h.storyName="Default";h.parameters={storySource:{source:`args => {
  return <BusyIndicator {...args} />;
}`}};const a=e=>t.jsx(r,{...e,children:t.jsx(l,{})});a.storyName="With children";a.args={active:!0};a.parameters={storySource:{source:`args => {
  return <BusyIndicator {...args}>
          <Select />
        </BusyIndicator>;
}`}};const i={title:"User Feedback / BusyIndicator",component:r,args:{size:c.Medium,delay:1e3,active:!0},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withChildren"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:S};const ce=["defaultStory","withChildren"];export{ce as __namedExportsOrder,i as default,h as defaultStory,a as withChildren};
