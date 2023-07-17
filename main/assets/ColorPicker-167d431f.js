import{r as w,U as I,l as x}from"./UI5Element-11982a12.js";import{b as _,l as r,d as l,s as B,a as L,p as h,c as D,f as R}from"./withWebComponent-03662f7f.js";import{e as T}from"./Icon-3498e12d.js";import{l as E}from"./Icons-234bf59e.js";import{C as H}from"./CSSColor-f91c8158.js";import{I as V}from"./Integer-f7f172c9.js";import{F as O}from"./Float-99d99064.js";import{s as b}from"./style-map-9183c00a.js";import{a as G}from"./Input-2543fb7f.js";import N from"./Slider-bfd324a7.js";import P from"./Label-f867a533.js";import{r as K,s as Y,t as X,u as M,v as $,w as Z,x as Q}from"./i18n-defaults-1a83921e.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-f515de3e.js";import"./index-ccf6a75d.js";import"./jsx-runtime-6b79a019.js";import"./useIsomorphicLayoutEffect-0a189966.js";import"./slot-76e48863.js";import"./ResizeHandler-9ebe913c.js";import"./Device-6afa24d0.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./Suggestions.css-439ce336.js";import"./information-2644a02f.js";import"./Popover-1f09fd29.js";import"./PopupsCommon.css-fd974b5a.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./class-map-341004db.js";import"./BrowserScrollbar.css-bcc05298.js";import"./ResponsivePopoverCommon.css-94d32982.js";import"./ValueStateMessage.css-e895ae9f.js";import"./SliderBase-8e6187c1.js";import"./WrappingType-b81e595a.js";var k;(function(e){e.aliceblue="f0f8ff",e.antiquewhite="faebd7",e.aqua="00ffff",e.aquamarine="7fffd4",e.azure="f0ffff",e.beige="f5f5dc",e.bisque="ffe4c4",e.black="000000",e.blanchedalmond="ffebcd",e.blue="0000ff",e.blueviolet="8a2be2",e.brown="a52a2a",e.burlywood="deb887",e.cadetblue="5f9ea0",e.chartreuse="7fff00",e.chocolate="d2691e",e.coral="ff7f50",e.cornflowerblue="6495ed",e.cornsilk="fff8dc",e.crimson="dc143c",e.cyan="00ffff",e.darkblue="00008b",e.darkcyan="008b8b",e.darkgoldenrod="b8860b",e.darkgray="a9a9a9",e.darkgrey="a9a9a9",e.darkgreen="006400",e.darkkhaki="bdb76b",e.darkmagenta="8b008b",e.darkolivegreen="556b2f",e.darkorange="ff8c00",e.darkorchid="9932cc",e.darkred="8b0000",e.darksalmon="e9967a",e.darkseagreen="8fbc8f",e.darkslateblue="483d8b",e.darkslategray="2f4f4f",e.darkslategrey="2f4f4f",e.darkturquoise="00ced1",e.darkviolet="9400d3",e.deeppink="ff1493",e.deepskyblue="00bfff",e.dimgray="696969",e.dimgrey="696969",e.dodgerblue="1e90ff",e.firebrick="b22222",e.floralwhite="fffaf0",e.forestgreen="228b22",e.fuchsia="ff00ff",e.gainsboro="dcdcdc",e.ghostwhite="f8f8ff",e.gold="ffd700",e.goldenrod="daa520",e.gray="808080",e.grey="808080",e.green="008000",e.greenyellow="adff2f",e.honeydew="f0fff0",e.hotpink="ff69b4",e.indianred="cd5c5c",e.indigo="4b0082",e.ivory="fffff0",e.khaki="f0e68c",e.lavender="e6e6fa",e.lavenderblush="fff0f5",e.lawngreen="7cfc00",e.lemonchiffon="fffacd",e.lightblue="add8e6",e.lightcoral="f08080",e.lightcyan="e0ffff",e.lightgoldenrodyellow="fafad2",e.lightgray="d3d3d3",e.lightgrey="d3d3d3",e.lightgreen="90ee90",e.lightpink="ffb6c1",e.lightsalmon="ffa07a",e.lightseagreen="20b2aa",e.lightskyblue="87cefa",e.lightslategray="778899",e.lightslategrey="778899",e.lightsteelblue="b0c4de",e.lightyellow="ffffe0",e.lime="00ff00",e.limegreen="32cd32",e.linen="faf0e6",e.magenta="ff00ff",e.maroon="800000",e.mediumaquamarine="66cdaa",e.mediumblue="0000cd",e.mediumorchid="ba55d3",e.mediumpurple="9370db",e.mediumseagreen="3cb371",e.mediumslateblue="7b68ee",e.mediumspringgreen="00fa9a",e.mediumturquoise="48d1cc",e.mediumvioletred="c71585",e.midnightblue="191970",e.mintcream="f5fffa",e.mistyrose="ffe4e1",e.moccasin="ffe4b5",e.navajowhite="ffdead",e.navy="000080",e.oldlace="fdf5e6",e.olive="808000",e.olivedrab="6b8e23",e.orange="ffa500",e.orangered="ff4500",e.orchid="da70d6",e.palegoldenrod="eee8aa",e.palegreen="98fb98",e.paleturquoise="afeeee",e.palevioletred="db7093",e.papayawhip="ffefd5",e.peachpuff="ffdab9",e.peru="cd853f",e.pink="ffc0cb",e.plum="dda0dd",e.powderblue="b0e0e6",e.purple="800080",e.red="ff0000",e.rosybrown="bc8f8f",e.royalblue="4169e1",e.saddlebrown="8b4513",e.salmon="fa8072",e.sandybrown="f4a460",e.seagreen="2e8b57",e.seashell="fff5ee",e.sienna="a0522d",e.silver="c0c0c0",e.skyblue="87ceeb",e.slateblue="6a5acd",e.slategray="708090",e.slategrey="708090",e.snow="fffafa",e.springgreen="00ff7f",e.steelblue="4682b4",e.tan="d2b48c",e.teal="008080",e.thistle="d8bfd8",e.tomato="ff6347",e.turquoise="40e0d0",e.violet="ee82ee",e.wheat="f5deb3",e.white="ffffff",e.whitesmoke="f5f5f5",e.yellow="ffff00",e.yellowgreen="9acd32",e.transparent="00000000"})(k||(k={}));const z=e=>e.startsWith("rgba")?U(e):e.startsWith("rgb")?q(e):(e.indexOf("#")===0&&(e.length===4?e=`${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`:e=e.slice(1,e.length)),e in k&&(e=k[e]),y(e)),U=e=>{const i=e.indexOf("("),n=[];for(let a=0;a<e.length;a++)e[a]===","&&n.push(a);return{r:parseInt(e.slice(i+1,n[0]).trim()),g:parseInt(e.slice(n[0]+1,n[1]).trim()),b:parseInt(e.slice(n[1]+1,n[2]).trim())}},q=e=>{const i=e.indexOf("("),n=e.indexOf(")"),a=[];for(let t=0;t<e.length;t++)e[t]===","&&a.push(t);return{r:parseInt(e.slice(i+1,a[0]).trim()),g:parseInt(e.slice(a[0]+1,a[1]).trim()),b:parseInt(e.slice(a[1]+1,n).trim())}},v=e=>{const i=(1-Math.abs(2*e.l-1))*e.s,n=i*(1-Math.abs(e.h/60%2-1)),a=e.l-i/2;let t;switch(Math.round(e.h/60)){case 0:t={r:i,g:n,b:0};break;case 1:t={r:n,g:i,b:0};break;case 2:t={r:0,g:i,b:n};break;case 3:t={r:0,g:n,b:i};break;case 4:t={r:n,g:0,b:i};break;default:t={r:i,g:0,b:n}}return{r:Math.floor((t.r+a)*255),g:Math.floor((t.g+a)*255),b:Math.floor((t.b+a)*255)}},y=e=>({r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16)}),F=e=>{const i=e.r/255,n=e.g/255,a=e.b/255,t=Math.max(i,n,a),s=Math.min(i,n,a),d=t-s;let c=0,A;d===0?c=0:t===i?c=60*((n-a)/d%6):t===n?c=60*((a-i)/d+2):t===a&&(c=60*((i-n)/d+4));const g=(t+s)/2;return d===0?A=0:A=d/(1-Math.abs(2*g-1)),{h:c,s:A,l:g}};function j(e,i,n){return n?_`<section dir="${r(this.effectiveDir)}" class="ui5-color-picker-root"><div class="ui5-color-picker-main-color" style="${b(this.styles.mainColor)}" @mousedown="${this._handleMouseDown}" @mouseup="${this._handleMouseUp}" @mousemove="${this._handleMouseMove}" @mouseout="${this._handleMouseOut}"><div class="ui5-color-picker-circle" style="${b(this.styles.circle)}"></div></div><div class="ui5-color-picker-sliders-wrapper"><${l("ui5-slider",i,n)} disabled="${r(this.inputsDisabled)}" class="ui5-color-picker-hue-slider" min="0" max="1530" value="${r(this._hue)}" accessible-name="${r(this.hueSliderLabel)}" @ui5-input="${r(this._handleHueInput)}"></${l("ui5-slider",i,n)}><${l("ui5-slider",i,n)} disabled="${r(this.inputsDisabled)}" class="ui5-color-picker-alpha-slider" min="0" max="1" step="0.01" value="${r(this._alpha)}" accessible-name="${r(this.alphaSliderLabel)}" @ui5-input="${r(this._handleAlphaInput)}"></${l("ui5-slider",i,n)}></div><div class="ui5-color-picker-current-color"><div class="ui5-color-picker-colors-wrapper"><span class="ui5-color-picker-white"></span><span class="ui5-color-picker-color"><div class="ui5-color-picker-color-inner" style="${b(this.styles.colorSpan)}"></div></span></div><div class="ui5-color-picker-hex-input-wrapper"><${l("ui5-label",i,n)}>Hex</${l("ui5-label",i,n)}><${l("ui5-input",i,n)} class="ui5-color-picker-hex-input" value="${r(this.hex)}" @keydown="${this._onkeydown}" accessible-name="${r(this.hexInputLabel)}" @ui5-change="${r(this._handleHEXChange)}" value-state="${r(this.hexInputErrorState)}"></${l("ui5-input",i,n)}></div></div><div class="ui5-color-picker-rgb-wrapper" @ui5-change="${r(this._handleRGBInputsChange)}"><div class="ui5-color-picker-rgb"><${l("ui5-input",i,n)} id="red" class="ui5-color-picker-rgb-input" disabled="${r(this.inputsDisabled)}" accessible-name="${r(this.redInputLabel)}" value="${r(this._color.r)}"></${l("ui5-input",i,n)}><${l("ui5-label",i,n)}>R</${l("ui5-label",i,n)}></div><div class="ui5-color-picker-rgb"><${l("ui5-input",i,n)} id="green" class="ui5-color-picker-rgb-input" disabled="${r(this.inputsDisabled)}" accessible-name="${r(this.greenInputLabel)}" value="${r(this._color.g)}"></${l("ui5-input",i,n)}><${l("ui5-label",i,n)}>G</${l("ui5-label",i,n)}></div><div class="ui5-color-picker-rgb"><${l("ui5-input",i,n)} id="blue" class="ui5-color-picker-rgb-input" disabled="${r(this.inputsDisabled)}" accessible-name="${r(this.blueInputLabel)}" value="${r(this._color.b)}"></${l("ui5-input",i,n)}><${l("ui5-label",i,n)}>B</${l("ui5-label",i,n)}></div><div class="ui5-color-picker-rgb"><${l("ui5-input",i,n)} id="alpha" disabled="${r(this.inputsDisabled)}" class="ui5-color-picker-rgb-input" value="${r(this._alpha)}" accessible-name="${r(this.alphaInputLabel)}" @ui5-input="${r(this._handleAlphaInput)}" @ui5-change="${r(this._handleAlphaChange)}"></${l("ui5-input",i,n)}><${l("ui5-label",i,n)}>A</${l("ui5-label",i,n)}></div></div></section>`:_`<section dir="${r(this.effectiveDir)}" class="ui5-color-picker-root"><div class="ui5-color-picker-main-color" style="${b(this.styles.mainColor)}" @mousedown="${this._handleMouseDown}" @mouseup="${this._handleMouseUp}" @mousemove="${this._handleMouseMove}" @mouseout="${this._handleMouseOut}"><div class="ui5-color-picker-circle" style="${b(this.styles.circle)}"></div></div><div class="ui5-color-picker-sliders-wrapper"><ui5-slider disabled="${r(this.inputsDisabled)}" class="ui5-color-picker-hue-slider" min="0" max="1530" value="${r(this._hue)}" accessible-name="${r(this.hueSliderLabel)}" @ui5-input="${r(this._handleHueInput)}"></ui5-slider><ui5-slider disabled="${r(this.inputsDisabled)}" class="ui5-color-picker-alpha-slider" min="0" max="1" step="0.01" value="${r(this._alpha)}" accessible-name="${r(this.alphaSliderLabel)}" @ui5-input="${r(this._handleAlphaInput)}"></ui5-slider></div><div class="ui5-color-picker-current-color"><div class="ui5-color-picker-colors-wrapper"><span class="ui5-color-picker-white"></span><span class="ui5-color-picker-color"><div class="ui5-color-picker-color-inner" style="${b(this.styles.colorSpan)}"></div></span></div><div class="ui5-color-picker-hex-input-wrapper"><ui5-label>Hex</ui5-label><ui5-input class="ui5-color-picker-hex-input" value="${r(this.hex)}" @keydown="${this._onkeydown}" accessible-name="${r(this.hexInputLabel)}" @ui5-change="${r(this._handleHEXChange)}" value-state="${r(this.hexInputErrorState)}"></ui5-input></div></div><div class="ui5-color-picker-rgb-wrapper" @ui5-change="${r(this._handleRGBInputsChange)}"><div class="ui5-color-picker-rgb"><ui5-input id="red" class="ui5-color-picker-rgb-input" disabled="${r(this.inputsDisabled)}" accessible-name="${r(this.redInputLabel)}" value="${r(this._color.r)}"></ui5-input><ui5-label>R</ui5-label></div><div class="ui5-color-picker-rgb"><ui5-input id="green" class="ui5-color-picker-rgb-input" disabled="${r(this.inputsDisabled)}" accessible-name="${r(this.greenInputLabel)}" value="${r(this._color.g)}"></ui5-input><ui5-label>G</ui5-label></div><div class="ui5-color-picker-rgb"><ui5-input id="blue" class="ui5-color-picker-rgb-input" disabled="${r(this.inputsDisabled)}" accessible-name="${r(this.blueInputLabel)}" value="${r(this._color.b)}"></ui5-input><ui5-label>B</ui5-label></div><div class="ui5-color-picker-rgb"><ui5-input id="alpha" disabled="${r(this.inputsDisabled)}" class="ui5-color-picker-rgb-input" value="${r(this._alpha)}" accessible-name="${r(this.alphaInputLabel)}" @ui5-input="${r(this._handleAlphaInput)}" @ui5-change="${r(this._handleAlphaChange)}"></ui5-input><ui5-label>A</ui5-label></div></div></section>`}w("@ui5/webcomponents-theming","sap_fiori_3",async()=>B);w("@ui5/webcomponents","sap_fiori_3",async()=>L);const J={packageName:"@ui5/webcomponents",fileName:"themes/ColorPicker.css",content:`:host(:not([hidden])) {
    display: inline-block;
}

.ui5-color-picker-root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.ui5-color-picker-main-color {
    width: 16rem;
    height: 16rem;
    position: relative;
    margin-bottom: 1.5rem;
    border: 1px solid var(--sapContent_ForegroundBorderColor);
    background-size: 100%;
    background-image: -webkit-linear-gradient(left, #000, rgba(0,0,0,0)),-webkit-linear-gradient(top, rgba(255,255,255,0), #fff);
    background-image: -moz-linear-gradient(left, #000, rgba(0,0,0,0)),-moz-linear-gradient(top, rgba(255,255,255,0), #fff);
    background-image: linear-gradient(left, #000, rgba(0,0,0,0)),linear-gradient(top, rgba(255,255,255,0), #fff);
    background-image: -webkit-linear-gradient(left, #000, rgba(0,0,0,0), #fff),-webkit-linear-gradient(top, rgba(128,128,128,0), #808080);
    background-image: -moz-linear-gradient(left, #000, rgba(0,0,0,0), #fff),-moz-linear-gradient(top, rgba(128,128,128,0), #808080);
    background-image: linear-gradient(left, #000, rgba(0,0,0,0), #fff),linear-gradient(top, rgba(128,128,128,0), #808080);
	user-select: none;
    -moz-user-select: none;
}

.ui5-color-picker-circle {
    position: absolute;
    box-sizing: border-box;
    width: 13px;
    height: 13px;
    border: var(--_ui5_color_picker_circle_outer_border);
    border-radius: 0.6875rem;
    pointer-events: none;
}

.ui5-color-picker-circle:after {
    content: "";
    position: absolute;
    width: var(--_ui5_color_picker_circle_inner_circle_size);
    height: var(--_ui5_color_picker_circle_inner_circle_size);;
    border: var(--_ui5_color_picker_circle_inner_border);
    border-radius: 0.9375rem;
    pointer-events: none;
}

.ui5-color-picker-sliders-wrapper {
    width: calc(100% - 11px);
    margin-left: -10px;
}

[ui5-slider] {
    --_ui5_slider_active_progress_border: none;
    --_ui5_slider_progress_box_sizing: content-box;
}

[ui5-slider]::part(handle) {
    width: 0.9375rem;
    height: 1.5rem;
    background: transparent;
    margin-left: -2px;
    margin-top: var(--_ui5_color_picker_slider_handle_margin_top);
    box-sizing: border-box;
}

[ui5-slider]::part(handle)::after {
    content: "";
    border: 2px solid #fff;
    display: block;
    height: 1.25rem;
    border-radius: 1rem;
    width: 100%;
    box-sizing: border-box;
}

[ui5-slider]::part(root-container) {
	padding: 1rem 0;
}

[ui5-slider]::part(progress-container) {
    width: calc(100% + 11px);
    height: 18px;
    position: absolute;
    margin-top: var(--_ui5_color_picker_slider_container_margin_top);
    border-radius: 0;
    border: 1px solid var(--sapField_BorderColor);
}

[ui5-slider].ui5-color-picker-hue-slider::part(progress-container) {
    background-size: 100%;
    background-image: -webkit-linear-gradient(left, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
    background-image: -moz-linear-gradient(left, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
    background-image: linear-gradient(left, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
    background-color: none;
}

[ui5-slider].ui5-color-picker-alpha-slider::part(progress-container) {
    background-image: -webkit-linear-gradient(left, rgba(65, 120, 13, 0), var(--ui5_Color_Picker_Progress_Container_Color)), url('data:image/png;base64,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');
}

[ui5-slider]::part(progress-bar) {
    background: transparent;
}

.ui5-color-picker-current-color {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.ui5-color-picker-colors-wrapper {
    display: flex;
    flex-wrap: nowrap;
    height: 1.5rem;
    border: 1px solid var(--sapField_BorderColor);
}

.ui5-color-picker-white,
.ui5-color-picker-color {
    width: 3.1rem;
    background: #fff;
    display: block;
}

.ui5-color-picker-color {
    background-image: url('data:image/png;base64,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');
}

.ui5-color-picker-color-inner {
    width: 100%;
    height: 100%;
}

.ui5-color-picker-hex-input-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
}

.ui5-color-picker-hex-input {
    width: 4.5rem;
    min-width: 4.5rem;
    margin-left: .2rem;
}

.ui5-color-picker-rgb-wrapper {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.ui5-color-picker-rgb {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
}

.ui5-color-picker-rgb-input {
    width: 2.5rem;
    min-width: 2.5rem;
    text-align: center;
}

.ui5-color-picker-hue-slider::part(progress-container)::before,
.ui5-color-picker-alpha-slider::part(progress-container)::before,
.ui5-color-picker-hue-slider::part(progress-container)::after,
.ui5-color-picker-alpha-slider::part(progress-container)::after,
[ui5-slider].ui5-color-picker-hue-slider::part(icon-slider),
[ui5-slider].ui5-color-picker-alpha-slider::part(icon-slider) {
     display: none;
}

.ui5-color-picker-alpha-slider::part(handle),
.ui5-color-picker-hue-slider::part(handle) {
    box-shadow: var(--_ui5_color_picker_slider_handle_box_shadow);
    border: var(--_ui5_color_picker_slider_handle_border);
}

.ui5-color-picker-alpha-slider::part(handle):hover,
.ui5-color-picker-hue-slider::part(handle):hover {
    border: var(--_ui5_color_picker_slider_handle_outline_hover);
}

.ui5-color-picker-alpha-slider::part(handle):focus,
.ui5-color-picker-hue-slider::part(handle):focus {
    outline: var(--_ui5_color_picker_slider_handle_outline_focus);
    outline-offset: 0.0625rem;
}

.ui5-color-picker-alpha-slider::part(handle):focus::before,
.ui5-color-picker-hue-slider::part(handle):focus::before {
    content: "";
    border: var(--_ui5_color_picker_slider_handle_inline_focus);
    display: block;
    height: 1.625rem;
    border-radius: 1rem;
    width: 1.05rem;
    box-sizing: border-box;
    top: -3px;
    position: absolute;
    bottom: 2px;
    left: -3px;
    right: -3px;
}

.ui5-color-picker-alpha-slider::part(handle)::before,
.ui5-color-picker-hue-slider::part(handle)::before {
    display: none;
}

.ui5-color-picker-alpha-slider::part(handle):focus,
.ui5-color-picker-hue-slider::part(handle):focus {
    margin-top: var(--_ui5_color_picker_slider_handle_focus_margin_top);
}

[dir=rtl] [ui5-slider].ui5-color-picker-hue-slider::part(progress-container) {
    background-image: -webkit-linear-gradient(right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
    background-image: -moz-linear-gradient(right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
    background-image: linear-gradient(right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
}

[dir="rtl"] .ui5-color-picker-alpha-slider::part(handle),
[dir="rtl"] .ui5-color-picker-hue-slider::part(handle){
	--_ui5_slider_handle_margin_left: 0;
}

[dir="rtl"] .ui5-color-picker-sliders-wrapper {
	margin-left: 10px;
}
`};var u=globalThis&&globalThis.__decorate||function(e,i,n,a){var t=arguments.length,s=t<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,n):a,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,i,n,a);else for(var c=e.length-1;c>=0;c--)(d=e[c])&&(s=(t<3?d(s):t>3?d(i,n,s):d(i,n))||s);return t>3&&s&&Object.defineProperty(i,n,s),s},p;const f=6.5;let o=p=class extends I{static async onDefine(){p.i18nBundle=await x("@ui5/webcomponents")}constructor(){super(),this._selectedCoordinates={x:256-f,y:256-f},this._mainColor={r:255,g:0,b:0},this.selectedHue=0,this.mouseDown=!1,this.mouseIn=!1}onBeforeRendering(){this._color=z(this.color);const i=`rgba(${this._color.r}, ${this._color.g}, ${this._color.b}, 1)`;this._setHex(),this._setValues(),this.style.setProperty("--ui5_Color_Picker_Progress_Container_Color",i)}_handleMouseDown(i){this.mouseDown=!0,this.mouseIn=!0,this._changeSelectedColor(i.offsetX,i.offsetY)}_handleMouseUp(){this.mouseDown=!1}_handleMouseOut(i){if(!this.mouseIn||!this.mouseDown)return;const n=i.target,a=n.offsetHeight,t=n.offsetWidth,s=i.offsetX<=0,d=i.offsetY<=0,c=i.offsetY>=n.offsetHeight,A=i.offsetX>=n.offsetWidth;let g,m;s?g=0:A?g=t:g=i.offsetX,d?m=0:c?m=a:m=i.offsetY,this._changeSelectedColor(g,m),this.mouseIn=!1,this.mouseDown=!1}_handleMouseMove(i){!this.mouseDown||!this.mouseIn||this._changeSelectedColor(i.offsetX,i.offsetY)}_handleAlphaInput(i){const n=i.target.value;this._alpha=parseFloat(n),this._setColor(this._color)}_handleHueInput(i){this.selectedHue=i.target.value,this._hue=this.selectedHue,this._setMainColor(this._hue),this._isHueValueChanged=!0;const n=this._selectedCoordinates.x+f,a=this._selectedCoordinates.y+f,t=this._calculateColorFromCoordinates(n,a);t&&this._setColor(v(t))}_handleHEXChange(i){const n=new RegExp("^[<0-9 abcdef]+$"),a=i.target;let t=a.value.toLowerCase();t.length===3&&(t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`);const s=t.length===6&&n.test(t);s&&a.value!==t&&(this._wrongHEX=!1,a.value=t),t!==this.hex&&(this.hex=t,s?(this._wrongHEX=!1,this._setColor(y(this.hex))):this._wrongHEX=!0)}_handleRGBInputsChange(i){const n=i.target,a=parseInt(n.value)||0;let t;switch(n.id){case"red":t={...this._color,r:a};break;case"green":t={...this._color,g:a};break;case"blue":t={...this._color,b:a};break;default:t={...this._color}}this._setColor(t)}_setMainColor(i){i<=255?this._mainColor={r:255,g:i,b:0}:i<=510?this._mainColor={r:255-(i-255),g:255,b:0}:i<=765?this._mainColor={r:0,g:255,b:i-510}:i<=1020?this._mainColor={r:0,g:765-(i-255),b:255}:i<=1275?this._mainColor={r:i-1020,g:0,b:255}:this._mainColor={r:255,g:0,b:1275-(i-255)}}_handleAlphaChange(){this._alpha=this._alpha<0?0:this._alpha,this._alpha=this._alpha>1?1:this._alpha}_changeSelectedColor(i,n){this._selectedCoordinates={x:i-f,y:n-f},this._isSelectedColorChanged=!0;const a=this._calculateColorFromCoordinates(i,n);a&&this._setColor(v(a))}_onkeydown(i){E(i)&&this._handleHEXChange(i)}_calculateColorFromCoordinates(i,n){const a=this._hue/4.25,t=1-+(Math.round(parseFloat(n/256+"e+2"))+"e-2"),s=+(Math.round(parseFloat(i/256+"e+2"))+"e-2");if(!(!t||!s))return{h:a,s:t,l:s}}_setColor(i={r:0,g:0,b:0}){this.color=`rgba(${i.r}, ${i.g}, ${i.b}, ${this._alpha})`,this._wrongHEX=!this.isValidRGBColor(i),this.fireEvent("change")}isValidRGBColor(i){return i.r>=0&&i.r<=255&&i.g>=0&&i.g<=255&&i.b>=0&&i.b<=255}_setHex(){let i=this._color.r.toString(16),n=this._color.g.toString(16),a=this._color.b.toString(16);i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),a.length===1&&(a=`0${a}`),this.hex=i+n+a}_setValues(){const i=F(this._color);this._selectedCoordinates={x:Math.round(i.l*100)*2.56-f,y:256-Math.round(i.s*100)*2.56-f},this._isSelectedColorChanged?this._isSelectedColorChanged=!1:this._isHueValueChanged?(this._isHueValueChanged=!1,this._hue=this.selectedHue?this.selectedHue:this._hue):this._hue=Math.round(i.h*4.25),this._setMainColor(this._hue)}get hueSliderLabel(){return p.i18nBundle.getText(K)}get alphaSliderLabel(){return p.i18nBundle.getText(Y)}get hexInputLabel(){return p.i18nBundle.getText(X)}get redInputLabel(){return p.i18nBundle.getText(M)}get greenInputLabel(){return p.i18nBundle.getText($)}get blueInputLabel(){return p.i18nBundle.getText(Z)}get alphaInputLabel(){return p.i18nBundle.getText(Q)}get inputsDisabled(){return this._wrongHEX?!0:void 0}get hexInputErrorState(){return this._wrongHEX?"Error":void 0}get styles(){return{mainColor:{"background-color":`rgb(${this._mainColor.r}, ${this._mainColor.g}, ${this._mainColor.b})`},circle:{left:`${this._selectedCoordinates.x}px`,top:`${this._selectedCoordinates.y}px`},colorSpan:{"background-color":`rgba(${this._color.r}, ${this._color.g}, ${this._color.b}, ${this._alpha})`}}}};u([h({validator:H,defaultValue:"rgba(255, 255, 255, 1)"})],o.prototype,"color",void 0);u([h({defaultValue:"ffffff",noAttribute:!0})],o.prototype,"hex",void 0);u([h({type:Object})],o.prototype,"_mainColor",void 0);u([h({type:Object})],o.prototype,"_color",void 0);u([h({type:Object})],o.prototype,"_selectedCoordinates",void 0);u([h({validator:O,defaultValue:1})],o.prototype,"_alpha",void 0);u([h({validator:V,defaultValue:0})],o.prototype,"_hue",void 0);u([h({type:Boolean})],o.prototype,"_isSelectedColorChanged",void 0);u([h({type:Boolean})],o.prototype,"_isHueValueChanged",void 0);u([h({type:Boolean})],o.prototype,"_wrongHEX",void 0);o=p=u([D({tag:"ui5-color-picker",renderer:R,styles:J,template:j,dependencies:[G,N,P]}),T("change")],o);o.define();const Ge=o;export{Ge as default};
//# sourceMappingURL=ColorPicker-167d431f.js.map
