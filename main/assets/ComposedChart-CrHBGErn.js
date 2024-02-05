import{L as V,C as X,A as ne,a as ie,G as oe,g as Z,b as J,D as se,c as le,B as ue,f as ce}from"./generateCategoricalChart-9CDdS-_F.js";import{R as h,r as fe}from"./index-OjgoNOWw.js";import{u as pe,a as C,m as F,g as I,i as B,d as Q,h as me,b as U,c as he,e as de}from"./ChartContainer-RnltZ-OA.js";import{b as Y}from"./_baseForOwn-z3VktcOy.js";import{L as ve}from"./Line-bBHYDdwk.js";import{S as ye,Z as be}from"./Scatter-V55KU_pm.js";import{X as Ae,Y as ge}from"./YAxisTicks-S72khVRh.js";var xe=["layout","type","stroke","connectNulls","isRange","ref"],re;function M(e){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(e)}function Pe(e,t){if(e==null)return{};var i=Oe(e,t),r,a;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Oe(e,t){if(e==null)return{};var i={},r=Object.keys(e),a,n;for(n=0;n<r.length;n++)a=r[n],!(t.indexOf(a)>=0)&&(i[a]=e[a]);return i}function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},D.apply(this,arguments)}function ee(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),i.push.apply(i,r)}return i}function _(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?ee(Object(i),!0).forEach(function(r){E(e,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ee(Object(i)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))})}return e}function Ee(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function te(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ae(r.key),r)}}function Se(e,t,i){return t&&te(e.prototype,t),i&&te(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function we(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}function H(e,t){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},H(e,t)}function _e(e){var t=ke();return function(){var r=K(e),a;if(t){var n=K(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return je(this,a)}}function je(e,t){if(t&&(M(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return W(e)}function W(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ke(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},K(e)}function E(e,t,i){return t=ae(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ae(e){var t=De(e,"string");return M(t)==="symbol"?t:String(t)}function De(e,t){if(M(e)!=="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var r=i.call(e,t||"default");if(M(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var L=function(e){we(i,e);var t=_e(i);function i(){var r;Ee(this,i);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return r=t.call.apply(t,[this].concat(n)),E(W(r),"state",{isAnimationFinished:!0}),E(W(r),"id",pe("recharts-area-")),E(W(r),"handleAnimationEnd",function(){var o=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),Y(o)&&o()}),E(W(r),"handleAnimationStart",function(){var o=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),Y(o)&&o()}),r}return Se(i,[{key:"renderDots",value:function(a,n,l){var o=this.props.isAnimationActive,u=this.state.isAnimationFinished;if(o&&!u)return null;var s=this.props,c=s.dot,p=s.points,f=s.dataKey,m=C(this.props,!1),g=C(c,!0),x=p.map(function(y,S){var b=_(_(_({key:"dot-".concat(S),r:3},m),g),{},{dataKey:f,cx:y.x,cy:y.y,index:S,value:y.value,payload:y.payload});return i.renderDotItem(c,b)}),P={clipPath:a?"url(#clipPath-".concat(n?"":"dots-").concat(l,")"):null};return h.createElement(V,D({className:"recharts-area-dots"},P),x)}},{key:"renderHorizontalRect",value:function(a){var n=this.props,l=n.baseLine,o=n.points,u=n.strokeWidth,s=o[0].x,c=o[o.length-1].x,p=a*Math.abs(s-c),f=F(o.map(function(m){return m.y||0}));return I(l)&&typeof l=="number"?f=Math.max(l,f):l&&Array.isArray(l)&&l.length&&(f=Math.max(F(l.map(function(m){return m.y||0})),f)),I(f)?h.createElement("rect",{x:s<c?s:s-p,y:0,width:p,height:Math.floor(f+(u?parseInt("".concat(u),10):1))}):null}},{key:"renderVerticalRect",value:function(a){var n=this.props,l=n.baseLine,o=n.points,u=n.strokeWidth,s=o[0].y,c=o[o.length-1].y,p=a*Math.abs(s-c),f=F(o.map(function(m){return m.x||0}));return I(l)&&typeof l=="number"?f=Math.max(l,f):l&&Array.isArray(l)&&l.length&&(f=Math.max(F(l.map(function(m){return m.x||0})),f)),I(f)?h.createElement("rect",{x:0,y:s<c?s:s-p,width:f+(u?parseInt("".concat(u),10):1),height:Math.floor(p)}):null}},{key:"renderClipRect",value:function(a){var n=this.props.layout;return n==="vertical"?this.renderVerticalRect(a):this.renderHorizontalRect(a)}},{key:"renderAreaStatically",value:function(a,n,l,o){var u=this.props,s=u.layout,c=u.type,p=u.stroke,f=u.connectNulls,m=u.isRange;u.ref;var g=Pe(u,xe);return h.createElement(V,{clipPath:l?"url(#clipPath-".concat(o,")"):null},h.createElement(X,D({},C(g,!0),{points:a,connectNulls:f,type:c,baseLine:n,layout:s,stroke:"none",className:"recharts-area-area"})),p!=="none"&&h.createElement(X,D({},C(this.props,!1),{className:"recharts-area-curve",layout:s,type:c,connectNulls:f,fill:"none",points:a})),p!=="none"&&m&&h.createElement(X,D({},C(this.props,!1),{className:"recharts-area-curve",layout:s,type:c,connectNulls:f,fill:"none",points:n})))}},{key:"renderAreaWithAnimation",value:function(a,n){var l=this,o=this.props,u=o.points,s=o.baseLine,c=o.isAnimationActive,p=o.animationBegin,f=o.animationDuration,m=o.animationEasing,g=o.animationId,x=this.state,P=x.prevPoints,y=x.prevBaseLine;return h.createElement(ne,{begin:p,duration:f,isActive:c,easing:m,from:{t:0},to:{t:1},key:"area-".concat(g),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(S){var b=S.t;if(P){var v=P.length/u.length,A=u.map(function(O,N){var k=Math.floor(N*v);if(P[k]){var w=P[k],z=B(w.x,O.x),T=B(w.y,O.y);return _(_({},O),{},{x:z(b),y:T(b)})}return O}),d;if(I(s)&&typeof s=="number"){var j=B(y,s);d=j(b)}else if(Q(s)||me(s)){var R=B(y,0);d=R(b)}else d=s.map(function(O,N){var k=Math.floor(N*v);if(y[k]){var w=y[k],z=B(w.x,O.x),T=B(w.y,O.y);return _(_({},O),{},{x:z(b),y:T(b)})}return O});return l.renderAreaStatically(A,d,a,n)}return h.createElement(V,null,h.createElement("defs",null,h.createElement("clipPath",{id:"animationClipPath-".concat(n)},l.renderClipRect(b))),h.createElement(V,{clipPath:"url(#animationClipPath-".concat(n,")")},l.renderAreaStatically(u,s,a,n)))})}},{key:"renderArea",value:function(a,n){var l=this.props,o=l.points,u=l.baseLine,s=l.isAnimationActive,c=this.state,p=c.prevPoints,f=c.prevBaseLine,m=c.totalLength;return s&&o&&o.length&&(!p&&m>0||!U(p,o)||!U(f,u))?this.renderAreaWithAnimation(a,n):this.renderAreaStatically(o,u,a,n)}},{key:"render",value:function(){var a,n=this.props,l=n.hide,o=n.dot,u=n.points,s=n.className,c=n.top,p=n.left,f=n.xAxis,m=n.yAxis,g=n.width,x=n.height,P=n.isAnimationActive,y=n.id;if(l||!u||!u.length)return null;var S=this.state.isAnimationFinished,b=u.length===1,v=he("recharts-area",s),A=f&&f.allowDataOverflow,d=m&&m.allowDataOverflow,j=A||d,R=Q(y)?this.id:y,O=(a=C(o,!1))!==null&&a!==void 0?a:{r:3,strokeWidth:2},N=O.r,k=N===void 0?3:N,w=O.strokeWidth,z=w===void 0?2:w,T=de(o)?o:{},G=T.clipDot,q=G===void 0?!0:G,$=k*2+z;return h.createElement(V,{className:v},A||d?h.createElement("defs",null,h.createElement("clipPath",{id:"clipPath-".concat(R)},h.createElement("rect",{x:A?p:p-g/2,y:d?c:c-x/2,width:A?g:g*2,height:d?x:x*2})),!q&&h.createElement("clipPath",{id:"clipPath-dots-".concat(R)},h.createElement("rect",{x:p-$/2,y:c-$/2,width:g+$,height:x+$}))):null,b?null:this.renderArea(j,R),(o||b)&&this.renderDots(j,q,R),(!P||S)&&ie.renderCallByParent(this.props,u))}}],[{key:"getDerivedStateFromProps",value:function(a,n){return a.animationId!==n.prevAnimationId?{prevAnimationId:a.animationId,curPoints:a.points,curBaseLine:a.baseLine,prevPoints:n.curPoints,prevBaseLine:n.curBaseLine}:a.points!==n.curPoints||a.baseLine!==n.curBaseLine?{curPoints:a.points,curBaseLine:a.baseLine}:null}}]),i}(fe.PureComponent);re=L;E(L,"displayName","Area");E(L,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!oe.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});E(L,"getBaseValue",function(e,t,i,r){var a=e.layout,n=e.baseValue,l=t.props.baseValue,o=l??n;if(I(o)&&typeof o=="number")return o;var u=a==="horizontal"?r:i,s=u.scale.domain();if(u.type==="number"){var c=Math.max(s[0],s[1]),p=Math.min(s[0],s[1]);return o==="dataMin"?p:o==="dataMax"||c<0?c:Math.max(Math.min(s[0],s[1]),0)}return o==="dataMin"?s[0]:o==="dataMax"?s[1]:s[0]});E(L,"getComposedData",function(e){var t=e.props,i=e.item,r=e.xAxis,a=e.yAxis,n=e.xAxisTicks,l=e.yAxisTicks,o=e.bandSize,u=e.dataKey,s=e.stackedData,c=e.dataStartIndex,p=e.displayedData,f=e.offset,m=t.layout,g=s&&s.length,x=re.getBaseValue(t,i,r,a),P=m==="horizontal",y=!1,S=p.map(function(v,A){var d;g?d=s[c+A]:(d=Z(v,u),Array.isArray(d)?y=!0:d=[x,d]);var j=d[1]==null||g&&Z(v,u)==null;return P?{x:J({axis:r,ticks:n,bandSize:o,entry:v,index:A}),y:j?null:a.scale(d[1]),value:d,payload:v}:{x:j?null:r.scale(d[1]),y:J({axis:a,ticks:l,bandSize:o,entry:v,index:A}),value:d,payload:v}}),b;return g||y?b=S.map(function(v){var A=Array.isArray(v.value)?v.value[0]:null;return P?{x:v.x,y:A!=null&&v.y!=null?a.scale(A):null}:{x:A!=null?r.scale(A):null,y:v.y}}):b=P?a.scale(x):r.scale(x),_({points:S,baseLine:b,layout:m,isRange:y},f)});E(L,"renderDotItem",function(e,t){var i;return h.isValidElement(e)?i=h.cloneElement(e,t):Y(e)?i=e(t):i=h.createElement(se,D({},t,{className:"recharts-area-dot"})),i});var ze=le({chartName:"ComposedChart",GraphicalChild:[ve,L,ue,ye],axisComponents:[{axisType:"xAxis",AxisComp:Ae},{axisType:"yAxis",AxisComp:ge},{axisType:"zAxis",AxisComp:be}],formatAxisMap:ce});export{L as A,ze as C};
