import{j as a,c as g,p as b,d as x,s as p,m as E,e as C,I as M,O as V,F as R,x as F,k as j,q as v,w as W}from"./withWebComponent-DfVDXLfc.js";import{d as m}from"./slot-_4yKMUwC.js";import{o as z}from"./query-DOGTENGM.js";import{l as _}from"./event-strict-DgQLNDEV.js";import{i as B}from"./i18n-DEVDpFvK.js";import{f as A}from"./ResizeHandler-DlOwLzX7.js";import{i as I}from"./MediaRange-Bnzt26Xb.js";import{p as G,e as $}from"./InvisibleMessage-DJ38XCrZ.js";import{u as Y}from"./debounce-TTkz9ISH.js";import"./slim-arrow-up-DqdaOErm.js";import"./slim-arrow-down-DgHhU6I8.js";import"./pushpin-on-DHXZCH3M.js";import{a as X}from"./Button-Bn6Q5CAy.js";import{T as K}from"./ToggleButton-CkyyxGkw.js";import{d as L}from"./parameters-bundle.css-lWn4zk3B.js";import{ap as J,aq as Q,ar as Z,as as ee,at as te,au as ne}from"./i18n-defaults-BeKUSBuv.js";import{b as oe,i as ae}from"./Keys-Df3IBHp2.js";import{b as U}from"./index-BVRPa2PA.js";import{I as ie}from"./Icon-DVzRT9Bg.js";import{i as se}from"./slim-arrow-down-BSVaGdsd.js";function re(){return a("div",{class:"ui5-dynamic-page-header-actions-root",children:g("div",{class:"ui5-dynamic-page-header-actions--wrapper",children:[a(X,{class:"ui5-dynamic-page-header-action ui5-dynamic-page-header-action-expand",onClick:this.onExpandClick,icon:this.arrowButtonIcon,accessibleName:this.expandLabel,accessibilityAttributes:this.accessibilityAttributes,tooltip:this.expandLabel,onMouseOver:this.onExpandHoverIn,onMouseOut:this.onExpandHoverOut}),this.showPinButton&&a(K,{class:"ui5-dynamic-page-header-action ui5-dynamic-page-header-action-pin",onClick:this.onPinClick,icon:this.pinButtonIcon,pressed:this.pinned,accessibilityAttributes:this.accessibilityAttributes,accessibleName:this.pinLabel,tooltip:this.pinLabel})]})})}b("@ui5/webcomponents-theming","sap_horizon",async()=>x);b("@ui5/webcomponents-fiori","sap_horizon",async()=>L);const le=`.ui5-dynamic-page-header-actions-root{position:relative;display:flex;justify-content:center;align-items:center;width:100%;.ui5-dynamic-page-header-action{position:relative;z-index:1;min-width:1.5rem;height:1.5rem;background-color:var(--_ui5-v2-6-2_dynamic_page_header-actions-background);border:1px solid var(--sapButton_BorderColor);box-shadow:var(--_ui5-v2-6-2_dynamic_page_header-actions-box-shadow);color:var(--_ui5-v2-6-2_dynamic_page_header-actions-color)}.ui5-dynamic-page-header-action-pin[pressed]{background-color:var(--_ui5-v2-6-2_dynamic_page_header-actions-background-pressed);color:var(--_ui5-v2-6-2_dynamic_page_header-actions-color-pressed)}.ui5-dynamic-page-header-actions--wrapper{position:absolute;display:flex;gap:.5rem;z-index:1;&:before,&:after{content:"";position:absolute;top:50%;transform:translateY(-100%);width:6.125rem;height:.0625rem;z-index:0}&:before{right:50%;background:linear-gradient(to right,transparent,var(--_ui5-v2-6-2_dynamic_page_actions-lines-color))}&:after{left:50%;background:linear-gradient(to left,transparent,var(--_ui5-v2-6-2_dynamic_page_actions-lines-color))}}}
`;var w=function(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var c=i.length-1;c>=0;c--)(l=i[c])&&(n=(s<3?l(n):s>3?l(e,t,n):l(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},T;let f=T=class extends M{constructor(){super(...arguments),this.pinned=!1,this.hidePinButton=!1,this.snapped=!1,this.accessibilityAttributes={}}get arrowButtonIcon(){return this.snapped?"slim-arrow-down":"slim-arrow-up"}get pinButtonIcon(){return V()?"pushpin-off":this.pinned?"pushpin-on":"pushpin-off"}get expandButton(){return this.shadowRoot.querySelector(".ui5-dynamic-page-header-action-expand")}get pinButton(){return this.shadowRoot.querySelector(".ui5-dynamic-page-header-action-pin")}get pinLabel(){return T.i18nBundle.getText(J)}get expandLabel(){return this.snapped?T.i18nBundle.getText(Q):T.i18nBundle.getText(Z)}focusExpandButton(){var e;(e=this.expandButton)==null||e.focus()}focusPinButton(){var e;(e=this.pinButton)==null||e.focus()}onExpandClick(){this.fireDecoratorEvent("expand-button-click")}onPinClick(){this.fireDecoratorEvent("pin-button-click")}onExpandHoverIn(){this.fireDecoratorEvent("expand-button-hover-in")}onExpandHoverOut(){this.fireDecoratorEvent("expand-button-hover-out")}get showPinButton(){return!this.hidePinButton&&!this.snapped}};w([p({type:Boolean})],f.prototype,"pinned",void 0);w([p({type:Boolean})],f.prototype,"hidePinButton",void 0);w([p({type:Boolean})],f.prototype,"snapped",void 0);w([p({type:Object})],f.prototype,"accessibilityAttributes",void 0);w([B("@ui5/webcomponents-fiori")],f,"i18nBundle",void 0);f=T=w([E({tag:"ui5-dynamic-page-header-actions",renderer:C,styles:le,template:re}),_("expand-button-click",{bubbles:!0}),_("pin-button-click",{bubbles:!0}),_("expand-button-hover-in",{bubbles:!0}),_("expand-button-hover-out",{bubbles:!0})],f);f.define();const de=f;function pe(){return g("div",{class:"ui5-dynamic-page-root",children:[g("div",{class:"ui5-dynamic-page-scroll-container",onScroll:this.snapOnScroll,children:[g("header",{class:"ui5-dynamic-page-title-header-wrapper",id:`${this._id}-header`,"aria-label":this._headerLabel,"aria-expanded":this._headerExpanded,"onui5-toggle-title":this.onToggleTitle,children:[a("slot",{name:"titleArea"}),this.headerInTitle&&a("slot",{tabIndex:this.headerTabIndex,"aria-hidden":this.headerAriaHidden,name:"headerArea"}),this.actionsInTitle&&O.call(this)]}),this.headerInContent&&a("slot",{tabIndex:this.headerTabIndex,"aria-hidden":this.headerAriaHidden,name:"headerArea"}),!this.actionsInTitle&&O.call(this),a("div",{class:"ui5-dynamic-page-content",part:"content",children:g("div",{class:"ui5-dynamic-page-fit-content",part:"fit-content",children:[a("slot",{}),this.showFooter&&a("div",{class:"ui5-dynamic-page-spacer"})]})})]}),a("div",{class:"ui5-dynamic-page-footer",part:"footer",children:a("slot",{name:"footerArea"})})]})}function O(){if(!this.hasSnappedTitleOnMobile&&this.hasHeading)return a(de,{snapped:this.headerSnapped,pinned:this.headerPinned,hidePinButton:this.hidePinButton,accessibilityAttributes:this._accAttributesForHeaderActions,"onui5-expand-button-click":this.onExpandClick,"onui5-pin-button-click":this.onPinClick,"onui5-expand-button-hover-in":this.onExpandHoverIn,"onui5-expand-button-hover-out":this.onExpandHoverOut})}b("@ui5/webcomponents-theming","sap_horizon",async()=>x);b("@ui5/webcomponents-fiori","sap_horizon",async()=>L);const he=`.ui5-dynamic-page-title-header-wrapper{position:sticky;top:0;z-index:98}:host{display:block;height:100%;background-color:var(--ui5-v2-6-2_dynamic_page_background)}.ui5-dynamic-page-root{height:inherit;overflow-y:hidden}.ui5-dynamic-page-scroll-container{overflow-y:auto;height:100%}.ui5-dynamic-page-scroll-container{display:flex;flex-direction:column}.ui5-dynamic-page-content{flex-grow:1;position:relative}.ui5-dynamic-page-fit-content{position:absolute;inset:0}.ui5-dynamic-page-footer{position:sticky;bottom:.5rem;box-sizing:border-box;z-index:110;opacity:0;transform:translateY(100%);transition:opacity .35s ease-in-out,transform .35s ease-in-out}.ui5-dynamic-page-spacer{height:var(--_ui5-v2-6-2_dynamic_page_footer_spacer)}:host([show-footer]) .ui5-dynamic-page-fit-content{bottom:var(--_ui5-v2-6-2_dynamic_page_footer_spacer)}:host([show-footer]) .ui5-dynamic-page-footer{transform:translateY(0);opacity:1}::slotted([slot="footerArea"]){border-radius:.25rem;background-color:var(--_ui5-v2-6-2_dynamic_page_header_background_color);box-sizing:content-box;width:auto;margin:0 .5rem .5rem}::slotted([slot="titleArea"]){width:auto}:host([media-range="S"]) .ui5-dynamic-page-fit-content{padding:var(--_ui5-v2-6-2_dynamic_page_content_padding_S)}:host([media-range="S"]) ::slotted([slot="titleArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_title_padding_S)}:host([media-range="S"]) ::slotted([slot="headerArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_header_padding_S)}:host([media-range="M"]) .ui5-dynamic-page-fit-content{padding:var(--_ui5-v2-6-2_dynamic_page_content_padding_M)}:host([media-range="M"]) ::slotted([slot="titleArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_title_padding_M)}:host([media-range="M"]) ::slotted([slot="headerArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_header_padding_M)}:host([media-range="L"]) .ui5-dynamic-page-fit-content{padding:var(--_ui5-v2-6-2_dynamic_page_content_padding_L)}:host([media-range="L"]) ::slotted([slot="titleArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_title_padding_L)}:host([media-range="L"]) ::slotted([slot="headerArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_header_padding_L)}:host([media-range="XL"]) .ui5-dynamic-page-fit-content{padding:var(--_ui5-v2-6-2_dynamic_page_content_padding_XL)}:host([media-range="XL"]) ::slotted([slot="titleArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_title_padding_XL)}:host([media-range="XL"]) ::slotted([slot="headerArea"]){padding:var(--_ui5-v2-6-2_dynamic_page_header_padding_XL)}
`;function ce(){return a("div",{class:"ui5-dynamic-page-header-root",role:"region",children:a("slot",{})})}b("@ui5/webcomponents-theming","sap_horizon",async()=>x);b("@ui5/webcomponents-fiori","sap_horizon",async()=>L);const me=`:host{background-color:var(--_ui5-v2-6-2_dynamic_page_header_background_color);display:block;box-shadow:var(--_ui5-v2-6-2_dynamic_page_header-box-shadow)}.ui5-dynamic-page-header-root{background:inherit;padding-top:var(--_ui5-v2-6-2_dynamic_page_header_padding_top);padding-bottom:var(--_ui5-v2-6-2_dynamic_page_header_padding_bottom)}
`;var q=function(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var c=i.length-1;c>=0;c--)(l=i[c])&&(n=(s<3?l(n):s>3?l(e,t,n):l(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let S=class extends M{};q([m({default:!0,type:HTMLElement})],S.prototype,"content",void 0);S=q([E({tag:"ui5-dynamic-page-header",renderer:C,styles:me,template:ce})],S);S.define();const ue=S;function ge(){return g("div",{class:"ui5-dynamic-page-title-root",children:[a("span",{class:"ui5-dynamic-page-title-focus-area","data-sap-focus-ref":!0,tabIndex:this._tabIndex,onKeyDown:this._onkeydown,onClick:this.onTitleClick,role:"button","aria-expanded":this._headerExpanded,"aria-labelledby":this._ariaLabelledBy,"aria-describedby":`${this._id}-toggle-description`}),this.hasSnappedTitleOnMobile?g("div",{id:`${this._id}-heading`,class:"ui5-dynamic-page--snapped-title-on-mobile",children:[a("slot",{name:"snappedTitleOnMobile"}),a(ie,{name:se,mode:"Decorative"})]}):g(R,{children:[g("div",{class:"ui5-dynamic-page-title--top-area",children:[a("slot",{name:"breadcrumbs"}),this.mobileNavigationActions&&a("slot",{name:"navigationBar"})]}),g("div",{class:"ui5-dynamic-page-title--wrapper","onui5-_min-content-width-change":this.onMinContentWidthChange,children:[a("div",{id:`${this._id}-heading`,class:"ui5-dynamic-page-title--heading",children:a("slot",{name:this.headingSlotName})}),this.hasContent&&a("div",{class:"ui5-dynamic-page-title--content",style:{"min-width":this.minContentWidth?`${this.minContentWidth||0}px`:void 0},children:a("slot",{})}),g("div",{class:"ui5-dynamic-page-title--actions",style:{"min-width":this.minActionsWidth?`${this.minActionsWidth||0}px`:void 0},children:[a("slot",{name:"actionsBar"}),!this.mobileNavigationActions&&g(R,{children:[this._needsSeparator&&a("div",{class:"ui5-dynamic-page-title--actions-separator"}),a("slot",{name:"navigationBar"})]})]})]}),a("div",{class:"ui5-dynamic-page-title--subheading",children:a("slot",{name:this.subheadingSlotName})})]}),a("span",{id:`${this._id}-toggle-description`,class:"ui5-hidden-text",children:this._ariaDescribedbyText})]})}b("@ui5/webcomponents-theming","sap_horizon",async()=>x);b("@ui5/webcomponents-fiori","sap_horizon",async()=>L);const fe=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{display:flex;flex-direction:column;position:relative;width:100%;background-color:var(--_ui5-v2-6-2_dynamic_page_header_background_color);min-height:var(--_ui5-v2-6-2_dynamic_page_title_min_height);word-wrap:break-word;padding-top:var(--_ui5-v2-6-2_dynamic_page_title_padding_top);padding-bottom:var(--_ui5-v2-6-2_dynamic_page_title_padding_bottom);border-bottom:var(--_ui5-v2-6-2_dynamic_page_title_border)}:host(:not([interactive])){box-shadow:var(--_ui5-v2-6-2_dynamic_page_header-box-shadow)}:host .ui5-dynamic-page-title-root{display:inherit;flex-direction:inherit;width:inherit;height:inherit}:host:host([interactive]:hover),:host:host([interactive][hovered]){background-color:var(--_ui5-v2-6-2_dynamic_page_title_hover_background);cursor:pointer;border-bottom:var(--_ui5-v2-6-2_dynamic_page_title_hover_border)}:host([snapped]){box-shadow:var(--sapContent_HeaderShadow)}:host([has-snapped-title-on-mobile]){min-height:var(--_ui5-v2-6-2_dynamic_page_snapped_title_on_mobile_min_height);line-height:var(--_ui5-v2-6-2_dynamic_page_snapped_title_on_mobile_line_height)}::slotted([ui5-breadcrumbs][slot="breadcrumbs"]){padding:var(--_ui5-v2-6-2_dynamic_page_title_breadcrumbs_padding_top) 0 var(--_ui5-v2-6-2_dynamic_page_title_breadcrumbs_padding_bottom) 0}::slotted([ui5-title][slot="heading"]),::slotted([ui5-title][slot="snappedHeading"]){font-family:var(--sapObjectHeader_Title_FontFamily);color:var(--sapObjectHeader_Title_TextColor);padding:var(--_ui5-v2-6-2_dynamic_page_title_heading_padding_top) 0 0 0;margin:var(--_ui5-v2-6-2_dynamic_page_title_heading_margin)}::slotted([ui5-title][slot="heading"]){font-size:var(--sapObjectHeader_Title_FontSize)}::slotted([ui5-title][slot="snappedHeading"]),:host([snapped]) ::slotted([ui5-title][slot="heading"]){font-size:var(--sapObjectHeader_Title_SnappedFontSize);text-overflow:ellipsis}::slotted([slot="content"]),::slotted([slot="snappedSubheading"]){color:var(--sapObjectHeader_Subtitle_TextColor);font-size:var(--sapFontSize);margin-top:var(--_ui5-v2-6-2_dynamic_page_title_subheading_margin_top);min-width:0}::slotted([ui5-tag]){max-width:100%}::slotted([ui5-toolbar][slot="actionsBar"]){padding:0 0 0 1rem}.ui5-dynamic-page-title--wrapper{display:flex}.ui5-dynamic-page-title--heading{flex-shrink:1;min-width:1px}.ui5-dynamic-page--snapped-title-on-mobile{display:flex;justify-content:space-between;align-items:center;pointer-events:none}.ui5-dynamic-page-title--content{padding:.6rem 0 0 1rem;flex-shrink:1.6;min-width:3rem;flex-grow:1;display:flex}.ui5-dynamic-page-title--actions{flex-shrink:1.6;min-width:3rem;flex-grow:1;display:flex}.ui5-dynamic-page-title--actions ::slotted([slot="actionsBar"]){border:none;flex:1}.ui5-dynamic-page-title--actions .ui5-dynamic-page-title--actions-separator{flex:0 1;&:before{content:"";display:inline-block;height:var(--_ui5-v2-6-2_dynamic_page_title_actions_separator_height);width:.0625rem;vertical-align:middle;background:var(--sapToolbar_SeparatorColor);margin:.5rem .5rem 0 .25rem}}::slotted([slot="navigationBar"]){border:none;margin-left:auto;flex:0 1;padding-left:0;padding-right:0}.ui5-dynamic-page-title--top-area ::slotted([slot="navigationBar"]){flex:0 1.6 auto}.ui5-dynamic-page-title--top-area{display:flex;justify-content:space-between;align-items:center}.ui5-dynamic-page-title--subheading{max-width:fit-content;z-index:1}:host([desktop]:focus),.ui5-dynamic-page-title-focus-area:focus-visible{outline:var(--_ui5-v2-6-2_dynamic_page_title_focus_outline);outline-offset:var(--_ui5-v2-6-2_dynamic_page_title_focus_outline_offset)}.ui5-dynamic-page-title-focus-area{outline:none;position:absolute;top:0;left:0;width:100%;height:100%}
`;var d=function(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var c=i.length-1;c>=0;c--)(l=i[c])&&(n=(s<3?l(n):s>3?l(e,t,n):l(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},k;let r=k=class extends M{constructor(){super(),this.snapped=!1,this.mobileNavigationActions=!1,this.focused=!1,this.hasSnappedTitleOnMobile=!1,this.interactive=!1,this._handleResize=this.handleResize.bind(this)}onEnterDOM(){A.register(this,this._handleResize),F()&&this.setAttribute("desktop","")}onExitDOM(){A.deregister(this,this._handleResize)}onBeforeRendering(){this.prepareLayoutActions()}get hasContent(){return!!this.content.length}get headingSlotName(){return this.snapped?"snappedHeading":"heading"}get subheadingSlotName(){return this.snapped?"snappedSubheading":"subheading"}get _tabIndex(){return this.interactive?0:void 0}get _headerExpanded(){return!this.snapped}get _ariaDescribedbyText(){return k.i18nBundle.getText(ee)}get _ariaLabelledBy(){if(this[this.headingSlotName].length)return`${this._id}-heading`}get _needsSeparator(){return this.navigationBar.length&&this.actionsBar.length}prepareLayoutActions(){const e=this.querySelector("[ui5-toolbar][slot='navigationBar']"),t=this.offsetWidth>=1280;e&&e.items.forEach(o=>{o.overflowPriority=t?U.NeverOverflow:U.Default})}handleResize(){this.mobileNavigationActions=this.offsetWidth<1280}onMinContentWidthChange(e){var o,s;const t=(s=(o=e.target)==null?void 0:o.assignedSlot)==null?void 0:s.name;!t||t==="content"?this.minContentWidth=e.detail.minWidth:t==="actionsBar"&&(this.minActionsWidth=e.detail.minWidth)}onTitleClick(){this.fireDecoratorEvent("toggle-title")}_onkeydown(e){(oe(e)||ae(e))&&(e.preventDefault(),this.fireDecoratorEvent("toggle-title"))}};d([p({type:Boolean})],r.prototype,"snapped",void 0);d([p({type:Boolean})],r.prototype,"mobileNavigationActions",void 0);d([p({type:Boolean})],r.prototype,"focused",void 0);d([p({type:Number})],r.prototype,"minContentWidth",void 0);d([p({type:Number})],r.prototype,"minActionsWidth",void 0);d([p({type:Boolean})],r.prototype,"hasSnappedTitleOnMobile",void 0);d([m({type:HTMLElement})],r.prototype,"heading",void 0);d([m({type:HTMLElement})],r.prototype,"snappedHeading",void 0);d([m({type:HTMLElement})],r.prototype,"snappedTitleOnMobile",void 0);d([m({type:HTMLElement})],r.prototype,"actionsBar",void 0);d([m({type:HTMLElement})],r.prototype,"navigationBar",void 0);d([m({default:!0,type:HTMLElement})],r.prototype,"content",void 0);d([m({type:HTMLElement})],r.prototype,"subheading",void 0);d([m({type:HTMLElement})],r.prototype,"snappedSubheading",void 0);d([m({type:HTMLElement})],r.prototype,"breadcrumbs",void 0);d([p({type:Boolean})],r.prototype,"interactive",void 0);d([B("@ui5/webcomponents-fiori")],r,"i18nBundle",void 0);r=k=d([E({tag:"ui5-dynamic-page-title",fastNavigation:!0,renderer:C,styles:fe,template:ge}),_("toggle-title",{bubbles:!0})],r);r.define();const be=r;var u=function(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var c=i.length-1;c>=0;c--)(l=i[c])&&(n=(s<3?l(n):s>3?l(e,t,n):l(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},N;const ye=5,y=10;let h=N=class extends M{constructor(){super(),this.hidePinButton=!1,this.headerPinned=!1,this.showFooter=!1,this.skipSnapOnScroll=!1,this.showHeaderInStickArea=!1,this.isToggled=!1,this._headerSnapped=!1,this._updateMediaRange=this.updateMediaRange.bind(this)}onEnterDOM(){A.register(this,this._updateMediaRange)}onExitDOM(){A.deregister(this,this._updateMediaRange)}onBeforeRendering(){this.dynamicPageTitle&&(this.dynamicPageTitle.snapped=this._headerSnapped,this.dynamicPageTitle.interactive=this.hasHeading,this.dynamicPageTitle.hasSnappedTitleOnMobile=!!this.hasSnappedTitleOnMobile,this.dynamicPageTitle.removeAttribute("hovered"))}get dynamicPageTitle(){return this.querySelector("[ui5-dynamic-page-title]")}get dynamicPageHeader(){return this.querySelector("[ui5-dynamic-page-header]")}get actionsInTitle(){return this._headerSnapped||this.showHeaderInStickArea||this.headerPinned}get headerInTitle(){return!this._headerSnapped&&(this.showHeaderInStickArea||this.headerPinned)}get headerInContent(){return!this.showHeaderInStickArea&&!this.headerInTitle&&!this.hasSnappedTitleOnMobile}get _headerLabel(){return this._headerSnapped?N.i18nBundle.getText(te):N.i18nBundle.getText(ne)}get _headerExpanded(){return!this._headerSnapped}get _accAttributesForHeaderActions(){return{controls:`${this._id}-header`}}get headerTabIndex(){return this._headerSnapped||this.showHeaderInStickArea?-1:0}get headerAriaHidden(){return this._headerSnapped||this.showHeaderInStickArea}get hasHeading(){return this.headerArea.length>0}get headerSnapped(){return this._headerSnapped}get hasSnappedTitleOnMobile(){var e;return j()&&this.headerSnapped&&((e=this.dynamicPageTitle)==null?void 0:e.snappedTitleOnMobile.length)}set headerSnapped(e){e!==this._headerSnapped&&this._toggleHeader()}snapOnScroll(){Y(()=>this.snapTitleByScroll(),ye)}snapTitleByScroll(){if(!this.dynamicPageTitle||!this.dynamicPageHeader||this.headerPinned)return;if(this.isToggled){this.isToggled=!1;return}if(this.skipSnapOnScroll){this.skipSnapOnScroll=!1;return}const e=this.scrollContainer.scrollTop,t=this.dynamicPageHeader.getBoundingClientRect().height,o=this._headerSnapped;this._headerSnapped&&e>t&&(this.showHeaderInStickArea=!1);const s=!this._headerSnapped&&e>t+y,n=this._headerSnapped&&(e<t-y||!e&&!t);s?(this.showHeaderInStickArea=!1,this._headerSnapped=!0,requestAnimationFrame(()=>{this.scrollContainer.scrollTop===0&&(this.scrollContainer.scrollTop=y)})):n&&(this._headerSnapped=!1),o!==this._headerSnapped&&this.fireDecoratorEvent("title-toggle")}async onExpandClick(){var e,t;this.isToggled=!0,this._toggleHeader(),this.fireDecoratorEvent("title-toggle"),await v(),(e=this.headerActions)==null||e.focusExpandButton(),this.hasSnappedTitleOnMobile&&((t=this.dynamicPageTitle)==null||t.focus()),G(this._headerLabel,$.Polite)}async onPinClick(){var e;this.headerPinned=!this.headerPinned,this.headerPinned&&(this.showHeaderInStickArea=!0),this.fireDecoratorEvent("pin-button-toggle"),await v(),(e=this.headerActions)==null||e.focusPinButton()}async onToggleTitle(){this.hasHeading&&(this.isToggled=!0,this._toggleHeader(),this.fireDecoratorEvent("title-toggle"),await v(),this.dynamicPageTitle.focus())}async _toggleHeader(){var o;const e=((o=this.dynamicPageHeader)==null?void 0:o.getBoundingClientRect().height)||0,t=this.scrollContainer.scrollTop;if(t>y&&t<e){this._headerSnapped?(this.showHeaderInStickArea=!1,this._headerSnapped=!1):(this._headerSnapped=!0,this.showHeaderInStickArea=!0,this.scrollContainer.scrollTop=0);return}this.scrollContainer.scrollTop===y&&(this.scrollContainer.scrollTop=0),this.showHeaderInStickArea=!this.showHeaderInStickArea,this._headerSnapped=!this._headerSnapped,this.skipSnapOnScroll=!0,await v(),this._headerSnapped&&this.scrollContainer.scrollTop<y&&(this.scrollContainer.scrollTop=y)}async onExpandHoverIn(){var e;(e=this.dynamicPageTitle)==null||e.setAttribute("hovered",""),await v()}async onExpandHoverOut(){var e;(e=this.dynamicPageTitle)==null||e.removeAttribute("hovered"),await v()}updateMediaRange(){this.mediaRange=I.getCurrentRange(I.RANGESETS.RANGE_4STEPS,this.getDomRef().offsetWidth)}};u([p({type:Boolean})],h.prototype,"hidePinButton",void 0);u([p({type:Boolean})],h.prototype,"headerPinned",void 0);u([p({type:Boolean})],h.prototype,"showFooter",void 0);u([p()],h.prototype,"mediaRange",void 0);u([m({default:!0,type:HTMLElement})],h.prototype,"content",void 0);u([m({type:be})],h.prototype,"titleArea",void 0);u([m({type:ue})],h.prototype,"headerArea",void 0);u([m({type:HTMLElement})],h.prototype,"footerArea",void 0);u([p({type:Boolean})],h.prototype,"_headerSnapped",void 0);u([z(".ui5-dynamic-page-scroll-container")],h.prototype,"scrollContainer",void 0);u([z("[ui5-dynamic-page-header-actions]")],h.prototype,"headerActions",void 0);u([p({type:Boolean})],h.prototype,"headerSnapped",null);u([B("@ui5/webcomponents-fiori")],h,"i18nBundle",void 0);h=N=u([E({tag:"ui5-dynamic-page",renderer:C,styles:he,template:pe}),_("pin-button-toggle",{bubbles:!0}),_("title-toggle",{bubbles:!0})],h);h.define();const D=W("ui5-dynamic-page",[],["headerPinned","headerSnapped","hidePinButton","showFooter"],["footerArea","headerArea","titleArea"],["pin-button-toggle","title-toggle"]);D.displayName="DynamicPage";try{D.displayName="DynamicPage",D.__docgenInfo={description:`A layout component, representing a web page, consisting of a title, header with dynamic behavior, a content area, and an optional floating footer.

The component consist of several components:

- \`DynamicPageTitle\` - a component, holding the title of the page, the navigation actions and the content. The displayed content changes based on the current mode of the \`DynamicPageHeader\`.
- \`DynamicPageHeader\` - a generic container, which can contain a single layout component and any other HTML elements. The header works in two modes - expanded and snapped and its behavior can be adjusted with the help of different properties.
- \`Content area\` - a generic container, which can have a single UI5 layout.
- \`Footer\` - positioned at the bottom with a small offset and used for additional actions, the footer floats above the content.

### Usage

Use the \`DynamicPage\` if you need to have a title, that is always visible
and a header, that has configurable Expanding/Snapping functionality.
If you don't need the Expanding/Snapping functionality it is better to use the
\`Page\` as a lighter component.

The app can add to the \`default\` slot of the ui5-dynamic-page either content that is designed to fit its container (e.g. has 100% height),
or content with own height that may overflow its container. In the second case the \`DynamicPage\` will show a scrollbar that allows the user
scroll through the content.

## Notes:

- Snapping of the \`DynamicPageTitle\` is not supported in the following case:
 - When the \`DynamicPage\` has a scroll bar, the component usually scrolls to the snapping point - the point, where the \`DynamicPageHeader\` is scrolled out completely. However, when there is a scroll bar, but not enough content to reach the snapping point, the snapping is not possible using scrolling.

### Responsive Behavior

Dynamic page web component implements the responsive paddings design.

### Keyboard Handling


### Basic Navigation

- [SPACE, ENTER, RETURN] - If focus is on a button inside DynamicPageTitle its action is being triggered, once activated.
If focus is on the snap header button (arrow button), or on the header itself, once activated, it triggers the associated action (such as snap/expand the header).
If focus is on pin button (the button with pin icon on the bottom of the header), once activated, it triggers the associated action (pinning of the header).

### Fast Navigation
- This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \` Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up\`.
In order to use this functionality, you need to import the following module:

- \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"DynamicPage",props:{children:{defaultValue:null,description:"Defines the content of the Dynamic Page.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},footerArea:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footerArea"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footerArea",required:!1,type:{name:"UI5WCSlotsNode"}},headerArea:{defaultValue:null,description:`Defines the header HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="headerArea"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"headerArea",required:!1,type:{name:"UI5WCSlotsNode"}},titleArea:{defaultValue:null,description:`Defines the title HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="titleArea"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"titleArea",required:!1,type:{name:"UI5WCSlotsNode"}},onPinButtonToggle:{defaultValue:null,description:`Fired when the pin header button is toggled.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onPinButtonToggle",required:!1,type:{name:"(event: Ui5CustomEvent<DynamicPageDomRef, never>) => void"}},onTitleToggle:{defaultValue:null,description:`Fired when the expand/collapse area of the title is toggled.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onTitleToggle",required:!1,type:{name:"(event: Ui5CustomEvent<DynamicPageDomRef, never>) => void"}},headerPinned:{defaultValue:{value:"false"},description:"Defines if the header is pinned.",name:"headerPinned",required:!1,type:{name:"boolean"}},headerSnapped:{defaultValue:{value:"false"},description:"Defines if the header is snapped.",name:"headerSnapped",required:!1,type:{name:"boolean"}},hidePinButton:{defaultValue:{value:"false"},description:"Defines if the pin button is hidden.",name:"hidePinButton",required:!1,type:{name:"boolean"}},showFooter:{defaultValue:{value:"false"},description:"Defines if the footer is shown.",name:"showFooter",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{D.displayName="DynamicPage",D.__docgenInfo={description:`A layout component, representing a web page, consisting of a title, header with dynamic behavior, a content area, and an optional floating footer.

The component consist of several components:

- \`DynamicPageTitle\` - a component, holding the title of the page, the navigation actions and the content. The displayed content changes based on the current mode of the \`DynamicPageHeader\`.
- \`DynamicPageHeader\` - a generic container, which can contain a single layout component and any other HTML elements. The header works in two modes - expanded and snapped and its behavior can be adjusted with the help of different properties.
- \`Content area\` - a generic container, which can have a single UI5 layout.
- \`Footer\` - positioned at the bottom with a small offset and used for additional actions, the footer floats above the content.

### Usage

Use the \`DynamicPage\` if you need to have a title, that is always visible
and a header, that has configurable Expanding/Snapping functionality.
If you don't need the Expanding/Snapping functionality it is better to use the
\`Page\` as a lighter component.

The app can add to the \`default\` slot of the ui5-dynamic-page either content that is designed to fit its container (e.g. has 100% height),
or content with own height that may overflow its container. In the second case the \`DynamicPage\` will show a scrollbar that allows the user
scroll through the content.

## Notes:

- Snapping of the \`DynamicPageTitle\` is not supported in the following case:
 - When the \`DynamicPage\` has a scroll bar, the component usually scrolls to the snapping point - the point, where the \`DynamicPageHeader\` is scrolled out completely. However, when there is a scroll bar, but not enough content to reach the snapping point, the snapping is not possible using scrolling.

### Responsive Behavior

Dynamic page web component implements the responsive paddings design.

### Keyboard Handling


### Basic Navigation

- [SPACE, ENTER, RETURN] - If focus is on a button inside DynamicPageTitle its action is being triggered, once activated.
If focus is on the snap header button (arrow button), or on the header itself, once activated, it triggers the associated action (such as snap/expand the header).
If focus is on pin button (the button with pin icon on the bottom of the header), once activated, it triggers the associated action (pinning of the header).

### Fast Navigation
- This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \` Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up\`.
In order to use this functionality, you need to import the following module:

- \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"DynamicPage",props:{children:{defaultValue:null,description:"Defines the content of the Dynamic Page.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},footerArea:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footerArea"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footerArea",required:!1,type:{name:"UI5WCSlotsNode"}},headerArea:{defaultValue:null,description:`Defines the header HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="headerArea"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"headerArea",required:!1,type:{name:"UI5WCSlotsNode"}},titleArea:{defaultValue:null,description:`Defines the title HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="titleArea"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"titleArea",required:!1,type:{name:"UI5WCSlotsNode"}},onPinButtonToggle:{defaultValue:null,description:`Fired when the pin header button is toggled.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onPinButtonToggle",required:!1,type:{name:"(event: Ui5CustomEvent<DynamicPageDomRef, never>) => void"}},onTitleToggle:{defaultValue:null,description:`Fired when the expand/collapse area of the title is toggled.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onTitleToggle",required:!1,type:{name:"(event: Ui5CustomEvent<DynamicPageDomRef, never>) => void"}},headerPinned:{defaultValue:{value:"false"},description:"Defines if the header is pinned.",name:"headerPinned",required:!1,type:{name:"boolean"}},headerSnapped:{defaultValue:{value:"false"},description:"Defines if the header is snapped.",name:"headerSnapped",required:!1,type:{name:"boolean"}},hidePinButton:{defaultValue:{value:"false"},description:"Defines if the pin button is hidden.",name:"hidePinButton",required:!1,type:{name:"boolean"}},showFooter:{defaultValue:{value:"false"},description:"Defines if the footer is shown.",name:"showFooter",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const P=W("ui5-dynamic-page-header",[],[],[],[]);P.displayName="DynamicPageHeader";try{P.displayName="DynamicPageHeader",P.__docgenInfo={description:`Header of the DynamicPage.

The DynamicPageHeader \`DynamicPageHeader\` is part of the DynamicPage family
and is used to serve as header of the \`DynamicPage\`.

### Usage

The \`DynamicPageHeader\` can hold any layout control and has two states - expanded
and collapsed (snapped). The switching between these states happens when:
- the user scrolls below its bottom margin
- the user clicks on the \`DynamicPageTitle\`
- through the \`DynamicPage\` property \`headerSnapped\`

### Responsive Behavior

The responsive behavior of the \`DynamicPageHeader\` depends on the behavior of the
content that is displayed.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"DynamicPageHeader",props:{children:{defaultValue:null,description:"Defines the content of the Dynamic Page Header.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{P.displayName="DynamicPageHeader",P.__docgenInfo={description:`Header of the DynamicPage.

The DynamicPageHeader \`DynamicPageHeader\` is part of the DynamicPage family
and is used to serve as header of the \`DynamicPage\`.

### Usage

The \`DynamicPageHeader\` can hold any layout control and has two states - expanded
and collapsed (snapped). The switching between these states happens when:
- the user scrolls below its bottom margin
- the user clicks on the \`DynamicPageTitle\`
- through the \`DynamicPage\` property \`headerSnapped\`

### Responsive Behavior

The responsive behavior of the \`DynamicPageHeader\` depends on the behavior of the
content that is displayed.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"DynamicPageHeader",props:{children:{defaultValue:null,description:"Defines the content of the Dynamic Page Header.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const H=W("ui5-dynamic-page-title",[],[],["actionsBar","breadcrumbs","heading","navigationBar","snappedHeading","snappedSubheading","snappedTitleOnMobile","subheading"],[]);H.displayName="DynamicPageTitle";try{H.displayName="DynamicPageTitle",H.__docgenInfo={description:"Title of the `DynamicPage`.\n\nThe `DynamicPageTitle` component is part of the `DynamicPage`\nfamily and is used to serve as title of the `DynamicPage`.\n\n### Usage\n\nThe `DynamicPageTitle` can hold any component and displays the most important\ninformation regarding the object that will always remain visible while scrolling.\n\n**Note:** The `actions` slot accepts any UI5 web component, but it's\nrecommended to use `ui5-toolbar`.\n\nThe user can switch between the expanded/collapsed states of the\n`DynamicPage` by clicking on the `DynamicPageTitle`\nor by using the expand/collapse visual indicators, positioned at the bottom of the\n`DynamicPageTitle` and the `DynamicPageHeader` inside `ui5-dynamic-page-header-actions`.\n\n### Responsive Behavior\n\nThe responsive behavior of the `DynamicPageTitle` depends on the behavior of the\ncontent that is displayed.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"DynamicPageTitle",props:{actionsBar:{defaultValue:null,description:`Defines the bar with actions in the Dynamic page title.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="actionsBar"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"actionsBar",required:!1,type:{name:"UI5WCSlotsNode"}},breadcrumbs:{defaultValue:null,description:`Defines the content of the breadcrumbs inside Dynamic Page Title.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="breadcrumbs"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"breadcrumbs",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the content of the Dynamic page title.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},heading:{defaultValue:null,description:`Defines the content of the Heading of the Dynamic Page.

The font size of the title within the \`heading\` slot can be adjusted to the recommended values using the following CSS variables:

**Expanded:** \`var(--sapObjectHeader_Title_FontSize)\`

**Collapsed:** \`var(--sapObjectHeader_Title_SnappedFontSize)\`

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="heading"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"heading",required:!1,type:{name:"UI5WCSlotsNode"}},navigationBar:{defaultValue:null,description:`Defines the bar with navigation actions in the Dynamic page title.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="navigationBar"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"navigationBar",required:!1,type:{name:"UI5WCSlotsNode"}},snappedHeading:{defaultValue:null,description:`Defines the heading that is shown only when the header is snapped.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="snappedHeading"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"snappedHeading",required:!1,type:{name:"UI5WCSlotsNode"}},snappedSubheading:{defaultValue:null,description:`Defines the content of the title that is shown only when the header is snapped.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="snappedSubheading"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"snappedSubheading",required:!1,type:{name:"UI5WCSlotsNode"}},snappedTitleOnMobile:{defaultValue:null,description:`Defines the content of the snapped title on mobile devices.

This slot is displayed only when the \`DynamicPageTitle\` is in the snapped state on mobile devices.
It should be used to provide a simplified, single-line title that takes up less space on smaller screens.

**Note:**
- The content set in this slot **overrides** all other content set in the \`DynamicPageTitle\` slots when displayed.
- The slot is intended for a single \`ui5-title\` component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="snappedTitleOnMobile"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.3.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.3.0) of **@ui5/webcomponents-fiori**.`,name:"snappedTitleOnMobile",required:!1,type:{name:"UI5WCSlotsNode"}},subheading:{defaultValue:null,description:`Defines the content of the title that is shown only when the header is not snapped.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="subheading"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"subheading",required:!1,type:{name:"UI5WCSlotsNode"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{H.displayName="DynamicPageTitle",H.__docgenInfo={description:"Title of the `DynamicPage`.\n\nThe `DynamicPageTitle` component is part of the `DynamicPage`\nfamily and is used to serve as title of the `DynamicPage`.\n\n### Usage\n\nThe `DynamicPageTitle` can hold any component and displays the most important\ninformation regarding the object that will always remain visible while scrolling.\n\n**Note:** The `actions` slot accepts any UI5 web component, but it's\nrecommended to use `ui5-toolbar`.\n\nThe user can switch between the expanded/collapsed states of the\n`DynamicPage` by clicking on the `DynamicPageTitle`\nor by using the expand/collapse visual indicators, positioned at the bottom of the\n`DynamicPageTitle` and the `DynamicPageHeader` inside `ui5-dynamic-page-header-actions`.\n\n### Responsive Behavior\n\nThe responsive behavior of the `DynamicPageTitle` depends on the behavior of the\ncontent that is displayed.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"DynamicPageTitle",props:{actionsBar:{defaultValue:null,description:`Defines the bar with actions in the Dynamic page title.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="actionsBar"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"actionsBar",required:!1,type:{name:"UI5WCSlotsNode"}},breadcrumbs:{defaultValue:null,description:`Defines the content of the breadcrumbs inside Dynamic Page Title.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="breadcrumbs"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"breadcrumbs",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the content of the Dynamic page title.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},heading:{defaultValue:null,description:`Defines the content of the Heading of the Dynamic Page.

The font size of the title within the \`heading\` slot can be adjusted to the recommended values using the following CSS variables:

**Expanded:** \`var(--sapObjectHeader_Title_FontSize)\`

**Collapsed:** \`var(--sapObjectHeader_Title_SnappedFontSize)\`

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="heading"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"heading",required:!1,type:{name:"UI5WCSlotsNode"}},navigationBar:{defaultValue:null,description:`Defines the bar with navigation actions in the Dynamic page title.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="navigationBar"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"navigationBar",required:!1,type:{name:"UI5WCSlotsNode"}},snappedHeading:{defaultValue:null,description:`Defines the heading that is shown only when the header is snapped.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="snappedHeading"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"snappedHeading",required:!1,type:{name:"UI5WCSlotsNode"}},snappedSubheading:{defaultValue:null,description:`Defines the content of the title that is shown only when the header is snapped.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="snappedSubheading"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"snappedSubheading",required:!1,type:{name:"UI5WCSlotsNode"}},snappedTitleOnMobile:{defaultValue:null,description:`Defines the content of the snapped title on mobile devices.

This slot is displayed only when the \`DynamicPageTitle\` is in the snapped state on mobile devices.
It should be used to provide a simplified, single-line title that takes up less space on smaller screens.

**Note:**
- The content set in this slot **overrides** all other content set in the \`DynamicPageTitle\` slots when displayed.
- The slot is intended for a single \`ui5-title\` component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="snappedTitleOnMobile"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.3.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.3.0) of **@ui5/webcomponents-fiori**.`,name:"snappedTitleOnMobile",required:!1,type:{name:"UI5WCSlotsNode"}},subheading:{defaultValue:null,description:`Defines the content of the title that is shown only when the header is not snapped.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="subheading"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"subheading",required:!1,type:{name:"UI5WCSlotsNode"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{D,H as a,P as b};
