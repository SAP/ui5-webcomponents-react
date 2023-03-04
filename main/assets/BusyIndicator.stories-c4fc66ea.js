import{M as y,C as a,j as d,a as g}from"./index-afbbd947.js";import{B as r}from"./index-84b448d1.js";import{a as c}from"./BusyIndicator-344b418d.js";import{S as l}from"./index-6a47f5fd.js";import{T as b}from"./index-2eaff221.js";import{A as f}from"./DomRefTable.module-6ce8754c.js";import{D as v}from"./DocsHeader-85b9e488.js";import{F as S}from"./Footer-50809b9e.js";import{j as t,a as k,F as w}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u}from"./index-4fb8b842.js";import"./iframe-0f619c81.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./withWebComponent-34dd487e.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./UI5Element-386cb3f6.js";import"./AriaLabelHelper-dee23f38.js";import"./Keys-50a1cb5a.js";import"./Integer-5fa4beea.js";import"./MarkedEvents-0e37da6f.js";import"./class-map-60f59e95.js";import"./FocusableElements-13161f05.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-b3fcb37c.js";import"./MediaRange-25b98f31.js";import"./style-map-63946e4f.js";import"./Label-f9741f9c.js";import"./WrappingType-b81e595a.js";import"./InvisibleMessage-0cf18861.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-fdce342b.js";import"./Icons-03f19c25.js";import"./decline-48ecb430.js";import"./ResponsivePopover-f9a06272.js";import"./Popover-ff8f156e.js";import"./Dialog-30b3aaf0.js";import"./Button-981a9381.js";import"./Title-256f7c0a.js";import"./ListItemBase-a71fd372.js";import"./ItemNavigation-a1cb3c20.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-98652d50.js";import"./debounce-9c2fb7dd.js";import"./StandardListItem-d042803f.js";import"./ListItem-5a448e1e.js";import"./RadioButton-bb0fefa8.js";import"./CheckBox-5c169af0.js";import"./accept-39710bd2.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-dcb3f847.js";import"./Avatar-f74ae24a.js";import"./employee-dc85b60f.js";import"./ResponsivePopoverCommon.css-c2b66233.js";import"./ValueStateMessage.css-88180c67.js";import"./ValueState-ab6838cc.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-e54d2f1d.js";import"./ThemingParameters-f4b4144e.js";import"./chunk-G4YQS2SV-420b4ede.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-62607488.js";import"./index-7ac1a15f.js";import"./Import-2bb789f5.js";import"./TableOfContent-eb3544ea.js";import"./index-56e3fc82.js";import"./index-dfb05037.js";import"./Footer.module-c4f3b823.js";import"./index-0b25d04c.js";const I=`## Usage

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
//# sourceMappingURL=BusyIndicator.stories-c4fc66ea.js.map
