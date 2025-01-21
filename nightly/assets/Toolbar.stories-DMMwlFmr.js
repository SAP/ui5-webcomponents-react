import{j as l}from"./jsx-runtime-CLpGMVip.js";import{r as C}from"./index-D23YZj_x.js";import{P as G}from"./index-DgTgpO-4.js";import{r as _,c as w,a as R,T as g}from"./index-B77DFpEo.js";import{j as u,s as p,m as O,w as S,I as J}from"./withWebComponent-DfVDXLfc.js";import{d as A}from"./slot-_4yKMUwC.js";import{l as x}from"./event-strict-DgQLNDEV.js";import{S as F}from"./Select-BJ9lD5gr.js";import{O as H}from"./Option-oow41Q0t.js";function K(){return u(F,{class:"ui5-tb-item",style:this.styles,"data-ui5-external-action-item-id":this._id,valueState:this.valueState,disabled:this.disabled,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,children:this.options.map((o,e)=>u(H,{selected:o.selected,"data-ui5-external-action-item-index":e,children:o.textContent}))})}function Q(){return u(F,{class:"ui5-tb-popover-item","data-ui5-external-action-item-id":this._id,valueState:this.valueState,disabled:this.disabled,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,children:this.options.map((o,e)=>u(H,{selected:o.selected,"data-ui5-external-action-item-index":e,children:o.textContent}))})}var b=function(o,e,r,n){var a=arguments.length,t=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,r,n);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(t=(a<3?i(t):a>3?i(e,r,t):i(e,r))||t);return a>3&&t&&Object.defineProperty(e,r,t),t};let c=class extends w{static get toolbarTemplate(){return K}static get toolbarPopoverTemplate(){return Q}get subscribedEvents(){const e=new Map;return e.set("click",{preventClosing:!0}),e.set("ui5-change",{preventClosing:!1}),e.set("ui5-open",{preventClosing:!0}),e.set("ui5-close",{preventClosing:!0}),e}constructor(){super(),this.valueState="None",this.disabled=!1,this._onEvent=this._onEventHandler.bind(this)}onEnterDOM(){this.attachEventListeners()}onExitDOM(){this.detachEventListeners()}attachEventListeners(){[...this.subscribedEvents.keys()].forEach(e=>{this.addEventListener(e,this._onEvent)})}detachEventListeners(){[...this.subscribedEvents.keys()].forEach(e=>{this.removeEventListener(e,this._onEvent)})}_onEventHandler(e){if(e.type==="ui5-change"){const r=e.detail.selectedOption,n=Number(r==null?void 0:r.getAttribute("data-ui5-external-action-item-index"));this.options.forEach((a,t)=>{t===n?a.setAttribute("selected",""):a.removeAttribute("selected")})}}get styles(){return{width:this.width}}};b([p()],c.prototype,"width",void 0);b([A({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],c.prototype,"options",void 0);b([p()],c.prototype,"valueState",void 0);b([p({type:Boolean})],c.prototype,"disabled",void 0);b([p()],c.prototype,"accessibleName",void 0);b([p()],c.prototype,"accessibleNameRef",void 0);c=b([O({tag:"ui5-toolbar-select"}),x("change",{bubbles:!0,cancelable:!0}),x("open",{bubbles:!0}),x("close")],c);_(c);c.define();const j=S("ui5-toolbar-select",["accessibleName","accessibleNameRef","overflowPriority","valueState","width"],["disabled","preventOverflowClosing"],[],["change","close","open"]);j.displayName="ToolbarSelect";var E=function(o,e,r,n){var a=arguments.length,t=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,r,n);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(t=(a<3?i(t):a>3?i(e,r,t):i(e,r))||t);return a>3&&t&&Object.defineProperty(e,r,t),t};let m=class extends J{constructor(){super(...arguments),this.selected=!1}};E([p({type:Boolean})],m.prototype,"selected",void 0);E([A({type:Node,default:!0,invalidateOnChildChange:!0})],m.prototype,"text",void 0);m=E([O("ui5-toolbar-select-option")],m);m.define();const d=S("ui5-toolbar-select-option",[],["selected"],[],[]);d.displayName="ToolbarSelectOption";function U(){return u("div",{class:"ui5-tb-separator ui5-tb-item","data-ui5-external-action-item-id":this._id})}function V(){return u("div",{class:"ui5-tb-separator-in-overflow ui5-tb-popover-item","data-ui5-external-action-item-id":this._id})}var W=function(o,e,r,n){var a=arguments.length,t=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,r,n);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(t=(a<3?i(t):a>3?i(e,r,t):i(e,r))||t);return a>3&&t&&Object.defineProperty(e,r,t),t};let v=class extends w{constructor(){super(...arguments),this.visible=!1}static get toolbarTemplate(){return U}static get toolbarPopoverTemplate(){return V}get isSeparator(){return!0}get isInteractive(){return!1}};W([p({type:Boolean})],v.prototype,"visible",void 0);v=W([O({tag:"ui5-toolbar-separator"})],v);_(v);v.define();const y=S("ui5-toolbar-separator",["overflowPriority"],["preventOverflowClosing"],[],[]);y.displayName="ToolbarSeparator";function N(){return u("div",{class:"ui5-tb-spacer ui5-tb-item",style:this.styles,role:"separator","data-ui5-external-action-item-id":this._id})}var z=function(o,e,r,n){var a=arguments.length,t=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,r,n);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(t=(a<3?i(t):a>3?i(e,r,t):i(e,r))||t);return a>3&&t&&Object.defineProperty(e,r,t),t};let T=class extends w{get styles(){return this.width?{width:this.width}:{flex:"auto"}}get ignoreSpace(){return this.width===""||this.width===void 0||this.width==="auto"}get hasFlexibleWidth(){return this.width===""||this.width===void 0||this.width==="auto"}static get toolbarTemplate(){return N}static get toolbarPopoverTemplate(){return N}get isInteractive(){return!1}};z([p()],T.prototype,"width",void 0);T=z([O({tag:"ui5-toolbar-spacer"})],T);_(T);T.define();const q=S("ui5-toolbar-spacer",["overflowPriority","width"],["preventOverflowClosing"],[],[]);q.displayName="ToolbarSpacer";var P;(function(o){o.Start="Start",o.End="End"})(P||(P={}));const X=P,Y={title:"Layouts & Floorplans / Toolbar",component:R,argTypes:{children:{control:{disable:!0}}},args:{alignContent:X.Start},tags:["package:@ui5/webcomponents"]},f={render:o=>l.jsxs(R,{...o,children:[l.jsx(g,{text:"Button 1"}),l.jsxs(j,{children:[l.jsx(d,{children:"Option 1"}),l.jsx(d,{children:"Option 2"}),l.jsx(d,{children:"Option 3"})]}),l.jsx(y,{}),l.jsx(q,{}),l.jsx(y,{}),l.jsx(g,{text:"Button 2"}),l.jsxs(j,{children:[l.jsx(d,{children:"Option 1"}),l.jsx(d,{children:"Option 2"}),l.jsx(d,{children:"Option 3"})]})]})},h={name:"Opening Popovers via ToolbarButton",render(o){const[e,r]=C.useState(!1),n=C.useRef(null);return l.jsxs(l.Fragment,{children:[l.jsx(R,{...o,children:l.jsx(g,{onClick:a=>{const{targetRef:t}=a.detail;n.current&&(n.current.opener=t,r(!0))},text:"Open Popover"})}),l.jsx(G,{open:e,ref:n,onClose:()=>{r(!1)},children:"Content"})]})}};var B,D,L;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Toolbar {...args}>
      <ToolbarButton text="Button 1" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
      <ToolbarSeparator />
      <ToolbarSpacer />
      <ToolbarSeparator />
      <ToolbarButton text="Button 2" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
    </Toolbar>
}`,...(L=(D=f.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var $,I,M;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Opening Popovers via ToolbarButton',
  render(args) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const popoverRef = useRef<PopoverDomRef>(null);
    return <>
        <Toolbar {...args}>
          <ToolbarButton onClick={e => {
          const {
            targetRef
          } = e.detail;
          if (popoverRef.current) {
            popoverRef.current.opener = targetRef;
            setPopoverOpen(true);
          }
        }} text="Open Popover" />
        </Toolbar>
        <Popover open={popoverOpen} ref={popoverRef} onClose={() => {
        setPopoverOpen(false);
      }}>
          Content
        </Popover>
      </>;
  }
}`,...(M=(I=h.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const Z=["Default","OpenPopover"],ue=Object.freeze(Object.defineProperty({__proto__:null,Default:f,OpenPopover:h,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{ue as C,f as D,h as O,j as T,d as a,y as b,q as c};
