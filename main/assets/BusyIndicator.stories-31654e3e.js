import{M as y,C as s,f as d,a as x}from"./chunk-PCJTTTQV-48af5014.js";import{B as r}from"./index-ad8e7747.js";import{a as c}from"./BusyIndicator-990cb1ca.js";import{S as l}from"./index-259db43a.js";import{T as j}from"./index-562e1433.js";import{d as g}from"./DomRefTable.module-bed2e061.js";import{D as b}from"./DocsHeader-cce01c31.js";import{F as f}from"./Footer-0eeecef7.js";import{j as t}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{u}from"./index-bda0bad7.js";import"./iframe-7e2d8cf5.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./UI5Element-74c2a827.js";import"./Icons-94b91597.js";import"./Integer-f7f172c9.js";import"./Label-fcb0092c.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-519e9c6d.js";import"./i18n-defaults-254d6b69.js";import"./Icon-a2964213.js";import"./slot-76e48863.js";import"./InvisibleMessage-17280599.js";import"./AriaLabelHelper-43a261ec.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-4f848b87.js";import"./information-972c65ef.js";import"./i18n-defaults-80781f7e.js";import"./decline-c0e7c267.js";import"./ListItemBase-c271f906.js";import"./ResizeHandler-0f082c48.js";import"./ItemNavigation-e9bbb1b9.js";import"./getActiveElement-bcae01ed.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-362c4d65.js";import"./debounce-9c2fb7dd.js";import"./style-map-33b353d0.js";import"./ResponsivePopover-d37f7fd3.js";import"./PopupUtils-db5b49db.js";import"./Popover-2de3a0ad.js";import"./PopupsCommon.css-c4ad8573.js";import"./FocusableElements-20734289.js";import"./MediaRange-25b98f31.js";import"./Dialog-07218916.js";import"./Button-1eb48b4c.js";import"./MarkedEvents-b83081e9.js";import"./Title-85313bbf.js";import"./StandardListItem-48aef1ae.js";import"./ListItem-4183041f.js";import"./RadioButton-9ea605bf.js";import"./CheckBox-5944a432.js";import"./accept-4bb68de0.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-b979090e.js";import"./Avatar-99b7e1ff.js";import"./employee-78b984a5.js";import"./ResponsivePopoverCommon.css-5b3cf680.js";import"./ValueStateMessage.css-0142eeaf.js";import"./ValueState-ab6838cc.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-022ab528.js";import"./ThemingParameters-7e2e4e30.js";import"./index-50d15196.js";import"./index-4c0ab015.js";import"./Import-46db63bb.js";import"./TableOfContent-97bdb2e1.js";import"./index-4c28c096.js";import"./Link-e0af46e3.js";import"./index-671f3848.js";import"./index-ab5e8882.js";const v=`## Usage

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
}`}};const i={title:"User Feedback / BusyIndicator",component:r,args:{size:c.Medium,delay:1e3,active:!0},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withChildren"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:S};const ee=["defaultStory","withChildren"];export{ee as __namedExportsOrder,i as default,h as defaultStory,a as withChildren};
//# sourceMappingURL=BusyIndicator.stories-31654e3e.js.map
