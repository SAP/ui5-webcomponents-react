import{M as b,C as f,j as g,a as n}from"./index-a5b0d48e.js";import{B as e,a as t,b as c,c as l}from"./index-174f0cdb.js";import{b as B}from"./DomRefTable.module-662c659b.js";import{D as S}from"./DocsHeader-ff0a79df.js";import{F as y}from"./Footer-37bd1cd1.js";import{a as s,j as r,F as I}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{S as D}from"./SubcomponentsSection-6138f2fc.js";import{u as d}from"./index-4fb8b842.js";import"./iframe-2f6fe1a8.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./i18n-defaults-da1c0a37.js";import"./ItemNavigation-9e1aa83a.js";import"./Keys-3acbae73.js";import"./Integer-d9976c13.js";import"./ResizeHandler-1fa8a094.js";import"./Link-d055a21d.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./Label-040efebd.js";import"./Device-208919c6.js";import"./class-map-5d8e4b2b.js";import"./ResponsivePopover-47d62b78.js";import"./PopupsCommon.css-c7334d05.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./Popover-e2d049c9.js";import"./Dialog-fb686138.js";import"./ValueState-2c5e5904.js";import"./Icon-a9b28f0c.js";import"./Icons-7b82f601.js";import"./information-0837f136.js";import"./i18n-defaults-7dff8409.js";import"./Button-8d5b0cb6.js";import"./Title-b986a4bd.js";import"./decline-5eb6d937.js";import"./ListItemBase-ba2a9558.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-ed921760.js";import"./StandardListItem-d8c56411.js";import"./ListItem-335dc456.js";import"./RadioButton-b891eec4.js";import"./CheckBox-31c3e074.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Avatar-1386d002.js";import"./employee-98ce1b38.js";import"./chunk-PCJTTTQV-06356942.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-14f444b1.js";import"./index-1d945bd3.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-f72dcf1d.js";import"./TableOfContent-0cf236d1.js";import"./index-e369c219.js";import"./index-fdd37487.js";import"./Footer.module-f90cad7d.js";import"./index-31d0fe2b.js";const w=`## Keyboard Handling

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
}`}};const i={title:"Layouts & Floorplans / Breadcrumbs",component:e,subcomponents:{BreadcrumbsItem:t},args:{design:c.Standard,separatorStyle:l.Slash},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:E};const ot=["defaultStory"];export{ot as __namedExportsOrder,i as default,u as defaultStory};
//# sourceMappingURL=Breadcrumbs.stories-c8bb02e4.js.map
