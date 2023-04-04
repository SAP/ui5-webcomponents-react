import{a as $,F as O,j as u}from"./jsx-runtime-670450c2.js";import{r as R}from"./index-f1f749bf.js";import{r as re}from"./index-96c5f47c.js";import{_ as T}from"./iframe-838ff653.js";import{p as h,c as C,w as N,e as a,s as l,l as o,a as oe,d as se}from"./withWebComponent-d280b5c2.js";import{s as q}from"./slot-76e48863.js";import{c as f,e as E}from"./Icon-c8fd92f0.js";import{U as F,k as le,a as Z,d as ae}from"./UI5Element-d1d93200.js";import{c as de}from"./Device-208919c6.js";import ce from"./Dialog-c83d8172.js";import{B as ue}from"./Button-400e2491.js";import pe from"./Label-e3d88218.js";import me from"./GroupHeaderListItem-e1c34f60.js";import{L as he}from"./ListItemBase-6757af89.js";import _e from"./StandardListItem-3b715734.js";import{a as ge}from"./Title-6041704e.js";import{S as fe,a as be}from"./SegmentedButton-fe1667e3.js";import{a as ye}from"./Bar-18274fca.js";import{h as x}from"./Icons-efeb15d5.js";import{x as ee}from"./i18n-defaults-80781f7e.js";import"./filter-2fc7224a.js";import"./nav-back-fba57aa5.js";import{a4 as U,a5 as Se,a6 as ve,a7 as we,a8 as $e,a9 as Oe,aa as Ie,ab as Be,ac as De}from"./i18n-defaults-217b10b4.js";import{s as Te}from"./parameters-bundle.css-6b4a2ffb.js";import{B as Ce}from"./index-6dcdc4be.js";var L;(function(t){t.Sort="Sort",t.Filter="Filter"})(L||(L={}));const b=L;var k=globalThis&&globalThis.__decorate||function(t,e,i,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(d=t[c])&&(s=(r<3?d(s):r>3?d(e,i,s):d(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let S=class extends F{};k([h()],S.prototype,"text",void 0);k([h()],S.prototype,"additionalText",void 0);k([q()],S.prototype,"values",void 0);S=k([C("ui5-filter-item")],S);S.define();const Ne=S,Fe=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"})),B=N("ui5-filter-item",["additionalText","text"],[],["values"],[],()=>T(()=>Promise.resolve().then(()=>Fe),void 0,import.meta.url));B.displayName="FilterItem";try{B.displayName="FilterItem",B.__docgenInfo={description:`

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ViewSettingsDialog" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"FilterItem",props:{values:{defaultValue:null,description:`Defines the \`values\` list.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="values"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"values",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},additionalText:{defaultValue:null,description:"Defines the additional text of the component.",name:"additionalText",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var P=globalThis&&globalThis.__decorate||function(t,e,i,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(d=t[c])&&(s=(r<3?d(s):r>3?d(e,i,s):d(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let v=class extends F{};P([h()],v.prototype,"text",void 0);P([h({type:Boolean})],v.prototype,"selected",void 0);v=P([C("ui5-filter-item-option")],v);v.define();const ke=v,Ve=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),g=N("ui5-filter-item-option",["text"],["selected"],[],[],()=>T(()=>Promise.resolve().then(()=>Ve),void 0,import.meta.url));g.displayName="FilterItemOption";try{g.displayName="FilterItemOption",g.__docgenInfo={description:`

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ViewSettingsDialog" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"FilterItemOption",props:{selected:{defaultValue:null,description:"Defines if the component is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var M=globalThis&&globalThis.__decorate||function(t,e,i,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(d=t[c])&&(s=(r<3?d(s):r>3?d(e,i,s):d(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let w=class extends F{};M([h()],w.prototype,"text",void 0);M([h({type:Boolean})],w.prototype,"selected",void 0);w=M([C("ui5-sort-item")],w);w.define();const Ee=w,Re=Object.freeze(Object.defineProperty({__proto__:null,default:Ee},Symbol.toStringTag,{value:"Module"})),y=N("ui5-sort-item",["text"],["selected"],[],[],()=>T(()=>Promise.resolve().then(()=>Re),void 0,import.meta.url));y.displayName="SortItem";try{y.displayName="SortItem",y.__docgenInfo={description:`

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ViewSettingsDialog" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"SortItem",props:{selected:{defaultValue:null,description:"Defines if the component is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Le="sort",te="M405.022 498.566q-9.951 9.951-22.888 9.951t-21.893-9.951l-101.504-100.51q-11.942-11.941 0-22.888 4.975-4.976 10.946-4.976t10.947 4.976l84.587 84.587v-317.45q0-15.922 15.922-15.922t15.922 15.922v319.44l86.577-86.577q10.947-10.946 22.889 0 10.946 10.947 0 22.888zM253.761 110.46q10.946 11.941 0 22.888-4.976 4.976-11.444 4.976t-11.444-4.976l-86.578-86.577v319.44q0 15.922-15.922 15.922t-15.922-15.922V48.762l-84.587 84.587q-4.976 4.976-10.947 4.976t-10.946-4.976q-11.942-10.947 0-22.888L107.475 9.95Q116.431 0 129.368 0t22.889 9.951z",qe=!1,Pe=ee,Me="SAP-icons-v4",Ue="@ui5/webcomponents-icons";x(Le,{pathData:te,ltr:qe,accData:Pe,collection:Me,packageName:Ue});const je="sort",ie="M64 358l34 34V58q0-26 26-26 11 0 18.5 7t7.5 19v334l33-34q8-7 19-7 10 0 18 7 7 8 7 18 0 11-7 19l-78 77q-8 8-18 8t-18-8l-78-77q-8-10-8-19 0-8 8-18 7-7 18-7t18 7zm265-202q-7 8-18 8t-18-8q-8-8-8-18t8-18l78-77q7-8 18-8t18 8l77 77q8 7 8 18t-8 18q-7 8-18 8t-18-8l-33-33v331q0 11-7.5 18.5T389 480q-12 0-19-7.5t-7-18.5V123z",Ae=!1,We=ee,Je="SAP-icons-v5",ze="@ui5/webcomponents-icons";x(je,{pathData:ie,ltr:Ae,accData:We,collection:Je,packageName:ze});le();const He=(t,e,i)=>i?a`<${l("ui5-dialog",e,i)} aria-label="${o(t._dialogTitle)}" @ui5-after-open=${o(t._focusRecentlyUsedControl)} @ui5-before-close=${o(t._restoreConfirmedOnEscape)} ?stretch=${t._isPhone}><div slot="header" class="ui5-vsd-header"><div class="ui5-vsd-header-container"><div class="ui5-vsd-header-start">${t.showBackButton?j(t,e,i):void 0}<${l("ui5-title",e,i)} class="ui5-vsd-title" id="${o(t._id)}-label">${o(t._title)}</${l("ui5-title",e,i)}></div><div class="ui5-vsd-header-end"><${l("ui5-button",e,i)} design="Transparent" @click="${t._resetSettings}" ?disabled=${t._disableResetButton}>${o(t._resetButtonLabel)}</${l("ui5-button",e,i)}></div></div>${t.showBackButton?void 0:A(t,e,i)}</div><div class="ui5-vsd-content" ?expand-content="${t.expandContent}">${t.shouldBuildSort?W(t,e,i):void 0}${t.shouldBuildFilter?H(t,e,i):void 0}</div><div slot="footer" class="ui5-vsd-footer"><${l("ui5-button",e,i)} design="Emphasized" @click="${t._confirmSettings}">${o(t._okButtonLabel)}</${l("ui5-button",e,i)}><${l("ui5-button",e,i)} design="Transparent" @click="${t._cancelSettings}">${o(t._cancelButtonLabel)}</${l("ui5-button",e,i)}></div></${l("ui5-dialog",e,i)}>`:a`<ui5-dialog aria-label="${o(t._dialogTitle)}" @ui5-after-open=${o(t._focusRecentlyUsedControl)} @ui5-before-close=${o(t._restoreConfirmedOnEscape)} ?stretch=${t._isPhone}><div slot="header" class="ui5-vsd-header"><div class="ui5-vsd-header-container"><div class="ui5-vsd-header-start">${t.showBackButton?j(t,e,i):void 0}<ui5-title class="ui5-vsd-title" id="${o(t._id)}-label">${o(t._title)}</ui5-title></div><div class="ui5-vsd-header-end"><ui5-button design="Transparent" @click="${t._resetSettings}" ?disabled=${t._disableResetButton}>${o(t._resetButtonLabel)}</ui5-button></div></div>${t.showBackButton?void 0:A(t,e,i)}</div><div class="ui5-vsd-content" ?expand-content="${t.expandContent}">${t.shouldBuildSort?W(t,e,i):void 0}${t.shouldBuildFilter?H(t,e,i):void 0}</div><div slot="footer" class="ui5-vsd-footer"><ui5-button design="Emphasized" @click="${t._confirmSettings}">${o(t._okButtonLabel)}</ui5-button><ui5-button design="Transparent" @click="${t._cancelSettings}">${o(t._cancelButtonLabel)}</ui5-button></div></ui5-dialog>`,j=(t,e,i)=>i?a`<${l("ui5-button",e,i)} design="Transparent" icon="nav-back" class="ui5-vsd-back-button" @click="${t._navigateToFilters}"></${l("ui5-button",e,i)}>`:a`<ui5-button design="Transparent" icon="nav-back" class="ui5-vsd-back-button" @click="${t._navigateToFilters}"></ui5-button>`,A=(t,e,i)=>a`${t.hasPagination?Ge(t,e,i):void 0}`,Ge=(t,e,i)=>i?a`<div class="ui5-vsd-sub-header-container"><div class="ui5-vsd-sub-header"><${l("ui5-segmented-button",e,i)} @ui5-selection-change="${o(t._handleModeChange)}"><${l("ui5-segmented-button-item",e,i)} ?pressed="${t.isModeSort}" icon="sort" mode="Sort"></${l("ui5-segmented-button-item",e,i)}><${l("ui5-segmented-button-item",e,i)} ?pressed="${t.isModeFilter}" icon="filter" mode="Filter"></${l("ui5-segmented-button-item",e,i)}></${l("ui5-segmented-button",e,i)}></div></div>`:a`<div class="ui5-vsd-sub-header-container"><div class="ui5-vsd-sub-header"><ui5-segmented-button @ui5-selection-change="${o(t._handleModeChange)}"><ui5-segmented-button-item ?pressed="${t.isModeSort}" icon="sort" mode="Sort"></ui5-segmented-button-item><ui5-segmented-button-item ?pressed="${t.isModeFilter}" icon="filter" mode="Filter"></ui5-segmented-button-item></ui5-segmented-button></div></div>`,W=(t,e,i)=>a`${t.isModeSort?Ye(t,e,i):void 0}`,Ye=(t,e,i)=>i?a`<div class="ui5-vsd-sort"><${l("ui5-list",e,i)} mode="SingleSelectBegin" @ui5-item-click="${o(t._onSortOrderChange)}" sort-order accessible-name-ref="${o(t._id)}-label"><${l("ui5-li-groupheader",e,i)}>${o(t._sortOrderLabel)}</${l("ui5-li-groupheader",e,i)}>${f(t._currentSettings.sortOrder,(n,r)=>n._id||r,(n,r)=>J(n,r,t,e,i))}</${l("ui5-list",e,i)}><${l("ui5-list",e,i)} mode="SingleSelectBegin" @ui5-item-click=${o(t._onSortByChange)} sort-by><${l("ui5-li-groupheader",e,i)}>${o(t._sortByLabel)}</${l("ui5-li-groupheader",e,i)}>${f(t._currentSettings.sortBy,(n,r)=>n._id||r,(n,r)=>z(n,r,t,e,i))}</${l("ui5-list",e,i)}></div>`:a`<div class="ui5-vsd-sort"><ui5-list mode="SingleSelectBegin" @ui5-item-click="${o(t._onSortOrderChange)}" sort-order accessible-name-ref="${o(t._id)}-label"><ui5-li-groupheader>${o(t._sortOrderLabel)}</ui5-li-groupheader>${f(t._currentSettings.sortOrder,(n,r)=>n._id||r,(n,r)=>J(n,r,t,e,i))}</ui5-list><ui5-list mode="SingleSelectBegin" @ui5-item-click=${o(t._onSortByChange)} sort-by><ui5-li-groupheader>${o(t._sortByLabel)}</ui5-li-groupheader>${f(t._currentSettings.sortBy,(n,r)=>n._id||r,(n,r)=>z(n,r,t,e,i))}</ui5-list></div>`,J=(t,e,i,n,r)=>r?a`<${l("ui5-li",n,r)} ?selected="${t.selected}">${o(t.text)}</${l("ui5-li",n,r)}>`:a`<ui5-li ?selected="${t.selected}">${o(t.text)}</ui5-li>`,z=(t,e,i,n,r)=>r?a`<${l("ui5-li",n,r)} data-ui5-external-action-item-index="${e}" ?selected="${t.selected}">${o(t.text)}</${l("ui5-li",n,r)}>`:a`<ui5-li data-ui5-external-action-item-index="${e}" ?selected="${t.selected}">${o(t.text)}</ui5-li>`,H=(t,e,i)=>a`${t.isModeFilter?Qe(t,e,i):void 0}`,Qe=(t,e,i)=>a`${t._filterStepTwo?Ke(t,e,i):xe(t,e,i)}`,Ke=(t,e,i)=>i?a`<${l("ui5-list",e,i)} accessible-name-ref="${o(t._id)}-label" mode="MultiSelect" @ui5-item-click="${o(t._handleFilterValueItemClick)}">${f(t._currentSettings.filters,(n,r)=>n._id||r,(n,r)=>G(n,r,t,e,i))}</${l("ui5-list",e,i)}>`:a`<ui5-list accessible-name-ref="${o(t._id)}-label" mode="MultiSelect" @ui5-item-click="${o(t._handleFilterValueItemClick)}">${f(t._currentSettings.filters,(n,r)=>n._id||r,(n,r)=>G(n,r,t,e,i))}</ui5-list>`,G=(t,e,i,n,r)=>a`${t.selected?Xe(t,e,i,n,r):void 0}`,Xe=(t,e,i,n,r)=>a`${f(t.filterOptions,(s,d)=>s._id||d,(s,d)=>Ze(s,d,i,n,r))}`,Ze=(t,e,i,n,r)=>r?a`<${l("ui5-li",n,r)} ?selected=${t.selected}>${o(t.text)}</${l("ui5-li",n,r)}>`:a`<ui5-li ?selected=${t.selected}>${o(t.text)}</ui5-li>`,xe=(t,e,i)=>i?a`<${l("ui5-list",e,i)} @ui5-item-click="${o(t._changeCurrentFilter)}" accessible-name-ref="${o(t._id)}-label"><${l("ui5-li-groupheader",e,i)}>${o(t._filterByLabel)}</${l("ui5-li-groupheader",e,i)}>${f(t.filterItems,(n,r)=>n._id||r,(n,r)=>Y(n,r,t,e,i))}</${l("ui5-list",e,i)}>`:a`<ui5-list @ui5-item-click="${o(t._changeCurrentFilter)}" accessible-name-ref="${o(t._id)}-label"><ui5-li-groupheader>${o(t._filterByLabel)}</ui5-li-groupheader>${f(t.filterItems,(n,r)=>n._id||r,(n,r)=>Y(n,r,t,e,i))}</ui5-list>`,Y=(t,e,i,n,r)=>r?a`<${l("ui5-li",n,r)} class="ui5-vsd-filterItemList" ?selected=${t.selected} additional-text=${o(t.additionalText)}>${o(t.text)}</${l("ui5-li",n,r)}>`:a`<ui5-li class="ui5-vsd-filterItemList" ?selected=${t.selected} additional-text=${o(t.additionalText)}>${o(t.text)}</ui5-li>`;Z("@ui5/webcomponents-theming","sap_fiori_3",async()=>oe);Z("@ui5/webcomponents-fiori","sap_fiori_3",async()=>Te);const et={packageName:"@ui5/webcomponents-fiori",fileName:"themes/ViewSettingsDialog.css.ts",content:"[on-desktop] .ui5-vsd-content{height:var(--_ui5_vsd_content_height);min-width:350px}[on-desktop] [expand-content].ui5-vsd-content{height:var(--_ui5_vsd_expand_content_height);min-width:350px}.ui5-vsd-header{width:100%;padding-bottom:.25rem}.ui5-vsd-content{margin:0 .1px 0 -1rem}.ui5-vsd-title{font-size:var(--sapFontHeader5Size)}.ui5-vsd-header-container{display:flex;align-items:center;justify-content:space-between;height:var(--_ui5_vsd_header_container);line-height:var(--_ui5_vsd_header_container)}.ui5-vsd-header-end{display:flex}.ui5-vsd-sub-header{height:var(--_ui5_vsd_sub_header_container_height);line-height:var(--_ui5_vsd_sub_header_container_height)}.ui5-vsd-header-start{display:flex;align-items:center}.ui5-vsd-back-button{margin-inline-end:.5rem}.ui5-vsd-footer{width:100%;display:flex;justify-content:flex-end;margin:.1875rem 0}.ui5-vsd-footer [ui5-button]:first-child{margin-right:.5rem;min-width:4rem}.ui5-vsd-sort{width:100%;height:100%}[ui5-li-groupheader]{overflow:hidden}[ui5-dialog]::part(content){padding-top:0;padding-bottom:0;padding-right:0}:host [ui5-li]::part(native-li){padding-inline-start:var(--_ui5_vsd_content_li_padding)}:host [ui5-li].ui5-vsd-filterItemList::part(native-li){padding-inline-start:1rem}"};var _=globalThis&&globalThis.__decorate||function(t,e,i,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(d=t[c])&&(s=(r<3?d(s):r>3?d(e,i,s):d(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},p;let m=p=class extends F{constructor(){super(),this._currentSettings={sortOrder:[],sortBy:[],filters:[]}}onBeforeRendering(){this._currentSettings.filters&&this._currentSettings.filters.length&&this._setAdditionalTexts(),!this.shouldBuildSort&&this.shouldBuildFilter&&(this._currentMode=b.Filter)}_setAdditionalTexts(){this.filterItems.forEach((e,i)=>{let n=0;for(let r=0;r<e.values.length;r++)this._currentSettings.filters[i].filterOptions[r].selected&&n++;e.additionalText=n?`${n}`:""})}static async onDefine(){p.i18nBundle=await ae("@ui5/webcomponents-fiori")}get _selectedFilter(){for(let e=0;e<this._currentSettings.filters.length;e++)if(this._currentSettings.filters[e].selected)return this._currentSettings.filters[e]}get shouldBuildSort(){return!!this.sortItems.length}get shouldBuildFilter(){return!!this.filterItems.length}get hasPagination(){return this.shouldBuildSort&&this.shouldBuildFilter}get _filterByTitle(){const e=this._selectedFilter?this._selectedFilter.text:"";return`${p.i18nBundle.getText(U)}: ${e}`}get _dialogTitle(){return p.i18nBundle.getText(Se)}get _okButtonLabel(){return p.i18nBundle.getText(ve)}get _cancelButtonLabel(){return p.i18nBundle.getText(we)}get _resetButtonLabel(){return p.i18nBundle.getText($e)}get _ascendingLabel(){return p.i18nBundle.getText(Oe)}get _descendingLabel(){return p.i18nBundle.getText(Ie)}get _sortOrderLabel(){return p.i18nBundle.getText(Be)}get _filterByLabel(){return p.i18nBundle.getText(U)}get _sortByLabel(){return p.i18nBundle.getText(De)}get _isPhone(){return de()}get _sortAscending(){return!this.sortDescending}get _title(){return this.showBackButton?this._filterByTitle:this._dialogTitle}get _disableResetButton(){return this._dialog&&this._sortSetttingsAreInitial&&this._filteresAreInitial}get _sortSetttingsAreInitial(){let e=!0;return["sortBy","sortOrder"].forEach(i=>{this._currentSettings[i].forEach((n,r)=>{n.selected!==this._initialSettings[i][r].selected&&(e=!1)})}),e}get _filteresAreInitial(){let e=!0;return this._currentSettings.filters.forEach((i,n)=>{for(let r=0;r<i.filterOptions.length;r++)i.filterOptions[r].selected!==this._initialSettings.filters[n].filterOptions[r].selected&&(e=!1)}),e}get _settings(){return{sortOrder:JSON.parse(JSON.stringify(this.initSortOrderItems)),sortBy:JSON.parse(JSON.stringify(this.initSortByItems)),filters:this.filterItems.map(e=>({text:e.text,selected:!1,filterOptions:e.values.map(i=>({text:i.text,selected:i.selected}))}))}}get initSortByItems(){return this.sortItems.map((e,i)=>({text:e.text,selected:e.selected,index:i}))}get initSortOrderItems(){return[{text:this._ascendingLabel,selected:!this.sortDescending},{text:this._descendingLabel,selected:this.sortDescending}]}get expandContent(){return this._filterStepTwo||!this.hasPagination}get isModeSort(){return this._currentMode===b.Sort}get isModeFilter(){return this._currentMode===b.Filter}get showBackButton(){return this.isModeFilter&&this._filterStepTwo}get _sortOrderListDomRef(){return this.shadowRoot.querySelector("[ui5-list][sort-order]")}get _sortByList(){return this.shadowRoot.querySelector("[ui5-list][sort-by]")}get _dialogDomRef(){return this.shadowRoot.querySelector("[ui5-dialog]")}show(){var e;this._dialog?this._restoreSettings(this._confirmedSettings):(this._sortOrder=this._sortOrderListDomRef,this._sortBy=this._sortByList,this._initialSettings=this._settings,this._currentSettings=this._settings,this._confirmedSettings=this._settings,this._dialog=this._dialogDomRef),this.fireEvent("before-open",{},!0,!1),this._dialog.show(!0),(e=this._dialog.querySelector("[ui5-list]"))==null||e.focusFirstItem()}_handleModeChange(e){const i=e.detail.selectedItem.getAttribute("mode");this._currentMode=b[i]}_handleFilterValueItemClick(e){this._currentSettings.filters=this._currentSettings.filters.map(i=>(i.selected&&i.filterOptions.forEach(n=>{n.text===e.detail.item.innerText&&(n.selected=!n.selected)}),i)),this._currentSettings=JSON.parse(JSON.stringify(this._currentSettings))}_navigateToFilters(){this._filterStepTwo=!1}_changeCurrentFilter(e){this._filterStepTwo=!0,this._currentSettings.filters=this._currentSettings.filters.map(i=>(i.selected=i.text===e.detail.item.innerText,i))}close(){this._dialog&&this._dialog.close()}_focusRecentlyUsedControl(){if(!this._recentlyFocused||!Object.keys(this._recentlyFocused).length)return;const e=this._recentlyFocused.getSelectedItems();e.length&&e[0].focus()}_confirmSettings(){this.close(),this._confirmedSettings=this._currentSettings,this.fireEvent("confirm",this.eventsParams)}_cancelSettings(){this._restoreSettings(this._confirmedSettings),this.fireEvent("cancel",this.eventsParams),this.close()}get eventsParams(){const e=this._currentSettings.sortOrder.filter(V=>V.selected)[0],i=this._currentSettings.sortBy.filter(V=>V.selected)[0],n=e&&e.text,r=!this._currentSettings.sortOrder[0].selected,s=i&&i.text,d=i&&i.index,c=this.sortItems[d];return{sortOrder:n,sortDescending:r,sortBy:s,sortByItem:c,filters:this.selectedFilters}}get selectedFilters(){const e=[];return this._currentSettings.filters.forEach(i=>{const n=[];i.filterOptions.forEach(r=>{r.selected&&n.push(r.text)}),n.length&&(e.push({}),e[e.length-1][i.text]=n)}),e}_restoreConfirmedOnEscape(e){e.detail.escPressed&&(this._cancelSettings(),this._currentMode=b.Sort,this._filterStepTwo=!1)}_resetSettings(){this._restoreSettings(this._initialSettings),this._recentlyFocused=this._sortOrder,this._focusRecentlyUsedControl()}_restoreSettings(e){this._currentSettings=JSON.parse(JSON.stringify(e)),this._currentMode=b.Sort,this._filterStepTwo=!1}_onSortOrderChange(e){this._recentlyFocused=this._sortOrder,this._currentSettings.sortOrder=this.initSortOrderItems.map(i=>(i.selected=i.text===e.detail.item.innerText,i)),this._currentSettings=JSON.parse(JSON.stringify(this._currentSettings))}_onSortByChange(e){const i=Number(e.detail.item.getAttribute("data-ui5-external-action-item-index"));this._recentlyFocused=this._sortBy,this._currentSettings.sortBy=this.initSortByItems.map((n,r)=>(n.selected=r===i,n)),this._currentSettings=JSON.parse(JSON.stringify(this._currentSettings))}setConfirmedSettings(e){if(e&&this._dialog&&!this._dialog.isOpen()){const i=JSON.parse(JSON.stringify(this._confirmedSettings));if(e.sortOrder)for(let n=0;n<i.sortOrder.length;n++)i.sortOrder[n].text===e.sortOrder?i.sortOrder[n].selected=!0:i.sortOrder[n].selected=!1;if(e.sortBy)for(let n=0;n<i.sortBy.length;n++)i.sortBy[n].text===e.sortBy?i.sortBy[n].selected=!0:i.sortBy[n].selected=!1;if(e.filters){const n={};for(let r=0;r<e.filters.length;r++)n[Object.keys(e.filters[r])[0]]=e.filters[r][Object.keys(e.filters[r])[0]];for(let r=0;r<i.filters.length;r++)for(let s=0;s<i.filters[r].filterOptions.length;s++)n[i.filters[r].text]&&n[i.filters[r].text].indexOf(i.filters[r].filterOptions[s].text)>-1?i.filters[r].filterOptions[s].selected=!0:i.filters[r].filterOptions[s].selected=!1}this._confirmedSettings=JSON.parse(JSON.stringify(i))}}};_([h({type:Boolean})],m.prototype,"sortDescending",void 0);_([h({type:Object})],m.prototype,"_recentlyFocused",void 0);_([h({type:Object})],m.prototype,"_initialSettings",void 0);_([h({type:Object})],m.prototype,"_confirmedSettings",void 0);_([h({type:Object})],m.prototype,"_currentSettings",void 0);_([h({type:b,defaultValue:b.Sort})],m.prototype,"_currentMode",void 0);_([h({type:Boolean,noAttribute:!0})],m.prototype,"_filterStepTwo",void 0);_([q()],m.prototype,"sortItems",void 0);_([q()],m.prototype,"filterItems",void 0);m=p=_([C({tag:"ui5-view-settings-dialog",renderer:se,styles:et,template:He,dependencies:[ye,ue,ge,ce,pe,he,_e,me,fe,be]}),E("confirm",{detail:{sortOrder:{type:String},sortBy:{type:String},sortByItem:{type:HTMLElement},sortDescending:{type:Boolean},filters:{type:Array}}}),E("cancel",{detail:{sortOrder:{type:String},sortBy:{type:String},sortByItem:{type:HTMLElement},sortDescending:{type:Boolean},filters:{type:Array}}}),E("before-open")],m);m.define();const tt=m,it=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"})),D=N("ui5-view-settings-dialog",[],["sortDescending"],["filterItems","sortItems"],["before-open","cancel","confirm"],()=>T(()=>Promise.resolve().then(()=>it),void 0,import.meta.url));D.displayName="ViewSettingsDialog";try{D.displayName="ViewSettingsDialog",D.__docgenInfo={description:'The `ViewSettingsDialog` component helps the user to sort data within a list or a table. It consists of several lists like `Sort order` which is built-in and `Sort By` and `Filter By` lists, for which you must be provide items(`SortItem` & `FilterItem` respectively) These options can be used to create sorters for a table. The `ViewSettingsDialog` interrupts the current application processing as it is the only focused UI element and the main screen is dimmed/blocked. The `ViewSettingsDialog` is modal, which means that user action is required before returning to the parent window is possible.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ViewSettingsDialog" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"ViewSettingsDialog",props:{filterItems:{defaultValue:null,description:'Defines the `filterItems` list. **Note:** If you want to use this slot, you need to import used item: `import "@ui5/webcomponents-fiori/dist/FilterItem";`\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="filterItems"`).\nSince you can\'t change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component\'s children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).',name:"filterItems",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},sortItems:{defaultValue:null,description:`Defines the list of items against which the user could sort data. **Note:** If you want to use this slot, you need to import used item: \`import "@ui5/webcomponents-fiori/dist/SortItem";\`

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="sortItems"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"sortItems",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ViewSettingsDialogDomRef, never>) => void"}},onCancel:{defaultValue:null,description:"Fired when cancel button is activated.",name:"onCancel",required:!1,type:{name:"(event: Ui5CustomEvent<ViewSettingsDialogDomRef, { sortOrder: string; sortBy: string; sortByItem: HTMLElement; sortDescending: boolean; filterItems: unknown[]; }>) => void"}},onConfirm:{defaultValue:null,description:"Fired when confirmation button is activated.",name:"onConfirm",required:!1,type:{name:"(event: Ui5CustomEvent<ViewSettingsDialogDomRef, { sortOrder: string; sortBy: string; sortByItem: HTMLElement; sortDescending: boolean; filterItems: unknown[]; }>) => void"}},sortDescending:{defaultValue:null,description:"Defines the initial sort order.",name:"sortDescending",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const nt={title:"Modals & Popovers / ViewSettingsDialog",component:D,argTypes:{filterItems:{control:{disable:!0}},sortItems:{control:{disable:!0}}},args:{filterItems:$(O,{children:[u(B,{text:"Position",values:$(O,{children:[u(g,{text:"CEO"}),u(g,{text:"CTO"}),u(g,{text:"CIO"})]})}),u(B,{text:"Department",values:$(O,{children:[u(g,{text:"Legal"}),u(g,{text:"Finance"}),u(g,{text:"Development"})]})})]}),sortItems:$(O,{children:[u(y,{text:"Name"}),u(y,{text:"Position"}),u(y,{text:"Company"}),u(y,{text:"Department"})]})},parameters:{chromatic:{delay:999}}},ne=R.forwardRef((t,e)=>re.createPortal(u(D,{...t,ref:e}),document.body));ne.displayName="ViewSettingsDialog";const I={render:t=>{const e=R.useRef(null);return R.useEffect(()=>{},[]),$(O,{children:[u(Ce,{onClick:()=>{e.current.show()},children:"Show ViewSettingsDialog"}),u(ne,{ref:e,...t})]})}};var Q,K,X;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef<ViewSettingsDialogDomRef>(null);
    useEffect(() => {
      if (isChromatic) {
        ref.current.show();
      }
    }, []);
    return <>
        <Button onClick={() => {
        ref.current.show();
      }}>
          Show ViewSettingsDialog
        </Button>
        <ViewSettingsDialog ref={ref} {...args} />
      </>;
  }
}`,...(X=(K=I.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};const rt=["Default"],Et=Object.freeze(Object.defineProperty({__proto__:null,Default:I,__namedExportsOrder:rt,default:nt},Symbol.toStringTag,{value:"Module"}));export{Et as C,I as D,B as F,y as S,g as a};
//# sourceMappingURL=ViewSettingsDialog.stories-25f669b6.js.map
