import{j as o}from"./jsx-runtime-CLpGMVip.js";import{i as _}from"./utils-CrkjJOCn.js";import{r as C}from"./index-D23YZj_x.js";import{B as D}from"./index-DWbw-aO0.js";import{a as R,C as r}from"./index-CT-tiSIM.js";import{a as S,j as c,p as g,d as T,s as h,m as N,e as O,S as x,w as k}from"./withWebComponent-LqdGbSZi.js";import{d as I}from"./slot-_4yKMUwC.js";import{l as b}from"./event-strict-DgQLNDEV.js";import{i as q}from"./i18n-oG4QvOAt.js";import{e as E}from"./Popover-BAiQOiUL.js";import{d as j}from"./useIsomorphicLayoutEffect-ycvDkpIR.js";import{a as V}from"./Title-COB9QmMt.js";import{a as A}from"./Button-C6xPwCPp.js";import{R as M}from"./ResponsivePopover-vhq84JNR.js";import{d as B}from"./parameters-bundle.css-BQD_Xb6z.js";import{R as U}from"./ResponsivePopoverCommon.css-DRkcOJTn.js";import{a8 as L,a9 as F}from"./i18n-defaults-CjsTKlnu.js";function Y(){return S(M,{hideArrow:!0,contentOnlyOnDesktop:!0,placement:"Bottom",opener:this.opener,open:this._open,onClose:this.onAfterClose,onOpen:this.onAfterOpen,children:[c("div",{slot:"header",class:"ui5-cp-header",children:c(V,{level:"H1",wrappingType:"None",children:this._colorPaletteTitle})}),c("div",{children:c(R,{showMoreColors:this.showMoreColors,showRecentColors:this.showRecentColors,showDefaultColor:this.showDefaultColor,defaultColor:this.defaultColor,popupMode:!0,onItemClick:this.onSelectedColor,children:this.colorPaletteColors.map(t=>c("slot",{name:t._individualSlot}))})}),c("div",{slot:"footer",class:"ui5-cp-footer",children:c(A,{design:"Transparent",onClick:this.closePopover,children:this._cancelButtonLabel})})]})}g("@ui5/webcomponents-theming","sap_horizon",async()=>T);g("@ui5/webcomponents","sap_horizon",async()=>B);const H=`.ui5-cp-header{width:100%;height:var(--_ui5-v2-7-0_color-palette-button-height);display:flex;align-items:center}.ui5-cp-footer{width:100%;display:flex;justify-content:flex-end;align-items:center;margin:.1875rem 0}[ui5-responsive-popover]::part(content){padding:0}.ui5-cp-item-container{padding:.3125rem .6875rem}
`;var i=function(t,e,a,s){var u=arguments.length,n=u<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,a):s,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,a,s);else for(var v=t.length-1;v>=0;v--)(f=t[v])&&(n=(u<3?f(n):u>3?f(e,a,n):f(e,a))||n);return u>3&&n&&Object.defineProperty(e,a,n),n},m;let l=m=class extends x{constructor(){super(),this.showRecentColors=!1,this.showMoreColors=!1,this.showDefaultColor=!1,this.open=!1}get responsivePopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}get respPopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}closePopover(){this.open=!1}onAfterClose(){this.closePopover(),this.fireDecoratorEvent("close")}onAfterOpen(){var a;const e=this._colorPalette;e._currentlySelected?(a=e._currentlySelected)==null||a.focus():e.showRecentColors&&e.recentColorsElements.length?e.recentColorsElements[0].focus():e.showDefaultColor&&e.colorPaletteNavigationElements[0].focus(),e.allColorsInPalette.forEach(s=>{const u=s.offsetHeight+4;s.style.setProperty(j("--_ui5_color_palette_item_height"),`${u}px`)})}onSelectedColor(e){this.closePopover(),this.fireDecoratorEvent("item-click",e.detail)}get _colorPalette(){return this.responsivePopover.content[0].querySelector("[ui5-color-palette]")}isOpen(){return this.open}get colorPaletteColors(){return this.getSlottedNodes("colors")}get _colorPaletteTitle(){return m.i18nBundle.getText(L)}get _cancelButtonLabel(){return m.i18nBundle.getText(F)}get _open(){return this.open||void 0}};i([h({type:Boolean})],l.prototype,"showRecentColors",void 0);i([h({type:Boolean})],l.prototype,"showMoreColors",void 0);i([h({type:Boolean})],l.prototype,"showDefaultColor",void 0);i([h()],l.prototype,"defaultColor",void 0);i([h({type:Boolean})],l.prototype,"open",void 0);i([h({converter:E})],l.prototype,"opener",void 0);i([I({default:!0,type:HTMLElement,individualSlots:!0})],l.prototype,"colors",void 0);i([q("@ui5/webcomponents")],l,"i18nBundle",void 0);l=m=i([N({tag:"ui5-color-palette-popover",renderer:O,styles:[U,H],template:Y}),b("item-click",{bubbles:!0}),b("close",{bubbles:!0})],l);l.define();const p=k("ui5-color-palette-popover",["defaultColor","opener"],["open","showDefaultColor","showMoreColors","showRecentColors"],[],["close","item-click"]);p.displayName="ColorPalettePopover";try{p.displayName="ColorPalettePopover",p.__docgenInfo={description:`Represents a predefined range of colors for easier selection.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const z={title:"Modals & Popovers / ColorPalettePopover",component:p,argTypes:{children:{control:{disable:!0}},defaultColor:{control:{type:"color"}}},parameters:{chromatic:{delay:1e3},open:_},tags:["package:@ui5/webcomponents"]},d={render(t){const e=C.useRef(null),[a,s]=C.useState(t.open),u=()=>{s(n=>!n)};return o.jsxs(o.Fragment,{children:[o.jsx(D,{onClick:u,ref:e,children:"Open ColorPalettePopover"}),o.jsxs(p,{...t,opener:e.current,open:a,onClose:n=>{t.onClose(n),s(!1)},children:[o.jsx(r,{value:"black"}),o.jsx(r,{value:"darkblue"}),o.jsx(r,{value:"#444444"}),o.jsx(r,{value:"rgb(0,200,0)"}),o.jsx(r,{value:"green"}),o.jsx(r,{value:"darkred"}),o.jsx(r,{value:"yellow"}),o.jsx(r,{value:"blue"}),o.jsx(r,{value:"cyan"}),o.jsx(r,{value:"orange"}),o.jsx(r,{value:"#5480e7"}),o.jsx(r,{value:"#ff6699"})]})]})}};var w,y,P;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render(args) {
    const btnRef = useRef(null);
    const [open, setOpen] = useState(args.open);
    const onButtonClick = () => {
      setOpen(prev => !prev);
    };
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
}`,...(P=(y=d.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const W=["Default"],pe=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:W,default:z},Symbol.toStringTag,{value:"Module"}));export{pe as C,d as D};
