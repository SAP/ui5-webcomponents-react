import{a as t,r}from"./index-ccf6a75d.js";function e(){return"randomUUID"in crypto?crypto.randomUUID():window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16)}const o="useId"in t;function a(){return o?Reflect.get(t,"useId")():r.useRef(e()).current}export{a as u};
//# sourceMappingURL=useIsomorphicId-8e9cbc05.js.map
