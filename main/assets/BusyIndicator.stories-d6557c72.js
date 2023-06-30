import{M as y,C as s,f as d,a as x}from"./chunk-PCJTTTQV-d250ba1c.js";import{B as r}from"./index-16b4ff18.js";import{a as c}from"./BusyIndicator-6bf4f6b5.js";import{S as l}from"./index-e766c511.js";import{T as j}from"./index-562e1433.js";import{e as g}from"./DomRefTable.module-85c8720d.js";import{D as b}from"./DocsHeader-157ea90a.js";import{F as f}from"./Footer-66ebd09e.js";import{j as t}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{u}from"./index-bda0bad7.js";import"./iframe-f5af30ef.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./UI5Element-01913b1f.js";import"./Icons-d46a51e9.js";import"./Integer-f7f172c9.js";import"./Label-a83eb715.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-ac1c9dde.js";import"./class-map-6a9bd920.js";import"./Icon-0a4d58ef.js";import"./slot-76e48863.js";import"./InvisibleMessage-e5379970.js";import"./AriaLabelHelper-43a261ec.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-d543dce5.js";import"./information-c8e84372.js";import"./i18n-defaults-80781f7e.js";import"./Device-99b8bbf4.js";import"./decline-1fd321dc.js";import"./ListItemBase-b0580930.js";import"./ResizeHandler-edd29a36.js";import"./ItemNavigation-0521282e.js";import"./getActiveElement-bcae01ed.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./debounce-9c2fb7dd.js";import"./style-map-0c64293c.js";import"./ResponsivePopover-7f48ba13.js";import"./PopupUtils-4b9a91b6.js";import"./Popover-6ae302f4.js";import"./PopupsCommon.css-d689758d.js";import"./FocusableElements-426d0dfa.js";import"./MediaRange-25b98f31.js";import"./Dialog-1a1d34fb.js";import"./Button-3960a0de.js";import"./MarkedEvents-b83081e9.js";import"./Title-d41046e1.js";import"./StandardListItem-4970aa78.js";import"./ListItem-abf45448.js";import"./RadioButton-4257c8bc.js";import"./CheckBox-caaa73da.js";import"./accept-132472e4.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-d59cc39f.js";import"./Avatar-0a66eae5.js";import"./employee-a105984c.js";import"./ResponsivePopoverCommon.css-4e26f9b9.js";import"./ValueStateMessage.css-c26568b3.js";import"./ValueState-ab6838cc.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-022ab528.js";import"./ThemingParameters-7e2e4e30.js";import"./index-5448e852.js";import"./addCustomCSSWithScoping-cd9e7ac3.js";import"./index-c209e6c0.js";import"./index-6d76da7e.js";import"./index-c9a250aa.js";import"./index-b1fa7878.js";import"./Link-daa8ef8a.js";import"./index-2c77de22.js";import"./TableOfContent-af59cc7f.js";import"./index-67145140.js";import"./index-4115aeae.js";import"./index-9c36b504.js";const v=`## Usage

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
//# sourceMappingURL=BusyIndicator.stories-d6557c72.js.map
