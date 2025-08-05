import{l as _,c as u,d2 as D,a1 as R,aT as S,p as g,d as T,b as O,s as h,d3 as N,A as x,ar as k,m as E,b7 as b,ah as I,b5 as q,z as j,d4 as V,d5 as A,w as M,K as B,r as C,j as o,Q as U}from"./iframe-DTnEqaXa.js";import{a as L,C as l}from"./index-DYGZZdnT.js";import{R as F}from"./ResponsivePopoverCommon.css-Dg8IVknp.js";function Y(){return _(S,{hideArrow:!0,contentOnlyOnDesktop:!0,placement:"Bottom",opener:this.opener,open:this._open,onClose:this.onAfterClose,onOpen:this.onAfterOpen,children:[u("div",{slot:"header",class:"ui5-cp-header",children:u(D,{level:"H1",wrappingType:"None",children:this._colorPaletteTitle})}),u("div",{children:u(L,{showMoreColors:this.showMoreColors,showRecentColors:this.showRecentColors,showDefaultColor:this.showDefaultColor,defaultColor:this.defaultColor,popupMode:!0,onItemClick:this.onSelectedColor,children:this.colorPaletteColors.map(t=>u("slot",{name:t._individualSlot}))})}),u("div",{slot:"footer",class:"ui5-cp-footer",children:u(R,{design:"Transparent",onClick:this.closePopover,children:this._cancelButtonLabel})})]})}g("@ui5/webcomponents-theming","sap_horizon",async()=>T);g("@ui5/webcomponents","sap_horizon",async()=>O);const z=`.ui5-cp-header{width:100%;height:var(--_ui5-v2-13-1_color-palette-button-height);display:flex;align-items:center}.ui5-cp-footer{width:100%;display:flex;justify-content:flex-end;align-items:center;margin:.1875rem 0}[ui5-responsive-popover]::part(content){padding:0}.ui5-cp-item-container{padding:.3125rem .6875rem}
`;var i=function(t,e,s,r){var c=arguments.length,n=c<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,s):r,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,s,r);else for(var v=t.length-1;v>=0;v--)(f=t[v])&&(n=(c<3?f(n):c>3?f(e,s,n):f(e,s))||n);return c>3&&n&&Object.defineProperty(e,s,n),n},m;let a=m=class extends q{constructor(){super(),this.showRecentColors=!1,this.showMoreColors=!1,this.showDefaultColor=!1,this.open=!1}get responsivePopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}get respPopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}closePopover(){this.open=!1}onAfterClose(){this.closePopover(),this.fireDecoratorEvent("close")}onAfterOpen(){var s;const e=this._colorPalette;e._currentlySelected?(s=e._currentlySelected)==null||s.focus():e.showRecentColors&&e.recentColorsElements.length?e.recentColorsElements[0].focus():e.showDefaultColor&&e.colorPaletteNavigationElements[0].focus(),e.allColorsInPalette.forEach(r=>{const c=r.offsetHeight+4;r.style.setProperty(j("--_ui5_color_palette_item_height"),`${c}px`)})}onSelectedColor(e){this.closePopover(),this.fireDecoratorEvent("item-click",e.detail)}get _colorPalette(){return this.responsivePopover.content[0].querySelector("[ui5-color-palette]")}isOpen(){return this.open}get colorPaletteColors(){return this.getSlottedNodes("colors")}get _colorPaletteTitle(){return m.i18nBundle.getText(V)}get _cancelButtonLabel(){return m.i18nBundle.getText(A)}get _open(){return this.open||void 0}};i([h({type:Boolean})],a.prototype,"showRecentColors",void 0);i([h({type:Boolean})],a.prototype,"showMoreColors",void 0);i([h({type:Boolean})],a.prototype,"showDefaultColor",void 0);i([h()],a.prototype,"defaultColor",void 0);i([h({type:Boolean})],a.prototype,"open",void 0);i([h({converter:N})],a.prototype,"opener",void 0);i([x({default:!0,type:HTMLElement,individualSlots:!0})],a.prototype,"colors",void 0);i([k("@ui5/webcomponents")],a,"i18nBundle",void 0);a=m=i([E({tag:"ui5-color-palette-popover",renderer:I,styles:[F,z],template:Y}),b("item-click",{bubbles:!0}),b("close",{bubbles:!0})],a);a.define();const p=M("ui5-color-palette-popover",["defaultColor","opener"],["open","showDefaultColor","showMoreColors","showRecentColors"],[],["close","item-click"]);p.displayName="ColorPalettePopover";try{p.displayName="ColorPalettePopover",p.__docgenInfo={description:`Represents a predefined range of colors for easier selection.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="ColorPalettePopover",p.__docgenInfo={description:`Represents a predefined range of colors for easier selection.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const H={title:"Modals & Popovers / ColorPalettePopover",component:p,argTypes:{children:{control:{disable:!0}},defaultColor:{control:{type:"color"}}},parameters:{chromatic:{delay:1e3},open:B},tags:["package:@ui5/webcomponents"]},d={render(t){const e=C.useRef(null),[s,r]=C.useState(t.open),c=()=>{r(n=>!n)};return C.useEffect(()=>{r(t.open)},[t.open]),o.jsxs(o.Fragment,{children:[o.jsx(U,{onClick:c,ref:e,children:"Open ColorPalettePopover"}),o.jsxs(p,{...t,opener:e.current,open:s,onClose:n=>{t.onClose(n),r(!1)},children:[o.jsx(l,{value:"black"}),o.jsx(l,{value:"darkblue"}),o.jsx(l,{value:"#444444"}),o.jsx(l,{value:"rgb(0,200,0)"}),o.jsx(l,{value:"green"}),o.jsx(l,{value:"darkred"}),o.jsx(l,{value:"yellow"}),o.jsx(l,{value:"blue"}),o.jsx(l,{value:"cyan"}),o.jsx(l,{value:"orange"}),o.jsx(l,{value:"#5480e7"}),o.jsx(l,{value:"#ff6699"})]})]})}};var w,y,P;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(P=(y=d.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const W=["Default"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:W,default:H},Symbol.toStringTag,{value:"Module"}));export{Q as C,d as D};
