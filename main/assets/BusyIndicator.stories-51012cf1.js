import{M as y,d as s,i as d,h as x,a as j}from"./DomRefTable.module-b7fea52e.js";import{B as r}from"./index-fa6904f9.js";import{a as c}from"./BusyIndicator-ed5c055b.js";import{S as l}from"./index-d7218139.js";import{T as g}from"./index-562e1433.js";import{D as b}from"./DocsHeader-1c417f35.js";import{F as f}from"./Footer-924a48e6.js";import{j as t}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{u}from"./index-bda0bad7.js";import"./chunk-PCJTTTQV-d0492a72.js";import"./iframe-4fa5e50b.js";import"../sb-preview/runtime.js";import"./client-d4c2b4b3.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-800a0312.js";import"./mapValues-2c1e4f64.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./react-jss.esm-022ab528.js";import"./index-4bc85da5.js";import"./UI5Element-2e105c8a.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-1927e688.js";import"./Icons-fe8ad928.js";import"./decline-76de6b04.js";import"./i18n-defaults-80781f7e.js";import"./information-bc6b0940.js";import"./class-map-6a9bd920.js";import"./Button-a741ea37.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-2f9956dc.js";import"./Integer-f7f172c9.js";import"./Label-51e84534.js";import"./WrappingType-b81e595a.js";import"./InvisibleMessage-7cd9352f.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-75e7bac2.js";import"./ListItemBase-9f02a20e.js";import"./ResizeHandler-267f9e5d.js";import"./ItemNavigation-e091c48d.js";import"./getActiveElement-bcae01ed.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./debounce-9c2fb7dd.js";import"./style-map-0c64293c.js";import"./ResponsivePopover-cca20b42.js";import"./PopupUtils-2e0c5ac0.js";import"./Popover-898d0a68.js";import"./PopupsCommon.css-0f627f88.js";import"./FocusableElements-d8460590.js";import"./MediaRange-25b98f31.js";import"./Dialog-335e5eae.js";import"./Title-4b970c0e.js";import"./StandardListItem-e9d00b86.js";import"./ListItem-e52b9a25.js";import"./RadioButton-9630bc35.js";import"./CheckBox-b65adee7.js";import"./accept-8cc3ec33.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-d68231f1.js";import"./Avatar-8bebda11.js";import"./employee-2f853b68.js";import"./ResponsivePopoverCommon.css-67fc1c09.js";import"./ValueStateMessage.css-1932364a.js";import"./ValueState-ab6838cc.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./index-4c0ab015.js";import"./TableOfContent-33f998c6.js";import"./index-5ea99e16.js";import"./Link-92895189.js";import"./index-62dd9f52.js";import"./index-9518952a.js";const v=`## Usage

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
`,t.jsx(x,{story:"Default"}),`
`,t.jsx(j,{children:v}),`
`,t.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"busyindicator-with-children",children:"BusyIndicator with children"}),`
`,t.jsx(s,{children:t.jsx(d,{name:"With children",args:{active:!0},children:n=>t.jsx(r,{...n,children:t.jsx(l,{})})})}),`
`,t.jsx(s,{mdxSource:'<BusyIndicator active><Text><p>{"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\\ndolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita\\nkasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\\nsadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\\nvoluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata\\nsanctus est Lorem ipsum dolor sit amet."}</p></Text></BusyIndicator>',children:t.jsx(r,{active:!0,children:t.jsx(g,{children:t.jsx(o.p,{children:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
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
//# sourceMappingURL=BusyIndicator.stories-51012cf1.js.map
