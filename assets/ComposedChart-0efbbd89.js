import{a as M,L as W,C as G,A as ne,i as ie,b as oe,G as se,g as le,c as U,D as ue,l as ce,k as fe,m as pe}from"./generateCategoricalChart-63f72a77.js";import{u as me,b as X,d as I,i as B,a as L,e as he,_ as ee,c as de}from"./ChartContainer-4f9246c2.js";import{c as H,g as q,h as $}from"./_baseForOwn-2252ef3e.js";import{R as d,r as ve}from"./index-f1f2c4b1.js";import{L as ye}from"./Line-e618674b.js";import{S as be,Z as Ae}from"./Scatter-92f34674.js";import{X as ge,Y as xe}from"./YAxisTicks-cf3bfdf0.js";var Pe=["layout","type","stroke","connectNulls","isRange","ref"];function z(e){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(e)}function Oe(e,t){if(e==null)return{};var i=_e(e,t),r,a;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function _e(e,t){if(e==null)return{};var i={},r=Object.keys(e),a,n;for(n=0;n<r.length;n++)a=r[n],!(t.indexOf(a)>=0)&&(i[a]=e[a]);return i}function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},j.apply(this,arguments)}function te(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),i.push.apply(i,r)}return i}function w(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?te(Object(i),!0).forEach(function(r){O(e,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):te(Object(i)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))})}return e}function Ee(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function re(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ae(r.key),r)}}function Se(e,t,i){return t&&re(e.prototype,t),i&&re(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function we(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Z(e,t)}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Z(e,t)}function ke(e){var t=Le();return function(){var r=Y(e),a;if(t){var n=Y(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return De(this,a)}}function De(e,t){if(t&&(z(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}function F(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Le(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},Y(e)}function O(e,t,i){return t=ae(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ae(e){var t=je(e,"string");return z(t)==="symbol"?t:String(t)}function je(e,t){if(z(e)!=="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var r=i.call(e,t||"default");if(z(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var N=function(e){we(i,e);var t=ke(i);function i(){var r;Ee(this,i);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return r=t.call.apply(t,[this].concat(n)),O(F(r),"state",{isAnimationFinished:!0}),O(F(r),"id",me("recharts-area-")),O(F(r),"handleAnimationEnd",function(){var o=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),H(o)&&o()}),O(F(r),"handleAnimationStart",function(){var o=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),H(o)&&o()}),r}return Se(i,[{key:"renderDots",value:function(a,n,l){var o=this.props.isAnimationActive,u=this.state.isAnimationFinished;if(o&&!u)return null;var s=this.props,c=s.dot,m=s.points,f=s.dataKey,h=M(this.props),b=M(c,!0),A=m.map(function(y,P){var p=w(w(w({key:"dot-".concat(P),r:3},h),b),{},{dataKey:f,cx:y.x,cy:y.y,index:P,value:y.value,payload:y.payload});return i.renderDotItem(c,p)}),g={clipPath:a?"url(#clipPath-".concat(n?"":"dots-").concat(l,")"):null};return d.createElement(W,j({className:"recharts-area-dots"},g),A)}},{key:"renderHorizontalRect",value:function(a){var n=this.props,l=n.baseLine,o=n.points,u=n.strokeWidth,s=o[0].x,c=o[o.length-1].x,m=a*Math.abs(s-c),f=X(o.map(function(h){return h.y||0}));return I(l)&&typeof l=="number"?f=Math.max(l,f):l&&q(l)&&l.length&&(f=Math.max(X(l.map(function(h){return h.y||0})),f)),I(f)?d.createElement("rect",{x:s<c?s:s-m,y:0,width:m,height:Math.floor(f+(u?parseInt("".concat(u),10):1))}):null}},{key:"renderVerticalRect",value:function(a){var n=this.props,l=n.baseLine,o=n.points,u=n.strokeWidth,s=o[0].y,c=o[o.length-1].y,m=a*Math.abs(s-c),f=X(o.map(function(h){return h.x||0}));return I(l)&&typeof l=="number"?f=Math.max(l,f):l&&q(l)&&l.length&&(f=Math.max(X(l.map(function(h){return h.x||0})),f)),I(f)?d.createElement("rect",{x:0,y:s<c?s:s-m,width:f+(u?parseInt("".concat(u),10):1),height:Math.floor(m)}):null}},{key:"renderClipRect",value:function(a){var n=this.props.layout;return n==="vertical"?this.renderVerticalRect(a):this.renderHorizontalRect(a)}},{key:"renderAreaStatically",value:function(a,n,l,o){var u=this.props,s=u.layout,c=u.type,m=u.stroke,f=u.connectNulls,h=u.isRange;u.ref;var b=Oe(u,Pe);return d.createElement(W,{clipPath:l?"url(#clipPath-".concat(o,")"):null},d.createElement(G,j({},M(b,!0),{points:a,connectNulls:f,type:c,baseLine:n,layout:s,stroke:"none",className:"recharts-area-area"})),m!=="none"&&d.createElement(G,j({},M(this.props),{className:"recharts-area-curve",layout:s,type:c,connectNulls:f,fill:"none",points:a})),m!=="none"&&h&&d.createElement(G,j({},M(this.props),{className:"recharts-area-curve",layout:s,type:c,connectNulls:f,fill:"none",points:n})))}},{key:"renderAreaWithAnimation",value:function(a,n){var l=this,o=this.props,u=o.points,s=o.baseLine,c=o.isAnimationActive,m=o.animationBegin,f=o.animationDuration,h=o.animationEasing,b=o.animationId,A=this.state,g=A.prevPoints,y=A.prevBaseLine;return d.createElement(ne,{begin:m,duration:f,isActive:c,easing:h,from:{t:0},to:{t:1},key:"area-".concat(b),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(P){var p=P.t;if(g){var E=g.length/u.length,_=u.map(function(x,C){var D=Math.floor(C*E);if(g[D]){var S=g[D],V=B(S.x,x.x),T=B(S.y,x.y);return w(w({},x),{},{x:V(p),y:T(p)})}return x}),v;if(I(s)&&typeof s=="number"){var k=B(y,s);v=k(p)}else if(L(s)||he(s)){var R=B(y,0);v=R(p)}else v=s.map(function(x,C){var D=Math.floor(C*E);if(y[D]){var S=y[D],V=B(S.x,x.x),T=B(S.y,x.y);return w(w({},x),{},{x:V(p),y:T(p)})}return x});return l.renderAreaStatically(_,v,a,n)}return d.createElement(W,null,d.createElement("defs",null,d.createElement("clipPath",{id:"animationClipPath-".concat(n)},l.renderClipRect(p))),d.createElement(W,{clipPath:"url(#animationClipPath-".concat(n,")")},l.renderAreaStatically(u,s,a,n)))})}},{key:"renderArea",value:function(a,n){var l=this.props,o=l.points,u=l.baseLine,s=l.isAnimationActive,c=this.state,m=c.prevPoints,f=c.prevBaseLine,h=c.totalLength;return s&&o&&o.length&&(!m&&h>0||!ee(m,o)||!ee(f,u))?this.renderAreaWithAnimation(a,n):this.renderAreaStatically(o,u,a,n)}},{key:"render",value:function(){var a,n=this.props,l=n.hide,o=n.dot,u=n.points,s=n.className,c=n.top,m=n.left,f=n.xAxis,h=n.yAxis,b=n.width,A=n.height,g=n.isAnimationActive,y=n.id;if(l||!u||!u.length)return null;var P=this.state.isAnimationFinished,p=u.length===1,E=de("recharts-area",s),_=f&&f.allowDataOverflow,v=h&&h.allowDataOverflow,k=_||v,R=L(y)?this.id:y,x=(a=M(o))!==null&&a!==void 0?a:{r:3,strokeWidth:2},C=x.r,D=C===void 0?3:C,S=x.strokeWidth,V=S===void 0?2:S,T=ie(o)?o:{},J=T.clipDot,Q=J===void 0?!0:J,K=D*2+V;return d.createElement(W,{className:E},_||v?d.createElement("defs",null,d.createElement("clipPath",{id:"clipPath-".concat(R)},d.createElement("rect",{x:_?m:m-b/2,y:v?c:c-A/2,width:_?b:b*2,height:v?A:A*2})),!Q&&d.createElement("clipPath",{id:"clipPath-dots-".concat(R)},d.createElement("rect",{x:m-K/2,y:c-K/2,width:b+K,height:A+K}))):null,p?null:this.renderArea(k,R),(o||p)&&this.renderDots(k,Q,R),(!g||P)&&oe.renderCallByParent(this.props,u))}}],[{key:"getDerivedStateFromProps",value:function(a,n){return a.animationId!==n.prevAnimationId?{prevAnimationId:a.animationId,curPoints:a.points,curBaseLine:a.baseLine,prevPoints:n.curPoints,prevBaseLine:n.curBaseLine}:a.points!==n.curPoints||a.baseLine!==n.curBaseLine?{curPoints:a.points,curBaseLine:a.baseLine}:null}}]),i}(ve.PureComponent);O(N,"displayName","Area");O(N,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!se.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});O(N,"getBaseValue",function(e,t,i,r){var a=e.layout,n=e.baseValue,l=t.props.baseValue,o=l??n;if(I(o)&&typeof o=="number")return o;var u=a==="horizontal"?r:i,s=u.scale.domain();if(u.type==="number"){var c=Math.max(s[0],s[1]),m=Math.min(s[0],s[1]);return o==="dataMin"?m:o==="dataMax"||c<0?c:Math.max(Math.min(s[0],s[1]),0)}return o==="dataMin"?s[0]:o==="dataMax"?s[1]:s[0]});O(N,"getComposedData",function(e){var t=e.props,i=e.item,r=e.xAxis,a=e.yAxis,n=e.xAxisTicks,l=e.yAxisTicks,o=e.bandSize,u=e.dataKey,s=e.stackedData,c=e.dataStartIndex,m=e.displayedData,f=e.offset,h=t.layout,b=s&&s.length,A=N.getBaseValue(t,i,r,a),g=!1,y=m.map(function(p,E){var _=le(p,u),v;b?v=s[c+E]:(v=_,q(v)?g=!0:v=[A,v]);var k=L(v[1])||b&&L(_);return h==="horizontal"?{x:U({axis:r,ticks:n,bandSize:o,entry:p,index:E}),y:k?null:a.scale(v[1]),value:v,payload:p}:{x:k?null:r.scale(v[1]),y:U({axis:a,ticks:l,bandSize:o,entry:p,index:E}),value:v,payload:p}}),P;return b||g?P=y.map(function(p){return h==="horizontal"?{x:p.x,y:!L($(p,"value[0]"))&&!L($(p,"y"))?a.scale($(p,"value[0]")):null}:{x:L($(p,"value[0]"))?null:r.scale($(p,"value[0]")),y:p.y}}):h==="horizontal"?P=a.scale(A):P=r.scale(A),w({points:y,baseLine:P,layout:h,isRange:g},f)});O(N,"renderDotItem",function(e,t){var i;return d.isValidElement(e)?i=d.cloneElement(e,t):H(e)?i=e(t):i=d.createElement(ue,j({},t,{className:"recharts-area-dot"})),i});var Ve=ce({chartName:"ComposedChart",GraphicalChild:[ye,N,fe,be],axisComponents:[{axisType:"xAxis",AxisComp:ge},{axisType:"yAxis",AxisComp:xe},{axisType:"zAxis",AxisComp:Ae}],formatAxisMap:pe});export{N as A,Ve as C};
//# sourceMappingURL=ComposedChart-0efbbd89.js.map
