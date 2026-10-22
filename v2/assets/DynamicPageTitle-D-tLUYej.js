import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{B as t,H as n,I as r,M as i,N as a,X as o,Y as s,it as c,tt as ee}from"./CustomElementsScopeUtils-Cw9cVXS8.js";import{n as te,t as ne}from"./Icon-B54hMKwd.js";import{a as l,c as u,d,f,i as p,l as m,m as h,n as g,o as _,p as v,r as y,s as b,t as re,u as x}from"./jsx-runtime-CMuXpgGv.js";import{I as ie,n as ae,q as oe}from"./Keys-DqJfIghV.js";import{n as S,t as C}from"./withWebComponent-DhD1x6sB.js";import{n as w,t as T}from"./event-strict-C4u0wMzB.js";import{n as E,t as D}from"./i18n-BNTZIxbt.js";import{n as O,t as k}from"./slot-strict-BSUUcNBc.js";import{r as se,t as ce}from"./pushpin-on-Duikf8ly.js";import{n as le,t as ue}from"./ResizeHandler-BZpusvu3.js";import{a as de,i as fe,n as pe,o as me}from"./InvisibleMessage-DZEfBUG8.js";import{n as he,t as ge}from"./debounce-CLufqHaZ.js";import{n as _e,t as ve}from"./Button-D_83k3d2.js";import{c as ye,s as be}from"./ToolbarButton-lv1uiHCS.js";import{n as xe,t as Se}from"./query-DgyfBxue.js";import{n as Ce,t as A}from"./slim-arrow-down-X55XM0ew.js";import{a as we,c as Te,d as Ee,l as De,o as Oe,qr as j,s as ke,u as Ae}from"./i18n-defaults-jaPn7b2P.js";import{n as M,t as N}from"./parameters-bundle.css-BX-hSQcc.js";import{n as je,t as Me}from"./ToggleButton-NSYn0O8R.js";import{t as Ne}from"./slim-arrow-up-BV-gmi0f.js";function Pe(){return y(`div`,{class:`ui5-dynamic-page-header-actions-root`,children:p(`div`,{class:`ui5-dynamic-page-header-actions--wrapper`,children:[y(ve,{class:`ui5-dynamic-page-header-action ui5-dynamic-page-header-action-expand`,onClick:this.onExpandClick,icon:this.arrowButtonIcon,accessibleName:this.expandLabel,accessibilityAttributes:this.accessibilityAttributes,tooltip:this.expandLabel,onMouseOver:this.onExpandHoverIn,onMouseOut:this.onExpandHoverOut}),this.showPinButton&&y(Me,{class:`ui5-dynamic-page-header-action ui5-dynamic-page-header-action-pin`,onClick:this.onPinClick,icon:this.pinButtonIcon,pressed:this.pinned,accessibilityAttributes:this.accessibilityAttributes,accessibleName:this.pinLabel,tooltip:this.pinLabel})]})})}function Fe(){return(Fe=e((()=>{g(),_e(),je()})))()}var Ie;function P(){return(P=e((()=>{o(),l(),N(),s(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>_),s(`@ui5/webcomponents-fiori`,`sap_horizon`,async()=>M,`host`),Ie=`.ui5-dynamic-page-header-actions-root{position:relative;display:flex;justify-content:center;align-items:center;width:100%;.ui5-dynamic-page-header-action{position:relative;z-index:1;min-width:1.5rem;height:1.5rem;background-color:var(--_ui5_dynamic_page_header-actions-background);border:1px solid var(--sapButton_BorderColor);box-shadow:var(--_ui5_dynamic_page_header-actions-box-shadow);color:var(--_ui5_dynamic_page_header-actions-color)}.ui5-dynamic-page-header-action-pin[pressed]{background-color:var(--_ui5_dynamic_page_header-actions-background-pressed);color:var(--_ui5_dynamic_page_header-actions-color-pressed)}.ui5-dynamic-page-header-actions--wrapper{position:absolute;display:flex;gap:.5rem;z-index:1;&:before,&:after{content:"";position:absolute;top:50%;transform:translateY(-100%);width:6.125rem;height:.0625rem;z-index:0}&:before{right:50%;background:linear-gradient(to right,transparent,var(--_ui5_dynamic_page_actions-lines-color))}&:after{left:50%;background:linear-gradient(to left,transparent,var(--_ui5_dynamic_page_actions-lines-color))}}}
`})))()}var F,I,L,Le;function Re(){return(Re=e((()=>{h(),d(),T(),m(),E(),b(),t(),Ne(),A(),se(),ce(),Fe(),P(),j(),F=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},L=I=class extends v{constructor(){super(...arguments),this.pinned=!1,this.hidePinButton=!1,this.snapped=!1,this.accessibilityAttributes={}}get arrowButtonIcon(){return this.snapped?`slim-arrow-down`:`slim-arrow-up`}get pinButtonIcon(){return n()?`pushpin-off`:this.pinned?`pushpin-on`:`pushpin-off`}get expandButton(){return this.shadowRoot.querySelector(`.ui5-dynamic-page-header-action-expand`)}get pinButton(){return this.shadowRoot.querySelector(`.ui5-dynamic-page-header-action-pin`)}get pinLabel(){return this.pinned?I.i18nBundle.getText(Ee):I.i18nBundle.getText(Te)}get expandLabel(){return this.snapped?I.i18nBundle.getText(ke):I.i18nBundle.getText(Ae)}focusExpandButton(){this.expandButton?.focus()}focusPinButton(){this.pinButton?.focus()}onExpandClick(){this.fireDecoratorEvent(`expand-button-click`)}onPinClick(){this.fireDecoratorEvent(`pin-button-click`)}onExpandHoverIn(){this.fireDecoratorEvent(`expand-button-hover-in`)}onExpandHoverOut(){this.fireDecoratorEvent(`expand-button-hover-out`)}get showPinButton(){return!this.hidePinButton&&!this.snapped}},F([x({type:Boolean})],L.prototype,`pinned`,void 0),F([x({type:Boolean})],L.prototype,`hidePinButton`,void 0),F([x({type:Boolean})],L.prototype,`snapped`,void 0),F([x({type:Object})],L.prototype,`accessibilityAttributes`,void 0),F([D(`@ui5/webcomponents-fiori`)],L,`i18nBundle`,void 0),L=I=F([f({tag:`ui5-dynamic-page-header-actions`,renderer:u,styles:Ie,template:Pe}),w(`expand-button-click`,{bubbles:!0}),w(`pin-button-click`,{bubbles:!0}),w(`expand-button-hover-in`,{bubbles:!0}),w(`expand-button-hover-out`,{bubbles:!0})],L),L.define(),Le=L})))()}function ze(){return p(`div`,{class:`ui5-dynamic-page-root`,role:this._rootRole,"aria-label":this._rootAriaLabel,children:[p(`div`,{class:`ui5-dynamic-page-scroll-container`,onScroll:this.snapOnScroll,children:[p(`div`,{class:`ui5-dynamic-page-title-header-wrapper`,id:`${this._id}-header`,role:this._headerRole||`banner`,"aria-label":this.headerAriaLabel,"onui5-toggle-title":this.onToggleTitle,children:[y(`slot`,{name:`titleArea`}),this.headerInTitle&&y(`slot`,{tabIndex:this.headerTabIndex,"aria-hidden":this.headerAriaHidden,name:`headerArea`})]}),this.headerInContent&&y(`slot`,{tabIndex:this.headerTabIndex,"aria-hidden":this.headerAriaHidden,name:`headerArea`}),y(`div`,{class:`ui5-dynamic-page-header-actions-wrapper`,style:this.actionsInTitle?`--_ui5_dp_header_actions_top:${this._actionsBarStickyTop}px`:void 0,children:Be.call(this)}),y(`div`,{part:`content`,class:`ui5-dynamic-page-content`,role:this._contentRole,"aria-label":this._contentAriaLabel,onFocusIn:this.onContentFocusIn,onFocusOut:this.onContentFocusOut,children:p(`div`,{class:`ui5-dynamic-page-fit-content`,part:`fit-content`,children:[y(`slot`,{}),this.showFooter&&y(`div`,{class:`ui5-dynamic-page-spacer`})]})})]}),y(`div`,{class:`ui5-dynamic-page-footer`,part:`footer`,role:this._footerRole,"aria-label":this._footerAriaLabel,children:y(`slot`,{name:`footerArea`})})]})}function Be(){if(!this.hasSnappedTitleOnMobile&&this.hasHeading)return y(Le,{snapped:this.headerSnapped,pinned:this.headerPinned,hidePinButton:this._hidePinButton,"onui5-expand-button-click":this.onExpandClick,"onui5-pin-button-click":this.onPinClick,"onui5-expand-button-hover-in":this.onExpandHoverIn,"onui5-expand-button-hover-out":this.onExpandHoverOut})}function Ve(){return(Ve=e((()=>{g(),Re()})))()}var He;function Ue(){return(Ue=e((()=>{o(),l(),N(),s(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>_),s(`@ui5/webcomponents-fiori`,`sap_horizon`,async()=>M,`host`),He=`.ui5-dynamic-page-title-header-wrapper{position:sticky;top:0;z-index:3}.ui5-dynamic-page-header-actions-wrapper{position:sticky;top:var(--_ui5_dp_header_actions_top, auto);z-index:4}:host{display:block;height:100%;background-color:var(--ui5_dynamic_page_background);isolation:isolate}.ui5-dynamic-page-root{container-type:inline-size;height:inherit;overflow-y:hidden}.ui5-dynamic-page-scroll-container{overflow-y:auto;height:100%;overflow-anchor:none}.ui5-dynamic-page-scroll-container{display:flex;flex-direction:column}.ui5-dynamic-page-content{flex-grow:1;position:relative}.ui5-dynamic-page-fit-content{position:absolute;inset:0}.ui5-dynamic-page-footer{position:sticky;bottom:0;padding:0 .5rem .5rem;box-sizing:border-box;z-index:2;opacity:0;transform:translateY(100%);transition:opacity .35s ease-in-out,transform .35s ease-in-out}.ui5-dynamic-page-spacer{height:var(--_ui5_dynamic_page_footer_spacer)}:host([show-footer]) .ui5-dynamic-page-fit-content{bottom:var(--_ui5_dynamic_page_footer_spacer)}:host([show-footer]) .ui5-dynamic-page-footer{transform:translateY(0);opacity:1}::slotted([slot="footerArea"]){border-radius:.25rem;background-color:var(--_ui5_dynamic_page_header_background_color);box-sizing:content-box;width:auto}::slotted([slot="titleArea"]){width:auto}.ui5-dynamic-page-fit-content{padding:var(--_ui5_dynamic_page_content_padding_S)}::slotted([slot="titleArea"]){padding:var(--_ui5_dynamic_page_title_padding_S)}::slotted([slot="headerArea"]){padding:var(--_ui5_dynamic_page_header_padding_S)}@container (min-width: 600px){.ui5-dynamic-page-fit-content{padding:var(--_ui5_dynamic_page_content_padding_M)}::slotted([slot="titleArea"]){padding:var(--_ui5_dynamic_page_title_padding_M)}::slotted([slot="headerArea"]){padding:var(--_ui5_dynamic_page_header_padding_M)}}@container (min-width: 1024px){.ui5-dynamic-page-fit-content{padding:var(--_ui5_dynamic_page_content_padding_L)}::slotted([slot="titleArea"]){padding:var(--_ui5_dynamic_page_title_padding_L)}::slotted([slot="headerArea"]){padding:var(--_ui5_dynamic_page_header_padding_L)}}@container (min-width: 1440px){.ui5-dynamic-page-fit-content{padding:var(--_ui5_dynamic_page_content_padding_XL)}::slotted([slot="titleArea"]){padding:var(--_ui5_dynamic_page_title_padding_XL)}::slotted([slot="headerArea"]){padding:var(--_ui5_dynamic_page_header_padding_XL)}}
`})))()}function We(){return y(`div`,{class:`ui5-dynamic-page-header-root`,role:`region`,"aria-label":this._headerRegionAriaLabel,children:y(`slot`,{})})}function Ge(){return(Ge=e((()=>{g()})))()}var Ke;function qe(){return(qe=e((()=>{o(),l(),N(),s(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>_),s(`@ui5/webcomponents-fiori`,`sap_horizon`,async()=>M,`host`),Ke=`:host{background-color:var(--_ui5_dynamic_page_header_background_color);display:block;box-shadow:var(--_ui5_dynamic_page_header-box-shadow)}.ui5-dynamic-page-header-root{background:inherit}
`})))()}var R,z,B,Je;function V(){return(V=e((()=>{h(),d(),O(),m(),b(),E(),Ge(),qe(),j(),R=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},B=z=class extends v{constructor(){super(...arguments),this._snapped=!1}get _headerRegionAriaLabel(){if(this.accessibleName)return this.accessibleName;let e=this._snapped?De:Oe;return z.i18nBundle.getText(e)}},R([k({default:!0,type:HTMLElement})],B.prototype,`content`,void 0),R([x({type:Boolean})],B.prototype,`_snapped`,void 0),R([x()],B.prototype,`accessibleName`,void 0),R([D(`@ui5/webcomponents-fiori`)],B,`i18nBundle`,void 0),B=z=R([f({tag:`ui5-dynamic-page-header`,renderer:u,styles:Ke,template:We})],B),B.define(),Je=B})))()}function Ye(){return p(`div`,{class:`ui5-dynamic-page-title-root`,children:[y(`span`,{class:`ui5-dynamic-page-title-focus-area`,"data-sap-focus-ref":!0,tabIndex:this._tabIndex,onKeyDown:this._onkeydown,onClick:this.onTitleClick,role:this._role,"aria-expanded":this.forAriaExpanded,"aria-labelledby":this._ariaLabelledBy,"aria-describedby":this._ariaDescribedBy}),this.hasSnappedTitleOnMobile?p(`div`,{id:`${this._id}-heading`,class:`ui5-dynamic-page--snapped-title-on-mobile`,children:[y(`slot`,{name:`snappedTitleOnMobile`}),y(ne,{name:Ce,mode:`Decorative`})]}):p(re,{children:[p(`div`,{class:`ui5-dynamic-page-title--top-area`,children:[y(`slot`,{name:`breadcrumbs`}),this.mobileNavigationActions&&y(`slot`,{name:`navigationBar`})]}),p(`div`,{class:`ui5-dynamic-page-title--wrapper`,"onui5-_min-content-width-change":this.onMinContentWidthChange,children:[y(`div`,{id:`${this._id}-heading`,class:`ui5-dynamic-page-title--heading`,children:y(`slot`,{name:this.headingSlotName})}),this.hasContent&&y(`div`,{class:`ui5-dynamic-page-title--content`,style:{"min-width":this.minContentWidth?`${this.minContentWidth||0}px`:void 0},children:y(`slot`,{})}),p(`div`,{class:`ui5-dynamic-page-title--actions`,style:{"min-width":this.minActionsWidth?`${this.minActionsWidth||0}px`:void 0},children:[y(`slot`,{name:`actionsBar`}),!this.mobileNavigationActions&&p(re,{children:[this._needsSeparator&&y(`div`,{class:`ui5-dynamic-page-title--actions-separator`}),y(`slot`,{name:`navigationBar`})]})]})]}),y(`div`,{class:`ui5-dynamic-page-title--subheading`,children:y(`slot`,{name:this.subheadingSlotName})})]}),y(`span`,{id:`${this._id}-toggle-description`,class:`ui5-hidden-text`,children:this._ariaDescribedbyText})]})}function Xe(){return(Xe=e((()=>{g(),te(),A()})))()}var Ze;function Qe(){return(Qe=e((()=>{o(),l(),N(),s(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>_),s(`@ui5/webcomponents-fiori`,`sap_horizon`,async()=>M,`host`),Ze=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{display:flex;flex-direction:column;position:relative;width:100%;background-color:var(--_ui5_dynamic_page_header_background_color);min-height:var(--_ui5_dynamic_page_title_min_height);word-wrap:break-word;padding-top:var(--_ui5_dynamic_page_title_padding_top);padding-bottom:var(--_ui5_dynamic_page_title_padding_bottom);border-bottom:var(--_ui5_dynamic_page_title_border)}:host(:not([interactive])){box-shadow:var(--_ui5_dynamic_page_header-box-shadow)}:host .ui5-dynamic-page-title-root{display:inherit;flex-direction:inherit;width:inherit;height:inherit}:host:host([interactive]:hover),:host:host([interactive][hovered]){background-color:var(--_ui5_dynamic_page_title_hover_background);cursor:pointer;border-bottom:var(--_ui5_dynamic_page_title_hover_border)}:host([snapped]){box-shadow:var(--sapContent_HeaderShadow)}:host([has-snapped-title-on-mobile]){min-height:var(--_ui5_dynamic_page_snapped_title_on_mobile_min_height);line-height:var(--_ui5_dynamic_page_snapped_title_on_mobile_line_height)}::slotted([ui5-breadcrumbs][slot="breadcrumbs"]){padding:var(--_ui5_dynamic_page_title_breadcrumbs_padding_top) 0 var(--_ui5_dynamic_page_title_breadcrumbs_padding_bottom) 0}::slotted([ui5-title][slot="heading"]),::slotted([ui5-title][slot="snappedHeading"]){font-family:var(--sapObjectHeader_Title_FontFamily);color:var(--sapObjectHeader_Title_TextColor);padding:var(--_ui5_dynamic_page_title_heading_padding_top) 0 0 0;margin:var(--_ui5_dynamic_page_title_heading_margin)}::slotted([ui5-title][size="H5"][slot="heading"]){font-size:var(--sapObjectHeader_Title_FontSize)}::slotted([ui5-title][size="H5"][slot="snappedHeading"]),:host([snapped]) ::slotted([ui5-title][size="H5"][slot="heading"]){font-size:var(--sapObjectHeader_Title_SnappedFontSize);text-overflow:ellipsis}::slotted([slot="content"]),::slotted([slot="snappedSubheading"]){color:var(--sapObjectHeader_Subtitle_TextColor);font-size:var(--sapFontSize);margin-top:var(--_ui5_dynamic_page_title_subheading_margin_top);min-width:0}::slotted([ui5-tag]){max-width:100%}::slotted([ui5-toolbar][slot="actionsBar"]){padding:0 0 0 1rem}.ui5-dynamic-page-title--wrapper{display:flex}.ui5-dynamic-page-title--heading{flex-shrink:1;min-width:1px}.ui5-dynamic-page--snapped-title-on-mobile{display:flex;justify-content:space-between;align-items:center;pointer-events:none}.ui5-dynamic-page-title--content{padding:.6rem 0 0 1rem;flex-shrink:1.6;min-width:3rem;flex-grow:1;display:flex}.ui5-dynamic-page-title--actions{flex-shrink:1.6;min-width:3rem;flex-grow:1;display:flex}.ui5-dynamic-page-title--actions ::slotted([slot="actionsBar"]){border:none;flex:1}.ui5-dynamic-page-title--actions .ui5-dynamic-page-title--actions-separator{flex:0 1;&:before{content:"";display:inline-block;height:var(--_ui5_dynamic_page_title_actions_separator_height);width:.0625rem;vertical-align:middle;background:var(--sapToolbar_SeparatorColor);margin:.5rem .5rem 0 .25rem}}::slotted([slot="navigationBar"]){border:none;margin-left:auto;flex:0 1;padding-left:0;padding-right:0}.ui5-dynamic-page-title--top-area ::slotted([slot="navigationBar"]){flex:0 1.6 auto}.ui5-dynamic-page-title--top-area{display:flex;justify-content:space-between;align-items:center}.ui5-dynamic-page-title--subheading{max-width:fit-content;z-index:1}:host([desktop]:focus),.ui5-dynamic-page-title-focus-area:focus-visible{outline:var(--_ui5_dynamic_page_title_focus_outline);outline-offset:var(--_ui5_dynamic_page_title_focus_outline_offset)}.ui5-dynamic-page-title-focus-area{outline:none;position:absolute;top:0;left:0;width:100%;height:100%}
`})))()}var H,U,W,$e;function G(){return(G=e((()=>{h(),d(),m(),O(),T(),E(),b(),le(),oe(),ye(),r(),Xe(),Qe(),j(),H=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},W=U=class extends v{constructor(){super(),this.snapped=!1,this.mobileNavigationActions=!1,this.focused=!1,this.hasSnappedTitleOnMobile=!1,this.interactive=!1,this._handleResize=this.handleResize.bind(this)}onEnterDOM(){ue.register(this,this._handleResize),a()&&this.setAttribute(`desktop`,``)}onExitDOM(){ue.deregister(this,this._handleResize)}onBeforeRendering(){this.prepareLayoutActions()}get hasContent(){return!!this.content.length}get headingSlotName(){return this.snapped?`snappedHeading`:`heading`}get subheadingSlotName(){return this.snapped?`snappedSubheading`:`subheading`}get _tabIndex(){return this.interactive?0:void 0}get _headerExpanded(){return!this.snapped}get _role(){return this.interactive?`button`:void 0}get _ariaDescribedBy(){return this.interactive?`${this._id}-toggle-description`:void 0}get _ariaDescribedbyText(){return this.interactive?U.i18nBundle.getText(we):void 0}get _ariaLabelledBy(){if(this.interactive&&this[this.headingSlotName].length)return`${this._id}-heading`}get _needsSeparator(){return this.navigationBar.length>0&&this.actionsBar.length>0}get forAriaExpanded(){return this.interactive?this._headerExpanded:void 0}prepareLayoutActions(){let e=this.querySelector(`[ui5-toolbar][slot='navigationBar']`),t=this.offsetWidth>=1280;e&&e.items.forEach(e=>{e.overflowPriority=t?be.NeverOverflow:be.Default})}handleResize(){this.mobileNavigationActions=this.offsetWidth<1280}onMinContentWidthChange(e){let t=e.target?.assignedSlot?.name;!t||t===`content`?this.minContentWidth=e.detail.minWidth:t===`actionsBar`&&(this.minActionsWidth=e.detail.minWidth)}onTitleClick(){this.fireDecoratorEvent(`toggle-title`)}_onkeydown(e){(ie(e)||ae(e))&&(e.preventDefault(),this.fireDecoratorEvent(`toggle-title`))}},H([x({type:Boolean})],W.prototype,`snapped`,void 0),H([x({type:Boolean})],W.prototype,`mobileNavigationActions`,void 0),H([x({type:Boolean})],W.prototype,`focused`,void 0),H([x({type:Number})],W.prototype,`minContentWidth`,void 0),H([x({type:Number})],W.prototype,`minActionsWidth`,void 0),H([x({type:Boolean})],W.prototype,`hasSnappedTitleOnMobile`,void 0),H([k({type:HTMLElement})],W.prototype,`heading`,void 0),H([k({type:HTMLElement})],W.prototype,`snappedHeading`,void 0),H([k({type:HTMLElement})],W.prototype,`snappedTitleOnMobile`,void 0),H([k({type:HTMLElement})],W.prototype,`actionsBar`,void 0),H([k({type:HTMLElement})],W.prototype,`navigationBar`,void 0),H([k({default:!0,type:HTMLElement})],W.prototype,`content`,void 0),H([k({type:HTMLElement})],W.prototype,`subheading`,void 0),H([k({type:HTMLElement})],W.prototype,`snappedSubheading`,void 0),H([k({type:HTMLElement})],W.prototype,`breadcrumbs`,void 0),H([x({type:Boolean})],W.prototype,`interactive`,void 0),H([D(`@ui5/webcomponents-fiori`)],W,`i18nBundle`,void 0),W=U=H([f({tag:`ui5-dynamic-page-title`,fastNavigation:!0,renderer:u,styles:Ze,template:Ye}),w(`toggle-title`,{bubbles:!0})],W),W.define(),$e=W})))()}var K,q,et,J,Y;function tt(){return(tt=e((()=>{h(),d(),m(),O(),Se(),T(),E(),b(),ee(),pe(),me(),r(),ge(),Ve(),Ue(),V(),G(),j(),K=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},et=5,J=10,Y=q=class extends v{constructor(){super(),this.hidePinButton=!1,this.headerPinned=!1,this.showFooter=!1,this.accessibilityAttributes={},this.skipSnapOnScroll=!1,this.showHeaderInStickArea=!1,this.isToggled=!1,this._headerSnapped=!1}onBeforeRendering(){this.dynamicPageTitle&&(this.dynamicPageTitle.snapped=this._headerSnapped,this.dynamicPageTitle.interactive=this.hasHeading,this.dynamicPageTitle.hasSnappedTitleOnMobile=!!this.hasSnappedTitleOnMobile,this.dynamicPageTitle.removeAttribute(`hovered`)),this.dynamicPageHeader&&(this.dynamicPageHeader._snapped=this._headerSnapped)}get endAreaHeight(){return this.showFooter&&this.footerWrapper?.getBoundingClientRect().height||0}get scrollPaddingTop(){let e=this.dynamicPageTitle?.getBoundingClientRect().height||0,t=this.dynamicPageHeader?.getBoundingClientRect().height||0;if(this._headerSnapped)return e;let n=t+e,r=this.scrollContainer?.scrollTop||0;return Math.max(e,n-r)}get dynamicPageTitle(){return this.querySelector(`[ui5-dynamic-page-title]`)}get dynamicPageHeader(){return this.querySelector(`[ui5-dynamic-page-header]`)}get footerWrapper(){return this.shadowRoot?.querySelector(`.ui5-dynamic-page-footer`)}get actionsInTitle(){return this._headerSnapped||this.showHeaderInStickArea||this.headerPinned}get headerInTitle(){return!this._headerSnapped&&(this.showHeaderInStickArea||this.headerPinned)}get headerInContent(){return!this.showHeaderInStickArea&&!this.headerInTitle&&!this.hasSnappedTitleOnMobile}get _headerLabel(){return this._headerSnapped?q.i18nBundle.getText(De):q.i18nBundle.getText(Oe)}get _headerExpanded(){return!this._headerSnapped}get headerTabIndex(){return this._headerSnapped||this.showHeaderInStickArea?-1:0}get headerAriaHidden(){return this._headerSnapped||this.showHeaderInStickArea}get hasHeading(){return this.headerArea.length>0}get headerSnapped(){return this._headerSnapped}get hasSnappedTitleOnMobile(){return i()&&this.headerSnapped&&this.dynamicPageTitle?.snappedTitleOnMobile.length}get headerAriaLabel(){return this.accessibilityAttributes.header?.name||(this.hasHeading?this._headerLabel:void 0)}get _headerRole(){return this.accessibilityAttributes.header?.role}get _rootRole(){return this.accessibilityAttributes.root?.role}get _rootAriaLabel(){return this.accessibilityAttributes.root?.name}get _contentRole(){return this.accessibilityAttributes.content?.role}get _contentAriaLabel(){return this.accessibilityAttributes.content?.name}get _footerRole(){return this.accessibilityAttributes.footer?.role}get _footerAriaLabel(){return this.accessibilityAttributes.footer?.name}get _hidePinButton(){return this.hidePinButton||i()}get _actionsBarStickyTop(){return(this.dynamicPageTitle?.getBoundingClientRect().height||0)+(this.headerInTitle&&this.dynamicPageHeader?.getBoundingClientRect().height||0)}set headerSnapped(e){e!==this._headerSnapped&&(this.scrollContainer?this._toggleHeader():(this._headerSnapped=e,this.showHeaderInStickArea=e))}snapOnScroll(){he(()=>this.snapTitleByScroll(),et)}snapTitleByScroll(){if(!this.dynamicPageTitle||!this.dynamicPageHeader||this.headerPinned||!this.scrollContainer)return;if(this.isToggled){this.isToggled=!1;return}if(this.skipSnapOnScroll){this.skipSnapOnScroll=!1;return}let e=this.scrollContainer.scrollTop,t=this.dynamicPageHeader.getBoundingClientRect().height,n=this._headerSnapped;this._headerSnapped&&e>t&&(this.showHeaderInStickArea=!1);let r=!this._headerSnapped&&e>t+J,i=this._headerSnapped&&(e<t-J||!e&&!t);r?(this.showHeaderInStickArea=!1,this._headerSnapped=!0,requestAnimationFrame(()=>{this.scrollContainer&&this.scrollContainer.scrollTop===0&&(this.scrollContainer.scrollTop=J)})):i&&(this._headerSnapped=!1),n!==this._headerSnapped&&this.fireDecoratorEvent(`title-toggle`)}async onExpandClick(){this.isToggled=!0,this._toggleHeader(),this.fireDecoratorEvent(`title-toggle`),await c(),this.headerActions?.focusExpandButton(),this.hasSnappedTitleOnMobile&&this.dynamicPageTitle?.focus(),fe(this._headerLabel,de.Polite)}async onPinClick(){this.headerPinned=!this.headerPinned,this.headerPinned?this.showHeaderInStickArea=!0:this.scrollContainer&&this.scrollContainer.scrollTop===0&&(this.showHeaderInStickArea=!1),this.fireDecoratorEvent(`pin-button-toggle`),await c(),this.headerActions?.focusPinButton()}async onToggleTitle(){this.hasHeading&&(this.isToggled=!0,this._toggleHeader(),this.fireDecoratorEvent(`title-toggle`),await c(),this.dynamicPageTitle.focus())}async _toggleHeader(){if(!this.scrollContainer)return;let e=this.dynamicPageHeader?.getBoundingClientRect().height||0,t=this.scrollContainer.scrollTop;!this._headerSnapped&&this.headerPinned&&(this.headerPinned=!1,this.fireDecoratorEvent(`pin-button-toggle`)),t<=J?(this._headerSnapped=!this._headerSnapped,this.showHeaderInStickArea=this._headerSnapped):t>J&&t<e?this._headerSnapped?(this.showHeaderInStickArea=!1,this._headerSnapped=!1):(this._headerSnapped=!0,this.showHeaderInStickArea=!0,this.scrollContainer.scrollTop=0):(this.scrollContainer.scrollTop===J&&(this.scrollContainer.scrollTop=0),this.showHeaderInStickArea=!this.showHeaderInStickArea,this._headerSnapped=!this._headerSnapped,this.skipSnapOnScroll=!0,await c(),this._headerSnapped&&this.scrollContainer.scrollTop<J&&(this.scrollContainer.scrollTop=J))}onExpandHoverIn(){this.dynamicPageTitle?.setAttribute(`hovered`,``)}onExpandHoverOut(){this.dynamicPageTitle?.removeAttribute(`hovered`)}onContentFocusIn(e){let t=e.composedPath()[0];t&&t.offsetWidth!==0&&t.offsetHeight!==0&&(this.setScrollPadding({start:this.scrollPaddingTop,end:this.endAreaHeight}),requestAnimationFrame(()=>{let e=this.scrollContainer;if(!e)return;let n=t.getBoundingClientRect(),r=e.getBoundingClientRect(),i=n.top<r.top+this.scrollPaddingTop,a=n.bottom>r.bottom-this.endAreaHeight;(i||a)&&t.scrollIntoView({behavior:`smooth`,block:`nearest`})}))}onContentFocusOut(){this.setScrollPadding({start:0,end:0})}setScrollPadding(e){this.scrollContainer?.style.setProperty(`scroll-padding-top`,`${e.start}px`),this.scrollContainer?.style.setProperty(`scroll-padding-bottom`,`${e.end}px`)}},K([x({type:Boolean})],Y.prototype,`hidePinButton`,void 0),K([x({type:Boolean})],Y.prototype,`headerPinned`,void 0),K([x({type:Boolean})],Y.prototype,`showFooter`,void 0),K([k({default:!0,type:HTMLElement})],Y.prototype,`content`,void 0),K([k({type:$e})],Y.prototype,`titleArea`,void 0),K([k({type:Je})],Y.prototype,`headerArea`,void 0),K([k({type:HTMLElement})],Y.prototype,`footerArea`,void 0),K([x({type:Object})],Y.prototype,`accessibilityAttributes`,void 0),K([x({type:Boolean})],Y.prototype,`_headerSnapped`,void 0),K([xe(`.ui5-dynamic-page-scroll-container`)],Y.prototype,`scrollContainer`,void 0),K([xe(`[ui5-dynamic-page-header-actions]`)],Y.prototype,`headerActions`,void 0),K([x({type:Boolean})],Y.prototype,`headerSnapped`,null),K([D(`@ui5/webcomponents-fiori`)],Y,`i18nBundle`,void 0),Y=q=K([f({tag:`ui5-dynamic-page`,renderer:u,styles:He,template:ze}),w(`pin-button-toggle`,{bubbles:!0}),w(`title-toggle`,{bubbles:!0})],Y),Y.define()})))()}var X;function nt(){return(nt=e((()=>{tt(),C(),X=S(`ui5-dynamic-page`,[`accessibilityAttributes`],[`headerPinned`,`headerSnapped`,`hidePinButton`,`showFooter`],[`footerArea`,`headerArea`,`titleArea`],[`pin-button-toggle`,`title-toggle`]),X.displayName=`DynamicPage`;try{X.displayName=`DynamicPage`,X.__docgenInfo={description:`A layout component, representing a web page, consisting of a title, header with dynamic behavior, a content area, and an optional floating footer.

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



__Note:__ This is a UI5 Web Component! [DynamicPage UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/DynamicPage) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`DynamicPage`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPagePropTypes`}],description:`Defines the content of the Dynamic Page.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPagePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},footerArea:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPagePropTypes`}],description:`Defines the footer HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footerArea"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`footerArea`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPagePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},headerArea:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPagePropTypes`}],description:`Defines the header HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="headerArea"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<DynamicPageHeader>\``,name:`headerArea`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPagePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},titleArea:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPagePropTypes`}],description:`Defines the title HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="titleArea"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<DynamicPageTitle>\``,name:`titleArea`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPagePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onPinButtonToggle:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPagePropTypes`}],description:`Fired when the pin header button is toggled.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onPinButtonToggle`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPagePropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DynamicPageDomRef, never>) => void`}},onTitleToggle:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPagePropTypes`}],description:`Fired when the expand/collapse area of the title is toggled.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onTitleToggle`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPagePropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DynamicPageDomRef, never>) => void`}},accessibilityAttributes:{defaultValue:{value:`{}`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPageAttributes`}],description:"Defines additional accessibility attributes on different areas of the component.\n\nThe accessibilityAttributes object has the following fields,\nwhere each field is an object supporting one or more accessibility attributes:\n\n - **root**: `root.role` and `root.name`.\n - **header**: `header.role` and `header.name`.\n - **content**: `content.role` and `content.name`.\n - **footer**: `footer.role` and `footer.name`.\n\nThe accessibility attributes support the following values:\n\n- **role**: Defines the accessible ARIA landmark role of the area.\nAccepts the following values per section:\n`root` — `none`, `main`, `region`;\n`header` — `none`, `banner`, `region`;\n`content` — `none`, `main`, `region`, `form`;\n`footer` — `none`, `contentinfo`, `region`.\n\n- **name**: Defines the accessible ARIA name of the area.\nAccepts any string.\n\n**Note:** Available since [v2.24.0](https://github.com/UI5/webcomponents/releases/tag/v2.24.0) of **@ui5/webcomponents-fiori**.",name:`accessibilityAttributes`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPageAttributes`},required:!1,tags:{default:`{}`},type:{name:`DynamicPageAccessibilityAttributes`}},headerPinned:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPageAttributes`}],description:`Defines if the header is pinned.`,name:`headerPinned`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPageAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},headerSnapped:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPageAttributes`}],description:`Defines if the header is snapped.`,name:`headerSnapped`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPageAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},hidePinButton:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPageAttributes`}],description:`Defines if the pin button is hidden.`,name:`hidePinButton`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPageAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},showFooter:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPageAttributes`}],description:`Defines if the footer is shown.`,name:`showFooter`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPage/index.d.ts`,name:`DynamicPageAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents-fiori__.`}}}catch{}})))()}var Z;function rt(){return(rt=e((()=>{V(),C(),Z=S(`ui5-dynamic-page-header`,[`accessibleName`],[],[],[]),Z.displayName=`DynamicPageHeader`;try{Z.displayName=`DynamicPageHeader`,Z.__docgenInfo={description:`Header of the DynamicPage.

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

### Accessibility

The \`DynamicPageHeader\` provides an accessible label for the header region.

__Note:__ This is a UI5 Web Component! [DynamicPageHeader UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/DynamicPageHeader) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`DynamicPageHeader`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/DynamicPageHeader/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageHeader/index.d.ts`,name:`DynamicPageHeaderPropTypes`}],description:`Defines the content of the Dynamic Page Header.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageHeader/index.d.ts`,name:`DynamicPageHeaderPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageHeader/index.d.ts`,name:`DynamicPageHeaderAttributes`}],description:`Defines the accessible ARIA label for the header region.
Overrides the default "Header Expanded" / "Header Snapped" text.

**Note:** Available since [v2.24.0](https://github.com/UI5/webcomponents/releases/tag/v2.24.0) of **@ui5/webcomponents-fiori**.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageHeader/index.d.ts`,name:`DynamicPageHeaderAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents-fiori__.`}}}catch{}})))()}var Q;function $(){return($=e((()=>{G(),C(),Q=S(`ui5-dynamic-page-title`,[],[],[`actionsBar`,`breadcrumbs`,`heading`,`navigationBar`,`snappedHeading`,`snappedSubheading`,`snappedTitleOnMobile`,`subheading`],[]),Q.displayName=`DynamicPageTitle`;try{Q.displayName=`DynamicPageTitle`,Q.__docgenInfo={description:"Title of the `DynamicPage`.\n\nThe `DynamicPageTitle` component is part of the `DynamicPage`\nfamily and is used to serve as title of the `DynamicPage`.\n\n### Usage\n\nThe `DynamicPageTitle` can hold any component and displays the most important\ninformation regarding the object that will always remain visible while scrolling.\n\n**Note:** The `actions` slot accepts any UI5 web component, but it's\nrecommended to use `ui5-toolbar`.\n\nThe user can switch between the expanded/collapsed states of the\n`DynamicPage` by clicking on the `DynamicPageTitle`\nor by using the expand/collapse visual indicators, positioned at the bottom of the\n`DynamicPageTitle` and the `DynamicPageHeader` inside `DynamicPageHeaderActions`.\n\n### Responsive Behavior\n\nThe responsive behavior of the `DynamicPageTitle` depends on the behavior of the\ncontent that is displayed.\n\n__Note:__ This is a UI5 Web Component! [DynamicPageTitle UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/DynamicPageTitle) | [Repository](https://github.com/UI5/webcomponents)",displayName:`DynamicPageTitle`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,methods:[],props:{actionsBar:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`}],description:`Defines the bar with actions in the Dynamic page title.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="actionsBar"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`actionsBar`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},breadcrumbs:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`}],description:`Defines the content of the breadcrumbs inside Dynamic Page Title.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="breadcrumbs"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`breadcrumbs`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`}],description:`Defines the content of the Dynamic page title.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},heading:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`}],description:`Defines the content of the Heading of the Dynamic Page.

The font size of the title within the \`heading\` slot can be adjusted to the recommended values using the following CSS variables:

**Expanded:** \`var(--sapObjectHeader_Title_FontSize)\`

**Collapsed:** \`var(--sapObjectHeader_Title_SnappedFontSize)\`

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="heading"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`heading`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},navigationBar:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`}],description:`Defines the bar with navigation actions in the Dynamic page title.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="navigationBar"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<Toolbar>\``,name:`navigationBar`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},snappedHeading:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`}],description:`Defines the heading that is shown only when the header is snapped.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="snappedHeading"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`snappedHeading`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},snappedSubheading:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`}],description:`Defines the content of the title that is shown only when the header is snapped.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="snappedSubheading"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`snappedSubheading`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},snappedTitleOnMobile:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`}],description:`Defines the content of the snapped title on mobile devices.

This slot is displayed only when the \`DynamicPageTitle\` is in the snapped state on mobile devices.
It should be used to provide a simplified, single-line title that takes up less space on smaller screens.

**Note:**
- The content set in this slot **overrides** all other content set in the \`DynamicPageTitle\` slots when displayed.
- The slot is intended for a single \`ui5-title\` component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="snappedTitleOnMobile"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.3.0](https://github.com/UI5/webcomponents/releases/tag/v2.3.0) of **@ui5/webcomponents-fiori**.

__Supported Node Type/s:__ \`Array<Title>\``,name:`snappedTitleOnMobile`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},subheading:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`}],description:`Defines the content of the title that is shown only when the header is not snapped.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="subheading"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`subheading`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicPageTitle/index.d.ts`,name:`DynamicPageTitlePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents-fiori__.`}}}catch{}})))()}export{X as a,rt as i,$ as n,nt as o,Z as r,Q as t};