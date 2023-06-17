import{M as y,C as s,f as d,a as x}from"./chunk-PCJTTTQV-8ff525e3.js";import{B as r}from"./index-39bb8ffc.js";import{a as c}from"./BusyIndicator-59389070.js";import{S as l}from"./index-34bc7d3b.js";import{T as j}from"./index-562e1433.js";import{e as g}from"./DomRefTable.module-68e320b1.js";import{D as b}from"./DocsHeader-8c718f51.js";import{F as f}from"./Footer-b48c0726.js";import{j as t}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{u}from"./index-bda0bad7.js";import"./iframe-88cc6741.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./UI5Element-533070c8.js";import"./Icons-67fab4b0.js";import"./Integer-f7f172c9.js";import"./Label-94e3ba9d.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-2f9956dc.js";import"./class-map-6a9bd920.js";import"./Icon-2e16c08b.js";import"./slot-76e48863.js";import"./InvisibleMessage-78e27fe2.js";import"./AriaLabelHelper-43a261ec.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-37bb3474.js";import"./information-e88b206d.js";import"./i18n-defaults-80781f7e.js";import"./Device-208919c6.js";import"./decline-1d33941a.js";import"./ListItemBase-bb0e7e03.js";import"./ResizeHandler-aaf74c24.js";import"./ItemNavigation-211cc58c.js";import"./getActiveElement-bcae01ed.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./debounce-9c2fb7dd.js";import"./style-map-0c64293c.js";import"./ResponsivePopover-f849f6e4.js";import"./PopupUtils-ba2b770f.js";import"./Popover-167ff704.js";import"./PopupsCommon.css-97917f6d.js";import"./FocusableElements-eec123c0.js";import"./MediaRange-25b98f31.js";import"./Dialog-e7dbd17a.js";import"./Button-21e98691.js";import"./MarkedEvents-b83081e9.js";import"./Title-2e442dfb.js";import"./StandardListItem-4965eb0f.js";import"./ListItem-fa446a08.js";import"./RadioButton-a0e5c6e9.js";import"./CheckBox-724085ae.js";import"./accept-f2459768.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-e957a39c.js";import"./Avatar-01bfa415.js";import"./employee-d2874d42.js";import"./ResponsivePopoverCommon.css-a7286400.js";import"./ValueStateMessage.css-ab874ec7.js";import"./ValueState-ab6838cc.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-022ab528.js";import"./ThemingParameters-7e2e4e30.js";import"./index-98e8b5cb.js";import"./index-4c0ab015.js";import"./TableOfContent-e95236ca.js";import"./index-dbf8e929.js";import"./Link-08f0fbaf.js";import"./index-7539bdc0.js";import"./index-0101973f.js";const v=`## Usage

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
}`}};const i={title:"User Feedback / BusyIndicator",component:r,args:{size:c.Medium,delay:1e3,active:!0},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withChildren"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:S};const $t=["defaultStory","withChildren"];export{$t as __namedExportsOrder,i as default,h as defaultStory,a as withChildren};
//# sourceMappingURL=BusyIndicator.stories-d23eabd2.js.map
