import{M as b,C as f,i as g,a as n}from"./index-a8c6d1d6.js";import{B as e,a as t,b as c,c as l}from"./index-c6282869.js";import{A as B}from"./DomRefTable.module-746f3f04.js";import{D as S}from"./DocsHeader-15a8236a.js";import{F as y}from"./Footer-ebebda66.js";import{a as s,j as r,F as I}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{S as D}from"./SubcomponentsSection-6138f2fc.js";import{u as d}from"./index-4fb8b842.js";import"./iframe-a2c24f12.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-0e37da6f.js";import"./ItemNavigation-4b509b49.js";import"./Keys-50a1cb5a.js";import"./getActiveElement-bcae01ed.js";import"./Integer-8010a7ae.js";import"./class-map-abcca105.js";import"./FocusableElements-5a723910.js";import"./ResizeHandler-c56abc92.js";import"./MediaRange-25b98f31.js";import"./style-map-7b3eb5df.js";import"./index-46d6c505.js";import"./WrappingType-b81e595a.js";import"./Label-6707bdfc.js";import"./ResponsivePopover-bf5faf8e.js";import"./Popover-97ca01c1.js";import"./Dialog-859ab2f5.js";import"./ValueState-2c5e5904.js";import"./Button-2e5054c2.js";import"./Icons-5bcf1e3f.js";import"./decline-ff534003.js";import"./Title-18f6d5a1.js";import"./ListItemBase-ef18a748.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-21c27087.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-59c61392.js";import"./StandardListItem-cb5818d4.js";import"./ListItem-9550e3d3.js";import"./RadioButton-d0c7abe6.js";import"./CheckBox-2890456e.js";import"./accept-70258933.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a1b07349.js";import"./Avatar-b22f5314.js";import"./employee-10cd14ab.js";import"./chunk-G4YQS2SV-7a95a674.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./index-7cbae288.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-f33ae237.js";import"./TableOfContent-b95d870a.js";import"./index-011b3eaa.js";import"./Media-6b270b80.js";import"./index-e5ea7df7.js";const w=`## Keyboard Handling

The \`Breadcrumbs\` provides advanced keyboard handling.  

*   \\[F4, ALT+UP, ALT+DOWN, SPACE, ENTER\\] - If the dropdown arrow is focused - opens/closes the drop-down.
*   \\[SPACE, ENTER\\] - Activates the focused item and triggers the \`onItemClick\` event.
*   \\[ESC\\] - Closes the drop-down.
*   \\[LEFT\\] - If the drop-down is closed - navigates one item to the left.
*   \\[RIGHT\\] - If the drop-down is closed - navigates one item to the right.
*   \\[UP\\] - If the drop-down is open - moves focus to the next item.
*   \\[DOWN\\] - If the drop-down is open - moves focus to the previous item.
*   \\[HOME\\] - Navigates to the first item.
*   \\[END\\] - Navigates to the last item.`,v="The `BreadcrumbsItem` component defines the content of an item in `Breadcrumbs`\n";function E(o={}){const{wrapper:a}=Object.assign({},d(),o.components);return a?r(a,{...o,children:r(p,{})}):p();function p(){const m=Object.assign({h2:"h2"},d(),o.components);return s(I,{children:[r(b,{title:"Layouts & Floorplans / Breadcrumbs",component:e,subcomponents:{BreadcrumbsItem:t},argTypes:{children:{control:{disable:!0}}},args:{design:c.Standard,separatorStyle:l.Slash}}),`
`,r(S,{since:"0.18.0"}),`
`,r("br",{}),`
`,r(m.h2,{children:"Example"}),`
`,r(f,{children:r(g,{name:"Default",children:h=>s(e,{...h,children:[r(t,{children:"Products"}),r(t,{children:"Hardware"}),r(t,{children:"Notebooks"})]})})}),`
`,r(m.h2,{children:"Properties"}),`
`,r(B,{story:"Default"}),`
`,r(n,{children:w}),`
`,r(n,{children:D}),`
`,r(m.h2,{children:"BreadcrumbsItem"}),`
`,r(n,{children:v}),`
`,r(y,{})]})}}const u=o=>s(e,{...o,children:[r(t,{children:"Products"}),r(t,{children:"Hardware"}),r(t,{children:"Notebooks"})]});u.storyName="Default";u.parameters={storySource:{source:`args => {
  return <Breadcrumbs {...args}>
          <BreadcrumbsItem>Products</BreadcrumbsItem>
          <BreadcrumbsItem>Hardware</BreadcrumbsItem>
          <BreadcrumbsItem>Notebooks</BreadcrumbsItem>
        </Breadcrumbs>;
}`}};const i={title:"Layouts & Floorplans / Breadcrumbs",component:e,subcomponents:{BreadcrumbsItem:t},args:{design:c.Standard,separatorStyle:l.Slash},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:E};const Jr=["defaultStory"];export{Jr as __namedExportsOrder,i as default,u as defaultStory};
//# sourceMappingURL=Breadcrumbs.stories-bbbecce2.js.map
