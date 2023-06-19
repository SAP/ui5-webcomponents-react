import{j as o}from"./jsx-runtime-5926aa06.js";import{r as se}from"./index-ebeaab24.js";import{_ as J}from"./iframe-9a8e1155.js";import{k as re,a as S,U as K}from"./UI5Element-b6f0d493.js";import{a as Q,e as m,l as u,s as b,p as s,c as Z,d as ee,w as te}from"./withWebComponent-7b9bd1ee.js";import{h as ie,c as $,b as ue}from"./Icons-e2180d53.js";import{d as f}from"./Device-3f99aa96.js";import{I as me,c as z,e as x}from"./Icon-d703a0b9.js";import{s as N}from"./slot-76e48863.js";import{s as ne}from"./parameters-bundle.css-5626463c.js";import{s as de}from"./style-map-0c64293c.js";import{T as he}from"./index-b429a66b.js";import{I as ce,N as pe}from"./ItemNavigation-9ba0e1fe.js";import{R as q}from"./ResizeHandler-021ae412.js";import{M as L}from"./MediaRange-25b98f31.js";import{I as ge}from"./Integer-f7f172c9.js";import{B as ye}from"./Button-dc6eb42e.js";import{c as fe}from"./Carousel-810b0cb6.js";var C;(function(n){n.Square="Square",n.Wide="Wide"})(C||(C={}));const H=C;var D;(function(n){n.Auto="Auto",n.Vertical="Vertical",n.Horizontal="Horizontal"})(D||(D={}));const p=D;var G;(function(n){n.Left="Left",n.Right="Right"})(G||(G={}));const A=G;var j;(function(n){n.Top="Top",n.Bottom="Bottom"})(j||(j={}));const k=j,be="background",ae="M368 192q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm80-160q14 0 23 9t9 23v384q0 14-9 23t-23 9H64q-13 0-22.5-9T32 448V64q0-14 9.5-23T64 32h384zm0 32H64v384h384V64zm-92 288l-58-85 22-43 96 128h-60zm-7 32H94l130-183z",_e=!1,ve="SAP-icons-v4",we="@ui5/webcomponents-icons";ie(be,{pathData:ae,ltr:_e,collection:ve,packageName:we});const Ie="background",oe="M168 208q17 0 28.5-12t11.5-28q0-17-11.5-28.5T168 128t-28.5 11.5T128 168q0 16 11.5 28t28.5 12zM405 32q31 0 53 22t22 53v298q0 31-22 53t-53 22H107q-31 0-53-22t-22-53V107q0-31 22-53t53-22h298zM107 83q-10 0-17 7t-7 17v285l91-90q14-14 31-4l40 23 89-90q14-12 29-4l66 32V107q0-10-7-17t-17-7H107zm298 346q10 0 17-7t7-17v-89l-72-35-67 66 17 10q10 5 12.5 15.5T317 392q-6 9-16 11.5t-19-2.5l-86-49-77 77h286z",Te=!1,Me="SAP-icons-v5",He="@ui5/webcomponents-icons";ie(Ie,{pathData:oe,ltr:Te,collection:Me,packageName:He});re();S("@ui5/webcomponents-theming","sap_fiori_3",async()=>Q);S("@ui5/webcomponents-fiori","sap_fiori_3",async()=>ne);const Ae={packageName:"@ui5/webcomponents-fiori",fileName:"themes/MediaGalleryItem.css",content:`:host {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
}

:host([_square]) {
    height: 0;
    padding-top: 100%;
}

.ui5-media-gallery-item-root {
    width: 100%;
    height: 100%;
    display: flex;
}

:host([_square]) .ui5-media-gallery-item-root {
    position: absolute;
    top: 0;
    left: 0;
}

:host([layout="Wide"]) .ui5-media-gallery-item-root {
    align-items: center;
}

:host([_thumbnail-design]) .ui5-media-gallery-item-root {
    border: var(--_ui5_media_gallery_thumbnail_border);
    box-sizing: border-box;
}

:host([_interactive]) .ui5-media-gallery-item-root {
    cursor: pointer;
}

/* hover */

:host([_thumbnail-design]:not([disabled]):not([selected])) .ui5-media-gallery-item-root:hover {
    border-color: var(--sapTile_Interactive_BorderColor);
    background: var(--sapList_Hover_Background);
}

/* focused */

:host([focused]) .ui5-media-gallery-item-root {
	outline: var(--_ui5_media_gallery_thumbnail_focus_outline);
	outline-offset: -1px;
}

/* selected */

:host([_thumbnail-design][selected]) .ui5-media-gallery-item-root {
    border: var(--_ui5_media_gallery_thumbnail_selected_border);
}

/* selected focused */

:host([_thumbnail-design][focused][selected]) .ui5-media-gallery-item-root {
    outline-offset: -3px;
}

.ui5-media-gallery-item-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

:host([layout="Wide"]) .ui5-media-gallery-item-wrapper {
    z-index: 1;
}

:host([layout="Wide"]:not([_thumbnail-design])) .ui5-media-gallery-item-wrapper {
    height: calc(100% / 16 * 9);
}

/* resource not found icon */

[ui5-icon] {
    position: absolute;
    width: 4.5rem;
    height: 4.55rem;
    align-self: center;
}

.ui5-media-gallery-item-mask-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

:host(:not([_thumbnail-design])) .ui5-media-gallery-item-mask-layer {
    z-index: 2;
    background: var(--sapBaseColor);
    mix-blend-mode: multiply;
    opacity: 0.2;
    box-shadow: var(--_ui5_media_gallery_item_overlay_box_shadow);
    pointer-events: none;
}

:host(:not([_thumbnail-design])[layout="Wide"]) .ui5-media-gallery-item-mask-layer {
    z-index: 0;
}

/* disabled state */

:host([disabled]) .ui5-media-gallery-item-mask-layer {
    z-index: 2;
    background: var(--sapContent_ImagePlaceholderBackground);
    opacity: 0.5;
    cursor: default;
}

/* stretch the slotted thumbnails and videos */

::slotted([slot^=thumbnail]),
:host([layout="Wide"]) ::slotted(*) {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* fit the slotted images within the host container,
preserving their proportions */

::slotted(*) {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    margin: auto;
}
`};function ke(n,e,t){return m`<div class="ui5-media-gallery-item-root" tabindex="${u(this.effectiveTabIndex)}" data-sap-focus-ref @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" role="${u(this._role)}"><div class="ui5-media-gallery-item-mask-layer"></div><div class="ui5-media-gallery-item-wrapper" style="${de(this.styles.wrapper)}">${this._showBackgroundIcon?Se.call(this,n,e,t):void 0}${this._useContent?xe.call(this,n,e,t):void 0}${this._useThumbnail?ze.call(this,n,e,t):void 0}</div></div>`}function Se(n,e,t){return t?m`<${b("ui5-icon",e,t)} name="background"></${b("ui5-icon",e,t)}>`:m`<ui5-icon name="background"></ui5-icon>`}function xe(n,e,t){return m`<slot></slot>`}function ze(n,e,t){return m`<slot name="thumbnail"></slot>`}var h=globalThis&&globalThis.__decorate||function(n,e,t,i){var a=arguments.length,l=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,y;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,e,t,i);else for(var v=n.length-1;v>=0;v--)(y=n[v])&&(l=(a<3?y(l):a>3?y(e,t,l):y(e,t))||l);return a>3&&l&&Object.defineProperty(e,t,l),l};let r=class extends K{constructor(){super(),this._monitoredContent=null,this._monitoredThumbnail=null}onEnterDOM(){this._thumbnailDesign=!f(),this._interactive=!f(),this._square=!0}get _thumbnail(){return this.thumbnail.length?this.thumbnail[0]:null}get _content(){return this.content.length?this.content[0]:null}get _isThubmnailAvailable(){return this._thumbnail&&!this._thumbnailNotFound}get _isContentAvailable(){return this._content&&!this._contentImageNotFound}get _useThumbnail(){return this._thumbnailDesign&&this._isThubmnailAvailable}get _useContent(){return!this._useThumbnail&&this._isContentAvailable}get effectiveTabIndex(){return this.disabled?void 0:this._tabIndex}get _showBackgroundIcon(){return this._thumbnailNotFound||this._contentImageNotFound}get styles(){return{wrapper:{height:this.contentHeight}}}get _role(){return this._interactive?"button":void 0}onBeforeRendering(){this._monitorLoadingError()}_monitorLoadingError(){let e,t;this._thumbnailDesign&&this.thumbnail.length&&this._monitoredThumbnail!==this._thumbnail&&(this._thumbnailNotFound=!1,e=this._updateThumbnailLoaded.bind(this),t=this._attachListeners(this._thumbnail,e),t&&(this._monitoredThumbnail=this._thumbnail)),!this._useThumbnail&&this.content.length&&this._monitoredContent!==this._content&&(this._contentImageNotFound=!1,e=this._updateContentImageLoaded.bind(this),t=this._attachListeners(this._content,e),t&&(this._monitoredContent=this._content))}_attachListeners(e,t){const i=e.tagName==="IMG",a=i?e:e.querySelector("img");if(a)return t(a),a.addEventListener("error",()=>{this.contains(a)&&t(a)}),a.addEventListener("load",()=>{this.contains(a)&&t(a)}),!0}_updateContentImageLoaded(e){this._contentImageNotFound=e.naturalHeight===0&&e.naturalWidth===0}_updateThumbnailLoaded(e){this._thumbnailNotFound=e.naturalHeight===0&&e.naturalWidth===0}_onkeydown(e){$(e)&&e.preventDefault(),ue(e)&&this._fireItemClick()}_onkeyup(e){$(e)&&this._fireItemClick()}_onfocusout(){this.focused=!1}_onfocusin(){this.focused=!0}_fireItemClick(){this.fireEvent("click",{item:this})}};h([s({type:Boolean})],r.prototype,"selected",void 0);h([s({type:Boolean})],r.prototype,"disabled",void 0);h([s({type:H,defaultValue:H.Square})],r.prototype,"layout",void 0);h([s({type:Boolean})],r.prototype,"_interactive",void 0);h([s({type:Boolean})],r.prototype,"_square",void 0);h([s({type:Boolean})],r.prototype,"_contentImageNotFound",void 0);h([s({type:Boolean})],r.prototype,"_thumbnailNotFound",void 0);h([s({type:Boolean})],r.prototype,"_thumbnailDesign",void 0);h([s({type:Boolean})],r.prototype,"focused",void 0);h([s()],r.prototype,"_tabIndex",void 0);h([s({noAttribute:!0})],r.prototype,"contentHeight",void 0);h([N({type:HTMLElement,default:!0})],r.prototype,"content",void 0);h([N()],r.prototype,"thumbnail",void 0);r=h([Z({tag:"ui5-media-gallery-item",renderer:ee,styles:Ae,template:ke,dependencies:[me]})],r);r.define();const le=r,Ce=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));S("@ui5/webcomponents-theming","sap_fiori_3",async()=>Q);S("@ui5/webcomponents-fiori","sap_fiori_3",async()=>ne);const De={packageName:"@ui5/webcomponents-fiori",fileName:"themes/MediaGallery.css",content:`:host {
	height:100%;
}

:host,
.ui5-media-gallery-display-wrapper,
.ui5-media-gallery-display {
	width: 100%;
}

.ui5-media-gallery-root {
	width: inherit;
	height: inherit;
	background: var(--sapBaseColor);
	display: flex;
	flex-direction: column;
	position: relative;
}

:host([menu-vertical-align="Top"]) .ui5-media-gallery-root {
	flex-direction: column-reverse;
}

:host([effective-layout="Horizontal"]) .ui5-media-gallery-root {
	flex-direction: row-reverse;
}

:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-root {
	flex-direction: row;
}

/* DISPLAY */

.ui5-media-gallery-display-wrapper {
	display: flex;
	justify-content: center;
	position: relative;
}

/* when all thumbnails shown, thumbnails vs. dispplay width is 1:3 proportion */

:host([effective-layout="Horizontal"][show-all-thumbnails]) .ui5-media-gallery-display-wrapper {
	flex-grow: 3; /* takes 3/4 of the entire width, where remaining 1/4 are for thumbnails */
	flex-basis: 0;
}

.ui5-media-gallery-display {
	position:relative;
	margin: 1rem;
	display: flex;
	justify-content: center;
}

.ui5-media-gallery-display [ui5-media-gallery-item] {
	z-index: 1;
}

/* mobile platform */

[ui5-carousel] {
	width: calc(100% - 2rem);
}

[ui5-carousel]::part(item) {
	padding: 0;
	overflow: hidden;
}

/* THUMBNAILS */

.ui5-media-gallery-thumbnails-wrapper {
	margin-block: 1rem 0;
}

:host([menu-vertical-align="Top"]) .ui5-media-gallery-thumbnails-wrapper {
	margin-block: 0 1rem;
}

:host([effective-layout="Horizontal"]) .ui5-media-gallery-thumbnails-wrapper {
	margin-inline: 0 1rem;
}

:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-thumbnails-wrapper {
	margin-inline: 1rem 0;
}

/* show all thumbnails in a single scrollable row */

:host([show-all-thumbnails]) .ui5-media-gallery-thumbnails-wrapper {
	overflow-x: auto;
	overflow-y: hidden;
}

/* show all thumbnails in a scrollable area with multiple columns */

:host([effective-layout="Horizontal"][show-all-thumbnails]) .ui5-media-gallery-thumbnails-wrapper {
	overflow-y: auto;
	overflow-x: hidden;
	flex-grow:1; /* takes 1/4 of the entire width, where the remaining 3/4 are for the display */
	flex-basis: 0;
}

.ui5-media-gallery-thumbnails-wrapper ul {
	height: 5rem;
	display: flex;
	flex-wrap: nowrap;
	padding-left: 0; /* disable browser default css */
	margin-top: 0; /* disable browser default css */
	margin-bottom: 0; /* disable browser default css */
	list-style-type: none; /* disable browser default css */
	padding-inline-start: 0; /* disable browser default css */
}

/* in horizontal layout, the menu is 1-4 vertical columns, depending on media size */

:host([effective-layout="Horizontal"]) ul {
	width: 5rem;
	flex-wrap: wrap;
}

/* two columns on M-size */

:host([effective-layout="Horizontal"][show-all-thumbnails][media-range="M"]) ul {
	width: 10rem;
}

/* three columns on L-size */

:host([effective-layout="Horizontal"][show-all-thumbnails][media-range="L"]) ul {
	width: 15rem;
}

/* four columns on XL-size */

:host([effective-layout="Horizontal"][show-all-thumbnails][media-range="XL"]) ul {
	width: 20rem;
}

.ui5-media-gallery-thumbnail,
.ui5-media-gallery-overflow [ui5-button] {
	width: 4rem;
	height: 4rem;
	flex-shrink: 0;
}

.ui5-media-gallery-overflow [ui5-button] {
	background: var(--_ui5_media_gallery_overflow_btn_background);
	color: var(--_ui5_media_gallery_overflow_btn_color);
	border: var(--_ui5_media_gallery_overflow_btn_border);
}

.ui5-media-gallery-thumbnail,
.ui5-media-gallery-overflow {
	margin: 0 0 0 1rem;
}

:host([menu-vertical-align="Top"]) .ui5-media-gallery-thumbnail,
:host([menu-vertical-align="Top"]) .ui5-media-gallery-overflow {
	margin: 1rem 0 0 1rem;
}

:host([effective-layout="Horizontal"]) .ui5-media-gallery-thumbnail,
:host([effective-layout="Horizontal"]) .ui5-media-gallery-overflow {
	margin: 1rem 0 0 1rem;
}

:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-thumbnail,
:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-overflow {
	margin: 1rem 1rem 0 0;
}
`};function R(n,e,t){return m`<div class="ui5-media-gallery-root"><div class="ui5-media-gallery-display-wrapper"><div class="ui5-media-gallery-display" @click="${this._onDisplayAreaClick}">${this._isPhonePlatform?Ge.call(this,n,e,t):je.call(this,n,e,t)}</div></div>${this._showThumbnails?Ne.call(this,n,e,t):void 0}</div>`}function Ge(n,e,t){return t?m`<${b("ui5-carousel",e,t)} @ui5-navigate="${u(this._onCarouselNavigate)}" hide-navigation-arrows>${z(this._selectableItems,(i,a)=>i._id||a,(i,a)=>V.call(this,n,e,t,i,a))}</${b("ui5-carousel",e,t)}>`:m`<ui5-carousel @ui5-navigate="${u(this._onCarouselNavigate)}" hide-navigation-arrows>${z(this._selectableItems,(i,a)=>i._id||a,(i,a)=>V.call(this,n,e,t,i,a))}</ui5-carousel>`}function V(n,e,t,i,a){return m`<slot name="${u(i._individualSlot)}"></slot>`}function je(n,e,t){return t?m`<${b("ui5-media-gallery-item",e,t)} ?_interactive="${u(this.interactiveDisplayArea)}" ?_square="${u(this._shouldHaveSquareDisplay)}" _tab-index="${u(this._mainItemTabIndex)}"></${b("ui5-media-gallery-item",e,t)}>`:m`<ui5-media-gallery-item ?_interactive="${u(this.interactiveDisplayArea)}" ?_square="${u(this._shouldHaveSquareDisplay)}" _tab-index="${u(this._mainItemTabIndex)}"></ui5-media-gallery-item>`}function Ne(n,e,t){return m`<div class="ui5-media-gallery-thumbnails-wrapper"><ul>${z(this._visibleItems,(i,a)=>i._id||a,(i,a)=>$e.call(this,n,e,t,i,a))}${this._showOverflowBtn?qe.call(this,n,e,t):void 0}</ul></div>`}function $e(n,e,t,i,a){return m`<li id="${u(i.id)}" class="ui5-media-gallery-thumbnail" role="option" @click="${this._onThumbnailClick}" @ui5-click="${u(this._onThumbnailClick)}"><slot name="${u(i._individualSlot)}"></slot></li>`}function qe(n,e,t){return t?m`<li class="ui5-media-gallery-overflow"><${b("ui5-button",e,t)} @click="${this._onOverflowBtnClick}">+${u(this._overflowSize)}</${b("ui5-button",e,t)}></li>`:m`<li class="ui5-media-gallery-overflow"><ui5-button @click="${this._onOverflowBtnClick}">+${u(this._overflowSize)}</ui5-button></li>`}var g=globalThis&&globalThis.__decorate||function(n,e,t,i){var a=arguments.length,l=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,y;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,e,t,i);else for(var v=n.length-1;v>=0;v--)(y=n[v])&&(l=(a<3?y(l):a>3?y(e,t,l):y(e,t))||l);return a>3&&l&&Object.defineProperty(e,t,l),l},w;const Le={S:1,M:2,L:3,XL:4};let c=w=class extends K{constructor(){super(),this._onResize=this._updateLayout.bind(this),this._itemNavigation=new ce(this,{navigationMode:pe.Auto,getItemsCallback:()=>this._getFocusableItems()})}onEnterDOM(){!f()&&q.register(this,this._onResize)}onExitDOM(){!f()&&q.deregister(this,this._onResize)}onAfterRendering(){this._updateLayout(),this._updateSelection()}_updateSelection(){let e=this.items.find(t=>t.selected);(!e||!this._isSelectableItem(e))&&(e=this._findSelectableItem()),e&&e!==this._selectedItem&&this._selectItem(e)}_isSelectableItem(e){return!e.disabled&&!e.hidden}_findSelectableItem(){return this.items.find(this._isSelectableItem)}_updateMediaRange(e){this.mediaRange=L.getCurrentRange(L.RANGESETS.RANGE_4STEPS,e)}_updateLayout(){const e=this.getDomRef(),t=e.offsetHeight,i=e.offsetWidth;!i||!t||f()||(this._updateMediaRange(i),this.effectiveLayout=this._infereffectiveLayout(),this._overflowSize=this._calculateOverflowSize(i,t),this._toggleDisplaySquareSize(this._shouldHaveSquareDisplay),this._toggleMainItem9x16size(this._shouldHaveWideDisplay))}_calculateOverflowSize(e,t){const i=w.THUMBNAIL_MARGIN;let a,l;return this.showAllThumbnails?0:(this.effectiveLayout===p.Horizontal?(a=t-i,l=this.showAllThumbnails?Le[this.mediaRange]:1):(a=e-i*2,l=1),this._getOverflowSize(a,l))}_toggleDisplaySquareSize(e){if(this._display.style.width="",e){const t=w.THUMBNAIL_MARGIN,i=this._display.offsetWidth;let a=this.getDomRef().offsetHeight-2*t;this.effectiveLayout===p.Vertical&&(a-=w.THUMBNAIL_HEIGHT+t),i>a&&(this._display.style.width=`${a}px`)}}_toggleMainItem9x16size(e){if(!this._mainItem)return;const t=this._mainItem.offsetWidth,i=e?`${t/16*9}px`:"";this._mainItem.contentHeight=i}_infereffectiveLayout(){return this.layout===p.Auto?this._isPhoneSize?p.Vertical:p.Horizontal:this.layout}_getMaxAllowedThumbnailsInColumn(e){let t=Math.floor(e/w.THUMBNAIL_HEIGHT);return this.showAllThumbnails||(t=Math.min(t,5)),t}_getOverflowSize(e,t){const i=this._getMaxAllowedThumbnailsInColumn(e),a=Math.max(0,this.items.length-i*t);return a===this.items.length||a===0?a:a+1}_getFocusableItems(){if(!this._showThumbnails)return[];const e=this._visibleItems.filter(t=>!t.disabled);return this._overflowBtn&&e.push(this._overflowBtn),e}_selectItem(e,t=!1){e!==this._selectedItem&&(this._selectedItem=e,this._updateSelectedFlag(e),this._itemNavigation.setCurrentItem(e),t&&this.fireEvent("selection-change",{item:e}),f()?this._selectItemOnPhone(e):this._displayContent(e))}_updateSelectedFlag(e){this.items.forEach(t=>{t.selected=!1}),e.selected=!0}_selectItemOnPhone(e){const t=this._selectableItems.indexOf(e),i=this._carousel;i&&i.navigateTo(t)}_displayContent(e){let t;const i=this._mainItem,a=i._content,l=e._content;i._thumbnailDesign=!1,a&&a.remove(),l&&(t=l.cloneNode(!0),i.layout=e.layout,i.appendChild(t))}_onThumbnailClick(e){const i=e.target.closest("[ui5-media-gallery-item]");i.disabled||i!==this._selectedItem&&this._selectItem(i,!0)}_onOverflowBtnClick(){this.fireEvent("overflow-click")}_onDisplayAreaClick(){this.interactiveDisplayArea&&this.fireEvent("display-area-click")}_onCarouselNavigate(e){const t=e.detail.selectedIndex,i=this._selectableItems[t];this.fireEvent("selection-change",{item:i})}get _mainItemTabIndex(){return this.interactiveDisplayArea?0:void 0}get _selectableItems(){return this.items.filter(this._isSelectableItem)}get _carousel(){return this.shadowRoot.querySelector("[ui5-carousel]")}get _display(){return this.shadowRoot.querySelector(".ui5-media-gallery-display")}get _mainItem(){return this.shadowRoot.querySelector(".ui5-media-gallery-display [ui5-media-gallery-item]")}get _overflowBtn(){return this.shadowRoot.querySelector(".ui5-media-gallery-overflow [ui5-button]")}get _visibleItems(){const e=this.items.length-this._overflowSize;return this.items.slice(0,e)}get _isPhonePlatform(){return f()}get _showThumbnails(){return!f()}get _showOverflowBtn(){return this._overflowSize>0}get _isPhoneSize(){return this.mediaRange==="S"}get _mainItemHasWideLayout(){return this._mainItem&&this._mainItem.layout===H.Wide}get _shouldHaveWideDisplay(){return!!this._mainItemHasWideLayout&&this.showAllThumbnails&&this.effectiveLayout===p.Horizontal}get _shouldHaveSquareDisplay(){return!this._shouldHaveWideDisplay}static get THUMBNAIL_HEIGHT(){return 80}static get THUMBNAIL_MARGIN(){return 16}};g([s({type:Boolean})],c.prototype,"showAllThumbnails",void 0);g([s({type:Boolean})],c.prototype,"interactiveDisplayArea",void 0);g([s({type:p,defaultValue:p.Auto})],c.prototype,"layout",void 0);g([s({type:A,defaultValue:A.Left})],c.prototype,"menuHorizontalAlign",void 0);g([s({type:k,defaultValue:k.Bottom})],c.prototype,"menuVerticalAlign",void 0);g([s({type:p,defaultValue:p.Vertical})],c.prototype,"effectiveLayout",void 0);g([s()],c.prototype,"mediaRange",void 0);g([s({validator:ge,noAttribute:!0,defaultValue:0})],c.prototype,"_overflowSize",void 0);g([N({type:HTMLElement,individualSlots:!0,invalidateOnChildChange:!0,default:!0})],c.prototype,"items",void 0);c=w=g([Z({tag:"ui5-media-gallery",renderer:ee,styles:[De],template:R,staticAreaTemplate:R,dependencies:[le,ye,fe]}),x("selection-change",{detail:{item:{type:HTMLElement}}}),x("overflow-click"),x("display-area-click")],c);c.define();const Re=c,Ve=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"})),_=te("ui5-media-gallery",["layout","menuHorizontalAlign","menuVerticalAlign"],["interactiveDisplayArea","showAllThumbnails"],[],["display-area-click","overflow-click","selection-change"],()=>J(()=>Promise.resolve().then(()=>Ve),void 0,import.meta.url));_.displayName="MediaGallery";_.defaultProps={layout:p.Auto,menuHorizontalAlign:A.Left,menuVerticalAlign:k.Bottom};try{_.displayName="MediaGallery",_.__docgenInfo={description:`The \`MediaGallery\` component allows the user to browse through multimedia items. Currently, the supported items are images and videos. The items should be defined using the \`MediaGalleryItem\` component. The items are initially displayed as thumbnails. When the user selects a thumbnail, the corresponding item is displayed in larger size.
The component is responsive by default and adjusts the position of the menu with respect to viewport size, but the application is able to further customize the layout via the provided API.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MediaGallery" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"MediaGallery",props:{children:{defaultValue:null,description:`Defines the component items.

