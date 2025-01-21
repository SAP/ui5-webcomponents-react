import{j as n}from"./jsx-runtime-CLpGMVip.js";import{r as Z}from"./index-D23YZj_x.js";import{p as M,d as V,s as r,m as U,I as X,k as f,w as J}from"./withWebComponent-DfVDXLfc.js";import{m as d,l as s,s as ee,f as y,a as K}from"./LitRenderer-Zl5KMCf2.js";import{i as S,b as te}from"./Keys-Df3IBHp2.js";import{I as ie}from"./Icon-DVzRT9Bg.js";import"./background-ChgxJ2Sc.js";import{l as H}from"./event-strict-DgQLNDEV.js";import{d as $}from"./slot-_4yKMUwC.js";import{d as Q}from"./parameters-bundle.css-lWn4zk3B.js";import{c as Y}from"./useIsomorphicLayoutEffect-Clyi7m9u.js";import{T as ae}from"./index-Co5WPAlz.js";import{f as le,r as ne}from"./ItemNavigation-nUPkWObb.js";import{f as D}from"./ResizeHandler-DlOwLzX7.js";import{i as G}from"./MediaRange-Bnzt26Xb.js";import{a as oe}from"./Button-Bn6Q5CAy.js";import{a as re}from"./Carousel-1z1YX9s9.js";import{c as C}from"./repeat-DTyY2neX.js";M("@ui5/webcomponents-theming","sap_horizon",async()=>V);M("@ui5/webcomponents-fiori","sap_horizon",async()=>Q);const se=`:host{width:100%;height:100%;position:relative;display:flex}:host([_square]){height:0;padding-top:100%}.ui5-media-gallery-item-root{width:100%;height:100%;display:flex}:host([_square]) .ui5-media-gallery-item-root{position:absolute;top:0;left:0}:host([layout="Wide"]) .ui5-media-gallery-item-root{align-items:center}:host([_thumbnail-design]) .ui5-media-gallery-item-root{border:var(--_ui5-v2-6-2_media_gallery_thumbnail_border);box-sizing:border-box}:host([_interactive]) .ui5-media-gallery-item-root{cursor:pointer}:host([_thumbnail-design]:not([disabled]):not([selected])) .ui5-media-gallery-item-root:hover{border-color:var(--sapTile_Interactive_BorderColor);background:var(--sapList_Hover_Background)}.ui5-media-gallery-item-root:focus{outline:var(--_ui5-v2-6-2_media_gallery_thumbnail_focus_outline);outline-offset:-1px}:host([_thumbnail-design][selected]) .ui5-media-gallery-item-root{border:var(--_ui5-v2-6-2_media_gallery_thumbnail_selected_border)}:host([_thumbnail-design][selected]) .ui5-media-gallery-item-root:focus{outline-offset:-3px}.ui5-media-gallery-item-wrapper{width:100%;height:100%;display:flex;justify-content:center}:host([layout="Wide"]) .ui5-media-gallery-item-wrapper{z-index:1}:host([layout="Wide"]:not([_thumbnail-design])) .ui5-media-gallery-item-wrapper{height:56.25%}[ui5-icon]{position:absolute;width:4.5rem;height:4.55rem;align-self:center}.ui5-media-gallery-item-mask-layer{position:absolute;inset:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(:not([_thumbnail-design])) .ui5-media-gallery-item-mask-layer{z-index:2;background:var(--sapBaseColor);mix-blend-mode:multiply;opacity:.2;box-shadow:var(--_ui5-v2-6-2_media_gallery_item_overlay_box_shadow);pointer-events:none}:host(:not([_thumbnail-design])[layout="Wide"]) .ui5-media-gallery-item-mask-layer{z-index:0}:host([disabled]) .ui5-media-gallery-item-mask-layer{z-index:2;background:var(--sapContent_ImagePlaceholderBackground);opacity:.5;cursor:default}::slotted([slot^=thumbnail]),:host([layout="Wide"]) ::slotted(*){width:100%;height:100%;object-fit:cover}::slotted(*){max-width:100%;max-height:100%;object-fit:contain;margin:auto}
`;function ue(a,e,t){return d`<div class="ui5-media-gallery-item-root" tabindex="${s(this.effectiveTabIndex)}" data-sap-focus-ref @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" role="${s(this._role)}"><div class="ui5-media-gallery-item-mask-layer"></div><div class="ui5-media-gallery-item-wrapper" style="${ee(this.styles.wrapper)}">${this._showBackgroundIcon?de.call(this,a,e,t):void 0}${this._useContent?me.call(this,a,e,t):void 0}${this._useThumbnail?he.call(this,a,e,t):void 0}</div></div>`}function de(a,e,t){return t?d`<${y("ui5-icon",e,t)} name="background"></${y("ui5-icon",e,t)}>`:d`<ui5-icon name="background"></ui5-icon>`}function me(a,e,t){return d`<slot></slot>`}function he(a,e,t){return d`<slot name="thumbnail"></slot>`}function ce(){return ue.call(this,this,this.constructor.tagsToScope,Y())}var m=function(a,e,t,i){var l=arguments.length,o=l<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,g;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(a,e,t,i);else for(var _=a.length-1;_>=0;_--)(g=a[_])&&(o=(l<3?g(o):l>3?g(e,t,o):g(e,t))||o);return l>3&&o&&Object.defineProperty(e,t,o),o};let u=class extends X{constructor(){super(),this.selected=!1,this.disabled=!1,this.layout="Square",this._interactive=!1,this._square=!1,this._contentImageNotFound=!1,this._thumbnailNotFound=!1,this._thumbnailDesign=!1,this._monitoredContent=null,this._monitoredThumbnail=null}onEnterDOM(){this._thumbnailDesign=!f(),this._interactive=!f(),this._square=!0}get _thumbnail(){return this.thumbnail.length?this.thumbnail[0]:null}get displayedContent(){return this.content.length?this.content[0]:null}get _isThubmnailAvailable(){return this._thumbnail&&!this._thumbnailNotFound}get _isContentAvailable(){return this.displayedContent&&!this._contentImageNotFound}get _useThumbnail(){return this._thumbnailDesign&&this._isThubmnailAvailable}get _useContent(){return!this._useThumbnail&&this._isContentAvailable}get effectiveTabIndex(){return this.disabled?void 0:this.forcedTabIndex}get _showBackgroundIcon(){return this._thumbnailNotFound||this._contentImageNotFound}get styles(){return{wrapper:{height:this.contentHeight}}}get _role(){return this._interactive?"button":void 0}onBeforeRendering(){this._monitorLoadingError()}_monitorLoadingError(){let e,t;this._thumbnailDesign&&this.thumbnail.length&&this._monitoredThumbnail!==this._thumbnail&&(this._thumbnailNotFound=!1,e=this._updateThumbnailLoaded.bind(this),t=this._attachListeners(this._thumbnail,e),t&&(this._monitoredThumbnail=this._thumbnail)),!this._useThumbnail&&this.content.length&&this._monitoredContent!==this.displayedContent&&(this._contentImageNotFound=!1,e=this._updateContentImageLoaded.bind(this),t=this._attachListeners(this.displayedContent,e),t&&(this._monitoredContent=this.displayedContent))}_attachListeners(e,t){const i=e.tagName==="IMG",l=i?e:e.querySelector("img");if(l)return t(l),l.addEventListener("error",()=>{this.contains(l)&&t(l)}),l.addEventListener("load",()=>{this.contains(l)&&t(l)}),!0}_updateContentImageLoaded(e){this._contentImageNotFound=e.naturalHeight===0&&e.naturalWidth===0}_updateThumbnailLoaded(e){this._thumbnailNotFound=e.naturalHeight===0&&e.naturalWidth===0}_onkeydown(e){S(e)&&e.preventDefault(),te(e)&&this._fireItemClick()}_onkeyup(e){S(e)&&this._fireItemClick()}_fireItemClick(){this.fireDecoratorEvent("click",{item:this})}};m([r({type:Boolean})],u.prototype,"selected",void 0);m([r({type:Boolean})],u.prototype,"disabled",void 0);m([r()],u.prototype,"layout",void 0);m([r({type:Boolean})],u.prototype,"_interactive",void 0);m([r({type:Boolean})],u.prototype,"_square",void 0);m([r({type:Boolean})],u.prototype,"_contentImageNotFound",void 0);m([r({type:Boolean})],u.prototype,"_thumbnailNotFound",void 0);m([r({type:Boolean})],u.prototype,"_thumbnailDesign",void 0);m([r()],u.prototype,"forcedTabIndex",void 0);m([r({noAttribute:!0})],u.prototype,"contentHeight",void 0);m([$({type:HTMLElement,default:!0})],u.prototype,"content",void 0);m([$()],u.prototype,"thumbnail",void 0);u=m([U({tag:"ui5-media-gallery-item",renderer:K,styles:se,template:ce,dependencies:[ie]}),H("click",{bubbles:!0})],u);u.define();const pe=u;var A;(function(a){a.Square="Square",a.Wide="Wide"})(A||(A={}));const ge=A;var j;(function(a){a.Auto="Auto",a.Vertical="Vertical",a.Horizontal="Horizontal"})(j||(j={}));const b=j;M("@ui5/webcomponents-theming","sap_horizon",async()=>V);M("@ui5/webcomponents-fiori","sap_horizon",async()=>Q);const fe=`:host{height:100%}:host,.ui5-media-gallery-display-wrapper,.ui5-media-gallery-display{width:100%}.ui5-media-gallery-root{width:inherit;height:inherit;background:var(--sapBaseColor);display:flex;flex-direction:column;position:relative}:host([menu-vertical-align="Top"]) .ui5-media-gallery-root{flex-direction:column-reverse}:host([effective-layout="Horizontal"]) .ui5-media-gallery-root{flex-direction:row-reverse}:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-root{flex-direction:row}.ui5-media-gallery-display-wrapper{display:flex;justify-content:center;position:relative}:host([effective-layout="Horizontal"][show-all-thumbnails]) .ui5-media-gallery-display-wrapper{flex-grow:3;flex-basis:0}.ui5-media-gallery-display{position:relative;margin:1rem;display:flex;justify-content:center}.ui5-media-gallery-display [ui5-media-gallery-item]{z-index:1}[ui5-carousel]{width:calc(100% - 2rem)}[ui5-carousel]::part(item){padding:0;overflow:hidden}.ui5-media-gallery-thumbnails-wrapper{margin-block:1rem 0}:host([menu-vertical-align="Top"]) .ui5-media-gallery-thumbnails-wrapper{margin-block:0 1rem}:host([effective-layout="Horizontal"]) .ui5-media-gallery-thumbnails-wrapper{margin-inline:0 1rem}:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-thumbnails-wrapper{margin-inline:1rem 0}:host([show-all-thumbnails]) .ui5-media-gallery-thumbnails-wrapper{overflow-x:auto;overflow-y:hidden}:host([effective-layout="Horizontal"][show-all-thumbnails]) .ui5-media-gallery-thumbnails-wrapper{overflow-y:auto;overflow-x:hidden;flex-grow:1;flex-basis:0}.ui5-media-gallery-thumbnails-wrapper ul{height:5rem;display:flex;flex-wrap:nowrap;padding-left:0;margin-top:0;margin-bottom:0;list-style-type:none;padding-inline-start:0}:host([effective-layout="Horizontal"]) ul{width:5rem;flex-wrap:wrap}:host([effective-layout="Horizontal"][show-all-thumbnails][media-range="M"]) ul{width:10rem}:host([effective-layout="Horizontal"][show-all-thumbnails][media-range="L"]) ul{width:15rem}:host([effective-layout="Horizontal"][show-all-thumbnails][media-range="XL"]) ul{width:20rem}.ui5-media-gallery-thumbnail,.ui5-media-gallery-overflow [ui5-button]{width:4rem;height:4rem;flex-shrink:0}.ui5-media-gallery-overflow [ui5-button]{background:var(--_ui5-v2-6-2_media_gallery_overflow_btn_background);color:var(--_ui5-v2-6-2_media_gallery_overflow_btn_color);border:var(--_ui5-v2-6-2_media_gallery_overflow_btn_border)}.ui5-media-gallery-thumbnail,.ui5-media-gallery-overflow{margin:0 0 0 1rem}:host([menu-vertical-align="Top"]) .ui5-media-gallery-thumbnail,:host([menu-vertical-align="Top"]) .ui5-media-gallery-overflow{margin:1rem 0 0 1rem}:host([effective-layout="Horizontal"]) .ui5-media-gallery-thumbnail,:host([effective-layout="Horizontal"]) .ui5-media-gallery-overflow{margin:1rem 0 0 1rem}:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-thumbnail,:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-overflow{margin:1rem 1rem 0 0}
`;function ye(a,e,t){return d`<div class="ui5-media-gallery-root"><div class="ui5-media-gallery-display-wrapper"><div class="ui5-media-gallery-display" @click="${this._onDisplayAreaClick}">${this._isPhonePlatform?_e.call(this,a,e,t):be.call(this,a,e,t)}</div></div>${this._showThumbnails?ve.call(this,a,e,t):void 0}</div>`}function _e(a,e,t){return t?d`<${y("ui5-carousel",e,t)} @ui5-navigate="${s(this._onCarouselNavigate)}" hide-navigation-arrows>${C(this._selectableItems,(i,l)=>i._id||l,(i,l)=>L.call(this,a,e,t,i,l))}</${y("ui5-carousel",e,t)}>`:d`<ui5-carousel @ui5-navigate="${s(this._onCarouselNavigate)}" hide-navigation-arrows>${C(this._selectableItems,(i,l)=>i._id||l,(i,l)=>L.call(this,a,e,t,i,l))}</ui5-carousel>`}function L(a,e,t,i,l){return d`<slot name="${s(i._individualSlot)}"></slot>`}function be(a,e,t){return t?d`<${y("ui5-media-gallery-item",e,t)} ?_interactive="${s(this.interactiveDisplayArea)}" ?_square="${s(this._shouldHaveSquareDisplay)}" _tab-index="${s(this._mainItemTabIndex)}"></${y("ui5-media-gallery-item",e,t)}>`:d`<ui5-media-gallery-item ?_interactive="${s(this.interactiveDisplayArea)}" ?_square="${s(this._shouldHaveSquareDisplay)}" _tab-index="${s(this._mainItemTabIndex)}"></ui5-media-gallery-item>`}function ve(a,e,t){return d`<div class="ui5-media-gallery-thumbnails-wrapper"><ul>${C(this._visibleItems,(i,l)=>i._id||l,(i,l)=>we.call(this,a,e,t,i,l))}${this._showOverflowBtn?Ie.call(this,a,e,t):void 0}</ul></div>`}function we(a,e,t,i,l){return d`<li id="${s(i.id)}" class="ui5-media-gallery-thumbnail" role="option" @click="${this._onThumbnailClick}" @ui5-click="${s(this._onThumbnailClick)}"><slot name="${s(i._individualSlot)}"></slot></li>`}function Ie(a,e,t){return t?d`<li class="ui5-media-gallery-overflow"><${y("ui5-button",e,t)} @click="${this._onOverflowBtnClick}">+${s(this._overflowSize)}</${y("ui5-button",e,t)}></li>`:d`<li class="ui5-media-gallery-overflow"><ui5-button @click="${this._onOverflowBtnClick}">+${s(this._overflowSize)}</ui5-button></li>`}function Te(){return ye.call(this,this,this.constructor.tagsToScope,Y())}var p=function(a,e,t,i){var l=arguments.length,o=l<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,g;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(a,e,t,i);else for(var _=a.length-1;_>=0;_--)(g=a[_])&&(o=(l<3?g(o):l>3?g(e,t,o):g(e,t))||o);return l>3&&o&&Object.defineProperty(e,t,o),o},v;const xe={S:1,M:2,L:3,XL:4};let h=v=class extends X{constructor(){super(),this.showAllThumbnails=!1,this.interactiveDisplayArea=!1,this.layout="Auto",this.menuHorizontalAlign="Left",this.menuVerticalAlign="Bottom",this.effectiveLayout="Vertical",this.mediaRange="S",this._overflowSize=0,this._onResize=this._updateLayout.bind(this),this._itemNavigation=new le(this,{navigationMode:ne.Auto,getItemsCallback:()=>this._getFocusableItems()})}onEnterDOM(){!f()&&D.register(this,this._onResize)}onExitDOM(){!f()&&D.deregister(this,this._onResize)}onAfterRendering(){this._updateLayout(),this._updateSelection()}_updateSelection(){if(this.items.length===0){if(this._selectedItem=void 0,this._mainItem){const t=this._mainItem.displayedContent;t==null||t.remove()}return}let e=this.items.find(t=>t.selected);(!e||!this._isSelectableItem(e))&&(e=this._findSelectableItem()),e&&e!==this._selectedItem&&this._selectItem(e)}_isSelectableItem(e){return!e.disabled&&!e.hidden}_findSelectableItem(){return this.items.find(this._isSelectableItem)}_updateMediaRange(e){this.mediaRange=G.getCurrentRange(G.RANGESETS.RANGE_4STEPS,e)}_updateLayout(){const e=this.getDomRef(),t=e.offsetHeight,i=e.offsetWidth;!i||!t||f()||(this._updateMediaRange(i),this.effectiveLayout=this._infereffectiveLayout(),this._overflowSize=this._calculateOverflowSize(i,t),this._toggleDisplaySquareSize(this._shouldHaveSquareDisplay),this._toggleMainItem9x16size(this._shouldHaveWideDisplay))}_calculateOverflowSize(e,t){const i=v.THUMBNAIL_MARGIN;let l,o;return this.showAllThumbnails?0:(this.effectiveLayout===b.Horizontal?(l=t-i,o=this.showAllThumbnails?xe[this.mediaRange]:1):(l=e-i*2,o=1),this._getOverflowSize(l,o))}_toggleDisplaySquareSize(e){if(this._display.style.width="",e){const t=v.THUMBNAIL_MARGIN,i=this._display.offsetWidth;let l=this.getDomRef().offsetHeight-2*t;this.effectiveLayout===b.Vertical&&(l-=v.THUMBNAIL_HEIGHT+t),i>l&&(this._display.style.width=`${l}px`)}}_toggleMainItem9x16size(e){if(!this._mainItem)return;const t=this._mainItem.offsetWidth,i=e?`${t/16*9}px`:"";this._mainItem.contentHeight=i}_infereffectiveLayout(){return this.layout===b.Auto?this._isPhoneSize?b.Vertical:b.Horizontal:this.layout}_getMaxAllowedThumbnailsInColumn(e){let t=Math.floor(e/v.THUMBNAIL_HEIGHT);return this.showAllThumbnails||(t=Math.min(t,5)),t}_getOverflowSize(e,t){const i=this._getMaxAllowedThumbnailsInColumn(e),l=Math.max(0,this.items.length-i*t);return l===this.items.length||l===0?l:l+1}_getFocusableItems(){if(!this._showThumbnails)return[];const e=this._visibleItems.filter(t=>!t.disabled);return this._overflowBtn&&e.push(this._overflowBtn),e}_selectItem(e,t=!1){e!==this._selectedItem&&(this._selectedItem=e,this._updateSelectedFlag(e),this._itemNavigation.setCurrentItem(e),t&&this.fireDecoratorEvent("selection-change",{item:e}),f()?this._selectItemOnPhone(e):this._displayContent(e))}_updateSelectedFlag(e){this.items.forEach(t=>{t.selected=!1}),e.selected=!0}_selectItemOnPhone(e){const t=this._selectableItems.indexOf(e),i=this._carousel;i&&i.navigateTo(t)}_displayContent(e){let t;const i=this._mainItem,l=i.displayedContent,o=e.displayedContent;i._thumbnailDesign=!1,l&&l.remove(),o&&(t=o.cloneNode(!0),i.layout=e.layout,i.appendChild(t))}_onThumbnailClick(e){const i=e.target.closest("[ui5-media-gallery-item]");i.disabled||i!==this._selectedItem&&this._selectItem(i,!0)}_onOverflowBtnClick(){this.fireDecoratorEvent("overflow-click")}_onDisplayAreaClick(){this.interactiveDisplayArea&&this.fireDecoratorEvent("display-area-click")}_onCarouselNavigate(e){const t=e.detail.selectedIndex,i=this._selectableItems[t];this.fireDecoratorEvent("selection-change",{item:i})}get _mainItemTabIndex(){return this.interactiveDisplayArea?0:void 0}get _selectableItems(){return this.items.filter(this._isSelectableItem)}get _carousel(){return this.shadowRoot.querySelector("[ui5-carousel]")}get _display(){return this.shadowRoot.querySelector(".ui5-media-gallery-display")}get _mainItem(){return this.shadowRoot.querySelector(".ui5-media-gallery-display [ui5-media-gallery-item]")}get _overflowBtn(){return this.shadowRoot.querySelector(".ui5-media-gallery-overflow [ui5-button]")}get _visibleItems(){const e=this.items.length-this._overflowSize;return this.items.slice(0,e)}get _isPhonePlatform(){return f()}get _showThumbnails(){return!f()}get _showOverflowBtn(){return this._overflowSize>0}get _isPhoneSize(){return this.mediaRange==="S"}get _mainItemHasWideLayout(){return this._mainItem&&this._mainItem.layout===ge.Wide}get _shouldHaveWideDisplay(){return!!this._mainItemHasWideLayout&&this.showAllThumbnails&&this.effectiveLayout===b.Horizontal}get _shouldHaveSquareDisplay(){return!this._shouldHaveWideDisplay}static get THUMBNAIL_HEIGHT(){return 80}static get THUMBNAIL_MARGIN(){return 16}};p([r({type:Boolean})],h.prototype,"showAllThumbnails",void 0);p([r({type:Boolean})],h.prototype,"interactiveDisplayArea",void 0);p([r()],h.prototype,"layout",void 0);p([r()],h.prototype,"menuHorizontalAlign",void 0);p([r()],h.prototype,"menuVerticalAlign",void 0);p([r()],h.prototype,"effectiveLayout",void 0);p([r()],h.prototype,"mediaRange",void 0);p([r({type:Number,noAttribute:!0})],h.prototype,"_overflowSize",void 0);p([$({type:HTMLElement,individualSlots:!0,invalidateOnChildChange:!0,default:!0})],h.prototype,"items",void 0);h=v=p([U({tag:"ui5-media-gallery",renderer:K,styles:[fe],template:Te,dependencies:[pe,oe,re]}),H("selection-change",{bubbles:!0}),H("overflow-click",{bubbles:!0}),H("display-area-click",{bubbles:!0})],h);h.define();const x=J("ui5-media-gallery",["layout","menuHorizontalAlign","menuVerticalAlign"],["interactiveDisplayArea","showAllThumbnails"],[],["display-area-click","overflow-click","selection-change"]);x.displayName="MediaGallery";const c=J("ui5-media-gallery-item",["layout"],["disabled","selected"],["thumbnail"],[]);c.displayName="MediaGalleryItem";var k;(function(a){a.Left="Left",a.Right="Right"})(k||(k={}));const He=k;var z;(function(a){a.Top="Top",a.Bottom="Bottom"})(z||(z={}));const Me=z,Ce={title:"Layouts & Floorplans / MediaGallery",component:x,argTypes:{children:{control:{disable:!0}}},args:{layout:b.Auto,menuHorizontalAlign:He.Left,menuVerticalAlign:Me.Bottom},tags:["package:@ui5/webcomponents-fiori"]},w={render:a=>n.jsxs(x,{...a,children:[n.jsx(c,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1000.jpg"})}),n.jsx(c,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1010.jpg"})}),n.jsx(c,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1022.jpg"})}),n.jsx(c,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1030.jpg"})}),n.jsx(c,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-2002.jpg"})}),n.jsx(c,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-2026.jpg"})})]})},I={render:a=>n.jsxs(x,{...a,children:[n.jsx(c,{thumbnail:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1000-small.jpg"}),children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1000.jpg"})}),n.jsx(c,{disabled:!0,children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1010.jpg"})})]})},T={render:a=>{const e=Z.useRef(null),t=()=>{e.current.show()};return n.jsxs(n.Fragment,{children:[n.jsx(ae,{ref:e,children:"Display Area Clicked!"}),n.jsxs(x,{...a,interactiveDisplayArea:!0,onDisplayAreaClick:t,children:[n.jsx(c,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1000.jpg"})}),n.jsx(c,{selected:!0,children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1010.jpg"})})]})]})}};var R,B,N;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    return <MediaGallery {...args}>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-1000.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-1010.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-1022.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-1030.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-2002.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-2026.jpg" />
        </MediaGalleryItem>
      </MediaGallery>;
  }
}`,...(N=(B=w.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var O,E,q;I.parameters={...I.parameters,docs:{...(O=I.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    return <MediaGallery {...args}>
        <MediaGalleryItem thumbnail={<img src="https://sap.github.io/ui5-webcomponents/images/HT-1000-small.jpg" />}>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-1000.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem disabled>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-1010.jpg" />
        </MediaGalleryItem>
      </MediaGallery>;
  }
}`,...(q=(E=I.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var W,F,P;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef(null);
    const handleDisplayAreaClick = () => {
      ref.current.show();
    };
    return <>
        <Toast ref={ref}>Display Area Clicked!</Toast>
        <MediaGallery {...args} interactiveDisplayArea onDisplayAreaClick={handleDisplayAreaClick}>
          <MediaGalleryItem>
            <img src="https://sap.github.io/ui5-webcomponents/images/HT-1000.jpg" />
          </MediaGalleryItem>
          <MediaGalleryItem selected>
            <img src="https://sap.github.io/ui5-webcomponents/images/HT-1010.jpg" />
          </MediaGalleryItem>
        </MediaGallery>
      </>;
  }
}`,...(P=(F=T.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const Ae=["Default","CustomThumbnail","InteractiveDisplayArea"],Je=Object.freeze(Object.defineProperty({__proto__:null,CustomThumbnail:I,Default:w,InteractiveDisplayArea:T,__namedExportsOrder:Ae,default:Ce},Symbol.toStringTag,{value:"Module"}));export{Je as C,w as D,T as I,c as M,I as a};
