import{j as r}from"./jsx-runtime-5926aa06.js";import{r as v}from"./index-ebeaab24.js";import{r as D}from"./index-9c09ad76.js";import{B as j}from"./index-8f3b96f9.js";import{a as k,C as a}from"./index-e07481c6.js";import{_ as E}from"./iframe-97e1d9cd.js";import{a as $,U as I,d as S}from"./UI5Element-e8adceda.js";import{e as y,s as c,l as s,a as B,b as N,p as P,c as O,d as L,w as M}from"./withWebComponent-c710bf85.js";import{s as q}from"./slot-76e48863.js";import{c as _,e as A}from"./Icon-16710c43.js";import{C as V}from"./CSSColor-f91c8158.js";import{s as x}from"./ResponsivePopoverCommon.css-104fb5b1.js";import{b2 as U,aW as F}from"./i18n-defaults-254d6b69.js";import{B as W}from"./Button-6eea99db.js";import{a as z}from"./Title-c7a0da36.js";import Y from"./ResponsivePopover-37029899.js";const H=(e,o,t)=>t?y`<${c("ui5-responsive-popover",o,t)} hide-arrow content-only-on-desktop placement-type="Bottom"><div slot="header" class="ui5-cp-header"><${c("ui5-title",o,t)} class="ui5-cp-title">${s(e._colorPaletteTitle)}</${c("ui5-title",o,t)}></div><div><${c("ui5-color-palette",o,t)} ?show-more-colors="${e.showMoreColors}" ?show-recent-colors="${e.showRecentColors}" ?show-default-color="${e.showDefaultColor}" default-color="${s(e.defaultColor)}" popup-mode @ui5-item-click="${s(e.onSelectedColor)}">${_(e.colorPaletteColors,(l,n)=>l._id||n,(l,n)=>w(l))}</${c("ui5-color-palette",o,t)}></div><div slot="footer" class="ui5-cp-footer"><${c("ui5-button",o,t)} design="Transparent" @click="${e.closePopover}">${s(e._cancelButtonLabel)}</${c("ui5-button",o,t)}></div></${c("ui5-responsive-popover",o,t)}>`:y`<ui5-responsive-popover hide-arrow content-only-on-desktop placement-type="Bottom"><div slot="header" class="ui5-cp-header"><ui5-title class="ui5-cp-title">${s(e._colorPaletteTitle)}</ui5-title></div><div><ui5-color-palette ?show-more-colors="${e.showMoreColors}" ?show-recent-colors="${e.showRecentColors}" ?show-default-color="${e.showDefaultColor}" default-color="${s(e.defaultColor)}" popup-mode @ui5-item-click="${s(e.onSelectedColor)}">${_(e.colorPaletteColors,(l,n)=>l._id||n,(l,n)=>w(l))}</ui5-color-palette></div><div slot="footer" class="ui5-cp-footer"><ui5-button design="Transparent" @click="${e.closePopover}">${s(e._cancelButtonLabel)}</ui5-button></div></ui5-responsive-popover>`,w=(e,o,t,l,n)=>y`<slot name="${s(e._individualSlot)}"></slot>`;$("@ui5/webcomponents-theming","sap_fiori_3",async()=>B);$("@ui5/webcomponents","sap_fiori_3",async()=>N);const G={packageName:"@ui5/webcomponents",fileName:"themes/ColorPalettePopover.css.ts",content:".ui5-cp-header{width:100%;height:var(--_ui5_color-palette-button-height);display:flex;align-items:center}.ui5-cp-footer{width:100%;display:flex;justify-content:flex-end;margin:.1875rem 0}[ui5-responsive-popover]::part(content){padding:0}.ui5-cp-item-container{padding:.3125rem .6875rem}"};var u=globalThis&&globalThis.__decorate||function(e,o,t,l){var n=arguments.length,p=n<3?o:l===null?l=Object.getOwnPropertyDescriptor(o,t):l,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(e,o,t,l);else for(var C=e.length-1;C>=0;C--)(f=e[C])&&(p=(n<3?f(p):n>3?f(o,t,p):f(o,t))||p);return n>3&&p&&Object.defineProperty(o,t,p),p},d;let i=d=class extends I{static async onDefine(){d.i18nBundle=await S("@ui5/webcomponents")}constructor(){super()}_respPopover(){return this.responsivePopover=this.shadowRoot.querySelector("[ui5-responsive-popover]"),this.responsivePopover}_colorPalette(){return this.responsivePopover.content[0].querySelector("[ui5-color-palette]")}showAt(o){this._openPopover(o)}openPopover(o){console.warn("The method 'openPopover' is deprecated and will be removed in future, use 'showAt' instead."),this._openPopover(o)}_openPopover(o){this._respPopover(),this.responsivePopover.showAt(o,!0),this.showDefaultColor?this._colorPalette().colorPaletteNavigationElements[0].focus():this._colorPalette().focusColorElement(this._colorPalette().colorPaletteNavigationElements[0],this._colorPalette()._itemNavigation)}closePopover(){this.responsivePopover.close()}onSelectedColor(o){this.closePopover(),this.fireEvent("item-click",o.detail)}isOpen(){return this._respPopover(),this.responsivePopover.opened}get colorPaletteColors(){return this.getSlottedNodes("colors")}get _colorPaletteTitle(){return d.i18nBundle.getText(U)}get _cancelButtonLabel(){return d.i18nBundle.getText(F)}};u([P({type:Boolean})],i.prototype,"showRecentColors",void 0);u([P({type:Boolean})],i.prototype,"showMoreColors",void 0);u([P({type:Boolean})],i.prototype,"showDefaultColor",void 0);u([P({validator:V})],i.prototype,"defaultColor",void 0);u([q({default:!0,type:HTMLElement,individualSlots:!0})],i.prototype,"colors",void 0);i=d=u([O({tag:"ui5-color-palette-popover",renderer:L,styles:[x,G],template:H,dependencies:[Y,W,z,k]}),A("item-click",{detail:{color:{type:String}}})],i);i.define();const J=i,K=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),h=M("ui5-color-palette-popover",["defaultColor"],["showDefaultColor","showMoreColors","showRecentColors"],[],["item-click"],()=>E(()=>Promise.resolve().then(()=>K),void 0,import.meta.url));h.displayName="ColorPalettePopover";try{h.displayName="ColorPalettePopover",h.__docgenInfo={description:`Represents a predefined range of colors for easier selection. Overview The ColorPalettePopover provides the users with a slot to predefine colors. You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly. You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPalettePopover" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"ColorPalettePopover",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, { color: string; }>) => void"}},defaultColor:{defaultValue:null,description:"Defines the default color of the component. **Note:** The default color should be a part of the ColorPalette colors",name:"defaultColor",required:!1,type:{name:"Color"}},showDefaultColor:{defaultValue:null,description:"Defines whether the user can choose the default color from a button.",name:"showDefaultColor",required:!1,type:{name:"boolean"}},showMoreColors:{defaultValue:null,description:'Defines whether the user can choose a custom color from a component. **Note:** In order to use this property you need to import the following module: `"@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"`',name:"showMoreColors",required:!1,type:{name:"boolean"}},showRecentColors:{defaultValue:null,description:"Defines whether the user can see the last used colors in the bottom of the component",name:"showRecentColors",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Q={title:"Modals & Popovers / ColorPalettePopover",component:h,argTypes:{children:{control:{disable:!0}},defaultColor:{control:{type:"color"}}},parameters:{chromatic:{delay:1e3}}},T=v.forwardRef((e,o)=>D.createPortal(r.jsx(h,{...e,ref:o}),document.body));T.displayName="ColorPalettePopover";const m={render(e){const o=v.useRef(null),t=v.useRef(null);v.useEffect(()=>{},[]);const l=n=>{o.current.showAt(n.target)};return r.jsxs(r.Fragment,{children:[r.jsx(j,{onClick:l,ref:t,children:"Open ColorPalettePopover"}),r.jsxs(T,{...e,ref:o,children:[r.jsx(a,{value:"black"}),r.jsx(a,{value:"darkblue"}),r.jsx(a,{value:"#444444"}),r.jsx(a,{value:"rgb(0,200,0)"}),r.jsx(a,{value:"green"}),r.jsx(a,{value:"darkred"}),r.jsx(a,{value:"yellow"}),r.jsx(a,{value:"blue"}),r.jsx(a,{value:"cyan"}),r.jsx(a,{value:"orange"}),r.jsx(a,{value:"#5480e7"}),r.jsx(a,{value:"#ff6699"})]})]})}};var b,g,R;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
//# sourceMappingURL=ColorPalettePopover.stories-cfd00cf4.js.map
