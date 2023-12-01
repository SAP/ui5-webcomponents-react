import{M as y,C as s,e as d,b as x}from"./chunk-HLWAVYOI-jds-GzOL.js";import{B as r}from"./index-GCGfaRqY.js";import{B as c}from"./BusyIndicator-qZ0KGBIz.js";import{S as l}from"./index-rrl7y-o_.js";import{T as j}from"./index-A5agBEX2.js";import{A as g}from"./DomRefTable.module-okStVzjO.js";import{D as b}from"./DocsHeader-njYznugv.js";import{F as f}from"./Footer-Q2UGtdqg.js";import{j as t}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{u}from"./index-RwE9nQVW.js";import"./iframe-lvwxc_BA.js";import"../sb-preview/runtime.js";import"./index-GL4gBoyB.js";import"./index-QYh6idnL.js";import"./mapValues-HzTlT2lF.js";import"./_baseForOwn-UZJwRxDU.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./withWebComponent-l-jCeTa1.js";import"./utils-NoXYr8Q_.js";import"./VersionInfo-hBCHoyLi.js";import"./CustomElementsScopeUtils-5j4ES8UU.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./UI5Element-Y0uzLFOr.js";import"./i18nBundle-Crssojm_.js";import"./Icons-WRZ8WMWs.js";import"./Integer-kog98579.js";import"./Label-ZVCbnRu4.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-RBzcmDt8.js";import"./class-map-kmjzTHDs.js";import"./Select-gPlLiyBN.js";import"./Icon-bdsWWJur.js";import"./slot-HSrR9XJ-.js";import"./Popover-F3UgQy3P.js";import"./PopupUtils-7oRQuqE1.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-QWf1zPQp.js";import"./FocusableElements-SaTJsZH1.js";import"./isElementHidden-d3-Fo4V6.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./decline-tcMkvtbY.js";import"./i18n-defaults-n2A5pq_J.js";import"./ResizeHandler-YlQCt_sN.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-IagzN5gT.js";import"./BrowserScrollbar.css-aoBbOOT0.js";import"./InvisibleMessage-yI1s4DPy.js";import"./ValueState-zUcANXoY.js";import"./slim-arrow-down-kCxSOfJs.js";import"./information-bLrgXyhK.js";import"./alert-hH0G14f_.js";import"./ListItemBase-bpRWPkiV.js";import"./ItemNavigation-KSoe0GH9.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./ResponsivePopover-7YN-L6kM.js";import"./Dialog-m8Vv8OUX.js";import"./Button-2q6zbrjb.js";import"./MarkedEvents-aYv14vsS.js";import"./Title-QMeEqdxD.js";import"./StandardListItem-yowcTzq2.js";import"./ListItem-jYoROocM.js";import"./RadioButton-UJTh3ZVD.js";import"./CheckBox-0JSYmzBX.js";import"./accept-QwIZktij.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-SUiVGFkg.js";import"./Avatar-iPKVYLtK.js";import"./employee-fYGGLuhG.js";import"./ResponsivePopoverCommon.css-qnvKwXX1.js";import"./ValueStateMessage.css-AHMe5yzO.js";import"./ValueState-I_-hGNIb.js";import"./clsx-c3LcQGjR.js";import"./react-jss.esm-tmBtHfec.js";import"./i18n-defaults-cIbBWf4j.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-4QBlUkYE.js";import"./addCustomCSSWithScoping-_6wxL5DG.js";import"./index-8oc7nghY.js";import"./index-wWidHwmS.js";import"./index-intn_6qV.js";import"./index-JMng31W5.js";import"./Link-tRmLKUhK.js";import"./index-q8oiNN3v.js";import"./index-ZcOIUVJX.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./TableOfContent-kF7bR0zz.js";import"./index-CCZBiJx1.js";import"./index-zQT3eZFN.js";import"./index-ilQ8HJne.js";const v=`## Usage

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
`,t.jsx(b,{since:"0.4.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{children:t.jsx(d,{name:"Default",children:n=>t.jsx(r,{...n})})}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(g,{story:"Default"}),`
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
}`}};const i={title:"User Feedback / BusyIndicator",component:r,args:{size:c.Medium,delay:1e3,active:!0},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withChildren"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:S};const ue=["defaultStory","withChildren"];export{ue as __namedExportsOrder,i as default,h as defaultStory,a as withChildren};
//# sourceMappingURL=BusyIndicator.stories-m44uujiM.js.map
