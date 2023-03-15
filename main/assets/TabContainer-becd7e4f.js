import{j as t,a as p,F as d}from"./jsx-runtime-670450c2.js";import{C as h,A as s}from"./DomRefTable.module-731ee0d2.js";import{D as c}from"./DocsHeader-ba195ff8.js";import{F as b}from"./Footer-47b89308.js";import"./index-f1f749bf.js";import{D as u}from"./DomRefTable-b2d966ec.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{M as T,C as r,a as e}from"./index-8e2a5d55.js";import{a as S}from"./index-6d7f241f.js";import{C as w,D as m,W as C,a as g,T as D}from"./TabContainer.stories-76846e46.js";import{u as l}from"./index-4fb8b842.js";import"./chunk-PCJTTTQV-871a82fa.js";import"./iframe-98936aba.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-0eaf838d.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./event-97133b94.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-459702a7.js";import"./Keys-3acbae73.js";import"./Button-04bad9a0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-d66b3d5e.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-91c50412.js";import"./TableOfContent-fbecd9fc.js";import"./index-70efae5f.js";import"./Link-6d546ee9.js";import"./WrappingType-b81e595a.js";import"./index-062d18aa.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-c56b59c5.js";import"./Popover-907d427e.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./ListItem-20b1ed77.js";import"./ListItemBase-16737f88.js";import"./ItemNavigation-18222ac6.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-46a9aff5.js";import"./RadioButton-28647d07.js";import"./ValueState-2c5e5904.js";import"./CheckBox-90578acd.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./CustomListItem-d0828748.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-b8fd41f3.js";import"./slim-arrow-up-dc178f0a.js";import"./slim-arrow-down-068fe0af.js";import"./ResponsivePopover-36c83c4d.js";import"./Dialog-644759b8.js";import"./Title-b986a4bd.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./add-6612707a.js";import"./employee-98ce1b38.js";import"./settings-d51ecc1b.js";const v="The `Tab` represents a selectable item inside a `Tabcontainer`. It defines both the item in the tab strip (top part of the `Tabcontainer`) and the content that is presented to the user once the tab is selected\n",x="The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n",y=`## Structure

The \`TabContainer\` can hold two types of entities:

*   \`Tab\` - contains all the information on an item (text and icon)
*   \`TabSeparator\` - used to separate tabs with a line

## Hierarchies

Multiple sub tabs could be placed underneath one main tab. Nesting allows deeper hierarchies with indentations to indicate the level of each nested tab. When a tab has both sub tabs and own content its click area is split to allow the user to display the content or alternatively to expand / collapse the list of sub tabs.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`TabContainer\` exposes the following CSS Shadow Parts:

*   content - Used to style the content of the component

## Keyboard Handling

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\``,F=[{name:"allItems",readonly:"true",visibility:"public",type:"undefined",description:'Returns all slotted tabs and their subTabs in a flattened array. The order of tabs is depth-first. For example, given the following slotted elements: <code> <ui5-tabcontainer> <ui5-tab id="First" text="First"> ... <ui5-tab slot="subTabs" id="Nested" text="Nested">...</ui5-tab> </ui5-tab> <ui5-tab id="Second" text="Second">...</ui5-tab> <ui5-tab-separator id="sep"></ui5-tab-separator> <ui5-tab id="Third" text="Third">...</ui5-tab> </ui5-tabcontainer> </code> Calling <code>allItems</code> on this TabContainer will return the instances in the following order: <code>[ ui5-tab#First, ui5-tab#Nested, ui5-tab#Second, ui5-tab-separator#sep, ui5-tab#Third ]</code>'}];function To(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?t(n,Object.assign({},i,{children:t(a,{})})):a();function a(){const o=Object.assign({h2:"h2",h1:"h1",p:"p"},l(),i.components);return p(d,{children:[t(T,{of:w}),`
`,t(c,{}),`
`,t("br",{}),`
`,t(o.h2,{children:"Example"}),`
`,t(r,{of:m}),`
`,t(o.h2,{children:"Properties"}),`
`,t(h,{of:m}),`
`,t(e,{children:y}),`
`,t(u,{rows:F}),`
`,t(o.h1,{children:"More Examples"}),`
`,t(o.h2,{children:"TabContainer with TabSeparator"}),`
`,p(o.p,{children:["The ",t("code",{children:"TabSeparator"})," represents a vertical line to separate tabs inside a ",t("code",{children:"TabContainer"})]}),`
`,t(r,{of:C}),`
`,t(o.h2,{children:"TabContainer with nested Tabs"}),`
`,t(r,{of:g}),`
`,t(e,{children:f}),`
`,t(o.h2,{children:"Tab"}),`
`,t(e,{children:v}),`
`,t(s,{of:S}),`
`,t(o.h2,{children:"TabSeparator"}),`
`,t(e,{children:x}),`
`,t(s,{of:D}),`
`,t(b,{})]})}}export{To as default};
//# sourceMappingURL=TabContainer-becd7e4f.js.map
