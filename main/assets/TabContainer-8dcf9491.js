import{j as t}from"./jsx-runtime-d079401a.js";import{C as d,b as s}from"./DomRefTable.module-43509552.js";import{D as c}from"./DocsHeader-d4ebf926.js";import{F as b}from"./Footer-7e6ff915.js";import"./index-f1f2c4b1.js";import{M as h,C as r,b as o}from"./chunk-S4VUQJ4A-e089fe1a.js";import{D as u}from"./DomRefTable-9c40c4bc.js";import{S as x}from"./SubcomponentsSection-6138f2fc.js";import{T as f}from"./index-0f5a37b0.js";import{C as T,D as p,W as g,a as j,T as w}from"./TabContainer.stories-bc0b75d6.js";import{e as m}from"./utils-b1ef2149.js";import{u as l}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-1a54b68f.js";import"./iframe-431898fe.js";import"../sb-preview/runtime.js";import"./UI5Element-a4bd3d38.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-42236945.js";import"./Icons-74c917eb.js";import"./decline-3cb804de.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-dbbb1c9a.js";import"./class-map-0ab40ab9.js";import"./Button-7043cfcf.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-d675a36d.js";import"./index-bb1f9706.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-d9b40dee.js";import"./index-61131410.js";import"./Integer-f7f172c9.js";import"./index-71a8fe15.js";import"./Avatar-8a894654.js";import"./ResizeHandler-0af4416f.js";import"./employee-05c578de.js";import"./index-61cd024d.js";import"./index-46a5d2d4.js";import"./Link-307a9e73.js";import"./WrappingType-b81e595a.js";import"./index-43333f43.js";import"./TableOfContent-8f93bf80.js";import"./index-9f6bb3e8.js";import"./Label-34e3bd87.js";import"./index-b42968db.js";import"./index-77032493.js";import"./index-7dd485c4.js";import"./Popover-26ef4370.js";import"./PopupsCommon.css-f12c9479.js";import"./FocusableElements-66623361.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-309143b9.js";import"./index-d203965f.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./ListItem-657b9c84.js";import"./ListItemBase-e006c78e.js";import"./ItemNavigation-0734b7c0.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-1653a4a5.js";import"./RadioButton-86fe32a8.js";import"./ValueState-2c5e5904.js";import"./CheckBox-b06ff672.js";import"./accept-aa607c05.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-b5a9fe30.js";import"./CustomListItem-48883699.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-392b388d.js";import"./slim-arrow-up-b350b898.js";import"./slim-arrow-down-9459236f.js";import"./ResponsivePopover-5c74b7f5.js";import"./Dialog-4aad3648.js";import"./Title-f7b3e876.js";import"./ResponsivePopoverCommon.css-870f7136.js";import"./add-bbbd01bc.js";import"./settings-b88df6a9.js";const S="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `Tab` represents a selectable item inside a `Tabcontainer`. It defines both the item in the tab strip (top part of the `Tabcontainer`) and the content that is presented to the user once the tab is selected\n",C="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n",D=`## Structure

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
</code></pre> Calling <code>allItems</code> on this TabContainer will return the instances in the following order: <code>[ ui5-tab#First, ui5-tab#Nested, ui5-tab#Second, ui5-tab-separator#sep, ui5-tab#Third ]</code>`}];function de(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?t.jsx(n,Object.assign({},i,{children:t.jsx(a,{})})):a();function a(){const e=Object.assign({h2:"h2",h1:"h1",p:"p"},l(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:T}),`
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
`,t.jsx(b,{})]})}}export{de as default};
//# sourceMappingURL=TabContainer-8dcf9491.js.map
