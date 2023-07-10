import{a as C,U as N,y as P,A as R,d as A}from"./UI5Element-78be0f3d.js";import{e as u,l as s,s as v,a as L,b as D,p as l,c as S,d as z}from"./withWebComponent-d4224c1c.js";import{c as T,e as E}from"./Icon-70a9e5b9.js";import{s as F}from"./slot-76e48863.js";import{I as p}from"./Integer-f7f172c9.js";import{H as O,q as V,p as M,s as W,o as j}from"./Icons-26e87c01.js";import{S as U}from"./ScrollEnablement-5e135290.js";import{R as $}from"./ResizeHandler-15c77712.js";import{d as X}from"./Device-99b8bbf4.js";import{g as H}from"./AnimationMode-30bec6df.js";import{aU as K,aV as q,aW as G,aX as J}from"./i18n-defaults-f002f496.js";import{o as d}from"./class-map-18f572ce.js";import{s as B}from"./style-map-54298215.js";import"./slim-arrow-left-9b1e01a2.js";import"./slim-arrow-right-ccb981dd.js";import{a as Q}from"./Button-427cd4bb.js";import Y from"./Label-263c93f2.js";var b;(function(n){n.Solid="Solid",n.Transparent="Transparent",n.Translucent="Translucent"})(b||(b={}));const _=b;var w;(function(n){n.Solid="Solid",n.None="None"})(w||(w={}));const k=w;var x;(function(n){n.Content="Content",n.Navigation="Navigation"})(x||(x={}));const h=x;var y;(function(n){n.Default="Default",n.Numeric="Numeric"})(y||(y={}));const I=y;function Z(n,e,t){return u`<section class="ui5-carousel-root ui5-carousel-background-${s(this._backgroundDesign)}" tabindex="0" role="listbox" aria-activedescendant="${s(this.ariaActiveDescendant)}" @focusin="${this._onfocusin}" @keydown=${this._onkeydown} @mouseout="${this._onmouseout}" @mouseover="${this._onmouseover}"><div class="${d(this.classes.viewport)}" part="content"><div class="${d(this.classes.content)}" style="${B(this.styles.content)}">${T(this.items,(i,a)=>i._id||a,(i,a)=>ee.call(this,n,e,t,i,a))}</div>${this.showArrows.content?te.call(this,n,e,t):void 0}</div>${this.renderNavigation?ie.call(this,n,e,t):void 0}</div></section> `}function ee(n,e,t,i,a){return u`<div id="${s(i.id)}" class="ui5-carousel-item ${s(i.classes)}" style="${B(i.styles)}" role="option" aria-posinset="${s(i.posinset)}" aria-setsize="${s(i.setsize)}" part="item"><slot name="${s(i.item._individualSlot)}" tabindex="${s(i.tabIndex)}"></slot></div>`}function te(n,e,t){return t?u`<div class="ui5-carousel-navigation-arrows"><${v("ui5-button",e,t)} arrow-back tooltip="${s(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></${v("ui5-button",e,t)}><${v("ui5-button",e,t)} arrow-forward tooltip="${s(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></${v("ui5-button",e,t)}></div>`:u`<div class="ui5-carousel-navigation-arrows"><ui5-button arrow-back tooltip="${s(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></ui5-button><ui5-button arrow-forward tooltip="${s(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></ui5-button></div>`}function ie(n,e,t){return u`<div class="${d(this.classes.navigation)}">${this.showArrows.navigation?ne.call(this,n,e,t):void 0}<div class="ui5-carousel-navigation">${this.hidePageIndicator?void 0:se.call(this,n,e,t)}</div>${this.showArrows.navigation?le.call(this,n,e,t):void 0}</div>`}function ne(n,e,t){return t?u`<${v("ui5-button",e,t)} arrow-back tooltip="${s(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></${v("ui5-button",e,t)}>`:u`<ui5-button arrow-back tooltip="${s(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></ui5-button>`}function se(n,e,t){return u`${this.isPageTypeDots?oe.call(this,n,e,t):re.call(this,n,e,t)}`}function oe(n,e,t){return u`${T(this.dots,(i,a)=>i._id||a,(i,a)=>ae.call(this,n,e,t,i,a))}`}function ae(n,e,t,i,a){return u`<div role="img" aria-label="${s(i.ariaLabel)}" ?active="${i.active}" class="ui5-carousel-navigation-dot"></div>`}function re(n,e,t){return u`<div class="ui5-carousel-navigation-text">${s(this.selectedIndexToShow)}&nbsp;${s(this.ofText)}&nbsp;${s(this.pagesCount)}</div>`}function le(n,e,t){return t?u`<${v("ui5-button",e,t)} arrow-forward tooltip="${s(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></${v("ui5-button",e,t)}>`:u`<ui5-button arrow-forward tooltip="${s(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></ui5-button>`}C("@ui5/webcomponents-theming","sap_fiori_3",async()=>L);C("@ui5/webcomponents","sap_fiori_3",async()=>D);const ce={packageName:"@ui5/webcomponents",fileName:"themes/Carousel.css",content:`:host(:not([hidden])) {
    display: inline-block;
}

:host {
    width: 100%;
    min-width: 15.5rem;
    height: 100%;
}

.ui5-carousel-root:focus-visible {
    outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
}

.ui5-carousel-root {
    height: inherit;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--ui5_carousel_background_color_translucent);
}

.ui5-carousel-background-solid {
    background: var(--ui5_carousel_background_color_solid);
}

.ui5-carousel-background-transparent {
    background: transparent;
}

.ui5-carousel-viewport {
    width: 100%;
    height: inherit;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    padding: 1px;
    flex: 1;
    min-height: 0;
}

.ui5-carousel-viewport.ui5-carousel-viewport--single {
    align-items: center;
}

.ui5-carousel-content {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    transition: transform 0.5s cubic-bezier(.46, 0, .44, 1);
    will-change: transform;
}

.ui5-carousel-content.ui5-carousel-content-no-animation {
    transition: none;
}

.ui5-carousel-content.ui5-carousel-content-has-navigation {
    height: calc(100% - 1rem);
}

.ui5-carousel-item {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.75rem;
    box-sizing: border-box;
    transition: opacity 0.5s linear;
    will-change: opacity;
}

.ui5-carousel-item--hidden {
    opacity: 0;
}

.ui5-carousel-navigation-arrows {
    width: 100%;
    padding: 0 0.5rem;
    position: absolute;
    top: calc(50% - var(--ui5_carousel_button_size) / 2);
    left: 0;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    pointer-events: none;
}

.ui5-carousel-navigation-arrows > [ui5-button] {
    pointer-events: all;
}

.ui5-carousel-navigation-wrapper {
    width: 100%;
    height: 2.75rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}

.ui5-carousel-navigation-wrapper-bg-solid {
    background: var(--sapPageFooter_Background);
}

.ui5-carousel-navigation-wrapper-bg-translucent {
    background: var(--ui5_carousel_background_color_translucent);
}

.ui5-carousel-navigation-wrapper-bg-transparent {
    background: transparent;
}

.ui5-carousel-navigation-wrapper-border-solid {
    border-top: var(--sapElement_BorderWidth) solid var(--sapList_BorderColor);
}

.ui5-carousel-navigation-wrapper.ui5-carousel-navigation-with-buttons {
    height: 3.5rem;
}

.ui5-carousel-navigation-button {
    width: var(--ui5_carousel_button_size);
    height: var(--ui5_carousel_button_size);
    border-radius: 50%;
    box-shadow: none;
    cursor: pointer;
    outline-offset: .1rem;
    --_ui5_button_focused_border_radius: 50%;
}

.ui5-carousel-navigation-arrows .ui5-carousel-navigation-button {
    box-shadow: var(--sapContent_Shadow1);
}

.ui5-carousel-navigation-button--hidden {
    visibility: hidden;
    padding: 0;
}

.ui5-carousel-navigation {
    width: 9rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ui5-carousel-navigation-dot {
    box-sizing: border-box;
    width: var(--ui5_carousel_inactive_dot_size);
    height: var(--ui5_carousel_inactive_dot_size);
    margin: var(--ui5_carousel_inactive_dot_margin);
    border-radius: 50%;
    background-color: var(--ui5_carousel_inactive_dot_background);
    border: var(--ui5_carousel_inactive_dot_border);
    transition: background-color .1s ease-in;
}

.ui5-carousel-navigation-dot[active] {
    width: .5rem;
    height: .5rem;
    margin: 0 .25rem;
    background-color: var(--ui5_carousel_active_dot_background);
    border: var(--ui5_carousel_active_dot_border);
}

.ui5-carousel-navigation-text {
    font-family: var(--sapFontFamily);
    font-size: var(--sapFontSize);
    font-weight: normal;
    color: var(--sapPageFooter_TextColor);
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
}
`};var r=globalThis&&globalThis.__decorate||function(n,e,t,i){var a=arguments.length,c=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(n,e,t,i);else for(var m=n.length-1;m>=0;m--)(f=n[m])&&(c=(a<3?f(c):a>3?f(e,t,c):f(e,t))||c);return a>3&&c&&Object.defineProperty(e,t,c),c},g;let o=g=class extends N{static get pageTypeLimit(){return 9}constructor(){super(),this._scrollEnablement=new U(this),this._scrollEnablement.attachEvent("touchend",e=>{this._updateScrolling(e)}),this._onResizeBound=this._onResize.bind(this),this._resizing=!1,this._lastFocusedElements=[],this._orderOfLastFocusedPages=[]}onBeforeRendering(){this.arrowsPlacement===h.Navigation&&(this._visibleNavigationArrows=!0),this.validateSelectedIndex()}onAfterRendering(){this._scrollEnablement.scrollContainer=this.getDomRef(),this._resizing=!1}onEnterDOM(){$.register(this,this._onResizeBound)}onExitDOM(){$.deregister(this,this._onResizeBound)}validateSelectedIndex(){this.isIndexInRange(this._selectedIndex)||(this._selectedIndex=0)}_onResize(){const e=this.effectiveItemsPerPage;this._resizing=!0,this._width=this.offsetWidth,this._itemWidth=Math.floor(this._width/this.effectiveItemsPerPage),this.effectiveItemsPerPage!==e&&this._selectedIndex>this.pagesCount-1&&(this._selectedIndex=this.pagesCount-1,this.fireEvent("navigate",{selectedIndex:this._selectedIndex}))}_updateScrolling(e){e&&(e.isLeft?this.navigateLeft():e.isRight&&this.navigateRight())}async _onkeydown(e){if(O(e)){this._handleF7Key(e);return}e.target===this.getDomRef()&&(V(e)||M(e)?(this.navigateLeft(),await P(),this.getDomRef().focus()):(W(e)||j(e))&&(this.navigateRight(),await P(),this.getDomRef().focus()))}_onfocusin(e){const t=e.target;if(t===this.getDomRef())return;let i=-1;for(let c=0;c<this.content.length;c++)if(this.content[c].contains(t)){i=c;break}if(i===-1)return;this._lastFocusedElements[i]=t;const a=this._orderOfLastFocusedPages.indexOf(i);a===-1?this._orderOfLastFocusedPages.unshift(i):this._orderOfLastFocusedPages.splice(0,0,this._orderOfLastFocusedPages.splice(a,1)[0])}_onmouseout(){this.arrowsPlacement===h.Content&&(this._visibleNavigationArrows=!1)}_onmouseover(){this.arrowsPlacement===h.Content&&(this._visibleNavigationArrows=!0)}_handleF7Key(e){const t=this._lastFocusedElements[this._getLastFocusedActivePageIndex];e.target===this.getDomRef()&&t?t.focus():this.getDomRef().focus()}get _backgroundDesign(){return this.backgroundDesign.toLowerCase()}get _getLastFocusedActivePageIndex(){for(let e=0;e<this._orderOfLastFocusedPages.length;e++){const t=this._orderOfLastFocusedPages[e];if(this.isItemInViewport(t))return t}return this._selectedIndex}navigateLeft(){this._resizing=!1;const e=this._selectedIndex;this._selectedIndex-1<0?this.cyclic&&(this._selectedIndex=this.pagesCount-1):--this._selectedIndex,e!==this._selectedIndex&&this.fireEvent("navigate",{selectedIndex:this._selectedIndex})}navigateRight(){this._resizing=!1;const e=this._selectedIndex;if(this._selectedIndex+1>this.pagesCount-1)if(this.cyclic)this._selectedIndex=0;else return;else++this._selectedIndex;e!==this._selectedIndex&&this.fireEvent("navigate",{selectedIndex:this._selectedIndex})}_navButtonClick(e){e.target.hasAttribute("arrow-forward")?this.navigateRight():this.navigateLeft(),this.focus()}navigateTo(e){this._resizing=!1,this._selectedIndex=e}get items(){return this.content.map((e,t)=>{const i=this.isItemInViewport(t);return{id:`${this._id}-carousel-item-${t+1}`,item:e,tabIndex:i?"0":"-1",posinset:`${t+1}`,setsize:`${this.content.length}`,styles:{width:`${this._itemWidth||0}px`},classes:i?"":"ui5-carousel-item--hidden"}})}get effectiveItemsPerPage(){return this._width?this._width<=640?this.itemsPerPageS:this._width<=1024?this.itemsPerPageM:this.itemsPerPageL:this.itemsPerPageL}isItemInViewport(e){return e>=this._selectedIndex&&e<=this._selectedIndex+this.effectiveItemsPerPage-1}isIndexInRange(e){return e>=0&&e<=this.pagesCount-1}get renderNavigation(){return this.hasManyPages?this.arrowsPlacement===h.Navigation&&!this.hideNavigationArrows?!0:!this.hidePageIndicator:!1}get hasManyPages(){return this.pagesCount>1}get styles(){const e=this._itemWidth||0;return{content:{transform:`translateX(${this._isRTL?"":"-"}${this._selectedIndex*e}px`}}}get classes(){return{viewport:{"ui5-carousel-viewport":!0,"ui5-carousel-viewport--single":this.pagesCount===1},content:{"ui5-carousel-content":!0,"ui5-carousel-content-no-animation":this.suppressAnimation,"ui5-carousel-content-has-navigation":this.renderNavigation,"ui5-carousel-content-has-navigation-and-buttons":this.renderNavigation&&this.arrowsPlacement===h.Navigation&&!this.hideNavigationArrows},navigation:{"ui5-carousel-navigation-wrapper":!0,"ui5-carousel-navigation-with-buttons":this.renderNavigation&&this.arrowsPlacement===h.Navigation&&!this.hideNavigationArrows,[`ui5-carousel-navigation-wrapper-bg-${this.pageIndicatorBackgroundDesign.toLowerCase()}`]:!0,[`ui5-carousel-navigation-wrapper-border-${this.pageIndicatorBorderDesign.toLowerCase()}`]:!0},navPrevButton:{"ui5-carousel-navigation-button--hidden":!this.hasPrev},navNextButton:{"ui5-carousel-navigation-button--hidden":!this.hasNext}}}get pagesCount(){const e=this.content.length;return e>this.effectiveItemsPerPage?e-this.effectiveItemsPerPage+1:1}get isPageTypeDots(){return this.pageIndicatorStyle===I.Numeric?!1:this.pagesCount<g.pageTypeLimit}get dots(){const e=[],t=this.pagesCount;for(let i=0;i<t;i++)e.push({active:i===this._selectedIndex,ariaLabel:g.i18nBundle.getText(K,i+1,t)});return e}get showArrows(){const e=this._visibleNavigationArrows&&this.hasManyPages&&X();return{content:!this.hideNavigationArrows&&e&&this.arrowsPlacement===h.Content,navigation:!this.hideNavigationArrows&&e&&this.arrowsPlacement===h.Navigation}}get hasPrev(){return this.cyclic||this._selectedIndex-1>=0}get hasNext(){return this.cyclic||this._selectedIndex+1<=this.pagesCount-1}get suppressAnimation(){return this._resizing||H()===R.None}get _isRTL(){return this.effectiveDir==="rtl"}get selectedIndexToShow(){return this._isRTL?this.pagesCount-(this.pagesCount-this._selectedIndex)+1:this._selectedIndex+1}get ofText(){return g.i18nBundle.getText(q)}get ariaActiveDescendant(){return this.content.length?`${this._id}-carousel-item-${this._selectedIndex+1}`:void 0}get nextPageText(){return g.i18nBundle.getText(G)}get previousPageText(){return g.i18nBundle.getText(J)}get visibleItemsIndices(){const e=[];return this.items.forEach((t,i)=>{this.isItemInViewport(i)&&e.push(i)}),e}static async onDefine(){g.i18nBundle=await A("@ui5/webcomponents")}};r([l({type:Boolean})],o.prototype,"cyclic",void 0);r([l({validator:p,defaultValue:1})],o.prototype,"itemsPerPageS",void 0);r([l({validator:p,defaultValue:1})],o.prototype,"itemsPerPageM",void 0);r([l({validator:p,defaultValue:1})],o.prototype,"itemsPerPageL",void 0);r([l({type:Boolean})],o.prototype,"hideNavigationArrows",void 0);r([l({type:Boolean})],o.prototype,"hidePageIndicator",void 0);r([l({type:I,defaultValue:I.Default})],o.prototype,"pageIndicatorStyle",void 0);r([l({type:_,defaultValue:_.Translucent})],o.prototype,"backgroundDesign",void 0);r([l({type:_,defaultValue:_.Solid})],o.prototype,"pageIndicatorBackgroundDesign",void 0);r([l({type:k,defaultValue:k.Solid})],o.prototype,"pageIndicatorBorderDesign",void 0);r([l({validator:p,defaultValue:0})],o.prototype,"_selectedIndex",void 0);r([l({type:h,defaultValue:h.Content})],o.prototype,"arrowsPlacement",void 0);r([l({validator:p})],o.prototype,"_width",void 0);r([l({validator:p})],o.prototype,"_itemWidth",void 0);r([l({type:Boolean,noAttribute:!0})],o.prototype,"_visibleNavigationArrows",void 0);r([F({default:!0,type:HTMLElement,individualSlots:!0})],o.prototype,"content",void 0);o=g=r([S({tag:"ui5-carousel",languageAware:!0,fastNavigation:!0,renderer:z,styles:ce,template:Z,dependencies:[Q,Y]}),E("navigate",{detail:{selectedIndex:{type:p}}})],o);o.define();const ue=o,Be=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"}));export{_ as B,h as C,k as a,I as b,ue as c,Be as d};
//# sourceMappingURL=Carousel-4245b13e.js.map
