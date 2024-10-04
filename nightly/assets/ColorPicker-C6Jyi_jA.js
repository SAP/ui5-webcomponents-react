import{p as _,v as s,q as r,a as I,s as L,b as p,m as D,S as B,y as V}from"./withWebComponent-CatvTRGM.js";import{s as R}from"./event-Dq0fpeHi.js";import{b as T}from"./Keys-DoZifIQ_.js";import{i as E}from"./i18n-DEVDpFvK.js";import"./utils-U7G133b4.js";import{s as k}from"./style-map-D18U2KXK.js";import{a as H}from"./Input-BlCw2Pfc.js";import{S as N}from"./Slider-GHBtt-K0.js";import{L as O}from"./Label-B0tmzzu4.js";import{J as K,K as P,M as Y,N as M,O as $,Q as G,U as X}from"./i18n-defaults-NO4RLLYJ.js";import{s as S}from"./parameters-bundle.css-BOSi_lPd.js";import{d as Z}from"./useIsomorphicLayoutEffect-Dm78g2BF.js";const w=new Map([["aliceblue","f0f8ff"],["antiquewhite","faebd7"],["aqua","00ffff"],["aquamarine","7fffd4"],["azure","f0ffff"],["beige","f5f5dc"],["bisque","ffe4c4"],["black","000000"],["blanchedalmond","ffebcd"],["blue","0000ff"],["blueviolet","8a2be2"],["brown","a52a2a"],["burlywood","deb887"],["cadetblue","5f9ea0"],["chartreuse","7fff00"],["chocolate","d2691e"],["coral","ff7f50"],["cornflowerblue","6495ed"],["cornsilk","fff8dc"],["crimson","dc143c"],["cyan","00ffff"],["darkblue","00008b"],["darkcyan","008b8b"],["darkgoldenrod","b8860b"],["darkgray","a9a9a9"],["darkgrey","a9a9a9"],["darkgreen","006400"],["darkkhaki","bdb76b"],["darkmagenta","8b008b"],["darkolivegreen","556b2f"],["darkorange","ff8c00"],["darkorchid","9932cc"],["darkred","8b0000"],["darksalmon","e9967a"],["darkseagreen","8fbc8f"],["darkslateblue","483d8b"],["darkslategray","2f4f4f"],["darkslategrey","2f4f4f"],["darkturquoise","00ced1"],["darkviolet","9400d3"],["deeppink","ff1493"],["deepskyblue","00bfff"],["dimgray","696969"],["dimgrey","696969"],["dodgerblue","1e90ff"],["firebrick","b22222"],["floralwhite","fffaf0"],["forestgreen","228b22"],["fuchsia","ff00ff"],["gainsboro","dcdcdc"],["ghostwhite","f8f8ff"],["gold","ffd700"],["goldenrod","daa520"],["gray","808080"],["grey","808080"],["green","008000"],["greenyellow","adff2f"],["honeydew","f0fff0"],["hotpink","ff69b4"],["indianred","cd5c5c"],["indigo","4b0082"],["ivory","fffff0"],["khaki","f0e68c"],["lavender","e6e6fa"],["lavenderblush","fff0f5"],["lawngreen","7cfc00"],["lemonchiffon","fffacd"],["lightblue","add8e6"],["lightcoral","f08080"],["lightcyan","e0ffff"],["lightgoldenrodyellow","fafad2"],["lightgray","d3d3d3"],["lightgrey","d3d3d3"],["lightgreen","90ee90"],["lightpink","ffb6c1"],["lightsalmon","ffa07a"],["lightseagreen","20b2aa"],["lightskyblue","87cefa"],["lightslategray","778899"],["lightslategrey","778899"],["lightsteelblue","b0c4de"],["lightyellow","ffffe0"],["lime","00ff00"],["limegreen","32cd32"],["linen","faf0e6"],["magenta","ff00ff"],["maroon","800000"],["mediumaquamarine","66cdaa"],["mediumblue","0000cd"],["mediumorchid","ba55d3"],["mediumpurple","9370db"],["mediumseagreen","3cb371"],["mediumslateblue","7b68ee"],["mediumspringgreen","00fa9a"],["mediumturquoise","48d1cc"],["mediumvioletred","c71585"],["midnightblue","191970"],["mintcream","f5fffa"],["mistyrose","ffe4e1"],["moccasin","ffe4b5"],["navajowhite","ffdead"],["navy","000080"],["oldlace","fdf5e6"],["olive","808000"],["olivedrab","6b8e23"],["orange","ffa500"],["orangered","ff4500"],["orchid","da70d6"],["palegoldenrod","eee8aa"],["palegreen","98fb98"],["paleturquoise","afeeee"],["palevioletred","db7093"],["papayawhip","ffefd5"],["peachpuff","ffdab9"],["peru","cd853f"],["pink","ffc0cb"],["plum","dda0dd"],["powderblue","b0e0e6"],["purple","800080"],["red","ff0000"],["rosybrown","bc8f8f"],["royalblue","4169e1"],["saddlebrown","8b4513"],["salmon","fa8072"],["sandybrown","f4a460"],["seagreen","2e8b57"],["seashell","fff5ee"],["sienna","a0522d"],["silver","c0c0c0"],["skyblue","87ceeb"],["slateblue","6a5acd"],["slategray","708090"],["slategrey","708090"],["snow","fffafa"],["springgreen","00ff7f"],["steelblue","4682b4"],["tan","d2b48c"],["teal","008080"],["thistle","d8bfd8"],["tomato","ff6347"],["turquoise","40e0d0"],["violet","ee82ee"],["wheat","f5deb3"],["white","ffffff"],["whitesmoke","f5f5f5"],["yellow","ffff00"],["yellowgreen","9acd32"],["transparent","00000000"]]),C=a=>a.startsWith("rgba")?z(a):a.startsWith("rgb")?Q(a):(a.indexOf("#")===0&&(a.length===4?a=`${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}`:a=a.slice(1,a.length)),w.has(a)&&(a=w.get(a)),x(a)),z=a=>{const e=a.indexOf("("),i=[];for(let l=0;l<a.length;l++)a[l]===","&&i.push(l);return{r:parseInt(a.slice(e+1,i[0]).trim()),g:parseInt(a.slice(i[0]+1,i[1]).trim()),b:parseInt(a.slice(i[1]+1,i[2]).trim())}},Q=a=>{const e=a.indexOf("("),i=a.indexOf(")"),l=[];for(let t=0;t<a.length;t++)a[t]===","&&l.push(t);return{r:parseInt(a.slice(e+1,l[0]).trim()),g:parseInt(a.slice(l[0]+1,l[1]).trim()),b:parseInt(a.slice(l[1]+1,i).trim())}},y=a=>{let e=a.s*100,i=a.l*100,l,t,o;e>100?e=1:e<0?e=0:e/=100,i>100?i=1:i<0?i=0:i/=100;const n=a.h,c=e*(1-Math.abs(2*i-1)),u=255*(i-.5*c),f=c*(1-Math.abs(n/60%2-1)),A=Math.floor(n/60),m=u+255*f,v=u+255*c;switch(A){case 0:l=v,t=m,o=u;break;case 1:l=m,t=v,o=u;break;case 2:l=u,t=v,o=m;break;case 3:l=u,t=m,o=v;break;case 4:l=m,t=u,o=v;break;case 5:l=v,t=u,o=m;break;default:l=0,t=0,o=0;break}return{r:Math.round(l),g:Math.round(t),b:Math.round(o)}},x=a=>({r:parseInt(a.substr(0,2),16),g:parseInt(a.substr(2,2),16),b:parseInt(a.substr(4,2),16)}),U=a=>{const e=a.r/255,i=a.g/255,l=a.b/255,t=Math.max(e,i,l),o=Math.min(e,i,l),n=t-o;let c=0,u;n===0?c=0:t===e?c=60*((i-l)/n%6):t===i?c=60*((l-e)/n+2):t===l&&(c=60*((e-i)/n+4));const f=(t+o)/2;return n===0?u=0:u=n/(1-Math.abs(2*f-1)),{h:c,s:u,l:f}};function q(a,e,i){return i?_`<section class="ui5-color-picker-root"><div class="ui5-color-picker-main-color" style="${k(this.styles.mainColor)}" @mousedown="${this._handleMouseDown}" @mouseup="${this._handleMouseUp}" @mousemove="${this._handleMouseMove}" @mouseout="${this._handleMouseOut}"><div class="ui5-color-picker-circle" style="${k(this.styles.circle)}"></div></div><div class="ui5-color-picker-sliders-wrapper"><${s("ui5-slider",e,i)} disabled="${r(this.inputsDisabled)}" class="ui5-color-picker-hue-slider" min="0" max="1530" value="${r(this._hue)}" accessible-name="${r(this.hueSliderLabel)}" @ui5-input="${r(this._handleHueInput)}"></${s("ui5-slider",e,i)}><${s("ui5-slider",e,i)} disabled="${r(this.inputsDisabled)}" class="ui5-color-picker-alpha-slider" min="0" max="1" step="0.01" value="${r(this._alpha)}" accessible-name="${r(this.alphaSliderLabel)}" @ui5-input="${r(this._handleAlphaInput)}"></${s("ui5-slider",e,i)}></div><div class="ui5-color-picker-current-color"><div class="ui5-color-picker-colors-wrapper"><span class="ui5-color-picker-white"></span><span class="ui5-color-picker-color"><div class="ui5-color-picker-color-inner" style="${k(this.styles.colorSpan)}"></div></span></div><div class="ui5-color-picker-hex-input-wrapper"><${s("ui5-label",e,i)}>Hex</${s("ui5-label",e,i)}><${s("ui5-input",e,i)} class="ui5-color-picker-hex-input" value="${r(this.hex)}" @keydown="${this._onkeydown}" accessible-name="${r(this.hexInputLabel)}" @ui5-change="${r(this._handleHEXChange)}" value-state="${r(this.hexInputErrorState)}"></${s("ui5-input",e,i)}></div></div><div class="ui5-color-picker-rgb-wrapper" @ui5-change="${r(this._handleRGBInputsChange)}"><div class="ui5-color-picker-rgb"><${s("ui5-input",e,i)} id="red" class="ui5-color-picker-rgb-input" disabled="${r(this.inputsDisabled)}" accessible-name="${r(this.redInputLabel)}" value="${r(this._value.r)}"></${s("ui5-input",e,i)}><${s("ui5-label",e,i)}>R</${s("ui5-label",e,i)}></div><div class="ui5-color-picker-rgb"><${s("ui5-input",e,i)} id="green" class="ui5-color-picker-rgb-input" disabled="${r(this.inputsDisabled)}" accessible-name="${r(this.greenInputLabel)}" value="${r(this._value.g)}"></${s("ui5-input",e,i)}><${s("ui5-label",e,i)}>G</${s("ui5-label",e,i)}></div><div class="ui5-color-picker-rgb"><${s("ui5-input",e,i)} id="blue" class="ui5-color-picker-rgb-input" disabled="${r(this.inputsDisabled)}" accessible-name="${r(this.blueInputLabel)}" value="${r(this._value.b)}"></${s("ui5-input",e,i)}><${s("ui5-label",e,i)}>B</${s("ui5-label",e,i)}></div><div class="ui5-color-picker-rgb"><${s("ui5-input",e,i)} id="alpha" disabled="${r(this.inputsDisabled)}" class="ui5-color-picker-rgb-input" value="${r(this._alpha)}" accessible-name="${r(this.alphaInputLabel)}" @ui5-input="${r(this._handleAlphaInput)}" @ui5-change="${r(this._handleAlphaChange)}"></${s("ui5-input",e,i)}><${s("ui5-label",e,i)}>A</${s("ui5-label",e,i)}></div></div></section>`:_`<section class="ui5-color-picker-root"><div class="ui5-color-picker-main-color" style="${k(this.styles.mainColor)}" @mousedown="${this._handleMouseDown}" @mouseup="${this._handleMouseUp}" @mousemove="${this._handleMouseMove}" @mouseout="${this._handleMouseOut}"><div class="ui5-color-picker-circle" style="${k(this.styles.circle)}"></div></div><div class="ui5-color-picker-sliders-wrapper"><ui5-slider disabled="${r(this.inputsDisabled)}" class="ui5-color-picker-hue-slider" min="0" max="1530" value="${r(this._hue)}" accessible-name="${r(this.hueSliderLabel)}" @ui5-input="${r(this._handleHueInput)}"></ui5-slider><ui5-slider disabled="${r(this.inputsDisabled)}" class="ui5-color-picker-alpha-slider" min="0" max="1" step="0.01" value="${r(this._alpha)}" accessible-name="${r(this.alphaSliderLabel)}" @ui5-input="${r(this._handleAlphaInput)}"></ui5-slider></div><div class="ui5-color-picker-current-color"><div class="ui5-color-picker-colors-wrapper"><span class="ui5-color-picker-white"></span><span class="ui5-color-picker-color"><div class="ui5-color-picker-color-inner" style="${k(this.styles.colorSpan)}"></div></span></div><div class="ui5-color-picker-hex-input-wrapper"><ui5-label>Hex</ui5-label><ui5-input class="ui5-color-picker-hex-input" value="${r(this.hex)}" @keydown="${this._onkeydown}" accessible-name="${r(this.hexInputLabel)}" @ui5-change="${r(this._handleHEXChange)}" value-state="${r(this.hexInputErrorState)}"></ui5-input></div></div><div class="ui5-color-picker-rgb-wrapper" @ui5-change="${r(this._handleRGBInputsChange)}"><div class="ui5-color-picker-rgb"><ui5-input id="red" class="ui5-color-picker-rgb-input" disabled="${r(this.inputsDisabled)}" accessible-name="${r(this.redInputLabel)}" value="${r(this._value.r)}"></ui5-input><ui5-label>R</ui5-label></div><div class="ui5-color-picker-rgb"><ui5-input id="green" class="ui5-color-picker-rgb-input" disabled="${r(this.inputsDisabled)}" accessible-name="${r(this.greenInputLabel)}" value="${r(this._value.g)}"></ui5-input><ui5-label>G</ui5-label></div><div class="ui5-color-picker-rgb"><ui5-input id="blue" class="ui5-color-picker-rgb-input" disabled="${r(this.inputsDisabled)}" accessible-name="${r(this.blueInputLabel)}" value="${r(this._value.b)}"></ui5-input><ui5-label>B</ui5-label></div><div class="ui5-color-picker-rgb"><ui5-input id="alpha" disabled="${r(this.inputsDisabled)}" class="ui5-color-picker-rgb-input" value="${r(this._alpha)}" accessible-name="${r(this.alphaInputLabel)}" @ui5-input="${r(this._handleAlphaInput)}" @ui5-change="${r(this._handleAlphaChange)}"></ui5-input><ui5-label>A</ui5-label></div></div></section>`}I("@ui5/webcomponents-theming","sap_horizon",async()=>L);I("@ui5/webcomponents","sap_horizon",async()=>S);const F={packageName:"@ui5/webcomponents",fileName:"themes/ColorPicker.css.ts",content:`:host(:not([hidden])){display:inline-block}.ui5-color-picker-root{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.ui5-color-picker-main-color{width:16rem;height:16rem;position:relative;margin-bottom:1.5rem;border:1px solid var(--sapContent_ForegroundBorderColor);background-size:100%;background-image:-webkit-linear-gradient(left,#000,rgba(0,0,0,0)),-webkit-linear-gradient(top,rgba(255,255,255,0),#fff);background-image:-moz-linear-gradient(left,#000,rgba(0,0,0,0)),-moz-linear-gradient(top,rgba(255,255,255,0),#fff);background-image:linear-gradient(left,#000,#0000),linear-gradient(top,#fff0,#fff);background-image:-webkit-linear-gradient(left,#000,rgba(0,0,0,0),#fff),-webkit-linear-gradient(top,rgba(128,128,128,0),#808080);background-image:-moz-linear-gradient(left,#000,rgba(0,0,0,0),#fff),-moz-linear-gradient(top,rgba(128,128,128,0),#808080);background-image:linear-gradient(left,#000,#0000,#fff),linear-gradient(top,#80808000,gray);user-select:none;-moz-user-select:none}.ui5-color-picker-circle{position:absolute;box-sizing:border-box;width:13px;height:13px;border:var(--_ui5-v2-3-0_color_picker_circle_outer_border);border-radius:.6875rem;pointer-events:none}.ui5-color-picker-circle:after{content:"";position:absolute;width:var(--_ui5-v2-3-0_color_picker_circle_inner_circle_size);height:var(--_ui5-v2-3-0_color_picker_circle_inner_circle_size);border:var(--_ui5-v2-3-0_color_picker_circle_inner_border);border-radius:.9375rem;pointer-events:none}.ui5-color-picker-sliders-wrapper{width:calc(100% - 11px);margin-left:-10px}[ui5-slider]{--_ui5-v2-3-0_slider_active_progress_border: none;--_ui5-v2-3-0_slider_progress_box_sizing: content-box}[ui5-slider]::part(handle){width:.9375rem;height:1.5rem;background:transparent;margin-inline-start:-2px;margin-top:var(--_ui5-v2-3-0_color_picker_slider_handle_margin_top);box-sizing:border-box}[ui5-slider]::part(handle):after{content:"";border:2px solid #fff;display:block;height:1.25rem;border-radius:1rem;width:100%;box-sizing:border-box}[ui5-slider]::part(root-container){padding:1rem 0}[ui5-slider]::part(progress-container){width:calc(100% + 11px);height:18px;position:absolute;margin-top:var(--_ui5-v2-3-0_color_picker_slider_container_margin_top);border-radius:0;border:1px solid var(--sapField_BorderColor)}[ui5-slider].ui5-color-picker-hue-slider::part(progress-container){background-size:100%;background-image:-webkit-linear-gradient(left,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);background-image:-moz-linear-gradient(left,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);background-image:linear-gradient(left,red,#ff0,#0f0,#0ff,#00f,#f0f,red);background-color:none}[ui5-slider].ui5-color-picker-alpha-slider::part(progress-container){background-image:-webkit-linear-gradient(left,rgba(65,120,13,0),var(--ui5-v2-3-0_Color_Picker_Progress_Container_Color)),url(data:image/png;base64,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)}[ui5-slider]::part(progress-bar){background:transparent}.ui5-color-picker-current-color{width:100%;display:flex;justify-content:space-around;align-items:center}.ui5-color-picker-colors-wrapper{display:flex;flex-wrap:nowrap;height:1.5rem;border:1px solid var(--sapField_BorderColor)}.ui5-color-picker-white,.ui5-color-picker-color{width:3.1rem;background:#fff;display:block}.ui5-color-picker-color{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAF1V2h8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAEZ0FNQQAAsY58+1GTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACTSURBVHjaYjhz5sz///8Z/v//f+bMGQAAAAD//2I4c+YM4////wEAAAD//2I8c+YMAwODsbExAAAA//9igMgzMUAARBkAAAD//4JKQ1UwMDD+//8fwj979iwDAwMAAAD//0LSzsDAwMAA0w0D6HyofohmLPIAAAAA//9C2IdsK07jsJsOB3BriNJNQBoAAAD//wMA+ew3HIMTh5IAAAAASUVORK5CYII=)}.ui5-color-picker-color-inner{width:100%;height:100%}.ui5-color-picker-hex-input-wrapper{display:flex;align-items:center;flex-wrap:nowrap}.ui5-color-picker-hex-input{width:4.5rem;min-width:4.5rem;margin-left:.2rem}.ui5-color-picker-rgb-wrapper{display:flex;justify-content:space-around;width:100%}.ui5-color-picker-rgb{display:flex;flex-direction:column;align-items:center;margin-top:1rem}.ui5-color-picker-rgb-input{width:2.5rem;min-width:2.5rem;text-align:center}.ui5-color-picker-hue-slider::part(progress-container):before,.ui5-color-picker-alpha-slider::part(progress-container):before,.ui5-color-picker-hue-slider::part(progress-container):after,.ui5-color-picker-alpha-slider::part(progress-container):after,[ui5-slider].ui5-color-picker-hue-slider::part(icon-slider),[ui5-slider].ui5-color-picker-alpha-slider::part(icon-slider){display:none}.ui5-color-picker-alpha-slider::part(handle),.ui5-color-picker-hue-slider::part(handle){box-shadow:var(--_ui5-v2-3-0_color_picker_slider_handle_box_shadow);border:var(--_ui5-v2-3-0_color_picker_slider_handle_border)}.ui5-color-picker-alpha-slider::part(handle):hover,.ui5-color-picker-hue-slider::part(handle):hover{border:var(--_ui5-v2-3-0_color_picker_slider_handle_outline_hover)}.ui5-color-picker-alpha-slider::part(handle):focus,.ui5-color-picker-hue-slider::part(handle):focus{outline:var(--_ui5-v2-3-0_color_picker_slider_handle_outline_focus);outline-offset:.0625rem}.ui5-color-picker-alpha-slider::part(handle):focus:before,.ui5-color-picker-hue-slider::part(handle):focus:before{content:"";border:var(--_ui5-v2-3-0_color_picker_slider_handle_inline_focus);display:block;height:1.625rem;border-radius:1rem;width:1.05rem;box-sizing:border-box;position:absolute;inset:-3px -3px 2px}.ui5-color-picker-alpha-slider::part(handle):before,.ui5-color-picker-hue-slider::part(handle):before{display:none}.ui5-color-picker-alpha-slider::part(handle):focus,.ui5-color-picker-hue-slider::part(handle):focus{margin-top:var(--_ui5-v2-3-0_color_picker_slider_handle_focus_margin_top)}:dir(rtl) [ui5-slider].ui5-color-picker-hue-slider::part(progress-container){background-image:-webkit-linear-gradient(right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);background-image:-moz-linear-gradient(right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);background-image:linear-gradient(right,red,#ff0,#0f0,#0ff,#00f,#f0f,red)}:dir(rtl) .ui5-color-picker-alpha-slider::part(handle),:dir(rtl) .ui5-color-picker-hue-slider::part(handle){--_ui5-v2-3-0_slider_handle_margin_left: 0}:dir(rtl) .ui5-color-picker-sliders-wrapper{margin-left:10px}
`};var h=function(a,e,i,l){var t=arguments.length,o=t<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,i):l,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(a,e,i,l);else for(var c=a.length-1;c>=0;c--)(n=a[c])&&(o=(t<3?n(o):t>3?n(e,i,o):n(e,i))||o);return t>3&&o&&Object.defineProperty(e,i,o),o},b;const g=6.5;let d=b=class extends B{async formElementAnchor(){return this.getFocusDomRefAsync()}get formFormattedValue(){return this.value}constructor(){super(),this.value="rgba(255,255,255,1)",this.hex="ffffff",this._value=C(this.value),this._alpha=1,this._hue=0,this._isSelectedColorChanged=!1,this._isHueValueChanged=!1,this._wrongHEX=!1,this._selectedCoordinates={x:256-g,y:256-g},this._mainValue={r:255,g:0,b:0},this.selectedHue=0,this.mouseDown=!1,this.mouseIn=!1}onBeforeRendering(){this._value=C(this.value);const e=`rgba(${this._value.r},${this._value.g},${this._value.b},1)`;this._setHex(),this._setValues(),this.style.setProperty(Z("--ui5_Color_Picker_Progress_Container_Color"),e)}_handleMouseDown(e){this.mouseDown=!0,this.mouseIn=!0,this._changeSelectedColor(e.offsetX,e.offsetY)}_handleMouseUp(){this.mouseDown=!1}_handleMouseOut(e){if(!this.mouseIn||!this.mouseDown)return;const i=e.target,l=i.offsetHeight,t=i.offsetWidth,o=e.offsetX<=0,n=e.offsetY<=0,c=e.offsetY>=i.offsetHeight,u=e.offsetX>=i.offsetWidth;let f,A;o?f=0:u?f=t:f=e.offsetX,n?A=0:c?A=l:A=e.offsetY,this._changeSelectedColor(f,A),this.mouseIn=!1,this.mouseDown=!1}_handleMouseMove(e){!this.mouseDown||!this.mouseIn||this._changeSelectedColor(e.offsetX,e.offsetY)}_handleAlphaInput(e){const i=e.target.value;this._alpha=parseFloat(i),Number.isNaN(this._alpha)&&(this._alpha=1),this._isHueValueChanged=!0,this._setColor(this._value)}_handleHueInput(e){this.selectedHue=e.target.value,this._hue=this.selectedHue,this._setMainColor(this._hue),this._isHueValueChanged=!0;const i=this._selectedCoordinates.x+g,l=this._selectedCoordinates.y+g,t=this._calculateColorFromCoordinates(i,l);t&&this._setColor(y(t))}_handleHEXChange(e){const i=new RegExp("^[<0-9 abcdef]+$"),l=e.target;let t=l.value.toLowerCase();t.length===3&&(t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`);const o=t.length===6&&i.test(t);o&&l.value!==t&&(this._wrongHEX=!1,l.value=t),t!==this.hex&&(this.hex=t,o?(this._wrongHEX=!1,this._setColor(x(this.hex))):this._wrongHEX=!0)}_handleRGBInputsChange(e){const i=e.target,l=parseInt(i.value)||0;let t;switch(i.id){case"red":t={...this._value,r:l};break;case"green":t={...this._value,g:l};break;case"blue":t={...this._value,b:l};break;default:t={...this._value}}this._setColor(t)}_setMainColor(e){e<=255?this._mainValue={r:255,g:e,b:0}:e<=510?this._mainValue={r:255-(e-255),g:255,b:0}:e<=765?this._mainValue={r:0,g:255,b:e-510}:e<=1020?this._mainValue={r:0,g:765-(e-255),b:255}:e<=1275?this._mainValue={r:e-1020,g:0,b:255}:this._mainValue={r:255,g:0,b:1275-(e-255)}}_handleAlphaChange(){this._alpha=this._alpha<0?0:this._alpha,this._alpha=this._alpha>1?1:this._alpha}_changeSelectedColor(e,i){this._selectedCoordinates={x:e-g,y:i-g},this._isSelectedColorChanged=!0;const l=this._calculateColorFromCoordinates(e,i);l&&this._setColor(y(l))}_onkeydown(e){T(e)&&this._handleHEXChange(e)}_calculateColorFromCoordinates(e,i){const l=this._hue/4.251,t=1-+(Math.round(parseFloat(i/256+"e+2"))+"e-2"),o=+(Math.round(parseFloat(e/256+"e+2"))+"e-2");if(!(!t||!o))return{h:l,s:t,l:o}}_setColor(e={r:0,g:0,b:0}){this.value=`rgba(${e.r}, ${e.g}, ${e.b}, ${this._alpha})`,this._wrongHEX=!this.isValidRGBColor(e),this.fireEvent("change")}isValidRGBColor(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}_setHex(){let e=this._value.r.toString(16),i=this._value.g.toString(16),l=this._value.b.toString(16);e.length===1&&(e=`0${e}`),i.length===1&&(i=`0${i}`),l.length===1&&(l=`0${l}`),this.hex=e+i+l}_setValues(){const e=U(this._value);this._selectedCoordinates={x:Math.round(e.l*100)*2.56-g,y:256-Math.round(e.s*100)*2.56-g},this._isSelectedColorChanged?this._isSelectedColorChanged=!1:this._isHueValueChanged?(this._isHueValueChanged=!1,this._hue=this.selectedHue?this.selectedHue:this._hue):this._hue=Math.round(e.h*4.25),this._setMainColor(this._hue)}get hueSliderLabel(){return b.i18nBundle.getText(K)}get alphaSliderLabel(){return b.i18nBundle.getText(P)}get hexInputLabel(){return b.i18nBundle.getText(Y)}get redInputLabel(){return b.i18nBundle.getText(M)}get greenInputLabel(){return b.i18nBundle.getText($)}get blueInputLabel(){return b.i18nBundle.getText(G)}get alphaInputLabel(){return b.i18nBundle.getText(X)}get inputsDisabled(){return this._wrongHEX?!0:void 0}get hexInputErrorState(){return this._wrongHEX?"Error":void 0}get styles(){return{mainColor:{"background-color":`rgb(${this._mainValue.r}, ${this._mainValue.g}, ${this._mainValue.b})`},circle:{left:`${this._selectedCoordinates.x}px`,top:`${this._selectedCoordinates.y}px`},colorSpan:{"background-color":`rgba(${this._value.r}, ${this._value.g}, ${this._value.b}, ${this._alpha})`}}}};h([p()],d.prototype,"value",void 0);h([p()],d.prototype,"name",void 0);h([p({noAttribute:!0})],d.prototype,"hex",void 0);h([p({type:Object})],d.prototype,"_mainValue",void 0);h([p({type:Object})],d.prototype,"_value",void 0);h([p({type:Object})],d.prototype,"_selectedCoordinates",void 0);h([p({type:Number})],d.prototype,"_alpha",void 0);h([p({type:Number})],d.prototype,"_hue",void 0);h([p({type:Boolean})],d.prototype,"_isSelectedColorChanged",void 0);h([p({type:Boolean})],d.prototype,"_isHueValueChanged",void 0);h([p({type:Boolean})],d.prototype,"_wrongHEX",void 0);h([E("@ui5/webcomponents")],d,"i18nBundle",void 0);d=b=h([D({tag:"ui5-color-picker",renderer:V,formAssociated:!0,styles:F,template:q,dependencies:[H,N,O]}),R("change")],d);d.define();const ce=d;export{ce as C};
