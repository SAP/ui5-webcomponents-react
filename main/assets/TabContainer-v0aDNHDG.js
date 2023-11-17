import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{C as d,b as s}from"./DomRefTable.module-KFV4vTNP.js";import{D as c}from"./DocsHeader-aw51gcp2.js";import{F as b}from"./Footer-5HE-tmQI.js";import"./index-OjgoNOWw.js";import{M as h,C as r,b as o}from"./chunk-HLWAVYOI-aRY61EAZ.js";import{D as u}from"./DomRefTable-785j6Hhl.js";import{S as x}from"./SubcomponentsSection-pzdPLcqE.js";import{T as f}from"./index-wmWdyHHo.js";import{C as T,D as p,W as g,a as j,T as w}from"./TabContainer.stories-rJ89uYgL.js";import{e as m}from"./utils-77gZ8405.js";import{u as l}from"./index-RwE9nQVW.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-hjlCGKub.js";import"./iframe-jFRpQ-99.js";import"../sb-preview/runtime.js";import"./UI5Element-51XrG2PJ.js";import"./CustomElementsScopeUtils-FvbtGFoH.js";import"./withWebComponent-ceo0jn6D.js";import"./utils-CrDMzPRG.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-HNXZSIOG.js";import"./Icons-3pbvVZUr.js";import"./decline-Q45dXYUl.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-WfdY8QHP.js";import"./alert-TGfQazfI.js";import"./class-map-JXa0-u4l.js";import"./Button-a5xMWTkk.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-S1zyQWjr.js";import"./clsx-2Jv0kmJG.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-PxRYiixA.js";import"./index-oLSBYiL3.js";import"./Integer-kog98579.js";import"./index-OgyC61Zv.js";import"./Avatar-hI9OSh5N.js";import"./ResizeHandler-9pqGT1BJ.js";import"./employee-QIf_hgHb.js";import"./index-2LFs6KZP.js";import"./index-web1D2Sd.js";import"./Link-DluRE2Z1.js";import"./WrappingType-avPrqc94.js";import"./index-ZYxd7chN.js";import"./TableOfContent-CFEEopUN.js";import"./index-5G9NmmK_.js";import"./Label-z__cPwIf.js";import"./index-QYh6idnL.js";import"./index-Nq0B0t7P.js";import"./index-BVOpDmmc.js";import"./Popover-pPQH5XeW.js";import"./PopupUtils-JhQDb1QD.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-q9U65Wkb.js";import"./FocusableElements-W9IwOAGU.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-uWW-8QIe.js";import"./BrowserScrollbar.css-HfEGARrw.js";import"./index--F0XPsCm.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./ListItem-rKilMSpt.js";import"./ListItemBase-_j3gRdH2.js";import"./ItemNavigation-ETHVU2CC.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-6K1dNXem.js";import"./RadioButton-m4J4aih-.js";import"./ValueState-zUcANXoY.js";import"./CheckBox-0IljwRo-.js";import"./accept-vW9BdDVG.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-v6ItARyR.js";import"./CustomListItem-x1_rrGTq.js";import"./slideUp-EM1U0pkt.js";import"./animate-Pj1TncyK.js";import"./AnimationMode-nonsDQUP.js";import"./slim-arrow-up-X4YbIN0s.js";import"./slim-arrow-down-jSEmi9jT.js";import"./ResponsivePopover-ZVeh2WGC.js";import"./Dialog-BkI39EIa.js";import"./Title-QpYFGHiM.js";import"./ResponsivePopoverCommon.css-sOUQDAhm.js";import"./add-J1teT1mm.js";import"./settings-yNp1ATrR.js";const S="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `Tab` represents a selectable item inside a `Tabcontainer`. It defines both the item in the tab strip (top part of the `Tabcontainer`) and the content that is presented to the user once the tab is selected\n",C="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n",D=`## Structure

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
</code></pre> Calling <code>allItems</code> on this TabContainer will return the instances in the following order: <code>[ ui5-tab#First, ui5-tab#Nested, ui5-tab#Second, ui5-tab-separator#sep, ui5-tab#Third ]</code>`}];function le(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?t.jsx(n,Object.assign({},i,{children:t.jsx(a,{})})):a();function a(){const e=Object.assign({h2:"h2",h1:"h1",p:"p"},l(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:T}),`
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
`,t.jsx(b,{})]})}}export{le as default};
//# sourceMappingURL=TabContainer-v0aDNHDG.js.map
