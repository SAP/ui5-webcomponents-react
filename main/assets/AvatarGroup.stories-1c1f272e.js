import{M as L,C as O,f as N,a as j}from"./chunk-PCJTTTQV-3f2bc34b.js";import{_ as $}from"./iframe-e3fb29ee.js";import{a as E,U as P,d as z}from"./UI5Element-3b11b083.js";import{a as H,b as U,e as v,l as s,s as y,p as b,c as W,d as M,w as V}from"./withWebComponent-d4224c1c.js";import{R as A}from"./ResizeHandler-13af62ac.js";import{I as q}from"./ItemNavigation-4baedd26.js";import{s as R}from"./slot-76e48863.js";import{e as x}from"./Icon-9aa64f88.js";import{c as F,b as G}from"./Icons-f64cf5a7.js";import{a as X}from"./Button-86524f67.js";import{a as m,b as Y}from"./Avatar-d2efa509.js";import{aP as J,aQ as K,aR as Q,aS as T,aT as Z}from"./i18n-defaults-f002f496.js";import{o as B}from"./class-map-18f572ce.js";import{A as h}from"./index-ce7ad59e.js";import{e as tt}from"./DomRefTable.module-f94bf8e9.js";import{D as et}from"./DocsHeader-c38a64c1.js";import{F as ot}from"./Footer-d4254ed3.js";import{j as r}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{D as rt}from"./DomRefTable-1c06cbbb.js";import{u as I}from"./index-bda0bad7.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"../sb-preview/runtime.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./employee-ef49f0ae.js";import"./react-jss.esm-022ab528.js";import"./index-7bd71341.js";import"./decline-5f59d729.js";import"./i18n-defaults-80781f7e.js";import"./information-73174d4b.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-cbae0ba3.js";import"./index-a0034de1.js";import"./Integer-f7f172c9.js";import"./index-725c1165.js";import"./index-acdc7a21.js";import"./Link-d41264a5.js";import"./WrappingType-b81e595a.js";import"./index-2c77de22.js";import"./TableOfContent-7b86f89b.js";import"./index-2316d032.js";import"./Label-9108dd9e.js";import"./index-635b918b.js";import"./index-9c2f6311.js";import"./Popover-76648ec8.js";import"./PopupsCommon.css-7ddbcd9a.js";import"./FocusableElements-baf79594.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-cca56078.js";var w;(function(n){n.Group="Group",n.Individual="Individual"})(w||(w={}));const i=w;E("@ui5/webcomponents-theming","sap_fiori_3",async()=>H);E("@ui5/webcomponents","sap_fiori_3",async()=>U);const nt={packageName:"@ui5/webcomponents",fileName:"themes/AvatarGroup.css",content:`:host {
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}

:host(:not([hidden])) {
	display: block;
	width: 100%;
}

:host {
	--_ui5_button_focused_border: var(--_ui5_avatar_group_button_focus_border);
}

.ui5-avatar-group-items:focus {
	outline: none;
}

:host([type="Group"]) .ui5-avatar-group-items:focus {
	outline: var(--_ui5_avatar_outline);
	outline-offset: var(--_ui5_avatar_focus_offset);
	border-radius: var(--_ui5_avatar_group_focus_border_radius);
}

.ui5-avatar-group-root {
	display: flex;
}

.ui5-avatar-group-items {
	white-space: nowrap;
	position: relative;
	display: inline-flex;
}

:host([type="Group"]) .ui5-avatar-group-items {
	cursor: pointer;
}

:host([type="Group"]) ::slotted([ui5-button]),
:host([type="Group"]) ::slotted([ui5-avatar]) {
	pointer-events: none;
}

::slotted([ui5-button]:not([hidden])),
.ui5-avatar-group-overflow-btn:not([hidden]) {
	--_ui5_button_base_padding: 0;
	border-radius: 50%;
	display: inline-flex;
	text-overflow: initial;
	z-index: 0; /* prevent last visible avatar from covering half of the button */
}