**Note:** Only one selected item is allowed.

**Note:** Use the \`MediaGalleryItem\` component to define the desired items.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onDisplayAreaClick:{defaultValue:null,description:`Fired when the display area is clicked.
The display area is the central area that contains the enlarged content of the currently selected item.`,name:"onDisplayAreaClick",required:!1,type:{name:"(event: Ui5CustomEvent<MediaGalleryDomRef, never>) => void"}},onOverflowClick:{defaultValue:null,description:"Fired when the thumbnails overflow button is clicked.",name:"onOverflowClick",required:!1,type:{name:"(event: Ui5CustomEvent<MediaGalleryDomRef, never>) => void"}},onSelectionChange:{defaultValue:null,description:"Fired when selection is changed by user interaction.",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<MediaGalleryDomRef, MediaGallerySelectionChangeEventDetail>) => void"}},interactiveDisplayArea:{defaultValue:null,description:"If enabled, a `onDisplayAreaClick` event is fired when the user clicks or taps on the display area.\nThe display area is the central area that contains the enlarged content of the currently selected item.",name:"interactiveDisplayArea",required:!1,type:{name:"boolean"}},layout:{defaultValue:{value:"MediaGalleryLayout.Auto"},description:"Determines the layout of the component.\n\nAvailable options are:\n\n*   `Auto`\n*   `Vertical`\n*   `Horizontal`",name:"layout",required:!1,type:{name:"enum",value:[{value:'"Auto"'},{value:'"Auto"'},{value:'"Vertical"'},{value:'"Horizontal"'},{value:'"Vertical"'},{value:'"Horizontal"'}]}},menuHorizontalAlign:{defaultValue:{value:"MediaGalleryMenuHorizontalAlign.Left"},description:`Determines the horizontal alignment of the thumbnails menu vs. the central display area.

