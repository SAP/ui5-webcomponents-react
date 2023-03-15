import{j as t,a as d,F as l}from"./jsx-runtime-670450c2.js";import{C as c,A as r}from"./DomRefTable.module-31af32a5.js";import{D as h}from"./DocsHeader-d8de7dbe.js";import{F as u}from"./Footer-83a8b958.js";import"./index-f1f749bf.js";import{M as f,C as n,a as i}from"./chunk-PCJTTTQV-4214c194.js";import{S}from"./SubcomponentsSection-6138f2fc.js";import"./employee-1bc983a2.js";import{C as g}from"./index-74f17da6.js";import{G as y}from"./index-0937416e.js";import{S as L}from"./index-3e111c4f.js";import{C as w,D as p,a as C,G as D}from"./List.stories-51aca710.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-a21e505a.js";import"./iframe-7855b054.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-8cd1aada.js";import"./TableOfContent-b3b9e751.js";import"./index-142fc752.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-0c37a587.js";import"./Label-ccc234fe.js";import"./index-96c5f47c.js";import"./index-4ba71e2d.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./CustomListItem-2ad24503.js";import"./ListItem-83c0fb9e.js";import"./ListItemBase-a0bc6999.js";import"./ItemNavigation-8e291cfa.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-15ff681f.js";import"./RadioButton-a8c23c83.js";import"./ValueState-2c5e5904.js";import"./CheckBox-80dd6e5f.js";import"./accept-d8c33d70.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-52a56681.js";import"./GroupHeaderListItem-d4ea7e0d.js";import"./StandardListItem-ac3f40c5.js";import"./Avatar-7e1d4e21.js";import"./ValueState-ab6838cc.js";import"./index-3ab9904f.js";import"./ProgressIndicator-6f4076d1.js";import"./AnimationMode-b8fd41f3.js";import"./index-c4ba205c.js";const I="A component to be used as custom list item within the `List` the same way as the standard `StandardListItem`. The component accepts arbitrary HTML content to allow full customization\n",b="The `GroupHeaderListItem` is a special list item, used only to separate other list items into logical groups\n",v="The `StandardListItem` represents the simplest type of item for a `StandardListItemst`. This is a list item, providing the most common use cases such as `text`, `image` and `icon`.\n### CSS Shadow Parts\n\nCSS Shadow Parts allow developers to style elements inside the Shadow DOM.  \nThe `StandardListItem` exposes the following CSS Shadow Parts:\n\n*   title - Used to style the title of the list item\n*   description - Used to style the description of the list item\n*   additional-text - Used to style the additionalText of the list item\n*   icon - Used to style the icon of the list item",T=`## Keyboard Handling

### Basic Navigation

The \`List\` provides advanced keyboard handling. When a list is focused the user can use the following keyboard shortcuts in order to perform a navigation:  

*   \\[UP/DOWN\\] - Navigates up and down the items
*   \\[HOME\\] - Navigates to first item
*   \\[END\\] - Navigates to the last item

The user can use the following keyboard shortcuts to perform actions (such as select, delete), when the \`mode\` property is in use:

*   \\[SPACE\\] - Select an item (if \`type\` is 'Active') when \`mode\` is selection
*   \\[DELETE\\] - Delete an item if \`mode\` property is \`Delete\`

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\``;function ao(e={}){const{wrapper:s}=Object.assign({},a(),e.components);return s?t(s,Object.assign({},e,{children:t(m,{})})):m();function m(){const o=Object.assign({h2:"h2"},a(),e.components);return d(l,{children:[t(f,{of:w}),`
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
`,t(u,{})]})}}export{ao as default};
//# sourceMappingURL=List-e86b8b83.js.map
