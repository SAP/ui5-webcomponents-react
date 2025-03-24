import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as _,j as o,p as C,d as q,s as r,m as P,l as B,A as L,y as X,W as J,Y as K,w as E,F as Z}from"./jsx-runtime-ByLklLy6.js";import"./action-settings-DWXhjhXM.js";import"./index-kjIbAJBE.js";import{r as R}from"./index-Bi_W_Jd4.js";import{l as T}from"./event-strict-DgQLNDEV.js";import{d as D}from"./slot-_4yKMUwC.js";import{i as ee}from"./i18n-CjR4HGlq.js";import{i as M}from"./MediaRange-Bnzt26Xb.js";import{D as te}from"./Dialog-CRHAE-yP.js";import{a as Q}from"./Title-Dw2clFwJ.js";import{a as ne}from"./Input-Ic8i44nS.js";import{T as ie}from"./Text-BYHe0rMB.js";import{I as se,f as Y}from"./Icon-CGby3L9v.js";import{c as oe}from"./List-tC_sBijc.js";import{L as ae}from"./ListItemStandard-Cp1eitWQ.js";import{b as re,c as le}from"./ToolbarButton-DvgMDW7z.js";import{s as de}from"./search-CCCfxPNW.js";import{d as F}from"./parameters-bundle.css-COB6mtRm.js";import{aO as ce,aP as pe,aQ as ue,aR as he}from"./i18n-defaults-P_CK-S23.js";import{S as me}from"./index-CXKR2Wp5.js";import{b as fe,a as ge,U as be}from"./index-D-S7oV5D.js";import{a as ve}from"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import{B as ye}from"./BusyIndicator-cXtbXcMV.js";import{a as Se}from"./Button-CVhFbCad.js";import{b as we,T as xe}from"./Tab-CoBJzSYN.js";import"./nav-back-BncPATr4.js";import{A as _e}from"./index-BBw2fVoz.js";import{I as z}from"./index-Blw57xH1.js";import{T as Te}from"./index-BR8Tg3so.js";import{L as b}from"./index-CTl4EJPq.js";import{T as y}from"./index-D1NZoOym.js";import{B as v}from"./index-q_xBifsn.js";import{P as V}from"./index-CGD-ku4A.js";import{L as Ce}from"./index-C9PWDxiW.js";import{L as A}from"./index-BVnFB9i2.js";import{C as k}from"./index-S39O0-HA.js";import{C as Ie,a as I}from"./index-mbmpbfoa.js";import{R as O}from"./index-izCQ8mM5.js";function Ue(){var s;return _(te,{class:"ui5-user-settings-dialog",open:this.open,stretch:!0,accessibleName:this.accessibleNameText,"onui5-_collapse":this._handleCollapseClick,onOpen:this._handleDialogAfterOpen,onBeforeClose:this._handleDialogBeforeClose,onClose:this._handleDialogAfterClose,initialFocus:`setting-${(s=this._selectedSetting)==null?void 0:s._id}`,children:[_("div",{class:"ui5-user-settings-root",children:[_("div",{class:"ui5-user-settings-side","aria-orientation":"vertical","aria-roledescription":this.ariaRoleDescList,children:[_("div",{class:"ui5-user-settings-side-header",children:[this.headerText&&o(Q,{level:"H1",size:"H4",children:this.headerText}),this.showSearchField&&o(ne,{placeholder:"Search",type:"Search",class:"ui5-user-settings-side-search",onInput:this._handleInput,children:o(se,{id:"searchFieldIcon",slot:"icon",name:de,showTooltip:!0})})]}),this._showNoSearchResult?o("div",{class:"ui5-user-settings-side-search",children:o(ie,{children:this.noSearchResultsText})}):H.call(this,this._filteredItems,"ui5-user-settings-side-items"),this._filteredFixedItems.length>0&&H.call(this,this._filteredFixedItems,"ui5-user-settings-side-fixedItems")]}),o("div",{class:"ui5-user-settings-content",children:o("slot",{name:this._selectedItemSlotName})})]}),o(le,{slot:"footer",design:"Transparent",children:o(re,{design:"Transparent",text:this.closeButtonText,tooltip:this.closeButtonText,onClick:this._handleCloseButtonClick})})]})}function H(s=[],t){return o(oe,{accessibleRole:"Menu",onItemClick:this._handleItemClick,class:t,separators:"None",children:s.map(n=>o(ae,{id:`setting-${n._id}`,icon:n._icon,tooltip:n._tooltip,ref:this.captureRef.bind(n),selected:n.selected,disabled:n.disabled,accessibleName:n.ariaLabelledByText,type:this._showSettingWithNavigation?"Navigation":"Active",children:n.text}))})}C("@ui5/webcomponents-theming","sap_horizon",async()=>q);C("@ui5/webcomponents-fiori","sap_horizon",async()=>F);const De=`.ui5-user-settings-dialog{max-width:calc(100% - 2px);max-height:calc(100% - 2px);width:100%;height:100%}.ui5-user-settings-dialog::part(content){padding:0}.ui5-user-settings-root{display:flex;height:100%}.ui5-user-settings-side{flex:1;box-sizing:border-box;display:flex;flex-direction:column;max-width:100%;overflow:hidden}.ui5-user-settings-side-header{display:flex;flex-direction:column;gap:.5rem;padding:1rem}.ui5-user-settings-side-search{width:100%}.ui5-user-settings-side-items,.ui5-user-settings-side-fixedItems{border-top:.0625rem solid var(--sapList_BorderColor)}.ui5-user-settings-side-items{flex:1;min-height:0}.ui5-user-settings-side-text{align-self:center}.ui5-user-settings-side-fixedItems :last-child{border-bottom:none}.ui5-user-settings-content{display:none;flex:1;background-color:var(--sapGroup_ContentBackground);height:100%;overflow:hidden}.ui5-user-settings-dialog[on-phone]{border-radius:0}@media screen and (width >= 37.5rem) and (width < 64rem){.ui5-user-settings-dialog:not([on-phone]){max-width:min(40rem,80%);max-height:min(42.5rem,88%)}}@media screen and (width < 64rem){:host([_collapsed]) .ui5-user-settings-content{display:block}:host([_collapsed]) .ui5-user-settings-side{display:none}}@media screen and (width >= 64rem){.ui5-user-settings-dialog{width:60rem;max-height:min(42.5rem,88%)}.ui5-user-settings-side{max-width:20rem}:dir(ltr) .ui5-user-settings-side{border-right:.0625rem solid var(--sapList_BorderColor)}:dir(rtl) .ui5-user-settings-side{border-left:.0625rem solid var(--sapList_BorderColor)}.ui5-user-settings-content{display:block}}
`;var m=function(s,t,n,a){var l=arguments.length,i=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,n):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,t,n,a);else for(var d=s.length-1;d>=0;d--)(c=s[d])&&(i=(l<3?c(i):l>3?c(t,n,i):c(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i},x;let u=x=class extends L{constructor(){super(...arguments),this.open=!1,this.showSearchField=!1,this._searchValue="",this._collapsed=!1,this._filteredItems=[],this._filteredFixedItems=[],this._showNoSearchResult=!1}onBeforeRendering(){this._mediaRange=M.getCurrentRange(M.RANGESETS.RANGE_4STEPS);const t=this._searchValue.toLowerCase();this._filteredItems=[],this._filteredFixedItems=[],this.items.forEach(n=>{n.text.toLowerCase().includes(t)&&this._filteredItems.push(n),n.selected&&(this._selectedSetting=n)}),this.fixedItems.forEach(n=>{n.text.toLowerCase().includes(t)&&this._filteredFixedItems.push(n),n.selected&&(this._selectedSetting=n)}),this._filteredItems.length===0&&this._filteredFixedItems.length===0?this._showNoSearchResult=!0:this._showNoSearchResult=!1,this._selectedSetting||(this._selectedSetting=this.items[0]||this.fixedItems[0])}_handleItemClick(t){const a=t.detail.item.associatedSettingItem,l=!this.fireDecoratorEvent("selection-change",{item:a});this._collapsed=!0,l||(this.items.forEach(i=>{i.selected=!1}),this.fixedItems.forEach(i=>{i.selected=!1}),a.selected=!0)}_handleDialogAfterOpen(){this.fireDecoratorEvent("open")}_handleDialogBeforeClose(t){if(!t.detail.escPressed)return;!this.fireDecoratorEvent("before-close",t.detail)&&t.preventDefault()}_handleDialogAfterClose(){this.open=!1,this.fireDecoratorEvent("close")}get accessibleNameText(){return x.i18nBundle.getText(ce)}get ariaRoleDescList(){return x.i18nBundle.getText(pe)}get closeButtonText(){return x.i18nBundle.getText(ue)}get noSearchResultsText(){return x.i18nBundle.getText(he)}get _selectedItemSlotName(){return this._selectedSetting?this._selectedSetting._individualSlot:""}get _showSettingWithNavigation(){return X()||J()&&!K()||this._mediaRange==="S"||this._mediaRange==="M"}_handleCloseButtonClick(){!this.fireDecoratorEvent("before-close",{escPressed:!1})||(this.open=!1)}_handleCollapseClick(){this._collapsed=!1}_handleInput(t){this._searchValue=t.target.value}captureRef(t){t&&(t.associatedSettingItem=this)}};m([r({type:Boolean})],u.prototype,"open",void 0);m([r({type:String})],u.prototype,"headerText",void 0);m([r({type:Boolean})],u.prototype,"showSearchField",void 0);m([D({default:!0,type:HTMLElement,individualSlots:!0,invalidateOnChildChange:{properties:!0,slots:!0}})],u.prototype,"items",void 0);m([D({type:HTMLElement,individualSlots:!0,invalidateOnChildChange:{properties:!0,slots:!0}})],u.prototype,"fixedItems",void 0);m([r({type:String})],u.prototype,"_searchValue",void 0);m([r({type:Boolean})],u.prototype,"_collapsed",void 0);m([r({type:Object})],u.prototype,"_selectedSetting",void 0);m([r({type:Boolean})],u.prototype,"_showNoSearchResult",void 0);m([r({type:String})],u.prototype,"_mediaRange",void 0);m([ee("@ui5/webcomponents-fiori")],u,"i18nBundle",void 0);u=x=m([P({tag:"ui5-user-settings-dialog",renderer:B,template:Ue,styles:[De]}),T("selection-change",{cancelable:!0}),T("open"),T("before-close",{cancelable:!0}),T("close")],u);u.define();const S=E("ui5-user-settings-dialog",["headerText"],["open","showSearchField"],["fixedItems"],["before-close","close","open","selection-change"]);S.displayName="UserSettingsDialog";try{S.displayName="UserSettingsDialog",S.__docgenInfo={description:`The \`UserSettingsDialog\` is an SAP Fiori-specific web component used in the \`ui5-profile-menu\`.
It allows the user to easily view information and settings for an account.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"UserSettingsDialog",props:{children:{defaultValue:null,description:"Defines the user settings items.\n\n**Note:**  If no setting item is set as `selected`, the first one will be selected.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},fixedItems:{defaultValue:null,description:`Defines the fixed user settings items.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="fixedItems"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"fixedItems",required:!1,type:{name:"UI5WCSlotsNode"}},onBeforeClose:{defaultValue:null,description:`Fired before the settings dialog is closed.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<UserSettingsDialogDomRef, never>) => void"}},onClose:{defaultValue:null,description:`Fired when a settings dialog is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<UserSettingsDialogDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired when a settings dialog is open.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<UserSettingsDialogDomRef, never>) => void"}},onSelectionChange:{defaultValue:null,description:`Fired when an item is selected.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<UserSettingsDialogDomRef, UserSettingsItemSelectEventDetail>) => void"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the headerText of the item.",name:"headerText",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:"Defines, if the User Settings Dialog is opened.",name:"open",required:!1,type:{name:"boolean"}},showSearchField:{defaultValue:{value:"false"},description:`Defines if the Search Field would be displayed.

