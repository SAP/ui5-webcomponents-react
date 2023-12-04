import{r as C,U as N,l as R}from"./UI5Element-Jt3C0_FN.js";import{b as c,l as o,d as v,s as A,a as L,p as l,c as D,g as S}from"./withWebComponent-I1wSIv4y.js";import{c as T,e as z}from"./Icon-G6aW2FRW.js";import{s as E}from"./slot-HSrR9XJ-.js";import{I as p}from"./Integer-kog98579.js";import{U as F,b as O,e as V,c as M,d as j}from"./Icons-Nr5kgAbF.js";import{r as P,A as U,d as W}from"./i18nBundle-ZoJ37UJR.js";import{S as X}from"./ScrollEnablement-JhIGDfd8.js";import{R as $}from"./ResizeHandler-mTFvwsyT.js";import{g as H}from"./AnimationMode-YBLH6EH2.js";import{ax as K,ay as q,az as G,aA as J}from"./i18n-defaults-zEJ36VRV.js";import{o as d}from"./class-map-CHDPODen.js";import{s as B}from"./style-map-xQ1SPtMO.js";import"./slim-arrow-left-Vwx_rhBh.js";import"./slim-arrow-right-0wqMoc5g.js";import{b as Q}from"./Button-CV8gKi73.js";import Y from"./Label-Xo_6xXB6.js";var b;(function(s){s.Solid="Solid",s.Transparent="Transparent",s.Translucent="Translucent"})(b||(b={}));const _=b;var w;(function(s){s.Solid="Solid",s.None="None"})(w||(w={}));const k=w;var x;(function(s){s.Content="Content",s.Navigation="Navigation"})(x||(x={}));const h=x;var y;(function(s){s.Default="Default",s.Numeric="Numeric"})(y||(y={}));const I=y;function Z(s,e,t){return c`<section class="ui5-carousel-root ui5-carousel-background-${o(this._backgroundDesign)}" tabindex="0" role="listbox" aria-activedescendant="${o(this.ariaActiveDescendant)}" @focusin="${this._onfocusin}" @keydown=${this._onkeydown} @mouseout="${this._onmouseout}" @mouseover="${this._onmouseover}"><div class="${d(this.classes.viewport)}" part="content"><div class="${d(this.classes.content)}" style="${B(this.styles.content)}">${T(this.items,(i,a)=>i._id||a,(i,a)=>ee.call(this,s,e,t,i,a))}</div>${this.showArrows.content?te.call(this,s,e,t):void 0}</div>${this.renderNavigation?ie.call(this,s,e,t):void 0}</div></section> `}function ee(s,e,t,i,a){return c`<div id="${o(i.id)}" class="ui5-carousel-item ${o(i.classes)}" style="${B(i.styles)}" role="option" aria-posinset="${o(i.posinset)}" aria-setsize="${o(i.setsize)}" part="item"><slot name="${o(i.item._individualSlot)}" tabindex="${o(i.tabIndex)}"></slot></div>`}function te(s,e,t){return t?c`<div class="ui5-carousel-navigation-arrows"><${v("ui5-button",e,t)} arrow-back tooltip="${o(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></${v("ui5-button",e,t)}><${v("ui5-button",e,t)} arrow-forward tooltip="${o(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></${v("ui5-button",e,t)}></div>`:c`<div class="ui5-carousel-navigation-arrows"><ui5-button arrow-back tooltip="${o(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></ui5-button><ui5-button arrow-forward tooltip="${o(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></ui5-button></div>`}function ie(s,e,t){return c`<div class="${d(this.classes.navigation)}">${this.showArrows.navigation?se.call(this,s,e,t):void 0}<div class="ui5-carousel-navigation">${this.hidePageIndicator?void 0:oe.call(this,s,e,t)}</div>${this.showArrows.navigation?le.call(this,s,e,t):void 0}</div>`}function se(s,e,t){return t?c`<${v("ui5-button",e,t)} arrow-back tooltip="${o(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></${v("ui5-button",e,t)}>`:c`<ui5-button arrow-back tooltip="${o(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></ui5-button>`}function oe(s,e,t){return c`${this.isPageTypeDots?ne.call(this,s,e,t):re.call(this,s,e,t)}`}function ne(s,e,t){return c`${T(this.dots,(i,a)=>i._id||a,(i,a)=>ae.call(this,s,e,t,i,a))}`}function ae(s,e,t,i,a){return c`<div role="img" aria-label="${o(i.ariaLabel)}" ?active="${i.active}" class="ui5-carousel-navigation-dot"></div>`}function re(s,e,t){return c`<div class="ui5-carousel-navigation-text">${o(this.selectedIndexToShow)}&nbsp;${o(this.ofText)}&nbsp;${o(this.pagesCount)}</div>`}function le(s,e,t){return t?c`<${v("ui5-button",e,t)} arrow-forward tooltip="${o(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></${v("ui5-button",e,t)}>`:c`<ui5-button arrow-forward tooltip="${o(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></ui5-button>`}C("@ui5/webcomponents-theming","sap_horizon",async()=>A);C("@ui5/webcomponents","sap_horizon",async()=>L);const ue={packageName:"@ui5/webcomponents",fileName:"themes/Carousel.css",content:":host(:not([hidden])){display:inline-block}:host{height:100%;min-width:15.5rem;width:100%}.ui5-carousel-root:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor)}.ui5-carousel-root{align-items:center;background:var(--ui5-v1-20-0_carousel_background_color_translucent);display:flex;flex-direction:column;height:inherit;position:relative}.ui5-carousel-background-solid{background:var(--ui5-v1-20-0_carousel_background_color_solid)}.ui5-carousel-background-transparent{background:transparent}.ui5-carousel-viewport{align-items:flex-start;display:flex;flex:1;flex-direction:column;height:inherit;min-height:0;overflow:hidden;padding:1px;position:relative;width:100%}.ui5-carousel-viewport.ui5-carousel-viewport--single{align-items:center}.ui5-carousel-content{display:flex;flex-direction:row;flex-wrap:nowrap;height:100%;position:relative;transition:transform .5s cubic-bezier(.46,0,.44,1);will-change:transform}.ui5-carousel-content.ui5-carousel-content-no-animation{transition:none}.ui5-carousel-content.ui5-carousel-content-has-navigation{height:calc(100% - 1rem)}.ui5-carousel-item{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:center;padding:0 .75rem;transition:opacity .5s linear;will-change:opacity}.ui5-carousel-item--hidden{opacity:0}.ui5-carousel-navigation-arrows{box-sizing:border-box;display:flex;justify-content:space-between;left:0;padding:0 .5rem;pointer-events:none;position:absolute;top:calc(50% - var(--ui5-v1-20-0_carousel_button_size)/2);width:100%}.ui5-carousel-navigation-arrows>[ui5-button]{pointer-events:all}.ui5-carousel-navigation-wrapper{align-items:center;box-sizing:border-box;display:flex;flex-wrap:nowrap;height:2.75rem;justify-content:center;width:100%}.ui5-carousel-navigation-wrapper-bg-solid{background:var(--sapPageFooter_Background)}.ui5-carousel-navigation-wrapper-bg-translucent{background:var(--ui5-v1-20-0_carousel_background_color_translucent)}.ui5-carousel-navigation-wrapper-bg-transparent{background:transparent}.ui5-carousel-navigation-wrapper-border-solid{border-top:var(--sapElement_BorderWidth) solid var(--sapList_BorderColor)}.ui5-carousel-navigation-wrapper.ui5-carousel-navigation-with-buttons{height:3.5rem}.ui5-carousel-navigation-button{--_ui5-v1-20-0_button_focused_border_radius:50%;border-radius:50%;box-shadow:none;cursor:pointer;height:var(--ui5-v1-20-0_carousel_button_size);outline-offset:.1rem;width:var(--ui5-v1-20-0_carousel_button_size)}.ui5-carousel-navigation-arrows .ui5-carousel-navigation-button{box-shadow:var(--sapContent_Shadow1)}.ui5-carousel-navigation-arrows .ui5-carousel-navigation-button:active{box-shadow:var(--ui5-v1-20-0_carousel_navigation_button_active_box_shadow)}.ui5-carousel-navigation-button--hidden{padding:0;visibility:hidden}.ui5-carousel-navigation{align-items:center;display:flex;height:2rem;justify-content:center;width:9rem}.ui5-carousel-navigation-dot{background-color:var(--ui5-v1-20-0_carousel_inactive_dot_background);border:var(--ui5-v1-20-0_carousel_inactive_dot_border);border-radius:50%;box-sizing:border-box;height:var(--ui5-v1-20-0_carousel_inactive_dot_size);margin:var(--ui5-v1-20-0_carousel_inactive_dot_margin);transition:background-color .1s ease-in;width:var(--ui5-v1-20-0_carousel_inactive_dot_size)}.ui5-carousel-navigation-dot[active]{background-color:var(--ui5-v1-20-0_carousel_active_dot_background);border:var(--ui5-v1-20-0_carousel_active_dot_border);height:.5rem;margin:0 .25rem;width:.5rem}.ui5-carousel-navigation-text{color:var(--sapPageFooter_TextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}"};var r=function(s,e,t,i){var a=arguments.length,u=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(s,e,t,i);else for(var m=s.length-1;m>=0;m--)(f=s[m])&&(u=(a<3?f(u):a>3?f(e,t,u):f(e,t))||u);return a>3&&u&&Object.defineProperty(e,t,u),u},g;let n=g=class extends N{static get pageTypeLimit(){return 9}constructor(){super(),this._scrollEnablement=new X(this),this._scrollEnablement.attachEvent("touchend",e=>{this._updateScrolling(e)}),this._onResizeBound=this._onResize.bind(this),this._resizing=!1,this._lastFocusedElements=[],this._orderOfLastFocusedPages=[]}onBeforeRendering(){this.arrowsPlacement===h.Navigation&&(this._visibleNavigationArrows=!0),this.validateSelectedIndex()}onAfterRendering(){this._scrollEnablement.scrollContainer=this.getDomRef(),this._resizing=!1}onEnterDOM(){$.register(this,this._onResizeBound)}onExitDOM(){$.deregister(this,this._onResizeBound)}validateSelectedIndex(){this.isIndexInRange(this._selectedIndex)||(this._selectedIndex=0)}_onResize(){const e=this.effectiveItemsPerPage;this._resizing=!0,this._width=this.offsetWidth,this._itemWidth=Math.floor(this._width/this.effectiveItemsPerPage),this.effectiveItemsPerPage!==e&&this._selectedIndex>this.pagesCount-1&&(this._selectedIndex=this.pagesCount-1,this.fireEvent("navigate",{selectedIndex:this._selectedIndex}))}_updateScrolling(e){e&&(e.isLeft?this.navigateLeft():e.isRight&&this.navigateRight())}async _onkeydown(e){if(F(e)){this._handleF7Key(e);return}e.target===this.getDomRef()&&(O(e)||V(e)?(this.navigateLeft(),await P(),this.getDomRef().focus()):(M(e)||j(e))&&(this.navigateRight(),await P(),this.getDomRef().focus()))}_onfocusin(e){const t=e.target;if(t===this.getDomRef())return;let i=-1;for(let u=0;u<this.content.length;u++)if(this.content[u].contains(t)){i=u;break}if(i===-1)return;this._lastFocusedElements[i]=t;const a=this._orderOfLastFocusedPages.indexOf(i);a===-1?this._orderOfLastFocusedPages.unshift(i):this._orderOfLastFocusedPages.splice(0,0,this._orderOfLastFocusedPages.splice(a,1)[0])}_onmouseout(){this.arrowsPlacement===h.Content&&(this._visibleNavigationArrows=!1)}_onmouseover(){this.arrowsPlacement===h.Content&&(this._visibleNavigationArrows=!0)}_handleF7Key(e){const t=this._lastFocusedElements[this._getLastFocusedActivePageIndex];e.target===this.getDomRef()&&t?t.focus():this.getDomRef().focus()}get _backgroundDesign(){return this.backgroundDesign.toLowerCase()}get _getLastFocusedActivePageIndex(){for(let e=0;e<this._orderOfLastFocusedPages.length;e++){const t=this._orderOfLastFocusedPages[e];if(this.isItemInViewport(t))return t}return this._selectedIndex}navigateLeft(){this._resizing=!1;const e=this._selectedIndex;this._selectedIndex-1<0?this.cyclic&&(this._selectedIndex=this.pagesCount-1):--this._selectedIndex,e!==this._selectedIndex&&this.fireEvent("navigate",{selectedIndex:this._selectedIndex})}navigateRight(){this._resizing=!1;const e=this._selectedIndex;if(this._selectedIndex+1>this.pagesCount-1)if(this.cyclic)this._selectedIndex=0;else return;else++this._selectedIndex;e!==this._selectedIndex&&this.fireEvent("navigate",{selectedIndex:this._selectedIndex})}_navButtonClick(e){e.target.hasAttribute("arrow-forward")?this.navigateRight():this.navigateLeft(),this.focus()}navigateTo(e){this._resizing=!1,this._selectedIndex=e}get items(){return this.content.map((e,t)=>{const i=this.isItemInViewport(t);return{id:`${this._id}-carousel-item-${t+1}`,item:e,tabIndex:i?"0":"-1",posinset:`${t+1}`,setsize:`${this.content.length}`,styles:{width:`${this._itemWidth||0}px`},classes:i?"":"ui5-carousel-item--hidden"}})}get effectiveItemsPerPage(){return this._width?this._width<=640?this.itemsPerPageS:this._width<=1024?this.itemsPerPageM:this.itemsPerPageL:this.itemsPerPageL}isItemInViewport(e){return e>=this._selectedIndex&&e<=this._selectedIndex+this.effectiveItemsPerPage-1}isIndexInRange(e){return e>=0&&e<=this.pagesCount-1}get renderNavigation(){return this.hasManyPages?this.arrowsPlacement===h.Navigation&&!this.hideNavigationArrows?!0:!this.hidePageIndicator:!1}get hasManyPages(){return this.pagesCount>1}get styles(){const e=this._itemWidth||0;return{content:{transform:`translateX(${this._isRTL?"":"-"}${this._selectedIndex*e}px`}}}get classes(){return{viewport:{"ui5-carousel-viewport":!0,"ui5-carousel-viewport--single":this.pagesCount===1},content:{"ui5-carousel-content":!0,"ui5-carousel-content-no-animation":this.suppressAnimation,"ui5-carousel-content-has-navigation":this.renderNavigation,"ui5-carousel-content-has-navigation-and-buttons":this.renderNavigation&&this.arrowsPlacement===h.Navigation&&!this.hideNavigationArrows},navigation:{"ui5-carousel-navigation-wrapper":!0,"ui5-carousel-navigation-with-buttons":this.renderNavigation&&this.arrowsPlacement===h.Navigation&&!this.hideNavigationArrows,[`ui5-carousel-navigation-wrapper-bg-${this.pageIndicatorBackgroundDesign.toLowerCase()}`]:!0,[`ui5-carousel-navigation-wrapper-border-${this.pageIndicatorBorderDesign.toLowerCase()}`]:!0},navPrevButton:{"ui5-carousel-navigation-button--hidden":!this.hasPrev},navNextButton:{"ui5-carousel-navigation-button--hidden":!this.hasNext}}}get pagesCount(){const e=this.content.length;return e>this.effectiveItemsPerPage?e-this.effectiveItemsPerPage+1:1}get isPageTypeDots(){return this.pageIndicatorStyle===I.Numeric?!1:this.pagesCount<g.pageTypeLimit}get dots(){const e=[],t=this.pagesCount;for(let i=0;i<t;i++)e.push({active:i===this._selectedIndex,ariaLabel:g.i18nBundle.getText(K,i+1,t)});return e}get showArrows(){const e=this._visibleNavigationArrows&&this.hasManyPages&&R();return{content:!this.hideNavigationArrows&&e&&this.arrowsPlacement===h.Content,navigation:!this.hideNavigationArrows&&e&&this.arrowsPlacement===h.Navigation}}get hasPrev(){return this.cyclic||this._selectedIndex-1>=0}get hasNext(){return this.cyclic||this._selectedIndex+1<=this.pagesCount-1}get suppressAnimation(){return this._resizing||H()===U.None}get _isRTL(){return this.effectiveDir==="rtl"}get selectedIndexToShow(){return this._isRTL?this.pagesCount-(this.pagesCount-this._selectedIndex)+1:this._selectedIndex+1}get ofText(){return g.i18nBundle.getText(q)}get ariaActiveDescendant(){return this.content.length?`${this._id}-carousel-item-${this._selectedIndex+1}`:void 0}get nextPageText(){return g.i18nBundle.getText(G)}get previousPageText(){return g.i18nBundle.getText(J)}get visibleItemsIndices(){const e=[];return this.items.forEach((t,i)=>{this.isItemInViewport(i)&&e.push(i)}),e}static async onDefine(){g.i18nBundle=await W("@ui5/webcomponents")}};r([l({type:Boolean})],n.prototype,"cyclic",void 0);r([l({validator:p,defaultValue:1})],n.prototype,"itemsPerPageS",void 0);r([l({validator:p,defaultValue:1})],n.prototype,"itemsPerPageM",void 0);r([l({validator:p,defaultValue:1})],n.prototype,"itemsPerPageL",void 0);r([l({type:Boolean})],n.prototype,"hideNavigationArrows",void 0);r([l({type:Boolean})],n.prototype,"hidePageIndicator",void 0);r([l({type:I,defaultValue:I.Default})],n.prototype,"pageIndicatorStyle",void 0);r([l({type:_,defaultValue:_.Translucent})],n.prototype,"backgroundDesign",void 0);r([l({type:_,defaultValue:_.Solid})],n.prototype,"pageIndicatorBackgroundDesign",void 0);r([l({type:k,defaultValue:k.Solid})],n.prototype,"pageIndicatorBorderDesign",void 0);r([l({validator:p,defaultValue:0})],n.prototype,"_selectedIndex",void 0);r([l({type:h,defaultValue:h.Content})],n.prototype,"arrowsPlacement",void 0);r([l({validator:p})],n.prototype,"_width",void 0);r([l({validator:p})],n.prototype,"_itemWidth",void 0);r([l({type:Boolean,noAttribute:!0})],n.prototype,"_visibleNavigationArrows",void 0);r([E({default:!0,type:HTMLElement,individualSlots:!0})],n.prototype,"content",void 0);n=g=r([D({tag:"ui5-carousel",languageAware:!0,fastNavigation:!0,renderer:S,styles:ue,template:Z,dependencies:[Q,Y]}),z("navigate",{detail:{selectedIndex:{type:p}}})],n);n.define();const ce=n,Be=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));export{_ as B,h as C,k as a,I as b,ce as c,Be as d};
