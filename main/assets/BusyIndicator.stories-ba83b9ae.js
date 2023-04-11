import{M as y,C as a,f as d,a as g}from"./chunk-PCJTTTQV-3002b7b3.js";import{B as r}from"./index-cb456bb7.js";import{a as c}from"./BusyIndicator-57fa4b3b.js";import{S as l}from"./index-738151d3.js";import{T as b}from"./index-479d8097.js";import{d as f}from"./DomRefTable.module-a688802e.js";import{D as v}from"./DocsHeader-e2fb1e60.js";import{F as S}from"./Footer-bbb3ab73.js";import{j as t,a as k,F as w}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u}from"./index-4fb8b842.js";import"./iframe-afd46eb3.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./UI5Element-d1d93200.js";import"./Icons-efeb15d5.js";import"./Integer-f7f172c9.js";import"./Label-e3d88218.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-6d48ebd3.js";import"./i18n-defaults-254d6b69.js";import"./Icon-c8fd92f0.js";import"./slot-76e48863.js";import"./InvisibleMessage-369e8bd7.js";import"./AriaLabelHelper-43a261ec.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-d9839a36.js";import"./information-859245b4.js";import"./i18n-defaults-80781f7e.js";import"./decline-41212cdc.js";import"./ListItemBase-6757af89.js";import"./ResizeHandler-f4ca1209.js";import"./ItemNavigation-8971fb55.js";import"./getActiveElement-bcae01ed.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-ab5bee37.js";import"./debounce-9c2fb7dd.js";import"./style-map-51d6dd91.js";import"./ResponsivePopover-f45885b9.js";import"./PopupUtils-a92cb9f4.js";import"./Popover-4088d87a.js";import"./PopupsCommon.css-1644cafd.js";import"./FocusableElements-8859c874.js";import"./MediaRange-25b98f31.js";import"./Dialog-c83d8172.js";import"./Button-400e2491.js";import"./MarkedEvents-b83081e9.js";import"./Title-6041704e.js";import"./StandardListItem-3b715734.js";import"./ListItem-6188cfad.js";import"./RadioButton-23550da4.js";import"./CheckBox-2ada2fbd.js";import"./accept-ca825c33.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a1ee93cb.js";import"./Avatar-9bebadfe.js";import"./employee-e0b9815e.js";import"./ResponsivePopoverCommon.css-82b1f3cc.js";import"./ValueStateMessage.css-194378a0.js";import"./ValueState-ab6838cc.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-2e28eff7.js";import"./ThemingParameters-f4b4144e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-c3bea6f8.js";import"./index-2bd17005.js";import"./Import-46cf4084.js";import"./TableOfContent-ebaff1fe.js";import"./index-ecec8d27.js";import"./Link-706be030.js";import"./index-d3ea1b31.js";import"./index-24fd78f1.js";const x=`## Usage

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
`;function I(e={}){const{wrapper:m}=Object.assign({},u(),e.components);return m?t(m,{...e,children:t(p,{})}):p();function p(){const o=Object.assign({h2:"h2",h1:"h1",p:"p"},u(),e.components);return k(w,{children:[t(y,{title:"User Feedback / BusyIndicator",component:r,argTypes:{children:{control:{disable:!0}}},args:{size:c.Medium,delay:1e3,active:!0}}),`
`,t(v,{since:"0.4.0"}),`
`,t("br",{}),`
`,t(o.h2,{id:"example",children:"Example"}),`
`,t(a,{children:t(d,{name:"Default",children:n=>t(r,{...n})})}),`
`,t(o.h2,{id:"properties",children:"Properties"}),`
`,t(f,{story:"Default"}),`
`,t(g,{children:x}),`
`,t(o.h1,{id:"more-examples",children:"More Examples"}),`
`,t("br",{}),`
`,t(o.h2,{id:"busyindicator-with-children",children:"BusyIndicator with children"}),`
`,t(a,{children:t(d,{name:"With children",args:{active:!0},children:n=>t(r,{...n,children:t(l,{})})})}),`
`,t(a,{mdxSource:'<BusyIndicator active><Text><p>{"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\\ndolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita\\nkasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\\nsadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\\nvoluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata\\nsanctus est Lorem ipsum dolor sit amet."}</p></Text></BusyIndicator>',children:t(r,{active:!0,children:t(b,{children:t(o.p,{children:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
sanctus est Lorem ipsum dolor sit amet.`})})})}),`
`,t(S,{})]})}}const h=e=>t(r,{...e});h.storyName="Default";h.parameters={storySource:{source:`args => {
  return <BusyIndicator {...args} />;
}`}};const s=e=>t(r,{...e,children:t(l,{})});s.storyName="With children";s.args={active:!0};s.parameters={storySource:{source:`args => {
  return <BusyIndicator {...args}>
          <Select />
        </BusyIndicator>;
}`}};const i={title:"User Feedback / BusyIndicator",component:r,args:{size:c.Medium,delay:1e3,active:!0},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withChildren"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:I};const ne=["defaultStory","withChildren"];export{ne as __namedExportsOrder,i as default,h as defaultStory,s as withChildren};
//# sourceMappingURL=BusyIndicator.stories-ba83b9ae.js.map