**Note:** By default the Search Field is not displayed.`,name:"showSearchField",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{S.displayName="UserSettingsDialog",S.__docgenInfo={description:`The \`UserSettingsDialog\` is an SAP Fiori-specific web component used in the \`ui5-profile-menu\`.
It allows the user to easily view information and settings for an account.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"UserSettingsDialog",props:{children:{defaultValue:null,description:"Defines the user settings items.\n\n**Note:**  If no setting item is set as `selected`, the first one will be selected.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},fixedItems:{defaultValue:null,description:`Defines the fixed user settings items.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="fixedItems"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"fixedItems",required:!1,type:{name:"UI5WCSlotsNode"}},onBeforeClose:{defaultValue:null,description:`Fired before the settings dialog is closed.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<UserSettingsDialogDomRef, never>) => void"}},onClose:{defaultValue:null,description:`Fired when a settings dialog is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<UserSettingsDialogDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired when a settings dialog is open.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<UserSettingsDialogDomRef, never>) => void"}},onSelectionChange:{defaultValue:null,description:`Fired when an item is selected.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<UserSettingsDialogDomRef, UserSettingsItemSelectEventDetail>) => void"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the headerText of the item.",name:"headerText",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:"Defines, if the User Settings Dialog is opened.",name:"open",required:!1,type:{name:"boolean"}},showSearchField:{defaultValue:{value:"false"},description:`Defines if the Search Field would be displayed.

