import{M as y,C as s,e as d,b as x}from"./chunk-HLWAVYOI-HSzqdAt5.js";import{B as r}from"./index-uvxgktWg.js";import{B as c}from"./BusyIndicator-gSXNPx0K.js";import{S as l}from"./index-6BPVkQDA.js";import{T as j}from"./index-qkhvCaCQ.js";import{A as g}from"./DomRefTable.module-jfGnHvXO.js";import{D as b}from"./DocsHeader-VGodCP4n.js";import{F as f}from"./Footer-JKDoi-qe.js";import{j as t}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{u}from"./index-RwE9nQVW.js";import"./iframe-G8lfeiS_.js";import"../sb-preview/runtime.js";import"./index--F0XPsCm.js";import"./index-QYh6idnL.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./withWebComponent-2sjwM42G.js";import"./utils-QJOW-WwB.js";import"./VersionInfo-pP_ltRZs.js";import"./CustomElementsScopeUtils-EW5YHFd4.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./UI5Element-66_7Xn_3.js";import"./i18nBundle-Q0g0h3jg.js";import"./Icons-nm0Q71Sx.js";import"./Integer-kog98579.js";import"./Label-h0RP0plm.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-RBzcmDt8.js";import"./class-map--IQ_mtyb.js";import"./Select-B6PdELjh.js";import"./Icon-Pjew2RCR.js";import"./slot-HSrR9XJ-.js";import"./Popover-9STvCKGK.js";import"./PopupUtils-yApLm5YW.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-dDtjLgUi.js";import"./FocusableElements-yzAVBk6R.js";import"./isElementHidden-d3-Fo4V6.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./decline-qJ6wR11R.js";import"./i18n-defaults-n2A5pq_J.js";import"./ResizeHandler-hw9R1O21.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-Pb14hoiG.js";import"./BrowserScrollbar.css-F0Fjr-0B.js";import"./InvisibleMessage-crOnSuEV.js";import"./ValueState-zUcANXoY.js";import"./slim-arrow-down-0-b6XiA5.js";import"./information-ME8CmmmC.js";import"./alert-Ymv9FYbl.js";import"./ListItemBase-fdTzy_Aa.js";import"./ItemNavigation-mp_C8WK4.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./ResponsivePopover-nrtXbJy9.js";import"./Dialog-7t0KZPjl.js";import"./Button-mmkHl5a0.js";import"./MarkedEvents-aYv14vsS.js";import"./Title-kFJuFDOq.js";import"./StandardListItem-h7F8OyVI.js";import"./ListItem-NVO5T8ja.js";import"./RadioButton-A2EwJNLh.js";import"./CheckBox-aQkbgIUH.js";import"./accept-mkX15jfz.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-EDPK7lfa.js";import"./Avatar-AvAtElJx.js";import"./employee-AJKdaGgo.js";import"./ResponsivePopoverCommon.css-8D_HttHM.js";import"./ValueStateMessage.css-HnaKgAF6.js";import"./ValueState-I_-hGNIb.js";import"./clsx-2Jv0kmJG.js";import"./react-jss.esm-AmlvxLhk.js";import"./i18n-defaults-iuWYBGeC.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-S5YuBGaL.js";import"./addCustomCSSWithScoping-57oB5XHU.js";import"./index-4vNu-MrC.js";import"./index-iPNiOMNv.js";import"./index-1EWkVUW9.js";import"./index-Cs3jAn61.js";import"./Link-4yu6Lagp.js";import"./index-ZYxd7chN.js";import"./TableOfContent-tm4UXGZQ.js";import"./index-7TQNuSpN.js";import"./index-VNdXUfUp.js";import"./index-DT9_YYrE.js";const v=`## Usage

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
}`}};const i={title:"User Feedback / BusyIndicator",component:r,args:{size:c.Medium,delay:1e3,active:!0},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withChildren"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:S};const se=["defaultStory","withChildren"];export{se as __namedExportsOrder,i as default,h as defaultStory,a as withChildren};
//# sourceMappingURL=BusyIndicator.stories-ZZP9hAkk.js.map
