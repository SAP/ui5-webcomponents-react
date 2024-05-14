import{U as N}from"./UI5Element-BfPpwo_k.js";import{a as c,l as a,b as v,s as R,p as l,c as L,d as A}from"./withWebComponent-DdLYI_QY.js";import{e as D}from"./event-CegLCnR0.js";import{s as S}from"./slot-Df15G--e.js";import{I as p}from"./Integer-Dh6YzFpK.js";import{J as z,b as E,e as F,c as O,d as V}from"./Keys-BgUkNma0.js";import{b as M}from"./i18nBundle-Dx46P1iz.js";import{S as j}from"./ScrollEnablement-DkcycEUm.js";import{R as P}from"./ResizeHandler-BxP3RYN1.js";import{r as C,e as $,A as W}from"./Boot-BtdVcW0c.js";import{e as U}from"./ManagedStyles-0Bwp9t5R.js";import{g as X}from"./AnimationMode-BRgtrkd7.js";import{g as H}from"./AriaLabelHelper-CzOXVcye.js";import{ay as K,az as J,aA as q,aB as G}from"./i18n-defaults-BFrvdQTW.js";import{o as d}from"./class-map-DwUNpVO-.js";import{s as T}from"./style-map-BhswnH6I.js";import{c as B}from"./Icon-CDo0XdyR.js";import"./slim-arrow-left-0Lcd0cO8.js";import"./slim-arrow-right-BFi0TIdF.js";import{b as Q}from"./Button-C4siPQ_G.js";import Y from"./Label-B0QBRtjK.js";import{s as Z}from"./parameters-bundle.css-DjgCrOcY.js";var b;(function(o){o.Solid="Solid",o.Transparent="Transparent",o.Translucent="Translucent"})(b||(b={}));const _=b;var w;(function(o){o.Solid="Solid",o.None="None"})(w||(w={}));const k=w;var x;(function(o){o.Content="Content",o.Navigation="Navigation"})(x||(x={}));const h=x;var y;(function(o){o.Default="Default",o.Numeric="Numeric"})(y||(y={}));const I=y;function ee(o,e,t){return c`<section class="ui5-carousel-root ui5-carousel-background-${a(this._backgroundDesign)}" tabindex="0" role="listbox" aria-label="${a(this.ariaLabelTxt)}" aria-activedescendant="${a(this.ariaActiveDescendant)}" @focusin="${this._onfocusin}" @keydown=${this._onkeydown} @mouseout="${this._onmouseout}" @mouseover="${this._onmouseover}"><div class="${d(this.classes.viewport)}" part="content"><div class="${d(this.classes.content)}" style="${T(this.styles.content)}">${B(this.items,(i,r)=>i._id||r,(i,r)=>te.call(this,o,e,t,i,r))}</div>${this.showArrows.content?ie.call(this,o,e,t):void 0}</div>${this.renderNavigation?oe.call(this,o,e,t):void 0}</div></section> `}function te(o,e,t,i,r){return c`<div id="${a(i.id)}" class="ui5-carousel-item ${a(i.classes)}" style="${T(i.styles)}" role="option" aria-posinset="${a(i.posinset)}" aria-setsize="${a(i.setsize)}" part="item"><slot name="${a(i.item._individualSlot)}" tabindex="${a(i.tabIndex)}"></slot></div>`}function ie(o,e,t){return t?c`<div class="ui5-carousel-navigation-arrows"><${v("ui5-button",e,t)} arrow-back tooltip="${a(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></${v("ui5-button",e,t)}><${v("ui5-button",e,t)} arrow-forward tooltip="${a(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></${v("ui5-button",e,t)}></div>`:c`<div class="ui5-carousel-navigation-arrows"><ui5-button arrow-back tooltip="${a(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></ui5-button><ui5-button arrow-forward tooltip="${a(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></ui5-button></div>`}function oe(o,e,t){return c`<div class="${d(this.classes.navigation)}">${this.showArrows.navigation?se.call(this,o,e,t):void 0}<div class="ui5-carousel-navigation">${this.hidePageIndicator?void 0:ae.call(this,o,e,t)}</div>${this.showArrows.navigation?ue.call(this,o,e,t):void 0}</div>`}function se(o,e,t){return t?c`<${v("ui5-button",e,t)} arrow-back tooltip="${a(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></${v("ui5-button",e,t)}>`:c`<ui5-button arrow-back tooltip="${a(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></ui5-button>`}function ae(o,e,t){return c`${this.isPageTypeDots?ne.call(this,o,e,t):le.call(this,o,e,t)}`}function ne(o,e,t){return c`${B(this.dots,(i,r)=>i._id||r,(i,r)=>re.call(this,o,e,t,i,r))}`}function re(o,e,t,i,r){return c`<div role="img" aria-label="${a(i.ariaLabel)}" ?active="${i.active}" class="ui5-carousel-navigation-dot"></div>`}function le(o,e,t){return c`<div dir="auto" class="ui5-carousel-navigation-text">${a(this.selectedIndexToShow)}&nbsp;${a(this.ofText)}&nbsp;${a(this.pagesCount)}</div>`}function ue(o,e,t){return t?c`<${v("ui5-button",e,t)} arrow-forward tooltip="${a(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></${v("ui5-button",e,t)}>`:c`<ui5-button arrow-forward tooltip="${a(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></ui5-button>`}C("@ui5/webcomponents-theming","sap_horizon",async()=>R);C("@ui5/webcomponents","sap_horizon",async()=>Z);const ce={packageName:"@ui5/webcomponents",fileName:"themes/Carousel.css.ts",content:`:host(:not([hidden])){display:inline-block}:host{width:100%;min-width:15.5rem;height:100%}.ui5-carousel-root:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor)}.ui5-carousel-root{height:inherit;position:relative;display:flex;flex-direction:column;align-items:center;background:var(--ui5-v1-24-0_carousel_background_color_translucent)}.ui5-carousel-background-solid{background:var(--ui5-v1-24-0_carousel_background_color_solid)}.ui5-carousel-background-transparent{background:transparent}.ui5-carousel-viewport{width:100%;height:inherit;position:relative;display:flex;flex-direction:column;align-items:flex-start;overflow:hidden;padding:1px;flex:1;min-height:0}.ui5-carousel-viewport.ui5-carousel-viewport--single{align-items:center}.ui5-carousel-content{height:100%;position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;transition:transform .5s cubic-bezier(.46,0,.44,1);will-change:transform}.ui5-carousel-content.ui5-carousel-content-no-animation{transition:none}.ui5-carousel-content.ui5-carousel-content-has-navigation{height:calc(100% - 1rem)}.ui5-carousel-item{height:100%;display:flex;align-items:center;justify-content:center;padding:0 .75rem;box-sizing:border-box;transition:opacity .5s linear;will-change:opacity}.ui5-carousel-item--hidden{opacity:0}.ui5-carousel-navigation-arrows{width:100%;padding:0 .5rem;position:absolute;top:calc(50% - var(--ui5-v1-24-0_carousel_button_size) / 2);left:0;display:flex;justify-content:space-between;box-sizing:border-box;pointer-events:none}.ui5-carousel-navigation-arrows>[ui5-button]{pointer-events:all}.ui5-carousel-navigation-wrapper{width:100%;height:2.75rem;display:flex;flex-wrap:nowrap;justify-content:center;align-items:center;box-sizing:border-box}.ui5-carousel-navigation-wrapper-bg-solid{background:var(--sapPageFooter_Background)}.ui5-carousel-navigation-wrapper-bg-translucent{background:var(--ui5-v1-24-0_carousel_background_color_translucent)}.ui5-carousel-navigation-wrapper-bg-transparent{background:transparent}.ui5-carousel-navigation-wrapper-border-solid{border-top:var(--sapElement_BorderWidth) solid var(--sapList_BorderColor)}.ui5-carousel-navigation-wrapper.ui5-carousel-navigation-with-buttons{height:3.5rem}.ui5-carousel-navigation-button{width:var(--ui5-v1-24-0_carousel_button_size);height:var(--ui5-v1-24-0_carousel_button_size);border-radius:50%;box-shadow:none;cursor:pointer;outline-offset:.1rem;--_ui5-v1-24-0_button_focused_border_radius: 50%}.ui5-carousel-navigation-arrows .ui5-carousel-navigation-button{box-shadow:var(--sapContent_Shadow1)}.ui5-carousel-navigation-arrows .ui5-carousel-navigation-button:active{box-shadow:var(--ui5-v1-24-0_carousel_navigation_button_active_box_shadow)}.ui5-carousel-navigation-button--hidden{visibility:hidden;padding:0}.ui5-carousel-navigation{width:9rem;height:2rem;display:flex;justify-content:center;align-items:center}.ui5-carousel-navigation-dot{box-sizing:border-box;width:var(--ui5-v1-24-0_carousel_inactive_dot_size);height:var(--ui5-v1-24-0_carousel_inactive_dot_size);margin:var(--ui5-v1-24-0_carousel_inactive_dot_margin);border-radius:50%;background-color:var(--ui5-v1-24-0_carousel_inactive_dot_background);border:var(--ui5-v1-24-0_carousel_inactive_dot_border);transition:background-color .1s ease-in}.ui5-carousel-navigation-dot[active]{width:.5rem;height:.5rem;margin:0 .25rem;background-color:var(--ui5-v1-24-0_carousel_active_dot_background);border:var(--ui5-v1-24-0_carousel_active_dot_border)}.ui5-carousel-navigation-text{font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;color:var(--sapPageFooter_TextColor);white-space:nowrap;overflow:hidden;text-align:center;text-overflow:ellipsis}
`};var n=function(o,e,t,i){var r=arguments.length,u=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(o,e,t,i);else for(var m=o.length-1;m>=0;m--)(f=o[m])&&(u=(r<3?f(u):r>3?f(e,t,u):f(e,t))||u);return r>3&&u&&Object.defineProperty(e,t,u),u},g;let s=g=class extends N{static get pageTypeLimit(){return 9}constructor(){super(),this._scrollEnablement=new j(this),this._scrollEnablement.attachEvent("touchend",e=>{this._updateScrolling(e)}),this._onResizeBound=this._onResize.bind(this),this._resizing=!1,this._lastFocusedElements=[],this._orderOfLastFocusedPages=[]}onBeforeRendering(){this.arrowsPlacement===h.Navigation&&(this._visibleNavigationArrows=!0),this.validateSelectedIndex()}onAfterRendering(){this._scrollEnablement.scrollContainer=this.getDomRef(),this._resizing=!1}onEnterDOM(){P.register(this,this._onResizeBound)}onExitDOM(){P.deregister(this,this._onResizeBound)}validateSelectedIndex(){this.isIndexInRange(this._selectedIndex)||(this._selectedIndex=0)}_onResize(){const e=this.effectiveItemsPerPage;this._resizing=!0,this._width=this.offsetWidth,this._itemWidth=Math.floor(this._width/this.effectiveItemsPerPage),this.effectiveItemsPerPage!==e&&this._selectedIndex>this.pagesCount-1&&(this._selectedIndex=this.pagesCount-1,this.fireEvent("navigate",{selectedIndex:this._selectedIndex}))}_updateScrolling(e){e&&(e.isLeft?this.navigateLeft():e.isRight&&this.navigateRight())}async _onkeydown(e){if(z(e)){this._handleF7Key(e);return}e.target===this.getDomRef()&&(E(e)||F(e)?(this.navigateLeft(),await $(),this.getDomRef().focus()):(O(e)||V(e))&&(this.navigateRight(),await $(),this.getDomRef().focus()))}_onfocusin(e){const t=e.target;if(t===this.getDomRef())return;let i=-1;for(let u=0;u<this.content.length;u++)if(this.content[u].contains(t)){i=u;break}if(i===-1)return;this._lastFocusedElements[i]=t;const r=this._orderOfLastFocusedPages.indexOf(i);r===-1?this._orderOfLastFocusedPages.unshift(i):this._orderOfLastFocusedPages.splice(0,0,this._orderOfLastFocusedPages.splice(r,1)[0])}_onmouseout(){this.arrowsPlacement===h.Content&&(this._visibleNavigationArrows=!1)}_onmouseover(){this.arrowsPlacement===h.Content&&(this._visibleNavigationArrows=!0)}_handleF7Key(e){const t=this._lastFocusedElements[this._getLastFocusedActivePageIndex];e.target===this.getDomRef()&&t?t.focus():this.getDomRef().focus()}get _backgroundDesign(){return this.backgroundDesign.toLowerCase()}get _getLastFocusedActivePageIndex(){for(let e=0;e<this._orderOfLastFocusedPages.length;e++){const t=this._orderOfLastFocusedPages[e];if(this.isItemInViewport(t))return t}return this._selectedIndex}navigateLeft(){this._resizing=!1;const e=this._selectedIndex;this._selectedIndex-1<0?this.cyclic&&(this._selectedIndex=this.pagesCount-1):--this._selectedIndex,e!==this._selectedIndex&&this.fireEvent("navigate",{selectedIndex:this._selectedIndex})}navigateRight(){this._resizing=!1;const e=this._selectedIndex;if(this._selectedIndex+1>this.pagesCount-1)if(this.cyclic)this._selectedIndex=0;else return;else++this._selectedIndex;e!==this._selectedIndex&&this.fireEvent("navigate",{selectedIndex:this._selectedIndex})}_navButtonClick(e){e.target.hasAttribute("arrow-forward")?this.navigateRight():this.navigateLeft(),this.focus()}navigateTo(e){this._resizing=!1,this._selectedIndex=e}get items(){return this.content.map((e,t)=>{const i=this.isItemInViewport(t);return{id:`${this._id}-carousel-item-${t+1}`,item:e,tabIndex:i?"0":"-1",posinset:`${t+1}`,setsize:`${this.content.length}`,styles:{width:`${this._itemWidth||0}px`},classes:i?"":"ui5-carousel-item--hidden"}})}get effectiveItemsPerPage(){return this._width?this._width<=640?this.itemsPerPageS:this._width<=1024?this.itemsPerPageM:this.itemsPerPageL:this.itemsPerPageL}isItemInViewport(e){return e>=this._selectedIndex&&e<=this._selectedIndex+this.effectiveItemsPerPage-1}isIndexInRange(e){return e>=0&&e<=this.pagesCount-1}get renderNavigation(){return this.hasManyPages?this.arrowsPlacement===h.Navigation&&!this.hideNavigationArrows?!0:!this.hidePageIndicator:!1}get hasManyPages(){return this.pagesCount>1}get styles(){const e=this._itemWidth||0;return{content:{transform:`translateX(${this._isRTL?"":"-"}${this._selectedIndex*e}px`}}}get classes(){return{viewport:{"ui5-carousel-viewport":!0,"ui5-carousel-viewport--single":this.pagesCount===1},content:{"ui5-carousel-content":!0,"ui5-carousel-content-no-animation":this.suppressAnimation,"ui5-carousel-content-has-navigation":this.renderNavigation,"ui5-carousel-content-has-navigation-and-buttons":this.renderNavigation&&this.arrowsPlacement===h.Navigation&&!this.hideNavigationArrows},navigation:{"ui5-carousel-navigation-wrapper":!0,"ui5-carousel-navigation-with-buttons":this.renderNavigation&&this.arrowsPlacement===h.Navigation&&!this.hideNavigationArrows,[`ui5-carousel-navigation-wrapper-bg-${this.pageIndicatorBackgroundDesign.toLowerCase()}`]:!0,[`ui5-carousel-navigation-wrapper-border-${this.pageIndicatorBorderDesign.toLowerCase()}`]:!0},navPrevButton:{"ui5-carousel-navigation-button--hidden":!this.hasPrev},navNextButton:{"ui5-carousel-navigation-button--hidden":!this.hasNext}}}get pagesCount(){const e=this.content.length;return e>this.effectiveItemsPerPage?e-this.effectiveItemsPerPage+1:1}get isPageTypeDots(){return this.pageIndicatorStyle===I.Numeric?!1:this.pagesCount<g.pageTypeLimit}get dots(){const e=[],t=this.pagesCount;for(let i=0;i<t;i++)e.push({active:i===this._selectedIndex,ariaLabel:g.i18nBundle.getText(K,i+1,t)});return e}get showArrows(){const e=this._visibleNavigationArrows&&this.hasManyPages&&U();return{content:!this.hideNavigationArrows&&e&&this.arrowsPlacement===h.Content,navigation:!this.hideNavigationArrows&&e&&this.arrowsPlacement===h.Navigation}}get hasPrev(){return this.cyclic||this._selectedIndex-1>=0}get hasNext(){return this.cyclic||this._selectedIndex+1<=this.pagesCount-1}get suppressAnimation(){return this._resizing||X()===W.None}get _isRTL(){return this.effectiveDir==="rtl"}get selectedIndexToShow(){return this._isRTL?this.pagesCount-(this.pagesCount-this._selectedIndex)+1:this._selectedIndex+1}get ofText(){return g.i18nBundle.getText(J)}get ariaActiveDescendant(){return this.content.length?`${this._id}-carousel-item-${this._selectedIndex+1}`:void 0}get ariaLabelTxt(){return H(this)}get nextPageText(){return g.i18nBundle.getText(q)}get previousPageText(){return g.i18nBundle.getText(G)}get visibleItemsIndices(){const e=[];return this.items.forEach((t,i)=>{this.isItemInViewport(i)&&e.push(i)}),e}static async onDefine(){g.i18nBundle=await M("@ui5/webcomponents")}};n([l()],s.prototype,"accessibleName",void 0);n([l({defaultValue:""})],s.prototype,"accessibleNameRef",void 0);n([l({type:Boolean})],s.prototype,"cyclic",void 0);n([l({validator:p,defaultValue:1})],s.prototype,"itemsPerPageS",void 0);n([l({validator:p,defaultValue:1})],s.prototype,"itemsPerPageM",void 0);n([l({validator:p,defaultValue:1})],s.prototype,"itemsPerPageL",void 0);n([l({type:Boolean})],s.prototype,"hideNavigationArrows",void 0);n([l({type:Boolean})],s.prototype,"hidePageIndicator",void 0);n([l({type:I,defaultValue:I.Default})],s.prototype,"pageIndicatorStyle",void 0);n([l({type:_,defaultValue:_.Translucent})],s.prototype,"backgroundDesign",void 0);n([l({type:_,defaultValue:_.Solid})],s.prototype,"pageIndicatorBackgroundDesign",void 0);n([l({type:k,defaultValue:k.Solid})],s.prototype,"pageIndicatorBorderDesign",void 0);n([l({validator:p,defaultValue:0})],s.prototype,"_selectedIndex",void 0);n([l({type:h,defaultValue:h.Content})],s.prototype,"arrowsPlacement",void 0);n([l({validator:p})],s.prototype,"_width",void 0);n([l({validator:p})],s.prototype,"_itemWidth",void 0);n([l({type:Boolean,noAttribute:!0})],s.prototype,"_visibleNavigationArrows",void 0);n([S({default:!0,type:HTMLElement,individualSlots:!0})],s.prototype,"content",void 0);s=g=n([L({tag:"ui5-carousel",languageAware:!0,fastNavigation:!0,renderer:A,styles:ce,template:ee,dependencies:[Q,Y]}),D("navigate",{detail:{selectedIndex:{type:p}}})],s);s.define();const de=s,Se=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));export{h as C,de as a,Se as b};