**Note:** By default the Search Field is not displayed.`,name:"showSearchField",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Ne="globe",Re="M416 137l-6-9 3-9 19 21-9 9h-10l9-10zm-14 11l-3-8 4-7 5 8zm29 6q2 5 4 9.5t4 10.5l-9 8-15-3-5 16-19-8 11-17h24v-12zm3 41h9l-1 8zm-169 78l19 16v36l-47 46-2 6-7 29-1 12q0 1 .5 2t.5 2l-4 4q-4 0-5 1l-20-45q-3-11-4.5-26t-4.5-33l-28-25 25-31-11-14q-25 0-43-18l-7-5-7-8 11 20-7 3-15-30 3-26-6-20-18-11-4-11q0-6 8.5-16.5t20-20.5T134 93t17-7q9 0 19.5 6.5T189 99q-1 1-1 3 0 4 3 5l-16 36 20 4 16-16 28 2 6 15-16 17v11l9 1 5-8 18-12v8l8 13-9 9 6 5-13 1 5 10-26 13 4 17h-8l-4-17h-21l-3 6-9-4-13 14 11 12-1 14 12 8zm177-63q12 5 14 21.5t2 27.5q0 37-15 68.5T414 388q-3 0-3-7 0-9 3-26t3-34v-8l-2-9-14-23-38-9-10-21 7-33q8-2 17.5-3.5T402 206q2 2 5 2t6.5-.5 7.5-.5q5 0 10.5 1t10.5 2zM279 98q11-11 23-19t26-16q14 13 23 17-5 2-10 5.5T330 98l-18 29-9 6q-6 0-9.5-9t-3.5-8q-7 0-11 3-3-3-10-3-2 0-3 .5t-3 .5q7-10 16-19zm105 18l-11 2 4-16h12l2 8zM256 0q53 0 99.5 20T437 74.5t55 81.5 20 100-20 99.5-55 81.5-81.5 55-99.5 20-100-20-81.5-55T20 355.5 0 256t20-100 54.5-81.5T156 20 256 0zm0 480q46 0 87-17.5t71.5-48 48-71.5 17.5-87-17.5-87-48-71.5-71.5-48T256 32q-47 0-87.5 17.5t-71 48-48 71.5T32 256t17.5 87 48 71.5 71 48T256 480z",Ve=!0,Ae="SAP-icons-v4",je="@ui5/webcomponents-icons";Y(Ne,{pathData:Re,ltr:Ve,collection:Ae,packageName:je});const qe="globe",Pe="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm146 400q27-28 43-65t16-79q0-34-10.5-65t-29-56T377 91t-57-29v41q0 11-7 18t-18 7h-71v39q0 11-7 18t-18 7h-42l54 64h84q11 0 18 7.5t7 18.5v70h7q25 0 44.5 13.5T402 400zM51 256q0 39 14 74t38 62 57 44.5 71 22.5v-53q-26-8-43.5-28.5T167 331L56 212q-5 23-5 44z",Be=!0,Le="SAP-icons-v5",Ee="@ui5/webcomponents-icons";Y(qe,{pathData:Pe,ltr:Be,collection:Le,packageName:Ee});function Fe(){const s=this.tabs.length>0&&!this._hasSelectedPageView?o(xe,{contentBackgroundDesign:"Transparent",class:"ui5-user-settings-item-tabs",onTabSelect:this._handleTabSelect,children:this.tabs.map(n=>o(we,{text:n.text,selected:n.selected,ref:this.captureRef.bind(n),children:o("slot",{name:n._individualSlot})}))}):o(Z,{children:this._selectedPageView?o("div",{class:"ui5-user-settings-item-view-container",children:o("slot",{name:this._selectedPageView._individualSlot})}):null}),t=o("div",{class:"ui5-user-settings-item-loading-container",children:o(ye,{active:this.loading,class:"ui5-user-settings-item-busy",delay:0,"aria-description":this.loadingReason})});return _("div",{class:"ui5-user-settings-item",children:[o("header",{class:"ui5-user-settings-item-header-container",tabindex:0,children:_("div",{class:"ui5-user-settings-item-header",children:[o(Se,{icon:"nav-back",design:"Transparent",onClick:this._handleBackButtonClick,class:"ui5-user-settings-item-collapse-btn",style:{display:this._shouldShowBackButton?"block":""}}),o(Q,{level:"H2",size:"H4",children:this._hasSelectedPageView?this._selectedPageView.text:this.headerText})]})}),this.loading?t:s]})}C("@ui5/webcomponents-theming","sap_horizon",async()=>q);C("@ui5/webcomponents-fiori","sap_horizon",async()=>F);const Me=`.ui5-user-settings-item{height:100%;display:flex;flex-direction:column}.ui5-user-settings-item-header-container{container-type:inline-size}.ui5-user-settings-item-header{display:flex;gap:.5rem;align-items:center;padding:1rem 1rem .5rem;font-size:var(--sapFontHeader5Size);font-family:var(--sapFontBoldFamily);border-bottom:.0625rem solid var(--sapList_BorderColor)}.ui5-user-settings-item-loading-container{position:relative}.ui5-user-settings-item-view-container,.ui5-user-settings-item-loading-container,.ui5-user-settings-item-tabs{flex:1;min-height:0}.ui5-user-settings-item-tabs::part(content){padding:0;border-bottom:0}.ui5-user-settings-item-view-container{overflow:auto}:host([disabled]){pointer-events:initial;opacity:initial}:host([disabled])::part(content){opacity:var(--_ui5-v2-8-0-listitembase_disabled_opacity)}.ui5-user-settings-item-busy{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:42;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:all}.ui5-user-settings-item-busy:not([active]){display:none}@media screen and (width >= 64rem){.ui5-user-settings-item-collapse-btn{display:none}}@container (width > 37.5rem){.ui5-user-settings-item-header{padding-inline:2rem}}
`;var f=function(s,t,n,a){var l=arguments.length,i=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,n):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,t,n,a);else for(var d=s.length-1;d>=0;d--)(c=s[d])&&(i=(l<3?c(i):l>3?c(t,n,i):c(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let h=class extends L{constructor(){super(...arguments),this.text="",this.tooltip="",this.selected=!1,this.disabled=!1,this.loading=!1,this.icon="globe"}get _hasSelectedPageView(){return this.pages.some(t=>t.selected)}get _selectedPageView(){return this.pages.find(t=>t.selected)||this.pages[0]}get ariaLabelledByText(){return`${this.text} ${this.accessibleName}`.trim()}get _tooltip(){return this.tooltip?this.tooltip:this.text}get _icon(){return this.icon}_handleBackButtonClick(){if(this._shouldShowBackButton){const t=this._selectedPageView;!this.fireDecoratorEvent("selection-change",{view:t})||(t.selected=!1)}else this.fireDecoratorEvent("_collapse")}_handleTabSelect(t){const a=t.detail.tab.associatedSettingView;!this.fireDecoratorEvent("selection-change",{view:a})?t.preventDefault():(this.tabs.forEach(i=>{i.selected=!1}),a.selected=!0)}get _shouldShowBackButton(){return!!(this._hasSelectedPageView&&this._selectedPageView.secondary)}captureRef(t){t&&(t.associatedSettingView=this)}};f([r({type:String})],h.prototype,"text",void 0);f([r({type:String})],h.prototype,"tooltip",void 0);f([r({type:String})],h.prototype,"headerText",void 0);f([r({type:Boolean})],h.prototype,"selected",void 0);f([r({type:Boolean})],h.prototype,"disabled",void 0);f([r({type:Boolean})],h.prototype,"loading",void 0);f([r()],h.prototype,"loadingReason",void 0);f([r({type:String})],h.prototype,"icon",void 0);f([r()],h.prototype,"accessibleName",void 0);f([D({type:HTMLElement,default:!0,individualSlots:!0,invalidateOnChildChange:{properties:!0,slots:!1}})],h.prototype,"tabs",void 0);f([D({type:HTMLElement,individualSlots:!0,invalidateOnChildChange:{properties:!0,slots:!1}})],h.prototype,"pages",void 0);h=f([P({tag:"ui5-user-settings-item",renderer:B,template:Fe,styles:[ve(),Me]}),T("selection-change",{cancelable:!0}),T("_collapse",{bubbles:!0})],h);h.define();const g=E("ui5-user-settings-item",["accessibleName","headerText","icon","loadingReason","text","tooltip"],["disabled","loading","selected"],["pages"],["selection-change"]);g.displayName="UserSettingsItem";try{g.displayName="UserSettingsItem",g.__docgenInfo={description:`The \`UserSettingsItem\` represents an item in the \`UserSettingsDialog\`.



You can disable the <code>UserSettingsItem</code> by setting the <code>enabled</code> property to <code>false</code>,
or use the <code>UserSettingsItem</code> in read-only mode by setting the <code>editable</code> property to false.

<b>Note:</b> Disabled and read-only states shouldn't be used together.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"UserSettingsItem",props:{children:{defaultValue:null,description:`Defines the tab views of the user settings item.

