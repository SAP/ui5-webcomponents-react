function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as n}from"./jsx-runtime-DtaoT6pD.js";import{r as se}from"./index-OjgoNOWw.js";import{_ as J}from"./iframe-NvEupkM7.js";import{U as Q}from"./UI5Element-9EXj3atz.js";import{s as Y,a as d,l as u,b,p as s,c as Z,f as ee,w as te}from"./withWebComponent-LTFbYRvs.js";import{n as $,m as re}from"./Keys-ZEuNsqmZ.js";import{k as ue,r as H,l as f}from"./Boot-vTaFuwdG.js";import{I as de,c as k}from"./Icon-kyep1SqZ.js";import{r as ie}from"./Icons-Vbmmw7bO.js";import{s as j}from"./slot-HSrR9XJ-.js";import{s as ae}from"./parameters-bundle.css--8JKw2Pt.js";import{s as me}from"./style-map-tejh5TI3.js";import{T as he}from"./index-ilqba0Jk.js";import{I as ce,N as pe}from"./ItemNavigation-F0c19DRy.js";import{R as q}from"./ResizeHandler-_qRzLmqT.js";import{M as R}from"./MediaRange-sEMt71Ve.js";import{I as ge}from"./Integer-kog98579.js";import{b as ye}from"./Button-DcwyQdV9.js";import{a as fe}from"./Carousel--ozSSm64.js";import{e as S}from"./event-lM5HanI-.js";var C;(function(a){a.Square="Square",a.Wide="Wide"})(C||(C={}));const x=C;var A;(function(a){a.Auto="Auto",a.Vertical="Vertical",a.Horizontal="Horizontal"})(A||(A={}));const p=A;var z;(function(a){a.Left="Left",a.Right="Right"})(z||(z={}));const D=z;var N;(function(a){a.Top="Top",a.Bottom="Bottom"})(N||(N={}));const G=N,be="background",oe="M368 192q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm80-160q14 0 23 9t9 23v384q0 14-9 23t-23 9H64q-13 0-22.5-9T32 448V64q0-14 9.5-23T64 32h384zm0 32H64v384h384V64zm-92 288l-58-85 22-43 96 128h-60zm-7 32H94l130-183z",_e=!1,ve="SAP-icons-v4",we="@ui5/webcomponents-icons";ie(be,{pathData:oe,ltr:_e,collection:ve,packageName:we});const Ie="background",ne="M480 390q0 38-26 64t-64 26H122q-38 0-64-26t-26-64V122q0-38 26-64t64-26h268q38 0 64 26t26 64v268zm-397 2l90-96q8-8 19-8 7 0 14 4l41 26 87-87q9-7 18-7 7 0 11 3l66 32V122q0-17-11-28t-28-11H122q-17 0-28 11t-11 28v270zm85-184q-17 0-28.5-11.5T128 168t11.5-28.5T168 128t28.5 11.5T208 168t-11.5 28.5T168 208zm222 221q17 0 28-11t11-28v-73l-72-36-65 65 16 10q12 7 12 22 0 10-7.5 17.5T294 403q-8 0-13-4l-85-53-77 83h271z",Te=!1,Me="SAP-icons-v5",He="@ui5/webcomponents-icons";ie(Ie,{pathData:ne,ltr:Te,collection:Me,packageName:He});ue();H("@ui5/webcomponents-theming","sap_horizon",async()=>Y);H("@ui5/webcomponents-fiori","sap_horizon",async()=>ae);const Se={packageName:"@ui5/webcomponents-fiori",fileName:"themes/MediaGalleryItem.css.ts",content:`:host{width:100%;height:100%;position:relative;display:flex}:host([_square]){height:0;padding-top:100%}.ui5-media-gallery-item-root{width:100%;height:100%;display:flex}:host([_square]) .ui5-media-gallery-item-root{position:absolute;top:0;left:0}:host([layout="Wide"]) .ui5-media-gallery-item-root{align-items:center}:host([_thumbnail-design]) .ui5-media-gallery-item-root{border:var(--_ui5-v1-23-1_media_gallery_thumbnail_border);box-sizing:border-box}:host([_interactive]) .ui5-media-gallery-item-root{cursor:pointer}:host([_thumbnail-design]:not([disabled]):not([selected])) .ui5-media-gallery-item-root:hover{border-color:var(--sapTile_Interactive_BorderColor);background:var(--sapList_Hover_Background)}:host([focused]) .ui5-media-gallery-item-root{outline:var(--_ui5-v1-23-1_media_gallery_thumbnail_focus_outline);outline-offset:-1px}:host([_thumbnail-design][selected]) .ui5-media-gallery-item-root{border:var(--_ui5-v1-23-1_media_gallery_thumbnail_selected_border)}:host([_thumbnail-design][focused][selected]) .ui5-media-gallery-item-root{outline-offset:-3px}.ui5-media-gallery-item-wrapper{width:100%;height:100%;display:flex;justify-content:center}:host([layout="Wide"]) .ui5-media-gallery-item-wrapper{z-index:1}:host([layout="Wide"]:not([_thumbnail-design])) .ui5-media-gallery-item-wrapper{height:56.25%}[ui5-icon]{position:absolute;width:4.5rem;height:4.55rem;align-self:center}.ui5-media-gallery-item-mask-layer{position:absolute;inset:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(:not([_thumbnail-design])) .ui5-media-gallery-item-mask-layer{z-index:2;background:var(--sapBaseColor);mix-blend-mode:multiply;opacity:.2;box-shadow:var(--_ui5-v1-23-1_media_gallery_item_overlay_box_shadow);pointer-events:none}:host(:not([_thumbnail-design])[layout="Wide"]) .ui5-media-gallery-item-mask-layer{z-index:0}:host([disabled]) .ui5-media-gallery-item-mask-layer{z-index:2;background:var(--sapContent_ImagePlaceholderBackground);opacity:.5;cursor:default}::slotted([slot^=thumbnail]),:host([layout="Wide"]) ::slotted(*){width:100%;height:100%;object-fit:cover}::slotted(*){max-width:100%;max-height:100%;object-fit:contain;margin:auto}
`};function ke(a,e,t){return d`<div class="ui5-media-gallery-item-root" tabindex="${u(this.effectiveTabIndex)}" data-sap-focus-ref @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" role="${u(this._role)}"><div class="ui5-media-gallery-item-mask-layer"></div><div class="ui5-media-gallery-item-wrapper" style="${me(this.styles.wrapper)}">${this._showBackgroundIcon?Ce.call(this,a,e,t):void 0}${this._useContent?xe.call(this,a,e,t):void 0}${this._useThumbnail?Ae.call(this,a,e,t):void 0}</div></div>`}function Ce(a,e,t){return t?d`<${b("ui5-icon",e,t)} name="background"></${b("ui5-icon",e,t)}>`:d`<ui5-icon name="background"></ui5-icon>`}function xe(a,e,t){return d`<slot></slot>`}function Ae(a,e,t){return d`<slot name="thumbnail"></slot>`}var m=function(a,e,t,i){var o=arguments.length,l=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,y;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(a,e,t,i);else for(var _=a.length-1;_>=0;_--)(y=a[_])&&(l=(o<3?y(l):o>3?y(e,t,l):y(e,t))||l);return o>3&&l&&Object.defineProperty(e,t,l),l};let r=class extends Q{constructor(){super(),this._monitoredContent=null,this._monitoredThumbnail=null}onEnterDOM(){this._thumbnailDesign=!f(),this._interactive=!f(),this._square=!0}get _thumbnail(){return this.thumbnail.length?this.thumbnail[0]:null}get displayedContent(){return this.content.length?this.content[0]:null}get _isThubmnailAvailable(){return this._thumbnail&&!this._thumbnailNotFound}get _isContentAvailable(){return this.displayedContent&&!this._contentImageNotFound}get _useThumbnail(){return this._thumbnailDesign&&this._isThubmnailAvailable}get _useContent(){return!this._useThumbnail&&this._isContentAvailable}get effectiveTabIndex(){return this.disabled?void 0:this.forcedTabIndex}get _showBackgroundIcon(){return this._thumbnailNotFound||this._contentImageNotFound}get styles(){return{wrapper:{height:this.contentHeight}}}get _role(){return this._interactive?"button":void 0}onBeforeRendering(){this._monitorLoadingError()}_monitorLoadingError(){let e,t;this._thumbnailDesign&&this.thumbnail.length&&this._monitoredThumbnail!==this._thumbnail&&(this._thumbnailNotFound=!1,e=this._updateThumbnailLoaded.bind(this),t=this._attachListeners(this._thumbnail,e),t&&(this._monitoredThumbnail=this._thumbnail)),!this._useThumbnail&&this.content.length&&this._monitoredContent!==this.displayedContent&&(this._contentImageNotFound=!1,e=this._updateContentImageLoaded.bind(this),t=this._attachListeners(this.displayedContent,e),t&&(this._monitoredContent=this.displayedContent))}_attachListeners(e,t){const i=e.tagName==="IMG",o=i?e:e.querySelector("img");if(o)return t(o),o.addEventListener("error",()=>{this.contains(o)&&t(o)}),o.addEventListener("load",()=>{this.contains(o)&&t(o)}),!0}_updateContentImageLoaded(e){this._contentImageNotFound=e.naturalHeight===0&&e.naturalWidth===0}_updateThumbnailLoaded(e){this._thumbnailNotFound=e.naturalHeight===0&&e.naturalWidth===0}_onkeydown(e){$(e)&&e.preventDefault(),re(e)&&this._fireItemClick()}_onkeyup(e){$(e)&&this._fireItemClick()}_onfocusout(){this.focused=!1}_onfocusin(){this.focused=!0}_fireItemClick(){this.fireEvent("click",{item:this})}};m([s({type:Boolean})],r.prototype,"selected",void 0);m([s({type:Boolean})],r.prototype,"disabled",void 0);m([s({type:x,defaultValue:x.Square})],r.prototype,"layout",void 0);m([s({type:Boolean})],r.prototype,"_interactive",void 0);m([s({type:Boolean})],r.prototype,"_square",void 0);m([s({type:Boolean})],r.prototype,"_contentImageNotFound",void 0);m([s({type:Boolean})],r.prototype,"_thumbnailNotFound",void 0);m([s({type:Boolean})],r.prototype,"_thumbnailDesign",void 0);m([s({type:Boolean})],r.prototype,"focused",void 0);m([s()],r.prototype,"forcedTabIndex",void 0);m([s({noAttribute:!0})],r.prototype,"contentHeight",void 0);m([j({type:HTMLElement,default:!0})],r.prototype,"content",void 0);m([j()],r.prototype,"thumbnail",void 0);r=m([Z({tag:"ui5-media-gallery-item",renderer:ee,styles:Se,template:ke,dependencies:[de]})],r);r.define();const le=r,ze=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));H("@ui5/webcomponents-theming","sap_horizon",async()=>Y);H("@ui5/webcomponents-fiori","sap_horizon",async()=>ae);const De={packageName:"@ui5/webcomponents-fiori",fileName:"themes/MediaGallery.css.ts",content:`:host{height:100%}:host,.ui5-media-gallery-display-wrapper,.ui5-media-gallery-display{width:100%}.ui5-media-gallery-root{width:inherit;height:inherit;background:var(--sapBaseColor);display:flex;flex-direction:column;position:relative}:host([menu-vertical-align="Top"]) .ui5-media-gallery-root{flex-direction:column-reverse}:host([effective-layout="Horizontal"]) .ui5-media-gallery-root{flex-direction:row-reverse}:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-root{flex-direction:row}.ui5-media-gallery-display-wrapper{display:flex;justify-content:center;position:relative}:host([effective-layout="Horizontal"][show-all-thumbnails]) .ui5-media-gallery-display-wrapper{flex-grow:3;flex-basis:0}.ui5-media-gallery-display{position:relative;margin:1rem;display:flex;justify-content:center}.ui5-media-gallery-display [ui5-media-gallery-item]{z-index:1}[ui5-carousel]{width:calc(100% - 2rem)}[ui5-carousel]::part(item){padding:0;overflow:hidden}.ui5-media-gallery-thumbnails-wrapper{margin-block:1rem 0}:host([menu-vertical-align="Top"]) .ui5-media-gallery-thumbnails-wrapper{margin-block:0 1rem}:host([effective-layout="Horizontal"]) .ui5-media-gallery-thumbnails-wrapper{margin-inline:0 1rem}:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-thumbnails-wrapper{margin-inline:1rem 0}:host([show-all-thumbnails]) .ui5-media-gallery-thumbnails-wrapper{overflow-x:auto;overflow-y:hidden}:host([effective-layout="Horizontal"][show-all-thumbnails]) .ui5-media-gallery-thumbnails-wrapper{overflow-y:auto;overflow-x:hidden;flex-grow:1;flex-basis:0}.ui5-media-gallery-thumbnails-wrapper ul{height:5rem;display:flex;flex-wrap:nowrap;padding-left:0;margin-top:0;margin-bottom:0;list-style-type:none;padding-inline-start:0}:host([effective-layout="Horizontal"]) ul{width:5rem;flex-wrap:wrap}:host([effective-layout="Horizontal"][show-all-thumbnails][media-range="M"]) ul{width:10rem}:host([effective-layout="Horizontal"][show-all-thumbnails][media-range="L"]) ul{width:15rem}:host([effective-layout="Horizontal"][show-all-thumbnails][media-range="XL"]) ul{width:20rem}.ui5-media-gallery-thumbnail,.ui5-media-gallery-overflow [ui5-button]{width:4rem;height:4rem;flex-shrink:0}.ui5-media-gallery-overflow [ui5-button]{background:var(--_ui5-v1-23-1_media_gallery_overflow_btn_background);color:var(--_ui5-v1-23-1_media_gallery_overflow_btn_color);border:var(--_ui5-v1-23-1_media_gallery_overflow_btn_border)}.ui5-media-gallery-thumbnail,.ui5-media-gallery-overflow{margin:0 0 0 1rem}:host([menu-vertical-align="Top"]) .ui5-media-gallery-thumbnail,:host([menu-vertical-align="Top"]) .ui5-media-gallery-overflow{margin:1rem 0 0 1rem}:host([effective-layout="Horizontal"]) .ui5-media-gallery-thumbnail,:host([effective-layout="Horizontal"]) .ui5-media-gallery-overflow{margin:1rem 0 0 1rem}:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-thumbnail,:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-overflow{margin:1rem 1rem 0 0}
`};function L(a,e,t){return d`<div class="ui5-media-gallery-root"><div class="ui5-media-gallery-display-wrapper"><div class="ui5-media-gallery-display" @click="${this._onDisplayAreaClick}">${this._isPhonePlatform?Ne.call(this,a,e,t):Ge.call(this,a,e,t)}</div></div>${this._showThumbnails?je.call(this,a,e,t):void 0}</div>`}function Ne(a,e,t){return t?d`<${b("ui5-carousel",e,t)} @ui5-navigate="${u(this._onCarouselNavigate)}" hide-navigation-arrows>${k(this._selectableItems,(i,o)=>i._id||o,(i,o)=>E.call(this,a,e,t,i,o))}</${b("ui5-carousel",e,t)}>`:d`<ui5-carousel @ui5-navigate="${u(this._onCarouselNavigate)}" hide-navigation-arrows>${k(this._selectableItems,(i,o)=>i._id||o,(i,o)=>E.call(this,a,e,t,i,o))}</ui5-carousel>`}function E(a,e,t,i,o){return d`<slot name="${u(i._individualSlot)}"></slot>`}function Ge(a,e,t){return t?d`<${b("ui5-media-gallery-item",e,t)} ?_interactive="${u(this.interactiveDisplayArea)}" ?_square="${u(this._shouldHaveSquareDisplay)}" _tab-index="${u(this._mainItemTabIndex)}"></${b("ui5-media-gallery-item",e,t)}>`:d`<ui5-media-gallery-item ?_interactive="${u(this.interactiveDisplayArea)}" ?_square="${u(this._shouldHaveSquareDisplay)}" _tab-index="${u(this._mainItemTabIndex)}"></ui5-media-gallery-item>`}function je(a,e,t){return d`<div class="ui5-media-gallery-thumbnails-wrapper"><ul>${k(this._visibleItems,(i,o)=>i._id||o,(i,o)=>$e.call(this,a,e,t,i,o))}${this._showOverflowBtn?qe.call(this,a,e,t):void 0}</ul></div>`}function $e(a,e,t,i,o){return d`<li id="${u(i.id)}" class="ui5-media-gallery-thumbnail" role="option" @click="${this._onThumbnailClick}" @ui5-click="${u(this._onThumbnailClick)}"><slot name="${u(i._individualSlot)}"></slot></li>`}function qe(a,e,t){return t?d`<li class="ui5-media-gallery-overflow"><${b("ui5-button",e,t)} @click="${this._onOverflowBtnClick}">+${u(this._overflowSize)}</${b("ui5-button",e,t)}></li>`:d`<li class="ui5-media-gallery-overflow"><ui5-button @click="${this._onOverflowBtnClick}">+${u(this._overflowSize)}</ui5-button></li>`}var g=function(a,e,t,i){var o=arguments.length,l=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,y;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(a,e,t,i);else for(var _=a.length-1;_>=0;_--)(y=a[_])&&(l=(o<3?y(l):o>3?y(e,t,l):y(e,t))||l);return o>3&&l&&Object.defineProperty(e,t,l),l},w;const Re={S:1,M:2,L:3,XL:4};let c=w=class extends Q{constructor(){super(),this._onResize=this._updateLayout.bind(this),this._itemNavigation=new ce(this,{navigationMode:pe.Auto,getItemsCallback:()=>this._getFocusableItems()})}onEnterDOM(){!f()&&q.register(this,this._onResize)}onExitDOM(){!f()&&q.deregister(this,this._onResize)}onAfterRendering(){this._updateLayout(),this._updateSelection()}_updateSelection(){let e=this.items.find(t=>t.selected);(!e||!this._isSelectableItem(e))&&(e=this._findSelectableItem()),e&&e!==this._selectedItem&&this._selectItem(e)}_isSelectableItem(e){return!e.disabled&&!e.hidden}_findSelectableItem(){return this.items.find(this._isSelectableItem)}_updateMediaRange(e){this.mediaRange=R.getCurrentRange(R.RANGESETS.RANGE_4STEPS,e)}_updateLayout(){const e=this.getDomRef(),t=e.offsetHeight,i=e.offsetWidth;!i||!t||f()||(this._updateMediaRange(i),this.effectiveLayout=this._infereffectiveLayout(),this._overflowSize=this._calculateOverflowSize(i,t),this._toggleDisplaySquareSize(this._shouldHaveSquareDisplay),this._toggleMainItem9x16size(this._shouldHaveWideDisplay))}_calculateOverflowSize(e,t){const i=w.THUMBNAIL_MARGIN;let o,l;return this.showAllThumbnails?0:(this.effectiveLayout===p.Horizontal?(o=t-i,l=this.showAllThumbnails?Re[this.mediaRange]:1):(o=e-i*2,l=1),this._getOverflowSize(o,l))}_toggleDisplaySquareSize(e){if(this._display.style.width="",e){const t=w.THUMBNAIL_MARGIN,i=this._display.offsetWidth;let o=this.getDomRef().offsetHeight-2*t;this.effectiveLayout===p.Vertical&&(o-=w.THUMBNAIL_HEIGHT+t),i>o&&(this._display.style.width=`${o}px`)}}_toggleMainItem9x16size(e){if(!this._mainItem)return;const t=this._mainItem.offsetWidth,i=e?`${t/16*9}px`:"";this._mainItem.contentHeight=i}_infereffectiveLayout(){return this.layout===p.Auto?this._isPhoneSize?p.Vertical:p.Horizontal:this.layout}_getMaxAllowedThumbnailsInColumn(e){let t=Math.floor(e/w.THUMBNAIL_HEIGHT);return this.showAllThumbnails||(t=Math.min(t,5)),t}_getOverflowSize(e,t){const i=this._getMaxAllowedThumbnailsInColumn(e),o=Math.max(0,this.items.length-i*t);return o===this.items.length||o===0?o:o+1}_getFocusableItems(){if(!this._showThumbnails)return[];const e=this._visibleItems.filter(t=>!t.disabled);return this._overflowBtn&&e.push(this._overflowBtn),e}_selectItem(e,t=!1){e!==this._selectedItem&&(this._selectedItem=e,this._updateSelectedFlag(e),this._itemNavigation.setCurrentItem(e),t&&this.fireEvent("selection-change",{item:e}),f()?this._selectItemOnPhone(e):this._displayContent(e))}_updateSelectedFlag(e){this.items.forEach(t=>{t.selected=!1}),e.selected=!0}_selectItemOnPhone(e){const t=this._selectableItems.indexOf(e),i=this._carousel;i&&i.navigateTo(t)}_displayContent(e){let t;const i=this._mainItem,o=i.displayedContent,l=e.displayedContent;i._thumbnailDesign=!1,o&&o.remove(),l&&(t=l.cloneNode(!0),i.layout=e.layout,i.appendChild(t))}_onThumbnailClick(e){const i=e.target.closest("[ui5-media-gallery-item]");i.disabled||i!==this._selectedItem&&this._selectItem(i,!0)}_onOverflowBtnClick(){this.fireEvent("overflow-click")}_onDisplayAreaClick(){this.interactiveDisplayArea&&this.fireEvent("display-area-click")}_onCarouselNavigate(e){const t=e.detail.selectedIndex,i=this._selectableItems[t];this.fireEvent("selection-change",{item:i})}get _mainItemTabIndex(){return this.interactiveDisplayArea?0:void 0}get _selectableItems(){return this.items.filter(this._isSelectableItem)}get _carousel(){return this.shadowRoot.querySelector("[ui5-carousel]")}get _display(){return this.shadowRoot.querySelector(".ui5-media-gallery-display")}get _mainItem(){return this.shadowRoot.querySelector(".ui5-media-gallery-display [ui5-media-gallery-item]")}get _overflowBtn(){return this.shadowRoot.querySelector(".ui5-media-gallery-overflow [ui5-button]")}get _visibleItems(){const e=this.items.length-this._overflowSize;return this.items.slice(0,e)}get _isPhonePlatform(){return f()}get _showThumbnails(){return!f()}get _showOverflowBtn(){return this._overflowSize>0}get _isPhoneSize(){return this.mediaRange==="S"}get _mainItemHasWideLayout(){return this._mainItem&&this._mainItem.layout===x.Wide}get _shouldHaveWideDisplay(){return!!this._mainItemHasWideLayout&&this.showAllThumbnails&&this.effectiveLayout===p.Horizontal}get _shouldHaveSquareDisplay(){return!this._shouldHaveWideDisplay}static get THUMBNAIL_HEIGHT(){return 80}static get THUMBNAIL_MARGIN(){return 16}};g([s({type:Boolean})],c.prototype,"showAllThumbnails",void 0);g([s({type:Boolean})],c.prototype,"interactiveDisplayArea",void 0);g([s({type:p,defaultValue:p.Auto})],c.prototype,"layout",void 0);g([s({type:D,defaultValue:D.Left})],c.prototype,"menuHorizontalAlign",void 0);g([s({type:G,defaultValue:G.Bottom})],c.prototype,"menuVerticalAlign",void 0);g([s({type:p,defaultValue:p.Vertical})],c.prototype,"effectiveLayout",void 0);g([s()],c.prototype,"mediaRange",void 0);g([s({validator:ge,noAttribute:!0,defaultValue:0})],c.prototype,"_overflowSize",void 0);g([j({type:HTMLElement,individualSlots:!0,invalidateOnChildChange:!0,default:!0})],c.prototype,"items",void 0);c=w=g([Z({tag:"ui5-media-gallery",renderer:ee,styles:[De],template:L,staticAreaTemplate:L,dependencies:[le,ye,fe]}),S("selection-change",{detail:{item:{type:HTMLElement}}}),S("overflow-click"),S("display-area-click")],c);c.define();const Le=c,Ee=Object.freeze(Object.defineProperty({__proto__:null,default:Le},Symbol.toStringTag,{value:"Module"})),v=te("ui5-media-gallery",["layout","menuHorizontalAlign","menuVerticalAlign"],["interactiveDisplayArea","showAllThumbnails"],[],["display-area-click","overflow-click","selection-change"],()=>J(()=>Promise.resolve().then(()=>Ee),void 0,import.meta.url));v.displayName="MediaGallery";try{v.displayName="MediaGallery",v.__docgenInfo={description:`The \`MediaGallery\` component allows the user to browse through multimedia items. Currently,
the supported items are images and videos. The items should be defined using the \`MediaGalleryItem\`
component.

The items are initially displayed as thumbnails. When the user selects a thumbnail, the corresponding item
is displayed in larger size.

The component is responsive by default and adjusts the position of the menu with respect to viewport size,
but the application is able to further customize the layout via the provided API.

### Keyboard Handling
The \`MediaGallery\` provides advanced keyboard handling.

When the thumbnails menu is focused the following keyboard
shortcuts allow the user to navigate through the thumbnail items:

- [UP/DOWN] - Navigates up and down the items
- [HOME] - Navigates to first item
- [END] - Navigates to the last item
- [SPACE/ENTER] - Select an item



\`import "@ui5/webcomponents-fiori/dist/MediaGalleryItem.js";\`

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"MediaGallery",props:{children:{defaultValue:null,description:`Defines the component items.

**Note:** Only one selected item is allowed.

**Note:** Use the \`MediaGalleryItem\` component to define the desired items.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onDisplayAreaClick:{defaultValue:null,description:`Fired when the display area is clicked.
The display area is the central area that contains
the enlarged content of the currently selected item.`,name:"onDisplayAreaClick",required:!1,type:{name:"(event: Ui5CustomEvent<MediaGalleryDomRef, never>) => void"}},onOverflowClick:{defaultValue:null,description:"Fired when the thumbnails overflow button is clicked.",name:"onOverflowClick",required:!1,type:{name:"(event: Ui5CustomEvent<MediaGalleryDomRef, never>) => void"}},onSelectionChange:{defaultValue:null,description:"Fired when selection is changed by user interaction.",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<MediaGalleryDomRef, MediaGallerySelectionChangeEventDetail>) => void"}},interactiveDisplayArea:{defaultValue:{value:"false"},description:`If enabled, a \`display-area-click\` event is fired
when the user clicks or taps on the display area.

The display area is the central area that contains
the enlarged content of the currently selected item.`,name:"interactiveDisplayArea",required:!1,type:{name:"boolean"}},layout:{defaultValue:{value:'"Auto"'},description:"Determines the layout of the component.",name:"layout",required:!1,type:{name:"enum",value:[{value:'"Auto"'},{value:'"Auto"'},{value:'"Vertical"'},{value:'"Horizontal"'},{value:'"Vertical"'},{value:'"Horizontal"'}]}},menuHorizontalAlign:{defaultValue:{value:'"Left"'},description:`Determines the horizontal alignment of the thumbnails menu
vs. the central display area.`,name:"menuHorizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Left"'},{value:'"Right"'},{value:'"Left"'},{value:'"Right"'}]}},menuVerticalAlign:{defaultValue:{value:'"Bottom"'},description:`Determines the vertical alignment of the thumbnails menu
vs. the central display area.`,name:"menuVerticalAlign",required:!1,type:{name:"enum",value:[{value:'"Top"'},{value:'"Bottom"'},{value:'"Top"'},{value:'"Bottom"'}]}},showAllThumbnails:{defaultValue:{value:"false"},description:"If set to `true`, all thumbnails are rendered in a scrollable container.\nIf `false`, only up to five thumbnails are rendered, followed by\nan overflow button that shows the count of the remaining thumbnails.",name:"showAllThumbnails",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const h=te("ui5-media-gallery-item",["layout"],["disabled","selected"],["thumbnail"],[],()=>J(()=>Promise.resolve().then(()=>ze),void 0,import.meta.url));h.displayName="MediaGalleryItem";try{h.displayName="MediaGalleryItem",h.__docgenInfo={description:`The \`MediaGalleryItem\` web component represents the items displayed in the
\`MediaGallery\` web component.

**Note:** \`MediaGalleryItem\` is not supported when used outside of \`MediaGallery\`.

### Keyboard Handling
The \`MediaGallery\` provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

- [SPACE/ENTER/RETURN] - Trigger \`ui5-click\` event

)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"MediaGalleryItem",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},thumbnail:{defaultValue:null,description:`Defines the content of the thumbnail.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="thumbnail"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"thumbnail",required:!1,type:{name:"UI5WCSlotsNode"}},disabled:{defaultValue:{value:"false"},description:"Defines whether the component is in disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},layout:{defaultValue:{value:'"Square"'},description:"Determines the layout of the item container.",name:"layout",required:!1,type:{name:"enum",value:[{value:'"Square"'},{value:'"Square"'},{value:'"Wide"'},{value:'"Wide"'}]}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Ve={title:"Layouts & Floorplans / MediaGallery",component:v,argTypes:{children:{control:{disable:!0}}},args:{layout:p.Auto,menuHorizontalAlign:D.Left,menuVerticalAlign:G.Bottom},tags:["package:@ui5/webcomponents-fiori"]},I={render:a=>n.jsxs(v,{...a,children:[n.jsx(h,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/HT-1000.jpg"})}),n.jsx(h,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/HT-1010.jpg"})}),n.jsx(h,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/HT-1022.jpg"})}),n.jsx(h,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/HT-1030.jpg"})}),n.jsx(h,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/HT-2002.jpg"})}),n.jsx(h,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/HT-2026.jpg"})})]})},T={render:a=>n.jsxs(v,{...a,children:[n.jsx(h,{thumbnail:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/HT-1000-small.jpg"}),children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/HT-1000.jpg"})}),n.jsx(h,{disabled:!0,children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/HT-1010.jpg"})})]})},M={render:a=>{const e=se.useRef(null),t=()=>{e.current.show()};return n.jsxs(n.Fragment,{children:[n.jsx(he,{ref:e,children:"Display Area Clicked!"}),n.jsxs(v,{...a,interactiveDisplayArea:!0,onDisplayAreaClick:t,children:[n.jsx(h,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/HT-1000.jpg"})}),n.jsx(h,{selected:!0,children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/HT-1010.jpg"})})]})]})}};var V,B,O;I.parameters={...I.parameters,docs:{...(V=I.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    return <MediaGallery {...args}>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-1000.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-1010.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-1022.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-1030.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-2002.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-2026.jpg" />
        </MediaGalleryItem>
      </MediaGallery>;
  }
}`,...(O=(B=I.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var P,W,U;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    return <MediaGallery {...args}>
        <MediaGalleryItem thumbnail={<img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-1000-small.jpg" />}>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-1000.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem disabled>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-1010.jpg" />
        </MediaGalleryItem>
      </MediaGallery>;
  }
}`,...(U=(W=T.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var F,K,X;M.parameters={...M.parameters,docs:{...(F=M.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef(null);
    const handleDisplayAreaClick = () => {
      ref.current.show();
    };
    return <>
        <Toast ref={ref}>Display Area Clicked!</Toast>
        <MediaGallery {...args} interactiveDisplayArea onDisplayAreaClick={handleDisplayAreaClick}>
          <MediaGalleryItem>
            <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-1000.jpg" />
          </MediaGalleryItem>
          <MediaGalleryItem selected>
            <img src="https://sap.github.io/ui5-webcomponents/assets/images/HT-1010.jpg" />
          </MediaGalleryItem>
        </MediaGallery>
      </>;
  }
}`,...(X=(K=M.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};const Be=["Default","CustomThumbnail","InteractiveDisplayArea"],mt=Object.freeze(Object.defineProperty({__proto__:null,CustomThumbnail:T,Default:I,InteractiveDisplayArea:M,__namedExportsOrder:Be,default:Ve},Symbol.toStringTag,{value:"Module"}));export{mt as C,I as D,M as I,h as M,T as a};
