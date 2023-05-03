import{a as $,U as C,p as P,A as T,d as k}from"./UI5Element-e8adceda.js";import{e as r,l as a,s as g,a as R,b as N,p as c,c as B,d as A}from"./withWebComponent-c710bf85.js";import{c as y,e as L}from"./Icon-16710c43.js";import{s as E}from"./slot-76e48863.js";import{I as p}from"./Integer-f7f172c9.js";import{U as S,q as z,p as D,s as O,o as F}from"./Icons-5b18f7d2.js";import{S as M}from"./ScrollEnablement-4353003c.js";import{R as I}from"./ResizeHandler-9d370fcd.js";import{f as V}from"./Device-208919c6.js";import{g as j}from"./AnimationMode-9cec4b20.js";import{aN as U,aO as W,aP as X,aQ as H}from"./i18n-defaults-254d6b69.js";import{o as d}from"./class-map-eee65cb7.js";import{s as x}from"./style-map-eb41b602.js";import"./slim-arrow-left-0e139baa.js";import"./slim-arrow-right-78d167a6.js";import{B as K}from"./Button-6eea99db.js";import q from"./Label-e22f23ee.js";var m;(function(t){t.Content="Content",t.Navigation="Navigation"})(m||(m={}));const h=m;var b;(function(t){t.Default="Default",t.Numeric="Numeric"})(b||(b={}));const w=b,Q=(t,e,i)=>r`<section class="ui5-carousel-root" tabindex="0" role="listbox" aria-activedescendant="${a(t.ariaActiveDescendant)}" @focusin="${t._onfocusin}" @keydown=${t._onkeydown} @mouseout="${t._onmouseout}" @mouseover="${t._onmouseover}"><div class="${d(t.classes.viewport)}" part="content"><div class="${d(t.classes.content)}" style="${x(t.styles.content)}">${y(t.items,(s,n)=>s._id||n,(s,n)=>G(s))}</div></div>${t.showArrows.content?J(t,e,i):void 0}${t.renderNavigation?Y(t,e,i):void 0}</div></section> `,G=(t,e,i,s,n)=>r`<div id="${a(t.id)}" class="ui5-carousel-item ${a(t.classes)}" style="${x(t.styles)}" role="option" aria-posinset="${a(t.posinset)}" aria-setsize="${a(t.setsize)}" part="item"><slot name="${a(t.item._individualSlot)}" tabindex="${a(t.tabIndex)}"></slot></div>`,J=(t,e,i)=>i?r`<div class="ui5-carousel-navigation-arrows"><${g("ui5-button",e,i)} arrow-back tooltip="${a(t.previousPageText)}" class="ui5-carousel-navigation-button ${d(t.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${t._navButtonClick}></${g("ui5-button",e,i)}><${g("ui5-button",e,i)} arrow-forward tooltip="${a(t.nextPageText)}" class="ui5-carousel-navigation-button ${d(t.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${t._navButtonClick}></${g("ui5-button",e,i)}></div>`:r`<div class="ui5-carousel-navigation-arrows"><ui5-button arrow-back tooltip="${a(t.previousPageText)}" class="ui5-carousel-navigation-button ${d(t.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${t._navButtonClick}></ui5-button><ui5-button arrow-forward tooltip="${a(t.nextPageText)}" class="ui5-carousel-navigation-button ${d(t.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${t._navButtonClick}></ui5-button></div>`,Y=(t,e,i)=>r`<div class="${d(t.classes.navigation)}">${t.showArrows.navigation?Z(t,e,i):void 0}<div class="ui5-carousel-navigation">${t.hidePageIndicator?void 0:ee(t,e,i)}</div>${t.showArrows.navigation?ae(t,e,i):void 0}</div>`,Z=(t,e,i)=>i?r`<${g("ui5-button",e,i)} arrow-back tooltip="${a(t.previousPageText)}" class="ui5-carousel-navigation-button ${d(t.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${t._navButtonClick}></${g("ui5-button",e,i)}>`:r`<ui5-button arrow-back tooltip="${a(t.previousPageText)}" class="ui5-carousel-navigation-button ${d(t.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${t._navButtonClick}></ui5-button>`,ee=(t,e,i)=>r`${t.isPageTypeDots?te(t):se(t,e,i)}`,te=(t,e,i)=>r`${y(t.dots,(s,n)=>s._id||n,(s,n)=>ie(s))}`,ie=(t,e,i,s,n)=>r`<div role="img" aria-label="${a(t.ariaLabel)}" ?active="${t.active}" class="ui5-carousel-navigation-dot"></div>`,se=(t,e,i)=>i?r`<${g("ui5-label",e,i)}>${a(t.selectedIndexToShow)}&nbsp;${a(t.ofText)}&nbsp;${a(t.pagesCount)}</${g("ui5-label",e,i)}>`:r`<ui5-label>${a(t.selectedIndexToShow)}&nbsp;${a(t.ofText)}&nbsp;${a(t.pagesCount)}</ui5-label>`,ae=(t,e,i)=>i?r`<${g("ui5-button",e,i)} arrow-forward tooltip="${a(t.nextPageText)}" class="ui5-carousel-navigation-button ${d(t.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${t._navButtonClick}></${g("ui5-button",e,i)}>`:r`<ui5-button arrow-forward tooltip="${a(t.nextPageText)}" class="ui5-carousel-navigation-button ${d(t.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${t._navButtonClick}></ui5-button>`;$("@ui5/webcomponents-theming","sap_fiori_3",async()=>R);$("@ui5/webcomponents","sap_fiori_3",async()=>N);const oe={packageName:"@ui5/webcomponents",fileName:"themes/Carousel.css.ts",content:":host(:not([hidden])){display:inline-block}:host{width:100%;min-width:15.5rem;height:100%}.ui5-carousel-root:focus-visible{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor)}.ui5-carousel-root{height:inherit;position:relative;display:flex;flex-direction:column;align-items:center}.ui5-carousel-viewport{width:100%;height:inherit;position:relative;display:flex;flex-direction:column;align-items:flex-start;overflow:hidden}.ui5-carousel-viewport.ui5-carousel-viewport--single{align-items:center}.ui5-carousel-content{height:100%;position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;background:var(--ui5_carousel_background_color);transition:transform .5s cubic-bezier(.46,0,.44,1);will-change:transform}.ui5-carousel-content.ui5-carousel-content-no-animation{transition:none}.ui5-carousel-content.ui5-carousel-content-has-navigation{height:calc(100% - 1rem)}.ui5-carousel-item{height:100%;display:flex;align-items:center;justify-content:center;padding:0 .75rem;box-sizing:border-box;transition:opacity .5s linear;will-change:opacity}.ui5-carousel-item--hidden{opacity:0}.ui5-carousel-navigation-arrows{width:100%;padding:0 .5rem;position:absolute;top:calc(50% - var(--ui5_carousel_button_size));left:0;display:flex;justify-content:space-between;box-sizing:border-box;pointer-events:none}.ui5-carousel-navigation-arrows>[ui5-button]{pointer-events:all}.ui5-carousel-navigation-wrapper{width:100%;height:2.75rem;display:flex;flex-wrap:nowrap;justify-content:center;align-items:center;background:var(--sapPageFooter_Background);border-top:1px solid var(--sapPageFooter_BorderColor)}.ui5-carousel-navigation-wrapper.ui5-carousel-navigation-with-buttons{height:3.5rem}.ui5-carousel-navigation-button{width:var(--ui5_carousel_button_size);height:var(--ui5_carousel_button_size);border-radius:50%;box-shadow:none;cursor:pointer;outline-offset:.1rem;--_ui5_button_focused_border_radius:50%}.ui5-carousel-navigation-arrows .ui5-carousel-navigation-button{box-shadow:var(--sapContent_Shadow1)}.ui5-carousel-navigation-button--hidden{visibility:hidden;padding:0}.ui5-carousel-navigation{width:9rem;height:2rem;display:flex;justify-content:center;align-items:center}.ui5-carousel-navigation-dot{width:var(--ui5_carousel_inactive_dot_size);height:var(--ui5_carousel_inactive_dot_size);margin:var(--ui5_carousel_inactive_dot_margin);border-radius:50%;background-color:var(--ui5_carousel_inactive_dot_background);border:var(--ui5_carousel_inactive_dot_border);transition:background-color .1s ease-in}.ui5-carousel-navigation-dot[active]{width:.5rem;height:.5rem;margin:0 .25rem;background-color:var(--ui5_carousel_active_dot_background);border:var(--ui5_carousel_active_dot_border)}"};var l=globalThis&&globalThis.__decorate||function(t,e,i,s){var n=arguments.length,u=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(t,e,i,s);else for(var _=t.length-1;_>=0;_--)(f=t[_])&&(u=(n<3?f(u):n>3?f(e,i,u):f(e,i))||u);return n>3&&u&&Object.defineProperty(e,i,u),u},v;let o=v=class extends C{static get pageTypeLimit(){return 9}constructor(){super(),this._scrollEnablement=new M(this),this._scrollEnablement.attachEvent("touchend",e=>{this._updateScrolling(e)}),this._onResizeBound=this._onResize.bind(this),this._resizing=!1,this._lastFocusedElements=[],this._orderOfLastFocusedPages=[]}onBeforeRendering(){this.arrowsPlacement===h.Navigation&&(this._visibleNavigationArrows=!0),this.validateSelectedIndex()}onAfterRendering(){this._scrollEnablement.scrollContainer=this.getDomRef(),this._resizing=!1}onEnterDOM(){I.register(this,this._onResizeBound)}onExitDOM(){I.deregister(this,this._onResizeBound)}validateSelectedIndex(){this.isIndexInRange(this._selectedIndex)||(this._selectedIndex=0)}_onResize(){const e=this.effectiveItemsPerPage;this._resizing=!0,this._width=this.offsetWidth,this._itemWidth=Math.floor(this._width/this.effectiveItemsPerPage),this.effectiveItemsPerPage!==e&&this._selectedIndex>this.pagesCount-1&&(this._selectedIndex=this.pagesCount-1,this.fireEvent("navigate",{selectedIndex:this._selectedIndex}))}_updateScrolling(e){e&&(e.isLeft?this.navigateLeft():e.isRight&&this.navigateRight())}async _onkeydown(e){if(S(e)){this._handleF7Key(e);return}e.target===this.getDomRef()&&(z(e)||D(e)?(this.navigateLeft(),await P(),this.getDomRef().focus()):(O(e)||F(e))&&(this.navigateRight(),await P(),this.getDomRef().focus()))}_onfocusin(e){const i=e.target;if(i===this.getDomRef())return;let s=-1;for(let u=0;u<this.content.length;u++)if(this.content[u].contains(i)){s=u;break}if(s===-1)return;this._lastFocusedElements[s]=i;const n=this._orderOfLastFocusedPages.indexOf(s);n===-1?this._orderOfLastFocusedPages.unshift(s):this._orderOfLastFocusedPages.splice(0,0,this._orderOfLastFocusedPages.splice(n,1)[0])}_onmouseout(){this.arrowsPlacement===h.Content&&(this._visibleNavigationArrows=!1)}_onmouseover(){this.arrowsPlacement===h.Content&&(this._visibleNavigationArrows=!0)}_handleF7Key(e){const i=this._lastFocusedElements[this._getLastFocusedActivePageIndex];e.target===this.getDomRef()&&i?i.focus():this.getDomRef().focus()}get _getLastFocusedActivePageIndex(){for(let e=0;e<this._orderOfLastFocusedPages.length;e++){const i=this._orderOfLastFocusedPages[e];if(this.isItemInViewport(i))return i}return this._selectedIndex}navigateLeft(){this._resizing=!1;const e=this._selectedIndex;this._selectedIndex-1<0?this.cyclic&&(this._selectedIndex=this.pagesCount-1):--this._selectedIndex,e!==this._selectedIndex&&this.fireEvent("navigate",{selectedIndex:this._selectedIndex})}navigateRight(){this._resizing=!1;const e=this._selectedIndex;if(this._selectedIndex+1>this.pagesCount-1)if(this.cyclic)this._selectedIndex=0;else return;else++this._selectedIndex;e!==this._selectedIndex&&this.fireEvent("navigate",{selectedIndex:this._selectedIndex})}_navButtonClick(e){e.target.hasAttribute("arrow-forward")?this.navigateRight():this.navigateLeft(),this.focus()}navigateTo(e){this._resizing=!1,this._selectedIndex=e}get items(){return this.content.map((e,i)=>{const s=this.isItemInViewport(i);return{id:`${this._id}-carousel-item-${i+1}`,item:e,tabIndex:s?"0":"-1",posinset:`${i+1}`,setsize:`${this.content.length}`,styles:{width:`${this._itemWidth||0}px`},classes:s?"":"ui5-carousel-item--hidden"}})}get effectiveItemsPerPage(){return this._width?this._width<=640?this.itemsPerPageS:this._width<=1024?this.itemsPerPageM:this.itemsPerPageL:this.itemsPerPageL}isItemInViewport(e){return e>=this._selectedIndex&&e<=this._selectedIndex+this.effectiveItemsPerPage-1}isIndexInRange(e){return e>=0&&e<=this.pagesCount-1}get renderNavigation(){return this.hasManyPages?this.arrowsPlacement===h.Navigation&&!this.hideNavigationArrows?!0:!this.hidePageIndicator:!1}get hasManyPages(){return this.pagesCount>1}get styles(){const e=this._itemWidth||0;return{content:{transform:`translateX(${this._isRTL?"":"-"}${this._selectedIndex*e}px`}}}get classes(){return{viewport:{"ui5-carousel-viewport":!0,"ui5-carousel-viewport--single":this.pagesCount===1},content:{"ui5-carousel-content":!0,"ui5-carousel-content-no-animation":this.suppressAnimation,"ui5-carousel-content-has-navigation":this.renderNavigation,"ui5-carousel-content-has-navigation-and-buttons":this.renderNavigation&&this.arrowsPlacement===h.Navigation&&!this.hideNavigationArrows},navigation:{"ui5-carousel-navigation-wrapper":!0,"ui5-carousel-navigation-with-buttons":this.renderNavigation&&this.arrowsPlacement===h.Navigation&&!this.hideNavigationArrows},navPrevButton:{"ui5-carousel-navigation-button--hidden":!this.hasPrev},navNextButton:{"ui5-carousel-navigation-button--hidden":!this.hasNext}}}get pagesCount(){const e=this.content.length;return e>this.effectiveItemsPerPage?e-this.effectiveItemsPerPage+1:1}get isPageTypeDots(){return this.pageIndicatorStyle===w.Numeric?!1:this.pagesCount<v.pageTypeLimit}get dots(){const e=[],i=this.pagesCount;for(let s=0;s<i;s++)e.push({active:s===this._selectedIndex,ariaLabel:v.i18nBundle.getText(U,s+1,i)});return e}get showArrows(){const e=this._visibleNavigationArrows&&this.hasManyPages&&V();return{content:!this.hideNavigationArrows&&e&&this.arrowsPlacement===h.Content,navigation:!this.hideNavigationArrows&&e&&this.arrowsPlacement===h.Navigation}}get hasPrev(){return this.cyclic||this._selectedIndex-1>=0}get hasNext(){return this.cyclic||this._selectedIndex+1<=this.pagesCount-1}get suppressAnimation(){return this._resizing||j()===T.None}get _isRTL(){return this.effectiveDir==="rtl"}get selectedIndexToShow(){return this._isRTL?this.pagesCount-(this.pagesCount-this._selectedIndex)+1:this._selectedIndex+1}get ofText(){return v.i18nBundle.getText(W)}get ariaActiveDescendant(){return this.content.length?`${this._id}-carousel-item-${this._selectedIndex+1}`:void 0}get nextPageText(){return v.i18nBundle.getText(X)}get previousPageText(){return v.i18nBundle.getText(H)}get visibleItemsIndices(){const e=[];return this.items.forEach((i,s)=>{this.isItemInViewport(s)&&e.push(s)}),e}static async onDefine(){v.i18nBundle=await k("@ui5/webcomponents")}};l([c({type:Boolean})],o.prototype,"cyclic",void 0);l([c({validator:p,defaultValue:1})],o.prototype,"itemsPerPageS",void 0);l([c({validator:p,defaultValue:1})],o.prototype,"itemsPerPageM",void 0);l([c({validator:p,defaultValue:1})],o.prototype,"itemsPerPageL",void 0);l([c({type:Boolean})],o.prototype,"hideNavigationArrows",void 0);l([c({type:Boolean})],o.prototype,"hidePageIndicator",void 0);l([c({type:w,defaultValue:w.Default})],o.prototype,"pageIndicatorStyle",void 0);l([c({validator:p,defaultValue:0})],o.prototype,"_selectedIndex",void 0);l([c({type:h,defaultValue:h.Content})],o.prototype,"arrowsPlacement",void 0);l([c({validator:p})],o.prototype,"_width",void 0);l([c({validator:p})],o.prototype,"_itemWidth",void 0);l([c({type:Boolean,noAttribute:!0})],o.prototype,"_visibleNavigationArrows",void 0);l([E({default:!0,type:HTMLElement,individualSlots:!0})],o.prototype,"content",void 0);o=v=l([B({tag:"ui5-carousel",languageAware:!0,fastNavigation:!0,renderer:A,styles:oe,template:Q,dependencies:[K,q]}),L("navigate",{detail:{selectedIndex:{type:p}}})],o);o.define();const ne=o,xe=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"}));export{h as C,w as a,ne as b,xe as c};
//# sourceMappingURL=Carousel-8b909f2a.js.map
