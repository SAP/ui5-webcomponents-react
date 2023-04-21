import{M as y,C as s,f as d,a as x}from"./chunk-PCJTTTQV-132729c9.js";import{B as r}from"./index-b215ece0.js";import{a as c}from"./BusyIndicator-e76963e1.js";import{S as l}from"./index-287de013.js";import{T as j}from"./index-334d9c45.js";import{d as g}from"./DomRefTable.module-c544c2ba.js";import{D as b}from"./DocsHeader-1f3d3e34.js";import{F as f}from"./Footer-c2c9b607.js";import{j as t}from"./jsx-runtime-ccada58e.js";import"./index-f1f749bf.js";import{u}from"./index-4fb8b842.js";import"./iframe-e471b753.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./withWebComponent-791919b7.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./UI5Element-e8adceda.js";import"./Icons-5b18f7d2.js";import"./Integer-f7f172c9.js";import"./Label-0e5fa470.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-dc0989fc.js";import"./i18n-defaults-254d6b69.js";import"./Icon-b04dccd7.js";import"./slot-76e48863.js";import"./InvisibleMessage-04f92c3f.js";import"./AriaLabelHelper-43a261ec.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-09ec0732.js";import"./information-2c502181.js";import"./i18n-defaults-80781f7e.js";import"./decline-7cb41e3a.js";import"./ListItemBase-534ac7d7.js";import"./ResizeHandler-9d370fcd.js";import"./ItemNavigation-01761450.js";import"./getActiveElement-bcae01ed.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-0dbd5acf.js";import"./debounce-9c2fb7dd.js";import"./style-map-d22cbf2f.js";import"./ResponsivePopover-98351475.js";import"./PopupUtils-6ec841a6.js";import"./Popover-a5930009.js";import"./PopupsCommon.css-4412d83b.js";import"./FocusableElements-5012f8d0.js";import"./MediaRange-25b98f31.js";import"./Dialog-fdd9c36a.js";import"./Button-08c55dbf.js";import"./MarkedEvents-b83081e9.js";import"./Title-1c5327cd.js";import"./StandardListItem-df13f81b.js";import"./ListItem-fb0d8055.js";import"./RadioButton-fbf8257b.js";import"./CheckBox-d3cb6aeb.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./Avatar-560d9cf8.js";import"./employee-0153a597.js";import"./ResponsivePopoverCommon.css-90775aea.js";import"./ValueStateMessage.css-a1e3bc74.js";import"./ValueState-ab6838cc.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-2e28eff7.js";import"./ThemingParameters-f4b4144e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-b59194f7.js";import"./index-2580883a.js";import"./Import-fb6d5636.js";import"./TableOfContent-3ce373e1.js";import"./index-660c1ba1.js";import"./Link-756c9448.js";import"./index-7fe1ffa4.js";import"./index-c073f447.js";const v=`## Usage

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
//# sourceMappingURL=BusyIndicator.stories-fa4cd816.js.map
