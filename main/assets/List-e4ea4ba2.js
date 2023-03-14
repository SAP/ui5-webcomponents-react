import{j as t,a as d,F as l}from"./jsx-runtime-670450c2.js";import{C as c,A as r}from"./DomRefTable.module-3a010e1c.js";import{D as h}from"./DocsHeader-94a5e897.js";import{F as u}from"./Footer-b60b5166.js";import"./index-f1f749bf.js";import{M as f,C as n,a as i}from"./index-023c5086.js";import{S}from"./SubcomponentsSection-6138f2fc.js";import"./employee-98ce1b38.js";import{C as g}from"./index-0ea68caa.js";import{G as y}from"./index-dd883f9f.js";import{S as L}from"./index-4cdf0305.js";import{C as w,D as p,a as C,G as D}from"./List.stories-fa5076d9.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-PCJTTTQV-7a0b3678.js";import"./iframe-e0e4877e.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-d86028b0.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./event-97133b94.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-459702a7.js";import"./Keys-3acbae73.js";import"./Button-876771f0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-6bc67b6a.js";import"./index-57eaac56.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-f15ae098.js";import"./TableOfContent-c9cdbd2b.js";import"./index-cf25ee95.js";import"./Link-687260e5.js";import"./WrappingType-b81e595a.js";import"./index-3f8f5b98.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-084bb0f0.js";import"./Popover-54e30804.js";import"./Integer-f7f172c9.js";import"./PopupsCommon.css-d3649668.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./CustomListItem-cc520c2e.js";import"./ListItem-b3713808.js";import"./ListItemBase-4ef398c9.js";import"./ItemNavigation-18222ac6.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-69e83aec.js";import"./RadioButton-6085072b.js";import"./ValueState-2c5e5904.js";import"./CheckBox-2598fb75.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./GroupHeaderListItem-dfed2d1b.js";import"./StandardListItem-a72572c6.js";import"./Avatar-fa3b7d1c.js";import"./ValueState-ab6838cc.js";import"./index-c0f207a0.js";import"./ProgressIndicator-14a91e4a.js";import"./AnimationMode-b8fd41f3.js";import"./index-e8b53e9a.js";const I="A component to be used as custom list item within the `List` the same way as the standard `StandardListItem`. The component accepts arbitrary HTML content to allow full customization\n",b="The `GroupHeaderListItem` is a special list item, used only to separate other list items into logical groups\n",v="The `StandardListItem` represents the simplest type of item for a `StandardListItemst`. This is a list item, providing the most common use cases such as `text`, `image` and `icon`.\n### CSS Shadow Parts\n\nCSS Shadow Parts allow developers to style elements inside the Shadow DOM.  \nThe `StandardListItem` exposes the following CSS Shadow Parts:\n\n*   title - Used to style the title of the list item\n*   description - Used to style the description of the list item\n*   additional-text - Used to style the additionalText of the list item\n*   icon - Used to style the icon of the list item",T=`## Keyboard Handling

### Basic Navigation

The \`List\` provides advanced keyboard handling. When a list is focused the user can use the following keyboard shortcuts in order to perform a navigation:  

*   \\[UP/DOWN\\] - Navigates up and down the items
*   \\[HOME\\] - Navigates to first item
*   \\[END\\] - Navigates to the last item

The user can use the following keyboard shortcuts to perform actions (such as select, delete), when the \`mode\` property is in use:

*   \\[SPACE\\] - Select an item (if \`type\` is 'Active') when \`mode\` is selection
*   \\[DELETE\\] - Delete an item if \`mode\` property is \`Delete\`

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\``;function uo(e={}){const{wrapper:m}=Object.assign({},a(),e.components);return m?t(m,Object.assign({},e,{children:t(s,{})})):s();function s(){const o=Object.assign({h2:"h2"},a(),e.components);return d(l,{children:[t(f,{of:w}),`
`,t(h,{}),`
`,t("br",{}),`
`,t(o.h2,{children:"Example"}),`
`,t(n,{of:p}),`
`,t(o.h2,{children:"Properties"}),`
`,t(c,{of:p}),`
`,t(i,{children:T}),`
`,t("br",{}),`
`,t(i,{children:S}),`
`,t(o.h2,{children:"StandardListItem"}),`
`,t(r,{of:L}),`
`,t(i,{children:v}),`
`,t(o.h2,{children:"CustomListItem"}),`
`,t(n,{of:C}),`
`,t(r,{of:g}),`
`,t(i,{children:I}),`
`,t(o.h2,{children:"GroupHeaderListItem"}),`
`,t(n,{of:D}),`
`,t(r,{of:y}),`
`,t(i,{children:b}),`
`,t(u,{})]})}}export{uo as default};
//# sourceMappingURL=List-e4ea4ba2.js.map
