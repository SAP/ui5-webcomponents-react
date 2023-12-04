import{M as y,C as s,f as d,b as x}from"./chunk-HLWAVYOI-AVrFJhXr.js";import{B as r}from"./index-Wa2eWTuc.js";import{B as c}from"./BusyIndicator-i2jpCQEr.js";import{S as l}from"./index-jT4B2qzz.js";import{T as j}from"./index-2_yHJzy3.js";import{b}from"./DomRefTable.module-o6yuYo37.js";import{D as g}from"./DocsHeader-aK2bK92u.js";import{F as f}from"./Footer-XV-MtIQH.js";import{j as t}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{u}from"./index-RwE9nQVW.js";import"./iframe-ydSfD9o2.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./withWebComponent-I1wSIv4y.js";import"./utils-KU8RGjGn.js";import"./VersionInfo-LCCO4Ig5.js";import"./CustomElementsScopeUtils-M7hMRmEH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./UI5Element-Jt3C0_FN.js";import"./i18nBundle-ZoJ37UJR.js";import"./Icons-Nr5kgAbF.js";import"./Integer-kog98579.js";import"./Label-Xo_6xXB6.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-zEJ36VRV.js";import"./class-map-CHDPODen.js";import"./Select-DIczIZP4.js";import"./Icon-G6aW2FRW.js";import"./slot-HSrR9XJ-.js";import"./Popover-5ANP4Jn7.js";import"./PopupUtils-QCyiTOMI.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-NvRre6vc.js";import"./FocusableElements-sOHKyey_.js";import"./isElementHidden-d3-Fo4V6.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./decline-4Ez_2Sev.js";import"./i18n-defaults-CPLPRuO1.js";import"./ResizeHandler-mTFvwsyT.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-xQ1SPtMO.js";import"./BrowserScrollbar.css-R_PDLCAQ.js";import"./InvisibleMessage-M8lINMXv.js";import"./ValueState-zUcANXoY.js";import"./slim-arrow-down-kx4Pw-L8.js";import"./information-bkjyqQzA.js";import"./alert-7Etxrsap.js";import"./ListItemBase-HHKKMj74.js";import"./ItemNavigation--ejGb_nH.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./ResponsivePopover-2Y5m0xbo.js";import"./Dialog-ki1YSo8q.js";import"./Button-CV8gKi73.js";import"./MarkedEvents-aYv14vsS.js";import"./Title-xXK6MFOu.js";import"./StandardListItem-aBJ9MdQm.js";import"./ListItem-EtFo1sxA.js";import"./RadioButton-Tsz_-gI0.js";import"./CheckBox-B5lM5OVp.js";import"./accept-ldlQyaEx.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-0wqMoc5g.js";import"./Avatar-VKhV6EwI.js";import"./employee-9rldWxaE.js";import"./ResponsivePopoverCommon.css-wcLb9RY0.js";import"./ValueStateMessage.css-T_IO2uU8.js";import"./ValueState-I_-hGNIb.js";import"./clsx-c3LcQGjR.js";import"./react-jss.esm-tmBtHfec.js";import"./i18n-defaults-8YolVglE.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-uNOeFshT.js";import"./addCustomCSSWithScoping-B37rLD-H.js";import"./index-1VJEMsRn.js";import"./index-FZYEGHQY.js";import"./index-8Jns6cUb.js";import"./index-ZaqRa_8Z.js";import"./Link-ipgrhFOm.js";import"./index-5ETO3hDj.js";import"./index-bWwzC2qz.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./TableOfContent-uQHufoDq.js";import"./index-0qQmuEa2.js";import"./index-fIdbs8ag.js";import"./index-V77GTBmc.js";const v=`## Usage

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
