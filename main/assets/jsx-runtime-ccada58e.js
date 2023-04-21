import{r as u}from"./index-f1f749bf.js";var _={},l={get exports(){return _},set exports(t){_=t}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=u,x=Symbol.for("react.element"),y=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function i(t,r,p){var e,o={},s=null,f=null;p!==void 0&&(s=""+p),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(f=r.ref);for(e in r)a.call(r,e)&&!v.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:x,type:t,key:s,ref:f,props:o,_owner:c.current}}n.Fragment=y;n.jsx=i;n.jsxs=i;(function(t){t.exports=n})(l);export{_ as j};
//# sourceMappingURL=jsx-runtime-ccada58e.js.map