The tab views are displayed by default if there is no selected page view.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},pages:{defaultValue:null,description:`Defines the page views of the user settings item.

If there are no tab views, the first page view will be shown unless there is selected one. If there is selected page
view it will be shown no matter if there are tab views.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="pages"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"pages",required:!1,type:{name:"UI5WCSlotsNode"}},onSelectionChange:{defaultValue:null,description:`Fired when a selected view changed.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<UserSettingsItemDomRef, UserSettingsItemViewSelectEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the headerText of the item.",name:"headerText",required:!1,type:{name:"string"}},icon:{defaultValue:{value:'"globe"'},description:"Defines the icon of the component.",name:"icon",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Indicates whether a loading indicator should be shown.",name:"loading",required:!1,type:{name:"boolean"}},loadingReason:{defaultValue:{value:"undefined"},description:"Indicates why the control is in loading state.",name:"loadingReason",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Shows item tab.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the user settings item.",name:"text",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.

A tooltip attribute should be provided to represent the meaning or function when the component is collapsed and only the icon is visible.`,name:"tooltip",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="UserSettingsItem",g.__docgenInfo={description:`The \`UserSettingsItem\` represents an item in the \`UserSettingsDialog\`.



You can disable the <code>UserSettingsItem</code> by setting the <code>enabled</code> property to <code>false</code>,
or use the <code>UserSettingsItem</code> in read-only mode by setting the <code>editable</code> property to false.

<b>Note:</b> Disabled and read-only states shouldn't be used together.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"UserSettingsItem",props:{children:{defaultValue:null,description:`Defines the tab views of the user settings item.

The tab views are displayed by default if there is no selected page view.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},pages:{defaultValue:null,description:`Defines the page views of the user settings item.

If there are no tab views, the first page view will be shown unless there is selected one. If there is selected page
view it will be shown no matter if there are tab views.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="pages"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"pages",required:!1,type:{name:"UI5WCSlotsNode"}},onSelectionChange:{defaultValue:null,description:`Fired when a selected view changed.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<UserSettingsItemDomRef, UserSettingsItemViewSelectEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the headerText of the item.",name:"headerText",required:!1,type:{name:"string"}},icon:{defaultValue:{value:'"globe"'},description:"Defines the icon of the component.",name:"icon",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Indicates whether a loading indicator should be shown.",name:"loading",required:!1,type:{name:"boolean"}},loadingReason:{defaultValue:{value:"undefined"},description:"Indicates why the control is in loading state.",name:"loadingReason",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Shows item tab.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the user settings item.",name:"text",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.

A tooltip attribute should be provided to represent the meaning or function when the component is collapsed and only the icon is visible.`,name:"tooltip",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function ze(){return o("div",{class:"ui5-user-settings-view-container",children:o("div",{class:"ui5-user-settings-view",children:o("slot",{})})})}C("@ui5/webcomponents-theming","sap_horizon",async()=>q);C("@ui5/webcomponents-fiori","sap_horizon",async()=>F);const ke=`.ui5-user-settings-view-container{container-type:inline-size}.ui5-user-settings-view{padding:1rem}@container (width > 37.5rem){.ui5-user-settings-view{padding-inline:2rem}}
`;var N=function(s,t,n,a){var l=arguments.length,i=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,n):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,t,n,a);else for(var d=s.length-1;d>=0;d--)(c=s[d])&&(i=(l<3?c(i):l>3?c(t,n,i):c(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let w=class extends L{constructor(){super(...arguments),this.selected=!1,this.secondary=!1}};N([r()],w.prototype,"text",void 0);N([r({type:Boolean})],w.prototype,"selected",void 0);N([r({type:Boolean})],w.prototype,"secondary",void 0);N([D({type:HTMLElement,default:!0})],w.prototype,"content",void 0);w=N([P({tag:"ui5-user-settings-view",renderer:B,template:ze,styles:[ke]})],w);w.define();const p=E("ui5-user-settings-view",["text"],["secondary","selected"],[],[]);p.displayName="UserSettingsView";try{p.displayName="UserSettingsView",p.__docgenInfo={description:"The `UserSettingsView` represents a view displayed in the `UserSettingsItem`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"UserSettingsView",props:{children:{defaultValue:null,description:"Defines the content of the view.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},secondary:{defaultValue:{value:"false"},description:"Indicates whether the view is secondary. It is relevant only if the view is used in `pages` slot of `UserSettingsItem`\nand controls the visibility of the back button.",name:"secondary",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines whether the view is selected. There can be just one selected view at a time.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Defines the title text of the user settings view.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="UserSettingsView",p.__docgenInfo={description:"The `UserSettingsView` represents a view displayed in the `UserSettingsItem`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"UserSettingsView",props:{children:{defaultValue:null,description:"Defines the content of the view.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},secondary:{defaultValue:{value:"false"},description:"Indicates whether the view is secondary. It is relevant only if the view is used in `pages` slot of `UserSettingsItem`\nand controls the visibility of the back button.",name:"secondary",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines whether the view is selected. There can be just one selected view at a time.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Defines the title text of the user settings view.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Oe="action-settings",He={title:"Modals & Popovers / UserSettingsDialog",component:S,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}}},args:{}},U={render(s){const t=R.useRef(null),[n,a]=R.useState(!1),[l,i]=R.useState(s.open),c=d=>{const{settings:j}=d.detail.item.dataset;j&&i(!0)};return R.useEffect(()=>{i(s.open)},[s.open]),e.jsxs(e.Fragment,{children:[e.jsx(me,{primaryTitle:"Corporate Portal",logo:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(_e,{children:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png",alt:"Avatar of the current user"})}),onProfileClick:d=>{t.current.opener=d.detail.targetRef,t.current.open=!0,a(j=>!j)}}),e.jsx(fe,{ref:t,open:n,accounts:e.jsx(be,{avatarSrc:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png",titleText:"Alaina Chevalier",subtitleText:"aliana.chevalier@sap.com",description:"Delivery Manager, SAP SE",selected:!0}),onClose:()=>{a(!1)},onItemClick:c,children:e.jsx(ge,{icon:Oe,text:"Settings","data-settings":"true"})}),e.jsxs(S,{...s,open:l,onClose:d=>{s.onClose(d),i(!1)},children:[e.jsx(g,{icon:"user-settings",text:"User Account",tooltip:"User Account",headerText:"User Account",pages:e.jsx(e.Fragment,{children:e.jsxs(p,{children:[e.jsx(z,{name:"person-placeholder"}),e.jsx(Te,{level:"H3",size:"H3",className:"ua-name",children:"Alain Chevalier"}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"ua-info-item",children:[e.jsx(b,{for:"name",children:"Name:"}),e.jsx(y,{children:"Alain Chevalier"})]}),e.jsxs("div",{className:"ua-info-item",children:[e.jsx(b,{for:"email",children:"Email:"}),e.jsx(y,{children:"alian.chevalier@sap.com"})]}),e.jsxs("div",{className:"ua-info-item",children:[e.jsx(b,{for:"server",children:"Server:"}),e.jsx(y,{children:"delivery-001.sap.com"})]})]}),e.jsx(b,{for:"reset-all-button",children:"Personalization"}),e.jsx("br",{}),e.jsx(v,{children:"Reset All Personalization"}),e.jsx(V,{fixed:!0,className:"ua-panel",children:e.jsx(y,{children:"Reset your personalization settings for the launchpad (such as theme, language, user activities, and home page content)."})})]})})}),e.jsxs(g,{icon:"palette",text:"Appearance",tooltip:"Appearance",headerText:"Appearance",children:[e.jsxs(p,{text:"Themes",children:[e.jsxs(Ce,{separators:"Inner",children:[e.jsx(A,{icon:"palette",children:"SAP Morning Horizon"}),e.jsx(A,{icon:"palette",children:"SAP Evening Horizon"}),e.jsx(A,{icon:"palette",children:"SAP High Contrast Black (SAP Horizon)"}),e.jsx(A,{icon:"palette",children:"SAP High Contrast White (SAP Horizon)"})]}),e.jsx(v,{className:"save-btn",design:"Emphasized",children:"Save"})]}),e.jsxs(p,{text:"Display settings",children:[e.jsx(k,{checked:!0,text:"Optimized for Touch Input"}),e.jsx(V,{fixed:!0,children:e.jsx(b,{children:"Increases the size and spacing of controls to allow you to interact with them more easily using your fingertip. This is useful for hybrid devices that combine touch and mouse events."})})]})]}),e.jsx(g,{text:"Language & Region",tooltip:"Language & Region",headerText:"Language & Region",pages:e.jsxs(p,{children:[e.jsxs("div",{className:"us-container",children:[e.jsxs("div",{className:"lr-item",children:[e.jsx(b,{children:"Language and Region:"}),e.jsxs(Ie,{placeholder:"Language",children:[e.jsx(I,{text:"Browse Language"}),e.jsx(I,{text:"English"}),e.jsx(I,{text:"European Spanish"}),e.jsx(I,{text:"French (France)"}),e.jsx(I,{text:"Germany"})]})]}),e.jsxs("div",{className:"lr-item",children:[e.jsx(b,{for:"format",children:"Date Format:"}),e.jsx(y,{children:"MMM d, y"})]})]}),e.jsx(V,{fixed:!0,children:e.jsx(b,{children:`The time zone will not be applied in UI5 apps. If you don't know the type of an app, you can check it in the "About" dialog in the "ID of the Application Framework” field.`})}),e.jsx("br",{}),e.jsxs("div",{className:"lt-time-format",children:[e.jsx(b,{for:"timeFormat",children:"Time Format:"}),e.jsx(O,{name:"timeFormat",text:"12h"}),e.jsx(O,{checked:!0,name:"timeFormat",text:"24h"})]}),e.jsx(V,{fixed:!0,children:e.jsx(b,{children:"After you save your settings, the browser will refresh for the new settings to take effect."})})]})}),e.jsxs(g,{icon:"iphone",text:"SAP Mobile Start Application",tooltip:"SAP Mobile Start Application",headerText:"SAP Mobile Start Application",children:[e.jsxs(p,{slot:"pages",children:[e.jsx(v,{children:"iOS"}),e.jsx(v,{children:"Android"})]}),e.jsxs(p,{slot:"pages",text:"Inner Page",secondary:!0,children:[e.jsx(y,{children:"Enable access to your site from the SAP Mobile Start application."}),e.jsx(v,{children:"Install"}),e.jsx(v,{children:"Register"}),e.jsx(y,{children:"Scan the QR Code to install the mobile application"}),e.jsx(z,{name:"qr-code",style:{width:"20rem",height:"20rem"}})]})]}),e.jsx(g,{icon:"bell",text:"Notifications",tooltip:"Notifications",headerText:"Notifications",children:e.jsx(p,{slot:"pages",children:e.jsx(k,{checked:!0,text:"Show High-Priority Notification Alerts"})})}),e.jsxs(g,{icon:"reset",slot:"fixedItems",text:"Reset Settings",tooltip:"Reset Settings",headerText:"Reset Settings",children:[e.jsx(p,{text:"Reset Personalization",children:e.jsx(v,{children:"Reset Personalization content"})}),e.jsx(p,{text:"Reset All Settings",children:e.jsx(v,{children:"Reset All Settings content"})})]})]})]})}};var W,$,G;U.parameters={...U.parameters,docs:{...(W=U.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render(args) {
    const userMenuRef = useRef<UserMenuDomRef>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(args.open);
    const handleUserMenuItemClick: UserMenuPropTypes['onItemClick'] = e => {
      const {
        settings
      } = e.detail.item.dataset;
      if (settings) {
        setOpen(true);
      }
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <ShellBar primaryTitle={'Corporate Portal'} logo={<img src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />} profile={<Avatar>
              <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png" alt={'Avatar of the current user'} />
            </Avatar>} onProfileClick={event => {
        userMenuRef.current.opener = event.detail.targetRef;
        userMenuRef.current.open = true;
        setMenuOpen(prev => !prev);
      }} />
        <UserMenu ref={userMenuRef} open={menuOpen} accounts={<UserMenuAccount avatarSrc="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png" titleText="Alaina Chevalier" subtitleText="aliana.chevalier@sap.com" description="Delivery Manager, SAP SE" selected />} onClose={() => {
        setMenuOpen(false);
      }} onItemClick={handleUserMenuItemClick}>
          <UserMenuItem icon={actionSettingsIcon} text="Settings" data-settings={'true'} />
        </UserMenu>
        <UserSettingsDialog {...args} open={open} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }}>
          <UserSettingsItem icon="user-settings" text="User Account" tooltip="User Account" headerText="User Account" pages={<>
                <UserSettingsView>
                  <Icon name="person-placeholder" />
                  <Title level="H3" size="H3" className="ua-name">
                    Alain Chevalier
                  </Title>
                  <div className="container">
                    <div className="ua-info-item">
                      <Label for="name">Name:</Label>
                      <Text>Alain Chevalier</Text>
                    </div>
                    <div className="ua-info-item">
                      <Label for="email">Email:</Label>
                      <Text>alian.chevalier@sap.com</Text>
                    </div>
                    <div className="ua-info-item">
                      <Label for="server">Server:</Label>
                      <Text>delivery-001.sap.com</Text>
                    </div>
                  </div>
                  <Label for="reset-all-button">Personalization</Label>
                  <br />
                  <Button>Reset All Personalization</Button>
                  <Panel fixed className="ua-panel">
                    <Text>
                      Reset your personalization settings for the launchpad (such as theme, language, user activities,
                      and home page content).
                    </Text>
                  </Panel>
                </UserSettingsView>
              </>} />
          <UserSettingsItem icon="palette" text="Appearance" tooltip="Appearance" headerText="Appearance">
            <UserSettingsView text="Themes">
              <List separators="Inner">
                <ListItemStandard icon="palette">SAP Morning Horizon</ListItemStandard>
                <ListItemStandard icon="palette">SAP Evening Horizon</ListItemStandard>
                <ListItemStandard icon="palette">SAP High Contrast Black (SAP Horizon)</ListItemStandard>
                <ListItemStandard icon="palette">SAP High Contrast White (SAP Horizon)</ListItemStandard>
              </List>
              <Button className="save-btn" design="Emphasized">
                Save
              </Button>
            </UserSettingsView>
            <UserSettingsView text="Display settings">
              <CheckBox checked text="Optimized for Touch Input" />
              <Panel fixed>
                <Label>
                  Increases the size and spacing of controls to allow you to interact with them more easily using your
                  fingertip. This is useful for hybrid devices that combine touch and mouse events.
                </Label>
              </Panel>
            </UserSettingsView>
          </UserSettingsItem>
          <UserSettingsItem text="Language & Region" tooltip="Language & Region" headerText="Language & Region" pages={<UserSettingsView>
                <div className="us-container">
                  <div className="lr-item">
                    <Label>Language and Region:</Label>
                    <ComboBox placeholder="Language">
                      <ComboBoxItem text="Browse Language" />
                      <ComboBoxItem text="English" />
                      <ComboBoxItem text="European Spanish" />
                      <ComboBoxItem text="French (France)" />
                      <ComboBoxItem text="Germany" />
                    </ComboBox>
                  </div>
                  <div className="lr-item">
                    <Label for="format">Date Format:</Label>
                    <Text>MMM d, y</Text>
                  </div>
                </div>
                <Panel fixed>
                  <Label>
                    The time zone will not be applied in UI5 apps. If you don't know the type of an app, you can check
                    it in the "About" dialog in the "ID of the Application Framework” field.
                  </Label>
                </Panel>
                <br />
                <div className="lt-time-format">
                  <Label for="timeFormat">Time Format:</Label>
                  <RadioButton name="timeFormat" text="12h" />
                  <RadioButton checked name="timeFormat" text="24h" />
                </div>
                <Panel fixed>
                  <Label>
                    After you save your settings, the browser will refresh for the new settings to take effect.
                  </Label>
                </Panel>
              </UserSettingsView>} />
          <UserSettingsItem icon="iphone" text="SAP Mobile Start Application" tooltip="SAP Mobile Start Application" headerText="SAP Mobile Start Application">
            <UserSettingsView slot="pages">
              <Button>iOS</Button>
              <Button>Android</Button>
            </UserSettingsView>
            <UserSettingsView slot="pages" text="Inner Page" secondary>
              <Text>Enable access to your site from the SAP Mobile Start application.</Text>
              <Button>Install</Button>
              <Button>Register</Button>
              <Text>Scan the QR Code to install the mobile application</Text>
              <Icon name="qr-code" style={{
              width: '20rem',
              height: '20rem'
            }} />
            </UserSettingsView>
          </UserSettingsItem>
          <UserSettingsItem icon="bell" text="Notifications" tooltip="Notifications" headerText="Notifications">
            <UserSettingsView slot="pages">
              <CheckBox checked text="Show High-Priority Notification Alerts" />
            </UserSettingsView>
          </UserSettingsItem>
          <UserSettingsItem icon="reset" slot="fixedItems" text="Reset Settings" tooltip="Reset Settings" headerText="Reset Settings">
            <UserSettingsView text="Reset Personalization">
              <Button>Reset Personalization content</Button>
            </UserSettingsView>
            <UserSettingsView text="Reset All Settings">
              <Button>Reset All Settings content</Button>
            </UserSettingsView>
          </UserSettingsItem>
        </UserSettingsDialog>
      </>;
  }
}`,...(G=($=U.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};const We=["Default"],qt=Object.freeze(Object.defineProperty({__proto__:null,Default:U,__namedExportsOrder:We,default:He},Symbol.toStringTag,{value:"Module"}));export{qt as C,U as D,g as U,p as a};
