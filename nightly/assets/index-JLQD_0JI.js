import{c as o,l as g,a1 as q,p as y,d as A,s as p,ar as M,m as x,b7 as _,ah as C,b5 as E,gC as V,A as m,ag as F,af as B,b6 as I,k as j,b9 as G,ba as $,f as Y,gD as K,bK as v,w as W}from"./iframe-DUFdGNZ-.js";import{o as O}from"./query-CzSBusdE.js";import{p as X,e as J}from"./InvisibleMessage-Btu_O-HX.js";import"./slim-arrow-up-QR3q2cSf.js";import"./slim-arrow-down-C3AMNhFD.js";import"./pushpin-on-DQHOmwMl.js";import{T as Q}from"./ToggleButton-KUQcKiai.js";import{d as L}from"./parameters-bundle.css-34zgZIqy.js";import{aI as Z,aJ as ee,aK as te,aL as ne,aM as oe,aN as ae}from"./i18n-defaults-Cjp7arcT.js";import{d as U}from"./ToolbarButton-C1TKh5IB.js";import{i as ie}from"./slim-arrow-down-Ba9Bx2ZK.js";function se(){return o("div",{class:"ui5-dynamic-page-header-actions-root",children:g("div",{class:"ui5-dynamic-page-header-actions--wrapper",children:[o(q,{class:"ui5-dynamic-page-header-action ui5-dynamic-page-header-action-expand",onClick:this.onExpandClick,icon:this.arrowButtonIcon,accessibleName:this.expandLabel,accessibilityAttributes:this.accessibilityAttributes,tooltip:this.expandLabel,onMouseOver:this.onExpandHoverIn,onMouseOut:this.onExpandHoverOut}),this.showPinButton&&o(Q,{class:"ui5-dynamic-page-header-action ui5-dynamic-page-header-action-pin",onClick:this.onPinClick,icon:this.pinButtonIcon,pressed:this.pinned,accessibilityAttributes:this.accessibilityAttributes,accessibleName:this.pinLabel,tooltip:this.pinLabel})]})})}y("@ui5/webcomponents-theming","sap_horizon",async()=>A);y("@ui5/webcomponents-fiori","sap_horizon",async()=>L);const re=`.ui5-dynamic-page-header-actions-root{position:relative;display:flex;justify-content:center;align-items:center;width:100%;.ui5-dynamic-page-header-action{position:relative;z-index:1;min-width:1.5rem;height:1.5rem;background-color:var(--_ui5-v2-13-3_dynamic_page_header-actions-background);border:1px solid var(--sapButton_BorderColor);box-shadow:var(--_ui5-v2-13-3_dynamic_page_header-actions-box-shadow);color:var(--_ui5-v2-13-3_dynamic_page_header-actions-color)}.ui5-dynamic-page-header-action-pin[pressed]{background-color:var(--_ui5-v2-13-3_dynamic_page_header-actions-background-pressed);color:var(--_ui5-v2-13-3_dynamic_page_header-actions-color-pressed)}.ui5-dynamic-page-header-actions--wrapper{position:absolute;display:flex;gap:.5rem;z-index:1;&:before,&:after{content:"";position:absolute;top:50%;transform:translateY(-100%);width:6.125rem;height:.0625rem;z-index:0}&:before{right:50%;background:linear-gradient(to right,transparent,var(--_ui5-v2-13-3_dynamic_page_actions-lines-color))}&:after{left:50%;background:linear-gradient(to left,transparent,var(--_ui5-v2-13-3_dynamic_page_actions-lines-color))}}}
`;var w=function(a,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,e,t,i);else for(var h=a.length-1;h>=0;h--)(l=a[h])&&(n=(s<3?l(n):s>3?l(e,t,n):l(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},T;let f=T=class extends E{constructor(){super(...arguments),this.pinned=!1,this.hidePinButton=!1,this.snapped=!1,this.accessibilityAttributes={}}get arrowButtonIcon(){return this.snapped?"slim-arrow-down":"slim-arrow-up"}get pinButtonIcon(){return V()?"pushpin-off":this.pinned?"pushpin-on":"pushpin-off"}get expandButton(){return this.shadowRoot.querySelector(".ui5-dynamic-page-header-action-expand")}get pinButton(){return this.shadowRoot.querySelector(".ui5-dynamic-page-header-action-pin")}get pinLabel(){return T.i18nBundle.getText(Z)}get expandLabel(){return this.snapped?T.i18nBundle.getText(ee):T.i18nBundle.getText(te)}focusExpandButton(){this.expandButton?.focus()}focusPinButton(){this.pinButton?.focus()}onExpandClick(){this.fireDecoratorEvent("expand-button-click")}onPinClick(){this.fireDecoratorEvent("pin-button-click")}onExpandHoverIn(){this.fireDecoratorEvent("expand-button-hover-in")}onExpandHoverOut(){this.fireDecoratorEvent("expand-button-hover-out")}get showPinButton(){return!this.hidePinButton&&!this.snapped}};w([p({type:Boolean})],f.prototype,"pinned",void 0);w([p({type:Boolean})],f.prototype,"hidePinButton",void 0);w([p({type:Boolean})],f.prototype,"snapped",void 0);w([p({type:Object})],f.prototype,"accessibilityAttributes",void 0);w([M("@ui5/webcomponents-fiori")],f,"i18nBundle",void 0);f=T=w([x({tag:"ui5-dynamic-page-header-actions",renderer:C,styles:re,template:se}),_("expand-button-click",{bubbles:!0}),_("pin-button-click",{bubbles:!0}),_("expand-button-hover-in",{bubbles:!0}),_("expand-button-hover-out",{bubbles:!0})],f);f.define();const le=f;function de(){return g("div",{class:"ui5-dynamic-page-root",children:[g("div",{class:"ui5-dynamic-page-scroll-container",onScroll:this.snapOnScroll,children:[g("header",{class:"ui5-dynamic-page-title-header-wrapper",id:`${this._id}-header`,"aria-label":this.headerAriaLabel,"onui5-toggle-title":this.onToggleTitle,children:[o("slot",{name:"titleArea"}),this.headerInTitle&&o("slot",{tabIndex:this.headerTabIndex,"aria-hidden":this.headerAriaHidden,name:"headerArea"}),this.actionsInTitle&&R.call(this)]}),this.headerInContent&&o("slot",{tabIndex:this.headerTabIndex,"aria-hidden":this.headerAriaHidden,name:"headerArea"}),!this.actionsInTitle&&R.call(this),o("div",{class:"ui5-dynamic-page-content",part:"content",children:g("div",{class:"ui5-dynamic-page-fit-content",part:"fit-content",children:[o("slot",{}),this.showFooter&&o("div",{class:"ui5-dynamic-page-spacer"})]})})]}),o("div",{class:"ui5-dynamic-page-footer",part:"footer",children:o("slot",{name:"footerArea"})})]})}function R(){if(!this.hasSnappedTitleOnMobile&&this.hasHeading)return o(le,{snapped:this.headerSnapped,pinned:this.headerPinned,hidePinButton:this.hidePinButton,"onui5-expand-button-click":this.onExpandClick,"onui5-pin-button-click":this.onPinClick,"onui5-expand-button-hover-in":this.onExpandHoverIn,"onui5-expand-button-hover-out":this.onExpandHoverOut})}y("@ui5/webcomponents-theming","sap_horizon",async()=>A);y("@ui5/webcomponents-fiori","sap_horizon",async()=>L);const pe=`.ui5-dynamic-page-title-header-wrapper{position:sticky;top:0;z-index:98}:host{display:block;height:100%;background-color:var(--ui5-v2-13-3_dynamic_page_background)}.ui5-dynamic-page-root{container-type:inline-size;height:inherit;overflow-y:hidden}.ui5-dynamic-page-scroll-container{overflow-y:auto;height:100%}.ui5-dynamic-page-scroll-container{display:flex;flex-direction:column}.ui5-dynamic-page-content{flex-grow:1;position:relative}.ui5-dynamic-page-fit-content{position:absolute;inset:0}.ui5-dynamic-page-footer{position:sticky;bottom:0;padding:0 .5rem .5rem;box-sizing:border-box;z-index:110;opacity:0;transform:translateY(100%);transition:opacity .35s ease-in-out,transform .35s ease-in-out}.ui5-dynamic-page-spacer{height:var(--_ui5-v2-13-3_dynamic_page_footer_spacer)}:host([show-footer]) .ui5-dynamic-page-fit-content{bottom:var(--_ui5-v2-13-3_dynamic_page_footer_spacer)}:host([show-footer]) .ui5-dynamic-page-footer{transform:translateY(0);opacity:1}::slotted([slot="footerArea"]){border-radius:.25rem;background-color:var(--_ui5-v2-13-3_dynamic_page_header_background_color);box-sizing:content-box;width:auto}::slotted([slot="titleArea"]){width:auto}@container (max-width: 599px){.ui5-dynamic-page-fit-content{padding:var(--_ui5-v2-13-3_dynamic_page_content_padding_S)}::slotted([slot="titleArea"]){padding:var(--_ui5-v2-13-3_dynamic_page_title_padding_S)}::slotted([slot="headerArea"]){padding:var(--_ui5-v2-13-3_dynamic_page_header_padding_S)}}@container (min-width: 600px) and (max-width: 1023px){.ui5-dynamic-page-fit-content{padding:var(--_ui5-v2-13-3_dynamic_page_content_padding_M)}::slotted([slot="titleArea"]){padding:var(--_ui5-v2-13-3_dynamic_page_title_padding_M)}::slotted([slot="headerArea"]){padding:var(--_ui5-v2-13-3_dynamic_page_header_padding_M)}}@container (min-width: 1024px) and (max-width: 1439px){.ui5-dynamic-page-fit-content{padding:var(--_ui5-v2-13-3_dynamic_page_content_padding_L)}::slotted([slot="titleArea"]){padding:var(--_ui5-v2-13-3_dynamic_page_title_padding_L)}::slotted([slot="headerArea"]){padding:var(--_ui5-v2-13-3_dynamic_page_header_padding_L)}}@container (min-width: 1440px){.ui5-dynamic-page-fit-content{padding:var(--_ui5-v2-13-3_dynamic_page_content_padding_XL)}::slotted([slot="titleArea"]){padding:var(--_ui5-v2-13-3_dynamic_page_title_padding_XL)}::slotted([slot="headerArea"]){padding:var(--_ui5-v2-13-3_dynamic_page_header_padding_XL)}}
`;function he(){return o("div",{class:"ui5-dynamic-page-header-root",role:"region",children:o("slot",{})})}y("@ui5/webcomponents-theming","sap_horizon",async()=>A);y("@ui5/webcomponents-fiori","sap_horizon",async()=>L);const ce=`:host{background-color:var(--_ui5-v2-13-3_dynamic_page_header_background_color);display:block;box-shadow:var(--_ui5-v2-13-3_dynamic_page_header-box-shadow)}.ui5-dynamic-page-header-root{background:inherit}
`;var z=function(a,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,e,t,i);else for(var h=a.length-1;h>=0;h--)(l=a[h])&&(n=(s<3?l(n):s>3?l(e,t,n):l(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let S=class extends E{};z([m({default:!0,type:HTMLElement})],S.prototype,"content",void 0);S=z([x({tag:"ui5-dynamic-page-header",renderer:C,styles:ce,template:he})],S);S.define();const me=S;function ue(){return g("div",{class:"ui5-dynamic-page-title-root",children:[o("span",{class:"ui5-dynamic-page-title-focus-area","data-sap-focus-ref":!0,tabIndex:this._tabIndex,onKeyDown:this._onkeydown,onClick:this.onTitleClick,role:"button","aria-expanded":this.forAriaExpanded,"aria-labelledby":this._ariaLabelledBy,"aria-describedby":`${this._id}-toggle-description`}),this.hasSnappedTitleOnMobile?g("div",{id:`${this._id}-heading`,class:"ui5-dynamic-page--snapped-title-on-mobile",children:[o("slot",{name:"snappedTitleOnMobile"}),o(F,{name:ie,mode:"Decorative"})]}):g(B,{children:[g("div",{class:"ui5-dynamic-page-title--top-area",children:[o("slot",{name:"breadcrumbs"}),this.mobileNavigationActions&&o("slot",{name:"navigationBar"})]}),g("div",{class:"ui5-dynamic-page-title--wrapper","onui5-_min-content-width-change":this.onMinContentWidthChange,children:[o("div",{id:`${this._id}-heading`,class:"ui5-dynamic-page-title--heading",children:o("slot",{name:this.headingSlotName})}),this.hasContent&&o("div",{class:"ui5-dynamic-page-title--content",style:{"min-width":this.minContentWidth?`${this.minContentWidth||0}px`:void 0},children:o("slot",{})}),g("div",{class:"ui5-dynamic-page-title--actions",style:{"min-width":this.minActionsWidth?`${this.minActionsWidth||0}px`:void 0},children:[o("slot",{name:"actionsBar"}),!this.mobileNavigationActions&&g(B,{children:[this._needsSeparator&&o("div",{class:"ui5-dynamic-page-title--actions-separator"}),o("slot",{name:"navigationBar"})]})]})]}),o("div",{class:"ui5-dynamic-page-title--subheading",children:o("slot",{name:this.subheadingSlotName})})]}),o("span",{id:`${this._id}-toggle-description`,class:"ui5-hidden-text",children:this._ariaDescribedbyText})]})}y("@ui5/webcomponents-theming","sap_horizon",async()=>A);y("@ui5/webcomponents-fiori","sap_horizon",async()=>L);const ge=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{display:flex;flex-direction:column;position:relative;width:100%;background-color:var(--_ui5-v2-13-3_dynamic_page_header_background_color);min-height:var(--_ui5-v2-13-3_dynamic_page_title_min_height);word-wrap:break-word;padding-top:var(--_ui5-v2-13-3_dynamic_page_title_padding_top);padding-bottom:var(--_ui5-v2-13-3_dynamic_page_title_padding_bottom);border-bottom:var(--_ui5-v2-13-3_dynamic_page_title_border)}:host(:not([interactive])){box-shadow:var(--_ui5-v2-13-3_dynamic_page_header-box-shadow)}:host .ui5-dynamic-page-title-root{display:inherit;flex-direction:inherit;width:inherit;height:inherit}:host:host([interactive]:hover),:host:host([interactive][hovered]){background-color:var(--_ui5-v2-13-3_dynamic_page_title_hover_background);cursor:pointer;border-bottom:var(--_ui5-v2-13-3_dynamic_page_title_hover_border)}:host([snapped]){box-shadow:var(--sapContent_HeaderShadow)}:host([has-snapped-title-on-mobile]){min-height:var(--_ui5-v2-13-3_dynamic_page_snapped_title_on_mobile_min_height);line-height:var(--_ui5-v2-13-3_dynamic_page_snapped_title_on_mobile_line_height)}::slotted([ui5-breadcrumbs][slot="breadcrumbs"]){padding:var(--_ui5-v2-13-3_dynamic_page_title_breadcrumbs_padding_top) 0 var(--_ui5-v2-13-3_dynamic_page_title_breadcrumbs_padding_bottom) 0}::slotted([ui5-title][slot="heading"]),::slotted([ui5-title][slot="snappedHeading"]){font-family:var(--sapObjectHeader_Title_FontFamily);color:var(--sapObjectHeader_Title_TextColor);padding:var(--_ui5-v2-13-3_dynamic_page_title_heading_padding_top) 0 0 0;margin:var(--_ui5-v2-13-3_dynamic_page_title_heading_margin)}::slotted([ui5-title][size="H5"][slot="heading"]){font-size:var(--sapObjectHeader_Title_FontSize)}::slotted([ui5-title][size="H5"][slot="snappedHeading"]),:host([snapped]) ::slotted([ui5-title][size="H5"][slot="heading"]){font-size:var(--sapObjectHeader_Title_SnappedFontSize);text-overflow:ellipsis}::slotted([slot="content"]),::slotted([slot="snappedSubheading"]){color:var(--sapObjectHeader_Subtitle_TextColor);font-size:var(--sapFontSize);margin-top:var(--_ui5-v2-13-3_dynamic_page_title_subheading_margin_top);min-width:0}::slotted([ui5-tag]){max-width:100%}::slotted([ui5-toolbar][slot="actionsBar"]){padding:0 0 0 1rem}.ui5-dynamic-page-title--wrapper{display:flex}.ui5-dynamic-page-title--heading{flex-shrink:1;min-width:1px}.ui5-dynamic-page--snapped-title-on-mobile{display:flex;justify-content:space-between;align-items:center;pointer-events:none}.ui5-dynamic-page-title--content{padding:.6rem 0 0 1rem;flex-shrink:1.6;min-width:3rem;flex-grow:1;display:flex}.ui5-dynamic-page-title--actions{flex-shrink:1.6;min-width:3rem;flex-grow:1;display:flex}.ui5-dynamic-page-title--actions ::slotted([slot="actionsBar"]){border:none;flex:1}.ui5-dynamic-page-title--actions .ui5-dynamic-page-title--actions-separator{flex:0 1;&:before{content:"";display:inline-block;height:var(--_ui5-v2-13-3_dynamic_page_title_actions_separator_height);width:.0625rem;vertical-align:middle;background:var(--sapToolbar_SeparatorColor);margin:.5rem .5rem 0 .25rem}}::slotted([slot="navigationBar"]){border:none;margin-left:auto;flex:0 1;padding-left:0;padding-right:0}.ui5-dynamic-page-title--top-area ::slotted([slot="navigationBar"]){flex:0 1.6 auto}.ui5-dynamic-page-title--top-area{display:flex;justify-content:space-between;align-items:center}.ui5-dynamic-page-title--subheading{max-width:fit-content;z-index:1}:host([desktop]:focus),.ui5-dynamic-page-title-focus-area:focus-visible{outline:var(--_ui5-v2-13-3_dynamic_page_title_focus_outline);outline-offset:var(--_ui5-v2-13-3_dynamic_page_title_focus_outline_offset)}.ui5-dynamic-page-title-focus-area{outline:none;position:absolute;top:0;left:0;width:100%;height:100%}
`;var d=function(a,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,e,t,i);else for(var h=a.length-1;h>=0;h--)(l=a[h])&&(n=(s<3?l(n):s>3?l(e,t,n):l(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},k;let r=k=class extends E{constructor(){super(),this.snapped=!1,this.mobileNavigationActions=!1,this.focused=!1,this.hasSnappedTitleOnMobile=!1,this.interactive=!1,this._handleResize=this.handleResize.bind(this)}onEnterDOM(){I.register(this,this._handleResize),j()&&this.setAttribute("desktop","")}onExitDOM(){I.deregister(this,this._handleResize)}onBeforeRendering(){this.prepareLayoutActions()}get hasContent(){return!!this.content.length}get headingSlotName(){return this.snapped?"snappedHeading":"heading"}get subheadingSlotName(){return this.snapped?"snappedSubheading":"subheading"}get _tabIndex(){return this.interactive?0:void 0}get _headerExpanded(){return!this.snapped}get _ariaDescribedbyText(){return k.i18nBundle.getText(ne)}get _ariaLabelledBy(){if(this[this.headingSlotName].length)return`${this._id}-heading`}get _needsSeparator(){return this.navigationBar.length>0&&this.actionsBar.length>0}get forAriaExpanded(){return this.interactive?this._headerExpanded:void 0}prepareLayoutActions(){const e=this.querySelector("[ui5-toolbar][slot='navigationBar']"),t=this.offsetWidth>=1280;e&&e.items.forEach(i=>{i.overflowPriority=t?U.NeverOverflow:U.Default})}handleResize(){this.mobileNavigationActions=this.offsetWidth<1280}onMinContentWidthChange(e){const t=e.target?.assignedSlot?.name;!t||t==="content"?this.minContentWidth=e.detail.minWidth:t==="actionsBar"&&(this.minActionsWidth=e.detail.minWidth)}onTitleClick(){this.fireDecoratorEvent("toggle-title")}_onkeydown(e){(G(e)||$(e))&&(e.preventDefault(),this.fireDecoratorEvent("toggle-title"))}};d([p({type:Boolean})],r.prototype,"snapped",void 0);d([p({type:Boolean})],r.prototype,"mobileNavigationActions",void 0);d([p({type:Boolean})],r.prototype,"focused",void 0);d([p({type:Number})],r.prototype,"minContentWidth",void 0);d([p({type:Number})],r.prototype,"minActionsWidth",void 0);d([p({type:Boolean})],r.prototype,"hasSnappedTitleOnMobile",void 0);d([m({type:HTMLElement})],r.prototype,"heading",void 0);d([m({type:HTMLElement})],r.prototype,"snappedHeading",void 0);d([m({type:HTMLElement})],r.prototype,"snappedTitleOnMobile",void 0);d([m({type:HTMLElement})],r.prototype,"actionsBar",void 0);d([m({type:HTMLElement})],r.prototype,"navigationBar",void 0);d([m({default:!0,type:HTMLElement})],r.prototype,"content",void 0);d([m({type:HTMLElement})],r.prototype,"subheading",void 0);d([m({type:HTMLElement})],r.prototype,"snappedSubheading",void 0);d([m({type:HTMLElement})],r.prototype,"breadcrumbs",void 0);d([p({type:Boolean})],r.prototype,"interactive",void 0);d([M("@ui5/webcomponents-fiori")],r,"i18nBundle",void 0);r=k=d([x({tag:"ui5-dynamic-page-title",fastNavigation:!0,renderer:C,styles:ge,template:ue}),_("toggle-title",{bubbles:!0})],r);r.define();const fe=r;var u=function(a,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,e,t,i);else for(var h=a.length-1;h>=0;h--)(l=a[h])&&(n=(s<3?l(n):s>3?l(e,t,n):l(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},N;const be=5,b=10;let c=N=class extends E{constructor(){super(),this.hidePinButton=!1,this.headerPinned=!1,this.showFooter=!1,this.skipSnapOnScroll=!1,this.showHeaderInStickArea=!1,this.isToggled=!1,this._headerSnapped=!1}onBeforeRendering(){this.dynamicPageTitle&&(this.dynamicPageTitle.snapped=this._headerSnapped,this.dynamicPageTitle.interactive=this.hasHeading,this.dynamicPageTitle.hasSnappedTitleOnMobile=!!this.hasSnappedTitleOnMobile,this.dynamicPageTitle.removeAttribute("hovered"));const e=this.dynamicPageTitle?.getBoundingClientRect().height||0,t=this.dynamicPageHeader?.getBoundingClientRect().height||0,i=this.showFooter?this.footerWrapper?.getBoundingClientRect().height:0;this.scrollContainer&&(this.scrollContainer.style.setProperty("scroll-padding-block-end",`${i}px`),this._headerSnapped?this.scrollContainer.style.setProperty("scroll-padding-block-start",`${e}px`):this.scrollContainer.style.setProperty("scroll-padding-block-start",`${t+e}px`))}get dynamicPageTitle(){return this.querySelector("[ui5-dynamic-page-title]")}get dynamicPageHeader(){return this.querySelector("[ui5-dynamic-page-header]")}get footerWrapper(){return this.shadowRoot?.querySelector(".ui5-dynamic-page-footer")}get actionsInTitle(){return this._headerSnapped||this.showHeaderInStickArea||this.headerPinned}get headerInTitle(){return!this._headerSnapped&&(this.showHeaderInStickArea||this.headerPinned)}get headerInContent(){return!this.showHeaderInStickArea&&!this.headerInTitle&&!this.hasSnappedTitleOnMobile}get _headerLabel(){return this._headerSnapped?N.i18nBundle.getText(oe):N.i18nBundle.getText(ae)}get _headerExpanded(){return!this._headerSnapped}get headerTabIndex(){return this._headerSnapped||this.showHeaderInStickArea?-1:0}get headerAriaHidden(){return this._headerSnapped||this.showHeaderInStickArea}get hasHeading(){return this.headerArea.length>0}get headerSnapped(){return this._headerSnapped}get hasSnappedTitleOnMobile(){return Y()&&this.headerSnapped&&this.dynamicPageTitle?.snappedTitleOnMobile.length}get headerAriaLabel(){return this.hasHeading?this._headerLabel:void 0}set headerSnapped(e){e!==this._headerSnapped&&this._toggleHeader()}snapOnScroll(){K(()=>this.snapTitleByScroll(),be)}snapTitleByScroll(){if(!this.dynamicPageTitle||!this.dynamicPageHeader||this.headerPinned)return;if(this.isToggled){this.isToggled=!1;return}if(this.skipSnapOnScroll){this.skipSnapOnScroll=!1;return}const e=this.scrollContainer.scrollTop,t=this.dynamicPageHeader.getBoundingClientRect().height,i=this._headerSnapped;this._headerSnapped&&e>t&&(this.showHeaderInStickArea=!1);const s=!this._headerSnapped&&e>t+b,n=this._headerSnapped&&(e<t-b||!e&&!t);s?(this.showHeaderInStickArea=!1,this._headerSnapped=!0,requestAnimationFrame(()=>{this.scrollContainer.scrollTop===0&&(this.scrollContainer.scrollTop=b)})):n&&(this._headerSnapped=!1),i!==this._headerSnapped&&this.fireDecoratorEvent("title-toggle")}async onExpandClick(){this.isToggled=!0,this._toggleHeader(),this.fireDecoratorEvent("title-toggle"),await v(),this.headerActions?.focusExpandButton(),this.hasSnappedTitleOnMobile&&this.dynamicPageTitle?.focus(),X(this._headerLabel,J.Polite)}async onPinClick(){this.headerPinned=!this.headerPinned,this.headerPinned?this.showHeaderInStickArea=!0:this.scrollContainer.scrollTop===0&&(this.showHeaderInStickArea=!1),this.fireDecoratorEvent("pin-button-toggle"),await v(),this.headerActions?.focusPinButton()}async onToggleTitle(){this.hasHeading&&(this.isToggled=!0,this._toggleHeader(),this.fireDecoratorEvent("title-toggle"),await v(),this.dynamicPageTitle.focus())}async _toggleHeader(){const e=this.dynamicPageHeader?.getBoundingClientRect().height||0,t=this.scrollContainer.scrollTop;if(!this._headerSnapped&&this.headerPinned&&(this.headerPinned=!1,this.fireDecoratorEvent("pin-button-toggle")),t<=b){this._headerSnapped=!this._headerSnapped,this.showHeaderInStickArea=this._headerSnapped;return}if(t>b&&t<e){this._headerSnapped?(this.showHeaderInStickArea=!1,this._headerSnapped=!1):(this._headerSnapped=!0,this.showHeaderInStickArea=!0,this.scrollContainer.scrollTop=0);return}this.scrollContainer.scrollTop===b&&(this.scrollContainer.scrollTop=0),this.showHeaderInStickArea=!this.showHeaderInStickArea,this._headerSnapped=!this._headerSnapped,this.skipSnapOnScroll=!0,await v(),this._headerSnapped&&this.scrollContainer.scrollTop<b&&(this.scrollContainer.scrollTop=b)}async onExpandHoverIn(){this.dynamicPageTitle?.setAttribute("hovered",""),await v()}async onExpandHoverOut(){this.dynamicPageTitle?.removeAttribute("hovered"),await v()}};u([p({type:Boolean})],c.prototype,"hidePinButton",void 0);u([p({type:Boolean})],c.prototype,"headerPinned",void 0);u([p({type:Boolean})],c.prototype,"showFooter",void 0);u([m({default:!0,type:HTMLElement})],c.prototype,"content",void 0);u([m({type:fe})],c.prototype,"titleArea",void 0);u([m({type:me})],c.prototype,"headerArea",void 0);u([m({type:HTMLElement})],c.prototype,"footerArea",void 0);u([p({type:Boolean})],c.prototype,"_headerSnapped",void 0);u([O(".ui5-dynamic-page-scroll-container")],c.prototype,"scrollContainer",void 0);u([O("[ui5-dynamic-page-header-actions]")],c.prototype,"headerActions",void 0);u([p({type:Boolean})],c.prototype,"headerSnapped",null);u([M("@ui5/webcomponents-fiori")],c,"i18nBundle",void 0);c=N=u([x({tag:"ui5-dynamic-page",renderer:C,styles:pe,template:de}),_("pin-button-toggle",{bubbles:!0}),_("title-toggle",{bubbles:!0})],c);c.define();const D=W("ui5-dynamic-page",[],["headerPinned","headerSnapped","hidePinButton","showFooter"],["footerArea","headerArea","titleArea"],["pin-button-toggle","title-toggle"]);D.displayName="DynamicPage";try{D.displayName="DynamicPage",D.__docgenInfo={description:`A layout component, representing a web page, consisting of a title, header with dynamic behavior, a content area, and an optional floating footer.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{D,P as a,H as b};
