import{j as r}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import"./index-OEMzv4xH.js";import{r as w}from"./index-ClU-Tc1p.js";import{B as S}from"./index-mkeaCcK-.js";import{a as k,C as a}from"./index-CpqPoGo6.js";import{_ as N}from"./iframe-BRzMwtsR.js";import{h as y,j as u,f as $,s as T,a as m,m as O,k as I,I as j,w as E}from"./withWebComponent-Bw_l6Ewh.js";import{d as q}from"./slot-_4yKMUwC.js";import{s as b}from"./event-Dq0fpeHi.js";import{f as A}from"./i18nBundle-CyjtwURt.js";import{e as V}from"./Popover-ueRYOmZP.js";import{l}from"./if-defined-mCyQq_6q.js";import{c as P}from"./Icon-Bjam5y2n.js";import{s as M}from"./parameters-bundle.css-BFbT_feV.js";import{s as B}from"./ResponsivePopoverCommon.css-sHOieQOv.js";import{ah as x,j as L}from"./i18n-defaults-BuF9xM0k.js";import{b as U}from"./Button-Bn9nox5u.js";import{a as F}from"./Title-DlbwpOq2.js";import Y from"./ResponsivePopover-BPe6UEFQ.js";function z(s,e,o){return o?y`<${u("ui5-responsive-popover",e,o)} hide-arrow content-only-on-desktop placement="Bottom" ?open="${this._open}" .opener="${l(this.opener)}" @ui5-close="${l(this.onAfterClose)}" @ui5-open="${l(this.onAfterOpen)}"><div slot="header" class="ui5-cp-header"><${u("ui5-title",e,o)} level="H5" wrapping-type="None">${l(this._colorPaletteTitle)}</${u("ui5-title",e,o)}></div><div><${u("ui5-color-palette",e,o)} ?show-more-colors="${this.showMoreColors}" ?show-recent-colors="${this.showRecentColors}" ?show-default-color="${this.showDefaultColor}" default-color="${l(this.defaultColor)}" popup-mode @ui5-item-click="${l(this.onSelectedColor)}">${P(this.colorPaletteColors,(t,n)=>t._id||n,(t,n)=>g.call(this,s,e,o,t,n))}</${u("ui5-color-palette",e,o)}></div><div slot="footer" class="ui5-cp-footer"><${u("ui5-button",e,o)} design="Transparent" @click="${this.closePopover}">${l(this._cancelButtonLabel)}</${u("ui5-button",e,o)}></div></${u("ui5-responsive-popover",e,o)}>`:y`<ui5-responsive-popover hide-arrow content-only-on-desktop placement="Bottom" ?open="${this._open}" .opener="${l(this.opener)}" @ui5-close="${l(this.onAfterClose)}" @ui5-open="${l(this.onAfterOpen)}"><div slot="header" class="ui5-cp-header"><ui5-title level="H5" wrapping-type="None">${l(this._colorPaletteTitle)}</ui5-title></div><div><ui5-color-palette ?show-more-colors="${this.showMoreColors}" ?show-recent-colors="${this.showRecentColors}" ?show-default-color="${this.showDefaultColor}" default-color="${l(this.defaultColor)}" popup-mode @ui5-item-click="${l(this.onSelectedColor)}">${P(this.colorPaletteColors,(t,n)=>t._id||n,(t,n)=>g.call(this,s,e,o,t,n))}</ui5-color-palette></div><div slot="footer" class="ui5-cp-footer"><ui5-button design="Transparent" @click="${this.closePopover}">${l(this._cancelButtonLabel)}</ui5-button></div></ui5-responsive-popover>`}function g(s,e,o,t,n){return y`<slot name="${l(t._individualSlot)}"></slot>`}$("@ui5/webcomponents-theming","sap_horizon",async()=>T);$("@ui5/webcomponents","sap_horizon",async()=>M);const H={packageName:"@ui5/webcomponents",fileName:"themes/ColorPalettePopover.css.ts",content:`.ui5-cp-header{width:100%;height:var(--_ui5-v2-0-1_color-palette-button-height);display:flex;align-items:center}.ui5-cp-footer{width:100%;display:flex;justify-content:flex-end;align-items:center;margin:.1875rem 0}[ui5-responsive-popover]::part(content){padding:0}.ui5-cp-item-container{padding:.3125rem .6875rem}
`};var h=function(s,e,o,t){var n=arguments.length,p=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(s,e,o,t);else for(var f=s.length-1;f>=0;f--)(c=s[f])&&(p=(n<3?c(p):n>3?c(e,o,p):c(e,o))||p);return n>3&&p&&Object.defineProperty(e,o,p),p},v;let i=v=class extends j{static async onDefine(){v.i18nBundle=await A("@ui5/webcomponents")}constructor(){super(),this.showRecentColors=!1,this.showMoreColors=!1,this.showDefaultColor=!1,this.open=!1}get responsivePopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}get respPopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}closePopover(){this.open=!1}onAfterClose(){this.closePopover(),this.fireEvent("close")}onAfterOpen(){var o;const e=this._colorPalette;e.showDefaultColor&&!e._currentlySelected?e.colorPaletteNavigationElements[0].focus():e._shouldFocusRecentColors&&e.showRecentColors?e.recentColorsElements[0].focus():(o=e._currentlySelected)==null||o.focus()}onSelectedColor(e){this.closePopover(),this.fireEvent("item-click",e.detail)}get _colorPalette(){return this.responsivePopover.content[0].querySelector("[ui5-color-palette]")}isOpen(){return this.open}get colorPaletteColors(){return this.getSlottedNodes("colors")}get _colorPaletteTitle(){return v.i18nBundle.getText(x)}get _cancelButtonLabel(){return v.i18nBundle.getText(L)}get _open(){return this.open||void 0}};h([m({type:Boolean})],i.prototype,"showRecentColors",void 0);h([m({type:Boolean})],i.prototype,"showMoreColors",void 0);h([m({type:Boolean})],i.prototype,"showDefaultColor",void 0);h([m()],i.prototype,"defaultColor",void 0);h([m({type:Boolean})],i.prototype,"open",void 0);h([m({converter:V})],i.prototype,"opener",void 0);h([q({default:!0,type:HTMLElement,individualSlots:!0})],i.prototype,"colors",void 0);i=v=h([O({tag:"ui5-color-palette-popover",renderer:I,styles:[B,H],template:z,dependencies:[Y,U,F,k]}),b("item-click",{detail:{color:{type:String}}}),b("close")],i);i.define();const W=i,J=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),d=E("ui5-color-palette-popover",["defaultColor","opener"],["open","showDefaultColor","showMoreColors","showRecentColors"],[],["close","item-click"],()=>N(()=>Promise.resolve().then(()=>J),void 0,import.meta.url));d.displayName="ColorPalettePopover";try{d.displayName="ColorPalettePopover",d.__docgenInfo={description:`Represents a predefined range of colors for easier selection.

Overview
The ColorPalettePopover provides the users with a slot to predefine colors.

You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly.
You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.

### Usage

The palette is intended for users, who don't want to check and remember the different values of the colors and spend large amount of time to configure the right color through the color picker.

For the \`ColorPalettePopover\`


__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ColorPalettePopover",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClose:{defaultValue:null,description:"Fired when the `ColorPalettePopover` is closed due to user interaction.\n\n**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, never>) => void"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, ColorPaletteItemClickEventDetail>) => void"}},defaultColor:{defaultValue:{value:"undefined"},description:`Defines the default color of the component.

**Note:** The default color should be a part of the ColorPalette colors\``,name:"defaultColor",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Defines the open | closed state of the popover.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:"undefined"},description:"Defines the ID or DOM Reference of the element that the popover is shown at.\nWhen using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.\nYou can only set the `opener` attribute to a DOM Reference when using JavaScript.\n\n**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.",name:"opener",required:!1,type:{name:"string | HTMLElement"}},showDefaultColor:{defaultValue:{value:"false"},description:"Defines whether the user can choose the default color from a button.",name:"showDefaultColor",required:!1,type:{name:"boolean"}},showMoreColors:{defaultValue:{value:"false"},description:'Defines whether the user can choose a custom color from a component.\n\n**Note:** In order to use this property you need to import the following module: `"@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"`',name:"showMoreColors",required:!1,type:{name:"boolean"}},showRecentColors:{defaultValue:{value:"false"},description:"Defines whether the user can see the last used colors in the bottom of the component",name:"showRecentColors",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="ColorPalettePopover",d.__docgenInfo={description:`Represents a predefined range of colors for easier selection.

Overview
The ColorPalettePopover provides the users with a slot to predefine colors.

You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly.
You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.

### Usage

The palette is intended for users, who don't want to check and remember the different values of the colors and spend large amount of time to configure the right color through the color picker.

For the \`ColorPalettePopover\`


__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ColorPalettePopover",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClose:{defaultValue:null,description:"Fired when the `ColorPalettePopover` is closed due to user interaction.\n\n**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, never>) => void"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, ColorPaletteItemClickEventDetail>) => void"}},defaultColor:{defaultValue:{value:"undefined"},description:`Defines the default color of the component.

**Note:** The default color should be a part of the ColorPalette colors\``,name:"defaultColor",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Defines the open | closed state of the popover.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:"undefined"},description:"Defines the ID or DOM Reference of the element that the popover is shown at.\nWhen using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.\nYou can only set the `opener` attribute to a DOM Reference when using JavaScript.\n\n**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.",name:"opener",required:!1,type:{name:"string | HTMLElement"}},showDefaultColor:{defaultValue:{value:"false"},description:"Defines whether the user can choose the default color from a button.",name:"showDefaultColor",required:!1,type:{name:"boolean"}},showMoreColors:{defaultValue:{value:"false"},description:'Defines whether the user can choose a custom color from a component.\n\n**Note:** In order to use this property you need to import the following module: `"@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"`',name:"showMoreColors",required:!1,type:{name:"boolean"}},showRecentColors:{defaultValue:{value:"false"},description:"Defines whether the user can see the last used colors in the bottom of the component",name:"showRecentColors",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const G={title:"Modals & Popovers / ColorPalettePopover",component:d,argTypes:{children:{control:{disable:!0}},defaultColor:{control:{type:"color"}}},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents"]},C={render(s){const e=w.useRef(null),o=w.useRef(null),[t,n]=w.useState(s.open);w.useEffect(()=>{},[]);const p=c=>{e.current.opener=c.currentTarget,n(f=>!f)};return r.jsxs(r.Fragment,{children:[r.jsx(S,{onClick:p,ref:o,children:"Open ColorPalettePopover"}),r.jsxs(d,{...s,ref:e,open:t,onClose:c=>{s.onClose(c),n(!1)},children:[r.jsx(a,{value:"black"}),r.jsx(a,{value:"darkblue"}),r.jsx(a,{value:"#444444"}),r.jsx(a,{value:"rgb(0,200,0)"}),r.jsx(a,{value:"green"}),r.jsx(a,{value:"darkred"}),r.jsx(a,{value:"yellow"}),r.jsx(a,{value:"blue"}),r.jsx(a,{value:"cyan"}),r.jsx(a,{value:"orange"}),r.jsx(a,{value:"#5480e7"}),r.jsx(a,{value:"#ff6699"})]})]})}};var _,D,R;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render(args) {
    const popoverRef = useRef(null);
    const btnRef = useRef(null);
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      if (isChromatic) {
        popoverRef.current.showAt(btnRef.current);
      }
    }, []);
    const onButtonClick = e => {
      popoverRef.current.opener = e.currentTarget;
      setOpen(prev => !prev);
    };
    return <>
        <Button onClick={onButtonClick} ref={btnRef}>
          Open ColorPalettePopover
        </Button>
        <ColorPalettePopover {...args} ref={popoverRef} open={open} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }}>
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
}`,...(R=(D=C.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const K=["Default"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Default:C,__namedExportsOrder:K,default:G},Symbol.toStringTag,{value:"Module"}));export{Ce as C,C as D};
