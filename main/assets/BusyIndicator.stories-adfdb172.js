import{M as y,C as s,e as d,b as x}from"./chunk-S4VUQJ4A-be781f32.js";import{B as r}from"./index-8d7fdcbb.js";import{B as c}from"./BusyIndicator-1653a4a5.js";import{S as l}from"./index-751937c6.js";import{T as j}from"./index-bb1f9706.js";import{A as g}from"./DomRefTable.module-61c43279.js";import{D as b}from"./DocsHeader-018f65f7.js";import{F as f}from"./Footer-37db4c79.js";import{j as t}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u}from"./index-59d6410c.js";import"./iframe-e947ae0a.js";import"../sb-preview/runtime.js";import"./index-d203965f.js";import"./index-b42968db.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./UI5Element-a4bd3d38.js";import"./Icons-74c917eb.js";import"./Integer-f7f172c9.js";import"./Label-34e3bd87.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-d675a36d.js";import"./class-map-0ab40ab9.js";import"./Icon-42236945.js";import"./slot-76e48863.js";import"./InvisibleMessage-2b547741.js";import"./AriaLabelHelper-43a261ec.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-9459236f.js";import"./information-dbbb1c9a.js";import"./i18n-defaults-2d2bf0b6.js";import"./Device-6afa24d0.js";import"./decline-3cb804de.js";import"./ListItemBase-e006c78e.js";import"./ResizeHandler-0af4416f.js";import"./ItemNavigation-0734b7c0.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./debounce-9c2fb7dd.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-309143b9.js";import"./ResponsivePopover-5c74b7f5.js";import"./Popover-26ef4370.js";import"./PopupsCommon.css-f12c9479.js";import"./FocusableElements-66623361.js";import"./MediaRange-25b98f31.js";import"./Dialog-4aad3648.js";import"./Button-7043cfcf.js";import"./MarkedEvents-b83081e9.js";import"./Title-f7b3e876.js";import"./StandardListItem-e017edb3.js";import"./ListItem-657b9c84.js";import"./RadioButton-86fe32a8.js";import"./CheckBox-b06ff672.js";import"./accept-aa607c05.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-b5a9fe30.js";import"./Avatar-8a894654.js";import"./employee-05c578de.js";import"./ResponsivePopoverCommon.css-870f7136.js";import"./ValueStateMessage.css-044f6113.js";import"./ValueState-ab6838cc.js";import"./clsx-1229b3e0.js";import"./react-jss.esm-2e5f50f2.js";import"./ThemingParameters-7e2e4e30.js";import"./index-38b4b099.js";import"./addCustomCSSWithScoping-d9b40dee.js";import"./index-ceaa803c.js";import"./index-2774faf2.js";import"./index-b4f80e81.js";import"./index-0a640929.js";import"./Link-307a9e73.js";import"./index-26da1b27.js";import"./TableOfContent-4e3378db.js";import"./index-2b081a56.js";import"./index-28f3cdd3.js";import"./index-88e0f96a.js";const v=`## Usage

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
}`}};const i={title:"User Feedback / BusyIndicator",component:r,args:{size:c.Medium,delay:1e3,active:!0},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withChildren"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:S};const re=["defaultStory","withChildren"];export{re as __namedExportsOrder,i as default,h as defaultStory,a as withChildren};
//# sourceMappingURL=BusyIndicator.stories-adfdb172.js.map
