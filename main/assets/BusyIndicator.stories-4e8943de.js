import{M as y,C as a,j as d,a as g}from"./index-49618b97.js";import{B as r}from"./index-83c12fbc.js";import{a as c}from"./BusyIndicator-46a9aff5.js";import{S as l}from"./index-49f1a766.js";import{T as b}from"./index-2eaff221.js";import{b as f}from"./DomRefTable.module-2da7eb0a.js";import{D as v}from"./DocsHeader-3ff410d3.js";import{F as S}from"./Footer-83036597.js";import{j as t,a as k,F as w}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u}from"./index-4fb8b842.js";import"./iframe-a99cb4e5.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./UI5Element-427ec721.js";import"./Keys-3acbae73.js";import"./Integer-f7f172c9.js";import"./Label-040efebd.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-5d8e4b2b.js";import"./i18n-defaults-d66b3d5e.js";import"./event-97133b94.js";import"./slot-634e3e91.js";import"./InvisibleMessage-4a23efee.js";import"./AriaLabelHelper-43a261ec.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-068fe0af.js";import"./Icons-7b82f601.js";import"./information-50e1ad0f.js";import"./i18n-defaults-80781f7e.js";import"./decline-f2b294b3.js";import"./ListItemBase-16737f88.js";import"./ResizeHandler-1fa8a094.js";import"./ItemNavigation-18222ac6.js";import"./getActiveElement-bcae01ed.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./debounce-9c2fb7dd.js";import"./style-map-77d201d2.js";import"./ResponsivePopover-36c83c4d.js";import"./PopupUtils-a2e37749.js";import"./Popover-907d427e.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./MediaRange-25b98f31.js";import"./Dialog-644759b8.js";import"./Icon-459702a7.js";import"./Button-04bad9a0.js";import"./MarkedEvents-b83081e9.js";import"./Title-b986a4bd.js";import"./StandardListItem-ed465290.js";import"./ListItem-20b1ed77.js";import"./RadioButton-28647d07.js";import"./CheckBox-90578acd.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Avatar-7c89587d.js";import"./employee-98ce1b38.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";import"./ValueState-ab6838cc.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-e54d2f1d.js";import"./ThemingParameters-f4b4144e.js";import"./chunk-PCJTTTQV-f0effd63.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-879476fc.js";import"./index-026b5b0e.js";import"./Import-ab6f8cb5.js";import"./TableOfContent-fe8f4dae.js";import"./index-421a7837.js";import"./Link-6d546ee9.js";import"./index-2a30bde4.js";import"./Footer.module-f90cad7d.js";import"./index-57d61853.js";const I=`## Usage

For the \`BusyIndicator\` you can define the size, the text and whether it is shown or hidden. In order to hide it, use the "active" property.  
  
In order to show busy state over an HTML element, simply nest the HTML element in a \`BusyIndicator\` instance.  
**Note:** Since \`BusyIndicator\` has \`display: inline-block;\` by default and no width of its own, whenever you need to wrap a block-level element, you should set \`display: block\` to the busy indicator as well.

### When to use:

*   The user needs to be able to cancel the operation.
*   Only part of the application or a particular component is affected.

### When not to use:

*   The operation takes less than one second.
*   You need to block the screen and prevent the user from starting another activity.
*   Do not show multiple busy indicators at once.`;function B(e={}){const{wrapper:s}=Object.assign({},u(),e.components);return s?t(s,{...e,children:t(p,{})}):p();function p(){const o=Object.assign({h2:"h2",h1:"h1",p:"p"},u(),e.components);return k(w,{children:[t(y,{title:"User Feedback / BusyIndicator",component:r,argTypes:{children:{control:{disable:!0}}},args:{size:c.Medium,delay:1e3,active:!0}}),`
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
}`}};const m=e=>t(r,{...e,children:t(l,{})});m.storyName="With children";m.args={active:!0};m.parameters={storySource:{source:`args => {
  return <BusyIndicator {...args}>
          <Select />
        </BusyIndicator>;
}`}};const i={title:"User Feedback / BusyIndicator",component:r,args:{size:c.Medium,delay:1e3,active:!0},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withChildren"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:B};const de=["defaultStory","withChildren"];export{de as __namedExportsOrder,i as default,h as defaultStory,m as withChildren};
//# sourceMappingURL=BusyIndicator.stories-4e8943de.js.map
