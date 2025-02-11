import{b as g,j as s,F as R,p as L,d as H,s as p,m as T,S,k as N}from"./jsx-runtime-DJfzgo3Z.js";import{l as G}from"./event-strict-DgQLNDEV.js";import{b as E}from"./Keys-Can65e7H.js";import{i as D}from"./i18n-oG4QvOAt.js";import{d as O}from"./CustomElementsScope-Cnxnu_QK.js";import{f as y}from"./Icon-9zGTEZoy.js";import{m as B}from"./i18n-defaults-CifGXSvE.js";import{L as k}from"./Label-Cv3ZI2wV.js";import{S as C}from"./Slider-C3XzJAeU.js";import{a as v}from"./Input-DQD9TQKk.js";import{a as P}from"./Button-ClmCy2Cm.js";import{aK as M,aL as K,aM as q,aN as X,aO as z,aP as Y,aQ as Z,aR as Q,aS as U,aT as F,aU as j}from"./i18n-defaults-CjsTKlnu.js";import{d as J}from"./parameters-bundle.css-3_Pq1j61.js";const I=new Map([["aliceblue","f0f8ff"],["antiquewhite","faebd7"],["aqua","00ffff"],["aquamarine","7fffd4"],["azure","f0ffff"],["beige","f5f5dc"],["bisque","ffe4c4"],["black","000000"],["blanchedalmond","ffebcd"],["blue","0000ff"],["blueviolet","8a2be2"],["brown","a52a2a"],["burlywood","deb887"],["cadetblue","5f9ea0"],["chartreuse","7fff00"],["chocolate","d2691e"],["coral","ff7f50"],["cornflowerblue","6495ed"],["cornsilk","fff8dc"],["crimson","dc143c"],["cyan","00ffff"],["darkblue","00008b"],["darkcyan","008b8b"],["darkgoldenrod","b8860b"],["darkgray","a9a9a9"],["darkgrey","a9a9a9"],["darkgreen","006400"],["darkkhaki","bdb76b"],["darkmagenta","8b008b"],["darkolivegreen","556b2f"],["darkorange","ff8c00"],["darkorchid","9932cc"],["darkred","8b0000"],["darksalmon","e9967a"],["darkseagreen","8fbc8f"],["darkslateblue","483d8b"],["darkslategray","2f4f4f"],["darkslategrey","2f4f4f"],["darkturquoise","00ced1"],["darkviolet","9400d3"],["deeppink","ff1493"],["deepskyblue","00bfff"],["dimgray","696969"],["dimgrey","696969"],["dodgerblue","1e90ff"],["firebrick","b22222"],["floralwhite","fffaf0"],["forestgreen","228b22"],["fuchsia","ff00ff"],["gainsboro","dcdcdc"],["ghostwhite","f8f8ff"],["gold","ffd700"],["goldenrod","daa520"],["gray","808080"],["grey","808080"],["green","008000"],["greenyellow","adff2f"],["honeydew","f0fff0"],["hotpink","ff69b4"],["indianred","cd5c5c"],["indigo","4b0082"],["ivory","fffff0"],["khaki","f0e68c"],["lavender","e6e6fa"],["lavenderblush","fff0f5"],["lawngreen","7cfc00"],["lemonchiffon","fffacd"],["lightblue","add8e6"],["lightcoral","f08080"],["lightcyan","e0ffff"],["lightgoldenrodyellow","fafad2"],["lightgray","d3d3d3"],["lightgrey","d3d3d3"],["lightgreen","90ee90"],["lightpink","ffb6c1"],["lightsalmon","ffa07a"],["lightseagreen","20b2aa"],["lightskyblue","87cefa"],["lightslategray","778899"],["lightslategrey","778899"],["lightsteelblue","b0c4de"],["lightyellow","ffffe0"],["lime","00ff00"],["limegreen","32cd32"],["linen","faf0e6"],["magenta","ff00ff"],["maroon","800000"],["mediumaquamarine","66cdaa"],["mediumblue","0000cd"],["mediumorchid","ba55d3"],["mediumpurple","9370db"],["mediumseagreen","3cb371"],["mediumslateblue","7b68ee"],["mediumspringgreen","00fa9a"],["mediumturquoise","48d1cc"],["mediumvioletred","c71585"],["midnightblue","191970"],["mintcream","f5fffa"],["mistyrose","ffe4e1"],["moccasin","ffe4b5"],["navajowhite","ffdead"],["navy","000080"],["oldlace","fdf5e6"],["olive","808000"],["olivedrab","6b8e23"],["orange","ffa500"],["orangered","ff4500"],["orchid","da70d6"],["palegoldenrod","eee8aa"],["palegreen","98fb98"],["paleturquoise","afeeee"],["palevioletred","db7093"],["papayawhip","ffefd5"],["peachpuff","ffdab9"],["peru","cd853f"],["pink","ffc0cb"],["plum","dda0dd"],["powderblue","b0e0e6"],["purple","800080"],["red","ff0000"],["rosybrown","bc8f8f"],["royalblue","4169e1"],["saddlebrown","8b4513"],["salmon","fa8072"],["sandybrown","f4a460"],["seagreen","2e8b57"],["seashell","fff5ee"],["sienna","a0522d"],["silver","c0c0c0"],["skyblue","87ceeb"],["slateblue","6a5acd"],["slategray","708090"],["slategrey","708090"],["snow","fffafa"],["springgreen","00ff7f"],["steelblue","4682b4"],["tan","d2b48c"],["teal","008080"],["thistle","d8bfd8"],["tomato","ff6347"],["turquoise","40e0d0"],["violet","ee82ee"],["wheat","f5deb3"],["white","ffffff"],["whitesmoke","f5f5f5"],["yellow","ffff00"],["yellowgreen","9acd32"],["transparent","00000000"]]),W=t=>t.startsWith("rgba")?ee(t):t.startsWith("rgb")?re(t):(t.indexOf("#")===0&&(t.length===4?t=`${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`:t=t.slice(1,t.length)),I.has(t)&&(t=I.get(t)),x(t)),$=t=>{let e=1;if(t.startsWith("rgba")||t.startsWith("hsla")){const r=t.split(",");r.length===4&&(e=parseFloat(r[3].replace(")","").trim()))}return e},ee=t=>{const e=t.indexOf("("),r=[];for(let i=0;i<t.length;i++)t[i]===","&&r.push(i);return{r:parseInt(t.slice(e+1,r[0]).trim()),g:parseInt(t.slice(r[0]+1,r[1]).trim()),b:parseInt(t.slice(r[1]+1,r[2]).trim())}},re=t=>{const e=t.indexOf("("),r=t.indexOf(")"),i=[];for(let a=0;a<t.length;a++)t[a]===","&&i.push(a);return{r:parseInt(t.slice(e+1,i[0]).trim()),g:parseInt(t.slice(i[0]+1,i[1]).trim()),b:parseInt(t.slice(i[1]+1,r).trim())}},ie=t=>{let e=t.s,r=t.l,i,a,o;e>100?e=1:e<0?e=0:e/=100,r>100?r=1:r<0?r=0:r/=100;const c=(t.h%360+360)%360,l=e*(1-Math.abs(2*r-1)),h=255*(r-.5*l),f=l*(1-Math.abs(c/60%2-1)),A=Math.floor(c/60),_=h+255*f,b=h+255*l;switch(A){case 0:i=b,a=_,o=h;break;case 1:i=_,a=b,o=h;break;case 2:i=h,a=b,o=_;break;case 3:i=h,a=_,o=b;break;case 4:i=_,a=h,o=b;break;case 5:i=b,a=h,o=_;break;default:i=0,a=0,o=0;break}return{r:Math.round(i),g:Math.round(a),b:Math.round(o)}},x=t=>({r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16)}),V=t=>{const e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];let r="",i=t.r/16,a=t.r%16;return r+=String(e[Math.floor(i)]),r+=String(e[a]),i=t.g/16,a=t.g%16,r+=String(e[Math.floor(i)]),r+=String(e[a]),i=t.b/16,a=t.b%16,r+=String(e[Math.floor(i)]),r+=String(e[a]),r},w=t=>{const e=t.r/255,r=t.g/255,i=t.b/255,a=Math.max(e,r,i),o=Math.min(e,r,i),c=a-o;let l=(a+o)/2,h=(a+o)/2,f=(a+o)/2;if(a===o)l=0,h=0;else{switch(h=f>.5?c/(2-a-o):c/(a+o),a){case e:l=(r-i)/c+(r<i?6:0);break;case r:l=(i-e)/c+2;break;case i:l=(e-r)/c+4;break}l/=6}return l=Math.round(l*360),h=Math.round(h*100),f=Math.round(f*100),{h:l,s:h,l:f}},te="expand",ae="M80 320v128h384V64H208V32h256q13 0 22.5 9t9.5 23v384q0 13-9.5 22.5T464 480H80q-14 0-23-9.5T48 448V320h32zm176-80V128h32v112h112v32H288v112h-32V272H144v-32h112zM22 227l87-95q3-3 3-5 0-3-3-6L23 28q-6-6-6-11 0-6 6-12 5-5 11-5t11 5l92 99q9 10 9 23t-9 22L45 250q-5 5-11 5-4 0-12-5-6-6-6-12t6-11z",oe=!1,le=B,se="SAP-icons-v4",ne="@ui5/webcomponents-icons";y(te,{pathData:ae,ltr:oe,accData:le,collection:se,packageName:ne});const he="expand",ce="M390 288q11 0 18.5 7.5T416 314q0 10-7 17L275 472q-8 8-19 8t-19-8L103 331q-7-7-7-17 0-11 7.5-18.5T122 288q10 0 18 8l116 121 116-121q8-8 18-8zM256 32q11 0 19 8l134 141q7 7 7 17 0 11-7.5 18.5T390 224q-10 0-18-8L256 95 140 216q-8 8-18 8-11 0-18.5-7.5T96 198q0-10 7-17L237 40q8-8 19-8z",de=!1,ue=B,pe="SAP-icons-v5",fe="@ui5/webcomponents-icons";y(he,{pathData:ce,ltr:de,accData:ue,collection:pe,packageName:fe});class ge{constructor(){this._rgb={r:255,g:255,b:255},this._hsl=w(this._rgb),this._hex=V(this._rgb),this._alpha=1,this._valid=!0}get RGB(){return this._rgb}get HSL(){return this._hsl}get H(){return this._hsl.h}get S(){return this._hsl.s}get L(){return this._hsl.l}get R(){return this._rgb.r}get G(){return this._rgb.g}get B(){return this._rgb.b}get Alpha(){return this._alpha}get HEX(){return this._hex}set RGB(e){this.validateRGBColor(e),this._updateRGB(e)}set HSL(e){this.validateHSLColor(e),this._updateHSL(e)}set HEX(e){this._hex=e,this.validateHEX(e),this._valid&&(this._rgb=x(e),this._hsl=w(this._rgb))}set H(e){this.validateHValue(e),this._updateHSL({h:e,s:this.S,l:this.L})}set S(e){this.validateSLValue(e),this._updateHSL({h:this.H,s:e,l:this.L})}set L(e){this.validateSLValue(e),this._updateHSL({h:this.H,s:this.S,l:e})}set R(e){this.validateRGBValue(e),this._updateRGB({r:e,g:this.G,b:this.B})}set G(e){this.validateRGBValue(e),this._updateRGB(this.RGB={r:this.R,g:e,b:this.B})}set B(e){this.validateRGBValue(e),this._updateRGB({r:this.R,g:this.G,b:e})}set Alpha(e){this._alpha=e}isColorValueValid(){return this._valid}validateRGBValue(e){this._valid=this._isValidRGBValue(e)}validateRGBColor(e){this._valid=this._isValidRGBValue(e.r)&&this._isValidRGBValue(e.g)&&this._isValidRGBValue(e.b)}validateHSLColor(e){this._valid=this._isValidHValue(e.h)&&this._isValidSLValue(e.s)&&this._isValidSLValue(e.l)}validateHValue(e){this._valid=this._isValidHValue(e)}validateSLValue(e){this._valid=this._isValidSLValue(e)}validateHEX(e){const r=new RegExp("^[<0-9 abcdef]+$");this._valid=e.length===6&&r.test(e)}_isValidRGBValue(e){return e>=0&&e<=255}_isValidHValue(e){return e>=0&&e<=360}_isValidSLValue(e){return e>=0&&e<=100}_updateRGB(e){this._rgb=e,this._valid&&(this._hsl=w(e),this._hex=V(e))}_updateHSL(e){this._hsl=e,this._valid&&(this._rgb=ie(e),this._hex=V(this._rgb))}toRGBString(){return`rgba(${this._rgb.r}, ${this._rgb.g}, ${this._rgb.b}, ${this._alpha})`}}function Ae(){return g("section",{class:"ui5-color-picker-root",children:[s("div",{class:"ui5-color-picker-main-color",style:{"background-color":`rgb(${this._mainValue.r}, ${this._mainValue.g}, ${this._mainValue.b})`},onMouseDown:this._handleMouseDown,onMouseUp:this._handleMouseUp,onMouseMove:this._handleMouseMove,onMouseOut:this._handleMouseOut,children:s("div",{class:"ui5-color-picker-circle",style:{left:`${this._selectedCoordinates.x}px`,top:`${this._selectedCoordinates.y}px`}})}),g("div",{class:"ui5-color-picker-sliders-wrapper",children:[s(C,{disabled:this.inputsDisabled,class:"ui5-color-picker-hue-slider",min:0,max:360,step:1,value:this._hue,accessibleName:this.hueSliderLabel,showTooltip:!0,onInput:this._handleHueInput}),this._isDefaultPickerMode&&s(C,{disabled:this.inputsDisabled,class:"ui5-color-picker-alpha-slider",min:0,max:1,step:.01,value:this._alpha,accessibleName:this.alphaSliderLabel,showTooltip:!0,onInput:this._handleAlphaInput})]}),g("div",{class:"ui5-color-picker-current-color",children:[g("div",{class:"ui5-color-picker-colors-wrapper",children:[s("span",{class:"ui5-color-picker-white"}),s("span",{class:"ui5-color-picker-color",children:s("div",{class:"ui5-color-picker-color-inner",style:{"background-color":this._colorValue.toRGBString()}})})]}),g("div",{class:"ui5-color-picker-hex-input-wrapper",children:[s(k,{children:"Hex"}),s(v,{class:"ui5-color-picker-hex-input",value:this.HEX,onKeyDown:this._onkeydown,accessibleName:this.hexInputLabel,onChange:this._handleHEXChange,valueState:this.hexInputErrorState})]})]}),this._isDefaultPickerMode&&g("div",{class:"ui5-color-channel-inputs-wrapper","onui5-change":this._handleColorInputChange,children:[this.colorChannelInputs.map(t=>g(R,{children:[g("div",{class:"ui5-color-channel",children:[s(v,{id:t.id,class:"ui5-color-channel-input",disabled:this.inputsDisabled,accessibleName:t.accessibleName,value:String(t.value)}),s(k,{children:t.label})]}),s("div",{class:"ui5-color-channel-percentage-label",children:t.showPercentSymbol&&s(k,{children:"%"})})]})),g("div",{class:"ui5-color-channel",children:[s(v,{id:"alpha",disabled:this.inputsDisabled,class:"ui5-color-channel-input",value:String(this._alpha),accessibleName:this.alphaInputLabel,onChange:this._handleAlphaChange,onInput:this._handleAlphaInput}),s(k,{children:"A"})]}),s("div",{children:s(P,{class:"ui5-color-channel-toggle",id:"toggle-picker-mode",icon:"expand",design:"Transparent",tooltip:this.toggleModeTooltip,onClick:this._togglePickerMode})})]})]})}L("@ui5/webcomponents-theming","sap_horizon",async()=>H);L("@ui5/webcomponents","sap_horizon",async()=>J);const _e=`:host(:not([hidden])){display:inline-block}.ui5-color-picker-root{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.ui5-color-picker-main-color{width:16rem;height:16rem;position:relative;margin-bottom:var(--_ui5-v2-7-2_color_picker_main_color_margin_bottom);border:.0625rem solid var(--sapContent_ForegroundBorderColor);background-size:100%;background-image:-webkit-linear-gradient(left,#000,rgba(0,0,0,0)),-webkit-linear-gradient(top,rgba(255,255,255,0),#fff);background-image:-moz-linear-gradient(left,#000,rgba(0,0,0,0)),-moz-linear-gradient(top,rgba(255,255,255,0),#fff);background-image:linear-gradient(left,#000,#0000),linear-gradient(top,#fff0,#fff);background-image:-webkit-linear-gradient(left,#000,rgba(0,0,0,0),#fff),-webkit-linear-gradient(top,rgba(128,128,128,0),#808080);background-image:-moz-linear-gradient(left,#000,rgba(0,0,0,0),#fff),-moz-linear-gradient(top,rgba(128,128,128,0),#808080);background-image:linear-gradient(left,#000,#0000,#fff),linear-gradient(top,#80808000,gray);user-select:none;-moz-user-select:none}.ui5-color-picker-circle{position:absolute;box-sizing:border-box;width:.8125rem;height:.8125rem;border:var(--_ui5-v2-7-2_color_picker_circle_outer_border);border-radius:.6875rem;pointer-events:none}.ui5-color-picker-circle:after{content:"";position:absolute;width:var(--_ui5-v2-7-2_color_picker_circle_inner_circle_size);height:var(--_ui5-v2-7-2_color_picker_circle_inner_circle_size);border:var(--_ui5-v2-7-2_color_picker_circle_inner_border);border-radius:.9375rem;pointer-events:none}.ui5-color-picker-sliders-wrapper{width:calc(100% - .9375rem);margin-left:-.9375rem;padding-bottom:.25rem}[ui5-slider]{--_ui5-v2-7-2_slider_active_progress_border: none;--_ui5-v2-7-2_slider_progress_box_sizing: content-box;height:var(--_ui5-v2-7-2_color_picker_sliders_height)}[ui5-slider]::part(handle){width:var(--_ui5-v2-7-2_color_picker_slider_handle_width);height:var(--_ui5-v2-7-2_color_picker_slider_handle_height);background:transparent;box-sizing:border-box}[ui5-slider]::part(handle-container){margin-top:var(--_ui5-v2-7-2_color_picker_slider_handle_container_margin_top);margin-inline-start:-.125rem;z-index:2}[ui5-slider]::part(handle):after{content:"";border:.125rem solid var(--_ui5-v2-7-2_color_picker_slider_handle_inner_border_color);display:block;height:var(--_ui5-v2-7-2_color_picker_slider_handle_after_height);border-radius:1rem;width:100%;box-sizing:border-box}[ui5-slider]::part(root-container){padding:var(--_ui5-v2-7-2_color_picker_slider_spacing) 0}[ui5-slider]::part(progress-container){width:calc(100% + .6875rem);height:var(--_ui5-v2-7-2_color_picker_slider_progress_container_height);position:absolute;margin-top:var(--_ui5-v2-7-2_color_picker_slider_container_margin_top);border-radius:0;border:.0625rem solid var(--sapField_BorderColor)}[ui5-slider].ui5-color-picker-hue-slider::part(progress-container){background-size:100%;background-image:-webkit-linear-gradient(left,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);background-image:-moz-linear-gradient(left,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);background-image:linear-gradient(left,red,#ff0,#0f0,#0ff,#00f,#f0f,red);background-color:none}[ui5-slider].ui5-color-picker-alpha-slider::part(progress-container){background-image:-webkit-linear-gradient(left,rgba(65,120,13,0),var(--ui5-v2-7-2_Color_Picker_Progress_Container_Color)),url(data:image/png;base64,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)}[ui5-slider]::part(progress-bar){background:transparent}.ui5-color-picker-current-color{width:100%;display:flex;justify-content:space-between;align-items:center}.ui5-color-picker-colors-wrapper{display:flex;flex-wrap:nowrap;height:var(--_ui5-v2-7-2_color_picker_colors_wrapper_height);border:.0625rem solid var(--sapField_BorderColor)}.ui5-color-picker-white,.ui5-color-picker-color{width:3.1rem;background:#fff;display:block}.ui5-color-picker-color{background-image:url(data:image/png;base64,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)}.ui5-color-picker-color-inner{width:100%;height:100%}.ui5-color-picker-hex-input-wrapper{display:flex;align-items:center;flex-wrap:nowrap}.ui5-color-picker-hex-input{width:var(--_ui5-v2-7-2_color_channel_hex_input_width);min-width:4.5rem;margin-left:.2rem}.ui5-color-channel-inputs-wrapper{display:flex;justify-content:space-around;width:100%;align-items:center}.ui5-color-channel{display:flex;flex-direction:column;align-items:center;margin-top:var(--_ui5-v2-7-2-color_channel_margin_top);position:relative}.ui5-color-channel-input{width:2.5rem;min-width:2.5rem;text-align:center}.ui5-color-channel-input::part(input){min-width:initial;padding:0 .25rem}.ui5-color-channel-percentage-label{width:1rem;margin-top:var(--_ui5-v2-7-2_color_channel_toggle_button_margin-top)}.ui5-color-channel-toggle{min-width:var(--_ui5-v2-7-2_color_channel_toggle_button_width);margin-inline-start:.5rem;margin-top:var(--_ui5-v2-7-2_color_channel_toggle_button_margin-top)}.ui5-color-picker-hue-slider::part(progress-container):before,.ui5-color-picker-alpha-slider::part(progress-container):before,.ui5-color-picker-hue-slider::part(progress-container):after,.ui5-color-picker-alpha-slider::part(progress-container):after,[ui5-slider].ui5-color-picker-hue-slider::part(icon-slider),[ui5-slider].ui5-color-picker-alpha-slider::part(icon-slider){display:none}.ui5-color-picker-alpha-slider::part(handle),.ui5-color-picker-hue-slider::part(handle){box-shadow:var(--_ui5-v2-7-2_color_picker_slider_handle_box_shadow);border:var(--_ui5-v2-7-2_color_picker_slider_handle_border)}.ui5-color-picker-alpha-slider::part(handle):hover,.ui5-color-picker-hue-slider::part(handle):hover{border:var(--_ui5-v2-7-2_color_picker_slider_handle_outline_hover)}.ui5-color-picker-alpha-slider::part(handle):focus,.ui5-color-picker-hue-slider::part(handle):focus{outline:var(--_ui5-v2-7-2_color_picker_slider_handle_outline_focus);outline-offset:.0625rem}.ui5-color-picker-alpha-slider::part(handle):focus:before,.ui5-color-picker-hue-slider::part(handle):focus:before{content:"";border:var(--_ui5-v2-7-2_color_picker_slider_handle_inline_focus);display:block;height:var(--_ui5-v2-7-2_color_picker_slider_handle_focus_height);border-radius:1rem;box-sizing:border-box;position:absolute;inset:-.1875rem -.1875rem .125rem}.ui5-color-picker-alpha-slider::part(handle):before,.ui5-color-picker-hue-slider::part(handle):before{display:none}:dir(rtl) [ui5-slider].ui5-color-picker-hue-slider::part(progress-container){background-image:-webkit-linear-gradient(right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);background-image:-moz-linear-gradient(right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);background-image:linear-gradient(right,red,#ff0,#0f0,#0ff,#00f,#f0f,red)}:dir(rtl) .ui5-color-picker-alpha-slider::part(handle),:dir(rtl) .ui5-color-picker-hue-slider::part(handle){--_ui5-v2-7-2_slider_handle_margin_left: 0}:dir(rtl) .ui5-color-picker-sliders-wrapper{margin-left:.625rem}
`;var d=function(t,e,r,i){var a=arguments.length,o=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(c=t[l])&&(o=(a<3?c(o):a>3?c(e,r,o):c(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o},u;const m=6.5;let n=u=class extends S{async formElementAnchor(){return this.getFocusDomRefAsync()}get formFormattedValue(){return this.value}constructor(){super(),this.value="rgba(255,255,255,1)",this.simplified=!1,this._alpha=1,this._hue=0,this._isSelectedColorChanged=!1,this._isHueValueChanged=!1,this._wrongHEX=!1,this._displayHSL=!1,this._colorValue=new ge,this._selectedCoordinates={x:256-m,y:256-m},this._mainValue={r:255,g:0,b:0},this.selectedHue=0,this.mouseDown=!1,this.mouseIn=!1}onBeforeRendering(){const e=W(this.value);this._isColorValueEqual(e)||(this._colorValue.RGB=e);const r=$(this.value);r!==this._colorValue.Alpha&&(this._colorValue.Alpha=r,this._alpha=this._colorValue.Alpha);const i=this._colorValue.toRGBString();this._updateColorGrid(),this.style.setProperty(O("--ui5_Color_Picker_Progress_Container_Color"),i)}_handleMouseDown(e){this.mouseDown=!0,this.mouseIn=!0,this._changeSelectedColor(e.offsetX,e.offsetY)}_handleMouseUp(){this.mouseDown=!1}_handleMouseOut(e){if(!this.mouseIn||!this.mouseDown)return;const r=e.target,i=r.offsetHeight,a=r.offsetWidth,o=e.offsetX<=0,c=e.offsetY<=0,l=e.offsetY>=r.offsetHeight,h=e.offsetX>=r.offsetWidth;let f,A;o?f=0:h?f=a:f=e.offsetX,c?A=0:l?A=i:A=e.offsetY,this._changeSelectedColor(f,A),this.mouseIn=!1,this.mouseDown=!1}_handleMouseMove(e){!this.mouseDown||!this.mouseIn||this._changeSelectedColor(e.offsetX,e.offsetY)}_handleAlphaInput(e){const r=e.target.value;this._alpha=parseFloat(r),Number.isNaN(this._alpha)&&(this._alpha=1),this._colorValue.Alpha=this._alpha,this._isHueValueChanged=!0;const i=this._colorValue.toRGBString();this._setValue(i)}_handleHueInput(e){this.selectedHue=e.target.value,this._hue=this.selectedHue,this._setMainColor(this._hue),this._isHueValueChanged=!0,this._colorValue.H=this._hue;const r=this._colorValue.toRGBString();this._setValue(r)}_handleHEXChange(e){const r=e.target;let i=r.value.toLowerCase();i.length===3&&(i=`${i[0]}${i[0]}${i[1]}${i[1]}${i[2]}${i[2]}`),this._colorValue.HEX=i;const a=this._colorValue.isColorValueValid();if(a&&r.value!==i&&(this._wrongHEX=!1,r.value=i),!a)this._wrongHEX=!0;else{this._wrongHEX=!1;const o=this._colorValue.toRGBString();this._setValue(o)}}_togglePickerMode(){this._displayHSL=!this._displayHSL}_handleColorInputChange(e){const r=e.target,i=parseInt(r.value)||0;switch(r.id){case"red":this._colorValue.R=i;break;case"green":this._colorValue.G=i;break;case"blue":this._colorValue.B=i;break;case"hue":this._colorValue.H=i;break;case"saturation":this._colorValue.S=i;break;case"light":this._colorValue.L=i;break}const a=this._colorValue.toRGBString();this._setValue(a),this._updateColorGrid()}_setMainColor(e){const r=e*4.251;r<=255?this._mainValue={r:255,g:r,b:0}:r<=510?this._mainValue={r:255-(r-255),g:255,b:0}:r<=765?this._mainValue={r:0,g:255,b:r-510}:r<=1020?this._mainValue={r:0,g:765-(r-255),b:255}:r<=1275?this._mainValue={r:r-1020,g:0,b:255}:this._mainValue={r:255,g:0,b:1275-(r-255)}}_handleAlphaChange(){this._alpha=this._alpha<0?0:this._alpha,this._alpha=this._alpha>1?1:this._alpha,this._colorValue.Alpha=this._alpha}_changeSelectedColor(e,r){this._selectedCoordinates={x:e-m,y:r-m},this._isSelectedColorChanged=!0;const i=this._calculateColorFromCoordinates(e,r);if(i){this._colorValue.HSL=i;const a=this._colorValue.toRGBString();this._setValue(a)}}_onkeydown(e){E(e)&&this._handleHEXChange(e)}_calculateColorFromCoordinates(e,r){const i=this._hue;let a=+(1-r/256).toFixed(2),o=+(e/256).toFixed(2);if(!(Number.isNaN(a)||Number.isNaN(o)))return a=Math.max(0,Math.min(1,a)),o=Math.max(0,Math.min(1,o)),{h:Math.round(i),s:Math.round(a*100),l:Math.round(o*100)}}_setValue(e){this.value=e,this._wrongHEX=!this._colorValue.isColorValueValid(),this.fireDecoratorEvent("change")}_updateColorGrid(){const e=this._colorValue.HSL;this._selectedCoordinates={x:e.l*2.56-m,y:256-e.s*2.56-m},this._isSelectedColorChanged?this._isSelectedColorChanged=!1:this._isHueValueChanged?(this._isHueValueChanged=!1,this._hue=this.selectedHue?this.selectedHue:this._hue):this._hue=e.h,this._setMainColor(this._hue)}_isColorValueEqual(e){return this._colorValue.R===e.r&&this._colorValue.G===e.g&&this._colorValue.B===e.b}get hueSliderLabel(){return u.i18nBundle.getText(M)}get alphaSliderLabel(){return u.i18nBundle.getText(K)}get hexInputLabel(){return u.i18nBundle.getText(q)}get redInputLabel(){return u.i18nBundle.getText(X)}get greenInputLabel(){return u.i18nBundle.getText(z)}get blueInputLabel(){return u.i18nBundle.getText(Y)}get hueInputLabel(){return u.i18nBundle.getText(Z)}get saturationInputLabel(){return u.i18nBundle.getText(Q)}get lightInputLabel(){return u.i18nBundle.getText(U)}get alphaInputLabel(){return u.i18nBundle.getText(F)}get toggleModeTooltip(){return u.i18nBundle.getText(j)}get inputsDisabled(){return this._wrongHEX?!0:void 0}get hexInputErrorState(){return this._wrongHEX?"Negative":"None"}get rgbInputs(){const e={id:"red",value:this._colorValue.R,label:"R",accessibleName:this.redInputLabel},r={id:"green",value:this._colorValue.G,label:"G",accessibleName:this.greenInputLabel},i={id:"blue",value:this._colorValue.B,label:"B",accessibleName:this.blueInputLabel};return[e,r,i]}get hslInputs(){const e={id:"hue",value:this._colorValue.H,label:"H",accessibleName:this.hueInputLabel},r={id:"saturation",value:this._colorValue.S,label:"S",accessibleName:this.saturationInputLabel,showPercentSymbol:!0},i={id:"light",value:this._colorValue.L,label:"L",accessibleName:this.lightInputLabel,showPercentSymbol:!0};return[e,r,i]}get HEX(){return this._colorValue.HEX}get colorChannelInputs(){return this._displayHSL?this.hslInputs:this.rgbInputs}get _isDefaultPickerMode(){return!this.simplified}};d([p()],n.prototype,"value",void 0);d([p()],n.prototype,"name",void 0);d([p({type:Boolean})],n.prototype,"simplified",void 0);d([p({type:Object})],n.prototype,"_mainValue",void 0);d([p({type:Object})],n.prototype,"_colorValue",void 0);d([p({type:Object})],n.prototype,"_selectedCoordinates",void 0);d([p({type:Number})],n.prototype,"_alpha",void 0);d([p({type:Number})],n.prototype,"_hue",void 0);d([p({type:Boolean})],n.prototype,"_isSelectedColorChanged",void 0);d([p({type:Boolean})],n.prototype,"_isHueValueChanged",void 0);d([p({type:Boolean})],n.prototype,"_wrongHEX",void 0);d([p({type:Boolean})],n.prototype,"_displayHSL",void 0);d([D("@ui5/webcomponents")],n,"i18nBundle",void 0);n=u=d([T({tag:"ui5-color-picker",renderer:N,formAssociated:!0,styles:_e,template:Ae,shadowRootOptions:{delegatesFocus:!0}}),G("change",{bubbles:!0})],n);n.define();const Te=n;export{Te as C};
