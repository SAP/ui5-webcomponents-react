import{m as g}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{i as f,a as y}from"./UI5Element-B4CRQCUa.js";import{f as P}from"./i18nBundle-NJJr-Wgh.js";var r=(t=>(t["SAP-icons"]="SAP-icons-v4",t.horizon="SAP-icons-v5",t["SAP-icons-TNT"]="tnt",t.BusinessSuiteInAppSymbols="business-suite",t))(r||{});const h=t=>r[t]?r[t]:t;var $=(t=>(t.SAPIconsV4="SAP-icons-v4",t.SAPIconsV5="SAP-icons-v5",t.SAPIconsTNTV2="tnt-v2",t.SAPIconsTNTV3="tnt-v3",t.SAPBSIconsV1="business-suite-v1",t.SAPBSIconsV2="business-suite-v2",t))($||{});const c=new Map;c.set("SAP-icons",{legacy:"SAP-icons-v4",sap_horizon:"SAP-icons-v5"}),c.set("tnt",{legacy:"tnt-v2",sap_horizon:"tnt-v3"}),c.set("business-suite",{legacy:"business-suite-v1",sap_horizon:"business-suite-v2"});const w=(t,s)=>{if(c.has(t)){c.set(t,{...s,...c.get(t)});return}c.set(t,s)},u=t=>{const s=f()?"legacy":"sap_horizon";return c.has(t)?c.get(t)[s]:t},N=new Map,I=t=>N.get(t),S=t=>{const s=I(y());return!t&&s?h(s):u(t||"SAP-icons")},T="legacy",i=new Map,A=g("SVGIcons.registry",new Map),n=g("SVGIcons.promises",new Map),l="ICON_NOT_FOUND",M=(t,s)=>{i.set(t,s)},b=async t=>{if(!n.has(t)){if(!i.has(t))throw new Error(`No loader registered for the ${t} icons collection. Probably you forgot to import the "AllIcons.js" module for the respective package.`);const s=i.get(t);n.set(t,s(t))}return n.get(t)},m=t=>{Object.keys(t.data).forEach(s=>{const a=t.data[s];D(s,{pathData:a.path||a.paths,ltr:a.ltr,accData:a.acc,collection:t.collection,packageName:t.packageName})})},D=(t,s)=>{const a=`${s.collection}/${t}`;A.set(a,{pathData:s.pathData,ltr:s.ltr,accData:s.accData,packageName:s.packageName,customTemplate:s.customTemplate,viewBox:s.viewBox,collection:s.collection})},v=t=>{t.startsWith("sap-icon://")&&(t=t.replace("sap-icon://",""));let s;return[t,s]=t.split("/").reverse(),t=t.replace("icon-",""),s&&(s=h(s)),{name:t,collection:s}},V=t=>{const{name:s,collection:a}=v(t);return p(a,s)},k=async t=>{const{name:s,collection:a}=v(t);let o=l;try{o=await b(S(a))}catch(e){console.error(e.message)}return o===l?o:p(a,s)||(Array.isArray(o)?o.forEach(e=>{m(e),w(a,{[e.themeFamily||T]:e.collection})}):m(o),p(a,s))},p=(t,s)=>{const a=`${S(t)}/${s}`;return A.get(a)},x=async t=>{if(!t)return;let s=V(t);if(s||(s=await k(t)),s&&s!==l&&s.accData)return(await P(s.packageName)).getText(s.accData)};export{x as A,M as T,D as f,k as n,V as u};
