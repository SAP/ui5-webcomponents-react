import{a as b,l as T,s as R,p as u,c as D}from"./withWebComponent-DvmwIdUK.js";import{s as L}from"./slot-Df15G--e.js";import{D as G,I as x}from"./Integer-Dh6YzFpK.js";import{m as F}from"./useIsomorphicLayoutEffect-VT0hzFUo.js";import{i as j,a as X}from"./PopupUtils-CoIIx-oA.js";import{b as Y,r as q,g as K,a as U,c as O,s as Z}from"./PopupsCommon.css-BspShIhm.js";import{g as J}from"./getActiveElement-BL9Yqj8a.js";import{s as A}from"./style-map-RUCW1mQv.js";import{o as M}from"./class-map-CS8eahb3.js";import{s as Q}from"./BrowserScrollbar.css-BTaDXFx1.js";import{r as $}from"./Boot-BVnGU0ip.js";import{s as S}from"./parameters-bundle.css-kZpvVQc-.js";var k;(function(i){i.Center="Center",i.Left="Left",i.Right="Right",i.Stretch="Stretch"})(k||(k={}));const c=k;var C;(function(i){i.Left="Left",i.Right="Right",i.Top="Top",i.Bottom="Bottom"})(C||(C={}));const a=C;var E;(function(i){i.Center="Center",i.Top="Top",i.Bottom="Bottom",i.Stretch="Stretch"})(E||(E={}));const y=E;class z extends G{static isValid(t){return typeof t=="string"||t instanceof HTMLElement}static propertyToAttribute(t){return t instanceof HTMLElement?null:t}}const tt=i=>{const t=getComputedStyle(i);return["size","inline-size"].indexOf(t.containerType)>-1||["transform","perspective"].indexOf(t.willChange)>-1||["layout","paint","strict","content"].indexOf(t.contain)>-1||t.transform&&t.transform!=="none"||t.perspective&&t.perspective!=="none"||t.backdropFilter&&t.backdropFilter!=="none"},B=i=>i.parentElement?i.parentNode:i.parentNode.host;let H;const et=300,d=[],P=()=>{d.forEach(i=>{i.instance.reposition()})},ot=()=>{J().tagName==="IFRAME"&&ut().reverse().forEach(i=>i.instance.close(!1,!1,!0))},it=()=>{H=setInterval(()=>{P(),ot()},et)},rt=()=>{clearInterval(H)},nt=()=>{document.addEventListener("scroll",P,{capture:!0})},st=()=>{document.removeEventListener("scroll",P,{capture:!0})},at=i=>{i&&i.shadowRoot.addEventListener("scroll",P,{capture:!0})},lt=i=>{i&&i.shadowRoot.removeEventListener("scroll",P,{capture:!0})},ht=()=>{document.addEventListener("mousedown",N)},pt=()=>{document.removeEventListener("mousedown",N)},N=i=>{const t=K();if(!(t.length===0||!V(t[t.length-1].instance)))for(let o=t.length-1;o!==-1;o--){const r=t[o].instance;if(r.isModal||r.isOpenerClicked(i))return;if(j(i,r.getBoundingClientRect()))break;r.close()}},ct=i=>{const t=ft(i);Y(i,t),d.push({instance:i,parentPopovers:t}),at(i),d.length===1&&(nt(),ht(),it())},dt=i=>{const t=[i];for(let e=0;e<d.length;e++){const o=d[e].parentPopovers.indexOf(i);d[e].parentPopovers.length>0&&o>-1&&t.push(d[e].instance)}for(let e=t.length-1;e>=0;e--)for(let o=0;o<d.length;o++){let r=-1;t[e]===d[o].instance&&(r=o),r>=0&&(q(d[r].instance),lt(d[r].instance),d.splice(r,1)[0].instance.close(!1,!0))}d.length||(st(),pt(),rt())},ut=()=>d,ft=i=>{let t=i.parentNode;const e=[];for(;t&&t.parentNode;){for(let o=0;o<d.length;o++)t===d[o].instance&&e.push(t);t=t.parentNode}return e};function mt(i,t,e){return b`<section style="${A(this.styles.root)}" class="${M(this.classes.root)}" role="${T(this._role)}" aria-modal="${T(this._ariaModal)}" aria-label="${T(this._ariaLabel)}" aria-labelledby="${T(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${A(this.styles.arrow)}"></span>${this._displayHeader?gt.call(this,i,t,e):void 0}<div style="${A(this.styles.content)}" class="${M(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter?vt.call(this,i,t,e):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function gt(i,t,e){return b`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length?wt.call(this,i,t,e):_t.call(this,i,t,e)}</header>`}function wt(i,t,e){return b`<slot name="header"></slot>`}function _t(i,t,e){return b`<h1 class="ui5-popup-header-text">${T(this.headerText)}</h1>`}function vt(i,t,e){return b`${this.footer.length?yt.call(this,i,t,e):void 0}`}function yt(i,t,e){return b`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}$("@ui5/webcomponents-theming","sap_horizon",async()=>R);$("@ui5/webcomponents","sap_horizon",async()=>S);const bt={packageName:"@ui5/webcomponents",fileName:"themes/Popover.css.ts",content:`:host{box-shadow:var(--_ui5-v1-24-4_popover_box_shadow);background-color:var(--_ui5-v1-24-4_popover_background);max-width:calc(100vw - (100vw - 100%) - 2 * var(--_ui5-v1-24-4_popup_viewport_margin))}:host([hide-arrow]){box-shadow:var(--_ui5-v1-24-4_popover_no_arrow_box_shadow)}:host([opened][actual-placement-type="Top"]){margin-top:var(--_ui5-v1-24-4-popover-margin-bottom)}:host([opened][actual-placement-type="Bottom"]){margin-top:var(--_ui5-v1-24-4-popover-margin-top)}:host([actual-placement-type="Bottom"]) .ui5-popover-arrow{left:calc(50% - .5625rem);top:-.5rem;height:.5625rem}:host([actual-placement-type="Bottom"]) .ui5-popover-arrow:after{margin:var(--_ui5-v1-24-4_popover_upward_arrow_margin)}:host([actual-placement-type="Left"]) .ui5-popover-arrow{top:calc(50% - .5625rem);right:-.5625rem;width:.5625rem}:host([actual-placement-type="Left"]) .ui5-popover-arrow:after{margin:var(--_ui5-v1-24-4_popover_right_arrow_margin)}:host([actual-placement-type="Top"]) .ui5-popover-arrow{left:calc(50% - .5625rem);height:.5625rem;top:100%}:host([actual-placement-type="Top"]) .ui5-popover-arrow:after{margin:var(--_ui5-v1-24-4_popover_downward_arrow_margin)}:host(:not([actual-placement-type])) .ui5-popover-arrow,:host([actual-placement-type="Right"]) .ui5-popover-arrow{left:-.5625rem;top:calc(50% - .5625rem);width:.5625rem;height:1rem}:host(:not([actual-placement-type])) .ui5-popover-arrow:after,:host([actual-placement-type="Right"]) .ui5-popover-arrow:after{margin:var(--_ui5-v1-24-4_popover_left_arrow_margin)}:host([hide-arrow]) .ui5-popover-arrow{display:none}.ui5-popover-root{min-width:6.25rem}.ui5-popover-arrow{pointer-events:none;display:block;width:1rem;height:1rem;position:absolute;overflow:hidden}.ui5-popover-arrow:after{content:"";display:block;width:.7rem;height:.7rem;background-color:var(--_ui5-v1-24-4_popover_background);box-shadow:var(--_ui5-v1-24-4_popover_box_shadow);transform:rotate(-45deg)}
`};var p=function(i,t,e,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,o);else for(var h=i.length-1;h>=0;h--)(s=i[h])&&(n=(r<3?s(n):r>3?s(t,e,n):s(t,e))||n);return r>3&&n&&Object.defineProperty(t,e,n),n},f;const I=8;let l=f=class extends U{static get VIEWPORT_MARGIN(){return 10}constructor(){super()}onAfterRendering(){if(super.onAfterRendering(),!this.isOpen()&&this.open){let t;if(this.opener instanceof HTMLElement?t=this.opener:typeof this.opener=="string"&&(t=this.getRootNode().getElementById(this.opener)||document.getElementById(this.opener)),!t){console.warn("Valid opener id is required.");return}this.showAt(t)}else this.isOpen()&&!this.open&&this.close()}isOpenerClicked(t){const e=t.target;if(e===this._opener)return!0;const o=e;return o.getFocusDomRef&&o.getFocusDomRef()===this._opener?!0:t.composedPath().indexOf(this._opener)>-1}async showAt(t,e=!1){!t||this.opened||(this._opener=t,this._openerRect=t.getBoundingClientRect(),await super._open(e))}_addOpenedPopup(){ct(this)}_removeOpenedPopup(){dt(this)}shouldCloseDueToOverflow(t,e){const r={Right:e.right,Left:e.left,Top:e.top,Bottom:e.bottom},n=X(this._opener);let s=!1,h=!1;if(n.showAt){const m=n.contentDOM.getBoundingClientRect();s=e.top>m.top+m.height,h=e.top+e.height<m.top}return r[t]<0||r[t]+32>n.innerHeight||s||h}shouldCloseDueToNoOpener(t){return t.top===0&&t.bottom===0&&t.left===0&&t.right===0}isOpenerOutsideViewport(t){return t.bottom<0||t.top>window.innerHeight||t.right<0||t.left>window.innerWidth}_resize(){super._resize(),this.opened&&this.reposition()}reposition(){this._show()}_show(){this.opened||this._showOutsideViewport();const t=this.getPopoverSize();let e;if(t.width===0||t.height===0)return;if(this.isOpen()&&(this._openerRect=this._opener.getBoundingClientRect()),this.shouldCloseDueToNoOpener(this._openerRect)&&this.isFocusWithin()&&this._oldPlacement?e=this._oldPlacement:e=this.calcPlacement(this._openerRect,t),this._preventRepositionAndClose||this.isOpenerOutsideViewport(this._openerRect))return this.close();this._oldPlacement=e,this.actualPlacementType=e.placementType;let o=O(this._left,f.VIEWPORT_MARGIN,document.documentElement.clientWidth-t.width-f.VIEWPORT_MARGIN);this.actualPlacementType===a.Right&&(o=Math.max(o,this._left));let r=O(this._top,f.VIEWPORT_MARGIN,document.documentElement.clientHeight-t.height-f.VIEWPORT_MARGIN);this.actualPlacementType===a.Bottom&&(r=Math.max(r,this._top)),this.arrowTranslateX=e.arrow.x,this.arrowTranslateY=e.arrow.y,r=this._adjustForIOSKeyboard(r);const n=this._getContainingBlockClientLocation();o-=n.left,r-=n.top,Object.assign(this.style,{top:`${r}px`,left:`${o}px`}),this.horizontalAlign===c.Stretch&&this._width&&(this.style.width=this._width)}_adjustForIOSKeyboard(t){if(!F())return t;const e=Math.ceil(this.getBoundingClientRect().top);return t+(Number.parseInt(this.style.top||"0")-e)}_getContainingBlockClientLocation(){let t=B(this);for(;t;){if(tt(t))return t.getBoundingClientRect();t=B(t)}return{left:0,top:0}}getPopoverSize(){const t=this.getBoundingClientRect(),e=t.width,o=t.height;return{width:e,height:o}}_showOutsideViewport(){Object.assign(this.style,{display:this._displayProp,top:"-10000px",left:"-10000px"})}get arrowDOM(){return this.shadowRoot.querySelector(".ui5-popover-arrow")}calcPlacement(t,e){let o=f.VIEWPORT_MARGIN,r=0;const n=this.allowTargetOverlap,s=document.documentElement.clientWidth,h=document.documentElement.clientHeight;let m=h,_=s;const w=this.getActualPlacementType(t,e);this._preventRepositionAndClose=this.shouldCloseDueToNoOpener(t)||this.shouldCloseDueToOverflow(w,t);const v=w===a.Top||w===a.Bottom;this.horizontalAlign===c.Stretch&&v?(e.width=t.width,this._width=`${t.width}px`):this.verticalAlign===y.Stretch&&!v&&(e.height=t.height);const g=this.hideArrow?0:I;switch(w){case a.Top:o=this.getVerticalLeft(t,e),r=Math.max(t.top-e.height-g,0),n||(m=t.top-g);break;case a.Bottom:o=this.getVerticalLeft(t,e),r=t.bottom+g,n?r=Math.max(Math.min(r,h-e.height),0):m=h-t.bottom-g;break;case a.Left:o=Math.max(t.left-e.width-g,0),r=this.getHorizontalTop(t,e),n||(_=t.left-g);break;case a.Right:o=t.left+t.width+g,r=this.getHorizontalTop(t,e),n?o=Math.max(Math.min(o,s-e.width),0):_=s-t.right-g;break}v?e.width>s||o<f.VIEWPORT_MARGIN?o=f.VIEWPORT_MARGIN:o+e.width>s-f.VIEWPORT_MARGIN&&(o=s-f.VIEWPORT_MARGIN-e.width):e.height>h||r<0?r=0:r+e.height>h&&(r-=r+e.height-h),this._maxHeight=Math.round(m-f.VIEWPORT_MARGIN),this._maxWidth=Math.round(_-f.VIEWPORT_MARGIN),(this._left===void 0||Math.abs(this._left-o)>1.5)&&(this._left=Math.round(o)),(this._top===void 0||Math.abs(this._top-r)>1.5)&&(this._top=Math.round(r));const W=Number.parseInt(window.getComputedStyle(this).getPropertyValue("border-radius"));return{arrow:this.getArrowPosition(t,e,o,r,v,W),top:this._top,left:this._left,placementType:w}}getArrowPosition(t,e,o,r,n,s){const h=this._actualHorizontalAlign;let m=h===c.Center||h===c.Stretch;h===c.Right&&o<=t.left&&(m=!0),h===c.Left&&o+e.width>=t.left+t.width&&(m=!0);let _=0;n&&m&&(_=t.left+t.width/2-o-e.width/2);let w=0;n||(w=t.top+t.height/2-r-e.height/2);const v=e.height/2-s-I/2;w=O(w,-v,v);const g=e.width/2-s-I/2;return _=O(_,-g,g),{x:Math.round(_),y:Math.round(w)}}fallbackPlacement(t,e,o,r){if(o.left>r.width)return a.Left;if(t-o.right>o.left)return a.Right;if(e-o.bottom>r.height)return a.Bottom;if(e-o.bottom<o.top)return a.Top}getActualPlacementType(t,e){const o=this.placementType;let r=o;const n=document.documentElement.clientWidth,s=document.documentElement.clientHeight;switch(o){case a.Top:t.top<e.height&&t.top<s-t.bottom&&(r=a.Bottom);break;case a.Bottom:s-t.bottom<e.height&&s-t.bottom<t.top&&(r=a.Top);break;case a.Left:t.left<e.width&&(r=this.fallbackPlacement(n,s,t,e)||o);break;case a.Right:n-t.right<e.width&&(r=this.fallbackPlacement(n,s,t,e)||o);break}return r}getVerticalLeft(t,e){const o=this._actualHorizontalAlign;let r=f.VIEWPORT_MARGIN;switch(o){case c.Center:case c.Stretch:r=t.left-(e.width-t.width)/2;break;case c.Left:r=t.left;break;case c.Right:r=t.right-e.width;break}return r}getHorizontalTop(t,e){let o=0;switch(this.verticalAlign){case y.Center:case y.Stretch:o=t.top-(e.height-t.height)/2;break;case y.Top:o=t.top;break;case y.Bottom:o=t.bottom-e.height;break}return o}get isModal(){return this.modal}get shouldHideBackdrop(){return this.hideBackdrop}get _ariaLabelledBy(){if(!this._ariaLabel&&this._displayHeader)return"ui5-popup-header"}get styles(){return{...super.styles,root:{"max-height":this._maxHeight?`${this._maxHeight}px`:"","max-width":this._maxWidth?`${this._maxWidth}px`:""},arrow:{transform:`translate(${this.arrowTranslateX}px, ${this.arrowTranslateY}px)`}}}get classes(){const t=super.classes;return t.root["ui5-popover-root"]=!0,t}get _displayHeader(){return!!(this.header.length||this.headerText)}get _displayFooter(){return!0}get _actualHorizontalAlign(){if(this.effectiveDir==="rtl"){if(this.horizontalAlign===c.Left)return c.Right;if(this.horizontalAlign===c.Right)return c.Left}return this.horizontalAlign}};p([u()],l.prototype,"headerText",void 0);p([u({type:a,defaultValue:a.Right})],l.prototype,"placementType",void 0);p([u({type:c,defaultValue:c.Center})],l.prototype,"horizontalAlign",void 0);p([u({type:y,defaultValue:y.Center})],l.prototype,"verticalAlign",void 0);p([u({type:Boolean})],l.prototype,"modal",void 0);p([u({type:Boolean})],l.prototype,"hideBackdrop",void 0);p([u({type:Boolean})],l.prototype,"hideArrow",void 0);p([u({type:Boolean})],l.prototype,"allowTargetOverlap",void 0);p([u({validator:z})],l.prototype,"opener",void 0);p([u({type:Boolean})],l.prototype,"disableScrolling",void 0);p([u({validator:x,defaultValue:0,noAttribute:!0})],l.prototype,"arrowTranslateX",void 0);p([u({validator:x,defaultValue:0,noAttribute:!0})],l.prototype,"arrowTranslateY",void 0);p([u({type:a,defaultValue:a.Right})],l.prototype,"actualPlacementType",void 0);p([u({validator:x,noAttribute:!0})],l.prototype,"_maxHeight",void 0);p([u({validator:x,noAttribute:!0})],l.prototype,"_maxWidth",void 0);p([L({type:HTMLElement})],l.prototype,"header",void 0);p([L({type:HTMLElement})],l.prototype,"footer",void 0);l=f=p([D({tag:"ui5-popover",styles:[Q,Z,bt],template:mt})],l);const V=i=>"showAt"in i;l.define();const Tt=l,Vt=Object.freeze(Object.defineProperty({__proto__:null,default:Tt,instanceOfPopover:V},Symbol.toStringTag,{value:"Module"}));export{z as D,a as P,c as a,y as b,Tt as c,Vt as d,bt as s};
