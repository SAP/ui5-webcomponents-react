import{M as y,C as s,e as d,b as x}from"./chunk-S4VUQJ4A-74ed328f.js";import{B as r}from"./index-638d83e9.js";import{B as c}from"./BusyIndicator-9ca5d237.js";import{S as l}from"./index-942b7a07.js";import{T as j}from"./index-743fc8f1.js";import{A as g}from"./DomRefTable.module-ef2f031f.js";import{D as b}from"./DocsHeader-f9445f25.js";import{F as f}from"./Footer-c2244671.js";import{j as t}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u}from"./index-59d6410c.js";import"./iframe-bb104014.js";import"../sb-preview/runtime.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./withWebComponent-40b4b429.js";import"./utils-64df43e3.js";import"./CustomElementsScopeUtils-7e643eaa.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./UI5Element-fe43d284.js";import"./Icons-1d0bcfc0.js";import"./Integer-f7f172c9.js";import"./Label-44520d2b.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-d5195a49.js";import"./class-map-c90b90b7.js";import"./Select-7dbcad82.js";import"./Icon-4b8e6c3e.js";import"./slot-76e48863.js";import"./Popover-e0a9892e.js";import"./PopupUtils-6f7aa5d8.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-20392ac5.js";import"./FocusableElements-81dc3a15.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./decline-6c7fc0a2.js";import"./i18n-defaults-bdef1cce.js";import"./ResizeHandler-c2d89e75.js";import"./MediaRange-25b98f31.js";import"./style-map-26bcc635.js";import"./BrowserScrollbar.css-6733af99.js";import"./InvisibleMessage-dcf9afbd.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-b87cbef6.js";import"./information-5d7a8806.js";import"./alert-1b225bb9.js";import"./ListItemBase-a954caa9.js";import"./ItemNavigation-6fcc55ad.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./ResponsivePopover-a1211aea.js";import"./Dialog-524beb63.js";import"./Button-ca10e4c6.js";import"./MarkedEvents-b83081e9.js";import"./Title-01167e9e.js";import"./StandardListItem-4d8bc973.js";import"./ListItem-8f00fe18.js";import"./RadioButton-2fcb52b7.js";import"./CheckBox-e1cfdb7e.js";import"./accept-9e169369.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bfe8f962.js";import"./Avatar-b61e760c.js";import"./employee-6f8dc3b6.js";import"./ResponsivePopoverCommon.css-fd1b094e.js";import"./ValueStateMessage.css-a9dd0528.js";import"./ValueState-ab6838cc.js";import"./clsx-1229b3e0.js";import"./react-jss.esm-2e5f50f2.js";import"./ThemingParameters-7e2e4e30.js";import"./index-0d6c4f2d.js";import"./addCustomCSSWithScoping-0dcb0e40.js";import"./index-7bf57a11.js";import"./index-f53287d3.js";import"./index-445b3cf1.js";import"./index-7edabd42.js";import"./Link-39a6449b.js";import"./index-fb6e8b5e.js";import"./TableOfContent-ef93a395.js";import"./index-c10b5788.js";import"./index-997d175b.js";import"./index-db317946.js";const v=`## Usage

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
}`}};const i={title:"User Feedback / BusyIndicator",component:r,args:{size:c.Medium,delay:1e3,active:!0},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withChildren"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:S};const ie=["defaultStory","withChildren"];export{ie as __namedExportsOrder,i as default,h as defaultStory,a as withChildren};
//# sourceMappingURL=BusyIndicator.stories-75de69d7.js.map
