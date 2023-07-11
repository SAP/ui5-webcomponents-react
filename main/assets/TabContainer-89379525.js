import{j as t}from"./jsx-runtime-5926aa06.js";import{C as l,A as s}from"./DomRefTable.module-6b8e0108.js";import{D as d}from"./DocsHeader-7d3aaabf.js";import{F as h}from"./Footer-5c7abe32.js";import"./index-ebeaab24.js";import{D as b}from"./DomRefTable-3da6496b.js";import{S as c}from"./SubcomponentsSection-6138f2fc.js";import{M as u,C as r,a as o}from"./chunk-PCJTTTQV-90f06c70.js";import{a as x}from"./index-afbde000.js";import{C as f,D as p,W as T,a as j,T as g}from"./TabContainer.stories-9c43d4aa.js";import{u as m}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-b08e8e30.js";import"./iframe-71b0b41d.js";import"../sb-preview/runtime.js";import"./UI5Element-78be0f3d.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d4224c1c.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-70a9e5b9.js";import"./Icons-26e87c01.js";import"./decline-09ce3004.js";import"./i18n-defaults-80781f7e.js";import"./information-872f55da.js";import"./class-map-18f572ce.js";import"./Button-427cd4bb.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-f002f496.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-3e959ad1.js";import"./index-ed20777b.js";import"./Integer-f7f172c9.js";import"./index-04838996.js";import"./Avatar-e1c9d8f0.js";import"./ResizeHandler-15c77712.js";import"./employee-1c1d2fc1.js";import"./index-a6134fec.js";import"./index-fb9b6dbb.js";import"./Link-04c4a519.js";import"./WrappingType-b81e595a.js";import"./index-2c77de22.js";import"./TableOfContent-3322118d.js";import"./index-ccdfff38.js";import"./Label-263c93f2.js";import"./index-9c09ad76.js";import"./index-2409efab.js";import"./index-5f323cf5.js";import"./Popover-a03c4c52.js";import"./PopupsCommon.css-1eb36bcf.js";import"./FocusableElements-53839075.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-119d6915.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./ListItem-6bbd1cb0.js";import"./ListItemBase-d5e2b9fa.js";import"./ItemNavigation-e8f3ce94.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-4ada5b66.js";import"./RadioButton-1b157057.js";import"./ValueState-2c5e5904.js";import"./CheckBox-13a91d81.js";import"./accept-18821b02.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ccb981dd.js";import"./CustomListItem-c77a30c8.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-30bec6df.js";import"./slim-arrow-up-602f2c07.js";import"./slim-arrow-down-59731cbb.js";import"./ResponsivePopover-5ed17489.js";import"./Dialog-35faa92e.js";import"./Title-e1d9d87f.js";import"./ResponsivePopoverCommon.css-f39aca2a.js";import"./add-2a0590e1.js";import"./settings-439530af.js";const S="The `Tab` represents a selectable item inside a `Tabcontainer`. It defines both the item in the tab strip (top part of the `Tabcontainer`) and the content that is presented to the user once the tab is selected\n",w="The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n",C=`## Structure

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
</code></pre> Calling <code>allItems</code> on this TabContainer will return the instances in the following order: <code>[ ui5-tab#First, ui5-tab#Nested, ui5-tab#Second, ui5-tab-separator#sep, ui5-tab#Third ]</code>`}];function le(i={}){const{wrapper:n}=Object.assign({},m(),i.components);return n?t.jsx(n,Object.assign({},i,{children:t.jsx(a,{})})):a();function a(){const e=Object.assign({h2:"h2",h1:"h1",p:"p"},m(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(u,{of:f}),`
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
`,t.jsx(h,{})]})}}export{le as default};
//# sourceMappingURL=TabContainer-89379525.js.map
