import{b as t,r}from"./index-64f120e9.js";function e(){return"randomUUID"in crypto?crypto.randomUUID():window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16)}const o="useId"in t;function s(){return o?Reflect.get(t,"useId")():r.useRef(e()).current}export{s as u};
//# sourceMappingURL=useIsomorphicId-f5cd5f49.js.map
