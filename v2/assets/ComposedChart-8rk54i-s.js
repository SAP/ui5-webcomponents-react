import{a as C,L as T,s as W,t as R,C as F,A as ie,b as B,e as q,v as oe,d as G,c as ee,h as se,g as le,u as ue,i as K,G as ce,j as Z,k as J,D as pe,p as fe,B as me,q as he}from"./ChartContainer-DueHAqem.js";import{e as f,r as de}from"./index-Bi_W_Jd4.js";import{L as ve}from"./Line-BsE5aZP5.js";import{S as ye,Z as be}from"./Scatter-Bf-q5KrD.js";import{X as Ae,Y as xe}from"./YAxisTicks-DDf6IVA-.js";var ge=["layout","type","stroke","connectNulls","isRange","ref"],Pe=["key"],te;function M(e){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(e)}function re(e,t){if(e==null)return{};var a=Oe(e,t),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function Oe(e,t){if(e==null)return{};var a={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;a[r]=e[r]}return a}function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},D.apply(this,arguments)}function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Q(Object(a),!0).forEach(function(r){E(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function Ee(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ne(r.key),r)}}function we(e,t,a){return t&&U(e.prototype,t),a&&U(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function Se(e,t,a){return t=$(t),_e(e,ae()?Reflect.construct(t,a||[],$(e).constructor):t.apply(e,a))}function _e(e,t){if(t&&(M(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return je(e)}function je(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ae=function(){return!!e})()}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},$(e)}function ke(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&X(e,t)}function X(e,t){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},X(e,t)}function E(e,t,a){return t=ne(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ne(e){var t=De(e,"string");return M(t)=="symbol"?t:t+""}function De(e,t){if(M(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(M(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var L=function(e){function t(){var a;Ee(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return a=Se(this,t,[].concat(n)),E(a,"state",{isAnimationFinished:!0}),E(a,"id",ue("recharts-area-")),E(a,"handleAnimationEnd",function(){var o=a.props.onAnimationEnd;a.setState({isAnimationFinished:!0}),K(o)&&o()}),E(a,"handleAnimationStart",function(){var o=a.props.onAnimationStart;a.setState({isAnimationFinished:!1}),K(o)&&o()}),a}return ke(t,e),we(t,[{key:"renderDots",value:function(r,n,i){var o=this.props.isAnimationActive,s=this.state.isAnimationFinished;if(o&&!s)return null;var u=this.props,l=u.dot,p=u.points,c=u.dataKey,m=C(this.props,!1),A=C(l,!0),x=p.map(function(v,O){var y=j(j(j({key:"dot-".concat(O),r:3},m),A),{},{index:O,cx:v.x,cy:v.y,dataKey:c,value:v.value,payload:v.payload,points:p});return t.renderDotItem(l,y)}),g={clipPath:r?"url(#clipPath-".concat(n?"":"dots-").concat(i,")"):null};return f.createElement(T,D({className:"recharts-area-dots"},g),x)}},{key:"renderHorizontalRect",value:function(r){var n=this.props,i=n.baseLine,o=n.points,s=n.strokeWidth,u=o[0].x,l=o[o.length-1].x,p=r*Math.abs(u-l),c=W(o.map(function(m){return m.y||0}));return R(i)&&typeof i=="number"?c=Math.max(i,c):i&&Array.isArray(i)&&i.length&&(c=Math.max(W(i.map(function(m){return m.y||0})),c)),R(c)?f.createElement("rect",{x:u<l?u:u-p,y:0,width:p,height:Math.floor(c+(s?parseInt("".concat(s),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var n=this.props,i=n.baseLine,o=n.points,s=n.strokeWidth,u=o[0].y,l=o[o.length-1].y,p=r*Math.abs(u-l),c=W(o.map(function(m){return m.x||0}));return R(i)&&typeof i=="number"?c=Math.max(i,c):i&&Array.isArray(i)&&i.length&&(c=Math.max(W(i.map(function(m){return m.x||0})),c)),R(c)?f.createElement("rect",{x:0,y:u<l?u:u-p,width:c+(s?parseInt("".concat(s),10):1),height:Math.floor(p)}):null}},{key:"renderClipRect",value:function(r){var n=this.props.layout;return n==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,n,i,o){var s=this.props,u=s.layout,l=s.type,p=s.stroke,c=s.connectNulls,m=s.isRange;s.ref;var A=re(s,ge);return f.createElement(T,{clipPath:i?"url(#clipPath-".concat(o,")"):null},f.createElement(F,D({},C(A,!0),{points:r,connectNulls:c,type:l,baseLine:n,layout:u,stroke:"none",className:"recharts-area-area"})),p!=="none"&&f.createElement(F,D({},C(this.props,!1),{className:"recharts-area-curve",layout:u,type:l,connectNulls:c,fill:"none",points:r})),p!=="none"&&m&&f.createElement(F,D({},C(this.props,!1),{className:"recharts-area-curve",layout:u,type:l,connectNulls:c,fill:"none",points:n})))}},{key:"renderAreaWithAnimation",value:function(r,n){var i=this,o=this.props,s=o.points,u=o.baseLine,l=o.isAnimationActive,p=o.animationBegin,c=o.animationDuration,m=o.animationEasing,A=o.animationId,x=this.state,g=x.prevPoints,v=x.prevBaseLine;return f.createElement(ie,{begin:p,duration:c,isActive:l,easing:m,from:{t:0},to:{t:1},key:"area-".concat(A),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(O){var y=O.t;if(g){var S=g.length/s.length,h=s.map(function(P,N){var k=Math.floor(N*S);if(g[k]){var _=g[k],I=B(_.x,P.x),z=B(_.y,P.y);return j(j({},P),{},{x:I(y),y:z(y)})}return P}),d;if(R(u)&&typeof u=="number"){var b=B(v,u);d=b(y)}else if(q(u)||oe(u)){var w=B(v,0);d=w(y)}else d=u.map(function(P,N){var k=Math.floor(N*S);if(v[k]){var _=v[k],I=B(_.x,P.x),z=B(_.y,P.y);return j(j({},P),{},{x:I(y),y:z(y)})}return P});return i.renderAreaStatically(h,d,r,n)}return f.createElement(T,null,f.createElement("defs",null,f.createElement("clipPath",{id:"animationClipPath-".concat(n)},i.renderClipRect(y))),f.createElement(T,{clipPath:"url(#animationClipPath-".concat(n,")")},i.renderAreaStatically(s,u,r,n)))})}},{key:"renderArea",value:function(r,n){var i=this.props,o=i.points,s=i.baseLine,u=i.isAnimationActive,l=this.state,p=l.prevPoints,c=l.prevBaseLine,m=l.totalLength;return u&&o&&o.length&&(!p&&m>0||!G(p,o)||!G(c,s))?this.renderAreaWithAnimation(r,n):this.renderAreaStatically(o,s,r,n)}},{key:"render",value:function(){var r,n=this.props,i=n.hide,o=n.dot,s=n.points,u=n.className,l=n.top,p=n.left,c=n.xAxis,m=n.yAxis,A=n.width,x=n.height,g=n.isAnimationActive,v=n.id;if(i||!s||!s.length)return null;var O=this.state.isAnimationFinished,y=s.length===1,S=ee("recharts-area",u),h=c&&c.allowDataOverflow,d=m&&m.allowDataOverflow,b=h||d,w=q(v)?this.id:v,P=(r=C(o,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},N=P.r,k=N===void 0?3:N,_=P.strokeWidth,I=_===void 0?2:_,z=se(o)?o:{},Y=z.clipDot,H=Y===void 0?!0:Y,V=k*2+I;return f.createElement(T,{className:S},h||d?f.createElement("defs",null,f.createElement("clipPath",{id:"clipPath-".concat(w)},f.createElement("rect",{x:h?p:p-A/2,y:d?l:l-x/2,width:h?A:A*2,height:d?x:x*2})),!H&&f.createElement("clipPath",{id:"clipPath-dots-".concat(w)},f.createElement("rect",{x:p-V/2,y:l-V/2,width:A+V,height:x+V}))):null,y?null:this.renderArea(b,w),(o||y)&&this.renderDots(b,H,w),(!g||O)&&le.renderCallByParent(this.props,s))}}],[{key:"getDerivedStateFromProps",value:function(r,n){return r.animationId!==n.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:n.curPoints,prevBaseLine:n.curBaseLine}:r.points!==n.curPoints||r.baseLine!==n.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}])}(de.PureComponent);te=L;E(L,"displayName","Area");E(L,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!ce.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});E(L,"getBaseValue",function(e,t,a,r){var n=e.layout,i=e.baseValue,o=t.props.baseValue,s=o??i;if(R(s)&&typeof s=="number")return s;var u=n==="horizontal"?r:a,l=u.scale.domain();if(u.type==="number"){var p=Math.max(l[0],l[1]),c=Math.min(l[0],l[1]);return s==="dataMin"?c:s==="dataMax"||p<0?p:Math.max(Math.min(l[0],l[1]),0)}return s==="dataMin"?l[0]:s==="dataMax"?l[1]:l[0]});E(L,"getComposedData",function(e){var t=e.props,a=e.item,r=e.xAxis,n=e.yAxis,i=e.xAxisTicks,o=e.yAxisTicks,s=e.bandSize,u=e.dataKey,l=e.stackedData,p=e.dataStartIndex,c=e.displayedData,m=e.offset,A=t.layout,x=l&&l.length,g=te.getBaseValue(t,a,r,n),v=A==="horizontal",O=!1,y=c.map(function(h,d){var b;x?b=l[p+d]:(b=Z(h,u),Array.isArray(b)?O=!0:b=[g,b]);var w=b[1]==null||x&&Z(h,u)==null;return v?{x:J({axis:r,ticks:i,bandSize:s,entry:h,index:d}),y:w?null:n.scale(b[1]),value:b,payload:h}:{x:w?null:r.scale(b[1]),y:J({axis:n,ticks:o,bandSize:s,entry:h,index:d}),value:b,payload:h}}),S;return x||O?S=y.map(function(h){var d=Array.isArray(h.value)?h.value[0]:null;return v?{x:h.x,y:d!=null&&h.y!=null?n.scale(d):null}:{x:d!=null?r.scale(d):null,y:h.y}}):S=v?n.scale(g):r.scale(g),j({points:y,baseLine:S,layout:A,isRange:O},m)});E(L,"renderDotItem",function(e,t){var a;if(f.isValidElement(e))a=f.cloneElement(e,t);else if(K(e))a=e(t);else{var r=ee("recharts-area-dot",typeof e!="boolean"?e.className:""),n=t.key,i=re(t,Pe);a=f.createElement(pe,D({},i,{key:n,className:r}))}return a});var Me=fe({chartName:"ComposedChart",GraphicalChild:[ve,L,me,ye],axisComponents:[{axisType:"xAxis",AxisComp:Ae},{axisType:"yAxis",AxisComp:xe},{axisType:"zAxis",AxisComp:be}],formatAxisMap:he});export{L as A,Me as C};
