import{t as m,s as w}from"./i18nBundle-D-vhNEte.js";import{n as l,r as t}from"./Boot-Bi0-wsLc.js";import{n as $}from"./EventProvider-CVfkyUHo.js";const h=new Map,a=new Map,i=new Map,g=new Set;let u=!1;const L={iw:"he",ji:"yi",in:"id"},d=e=>{u||(console.warn(`[LocaleData] Supported locale "${e}" not configured, import the "Assets.js" module from the webcomponents package you are using.`),u=!0)},j=(e,o,r)=>{e=e&&L[e]||e,e==="no"&&(e="nb"),e==="zh"&&!o&&(r==="Hans"?o="CN":r==="Hant"&&(o="TW")),(e==="sh"||e==="sr"&&r==="Latn")&&(e="sr",o="Latn");let s=`${e}_${o}`;return l.includes(s)?a.has(s)?s:(d(s),t):(s=e,l.includes(s)?a.has(s)?s:(d(s),t):t)},f=(e,o)=>{h.set(e,o)},M=e=>{a.has(e)||(e=t);const o=h.get(e);if(!o)throw new Error(`CLDR data for locale ${e} is not loaded!`);return o},y=e=>{if(!i.get(e)){const o=a.get(e);if(!o)throw new Error(`CLDR data for locale ${e} is not loaded!`);i.set(e,o(e))}return i.get(e)},D=async(e,o,r)=>{const s=j(e,o,r),p=$("OpenUI5Support");if(p){const n=p.getLocaleDataObject();if(n){f(s,n);return}}try{const n=await y(s);f(s,n)}catch(n){const c=n;g.has(c.message)||(g.add(c.message),console.error(c.message))}},S=(e,o)=>{a.set(e,o)};S("en",async()=>(await fetch("https://sdk.openui5.org/1.120.5/resources/sap/ui/core/cldr/en.json")).json()),m(()=>{const e=w();return D(e.getLanguage(),e.getRegion(),e.getScript())});export{S as C,M as S,D as u};
