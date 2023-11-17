import{j as c}from"./jsx-runtime-DtaoT6pD.js";import{r as V}from"./index-OjgoNOWw.js";import{r as ie}from"./index-QYh6idnL.js";import{_ as D}from"./iframe-_OlRtZJR.js";import{p as m,c as I,w as T,b as a,d as l,l as r,s as ne,f as oe}from"./withWebComponent-ceo0jn6D.js";import{s as E}from"./slot-HSrR9XJ-.js";import{c as g,e as N}from"./Icon-HNXZSIOG.js";import{U as F,o as re,r as Q,n as se,p as le}from"./UI5Element-51XrG2PJ.js";import ae from"./Dialog-BkI39EIa.js";import{b as de}from"./Button-a5xMWTkk.js";import ce from"./Label-z__cPwIf.js";import ue from"./GroupHeaderListItem-eduhChA9.js";import{d as he}from"./ListItemBase-_j3gRdH2.js";import pe from"./StandardListItem-b4f3e0sc.js";import{a as me}from"./Title-QpYFGHiM.js";import{a as _e,b as fe}from"./SegmentedButton-cRDTJTKS.js";import{a as ge}from"./Bar-N5iKDpB5.js";import{r as K}from"./Icons-3pbvVZUr.js";import{p as X}from"./i18n-defaults-n2A5pq_J.js";import"./filter-FVU4PAgi.js";import"./nav-back-woCxyoyk.js";import{az as j,aA as be,aB as Se,aC as ye,aD as ve,aE as $e,aF as we,aG as Oe,aH as Be}from"./i18n-defaults-meCbHC3L.js";import{s as De}from"./parameters-bundle.css-h8WFSBOu.js";import{B as Ie}from"./index-2S6zoQWg.js";var k;(function(o){o.Sort="Sort",o.Filter="Filter"})(k||(k={}));const b=k;var x=function(o,e,t,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,i);else for(var u=o.length-1;u>=0;u--)(d=o[u])&&(s=(n<3?d(s):n>3?d(e,t,s):d(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s};let y=class extends F{};x([m()],y.prototype,"text",void 0);x([m()],y.prototype,"additionalText",void 0);x([E()],y.prototype,"values",void 0);y=x([I("ui5-filter-item")],y);y.define();const Te=y,Fe=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"})),O=T("ui5-filter-item",["additionalText","text"],[],["values"],[],()=>D(()=>Promise.resolve().then(()=>Fe),void 0,import.meta.url));O.displayName="FilterItem";try{O.displayName="FilterItem",O.__docgenInfo={description:"",displayName:"FilterItem",props:{values:{defaultValue:null,description:`Defines the \`values\` list.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="values"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"values",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},additionalText:{defaultValue:null,description:"Defines the additional text of the component.",name:"additionalText",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var L=function(o,e,t,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,i);else for(var u=o.length-1;u>=0;u--)(d=o[u])&&(s=(n<3?d(s):n>3?d(e,t,s):d(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s};let v=class extends F{};L([m()],v.prototype,"text",void 0);L([m({type:Boolean})],v.prototype,"selected",void 0);v=L([I("ui5-filter-item-option")],v);v.define();const xe=v,Ce=Object.freeze(Object.defineProperty({__proto__:null,default:xe},Symbol.toStringTag,{value:"Module"})),f=T("ui5-filter-item-option",["text"],["selected"],[],[],()=>D(()=>Promise.resolve().then(()=>Ce),void 0,import.meta.url));f.displayName="FilterItemOption";try{f.displayName="FilterItemOption",f.__docgenInfo={description:"",displayName:"FilterItemOption",props:{selected:{defaultValue:null,description:"Defines if the component is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var R=function(o,e,t,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,i);else for(var u=o.length-1;u>=0;u--)(d=o[u])&&(s=(n<3?d(s):n>3?d(e,t,s):d(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s};let $=class extends F{};R([m()],$.prototype,"text",void 0);R([m({type:Boolean})],$.prototype,"selected",void 0);$=R([I("ui5-sort-item")],$);$.define();const Ne=$,Ve=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"})),S=T("ui5-sort-item",["text"],["selected"],[],[],()=>D(()=>Promise.resolve().then(()=>Ve),void 0,import.meta.url));S.displayName="SortItem";try{S.displayName="SortItem",S.__docgenInfo={description:"",displayName:"SortItem",props:{selected:{defaultValue:null,description:"Defines if the component is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ke="sort",Z="M405.022 498.566q-9.951 9.951-22.888 9.951t-21.893-9.951l-101.504-100.51q-11.942-11.941 0-22.888 4.975-4.976 10.946-4.976t10.947 4.976l84.587 84.587v-317.45q0-15.922 15.922-15.922t15.922 15.922v319.44l86.577-86.577q10.947-10.946 22.889 0 10.946 10.947 0 22.888zM253.761 110.46q10.946 11.941 0 22.888-4.976 4.976-11.444 4.976t-11.444-4.976l-86.578-86.577v319.44q0 15.922-15.922 15.922t-15.922-15.922V48.762l-84.587 84.587q-4.976 4.976-10.947 4.976t-10.946-4.976q-11.942-10.947 0-22.888L107.475 9.95Q116.431 0 129.368 0t22.889 9.951z",Ee=!1,Le=X,Re="SAP-icons-v4",je="@ui5/webcomponents-icons";K(ke,{pathData:Z,ltr:Ee,accData:Le,collection:Re,packageName:je});const qe="sort",ee="M504 124q8 8 8 18 0 11-7.5 18.5T486 168t-18-7l-42-42v335q0 11-7.5 18.5T400 480t-18-7.5-7-18.5V118l-43 43q-7 7-18 7t-18.5-7.5T288 142q0-10 8-18l86-85q7-7 18-7t18 7zM180 351q7-7 18-7t18.5 7.5T224 370q0 10-8 18l-86 85q-7 7-18 7t-18-7L8 388q-8-8-8-18 0-11 7.5-18.5T26 344t18 7l43 43V58q0-11 7.5-18.5T113 32t18 7.5 7 18.5v335z",Me=!1,Pe=X,Ue="SAP-icons-v5",Ae="@ui5/webcomponents-icons";K(qe,{pathData:ee,ltr:Me,accData:Pe,collection:Ue,packageName:Ae});re();function ze(o,e,t){return t?a`<${l("ui5-dialog",e,t)} aria-label="${r(this._dialogTitle)}" @ui5-after-open=${r(this._focusRecentlyUsedControl)} @ui5-before-close=${r(this._restoreConfirmedOnEscape)} ?stretch=${this._isPhone}><div slot="header" class="ui5-vsd-header"><div class="ui5-vsd-header-container"><div class="ui5-vsd-header-start">${this.showBackButton?q.call(this,o,e,t):void 0}<${l("ui5-title",e,t)} class="ui5-vsd-title" id="${r(this._id)}-label">${r(this._title)}</${l("ui5-title",e,t)}></div><div class="ui5-vsd-header-end"><${l("ui5-button",e,t)} design="Transparent" @click="${this._resetSettings}" ?disabled=${this._disableResetButton}>${r(this._resetButtonLabel)}</${l("ui5-button",e,t)}></div></div>${this.showBackButton?void 0:M.call(this,o,e,t)}</div><div class="ui5-vsd-content" ?expand-content="${this.expandContent}">${this.shouldBuildSort?P.call(this,o,e,t):void 0}${this.shouldBuildFilter?z.call(this,o,e,t):void 0}</div><div slot="footer" class="ui5-vsd-footer"><${l("ui5-button",e,t)} design="Emphasized" @click="${this._confirmSettings}">${r(this._okButtonLabel)}</${l("ui5-button",e,t)}><${l("ui5-button",e,t)} design="Transparent" @click="${this._cancelSettings}">${r(this._cancelButtonLabel)}</${l("ui5-button",e,t)}></div></${l("ui5-dialog",e,t)}>`:a`<ui5-dialog aria-label="${r(this._dialogTitle)}" @ui5-after-open=${r(this._focusRecentlyUsedControl)} @ui5-before-close=${r(this._restoreConfirmedOnEscape)} ?stretch=${this._isPhone}><div slot="header" class="ui5-vsd-header"><div class="ui5-vsd-header-container"><div class="ui5-vsd-header-start">${this.showBackButton?q.call(this,o,e,t):void 0}<ui5-title class="ui5-vsd-title" id="${r(this._id)}-label">${r(this._title)}</ui5-title></div><div class="ui5-vsd-header-end"><ui5-button design="Transparent" @click="${this._resetSettings}" ?disabled=${this._disableResetButton}>${r(this._resetButtonLabel)}</ui5-button></div></div>${this.showBackButton?void 0:M.call(this,o,e,t)}</div><div class="ui5-vsd-content" ?expand-content="${this.expandContent}">${this.shouldBuildSort?P.call(this,o,e,t):void 0}${this.shouldBuildFilter?z.call(this,o,e,t):void 0}</div><div slot="footer" class="ui5-vsd-footer"><ui5-button design="Emphasized" @click="${this._confirmSettings}">${r(this._okButtonLabel)}</ui5-button><ui5-button design="Transparent" @click="${this._cancelSettings}">${r(this._cancelButtonLabel)}</ui5-button></div></ui5-dialog>`}function q(o,e,t){return t?a`<${l("ui5-button",e,t)} design="Transparent" icon="nav-back" class="ui5-vsd-back-button" @click="${this._navigateToFilters}"></${l("ui5-button",e,t)}>`:a`<ui5-button design="Transparent" icon="nav-back" class="ui5-vsd-back-button" @click="${this._navigateToFilters}"></ui5-button>`}function M(o,e,t){return a`${this.hasPagination?We.call(this,o,e,t):void 0}`}function We(o,e,t){return t?a`<div class="ui5-vsd-sub-header-container"><div class="ui5-vsd-sub-header"><${l("ui5-segmented-button",e,t)} @ui5-selection-change="${r(this._handleModeChange)}"><${l("ui5-segmented-button-item",e,t)} ?pressed="${this.isModeSort}" icon="sort" mode="Sort"></${l("ui5-segmented-button-item",e,t)}><${l("ui5-segmented-button-item",e,t)} ?pressed="${this.isModeFilter}" icon="filter" mode="Filter"></${l("ui5-segmented-button-item",e,t)}></${l("ui5-segmented-button",e,t)}></div></div>`:a`<div class="ui5-vsd-sub-header-container"><div class="ui5-vsd-sub-header"><ui5-segmented-button @ui5-selection-change="${r(this._handleModeChange)}"><ui5-segmented-button-item ?pressed="${this.isModeSort}" icon="sort" mode="Sort"></ui5-segmented-button-item><ui5-segmented-button-item ?pressed="${this.isModeFilter}" icon="filter" mode="Filter"></ui5-segmented-button-item></ui5-segmented-button></div></div>`}function P(o,e,t){return a`${this.isModeSort?Je.call(this,o,e,t):void 0}`}function Je(o,e,t){return t?a`<div class="ui5-vsd-sort"><${l("ui5-list",e,t)} mode="SingleSelectBegin" @ui5-item-click="${r(this._onSortOrderChange)}" sort-order accessible-name-ref="${r(this._id)}-label"><${l("ui5-li-groupheader",e,t)}>${r(this._sortOrderLabel)}</${l("ui5-li-groupheader",e,t)}>${g(this._currentSettings.sortOrder,(i,n)=>i._id||n,(i,n)=>U.call(this,o,e,t,i,n))}</${l("ui5-list",e,t)}><${l("ui5-list",e,t)} mode="SingleSelectBegin" @ui5-item-click=${r(this._onSortByChange)} sort-by><${l("ui5-li-groupheader",e,t)}>${r(this._sortByLabel)}</${l("ui5-li-groupheader",e,t)}>${g(this._currentSettings.sortBy,(i,n)=>i._id||n,(i,n)=>A.call(this,o,e,t,i,n))}</${l("ui5-list",e,t)}></div>`:a`<div class="ui5-vsd-sort"><ui5-list mode="SingleSelectBegin" @ui5-item-click="${r(this._onSortOrderChange)}" sort-order accessible-name-ref="${r(this._id)}-label"><ui5-li-groupheader>${r(this._sortOrderLabel)}</ui5-li-groupheader>${g(this._currentSettings.sortOrder,(i,n)=>i._id||n,(i,n)=>U.call(this,o,e,t,i,n))}</ui5-list><ui5-list mode="SingleSelectBegin" @ui5-item-click=${r(this._onSortByChange)} sort-by><ui5-li-groupheader>${r(this._sortByLabel)}</ui5-li-groupheader>${g(this._currentSettings.sortBy,(i,n)=>i._id||n,(i,n)=>A.call(this,o,e,t,i,n))}</ui5-list></div>`}function U(o,e,t,i,n){return t?a`<${l("ui5-li",e,t)} ?selected="${i.selected}">${r(i.text)}</${l("ui5-li",e,t)}>`:a`<ui5-li ?selected="${i.selected}">${r(i.text)}</ui5-li>`}function A(o,e,t,i,n){return t?a`<${l("ui5-li",e,t)} data-ui5-external-action-item-index="${n}" ?selected="${i.selected}">${r(i.text)}</${l("ui5-li",e,t)}>`:a`<ui5-li data-ui5-external-action-item-index="${n}" ?selected="${i.selected}">${r(i.text)}</ui5-li>`}function z(o,e,t){return a`${this.isModeFilter?He.call(this,o,e,t):void 0}`}function He(o,e,t){return a`${this._filterStepTwo?Ge.call(this,o,e,t):Ke.call(this,o,e,t)}`}function Ge(o,e,t){return t?a`<${l("ui5-list",e,t)} accessible-name-ref="${r(this._id)}-label" mode="MultiSelect" @ui5-item-click="${r(this._handleFilterValueItemClick)}">${g(this._currentSettings.filters,(i,n)=>i._id||n,(i,n)=>W.call(this,o,e,t,i,n))}</${l("ui5-list",e,t)}>`:a`<ui5-list accessible-name-ref="${r(this._id)}-label" mode="MultiSelect" @ui5-item-click="${r(this._handleFilterValueItemClick)}">${g(this._currentSettings.filters,(i,n)=>i._id||n,(i,n)=>W.call(this,o,e,t,i,n))}</ui5-list>`}function W(o,e,t,i,n){return a`${i.selected?Ye.call(this,o,e,t,i,n):void 0}`}function Ye(o,e,t,i,n){return a`${g(i.filterOptions,(s,d)=>s._id||d,(s,d)=>Qe.call(this,o,e,t,s,d))}`}function Qe(o,e,t,i,n){return t?a`<${l("ui5-li",e,t)} ?selected=${i.selected}>${r(i.text)}</${l("ui5-li",e,t)}>`:a`<ui5-li ?selected=${i.selected}>${r(i.text)}</ui5-li>`}function Ke(o,e,t){return t?a`<${l("ui5-list",e,t)} @ui5-item-click="${r(this._changeCurrentFilter)}" accessible-name-ref="${r(this._id)}-label"><${l("ui5-li-groupheader",e,t)}>${r(this._filterByLabel)}</${l("ui5-li-groupheader",e,t)}>${g(this.filterItems,(i,n)=>i._id||n,(i,n)=>J.call(this,o,e,t,i,n))}</${l("ui5-list",e,t)}>`:a`<ui5-list @ui5-item-click="${r(this._changeCurrentFilter)}" accessible-name-ref="${r(this._id)}-label"><ui5-li-groupheader>${r(this._filterByLabel)}</ui5-li-groupheader>${g(this.filterItems,(i,n)=>i._id||n,(i,n)=>J.call(this,o,e,t,i,n))}</ui5-list>`}function J(o,e,t,i,n){return t?a`<${l("ui5-li",e,t)} class="ui5-vsd-filterItemList" ?selected=${i.selected} additional-text=${r(i.additionalText)}>${r(i.text)}</${l("ui5-li",e,t)}>`:a`<ui5-li class="ui5-vsd-filterItemList" ?selected=${i.selected} additional-text=${r(i.additionalText)}>${r(i.text)}</ui5-li>`}Q("@ui5/webcomponents-theming","sap_horizon",async()=>ne);Q("@ui5/webcomponents-fiori","sap_horizon",async()=>De);const Xe={packageName:"@ui5/webcomponents-fiori",fileName:"themes/ViewSettingsDialog.css",content:"[on-desktop] .ui5-vsd-content{height:var(--_ui5-v1-19-0_vsd_content_height);min-width:350px}[on-desktop] [expand-content].ui5-vsd-content{height:var(--_ui5-v1-19-0_vsd_expand_content_height);min-width:350px}.ui5-vsd-header{padding-bottom:.25rem;width:100%}.ui5-vsd-content{margin:0 .1px 0 -1rem}.ui5-vsd-title{font-size:var(--sapFontHeader5Size)}.ui5-vsd-header-container{align-items:center;display:flex;height:var(--_ui5-v1-19-0_vsd_header_container);justify-content:space-between;line-height:var(--_ui5-v1-19-0_vsd_header_container)}.ui5-vsd-header-end{display:flex}.ui5-vsd-sub-header{height:var(--_ui5-v1-19-0_vsd_sub_header_container_height);line-height:var(--_ui5-v1-19-0_vsd_sub_header_container_height)}.ui5-vsd-header-start{align-items:center;display:flex}.ui5-vsd-back-button{margin-inline-end:.5rem}.ui5-vsd-footer{align-items:center;display:flex;justify-content:flex-end;margin:.1875rem 0;width:100%}.ui5-vsd-footer [ui5-button]:first-child{margin-inline-end:.5rem;min-width:4rem}.ui5-vsd-sort{height:100%;width:100%}[ui5-li-groupheader]{overflow:hidden}[ui5-dialog]::part(content){padding-bottom:0;padding-inline-end:0;padding-top:0}:host [ui5-li]::part(native-li){padding-inline-start:var(--_ui5-v1-19-0_vsd_content_li_padding)}:host [ui5-li].ui5-vsd-filterItemList::part(native-li){padding-inline-start:1rem}"};var _=function(o,e,t,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,i);else for(var u=o.length-1;u>=0;u--)(d=o[u])&&(s=(n<3?d(s):n>3?d(e,t,s):d(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s},h;let p=h=class extends F{constructor(){super(),this._currentSettings={sortOrder:[],sortBy:[],filters:[]}}onBeforeRendering(){this._currentSettings.filters&&this._currentSettings.filters.length&&this._setAdditionalTexts(),!this.shouldBuildSort&&this.shouldBuildFilter&&(this._currentMode=b.Filter)}onInvalidation(e){e.type==="slot"&&(this._confirmedSettings=this._settings)}_setAdditionalTexts(){this.filterItems.forEach((e,t)=>{let i=0;for(let n=0;n<e.values.length;n++)this._currentSettings.filters[t].filterOptions[n].selected&&i++;e.additionalText=i?`${i}`:""})}static async onDefine(){h.i18nBundle=await se("@ui5/webcomponents-fiori")}get _selectedFilter(){for(let e=0;e<this._currentSettings.filters.length;e++)if(this._currentSettings.filters[e].selected)return this._currentSettings.filters[e]}get shouldBuildSort(){return!!this.sortItems.length}get shouldBuildFilter(){return!!this.filterItems.length}get hasPagination(){return this.shouldBuildSort&&this.shouldBuildFilter}get _filterByTitle(){const e=this._selectedFilter?this._selectedFilter.text:"";return`${h.i18nBundle.getText(j)}: ${e}`}get _dialogTitle(){return h.i18nBundle.getText(be)}get _okButtonLabel(){return h.i18nBundle.getText(Se)}get _cancelButtonLabel(){return h.i18nBundle.getText(ye)}get _resetButtonLabel(){return h.i18nBundle.getText(ve)}get _ascendingLabel(){return h.i18nBundle.getText($e)}get _descendingLabel(){return h.i18nBundle.getText(we)}get _sortOrderLabel(){return h.i18nBundle.getText(Oe)}get _filterByLabel(){return h.i18nBundle.getText(j)}get _sortByLabel(){return h.i18nBundle.getText(Be)}get _isPhone(){return le()}get _sortAscending(){return!this.sortDescending}get _title(){return this.showBackButton?this._filterByTitle:this._dialogTitle}get _disableResetButton(){return this._dialog&&this._sortSetttingsAreInitial&&this._filteresAreInitial}get _sortSetttingsAreInitial(){let e=!0;return["sortBy","sortOrder"].forEach(t=>{this._currentSettings[t].forEach((i,n)=>{i.selected!==this._initialSettings[t][n].selected&&(e=!1)})}),e}get _filteresAreInitial(){let e=!0;return this._currentSettings.filters.forEach((t,i)=>{for(let n=0;n<t.filterOptions.length;n++)t.filterOptions[n].selected!==this._initialSettings.filters[i].filterOptions[n].selected&&(e=!1)}),e}get _settings(){return{sortOrder:JSON.parse(JSON.stringify(this.initSortOrderItems)),sortBy:JSON.parse(JSON.stringify(this.initSortByItems)),filters:this.filterItems.map(e=>({text:e.text,selected:!1,filterOptions:e.values.map(t=>({text:t.text,selected:t.selected}))}))}}get initSortByItems(){return this.sortItems.map((e,t)=>({text:e.text,selected:e.selected,index:t}))}get initSortOrderItems(){return[{text:this._ascendingLabel,selected:!this.sortDescending},{text:this._descendingLabel,selected:this.sortDescending}]}get expandContent(){return this._filterStepTwo||!this.hasPagination}get isModeSort(){return this._currentMode===b.Sort}get isModeFilter(){return this._currentMode===b.Filter}get showBackButton(){return this.isModeFilter&&this._filterStepTwo}get _sortOrderListDomRef(){return this.shadowRoot.querySelector("[ui5-list][sort-order]")}get _sortByList(){return this.shadowRoot.querySelector("[ui5-list][sort-by]")}get _dialogDomRef(){return this.shadowRoot.querySelector("[ui5-dialog]")}show(){var e;this._dialog?this._restoreSettings(this._confirmedSettings):(this._sortOrder=this._sortOrderListDomRef,this._sortBy=this._sortByList,this._initialSettings=this._settings,this._currentSettings=this._settings,this._confirmedSettings=this._settings,this._dialog=this._dialogDomRef),this.fireEvent("before-open",{},!0,!1),this._dialog.show(!0),(e=this._dialog.querySelector("[ui5-list]"))==null||e.focusFirstItem()}_handleModeChange(e){const t=e.detail.selectedItem.getAttribute("mode");this._currentMode=b[t]}_handleFilterValueItemClick(e){this._currentSettings.filters=this._currentSettings.filters.map(t=>(t.selected&&t.filterOptions.forEach(i=>{i.text===e.detail.item.innerText&&(i.selected=!i.selected)}),t)),this._currentSettings=JSON.parse(JSON.stringify(this._currentSettings))}_navigateToFilters(){this._filterStepTwo=!1}_changeCurrentFilter(e){this._filterStepTwo=!0,this._currentSettings.filters=this._currentSettings.filters.map(t=>(t.selected=t.text===e.detail.item.innerText,t))}close(){this._dialog&&this._dialog.close()}_focusRecentlyUsedControl(){if(!this._recentlyFocused||!Object.keys(this._recentlyFocused).length)return;const e=this._recentlyFocused.getSelectedItems();e.length&&e[0].focus()}_confirmSettings(){this.close(),this._confirmedSettings=this._currentSettings,this.fireEvent("confirm",this.eventsParams)}_cancelSettings(){this._restoreSettings(this._confirmedSettings),this.fireEvent("cancel",this.eventsParams),this.close()}get eventsParams(){const e=this._currentSettings.sortOrder.filter(C=>C.selected)[0],t=this._currentSettings.sortBy.filter(C=>C.selected)[0],i=e&&e.text,n=!this._currentSettings.sortOrder[0].selected,s=t&&t.text,d=t&&t.index,u=this.sortItems[d];return{sortOrder:i,sortDescending:n,sortBy:s,sortByItem:u,filters:this.selectedFilters}}get selectedFilters(){const e=[];return this._currentSettings.filters.forEach(t=>{const i=[];t.filterOptions.forEach(n=>{n.selected&&i.push(n.text)}),i.length&&(e.push({}),e[e.length-1][t.text]=i)}),e}_restoreConfirmedOnEscape(e){e.detail.escPressed&&(this._cancelSettings(),this._currentMode=b.Sort,this._filterStepTwo=!1)}_resetSettings(){this._restoreSettings(this._initialSettings),this._recentlyFocused=this._sortOrder,this._focusRecentlyUsedControl()}_restoreSettings(e){this._currentSettings=JSON.parse(JSON.stringify(e)),this._currentMode=b.Sort,this._filterStepTwo=!1}_onSortOrderChange(e){this._recentlyFocused=this._sortOrder,this._currentSettings.sortOrder=this.initSortOrderItems.map(t=>(t.selected=t.text===e.detail.item.innerText,t)),this._currentSettings=JSON.parse(JSON.stringify(this._currentSettings))}_onSortByChange(e){const t=Number(e.detail.item.getAttribute("data-ui5-external-action-item-index"));this._recentlyFocused=this._sortBy,this._currentSettings.sortBy=this.initSortByItems.map((i,n)=>(i.selected=n===t,i)),this._currentSettings=JSON.parse(JSON.stringify(this._currentSettings))}setConfirmedSettings(e){if(e&&this._dialog&&!this._dialog.isOpen()){const t=JSON.parse(JSON.stringify(this._confirmedSettings));if(e.sortOrder)for(let i=0;i<t.sortOrder.length;i++)t.sortOrder[i].text===e.sortOrder?t.sortOrder[i].selected=!0:t.sortOrder[i].selected=!1;if(e.sortBy)for(let i=0;i<t.sortBy.length;i++)t.sortBy[i].text===e.sortBy?t.sortBy[i].selected=!0:t.sortBy[i].selected=!1;if(e.filters){const i={};for(let n=0;n<e.filters.length;n++)i[Object.keys(e.filters[n])[0]]=e.filters[n][Object.keys(e.filters[n])[0]];for(let n=0;n<t.filters.length;n++)for(let s=0;s<t.filters[n].filterOptions.length;s++)i[t.filters[n].text]&&i[t.filters[n].text].indexOf(t.filters[n].filterOptions[s].text)>-1?t.filters[n].filterOptions[s].selected=!0:t.filters[n].filterOptions[s].selected=!1}this._confirmedSettings=JSON.parse(JSON.stringify(t))}}};_([m({type:Boolean})],p.prototype,"sortDescending",void 0);_([m({type:Object})],p.prototype,"_recentlyFocused",void 0);_([m({type:Object})],p.prototype,"_initialSettings",void 0);_([m({type:Object})],p.prototype,"_confirmedSettings",void 0);_([m({type:Object})],p.prototype,"_currentSettings",void 0);_([m({type:b,defaultValue:b.Sort})],p.prototype,"_currentMode",void 0);_([m({type:Boolean,noAttribute:!0})],p.prototype,"_filterStepTwo",void 0);_([E()],p.prototype,"sortItems",void 0);_([E()],p.prototype,"filterItems",void 0);p=h=_([I({tag:"ui5-view-settings-dialog",renderer:oe,styles:Xe,template:ze,dependencies:[ge,de,me,ae,ce,he,pe,ue,_e,fe]}),N("confirm",{detail:{sortOrder:{type:String},sortBy:{type:String},sortByItem:{type:HTMLElement},sortDescending:{type:Boolean},filters:{type:Array}}}),N("cancel",{detail:{sortOrder:{type:String},sortBy:{type:String},sortByItem:{type:HTMLElement},sortDescending:{type:Boolean},filters:{type:Array}}}),N("before-open")],p);p.define();const Ze=p,et=Object.freeze(Object.defineProperty({__proto__:null,default:Ze},Symbol.toStringTag,{value:"Module"})),B=T("ui5-view-settings-dialog",[],["sortDescending"],["filterItems","sortItems"],["before-open","cancel","confirm"],()=>D(()=>Promise.resolve().then(()=>et),void 0,import.meta.url));B.displayName="ViewSettingsDialog";try{B.displayName="ViewSettingsDialog",B.__docgenInfo={description:"The `ViewSettingsDialog` component helps the user to sort data within a list or a table. It consists of several lists like `Sort order` which is built-in and `Sort By` and `Filter By` lists, for which you must be provide items(`SortItem` & `FilterItem` respectively) These options can be used to create sorters for a table. The `ViewSettingsDialog` interrupts the current application processing as it is the only focused UI element and the main screen is dimmed/blocked. The `ViewSettingsDialog` is modal, which means that user action is required before returning to the parent window is possible.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-ViewSettingsDialog)",displayName:"ViewSettingsDialog",props:{filterItems:{defaultValue:null,description:'Defines the `filterItems` list. **Note:** If you want to use this slot, you need to import used item: `import "@ui5/webcomponents-fiori/dist/FilterItem";`\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="filterItems"`).\nSince you can\'t change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component\'s children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).',name:"filterItems",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},sortItems:{defaultValue:null,description:`Defines the list of items against which the user could sort data. **Note:** If you want to use this slot, you need to import used item: \`import "@ui5/webcomponents-fiori/dist/SortItem";\`

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="sortItems"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"sortItems",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ViewSettingsDialogDomRef, never>) => void"}},onCancel:{defaultValue:null,description:"Fired when cancel button is activated.",name:"onCancel",required:!1,type:{name:"(event: Ui5CustomEvent<ViewSettingsDialogDomRef, ViewSettingsDialogCancelEventDetail>) => void"}},onConfirm:{defaultValue:null,description:"Fired when confirmation button is activated.",name:"onConfirm",required:!1,type:{name:"(event: Ui5CustomEvent<ViewSettingsDialogDomRef, ViewSettingsDialogConfirmEventDetail>) => void"}},sortDescending:{defaultValue:null,description:"Defines the initial sort order.",name:"sortDescending",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const tt={title:"Modals & Popovers / ViewSettingsDialog",component:B,argTypes:{filterItems:{control:{disable:!0}},sortItems:{control:{disable:!0}}},args:{filterItems:c.jsxs(c.Fragment,{children:[c.jsx(O,{text:"Position",values:c.jsxs(c.Fragment,{children:[c.jsx(f,{text:"CEO"}),c.jsx(f,{text:"CTO"}),c.jsx(f,{text:"CIO"})]})}),c.jsx(O,{text:"Department",values:c.jsxs(c.Fragment,{children:[c.jsx(f,{text:"Legal"}),c.jsx(f,{text:"Finance"}),c.jsx(f,{text:"Development"})]})})]}),sortItems:c.jsxs(c.Fragment,{children:[c.jsx(S,{text:"Name"}),c.jsx(S,{text:"Position"}),c.jsx(S,{text:"Company"}),c.jsx(S,{text:"Department"})]})},parameters:{chromatic:{delay:999}}},te=V.forwardRef((o,e)=>ie.createPortal(c.jsx(B,{...o,ref:e}),document.body));te.displayName="ViewSettingsDialog";const w={render:o=>{const e=V.useRef(null);return V.useEffect(()=>{},[]),c.jsxs(c.Fragment,{children:[c.jsx(Ie,{onClick:()=>{e.current.show()},children:"Show ViewSettingsDialog"}),c.jsx(te,{ref:e,...o})]})}};var H,G,Y;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Y=(G=w.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};const it=["Default"],Ct=Object.freeze(Object.defineProperty({__proto__:null,Default:w,__namedExportsOrder:it,default:tt},Symbol.toStringTag,{value:"Module"}));export{Ct as C,w as D,O as F,S,f as a};
//# sourceMappingURL=ViewSettingsDialog.stories-egdyO-d5.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}