import{M as y,C as s,e as d,b as x}from"./chunk-S4VUQJ4A-494a6b42.js";import{B as r}from"./index-3714409d.js";import{B as c}from"./BusyIndicator-6d3cbaa3.js";import{S as l}from"./index-ff96c2d7.js";import{T as j}from"./index-743fc8f1.js";import{A as g}from"./DomRefTable.module-1365df08.js";import{D as b}from"./DocsHeader-b20f9dbe.js";import{F as f}from"./Footer-c6cbac5a.js";import{j as t}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u}from"./index-59d6410c.js";import"./iframe-d0043530.js";import"../sb-preview/runtime.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./withWebComponent-70ea33bf.js";import"./utils-eb830979.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./UI5Element-9ae3ac4a.js";import"./Icons-aa504494.js";import"./Integer-f7f172c9.js";import"./Label-2351773c.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-edeeca68.js";import"./class-map-a35dc276.js";import"./Select-2c5dcc2c.js";import"./Icon-085ae741.js";import"./slot-76e48863.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./ResizeHandler-a1ba39c5.js";import"./MediaRange-25b98f31.js";import"./style-map-0570471d.js";import"./BrowserScrollbar.css-35e4e851.js";import"./InvisibleMessage-5347bfa8.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-98550049.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./ListItemBase-7c3bbca9.js";import"./ItemNavigation-53cee471.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./ResponsivePopover-3603f824.js";import"./Dialog-6ca0f060.js";import"./Button-bda40b74.js";import"./MarkedEvents-b83081e9.js";import"./Title-9e1fec85.js";import"./StandardListItem-a534f611.js";import"./ListItem-8f7be23d.js";import"./RadioButton-0df5d1bd.js";import"./CheckBox-05effb75.js";import"./accept-a3b0d940.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-562fbac6.js";import"./Avatar-54e46144.js";import"./employee-bd01b92f.js";import"./ResponsivePopoverCommon.css-f284520a.js";import"./ValueStateMessage.css-29f8f350.js";import"./ValueState-ab6838cc.js";import"./clsx-1229b3e0.js";import"./react-jss.esm-2e5f50f2.js";import"./ThemingParameters-7e2e4e30.js";import"./index-7db0a6f2.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-60c0dd2c.js";import"./index-335384f5.js";import"./index-95809ba7.js";import"./index-eefe9625.js";import"./Link-27f41eeb.js";import"./index-65d16a3a.js";import"./TableOfContent-5d39401b.js";import"./index-8ca2e55d.js";import"./index-4284414c.js";import"./index-70ddcfc1.js";const v=`## Usage

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
//# sourceMappingURL=BusyIndicator.stories-5309f0a1.js.map
