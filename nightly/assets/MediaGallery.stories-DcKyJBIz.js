import{p as M,d as k,l as T,c as d,ag as W,s,A,m as z,b7 as C,ah as j,b5 as R,f as y,ba as H,b9 as U,a1 as q,dj as O,fd as F,b6 as N,ax as G,w as V,j as o,r as P,Y as $}from"./iframe-BuT579UQ.js";import{d as L}from"./parameters-bundle.css-34zgZIqy.js";import"./background-cUcR4N7d.js";import{a as E}from"./Carousel-BId8Q3SQ.js";M("@ui5/webcomponents-theming","sap_horizon",async()=>k);M("@ui5/webcomponents-fiori","sap_horizon",async()=>L);const K=`:host{width:100%;height:100%;position:relative;display:flex}:host([_square]){height:0;padding-top:100%}.ui5-media-gallery-item-root{width:100%;height:100%;display:flex}:host([_square]) .ui5-media-gallery-item-root{position:absolute;top:0;left:0}:host([layout="Wide"]) .ui5-media-gallery-item-root{align-items:center}:host([_thumbnail-design]) .ui5-media-gallery-item-root{border:var(--_ui5-v2-13-3_media_gallery_thumbnail_border);box-sizing:border-box}:host([_interactive]) .ui5-media-gallery-item-root{cursor:pointer}:host([_thumbnail-design]:not([disabled]):not([selected])) .ui5-media-gallery-item-root:hover{border-color:var(--sapTile_Interactive_BorderColor);background:var(--sapList_Hover_Background)}.ui5-media-gallery-item-root:focus{outline:var(--_ui5-v2-13-3_media_gallery_thumbnail_focus_outline);outline-offset:-1px}:host([_thumbnail-design][selected]) .ui5-media-gallery-item-root{border:var(--_ui5-v2-13-3_media_gallery_thumbnail_selected_border)}:host([_thumbnail-design][selected]) .ui5-media-gallery-item-root:focus{outline-offset:-3px}.ui5-media-gallery-item-wrapper{width:100%;height:100%;display:flex;justify-content:center}:host([layout="Wide"]) .ui5-media-gallery-item-wrapper{z-index:1}:host([layout="Wide"]:not([_thumbnail-design])) .ui5-media-gallery-item-wrapper{height:56.25%}[ui5-icon]{position:absolute;width:4.5rem;height:4.55rem;align-self:center}.ui5-media-gallery-item-mask-layer{position:absolute;inset:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(:not([_thumbnail-design])) .ui5-media-gallery-item-mask-layer{z-index:2;background:var(--sapBaseColor);mix-blend-mode:multiply;opacity:.2;box-shadow:var(--_ui5-v2-13-3_media_gallery_item_overlay_box_shadow);pointer-events:none}:host(:not([_thumbnail-design])[layout="Wide"]) .ui5-media-gallery-item-mask-layer{z-index:0}:host([disabled]) .ui5-media-gallery-item-mask-layer{z-index:2;background:var(--sapContent_ImagePlaceholderBackground);opacity:.5;cursor:default}::slotted([slot^=thumbnail]),:host([layout="Wide"]) ::slotted(*){width:100%;height:100%;object-fit:cover}::slotted(*){max-width:100%;max-height:100%;object-fit:contain;margin:auto}
`,X="background";function Y(){return T("div",{class:"ui5-media-gallery-item-root",tabindex:this.effectiveTabIndex,"data-sap-focus-ref":!0,onKeyDown:this._onkeydown,onKeyUp:this._onkeyup,role:this._role,children:[d("div",{class:"ui5-media-gallery-item-mask-layer"}),T("div",{class:"ui5-media-gallery-item-wrapper",style:this.styles.wrapper,children:[this._showBackgroundIcon&&d(W,{name:X}),this._useContent&&d("slot",{}),this._useThumbnail&&d("slot",{name:"thumbnail"})]})]})}var h=function(a,e,t,i){var n=arguments.length,l=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(a,e,t,i);else for(var b=a.length-1;b>=0;b--)(p=a[b])&&(l=(n<3?p(l):n>3?p(e,t,l):p(e,t))||l);return n>3&&l&&Object.defineProperty(e,t,l),l};let r=class extends R{constructor(){super(),this.selected=!1,this.disabled=!1,this.layout="Square",this._interactive=!y(),this._square=!1,this._contentImageNotFound=!1,this._thumbnailNotFound=!1,this._thumbnailDesign=!1,this._monitoredContent=null,this._monitoredThumbnail=null}onEnterDOM(){this._thumbnailDesign=!y(),this._square=!0}get _thumbnail(){return this.thumbnail.length?this.thumbnail[0]:null}get displayedContent(){return this.content.length?this.content[0]:null}get _isThubmnailAvailable(){return this._thumbnail&&!this._thumbnailNotFound}get _isContentAvailable(){return this.displayedContent&&!this._contentImageNotFound}get _useThumbnail(){return this._thumbnailDesign&&this._isThubmnailAvailable}get _useContent(){return!this._useThumbnail&&this._isContentAvailable}get effectiveTabIndex(){if(!this.disabled)return this.forcedTabIndex?parseInt(this.forcedTabIndex):void 0}get _showBackgroundIcon(){return this._thumbnailNotFound||this._contentImageNotFound}get styles(){return{wrapper:{height:this.contentHeight}}}get _role(){return this._interactive?"button":void 0}onBeforeRendering(){this._monitorLoadingError()}_monitorLoadingError(){let e,t;this._thumbnailDesign&&this.thumbnail.length&&this._monitoredThumbnail!==this._thumbnail&&(this._thumbnailNotFound=!1,e=this._updateThumbnailLoaded.bind(this),t=this._attachListeners(this._thumbnail,e),t&&(this._monitoredThumbnail=this._thumbnail)),!this._useThumbnail&&this.content.length&&this._monitoredContent!==this.displayedContent&&(this._contentImageNotFound=!1,e=this._updateContentImageLoaded.bind(this),t=this._attachListeners(this.displayedContent,e),t&&(this._monitoredContent=this.displayedContent))}_attachListeners(e,t){const i=e.tagName==="IMG",n=i?e:e.querySelector("img");if(n)return t(n),n.addEventListener("error",()=>{this.contains(n)&&t(n)}),n.addEventListener("load",()=>{this.contains(n)&&t(n)}),!0}_updateContentImageLoaded(e){this._contentImageNotFound=e.naturalHeight===0&&e.naturalWidth===0}_updateThumbnailLoaded(e){this._thumbnailNotFound=e.naturalHeight===0&&e.naturalWidth===0}_onkeydown(e){H(e)&&e.preventDefault(),U(e)&&this._fireItemClick()}_onkeyup(e){H(e)&&this._fireItemClick()}_fireItemClick(){this.fireDecoratorEvent("click",{item:this})}};h([s({type:Boolean})],r.prototype,"selected",void 0);h([s({type:Boolean})],r.prototype,"disabled",void 0);h([s()],r.prototype,"layout",void 0);h([s({type:Boolean})],r.prototype,"_interactive",void 0);h([s({type:Boolean})],r.prototype,"_square",void 0);h([s({type:Boolean})],r.prototype,"_contentImageNotFound",void 0);h([s({type:Boolean})],r.prototype,"_thumbnailNotFound",void 0);h([s({type:Boolean})],r.prototype,"_thumbnailDesign",void 0);h([s()],r.prototype,"forcedTabIndex",void 0);h([s({noAttribute:!0})],r.prototype,"contentHeight",void 0);h([A({type:HTMLElement,default:!0})],r.prototype,"content",void 0);h([A()],r.prototype,"thumbnail",void 0);r=h([z({tag:"ui5-media-gallery-item",renderer:j,styles:K,template:Y}),C("click",{bubbles:!0})],r);r.define();const B=r;var S;(function(a){a.Square="Square",a.Wide="Wide"})(S||(S={}));const J=S;var f;(function(a){a.Auto="Auto",a.Vertical="Vertical",a.Horizontal="Horizontal"})(f||(f={}));M("@ui5/webcomponents-theming","sap_horizon",async()=>k);M("@ui5/webcomponents-fiori","sap_horizon",async()=>L);const Q=`:host{height:100%}:host,.ui5-media-gallery-display-wrapper,.ui5-media-gallery-display{width:100%}.ui5-media-gallery-root{width:inherit;height:inherit;background:var(--sapBaseColor);display:flex;flex-direction:column;position:relative}:host([menu-vertical-align="Top"]) .ui5-media-gallery-root{flex-direction:column-reverse}:host([effective-layout="Horizontal"]) .ui5-media-gallery-root{flex-direction:row-reverse}:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-root{flex-direction:row}.ui5-media-gallery-display-wrapper{display:flex;justify-content:center;position:relative}:host([effective-layout="Horizontal"][show-all-thumbnails]) .ui5-media-gallery-display-wrapper{flex-grow:3;flex-basis:0}.ui5-media-gallery-display{position:relative;margin:1rem;display:flex;justify-content:center}.ui5-media-gallery-display [ui5-media-gallery-item]{z-index:1}[ui5-carousel]{width:calc(100% - 2rem)}[ui5-carousel]::part(item){padding:0;overflow:hidden}.ui5-media-gallery-thumbnails-wrapper{margin-block:1rem 0}:host([menu-vertical-align="Top"]) .ui5-media-gallery-thumbnails-wrapper{margin-block:0 1rem}:host([effective-layout="Horizontal"]) .ui5-media-gallery-thumbnails-wrapper{margin-inline:0 1rem}:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-thumbnails-wrapper{margin-inline:1rem 0}:host([show-all-thumbnails]) .ui5-media-gallery-thumbnails-wrapper{overflow-x:auto;overflow-y:hidden}:host([effective-layout="Horizontal"][show-all-thumbnails]) .ui5-media-gallery-thumbnails-wrapper{overflow-y:auto;overflow-x:hidden;flex-grow:1;flex-basis:0}.ui5-media-gallery-thumbnails-wrapper ul{height:5rem;display:flex;flex-wrap:nowrap;padding-left:0;margin-top:0;margin-bottom:0;list-style-type:none;padding-inline-start:0}:host([effective-layout="Horizontal"]) ul{width:5rem;flex-wrap:wrap}:host([effective-layout="Horizontal"][show-all-thumbnails][media-range="M"]) ul{width:10rem}:host([effective-layout="Horizontal"][show-all-thumbnails][media-range="L"]) ul{width:15rem}:host([effective-layout="Horizontal"][show-all-thumbnails][media-range="XL"]) ul{width:20rem}.ui5-media-gallery-thumbnail,.ui5-media-gallery-overflow [ui5-button]{width:4rem;height:4rem;flex-shrink:0}.ui5-media-gallery-overflow [ui5-button]{background:var(--_ui5-v2-13-3_media_gallery_overflow_btn_background);color:var(--_ui5-v2-13-3_media_gallery_overflow_btn_color);border:var(--_ui5-v2-13-3_media_gallery_overflow_btn_border)}.ui5-media-gallery-thumbnail,.ui5-media-gallery-overflow{margin:0 0 0 1rem}:host([menu-vertical-align="Top"]) .ui5-media-gallery-thumbnail,:host([menu-vertical-align="Top"]) .ui5-media-gallery-overflow{margin:1rem 0 0 1rem}:host([effective-layout="Horizontal"]) .ui5-media-gallery-thumbnail,:host([effective-layout="Horizontal"]) .ui5-media-gallery-overflow{margin:1rem 0 0 1rem}:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-thumbnail,:host([effective-layout="Horizontal"][menu-horizontal-align="Right"]) .ui5-media-gallery-overflow{margin:1rem 1rem 0 0}
`;function Z(){return T("div",{class:"ui5-media-gallery-root",children:[d("div",{class:"ui5-media-gallery-display-wrapper",children:d("div",{class:"ui5-media-gallery-display",onClick:this._onDisplayAreaClick,children:this._isPhonePlatform?d(E,{onNavigate:this._onCarouselNavigate,hideNavigationArrows:!0,children:this._selectableItems.map(a=>d("slot",{name:a._individualSlot}))}):d(B,{_interactive:this.interactiveDisplayArea,_square:this._shouldHaveSquareDisplay,tabIndex:this._mainItemTabIndex})})}),this._showThumbnails&&d("div",{class:"ui5-media-gallery-thumbnails-wrapper",children:T("ul",{children:[this._visibleItems.map(a=>d("li",{id:a.id,class:"ui5-media-gallery-thumbnail",role:"option",onClick:this._onThumbnailClick,children:d("slot",{name:a._individualSlot})})),this._showOverflowBtn&&d("li",{class:"ui5-media-gallery-overflow",children:T(q,{onClick:this._onOverflowBtnClick,children:["+",this._overflowSize]})})]})})]})}var c=function(a,e,t,i){var n=arguments.length,l=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(a,e,t,i);else for(var b=a.length-1;b>=0;b--)(p=a[b])&&(l=(n<3?p(l):n>3?p(e,t,l):p(e,t))||l);return n>3&&l&&Object.defineProperty(e,t,l),l},v;const ee={S:1,M:2,L:3,XL:4};let m=v=class extends R{constructor(){super(),this.showAllThumbnails=!1,this.interactiveDisplayArea=!1,this.layout="Auto",this.menuHorizontalAlign="Left",this.menuVerticalAlign="Bottom",this.effectiveLayout="Vertical",this.mediaRange="S",this._overflowSize=0,this._onResize=this._updateLayout.bind(this),this._itemNavigation=new O(this,{navigationMode:F.Auto,getItemsCallback:()=>this._getFocusableItems()})}onEnterDOM(){!y()&&N.register(this,this._onResize)}onExitDOM(){!y()&&N.deregister(this,this._onResize)}onAfterRendering(){this._updateLayout(),this._updateSelection()}_updateSelection(){if(this.items.length===0){this._selectedItem=void 0,this._mainItem&&this._mainItem.displayedContent?.remove();return}let e=this.items.find(t=>t.selected);(!e||!this._isSelectableItem(e))&&(e=this._findSelectableItem()),e&&e!==this._selectedItem&&this._selectItem(e)}_isSelectableItem(e){return!e.disabled&&!e.hidden}_findSelectableItem(){return this.items.find(this._isSelectableItem)}_updateMediaRange(e){this.mediaRange=G.getCurrentRange(G.RANGESETS.RANGE_4STEPS,e)}_updateLayout(){const e=this.getDomRef(),t=e.offsetHeight,i=e.offsetWidth;!i||!t||y()||(this._updateMediaRange(i),this.effectiveLayout=this._infereffectiveLayout(),this._overflowSize=this._calculateOverflowSize(i,t),this._toggleDisplaySquareSize(this._shouldHaveSquareDisplay),this._toggleMainItem9x16size(this._shouldHaveWideDisplay))}_calculateOverflowSize(e,t){const i=v.THUMBNAIL_MARGIN;let n,l;return this.showAllThumbnails?0:(this.effectiveLayout===f.Horizontal?(n=t-i,l=this.showAllThumbnails?ee[this.mediaRange]:1):(n=e-i*2,l=1),this._getOverflowSize(n,l))}_toggleDisplaySquareSize(e){if(this._display.style.width="",e){const t=v.THUMBNAIL_MARGIN,i=this._display.offsetWidth;let n=this.getDomRef().offsetHeight-2*t;this.effectiveLayout===f.Vertical&&(n-=v.THUMBNAIL_HEIGHT+t),i>n&&(this._display.style.width=`${n}px`)}}_toggleMainItem9x16size(e){if(!this._mainItem)return;const t=this._mainItem.offsetWidth,i=e?`${t/16*9}px`:"";this._mainItem.contentHeight=i}_infereffectiveLayout(){return this.layout===f.Auto?this._isPhoneSize?f.Vertical:f.Horizontal:this.layout}_getMaxAllowedThumbnailsInColumn(e){let t=Math.floor(e/v.THUMBNAIL_HEIGHT);return this.showAllThumbnails||(t=Math.min(t,5)),t}_getOverflowSize(e,t){const i=this._getMaxAllowedThumbnailsInColumn(e),n=Math.max(0,this.items.length-i*t);return n===this.items.length||n===0?n:n+1}_getFocusableItems(){if(!this._showThumbnails)return[];const e=this._visibleItems.filter(t=>!t.disabled);return this._overflowBtn&&e.push(this._overflowBtn),e}getFocusDomRef(){return this._itemNavigation._getCurrentItem()}_selectItem(e,t=!1){e!==this._selectedItem&&(this._selectedItem=e,this._updateSelectedFlag(e),this._itemNavigation.setCurrentItem(e),t&&this.fireDecoratorEvent("selection-change",{item:e}),y()?this._selectItemOnPhone(e):this._displayContent(e))}_updateSelectedFlag(e){this.items.forEach(t=>{t.selected=!1}),e.selected=!0}_selectItemOnPhone(e){const t=this._selectableItems.indexOf(e),i=this._carousel;i&&i.navigateTo(t)}_displayContent(e){let t;const i=this._mainItem,n=i.displayedContent,l=e.displayedContent;i._thumbnailDesign=!1,n&&n.remove(),l&&(t=l.cloneNode(!0),i.layout=e.layout,i.appendChild(t))}_onThumbnailClick(e){const i=e.target.closest("[ui5-media-gallery-item]");i.disabled||i!==this._selectedItem&&this._selectItem(i,!0)}_onOverflowBtnClick(){this.fireDecoratorEvent("overflow-click")}_onDisplayAreaClick(){this.interactiveDisplayArea&&this.fireDecoratorEvent("display-area-click")}_onCarouselNavigate(e){const t=e.detail.selectedIndex,i=this._selectableItems[t];this.fireDecoratorEvent("selection-change",{item:i})}get _mainItemTabIndex(){return this.interactiveDisplayArea?0:void 0}get _selectableItems(){return this.items.filter(this._isSelectableItem)}get _carousel(){return this.shadowRoot.querySelector("[ui5-carousel]")}get _display(){return this.shadowRoot.querySelector(".ui5-media-gallery-display")}get _mainItem(){return this.shadowRoot.querySelector(".ui5-media-gallery-display [ui5-media-gallery-item]")}get _overflowBtn(){return this.shadowRoot.querySelector(".ui5-media-gallery-overflow [ui5-button]")}get _visibleItems(){const e=this.items.length-this._overflowSize;return this.items.slice(0,e)}get _isPhonePlatform(){return y()}get _showThumbnails(){return!y()}get _showOverflowBtn(){return this._overflowSize>0}get _isPhoneSize(){return this.mediaRange==="S"}get _mainItemHasWideLayout(){return this._mainItem&&this._mainItem.layout===J.Wide}get _shouldHaveWideDisplay(){return!!this._mainItemHasWideLayout&&this.showAllThumbnails&&this.effectiveLayout===f.Horizontal}get _shouldHaveSquareDisplay(){return!this._shouldHaveWideDisplay}static get THUMBNAIL_HEIGHT(){return 80}static get THUMBNAIL_MARGIN(){return 16}};c([s({type:Boolean})],m.prototype,"showAllThumbnails",void 0);c([s({type:Boolean})],m.prototype,"interactiveDisplayArea",void 0);c([s()],m.prototype,"layout",void 0);c([s()],m.prototype,"menuHorizontalAlign",void 0);c([s()],m.prototype,"menuVerticalAlign",void 0);c([s()],m.prototype,"effectiveLayout",void 0);c([s()],m.prototype,"mediaRange",void 0);c([s({type:Number,noAttribute:!0})],m.prototype,"_overflowSize",void 0);c([A({type:HTMLElement,individualSlots:!0,invalidateOnChildChange:!0,default:!0})],m.prototype,"items",void 0);m=v=c([z({tag:"ui5-media-gallery",renderer:j,styles:[Q],template:Z,dependencies:[B,q,E]}),C("selection-change",{bubbles:!0}),C("overflow-click",{bubbles:!0}),C("display-area-click",{bubbles:!0})],m);m.define();const g=V("ui5-media-gallery",["layout","menuHorizontalAlign","menuVerticalAlign"],["interactiveDisplayArea","showAllThumbnails"],[],["display-area-click","overflow-click","selection-change"]);g.displayName="MediaGallery";try{g.displayName="MediaGallery",g.__docgenInfo={description:`The \`MediaGallery\` component allows the user to browse through multimedia items. Currently,
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

- [Up] or [Down] - Navigates up and down the items
- [Home] - Navigates to first item
- [End] - Navigates to the last item
- [Space], [Enter] - Selects an item



\`import "@ui5/webcomponents-fiori/dist/MediaGalleryItem.js";\`

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"MediaGallery",props:{children:{defaultValue:null,description:`Defines the component items.

**Note:** Only one selected item is allowed.

**Note:** Use the \`MediaGalleryItem\` component to define the desired items.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onDisplayAreaClick:{defaultValue:null,description:`Fired when the display area is clicked.
The display area is the central area that contains
the enlarged content of the currently selected item.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onDisplayAreaClick",required:!1,type:{name:"(event: Ui5CustomEvent<MediaGalleryDomRef, never>) => void"}},onOverflowClick:{defaultValue:null,description:`Fired when the thumbnails overflow button is clicked.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onOverflowClick",required:!1,type:{name:"(event: Ui5CustomEvent<MediaGalleryDomRef, never>) => void"}},onSelectionChange:{defaultValue:null,description:`Fired when selection is changed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<MediaGalleryDomRef, MediaGallerySelectionChangeEventDetail>) => void"}},interactiveDisplayArea:{defaultValue:{value:"false"},description:`If enabled, a \`display-area-click\` event is fired
when the user clicks or taps on the display area.

The display area is the central area that contains
the enlarged content of the currently selected item.`,name:"interactiveDisplayArea",required:!1,type:{name:"boolean"}},layout:{defaultValue:{value:'"Auto"'},description:"Determines the layout of the component.",name:"layout",required:!1,type:{name:"enum",value:[{value:'"Auto"'},{value:'"Auto"'},{value:'"Vertical"'},{value:'"Horizontal"'},{value:'"Vertical"'},{value:'"Horizontal"'}]}},menuHorizontalAlign:{defaultValue:{value:'"Left"'},description:`Determines the horizontal alignment of the thumbnails menu
vs. the central display area.`,name:"menuHorizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Left"'},{value:'"Right"'},{value:'"Left"'},{value:'"Right"'}]}},menuVerticalAlign:{defaultValue:{value:'"Bottom"'},description:`Determines the vertical alignment of the thumbnails menu
vs. the central display area.`,name:"menuVerticalAlign",required:!1,type:{name:"enum",value:[{value:'"Top"'},{value:'"Bottom"'},{value:'"Top"'},{value:'"Bottom"'}]}},showAllThumbnails:{defaultValue:{value:"false"},description:"If set to `true`, all thumbnails are rendered in a scrollable container.\nIf `false`, only up to five thumbnails are rendered, followed by\nan overflow button that shows the count of the remaining thumbnails.",name:"showAllThumbnails",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="MediaGallery",g.__docgenInfo={description:`The \`MediaGallery\` component allows the user to browse through multimedia items. Currently,
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

- [Up] or [Down] - Navigates up and down the items
- [Home] - Navigates to first item
- [End] - Navigates to the last item
- [Space], [Enter] - Selects an item



\`import "@ui5/webcomponents-fiori/dist/MediaGalleryItem.js";\`

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"MediaGallery",props:{children:{defaultValue:null,description:`Defines the component items.

**Note:** Only one selected item is allowed.

**Note:** Use the \`MediaGalleryItem\` component to define the desired items.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onDisplayAreaClick:{defaultValue:null,description:`Fired when the display area is clicked.
The display area is the central area that contains
the enlarged content of the currently selected item.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onDisplayAreaClick",required:!1,type:{name:"(event: Ui5CustomEvent<MediaGalleryDomRef, never>) => void"}},onOverflowClick:{defaultValue:null,description:`Fired when the thumbnails overflow button is clicked.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onOverflowClick",required:!1,type:{name:"(event: Ui5CustomEvent<MediaGalleryDomRef, never>) => void"}},onSelectionChange:{defaultValue:null,description:`Fired when selection is changed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<MediaGalleryDomRef, MediaGallerySelectionChangeEventDetail>) => void"}},interactiveDisplayArea:{defaultValue:{value:"false"},description:`If enabled, a \`display-area-click\` event is fired
when the user clicks or taps on the display area.

The display area is the central area that contains
the enlarged content of the currently selected item.`,name:"interactiveDisplayArea",required:!1,type:{name:"boolean"}},layout:{defaultValue:{value:'"Auto"'},description:"Determines the layout of the component.",name:"layout",required:!1,type:{name:"enum",value:[{value:'"Auto"'},{value:'"Auto"'},{value:'"Vertical"'},{value:'"Horizontal"'},{value:'"Vertical"'},{value:'"Horizontal"'}]}},menuHorizontalAlign:{defaultValue:{value:'"Left"'},description:`Determines the horizontal alignment of the thumbnails menu
vs. the central display area.`,name:"menuHorizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Left"'},{value:'"Right"'},{value:'"Left"'},{value:'"Right"'}]}},menuVerticalAlign:{defaultValue:{value:'"Bottom"'},description:`Determines the vertical alignment of the thumbnails menu
vs. the central display area.`,name:"menuVerticalAlign",required:!1,type:{name:"enum",value:[{value:'"Top"'},{value:'"Bottom"'},{value:'"Top"'},{value:'"Bottom"'}]}},showAllThumbnails:{defaultValue:{value:"false"},description:"If set to `true`, all thumbnails are rendered in a scrollable container.\nIf `false`, only up to five thumbnails are rendered, followed by\nan overflow button that shows the count of the remaining thumbnails.",name:"showAllThumbnails",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const u=V("ui5-media-gallery-item",["layout"],["disabled","selected"],["thumbnail"],[]);u.displayName="MediaGalleryItem";try{u.displayName="MediaGalleryItem",u.__docgenInfo={description:`The \`MediaGalleryItem\` web component represents the items displayed in the
\`MediaGallery\` web component.

**Note:** \`MediaGalleryItem\` is not supported when used outside of \`MediaGallery\`.

### Keyboard Handling
The \`MediaGallery\` provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Space] / [Enter] or [Return] - Trigger \`ui5-click\` event

)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"MediaGalleryItem",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},thumbnail:{defaultValue:null,description:`Defines the content of the thumbnail.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="thumbnail"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"thumbnail",required:!1,type:{name:"UI5WCSlotsNode"}},disabled:{defaultValue:{value:"false"},description:"Defines whether the component is in disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},layout:{defaultValue:{value:'"Square"'},description:"Determines the layout of the item container.",name:"layout",required:!1,type:{name:"enum",value:[{value:'"Square"'},{value:'"Square"'},{value:'"Wide"'},{value:'"Wide"'}]}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{u.displayName="MediaGalleryItem",u.__docgenInfo={description:`The \`MediaGalleryItem\` web component represents the items displayed in the
\`MediaGallery\` web component.

**Note:** \`MediaGalleryItem\` is not supported when used outside of \`MediaGallery\`.

### Keyboard Handling
The \`MediaGallery\` provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Space] / [Enter] or [Return] - Trigger \`ui5-click\` event

)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"MediaGalleryItem",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},thumbnail:{defaultValue:null,description:`Defines the content of the thumbnail.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="thumbnail"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"thumbnail",required:!1,type:{name:"UI5WCSlotsNode"}},disabled:{defaultValue:{value:"false"},description:"Defines whether the component is in disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},layout:{defaultValue:{value:'"Square"'},description:"Determines the layout of the item container.",name:"layout",required:!1,type:{name:"enum",value:[{value:'"Square"'},{value:'"Square"'},{value:'"Wide"'},{value:'"Wide"'}]}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var D;(function(a){a.Left="Left",a.Right="Right"})(D||(D={}));var x;(function(a){a.Top="Top",a.Bottom="Bottom"})(x||(x={}));const te={title:"Layouts & Floorplans / MediaGallery",component:g,argTypes:{children:{control:{disable:!0}}},args:{layout:f.Auto,menuHorizontalAlign:D.Left,menuVerticalAlign:x.Bottom},tags:["package:@ui5/webcomponents-fiori"]},_={render:a=>o.jsxs(g,{...a,children:[o.jsx(u,{children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1000.jpg"})}),o.jsx(u,{children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1010.jpg"})}),o.jsx(u,{children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1022.jpg"})}),o.jsx(u,{children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1030.jpg"})}),o.jsx(u,{children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-2002.jpg"})}),o.jsx(u,{children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-2026.jpg"})})]})},w={render:a=>o.jsxs(g,{...a,children:[o.jsx(u,{thumbnail:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1000-small.jpg"}),children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1000.jpg"})}),o.jsx(u,{disabled:!0,children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1010.jpg"})})]})},I={render:a=>{const e=P.useRef(null),t=()=>{e.current.show()};return o.jsxs(o.Fragment,{children:[o.jsx($,{ref:e,children:"Display Area Clicked!"}),o.jsxs(g,{...a,interactiveDisplayArea:!0,onDisplayAreaClick:t,children:[o.jsx(u,{children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1000.jpg"})}),o.jsx(u,{selected:!0,children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/HT-1010.jpg"})})]})]})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};const ie=["Default","CustomThumbnail","InteractiveDisplayArea"],ue=Object.freeze(Object.defineProperty({__proto__:null,CustomThumbnail:w,Default:_,InteractiveDisplayArea:I,__namedExportsOrder:ie,default:te},Symbol.toStringTag,{value:"Module"}));export{ue as C,_ as D,I,u as M,w as a};