Available options are:

*   \`Left\`
*   \`Right\``,name:"menuHorizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Left"'},{value:'"Right"'},{value:'"Left"'},{value:'"Right"'}]}},menuVerticalAlign:{defaultValue:{value:"MediaGalleryMenuVerticalAlign.Bottom"},description:`Determines the vertical alignment of the thumbnails menu vs. the central display area.

Available options are:

*   \`Top\`
*   \`Bottom\``,name:"menuVerticalAlign",required:!1,type:{name:"enum",value:[{value:'"Top"'},{value:'"Bottom"'},{value:'"Top"'},{value:'"Bottom"'}]}},showAllThumbnails:{defaultValue:null,description:"If set to `true`, all thumbnails are rendered in a scrollable container. If `false`, only up to five thumbnails are rendered, followed by an overflow button that shows the count of the remaining thumbnails.",name:"showAllThumbnails",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const d=te("ui5-media-gallery-item",["layout"],["disabled","selected"],["thumbnail"],[],()=>J(()=>Promise.resolve().then(()=>Ce),void 0,import.meta.url));d.displayName="MediaGalleryItem";d.defaultProps={layout:H.Square};try{d.displayName="MediaGalleryItem",d.__docgenInfo={description:'The `MediaGalleryItem` web component represents the items displayed in the `MediaGallery` web component.\n\n**Note:** `MediaGalleryItem` is not supported when used outside of `MediaGallery`.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MediaGallery" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"MediaGalleryItem",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},thumbnail:{defaultValue:null,description:`Defines the content of the thumbnail.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="thumbnail"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"thumbnail",required:!1,type:{name:"UI5WCSlotsNode"}},disabled:{defaultValue:null,description:"Defines whether the component is in disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},layout:{defaultValue:{value:"MediaGalleryItemLayout.Square"},description:`Determines the layout of the item container.

Available options are:

*   \`Square\`
*   \`Wide\``,name:"layout",required:!1,type:{name:"enum",value:[{value:'"Square"'},{value:'"Square"'},{value:'"Wide"'},{value:'"Wide"'}]}},selected:{defaultValue:null,description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Be={title:"Layouts & Floorplans / MediaGallery",component:_,argTypes:{children:{control:{disable:!0}}},args:{layout:p.Auto,menuHorizontalAlign:A.Left,menuVerticalAlign:k.Bottom}},I={render:n=>o.jsxs(_,{...n,children:[o.jsx(d,{children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000.jpg"})}),o.jsx(d,{children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1010.jpg"})}),o.jsx(d,{children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1022.jpg"})}),o.jsx(d,{children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1030.jpg"})}),o.jsx(d,{children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-2002.jpg"})}),o.jsx(d,{children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-2026.jpg"})})]})},T={render:n=>o.jsxs(_,{...n,children:[o.jsx(d,{thumbnail:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000-small.jpg"}),children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000.jpg"})}),o.jsx(d,{disabled:!0,children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1010.jpg"})})]})},M={render:n=>{const e=se.useRef(null),t=()=>{e.current.show()};return o.jsxs(o.Fragment,{children:[o.jsx(he,{ref:e,children:"Display Area Clicked!"}),o.jsxs(_,{...n,interactiveDisplayArea:!0,onDisplayAreaClick:t,children:[o.jsx(d,{children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000.jpg"})}),o.jsx(d,{selected:!0,children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1010.jpg"})})]})]})}};var B,E,O;I.parameters={...I.parameters,docs:{...(B=I.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    return <MediaGallery {...args}>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1010.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1022.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1030.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-2002.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-2026.jpg" />
        </MediaGalleryItem>
      </MediaGallery>;
  }
}`,...(O=(E=I.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var P,W,F;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    return <MediaGallery {...args}>
        <MediaGalleryItem thumbnail={<img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000-small.jpg" />}>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem disabled>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1010.jpg" />
        </MediaGalleryItem>
      </MediaGallery>;
  }
}`,...(F=(W=T.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var U,X,Y;M.parameters={...M.parameters,docs:{...(U=M.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef(null);
    const handleDisplayAreaClick = () => {
      ref.current.show();
    };
    return <>
        <Toast ref={ref}>Display Area Clicked!</Toast>
        <MediaGallery {...args} interactiveDisplayArea onDisplayAreaClick={handleDisplayAreaClick}>
          <MediaGalleryItem>
            <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000.jpg" />
          </MediaGalleryItem>
          <MediaGalleryItem selected>
            <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1010.jpg" />
          </MediaGalleryItem>
        </MediaGallery>
      </>;
  }
}`,...(Y=(X=M.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ee=["Default","CustomThumbnail","InteractiveDisplayArea"],ut=Object.freeze(Object.defineProperty({__proto__:null,CustomThumbnail:T,Default:I,InteractiveDisplayArea:M,__namedExportsOrder:Ee,default:Be},Symbol.toStringTag,{value:"Module"}));export{ut as C,I as D,M as I,d as M,T as a};
//# sourceMappingURL=MediaGallery.stories-6aa112ba.js.map
