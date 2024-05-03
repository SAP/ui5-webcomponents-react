function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as h}from"./jsx-runtime-DtaoT6pD.js";import{A as m}from"./index-oKL2qwIL.js";import{_ as L}from"./iframe-NvEupkM7.js";import{U as O}from"./UI5Element-9EXj3atz.js";import{s as D,a as _,l as n,b as y,p as b,c as N,f as $,w as z}from"./withWebComponent-LTFbYRvs.js";import{R as A}from"./ResizeHandler-_qRzLmqT.js";import{I as P}from"./ItemNavigation-F0c19DRy.js";import{b as H}from"./i18nBundle-j8vDD4VY.js";import{s as S}from"./slot-HSrR9XJ-.js";import{e as G}from"./event-lM5HanI-.js";import{m as U,n as B}from"./Keys-ZEuNsqmZ.js";import{b as W}from"./Button-DcwyQdV9.js";import{b as s,A as V}from"./Avatar-tUVXUHcz.js";import{an as j,ao as M,ap as q,aq as T,ar as F}from"./i18n-defaults-X1FTyPSK.js";import{r as C}from"./Boot-vTaFuwdG.js";import{s as Y}from"./parameters-bundle.css-EKzfhWK3.js";import{o as I}from"./class-map-gjOVarQw.js";var w;(function(r){r.Group="Group",r.Individual="Individual"})(w||(w={}));const i=w;C("@ui5/webcomponents-theming","sap_horizon",async()=>D);C("@ui5/webcomponents","sap_horizon",async()=>Y);const X={packageName:"@ui5/webcomponents",fileName:"themes/AvatarGroup.css.ts",content:`:host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([hidden])){display:block;width:100%}:host{--_ui5-v1-23-1_button_focused_border: var(--_ui5-v1-23-1_avatar_group_button_focus_border)}.ui5-avatar-group-items:focus{outline:none}:host([type="Group"]) .ui5-avatar-group-items:focus{outline:var(--_ui5-v1-23-1_avatar_outline);outline-offset:var(--_ui5-v1-23-1_avatar_focus_offset);border-radius:var(--_ui5-v1-23-1_avatar_group_focus_border_radius)}.ui5-avatar-group-root{display:flex}.ui5-avatar-group-items{white-space:nowrap;position:relative;display:inline-flex}:host([type="Group"]) .ui5-avatar-group-items{cursor:pointer}:host([type="Group"]) ::slotted([ui5-button]),:host([type="Group"]) ::slotted([ui5-avatar]){pointer-events:none}::slotted([ui5-button]:not([hidden])),.ui5-avatar-group-overflow-btn:not([hidden]){--_ui5-v1-23-1_button_base_padding: 0;border-radius:50%;display:inline-flex;text-overflow:initial;z-index:0}::slotted([ui5-button][focused]),.ui5-avatar-group-overflow-btn[focused]{outline:var(--_ui5-v1-23-1_avatar_outline);outline-offset:var(--_ui5-v1-23-1_avatar_focus_offset)}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-xs{height:2rem;width:2rem;min-width:2rem;font-size:.75rem}::slotted([ui5-button]),.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-s{height:3rem;width:3rem;min-width:3rem;font-size:1.125rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-m{height:4rem;width:4rem;min-width:4rem;font-size:1.625rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-l{height:5rem;width:5rem;min-width:5rem;font-size:2rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-xl{height:7rem;width:7rem;min-width:7rem;font-size:2.75rem}
`};function K(r,t,e){return _`<div class="ui5-avatar-group-root"><div class="ui5-avatar-group-items" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @focusin="${this._onfocusin}" tabindex="${n(this._groupTabIndex)}" @click="${this._onClick}" @ui5-click="${n(this._onUI5Click)}" aria-label="${n(this._ariaLabelText)}" role="${n(this._role)}" aria-haspopup="${n(this._containerAriaHasPopup)}"><slot></slot>${this._customOverflowButton?J.call(this,r,t,e):Q.call(this,r,t,e)}</div></div>`}function J(r,t,e){return _`<slot name="overflowButton"></slot>`}function Q(r,t,e){return e?_`<${y("ui5-button",t,e)} .accessibilityAttributes="${n(this._overflowButtonAccAttributes)}" aria-label="${n(this._overflowButtonAriaLabelText)}" ?hidden="${this._overflowBtnHidden}" ?non-interactive=${this._isGroup} class="${I(this.classes.overflowButton)}">${n(this._overflowButtonText)}</${y("ui5-button",t,e)}>`:_`<ui5-button .accessibilityAttributes="${n(this._overflowButtonAccAttributes)}" aria-label="${n(this._overflowButtonAriaLabelText)}" ?hidden="${this._overflowBtnHidden}" ?non-interactive=${this._isGroup} class="${I(this.classes.overflowButton)}">${n(this._overflowButtonText)}</ui5-button>`}var d=function(r,t,e,o){var a=arguments.length,l=a<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,v;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var g=r.length-1;g>=0;g--)(v=r[g])&&(l=(a<3?v(l):a>3?v(t,e,l):v(t,e))||l);return a>3&&l&&Object.defineProperty(t,e,l),l},p;const k="ui5-avatar-group-overflow-btn",Z=`.${k}`,tt={[s.XS]:{[i.Individual]:"0.0625rem",[i.Group]:"-0.75rem"},[s.S]:{[i.Individual]:"0.125rem",[i.Group]:"-1.25rem"},[s.M]:{[i.Individual]:"0.125rem",[i.Group]:"-1.625rem"},[s.L]:{[i.Individual]:"0.125rem",[i.Group]:" -2rem"},[s.XL]:{[i.Individual]:"0.25rem",[i.Group]:"-2.75rem"}};let u=p=class extends O{constructor(){super(),this._itemNavigation=new P(this,{getItemsCallback:()=>this._isGroup?[]:this.items.slice(0,this._hiddenStartIndex)}),this._colorIndex=0,this._hiddenItems=0,this._onResizeHandler=this._onResize.bind(this)}static async onDefine(){p.i18nBundle=await H("@ui5/webcomponents")}get hiddenItems(){return this.items.slice(this._hiddenStartIndex)}get colorScheme(){return this.items.map(t=>t.еffectiveBackgroundColor)}get _customOverflowButton(){return this.overflowButton.length?this.overflowButton[0]:void 0}get _ariaLabelText(){const t=this.hiddenItems.length,e=this._isGroup?j:M;let o=p.i18nBundle.getText(e);return o+=` ${p.i18nBundle.getText(q,this._itemsCount-t,t)}`,this._isGroup?o+=` ${p.i18nBundle.getText(T)}`:o+=` ${p.i18nBundle.getText(F)}`,o}get _overflowButtonAriaLabelText(){return this._isGroup?void 0:p.i18nBundle.getText(T)}get _containerAriaHasPopup(){return this._isGroup?this._getAriaHasPopup():void 0}get _overflowButtonAccAttributes(){return{hasPopup:this._isGroup?void 0:this._getAriaHasPopup()}}get _role(){return this._isGroup?"button":"group"}get _hiddenStartIndex(){return this._itemsCount-this._hiddenItems}get _overflowBtnHidden(){return this._hiddenItems===0}get _isGroup(){return this.type===i.Group}get _itemsCount(){return this.items.length}get _groupTabIndex(){return this._isGroup?"0":"-1"}get _overflowButton(){return this.shadowRoot.querySelector(Z)}get _overflowButtonEffectiveWidth(){const t=this._customOverflowButton?this._customOverflowButton:this._overflowButton;if(!t)return 0;if(this._isGroup){let e=this.items[1];const o=e.offsetLeft-this.offsetLeft;return(!e||e.hidden)&&(e=t),this.effectiveDir==="rtl"?this._getWidthToItem(e):o}return t.offsetWidth}get firstAvatarSize(){return this.items[0].size}get classes(){return{overflowButton:{"ui5-avatar-group-overflow-btn":!0,"ui5-avatar-group-overflow-btn-xs":this.firstAvatarSize===s.XS,"ui5-avatar-group-overflow-btn-s":this.firstAvatarSize===s.S,"ui5-avatar-group-overflow-btn-m":this.firstAvatarSize===s.M,"ui5-avatar-group-overflow-btn-l":this.firstAvatarSize===s.L,"ui5-avatar-group-overflow-btn-xl":this.firstAvatarSize===s.XL}}}onAfterRendering(){this._overflowItems()}onBeforeRendering(){this._customOverflowButton&&(this._customOverflowButton.nonInteractive=this._isGroup),this._prepareAvatars()}onEnterDOM(){A.register(this,this._onResizeHandler)}onExitDOM(){A.deregister(this,this._onResizeHandler)}_onResize(){this._overflowItems()}_onkeydown(t){this._isGroup&&(U(t)?this._fireGroupEvent(t.target):B(t)&&t.preventDefault())}_onkeyup(t){!t.shiftKey&&B(t)&&this._isGroup&&(this._fireGroupEvent(t.target),t.preventDefault())}_fireGroupEvent(t){const e=t.classList.contains(k)||t===this._customOverflowButton;this.fireEvent("click",{targetRef:t,overflowButtonClicked:e})}_onClick(t){const e=t.target,o=e.hasAttribute("ui5-button");t.stopPropagation(),(this._isGroup||o)&&this._fireGroupEvent(e)}_onUI5Click(t){const e=t.target,o=e.hasAttribute("ui5-avatar");t.stopPropagation(),o&&this._fireGroupEvent(e)}_prepareAvatars(){this._colorIndex=0,this.items.forEach((t,e)=>{const o=this._getNextBackgroundColor();t.interactive=!this._isGroup,t.getAttribute("_color-scheme")||t.setAttribute("_color-scheme",V[`Accent${o}`]),(e!==this._itemsCount-1||this._customOverflowButton)&&(t.style.marginInlineEnd=tt[t.effectiveSize][this.type])})}_onfocusin(t){this._itemNavigation.setCurrentItem(t.target)}_getWidthToItem(t){const e=this.effectiveDir==="rtl",o=t.offsetLeft-this.offsetLeft;if(e){const a=t.offsetParent;return a?a.offsetWidth-t.offsetLeft-t.offsetWidth:0}return o}_overflowItems(){if(this.items.length<2)return;let t=0;for(let e=0;e<this._itemsCount;e++){const o=this.items[e];o.hidden=!1;let a=this._getWidthToItem(o)+o.offsetWidth;if((e!==this._itemsCount-1||this._customOverflowButton)&&(a+=this._overflowButtonEffectiveWidth),a>this.offsetWidth){t=this._itemsCount-e;break}}this._setHiddenItems(t)}_getNextBackgroundColor(){return++this._colorIndex>10&&(this._colorIndex=1),this._colorIndex}_setHiddenItems(t){const e=this._hiddenItems!==t;this._hiddenItems=t,this.items.forEach((o,a)=>{o.hidden=a>=this._hiddenStartIndex}),this._overflowButtonText=`+${t>99?99:t}`,e&&this.fireEvent("overflow")}_getAriaHasPopup(){if(this.ariaHaspopup!=="")return this.ariaHaspopup}};d([b({type:i,defaultValue:i.Group})],u.prototype,"type",void 0);d([b()],u.prototype,"ariaHaspopup",void 0);d([b({noAttribute:!0})],u.prototype,"_overflowButtonText",void 0);d([S({type:HTMLElement,default:!0})],u.prototype,"items",void 0);d([S()],u.prototype,"overflowButton",void 0);u=p=d([N({tag:"ui5-avatar-group",renderer:$,template:K,styles:X,dependencies:[W]}),G("click",{detail:{targetRef:{type:HTMLElement},overflowButtonClicked:{type:Boolean}}}),G("overflow")],u);u.define();const et=u,ot=Object.freeze(Object.defineProperty({__proto__:null,default:et},Symbol.toStringTag,{value:"Module"})),f=z("ui5-avatar-group",["type"],[],["overflowButton"],["click","overflow"],()=>L(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url));f.displayName="AvatarGroup";try{f.displayName="AvatarGroup",f.__docgenInfo={description:`Displays a group of avatars arranged horizontally. It is useful to visually
showcase a group of related avatars, such as, project team members or employees.

The component allows you to display the avatars in different sizes,
depending on your use case.

The \`AvatarGroup\` component has two group types:

- \`Group\` type: The avatars are displayed as partially overlapped on
top of each other and the entire group has one click/tap area.
- \`Individual\` type: The avatars are displayed side-by-side and each
avatar has its own click/tap area.

### Responsive Behavior

When the available space is less than the width required to display all avatars,
an overflow visualization appears as a button placed at the end with the same shape
and size as the avatars. The visualization displays the number of avatars that have overflowed
and are not currently visible.

### Usage

Use the \`AvatarGroup\` if:

- You want to display a group of avatars.
- You want to display several avatars which have something in common.

Do not use the \`AvatarGroup\` if:

- You want to display a single avatar.
- You want to display a gallery for simple images.
- You want to use it for other visual content than avatars.

### Keyboard Handling
The component provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

\`type\` Individual:

- [TAB] - Move focus to the overflow button
- [LEFT] - Navigate one avatar to the left
- [RIGHT] - Navigate one avatar to the right
- [HOME] - Navigate to the first avatar
- [END] - Navigate to the last avatar
- [SPACE],[ENTER],[RETURN] - Trigger \`ui5-click\` event

\`type\` Group:

- [TAB] - Move focus to the next interactive element after the component
- [SPACE],[ENTER],[RETURN] - Trigger \`ui5-click\` event

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"AvatarGroup",props:{children:{defaultValue:null,description:`Defines the items of the component. Use the \`Avatar\` component as an item.

**Note:** The UX guidelines recommends using avatars with "Circle" shape.

Moreover, if you use avatars with "Square" shape, there will be visual inconsistency
as the built-in overflow action has "Circle" shape.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},overflowButton:{defaultValue:null,description:`Defines the overflow button of the component.

**Note:** We recommend using the \`Button\` component.

**Note:** If this slot is not used, the component will display the built-in overflow button.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="overflowButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"overflowButton",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:`Fired when the component is activated either with a
click/tap or by using the Enter or Space key.`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<AvatarGroupDomRef, AvatarGroupClickEventDetail>) => void"}},onOverflow:{defaultValue:null,description:"Fired when the count of visible `Avatar` elements in the\ncomponent has changed",name:"onOverflow",required:!1,type:{name:"(event: Ui5CustomEvent<AvatarGroupDomRef, never>) => void"}},type:{defaultValue:{value:'"Group"'},description:"Defines the mode of the `AvatarGroup`.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Group"'},{value:'"Individual"'},{value:'"Group"'},{value:'"Individual"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const rt={title:"Data Display / AvatarGroup",component:f,argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{type:i.Group},tags:["package:@ui5/webcomponents"]},c={render(r){return h.jsxs(f,{...r,children:[h.jsx(m,{icon:"employee"}),h.jsx(m,{initials:"JD"}),h.jsx(m,{children:h.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_5.png",alt:"Avatar1"})}),h.jsx(m,{children:h.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/avatars/man_avatar_3.png",alt:"Avatar2"})})]})}};var E,x,R;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render(args) {
    return <AvatarGroup {...args}>
        <Avatar icon="employee" />
        <Avatar initials="JD" />
        <Avatar>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_5.png" alt="Avatar1" />
        </Avatar>
        <Avatar>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/avatars/man_avatar_3.png" alt="Avatar2" />
        </Avatar>
      </AvatarGroup>;
  }
}`,...(R=(x=c.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};const it=["Default"],Gt=Object.freeze(Object.defineProperty({__proto__:null,Default:c,__namedExportsOrder:it,default:rt},Symbol.toStringTag,{value:"Module"}));export{Gt as C,c as D};
