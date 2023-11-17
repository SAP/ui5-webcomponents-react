import{r as f,U as p}from"./UI5Element-66_7Xn_3.js";import{b as g,l as m,s as v,p as _,c as y,f as w}from"./withWebComponent-2sjwM42G.js";import{s as h}from"./slot-HSrR9XJ-.js";import{R as c}from"./ResizeHandler-hw9R1O21.js";import{o as x}from"./class-map--IQ_mtyb.js";import{s as R}from"./parameters-bundle.css-h8WFSBOu.js";var u;(function(t){t.Header="Header",t.Subheader="Subheader",t.Footer="Footer",t.FloatingFooter="FloatingFooter"})(u||(u={}));const b=u;function B(t,e,r){return g`<div class="${x(this.classes.root)}" aria-label="${m(this.accInfo.label)}" role="toolbar" part="bar"><div class="ui5-bar-content-container ui5-bar-startcontent-container"><slot name="startContent"></slot></div><div class="ui5-bar-content-container ui5-bar-midcontent-container"><slot></slot></div><div class="ui5-bar-content-container ui5-bar-endcontent-container"><slot name="endContent"></slot></div></div>`}f("@ui5/webcomponents-theming","sap_horizon",async()=>v);f("@ui5/webcomponents-fiori","sap_horizon",async()=>R);const F={packageName:"@ui5/webcomponents-fiori",fileName:"themes/Bar.css",content:":host{background-color:var(--sapPageHeader_Background);box-shadow:var(--sapContent_HeaderShadow);display:block;height:var(--_ui5-v1-19-0_bar_base_height);width:100%}.ui5-bar-root{align-items:center;background-color:inherit;border-radius:inherit;box-shadow:inherit;display:flex;height:inherit;justify-content:space-between;width:inherit}.ui5-bar-root .ui5-bar-startcontent-container{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;padding-inline-start:var(--_ui5-v1-19-0_bar-start-container-padding-start)}.ui5-bar-root .ui5-bar-content-container{min-width:calc(30% - var(--_ui5-v1-19-0_bar-start-container-padding-start) - var(--_ui5-v1-19-0_bar-end-container-padding-end) - var(--_ui5-v1-19-0_bar-mid-container-padding-start-end)*2)}.ui5-bar-root.ui5-bar-root-shrinked .ui5-bar-content-container{height:100%;min-width:0;overflow:hidden}.ui5-bar-root .ui5-bar-endcontent-container{align-items:center;display:flex;flex-direction:row;justify-content:flex-end;padding-inline-end:var(--_ui5-v1-19-0_bar-end-container-padding-end)}.ui5-bar-root .ui5-bar-midcontent-container{align-items:center;display:flex;flex-direction:row;justify-content:center;padding:0 var(--_ui5-v1-19-0_bar-mid-container-padding-start-end)}:host([design=Footer]){background-color:var(--sapPageFooter_Background);border-top:.0625rem solid var(--sapPageFooter_BorderColor);box-shadow:none}:host([design=Subheader]){height:var(--_ui5-v1-19-0_bar_subheader_height)}:host([design=FloatingFooter]){background-color:var(--sapPageFooter_Background);border:none;border-radius:var(--sapElement_BorderCornerRadius);box-shadow:var(--sapContent_Shadow1)}::slotted(*){margin:0 .25rem}"};var s=function(t,e,r,a){var i=arguments.length,o=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,r):a,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,a);else for(var l=t.length-1;l>=0;l--)(d=t[l])&&(o=(i<3?d(o):i>3?d(e,r,o):d(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let n=class extends p{get accInfo(){return{label:this.design}}constructor(){super(),this._handleResizeBound=this.handleResize.bind(this)}handleResize(){const e=this.getDomRef(),r=e.offsetWidth,a=Array.from(e.children).some(i=>i.offsetWidth>r/3);e.classList.toggle("ui5-bar-root-shrinked",a)}get classes(){return{root:{"ui5-bar-root":!0}}}onEnterDOM(){c.register(this,this._handleResizeBound),this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(e=>{c.register(e,this._handleResizeBound)},this)}onExitDOM(){c.deregister(this,this._handleResizeBound),this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(e=>{c.deregister(e,this._handleResizeBound)},this)}};s([_({type:b,defaultValue:b.Header})],n.prototype,"design",void 0);s([h({type:HTMLElement})],n.prototype,"startContent",void 0);s([h({type:HTMLElement,default:!0})],n.prototype,"middleContent",void 0);s([h({type:HTMLElement})],n.prototype,"endContent",void 0);n=s([y({tag:"ui5-bar",fastNavigation:!0,renderer:w,styles:F,template:B})],n);n.define();const z=n,P=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));export{b as B,z as a,P as b};
//# sourceMappingURL=Bar-NvnhBt_T.js.map
