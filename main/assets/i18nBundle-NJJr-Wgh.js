import{k as u,m as b,p as P,q as _,S as R,r as o}from"./UI5Element-B4CRQCUa.js";import{i as V}from"./CustomElementsScopeUtils-C6IqSY4u.js";const M=typeof document>"u",T=()=>{if(M)return u;const t=navigator.languages,e=()=>navigator.language;return t&&t[0]||e()||u},d=new V,w="languageChange",z=t=>{d.attachEvent(w,t)},st=t=>{d.detachEvent(w,t)},I=t=>d.fireEventAsync(w,t);let c,f;const N=()=>(c===void 0&&(c=_()),c),nt=async t=>{c!==t&&(c=t,b()&&(await I(t),await P({languageAware:!0})))},W=t=>{f=t},j=()=>(f===void 0&&W(R()),f),O=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;let E=class{constructor(e){const s=O.exec(e.replace(/_/g,"-"));if(s===null)throw new Error(`The given language ${e} does not adhere to BCP-47.`);this.sLocaleId=e,this.sLanguage=s[1]||u,this.sScript=s[2]||"",this.sRegion=s[3]||"",this.sVariant=s[4]&&s[4].slice(1)||null,this.sExtension=s[5]&&s[5].slice(1)||null,this.sPrivateUse=s[6]||null,this.sLanguage&&(this.sLanguage=this.sLanguage.toLowerCase()),this.sScript&&(this.sScript=this.sScript.toLowerCase().replace(/^[a-z]/,n=>n.toUpperCase())),this.sRegion&&(this.sRegion=this.sRegion.toUpperCase())}getLanguage(){return this.sLanguage}getScript(){return this.sScript}getRegion(){return this.sRegion}getVariant(){return this.sVariant}getVariantSubtags(){return this.sVariant?this.sVariant.split("-"):[]}getExtension(){return this.sExtension}getExtensionSubtags(){return this.sExtension?this.sExtension.slice(2).split("-"):[]}getPrivateUse(){return this.sPrivateUse}getPrivateUseSubtags(){return this.sPrivateUse?this.sPrivateUse.slice(2).split("-"):[]}hasPrivateUseSubtag(e){return this.getPrivateUseSubtags().indexOf(e)>=0}toString(){const e=[this.sLanguage];return this.sScript&&e.push(this.sScript),this.sRegion&&e.push(this.sRegion),this.sVariant&&e.push(this.sVariant),this.sExtension&&e.push(this.sExtension),this.sPrivateUse&&e.push(this.sPrivateUse),e.join("-")}};const h=new Map,U=t=>(h.has(t)||h.set(t,new E(t)),h.get(t)),m=t=>{try{if(t&&typeof t=="string")return U(t)}catch{}return new E(o)},l=t=>{if(t)return m(t);const e=N();return e?U(e):m(T())},B=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i,Z=/(?:^|-)(saptrc|sappsd)(?:-|$)/i,K={he:"iw",yi:"ji",nb:"no",sr:"sh"},X=t=>{let e;if(!t)return o;if(typeof t=="string"&&(e=B.exec(t.replace(/_/g,"-")))){let s=e[1].toLowerCase(),n=e[3]?e[3].toUpperCase():void 0;const r=e[2]?e[2].toLowerCase():void 0,a=e[4]?e[4].slice(1):void 0,i=e[6];return s=K[s]||s,i&&(e=Z.exec(i))||a&&(e=Z.exec(a))?`en_US_${e[1].toLowerCase()}`:(s==="zh"&&!n&&(r==="hans"?n="CN":r==="hant"&&(n="TW")),s+(n?"_"+n+(a?"_"+a.replace("-","_"):""):""))}return o},Y=t=>{if(!t)return o;if(t==="zh_HK")return"zh_TW";const e=t.lastIndexOf("_");return e>=0?t.slice(0,e):t!==o?o:""},v=new Set,x=new Set,A=new Map,p=new Map,y=new Map,at=(t,e,s)=>{const n=`${t}/${e}`;y.set(n,s)},S=(t,e)=>{A.set(t,e)},q=t=>A.get(t),k=(t,e)=>{const s=`${t}/${e}`;return y.has(s)},F=(t,e)=>{const s=`${t}/${e}`,n=y.get(s);return n&&!p.get(s)&&p.set(s,n(e)),p.get(s)},H=t=>{v.has(t)||(console.warn(`[${t}]: Message bundle assets are not configured. Falling back to English texts.`,` Add \`import "${t}/dist/Assets.js"\` in your bundle and make sure your build tool supports dynamic imports and JSON imports. See section "Assets" in the documentation for more information.`),v.add(t))},L=(t,e)=>e!==u&&!k(t,e),C=async t=>{const e=l().getLanguage(),s=l().getRegion(),n=l().getVariant();let r=e+(s?`-${s}`:"")+(n?`-${n}`:"");if(L(t,r))for(r=X(r);L(t,r);)r=Y(r);const a=j();if(r===u&&!a){S(t,null);return}if(!k(t,r)){H(t);return}try{const i=await F(t,r);S(t,i)}catch(i){const g=i;x.has(g.message)||(x.add(g.message),console.error(g.message))}};z(t=>{const e=[...A.keys()];return Promise.all(e.map(C))});const J=/('')|'([^']+(?:''[^']*)*)(?:'|$)|\{([0-9]+(?:\s*,[^{}]*)?)\}|[{}]/g,D=(t,e)=>(e=e||[],t.replace(J,(s,n,r,a,i)=>{if(n)return"'";if(r)return r.replace(/''/g,"'");if(a){const g=typeof a=="string"?parseInt(a):a;return String(e[g])}throw new Error(`[i18n]: pattern syntax error at pos ${i}`)})),$=new Map;class G{constructor(e){this.packageName=e}getText(e,...s){if(typeof e=="string"&&(e={key:e,defaultText:e}),!e||!e.key)return"";const n=q(this.packageName);n&&!n[e.key]&&console.warn(`Key ${e.key} not found in the i18n bundle, the default text will be used`);const r=n&&n[e.key]?n[e.key]:e.defaultText||e.key;return D(r,s)}}const Q=t=>{if($.has(t))return $.get(t);const e=new G(t);return $.set(t,e),e},it=async t=>(await C(t),Q(t));export{at as $,nt as L,N as a,it as f,st as r,l as s,z as t,G as u};
