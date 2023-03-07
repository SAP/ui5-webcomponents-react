import{M as b,C as f,j as g,a as n}from"./index-fb9c0e91.js";import{B as e,a as t,b as c,c as l}from"./index-cd9f03bb.js";import{A as B}from"./DomRefTable.module-075bf2d5.js";import{D as S}from"./DocsHeader-7989e4fc.js";import{F as y}from"./Footer-69a42fd0.js";import{a as s,j as r,F as I}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{S as D}from"./SubcomponentsSection-6138f2fc.js";import{u as d}from"./index-4fb8b842.js";import"./iframe-e103fb9d.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./UI5Element-4f8793c9.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./MarkedEvents-8627ed01.js";import"./ItemNavigation-4c4dc0f2.js";import"./Keys-3acbae73.js";import"./Integer-d9976c13.js";import"./ResizeHandler-1dae7180.js";import"./index-4bf67b0b.js";import"./WrappingType-b81e595a.js";import"./Label-27ec0466.js";import"./Device-208919c6.js";import"./class-map-5d8e4b2b.js";import"./ResponsivePopover-1e5d6f7e.js";import"./PopupsCommon.css-2f3b9f5d.js";import"./FocusableElements-c64a83a7.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./Popover-84c1d886.js";import"./Dialog-846d1fb6.js";import"./ValueState-2c5e5904.js";import"./Button-8fbc19ea.js";import"./Icons-ad6f0d24.js";import"./decline-e7438d7e.js";import"./Title-4c33d979.js";import"./ListItemBase-c15c02a7.js";import"./TabbableElements-c3d95d8d.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-fb622f11.js";import"./StandardListItem-089df25b.js";import"./ListItem-efa04b9c.js";import"./RadioButton-5efc72cd.js";import"./CheckBox-d7672a83.js";import"./accept-a7f2d970.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-fdb534c0.js";import"./Avatar-6d4f44b6.js";import"./employee-fe809d4d.js";import"./chunk-G4YQS2SV-4c374140.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./index-b0ce239d.js";import"./index-da505e61.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-97ec0f64.js";import"./TableOfContent-1ecd06be.js";import"./index-3904d700.js";import"./Footer.module-c4f3b823.js";import"./index-aba46643.js";const w=`## Keyboard Handling

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
}`}};const i={title:"Layouts & Floorplans / Breadcrumbs",component:e,subcomponents:{BreadcrumbsItem:t},args:{design:c.Standard,separatorStyle:l.Slash},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:E};const Qr=["defaultStory"];export{Qr as __namedExportsOrder,i as default,u as defaultStory};
//# sourceMappingURL=Breadcrumbs.stories-d236ab87.js.map
