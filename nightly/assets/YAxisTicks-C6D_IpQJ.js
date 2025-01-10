import{r as G,e as b}from"./index-CjmQ2z5u.js";import{a1 as Le,s as j,G as De,a2 as ee,I as Fe,b as $,K as Ge,a3 as te,d as N,c as B,M as ye,L as pe,x as Be,r as Ye,a4 as ue,a5 as se,a6 as Re,a7 as Me,a8 as We,H as me,a9 as Pe,aa as Z,ab as He,ac as Xe}from"./ChartContainer-C4C0ulWl.js";import{d as Ke}from"./debounce-D7W5PopO.js";import{j as M}from"./jsx-runtime-CLpGMVip.js";import{T as ke}from"./ThemingParameters-B358vlzA.js";import{t as ne,g as W}from"./useTooltipFormatter-6ghebvKv.js";import{d as ve}from"./staticProps-_2fG5Hae.js";function Se(e,t,n){if(t<1)return[];if(t===1&&n===void 0)return e;for(var r=[],i=0;i<e.length;i+=t)r.push(e[i]);return r}function Ue(e,t,n){var r={width:e.width+t.width,height:e.height+t.height};return Le(r,n)}function Je(e,t,n){var r=n==="width",i=e.x,a=e.y,o=e.width,u=e.height;return t===1?{start:r?i:a,end:r?i+o:a+u}:{start:r?i+o:a+u,end:r?i:a}}function H(e,t,n,r,i){if(e*t<e*r||e*t>e*i)return!1;var a=n();return e*(t-e*a/2-r)>=0&&e*(t+e*a/2-i)<=0}function Qe(e,t){return Se(e,t+1)}function Ze(e,t,n,r,i){for(var a=(r||[]).slice(),o=t.start,u=t.end,c=0,d=1,l=o,h=function(){var y=r==null?void 0:r[c];if(y===void 0)return{v:Se(r,d)};var v=c,p,w=function(){return p===void 0&&(p=n(y,v)),p},g=y.coordinate,m=c===0||H(e,g,w,l,u);m||(c=0,l=o,d+=1),m&&(l=g+e*(w()/2+i),c+=d)},s;d<=a.length;)if(s=h(),s)return s.v;return[]}function Y(e){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(e)}function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?be(Object(n),!0).forEach(function(r){et(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function et(e,t,n){return t=tt(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tt(e){var t=rt(e,"string");return Y(t)=="symbol"?t:t+""}function rt(e,t){if(Y(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Y(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nt(e,t,n,r,i){for(var a=(r||[]).slice(),o=a.length,u=t.start,c=t.end,d=function(s){var f=a[s],y,v=function(){return y===void 0&&(y=n(f,s)),y};if(s===o-1){var p=e*(f.coordinate+e*v()/2-c);a[s]=f=_(_({},f),{},{tickCoord:p>0?f.coordinate-p*e:f.coordinate})}else a[s]=f=_(_({},f),{},{tickCoord:f.coordinate});var w=H(e,f.tickCoord,v,u,c);w&&(c=f.tickCoord-e*(v()/2+i),a[s]=_(_({},f),{},{isShow:!0}))},l=o-1;l>=0;l--)d(l);return a}function it(e,t,n,r,i,a){var o=(r||[]).slice(),u=o.length,c=t.start,d=t.end;if(a){var l=r[u-1],h=n(l,u-1),s=e*(l.coordinate+e*h/2-d);o[u-1]=l=_(_({},l),{},{tickCoord:s>0?l.coordinate-s*e:l.coordinate});var f=H(e,l.tickCoord,function(){return h},c,d);f&&(d=l.tickCoord-e*(h/2+i),o[u-1]=_(_({},l),{},{isShow:!0}))}for(var y=a?u-1:u,v=function(g){var m=o[g],x,O=function(){return x===void 0&&(x=n(m,g)),x};if(g===0){var S=e*(m.coordinate-e*O()/2-c);o[g]=m=_(_({},m),{},{tickCoord:S<0?m.coordinate-S*e:m.coordinate})}else o[g]=m=_(_({},m),{},{tickCoord:m.coordinate});var A=H(e,m.tickCoord,O,c,d);A&&(c=m.tickCoord+e*(O()/2+i),o[g]=_(_({},m),{},{isShow:!0}))},p=0;p<y;p++)v(p);return o}function fe(e,t,n){var r=e.tick,i=e.ticks,a=e.viewBox,o=e.minTickGap,u=e.orientation,c=e.interval,d=e.tickFormatter,l=e.unit,h=e.angle;if(!i||!i.length||!r)return[];if(j(c)||De.isSsr)return Qe(i,typeof c=="number"&&j(c)?c:0);var s=[],f=u==="top"||u==="bottom"?"width":"height",y=l&&f==="width"?ee(l,{fontSize:t,letterSpacing:n}):{width:0,height:0},v=function(m,x){var O=$(d)?d(m.value,x):m.value;return f==="width"?Ue(ee(O,{fontSize:t,letterSpacing:n}),y,h):ee(O,{fontSize:t,letterSpacing:n})[f]},p=i.length>=2?Fe(i[1].coordinate-i[0].coordinate):1,w=Je(a,p,f);return c==="equidistantPreserveStart"?Ze(p,w,v,i,o):(c==="preserveStart"||c==="preserveStartEnd"?s=it(p,w,v,i,o,c==="preserveStartEnd"):s=nt(p,w,v,i,o),s.filter(function(g){return g.isShow}))}var at=["viewBox"],ot=["viewBox"],lt=["ticks"];function I(e){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ge(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function re(e,t){if(e==null)return{};var n=ct(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ct(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ut(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ae(r.key),r)}}function st(e,t,n){return xe(e.prototype,t),xe(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ft(e,t,n){return t=X(t),dt(e,je()?Reflect.construct(t,n,X(e).constructor):t.apply(e,n))}function dt(e,t){if(t&&(I(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ht(e)}function ht(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function je(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(je=function(){return!!e})()}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},X(e)}function yt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ie(e,t)}function ie(e,t){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ie(e,t)}function de(e,t,n){return t=Ae(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ae(e){var t=pt(e,"string");return I(t)=="symbol"?t:t+""}function pt(e,t){if(I(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(I(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var D=function(e){function t(n){var r;return ut(this,t),r=ft(this,t,[n]),r.state={fontSize:"",letterSpacing:""},r}return yt(t,e),st(t,[{key:"shouldComponentUpdate",value:function(r,i){var a=r.viewBox,o=re(r,at),u=this.props,c=u.viewBox,d=re(u,ot);return!te(a,c)||!te(o,d)||!te(i,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var i=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];i&&this.setState({fontSize:window.getComputedStyle(i).fontSize,letterSpacing:window.getComputedStyle(i).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var i=this.props,a=i.x,o=i.y,u=i.width,c=i.height,d=i.orientation,l=i.tickSize,h=i.mirror,s=i.tickMargin,f,y,v,p,w,g,m=h?-1:1,x=r.tickSize||l,O=j(r.tickCoord)?r.tickCoord:r.coordinate;switch(d){case"top":f=y=r.coordinate,p=o+ +!h*c,v=p-m*x,g=v-m*s,w=O;break;case"left":v=p=r.coordinate,y=a+ +!h*u,f=y-m*x,w=f-m*s,g=O;break;case"right":v=p=r.coordinate,y=a+ +h*u,f=y+m*x,w=f+m*s,g=O;break;default:f=y=r.coordinate,p=o+ +h*c,v=p+m*x,g=v+m*s,w=O;break}return{line:{x1:f,y1:v,x2:y,y2:p},tick:{x:w,y:g}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,i=r.orientation,a=r.mirror,o;switch(i){case"left":o=a?"start":"end";break;case"right":o=a?"end":"start";break;default:o="middle";break}return o}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,i=r.orientation,a=r.mirror,o="end";switch(i){case"left":case"right":o="middle";break;case"top":o=a?"start":"end";break;default:o=a?"end":"start";break}return o}},{key:"renderAxisLine",value:function(){var r=this.props,i=r.x,a=r.y,o=r.width,u=r.height,c=r.orientation,d=r.mirror,l=r.axisLine,h=k(k(k({},N(this.props,!1)),N(l,!1)),{},{fill:"none"});if(c==="top"||c==="bottom"){var s=+(c==="top"&&!d||c==="bottom"&&d);h=k(k({},h),{},{x1:i,y1:a+s*u,x2:i+o,y2:a+s*u})}else{var f=+(c==="left"&&!d||c==="right"&&d);h=k(k({},h),{},{x1:i+f*o,y1:a,x2:i+f*o,y2:a+u})}return b.createElement("line",V({},h,{className:B("recharts-cartesian-axis-line",ye(l,"className"))}))}},{key:"renderTicks",value:function(r,i,a){var o=this,u=this.props,c=u.tickLine,d=u.stroke,l=u.tick,h=u.tickFormatter,s=u.unit,f=fe(k(k({},this.props),{},{ticks:r}),i,a),y=this.getTickTextAnchor(),v=this.getTickVerticalAnchor(),p=N(this.props,!1),w=N(l,!1),g=k(k({},p),{},{fill:"none"},N(c,!1)),m=f.map(function(x,O){var S=o.getTickLineCoord(x),A=S.line,F=S.tick,E=k(k(k(k({textAnchor:y,verticalAnchor:v},p),{},{stroke:"none",fill:d},w),F),{},{index:O,payload:x,visibleTicksCount:f.length,tickFormatter:h});return b.createElement(pe,V({className:"recharts-cartesian-axis-tick",key:"tick-".concat(x.value,"-").concat(x.coordinate,"-").concat(x.tickCoord)},Be(o.props,x,O)),c&&b.createElement("line",V({},g,A,{className:B("recharts-cartesian-axis-tick-line",ye(c,"className"))})),l&&t.renderTickItem(l,E,"".concat($(h)?h(x.value,O):x.value).concat(s||"")))});return b.createElement("g",{className:"recharts-cartesian-axis-ticks"},m)}},{key:"render",value:function(){var r=this,i=this.props,a=i.axisLine,o=i.width,u=i.height,c=i.ticksGenerator,d=i.className,l=i.hide;if(l)return null;var h=this.props,s=h.ticks,f=re(h,lt),y=s;return $(c)&&(y=s&&s.length>0?c(this.props):c(f)),o<=0||u<=0||!y||!y.length?null:b.createElement(pe,{className:B("recharts-cartesian-axis",d),ref:function(p){r.layerReference=p}},a&&this.renderAxisLine(),this.renderTicks(y,this.state.fontSize,this.state.letterSpacing),Ye.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,i,a){var o;return b.isValidElement(r)?o=b.cloneElement(r,i):$(r)?o=r(i):o=b.createElement(Ge,V({},i,{className:"recharts-cartesian-axis-tick-value"}),a),o}}])}(G.Component);de(D,"displayName","CartesianAxis");de(D,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var mt=["x1","y1","x2","y2","key"],vt=["offset"];function C(e){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(e)}function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?we(Object(n),!0).forEach(function(r){bt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bt(e,t,n){return t=gt(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gt(e){var t=xt(e,"string");return C(t)=="symbol"?t:t+""}function xt(e,t){if(C(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(C(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function Oe(e,t){if(e==null)return{};var n=wt(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function wt(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var Ot=function(t){var n=t.fill;if(!n||n==="none")return null;var r=t.fillOpacity,i=t.x,a=t.y,o=t.width,u=t.height,c=t.ry;return b.createElement("rect",{x:i,y:a,ry:c,width:o,height:u,stroke:"none",fill:n,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function Te(e,t){var n;if(b.isValidElement(e))n=b.cloneElement(e,t);else if($(e))n=e(t);else{var r=t.x1,i=t.y1,a=t.x2,o=t.y2,u=t.key,c=Oe(t,mt),d=N(c,!1);d.offset;var l=Oe(d,vt);n=b.createElement("line",T({},l,{x1:r,y1:i,x2:a,y2:o,fill:"none",key:u}))}return n}function _t(e){var t=e.x,n=e.width,r=e.horizontal,i=r===void 0?!0:r,a=e.horizontalPoints;if(!i||!a||!a.length)return null;var o=a.map(function(u,c){var d=P(P({},e),{},{x1:t,y1:u,x2:t+n,y2:u,key:"line-".concat(c),index:c});return Te(i,d)});return b.createElement("g",{className:"recharts-cartesian-grid-horizontal"},o)}function Pt(e){var t=e.y,n=e.height,r=e.vertical,i=r===void 0?!0:r,a=e.verticalPoints;if(!i||!a||!a.length)return null;var o=a.map(function(u,c){var d=P(P({},e),{},{x1:u,y1:t,x2:u,y2:t+n,key:"line-".concat(c),index:c});return Te(i,d)});return b.createElement("g",{className:"recharts-cartesian-grid-vertical"},o)}function kt(e){var t=e.horizontalFill,n=e.fillOpacity,r=e.x,i=e.y,a=e.width,o=e.height,u=e.horizontalPoints,c=e.horizontal,d=c===void 0?!0:c;if(!d||!t||!t.length)return null;var l=u.map(function(s){return Math.round(s+i-i)}).sort(function(s,f){return s-f});i!==l[0]&&l.unshift(0);var h=l.map(function(s,f){var y=!l[f+1],v=y?i+o-s:l[f+1]-s;if(v<=0)return null;var p=f%t.length;return b.createElement("rect",{key:"react-".concat(f),y:s,x:r,height:v,width:a,stroke:"none",fill:t[p],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return b.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},h)}function St(e){var t=e.vertical,n=t===void 0?!0:t,r=e.verticalFill,i=e.fillOpacity,a=e.x,o=e.y,u=e.width,c=e.height,d=e.verticalPoints;if(!n||!r||!r.length)return null;var l=d.map(function(s){return Math.round(s+a-a)}).sort(function(s,f){return s-f});a!==l[0]&&l.unshift(0);var h=l.map(function(s,f){var y=!l[f+1],v=y?a+u-s:l[f+1]-s;if(v<=0)return null;var p=f%r.length;return b.createElement("rect",{key:"react-".concat(f),x:s,y:o,width:v,height:c,stroke:"none",fill:r[p],fillOpacity:i,className:"recharts-cartesian-grid-bg"})});return b.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},h)}var jt=function(t,n){var r=t.xAxis,i=t.width,a=t.height,o=t.offset;return Pe(fe(P(P(P({},D.defaultProps),r),{},{ticks:Z(r,!0),viewBox:{x:0,y:0,width:i,height:a}})),o.left,o.left+o.width,n)},At=function(t,n){var r=t.yAxis,i=t.width,a=t.height,o=t.offset;return Pe(fe(P(P(P({},D.defaultProps),r),{},{ticks:Z(r,!0),viewBox:{x:0,y:0,width:i,height:a}})),o.top,o.top+o.height,n)},z={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function Tt(e){var t,n,r,i,a,o,u=ue(),c=se(),d=Re(),l=P(P({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:z.stroke,fill:(n=e.fill)!==null&&n!==void 0?n:z.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:z.horizontal,horizontalFill:(i=e.horizontalFill)!==null&&i!==void 0?i:z.horizontalFill,vertical:(a=e.vertical)!==null&&a!==void 0?a:z.vertical,verticalFill:(o=e.verticalFill)!==null&&o!==void 0?o:z.verticalFill,x:j(e.x)?e.x:d.left,y:j(e.y)?e.y:d.top,width:j(e.width)?e.width:d.width,height:j(e.height)?e.height:d.height}),h=l.x,s=l.y,f=l.width,y=l.height,v=l.syncWithTicks,p=l.horizontalValues,w=l.verticalValues,g=Me(),m=We();if(!j(f)||f<=0||!j(y)||y<=0||!j(h)||h!==+h||!j(s)||s!==+s)return null;var x=l.verticalCoordinatesGenerator||jt,O=l.horizontalCoordinatesGenerator||At,S=l.horizontalPoints,A=l.verticalPoints;if((!S||!S.length)&&$(O)){var F=p&&p.length,E=O({yAxis:m?P(P({},m),{},{ticks:F?p:m.ticks}):void 0,width:u,height:c,offset:d},F?!0:v);me(Array.isArray(E),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(C(E),"]")),Array.isArray(E)&&(S=E)}if((!A||!A.length)&&$(x)){var he=w&&w.length,R=x({xAxis:g?P(P({},g),{},{ticks:he?w:g.ticks}):void 0,width:u,height:c,offset:d},he?!0:v);me(Array.isArray(R),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(C(R),"]")),Array.isArray(R)&&(A=R)}return b.createElement("g",{className:"recharts-cartesian-grid"},b.createElement(Ot,{fill:l.fill,fillOpacity:l.fillOpacity,x:l.x,y:l.y,width:l.width,height:l.height,ry:l.ry}),b.createElement(_t,T({},l,{offset:d,horizontalPoints:S,xAxis:g,yAxis:m})),b.createElement(Pt,T({},l,{offset:d,verticalPoints:A,xAxis:g,yAxis:m})),b.createElement(kt,T({},l,{horizontalPoints:S})),b.createElement(St,T({},l,{verticalPoints:A})))}Tt.displayName="CartesianGrid";function q(e){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(e)}function $t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ct(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ee(r.key),r)}}function Et(e,t,n){return Ct(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function zt(e,t,n){return t=K(t),Nt(e,$e()?Reflect.construct(t,n||[],K(e).constructor):t.apply(e,n))}function Nt(e,t){if(t&&(q(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Vt(e)}function Vt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $e(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return($e=function(){return!!e})()}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},K(e)}function It(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ae(e,t)}function ae(e,t){return ae=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ae(e,t)}function Ce(e,t,n){return t=Ee(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ee(e){var t=qt(e,"string");return q(t)=="symbol"?t:t+""}function qt(e,t){if(q(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(q(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(this,arguments)}function Lt(e){var t=e.xAxisId,n=ue(),r=se(),i=He(t);return i==null?null:b.createElement(D,oe({},i,{className:B("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:n,height:r},ticksGenerator:function(o){return Z(o,!0)}}))}var ze=function(e){function t(){return $t(this,t),zt(this,t,arguments)}return It(t,e),Et(t,[{key:"render",value:function(){return b.createElement(Lt,this.props)}}])}(b.Component);Ce(ze,"displayName","XAxis");Ce(ze,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}function Dt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ft(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ie(r.key),r)}}function Gt(e,t,n){return Ft(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Bt(e,t,n){return t=U(t),Yt(e,Ne()?Reflect.construct(t,n||[],U(e).constructor):t.apply(e,n))}function Yt(e,t){if(t&&(L(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Rt(e)}function Rt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ne(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ne=function(){return!!e})()}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},U(e)}function Mt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&le(e,t)}function le(e,t){return le=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},le(e,t)}function Ve(e,t,n){return t=Ie(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ie(e){var t=Wt(e,"string");return L(t)=="symbol"?t:t+""}function Wt(e,t){if(L(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(L(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ce(){return ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ce.apply(this,arguments)}var Ht=function(t){var n=t.yAxisId,r=ue(),i=se(),a=Xe(n);return a==null?null:b.createElement(D,ce({},a,{className:B("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:r,height:i},ticksGenerator:function(u){return Z(u,!0)}}))},qe=function(e){function t(){return Dt(this,t),Bt(this,t,arguments)}return Mt(t,e),Gt(t,[{key:"render",value:function(){return b.createElement(Ht,this.props)}}])}(b.Component);Ve(qe,"displayName","YAxis");Ve(qe,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});const tr=(e,t)=>G.useMemo(()=>({right:(e==null?void 0:e.right)??30,top:(e==null?void 0:e.top)??t?40:20,bottom:(e==null?void 0:e.bottom)??20,left:(e==null?void 0:e.left)??10}),[e,t]),_e=30,rr=(e,t)=>{const[n,r]=G.useState(Array(t).fill(_e)),i=G.useRef(n);return G.useEffect(()=>{const a=Ke(()=>{var l;const u=Array(t).fill(_e);(l=e.current)==null||l.querySelectorAll(".xAxis").forEach((h,s)=>{var y;const f=(y=h==null?void 0:h.getBBox())==null?void 0:y.height;f>30&&(u[s]=f)});const c=i.current.length===u.length,d=i.current.every((h,s)=>u[s]===h);c&&d||(i.current=u,r(u))},75),o=new MutationObserver(a);return e.current&&o.observe(e.current,{characterData:!1,characterDataOldValue:!1,attributes:!1,childList:!0,subtree:!0}),()=>{a.cancel(),o.disconnect()}},[e,r,i]),n},J=e=>{const{x:t,y:n,payload:r,config:i,visibleTicksCount:a,width:o,secondYAxisConfig:u,tickFormatter:c,index:d}=e,l=o/a,h=l<=100,s=(c==null?void 0:c(r.value,d))??i.formatter(r.value);let f=s;if(h)f=ne(s,11);else if(W(s)>l)for(let y=`${s}`.length;y>0&&(f=ne(s,y),!(W(f)<=l));y--);return M.jsx("g",{style:{direction:"ltr"},transform:`translate(${t},${n+(u?0:10)})`,children:M.jsx("text",{fill:(u==null?void 0:u.color)??ke.sapContent_LabelColor,transform:h?"rotate(-35)":void 0,textAnchor:h?"end":"middle",children:f})})};try{J.displayName="XAxisTicks",J.__docgenInfo={description:"",displayName:"XAxisTicks",props:{visibleTicksCount:{defaultValue:null,description:"",name:"visibleTicksCount",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},payload:{defaultValue:null,description:"",name:"payload",required:!1,type:{name:"any"}},config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IChartMeasure"}},secondYAxisConfig:{defaultValue:null,description:"",name:"secondYAxisConfig",required:!1,type:{name:"{ color: string; }"}},tickFormatter:{defaultValue:null,description:"",name:"tickFormatter",required:!1,type:{name:"(value: any, index: number) => string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}}}catch{}try{J.displayName="XAxisTicks",J.__docgenInfo={description:"",displayName:"XAxisTicks",props:{visibleTicksCount:{defaultValue:null,description:"",name:"visibleTicksCount",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},payload:{defaultValue:null,description:"",name:"payload",required:!1,type:{name:"any"}},config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IChartMeasure"}},secondYAxisConfig:{defaultValue:null,description:"",name:"secondYAxisConfig",required:!1,type:{name:"{ color: string; }"}},tickFormatter:{defaultValue:null,description:"",name:"tickFormatter",required:!1,type:{name:"(value: any, index: number) => string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}}}catch{}const Q=e=>{const{x:t,y:n,payload:r,config:i,secondYAxisConfig:a,tickFormatter:o,index:u}=e,c=(o==null?void 0:o(r.value,u))??i.formatter(r.value);let d=c;if(W(c)>ve)for(let l=`${c}`.length;l>0&&(d=ne(c,l),!(W(d)<=ve));l--);return M.jsx("g",{transform:`translate(${t},${n+3})`,children:M.jsx("text",{fill:(a==null?void 0:a.color)??ke.sapContent_LabelColor,textAnchor:a?"start":"end",children:d})})};try{Q.displayName="YAxisTicks",Q.__docgenInfo={description:"",displayName:"YAxisTicks",props:{x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},payload:{defaultValue:null,description:"",name:"payload",required:!1,type:{name:"any"}},config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IChartMeasure"}},secondYAxisConfig:{defaultValue:null,description:"",name:"secondYAxisConfig",required:!1,type:{name:"{ color: string; }"}},tickFormatter:{defaultValue:null,description:"",name:"tickFormatter",required:!1,type:{name:"(value: any, index: number) => string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}}}catch{}try{Q.displayName="YAxisTicks",Q.__docgenInfo={description:"",displayName:"YAxisTicks",props:{x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},payload:{defaultValue:null,description:"",name:"payload",required:!1,type:{name:"any"}},config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IChartMeasure"}},secondYAxisConfig:{defaultValue:null,description:"",name:"secondYAxisConfig",required:!1,type:{name:"{ color: string; }"}},tickFormatter:{defaultValue:null,description:"",name:"tickFormatter",required:!1,type:{name:"(value: any, index: number) => string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}}}catch{}export{Tt as C,ze as X,qe as Y,rr as a,Q as b,J as c,tr as u};
