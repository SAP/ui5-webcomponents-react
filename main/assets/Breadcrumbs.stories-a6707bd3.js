import{M as b,C as f,j as g,a as n}from"./index-117e3f9c.js";import{B as e,a as t,b as c,c as l}from"./index-9ed41d49.js";import{b as B}from"./DomRefTable.module-58dc5d7e.js";import{D as S}from"./DocsHeader-97266e2a.js";import{F as y}from"./Footer-0efecb3e.js";import{a as s,j as r,F as I}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{S as D}from"./SubcomponentsSection-6138f2fc.js";import{u as d}from"./index-4fb8b842.js";import"./iframe-ed18fab5.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./i18n-defaults-ffd92f69.js";import"./ItemNavigation-9e1aa83a.js";import"./Keys-3acbae73.js";import"./Integer-d9976c13.js";import"./ResizeHandler-1fa8a094.js";import"./index-2710f8e9.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./Label-040efebd.js";import"./Device-208919c6.js";import"./class-map-5d8e4b2b.js";import"./ResponsivePopover-cba9fa27.js";import"./PopupsCommon.css-72d38d0e.js";import"./FocusableElements-c2f39514.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./Popover-93eeebac.js";import"./Dialog-e1fca8c6.js";import"./ValueState-2c5e5904.js";import"./Icon-ce854b74.js";import"./Icons-7b82f601.js";import"./decline-66da1fc6.js";import"./i18n-defaults-8c9b7f08.js";import"./Button-b2f5d653.js";import"./Title-b986a4bd.js";import"./ListItemBase-df9fe507.js";import"./TabbableElements-0285a530.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-aae87d2c.js";import"./StandardListItem-609b2e7b.js";import"./ListItem-8c7f9496.js";import"./RadioButton-9df6ded1.js";import"./CheckBox-4b130a30.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Avatar-88715af2.js";import"./employee-98ce1b38.js";import"./chunk-PCJTTTQV-d422e564.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-200bfcfb.js";import"./index-5cbed584.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-97bae1cf.js";import"./TableOfContent-18edc8a9.js";import"./index-7915e841.js";import"./Footer.module-c4f3b823.js";import"./index-2eb7b545.js";const w=`## Keyboard Handling

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
}`}};const i={title:"Layouts & Floorplans / Breadcrumbs",component:e,subcomponents:{BreadcrumbsItem:t},args:{design:c.Standard,separatorStyle:l.Slash},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:E};const Zr=["defaultStory"];export{Zr as __namedExportsOrder,i as default,u as defaultStory};
//# sourceMappingURL=Breadcrumbs.stories-a6707bd3.js.map
