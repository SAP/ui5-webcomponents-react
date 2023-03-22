import{M as y,C as a,f as d,a as g}from"./chunk-PCJTTTQV-e6a543e9.js";import{B as r}from"./index-4e842786.js";import{a as c}from"./BusyIndicator-15ff681f.js";import{S as l}from"./index-ac2f6095.js";import{T as b}from"./index-2eaff221.js";import{d as f}from"./DomRefTable.module-556ff651.js";import{D as v}from"./DocsHeader-1101ef8e.js";import{F as S}from"./Footer-774c654f.js";import{j as t,a as k,F as w}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u}from"./index-4fb8b842.js";import"./iframe-1ce70433.js";import"../sb-preview/runtime.mjs";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./UI5Element-427ec721.js";import"./Icons-fe6e657a.js";import"./Integer-f7f172c9.js";import"./Label-ccc234fe.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-95320e87.js";import"./i18n-defaults-254d6b69.js";import"./Icon-7987c836.js";import"./slot-634e3e91.js";import"./InvisibleMessage-4a23efee.js";import"./AriaLabelHelper-43a261ec.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-cfb4a4bd.js";import"./information-b6c8ed8e.js";import"./i18n-defaults-80781f7e.js";import"./decline-6bd98a2e.js";import"./ListItemBase-a0bc6999.js";import"./ResizeHandler-1fa8a094.js";import"./ItemNavigation-8e291cfa.js";import"./getActiveElement-bcae01ed.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./debounce-9c2fb7dd.js";import"./style-map-cae0a379.js";import"./ResponsivePopover-fcaf2b05.js";import"./PopupUtils-a2e37749.js";import"./Popover-224d761a.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./MediaRange-25b98f31.js";import"./Dialog-43ec4fb1.js";import"./Button-bc3a11a1.js";import"./MarkedEvents-b83081e9.js";import"./Title-129aeb28.js";import"./StandardListItem-ac3f40c5.js";import"./ListItem-83c0fb9e.js";import"./RadioButton-a8c23c83.js";import"./CheckBox-80dd6e5f.js";import"./accept-d8c33d70.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-52a56681.js";import"./Avatar-7e1d4e21.js";import"./employee-1bc983a2.js";import"./ResponsivePopoverCommon.css-ca4e9b7c.js";import"./ValueStateMessage.css-f5f87de3.js";import"./ValueState-ab6838cc.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-e54d2f1d.js";import"./ThemingParameters-f4b4144e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-f84dcbb2.js";import"./index-8ba7ce6e.js";import"./Import-08b036ae.js";import"./TableOfContent-aa745bff.js";import"./index-4e31e0a7.js";import"./Link-018547e8.js";import"./index-814025da.js";import"./index-efe8c2c2.js";const I=`## Usage

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
}`}};const i={title:"User Feedback / BusyIndicator",component:r,args:{size:c.Medium,delay:1e3,active:!0},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withChildren"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:B};const ne=["defaultStory","withChildren"];export{ne as __namedExportsOrder,i as default,h as defaultStory,s as withChildren};
//# sourceMappingURL=BusyIndicator.stories-d83a3879.js.map
