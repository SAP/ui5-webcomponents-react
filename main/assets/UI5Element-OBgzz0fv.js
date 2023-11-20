import{p as W,q as I,t as Bt,u as jt,i as Y,v as Vt,w as zt,b as gt,x as Ht,o as qt,y as Wt,z as Gt,r as Kt,B as Jt,C as Xt,E as Yt,F as Zt,e as Qt,G as te,H as ee,J as se,K as ne,f as oe}from"./i18nBundle-Crssojm_.js";import{E as v,g as E}from"./VersionInfo-hBCHoyLi.js";import{a as yt,s as at,b as re}from"./CustomElementsScopeUtils-kYmWas10.js";const f=typeof document>"u",i={get userAgent(){return f?"":navigator.userAgent},get touch(){return f?!1:"ontouchstart"in window||navigator.maxTouchPoints>0},get ie(){return f?!1:/(msie|trident)/i.test(i.userAgent)},get chrome(){return f?!1:!i.ie&&/(Chrome|CriOS)/.test(i.userAgent)},get firefox(){return f?!1:/Firefox/.test(i.userAgent)},get safari(){return f?!1:!i.ie&&!i.chrome&&/(Version|PhantomJS)\/(\d+\.\d+).*Safari/.test(i.userAgent)},get webkit(){return f?!1:!i.ie&&/webkit/.test(i.userAgent)},get windows(){return f?!1:navigator.platform.indexOf("Win")!==-1},get macOS(){return f?!1:!!navigator.userAgent.match(/Macintosh|Mac OS X/i)},get iOS(){return f?!1:!!navigator.platform.match(/iPhone|iPad|iPod/)||!!(i.userAgent.match(/Mac/)&&"ontouchend"in document)},get android(){return f?!1:!i.windows&&/Android/.test(i.userAgent)},get androidPhone(){return f?!1:i.android&&/(?=android)(?=.*mobile)/i.test(i.userAgent)},get ipad(){return f?!1:/ipad/i.test(i.userAgent)||/Macintosh/i.test(i.userAgent)&&"ontouchend"in document}};let U,N,y;const Z=()=>{if(f||!i.windows)return!1;if(U===void 0){const e=i.userAgent.match(/Windows NT (\d+).(\d)/);U=e?parseFloat(e[1]):0}return U>=8},ae=()=>{if(f||!i.webkit)return!1;if(N===void 0){const e=i.userAgent.match(/(webkit)[ /]([\w.]+)/);N=e?parseFloat(e[1]):0}return N>=537.1},St=()=>{if(f)return!1;if(y===void 0){if(i.ipad){y=!0;return}if(i.touch){if(Z()){y=!0;return}if(i.chrome&&i.android){y=!/Mobile Safari\/[.0-9]+/.test(i.userAgent);return}let e=window.devicePixelRatio?window.devicePixelRatio:1;i.android&&ae()&&(e=1),y=Math.min(window.screen.width/e,window.screen.height/e)>=600;return}y=i.ie&&i.userAgent.indexOf("Touch")!==-1||i.android&&!i.androidPhone}},ws=()=>i.touch,T=()=>i.safari,_s=()=>i.chrome,bs=()=>i.firefox,wt=()=>(St(),(i.touch||Z())&&y),ie=()=>(St(),i.touch&&!y),ce=()=>f?!1:!wt()&&!ie()||Z(),Cs=()=>wt()&&ce(),Es=()=>i.iOS,As=()=>i.macOS,vs=()=>i.android||i.androidPhone,_t=new v,bt="themeRegistered",le=e=>{_t.attachEvent(bt,e)},de=e=>_t.fireEvent(bt,e),Ct=new Map,Et=new Map,At=new Set,L=new Set,Ts=(e,t,s)=>{Et.set(`${e}/${t}`,s),At.add(e),L.add(t),de(t)},vt=async(e,t)=>{const s=Ct.get(`${e}_${t}`);if(s!==void 0)return s;if(!L.has(t)){const n=[...L.values()].join(", ");return console.warn(`You have requested a non-registered theme ${t} - falling back to ${W}. Registered themes are: ${n}`),it(e,W)}return it(e,t)},it=async(e,t)=>{const s=Et.get(`${e}/${t}`);if(!s){console.error(`Theme [${t}] not registered for package [${e}]`);return}let n;try{n=await s(t)}catch(a){console.error(e,a.message);return}const o=n._||n;return Ct.set(`${e}_${t}`,o),o},Tt=()=>At,ue=e=>L.has(e),fe=(e,t)=>{const s=document.createElement("style");return s.type="text/css",t&&Object.entries(t).forEach(n=>s.setAttribute(...n)),s.textContent=e,document.head.appendChild(s),s},he=(e,t)=>{const s=document.createElement("link");return s.type="text/css",s.rel="stylesheet",t&&Object.entries(t).forEach(n=>s.setAttribute(...n)),s.href=e,document.head.appendChild(s),new Promise(n=>{s.addEventListener("load",n),s.addEventListener("error",n)})},$=(e,t)=>t?`${e}|${t}`:e,ct=e=>e===void 0?!0:Bt(I(),parseInt(e))===1,x=(e,t,s="",n)=>{const o=typeof e=="string"?e:e.content,a=I();if(document.adoptedStyleSheets&&!T()){const r=new CSSStyleSheet;r.replaceSync(o),r._ui5StyleId=$(t,s),n&&(r._ui5RuntimeIndex=a,r._ui5Theme=n),document.adoptedStyleSheets=[...document.adoptedStyleSheets,r]}else{const r={};r[t]=s,n&&(r["data-ui5-runtime-index"]=a,r["data-ui5-theme"]=n),fe(o,r)}},pe=(e,t,s="",n)=>{const o=typeof e=="string"?e:e.content,a=I();if(document.adoptedStyleSheets&&!T()){const r=document.adoptedStyleSheets.find(c=>c._ui5StyleId===$(t,s));if(!r)return;if(!n)r.replaceSync(o||"");else{const c=r._ui5RuntimeIndex;(r._ui5Theme!==n||ct(c))&&(r.replaceSync(o||""),r._ui5RuntimeIndex=String(a),r._ui5Theme=n)}}else{const r=document.querySelector(`head>style[${t}="${s}"]`);if(!r)return;if(!n)r.textContent=o||"";else{const c=r.getAttribute("data-ui5-runtime-index")||void 0;(r.getAttribute("data-ui5-theme")!==n||ct(c))&&(r.textContent=o||"",r.setAttribute("data-ui5-runtime-index",String(a)),r.setAttribute("data-ui5-theme",n))}}},k=(e,t="")=>document.adoptedStyleSheets&&!T()?!!document.adoptedStyleSheets.find(s=>s._ui5StyleId===$(e,t)):!!document.querySelector(`head>style[${e}="${t}"]`),me=(e,t="")=>{var s;if(document.adoptedStyleSheets&&!T())document.adoptedStyleSheets=document.adoptedStyleSheets.filter(n=>n._ui5StyleId!==$(e,t));else{const n=document.querySelector(`head > style[${e}="${t}"]`);(s=n==null?void 0:n.parentElement)==null||s.removeChild(n)}},Mt=(e,t,s="",n)=>{k(t,s)?pe(e,t,s,n):x(e,t,s,n)},w=new Set,ge=()=>{let e=document.querySelector(".sapThemeMetaData-Base-baseLib")||document.querySelector(".sapThemeMetaData-UI5-sap-ui-core");if(e)return getComputedStyle(e).backgroundImage;e=document.createElement("span"),e.style.display="none",e.classList.add("sapThemeMetaData-Base-baseLib"),document.body.appendChild(e);let t=getComputedStyle(e).backgroundImage;return t==="none"&&(e.classList.add("sapThemeMetaData-UI5-sap-ui-core"),t=getComputedStyle(e).backgroundImage),document.body.removeChild(e),t},ye=e=>{const t=/\(["']?data:text\/plain;utf-8,(.*?)['"]?\)$/i.exec(e);if(t&&t.length>=2){let s=t[1];if(s=s.replace(/\\"/g,'"'),s.charAt(0)!=="{"&&s.charAt(s.length-1)!=="}")try{s=decodeURIComponent(s)}catch{w.has("decode")||(console.warn("Malformed theme metadata string, unable to decodeURIComponent"),w.add("decode"));return}try{return JSON.parse(s)}catch{w.has("parse")||(console.warn("Malformed theme metadata string, unable to parse JSON"),w.add("parse"))}}},Se=e=>{let t,s;try{t=e.Path.match(/\.([^.]+)\.css_variables$/)[1],s=e.Extends[0]}catch{w.has("object")||(console.warn("Malformed theme metadata Object",e),w.add("object"));return}return{themeName:t,baseThemeName:s}},G=()=>{const e=ge();if(!e||e==="none")return;const t=ye(e);if(t)return Se(t)},Q=new v,tt="themeLoaded",Ms=e=>{Q.attachEvent(tt,e)},Os=e=>{Q.detachEvent(tt,e)},we=e=>Q.fireEvent(tt,e);let B;const Ot=()=>(B===void 0&&(B=jt()),B),_e=e=>`${Ot()}Base/baseLib/${e}/css_variables.css`,be=async e=>{const t=document.querySelector(`[sap-ui-webcomponents-theme="${e}"]`);t&&document.head.removeChild(t),await he(_e(e),{"sap-ui-webcomponents-theme":e})},A="@ui5/webcomponents-theming",Ce=()=>Tt().has(A),Ee=async e=>{if(!Ce())return;const t=await vt(A,e);t&&Mt(t,"data-ui5-theme-properties",A,e)},Ae=()=>{me("data-ui5-theme-properties",A)},ve=async e=>{const s=[...Tt()].map(async n=>{if(n===A)return;const o=await vt(n,e);o&&Mt(o,`data-ui5-component-properties-${I()}`,n)});return Promise.all(s)},Te=async e=>{var n;const t=G();if(t)return t;const s=E("OpenUI5Support");if(s&&s.isOpenUI5Detected()){if(s.cssVariablesLoaded())return{themeName:(n=s.getConfigurationSettingsObject())==null?void 0:n.theme,baseThemeName:""}}else if(Ot())return await be(e),G()},et=async e=>{const t=await Te(e);!t||e!==t.themeName?await Ee(e):Ae();const s=ue(e)?e:t&&t.baseThemeName;await ve(s||W),we(e)};let _;const st=()=>(_===void 0&&(_=Vt()),_),Ps=async e=>{_!==e&&(_=e,await et(_),await Y({themeAware:!0}))},Ds=()=>{var t,s;const e=st();return Me(e)?!e.startsWith("sap_horizon"):!((s=(t=G())==null?void 0:t.baseThemeName)!=null&&s.startsWith("sap_horizon"))},Me=e=>zt.includes(e),Pt=()=>gt("CustomStyle.eventProvider",new v),Dt="CustomCSSChange",nt=e=>{Pt().attachEvent(Dt,e)},Oe=e=>Pt().fireEvent(Dt,e),Rt=()=>gt("CustomStyle.customCSSFor",{});let K;nt(e=>{K||Y({tag:e})});const Rs=(e,t)=>{const s=Rt();s[e]||(s[e]=[]),s[e].push(t),K=!0;try{Oe(e)}finally{K=!1}return Y({tag:e})},Pe=e=>{const t=Rt();return t[e]?t[e].join(""):""},De=e=>{const t=/\$([-a-z0-9A-Z._]+)(?::([^$]*))?\$/.exec(e);return t&&t[2]?t[2].split(/,/):null},Re={iw:"he",ji:"yi",in:"id",sh:"sr"},Le=De("$cldr-rtl-locales:ar,fa,he$")||[],Ie=e=>(e=e&&Re[e]||e,Le.indexOf(e)>=0),$e=()=>{if(typeof document>"u")return!1;const e=Ht();return e!==void 0?!!e:Ie(qt()||Wt())},xe=()=>new Promise(e=>{document.body?e():document.addEventListener("DOMContentLoaded",()=>{e()})}),ke={packageName:"@ui5/webcomponents-base",fileName:"FontFace.css",content:`@font-face{font-family:"72";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular.woff2?ui5-webcomponents) format("woff2"),local("72")}@font-face{font-family:"72full";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular-full.woff2?ui5-webcomponents) format("woff2"),local('72-full')}@font-face{font-family:"72";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold')}@font-face{font-family:"72full";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Bold';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold')}@font-face{font-family:'72-Boldfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Light';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light.woff2?ui5-webcomponents) format("woff2"),local('72-Light')}@font-face{font-family:'72-Lightfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72Mono';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular.woff2?ui5-webcomponents) format('woff2'),local('72Mono')}@font-face{font-family:'72Monofull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:'72Mono-Bold';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold.woff2?ui5-webcomponents) format('woff2'),local('72Mono-Bold')}@font-face{font-family:'72Mono-Boldfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72Black";font-style:bold;font-weight:900;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black.woff2?ui5-webcomponents) format("woff2"),local('72Black')}@font-face{font-family:"72-SemiboldDuplex";src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-SemiboldDuplex.woff2?ui5-webcomponents) format("woff2"),local('72-SemiboldDuplex')}`},Fe={packageName:"@ui5/webcomponents-base",fileName:"OverrideFontFace.css",content:"@font-face{font-family:'72override';unicode-range:U+0102-0103,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EB7,U+1EB8-1EC7,U+1EC8-1ECB,U+1ECC-1EE3,U+1EE4-1EF1,U+1EF4-1EF7;src:local('Arial'),local('Helvetica'),local('sans-serif')}"},Ue=()=>{const e=E("OpenUI5Support");(!e||!e.isOpenUI5Detected())&&Ne(),Be()},Ne=()=>{k("data-ui5-font-face")||x(ke,"data-ui5-font-face")},Be=()=>{k("data-ui5-font-face-override")||x(Fe,"data-ui5-font-face-override")},je={packageName:"@ui5/webcomponents-base",fileName:"SystemCSSVars.css",content:":root{--_ui5_content_density:cozy}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5_content_density:compact}[dir=rtl]{--_ui5_dir:rtl}[dir=ltr]{--_ui5_dir:ltr}"},Ve=()=>{k("data-ui5-system-css-vars")||x(je,"data-ui5-system-css-vars")};let ot=!1,O;const Lt=new v,Ls=e=>{if(!ot){Lt.attachEvent("boot",e);return}e()},ze=async()=>{if(O!==void 0)return O;const e=async t=>{if(typeof document>"u"){t();return}le(He),Gt();const s=E("OpenUI5Support"),n=s?s.isOpenUI5Detected():!1,o=E("F6Navigation");s&&await s.init(),o&&!n&&o.init(),await xe(),await et(st()),s&&s.attachListeners(),Ue(),Ve(),t(),ot=!0,await Lt.fireEventAsync("boot")};return O=new Promise(e),O},He=e=>{const t=st();ot&&e===t&&et(t)},j=new Map,V=new Map,lt=e=>{if(!j.has(e)){const t=qe(e.split("-"));j.set(e,t)}return j.get(e)},It=e=>{if(!V.has(e)){const t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();V.set(e,t)}return V.get(e)},qe=e=>e.map((t,s)=>s===0?t.toLowerCase():t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()).join(""),We=e=>{if(!(e instanceof HTMLElement))return"default";const t=e.getAttribute("slot");if(t){const s=t.match(/^(.+?)-\d+$/);return s?s[1]:t}return"default"},$t=e=>e instanceof HTMLSlotElement?e.assignedNodes({flatten:!0}).filter(t=>t instanceof HTMLElement):[e],Ge=e=>e.reduce((t,s)=>t.concat($t(s)),[]);class Ke{constructor(t){this.metadata=t}getInitialState(){if(Object.prototype.hasOwnProperty.call(this,"_initialState"))return this._initialState;const t={},s=this.slotsAreManaged(),n=this.getProperties();for(const o in n){const a=n[o].type,r=n[o].defaultValue;a===Boolean?(t[o]=!1,r!==void 0&&console.warn("The 'defaultValue' metadata key is ignored for all booleans properties, they would be initialized with 'false' by default")):n[o].multiple?t[o]=[]:a===Object?t[o]="defaultValue"in n[o]?n[o].defaultValue:{}:a===String?t[o]="defaultValue"in n[o]?n[o].defaultValue:"":t[o]=r}if(s){const o=this.getSlots();for(const[a,r]of Object.entries(o)){const c=r.propertyName||a;t[c]=[]}}return this._initialState=t,t}static validatePropertyValue(t,s){return s.multiple&&t?t.map(o=>dt(o,s)):dt(t,s)}static validateSlotValue(t,s){return Je(t,s)}getPureTag(){return this.metadata.tag||""}getTag(){const t=this.metadata.tag;if(!t)return"";const s=yt(t);return s?`${t}-${s}`:t}hasAttribute(t){const s=this.getProperties()[t];return s.type!==Object&&!s.noAttribute&&!s.multiple}getPropertiesList(){return Object.keys(this.getProperties())}getAttributesList(){return this.getPropertiesList().filter(this.hasAttribute.bind(this)).map(It)}canSlotText(){const t=this.getSlots().default;return t&&t.type===Node}hasSlots(){return!!Object.entries(this.getSlots()).length}hasIndividualSlots(){return this.slotsAreManaged()&&Object.values(this.getSlots()).some(t=>t.individualSlots)}slotsAreManaged(){return!!this.metadata.managedSlots}supportsF6FastNavigation(){return!!this.metadata.fastNavigation}getProperties(){return this.metadata.properties||(this.metadata.properties={}),this.metadata.properties}getEvents(){return this.metadata.events||(this.metadata.events={}),this.metadata.events}getSlots(){return this.metadata.slots||(this.metadata.slots={}),this.metadata.slots}isLanguageAware(){return!!this.metadata.languageAware}isThemeAware(){return!!this.metadata.themeAware}shouldInvalidateOnChildChange(t,s,n){const o=this.getSlots()[t].invalidateOnChildChange;if(o===void 0)return!1;if(typeof o=="boolean")return o;if(typeof o=="object"){if(s==="property"){if(o.properties===void 0)return!1;if(typeof o.properties=="boolean")return o.properties;if(Array.isArray(o.properties))return o.properties.includes(n);throw new Error("Wrong format for invalidateOnChildChange.properties: boolean or array is expected")}if(s==="slot"){if(o.slots===void 0)return!1;if(typeof o.slots=="boolean")return o.slots;if(Array.isArray(o.slots))return o.slots.includes(n);throw new Error("Wrong format for invalidateOnChildChange.slots: boolean or array is expected")}}throw new Error("Wrong format for invalidateOnChildChange: boolean or object is expected")}}const dt=(e,t)=>{const s=t.type;let n=t.validator;return s&&s.isDataTypeClass&&(n=s),n?n.isValid(e)?e:t.defaultValue:!s||s===String?typeof e=="string"||typeof e>"u"||e===null?e:e.toString():s===Boolean?typeof e=="boolean"?e:!1:s===Object?typeof e=="object"?e:t.defaultValue:e in s?e:t.defaultValue},Je=(e,t)=>(e&&$t(e).forEach(s=>{if(!(s instanceof t.type))throw new Error(`The element is not of type ${t.type.toString()}`)}),e);class Xe extends HTMLElement{}customElements.get("ui5-static-area")||customElements.define("ui5-static-area",Xe);const Ye=10,z=e=>Array.isArray(e)?e.filter(t=>!!t).flat(Ye).map(t=>typeof t=="string"?t:t.content).join(" "):typeof e=="string"?e:e.content,D=new Map;nt(e=>{D.delete(`${e}_normal`)});const xt=(e,t=!1)=>{const s=e.getMetadata().getTag(),n=`${s}_${t?"static":"normal"}`,o=E("OpenUI5Enablement");if(!D.has(n)){let a,r="";if(o&&(r=z(o.getBusyIndicatorStyles())),t)a=z(e.staticAreaStyles);else{const c=Pe(s)||"";a=`${z(e.styles)} ${c}`}a=`${a} ${r}`,D.set(n,a)}return D.get(n)},R=new Map;nt(e=>{R.delete(`${e}_normal`)});const Ze=(e,t=!1)=>{const n=`${e.getMetadata().getTag()}_${t?"static":"normal"}`;if(!R.has(n)){const o=xt(e,t),a=new CSSStyleSheet;a.replaceSync(o),R.set(n,[a])}return R.get(n)},J=(e,t=!1)=>{let s;const n=e.constructor,o=t?e.staticAreaItem.shadowRoot:e.shadowRoot;let a;if(t?a=e.renderStatic():a=e.render(),!o){console.warn("There is no shadow root to update");return}if(document.adoptedStyleSheets&&!T()?o.adoptedStyleSheets=Ze(n,t):s=xt(n,t),n.renderer){n.renderer(a,o,s,t,{host:e});return}n.render(a,o,s,t,{host:e})},Qe="--_ui5_content_density",ts=e=>getComputedStyle(e).getPropertyValue(Qe),es="--_ui5_dir",kt=e=>{const t=window.document,s=["ltr","rtl"],n=getComputedStyle(e).getPropertyValue(es);return s.includes(n)?n:s.includes(e.dir)?e.dir:s.includes(t.documentElement.dir)?t.documentElement.dir:s.includes(t.body.dir)?t.body.dir:$e()?"rtl":void 0},P="ui5-static-area-item",ss="data-sap-ui-integration-popup-content";class C extends HTMLElement{constructor(){super(),this._rendered=!1,this.attachShadow({mode:"open"})}setOwnerElement(t){this.ownerElement=t,this.classList.add(this.ownerElement._id),this.ownerElement.hasAttribute("data-ui5-static-stable")&&this.setAttribute("data-ui5-stable",this.ownerElement.getAttribute("data-ui5-static-stable"))}update(){this._rendered&&(this.updateAdditionalProperties(),J(this.ownerElement,!0))}updateAdditionalProperties(){this._updateAdditionalAttrs(),this._updateContentDensity(),this._updateDirection()}_updateContentDensity(){ts(this.ownerElement)==="compact"?(this.classList.add("sapUiSizeCompact"),this.classList.add("ui5-content-density-compact")):(this.classList.remove("sapUiSizeCompact"),this.classList.remove("ui5-content-density-compact"))}_updateDirection(){if(this.ownerElement){const t=kt(this.ownerElement);t?this.setAttribute("dir",t):this.removeAttribute("dir")}}_updateAdditionalAttrs(){this.setAttribute(P,""),this.setAttribute(ss,"")}async getDomRef(){return this.updateAdditionalProperties(),this._rendered||(this._rendered=!0,J(this.ownerElement,!0)),await Kt(),this.shadowRoot}static getTag(){const t=yt(P);return t?`${P}-${t}`:P}static createInstance(){return customElements.get(C.getTag())||customElements.define(C.getTag(),C),document.createElement(this.getTag())}}const ns=[],os=e=>ns.some(t=>e.startsWith(t)),X=new WeakMap,rs=(e,t,s)=>{const n=new MutationObserver(t);X.set(e,n),n.observe(e,s)},as=e=>{const t=X.get(e);t&&(t.disconnect(),X.delete(e))},is=["value-changed","click"];let H;const cs=e=>is.includes(e),ls=e=>{const t=Ft();return!(typeof t!="boolean"&&t.events&&t.events.includes&&t.events.includes(e))},Ft=()=>(H===void 0&&(H=Jt()),H),ds=e=>{const t=Ft();return cs(e)?!1:t===!0?!0:!ls(e)},us=["disabled","title","hidden","role","draggable"],ut=e=>us.includes(e)||e.startsWith("aria")?!0:![HTMLElement,Element,Node].some(s=>s.prototype.hasOwnProperty(e)),ft=(e,t)=>{if(e.length!==t.length)return!1;for(let s=0;s<e.length;s++)if(e[s]!==t[s])return!1;return!0},ht=(e,t)=>{const s=fs(t),n=re();return e.call(t,t,s,n)},fs=e=>{const t=e.constructor,s=t.getMetadata().getPureTag(),n=t.getUniqueDependencies().map(o=>o.getMetadata().getPureTag()).filter(at);return at(s)&&n.push(s),n};let hs=0;const pt=new Map,q=new Map;function b(e){this._suppressInvalidation||(this.onInvalidation(e),this._changedState.push(e),oe(this),this._eventProvider.fireEvent("invalidate",{...e,target:this}))}class rt extends HTMLElement{constructor(){super();const t=this.constructor;this._changedState=[],this._suppressInvalidation=!0,this._inDOM=!1,this._fullyConnected=!1,this._childChangeListeners=new Map,this._slotChangeListeners=new Map,this._eventProvider=new v;let s;this._domRefReadyPromise=new Promise(n=>{s=n}),this._domRefReadyPromise._deferredResolve=s,this._doNotSyncAttributes=new Set,this._state={...t.getMetadata().getInitialState()},this._upgradeAllProperties(),t._needsShadowDOM()&&this.attachShadow({mode:"open"})}get _id(){return this.__id||(this.__id=`ui5wc_${++hs}`),this.__id}render(){const t=this.constructor.template;return ht(t,this)}renderStatic(){const t=this.constructor.staticAreaTemplate;return ht(t,this)}async connectedCallback(){const t=this.constructor;this.setAttribute(t.getMetadata().getPureTag(),""),t.getMetadata().supportsF6FastNavigation()&&this.setAttribute("data-sap-ui-fastnavgroup","true");const s=t.getMetadata().slotsAreManaged();this._inDOM=!0,s&&(this._startObservingDOMChildren(),await this._processChildren()),this._inDOM&&(Xt(this),this._domRefReadyPromise._deferredResolve(),this._fullyConnected=!0,this.onEnterDOM())}disconnectedCallback(){const s=this.constructor.getMetadata().slotsAreManaged();this._inDOM=!1,s&&this._stopObservingDOMChildren(),this._fullyConnected&&(this.onExitDOM(),this._fullyConnected=!1),this.staticAreaItem&&this.staticAreaItem.parentElement&&this.staticAreaItem.parentElement.removeChild(this.staticAreaItem),Yt(this)}onBeforeRendering(){}onAfterRendering(){}onEnterDOM(){}onExitDOM(){}_startObservingDOMChildren(){const t=this.constructor;if(!t.getMetadata().hasSlots())return;const n=t.getMetadata().canSlotText(),o={childList:!0,subtree:n,characterData:n};rs(this,this._processChildren.bind(this),o)}_stopObservingDOMChildren(){as(this)}async _processChildren(){this.constructor.getMetadata().hasSlots()&&await this._updateSlots()}async _updateSlots(){const t=this.constructor,s=t.getMetadata().getSlots(),n=t.getMetadata().canSlotText(),o=Array.from(n?this.childNodes:this.children),a=new Map,r=new Map;for(const[l,h]of Object.entries(s)){const u=h.propertyName||l;r.set(u,l),a.set(u,[...this._state[u]]),this._clearSlot(l,h)}const c=new Map,d=new Map,g=o.map(async(l,h)=>{const u=We(l),S=s[u];if(S===void 0){if(u!=="default"){const p=Object.keys(s).join(", ");console.warn(`Unknown slotName: ${u}, ignoring`,l,`Valid values are: ${p}`)}return}if(S.individualSlots){const p=(c.get(u)||0)+1;c.set(u,p),l._individualSlot=`${u}-${p}`}if(l instanceof HTMLElement){const p=l.localName;if(p.includes("-")&&!os(p)){if(!window.customElements.get(p)){const Ut=window.customElements.whenDefined(p);let M=pt.get(p);M||(M=new Promise(Nt=>setTimeout(Nt,1e3)),pt.set(p,M)),await Promise.race([Ut,M])}window.customElements.upgrade(l)}}if(l=t.getMetadata().constructor.validateSlotValue(l,S),mt(l)&&S.invalidateOnChildChange){const p=this._getChildChangeListener(u);p&&l.attachInvalidate.call(l,p)}l instanceof HTMLSlotElement&&this._attachSlotChange(l,u);const F=S.propertyName||u;d.has(F)?d.get(F).push({child:l,idx:h}):d.set(F,[{child:l,idx:h}])});await Promise.all(g),d.forEach((l,h)=>{this._state[h]=l.sort((u,S)=>u.idx-S.idx).map(u=>u.child)});let m=!1;for(const[l,h]of Object.entries(s)){const u=h.propertyName||l;ft(a.get(u),this._state[u])||(b.call(this,{type:"slot",name:r.get(u),reason:"children"}),m=!0)}m||b.call(this,{type:"slot",name:"default",reason:"textcontent"})}_clearSlot(t,s){const n=s.propertyName||t;this._state[n].forEach(a=>{if(mt(a)){const r=this._getChildChangeListener(t);r&&a.detachInvalidate.call(a,r)}a instanceof HTMLSlotElement&&this._detachSlotChange(a,t)}),this._state[n]=[]}attachInvalidate(t){this._eventProvider.attachEvent("invalidate",t)}detachInvalidate(t){this._eventProvider.detachEvent("invalidate",t)}_onChildChange(t,s){this.constructor.getMetadata().shouldInvalidateOnChildChange(t,s.type,s.name)&&b.call(this,{type:"slot",name:t,reason:"childchange",child:s.target})}attributeChangedCallback(t,s,n){let o;if(this._doNotSyncAttributes.has(t))return;const a=this.constructor.getMetadata().getProperties(),r=t.replace(/^ui5-/,""),c=lt(r);if(a.hasOwnProperty(c)){const d=a[c],g=d.type;let m=d.validator;g&&g.isDataTypeClass&&(m=g),m?o=m.attributeToProperty(n):g===Boolean?o=n!==null:o=n,this[c]=o}}_updateAttribute(t,s){const n=this.constructor;if(!n.getMetadata().hasAttribute(t))return;const a=n.getMetadata().getProperties()[t],r=a.type;let c=a.validator;const d=It(t),g=this.getAttribute(d);if(r&&r.isDataTypeClass&&(c=r),c){const m=c.propertyToAttribute(s);m===null?(this._doNotSyncAttributes.add(d),this.removeAttribute(d),this._doNotSyncAttributes.delete(d)):this.setAttribute(d,m)}else r===Boolean?s===!0&&g===null?this.setAttribute(d,""):s===!1&&g!==null&&this.removeAttribute(d):typeof s!="object"&&g!==s&&this.setAttribute(d,s)}_upgradeProperty(t){if(this.hasOwnProperty(t)){const s=this[t];delete this[t],this[t]=s}}_upgradeAllProperties(){this.constructor.getMetadata().getPropertiesList().forEach(this._upgradeProperty.bind(this))}_getChildChangeListener(t){return this._childChangeListeners.has(t)||this._childChangeListeners.set(t,this._onChildChange.bind(this,t)),this._childChangeListeners.get(t)}_getSlotChangeListener(t){return this._slotChangeListeners.has(t)||this._slotChangeListeners.set(t,this._onSlotChange.bind(this,t)),this._slotChangeListeners.get(t)}_attachSlotChange(t,s){const n=this._getSlotChangeListener(s);n&&t.addEventListener("slotchange",n)}_detachSlotChange(t,s){t.removeEventListener("slotchange",this._getSlotChangeListener(s))}_onSlotChange(t){b.call(this,{type:"slot",name:t,reason:"slotchange"})}onInvalidation(t){}_render(){const t=this.constructor,s=t.getMetadata().hasIndividualSlots();this._suppressInvalidation=!0,this.onBeforeRendering(),this._onComponentStateFinalized&&this._onComponentStateFinalized(),this._suppressInvalidation=!1,this._changedState=[],t._needsShadowDOM()&&J(this),this.staticAreaItem&&this.staticAreaItem.update(),s&&this._assignIndividualSlotsToChildren(),this.onAfterRendering()}_assignIndividualSlotsToChildren(){Array.from(this.children).forEach(s=>{s._individualSlot&&s.setAttribute("slot",s._individualSlot)})}_waitForDomRef(){return this._domRefReadyPromise}getDomRef(){if(typeof this._getRealDomRef=="function")return this._getRealDomRef();if(!this.shadowRoot||this.shadowRoot.children.length===0)return;const t=[...this.shadowRoot.children].filter(s=>!["link","style"].includes(s.localName));return t.length!==1&&console.warn(`The shadow DOM for ${this.constructor.getMetadata().getTag()} does not have a top level element, the getDomRef() method might not work as expected`),t[0]}getFocusDomRef(){const t=this.getDomRef();if(t)return t.querySelector("[data-sap-focus-ref]")||t}async getFocusDomRefAsync(){return await this._waitForDomRef(),this.getFocusDomRef()}async focus(t){await this._waitForDomRef();const s=this.getFocusDomRef();s&&typeof s.focus=="function"&&s.focus(t)}fireEvent(t,s,n=!1,o=!0){const a=this._fireEvent(t,s,n,o),r=lt(t);return r!==t?a&&this._fireEvent(r,s,n,o):a}_fireEvent(t,s,n=!1,o=!0){const a=new CustomEvent(`ui5-${t}`,{detail:s,composed:!1,bubbles:o,cancelable:n}),r=this.dispatchEvent(a);if(ds(t))return r;const c=new CustomEvent(t,{detail:s,composed:!1,bubbles:o,cancelable:n});return this.dispatchEvent(c)&&r}getSlottedNodes(t){return Ge(this[t])}get effectiveDir(){return Zt(this.constructor),kt(this)}get isUI5Element(){return!0}get classes(){return{}}static get observedAttributes(){return this.getMetadata().getAttributesList()}static _needsShadowDOM(){return!!this.template||Object.prototype.hasOwnProperty.call(this.prototype,"render")}static _needsStaticArea(){return!!this.staticAreaTemplate||Object.prototype.hasOwnProperty.call(this.prototype,"renderStatic")}getStaticAreaItemDomRef(){if(!this.constructor._needsStaticArea())throw new Error("This component does not use the static area");return this.staticAreaItem||(this.staticAreaItem=C.createInstance(),this.staticAreaItem.setOwnerElement(this)),this.staticAreaItem.parentElement||Qt("ui5-static-area").appendChild(this.staticAreaItem),this.staticAreaItem.getDomRef()}static _generateAccessors(){const t=this.prototype,s=this.getMetadata().slotsAreManaged(),n=this.getMetadata().getProperties();for(const[o,a]of Object.entries(n)){if(ut(o)||console.warn(`"${o}" is not a valid property name. Use a name that does not collide with DOM APIs`),a.type===Boolean&&a.defaultValue)throw new Error(`Cannot set a default value for property "${o}". All booleans are false by default.`);if(a.type===Array)throw new Error(`Wrong type for property "${o}". Properties cannot be of type Array - use "multiple: true" and set "type" to the single value type, such as "String", "Object", etc...`);if(a.type===Object&&a.defaultValue)throw new Error(`Cannot set a default value for property "${o}". All properties of type "Object" are empty objects by default.`);if(a.multiple&&a.defaultValue)throw new Error(`Cannot set a default value for property "${o}". All multiple properties are empty arrays by default.`);Object.defineProperty(t,o,{get(){if(this._state[o]!==void 0)return this._state[o];const r=a.defaultValue;return a.type===Boolean?!1:a.type===String?r:a.multiple?[]:r},set(r){let c;r=this.constructor.getMetadata().constructor.validatePropertyValue(r,a);const m=a.type;let l=a.validator;const h=this._state[o];m&&m.isDataTypeClass&&(l=m),l?c=!l.valuesAreEqual(h,r):Array.isArray(h)&&Array.isArray(r)&&a.multiple&&a.compareValues?c=!ft(h,r):c=h!==r,c&&(this._state[o]=r,b.call(this,{type:"property",name:o,newValue:r,oldValue:h}),this._updateAttribute(o,r))}})}if(s){const o=this.getMetadata().getSlots();for(const[a,r]of Object.entries(o)){ut(a)||console.warn(`"${a}" is not a valid property name. Use a name that does not collide with DOM APIs`);const c=r.propertyName||a;Object.defineProperty(t,c,{get(){return this._state[c]!==void 0?this._state[c]:[]},set(){throw new Error("Cannot set slot content directly, use the DOM APIs (appendChild, removeChild, etc...)")}})}}}static get styles(){return""}static get staticAreaStyles(){return""}static get dependencies(){return[]}static getUniqueDependencies(){if(!q.has(this)){const t=this.dependencies.filter((s,n,o)=>o.indexOf(s)===n);q.set(this,t)}return q.get(this)||[]}static whenDependenciesDefined(){return Promise.all(this.getUniqueDependencies().map(t=>t.define()))}static async onDefine(){return Promise.resolve()}static async define(){await ze(),await Promise.all([this.whenDependenciesDefined(),this.onDefine()]);const t=this.getMetadata().getTag(),s=te(t),n=window.customElements.get(t);return n&&!s?ee(t):n||(this._generateAccessors(),se(t),window.customElements.define(t,this)),this}static getMetadata(){if(this.hasOwnProperty("_metadata"))return this._metadata;const t=[this.metadata];let s=this;for(;s!==rt;)s=Object.getPrototypeOf(s),t.unshift(s.metadata);const n=ne({},...t);return this._metadata=new Ke(n),this._metadata}}rt.metadata={};const mt=e=>"isUI5Element"in e;export{ts as A,De as B,rt as U,Ls as a,Rs as b,st as c,Ms as d,Os as e,ws as f,$e as g,Ds as h,mt as i,ie as j,T as k,ce as l,bs as m,Mt as n,me as o,As as p,wt as q,Ts as r,Ps as s,Cs as t,vs as u,ht as v,Es as w,k as x,x as y,_s as z};
//# sourceMappingURL=UI5Element-OBgzz0fv.js.map
