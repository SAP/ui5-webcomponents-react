import{M as y,C as s,f as d,a as x}from"./chunk-PCJTTTQV-dd96a6af.js";import{B as r}from"./index-1b60b9f4.js";import{a as c}from"./BusyIndicator-f42ddeb7.js";import{S as l}from"./index-bc64dc5d.js";import{T as j}from"./index-d460da36.js";import{d as g}from"./DomRefTable.module-20a17752.js";import{D as b}from"./DocsHeader-5d2e6e6d.js";import{F as f}from"./Footer-a12681c7.js";import{j as t}from"./jsx-runtime-b5ed1ca8.js";import"./index-64f120e9.js";import{u}from"./index-de4e61b4.js";import"./iframe-0ab8965f.js";import"../sb-preview/runtime.mjs";import"./react-18-1e96cd1b.js";import"./mapValues-30a52a16.js";import"./_baseForOwn-931ad773.js";import"./index-7bf58b0a.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-e1b46df2.js";import"./_baseUniq-5a3eb61c.js";import"./index-356e4a49.js";import"./withWebComponent-d0e572fe.js";import"./utils-d29e59c7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-4a8db993.js";import"./UI5Element-e8adceda.js";import"./Icons-5b18f7d2.js";import"./Integer-f7f172c9.js";import"./Label-51e2d33c.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-fc32fe45.js";import"./i18n-defaults-254d6b69.js";import"./Icon-46afc304.js";import"./slot-76e48863.js";import"./InvisibleMessage-04f92c3f.js";import"./AriaLabelHelper-43a261ec.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-09ec0732.js";import"./information-2c502181.js";import"./i18n-defaults-80781f7e.js";import"./decline-7cb41e3a.js";import"./ListItemBase-7c4b6958.js";import"./ResizeHandler-9d370fcd.js";import"./ItemNavigation-01761450.js";import"./getActiveElement-bcae01ed.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-e40faf20.js";import"./debounce-9c2fb7dd.js";import"./style-map-02d033ae.js";import"./ResponsivePopover-5dcc0ce6.js";import"./PopupUtils-6ec841a6.js";import"./Popover-f0a3f494.js";import"./PopupsCommon.css-2a26d007.js";import"./FocusableElements-5012f8d0.js";import"./MediaRange-25b98f31.js";import"./Dialog-e0d10674.js";import"./Button-3c41aad1.js";import"./MarkedEvents-b83081e9.js";import"./Title-a54d13df.js";import"./StandardListItem-cb4e34fa.js";import"./ListItem-541883fa.js";import"./RadioButton-07abdc79.js";import"./CheckBox-826a6744.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./Avatar-5cc62690.js";import"./employee-0153a597.js";import"./ResponsivePopoverCommon.css-ac857d16.js";import"./ValueStateMessage.css-8533c022.js";import"./ValueState-ab6838cc.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-a429ae4e.js";import"./ThemingParameters-f4b4144e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-7e57121b.js";import"./index-336951e7.js";import"./Import-23c9a4e6.js";import"./TableOfContent-3517adb9.js";import"./index-fe573db0.js";import"./Link-20aa90b6.js";import"./index-a140c2c7.js";import"./index-e9d3835d.js";const v=`## Usage

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
//# sourceMappingURL=BusyIndicator.stories-b3453ff2.js.map
