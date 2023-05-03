import{b as t,r}from"./index-ebeaab24.js";function e(){return"randomUUID"in crypto?crypto.randomUUID():window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16)}const o="useId"in t;function s(){return o?Reflect.get(t,"useId")():r.useRef(e()).current}export{s as u};
//# sourceMappingURL=useIsomorphicId-4be7c5e3.js.map
