import{u as g,f as m,r as y}from"./useIsomorphicLayoutEffect-puIvDQED.js";import{r as b}from"./index-BP8_t0zE.js";var S={exports:{}},d={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=b;function v(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var w=typeof Object.is=="function"?Object.is:v,x=r.useState,C=r.useEffect,E=r.useLayoutEffect,j=r.useDebugValue;function M(t,e){var n=e(),u=x({inst:{value:n,getSnapshot:e}}),o=u[0].inst,c=u[1];return E(function(){o.value=n,o.getSnapshot=e,l(o)&&c({inst:o})},[t,n,e]),C(function(){return l(o)&&c({inst:o}),t(function(){l(o)&&c({inst:o})})},[t]),j(n),n}function l(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!w(t,n)}catch{return!0}}function I(t,e){return e()}var T=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?I:M;d.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:T;S.exports=d;var k=S.exports;const s=Symbol.for("@ui5/webcomponents-react/StyleStore/Listeners"),i=Symbol.for("@ui5/webcomponents-react/StyleStore"),q={staticCssInjected:!1,componentsMap:new Map};function h(){return globalThis[s]??(globalThis[s]=[]),globalThis[s]}function p(){for(const t of h())t()}function a(){return globalThis[i]??(globalThis[i]=q),globalThis[i]}function D(t){const e=h();return globalThis[s]=[...e,t],()=>{globalThis[s]=e.filter(n=>n!==t)}}const f={subscribe:D,getSnapshot:a,setStaticCssInjected:t=>{const e=a();globalThis[i]={...e,staticCssInjected:t},p()},mountComponent:t=>{const{componentsMap:e}=a();e.has(t)?e.set(t,e.get(t)+1):e.set(t,1),p()},unmountComponent:t=>{const{componentsMap:e}=a();e.has(t)&&e.set(t,e.get(t)-1),p()}};function U(t,e){const{staticCssInjected:n,componentsMap:u}=k.useSyncExternalStore(f.subscribe,f.getSnapshot);g(()=>{const o=!n;return o&&(m(t,"data-ui5wcr-component",e),f.mountComponent(e)),()=>{o&&(f.unmountComponent(e),u.get(e)<=0&&y("data-ui5wcr-component",e))}},[t,n])}export{f as S,U as u};
