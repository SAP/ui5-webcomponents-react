import{e as w,m,S as d,D as a}from"./UI5Element-d1d93200.js";import{g as C}from"./CustomElementsScopeUtils-137da8c8.js";const u=new Map,n=new Map,i=new Map,p=new Set;let L=!1;const D={iw:"he",ji:"yi",in:"id"},h=t=>{L||(console.warn(`[LocaleData] Supported locale "${t}" not configured, import the "Assets.js" module from the webcomponents package you are using.`),L=!0)},O=(t,e,s)=>{t=t&&D[t]||t,t==="no"&&(t="nb"),t==="zh"&&!e&&(s==="Hans"?e="CN":s==="Hant"&&(e="TW")),(t==="sh"||t==="sr"&&s==="Latn")&&(t="sr",e="Latn");let o=`${t}_${e}`;return d.includes(o)?n.has(o)?o:(h(o),a):(o=t,d.includes(o)?n.has(o)?o:(h(o),a):a)},l=(t,e)=>{u.set(t,e)},A=t=>{n.has(t)||(t=a);const e=u.get(t);if(!e)throw new Error(`CLDR data for locale ${t} is not loaded!`);return e},S=t=>{if(!i.get(t)){const e=n.get(t);if(!e)throw new Error(`CLDR data for locale ${t} is not loaded!`);i.set(t,e(t))}return i.get(t)},_=async(t,e,s)=>{const o=O(t,e,s),f=C("OpenUI5Support");if(f){const r=f.getLocaleDataObject();if(r){l(o,r);return}}try{const r=await S(o);l(o,r)}catch(r){const c=r;p.has(c.message)||(p.add(c.message),console.error(c.message))}},E=(t,e)=>{n.set(t,e)};E("en",async()=>(await fetch("https://sdk.openui5.org/1.103.0/resources/sap/ui/core/cldr/en.json")).json());w(()=>{const t=m();return _(t.getLanguage(),t.getRegion(),t.getScript())});export{_ as f,A as g,E as r};
//# sourceMappingURL=LocaleData-2c683b59.js.map
