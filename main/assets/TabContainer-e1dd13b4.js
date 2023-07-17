import{j as t}from"./jsx-runtime-5926aa06.js";import{C as l,A as s}from"./DomRefTable.module-352f2393.js";import{D as d}from"./DocsHeader-c4e563ab.js";import{F as b}from"./Footer-26b1bc7a.js";import"./index-ebeaab24.js";import{D as c}from"./DomRefTable-4a5abdfa.js";import{S as h}from"./SubcomponentsSection-6138f2fc.js";import{M as u,C as r,a as o}from"./chunk-PCJTTTQV-4858f6d9.js";import{a as f}from"./index-948aecb1.js";import{C as x,D as p,W as T,a as j,T as g}from"./TabContainer.stories-572cfa86.js";import{u as m}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-f564b7e4.js";import"./iframe-c3106ff6.js";import"../sb-preview/runtime.js";import"./UI5Element-fb9ecf93.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d4224c1c.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-ef594e9f.js";import"./Icons-2c98f222.js";import"./decline-3df8c953.js";import"./i18n-defaults-80781f7e.js";import"./information-451d615b.js";import"./class-map-18f572ce.js";import"./Button-4160b137.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-a58643fd.js";import"./index-d56023c9.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-9af65fbe.js";import"./index-c6923ba7.js";import"./Integer-f7f172c9.js";import"./index-94715c30.js";import"./Avatar-3c16d274.js";import"./ResizeHandler-36560530.js";import"./employee-f2f473ef.js";import"./index-fb5f8025.js";import"./index-53578f5f.js";import"./Link-057b3642.js";import"./WrappingType-b81e595a.js";import"./index-7b456273.js";import"./TableOfContent-cee14427.js";import"./index-58d332cd.js";import"./Label-7f4aa83d.js";import"./index-9c09ad76.js";import"./index-42b96b95.js";import"./index-57bc25c8.js";import"./Popover-510446d9.js";import"./PopupsCommon.css-f7aa7df0.js";import"./FocusableElements-6f0cd02a.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-0e9b1550.js";import"./react-18-95218780.js";import"./mapValues-f5a21168.js";import"./_baseForOwn-8b0cf1d5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-20c8b51e.js";import"./_baseUniq-8051c65b.js";import"./index-356e4a49.js";import"./ListItem-bb2d09ef.js";import"./ListItemBase-32e7e45c.js";import"./ItemNavigation-c74bf7f7.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-80d43f0f.js";import"./RadioButton-75d95420.js";import"./ValueState-2c5e5904.js";import"./CheckBox-c44317b4.js";import"./accept-756ca6cd.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a768cef3.js";import"./CustomListItem-0d38c914.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-2f524303.js";import"./slim-arrow-up-f43b9b11.js";import"./slim-arrow-down-d78fcf2d.js";import"./ResponsivePopover-a7253ba3.js";import"./Dialog-2af89d50.js";import"./Title-1daec987.js";import"./ResponsivePopoverCommon.css-e9e92f0e.js";import"./add-b7b7555f.js";import"./settings-a47cbcbe.js";const w="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `Tab` represents a selectable item inside a `Tabcontainer`. It defines both the item in the tab strip (top part of the `Tabcontainer`) and the content that is presented to the user once the tab is selected\n",S="The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n",C=`## Structure

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
</code></pre> Calling <code>allItems</code> on this TabContainer will return the instances in the following order: <code>[ ui5-tab#First, ui5-tab#Nested, ui5-tab#Second, ui5-tab-separator#sep, ui5-tab#Third ]</code>`}];function le(i={}){const{wrapper:n}=Object.assign({},m(),i.components);return n?t.jsx(n,Object.assign({},i,{children:t.jsx(a,{})})):a();function a(){const e=Object.assign({h2:"h2",h1:"h1",p:"p"},m(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(u,{of:x}),`
`,t.jsx(d,{}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(r,{of:p}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{of:p}),`
`,t.jsx(o,{children:C}),`
`,t.jsx(c,{rows:D}),`
`,t.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx(e.h2,{id:"tabcontainer-with-tabseparator",children:"TabContainer with TabSeparator"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx("code",{children:"TabSeparator"})," represents a vertical line to separate tabs inside a ",t.jsx("code",{children:"TabContainer"})]}),`
`,t.jsx(r,{of:T}),`
`,t.jsx(e.h2,{id:"tabcontainer-with-nested-tabs",children:"TabContainer with nested Tabs"}),`
`,t.jsx(r,{of:j}),`
`,t.jsx(o,{children:h}),`
`,t.jsx(e.h2,{id:"tab",children:"Tab"}),`
`,t.jsx(o,{children:w}),`
`,t.jsx(s,{of:f}),`
`,t.jsx(e.h2,{id:"tabseparator",children:"TabSeparator"}),`
`,t.jsx(o,{children:S}),`
`,t.jsx(s,{of:g}),`
`,t.jsx(b,{})]})}}export{le as default};
//# sourceMappingURL=TabContainer-e1dd13b4.js.map
