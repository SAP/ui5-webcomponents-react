import{j as c}from"./jsx-runtime-5926aa06.js";import{r as V}from"./index-ebeaab24.js";import{r as ie}from"./index-9c09ad76.js";import{_ as B}from"./iframe-97e1d9cd.js";import{p as h,c as D,w as T,e as a,s as l,l as o,a as ne,d as re}from"./withWebComponent-c710bf85.js";import{s as R}from"./slot-76e48863.js";import{c as f,e as k}from"./Icon-16710c43.js";import{U as F,k as oe,a as Q,d as se}from"./UI5Element-e8adceda.js";import{c as le}from"./Device-208919c6.js";import ae from"./Dialog-0fdd42ca.js";import{B as de}from"./Button-6eea99db.js";import ce from"./Label-e22f23ee.js";import ue from"./GroupHeaderListItem-f5a2d69c.js";import{L as me}from"./ListItemBase-49bcf604.js";import pe from"./StandardListItem-1576ed3d.js";import{a as he}from"./Title-c7a0da36.js";import{S as _e,a as ge}from"./SegmentedButton-e817eaba.js";import{a as fe}from"./Bar-6f655916.js";import{h as K}from"./Icons-5b18f7d2.js";import{x as X}from"./i18n-defaults-80781f7e.js";import"./filter-d6e4b3d6.js";import"./nav-back-455500fc.js";import{a4 as q,a5 as be,a6 as ye,a7 as Se,a8 as ve,a9 as we,aa as $e,ab as Oe,ac as Ie}from"./i18n-defaults-217b10b4.js";import{s as Be}from"./parameters-bundle.css-6b4a2ffb.js";import{B as De}from"./index-8f3b96f9.js";var E;(function(t){t.Sort="Sort",t.Filter="Filter"})(E||(E={}));const b=E;var C=globalThis&&globalThis.__decorate||function(t,e,i,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,n);else for(var u=t.length-1;u>=0;u--)(d=t[u])&&(s=(r<3?d(s):r>3?d(e,i,s):d(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let S=class extends F{};C([h()],S.prototype,"text",void 0);C([h()],S.prototype,"additionalText",void 0);C([R()],S.prototype,"values",void 0);S=C([D("ui5-filter-item")],S);S.define();const Te=S,Fe=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"})),O=T("ui5-filter-item",["additionalText","text"],[],["values"],[],()=>B(()=>Promise.resolve().then(()=>Fe),void 0,import.meta.url));O.displayName="FilterItem";try{O.displayName="FilterItem",O.__docgenInfo={description:`

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ViewSettingsDialog" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"FilterItem",props:{values:{defaultValue:null,description:`Defines the \`values\` list.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="values"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"values",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},additionalText:{defaultValue:null,description:"Defines the additional text of the component.",name:"additionalText",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var j=globalThis&&globalThis.__decorate||function(t,e,i,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,n);else for(var u=t.length-1;u>=0;u--)(d=t[u])&&(s=(r<3?d(s):r>3?d(e,i,s):d(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let v=class extends F{};j([h()],v.prototype,"text",void 0);j([h({type:Boolean})],v.prototype,"selected",void 0);v=j([D("ui5-filter-item-option")],v);v.define();const Ce=v,Ne=Object.freeze(Object.defineProperty({__proto__:null,default:Ce},Symbol.toStringTag,{value:"Module"})),g=T("ui5-filter-item-option",["text"],["selected"],[],[],()=>B(()=>Promise.resolve().then(()=>Ne),void 0,import.meta.url));g.displayName="FilterItemOption";try{g.displayName="FilterItemOption",g.__docgenInfo={description:`

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ViewSettingsDialog" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"FilterItemOption",props:{selected:{defaultValue:null,description:"Defines if the component is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var L=globalThis&&globalThis.__decorate||function(t,e,i,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,n);else for(var u=t.length-1;u>=0;u--)(d=t[u])&&(s=(r<3?d(s):r>3?d(e,i,s):d(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let w=class extends F{};L([h()],w.prototype,"text",void 0);L([h({type:Boolean})],w.prototype,"selected",void 0);w=L([D("ui5-sort-item")],w);w.define();const ke=w,Ve=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),y=T("ui5-sort-item",["text"],["selected"],[],[],()=>B(()=>Promise.resolve().then(()=>Ve),void 0,import.meta.url));y.displayName="SortItem";try{y.displayName="SortItem",y.__docgenInfo={description:`

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ViewSettingsDialog" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"SortItem",props:{selected:{defaultValue:null,description:"Defines if the component is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Ee="sort",Z="M405.022 498.566q-9.951 9.951-22.888 9.951t-21.893-9.951l-101.504-100.51q-11.942-11.941 0-22.888 4.975-4.976 10.946-4.976t10.947 4.976l84.587 84.587v-317.45q0-15.922 15.922-15.922t15.922 15.922v319.44l86.577-86.577q10.947-10.946 22.889 0 10.946 10.947 0 22.888zM253.761 110.46q10.946 11.941 0 22.888-4.976 4.976-11.444 4.976t-11.444-4.976l-86.578-86.577v319.44q0 15.922-15.922 15.922t-15.922-15.922V48.762l-84.587 84.587q-4.976 4.976-10.947 4.976t-10.946-4.976q-11.942-10.947 0-22.888L107.475 9.95Q116.431 0 129.368 0t22.889 9.951z",Re=!1,je=X,Le="SAP-icons-v4",qe="@ui5/webcomponents-icons";K(Ee,{pathData:Z,ltr:Re,accData:je,collection:Le,packageName:qe});const Pe="sort",ee="M64 358l34 34V58q0-26 26-26 11 0 18.5 7t7.5 19v334l33-34q8-7 19-7 10 0 18 7 7 8 7 18 0 11-7 19l-78 77q-8 8-18 8t-18-8l-78-77q-8-10-8-19 0-8 8-18 7-7 18-7t18 7zm265-202q-7 8-18 8t-18-8q-8-8-8-18t8-18l78-77q7-8 18-8t18 8l77 77q8 7 8 18t-8 18q-7 8-18 8t-18-8l-33-33v331q0 11-7.5 18.5T389 480q-12 0-19-7.5t-7-18.5V123z",Me=!1,Ue=X,Ae="SAP-icons-v5",We="@ui5/webcomponents-icons";K(Pe,{pathData:ee,ltr:Me,accData:Ue,collection:Ae,packageName:We});oe();const Je=(t,e,i)=>i?a`<${l("ui5-dialog",e,i)} aria-label="${o(t._dialogTitle)}" @ui5-after-open=${o(t._focusRecentlyUsedControl)} @ui5-before-close=${o(t._restoreConfirmedOnEscape)} ?stretch=${t._isPhone}><div slot="header" class="ui5-vsd-header"><div class="ui5-vsd-header-container"><div class="ui5-vsd-header-start">${t.showBackButton?P(t,e,i):void 0}<${l("ui5-title",e,i)} class="ui5-vsd-title" id="${o(t._id)}-label">${o(t._title)}</${l("ui5-title",e,i)}></div><div class="ui5-vsd-header-end"><${l("ui5-button",e,i)} design="Transparent" @click="${t._resetSettings}" ?disabled=${t._disableResetButton}>${o(t._resetButtonLabel)}</${l("ui5-button",e,i)}></div></div>${t.showBackButton?void 0:M(t,e,i)}</div><div class="ui5-vsd-content" ?expand-content="${t.expandContent}">${t.shouldBuildSort?U(t,e,i):void 0}${t.shouldBuildFilter?J(t,e,i):void 0}</div><div slot="footer" class="ui5-vsd-footer"><${l("ui5-button",e,i)} design="Emphasized" @click="${t._confirmSettings}">${o(t._okButtonLabel)}</${l("ui5-button",e,i)}><${l("ui5-button",e,i)} design="Transparent" @click="${t._cancelSettings}">${o(t._cancelButtonLabel)}</${l("ui5-button",e,i)}></div></${l("ui5-dialog",e,i)}>`:a`<ui5-dialog aria-label="${o(t._dialogTitle)}" @ui5-after-open=${o(t._focusRecentlyUsedControl)} @ui5-before-close=${o(t._restoreConfirmedOnEscape)} ?stretch=${t._isPhone}><div slot="header" class="ui5-vsd-header"><div class="ui5-vsd-header-container"><div class="ui5-vsd-header-start">${t.showBackButton?P(t,e,i):void 0}<ui5-title class="ui5-vsd-title" id="${o(t._id)}-label">${o(t._title)}</ui5-title></div><div class="ui5-vsd-header-end"><ui5-button design="Transparent" @click="${t._resetSettings}" ?disabled=${t._disableResetButton}>${o(t._resetButtonLabel)}</ui5-button></div></div>${t.showBackButton?void 0:M(t,e,i)}</div><div class="ui5-vsd-content" ?expand-content="${t.expandContent}">${t.shouldBuildSort?U(t,e,i):void 0}${t.shouldBuildFilter?J(t,e,i):void 0}</div><div slot="footer" class="ui5-vsd-footer"><ui5-button design="Emphasized" @click="${t._confirmSettings}">${o(t._okButtonLabel)}</ui5-button><ui5-button design="Transparent" @click="${t._cancelSettings}">${o(t._cancelButtonLabel)}</ui5-button></div></ui5-dialog>`,P=(t,e,i)=>i?a`<${l("ui5-button",e,i)} design="Transparent" icon="nav-back" class="ui5-vsd-back-button" @click="${t._navigateToFilters}"></${l("ui5-button",e,i)}>`:a`<ui5-button design="Transparent" icon="nav-back" class="ui5-vsd-back-button" @click="${t._navigateToFilters}"></ui5-button>`,M=(t,e,i)=>a`${t.hasPagination?ze(t,e,i):void 0}`,ze=(t,e,i)=>i?a`<div class="ui5-vsd-sub-header-container"><div class="ui5-vsd-sub-header"><${l("ui5-segmented-button",e,i)} @ui5-selection-change="${o(t._handleModeChange)}"><${l("ui5-segmented-button-item",e,i)} ?pressed="${t.isModeSort}" icon="sort" mode="Sort"></${l("ui5-segmented-button-item",e,i)}><${l("ui5-segmented-button-item",e,i)} ?pressed="${t.isModeFilter}" icon="filter" mode="Filter"></${l("ui5-segmented-button-item",e,i)}></${l("ui5-segmented-button",e,i)}></div></div>`:a`<div class="ui5-vsd-sub-header-container"><div class="ui5-vsd-sub-header"><ui5-segmented-button @ui5-selection-change="${o(t._handleModeChange)}"><ui5-segmented-button-item ?pressed="${t.isModeSort}" icon="sort" mode="Sort"></ui5-segmented-button-item><ui5-segmented-button-item ?pressed="${t.isModeFilter}" icon="filter" mode="Filter"></ui5-segmented-button-item></ui5-segmented-button></div></div>`,U=(t,e,i)=>a`${t.isModeSort?He(t,e,i):void 0}`,He=(t,e,i)=>i?a`<div class="ui5-vsd-sort"><${l("ui5-list",e,i)} mode="SingleSelectBegin" @ui5-item-click="${o(t._onSortOrderChange)}" sort-order accessible-name-ref="${o(t._id)}-label"><${l("ui5-li-groupheader",e,i)}>${o(t._sortOrderLabel)}</${l("ui5-li-groupheader",e,i)}>${f(t._currentSettings.sortOrder,(n,r)=>n._id||r,(n,r)=>A(n,r,t,e,i))}</${l("ui5-list",e,i)}><${l("ui5-list",e,i)} mode="SingleSelectBegin" @ui5-item-click=${o(t._onSortByChange)} sort-by><${l("ui5-li-groupheader",e,i)}>${o(t._sortByLabel)}</${l("ui5-li-groupheader",e,i)}>${f(t._currentSettings.sortBy,(n,r)=>n._id||r,(n,r)=>W(n,r,t,e,i))}</${l("ui5-list",e,i)}></div>`:a`<div class="ui5-vsd-sort"><ui5-list mode="SingleSelectBegin" @ui5-item-click="${o(t._onSortOrderChange)}" sort-order accessible-name-ref="${o(t._id)}-label"><ui5-li-groupheader>${o(t._sortOrderLabel)}</ui5-li-groupheader>${f(t._currentSettings.sortOrder,(n,r)=>n._id||r,(n,r)=>A(n,r,t,e,i))}</ui5-list><ui5-list mode="SingleSelectBegin" @ui5-item-click=${o(t._onSortByChange)} sort-by><ui5-li-groupheader>${o(t._sortByLabel)}</ui5-li-groupheader>${f(t._currentSettings.sortBy,(n,r)=>n._id||r,(n,r)=>W(n,r,t,e,i))}</ui5-list></div>`,A=(t,e,i,n,r)=>r?a`<${l("ui5-li",n,r)} ?selected="${t.selected}">${o(t.text)}</${l("ui5-li",n,r)}>`:a`<ui5-li ?selected="${t.selected}">${o(t.text)}</ui5-li>`,W=(t,e,i,n,r)=>r?a`<${l("ui5-li",n,r)} data-ui5-external-action-item-index="${e}" ?selected="${t.selected}">${o(t.text)}</${l("ui5-li",n,r)}>`:a`<ui5-li data-ui5-external-action-item-index="${e}" ?selected="${t.selected}">${o(t.text)}</ui5-li>`,J=(t,e,i)=>a`${t.isModeFilter?xe(t,e,i):void 0}`,xe=(t,e,i)=>a`${t._filterStepTwo?Ge(t,e,i):Ke(t,e,i)}`,Ge=(t,e,i)=>i?a`<${l("ui5-list",e,i)} accessible-name-ref="${o(t._id)}-label" mode="MultiSelect" @ui5-item-click="${o(t._handleFilterValueItemClick)}">${f(t._currentSettings.filters,(n,r)=>n._id||r,(n,r)=>z(n,r,t,e,i))}</${l("ui5-list",e,i)}>`:a`<ui5-list accessible-name-ref="${o(t._id)}-label" mode="MultiSelect" @ui5-item-click="${o(t._handleFilterValueItemClick)}">${f(t._currentSettings.filters,(n,r)=>n._id||r,(n,r)=>z(n,r,t,e,i))}</ui5-list>`,z=(t,e,i,n,r)=>a`${t.selected?Ye(t,e,i,n,r):void 0}`,Ye=(t,e,i,n,r)=>a`${f(t.filterOptions,(s,d)=>s._id||d,(s,d)=>Qe(s,d,i,n,r))}`,Qe=(t,e,i,n,r)=>r?a`<${l("ui5-li",n,r)} ?selected=${t.selected}>${o(t.text)}</${l("ui5-li",n,r)}>`:a`<ui5-li ?selected=${t.selected}>${o(t.text)}</ui5-li>`,Ke=(t,e,i)=>i?a`<${l("ui5-list",e,i)} @ui5-item-click="${o(t._changeCurrentFilter)}" accessible-name-ref="${o(t._id)}-label"><${l("ui5-li-groupheader",e,i)}>${o(t._filterByLabel)}</${l("ui5-li-groupheader",e,i)}>${f(t.filterItems,(n,r)=>n._id||r,(n,r)=>H(n,r,t,e,i))}</${l("ui5-list",e,i)}>`:a`<ui5-list @ui5-item-click="${o(t._changeCurrentFilter)}" accessible-name-ref="${o(t._id)}-label"><ui5-li-groupheader>${o(t._filterByLabel)}</ui5-li-groupheader>${f(t.filterItems,(n,r)=>n._id||r,(n,r)=>H(n,r,t,e,i))}</ui5-list>`,H=(t,e,i,n,r)=>r?a`<${l("ui5-li",n,r)} class="ui5-vsd-filterItemList" ?selected=${t.selected} additional-text=${o(t.additionalText)}>${o(t.text)}</${l("ui5-li",n,r)}>`:a`<ui5-li class="ui5-vsd-filterItemList" ?selected=${t.selected} additional-text=${o(t.additionalText)}>${o(t.text)}</ui5-li>`;Q("@ui5/webcomponents-theming","sap_fiori_3",async()=>ne);Q("@ui5/webcomponents-fiori","sap_fiori_3",async()=>Be);const Xe={packageName:"@ui5/webcomponents-fiori",fileName:"themes/ViewSettingsDialog.css.ts",content:"[on-desktop] .ui5-vsd-content{height:var(--_ui5_vsd_content_height);min-width:350px}[on-desktop] [expand-content].ui5-vsd-content{height:var(--_ui5_vsd_expand_content_height);min-width:350px}.ui5-vsd-header{width:100%;padding-bottom:.25rem}.ui5-vsd-content{margin:0 .1px 0 -1rem}.ui5-vsd-title{font-size:var(--sapFontHeader5Size)}.ui5-vsd-header-container{display:flex;align-items:center;justify-content:space-between;height:var(--_ui5_vsd_header_container);line-height:var(--_ui5_vsd_header_container)}.ui5-vsd-header-end{display:flex}.ui5-vsd-sub-header{height:var(--_ui5_vsd_sub_header_container_height);line-height:var(--_ui5_vsd_sub_header_container_height)}.ui5-vsd-header-start{display:flex;align-items:center}.ui5-vsd-back-button{margin-inline-end:.5rem}.ui5-vsd-footer{width:100%;display:flex;justify-content:flex-end;margin:.1875rem 0}.ui5-vsd-footer [ui5-button]:first-child{margin-right:.5rem;min-width:4rem}.ui5-vsd-sort{width:100%;height:100%}[ui5-li-groupheader]{overflow:hidden}[ui5-dialog]::part(content){padding-top:0;padding-bottom:0;padding-right:0}:host [ui5-li]::part(native-li){padding-inline-start:var(--_ui5_vsd_content_li_padding)}:host [ui5-li].ui5-vsd-filterItemList::part(native-li){padding-inline-start:1rem}"};var _=globalThis&&globalThis.__decorate||function(t,e,i,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,n);else for(var u=t.length-1;u>=0;u--)(d=t[u])&&(s=(r<3?d(s):r>3?d(e,i,s):d(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},m;let p=m=class extends F{constructor(){super(),this._currentSettings={sortOrder:[],sortBy:[],filters:[]}}onBeforeRendering(){this._currentSettings.filters&&this._currentSettings.filters.length&&this._setAdditionalTexts(),!this.shouldBuildSort&&this.shouldBuildFilter&&(this._currentMode=b.Filter)}_setAdditionalTexts(){this.filterItems.forEach((e,i)=>{let n=0;for(let r=0;r<e.values.length;r++)this._currentSettings.filters[i].filterOptions[r].selected&&n++;e.additionalText=n?`${n}`:""})}static async onDefine(){m.i18nBundle=await se("@ui5/webcomponents-fiori")}get _selectedFilter(){for(let e=0;e<this._currentSettings.filters.length;e++)if(this._currentSettings.filters[e].selected)return this._currentSettings.filters[e]}get shouldBuildSort(){return!!this.sortItems.length}get shouldBuildFilter(){return!!this.filterItems.length}get hasPagination(){return this.shouldBuildSort&&this.shouldBuildFilter}get _filterByTitle(){const e=this._selectedFilter?this._selectedFilter.text:"";return`${m.i18nBundle.getText(q)}: ${e}`}get _dialogTitle(){return m.i18nBundle.getText(be)}get _okButtonLabel(){return m.i18nBundle.getText(ye)}get _cancelButtonLabel(){return m.i18nBundle.getText(Se)}get _resetButtonLabel(){return m.i18nBundle.getText(ve)}get _ascendingLabel(){return m.i18nBundle.getText(we)}get _descendingLabel(){return m.i18nBundle.getText($e)}get _sortOrderLabel(){return m.i18nBundle.getText(Oe)}get _filterByLabel(){return m.i18nBundle.getText(q)}get _sortByLabel(){return m.i18nBundle.getText(Ie)}get _isPhone(){return le()}get _sortAscending(){return!this.sortDescending}get _title(){return this.showBackButton?this._filterByTitle:this._dialogTitle}get _disableResetButton(){return this._dialog&&this._sortSetttingsAreInitial&&this._filteresAreInitial}get _sortSetttingsAreInitial(){let e=!0;return["sortBy","sortOrder"].forEach(i=>{this._currentSettings[i].forEach((n,r)=>{n.selected!==this._initialSettings[i][r].selected&&(e=!1)})}),e}get _filteresAreInitial(){let e=!0;return this._currentSettings.filters.forEach((i,n)=>{for(let r=0;r<i.filterOptions.length;r++)i.filterOptions[r].selected!==this._initialSettings.filters[n].filterOptions[r].selected&&(e=!1)}),e}get _settings(){return{sortOrder:JSON.parse(JSON.stringify(this.initSortOrderItems)),sortBy:JSON.parse(JSON.stringify(this.initSortByItems)),filters:this.filterItems.map(e=>({text:e.text,selected:!1,filterOptions:e.values.map(i=>({text:i.text,selected:i.selected}))}))}}get initSortByItems(){return this.sortItems.map((e,i)=>({text:e.text,selected:e.selected,index:i}))}get initSortOrderItems(){return[{text:this._ascendingLabel,selected:!this.sortDescending},{text:this._descendingLabel,selected:this.sortDescending}]}get expandContent(){return this._filterStepTwo||!this.hasPagination}get isModeSort(){return this._currentMode===b.Sort}get isModeFilter(){return this._currentMode===b.Filter}get showBackButton(){return this.isModeFilter&&this._filterStepTwo}get _sortOrderListDomRef(){return this.shadowRoot.querySelector("[ui5-list][sort-order]")}get _sortByList(){return this.shadowRoot.querySelector("[ui5-list][sort-by]")}get _dialogDomRef(){return this.shadowRoot.querySelector("[ui5-dialog]")}show(){var e;this._dialog?this._restoreSettings(this._confirmedSettings):(this._sortOrder=this._sortOrderListDomRef,this._sortBy=this._sortByList,this._initialSettings=this._settings,this._currentSettings=this._settings,this._confirmedSettings=this._settings,this._dialog=this._dialogDomRef),this.fireEvent("before-open",{},!0,!1),this._dialog.show(!0),(e=this._dialog.querySelector("[ui5-list]"))==null||e.focusFirstItem()}_handleModeChange(e){const i=e.detail.selectedItem.getAttribute("mode");this._currentMode=b[i]}_handleFilterValueItemClick(e){this._currentSettings.filters=this._currentSettings.filters.map(i=>(i.selected&&i.filterOptions.forEach(n=>{n.text===e.detail.item.innerText&&(n.selected=!n.selected)}),i)),this._currentSettings=JSON.parse(JSON.stringify(this._currentSettings))}_navigateToFilters(){this._filterStepTwo=!1}_changeCurrentFilter(e){this._filterStepTwo=!0,this._currentSettings.filters=this._currentSettings.filters.map(i=>(i.selected=i.text===e.detail.item.innerText,i))}close(){this._dialog&&this._dialog.close()}_focusRecentlyUsedControl(){if(!this._recentlyFocused||!Object.keys(this._recentlyFocused).length)return;const e=this._recentlyFocused.getSelectedItems();e.length&&e[0].focus()}_confirmSettings(){this.close(),this._confirmedSettings=this._currentSettings,this.fireEvent("confirm",this.eventsParams)}_cancelSettings(){this._restoreSettings(this._confirmedSettings),this.fireEvent("cancel",this.eventsParams),this.close()}get eventsParams(){const e=this._currentSettings.sortOrder.filter(N=>N.selected)[0],i=this._currentSettings.sortBy.filter(N=>N.selected)[0],n=e&&e.text,r=!this._currentSettings.sortOrder[0].selected,s=i&&i.text,d=i&&i.index,u=this.sortItems[d];return{sortOrder:n,sortDescending:r,sortBy:s,sortByItem:u,filters:this.selectedFilters}}get selectedFilters(){const e=[];return this._currentSettings.filters.forEach(i=>{const n=[];i.filterOptions.forEach(r=>{r.selected&&n.push(r.text)}),n.length&&(e.push({}),e[e.length-1][i.text]=n)}),e}_restoreConfirmedOnEscape(e){e.detail.escPressed&&(this._cancelSettings(),this._currentMode=b.Sort,this._filterStepTwo=!1)}_resetSettings(){this._restoreSettings(this._initialSettings),this._recentlyFocused=this._sortOrder,this._focusRecentlyUsedControl()}_restoreSettings(e){this._currentSettings=JSON.parse(JSON.stringify(e)),this._currentMode=b.Sort,this._filterStepTwo=!1}_onSortOrderChange(e){this._recentlyFocused=this._sortOrder,this._currentSettings.sortOrder=this.initSortOrderItems.map(i=>(i.selected=i.text===e.detail.item.innerText,i)),this._currentSettings=JSON.parse(JSON.stringify(this._currentSettings))}_onSortByChange(e){const i=Number(e.detail.item.getAttribute("data-ui5-external-action-item-index"));this._recentlyFocused=this._sortBy,this._currentSettings.sortBy=this.initSortByItems.map((n,r)=>(n.selected=r===i,n)),this._currentSettings=JSON.parse(JSON.stringify(this._currentSettings))}setConfirmedSettings(e){if(e&&this._dialog&&!this._dialog.isOpen()){const i=JSON.parse(JSON.stringify(this._confirmedSettings));if(e.sortOrder)for(let n=0;n<i.sortOrder.length;n++)i.sortOrder[n].text===e.sortOrder?i.sortOrder[n].selected=!0:i.sortOrder[n].selected=!1;if(e.sortBy)for(let n=0;n<i.sortBy.length;n++)i.sortBy[n].text===e.sortBy?i.sortBy[n].selected=!0:i.sortBy[n].selected=!1;if(e.filters){const n={};for(let r=0;r<e.filters.length;r++)n[Object.keys(e.filters[r])[0]]=e.filters[r][Object.keys(e.filters[r])[0]];for(let r=0;r<i.filters.length;r++)for(let s=0;s<i.filters[r].filterOptions.length;s++)n[i.filters[r].text]&&n[i.filters[r].text].indexOf(i.filters[r].filterOptions[s].text)>-1?i.filters[r].filterOptions[s].selected=!0:i.filters[r].filterOptions[s].selected=!1}this._confirmedSettings=JSON.parse(JSON.stringify(i))}}};_([h({type:Boolean})],p.prototype,"sortDescending",void 0);_([h({type:Object})],p.prototype,"_recentlyFocused",void 0);_([h({type:Object})],p.prototype,"_initialSettings",void 0);_([h({type:Object})],p.prototype,"_confirmedSettings",void 0);_([h({type:Object})],p.prototype,"_currentSettings",void 0);_([h({type:b,defaultValue:b.Sort})],p.prototype,"_currentMode",void 0);_([h({type:Boolean,noAttribute:!0})],p.prototype,"_filterStepTwo",void 0);_([R()],p.prototype,"sortItems",void 0);_([R()],p.prototype,"filterItems",void 0);p=m=_([D({tag:"ui5-view-settings-dialog",renderer:re,styles:Xe,template:Je,dependencies:[fe,de,he,ae,ce,me,pe,ue,_e,ge]}),k("confirm",{detail:{sortOrder:{type:String},sortBy:{type:String},sortByItem:{type:HTMLElement},sortDescending:{type:Boolean},filters:{type:Array}}}),k("cancel",{detail:{sortOrder:{type:String},sortBy:{type:String},sortByItem:{type:HTMLElement},sortDescending:{type:Boolean},filters:{type:Array}}}),k("before-open")],p);p.define();const Ze=p,et=Object.freeze(Object.defineProperty({__proto__:null,default:Ze},Symbol.toStringTag,{value:"Module"})),I=T("ui5-view-settings-dialog",[],["sortDescending"],["filterItems","sortItems"],["before-open","cancel","confirm"],()=>B(()=>Promise.resolve().then(()=>et),void 0,import.meta.url));I.displayName="ViewSettingsDialog";try{I.displayName="ViewSettingsDialog",I.__docgenInfo={description:'The `ViewSettingsDialog` component helps the user to sort data within a list or a table. It consists of several lists like `Sort order` which is built-in and `Sort By` and `Filter By` lists, for which you must be provide items(`SortItem` & `FilterItem` respectively) These options can be used to create sorters for a table. The `ViewSettingsDialog` interrupts the current application processing as it is the only focused UI element and the main screen is dimmed/blocked. The `ViewSettingsDialog` is modal, which means that user action is required before returning to the parent window is possible.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ViewSettingsDialog" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"ViewSettingsDialog",props:{filterItems:{defaultValue:null,description:'Defines the `filterItems` list. **Note:** If you want to use this slot, you need to import used item: `import "@ui5/webcomponents-fiori/dist/FilterItem";`\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="filterItems"`).\nSince you can\'t change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component\'s children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).',name:"filterItems",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},sortItems:{defaultValue:null,description:`Defines the list of items against which the user could sort data. **Note:** If you want to use this slot, you need to import used item: \`import "@ui5/webcomponents-fiori/dist/SortItem";\`

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="sortItems"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"sortItems",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ViewSettingsDialogDomRef, never>) => void"}},onCancel:{defaultValue:null,description:"Fired when cancel button is activated.",name:"onCancel",required:!1,type:{name:"(event: Ui5CustomEvent<ViewSettingsDialogDomRef, { sortOrder: string; sortBy: string; sortByItem: HTMLElement; sortDescending: boolean; filterItems: unknown[]; }>) => void"}},onConfirm:{defaultValue:null,description:"Fired when confirmation button is activated.",name:"onConfirm",required:!1,type:{name:"(event: Ui5CustomEvent<ViewSettingsDialogDomRef, { sortOrder: string; sortBy: string; sortByItem: HTMLElement; sortDescending: boolean; filterItems: unknown[]; }>) => void"}},sortDescending:{defaultValue:null,description:"Defines the initial sort order.",name:"sortDescending",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const tt={title:"Modals & Popovers / ViewSettingsDialog",component:I,argTypes:{filterItems:{control:{disable:!0}},sortItems:{control:{disable:!0}}},args:{filterItems:c.jsxs(c.Fragment,{children:[c.jsx(O,{text:"Position",values:c.jsxs(c.Fragment,{children:[c.jsx(g,{text:"CEO"}),c.jsx(g,{text:"CTO"}),c.jsx(g,{text:"CIO"})]})}),c.jsx(O,{text:"Department",values:c.jsxs(c.Fragment,{children:[c.jsx(g,{text:"Legal"}),c.jsx(g,{text:"Finance"}),c.jsx(g,{text:"Development"})]})})]}),sortItems:c.jsxs(c.Fragment,{children:[c.jsx(y,{text:"Name"}),c.jsx(y,{text:"Position"}),c.jsx(y,{text:"Company"}),c.jsx(y,{text:"Department"})]})},parameters:{chromatic:{delay:999}}},te=V.forwardRef((t,e)=>ie.createPortal(c.jsx(I,{...t,ref:e}),document.body));te.displayName="ViewSettingsDialog";const $={render:t=>{const e=V.useRef(null);return V.useEffect(()=>{},[]),c.jsxs(c.Fragment,{children:[c.jsx(De,{onClick:()=>{e.current.show()},children:"Show ViewSettingsDialog"}),c.jsx(te,{ref:e,...t})]})}};var x,G,Y;$.parameters={...$.parameters,docs:{...(x=$.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(Y=(G=$.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};const it=["Default"],kt=Object.freeze(Object.defineProperty({__proto__:null,Default:$,__namedExportsOrder:it,default:tt},Symbol.toStringTag,{value:"Module"}));export{kt as C,$ as D,O as F,y as S,g as a};
//# sourceMappingURL=ViewSettingsDialog.stories-c5d6320b.js.map
