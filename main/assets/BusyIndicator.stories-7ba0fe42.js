import{M as y,C as s,e as d,b as x}from"./chunk-HLWAVYOI-64f8c262.js";import{B as r}from"./index-338d3fab.js";import{B as c}from"./BusyIndicator-30d2b934.js";import{S as l}from"./index-b1658ca3.js";import{T as j}from"./index-743fc8f1.js";import{A as g}from"./DomRefTable.module-8474ec8c.js";import{D as b}from"./DocsHeader-fe9dc671.js";import{F as f}from"./Footer-6ebbc409.js";import{j as t}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u}from"./index-59d6410c.js";import"./iframe-2d012d35.js";import"../sb-preview/runtime.js";import"./index-f82c8853.js";import"./index-c74c9f7f.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./withWebComponent-f146e44d.js";import"./utils-85c0effb.js";import"./CustomElementsScopeUtils-90546106.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./UI5Element-d089e658.js";import"./Icons-d115de21.js";import"./Integer-f7f172c9.js";import"./Label-025b0296.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-a1ecaff4.js";import"./class-map-5b190712.js";import"./Select-165e307f.js";import"./Icon-dc979b51.js";import"./slot-76e48863.js";import"./Popover-84fe14ea.js";import"./PopupUtils-caf3caee.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-070f9d59.js";import"./FocusableElements-320054f2.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./decline-a017ea5c.js";import"./i18n-defaults-bdef1cce.js";import"./ResizeHandler-36d5a74c.js";import"./MediaRange-25b98f31.js";import"./style-map-2f7624b7.js";import"./BrowserScrollbar.css-e63eefff.js";import"./InvisibleMessage-b699e12e.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-d3e7694d.js";import"./information-ff75d6c3.js";import"./alert-fa33aca2.js";import"./ListItemBase-8f94593b.js";import"./ItemNavigation-5bb0bc27.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./ResponsivePopover-46599dee.js";import"./Dialog-d6d3e16c.js";import"./Button-f20bbbdf.js";import"./MarkedEvents-b83081e9.js";import"./Title-53f5d1e4.js";import"./StandardListItem-e433cbf1.js";import"./ListItem-237bd455.js";import"./RadioButton-894dc7d7.js";import"./CheckBox-e4c9f0e7.js";import"./accept-b3993803.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-f2ee719f.js";import"./Avatar-d6a8bd34.js";import"./employee-0930782f.js";import"./ResponsivePopoverCommon.css-ef6cd2ad.js";import"./ValueStateMessage.css-7d9802b8.js";import"./ValueState-ab6838cc.js";import"./clsx-1229b3e0.js";import"./react-jss.esm-2e5f50f2.js";import"./ThemingParameters-7e2e4e30.js";import"./index-373d3a09.js";import"./addCustomCSSWithScoping-b7e0672b.js";import"./index-8a9e8c62.js";import"./index-e8d2e988.js";import"./index-232acfd8.js";import"./index-260ac580.js";import"./Link-0dce4afc.js";import"./index-12e0da73.js";import"./TableOfContent-07422e58.js";import"./index-b737216f.js";import"./index-00dd2bcb.js";import"./index-3f9a4593.js";const v=`## Usage

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
//# sourceMappingURL=BusyIndicator.stories-7ba0fe42.js.map
