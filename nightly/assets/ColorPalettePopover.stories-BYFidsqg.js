import{l as y,c,d2 as P,a1 as g,aT as _,p as w,d as D,b as R,s as h,d3 as S,A as T,ar as O,m as N,b7 as b,ah as x,b5 as k,z as E,d4 as I,d5 as q,w as j,K as V,r as C,j as o,Q as A}from"./iframe-Y9u60a80.js";import{a as M,C as l}from"./index-CrA6VFnW.js";import{R as B}from"./ResponsivePopoverCommon.css-DKPC5jE6.js";function U(){return y(_,{hideArrow:!0,contentOnlyOnDesktop:!0,placement:"Bottom",opener:this.opener,open:this._open,onClose:this.onAfterClose,onOpen:this.onAfterOpen,children:[c("div",{slot:"header",class:"ui5-cp-header",children:c(P,{level:"H1",wrappingType:"None",children:this._colorPaletteTitle})}),c("div",{children:c(M,{showMoreColors:this.showMoreColors,showRecentColors:this.showRecentColors,showDefaultColor:this.showDefaultColor,defaultColor:this.defaultColor,popupMode:!0,onItemClick:this.onSelectedColor,children:this.colorPaletteColors.map(t=>c("slot",{name:t._individualSlot}))})}),c("div",{slot:"footer",class:"ui5-cp-footer",children:c(g,{design:"Transparent",onClick:this.closePopover,children:this._cancelButtonLabel})})]})}w("@ui5/webcomponents-theming","sap_horizon",async()=>D);w("@ui5/webcomponents","sap_horizon",async()=>R);const L=`.ui5-cp-header{width:100%;height:var(--_ui5-v2-13-3_color-palette-button-height);display:flex;align-items:center}.ui5-cp-footer{width:100%;display:flex;justify-content:flex-end;align-items:center;margin:.1875rem 0}[ui5-responsive-popover]::part(content){padding:0}.ui5-cp-item-container{padding:.3125rem .6875rem}
`;var i=function(t,e,a,s){var p=arguments.length,n=p<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,a):s,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,a,s);else for(var v=t.length-1;v>=0;v--)(f=t[v])&&(n=(p<3?f(n):p>3?f(e,a,n):f(e,a))||n);return p>3&&n&&Object.defineProperty(e,a,n),n},m;let r=m=class extends k{constructor(){super(),this.showRecentColors=!1,this.showMoreColors=!1,this.showDefaultColor=!1,this.open=!1}get responsivePopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}get respPopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}closePopover(){this.open=!1}onAfterClose(){this.closePopover(),this.fireDecoratorEvent("close")}onAfterOpen(){const e=this._colorPalette;e._currentlySelected?e._currentlySelected?.focus():e.showRecentColors&&e.recentColorsElements.length?e.recentColorsElements[0].focus():e.showDefaultColor&&e.colorPaletteNavigationElements[0].focus(),e.allColorsInPalette.forEach(a=>{const s=a.offsetHeight+4;a.style.setProperty(E("--_ui5_color_palette_item_height"),`${s}px`)})}onSelectedColor(e){this.closePopover(),this.fireDecoratorEvent("item-click",e.detail)}get _colorPalette(){return this.responsivePopover.content[0].querySelector("[ui5-color-palette]")}isOpen(){return this.open}get colorPaletteColors(){return this.getSlottedNodes("colors")}get _colorPaletteTitle(){return m.i18nBundle.getText(I)}get _cancelButtonLabel(){return m.i18nBundle.getText(q)}get _open(){return this.open||void 0}};i([h({type:Boolean})],r.prototype,"showRecentColors",void 0);i([h({type:Boolean})],r.prototype,"showMoreColors",void 0);i([h({type:Boolean})],r.prototype,"showDefaultColor",void 0);i([h()],r.prototype,"defaultColor",void 0);i([h({type:Boolean})],r.prototype,"open",void 0);i([h({converter:S})],r.prototype,"opener",void 0);i([T({default:!0,type:HTMLElement,individualSlots:!0})],r.prototype,"colors",void 0);i([O("@ui5/webcomponents")],r,"i18nBundle",void 0);r=m=i([N({tag:"ui5-color-palette-popover",renderer:x,styles:[B,L],template:U}),b("item-click",{bubbles:!0}),b("close",{bubbles:!0})],r);r.define();const u=j("ui5-color-palette-popover",["defaultColor","opener"],["open","showDefaultColor","showMoreColors","showRecentColors"],[],["close","item-click"]);u.displayName="ColorPalettePopover";try{u.displayName="ColorPalettePopover",u.__docgenInfo={description:`Represents a predefined range of colors for easier selection.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{u.displayName="ColorPalettePopover",u.__docgenInfo={description:`Represents a predefined range of colors for easier selection.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const F={title:"Modals & Popovers / ColorPalettePopover",component:u,argTypes:{children:{control:{disable:!0}},defaultColor:{control:{type:"color"}}},parameters:{chromatic:{delay:1e3},open:V},tags:["package:@ui5/webcomponents"]},d={render(t){const e=C.useRef(null),[a,s]=C.useState(t.open),p=()=>{s(n=>!n)};return C.useEffect(()=>{s(t.open)},[t.open]),o.jsxs(o.Fragment,{children:[o.jsx(A,{onClick:p,ref:e,children:"Open ColorPalettePopover"}),o.jsxs(u,{...t,opener:e.current,open:a,onClose:n=>{t.onClose(n),s(!1)},children:[o.jsx(l,{value:"black"}),o.jsx(l,{value:"darkblue"}),o.jsx(l,{value:"#444444"}),o.jsx(l,{value:"rgb(0,200,0)"}),o.jsx(l,{value:"green"}),o.jsx(l,{value:"darkred"}),o.jsx(l,{value:"yellow"}),o.jsx(l,{value:"blue"}),o.jsx(l,{value:"cyan"}),o.jsx(l,{value:"orange"}),o.jsx(l,{value:"#5480e7"}),o.jsx(l,{value:"#ff6699"})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Y=["Default"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:Y,default:F},Symbol.toStringTag,{value:"Module"}));export{J as C,d as D};
