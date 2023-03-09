import{M as y,C as a,j as d,a as g}from"./index-d7563925.js";import{B as r}from"./index-c0e9a8b4.js";import{a as c}from"./BusyIndicator-b3c085b8.js";import{S as l}from"./index-c31639bb.js";import{T as b}from"./index-c7ba7a71.js";import{A as f}from"./DomRefTable.module-db373cb0.js";import{D as v}from"./DocsHeader-61ee84cb.js";import{F as S}from"./Footer-72e50a4a.js";import{j as t,a as k,F as w}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u}from"./index-4fb8b842.js";import"./iframe-0a6a9469.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./UI5Element-427ec721.js";import"./Keys-3acbae73.js";import"./Integer-d9976c13.js";import"./Label-040efebd.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-5d8e4b2b.js";import"./MarkedEvents-8627ed01.js";import"./AriaLabelHelper-c82262ef.js";import"./InvisibleMessage-4a23efee.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-068fe0af.js";import"./Icons-7b82f601.js";import"./decline-0a03b0b0.js";import"./ListItemBase-9f62536c.js";import"./ResizeHandler-1fa8a094.js";import"./ItemNavigation-9e1aa83a.js";import"./TabbableElements-0285a530.js";import"./FocusableElements-c2f39514.js";import"./PopupsCommon.css-ab0735c6.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./debounce-9c2fb7dd.js";import"./ResponsivePopover-1b0c065e.js";import"./Popover-cbbb060d.js";import"./Dialog-0097f4e9.js";import"./Button-e27d9549.js";import"./Title-b986a4bd.js";import"./StandardListItem-0b926583.js";import"./ListItem-b545bc6e.js";import"./RadioButton-4ed70174.js";import"./CheckBox-2761aa24.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Avatar-358386af.js";import"./employee-98ce1b38.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";import"./ValueState-ab6838cc.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-fe4dc3ff.js";import"./ThemingParameters-f4b4144e.js";import"./chunk-QDOP3WTA-64bdbb8f.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-e9bbeaa8.js";import"./index-cbb29537.js";import"./Import-2685c381.js";import"./TableOfContent-2e1f96a2.js";import"./index-4a625d6d.js";import"./index-eab84561.js";import"./Footer.module-c4f3b823.js";import"./index-943d5a76.js";const I=`## Usage

For the \`BusyIndicator\` you can define the size, the text and whether it is shown or hidden. In order to hide it, use the "active" property.  
  
In order to show busy state over an HTML element, simply nest the HTML element in a \`BusyIndicator\` instance.  
**Note:** Since \`BusyIndicator\` has \`display: inline-block;\` by default and no width of its own, whenever you need to wrap a block-level element, you should set \`display: block\` to the busy indicator as well.

### When to use:

*   The user needs to be able to cancel the operation.
*   Only part of the application or a particular component is affected.

### When not to use:

*   The operation takes less than one second.
*   You need to block the screen and prevent the user from starting another activity.
*   Do not show multiple busy indicators at once.`;function B(e={}){const{wrapper:m}=Object.assign({},u(),e.components);return m?t(m,{...e,children:t(p,{})}):p();function p(){const o=Object.assign({h2:"h2",h1:"h1",p:"p"},u(),e.components);return k(w,{children:[t(y,{title:"User Feedback / BusyIndicator",component:r,argTypes:{children:{control:{disable:!0}}},args:{size:c.Medium,delay:1e3,active:!0}}),`
`,t(v,{since:"0.4.0"}),`
`,t("br",{}),`
`,t(o.h2,{children:"Example"}),`
`,t(a,{children:t(d,{name:"Default",children:n=>t(r,{...n})})}),`
`,t(o.h2,{children:"Properties"}),`
`,t(f,{story:"Default"}),`
`,t(g,{children:I}),`
`,t(o.h1,{children:"More Examples"}),`
`,t("br",{}),`
`,t(o.h2,{children:"BusyIndicator with children"}),`
`,t(a,{children:t(d,{name:"With children",args:{active:!0},children:n=>t(r,{...n,children:t(l,{})})})}),`
`,t(a,{mdxSource:'<BusyIndicator active><Text><p>{"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\\ndolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita\\nkasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\\nsadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\\nvoluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata\\nsanctus est Lorem ipsum dolor sit amet."}</p></Text></BusyIndicator>',children:t(r,{active:!0,children:t(b,{children:t(o.p,{children:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
sanctus est Lorem ipsum dolor sit amet.`})})})}),`
`,t(S,{})]})}}const h=e=>t(r,{...e});h.storyName="Default";h.parameters={storySource:{source:`args => {
  return <BusyIndicator {...args} />;
}`}};const s=e=>t(r,{...e,children:t(l,{})});s.storyName="With children";s.args={active:!0};s.parameters={storySource:{source:`args => {
  return <BusyIndicator {...args}>
          <Select />
        </BusyIndicator>;
}`}};const i={title:"User Feedback / BusyIndicator",component:r,args:{size:c.Medium,delay:1e3,active:!0},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withChildren"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:B};const $t=["defaultStory","withChildren"];export{$t as __namedExportsOrder,i as default,h as defaultStory,s as withChildren};
//# sourceMappingURL=BusyIndicator.stories-6e664800.js.map
