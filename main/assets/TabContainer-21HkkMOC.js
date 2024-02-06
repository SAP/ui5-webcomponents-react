import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{C as c,A as m}from"./DomRefTable.module-QuC-s2Dq.js";import{D as h}from"./DocsHeader-77GkObLO.js";import{F as x}from"./Footer-fC3w50rW.js";import"./index-OjgoNOWw.js";import{M as u,C as i,b as f,e as a}from"./chunk-HLWAVYOI-6usYnijc.js";import{D as j}from"./DomRefTable-5a3lr-Ic.js";import{S as T}from"./SubcomponentsSection-pzdPLcqE.js";import{T as n}from"./index-sGI-HfPx.js";import{C as g,D as s,W as C,a as S,T as d}from"./TabContainer.stories-qpyp_Rj7.js";import{e as l}from"./utils-77gZ8405.js";import{u as b}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-79Jfovnl.js";import"./iframe-RXQu8Ybn.js";import"../sb-preview/runtime.js";import"./UI5Element-_cJDeK03.js";import"./i18nBundle-YDapVb1x.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent-UxvJwa3A.js";import"./utils-rNFQc6Ui.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-qyLuyi2a.js";import"./Icons-1V9ErOOl.js";import"./decline-1i68oG_p.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-LBZ9LJI-.js";import"./alert-wj9gYQbS.js";import"./class-map--zj6Ctao.js";import"./Button-kjIKsCqk.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-IIWnNm9Y.js";import"./index-G1ylA0vb.js";import"./clsx-Zbgk8kpT.js";import"./i18n-defaults-a20Pyi7e.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-evY60Rnm.js";import"./index-QYh6idnL.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-fxF1oxJv.js";import"./index-jZT4W7-m.js";import"./Integer-kog98579.js";import"./index-A0jmAlfl.js";import"./Avatar-3d4E78pi.js";import"./ResizeHandler-xTi6PJ7P.js";import"./employee-zEMWRMpH.js";import"./Link-kuayvrPB.js";import"./WrappingType-avPrqc94.js";import"./index--AU5-jgA.js";import"./index-G8s_GnsG.js";import"./index-sHoRIkfF.js";import"./TableOfContent-ZjVOXjLR.js";import"./index-m5rAO5ZE.js";import"./Label-Zjx1tiqV.js";import"./index-kbbh15fs.js";import"./index-qbhnVYcU.js";import"./Popover-ALm1fb4C.js";import"./PopupUtils-WqNPYdCF.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-GS9FVPNx.js";import"./FocusableElements-YRGIpHeQ.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-21pwAbrQ.js";import"./BrowserScrollbar.css-piSU4CQM.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-z3VktcOy.js";import"./mapValues-Iyc0g4nJ.js";import"./_baseUniq-PeaQ4i79.js";import"./index-PPLHz8o0.js";import"./index-ru46B3pF.js";import"./ListItem-sWdvSqFs.js";import"./List-SPqW6yoZ.js";import"./ItemNavigation-3zBNmLVM.js";import"./TabbableElements-L1VqloMt.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-NwBqYIFz.js";import"./CheckBox-vcMhKlRJ.js";import"./ValueState-zUcANXoY.js";import"./accept-weNF-yLT.js";import"./RadioButton-9qzNHPH5.js";import"./slim-arrow-right-KfBcfSXq.js";import"./CustomListItem-GUIQktvS.js";import"./slideUp-EM1U0pkt.js";import"./animate-Pj1TncyK.js";import"./AnimationMode-htp6_n87.js";import"./slim-arrow-up-5QRadGqE.js";import"./slim-arrow-down-1kZ6GQ-0.js";import"./ResponsivePopover-VOpNnSI-.js";import"./Dialog-pzhs5CsA.js";import"./Title-qniGFt20.js";import"./ResponsivePopoverCommon.css-9bTUQJb7.js";import"./add-wUHcn77S.js";import"./settings-yQr512OC.js";const D=[{name:"allItems",readonly:"true",visibility:"public",type:"undefined",description:`Returns all slotted tabs and their subTabs in a flattened array. The order of tabs is depth-first. For example, given the following slotted elements: <pre><code>
	&lt;ui5-tabcontainer&gt;
		&lt;ui5-tab id="First" text="First"&gt;
			...
			&lt;ui5-tab slot="subTabs" id="Nested" text="Nested"&gt;...&lt;/ui5-tab&gt;
		&lt;/ui5-tab&gt;
		&lt;ui5-tab id="Second" text="Second"&gt;...&lt;/ui5-tab&gt;
		&lt;ui5-tab-separator id="sep"&gt;&lt;/ui5-tab-separator&gt;
		&lt;ui5-tab id="Third" text="Third"&gt;...&lt;/ui5-tab&gt;
	&lt;/ui5-tabcontainer&gt;
</code></pre> Calling <code>allItems</code> on this TabContainer will return the instances in the following order: <code>[ ui5-tab#First, ui5-tab#Nested, ui5-tab#Second, ui5-tab-separator#sep, ui5-tab#Third ]</code>`}];function jr(o={}){const{wrapper:e}=Object.assign({},b(),o.components);return e?t.jsx(e,Object.assign({},o,{children:t.jsx(p,{})})):p();function p(){const r=Object.assign({h2:"h2",h1:"h1",p:"p"},b(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(u,{of:g}),`
`,t.jsx(h,{}),`
`,t.jsx("br",{}),`
`,t.jsx(r.h2,{id:"example",children:"Example"}),`
`,t.jsx(i,{of:s}),`
`,t.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(c,{of:s}),`
`,t.jsx(j,{rows:D}),`
`,t.jsx(r.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx(r.h2,{id:"tabcontainer-with-tabseparator",children:"TabContainer with TabSeparator"}),`
`,t.jsxs(r.p,{children:["The ",t.jsx("code",{children:"TabSeparator"})," represents a vertical line to separate tabs inside a ",t.jsx("code",{children:"TabContainer"})]}),`
`,t.jsx(i,{of:C}),`
`,t.jsx(r.h2,{id:"tabcontainer-with-nested-tabs",children:"TabContainer with nested Tabs"}),`
`,t.jsx(i,{of:S}),`
`,t.jsx(f,{children:T}),`
`,t.jsx(r.h2,{id:"tab",children:"Tab"}),`
`,t.jsx(a,{of:n}),`
`,t.jsx(m,{hideHTMLPropsNote:!0,exclude:l,of:n}),`
`,t.jsx(r.h2,{id:"tabseparator",children:"TabSeparator"}),`
`,t.jsx(a,{of:d}),`
`,t.jsx(m,{hideHTMLPropsNote:!0,exclude:l,of:d}),`
`,t.jsx(x,{})]})}}export{jr as default};
