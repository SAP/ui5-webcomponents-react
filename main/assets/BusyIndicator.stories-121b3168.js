import{M as y,C as s,f as d,b as x}from"./chunk-PCJTTTQV-a15bcc6c.js";import{B as r}from"./index-c6b81840.js";import{B as c}from"./BusyIndicator-741cae1e.js";import{S as l}from"./index-44bd6a67.js";import{T as j}from"./index-47d0a85a.js";import{b}from"./DomRefTable.module-938ce2d1.js";import{D as g}from"./DocsHeader-0f328460.js";import{F as f}from"./Footer-499c3fd0.js";import{j as t}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u}from"./index-59d6410c.js";import"./iframe-0de826a4.js";import"../sb-preview/runtime.js";import"./react-18-50d7df5e.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-c74c9f7f.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./withWebComponent-99b005ba.js";import"./utils-626dc1bf.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./UI5Element-11982a12.js";import"./Icons-234bf59e.js";import"./Integer-f7f172c9.js";import"./Label-62dd8470.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-1a83921e.js";import"./class-map-b4d8f3b0.js";import"./Icon-31253496.js";import"./slot-76e48863.js";import"./InvisibleMessage-e4263a1a.js";import"./AriaLabelHelper-43a261ec.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-f82584de.js";import"./information-2644a02f.js";import"./i18n-defaults-837f5aed.js";import"./Device-6afa24d0.js";import"./decline-c1cc2557.js";import"./ListItemBase-6d1fb082.js";import"./ResizeHandler-9ebe913c.js";import"./ItemNavigation-a882fb90.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./debounce-9c2fb7dd.js";import"./style-map-56038137.js";import"./BrowserScrollbar.css-527f9f64.js";import"./ResponsivePopover-8e47438f.js";import"./Popover-f3103b78.js";import"./PopupsCommon.css-552c6676.js";import"./FocusableElements-708d1a4e.js";import"./MediaRange-25b98f31.js";import"./Dialog-8bf45a3e.js";import"./Button-0b5fe0db.js";import"./MarkedEvents-b83081e9.js";import"./Title-3276c542.js";import"./StandardListItem-7168aefd.js";import"./ListItem-429c71be.js";import"./RadioButton-80f32cef.js";import"./CheckBox-6ec8bf24.js";import"./accept-6c83709e.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-c0f59065.js";import"./Avatar-813f92b3.js";import"./employee-e34ffee2.js";import"./ResponsivePopoverCommon.css-c96ec8b5.js";import"./ValueStateMessage.css-e53cdf31.js";import"./ValueState-ab6838cc.js";import"./clsx-1229b3e0.js";import"./react-jss.esm-c310038c.js";import"./ThemingParameters-7e2e4e30.js";import"./index-57660acc.js";import"./addCustomCSSWithScoping-783dc33d.js";import"./index-11256eac.js";import"./index-51b8ebeb.js";import"./index-1c77658b.js";import"./index-4938df71.js";import"./Link-b0328393.js";import"./index-13bed04c.js";import"./TableOfContent-f84ee829.js";import"./index-9bd3f3a9.js";import"./index-4765fcf1.js";import"./index-af1a2774.js";const v=`## Usage

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
//# sourceMappingURL=BusyIndicator.stories-121b3168.js.map
