const n=a=>(t,e)=>{t.metadata.i18n||(t.metadata.i18n={}),Object.defineProperty(t,e,{get(){return t.i18nBundles[a]},set(){}}),t.metadata.i18n[e]={bundleName:a,target:t}};export{n as i};
