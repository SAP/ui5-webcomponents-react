import{M as y,C as s,f as d,b as x}from"./chunk-PCJTTTQV-b245ce1c.js";import{B as r}from"./index-d9d97d2b.js";import{B as c}from"./BusyIndicator-0bd7794e.js";import{S as l}from"./index-c6cbdf44.js";import{T as j}from"./index-d3b71bde.js";import{b}from"./DomRefTable.module-865202fc.js";import{D as g}from"./DocsHeader-d60e5b5e.js";import{F as f}from"./Footer-b254f2dd.js";import{j as t}from"./jsx-runtime-6b79a019.js";import"./index-ccf6a75d.js";import{u}from"./index-f2208173.js";import"./iframe-37ac82f0.js";import"../sb-preview/runtime.js";import"./react-18-74db5ca2.js";import"./mapValues-4f30c9d2.js";import"./_baseForOwn-1047660d.js";import"./index-8d7a8128.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-f4b610e7.js";import"./_baseUniq-a28bb1ec.js";import"./index-356e4a49.js";import"./withWebComponent-03662f7f.js";import"./utils-f515de3e.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-0a189966.js";import"./UI5Element-11982a12.js";import"./Icons-234bf59e.js";import"./Integer-f7f172c9.js";import"./Label-f867a533.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-1a83921e.js";import"./class-map-341004db.js";import"./Icon-3498e12d.js";import"./slot-76e48863.js";import"./InvisibleMessage-e4263a1a.js";import"./AriaLabelHelper-43a261ec.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-f82584de.js";import"./information-2644a02f.js";import"./i18n-defaults-837f5aed.js";import"./Device-6afa24d0.js";import"./decline-c1cc2557.js";import"./ListItemBase-f65eaa12.js";import"./ResizeHandler-9ebe913c.js";import"./ItemNavigation-a882fb90.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./debounce-9c2fb7dd.js";import"./style-map-9183c00a.js";import"./BrowserScrollbar.css-bcc05298.js";import"./ResponsivePopover-63d0a1b7.js";import"./Popover-1f09fd29.js";import"./PopupsCommon.css-fd974b5a.js";import"./FocusableElements-708d1a4e.js";import"./MediaRange-25b98f31.js";import"./Dialog-b040586c.js";import"./Button-3da2aede.js";import"./MarkedEvents-b83081e9.js";import"./Title-01e28931.js";import"./StandardListItem-92ee6b14.js";import"./ListItem-57c44dac.js";import"./RadioButton-3124fa96.js";import"./CheckBox-05a648ec.js";import"./accept-6c83709e.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-c0f59065.js";import"./Avatar-d7b74462.js";import"./employee-e34ffee2.js";import"./ResponsivePopoverCommon.css-94d32982.js";import"./ValueStateMessage.css-e895ae9f.js";import"./ValueState-ab6838cc.js";import"./clsx-1229b3e0.js";import"./react-jss.esm-0528916b.js";import"./ThemingParameters-7e2e4e30.js";import"./index-ef33a88b.js";import"./addCustomCSSWithScoping-2d3c4974.js";import"./index-bbc9063c.js";import"./index-e06735ec.js";import"./index-def09afe.js";import"./index-023f8080.js";import"./Link-6cd3dd1c.js";import"./index-bc9f3959.js";import"./TableOfContent-4b167d2f.js";import"./index-a250c7c2.js";import"./index-687652dc.js";import"./index-7251e6bf.js";const v=`## Usage

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
`,t.jsx(g,{since:"0.4.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{children:t.jsx(d,{name:"Default",children:n=>t.jsx(r,{...n})})}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(b,{story:"Default"}),`
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
//# sourceMappingURL=BusyIndicator.stories-e6a8789c.js.map
