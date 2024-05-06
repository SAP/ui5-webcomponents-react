import{j as t}from"./ManagedStyles-0Bwp9t5R.js";import"./index-3VW41uVg.js";import{r as C}from"./index-BP8_t0zE.js";import{r as T}from"./index-BxmsGmlx.js";import{B as k}from"./index-KkA_w46_.js";import{a as N,C as s}from"./index-DRktwcks.js";import{_ as I}from"./iframe-eOutskiY.js";import{U as j}from"./UI5Element-BfPpwo_k.js";import{D as A}from"./Popover-BRx0aMsU.js";import{a as P,b as c,l as a,s as E,p as h,c as q,d as V,w as O}from"./withWebComponent-DdLYI_QY.js";import{s as x}from"./slot-Df15G--e.js";import{e as b}from"./event-CegLCnR0.js";import{b as B}from"./i18nBundle-Dx46P1iz.js";import{C as M}from"./CSSColor-CzaElTOH.js";import{c as y}from"./Icon-CDo0XdyR.js";import{r as $}from"./Boot-BtdVcW0c.js";import{s as U}from"./parameters-bundle.css-DjgCrOcY.js";import{s as L}from"./ResponsivePopoverCommon.css-BeRAsjqV.js";import{$ as F,e as z}from"./i18n-defaults-BFrvdQTW.js";import{b as Y}from"./Button-C4siPQ_G.js";import{a as H}from"./Title-ClrU0KnW.js";import W from"./ResponsivePopover-BSbuHI1C.js";function G(l,e,o){return o?P`<${c("ui5-responsive-popover",e,o)} hide-arrow content-only-on-desktop placement-type="Bottom" ?open="${this._open}" .opener="${a(this.opener)}" @ui5-after-close="${a(this.onAfterClose)}"><div slot="header" class="ui5-cp-header"><${c("ui5-title",e,o)} level="H5">${a(this._colorPaletteTitle)}</${c("ui5-title",e,o)}></div><div><${c("ui5-color-palette",e,o)} ?show-more-colors="${this.showMoreColors}" ?show-recent-colors="${this.showRecentColors}" ?show-default-color="${this.showDefaultColor}" default-color="${a(this.defaultColor)}" popup-mode @ui5-item-click="${a(this.onSelectedColor)}">${y(this.colorPaletteColors,(r,n)=>r._id||n,(r,n)=>g.call(this,l,e,o,r,n))}</${c("ui5-color-palette",e,o)}></div><div slot="footer" class="ui5-cp-footer"><${c("ui5-button",e,o)} design="Transparent" @click="${this.closePopover}">${a(this._cancelButtonLabel)}</${c("ui5-button",e,o)}></div></${c("ui5-responsive-popover",e,o)}>`:P`<ui5-responsive-popover hide-arrow content-only-on-desktop placement-type="Bottom" ?open="${this._open}" .opener="${a(this.opener)}" @ui5-after-close="${a(this.onAfterClose)}"><div slot="header" class="ui5-cp-header"><ui5-title level="H5">${a(this._colorPaletteTitle)}</ui5-title></div><div><ui5-color-palette ?show-more-colors="${this.showMoreColors}" ?show-recent-colors="${this.showRecentColors}" ?show-default-color="${this.showDefaultColor}" default-color="${a(this.defaultColor)}" popup-mode @ui5-item-click="${a(this.onSelectedColor)}">${y(this.colorPaletteColors,(r,n)=>r._id||n,(r,n)=>g.call(this,l,e,o,r,n))}</ui5-color-palette></div><div slot="footer" class="ui5-cp-footer"><ui5-button design="Transparent" @click="${this.closePopover}">${a(this._cancelButtonLabel)}</ui5-button></div></ui5-responsive-popover>`}function g(l,e,o,r,n){return P`<slot name="${a(r._individualSlot)}"></slot>`}$("@ui5/webcomponents-theming","sap_horizon",async()=>E);$("@ui5/webcomponents","sap_horizon",async()=>U);const J={packageName:"@ui5/webcomponents",fileName:"themes/ColorPalettePopover.css.ts",content:`.ui5-cp-header{width:100%;height:var(--_ui5-v1-24-0_color-palette-button-height);display:flex;align-items:center}.ui5-cp-footer{width:100%;display:flex;justify-content:flex-end;align-items:center;margin:.1875rem 0}[ui5-responsive-popover]::part(content){padding:0}.ui5-cp-item-container{padding:.3125rem .6875rem}
`};var u=function(l,e,o,r){var n=arguments.length,p=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,v;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(l,e,o,r);else for(var w=l.length-1;w>=0;w--)(v=l[w])&&(p=(n<3?v(p):n>3?v(e,o,p):v(e,o))||p);return n>3&&p&&Object.defineProperty(e,o,p),p},m;let i=m=class extends j{static async onDefine(){m.i18nBundle=await B("@ui5/webcomponents")}constructor(){super()}get responsivePopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}get respPopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}showAt(e){console.warn("The method 'showAt' is deprecated and will be removed in future, use 'open' and 'opener' props instead."),this.open=!0,this.opener=e}openPopover(e){console.warn("The method 'openPopover' is deprecated and will be removed in future, use 'open' and 'opener' props instead."),this.showAt(e)}closePopover(){this.open=!1}onAfterClose(){this.closePopover(),this.fireEvent("close")}onSelectedColor(e){this.closePopover(),this.fireEvent("item-click",e.detail)}isOpen(){return this.open}get colorPaletteColors(){return this.getSlottedNodes("colors")}get _colorPaletteTitle(){return m.i18nBundle.getText(F)}get _cancelButtonLabel(){return m.i18nBundle.getText(z)}get _open(){return this.open||void 0}};u([h({type:Boolean})],i.prototype,"showRecentColors",void 0);u([h({type:Boolean})],i.prototype,"showMoreColors",void 0);u([h({type:Boolean})],i.prototype,"showDefaultColor",void 0);u([h({validator:M})],i.prototype,"defaultColor",void 0);u([h({type:Boolean})],i.prototype,"open",void 0);u([h({validator:A})],i.prototype,"opener",void 0);u([x({default:!0,type:HTMLElement,individualSlots:!0})],i.prototype,"colors",void 0);i=m=u([q({tag:"ui5-color-palette-popover",renderer:V,styles:[L,J],template:G,dependencies:[W,Y,H,N]}),b("item-click",{detail:{color:{type:String}}}),b("close")],i);i.define();const K=i,Q=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),d=O("ui5-color-palette-popover",["defaultColor","opener"],["open","showDefaultColor","showMoreColors","showRecentColors"],[],["close","item-click"],()=>I(()=>Promise.resolve().then(()=>Q),void 0,import.meta.url));d.displayName="ColorPalettePopover";try{d.displayName="ColorPalettePopover",d.__docgenInfo={description:`Represents a predefined range of colors for easier selection.

Overview
The ColorPalettePopover provides the users with a slot to predefine colors.

You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly.
You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.

### Usage

The palette is intended for users, who don't want to check and remember the different values of the colors and spend large amount of time to configure the right color through the color picker.

For the \`ColorPalettePopover\`


__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ColorPalettePopover",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClose:{defaultValue:null,description:"Fired when the `ColorPalettePopover` is closed due to user interaction.\n\n**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, never>) => void"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, ColorPaletteItemClickEventDetail>) => void"}},defaultColor:{defaultValue:{value:"undefined"},description:`Defines the default color of the component.

**Note:** The default color should be a part of the ColorPalette colors\``,name:"defaultColor",required:!1,type:{name:"Color"}},open:{defaultValue:{value:"false"},description:`Defines the open | closed state of the popover.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:"undefined"},description:`Defines the ID or DOM Reference of the element that the popover is shown at.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"opener",required:!1,type:{name:"string"}},showDefaultColor:{defaultValue:{value:"false"},description:"Defines whether the user can choose the default color from a button.",name:"showDefaultColor",required:!1,type:{name:"boolean"}},showMoreColors:{defaultValue:{value:"false"},description:'Defines whether the user can choose a custom color from a component.\n\n**Note:** In order to use this property you need to import the following module: `"@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"`',name:"showMoreColors",required:!1,type:{name:"boolean"}},showRecentColors:{defaultValue:{value:"false"},description:"Defines whether the user can see the last used colors in the bottom of the component",name:"showRecentColors",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="ColorPalettePopover",d.__docgenInfo={description:`Represents a predefined range of colors for easier selection.

Overview
The ColorPalettePopover provides the users with a slot to predefine colors.

You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly.
You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.

### Usage

The palette is intended for users, who don't want to check and remember the different values of the colors and spend large amount of time to configure the right color through the color picker.

For the \`ColorPalettePopover\`


__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ColorPalettePopover",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClose:{defaultValue:null,description:"Fired when the `ColorPalettePopover` is closed due to user interaction.\n\n**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, never>) => void"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, ColorPaletteItemClickEventDetail>) => void"}},defaultColor:{defaultValue:{value:"undefined"},description:`Defines the default color of the component.

**Note:** The default color should be a part of the ColorPalette colors\``,name:"defaultColor",required:!1,type:{name:"Color"}},open:{defaultValue:{value:"false"},description:`Defines the open | closed state of the popover.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:"undefined"},description:`Defines the ID or DOM Reference of the element that the popover is shown at.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"opener",required:!1,type:{name:"string"}},showDefaultColor:{defaultValue:{value:"false"},description:"Defines whether the user can choose the default color from a button.",name:"showDefaultColor",required:!1,type:{name:"boolean"}},showMoreColors:{defaultValue:{value:"false"},description:'Defines whether the user can choose a custom color from a component.\n\n**Note:** In order to use this property you need to import the following module: `"@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"`',name:"showMoreColors",required:!1,type:{name:"boolean"}},showRecentColors:{defaultValue:{value:"false"},description:"Defines whether the user can see the last used colors in the bottom of the component",name:"showRecentColors",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const X={title:"Modals & Popovers / ColorPalettePopover",component:d,argTypes:{children:{control:{disable:!0}},defaultColor:{control:{type:"color"}}},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents"]},S=C.forwardRef((l,e)=>T.createPortal(t.jsx(d,{...l,ref:e}),document.body));S.displayName="ColorPalettePopover";const f={render(l){const e=C.useRef(null),o=C.useRef(null);C.useEffect(()=>{},[]);const r=n=>{e.current.showAt(n.target)};return t.jsxs(t.Fragment,{children:[t.jsx(k,{onClick:r,ref:o,children:"Open ColorPalettePopover"}),t.jsxs(S,{...l,ref:e,children:[t.jsx(s,{value:"black"}),t.jsx(s,{value:"darkblue"}),t.jsx(s,{value:"#444444"}),t.jsx(s,{value:"rgb(0,200,0)"}),t.jsx(s,{value:"green"}),t.jsx(s,{value:"darkred"}),t.jsx(s,{value:"yellow"}),t.jsx(s,{value:"blue"}),t.jsx(s,{value:"cyan"}),t.jsx(s,{value:"orange"}),t.jsx(s,{value:"#5480e7"}),t.jsx(s,{value:"#ff6699"})]})]})}};var _,D,R;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(D=f.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const Z=["Default"],_e=Object.freeze(Object.defineProperty({__proto__:null,Default:f,__namedExportsOrder:Z,default:X},Symbol.toStringTag,{value:"Module"}));export{_e as C,f as D};
