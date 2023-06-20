import{M as y,C as s,f as d,a as x}from"./chunk-PCJTTTQV-be039c43.js";import{B as r}from"./index-76351a07.js";import{a as c}from"./BusyIndicator-a1d94425.js";import{S as l}from"./index-de03569d.js";import{T as j}from"./index-562e1433.js";import{e as g}from"./DomRefTable.module-6fc3f6c1.js";import{D as b}from"./DocsHeader-60f1cc59.js";import{F as f}from"./Footer-95a7b2ea.js";import{j as t}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{u}from"./index-bda0bad7.js";import"./iframe-8496b8c4.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./UI5Element-b6f0d493.js";import"./Icons-e2180d53.js";import"./Integer-f7f172c9.js";import"./Label-4abbc3da.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-18f6652d.js";import"./class-map-6a9bd920.js";import"./Icon-d703a0b9.js";import"./slot-76e48863.js";import"./InvisibleMessage-997dffc5.js";import"./AriaLabelHelper-43a261ec.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-dcf4123d.js";import"./information-33412b2a.js";import"./i18n-defaults-80781f7e.js";import"./Device-3f99aa96.js";import"./decline-b90c4a5f.js";import"./ListItemBase-3d6c9587.js";import"./ResizeHandler-021ae412.js";import"./ItemNavigation-9ba0e1fe.js";import"./getActiveElement-bcae01ed.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./debounce-9c2fb7dd.js";import"./style-map-0c64293c.js";import"./ResponsivePopover-02c632f2.js";import"./PopupUtils-46fb16e4.js";import"./Popover-fafbd2ef.js";import"./PopupsCommon.css-47573c24.js";import"./FocusableElements-6ebe483a.js";import"./MediaRange-25b98f31.js";import"./Dialog-75ee043a.js";import"./Button-dc6eb42e.js";import"./MarkedEvents-b83081e9.js";import"./Title-6c23a67a.js";import"./StandardListItem-b7d80d39.js";import"./ListItem-dd0f001f.js";import"./RadioButton-6fe6a6d4.js";import"./CheckBox-ac24e34a.js";import"./accept-cf6ab22a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-10d60cd3.js";import"./Avatar-81a3aee4.js";import"./employee-dc1adeb6.js";import"./ResponsivePopoverCommon.css-50da1549.js";import"./ValueStateMessage.css-b22c5ae7.js";import"./ValueState-ab6838cc.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-022ab528.js";import"./ThemingParameters-7e2e4e30.js";import"./index-f98ae8a9.js";import"./addCustomCSSWithScoping-aaf25c56.js";import"./index-9dd629b3.js";import"./index-7dd0177b.js";import"./index-1a724277.js";import"./index-63e72c7d.js";import"./Link-96b46196.js";import"./index-b9e92427.js";import"./TableOfContent-73a309b5.js";import"./index-d76c64d8.js";import"./index-9272cc33.js";const v=`## Usage

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
}`}};const i={title:"User Feedback / BusyIndicator",component:r,args:{size:c.Medium,delay:1e3,active:!0},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withChildren"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:S};const oe=["defaultStory","withChildren"];export{oe as __namedExportsOrder,i as default,h as defaultStory,a as withChildren};
//# sourceMappingURL=BusyIndicator.stories-c2cea3f4.js.map
