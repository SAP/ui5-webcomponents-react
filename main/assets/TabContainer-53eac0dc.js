import{j as t}from"./jsx-runtime-5926aa06.js";import{C as l,A as s}from"./DomRefTable.module-c49e277b.js";import{D as d}from"./DocsHeader-3ebfe41b.js";import{F as h}from"./Footer-2bb98770.js";import"./index-ebeaab24.js";import{D as b}from"./DomRefTable-71c619bc.js";import{S as c}from"./SubcomponentsSection-6138f2fc.js";import{M as u,C as r,a as o}from"./chunk-PCJTTTQV-d745d1d0.js";import{a as x}from"./index-ce18a560.js";import{C as f,D as p,W as T,a as j,T as g}from"./TabContainer.stories-8c1448ad.js";import{u as m}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-af4c64e5.js";import"./iframe-c9a3f230.js";import"../sb-preview/runtime.js";import"./UI5Element-74c2a827.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-a2964213.js";import"./Icons-94b91597.js";import"./decline-c0e7c267.js";import"./i18n-defaults-80781f7e.js";import"./information-972c65ef.js";import"./class-map-519e9c6d.js";import"./Button-1eb48b4c.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-8330eb1d.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./Import-3e5f034e.js";import"./TableOfContent-45be38a6.js";import"./index-1c1085f5.js";import"./Link-e0af46e3.js";import"./WrappingType-b81e595a.js";import"./index-e163b211.js";import"./Label-fcb0092c.js";import"./index-9c09ad76.js";import"./index-57035e4f.js";import"./Popover-2de3a0ad.js";import"./Integer-f7f172c9.js";import"./PopupUtils-db5b49db.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-c4ad8573.js";import"./FocusableElements-20734289.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-362c4d65.js";import"./ResizeHandler-0f082c48.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./ListItem-4183041f.js";import"./ListItemBase-c271f906.js";import"./ItemNavigation-e9bbb1b9.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-990cb1ca.js";import"./RadioButton-9ea605bf.js";import"./ValueState-2c5e5904.js";import"./CheckBox-5944a432.js";import"./accept-4bb68de0.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-b979090e.js";import"./CustomListItem-d39f6559.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-1db0db01.js";import"./slim-arrow-up-71df2bff.js";import"./slim-arrow-down-4f848b87.js";import"./ResponsivePopover-d37f7fd3.js";import"./Dialog-07218916.js";import"./Title-85313bbf.js";import"./ResponsivePopoverCommon.css-5b3cf680.js";import"./add-31d4a05c.js";import"./employee-78b984a5.js";import"./settings-5fbbbb3c.js";const S="The `Tab` represents a selectable item inside a `Tabcontainer`. It defines both the item in the tab strip (top part of the `Tabcontainer`) and the content that is presented to the user once the tab is selected\n",w="The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n",C=`## Structure

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
</code></pre> Calling <code>allItems</code> on this TabContainer will return the instances in the following order: <code>[ ui5-tab#First, ui5-tab#Nested, ui5-tab#Second, ui5-tab-separator#sep, ui5-tab#Third ]</code>`}];function se(i={}){const{wrapper:n}=Object.assign({},m(),i.components);return n?t.jsx(n,Object.assign({},i,{children:t.jsx(a,{})})):a();function a(){const e=Object.assign({h2:"h2",h1:"h1",p:"p"},m(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(u,{of:f}),`
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
`,t.jsx(h,{})]})}}export{se as default};
//# sourceMappingURL=TabContainer-53eac0dc.js.map