::slotted([ui5-button][focused]),
.ui5-avatar-group-overflow-btn[focused] {
	outline: var(--_ui5_avatar_outline);
	outline-offset: var(--_ui5_avatar_focus_offset);
}

.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-xs {
	height: 2rem;
	width: 2rem;
	min-width: 2rem;
	font-size: .75rem;
}

::slotted([ui5-button]),
.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-s {
	height: 3rem;
	width: 3rem;
	min-width: 3rem;
	font-size: 1.125rem;
}

.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-m {
	height: 4rem;
	width: 4rem;
	min-width: 4rem;
	font-size: 1.625rem;
}

.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-l {
	height: 5rem;
	width: 5rem;
	min-width: 5rem;
	font-size: 2rem;
}

.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-xl {
	height: 7rem;
	width: 7rem;
	min-width: 7rem;
	font-size: 2.75rem;
}`};function it(n,t,e){return v`<div class="ui5-avatar-group-root"><div class="ui5-avatar-group-items" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @focusin="${this._onfocusin}" tabindex="${s(this._groupTabIndex)}" @click="${this._onClick}" @ui5-click="${s(this._onUI5Click)}" aria-label="${s(this._ariaLabelText)}" role="${s(this._role)}" aria-haspopup="${s(this._containerAriaHasPopup)}"><slot></slot>${this._customOverflowButton?at.call(this,n,t,e):st.call(this,n,t,e)}</div></div>`}function at(n,t,e){return v`<slot name="overflowButton"></slot>`}function st(n,t,e){return e?v`<${y("ui5-button",t,e)} .accessibilityAttributes="${s(this._overflowButtonAccAttributes)}" aria-label="${s(this._overflowButtonAriaLabelText)}" ?hidden="${this._overflowBtnHidden}" ?non-interactive=${this._isGroup} class="${B(this.classes.overflowButton)}">${s(this._overflowButtonText)}</${y("ui5-button",t,e)}>`:v`<ui5-button .accessibilityAttributes="${s(this._overflowButtonAccAttributes)}" aria-label="${s(this._overflowButtonAriaLabelText)}" ?hidden="${this._overflowBtnHidden}" ?non-interactive=${this._isGroup} class="${B(this.classes.overflowButton)}">${s(this._overflowButtonText)}</ui5-button>`}var c=globalThis&&globalThis.__decorate||function(n,t,e,o){var a=arguments.length,l=a<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,t,e,o);else for(var g=n.length-1;g>=0;g--)(f=n[g])&&(l=(a<3?f(l):a>3?f(t,e,l):f(t,e))||l);return a>3&&l&&Object.defineProperty(t,e,l),l},p;const S="ui5-avatar-group-overflow-btn",ut=`.${S}`,lt={[m.XS]:{[i.Individual]:"0.0625rem",[i.Group]:"-0.75rem"},[m.S]:{[i.Individual]:"0.125rem",[i.Group]:"-1.25rem"},[m.M]:{[i.Individual]:"0.125rem",[i.Group]:"-1.625rem"},[m.L]:{[i.Individual]:"0.125rem",[i.Group]:" -2rem"},[m.XL]:{[i.Individual]:"0.25rem",[i.Group]:"-2.75rem"}};let u=p=class extends P{constructor(){super(),this._itemNavigation=new q(this,{getItemsCallback:()=>this._isGroup?[]:this.items.slice(0,this._hiddenStartIndex)}),this._colorIndex=0,this._hiddenItems=0,this._onResizeHandler=this._onResize.bind(this)}static async onDefine(){p.i18nBundle=await z("@ui5/webcomponents")}get hiddenItems(){return this.items.slice(this._hiddenStartIndex)}get colorScheme(){return this.items.map(t=>t._effectiveBackgroundColor)}get _customOverflowButton(){return this.overflowButton.length?this.overflowButton[0]:void 0}get _ariaLabelText(){const t=this.hiddenItems.length,e=this._isGroup?J:K;let o=p.i18nBundle.getText(e);return o+=` ${p.i18nBundle.getText(Q,this._itemsCount-t,t)}`,this._isGroup?o+=` ${p.i18nBundle.getText(T)}`:o+=` ${p.i18nBundle.getText(Z)}`,o}get _overflowButtonAriaLabelText(){return this._isGroup?void 0:p.i18nBundle.getText(T)}get _containerAriaHasPopup(){return this._isGroup?this._getAriaHasPopup():void 0}get _overflowButtonAccAttributes(){return{hasPopup:this._isGroup?void 0:this._getAriaHasPopup()}}get _role(){return this._isGroup?"button":"group"}get _hiddenStartIndex(){return this._itemsCount-this._hiddenItems}get _overflowBtnHidden(){return this._hiddenItems===0}get _isGroup(){return this.type===i.Group}get _itemsCount(){return this.items.length}get _groupTabIndex(){return this._isGroup?"0":"-1"}get _overflowButton(){return this.shadowRoot.querySelector(ut)}get _overflowButtonEffectiveWidth(){const t=this._customOverflowButton?this._customOverflowButton:this._overflowButton;if(!t)return 0;if(this._isGroup){let e=this.items[1];const o=e.offsetLeft-this.offsetLeft;return(!e||e.hidden)&&(e=t),this.effectiveDir==="rtl"?this._getWidthToItem(e):o}return t.offsetWidth}get firstAvatarSize(){return this.items[0].size}get classes(){return{overflowButton:{"ui5-avatar-group-overflow-btn":!0,"ui5-avatar-group-overflow-btn-xs":this.firstAvatarSize==="XS","ui5-avatar-group-overflow-btn-s":this.firstAvatarSize==="S","ui5-avatar-group-overflow-btn-m":this.firstAvatarSize==="M","ui5-avatar-group-overflow-btn-l":this.firstAvatarSize==="L","ui5-avatar-group-overflow-btn-xl":this.firstAvatarSize==="XL"}}}onAfterRendering(){this._overflowItems()}onBeforeRendering(){this._customOverflowButton&&(this._customOverflowButton.nonInteractive=this._isGroup),this._prepareAvatars()}onEnterDOM(){A.register(this,this._onResizeHandler)}onExitDOM(){A.deregister(this,this._onResizeHandler)}_onResize(){this._overflowItems()}_onkeydown(t){this._isGroup&&(F(t)?this._fireGroupEvent(t.target):G(t)&&t.preventDefault())}_onkeyup(t){!t.shiftKey&&G(t)&&this._isGroup&&(this._fireGroupEvent(t.target),t.preventDefault())}_fireGroupEvent(t){const e=t.classList.contains(S)||t===this._customOverflowButton;this.fireEvent("click",{targetRef:t,overflowButtonClicked:e})}_onClick(t){const e=t.target,o=e.hasAttribute("ui5-button");t.stopPropagation(),(this._isGroup||o)&&this._fireGroupEvent(e)}_onUI5Click(t){const e=t.target,o=e.hasAttribute("ui5-avatar");t.stopPropagation(),o&&this._fireGroupEvent(e)}_prepareAvatars(){this._colorIndex=0,this.items.forEach((t,e)=>{const o=this._getNextBackgroundColor();t.interactive=!this._isGroup,t.getAttribute("_color-scheme")||t.setAttribute("_color-scheme",Y[`Accent${o}`]),(e!==this._itemsCount-1||this._customOverflowButton)&&(t.style.marginInlineEnd=lt[t._effectiveSize][this.type])})}_onfocusin(t){this._itemNavigation.setCurrentItem(t.target)}_getWidthToItem(t){const e=this.effectiveDir==="rtl",o=t.offsetLeft-this.offsetLeft;if(e){const a=t.offsetParent;return a?a.offsetWidth-t.offsetLeft-t.offsetWidth:0}return o}_overflowItems(){if(this.items.length<2)return;let t=0;for(let e=0;e<this._itemsCount;e++){const o=this.items[e];o.hidden=!1;let a=this._getWidthToItem(o)+o.offsetWidth;if((e!==this._itemsCount-1||this._customOverflowButton)&&(a+=this._overflowButtonEffectiveWidth),a>this.offsetWidth){t=this._itemsCount-e;break}}this._setHiddenItems(t)}_getNextBackgroundColor(){return++this._colorIndex>10&&(this._colorIndex=1),this._colorIndex}_setHiddenItems(t){const e=this._hiddenItems!==t;this._hiddenItems=t,this.items.forEach((o,a)=>{o.hidden=a>=this._hiddenStartIndex}),this._overflowButtonText=`+${t>99?99:t}`,e&&this.fireEvent("overflow")}_getAriaHasPopup(){if(this.ariaHaspopup!=="")return this.ariaHaspopup}};c([b({type:i,defaultValue:i.Group})],u.prototype,"type",void 0);c([b()],u.prototype,"ariaHaspopup",void 0);c([b({noAttribute:!0})],u.prototype,"_overflowButtonText",void 0);c([R({type:HTMLElement,default:!0})],u.prototype,"items",void 0);c([R()],u.prototype,"overflowButton",void 0);u=p=c([W({tag:"ui5-avatar-group",renderer:M,template:it,styles:nt,dependencies:[X]}),x("click",{detail:{targetRef:{type:HTMLElement},overflowButtonClicked:{type:Boolean}}}),x("overflow")],u);u.define();const pt=u,ht=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"})),d=V("ui5-avatar-group",["type"],[],["overflowButton"],["click","overflow"],()=>$(()=>Promise.resolve().then(()=>ht),void 0,import.meta.url));d.displayName="AvatarGroup";d.defaultProps={type:i.Group};try{d.displayName="AvatarGroup",d.__docgenInfo={description:`Displays a group of avatars arranged horizontally. It is useful to visually showcase a group of related avatars, such as, project team members or employees. The component allows you to display the avatars in different sizes, depending on your use case. The \`AvatarGroup\` component has two group types:

*   \`Group\` type: The avatars are displayed as partially overlapped on top of each other and the entire group has one click/tap area.
*   \`Individual\` type: The avatars are displayed side-by-side and each avatar has its own click/tap area.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-AvatarGroup" target="_blank">UI5 Web Components Storybook</ui5-link>`,displayName:"AvatarGroup",props:{children:{defaultValue:null,description:'Defines the items of the component. Use the `Avatar` component as an item.\n\n**Note:** The UX guidelines recommends using avatars with "Circle" shape. Moreover, if you use avatars with "Square" shape, there will be visual inconsistency as the built-in overflow action has "Circle" shape.',name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},overflowButton:{defaultValue:null,description:`Defines the overflow button of the component. **Note:** We recommend using the \`Button\` component.

**Note:** If this slot is not used, the component will display the built-in overflow button.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="overflowButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"overflowButton",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a click/tap or by using the Enter or Space key.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<AvatarGroupDomRef, AvatarGroupClickEventDetail>) => void"}},onOverflow:{defaultValue:null,description:"Fired when the count of visible `Avatar` elements in the component has changed",name:"onOverflow",required:!1,type:{name:"(event: Ui5CustomEvent<AvatarGroupDomRef, never>) => void"}},type:{defaultValue:{value:"AvatarGroupType.Group"},description:"Defines the mode of the `AvatarGroup`.\n\nAvailable options are:\n\n*   `Group`\n*   `Individual`",name:"type",required:!1,type:{name:"enum",value:[{value:'"Group"'},{value:'"Individual"'},{value:'"Group"'},{value:'"Individual"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const dt=`## Responsive Behavior

When the available space is less than the width required to display all avatars, an overflow visualization appears as a button placed at the end with the same shape and size as the avatars. The visualization displays the number of avatars that have overflowed and are not currently visible.

## Usage

Use the \`AvatarGroup\` if:

- You want to display a group of avatars.
- You want to display several avatars which have something in common.

Do not use the \`AvatarGroup\` if:

- You want to display a single avatar.
- You want to display a gallery for simple images.
- You want to use it for other visual content than avatars.

## Keyboard Handling

The component provides advanced keyboard handling. When focused, the user can use the following keyboard shortcuts in order to perform a navigation:  
\`type\` Individual:

- \\[TAB\\] - Move focus to the overflow button
- \\[LEFT\\] - Navigate one avatar to the left
- \\[RIGHT\\] - Navigate one avatar to the right
- \\[HOME\\] - Navigate to the first avatar
- \\[END\\] - Navigate to the last avatar
- \\[SPACE\\],\\[ENTER\\],\\[RETURN\\] - Trigger \`undefined\` event

\`type\` Group:

- \\[TAB\\] - Move focus to the next interactive element after the component
- \\[SPACE\\],\\[ENTER\\],\\[RETURN\\] - Trigger \`undefined\` event
`,ct=[{name:"colorScheme",readonly:"true",visibility:"public",type:"sap.ui.webc.main.types.AvatarColorScheme[]",description:"Returns an array containing the <code>AvatarColorScheme</code> values that correspond to the avatars in the component.",defaultValue:"[]"},{name:"hiddenItems",readonly:"true",visibility:"public",type:"HTMLElement[]",description:"Returns an array containing the <code>ui5-avatar</code> instances that are currently not displayed due to lack of space.",defaultValue:"[]"}],D=r.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_5.png",alt:"Avatar1"}),C=r.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/avatars/man_avatar_3.png",alt:"Avatar2"});function mt(n={}){const{wrapper:t}=Object.assign({},I(),n.components);return t?r.jsx(t,{...n,children:r.jsx(e,{})}):e();function e(){const o=Object.assign({h2:"h2"},I(),n.components);return r.jsxs(r.Fragment,{children:[r.jsx(L,{title:"Data Display / AvatarGroup",component:d,argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{type:i.Group}}),`
`,r.jsx(et,{since:"0.13.0"}),`
`,r.jsx("br",{}),`
`,r.jsx(o.h2,{id:"example",children:"Example"}),`
`,r.jsx(O,{children:r.jsx(N,{name:"Default",children:a=>r.jsxs(d,{...a,children:[r.jsx(h,{icon:"employee"}),r.jsx(h,{initials:"JD"}),r.jsx(h,{children:D}),r.jsx(h,{children:C})]})})}),`
`,r.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,r.jsx(tt,{story:"Default"}),`
`,r.jsx(j,{children:dt}),`
`,r.jsx(rt,{rows:ct}),`
`,r.jsx(ot,{})]})}}const k=n=>r.jsxs(d,{...n,children:[r.jsx(h,{icon:"employee"}),r.jsx(h,{initials:"JD"}),r.jsx(h,{children:D}),r.jsx(h,{children:C})]});k.storyName="Default";k.parameters={storySource:{source:`args => {
  return <AvatarGroup {...args}>
          <Avatar icon="employee" />
          <Avatar initials="JD" />
          <Avatar>{Avatar1}</Avatar>
          <Avatar>{Avatar2}</Avatar>
        </AvatarGroup>;
}`}};const _={title:"Data Display / AvatarGroup",component:d,args:{type:i.Group},argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};_.parameters=_.parameters||{};_.parameters.docs={..._.parameters.docs||{},page:mt};const Re=["defaultStory"];export{Re as __namedExportsOrder,_ as default,k as defaultStory};
//# sourceMappingURL=AvatarGroup.stories-1c1f272e.js.map
