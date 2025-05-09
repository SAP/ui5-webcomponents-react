import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{i as _}from"./utils-C2octU1i.js";import{r as C}from"./index-U0ga5oGA.js";import{B as D}from"./index-dNG4P2z4.js";import{a as R,C as r}from"./index-BgsXNvoW.js";import{h as S,j as u,p as g,d as T,s as h,m as O,y as N,E as x,w as k}from"./jsx-runtime-CkEx_Gfk.js";import{d as E}from"./slot-_4yKMUwC.js";import{l as b}from"./event-strict-DgQLNDEV.js";import{i as I}from"./i18n-CjR4HGlq.js";import{e as q}from"./Popover-eNK7pDla.js";import{d as j}from"./CustomElementsScope-CjZbIYTD.js";import{a as V}from"./Title-xNG2nZLh.js";import{a as A}from"./Button-DcNvBpEn.js";import{R as M}from"./ResponsivePopover-DdHf6Gx6.js";import{d as B}from"./parameters-bundle.css-Dkq9X0yL.js";import{R as U}from"./ResponsivePopoverCommon.css-BHUgyS0n.js";import{an as L,ao as F}from"./i18n-defaults-B158X0Y5.js";function Y(){return S(M,{hideArrow:!0,contentOnlyOnDesktop:!0,placement:"Bottom",opener:this.opener,open:this._open,onClose:this.onAfterClose,onOpen:this.onAfterOpen,children:[u("div",{slot:"header",class:"ui5-cp-header",children:u(V,{level:"H1",wrappingType:"None",children:this._colorPaletteTitle})}),u("div",{children:u(R,{showMoreColors:this.showMoreColors,showRecentColors:this.showRecentColors,showDefaultColor:this.showDefaultColor,defaultColor:this.defaultColor,popupMode:!0,onItemClick:this.onSelectedColor,children:this.colorPaletteColors.map(t=>u("slot",{name:t._individualSlot}))})}),u("div",{slot:"footer",class:"ui5-cp-footer",children:u(A,{design:"Transparent",onClick:this.closePopover,children:this._cancelButtonLabel})})]})}g("@ui5/webcomponents-theming","sap_horizon",async()=>T);g("@ui5/webcomponents","sap_horizon",async()=>B);const H=`.ui5-cp-header{width:100%;height:var(--_ui5-v2-10-0_color-palette-button-height);display:flex;align-items:center}.ui5-cp-footer{width:100%;display:flex;justify-content:flex-end;align-items:center;margin:.1875rem 0}[ui5-responsive-popover]::part(content){padding:0}.ui5-cp-item-container{padding:.3125rem .6875rem}
`;var i=function(t,e,s,l){var p=arguments.length,n=p<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,s):l,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,l);else for(var v=t.length-1;v>=0;v--)(f=t[v])&&(n=(p<3?f(n):p>3?f(e,s,n):f(e,s))||n);return p>3&&n&&Object.defineProperty(e,s,n),n},m;let a=m=class extends x{constructor(){super(),this.showRecentColors=!1,this.showMoreColors=!1,this.showDefaultColor=!1,this.open=!1}get responsivePopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}get respPopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}closePopover(){this.open=!1}onAfterClose(){this.closePopover(),this.fireDecoratorEvent("close")}onAfterOpen(){var s;const e=this._colorPalette;e._currentlySelected?(s=e._currentlySelected)==null||s.focus():e.showRecentColors&&e.recentColorsElements.length?e.recentColorsElements[0].focus():e.showDefaultColor&&e.colorPaletteNavigationElements[0].focus(),e.allColorsInPalette.forEach(l=>{const p=l.offsetHeight+4;l.style.setProperty(j("--_ui5_color_palette_item_height"),`${p}px`)})}onSelectedColor(e){this.closePopover(),this.fireDecoratorEvent("item-click",e.detail)}get _colorPalette(){return this.responsivePopover.content[0].querySelector("[ui5-color-palette]")}isOpen(){return this.open}get colorPaletteColors(){return this.getSlottedNodes("colors")}get _colorPaletteTitle(){return m.i18nBundle.getText(L)}get _cancelButtonLabel(){return m.i18nBundle.getText(F)}get _open(){return this.open||void 0}};i([h({type:Boolean})],a.prototype,"showRecentColors",void 0);i([h({type:Boolean})],a.prototype,"showMoreColors",void 0);i([h({type:Boolean})],a.prototype,"showDefaultColor",void 0);i([h()],a.prototype,"defaultColor",void 0);i([h({type:Boolean})],a.prototype,"open",void 0);i([h({converter:q})],a.prototype,"opener",void 0);i([E({default:!0,type:HTMLElement,individualSlots:!0})],a.prototype,"colors",void 0);i([I("@ui5/webcomponents")],a,"i18nBundle",void 0);a=m=i([O({tag:"ui5-color-palette-popover",renderer:N,styles:[U,H],template:Y}),b("item-click",{bubbles:!0}),b("close",{bubbles:!0})],a);a.define();const c=k("ui5-color-palette-popover",["defaultColor","opener"],["open","showDefaultColor","showMoreColors","showRecentColors"],[],["close","item-click"]);c.displayName="ColorPalettePopover";try{c.displayName="ColorPalettePopover",c.__docgenInfo={description:`Represents a predefined range of colors for easier selection.

Overview
The ColorPalettePopover provides the users with a slot to predefine colors.

You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly.
You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.

### Usage

The palette is intended for users, who don't want to check and remember the different values of the colors and spend large amount of time to configure the right color through the color picker.

For the \`ColorPalettePopover\`


__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ColorPalettePopover",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClose:{defaultValue:null,description:`Fired when the \`ColorPalettePopover\` is closed due to user interaction.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, never>) => void"}},onItemClick:{defaultValue:null,description:`Fired when the user selects a color.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, ColorPaletteItemClickEventDetail>) => void"}},defaultColor:{defaultValue:{value:"undefined"},description:`Defines the default color of the component.

**Note:** The default color should be a part of the ColorPalette colors\``,name:"defaultColor",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Defines the open | closed state of the popover.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:"undefined"},description:"Defines the ID or DOM Reference of the element that the popover is shown at.\nWhen using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.\nYou can only set the `opener` attribute to a DOM Reference when using JavaScript.\n\n**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.",name:"opener",required:!1,type:{name:"string | HTMLElement"}},showDefaultColor:{defaultValue:{value:"false"},description:"Defines whether the user can choose the default color from a button.",name:"showDefaultColor",required:!1,type:{name:"boolean"}},showMoreColors:{defaultValue:{value:"false"},description:"Defines whether the user can choose a custom color from a component.",name:"showMoreColors",required:!1,type:{name:"boolean"}},showRecentColors:{defaultValue:{value:"false"},description:"Defines whether the user can see the last used colors in the bottom of the component",name:"showRecentColors",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="ColorPalettePopover",c.__docgenInfo={description:`Represents a predefined range of colors for easier selection.

Overview
The ColorPalettePopover provides the users with a slot to predefine colors.

You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly.
You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.

### Usage

The palette is intended for users, who don't want to check and remember the different values of the colors and spend large amount of time to configure the right color through the color picker.

For the \`ColorPalettePopover\`


__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ColorPalettePopover",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClose:{defaultValue:null,description:`Fired when the \`ColorPalettePopover\` is closed due to user interaction.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, never>) => void"}},onItemClick:{defaultValue:null,description:`Fired when the user selects a color.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, ColorPaletteItemClickEventDetail>) => void"}},defaultColor:{defaultValue:{value:"undefined"},description:`Defines the default color of the component.

**Note:** The default color should be a part of the ColorPalette colors\``,name:"defaultColor",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Defines the open | closed state of the popover.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:"undefined"},description:"Defines the ID or DOM Reference of the element that the popover is shown at.\nWhen using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.\nYou can only set the `opener` attribute to a DOM Reference when using JavaScript.\n\n**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.",name:"opener",required:!1,type:{name:"string | HTMLElement"}},showDefaultColor:{defaultValue:{value:"false"},description:"Defines whether the user can choose the default color from a button.",name:"showDefaultColor",required:!1,type:{name:"boolean"}},showMoreColors:{defaultValue:{value:"false"},description:"Defines whether the user can choose a custom color from a component.",name:"showMoreColors",required:!1,type:{name:"boolean"}},showRecentColors:{defaultValue:{value:"false"},description:"Defines whether the user can see the last used colors in the bottom of the component",name:"showRecentColors",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const z={title:"Modals & Popovers / ColorPalettePopover",component:c,argTypes:{children:{control:{disable:!0}},defaultColor:{control:{type:"color"}}},parameters:{chromatic:{delay:1e3},open:_},tags:["package:@ui5/webcomponents"]},d={render(t){const e=C.useRef(null),[s,l]=C.useState(t.open),p=()=>{l(n=>!n)};return C.useEffect(()=>{l(t.open)},[t.open]),o.jsxs(o.Fragment,{children:[o.jsx(D,{onClick:p,ref:e,children:"Open ColorPalettePopover"}),o.jsxs(c,{...t,opener:e.current,open:s,onClose:n=>{t.onClose(n),l(!1)},children:[o.jsx(r,{value:"black"}),o.jsx(r,{value:"darkblue"}),o.jsx(r,{value:"#444444"}),o.jsx(r,{value:"rgb(0,200,0)"}),o.jsx(r,{value:"green"}),o.jsx(r,{value:"darkred"}),o.jsx(r,{value:"yellow"}),o.jsx(r,{value:"blue"}),o.jsx(r,{value:"cyan"}),o.jsx(r,{value:"orange"}),o.jsx(r,{value:"#5480e7"}),o.jsx(r,{value:"#ff6699"})]})]})}};var w,y,P;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render(args) {
    const btnRef = useRef(null);
    const [open, setOpen] = useState(args.open);
    const onButtonClick = () => {
      setOpen(prev => !prev);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={onButtonClick} ref={btnRef}>
          Open ColorPalettePopover
        </Button>
        <ColorPalettePopover {...args} opener={btnRef.current} open={open} onClose={e => {
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
}`,...(P=(y=d.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const W=["Default"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:W,default:z},Symbol.toStringTag,{value:"Module"}));export{ce as C,d as D};
