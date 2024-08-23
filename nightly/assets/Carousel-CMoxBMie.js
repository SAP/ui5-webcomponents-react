import{h as d,j as p,f as $,s as y,a as u,m as k,k as C,I as N,p as m,x as T}from"./withWebComponent-6t4MTiZ-.js";import{s as B}from"./event-Dq0fpeHi.js";import{d as L}from"./slot-_4yKMUwC.js";import{f as w,E as A,C as R,D,K as z,c as E}from"./Keys-F_3Gvx0K.js";import{f as S}from"./i18nBundle-BwSTHZvs.js";import{v as F}from"./ScrollEnablement-CP-ekwuR.js";import{f as x}from"./ResizeHandler-BL_t98Y7.js";import{e as O}from"./AnimationMode-CWyS8RQi.js";import{v as W}from"./AriaLabelHelper-C5uDZewF.js";import{ad as M,ae as X,af as j,ag as U}from"./i18n-defaults-sl2p4TZC.js";import{l as o}from"./if-defined-B1auRMLy.js";import{o as h}from"./class-map-D9jLILSY.js";import{s as I}from"./style-map-CAZGB3vF.js";import{c as P}from"./Icon-CX51DRZ7.js";import"./useIsomorphicLayoutEffect-dLBi2t77.js";import"./slim-arrow-left-CBgzXs43.js";import"./slim-arrow-right-BMq-ffCT.js";import{b as V}from"./Button-ein9a_YJ.js";import{L as K}from"./Label-tm0HKFXd.js";import{s as H}from"./parameters-bundle.css-P4kwt3kq.js";var _;(function(s){s.Content="Content",s.Navigation="Navigation"})(_||(_={}));const g=_;var b;(function(s){s.Default="Default",s.Numeric="Numeric"})(b||(b={}));const q=b;function G(s,t,e){return d`<section class="ui5-carousel-root ui5-carousel-background-${o(this._backgroundDesign)}" tabindex="0" role="listbox" aria-label="${o(this.ariaLabelTxt)}" aria-activedescendant="${o(this.ariaActiveDescendant)}" @focusin="${this._onfocusin}" @keydown=${this._onkeydown} @mouseout="${this._onmouseout}" @mouseover="${this._onmouseover}"><div class="${h(this.classes.viewport)}" part="content"><div class="${h(this.classes.content)}" style="${I(this.styles.content)}">${P(this.items,(i,a)=>i._id||a,(i,a)=>J.call(this,s,t,e,i,a))}</div>${this.showArrows.content?Q.call(this,s,t,e):void 0}</div>${this.renderNavigation?Y.call(this,s,t,e):void 0}</div></section> `}function J(s,t,e,i,a){return d`<div id="${o(i.id)}" class="ui5-carousel-item ${o(i.classes)}" style="${I(i.styles)}" role="option" aria-posinset="${o(i.posinset)}" aria-setsize="${o(i.setsize)}" aria-selected = "${o(i.selected)}" part="item"><slot name="${o(i.item._individualSlot)}" tabindex="${o(i.tabIndex)}"></slot></div>`}function Q(s,t,e){return e?d`<div class="ui5-carousel-navigation-arrows"><${p("ui5-button",t,e)} arrow-back tooltip="${o(this.previousPageText)}" class="ui5-carousel-navigation-button ${h(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></${p("ui5-button",t,e)}><${p("ui5-button",t,e)} arrow-forward tooltip="${o(this.nextPageText)}" class="ui5-carousel-navigation-button ${h(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></${p("ui5-button",t,e)}></div>`:d`<div class="ui5-carousel-navigation-arrows"><ui5-button arrow-back tooltip="${o(this.previousPageText)}" class="ui5-carousel-navigation-button ${h(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></ui5-button><ui5-button arrow-forward tooltip="${o(this.nextPageText)}" class="ui5-carousel-navigation-button ${h(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></ui5-button></div>`}function Y(s,t,e){return d`<div class="${h(this.classes.navigation)}">${this.showArrows.navigation?Z.call(this,s,t,e):void 0}<div class="ui5-carousel-navigation">${this.hidePageIndicator?void 0:tt.call(this,s,t,e)}</div>${this.showArrows.navigation?ot.call(this,s,t,e):void 0}</div>`}function Z(s,t,e){return e?d`<${p("ui5-button",t,e)} arrow-back tooltip="${o(this.previousPageText)}" class="ui5-carousel-navigation-button ${h(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></${p("ui5-button",t,e)}>`:d`<ui5-button arrow-back tooltip="${o(this.previousPageText)}" class="ui5-carousel-navigation-button ${h(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></ui5-button>`}function tt(s,t,e){return d`${this.isPageTypeDots?et.call(this,s,t,e):st.call(this,s,t,e)}`}function et(s,t,e){return d`${P(this.dots,(i,a)=>i._id||a,(i,a)=>it.call(this,s,t,e,i,a))}`}function it(s,t,e,i,a){return d`<div role="img" aria-label="${o(i.ariaLabel)}" ?active="${i.active}" class="ui5-carousel-navigation-dot"></div>`}function st(s,t,e){return d`<div dir="auto" class="ui5-carousel-navigation-text">${o(this.selectedIndexToShow)}&nbsp;${o(this.ofText)}&nbsp;${o(this.pagesCount)}</div>`}function ot(s,t,e){return e?d`<${p("ui5-button",t,e)} arrow-forward tooltip="${o(this.nextPageText)}" class="ui5-carousel-navigation-button ${h(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></${p("ui5-button",t,e)}>`:d`<ui5-button arrow-forward tooltip="${o(this.nextPageText)}" class="ui5-carousel-navigation-button ${h(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></ui5-button>`}$("@ui5/webcomponents-theming","sap_horizon",async()=>y);$("@ui5/webcomponents","sap_horizon",async()=>H);const at={packageName:"@ui5/webcomponents",fileName:"themes/Carousel.css.ts",content:`:host(:not([hidden])){display:inline-block}:host{width:100%;min-width:15.5rem;height:100%}:host([desktop]) .ui5-carousel-root:focus,.ui5-carousel-root:focus-visible{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor)}.ui5-carousel-root{height:inherit;position:relative;display:flex;flex-direction:column;align-items:center;background:var(--ui5-v2-1-2_carousel_background_color_translucent)}.ui5-carousel-background-solid{background:var(--ui5-v2-1-2_carousel_background_color_solid)}.ui5-carousel-background-transparent{background:transparent}.ui5-carousel-viewport{width:100%;height:inherit;position:relative;display:flex;flex-direction:column;align-items:flex-start;overflow:hidden;padding:1px;flex:1;min-height:0}.ui5-carousel-viewport.ui5-carousel-viewport--single{align-items:center}.ui5-carousel-content{height:100%;position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;transition:transform .5s cubic-bezier(.46,0,.44,1);will-change:transform}.ui5-carousel-content.ui5-carousel-content-no-animation{transition:none}.ui5-carousel-content.ui5-carousel-content-has-navigation{height:calc(100% - 1rem)}.ui5-carousel-item{height:100%;display:flex;align-items:center;justify-content:center;padding:0 .75rem;box-sizing:border-box;transition:opacity .5s linear;will-change:opacity}.ui5-carousel-item--hidden{opacity:0}.ui5-carousel-navigation-arrows{width:100%;padding:0 .5rem;position:absolute;top:calc(50% - var(--ui5-v2-1-2_carousel_button_size) / 2);left:0;display:flex;justify-content:space-between;box-sizing:border-box;pointer-events:none}.ui5-carousel-navigation-arrows>[ui5-button]{pointer-events:all}.ui5-carousel-navigation-wrapper{width:100%;height:2.75rem;display:flex;flex-wrap:nowrap;justify-content:center;align-items:center;box-sizing:border-box}.ui5-carousel-navigation-wrapper-bg-solid{background:var(--sapPageFooter_Background)}.ui5-carousel-navigation-wrapper-bg-translucent{background:var(--ui5-v2-1-2_carousel_background_color_translucent)}.ui5-carousel-navigation-wrapper-bg-transparent{background:transparent}.ui5-carousel-navigation-wrapper-border-solid{border-top:var(--sapElement_BorderWidth) solid var(--sapList_BorderColor)}.ui5-carousel-navigation-wrapper.ui5-carousel-navigation-with-buttons{height:3.5rem}.ui5-carousel-navigation-button{width:var(--ui5-v2-1-2_carousel_button_size);height:var(--ui5-v2-1-2_carousel_button_size);border-radius:50%;box-shadow:none;cursor:pointer;outline-offset:.1rem;--_ui5-v2-1-2_button_focused_border_radius: 50%}.ui5-carousel-navigation-arrows .ui5-carousel-navigation-button{box-shadow:var(--sapContent_Shadow1)}.ui5-carousel-navigation-arrows .ui5-carousel-navigation-button:active{box-shadow:var(--ui5-v2-1-2_carousel_navigation_button_active_box_shadow)}.ui5-carousel-navigation-button--hidden{visibility:hidden;padding:0}.ui5-carousel-navigation{width:9rem;height:2rem;display:flex;justify-content:center;align-items:center}.ui5-carousel-navigation-dot{box-sizing:border-box;width:var(--ui5-v2-1-2_carousel_inactive_dot_size);height:var(--ui5-v2-1-2_carousel_inactive_dot_size);margin:var(--ui5-v2-1-2_carousel_inactive_dot_margin);border-radius:50%;background-color:var(--ui5-v2-1-2_carousel_inactive_dot_background);border:var(--ui5-v2-1-2_carousel_inactive_dot_border);transition:background-color .1s ease-in}.ui5-carousel-navigation-dot[active]{width:.5rem;height:.5rem;margin:0 .25rem;background-color:var(--ui5-v2-1-2_carousel_active_dot_background);border:var(--ui5-v2-1-2_carousel_active_dot_border)}.ui5-carousel-navigation-text{font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;color:var(--sapPageFooter_TextColor);white-space:nowrap;overflow:hidden;text-align:center;text-overflow:ellipsis}
`};var r=function(s,t,e,i){var a=arguments.length,c=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,t,e,i);else for(var f=s.length-1;f>=0;f--)(l=s[f])&&(c=(a<3?l(c):a>3?l(t,e,c):l(t,e))||c);return a>3&&c&&Object.defineProperty(t,e,c),c},v;let n=v=class extends N{static get pageTypeLimit(){return 9}constructor(){super(),this.cyclic=!1,this.itemsPerPage="S1 M1 L1 XL1",this.hideNavigationArrows=!1,this.hidePageIndicator=!1,this.pageIndicatorType="Default",this.backgroundDesign="Translucent",this.pageIndicatorBackgroundDesign="Solid",this.pageIndicatorBorderDesign="Solid",this._selectedIndex=0,this.arrowsPlacement="Content",this._visibleNavigationArrows=!1,this._scrollEnablement=new F(this),this._scrollEnablement.attachEvent("touchend",t=>{this._updateScrolling(t)}),this._onResizeBound=this._onResize.bind(this),this._resizing=!1,this._lastFocusedElements=[],this._orderOfLastFocusedPages=[]}onBeforeRendering(){this.arrowsPlacement===g.Navigation&&(this._visibleNavigationArrows=!0),this.validateSelectedIndex()}onAfterRendering(){this._scrollEnablement.scrollContainer=this.getDomRef(),this._resizing=!1}onEnterDOM(){x.register(this,this._onResizeBound),w()&&this.setAttribute("desktop","")}onExitDOM(){x.deregister(this,this._onResizeBound)}validateSelectedIndex(){this.isIndexInRange(this._selectedIndex)||(this._selectedIndex=0)}_onResize(){const t=this.effectiveItemsPerPage;this._resizing=!0,this._width=this.offsetWidth,this._itemWidth=Math.floor(this._width/this.effectiveItemsPerPage),this.effectiveItemsPerPage!==t&&this._selectedIndex>this.pagesCount-1&&(this._selectedIndex=this.pagesCount-1,this.fireEvent("navigate",{selectedIndex:this._selectedIndex}))}_updateScrolling(t){t&&(t.isLeft?this.navigateLeft():t.isRight&&this.navigateRight())}async _onkeydown(t){if(A(t)){this._handleF7Key(t);return}t.target===this.getDomRef()&&(R(t)||D(t)?(this.navigateLeft(),await m(),this.getDomRef().focus()):(z(t)||E(t))&&(this.navigateRight(),await m(),this.getDomRef().focus()))}_onfocusin(t){const e=t.target;if(e===this.getDomRef())return;let i=-1;for(let c=0;c<this.content.length;c++)if(this.content[c].contains(e)){i=c;break}if(i===-1)return;this._lastFocusedElements[i]=e;const a=this._orderOfLastFocusedPages.indexOf(i);a===-1?this._orderOfLastFocusedPages.unshift(i):this._orderOfLastFocusedPages.splice(0,0,this._orderOfLastFocusedPages.splice(a,1)[0])}_onmouseout(){this.arrowsPlacement===g.Content&&(this._visibleNavigationArrows=!1)}_onmouseover(){this.arrowsPlacement===g.Content&&(this._visibleNavigationArrows=!0)}_handleF7Key(t){const e=this._lastFocusedElements[this._getLastFocusedActivePageIndex];t.target===this.getDomRef()&&e?e.focus():this.getDomRef().focus()}get _backgroundDesign(){return this.backgroundDesign.toLowerCase()}get _getLastFocusedActivePageIndex(){for(let t=0;t<this._orderOfLastFocusedPages.length;t++){const e=this._orderOfLastFocusedPages[t];if(this.isItemInViewport(e))return e}return this._selectedIndex}navigateLeft(){this._resizing=!1;const t=this._selectedIndex;this._selectedIndex-1<0?this.cyclic&&(this._selectedIndex=this.pagesCount-1):--this._selectedIndex,t!==this._selectedIndex&&this.fireEvent("navigate",{selectedIndex:this._selectedIndex})}navigateRight(){this._resizing=!1;const t=this._selectedIndex;if(this._selectedIndex+1>this.pagesCount-1)if(this.cyclic)this._selectedIndex=0;else return;else++this._selectedIndex;t!==this._selectedIndex&&this.fireEvent("navigate",{selectedIndex:this._selectedIndex})}_navButtonClick(t){t.target.hasAttribute("arrow-forward")?this.navigateRight():this.navigateLeft(),this.focus()}navigateTo(t){this._resizing=!1,this._selectedIndex=t}get items(){return this.content.map((t,e)=>{const i=this.isItemInViewport(e);return{id:`${this._id}-carousel-item-${e+1}`,item:t,tabIndex:i?"0":"-1",posinset:`${e+1}`,setsize:`${this.content.length}`,styles:{width:`${this._itemWidth||0}px`},classes:i?"":"ui5-carousel-item--hidden",selected:i}})}get effectiveItemsPerPage(){const t=this.itemsPerPage.split(" ");let e=1,i=1,a=1,c=1;return t.forEach(l=>{l.startsWith("S")?e=Number(l.slice(1))||1:l.startsWith("M")?i=Number(l.slice(1))||1:l.startsWith("L")?a=Number(l.slice(1))||1:l.startsWith("XL")&&(c=Number(l.slice(2))||1)}),this._width?this._width<600?e:this._width>=600&&this._width<1024?i:this._width>=1024&&this._width<1440?a:c:a}isItemInViewport(t){return t>=this._selectedIndex&&t<=this._selectedIndex+this.effectiveItemsPerPage-1}isIndexInRange(t){return t>=0&&t<=this.pagesCount-1}get renderNavigation(){return this.hasManyPages?this.arrowsPlacement===g.Navigation&&!this.hideNavigationArrows?!0:!this.hidePageIndicator:!1}get hasManyPages(){return this.pagesCount>1}get styles(){const t=this._itemWidth||0;return{content:{transform:`translateX(${this._isRTL?"":"-"}${this._selectedIndex*t}px`}}}get classes(){return{viewport:{"ui5-carousel-viewport":!0,"ui5-carousel-viewport--single":this.pagesCount===1},content:{"ui5-carousel-content":!0,"ui5-carousel-content-no-animation":this.suppressAnimation,"ui5-carousel-content-has-navigation":this.renderNavigation,"ui5-carousel-content-has-navigation-and-buttons":this.renderNavigation&&this.arrowsPlacement===g.Navigation&&!this.hideNavigationArrows},navigation:{"ui5-carousel-navigation-wrapper":!0,"ui5-carousel-navigation-with-buttons":this.renderNavigation&&this.arrowsPlacement===g.Navigation&&!this.hideNavigationArrows,[`ui5-carousel-navigation-wrapper-bg-${this.pageIndicatorBackgroundDesign.toLowerCase()}`]:!0,[`ui5-carousel-navigation-wrapper-border-${this.pageIndicatorBorderDesign.toLowerCase()}`]:!0},navPrevButton:{"ui5-carousel-navigation-button--hidden":!this.hasPrev},navNextButton:{"ui5-carousel-navigation-button--hidden":!this.hasNext}}}get pagesCount(){const t=this.content.length;return t>this.effectiveItemsPerPage?t-this.effectiveItemsPerPage+1:1}get isPageTypeDots(){return this.pageIndicatorType===q.Numeric?!1:this.pagesCount<v.pageTypeLimit}get dots(){const t=[],e=this.pagesCount;for(let i=0;i<e;i++)t.push({active:i===this._selectedIndex,ariaLabel:v.i18nBundle.getText(M,i+1,e)});return t}get showArrows(){const t=this._visibleNavigationArrows&&this.hasManyPages&&w();return{content:!this.hideNavigationArrows&&t&&this.arrowsPlacement===g.Content,navigation:!this.hideNavigationArrows&&t&&this.arrowsPlacement===g.Navigation}}get hasPrev(){return this.cyclic||this._selectedIndex-1>=0}get hasNext(){return this.cyclic||this._selectedIndex+1<=this.pagesCount-1}get suppressAnimation(){return this._resizing||O()===T.None}get _isRTL(){return this.effectiveDir==="rtl"}get selectedIndexToShow(){return this._isRTL?this.pagesCount-(this.pagesCount-this._selectedIndex)+1:this._selectedIndex+1}get ofText(){return v.i18nBundle.getText(X)}get ariaActiveDescendant(){return this.content.length?`${this._id}-carousel-item-${this._selectedIndex+1}`:void 0}get ariaLabelTxt(){return W(this)}get nextPageText(){return v.i18nBundle.getText(j)}get previousPageText(){return v.i18nBundle.getText(U)}get visibleItemsIndices(){const t=[];return this.items.forEach((e,i)=>{this.isItemInViewport(i)&&t.push(i)}),t}static async onDefine(){v.i18nBundle=await S("@ui5/webcomponents")}};r([u()],n.prototype,"accessibleName",void 0);r([u()],n.prototype,"accessibleNameRef",void 0);r([u({type:Boolean})],n.prototype,"cyclic",void 0);r([u()],n.prototype,"itemsPerPage",void 0);r([u({type:Boolean})],n.prototype,"hideNavigationArrows",void 0);r([u({type:Boolean})],n.prototype,"hidePageIndicator",void 0);r([u()],n.prototype,"pageIndicatorType",void 0);r([u()],n.prototype,"backgroundDesign",void 0);r([u()],n.prototype,"pageIndicatorBackgroundDesign",void 0);r([u()],n.prototype,"pageIndicatorBorderDesign",void 0);r([u({type:Number})],n.prototype,"_selectedIndex",void 0);r([u()],n.prototype,"arrowsPlacement",void 0);r([u({type:Number})],n.prototype,"_width",void 0);r([u({type:Number})],n.prototype,"_itemWidth",void 0);r([u({type:Boolean,noAttribute:!0})],n.prototype,"_visibleNavigationArrows",void 0);r([L({default:!0,type:HTMLElement,individualSlots:!0})],n.prototype,"content",void 0);n=v=r([k({tag:"ui5-carousel",languageAware:!0,fastNavigation:!0,renderer:C,styles:at,template:G,dependencies:[V,K]}),B("navigate",{detail:{selectedIndex:{type:Number}}})],n);n.define();const Ct=n;export{g as C,Ct as a};
