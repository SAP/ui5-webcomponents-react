import{L as T,C as K,A as ie,a as oe,G as se,g as q,b as Z,D as le,c as ue,B as ce,f as fe}from"./generateCategoricalChart-cGmIKBqB.js";import{a as p,r as pe}from"./index-BP8_t0zE.js";import{u as me,a as C,m as $,g as B,i as R,d as J,h as he,b as Q,c as te,e as de}from"./ChartContainer-DVdCevVS.js";import{b as X}from"./_baseForOwn-B3hW39GE.js";import{L as ve}from"./Line-BMBxYTgz.js";import{S as ye,Z as be}from"./Scatter-DJdgne93.js";import{X as Ae,Y as ge}from"./YAxisTicks-94BMNbrl.js";var xe=["layout","type","stroke","connectNulls","isRange","ref"],re;function M(e){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(e)}function Pe(e,t){if(e==null)return{};var a=Oe(e,t),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function Oe(e,t){if(e==null)return{};var a={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},D.apply(this,arguments)}function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?U(Object(a),!0).forEach(function(r){E(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function Ee(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ee(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ne(r.key),r)}}function we(e,t,a){return t&&ee(e.prototype,t),a&&ee(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function Se(e,t,a){return t=F(t),_e(e,ae()?Reflect.construct(t,a||[],F(e).constructor):t.apply(e,a))}function _e(e,t){if(t&&(M(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return V(e)}function ae(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ae=function(){return!!e})()}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},F(e)}function V(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function je(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Y(e,t)}function Y(e,t){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},Y(e,t)}function E(e,t,a){return t=ne(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ne(e){var t=ke(e,"string");return M(t)=="symbol"?t:String(t)}function ke(e,t){if(M(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(M(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var L=function(e){je(t,e);function t(){var a;Ee(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return a=Se(this,t,[].concat(n)),E(V(a),"state",{isAnimationFinished:!0}),E(V(a),"id",me("recharts-area-")),E(V(a),"handleAnimationEnd",function(){var o=a.props.onAnimationEnd;a.setState({isAnimationFinished:!0}),X(o)&&o()}),E(V(a),"handleAnimationStart",function(){var o=a.props.onAnimationStart;a.setState({isAnimationFinished:!1}),X(o)&&o()}),a}return we(t,[{key:"renderDots",value:function(r,n,i){var o=this.props.isAnimationActive,s=this.state.isAnimationFinished;if(o&&!s)return null;var u=this.props,l=u.dot,f=u.points,c=u.dataKey,m=C(this.props,!1),A=C(l,!0),g=f.map(function(v,O){var y=j(j(j({key:"dot-".concat(O),r:3},m),A),{},{index:O,cx:v.x,cy:v.y,dataKey:c,value:v.value,payload:v.payload,points:f});return t.renderDotItem(l,y)}),x={clipPath:r?"url(#clipPath-".concat(n?"":"dots-").concat(i,")"):null};return p.createElement(T,D({className:"recharts-area-dots"},x),g)}},{key:"renderHorizontalRect",value:function(r){var n=this.props,i=n.baseLine,o=n.points,s=n.strokeWidth,u=o[0].x,l=o[o.length-1].x,f=r*Math.abs(u-l),c=$(o.map(function(m){return m.y||0}));return B(i)&&typeof i=="number"?c=Math.max(i,c):i&&Array.isArray(i)&&i.length&&(c=Math.max($(i.map(function(m){return m.y||0})),c)),B(c)?p.createElement("rect",{x:u<l?u:u-f,y:0,width:f,height:Math.floor(c+(s?parseInt("".concat(s),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var n=this.props,i=n.baseLine,o=n.points,s=n.strokeWidth,u=o[0].y,l=o[o.length-1].y,f=r*Math.abs(u-l),c=$(o.map(function(m){return m.x||0}));return B(i)&&typeof i=="number"?c=Math.max(i,c):i&&Array.isArray(i)&&i.length&&(c=Math.max($(i.map(function(m){return m.x||0})),c)),B(c)?p.createElement("rect",{x:0,y:u<l?u:u-f,width:c+(s?parseInt("".concat(s),10):1),height:Math.floor(f)}):null}},{key:"renderClipRect",value:function(r){var n=this.props.layout;return n==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,n,i,o){var s=this.props,u=s.layout,l=s.type,f=s.stroke,c=s.connectNulls,m=s.isRange;s.ref;var A=Pe(s,xe);return p.createElement(T,{clipPath:i?"url(#clipPath-".concat(o,")"):null},p.createElement(K,D({},C(A,!0),{points:r,connectNulls:c,type:l,baseLine:n,layout:u,stroke:"none",className:"recharts-area-area"})),f!=="none"&&p.createElement(K,D({},C(this.props,!1),{className:"recharts-area-curve",layout:u,type:l,connectNulls:c,fill:"none",points:r})),f!=="none"&&m&&p.createElement(K,D({},C(this.props,!1),{className:"recharts-area-curve",layout:u,type:l,connectNulls:c,fill:"none",points:n})))}},{key:"renderAreaWithAnimation",value:function(r,n){var i=this,o=this.props,s=o.points,u=o.baseLine,l=o.isAnimationActive,f=o.animationBegin,c=o.animationDuration,m=o.animationEasing,A=o.animationId,g=this.state,x=g.prevPoints,v=g.prevBaseLine;return p.createElement(ie,{begin:f,duration:c,isActive:l,easing:m,from:{t:0},to:{t:1},key:"area-".concat(A),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(O){var y=O.t;if(x){var S=x.length/s.length,h=s.map(function(P,N){var k=Math.floor(N*S);if(x[k]){var _=x[k],I=R(_.x,P.x),z=R(_.y,P.y);return j(j({},P),{},{x:I(y),y:z(y)})}return P}),d;if(B(u)&&typeof u=="number"){var b=R(v,u);d=b(y)}else if(J(u)||he(u)){var w=R(v,0);d=w(y)}else d=u.map(function(P,N){var k=Math.floor(N*S);if(v[k]){var _=v[k],I=R(_.x,P.x),z=R(_.y,P.y);return j(j({},P),{},{x:I(y),y:z(y)})}return P});return i.renderAreaStatically(h,d,r,n)}return p.createElement(T,null,p.createElement("defs",null,p.createElement("clipPath",{id:"animationClipPath-".concat(n)},i.renderClipRect(y))),p.createElement(T,{clipPath:"url(#animationClipPath-".concat(n,")")},i.renderAreaStatically(s,u,r,n)))})}},{key:"renderArea",value:function(r,n){var i=this.props,o=i.points,s=i.baseLine,u=i.isAnimationActive,l=this.state,f=l.prevPoints,c=l.prevBaseLine,m=l.totalLength;return u&&o&&o.length&&(!f&&m>0||!Q(f,o)||!Q(c,s))?this.renderAreaWithAnimation(r,n):this.renderAreaStatically(o,s,r,n)}},{key:"render",value:function(){var r,n=this.props,i=n.hide,o=n.dot,s=n.points,u=n.className,l=n.top,f=n.left,c=n.xAxis,m=n.yAxis,A=n.width,g=n.height,x=n.isAnimationActive,v=n.id;if(i||!s||!s.length)return null;var O=this.state.isAnimationFinished,y=s.length===1,S=te("recharts-area",u),h=c&&c.allowDataOverflow,d=m&&m.allowDataOverflow,b=h||d,w=J(v)?this.id:v,P=(r=C(o,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},N=P.r,k=N===void 0?3:N,_=P.strokeWidth,I=_===void 0?2:_,z=de(o)?o:{},H=z.clipDot,G=H===void 0?!0:H,W=k*2+I;return p.createElement(T,{className:S},h||d?p.createElement("defs",null,p.createElement("clipPath",{id:"clipPath-".concat(w)},p.createElement("rect",{x:h?f:f-A/2,y:d?l:l-g/2,width:h?A:A*2,height:d?g:g*2})),!G&&p.createElement("clipPath",{id:"clipPath-dots-".concat(w)},p.createElement("rect",{x:f-W/2,y:l-W/2,width:A+W,height:g+W}))):null,y?null:this.renderArea(b,w),(o||y)&&this.renderDots(b,G,w),(!x||O)&&oe.renderCallByParent(this.props,s))}}],[{key:"getDerivedStateFromProps",value:function(r,n){return r.animationId!==n.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:n.curPoints,prevBaseLine:n.curBaseLine}:r.points!==n.curPoints||r.baseLine!==n.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}]),t}(pe.PureComponent);re=L;E(L,"displayName","Area");E(L,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!se.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});E(L,"getBaseValue",function(e,t,a,r){var n=e.layout,i=e.baseValue,o=t.props.baseValue,s=o??i;if(B(s)&&typeof s=="number")return s;var u=n==="horizontal"?r:a,l=u.scale.domain();if(u.type==="number"){var f=Math.max(l[0],l[1]),c=Math.min(l[0],l[1]);return s==="dataMin"?c:s==="dataMax"||f<0?f:Math.max(Math.min(l[0],l[1]),0)}return s==="dataMin"?l[0]:s==="dataMax"?l[1]:l[0]});E(L,"getComposedData",function(e){var t=e.props,a=e.item,r=e.xAxis,n=e.yAxis,i=e.xAxisTicks,o=e.yAxisTicks,s=e.bandSize,u=e.dataKey,l=e.stackedData,f=e.dataStartIndex,c=e.displayedData,m=e.offset,A=t.layout,g=l&&l.length,x=re.getBaseValue(t,a,r,n),v=A==="horizontal",O=!1,y=c.map(function(h,d){var b;g?b=l[f+d]:(b=q(h,u),Array.isArray(b)?O=!0:b=[x,b]);var w=b[1]==null||g&&q(h,u)==null;return v?{x:Z({axis:r,ticks:i,bandSize:s,entry:h,index:d}),y:w?null:n.scale(b[1]),value:b,payload:h}:{x:w?null:r.scale(b[1]),y:Z({axis:n,ticks:o,bandSize:s,entry:h,index:d}),value:b,payload:h}}),S;return g||O?S=y.map(function(h){var d=Array.isArray(h.value)?h.value[0]:null;return v?{x:h.x,y:d!=null&&h.y!=null?n.scale(d):null}:{x:d!=null?r.scale(d):null,y:h.y}}):S=v?n.scale(x):r.scale(x),j({points:y,baseLine:S,layout:A,isRange:O},m)});E(L,"renderDotItem",function(e,t){var a;if(p.isValidElement(e))a=p.cloneElement(e,t);else if(X(e))a=e(t);else{var r=te("recharts-area-dot",typeof e!="boolean"?e.className:"");a=p.createElement(le,D({},t,{className:r}))}return a});var Ie=ue({chartName:"ComposedChart",GraphicalChild:[ve,L,ce,ye],axisComponents:[{axisType:"xAxis",AxisComp:Ae},{axisType:"yAxis",AxisComp:ge},{axisType:"zAxis",AxisComp:be}],formatAxisMap:fe});export{L as A,Ie as C};
