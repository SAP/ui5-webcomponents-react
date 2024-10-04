import{p as b,q as T,v as k,a as N,s as G,b as m,m as D,z as F,U as R}from"./withWebComponent-m_Fq5lNf.js";import{d as H}from"./slot-_4yKMUwC.js";import{b as S,c as j,g as X,f as U,a as B,s as Y,i as q,m as E}from"./PopupsCommon.css-C0UbsxGP.js";import{a as K}from"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import{t as Z}from"./getActiveElement-kltGt_DR.js";import{s as O}from"./style-map-TzMr6uTh.js";import{o as $}from"./class-map-De2mf49U.js";import{s as J}from"./parameters-bundle.css-BOSi_lPd.js";const Q=r=>{const t=getComputedStyle(r);return["size","inline-size"].indexOf(t.containerType)>-1||["transform","perspective"].indexOf(t.willChange)>-1||["layout","paint","strict","content"].indexOf(t.contain)>-1||t.transform&&t.transform!=="none"||t.perspective&&t.perspective!=="none"||t.backdropFilter&&t.backdropFilter!=="none"},C=r=>r.parentElement?r.parentNode:r.parentNode.host,z={toAttribute(r){return r instanceof HTMLElement?null:r},fromAttribute(r){return r}};var x;(function(r){r.Start="Start",r.End="End",r.Top="Top",r.Bottom="Bottom"})(x||(x={}));const p=x;var A;(function(r){r.Center="Center",r.Top="Top",r.Bottom="Bottom",r.Stretch="Stretch"})(A||(A={}));const y=A;var M;(function(r){r.Center="Center",r.Start="Start",r.End="End",r.Stretch="Stretch"})(M||(M={}));const d=M;let W;const tt=300,u=[],P=()=>{u.forEach(r=>{r.instance.reposition()})},et=()=>{Z().tagName==="IFRAME"&&ut().reverse().forEach(r=>r.instance.closePopup(!1,!1,!0))},ot=()=>{W=setInterval(()=>{P(),et()},tt)},rt=()=>{clearInterval(W)},it=()=>{document.addEventListener("scroll",P,{capture:!0})},nt=()=>{document.removeEventListener("scroll",P,{capture:!0})},st=r=>{r&&r.shadowRoot.addEventListener("scroll",P,{capture:!0})},at=r=>{r&&r.shadowRoot.removeEventListener("scroll",P,{capture:!0})},lt=()=>{document.addEventListener("mousedown",L)},ht=()=>{document.removeEventListener("mousedown",L)},L=r=>{const t=X();if(!(t.length===0||!yt(t[t.length-1].instance)))for(let o=t.length-1;o!==-1;o--){const i=t[o].instance;if(i.isModal||i.isOpenerClicked(r))return;if(U(r,i.getBoundingClientRect()))break;i.closePopup()}},pt=r=>{const t=dt(r);S(r,t),u.push({instance:r,parentPopovers:t}),st(r),u.length===1&&(it(),lt(),ot())},ct=r=>{const t=[r];for(let e=0;e<u.length;e++){const o=u[e].parentPopovers.indexOf(r);u[e].parentPopovers.length>0&&o>-1&&t.push(u[e].instance)}for(let e=t.length-1;e>=0;e--)for(let o=0;o<u.length;o++){let i=-1;t[e]===u[o].instance&&(i=o),i>=0&&(j(u[i].instance),at(u[i].instance),u.splice(i,1)[0].instance.closePopup(!1,!0))}u.length||(nt(),ht(),rt())},ut=()=>u,dt=r=>{let t=r.parentNode;const e=[];for(;t&&t.parentNode;){for(let o=0;o<u.length;o++)t===u[o].instance&&e.push(t);t=t.parentNode}return e};function mt(r,t,e){return b`<div class="ui5-block-layer" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div><section root-element style="${O(this.styles.root)}" class="${$(this.classes.root)}" role="${T(this._role)}" aria-modal="${T(this._ariaModal)}" aria-label="${T(this._ariaLabel)}" aria-labelledby="${T(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${O(this.styles.arrow)}"></span>${this._displayHeader?ft.call(this,r,t,e):void 0}<div style="${O(this.styles.content)}" class="${$(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter?gt.call(this,r,t,e):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function ft(r,t,e){return b`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length?_t.call(this,r,t,e):wt.call(this,r,t,e)}</header>`}function _t(r,t,e){return b`<slot name="header"></slot>`}function wt(r,t,e){return e?b`<${k("ui5-title",t,e)} level="H1" class="ui5-popup-header-text">${T(this.headerText)}</${k("ui5-title",t,e)}>`:b`<ui5-title level="H1" class="ui5-popup-header-text">${T(this.headerText)}</ui5-title>`}function gt(r,t,e){return b`${this.footer.length?vt.call(this,r,t,e):void 0}`}function vt(r,t,e){return b`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}N("@ui5/webcomponents-theming","sap_horizon",async()=>G);N("@ui5/webcomponents","sap_horizon",async()=>J);const bt={packageName:"@ui5/webcomponents",fileName:"themes/Popover.css.ts",content:`:host{box-shadow:var(--_ui5-v2-3-0_popover_box_shadow);background-color:var(--_ui5-v2-3-0_popover_background);max-width:calc(100vw - (100vw - 100%) - 2 * var(--_ui5-v2-3-0_popup_viewport_margin))}:host([hide-arrow]){box-shadow:var(--_ui5-v2-3-0_popover_no_arrow_box_shadow)}:host([opened][actual-placement="Top"]){margin-top:var(--_ui5-v2-3-0-popover-margin-bottom)}:host([opened][actual-placement="Bottom"]){margin-top:var(--_ui5-v2-3-0-popover-margin-top)}:host([actual-placement="Bottom"]) .ui5-popover-arrow{left:calc(50% - .5625rem);top:-.5rem;height:.5rem}:host([actual-placement="Bottom"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-3-0_popover_upward_arrow_margin)}:host([actual-placement="Start"]) .ui5-popover-arrow{top:calc(50% - .5625rem);right:-.5625rem;width:.5625rem}:host([actual-placement="Start"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-3-0_popover_right_arrow_margin)}:host([actual-placement="Top"]) .ui5-popover-arrow{left:calc(50% - .5625rem);height:.5625rem;top:100%}:host([actual-placement="Top"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-3-0_popover_downward_arrow_margin)}:host(:not([actual-placement])) .ui5-popover-arrow,:host([actual-placement="End"]) .ui5-popover-arrow{left:-.5625rem;top:calc(50% - .5625rem);width:.5625rem;height:1rem}:host(:not([actual-placement])) .ui5-popover-arrow:after,:host([actual-placement="End"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-3-0_popover_left_arrow_margin)}:host([hide-arrow]) .ui5-popover-arrow{display:none}.ui5-popover-root{min-width:6.25rem}.ui5-popover-arrow{pointer-events:none;display:block;width:1rem;height:1rem;position:absolute;overflow:hidden}.ui5-popover-arrow:after{content:"";display:block;width:.7rem;height:.7rem;background-color:var(--_ui5-v2-3-0_popover_background);box-shadow:var(--_ui5-v2-3-0_popover_box_shadow);transform:rotate(-45deg)}:host([modal])::backdrop{background-color:var(--_ui5-v2-3-0_popup_block_layer_background);opacity:var(--_ui5-v2-3-0_popup_block_layer_opacity)}:host([modal]) .ui5-block-layer{display:block}
`};var c=function(r,t,e,o){var i=arguments.length,n=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,t,e,o);else for(var h=r.length-1;h>=0;h--)(s=r[h])&&(n=(i<3?s(n):i>3?s(t,e,n):s(t,e))||n);return i>3&&n&&Object.defineProperty(t,e,n),n},l;const I=8;let a=l=class extends B{static get VIEWPORT_MARGIN(){return 10}constructor(){super(),this.placement="End",this.horizontalAlign="Center",this.verticalAlign="Center",this.modal=!1,this.hideArrow=!1,this.allowTargetOverlap=!1,this.disableScrolling=!1,this.arrowTranslateX=0,this.arrowTranslateY=0,this.actualPlacement="End"}set opener(t){this._opener!==t&&(this._opener=t,t&&this.open&&this.openPopup())}get opener(){return this._opener}async openPopup(){if(this._opened)return;const t=this.getOpenerHTMLElement(this.opener);if(!t){console.warn("Valid opener id is required. It must be defined before opening the popover.");return}if(this.isOpenerOutsideViewport(t.getBoundingClientRect())){await F(),this.open=!1,this.fireEvent("close",{},!1,!1);return}this._openerRect=t.getBoundingClientRect(),await super.openPopup()}isOpenerClicked(t){const e=t.target;if(e===this._opener)return!0;const o=e;return o.getFocusDomRef&&o.getFocusDomRef()===this._opener?!0:t.composedPath().indexOf(this._opener)>-1}_addOpenedPopup(){pt(this)}_removeOpenedPopup(){ct(this)}getOpenerHTMLElement(t){if(t===void 0||t instanceof HTMLElement)return t;const e=this.getRootNode();return e instanceof Document?e.getElementById(t):document.getElementById(t)}shouldCloseDueToOverflow(t,e){const i={Start:e.right,End:e.left,Top:e.top,Bottom:e.bottom},n=this.getOpenerHTMLElement(this.opener),s=q(n);let h=!1,w=!1;if(s instanceof l){const f=s.contentDOM.getBoundingClientRect();h=e.top>f.top+f.height,w=e.top+e.height<f.top}return i[t]<0||i[t]+32>s.innerHeight||h||w}shouldCloseDueToNoOpener(t){return t.top===0&&t.bottom===0&&t.left===0&&t.right===0}isOpenerOutsideViewport(t){return t.bottom<0||t.top>window.innerHeight||t.right<0||t.left>window.innerWidth}_resize(){super._resize(),this.open&&this.reposition()}reposition(){this._show()}async _show(){super._show();const t=this.getOpenerHTMLElement(this.opener);if(t&&this._isUI5Element(t)&&!t.getDomRef())return;this._opened||this._showOutsideViewport();const e=this.getPopoverSize();let o;if(e.width===0||e.height===0)return;if(this.open&&(this._openerRect=t.getBoundingClientRect()),this._oldPlacement&&this.shouldCloseDueToNoOpener(this._openerRect)&&this.isFocusWithin()?o=this._oldPlacement:o=this.calcPlacement(this._openerRect,e),this._preventRepositionAndClose||this.isOpenerOutsideViewport(this._openerRect))return await this._waitForDomRef(),this.closePopup();this._oldPlacement=o,this.actualPlacement=o.placement;let i=E(this._left,l.VIEWPORT_MARGIN,document.documentElement.clientWidth-e.width-l.VIEWPORT_MARGIN);this.actualPlacement===p.End&&(i=Math.max(i,this._left));let n=E(this._top,l.VIEWPORT_MARGIN,document.documentElement.clientHeight-e.height-l.VIEWPORT_MARGIN);this.actualPlacement===p.Bottom&&(n=Math.max(n,this._top)),this.arrowTranslateX=o.arrow.x,this.arrowTranslateY=o.arrow.y,n=this._adjustForIOSKeyboard(n),Object.assign(this.style,{top:`${n}px`,left:`${i}px`}),this.horizontalAlign===d.Stretch&&this._width&&(this.style.width=this._width),this.verticalAlign===y.Stretch&&this._height&&(this.style.height=this._height)}_adjustForIOSKeyboard(t){if(!R())return t;const e=Math.ceil(this.getBoundingClientRect().top);return t+(Number.parseInt(this.style.top||"0")-e)}_getContainingBlockClientLocation(){let t=C(this);for(;t;){if(Q(t))return t.getBoundingClientRect();t=C(t)}return{left:0,top:0}}getPopoverSize(){const t=this.getBoundingClientRect(),e=t.width,o=t.height;return{width:e,height:o}}_showOutsideViewport(){Object.assign(this.style,{top:"-10000px",left:"-10000px"})}_isUI5Element(t){return"isUI5Element"in t}get arrowDOM(){return this.shadowRoot.querySelector(".ui5-popover-arrow")}calcPlacement(t,e){let o=l.VIEWPORT_MARGIN,i=0;const n=this.allowTargetOverlap,s=document.documentElement.clientWidth,h=document.documentElement.clientHeight;let w=h,f=s;const g=this.getActualPlacement(t,e);this._preventRepositionAndClose=this.shouldCloseDueToNoOpener(t)||this.shouldCloseDueToOverflow(g,t);const v=g===p.Top||g===p.Bottom;this.horizontalAlign===d.Stretch&&v?(e.width=t.width,this._width=`${t.width}px`):this.verticalAlign===y.Stretch&&!v&&(e.height=t.height,this._height=`${t.height}px`);const _=this.hideArrow?0:I;switch(g){case p.Top:o=this.getVerticalLeft(t,e),i=Math.max(t.top-e.height-_,0),n||(w=t.top-_);break;case p.Bottom:o=this.getVerticalLeft(t,e),i=t.bottom+_,n?i=Math.max(Math.min(i,h-e.height),0):w=h-t.bottom-_;break;case p.Start:o=Math.max(t.left-e.width-_,0),i=this.getHorizontalTop(t,e),n||(f=t.left-_);break;case p.End:o=t.left+t.width+_,i=this.getHorizontalTop(t,e),n?o=Math.max(Math.min(o,s-e.width),0):f=s-t.right-_;break}v?e.width>s||o<l.VIEWPORT_MARGIN?o=l.VIEWPORT_MARGIN:o+e.width>s-l.VIEWPORT_MARGIN&&(o=s-l.VIEWPORT_MARGIN-e.width):e.height>h||i<l.VIEWPORT_MARGIN?i=l.VIEWPORT_MARGIN:i+e.height>h-l.VIEWPORT_MARGIN&&(i=h-l.VIEWPORT_MARGIN-e.height),this._maxHeight=Math.round(w-l.VIEWPORT_MARGIN),this._maxWidth=Math.round(f-l.VIEWPORT_MARGIN),(this._left===void 0||Math.abs(this._left-o)>1.5)&&(this._left=Math.round(o)),(this._top===void 0||Math.abs(this._top-i)>1.5)&&(this._top=Math.round(i));const V=Number.parseInt(window.getComputedStyle(this).getPropertyValue("border-radius"));return{arrow:this.getArrowPosition(t,e,o,i,v,V),top:this._top,left:this._left,placement:g}}getArrowPosition(t,e,o,i,n,s){const h=this._actualHorizontalAlign;let w=h===d.Center||h===d.Stretch;h===d.End&&o<=t.left&&(w=!0),h===d.Start&&o+e.width>=t.left+t.width&&(w=!0);let f=0;n&&w&&(f=t.left+t.width/2-o-e.width/2);let g=0;n||(g=t.top+t.height/2-i-e.height/2);const v=e.height/2-s-I/2;g=E(g,-v,v);const _=e.width/2-s-I/2;return f=E(f,-_,_),{x:Math.round(f),y:Math.round(g)}}fallbackPlacement(t,e,o,i){if(o.left>i.width)return p.Start;if(t-o.right>o.left)return p.End;if(e-o.bottom>i.height)return p.Bottom;if(e-o.bottom<o.top)return p.Top}getActualPlacement(t,e){const o=this.placement;let i=o;const n=document.documentElement.clientWidth,s=document.documentElement.clientHeight;switch(o){case p.Top:t.top<e.height&&t.top<s-t.bottom&&(i=p.Bottom);break;case p.Bottom:s-t.bottom<e.height&&s-t.bottom<t.top&&(i=p.Top);break;case p.Start:t.left<e.width&&(i=this.fallbackPlacement(n,s,t,e)||o);break;case p.End:n-t.right<e.width&&(i=this.fallbackPlacement(n,s,t,e)||o);break}return i}getVerticalLeft(t,e){const o=this._actualHorizontalAlign;let i=l.VIEWPORT_MARGIN;switch(o){case d.Center:case d.Stretch:i=t.left-(e.width-t.width)/2;break;case d.Start:i=t.left;break;case d.End:i=t.right-e.width;break}return i}getHorizontalTop(t,e){let o=0;switch(this.verticalAlign){case y.Center:case y.Stretch:o=t.top-(e.height-t.height)/2;break;case y.Top:o=t.top;break;case y.Bottom:o=t.bottom-e.height;break}return o}get isModal(){return this.modal}get _ariaLabelledBy(){if(!this._ariaLabel&&this._displayHeader)return"ui5-popup-header"}get styles(){return{...super.styles,root:{"max-height":this._maxHeight?`${this._maxHeight}px`:"","max-width":this._maxWidth?`${this._maxWidth}px`:""},arrow:{transform:`translate(${this.arrowTranslateX}px, ${this.arrowTranslateY}px)`}}}get classes(){const t=super.classes;return t.root["ui5-popover-root"]=!0,t}get _displayHeader(){return!!(this.header.length||this.headerText)}get _displayFooter(){return!0}get _actualHorizontalAlign(){if(this.effectiveDir==="rtl"){if(this.horizontalAlign===d.Start)return d.End;if(this.horizontalAlign===d.End)return d.Start}return this.horizontalAlign}};c([m()],a.prototype,"headerText",void 0);c([m()],a.prototype,"placement",void 0);c([m()],a.prototype,"horizontalAlign",void 0);c([m()],a.prototype,"verticalAlign",void 0);c([m({type:Boolean})],a.prototype,"modal",void 0);c([m({type:Boolean})],a.prototype,"hideArrow",void 0);c([m({type:Boolean})],a.prototype,"allowTargetOverlap",void 0);c([m({type:Boolean})],a.prototype,"disableScrolling",void 0);c([m({type:Number,noAttribute:!0})],a.prototype,"arrowTranslateX",void 0);c([m({type:Number,noAttribute:!0})],a.prototype,"arrowTranslateY",void 0);c([m()],a.prototype,"actualPlacement",void 0);c([m({type:Number,noAttribute:!0})],a.prototype,"_maxHeight",void 0);c([m({type:Number,noAttribute:!0})],a.prototype,"_maxWidth",void 0);c([H({type:HTMLElement})],a.prototype,"header",void 0);c([H({type:HTMLElement})],a.prototype,"footer",void 0);c([m({converter:z})],a.prototype,"opener",null);a=l=c([D({tag:"ui5-popover",styles:[B.styles,Y,bt,K()],template:mt})],a);const yt=r=>"opener"in r;a.define();const Ct=a;export{p as P,d as a,y as b,Ct as c,z as e};
