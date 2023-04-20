import{M as y,C as a,f as d,a as g}from"./chunk-PCJTTTQV-807306ae.js";import{B as r}from"./index-719a016e.js";import{a as c}from"./BusyIndicator-c375cd19.js";import{S as l}from"./index-7e525786.js";import{T as b}from"./index-479d8097.js";import{d as f}from"./DomRefTable.module-33932dca.js";import{D as v}from"./DocsHeader-98dc7ef6.js";import{F as S}from"./Footer-8c79a938.js";import{j as t,a as k,F as w}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u}from"./index-4fb8b842.js";import"./iframe-492085dc.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./UI5Element-e8adceda.js";import"./Icons-5b18f7d2.js";import"./Integer-f7f172c9.js";import"./Label-528b8168.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-6d48ebd3.js";import"./i18n-defaults-254d6b69.js";import"./Icon-27a81412.js";import"./slot-76e48863.js";import"./InvisibleMessage-04f92c3f.js";import"./AriaLabelHelper-43a261ec.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-09ec0732.js";import"./information-2c502181.js";import"./i18n-defaults-80781f7e.js";import"./decline-7cb41e3a.js";import"./ListItemBase-780d7053.js";import"./ResizeHandler-9d370fcd.js";import"./ItemNavigation-01761450.js";import"./getActiveElement-bcae01ed.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./debounce-9c2fb7dd.js";import"./style-map-51d6dd91.js";import"./ResponsivePopover-152ab708.js";import"./PopupUtils-6ec841a6.js";import"./Popover-824d4d7c.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./MediaRange-25b98f31.js";import"./Dialog-610dd06c.js";import"./Button-fa05cadd.js";import"./MarkedEvents-b83081e9.js";import"./Title-0440ec3f.js";import"./StandardListItem-38cf6758.js";import"./ListItem-843af2c9.js";import"./RadioButton-412fbbc0.js";import"./CheckBox-f0072def.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./Avatar-0d8d2b25.js";import"./employee-0153a597.js";import"./ResponsivePopoverCommon.css-0466170a.js";import"./ValueStateMessage.css-7363aec7.js";import"./ValueState-ab6838cc.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-2e28eff7.js";import"./ThemingParameters-f4b4144e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-fa6aa1e2.js";import"./index-44cc9c22.js";import"./Import-014b4437.js";import"./TableOfContent-db896e85.js";import"./index-90388e72.js";import"./Link-3b8926df.js";import"./index-04faef4a.js";import"./index-787dabae.js";const x=`## Usage

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
//# sourceMappingURL=BusyIndicator.stories-b36adccc.js.map
