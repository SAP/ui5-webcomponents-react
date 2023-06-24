import{j as t}from"./jsx-runtime-5926aa06.js";import{C as l,A as s}from"./DomRefTable.module-4f9e4faf.js";import{D as d}from"./DocsHeader-42326078.js";import{F as h}from"./Footer-dabe566f.js";import"./index-ebeaab24.js";import{D as b}from"./DomRefTable-bfbd3f5f.js";import{S as c}from"./SubcomponentsSection-6138f2fc.js";import{M as u,C as r,a as o}from"./chunk-PCJTTTQV-cb4379bf.js";import{a as x}from"./index-ceb7054b.js";import{C as f,D as p,W as T,a as j,T as g}from"./TabContainer.stories-e0526560.js";import{u as m}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-8635545b.js";import"./iframe-711f3420.js";import"../sb-preview/runtime.js";import"./UI5Element-978c7ec7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-87626f33.js";import"./Icons-24533df9.js";import"./decline-2dc3f691.js";import"./i18n-defaults-80781f7e.js";import"./information-573ff8e0.js";import"./class-map-6a9bd920.js";import"./Button-c3cdbc47.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-ac1c9dde.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-0421cb7d.js";import"./index-6aa79eaa.js";import"./Integer-f7f172c9.js";import"./index-b80ef406.js";import"./Avatar-02045306.js";import"./ResizeHandler-d96d99c4.js";import"./employee-397ee2c5.js";import"./index-16a8de3e.js";import"./index-c1bc7f78.js";import"./Link-a59da54b.js";import"./WrappingType-b81e595a.js";import"./index-b9e92427.js";import"./TableOfContent-b93fcedf.js";import"./index-78d4aaa1.js";import"./Label-3a4ee32a.js";import"./index-9c09ad76.js";import"./index-6279d381.js";import"./index-9aa9f707.js";import"./Popover-24cfcc49.js";import"./PopupUtils-7b496d9b.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-aca8c783.js";import"./FocusableElements-ba36fca8.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./ListItem-3c6228ec.js";import"./ListItemBase-81a01599.js";import"./ItemNavigation-e6c8f7b0.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-34850997.js";import"./RadioButton-3919451e.js";import"./ValueState-2c5e5904.js";import"./CheckBox-81e7fb8c.js";import"./accept-23bea3d0.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ac42c02c.js";import"./CustomListItem-848b1a05.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-61c85a1c.js";import"./slim-arrow-up-523acdc9.js";import"./slim-arrow-down-a39cbb98.js";import"./ResponsivePopover-9e38f9a3.js";import"./Dialog-b60b0d62.js";import"./Title-b7551974.js";import"./ResponsivePopoverCommon.css-f329a859.js";import"./add-7d8c3215.js";import"./settings-d7274916.js";const S="The `Tab` represents a selectable item inside a `Tabcontainer`. It defines both the item in the tab strip (top part of the `Tabcontainer`) and the content that is presented to the user once the tab is selected\n",w="The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n",C=`## Structure

The \`TabContainer\` can hold two types of entities:

- \`Tab\` - contains all the information on an item (text and icon)
- \`TabSeparator\` - used to separate tabs with a line

## Hierarchies

Multiple sub tabs could be placed underneath one main tab. Nesting allows deeper hierarchies with indentations to indicate the level of each nested tab. When a tab has both sub tabs and own content its click area is split to allow the user to display the content or alternatively to expand / collapse the list of sub tabs.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`TabContainer\` exposes the following CSS Shadow Parts:

- content - Used to style the content of the component

## Keyboard Handling

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`
`,D=[{name:"allItems",readonly:"true",visibility:"public",type:"undefined",description:`Returns all slotted tabs and their subTabs in a flattened array. The order of tabs is depth-first. For example, given the following slotted elements: <pre><code>
	&lt;ui5-tabcontainer&gt;
		&lt;ui5-tab id="First" text="First"&gt;
			...
			&lt;ui5-tab slot="subTabs" id="Nested" text="Nested"&gt;...&lt;/ui5-tab&gt;
		&lt;/ui5-tab&gt;
		&lt;ui5-tab id="Second" text="Second"&gt;...&lt;/ui5-tab&gt;
		&lt;ui5-tab-separator id="sep"&gt;&lt;/ui5-tab-separator&gt;
		&lt;ui5-tab id="Third" text="Third"&gt;...&lt;/ui5-tab&gt;
	&lt;/ui5-tabcontainer&gt;
</code></pre> Calling <code>allItems</code> on this TabContainer will return the instances in the following order: <code>[ ui5-tab#First, ui5-tab#Nested, ui5-tab#Second, ui5-tab-separator#sep, ui5-tab#Third ]</code>`}];function de(i={}){const{wrapper:n}=Object.assign({},m(),i.components);return n?t.jsx(n,Object.assign({},i,{children:t.jsx(a,{})})):a();function a(){const e=Object.assign({h2:"h2",h1:"h1",p:"p"},m(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(u,{of:f}),`
`,t.jsx(d,{}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(r,{of:p}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{of:p}),`
`,t.jsx(o,{children:C}),`
`,t.jsx(b,{rows:D}),`
`,t.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx(e.h2,{id:"tabcontainer-with-tabseparator",children:"TabContainer with TabSeparator"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx("code",{children:"TabSeparator"})," represents a vertical line to separate tabs inside a ",t.jsx("code",{children:"TabContainer"})]}),`
`,t.jsx(r,{of:T}),`
`,t.jsx(e.h2,{id:"tabcontainer-with-nested-tabs",children:"TabContainer with nested Tabs"}),`
`,t.jsx(r,{of:j}),`
`,t.jsx(o,{children:c}),`
`,t.jsx(e.h2,{id:"tab",children:"Tab"}),`
`,t.jsx(o,{children:S}),`
`,t.jsx(s,{of:x}),`
`,t.jsx(e.h2,{id:"tabseparator",children:"TabSeparator"}),`
`,t.jsx(o,{children:w}),`
`,t.jsx(s,{of:g}),`
`,t.jsx(h,{})]})}}export{de as default};
//# sourceMappingURL=TabContainer-4bda3bf0.js.map
