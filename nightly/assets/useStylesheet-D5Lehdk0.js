import{I as f,R as d,f as g}from"./ManagedStyles-BCO68z9u.js";import{r as h}from"./index-C--kS4iy.js";import{u as y}from"./CustomElementsScope-DUj-UV8m.js";globalThis["@ui5/webcomponents-react"]??(globalThis["@ui5/webcomponents-react"]={});const n=globalThis["@ui5/webcomponents-react"];function l(){return Symbol.for(`@ui5/webcomponents-react/StyleStore-${f()}/Listeners`)}function i(){return Symbol.for(`@ui5/webcomponents-react/StyleStore-${f()}`)}const m={staticCssInjected:!1,componentsMap:new Map};function a(){var t;return n[t=l()]??(n[t]=[]),n[l()]}function u(){for(const t of a())t()}function c(){var t;return n[t=i()]??(n[t]=m),n[i()]}function w(t){return a().push(t),()=>{const o=a(),s=o.indexOf(t);s!==-1&&o.splice(s,1)}}const r={subscribe:w,getSnapshot:c,getServerSnapshot:()=>m,setStaticCssInjected:t=>{const e=c();n[i()]={...e,staticCssInjected:t},u()},mountComponent:t=>{const{componentsMap:e}=c();e.has(t)?e.set(t,e.get(t)+1):e.set(t,1),u()},unmountComponent:t=>{const{componentsMap:e}=c();e.has(t)&&e.set(t,e.get(t)-1),u()}};function I(t,e,o){const{staticCssInjected:s,componentsMap:b}=h.useSyncExternalStore(r.subscribe,r.getSnapshot,r.getServerSnapshot);y(()=>{const p=`${e}-${f()}`,S=(o==null?void 0:o.alwaysInject)||!s;return S&&(d(t,"data-ui5wcr-component",p),r.mountComponent(e)),()=>{S&&(r.unmountComponent(e),b.get(e)<=0&&g("data-ui5wcr-component",p))}},[t,s])}export{r as S,I as u};
