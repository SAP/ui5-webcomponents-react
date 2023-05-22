import{e as f,l as p,a as h,b as g,p as b,c as _}from"./withWebComponent-d61dcbbc.js";import{a as u,d as x}from"./UI5Element-784c80b7.js";import{b as c}from"./ListItemBase-e3ea9589.js";import{Q as v}from"./i18n-defaults-254d6b69.js";import{o as w}from"./class-map-519e9c6d.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./index-ebeaab24.js";import"./jsx-runtime-5926aa06.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./ResizeHandler-846eb684.js";import"./ItemNavigation-18d1bc39.js";import"./Icons-e56d104a.js";import"./getActiveElement-bcae01ed.js";import"./Icon-a5230073.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./AriaLabelHelper-43a261ec.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./decline-02d24632.js";import"./i18n-defaults-80781f7e.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-9f101f31.js";import"./Label-07c40881.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./style-map-33b353d0.js";function y(i,t,o){return f`<ul part="native-li" tabindex="${p(this._tabIndex)}" class="ui5-ghli-root ${w(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" aria-label="${p(this.ariaLabelText)}" aria-roledescription="${p(this.groupHeaderText)}" role="group"><div id="${p(this._id)}-content" class="ui5-li-content"><span class="ui5-ghli-title"><slot></slot></span></div></ul>`}u("@ui5/webcomponents-theming","sap_fiori_3",async()=>h);u("@ui5/webcomponents","sap_fiori_3",async()=>g);const H={packageName:"@ui5/webcomponents",fileName:"themes/GroupHeaderListItem.css",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{height:var(--_ui5_group_header_list_item_height);background:var(--ui5-group-header-listitem-background-color);color:var(--sapList_TableGroupHeaderTextColor)}:host([has-border]){border-bottom:1px solid var(--sapList_GroupHeaderBorderColor)}.ui5-li-root.ui5-ghli-root{padding-top:.5rem;color:currentColor;font-size:var(--sapFontHeader6Size);font-weight:400;line-height:2rem;margin:0}.ui5-ghli-title{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700}"};var d=globalThis&&globalThis.__decorate||function(i,t,o,a){var s=arguments.length,e=s<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(i,t,o,a);else for(var m=i.length-1;m>=0;m--)(n=i[m])&&(e=(s<3?n(e):s>3?n(t,o,e):n(t,o))||e);return s>3&&e&&Object.defineProperty(t,o,e),e},l;let r=l=class extends c{get groupItem(){return!0}get groupHeaderText(){return l.i18nBundle.getText(v)}get ariaLabelText(){return[this.textContent,this.accessibleName].filter(Boolean).join(" ")}static async onDefine(){l.i18nBundle=await x("@ui5/webcomponents")}};d([b()],r.prototype,"accessibleName",void 0);r=l=d([_({tag:"ui5-li-groupheader",languageAware:!0,template:y,styles:[c.styles,H]})],r);r.define();const Z=r;export{Z as default};
//# sourceMappingURL=GroupHeaderListItem-e2839639.js.map
