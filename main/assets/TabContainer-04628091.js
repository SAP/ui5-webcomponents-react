import{j as t}from"./jsx-runtime-d079401a.js";import{C as d,b as s}from"./DomRefTable.module-e26fe270.js";import{D as c}from"./DocsHeader-31b4cd8e.js";import{F as b}from"./Footer-515737ac.js";import"./index-f1f2c4b1.js";import{M as h,C as r,b as o}from"./chunk-S4VUQJ4A-18fb694d.js";import{D as u}from"./DomRefTable-06221164.js";import{S as x}from"./SubcomponentsSection-6138f2fc.js";import{T as f}from"./index-deac8afd.js";import{C as T,D as p,W as g,a as j,T as w}from"./TabContainer.stories-e173bbcc.js";import{e as m}from"./utils-b1ef2149.js";import{u as l}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-c0ca7266.js";import"./iframe-becc6373.js";import"../sb-preview/runtime.js";import"./UI5Element-e590cd60.js";import"./CustomElementsScopeUtils-264b8a39.js";import"./withWebComponent-b4c67a1a.js";import"./utils-e9940b93.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b897d66f.js";import"./Icons-65b34360.js";import"./decline-2f6198d2.js";import"./i18n-defaults-bdef1cce.js";import"./information-e97f915a.js";import"./alert-7494fabe.js";import"./class-map-e1b423a4.js";import"./Button-4505b9f6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-203b56de.js";import"./index-c3be52fc.js";import"./Integer-f7f172c9.js";import"./index-15fbe6ab.js";import"./Avatar-60d18bb8.js";import"./ResizeHandler-34ecee99.js";import"./employee-78fe46d2.js";import"./index-0681a04b.js";import"./index-58775084.js";import"./Link-a373b451.js";import"./WrappingType-b81e595a.js";import"./index-480f63b1.js";import"./TableOfContent-2d27733e.js";import"./index-6989d869.js";import"./Label-69062358.js";import"./index-c74c9f7f.js";import"./index-c70f02b9.js";import"./index-b607e9e5.js";import"./Popover-742c9988.js";import"./PopupUtils-f407c5e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97942203.js";import"./FocusableElements-d024bb16.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-ecc46a93.js";import"./BrowserScrollbar.css-4a87524a.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./ListItem-65b5ee84.js";import"./ListItemBase-e8a1d82b.js";import"./ItemNavigation-52fe434f.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-7cb729ee.js";import"./RadioButton-bfff4944.js";import"./ValueState-2c5e5904.js";import"./CheckBox-c32e2a79.js";import"./accept-92104380.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-7a309837.js";import"./CustomListItem-c46c3838.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-ce584f41.js";import"./slim-arrow-up-3f34a0d4.js";import"./slim-arrow-down-16231f47.js";import"./ResponsivePopover-ffa286b7.js";import"./Dialog-cf714d6a.js";import"./Title-0fb688d3.js";import"./ResponsivePopoverCommon.css-5a4ca537.js";import"./add-16494039.js";import"./settings-b07ad1e4.js";const S="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `Tab` represents a selectable item inside a `Tabcontainer`. It defines both the item in the tab strip (top part of the `Tabcontainer`) and the content that is presented to the user once the tab is selected\n",C="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n",D=`## Structure

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
`,v=[{name:"allItems",readonly:"true",visibility:"public",type:"undefined",description:`Returns all slotted tabs and their subTabs in a flattened array. The order of tabs is depth-first. For example, given the following slotted elements: <pre><code>
	&lt;ui5-tabcontainer&gt;
		&lt;ui5-tab id="First" text="First"&gt;
			...
			&lt;ui5-tab slot="subTabs" id="Nested" text="Nested"&gt;...&lt;/ui5-tab&gt;
		&lt;/ui5-tab&gt;
		&lt;ui5-tab id="Second" text="Second"&gt;...&lt;/ui5-tab&gt;
		&lt;ui5-tab-separator id="sep"&gt;&lt;/ui5-tab-separator&gt;
		&lt;ui5-tab id="Third" text="Third"&gt;...&lt;/ui5-tab&gt;
	&lt;/ui5-tabcontainer&gt;
</code></pre> Calling <code>allItems</code> on this TabContainer will return the instances in the following order: <code>[ ui5-tab#First, ui5-tab#Nested, ui5-tab#Second, ui5-tab-separator#sep, ui5-tab#Third ]</code>`}];function ce(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?t.jsx(n,Object.assign({},i,{children:t.jsx(a,{})})):a();function a(){const e=Object.assign({h2:"h2",h1:"h1",p:"p"},l(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:T}),`
`,t.jsx(c,{}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(r,{of:p}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(d,{of:p}),`
`,t.jsx(o,{children:D}),`
`,t.jsx(u,{rows:v}),`
`,t.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx(e.h2,{id:"tabcontainer-with-tabseparator",children:"TabContainer with TabSeparator"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx("code",{children:"TabSeparator"})," represents a vertical line to separate tabs inside a ",t.jsx("code",{children:"TabContainer"})]}),`
`,t.jsx(r,{of:g}),`
`,t.jsx(e.h2,{id:"tabcontainer-with-nested-tabs",children:"TabContainer with nested Tabs"}),`
`,t.jsx(r,{of:j}),`
`,t.jsx(o,{children:x}),`
`,t.jsx(e.h2,{id:"tab",children:"Tab"}),`
`,t.jsx(o,{children:S}),`
`,t.jsx(s,{hideHTMLPropsNote:!0,exclude:m,of:f}),`
`,t.jsx(e.h2,{id:"tabseparator",children:"TabSeparator"}),`
`,t.jsx(o,{children:C}),`
`,t.jsx(s,{hideHTMLPropsNote:!0,exclude:m,of:w}),`
`,t.jsx(b,{})]})}}export{ce as default};
//# sourceMappingURL=TabContainer-04628091.js.map
