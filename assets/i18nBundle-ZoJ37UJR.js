import{g as pe,V as me,E as Y}from"./VersionInfo-LCCO4Ig5.js";var Q={},ee=Q.hasOwnProperty,_e=Q.toString,te=ee.toString,we=te.call(Object),B=function(e){var t,n;return!e||_e.call(e)!=="[object Object]"?!1:(t=Object.getPrototypeOf(e),t?(n=ee.call(t,"constructor")&&t.constructor,typeof n=="function"&&te.call(n)===we):!0)},ye=Object.create(null),ne=function(e,t,n,s){var r,a,i,c,y,d,l=arguments[2]||{},v=3,fe=arguments.length,F=arguments[0]||!1,he=arguments[1]?void 0:ye;for(typeof l!="object"&&typeof l!="function"&&(l={});v<fe;v++)if((y=arguments[v])!=null)for(c in y)r=l[c],i=y[c],!(c==="__proto__"||l===i)&&(F&&i&&(B(i)||(a=Array.isArray(i)))?(a?(a=!1,d=r&&Array.isArray(r)?r:[]):d=r&&B(r)?r:{},l[c]=ne(F,arguments[1],d,i)):i!==he&&(l[c]=i));return l};const se=function(e,t){return ne(!0,!1,...arguments)},w={themes:{default:"sap_horizon",all:["sap_fiori_3","sap_fiori_3_dark","sap_belize","sap_belize_hcb","sap_belize_hcw","sap_fiori_3_hcb","sap_fiori_3_hcw","sap_horizon","sap_horizon_dark","sap_horizon_hcb","sap_horizon_hcw","sap_horizon_exp","sap_horizon_dark_exp","sap_horizon_hcb_exp","sap_horizon_hcw_exp"]},languages:{default:"en",all:["ar","bg","ca","cnr","cs","cy","da","de","el","en","en_GB","en_US_sappsd","en_US_saprigi","en_US_saptrc","es","es_MX","et","fi","fr","fr_CA","hi","hr","hu","in","it","iw","ja","kk","ko","lt","lv","mk","ms","nl","no","pl","pt_PT","pt","ro","ru","sh","sk","sl","sr","sv","th","tr","uk","vi","zh_CN","zh_TW"]},locales:{default:"en",all:["ar","ar_EG","ar_SA","bg","ca","cs","da","de","de_AT","de_CH","el","el_CY","en","en_AU","en_GB","en_HK","en_IE","en_IN","en_NZ","en_PG","en_SG","en_ZA","es","es_AR","es_BO","es_CL","es_CO","es_MX","es_PE","es_UY","es_VE","et","fa","fi","fr","fr_BE","fr_CA","fr_CH","fr_LU","he","hi","hr","hu","id","it","it_CH","ja","kk","ko","lt","lv","ms","nb","nl","nl_BE","pl","pt","pt_PT","ro","ru","ru_UA","sk","sl","sr","sr_Latn","sv","th","tr","uk","vi","zh_CN","zh_HK","zh_SG","zh_TW"]}},Ae=w.themes.default,_t=w.themes.all,E=w.languages.default,h=w.locales.default,wt=w.locales.all,Se=e=>{const t=document.querySelector(`META[name="${e}"]`);return t&&t.getAttribute("content")},Le=e=>{const t=Se("sap-allowedThemeOrigins");return t&&t.split(",").some(n=>n==="*"||e===n.trim())},Te=(e,t)=>{const n=new URL(e).pathname;return new URL(n,t).toString()},Ee=e=>{let t;try{if(e.startsWith(".")||e.startsWith("/"))t=new URL(e,window.location.href).toString();else{const n=new URL(e),s=n.origin;s&&Le(s)?t=n.toString():t=Te(n.toString(),window.location.href)}return t.endsWith("/")||(t=`${t}/`),`${t}UI5/`}catch{}};var M;(function(e){e.Full="full",e.Basic="basic",e.Minimal="minimal",e.None="none"})(M||(M={}));const ve=M;let W=!1,o={animationMode:ve.Full,theme:Ae,themeRoot:void 0,rtl:void 0,language:void 0,timezone:void 0,calendarType:void 0,secondaryCalendarType:void 0,noConflict:!1,formatSettings:{},fetchDefaultLanguage:!1};const yt=()=>(u(),o.animationMode),At=()=>(u(),o.theme),St=()=>(u(),o.themeRoot),Lt=()=>(u(),o.rtl),Re=()=>(u(),o.language),be=()=>(u(),o.fetchDefaultLanguage),Tt=()=>(u(),o.noConflict),Et=()=>(u(),o.calendarType),vt=()=>(u(),o.secondaryCalendarType),Rt=()=>(u(),o.timezone),bt=()=>(u(),o.formatSettings),T=new Map;T.set("true",!0);T.set("false",!1);const Ce=()=>{const e=document.querySelector("[data-ui5-config]")||document.querySelector("[data-id='sap-ui-config']");let t;if(e){try{t=JSON.parse(e.innerHTML)}catch{console.warn("Incorrect data-sap-ui-config format. Please use JSON")}t&&(o=se(o,t))}},Pe=()=>{const e=new URLSearchParams(window.location.search);e.forEach((t,n)=>{const s=n.split("sap-").length;s===0||s===n.split("sap-ui-").length||N(n,t,"sap")}),e.forEach((t,n)=>{n.startsWith("sap-ui")&&N(n,t,"sap-ui")})},Ue=e=>{const t=e.split("@")[1];return Ee(t)},$e=(e,t)=>e==="theme"&&t.includes("@")?t.split("@")[0]:t,N=(e,t,n)=>{const s=t.toLowerCase(),r=e.split(`${n}-`)[1];T.has(t)&&(t=T.get(s)),r==="theme"?(o.theme=$e(r,t),t&&t.includes("@")&&(o.themeRoot=Ue(t))):o[r]=t},Me=()=>{const e=pe("OpenUI5Support");if(!e||!e.isOpenUI5Detected())return;const t=e.getConfigurationSettingsObject();o=se(o,t)},u=()=>{typeof document>"u"||W||(Ce(),Pe(),Me(),W=!0)},V=10;class Ie{constructor(){this.list=[],this.lookup=new Set}add(t){this.lookup.has(t)||(this.list.push(t),this.lookup.add(t))}remove(t){this.lookup.has(t)&&(this.list=this.list.filter(n=>n!==t),this.lookup.delete(t))}shift(){const t=this.list.shift();if(t)return this.lookup.delete(t),t}isEmpty(){return this.list.length===0}isAdded(t){return this.lookup.has(t)}process(t){let n;const s=new Map;for(n=this.shift();n;){const r=s.get(n)||0;if(r>V)throw new Error(`Web component processed too many times this task, max allowed is: ${V}`);t(n),s.set(n,r+1),n=this.shift()}}}const ke=(e,t=document.body,n)=>{let s=document.querySelector(e);return s||(s=n?n():document.createElement(e),t.insertBefore(s,t.firstChild))},ze=()=>{const e=document.createElement("meta");return e.setAttribute("name","ui5-shared-resources"),e.setAttribute("content",""),e},Oe=()=>typeof document>"u"?null:ke('meta[name="ui5-shared-resources"]',document.head,ze),re=(e,t)=>{const n=e.split(".");let s=Oe();if(!s)return t;for(let r=0;r<n.length;r++){const a=n[r],i=r===n.length-1;Object.prototype.hasOwnProperty.call(s,a)||(s[a]=i?t:{}),s=s[a]}return s};let S,De="";const R=new Map,_=re("Runtimes",[]),Ct=()=>{if(S===void 0){S=_.length;const e=me;_.push({...e,alias:De,description:`Runtime ${S} - ver ${e.version}`})}},ae=()=>S,Ze=(e,t)=>{const n=`${e},${t}`;if(R.has(n))return R.get(n);const s=_[e],r=_[t];if(!s||!r)throw new Error("Invalid runtime index supplied");if(s.isNext||r.isNext)return s.buildTime-r.buildTime;const a=s.major-r.major;if(a)return a;const i=s.minor-r.minor;if(i)return i;const c=s.patch-r.patch;if(c)return c;const d=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}).compare(s.suffix,r.suffix);return R.set(n,d),d},xe=()=>_,ie=re("Tags",new Map),k=new Set;let g=new Map,b;const oe=-1,Pt=e=>{k.add(e),ie.set(e,ae())},Ut=e=>k.has(e),Fe=()=>[...k.values()],$t=e=>{let t=ie.get(e);t===void 0&&(t=oe),g.has(t)||g.set(t,new Set),g.get(t).add(e),b||(b=setTimeout(()=>{Be(),g=new Map,b=void 0},1e3))},Be=()=>{const e=xe(),t=ae(),n=e[t];let s="Multiple UI5 Web Components instances detected.";e.length>1&&(s=`${s}
Loading order (versions before 1.1.0 not listed): ${e.map(r=>`
${r.description}`).join("")}`),[...g.keys()].forEach(r=>{let a,i;r===oe?(a=1,i={description:"Older unknown runtime"}):(a=Ze(t,r),i=e[r]);let c;a>0?c="an older":a<0?c="a newer":c="the same",s=`${s}

"${n.description}" failed to define ${g.get(r).size} tag(s) as they were defined by a runtime of ${c} version "${i.description}": ${[...g.get(r)].sort().join(", ")}.`,a>0?s=`${s}
WARNING! If your code uses features of the above web components, unavailable in ${i.description}, it might not work as expected!`:s=`${s}
Since the above web components were defined by the same or newer version runtime, they should be compatible with your code.`}),s=`${s}

To prevent other runtimes from defining tags that you use, consider using scoping or have third-party libraries use scoping: https://github.com/SAP/ui5-webcomponents/blob/main/docs/2-advanced/03-scoping.md.`,console.warn(s)},ce=new Set,Mt=e=>{ce.add(e)},We=e=>ce.has(e),z=new Set,Ne=new Y,p=new Ie;let f,L,C,A;const Ve=async e=>{p.add(e),await He()},Ge=e=>{Ne.fireEvent("beforeComponentRender",e),z.add(e),e._render()},It=e=>{p.remove(e),z.delete(e)},He=async()=>{A||(A=new Promise(e=>{window.requestAnimationFrame(()=>{p.process(Ge),A=null,e(),C||(C=setTimeout(()=>{C=void 0,p.isEmpty()&&Xe()},200))})})),await A},Ke=()=>f||(f=new Promise(e=>{L=e,window.requestAnimationFrame(()=>{p.isEmpty()&&(f=void 0,e())})}),f),je=()=>{const e=Fe().map(t=>customElements.whenDefined(t));return Promise.all(e)},qe=async()=>{await je(),await Ke()},Xe=()=>{p.isEmpty()&&L&&(L(),L=void 0,f=void 0)},Je=async e=>{z.forEach(t=>{const n=t.constructor,s=n.getMetadata().getTag(),r=We(n),a=n.getMetadata().isLanguageAware(),i=n.getMetadata().isThemeAware();(!e||e.tag===s||e.rtlAware&&r||e.languageAware&&a||e.themeAware&&i)&&Ve(t)}),await qe()},Ye=()=>{const e=navigator.languages,t=()=>navigator.language;return e&&e[0]||t()||E},O=new Y,D="languageChange",Qe=e=>{O.attachEvent(D,e)},kt=e=>{O.detachEvent(D,e)},et=e=>O.fireEventAsync(D,e);let m,I;const tt=()=>(m===void 0&&(m=Re()),m),zt=async e=>{m!==e&&(m=e,await et(e),await Je({languageAware:!0}))},nt=e=>{I=e},st=()=>(I===void 0&&nt(be()),I),rt=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;class ue{constructor(t){const n=rt.exec(t.replace(/_/g,"-"));if(n===null)throw new Error(`The given language ${t} does not adhere to BCP-47.`);this.sLocaleId=t,this.sLanguage=n[1]||E,this.sScript=n[2]||"",this.sRegion=n[3]||"",this.sVariant=n[4]&&n[4].slice(1)||null,this.sExtension=n[5]&&n[5].slice(1)||null,this.sPrivateUse=n[6]||null,this.sLanguage&&(this.sLanguage=this.sLanguage.toLowerCase()),this.sScript&&(this.sScript=this.sScript.toLowerCase().replace(/^[a-z]/,s=>s.toUpperCase())),this.sRegion&&(this.sRegion=this.sRegion.toUpperCase())}getLanguage(){return this.sLanguage}getScript(){return this.sScript}getRegion(){return this.sRegion}getVariant(){return this.sVariant}getVariantSubtags(){return this.sVariant?this.sVariant.split("-"):[]}getExtension(){return this.sExtension}getExtensionSubtags(){return this.sExtension?this.sExtension.slice(2).split("-"):[]}getPrivateUse(){return this.sPrivateUse}getPrivateUseSubtags(){return this.sPrivateUse?this.sPrivateUse.slice(2).split("-"):[]}hasPrivateUseSubtag(t){return this.getPrivateUseSubtags().indexOf(t)>=0}toString(){const t=[this.sLanguage];return this.sScript&&t.push(this.sScript),this.sRegion&&t.push(this.sRegion),this.sVariant&&t.push(this.sVariant),this.sExtension&&t.push(this.sExtension),this.sPrivateUse&&t.push(this.sPrivateUse),t.join("-")}}const P=new Map,le=e=>(P.has(e)||P.set(e,new ue(e)),P.get(e)),G=e=>{try{if(e&&typeof e=="string")return le(e)}catch{}return new ue(h)},H=e=>{if(e)return G(e);const t=tt();return t?le(t):G(Ye())},at=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i,K=/(?:^|-)(saptrc|sappsd)(?:-|$)/i,it={he:"iw",yi:"ji",nb:"no",sr:"sh"},ot=e=>{let t;if(!e)return h;if(typeof e=="string"&&(t=at.exec(e.replace(/_/g,"-")))){let n=t[1].toLowerCase(),s=t[3]?t[3].toUpperCase():void 0;const r=t[2]?t[2].toLowerCase():void 0,a=t[4]?t[4].slice(1):void 0,i=t[6];return n=it[n]||n,i&&(t=K.exec(i))||a&&(t=K.exec(a))?`en_US_${t[1].toLowerCase()}`:(n==="zh"&&!s&&(r==="hans"?s="CN":r==="hant"&&(s="TW")),n+(s?"_"+s+(a?"_"+a.replace("-","_"):""):""))}return h},ct=e=>{if(!e)return h;if(e==="zh_HK")return"zh_TW";const t=e.lastIndexOf("_");return t>=0?e.slice(0,t):e!==h?h:""},j=new Set,q=new Set,Z=new Map,U=new Map,x=new Map,Ot=(e,t,n)=>{const s=`${e}/${t}`;x.set(s,n)},X=(e,t)=>{Z.set(e,t)},ut=e=>Z.get(e),ge=(e,t)=>{const n=`${e}/${t}`;return x.has(n)},lt=(e,t)=>{const n=`${e}/${t}`,s=x.get(n);return s&&!U.get(n)&&U.set(n,s(t)),U.get(n)},gt=e=>{j.has(e)||(console.warn(`[${e}]: Message bundle assets are not configured. Falling back to English texts.`,` Add \`import "${e}/dist/Assets.js"\` in your bundle and make sure your build tool supports dynamic imports and JSON imports. See section "Assets" in the documentation for more information.`),j.add(e))},J=(e,t)=>t!==E&&!ge(e,t),de=async e=>{const t=H().getLanguage(),n=H().getRegion();let s=t+(n?`-${n}`:"");if(J(e,s))for(s=ot(s);J(e,s);)s=ct(s);const r=st();if(s===E&&!r){X(e,null);return}if(!ge(e,s)){gt(e);return}try{const a=await lt(e,s);X(e,a)}catch(a){const i=a;q.has(i.message)||(q.add(i.message),console.error(i.message))}};Qe(e=>{const t=[...Z.keys()];return Promise.all(t.map(de))});const dt=/('')|'([^']+(?:''[^']*)*)(?:'|$)|\{([0-9]+(?:\s*,[^{}]*)?)\}|[{}]/g,ft=(e,t)=>(t=t||[],e.replace(dt,(n,s,r,a,i)=>{if(s)return"'";if(r)return r.replace(/''/g,"'");if(a){const c=typeof a=="string"?parseInt(a):a;return String(t[c])}throw new Error(`[i18n]: pattern syntax error at pos ${i}`)})),$=new Map;class ht{constructor(t){this.packageName=t}getText(t,...n){if(typeof t=="string"&&(t={key:t,defaultText:t}),!t||!t.key)return"";const s=ut(this.packageName);s&&!s[t.key]&&console.warn(`Key ${t.key} not found in the i18n bundle, the default text will be used`);const r=s&&s[t.key]?s[t.key]:t.defaultText||t.key;return ft(r,n)}}const pt=e=>{if($.has(e))return $.get(e);const t=new ht(e);return $.set(e,t),t},Dt=async e=>(await de(e),pt(e));export{ve as A,Tt as B,Ge as C,h as D,It as E,Mt as F,Ut as G,$t as H,ht as I,Pt as J,se as K,wt as S,Qe as a,re as b,yt as c,Dt as d,ke as e,Ve as f,H as g,kt as h,Je as i,Ot as j,Et as k,vt as l,Rt as m,bt as n,tt as o,ae as p,Ze as q,qe as r,zt as s,Ae as t,St as u,At as v,_t as w,Lt as x,Ye as y,Ct as z};
