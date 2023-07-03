import{j as t}from"./jsx-runtime-5926aa06.js";import{r as v}from"./index-ebeaab24.js";import{r as D}from"./index-9c09ad76.js";import{B as k}from"./index-635b918b.js";import{a as j,C as s}from"./index-d6c1f625.js";import{_ as E}from"./iframe-e3fb29ee.js";import{a as $,U as I,d as S}from"./UI5Element-3b11b083.js";import{e as y,s as c,l as a,a as x,b as B,p as P,c as N,d as O,w as L}from"./withWebComponent-d4224c1c.js";import{s as M}from"./slot-76e48863.js";import{c as _,e as q}from"./Icon-9aa64f88.js";import{C as A}from"./CSSColor-f91c8158.js";import{s as V}from"./ResponsivePopoverCommon.css-2fa8fc87.js";import{b9 as U,b1 as F}from"./i18n-defaults-f002f496.js";import{a as z}from"./Button-86524f67.js";import{a as W}from"./Title-c6699a53.js";import Y from"./ResponsivePopover-00060bb5.js";function H(n,e,o){return o?y`<${c("ui5-responsive-popover",e,o)} hide-arrow content-only-on-desktop placement-type="Bottom"><div slot="header" class="ui5-cp-header"><${c("ui5-title",e,o)} class="ui5-cp-title">${a(this._colorPaletteTitle)}</${c("ui5-title",e,o)}></div><div><${c("ui5-color-palette",e,o)} ?show-more-colors="${this.showMoreColors}" ?show-recent-colors="${this.showRecentColors}" ?show-default-color="${this.showDefaultColor}" default-color="${a(this.defaultColor)}" popup-mode @ui5-item-click="${a(this.onSelectedColor)}">${_(this.colorPaletteColors,(r,l)=>r._id||l,(r,l)=>w.call(this,n,e,o,r,l))}</${c("ui5-color-palette",e,o)}></div><div slot="footer" class="ui5-cp-footer"><${c("ui5-button",e,o)} design="Transparent" @click="${this.closePopover}">${a(this._cancelButtonLabel)}</${c("ui5-button",e,o)}></div></${c("ui5-responsive-popover",e,o)}>`:y`<ui5-responsive-popover hide-arrow content-only-on-desktop placement-type="Bottom"><div slot="header" class="ui5-cp-header"><ui5-title class="ui5-cp-title">${a(this._colorPaletteTitle)}</ui5-title></div><div><ui5-color-palette ?show-more-colors="${this.showMoreColors}" ?show-recent-colors="${this.showRecentColors}" ?show-default-color="${this.showDefaultColor}" default-color="${a(this.defaultColor)}" popup-mode @ui5-item-click="${a(this.onSelectedColor)}">${_(this.colorPaletteColors,(r,l)=>r._id||l,(r,l)=>w.call(this,n,e,o,r,l))}</ui5-color-palette></div><div slot="footer" class="ui5-cp-footer"><ui5-button design="Transparent" @click="${this.closePopover}">${a(this._cancelButtonLabel)}</ui5-button></div></ui5-responsive-popover>`}function w(n,e,o,r,l){return y`<slot name="${a(r._individualSlot)}"></slot>`}$("@ui5/webcomponents-theming","sap_fiori_3",async()=>x);$("@ui5/webcomponents","sap_fiori_3",async()=>B);const G={packageName:"@ui5/webcomponents",fileName:"themes/ColorPalettePopover.css",content:`.ui5-cp-header {
	width: 100%;
	height: var(--_ui5_color-palette-button-height);
	display: flex;
	align-items: center;
}

.ui5-cp-footer {
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin: 0.1875rem 0;
}

[ui5-responsive-popover]::part(content) {
	padding: 0;
}

.ui5-cp-item-container {
	padding: 0.3125rem 0.6875rem;
}`};var u=globalThis&&globalThis.__decorate||function(n,e,o,r){var l=arguments.length,p=l<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(n,e,o,r);else for(var C=n.length-1;C>=0;C--)(f=n[C])&&(p=(l<3?f(p):l>3?f(e,o,p):f(e,o))||p);return l>3&&p&&Object.defineProperty(e,o,p),p},d;let i=d=class extends I{static async onDefine(){d.i18nBundle=await S("@ui5/webcomponents")}constructor(){super()}_respPopover(){return this.responsivePopover=this.shadowRoot.querySelector("[ui5-responsive-popover]"),this.responsivePopover}_colorPalette(){return this.responsivePopover.content[0].querySelector("[ui5-color-palette]")}showAt(e){this._openPopover(e)}openPopover(e){console.warn("The method 'openPopover' is deprecated and will be removed in future, use 'showAt' instead."),this._openPopover(e)}_openPopover(e){this._respPopover(),this.responsivePopover.showAt(e,!0),this.showDefaultColor?this._colorPalette().colorPaletteNavigationElements[0].focus():this._colorPalette().focusColorElement(this._colorPalette().colorPaletteNavigationElements[0],this._colorPalette()._itemNavigation)}closePopover(){this.responsivePopover.close()}onSelectedColor(e){this.closePopover(),this.fireEvent("item-click",e.detail)}isOpen(){return this._respPopover(),this.responsivePopover.opened}get colorPaletteColors(){return this.getSlottedNodes("colors")}get _colorPaletteTitle(){return d.i18nBundle.getText(U)}get _cancelButtonLabel(){return d.i18nBundle.getText(F)}};u([P({type:Boolean})],i.prototype,"showRecentColors",void 0);u([P({type:Boolean})],i.prototype,"showMoreColors",void 0);u([P({type:Boolean})],i.prototype,"showDefaultColor",void 0);u([P({validator:A})],i.prototype,"defaultColor",void 0);u([M({default:!0,type:HTMLElement,individualSlots:!0})],i.prototype,"colors",void 0);i=d=u([N({tag:"ui5-color-palette-popover",renderer:O,styles:[V,G],template:H,dependencies:[Y,z,W,j]}),q("item-click",{detail:{color:{type:String}}})],i);i.define();const J=i,K=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),h=L("ui5-color-palette-popover",["defaultColor"],["showDefaultColor","showMoreColors","showRecentColors"],[],["item-click"],()=>E(()=>Promise.resolve().then(()=>K),void 0,import.meta.url));h.displayName="ColorPalettePopover";try{h.displayName="ColorPalettePopover",h.__docgenInfo={description:`Represents a predefined range of colors for easier selection. Overview The ColorPalettePopover provides the users with a slot to predefine colors. You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly. You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ColorPalettePopover" target="_blank">UI5 Web Components Storybook</ui5-link>`,displayName:"ColorPalettePopover",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, ColorPaletteItemClickEventDetail>) => void"}},defaultColor:{defaultValue:null,description:"Defines the default color of the component. **Note:** The default color should be a part of the ColorPalette colors",name:"defaultColor",required:!1,type:{name:"Color"}},showDefaultColor:{defaultValue:null,description:"Defines whether the user can choose the default color from a button.",name:"showDefaultColor",required:!1,type:{name:"boolean"}},showMoreColors:{defaultValue:null,description:'Defines whether the user can choose a custom color from a component. **Note:** In order to use this property you need to import the following module: `"@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"`',name:"showMoreColors",required:!1,type:{name:"boolean"}},showRecentColors:{defaultValue:null,description:"Defines whether the user can see the last used colors in the bottom of the component",name:"showRecentColors",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Q={title:"Modals & Popovers / ColorPalettePopover",component:h,argTypes:{children:{control:{disable:!0}},defaultColor:{control:{type:"color"}}},parameters:{chromatic:{delay:1e3}}},T=v.forwardRef((n,e)=>D.createPortal(t.jsx(h,{...n,ref:e}),document.body));T.displayName="ColorPalettePopover";const m={render(n){const e=v.useRef(null),o=v.useRef(null);v.useEffect(()=>{},[]);const r=l=>{e.current.showAt(l.target)};return t.jsxs(t.Fragment,{children:[t.jsx(k,{onClick:r,ref:o,children:"Open ColorPalettePopover"}),t.jsxs(T,{...n,ref:e,children:[t.jsx(s,{value:"black"}),t.jsx(s,{value:"darkblue"}),t.jsx(s,{value:"#444444"}),t.jsx(s,{value:"rgb(0,200,0)"}),t.jsx(s,{value:"green"}),t.jsx(s,{value:"darkred"}),t.jsx(s,{value:"yellow"}),t.jsx(s,{value:"blue"}),t.jsx(s,{value:"cyan"}),t.jsx(s,{value:"orange"}),t.jsx(s,{value:"#5480e7"}),t.jsx(s,{value:"#ff6699"})]})]})}};var b,g,R;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render(args) {
    const popoverRef = useRef(null);
    const btnRef = useRef(null);
    useEffect(() => {
      if (isChromatic) {
        popoverRef.current.showAt(btnRef.current);
      }
    }, []);
    const onButtonClick = e => {
      popoverRef.current.showAt(e.target);
    };
    return <>
        <Button onClick={onButtonClick} ref={btnRef}>
          Open ColorPalettePopover
        </Button>
        <ColorPalettePopover {...args} ref={popoverRef}>
          <ColorPaletteItem value="black" />
          <ColorPaletteItem value="darkblue" />
          <ColorPaletteItem value="#444444" />
          <ColorPaletteItem value="rgb(0,200,0)" />
          <ColorPaletteItem value="green" />
          <ColorPaletteItem value="darkred" />
          <ColorPaletteItem value="yellow" />
          <ColorPaletteItem value="blue" />
          <ColorPaletteItem value="cyan" />
          <ColorPaletteItem value="orange" />
          <ColorPaletteItem value="#5480e7" />
          <ColorPaletteItem value="#ff6699" />
        </ColorPalettePopover>
      </>;
  }
}`,...(R=(g=m.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};const X=["Default"],ve=Object.freeze(Object.defineProperty({__proto__:null,Default:m,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{ve as C,m as D};
//# sourceMappingURL=ColorPalettePopover.stories-87332129.js.map
