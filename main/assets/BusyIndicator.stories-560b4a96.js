import{M as y,C as s,f as d,a as x}from"./chunk-PCJTTTQV-a9e3658a.js";import{B as r}from"./index-c11940db.js";import{a as c}from"./BusyIndicator-80d43f0f.js";import{S as l}from"./index-522578c8.js";import{T as j}from"./index-562e1433.js";import{e as g}from"./DomRefTable.module-14c44f12.js";import{D as b}from"./DocsHeader-f649463f.js";import{F as f}from"./Footer-6ef542a8.js";import{j as t}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{u}from"./index-bda0bad7.js";import"./iframe-7c494daf.js";import"../sb-preview/runtime.js";import"./react-18-95218780.js";import"./mapValues-f5a21168.js";import"./_baseForOwn-8b0cf1d5.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-20c8b51e.js";import"./_baseUniq-8051c65b.js";import"./index-356e4a49.js";import"./withWebComponent-d4224c1c.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./UI5Element-fb9ecf93.js";import"./Icons-2c98f222.js";import"./Integer-f7f172c9.js";import"./Label-7f4aa83d.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-a58643fd.js";import"./class-map-18f572ce.js";import"./Icon-ef594e9f.js";import"./slot-76e48863.js";import"./InvisibleMessage-fac05f08.js";import"./AriaLabelHelper-43a261ec.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-d78fcf2d.js";import"./information-451d615b.js";import"./i18n-defaults-80781f7e.js";import"./Device-99b8bbf4.js";import"./decline-3df8c953.js";import"./ListItemBase-32e7e45c.js";import"./ResizeHandler-36560530.js";import"./ItemNavigation-c74bf7f7.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./debounce-9c2fb7dd.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-0e9b1550.js";import"./ResponsivePopover-a7253ba3.js";import"./Popover-510446d9.js";import"./PopupsCommon.css-f7aa7df0.js";import"./FocusableElements-6f0cd02a.js";import"./MediaRange-25b98f31.js";import"./Dialog-2af89d50.js";import"./Button-4160b137.js";import"./MarkedEvents-b83081e9.js";import"./Title-1daec987.js";import"./StandardListItem-049f31eb.js";import"./ListItem-bb2d09ef.js";import"./RadioButton-75d95420.js";import"./CheckBox-c44317b4.js";import"./accept-756ca6cd.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a768cef3.js";import"./Avatar-3c16d274.js";import"./employee-f2f473ef.js";import"./ResponsivePopoverCommon.css-e9e92f0e.js";import"./ValueStateMessage.css-332efe2d.js";import"./ValueState-ab6838cc.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-022ab528.js";import"./ThemingParameters-7e2e4e30.js";import"./index-42ec113b.js";import"./addCustomCSSWithScoping-9af65fbe.js";import"./index-d843ee57.js";import"./index-a53c6ece.js";import"./index-3855522a.js";import"./index-95e30611.js";import"./Link-057b3642.js";import"./index-2c77de22.js";import"./TableOfContent-d0aaab26.js";import"./index-c885d522.js";import"./index-1e6d36e9.js";import"./index-5c82c908.js";const v=`## Usage

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
//# sourceMappingURL=BusyIndicator.stories-560b4a96.js.map
