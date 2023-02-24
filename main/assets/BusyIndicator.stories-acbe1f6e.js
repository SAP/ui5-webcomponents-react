import{M as y,C as a,i as d,a as g}from"./index-02423177.js";import{B as r}from"./index-46a5dffa.js";import{a as c}from"./BusyIndicator-3e5a8ca3.js";import{S as l}from"./index-eed6a6ce.js";import{T as b}from"./index-2eaff221.js";import{A as f}from"./DomRefTable.module-30f3bd43.js";import{D as v}from"./DocsHeader-ce92ab0e.js";import{F as S}from"./Footer-c8244a58.js";import{j as t,a as k,F as w}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u}from"./index-4fb8b842.js";import"./iframe-3c157cf7.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./withWebComponent-b8903b2e.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./UI5Element-5c53814f.js";import"./AriaLabelHelper-dee23f38.js";import"./Keys-50a1cb5a.js";import"./Integer-44c9be94.js";import"./MarkedEvents-f33713fa.js";import"./class-map-a4eccd4f.js";import"./FocusableElements-679e4fb9.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-da7c4a52.js";import"./MediaRange-25b98f31.js";import"./style-map-f4770aeb.js";import"./Label-aecaa844.js";import"./WrappingType-b81e595a.js";import"./InvisibleMessage-12136b10.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-27f985c3.js";import"./Icons-0f428547.js";import"./decline-2be11c85.js";import"./ResponsivePopover-9c15f502.js";import"./Popover-e3c8ecec.js";import"./Dialog-32c7096e.js";import"./Button-6ca701be.js";import"./Title-fb9c1aba.js";import"./ListItemBase-4b52d1f0.js";import"./ItemNavigation-1cd3f78d.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-52be7164.js";import"./debounce-9c2fb7dd.js";import"./StandardListItem-ddbc126c.js";import"./ListItem-bdb92faa.js";import"./RadioButton-71b27f26.js";import"./CheckBox-9f80be56.js";import"./accept-4d6b88bc.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ac6f9b0d.js";import"./Avatar-e191e45f.js";import"./employee-01ecb76e.js";import"./ResponsivePopoverCommon.css-1186d6a9.js";import"./ValueStateMessage.css-57760618.js";import"./ValueState-ab6838cc.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-e54d2f1d.js";import"./ThemingParameters-f4b4144e.js";import"./chunk-4XCFV5WA-0265c491.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-9d4f0257.js";import"./index-6923d62a.js";import"./Import-60eb1828.js";import"./TableOfContent-75175b8f.js";import"./index-63e4052b.js";import"./index-bd49c23e.js";import"./Media-6b270b80.js";import"./index-0db28cca.js";const I=`## Usage

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
}`}};const i={title:"User Feedback / BusyIndicator",component:r,args:{size:c.Medium,delay:1e3,active:!0},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withChildren"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:B};const Vt=["defaultStory","withChildren"];export{Vt as __namedExportsOrder,i as default,h as defaultStory,s as withChildren};
//# sourceMappingURL=BusyIndicator.stories-acbe1f6e.js.map
