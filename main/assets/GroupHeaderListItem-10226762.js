import{e as f,l,a as g,b as h,p as b,c as _}from"./withWebComponent-d0e572fe.js";import{a as u,d as v}from"./UI5Element-e8adceda.js";import{b as c}from"./ListItemBase-7c4b6958.js";import{Q as w}from"./i18n-defaults-254d6b69.js";import{o as x}from"./class-map-fc32fe45.js";import"./utils-d29e59c7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./index-64f120e9.js";import"./jsx-runtime-b5ed1ca8.js";import"./useIsomorphicLayoutEffect-4a8db993.js";import"./ResizeHandler-9d370fcd.js";import"./ItemNavigation-01761450.js";import"./Icons-5b18f7d2.js";import"./getActiveElement-bcae01ed.js";import"./Icon-46afc304.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./AriaLabelHelper-43a261ec.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-e40faf20.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-f42ddeb7.js";import"./Label-51e2d33c.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./style-map-02d033ae.js";const y=(e,o,r)=>f`<ul part="native-li" tabindex="${l(e._tabIndex)}" class="ui5-ghli-root ${x(e.classes.main)}" @focusin="${e._onfocusin}" @focusout="${e._onfocusout}" @keydown="${e._onkeydown}" aria-label="${l(e.ariaLabelText)}" aria-roledescription="${l(e.groupHeaderText)}" role="group"><div id="${l(e._id)}-content" class="ui5-li-content"><span class="ui5-ghli-title"><slot></slot></span></div></ul>`;u("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);u("@ui5/webcomponents","sap_fiori_3",async()=>h);const H={packageName:"@ui5/webcomponents",fileName:"themes/GroupHeaderListItem.css.ts",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{height:var(--_ui5_group_header_list_item_height);background:var(--ui5-group-header-listitem-background-color);color:var(--sapList_TableGroupHeaderTextColor)}:host([has-border]){border-bottom:1px solid var(--sapList_GroupHeaderBorderColor)}.ui5-li-root.ui5-ghli-root{padding-top:.5rem;color:currentColor;font-size:var(--sapFontHeader6Size);font-weight:400;line-height:2rem;margin:0}.ui5-ghli-title{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700}"};var d=globalThis&&globalThis.__decorate||function(e,o,r,a){var s=arguments.length,t=s<3?o:a===null?a=Object.getOwnPropertyDescriptor(o,r):a,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,o,r,a);else for(var m=e.length-1;m>=0;m--)(p=e[m])&&(t=(s<3?p(t):s>3?p(o,r,t):p(o,r))||t);return s>3&&t&&Object.defineProperty(o,r,t),t},n;let i=n=class extends c{get groupItem(){return!0}get groupHeaderText(){return n.i18nBundle.getText(w)}get ariaLabelText(){return[this.textContent,this.accessibleName].filter(Boolean).join(" ")}static async onDefine(){n.i18nBundle=await v("@ui5/webcomponents")}};d([b()],i.prototype,"accessibleName",void 0);i=n=d([_({tag:"ui5-li-groupheader",languageAware:!0,template:y,styles:[c.styles,H]})],i);i.define();const Y=i;export{Y as default};
//# sourceMappingURL=GroupHeaderListItem-10226762.js.map
