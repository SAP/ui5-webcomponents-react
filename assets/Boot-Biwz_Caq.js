import{g,E as S}from"./EventProvider-B3ZIXKWe.js";import{g as Ue,q as z,t as ge,u as we,n as B,o as $,v as ye,c as Y,r as _e,w as Ee}from"./ManagedStyles-DBz9b8_7.js";const y={themes:{default:"sap_horizon",all:["sap_fiori_3","sap_fiori_3_dark","sap_belize","sap_belize_hcb","sap_belize_hcw","sap_fiori_3_hcb","sap_fiori_3_hcw","sap_horizon","sap_horizon_dark","sap_horizon_hcb","sap_horizon_hcw","sap_horizon_exp","sap_horizon_dark_exp","sap_horizon_hcb_exp","sap_horizon_hcw_exp"]},languages:{default:"en",all:["ar","bg","ca","cnr","cs","cy","da","de","el","en","en_GB","en_US_sappsd","en_US_saprigi","en_US_saptrc","es","es_MX","et","fi","fr","fr_CA","hi","hr","hu","in","it","iw","ja","kk","ko","lt","lv","mk","ms","nl","no","pl","pt_PT","pt","ro","ru","sh","sk","sl","sr","sv","th","tr","uk","vi","zh_CN","zh_TW"]},locales:{default:"en",all:["ar","ar_EG","ar_SA","bg","ca","cnr","cs","da","de","de_AT","de_CH","el","el_CY","en","en_AU","en_GB","en_HK","en_IE","en_IN","en_NZ","en_PG","en_SG","en_ZA","es","es_AR","es_BO","es_CL","es_CO","es_MX","es_PE","es_UY","es_VE","et","fa","fi","fr","fr_BE","fr_CA","fr_CH","fr_LU","he","hi","hr","hu","id","it","it_CH","ja","kk","ko","lt","lv","ms","mk","nb","nl","nl_BE","pl","pt","pt_PT","ro","ru","ru_UA","sk","sl","sr","sr_Latn","sv","th","tr","uk","vi","zh_CN","zh_HK","zh_SG","zh_TW"]}},b=y.themes.default,Te=y.themes.all,St=y.languages.default,kt=y.locales.default,vt=y.locales.all;var Z={},Q=Z.hasOwnProperty,be=Z.toString,ee=Q.toString,Ce=ee.call(Object),G=function(e){var t,n;return!e||be.call(e)!=="[object Object]"?!1:(t=Object.getPrototypeOf(e),t?(n=Q.call(t,"constructor")&&t.constructor,typeof n=="function"&&ee.call(n)===Ce):!0)},Ae=Object.create(null),te=function(e,t,n,o){var s,a,r,i,d,v,f=arguments[2]||{},D=3,pe=arguments.length,q=arguments[0]||!1,he=arguments[1]?void 0:Ae;for(typeof f!="object"&&typeof f!="function"&&(f={});D<pe;D++)if((d=arguments[D])!=null)for(i in d)s=f[i],r=d[i],!(i==="__proto__"||f===r)&&(q&&r&&(G(r)||(a=Array.isArray(r)))?(a?(a=!1,v=s&&Array.isArray(s)?s:[]):v=s&&G(s)?s:{},f[i]=te(q,arguments[1],v,r)):r!==he&&(f[i]=r));return f};const ne=function(e,t){return te(!0,!1,...arguments)},Se=e=>{const t=document.querySelector(`META[name="${e}"]`);return t&&t.getAttribute("content")},ke=e=>{const t=Se("sap-allowedThemeOrigins");return t&&t.split(",").some(n=>n==="*"||e===n.trim())},ve=(e,t)=>{const n=new URL(e).pathname;return new URL(n,t).toString()},De=e=>{let t;try{if(e.startsWith(".")||e.startsWith("/"))t=new URL(e,window.location.href).toString();else{const n=new URL(e),o=n.origin;o&&ke(o)?t=n.toString():t=ve(n.toString(),window.location.href)}return t.endsWith("/")||(t=`${t}/`),`${t}UI5/`}catch{}};var O;(function(e){e.Full="full",e.Basic="basic",e.Minimal="minimal",e.None="none"})(O||(O={}));const Re=O;let V=!1,c={animationMode:Re.Full,theme:b,themeRoot:void 0,rtl:void 0,language:void 0,timezone:void 0,calendarType:void 0,secondaryCalendarType:void 0,noConflict:!1,formatSettings:{},fetchDefaultLanguage:!1};const Dt=()=>(l(),c.animationMode),Le=()=>(l(),c.theme),Me=()=>(l(),c.themeRoot),Rt=()=>(l(),c.language),Lt=()=>(l(),c.fetchDefaultLanguage),Mt=()=>(l(),c.noConflict),Pt=()=>(l(),c.calendarType),Ot=()=>(l(),c.secondaryCalendarType),Ft=()=>(l(),c.timezone),zt=()=>(l(),c.formatSettings),C=new Map;C.set("true",!0);C.set("false",!1);const Pe=()=>{const e=document.querySelector("[data-ui5-config]")||document.querySelector("[data-id='sap-ui-config']");let t;if(e){try{t=JSON.parse(e.innerHTML)}catch{console.warn("Incorrect data-sap-ui-config format. Please use JSON")}t&&(c=ne(c,t))}},Oe=()=>{const e=new URLSearchParams(window.location.search);e.forEach((t,n)=>{const o=n.split("sap-").length;o===0||o===n.split("sap-ui-").length||K(n,t,"sap")}),e.forEach((t,n)=>{n.startsWith("sap-ui")&&K(n,t,"sap-ui")})},Fe=e=>{const t=e.split("@")[1];return De(t)},ze=(e,t)=>e==="theme"&&t.includes("@")?t.split("@")[0]:t,K=(e,t,n)=>{const o=t.toLowerCase(),s=e.split(`${n}-`)[1];C.has(t)&&(t=C.get(o)),s==="theme"?(c.theme=ze(s,t),t&&t.includes("@")&&(c.themeRoot=Fe(t))):c[s]=t},Be=()=>{const e=g("OpenUI5Support");if(!e||!e.isOpenUI5Detected())return;const t=e.getConfigurationSettingsObject();c=ne(c,t)},l=()=>{typeof document>"u"||V||(Pe(),Oe(),Be(),V=!0)},J=10;class $e{constructor(){this.list=[],this.lookup=new Set}add(t){this.lookup.has(t)||(this.list.push(t),this.lookup.add(t))}remove(t){this.lookup.has(t)&&(this.list=this.list.filter(n=>n!==t),this.lookup.delete(t))}shift(){const t=this.list.shift();if(t)return this.lookup.delete(t),t}isEmpty(){return this.list.length===0}isAdded(t){return this.lookup.has(t)}process(t){let n;const o=new Map;for(n=this.shift();n;){const s=o.get(n)||0;if(s>J)throw new Error(`Web component processed too many times this task, max allowed is: ${J}`);t(n),o.set(n,s+1),n=this.shift()}}}const oe=Ue("Tags",new Map),I=new Set;let u=new Map,R;const se=-1,Bt=e=>{I.add(e),oe.set(e,z())},$t=e=>I.has(e),Ie=()=>[...I.values()],It=e=>{let t=oe.get(e);t===void 0&&(t=se),u.has(t)||u.set(t,new Set),u.get(t).add(e),R||(R=setTimeout(()=>{xe(),u=new Map,R=void 0},1e3))},xe=()=>{const e=we(),t=z(),n=e[t];let o="Multiple UI5 Web Components instances detected.";e.length>1&&(o=`${o}
Loading order (versions before 1.1.0 not listed): ${e.map(s=>`
${s.description}`).join("")}`),[...u.keys()].forEach(s=>{let a,r;s===se?(a=1,r={description:"Older unknown runtime"}):(a=ge(t,s),r=e[s]);let i;a>0?i="an older":a<0?i="a newer":i="the same",o=`${o}

"${n.description}" failed to define ${u.get(s).size} tag(s) as they were defined by a runtime of ${i} version "${r.description}": ${[...u.get(s)].sort().join(", ")}.`,a>0?o=`${o}
WARNING! If your code uses features of the above web components, unavailable in ${r.description}, it might not work as expected!`:o=`${o}
Since the above web components were defined by the same or newer version runtime, they should be compatible with your code.`}),o=`${o}

To prevent other runtimes from defining tags that you use, consider using scoping or have third-party libraries use scoping: https://github.com/SAP/ui5-webcomponents/blob/main/docs/2-advanced/03-scoping.md.`,console.warn(o)},ae=new Set,xt=e=>{ae.add(e)},je=e=>ae.has(e),x=new Set,Ne=new S,U=new $e;let m,T,L,_;const He=async e=>{U.add(e),await qe()},We=e=>{Ne.fireEvent("beforeComponentRender",e),x.add(e),e._render()},jt=e=>{U.remove(e),x.delete(e)},qe=async()=>{_||(_=new Promise(e=>{window.requestAnimationFrame(()=>{U.process(We),_=null,e(),L||(L=setTimeout(()=>{L=void 0,U.isEmpty()&&Je()},200))})})),await _},Ge=()=>m||(m=new Promise(e=>{T=e,window.requestAnimationFrame(()=>{U.isEmpty()&&(m=void 0,e())})}),m),Ve=()=>{const e=Ie().map(t=>customElements.whenDefined(t));return Promise.all(e)},Ke=async()=>{await Ve(),await Ge()},Je=()=>{U.isEmpty()&&T&&(T(),T=void 0,m=void 0)},Xe=async e=>{x.forEach(t=>{const n=t.constructor,o=n.getMetadata().getTag(),s=je(n),a=n.getMetadata().isLanguageAware(),r=n.getMetadata().isThemeAware();(!e||e.tag===o||e.rtlAware&&s||e.languageAware&&a||e.themeAware&&r)&&He(t)}),await Ke()},Ye=()=>new Promise(e=>{document.body?e():document.addEventListener("DOMContentLoaded",()=>{e()})}),Ze=(e,t)=>{const n=document.createElement("link");return n.type="text/css",n.rel="stylesheet",t&&Object.entries(t).forEach(o=>n.setAttribute(...o)),n.href=e,document.head.appendChild(n),new Promise(o=>{n.addEventListener("load",o),n.addEventListener("error",o)})},Qe={packageName:"@ui5/webcomponents-base",fileName:"FontFace.css",content:`@font-face{font-family:"72";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular.woff2?ui5-webcomponents) format("woff2"),local("72");unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular-full.woff2?ui5-webcomponents) format("woff2"),local('72-full')}@font-face{font-family:"72";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Bold';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Boldfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Light';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light.woff2?ui5-webcomponents) format("woff2"),local('72-Light');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Lightfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72Mono';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular.woff2?ui5-webcomponents) format('woff2'),local('72Mono');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Monofull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:'72Mono-Bold';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold.woff2?ui5-webcomponents) format('woff2'),local('72Mono-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Mono-Boldfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72Black";font-style:bold;font-weight:900;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black.woff2?ui5-webcomponents) format("woff2"),local('72Black');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Blackfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72-SemiboldDuplex";src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-SemiboldDuplex.woff2?ui5-webcomponents) format("woff2"),local('72-SemiboldDuplex');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}`},et={packageName:"@ui5/webcomponents-base",fileName:"OverrideFontFace.css",content:"@font-face{font-family:'72override';unicode-range:U+0102-0103,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EB7,U+1EB8-1EC7,U+1EC8-1ECB,U+1ECC-1EE3,U+1EE4-1EF1,U+1EF4-1EF7;src:local('Arial'),local('Helvetica'),local('sans-serif')}"},tt=()=>{const e=g("OpenUI5Support");(!e||!e.isOpenUI5Detected())&&nt(),ot()},nt=()=>{B("data-ui5-font-face")||$(Qe,"data-ui5-font-face")},ot=()=>{B("data-ui5-font-face-override")||$(et,"data-ui5-font-face-override")},st={packageName:"@ui5/webcomponents-base",fileName:"SystemCSSVars.css",content:":root{--_ui5_content_density:cozy}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5_content_density:compact}"},at=()=>{B("data-ui5-system-css-vars")||$(st,"data-ui5-system-css-vars")},re=new S,ie="themeRegistered",rt=e=>{re.attachEvent(ie,e)},it=e=>re.fireEvent(ie,e),X=new Map,ce=new Map,ct=new Map,le=new Set,A=new Set,Nt=(e,t,n)=>{ce.set(`${e}/${t}`,n),le.add(e),A.add(t),it(t)},fe=async(e,t,n)=>{const o=`${e}_${t}_${n||""}`,s=X.get(o);if(s!==void 0)return s;if(!A.has(t)){const d=[...A.values()].join(", ");return console.warn(`You have requested a non-registered theme ${t} - falling back to ${b}. Registered themes are: ${d}`),M(e,b)}const[a,r]=await Promise.all([M(e,t),n?M(e,n,!0):void 0]),i=ye(a,r);return i&&X.set(o,i),i},M=async(e,t,n=!1)=>{const s=(n?ct:ce).get(`${e}/${t}`);if(!s){n||console.error(`Theme [${t}] not registered for package [${e}]`);return}let a;try{a=await s(t)}catch(i){console.error(e,i.message);return}return a._||a},ue=()=>le,lt=e=>A.has(e),p=new Set,ft=()=>{let e=document.querySelector(".sapThemeMetaData-Base-baseLib")||document.querySelector(".sapThemeMetaData-UI5-sap-ui-core");if(e)return getComputedStyle(e).backgroundImage;e=document.createElement("span"),e.style.display="none",e.classList.add("sapThemeMetaData-Base-baseLib"),document.body.appendChild(e);let t=getComputedStyle(e).backgroundImage;return t==="none"&&(e.classList.add("sapThemeMetaData-UI5-sap-ui-core"),t=getComputedStyle(e).backgroundImage),document.body.removeChild(e),t},ut=e=>{const t=/\(["']?data:text\/plain;utf-8,(.*?)['"]?\)$/i.exec(e);if(t&&t.length>=2){let n=t[1];if(n=n.replace(/\\"/g,'"'),n.charAt(0)!=="{"&&n.charAt(n.length-1)!=="}")try{n=decodeURIComponent(n)}catch{p.has("decode")||(console.warn("Malformed theme metadata string, unable to decodeURIComponent"),p.add("decode"));return}try{return JSON.parse(n)}catch{p.has("parse")||(console.warn("Malformed theme metadata string, unable to parse JSON"),p.add("parse"))}}},dt=e=>{let t,n;try{t=e.Path.match(/\.([^.]+)\.css_variables$/)[1],n=e.Extends[0]}catch{p.has("object")||(console.warn("Malformed theme metadata Object",e),p.add("object"));return}return{themeName:t,baseThemeName:n}},F=()=>{const e=ft();if(!e||e==="none")return;const t=ut(e);if(t)return dt(t)},j=new S,N="themeLoaded",Ht=e=>{j.attachEvent(N,e)},Wt=e=>{j.detachEvent(N,e)},mt=e=>j.fireEvent(N,e);let P;const de=()=>(P===void 0&&(P=Me()),P),pt=e=>`${de()}Base/baseLib/${e}/css_variables.css`,ht=async e=>{const t=document.querySelector(`[sap-ui-webcomponents-theme="${e}"]`);t&&document.head.removeChild(t),await Ze(pt(e),{"sap-ui-webcomponents-theme":e})},w="@ui5/webcomponents-theming",Ut=()=>ue().has(w),gt=async e=>{if(!Ut())return;const t=await fe(w,e);t&&Y(t,"data-ui5-theme-properties",w,e)},wt=()=>{_e("data-ui5-theme-properties",w)},yt=async(e,t)=>{const o=[...ue()].map(async s=>{if(s===w)return;const a=await fe(s,e,t);a&&Y(a,`data-ui5-component-properties-${z()}`,s)});return Promise.all(o)},_t=async e=>{var o;const t=F();if(t)return t;const n=g("OpenUI5Support");if(n&&n.isOpenUI5Detected()){if(n.cssVariablesLoaded())return{themeName:(o=n.getConfigurationSettingsObject())==null?void 0:o.theme,baseThemeName:""}}else if(de())return await ht(e),F()},H=async e=>{const t=await _t(e);!t||e!==t.themeName?await gt(e):wt();const n=lt(e)?e:t&&t.baseThemeName;await yt(n||b,t&&t.themeName===e?e:void 0),mt(e)};let h;const W=()=>(h===void 0&&(h=Le()),h),qt=async e=>{h!==e&&(h=e,Tt()&&(await H(h),await Xe({themeAware:!0})))},Gt=()=>{var t,n;const e=W();return Et(e)?!e.startsWith("sap_horizon"):!((n=(t=F())==null?void 0:t.baseThemeName)!=null&&n.startsWith("sap_horizon"))},Et=e=>Te.includes(e);let k=!1,E;const me=new S,Tt=()=>k,Vt=e=>{if(!k){me.attachEvent("boot",e);return}e()},Kt=async()=>{if(E!==void 0)return E;const e=async t=>{if(typeof document>"u"){t();return}rt(bt),Ee();const n=g("OpenUI5Support"),o=n?n.isOpenUI5Detected():!1,s=g("F6Navigation");n&&await n.init(),s&&!o&&s.init(),await Ye(),await H(W()),n&&n.attachListeners(),tt(),at(),t(),k=!0,await me.fireEventAsync("boot")};return E=new Promise(e),E},bt=e=>{const t=W();k&&e===t&&H(t)};export{Re as A,Ft as B,zt as C,kt as D,vt as S,Vt as a,W as b,Ht as c,Wt as d,Ke as e,He as f,Dt as g,St as h,Gt as i,Rt as j,Tt as k,Xe as l,Lt as m,Mt as n,We as o,jt as p,xt as q,Nt as r,qt as s,Kt as t,$t as u,It as v,Bt as w,ne as x,Pt as y,Ot as z};
