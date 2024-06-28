import{j as n}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{b as Z}from"./Avatar-BLWqVh2K.js";import{b as ee,B as I}from"./Button-BDXX69rx.js";import{s as ne}from"./spacing-Bgb-YkCp.js";import{r as E}from"./index-DEe9W-hO.js";import{F as L,a as te}from"./index-B6HtmUYb.js";import{T as _}from"./index-D455cKCd.js";import{T as M,a as B}from"./index-HEQKWKrx.js";import{T as H}from"./index-BZMbqCcr.js";import{A as $}from"./index-CFBUg_hp.js";import{B as k}from"./index-DXAsIx8K.js";import{C as oe}from"./index-HJQY5P64.js";import{L as D}from"./index-DJfaJ5yI.js";import{L as w}from"./index-Ddy-7jcZ.js";import{L as u}from"./index-Dx85YCTW.js";import{R as ie}from"./index-BUWOVn9j.js";import{S as ae}from"./index-DXmeI_vs.js";import{T as O}from"./index-CIuYQiLD.js";import{_ as re}from"./iframe-DY5bb0x3.js";import{C as le}from"./UI5Element-GBezswur.js";import{b as j,l as t,f as A,s as se,a as b,m as de,c as ue,w as me}from"./withWebComponent-ystZv1Rq.js";import{d as R}from"./slot-_4yKMUwC.js";import{s as ce}from"./event-Dq0fpeHi.js";import{f as N}from"./ResizeHandler-DDwTWVjk.js";import{e as he}from"./Float-C8QKXwz5.js";import{a as pe}from"./Integer-DgRYWdxf.js";import{f as ye}from"./i18nBundle-BRH4h-L2.js";import{f as J,c as P}from"./Boot-CS6Wsrzl.js";import{e as U}from"./AnimationMode-B-wovBId.js";import"./slim-arrow-left-CHr4Me90.js";import"./slim-arrow-right-pIbcHzBu.js";import{ae as fe,af as ge,ag as be,ah as Ce,ai as ve,aj as xe,ak as we}from"./i18n-defaults-YaANGwN_.js";import{o as y}from"./class-map-AxOwT-Dx.js";import{s as f}from"./style-map-BQrULRrw.js";import{s as Te}from"./parameters-bundle.css-QMGUSIkp.js";import{C as Le}from"./index-BFgQkP6x.js";var F;(function(i){i.OneColumn="OneColumn",i.TwoColumnsStartExpanded="TwoColumnsStartExpanded",i.TwoColumnsMidExpanded="TwoColumnsMidExpanded",i.ThreeColumnsMidExpanded="ThreeColumnsMidExpanded",i.ThreeColumnsEndExpanded="ThreeColumnsEndExpanded",i.ThreeColumnsStartExpandedEndHidden="ThreeColumnsStartExpandedEndHidden",i.ThreeColumnsMidExpandedEndHidden="ThreeColumnsMidExpandedEndHidden",i.MidColumnFullScreen="MidColumnFullScreen",i.EndColumnFullScreen="EndColumnFullScreen"})(F||(F={}));const h=F,_e=()=>({desktop:{OneColumn:{layout:["100%","0px","0px"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},TwoColumnsStartExpanded:{layout:["67%","33%","0px"],arrows:[{visible:!0,dir:"mirror"},{visible:!1,dir:null}]},TwoColumnsMidExpanded:{layout:["33%","67%","0px"],arrows:[{visible:!0,dir:null},{visible:!1,dir:null}]},ThreeColumnsMidExpanded:{layout:["25%","50%","25%"],arrows:[{visible:!0,dir:null},{visible:!0,dir:null}]},ThreeColumnsEndExpanded:{layout:["25%","25%","50%"],arrows:[{visible:!1,dir:null,separator:!0},{visible:!0,dir:"mirror"}]},ThreeColumnsStartExpandedEndHidden:{layout:["67%","33%","0px"],arrows:[{visible:!0,dir:"mirror"},{visible:!1,dir:null}]},ThreeColumnsMidExpandedEndHidden:{layout:["33%","67%","0px"],arrows:[{visible:!0,dir:null},{visible:!0,dir:null}]},MidColumnFullScreen:{layout:["0px","100%","0px"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},EndColumnFullScreen:{layout:["0px","0px","100%"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]}},tablet:{OneColumn:{layout:["100%","0px","0px"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},TwoColumnsStartExpanded:{layout:["67%","33%","0px"],arrows:[{visible:!0,dir:"mirror"},{visible:!1,dir:null}]},TwoColumnsMidExpanded:{layout:["33%","67%","0px"],arrows:[{visible:!0,dir:null},{visible:!1,dir:null}]},ThreeColumnsMidExpanded:{layout:["0px","67%","33%"],arrows:[{visible:!0,dir:null},{visible:!0,dir:null}]},ThreeColumnsEndExpanded:{layout:["0px","33%","67%"],arrows:[{visible:!1,dir:null},{visible:!0,dir:"mirror"}]},ThreeColumnsStartExpandedEndHidden:{layout:["67%","33%","0px"],arrows:[{visible:!0,dir:"mirror"},{visible:!1,dir:null}]},ThreeColumnsMidExpandedEndHidden:{layout:["33%","67%","0px"],arrows:[{visible:!0,dir:null},{visible:!0,dir:null}]},MidColumnFullScreen:{layout:["0px","100%","0px"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},EndColumnFullScreen:{layout:["0px","0px","100%"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]}},phone:{OneColumn:{layout:["100%","0px","0px"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},TwoColumnsStartExpanded:{layout:["0px","100%","0px"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},TwoColumnsMidExpanded:{layout:["0px","100%","0px"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},ThreeColumnsMidExpanded:{layout:["0px","0px","100%"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},ThreeColumnsEndExpanded:{layout:["0px","0px","100%"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},ThreeColumnsStartExpandedEndHidden:{layout:["0px","0px","100%"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},ThreeColumnsMidExpandedEndHidden:{layout:["0px","0px","100%"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},MidColumnFullScreen:{layout:["0px","100%","0px"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]},EndColumnFullScreen:{layout:["0px","0px","100%"],arrows:[{visible:!1,dir:null},{visible:!1,dir:null}]}}}),Ae=()=>({TwoColumnsStartExpanded:"TwoColumnsMidExpanded",TwoColumnsMidExpanded:"TwoColumnsStartExpanded",ThreeColumnsMidExpanded:"ThreeColumnsMidExpandedEndHidden",ThreeColumnsEndExpanded:"ThreeColumnsStartExpandedEndHidden",ThreeColumnsStartExpandedEndHidden:"ThreeColumnsMidExpandedEndHidden",ThreeColumnsMidExpandedEndHidden:"ThreeColumnsStartExpandedEndHidden"}),Se=()=>({ThreeColumnsMidExpanded:"ThreeColumnsEndExpanded",ThreeColumnsEndExpanded:"ThreeColumnsMidExpanded",ThreeColumnsStartExpandedEndHidden:"ThreeColumnsMidExpanded",ThreeColumnsMidExpandedEndHidden:"ThreeColumnsMidExpanded"});function Ee(i,e,o){return o?j`<div class="${y(this.classes.root)}"><div role="${t(this._accAttributes.columns.start.role)}" aria-hidden="${t(this._accAttributes.columns.start.ariaHidden)}" class="${y(this.classes.columns.start)}" aria-labelledby="${t(this._id)}-startColumnText"><span id="${t(this._id)}-startColumnText" class="ui5-hidden-text">${t(this.accStartColumnText)}</span><slot name="startColumn" aria-hidden="${t(this._accAttributes.columns.middle.ariaHidden)}"></slot></div><div role="${t(this.accStartArrowContainerRole)}" aria-label=${t(this.accStartArrowContainerText)} class="ui5-fcl-arrow-container ui5-fcl-arrow-container-start" style="${f(this.styles.arrowsContainer.start)}"><${A("ui5-button",e,o)} class="ui5-fcl-arrow ui5-fcl-arrow--start" icon="slim-arrow-right" design="Transparent" @click="${this.startArrowClick}" style="${f(this.styles.arrows.start)}" tooltip="${t(this.accStartArrowText)}"></${A("ui5-button",e,o)}></div><div role="${t(this._accAttributes.columns.middle.role)}" aria-hidden="${t(this._accAttributes.columns.middle.ariaHidden)}" class="${y(this.classes.columns.middle)}" aria-labelledby="${t(this._id)}-midColumnText"><span id="${t(this._id)}-midColumnText" class="ui5-hidden-text">${t(this.accMiddleColumnText)}</span><slot name="midColumn" aria-hidden="${t(this._accAttributes.columns.middle.ariaHidden)}"></slot></div><div role="${t(this.accEndArrowContainerRole)}" aria-label="${t(this.accEndArrowContainerText)}" class="ui5-fcl-arrow-container ui5-fcl-arrow-container-end" style="${f(this.styles.arrowsContainer.end)}"><${A("ui5-button",e,o)} class="ui5-fcl-arrow ui5-fcl-arrow--end" style="${f(this.styles.arrows.end)}" icon="slim-arrow-left" design="Transparent" @click="${this.endArrowClick}" tooltip="${t(this.accEndArrowText)}"></${A("ui5-button",e,o)}></div><div role="${t(this._accAttributes.columns.end.role)}" aria-hidden="${t(this._accAttributes.columns.end.ariaHidden)}" class="${y(this.classes.columns.end)}" aria-labelledby="${t(this._id)}-endColumnText"><span id="${t(this._id)}-endColumnText" class="ui5-hidden-text">${t(this.accEndColumnText)}</span><slot name="endColumn" aria-hidden="${t(this._accAttributes.columns.middle.ariaHidden)}"></slot></div></div> `:j`<div class="${y(this.classes.root)}"><div role="${t(this._accAttributes.columns.start.role)}" aria-hidden="${t(this._accAttributes.columns.start.ariaHidden)}" class="${y(this.classes.columns.start)}" aria-labelledby="${t(this._id)}-startColumnText"><span id="${t(this._id)}-startColumnText" class="ui5-hidden-text">${t(this.accStartColumnText)}</span><slot name="startColumn" aria-hidden="${t(this._accAttributes.columns.middle.ariaHidden)}"></slot></div><div role="${t(this.accStartArrowContainerRole)}" aria-label=${t(this.accStartArrowContainerText)} class="ui5-fcl-arrow-container ui5-fcl-arrow-container-start" style="${f(this.styles.arrowsContainer.start)}"><ui5-button class="ui5-fcl-arrow ui5-fcl-arrow--start" icon="slim-arrow-right" design="Transparent" @click="${this.startArrowClick}" style="${f(this.styles.arrows.start)}" tooltip="${t(this.accStartArrowText)}"></ui5-button></div><div role="${t(this._accAttributes.columns.middle.role)}" aria-hidden="${t(this._accAttributes.columns.middle.ariaHidden)}" class="${y(this.classes.columns.middle)}" aria-labelledby="${t(this._id)}-midColumnText"><span id="${t(this._id)}-midColumnText" class="ui5-hidden-text">${t(this.accMiddleColumnText)}</span><slot name="midColumn" aria-hidden="${t(this._accAttributes.columns.middle.ariaHidden)}"></slot></div><div role="${t(this.accEndArrowContainerRole)}" aria-label="${t(this.accEndArrowContainerText)}" class="ui5-fcl-arrow-container ui5-fcl-arrow-container-end" style="${f(this.styles.arrowsContainer.end)}"><ui5-button class="ui5-fcl-arrow ui5-fcl-arrow--end" style="${f(this.styles.arrows.end)}" icon="slim-arrow-left" design="Transparent" @click="${this.endArrowClick}" tooltip="${t(this.accEndArrowText)}"></ui5-button></div><div role="${t(this._accAttributes.columns.end.role)}" aria-hidden="${t(this._accAttributes.columns.end.ariaHidden)}" class="${y(this.classes.columns.end)}" aria-labelledby="${t(this._id)}-endColumnText"><span id="${t(this._id)}-endColumnText" class="ui5-hidden-text">${t(this.accEndColumnText)}</span><slot name="endColumn" aria-hidden="${t(this._accAttributes.columns.middle.ariaHidden)}"></slot></div></div> `}J("@ui5/webcomponents-theming","sap_horizon",async()=>se);J("@ui5/webcomponents-fiori","sap_horizon",async()=>Te);const Me={packageName:"@ui5/webcomponents-fiori",fileName:"themes/FlexibleColumnLayout.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;background:var(--_ui5-v2-0-0-rc-6_fcl_solid_bg)}.ui5-fcl-root{height:100%;display:flex;flex-direction:row}.ui5-fcl-column{background:inherit;box-sizing:border-box;will-change:width;overflow-y:auto}.ui5-fcl-column-animation{transition:width .56s cubic-bezier(.1,0,.05,1),visibility .56s ease-in}.ui5-fcl-column--hidden{display:none}.ui5-fcl-arrow-container{display:flex;align-items:center;justify-content:center;width:1rem;background-color:var(--sapShell_Background);border-inline-start:var(--_ui5-v2-0-0-rc-6_fcl_column_border);border-inline-end:var(--_ui5-v2-0-0-rc-6_fcl_column_border)}.ui5-fcl-arrow{position:relative;width:1.5rem;height:1.5rem;min-width:1.5rem;will-change:transform;overflow:visible;z-index:1}.ui5-fcl-arrow:before{background-image:var(--_ui5-v2-0-0-rc-6_fcl_decoration_top);background-position-y:-.3125rem;bottom:100%}.ui5-fcl-arrow:after{background-image:var(--_ui5-v2-0-0-rc-6_fcl_decoration_bottom);background-position-y:.3125rem;top:100%}.ui5-fcl-arrow:before,.ui5-fcl-arrow:after{content:"";position:absolute;left:0;height:4rem;width:100%;transition:all .1s ease-in;background-repeat:no-repeat;background-size:.0625rem 100%;background-position-x:calc(50% - .03125rem)}.ui5-fcl-arrow:hover:before,.ui5-fcl-arrow:hover:after{height:7rem}[aria-hidden] ::slotted([slot="startColumn"]),[aria-hidden] ::slotted([slot="midColumn"]),[aria-hidden] ::slotted([slot="endColumn"]){visibility:hidden}
`};var m=function(i,e,o,a){var s=arguments.length,r=s<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,o):a,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,o,a);else for(var C=i.length-1;C>=0;C--)(p=i[C])&&(r=(s<3?p(r):s>3?p(e,o,r):p(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r},c,T;(function(i){i.PHONE="phone",i.TABLET="tablet",i.DESKTOP="desktop"})(T||(T={}));const z={PHONE:599,TABLET:1023};let l=c=class extends le{constructor(){super(),this.columnResizeHandler=e=>{e.target.classList.add("ui5-fcl-column--hidden")},this._prevLayout=null,this.initialRendering=!0,this._handleResize=this.handleResize.bind(this)}static async onDefine(){c.i18nBundle=await ye("@ui5/webcomponents-fiori")}static get ANIMATION_DURATION(){return U()!==P.None?560:0}onEnterDOM(){N.register(this,this._handleResize.bind(this))}onExitDOM(){N.deregister(this,this._handleResize)}onAfterRendering(){if(this.initialRendering){this.handleInitialRendering();return}this.syncLayout()}handleInitialRendering(){this._prevLayout=this.layout,this.updateLayout(),this.initialRendering=!1}handleResize(){if(this.initialRendering)return;const e=this.columnLayout.join();this.updateLayout(),e!==this.columnLayout.join()&&this.fireLayoutChange(!1,!0)}startArrowClick(){this.arrowClick({start:!0,end:!1})}endArrowClick(){this.arrowClick({start:!1,end:!0})}arrowClick(e){this.layout=this.nextLayout(this.layout,{start:e.start,end:e.end}),this.updateLayout(),this.fireLayoutChange(!0,!1)}updateLayout(){this._width=this.widthDOM,this._columnLayout=this.nextColumnLayout(this.layout),this._visibleColumns=this.calcVisibleColumns(this._columnLayout),this.toggleColumns()}syncLayout(){this._prevLayout!==this.layout&&(this.updateLayout(),this._prevLayout=this.layout)}toggleColumns(){this.toggleColumn("start"),this.toggleColumn("mid"),this.toggleColumn("end")}toggleColumn(e){let o,a;e==="start"?(o=this.startColumnWidth,a=this.startColumnDOM):e==="mid"?(o=this.midColumnWidth,a=this.midColumnDOM):(o=this.endColumnWidth,a=this.endColumnDOM);const s=this._isColumnHidden(o),r=this._isColumnHidden(a.style.width);if(!(s&&r)){if(!s&&!r){a.style.width=typeof o=="number"?`${o}px`:o;return}if(s){a.style.width=typeof o=="number"?`${o}px`:o,a.addEventListener("transitionend",this.columnResizeHandler);return}r&&(a.removeEventListener("transitionend",this.columnResizeHandler),a.classList.remove("ui5-fcl-column--hidden"),a.style.width=typeof o=="number"?`${o}px`:o)}}nextLayout(e,o){if(o){if(o.start)return Ae()[e];if(o.end)return Se()[e]}}nextColumnLayout(e){return this._effectiveLayoutsByMedia[this.media][e].layout}calcVisibleColumns(e){return e.filter(o=>!this._isColumnHidden(o)).length}fireLayoutChange(e,o){this.fireEvent("layout-change",{layout:this.layout,columnLayout:this._columnLayout,startColumnVisible:this.startColumnVisible,midColumnVisible:this.midColumnVisible,endColumnVisible:this.endColumnVisible,arrowUsed:e,arrowsUsed:e,resize:o})}_isColumnHidden(e){return e===0||e==="0px"}get columnLayout(){return this._columnLayout}get startColumnVisible(){return this._columnLayout?!this._isColumnHidden(this._columnLayout[0]):!1}get midColumnVisible(){return this._columnLayout?!this._isColumnHidden(this._columnLayout[1]):!1}get endColumnVisible(){return this._columnLayout?!this._isColumnHidden(this._columnLayout[2]):!1}get visibleColumns(){return this._visibleColumns}get classes(){const e=U()!==P.None;return{root:{"ui5-fcl-root":!0},columns:{start:{"ui5-fcl-column":!0,"ui5-fcl-column-animation":e,"ui5-fcl-column--start":!0},middle:{"ui5-fcl-column":!0,"ui5-fcl-column-animation":e,"ui5-fcl-column--middle":!0},end:{"ui5-fcl-column":!0,"ui5-fcl-column-animation":e,"ui5-fcl-column--end":!0}}}}get styles(){return{arrowsContainer:{start:{display:this.showStartSeparator?"flex":"none"},end:{display:this.showEndSeparator?"flex":"none"}},arrows:{start:{display:this.showStartArrow?"inline-block":"none",transform:this.startArrowDirection==="mirror"?"rotate(180deg)":""},end:{display:this.showEndArrow?"inline-block":"none",transform:this.endArrowDirection==="mirror"?"rotate(180deg)":""}}}}get startColumnWidth(){return this._columnLayout?this._columnLayout[0]:"100%"}get midColumnWidth(){return this._columnLayout?this._columnLayout[1]:"0px"}get endColumnWidth(){return this._columnLayout?this._columnLayout[2]:"0px"}get showStartSeparator(){return this.effectiveArrowsInfo[0].separator||this.startArrowVisibility}get showEndSeparator(){return this.effectiveArrowsInfo[1].separator||this.endArrowVisibility}get showStartArrow(){return this.hideArrows?!1:this.startArrowVisibility}get showEndArrow(){return this.hideArrows?!1:this.endArrowVisibility}get startArrowVisibility(){return this.effectiveArrowsInfo[0].visible}get endArrowVisibility(){return this.effectiveArrowsInfo[1].visible}get startArrowDirection(){return this.effectiveArrowsInfo[0].dir}get endArrowDirection(){return this.effectiveArrowsInfo[1].dir}get effectiveArrowsInfo(){return this._effectiveLayoutsByMedia[this.media][this.layout].arrows}get media(){return this._width<=z.PHONE?T.PHONE:this._width<=z.TABLET?T.TABLET:T.DESKTOP}get widthDOM(){return this.getBoundingClientRect().width}get startColumnDOM(){return this.shadowRoot.querySelector(".ui5-fcl-column--start")}get midColumnDOM(){return this.shadowRoot.querySelector(".ui5-fcl-column--middle")}get endColumnDOM(){return this.shadowRoot.querySelector(".ui5-fcl-column--end")}get accStartColumnText(){var e;return((e=this.accessibilityAttributes.startColumn)==null?void 0:e.name)||c.i18nBundle.getText(fe)}get accMiddleColumnText(){var e;return((e=this.accessibilityAttributes.midColumn)==null?void 0:e.name)||c.i18nBundle.getText(ge)}get accEndColumnText(){var e;return((e=this.accessibilityAttributes.endColumn)==null?void 0:e.name)||c.i18nBundle.getText(be)}get accStartArrowContainerText(){var e;return((e=this.accessibilityAttributes.startArrowContainer)==null?void 0:e.name)||void 0}get accEndArrowContainerText(){var e;return((e=this.accessibilityAttributes.endArrowContainer)==null?void 0:e.name)||void 0}get accStartColumnRole(){var e;if(this.startColumnVisible)return((e=this.accessibilityAttributes.startColumn)==null?void 0:e.role)||"region"}get accMiddleColumnRole(){var e;if(this.midColumnVisible)return((e=this.accessibilityAttributes.midColumn)==null?void 0:e.role)||"region"}get accEndColumnRole(){var e;if(this.endColumnVisible)return((e=this.accessibilityAttributes.endColumn)==null?void 0:e.role)||"region"}get accStartArrowContainerRole(){var e;return((e=this.accessibilityAttributes.startArrowContainer)==null?void 0:e.role)||void 0}get accEndArrowContainerRole(){var e;return((e=this.accessibilityAttributes.endArrowContainer)==null?void 0:e.role)||void 0}get _effectiveLayoutsByMedia(){return this._layoutsConfiguration||_e()}get _accAttributes(){return{columns:{start:{role:this.accStartColumnRole,ariaHidden:!this.startColumnVisible||void 0},middle:{role:this.accMiddleColumnRole,ariaHidden:!this.midColumnVisible||void 0},end:{role:this.accEndColumnRole,ariaHidden:!this.endColumnVisible||void 0}}}}get accStartArrowText(){var o,a;const e=this.accessibilityAttributes;return this.startArrowDirection==="mirror"?((o=e.startArrowLeft)==null?void 0:o.name)||c.i18nBundle.getText(Ce):((a=e.startArrowRight)==null?void 0:a.name)||c.i18nBundle.getText(ve)}get accEndArrowText(){var o,a;const e=this.accessibilityAttributes;return this.endArrowDirection==="mirror"?((o=e.endArrowRight)==null?void 0:o.name)||c.i18nBundle.getText(xe):((a=e.endArrowLeft)==null?void 0:a.name)||c.i18nBundle.getText(we)}};m([b({type:h,defaultValue:h.OneColumn})],l.prototype,"layout",void 0);m([b({type:Boolean})],l.prototype,"hideArrows",void 0);m([b({type:Object})],l.prototype,"accessibilityAttributes",void 0);m([b({validator:he,defaultValue:0})],l.prototype,"_width",void 0);m([b({type:Object,defaultValue:void 0})],l.prototype,"_columnLayout",void 0);m([b({validator:pe,defaultValue:0})],l.prototype,"_visibleColumns",void 0);m([b({type:Object,defaultValue:void 0})],l.prototype,"_layoutsConfiguration",void 0);m([R()],l.prototype,"startColumn",void 0);m([R()],l.prototype,"midColumn",void 0);m([R()],l.prototype,"endColumn",void 0);l=c=m([de({tag:"ui5-flexible-column-layout",fastNavigation:!0,renderer:ue,styles:Me,template:Ee,dependencies:[ee]}),ce("layout-change",{detail:{layout:{type:h},columnLayout:{type:Array},startColumnVisible:{type:Boolean},midColumnVisible:{type:Boolean},endColumnVisible:{type:Boolean},arrowsUsed:{type:Boolean},resize:{type:Boolean},arrowUsed:{type:Boolean}}})],l);l.define();const De=l,Fe=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"})),g=me("ui5-flexible-column-layout",["accessibilityAttributes","layout"],["hideArrows"],["endColumn","midColumn","startColumn"],["layout-change"],()=>re(()=>Promise.resolve().then(()=>Fe),void 0,import.meta.url));g.displayName="FlexibleColumnLayout";try{g.displayName="FlexibleColumnLayout",g.__docgenInfo={description:`The \`FlexibleColumnLayout\` implements the list-detail-detail paradigm by displaying up to three pages in separate columns.
There are several possible layouts that can be changed either with the component API, or by pressing the arrows, displayed between the columns.

### Usage

Use this component for applications that need to display several logical levels of related information side by side (e.g. list of items, item, sub-item, etc.).
The Component is flexible in a sense that the application can focus the user's attention on one particular column.

### Responsive Behavior

The \`FlexibleColumnLayout\` automatically displays the maximum possible number of columns based on \`layout\` property and the window size.
The component would display 1 column for window size smaller than 599px, up to two columns between 599px and 1023px,
and 3 columns for sizes bigger than 1023px.

### Keyboard Handling

#### Basic Navigation

- [Space] / [Enter] or [Return] - If focus is on the layout toggle button (arrow button), once activated, it triggers the associated action (such as expand/collapse the column).
- This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"FlexibleColumnLayout",props:{endColumn:{defaultValue:null,description:`Defines the content in the end column.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="endColumn"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"endColumn",required:!1,type:{name:"UI5WCSlotsNode"}},midColumn:{defaultValue:null,description:`Defines the content in the middle column.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="midColumn"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"midColumn",required:!1,type:{name:"UI5WCSlotsNode"}},startColumn:{defaultValue:null,description:`Defines the content in the start column.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="startColumn"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"startColumn",required:!1,type:{name:"UI5WCSlotsNode"}},onLayoutChange:{defaultValue:null,description:`Fired when the layout changes via user interaction by clicking the arrows
or by changing the component size due to resizing.`,name:"onLayoutChange",required:!1,type:{name:"(event: Ui5CustomEvent<FlexibleColumnLayoutDomRef, FlexibleColumnLayoutLayoutChangeEventDetail>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines additional accessibility attributes on different areas of the component.\n\nThe accessibilityAttributes object has the following fields,\nwhere each field is an object supporting one or more accessibility attributes:\n\n - **startColumn**: `startColumn.role` and `startColumn.name`.\n - **midColumn**: `midColumn.role` and `midColumn.name`.\n - **endColumn**: `endColumn.role` and `endColumn.name`.\n - **startArrowContainer**: `startArrowContainer.role` and `startArrowContainer.name`.\n - **endArrowContainer**: `endArrowContainerrole.role` and `endArrowContainer.name`.\n - **startArrowLeft**: `startArrowLeft.name`.\n - **startArrowRight**: `startArrowRight.name`.\n - **endArrowLeft**: `endArrowLeft.name`.\n - **endArrowRight**: `endArrowRight.name`.\n\nThe accessibility attributes support the following values:\n\n- **role**: Defines the accessible ARIA landmark role of the area.\nAccepts the following values: `none`, `complementary`, `contentinfo`, `main` or `region`.\n\n- **name**: Defines the accessible ARIA name of the area.\nAccepts any string.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.",name:"accessibilityAttributes",required:!1,type:{name:"FCLAccessibilityAttributes"}},hideArrows:{defaultValue:{value:"false"},description:`Defines the visibility of the arrows,
used for expanding and shrinking the columns.`,name:"hideArrows",required:!1,type:{name:"boolean"}},layout:{defaultValue:{value:'"OneColumn"'},description:`Defines the columns layout and their proportion.

**Note:** The layout also depends on the screen size - one column for screens smaller than 599px,
two columns between 599px and 1023px and three columns for sizes bigger than 1023px.

**For example:** layout=\`TwoColumnsStartExpanded\` means the layout will display up to two columns
in 67%/33% proportion.`,name:"layout",required:!1,type:{name:"enum",value:[{value:'"OneColumn"'},{value:'"TwoColumnsStartExpanded"'},{value:'"TwoColumnsMidExpanded"'},{value:'"ThreeColumnsMidExpanded"'},{value:'"ThreeColumnsEndExpanded"'},{value:'"ThreeColumnsStartExpandedEndHidden"'},{value:'"ThreeColumnsMidExpandedEndHidden"'},{value:'"MidColumnFullScreen"'},{value:'"EndColumnFullScreen"'},{value:'"OneColumn"'},{value:'"TwoColumnsStartExpanded"'},{value:'"TwoColumnsMidExpanded"'},{value:'"ThreeColumnsMidExpanded"'},{value:'"ThreeColumnsEndExpanded"'},{value:'"ThreeColumnsStartExpandedEndHidden"'},{value:'"ThreeColumnsMidExpandedEndHidden"'},{value:'"MidColumnFullScreen"'},{value:'"EndColumnFullScreen"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="FlexibleColumnLayout",g.__docgenInfo={description:`The \`FlexibleColumnLayout\` implements the list-detail-detail paradigm by displaying up to three pages in separate columns.
There are several possible layouts that can be changed either with the component API, or by pressing the arrows, displayed between the columns.

### Usage

Use this component for applications that need to display several logical levels of related information side by side (e.g. list of items, item, sub-item, etc.).
The Component is flexible in a sense that the application can focus the user's attention on one particular column.

### Responsive Behavior

The \`FlexibleColumnLayout\` automatically displays the maximum possible number of columns based on \`layout\` property and the window size.
The component would display 1 column for window size smaller than 599px, up to two columns between 599px and 1023px,
and 3 columns for sizes bigger than 1023px.

### Keyboard Handling

#### Basic Navigation

- [Space] / [Enter] or [Return] - If focus is on the layout toggle button (arrow button), once activated, it triggers the associated action (such as expand/collapse the column).
- This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"FlexibleColumnLayout",props:{endColumn:{defaultValue:null,description:`Defines the content in the end column.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="endColumn"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"endColumn",required:!1,type:{name:"UI5WCSlotsNode"}},midColumn:{defaultValue:null,description:`Defines the content in the middle column.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="midColumn"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"midColumn",required:!1,type:{name:"UI5WCSlotsNode"}},startColumn:{defaultValue:null,description:`Defines the content in the start column.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="startColumn"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"startColumn",required:!1,type:{name:"UI5WCSlotsNode"}},onLayoutChange:{defaultValue:null,description:`Fired when the layout changes via user interaction by clicking the arrows
or by changing the component size due to resizing.`,name:"onLayoutChange",required:!1,type:{name:"(event: Ui5CustomEvent<FlexibleColumnLayoutDomRef, FlexibleColumnLayoutLayoutChangeEventDetail>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines additional accessibility attributes on different areas of the component.\n\nThe accessibilityAttributes object has the following fields,\nwhere each field is an object supporting one or more accessibility attributes:\n\n - **startColumn**: `startColumn.role` and `startColumn.name`.\n - **midColumn**: `midColumn.role` and `midColumn.name`.\n - **endColumn**: `endColumn.role` and `endColumn.name`.\n - **startArrowContainer**: `startArrowContainer.role` and `startArrowContainer.name`.\n - **endArrowContainer**: `endArrowContainerrole.role` and `endArrowContainer.name`.\n - **startArrowLeft**: `startArrowLeft.name`.\n - **startArrowRight**: `startArrowRight.name`.\n - **endArrowLeft**: `endArrowLeft.name`.\n - **endArrowRight**: `endArrowRight.name`.\n\nThe accessibility attributes support the following values:\n\n- **role**: Defines the accessible ARIA landmark role of the area.\nAccepts the following values: `none`, `complementary`, `contentinfo`, `main` or `region`.\n\n- **name**: Defines the accessible ARIA name of the area.\nAccepts any string.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.",name:"accessibilityAttributes",required:!1,type:{name:"FCLAccessibilityAttributes"}},hideArrows:{defaultValue:{value:"false"},description:`Defines the visibility of the arrows,
used for expanding and shrinking the columns.`,name:"hideArrows",required:!1,type:{name:"boolean"}},layout:{defaultValue:{value:'"OneColumn"'},description:`Defines the columns layout and their proportion.

**Note:** The layout also depends on the screen size - one column for screens smaller than 599px,
two columns between 599px and 1023px and three columns for sizes bigger than 1023px.

**For example:** layout=\`TwoColumnsStartExpanded\` means the layout will display up to two columns
in 67%/33% proportion.`,name:"layout",required:!1,type:{name:"enum",value:[{value:'"OneColumn"'},{value:'"TwoColumnsStartExpanded"'},{value:'"TwoColumnsMidExpanded"'},{value:'"ThreeColumnsMidExpanded"'},{value:'"ThreeColumnsEndExpanded"'},{value:'"ThreeColumnsStartExpandedEndHidden"'},{value:'"ThreeColumnsMidExpandedEndHidden"'},{value:'"MidColumnFullScreen"'},{value:'"EndColumnFullScreen"'},{value:'"OneColumn"'},{value:'"TwoColumnsStartExpanded"'},{value:'"TwoColumnsMidExpanded"'},{value:'"ThreeColumnsMidExpanded"'},{value:'"ThreeColumnsEndExpanded"'},{value:'"ThreeColumnsStartExpandedEndHidden"'},{value:'"ThreeColumnsMidExpandedEndHidden"'},{value:'"MidColumnFullScreen"'},{value:'"EndColumnFullScreen"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Re={title:"Layouts & Floorplans / FlexibleColumnLayout",component:g,argTypes:{endColumn:{control:{disable:!0}},midColumn:{control:{disable:!0}},startColumn:{control:{disable:!0}}},args:{layout:h.ThreeColumnsMidExpanded},tags:["package:@ui5/webcomponents-fiori"]},v={render(i){return n.jsx(g,{...i,layout:i.layout,startColumn:n.jsxs(w,{headerText:"Start Column List",children:[n.jsx(u,{children:"List Item 1"}),n.jsx(u,{children:"List Item 2"}),n.jsx(u,{children:"List Item 3"})]}),midColumn:n.jsxs(w,{headerText:"Mid Column List",children:[n.jsx(u,{children:"List Item 1"}),n.jsx(u,{children:"List Item 2"}),n.jsx(u,{children:"List Item 3"})]}),endColumn:n.jsxs(w,{headerText:"End Column List",children:[n.jsx(u,{children:"List Item 1"}),n.jsx(u,{children:"List Item 2"}),n.jsx(u,{children:"List Item 3"})]})})}},x={render(){const i=[{movie:"Shanghai",genre:"Crime|Thriller",country:"Russia"},{movie:"Punk Syndrome, The (Kovasikajuttu)",genre:"Documentary",country:"Poland"},{movie:"Corridors of Blood",genre:"Crime|Drama|Horror|Thriller",country:"Germany"},{movie:"Three Faces East",genre:"Drama|Mystery|War",country:"Russia"},{movie:"Grave Secrets (Silent Screams)",genre:"Horror",country:"Russia"},{movie:"Dead Outside, The",genre:"Horror|Mystery|Thriller",country:"Poland"},{movie:"Cosmos",genre:"Documentary",country:"Russia"},{movie:"UHF",genre:"Comedy",country:"Mexico"},{movie:"Superweib, Das",genre:"Comedy",country:"Poland"},{movie:"It's Good to Be Alive",genre:"Drama",country:"Belarus"},{movie:"Last Action Hero",genre:"Action|Adventure|Comedy|Fantasy",country:"Russia"},{movie:"Nibelungen: Kriemhild's Revenge, Die (Die Nibelungen: Kriemhilds Rache)",genre:"Adventure|Drama|Fantasy",country:"Russia"},{movie:"Roller Boogie",genre:"Drama",country:"Brazil"},{movie:"Amore (L'Amore)",genre:"Drama",country:"Poland"},{movie:"Dust of Time, The",genre:"Drama",country:"Poland"},{movie:"Far Side of the Moon, The (Face cachée de la lune, La)",genre:"Drama",country:"Brazil"},{movie:"Take Care of Your Scarf, Tatiana (Pidä huivista kiinni, Tatjana)",genre:"Comedy",country:"Poland"},{movie:"Trail Beyond, The",genre:"Action|Adventure|Western",country:"Russia"},{movie:"Mood Indigo (L'écume des jours)",genre:"Drama|Fantasy",country:"Russia"},{movie:"Alpha and Omega",genre:"Adventure|Animation|Children|Comedy|Romance",country:"France"},{movie:"Battleship Potemkin",genre:"Drama|War",country:"United Kingdom"},{movie:"Rites of May, The (Itim) ",genre:"Drama|Horror|Thriller",country:"Brazil"},{movie:"Black Waters of Echo's Pond, The",genre:"Fantasy|Horror|Thriller",country:"France"},{movie:"Speed",genre:"Action|Romance|Thriller",country:"Brazil"},{movie:"Ladybird Ladybird",genre:"Drama",country:"Poland"},{movie:"War, Inc.",genre:"Comedy|Crime|Thriller",country:"Brazil"},{movie:"Company of Heroes",genre:"Action|War",country:"United States"},{movie:"Secret Glory, The",genre:"Documentary",country:"Poland"},{movie:"Three Musketeers, The",genre:"Action|Adventure|Romance",country:"France"},{movie:"Secrets of the Heart (Secretos del Corazón)",genre:"Drama",country:"Japan"}],e=[{name:"Clywd Gimeno",gender:"Male"},{name:"Essie Gadson",gender:"Female"},{name:"Claresta Greger",gender:"Female"},{name:"Susanne Pinson",gender:"Female"},{name:"Gardener Cutford",gender:"Male"},{name:"Red Swyer-Sexey",gender:"Male"},{name:"Alyson Bachellier",gender:"Female"},{name:"Amata Penke",gender:"Female"},{name:"Ancell Aprahamian",gender:"Male"},{name:"Kimmy Sworne",gender:"Female"},{name:"Liam Umpleby",gender:"Male"},{name:"Caleb Trathen",gender:"Male"},{name:"Starlin Kibard",gender:"Female"},{name:"Keefe Brammall",gender:"Male"},{name:"Terrill Reeme",gender:"Male"},{name:"Gerianne Maciejak",gender:"Female"},{name:"Wilhelmine Cutmare",gender:"Female"},{name:"Rodie Breukelman",gender:"Female"},{name:"Eduard Berk",gender:"Male"},{name:"Phil Koppens",gender:"Female"}],[o,a]=E.useState(h.OneColumn),[s,r]=E.useState(i[0]),[p,C]=E.useState(e[0]),Y=d=>{r(i.find(S=>S.movie===d.detail.item.dataset.movie)),a(h.TwoColumnsMidExpanded)},Q=d=>{C(e.find(S=>S.name===d.detail.item.dataset.name)),a(h.ThreeColumnsEndExpanded)};return n.jsx(g,{style:{height:"600px"},layout:o,startColumn:n.jsxs(n.Fragment,{children:[n.jsx(ae,{logo:n.jsx("img",{src:"https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo.png"}),primaryTitle:"Movie DB",showCoPilot:!0}),n.jsx(w,{headerText:"Movies",onItemClick:Y,children:i.map(d=>n.jsx(u,{description:d.genre,"data-movie":d.movie,children:d.movie},d.movie))})]}),midColumn:n.jsxs(n.Fragment,{children:[n.jsxs(M,{design:B.Solid,children:[n.jsx(O,{children:s.movie}),n.jsx(H,{}),n.jsx(k,{icon:"decline",design:I.Transparent,onClick:()=>{a(h.OneColumn)}})]}),n.jsxs(M,{style:{height:"200px"},children:[n.jsx($,{icon:"video",size:Z.XL,style:{marginLeft:"12px"}}),n.jsxs(L,{direction:te.Column,style:{marginLeft:"6px"},children:[n.jsxs(L,{children:[n.jsx(D,{children:"Movie:"}),n.jsx(_,{style:{marginLeft:"2px"},children:s.movie})]}),n.jsxs(L,{children:[n.jsx(D,{children:"Genre:"}),n.jsx(_,{style:{marginLeft:"2px"},children:s.genre})]}),n.jsxs(L,{children:[n.jsx(D,{children:"Country:"}),n.jsx(_,{style:{marginLeft:"2px"},children:s.country})]})]}),n.jsx(ie,{style:{marginLeft:"100px"},value:Math.floor(Math.random()*5)+1})]}),n.jsx(w,{headerText:"Cast",onItemClick:Q,children:e.map(d=>n.jsx(u,{description:d.gender,"data-name":d.name,children:d.name},d.name))})]}),endColumn:n.jsxs(n.Fragment,{children:[n.jsxs(M,{design:B.Solid,children:[n.jsx(O,{children:p.name}),n.jsx(H,{}),n.jsx(k,{icon:"decline",design:I.Transparent,onClick:()=>{a(h.TwoColumnsMidExpanded)}})]}),n.jsx(oe,{header:n.jsx(Le,{avatar:n.jsx($,{icon:"person-placeholder"}),titleText:p.name,subtitleText:`age: ${Math.floor(Math.random()*58+18)}`,additionalText:p.gender}),children:n.jsx("div",{style:ne,children:n.jsx(_,{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'})})})]})})}};var q,V,W;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render(args) {
    return <FlexibleColumnLayout {...args} layout={args.layout} startColumn={<List headerText="Start Column List">
            <ListItemStandard>List Item 1</ListItemStandard>
            <ListItemStandard>List Item 2</ListItemStandard>
            <ListItemStandard>List Item 3</ListItemStandard>
          </List>} midColumn={<List headerText="Mid Column List">
            <ListItemStandard>List Item 1</ListItemStandard>
            <ListItemStandard>List Item 2</ListItemStandard>
            <ListItemStandard>List Item 3</ListItemStandard>
          </List>} endColumn={<List headerText="End Column List">
            <ListItemStandard>List Item 1</ListItemStandard>
            <ListItemStandard>List Item 2</ListItemStandard>
            <ListItemStandard>List Item 3</ListItemStandard>
          </List>} />;
  }
}`,...(W=(V=v.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var G,K,X;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render() {
    const movieData = [{
      movie: 'Shanghai',
      genre: 'Crime|Thriller',
      country: 'Russia'
    }, {
      movie: 'Punk Syndrome, The (Kovasikajuttu)',
      genre: 'Documentary',
      country: 'Poland'
    }, {
      movie: 'Corridors of Blood',
      genre: 'Crime|Drama|Horror|Thriller',
      country: 'Germany'
    }, {
      movie: 'Three Faces East',
      genre: 'Drama|Mystery|War',
      country: 'Russia'
    }, {
      movie: 'Grave Secrets (Silent Screams)',
      genre: 'Horror',
      country: 'Russia'
    }, {
      movie: 'Dead Outside, The',
      genre: 'Horror|Mystery|Thriller',
      country: 'Poland'
    }, {
      movie: 'Cosmos',
      genre: 'Documentary',
      country: 'Russia'
    }, {
      movie: 'UHF',
      genre: 'Comedy',
      country: 'Mexico'
    }, {
      movie: 'Superweib, Das',
      genre: 'Comedy',
      country: 'Poland'
    }, {
      movie: "It's Good to Be Alive",
      genre: 'Drama',
      country: 'Belarus'
    }, {
      movie: 'Last Action Hero',
      genre: 'Action|Adventure|Comedy|Fantasy',
      country: 'Russia'
    }, {
      movie: "Nibelungen: Kriemhild's Revenge, Die (Die Nibelungen: Kriemhilds Rache)",
      genre: 'Adventure|Drama|Fantasy',
      country: 'Russia'
    }, {
      movie: 'Roller Boogie',
      genre: 'Drama',
      country: 'Brazil'
    }, {
      movie: "Amore (L'Amore)",
      genre: 'Drama',
      country: 'Poland'
    }, {
      movie: 'Dust of Time, The',
      genre: 'Drama',
      country: 'Poland'
    }, {
      movie: 'Far Side of the Moon, The (Face cachée de la lune, La)',
      genre: 'Drama',
      country: 'Brazil'
    }, {
      movie: 'Take Care of Your Scarf, Tatiana (Pidä huivista kiinni, Tatjana)',
      genre: 'Comedy',
      country: 'Poland'
    }, {
      movie: 'Trail Beyond, The',
      genre: 'Action|Adventure|Western',
      country: 'Russia'
    }, {
      movie: "Mood Indigo (L'écume des jours)",
      genre: 'Drama|Fantasy',
      country: 'Russia'
    }, {
      movie: 'Alpha and Omega',
      genre: 'Adventure|Animation|Children|Comedy|Romance',
      country: 'France'
    }, {
      movie: 'Battleship Potemkin',
      genre: 'Drama|War',
      country: 'United Kingdom'
    }, {
      movie: 'Rites of May, The (Itim) ',
      genre: 'Drama|Horror|Thriller',
      country: 'Brazil'
    }, {
      movie: "Black Waters of Echo's Pond, The",
      genre: 'Fantasy|Horror|Thriller',
      country: 'France'
    }, {
      movie: 'Speed',
      genre: 'Action|Romance|Thriller',
      country: 'Brazil'
    }, {
      movie: 'Ladybird Ladybird',
      genre: 'Drama',
      country: 'Poland'
    }, {
      movie: 'War, Inc.',
      genre: 'Comedy|Crime|Thriller',
      country: 'Brazil'
    }, {
      movie: 'Company of Heroes',
      genre: 'Action|War',
      country: 'United States'
    }, {
      movie: 'Secret Glory, The',
      genre: 'Documentary',
      country: 'Poland'
    }, {
      movie: 'Three Musketeers, The',
      genre: 'Action|Adventure|Romance',
      country: 'France'
    }, {
      movie: 'Secrets of the Heart (Secretos del Corazón)',
      genre: 'Drama',
      country: 'Japan'
    }];
    const castData = [{
      name: 'Clywd Gimeno',
      gender: 'Male'
    }, {
      name: 'Essie Gadson',
      gender: 'Female'
    }, {
      name: 'Claresta Greger',
      gender: 'Female'
    }, {
      name: 'Susanne Pinson',
      gender: 'Female'
    }, {
      name: 'Gardener Cutford',
      gender: 'Male'
    }, {
      name: 'Red Swyer-Sexey',
      gender: 'Male'
    }, {
      name: 'Alyson Bachellier',
      gender: 'Female'
    }, {
      name: 'Amata Penke',
      gender: 'Female'
    }, {
      name: 'Ancell Aprahamian',
      gender: 'Male'
    }, {
      name: 'Kimmy Sworne',
      gender: 'Female'
    }, {
      name: 'Liam Umpleby',
      gender: 'Male'
    }, {
      name: 'Caleb Trathen',
      gender: 'Male'
    }, {
      name: 'Starlin Kibard',
      gender: 'Female'
    }, {
      name: 'Keefe Brammall',
      gender: 'Male'
    }, {
      name: 'Terrill Reeme',
      gender: 'Male'
    }, {
      name: 'Gerianne Maciejak',
      gender: 'Female'
    }, {
      name: 'Wilhelmine Cutmare',
      gender: 'Female'
    }, {
      name: 'Rodie Breukelman',
      gender: 'Female'
    }, {
      name: 'Eduard Berk',
      gender: 'Male'
    }, {
      name: 'Phil Koppens',
      gender: 'Female'
    }];
    const [layout, setLayout] = useState(FCLLayout.OneColumn);
    const [selectedMovie, setSelectedMovie] = useState(movieData[0]);
    const [selectedCast, setSelectedCast] = useState(castData[0]);
    const onStartColumnClick = e => {
      setSelectedMovie(movieData.find(item => item.movie === e.detail.item.dataset.movie));
      setLayout(FCLLayout.TwoColumnsMidExpanded);
    };
    const onMiddleColumnClick = e => {
      setSelectedCast(castData.find(item => item.name === e.detail.item.dataset.name));
      setLayout(FCLLayout.ThreeColumnsEndExpanded);
    };
    return <FlexibleColumnLayout style={{
      height: '600px'
    }} layout={layout} startColumn={<>
            <ShellBar logo={<img src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo.png" />} primaryTitle="Movie DB" showCoPilot />
            <List headerText="Movies" onItemClick={onStartColumnClick}>
              {movieData.map(item => <ListItemStandard description={item.genre} data-movie={item.movie} key={item.movie}>
                  {item.movie}
                </ListItemStandard>)}
            </List>
          </>} midColumn={<>
            <Toolbar design={ToolbarDesign.Solid}>
              <Title>{selectedMovie.movie}</Title>
              <ToolbarSpacer />
              <Button icon="decline" design={ButtonDesign.Transparent} onClick={() => {
          setLayout(FCLLayout.OneColumn);
        }} />
            </Toolbar>
            <Toolbar style={{
        height: '200px'
      }}>
              <Avatar icon="video" size={AvatarSize.XL} style={{
          marginLeft: '12px'
        }} />
              <FlexBox direction={FlexBoxDirection.Column} style={{
          marginLeft: '6px'
        }}>
                <FlexBox>
                  <Label>Movie:</Label>
                  <Text style={{
              marginLeft: '2px'
            }}>{selectedMovie.movie}</Text>
                </FlexBox>
                <FlexBox>
                  <Label>Genre:</Label>
                  <Text style={{
              marginLeft: '2px'
            }}>{selectedMovie.genre}</Text>
                </FlexBox>
                <FlexBox>
                  <Label>Country:</Label>
                  <Text style={{
              marginLeft: '2px'
            }}>{selectedMovie.country}</Text>
                </FlexBox>
              </FlexBox>
              <RatingIndicator style={{
          marginLeft: '100px'
        }} value={Math.floor(Math.random() * 5) + 1} />
            </Toolbar>
            <List headerText="Cast" onItemClick={onMiddleColumnClick}>
              {castData.map(item => <ListItemStandard description={item.gender} data-name={item.name} key={item.name}>
                  {item.name}
                </ListItemStandard>)}
            </List>
          </>} endColumn={<>
            <Toolbar design={ToolbarDesign.Solid}>
              <Title>{selectedCast.name}</Title>
              <ToolbarSpacer />
              <Button icon="decline" design={ButtonDesign.Transparent} onClick={() => {
          setLayout(FCLLayout.TwoColumnsMidExpanded);
        }} />
            </Toolbar>
            <Card header={<CardHeader avatar={<Avatar icon="person-placeholder" />} titleText={selectedCast.name} subtitleText={\`age: \${Math.floor(Math.random() * (75 - 18 + 1) + 18)}\`} additionalText={selectedCast.gender} />}>
              <div style={spacing.sapUiContentPadding}>
                <Text>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </Text>
              </div>
            </Card>
          </>} />;
  }
}`,...(X=(K=x.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};const Ie=["Default","WithDifferentColumns"],bn=Object.freeze(Object.defineProperty({__proto__:null,Default:v,WithDifferentColumns:x,__namedExportsOrder:Ie,default:Re},Symbol.toStringTag,{value:"Module"}));export{bn as C,v as D,x as W};
