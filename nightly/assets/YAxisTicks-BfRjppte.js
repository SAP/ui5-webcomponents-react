import{R as b,r as F}from"./index-ClU-Tc1p.js";import{b as C,g as ce}from"./_baseForOwn-CS3BKc8p.js";import{g as S,n as Ae,s as U,a as N,c as D,j as Se,w as se}from"./ChartContainer-CjcZzcVn.js";import{w as je,G as Te,x as J,k as Ce,L as ue,i as ze,y as ie,z as ne,F as Ee,H as Ve,I as Ne,J as ge,K as R,M as $e,N as qe}from"./generateCategoricalChart-B7R4cYtq.js";import{d as Ie}from"./debounce-D7W5PopO.js";import{j as Y}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{T as be}from"./ThemingParameters-DOkJX3Ed.js";import{t as Z,g as M}from"./useTooltipFormatter-pnyfQ-cB.js";import{d as fe}from"./defaults-BZaSiIBS.js";function xe(e,t,i){if(t<1)return[];if(t===1&&i===void 0)return e;for(var r=[],n=0;n<e.length;n+=t)if(i===void 0||i(e[n])===!0)r.push(e[n]);else return;return r}function Le(e,t,i){var r={width:e.width+t.width,height:e.height+t.height};return je(r,i)}function Fe(e,t,i){var r=i==="width",n=e.x,a=e.y,o=e.width,s=e.height;return t===1?{start:r?n:a,end:r?n+o:a+s}:{start:r?n+o:a+s,end:r?n:a}}function W(e,t,i,r,n){if(e*t<e*r||e*t>e*n)return!1;var a=i();return e*(t-e*a/2-r)>=0&&e*(t+e*a/2-n)<=0}function De(e,t){return xe(e,t+1)}function Ge(e,t,i,r,n){for(var a=(r||[]).slice(),o=t.start,s=t.end,c=0,d=1,l=o,h=function(){var y=r==null?void 0:r[c];if(y===void 0)return{v:xe(r,d)};var p=c,v,k=function(){return v===void 0&&(v=i(y,p)),v},g=y.coordinate,m=c===0||W(e,g,k,l,s);m||(c=0,l=o,d+=1),m&&(l=g+e*(k()/2+n),c+=d)},u;d<=a.length;)if(u=h(),u)return u.v;return[]}function G(e){"@babel/helpers - typeof";return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(e)}function de(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),i.push.apply(i,r)}return i}function O(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?de(Object(i),!0).forEach(function(r){Be(e,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):de(Object(i)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))})}return e}function Be(e,t,i){return t=Ye(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Ye(e){var t=Me(e,"string");return G(t)=="symbol"?t:String(t)}function Me(e,t){if(G(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var r=i.call(e,t||"default");if(G(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function We(e,t,i,r,n){for(var a=(r||[]).slice(),o=a.length,s=t.start,c=t.end,d=function(u){var f=a[u],y,p=function(){return y===void 0&&(y=i(f,u)),y};if(u===o-1){var v=e*(f.coordinate+e*p()/2-c);a[u]=f=O(O({},f),{},{tickCoord:v>0?f.coordinate-v*e:f.coordinate})}else a[u]=f=O(O({},f),{},{tickCoord:f.coordinate});var k=W(e,f.tickCoord,p,s,c);k&&(c=f.tickCoord-e*(p()/2+n),a[u]=O(O({},f),{},{isShow:!0}))},l=o-1;l>=0;l--)d(l);return a}function He(e,t,i,r,n,a){var o=(r||[]).slice(),s=o.length,c=t.start,d=t.end;if(a){var l=r[s-1],h=i(l,s-1),u=e*(l.coordinate+e*h/2-d);o[s-1]=l=O(O({},l),{},{tickCoord:u>0?l.coordinate-u*e:l.coordinate});var f=W(e,l.tickCoord,function(){return h},c,d);f&&(d=l.tickCoord-e*(h/2+n),o[s-1]=O(O({},l),{},{isShow:!0}))}for(var y=a?s-1:s,p=function(g){var m=o[g],x,w=function(){return x===void 0&&(x=i(m,g)),x};if(g===0){var A=e*(m.coordinate-e*w()/2-c);o[g]=m=O(O({},m),{},{tickCoord:A<0?m.coordinate-A*e:m.coordinate})}else o[g]=m=O(O({},m),{},{tickCoord:m.coordinate});var j=W(e,m.tickCoord,w,c,d);j&&(c=m.tickCoord+e*(w()/2+n),o[g]=O(O({},m),{},{isShow:!0}))},v=0;v<y;v++)p(v);return o}function ae(e,t,i){var r=e.tick,n=e.ticks,a=e.viewBox,o=e.minTickGap,s=e.orientation,c=e.interval,d=e.tickFormatter,l=e.unit,h=e.angle;if(!n||!n.length||!r)return[];if(S(c)||Te.isSsr)return De(n,typeof c=="number"&&S(c)?c:0);var u=[],f=s==="top"||s==="bottom"?"width":"height",y=l&&f==="width"?J(l,{fontSize:t,letterSpacing:i}):{width:0,height:0},p=function(m,x){var w=C(d)?d(m.value,x):m.value;return f==="width"?Le(J(w,{fontSize:t,letterSpacing:i}),y,h):J(w,{fontSize:t,letterSpacing:i})[f]},v=n.length>=2?Ae(n[1].coordinate-n[0].coordinate):1,k=Fe(a,v,f);return c==="equidistantPreserveStart"?Ge(v,k,p,n,o):(c==="preserveStart"||c==="preserveStartEnd"?u=He(v,k,p,n,o,c==="preserveStartEnd"):u=We(v,k,p,n,o),u.filter(function(g){return g.isShow}))}var Xe=["viewBox"],Ke=["viewBox"],Re=["ticks"];function q(e){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(e)}function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},$.apply(this,arguments)}function he(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),i.push.apply(i,r)}return i}function P(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?he(Object(i),!0).forEach(function(r){oe(e,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):he(Object(i)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))})}return e}function Q(e,t){if(e==null)return{};var i=Ue(e,t),r,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Ue(e,t){if(e==null)return{};var i={},r=Object.keys(e),n,a;for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&(i[n]=e[n]);return i}function Je(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ye(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,we(r.key),r)}}function Qe(e,t,i){return t&&ye(e.prototype,t),i&&ye(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ze(e,t,i){return t=H(t),et(e,ke()?Reflect.construct(t,i||[],H(e).constructor):t.apply(e,i))}function et(e,t){if(t&&(q(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return tt(e)}function tt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ke(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ke=function(){return!!e})()}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},H(e)}function rt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ee(e,t)}function ee(e,t){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},ee(e,t)}function oe(e,t,i){return t=we(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function we(e){var t=it(e,"string");return q(t)=="symbol"?t:String(t)}function it(e,t){if(q(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var r=i.call(e,t||"default");if(q(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var I=function(e){rt(t,e);function t(i){var r;return Je(this,t),r=Ze(this,t,[i]),r.state={fontSize:"",letterSpacing:""},r}return Qe(t,[{key:"shouldComponentUpdate",value:function(r,n){var a=r.viewBox,o=Q(r,Xe),s=this.props,c=s.viewBox,d=Q(s,Ke);return!U(a,c)||!U(o,d)||!U(n,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var n=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];n&&this.setState({fontSize:window.getComputedStyle(n).fontSize,letterSpacing:window.getComputedStyle(n).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var n=this.props,a=n.x,o=n.y,s=n.width,c=n.height,d=n.orientation,l=n.tickSize,h=n.mirror,u=n.tickMargin,f,y,p,v,k,g,m=h?-1:1,x=r.tickSize||l,w=S(r.tickCoord)?r.tickCoord:r.coordinate;switch(d){case"top":f=y=r.coordinate,v=o+ +!h*c,p=v-m*x,g=p-m*u,k=w;break;case"left":p=v=r.coordinate,y=a+ +!h*s,f=y-m*x,k=f-m*u,g=w;break;case"right":p=v=r.coordinate,y=a+ +h*s,f=y+m*x,k=f+m*u,g=w;break;default:f=y=r.coordinate,v=o+ +h*c,p=v+m*x,g=p+m*u,k=w;break}return{line:{x1:f,y1:p,x2:y,y2:v},tick:{x:k,y:g}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,n=r.orientation,a=r.mirror,o;switch(n){case"left":o=a?"start":"end";break;case"right":o=a?"end":"start";break;default:o="middle";break}return o}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,n=r.orientation,a=r.mirror,o="end";switch(n){case"left":case"right":o="middle";break;case"top":o=a?"start":"end";break;default:o=a?"end":"start";break}return o}},{key:"renderAxisLine",value:function(){var r=this.props,n=r.x,a=r.y,o=r.width,s=r.height,c=r.orientation,d=r.mirror,l=r.axisLine,h=P(P(P({},N(this.props,!1)),N(l,!1)),{},{fill:"none"});if(c==="top"||c==="bottom"){var u=+(c==="top"&&!d||c==="bottom"&&d);h=P(P({},h),{},{x1:n,y1:a+u*s,x2:n+o,y2:a+u*s})}else{var f=+(c==="left"&&!d||c==="right"&&d);h=P(P({},h),{},{x1:n+f*o,y1:a,x2:n+f*o,y2:a+s})}return b.createElement("line",$({},h,{className:D("recharts-cartesian-axis-line",ce(l,"className"))}))}},{key:"renderTicks",value:function(r,n,a){var o=this,s=this.props,c=s.tickLine,d=s.stroke,l=s.tick,h=s.tickFormatter,u=s.unit,f=ae(P(P({},this.props),{},{ticks:r}),n,a),y=this.getTickTextAnchor(),p=this.getTickVerticalAnchor(),v=N(this.props,!1),k=N(l,!1),g=P(P({},v),{},{fill:"none"},N(c,!1)),m=f.map(function(x,w){var A=o.getTickLineCoord(x),j=A.line,L=A.tick,E=P(P(P(P({textAnchor:y,verticalAnchor:p},v),{},{stroke:"none",fill:d},k),L),{},{index:w,payload:x,visibleTicksCount:f.length,tickFormatter:h});return b.createElement(ue,$({className:"recharts-cartesian-axis-tick",key:"tick-".concat(x.value,"-").concat(x.coordinate,"-").concat(x.tickCoord)},Se(o.props,x,w)),c&&b.createElement("line",$({},g,j,{className:D("recharts-cartesian-axis-tick-line",ce(c,"className"))})),l&&t.renderTickItem(l,E,"".concat(C(h)?h(x.value,w):x.value).concat(u||"")))});return b.createElement("g",{className:"recharts-cartesian-axis-ticks"},m)}},{key:"render",value:function(){var r=this,n=this.props,a=n.axisLine,o=n.width,s=n.height,c=n.ticksGenerator,d=n.className,l=n.hide;if(l)return null;var h=this.props,u=h.ticks,f=Q(h,Re),y=u;return C(c)&&(y=u&&u.length>0?c(this.props):c(f)),o<=0||s<=0||!y||!y.length?null:b.createElement(ue,{className:D("recharts-cartesian-axis",d),ref:function(v){r.layerReference=v}},a&&this.renderAxisLine(),this.renderTicks(y,this.state.fontSize,this.state.letterSpacing),ze.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,n,a){var o;return b.isValidElement(r)?o=b.cloneElement(r,n):C(r)?o=r(n):o=b.createElement(Ce,$({},n,{className:"recharts-cartesian-axis-tick-value"}),a),o}}]),t}(F.Component);oe(I,"displayName","CartesianAxis");oe(I,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var nt=["x1","y1","x2","y2","key"],at=["offset"];function z(e){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(e)}function ve(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),i.push.apply(i,r)}return i}function _(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?ve(Object(i),!0).forEach(function(r){ot(e,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ve(Object(i)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))})}return e}function ot(e,t,i){return t=lt(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function lt(e){var t=ct(e,"string");return z(t)=="symbol"?t:String(t)}function ct(e,t){if(z(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var r=i.call(e,t||"default");if(z(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},T.apply(this,arguments)}function me(e,t){if(e==null)return{};var i=st(e,t),r,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function st(e,t){if(e==null)return{};var i={},r=Object.keys(e),n,a;for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&(i[n]=e[n]);return i}var ut=function(t){var i=t.fill;if(!i||i==="none")return null;var r=t.fillOpacity,n=t.x,a=t.y,o=t.width,s=t.height;return b.createElement("rect",{x:n,y:a,width:o,height:s,stroke:"none",fill:i,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function Oe(e,t){var i;if(b.isValidElement(e))i=b.cloneElement(e,t);else if(C(e))i=e(t);else{var r=t.x1,n=t.y1,a=t.x2,o=t.y2,s=t.key,c=me(t,nt),d=N(c,!1);d.offset;var l=me(d,at);i=b.createElement("line",T({},l,{x1:r,y1:n,x2:a,y2:o,fill:"none",key:s}))}return i}function ft(e){var t=e.x,i=e.width,r=e.horizontal,n=r===void 0?!0:r,a=e.horizontalPoints;if(!n||!a||!a.length)return null;var o=a.map(function(s,c){var d=_(_({},e),{},{x1:t,y1:s,x2:t+i,y2:s,key:"line-".concat(c),index:c});return Oe(n,d)});return b.createElement("g",{className:"recharts-cartesian-grid-horizontal"},o)}function dt(e){var t=e.y,i=e.height,r=e.vertical,n=r===void 0?!0:r,a=e.verticalPoints;if(!n||!a||!a.length)return null;var o=a.map(function(s,c){var d=_(_({},e),{},{x1:s,y1:t,x2:s,y2:t+i,key:"line-".concat(c),index:c});return Oe(n,d)});return b.createElement("g",{className:"recharts-cartesian-grid-vertical"},o)}function ht(e){var t=e.horizontalFill,i=e.fillOpacity,r=e.x,n=e.y,a=e.width,o=e.height,s=e.horizontalPoints,c=e.horizontal,d=c===void 0?!0:c;if(!d||!t||!t.length)return null;var l=s.map(function(u){return Math.round(u+n-n)}).sort(function(u,f){return u-f});n!==l[0]&&l.unshift(0);var h=l.map(function(u,f){var y=!l[f+1],p=y?n+o-u:l[f+1]-u;if(p<=0)return null;var v=f%t.length;return b.createElement("rect",{key:"react-".concat(f),y:u,x:r,height:p,width:a,stroke:"none",fill:t[v],fillOpacity:i,className:"recharts-cartesian-grid-bg"})});return b.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},h)}function yt(e){var t=e.vertical,i=t===void 0?!0:t,r=e.verticalFill,n=e.fillOpacity,a=e.x,o=e.y,s=e.width,c=e.height,d=e.verticalPoints;if(!i||!r||!r.length)return null;var l=d.map(function(u){return Math.round(u+a-a)}).sort(function(u,f){return u-f});a!==l[0]&&l.unshift(0);var h=l.map(function(u,f){var y=!l[f+1],p=y?a+s-u:l[f+1]-u;if(p<=0)return null;var v=f%r.length;return b.createElement("rect",{key:"react-".concat(f),x:u,y:o,width:p,height:c,stroke:"none",fill:r[v],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return b.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},h)}var vt=function(t,i){var r=t.xAxis,n=t.width,a=t.height,o=t.offset;return ge(ae(_(_(_({},I.defaultProps),r),{},{ticks:R(r,!0),viewBox:{x:0,y:0,width:n,height:a}})),o.left,o.left+o.width,i)},mt=function(t,i){var r=t.yAxis,n=t.width,a=t.height,o=t.offset;return ge(ae(_(_(_({},I.defaultProps),r),{},{ticks:R(r,!0),viewBox:{x:0,y:0,width:n,height:a}})),o.top,o.top+o.height,i)},V={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function pt(e){var t,i,r,n,a,o,s=ie(),c=ne(),d=Ee(),l=_(_({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:V.stroke,fill:(i=e.fill)!==null&&i!==void 0?i:V.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:V.horizontal,horizontalFill:(n=e.horizontalFill)!==null&&n!==void 0?n:V.horizontalFill,vertical:(a=e.vertical)!==null&&a!==void 0?a:V.vertical,verticalFill:(o=e.verticalFill)!==null&&o!==void 0?o:V.verticalFill,x:S(e.x)?e.x:d.left,y:S(e.y)?e.y:d.top,width:S(e.width)?e.width:d.width,height:S(e.height)?e.height:d.height}),h=l.x,u=l.y,f=l.width,y=l.height,p=l.syncWithTicks,v=l.horizontalValues,k=l.verticalValues,g=Ve(),m=Ne();if(!S(f)||f<=0||!S(y)||y<=0||!S(h)||h!==+h||!S(u)||u!==+u)return null;var x=l.verticalCoordinatesGenerator||vt,w=l.horizontalCoordinatesGenerator||mt,A=l.horizontalPoints,j=l.verticalPoints;if((!A||!A.length)&&C(w)){var L=v&&v.length,E=w({yAxis:m?_(_({},m),{},{ticks:L?v:m.ticks}):void 0,width:s,height:c,offset:d},L?!0:p);se(Array.isArray(E),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(z(E),"]")),Array.isArray(E)&&(A=E)}if((!j||!j.length)&&C(x)){var le=k&&k.length,B=x({xAxis:g?_(_({},g),{},{ticks:le?k:g.ticks}):void 0,width:s,height:c,offset:d},le?!0:p);se(Array.isArray(B),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(z(B),"]")),Array.isArray(B)&&(j=B)}return b.createElement("g",{className:"recharts-cartesian-grid"},b.createElement(ut,{fill:l.fill,fillOpacity:l.fillOpacity,x:l.x,y:l.y,width:l.width,height:l.height}),b.createElement(ft,T({},l,{offset:d,horizontalPoints:A,xAxis:g,yAxis:m})),b.createElement(dt,T({},l,{offset:d,verticalPoints:j,xAxis:g,yAxis:m})),b.createElement(ht,T({},l,{horizontalPoints:A})),b.createElement(yt,T({},l,{verticalPoints:j})))}pt.displayName="CartesianGrid";function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},te.apply(this,arguments)}var _e=function(t){var i=t.xAxisId,r=ie(),n=ne(),a=$e(i);return a==null?null:b.createElement(I,te({},a,{className:D("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:r,height:n},ticksGenerator:function(s){return R(s,!0)}}))};_e.displayName="XAxis";_e.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0};function re(){return re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},re.apply(this,arguments)}var Pe=function(t){var i=t.yAxisId,r=ie(),n=ne(),a=qe(i);return a==null?null:b.createElement(I,re({},a,{className:D("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:r,height:n},ticksGenerator:function(s){return R(s,!0)}}))};Pe.displayName="YAxis";Pe.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1};const St=(e,t)=>F.useMemo(()=>({right:(e==null?void 0:e.right)??30,top:(e==null?void 0:e.top)??t?40:20,bottom:(e==null?void 0:e.bottom)??20,left:(e==null?void 0:e.left)??10}),[e,t]),pe=30,jt=(e,t)=>{const[i,r]=F.useState(Array(t).fill(pe)),n=F.useRef(i);return F.useEffect(()=>{const a=Ie(()=>{var l;const s=Array(t).fill(pe);(l=e.current)==null||l.querySelectorAll(".xAxis").forEach((h,u)=>{var y;const f=(y=h==null?void 0:h.getBBox())==null?void 0:y.height;f>30&&(s[u]=f)});const c=n.current.length===s.length,d=n.current.every((h,u)=>s[u]===h);c&&d||(n.current=s,r(s))},75),o=new MutationObserver(a);return e.current&&o.observe(e.current,{characterData:!1,characterDataOldValue:!1,attributes:!1,childList:!0,subtree:!0}),()=>{a.cancel(),o.disconnect()}},[e,r,n]),i},X=e=>{const{x:t,y:i,payload:r,config:n,visibleTicksCount:a,width:o,secondYAxisConfig:s,tickFormatter:c,index:d}=e,l=o/a,h=l<=100,u=(c==null?void 0:c(r.value,d))??n.formatter(r.value);let f=u;if(h)f=Z(u,11);else if(M(u)>l)for(let y=`${u}`.length;y>0&&(f=Z(u,y),!(M(f)<=l));y--);return Y.jsx("g",{style:{direction:"ltr"},transform:`translate(${t},${i+(s?0:10)})`,children:Y.jsx("text",{fill:(s==null?void 0:s.color)??be.sapContent_LabelColor,transform:h?"rotate(-35)":void 0,textAnchor:h?"end":"middle",children:f})})};try{X.displayName="XAxisTicks",X.__docgenInfo={description:"",displayName:"XAxisTicks",props:{visibleTicksCount:{defaultValue:null,description:"",name:"visibleTicksCount",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},payload:{defaultValue:null,description:"",name:"payload",required:!1,type:{name:"any"}},config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IChartMeasure"}},secondYAxisConfig:{defaultValue:null,description:"",name:"secondYAxisConfig",required:!1,type:{name:"{ color: string; }"}},tickFormatter:{defaultValue:null,description:"",name:"tickFormatter",required:!1,type:{name:"(value: any, index: number) => string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}}}catch{}try{X.displayName="XAxisTicks",X.__docgenInfo={description:"",displayName:"XAxisTicks",props:{visibleTicksCount:{defaultValue:null,description:"",name:"visibleTicksCount",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},payload:{defaultValue:null,description:"",name:"payload",required:!1,type:{name:"any"}},config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IChartMeasure"}},secondYAxisConfig:{defaultValue:null,description:"",name:"secondYAxisConfig",required:!1,type:{name:"{ color: string; }"}},tickFormatter:{defaultValue:null,description:"",name:"tickFormatter",required:!1,type:{name:"(value: any, index: number) => string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}}}catch{}const K=e=>{const{x:t,y:i,payload:r,config:n,secondYAxisConfig:a,tickFormatter:o,index:s}=e,c=(o==null?void 0:o(r.value,s))??n.formatter(r.value);let d=c;if(M(c)>fe)for(let l=`${c}`.length;l>0&&(d=Z(c,l),!(M(d)<=fe));l--);return Y.jsx("g",{transform:`translate(${t},${i+3})`,children:Y.jsx("text",{fill:(a==null?void 0:a.color)??be.sapContent_LabelColor,textAnchor:a?"start":"end",children:d})})};try{K.displayName="YAxisTicks",K.__docgenInfo={description:"",displayName:"YAxisTicks",props:{x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},payload:{defaultValue:null,description:"",name:"payload",required:!1,type:{name:"any"}},config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IChartMeasure"}},secondYAxisConfig:{defaultValue:null,description:"",name:"secondYAxisConfig",required:!1,type:{name:"{ color: string; }"}},tickFormatter:{defaultValue:null,description:"",name:"tickFormatter",required:!1,type:{name:"(value: any, index: number) => string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}}}catch{}try{K.displayName="YAxisTicks",K.__docgenInfo={description:"",displayName:"YAxisTicks",props:{x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},payload:{defaultValue:null,description:"",name:"payload",required:!1,type:{name:"any"}},config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IChartMeasure"}},secondYAxisConfig:{defaultValue:null,description:"",name:"secondYAxisConfig",required:!1,type:{name:"{ color: string; }"}},tickFormatter:{defaultValue:null,description:"",name:"tickFormatter",required:!1,type:{name:"(value: any, index: number) => string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}}}catch{}export{pt as C,_e as X,Pe as Y,jt as a,K as b,X as c,St as u};
