import{a as u,r as Q}from"./index-BQ1WsyJB.js";import{S as J,j as U,L as K,A as tt,g as k,C as et,a as it,G as nt,b as M,E as rt,e as at}from"./generateCategoricalChart-Cymhn8kg.js";import{u as ot,a as C,j as st,i as I,b as lt,f as X,k as ct,c as pt,d as j}from"./ChartContainer-DBbdpwMi.js";import{b as ut}from"./_baseForOwn-DusBTQ6O.js";var $=function(){return null};$.displayName="ZAxis";$.defaultProps={zAxisId:0,range:[64,64],scale:"auto",type:"number"};var ft=["option","isActive"];function z(){return z=Object.assign?Object.assign.bind():function(i){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(i[e]=n[e])}return i},z.apply(this,arguments)}function yt(i,t){if(i==null)return{};var n=dt(i,t),e,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);for(r=0;r<a.length;r++)e=a[r],!(t.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(i,e)&&(n[e]=i[e])}return n}function dt(i,t){if(i==null)return{};var n={},e=Object.keys(i),r,a;for(a=0;a<e.length;a++)r=e[a],!(t.indexOf(r)>=0)&&(n[r]=i[r]);return n}function mt(i){var t=i.option,n=i.isActive,e=yt(i,ft);return typeof t=="string"?u.createElement(J,z({option:u.createElement(U,z({type:t},e)),isActive:n,shapeType:"symbols"},e)):u.createElement(J,z({option:t,isActive:n,shapeType:"symbols"},e))}function w(i){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(i)}function D(){return D=Object.assign?Object.assign.bind():function(i){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(i[e]=n[e])}return i},D.apply(this,arguments)}function V(i,t){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(i);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),n.push.apply(n,e)}return n}function x(i){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?V(Object(n),!0).forEach(function(e){P(i,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(n,e))})}return i}function vt(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function G(i,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,H(e.key),e)}}function ht(i,t,n){return t&&G(i.prototype,t),n&&G(i,n),Object.defineProperty(i,"prototype",{writable:!1}),i}function bt(i,t,n){return t=B(t),At(i,Y()?Reflect.construct(t,n||[],B(i).constructor):t.apply(i,n))}function At(i,t){if(t&&(w(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _(i)}function Y(){try{var i=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Y=function(){return!!i})()}function B(i){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},B(i)}function _(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function xt(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),t&&L(i,t)}function L(i,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},L(i,t)}function P(i,t,n){return t=H(t),t in i?Object.defineProperty(i,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[t]=n,i}function H(i){var t=gt(i,"string");return w(t)=="symbol"?t:String(t)}function gt(i,t){if(w(i)!="object"||!i)return i;var n=i[Symbol.toPrimitive];if(n!==void 0){var e=n.call(i,t||"default");if(w(e)!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(i)}var R=function(i){xt(t,i);function t(){var n;vt(this,t);for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return n=bt(this,t,[].concat(r)),P(_(n),"state",{isAnimationFinished:!1}),P(_(n),"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0})}),P(_(n),"handleAnimationStart",function(){n.setState({isAnimationFinished:!1})}),P(_(n),"id",ot("recharts-scatter-")),n}return ht(t,[{key:"renderSymbolsStatically",value:function(e){var r=this,a=this.props,f=a.shape,g=a.activeShape,d=a.activeIndex,y=C(this.props,!1);return e.map(function(o,s){var p=d===s,l=p?g:f,m=x(x({key:"symbol-".concat(s)},y),o);return u.createElement(K,D({className:"recharts-scatter-symbol"},st(r.props,o,s),{key:"symbol-".concat(o==null?void 0:o.cx,"-").concat(o==null?void 0:o.cy,"-").concat(o==null?void 0:o.size,"-").concat(s),role:"img"}),u.createElement(mt,D({option:l,isActive:p},m)))})}},{key:"renderSymbolsWithAnimation",value:function(){var e=this,r=this.props,a=r.points,f=r.isAnimationActive,g=r.animationBegin,d=r.animationDuration,y=r.animationEasing,o=r.animationId,s=this.state.prevPoints;return u.createElement(tt,{begin:g,duration:d,isActive:f,easing:y,from:{t:0},to:{t:1},key:"pie-".concat(o),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(p){var l=p.t,m=a.map(function(v,h){var b=s&&s[h];if(b){var A=I(b.cx,v.cx),c=I(b.cy,v.cy),O=I(b.size,v.size);return x(x({},v),{},{cx:A(l),cy:c(l),size:O(l)})}var S=I(0,v.size);return x(x({},v),{},{size:S(l)})});return u.createElement(K,null,e.renderSymbolsStatically(m))})}},{key:"renderSymbols",value:function(){var e=this.props,r=e.points,a=e.isAnimationActive,f=this.state.prevPoints;return a&&r&&r.length&&(!f||!lt(f,r))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(r)}},{key:"renderErrorBar",value:function(){var e=this.props.isAnimationActive;if(e&&!this.state.isAnimationFinished)return null;var r=this.props,a=r.points,f=r.xAxis,g=r.yAxis,d=r.children,y=X(d,rt);return y?y.map(function(o,s){var p=o.props,l=p.direction,m=p.dataKey;return u.cloneElement(o,{key:"".concat(l,"-").concat(m,"-").concat(a[s]),data:a,xAxis:f,yAxis:g,layout:l==="x"?"vertical":"horizontal",dataPointFormatter:function(h,b){return{x:h.cx,y:h.cy,value:l==="x"?+h.node.x:+h.node.y,errorVal:k(h,b)}}})}):null}},{key:"renderLine",value:function(){var e=this.props,r=e.points,a=e.line,f=e.lineType,g=e.lineJointType,d=C(this.props,!1),y=C(a,!1),o,s;if(f==="joint")o=r.map(function(c){return{x:c.cx,y:c.cy}});else if(f==="fitting"){var p=ct(r),l=p.xmin,m=p.xmax,v=p.a,h=p.b,b=function(O){return v*O+h};o=[{x:l,y:b(l)},{x:m,y:b(m)}]}var A=x(x(x({},d),{},{fill:"none",stroke:d&&d.fill},y),{},{points:o});return u.isValidElement(a)?s=u.cloneElement(a,A):ut(a)?s=a(A):s=u.createElement(et,D({},A,{type:g})),u.createElement(K,{className:"recharts-scatter-line",key:"recharts-scatter-line"},s)}},{key:"render",value:function(){var e=this.props,r=e.hide,a=e.points,f=e.line,g=e.className,d=e.xAxis,y=e.yAxis,o=e.left,s=e.top,p=e.width,l=e.height,m=e.id,v=e.isAnimationActive;if(r||!a||!a.length)return null;var h=this.state.isAnimationFinished,b=pt("recharts-scatter",g),A=d&&d.allowDataOverflow,c=y&&y.allowDataOverflow,O=A||c,S=j(m)?this.id:m;return u.createElement(K,{className:b,clipPath:O?"url(#clipPath-".concat(S,")"):null},A||c?u.createElement("defs",null,u.createElement("clipPath",{id:"clipPath-".concat(S)},u.createElement("rect",{x:A?o:o-p/2,y:c?s:s-l/2,width:A?p:p*2,height:c?l:l*2}))):null,f&&this.renderLine(),this.renderErrorBar(),u.createElement(K,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!v||h)&&it.renderCallByParent(this.props,a))}}],[{key:"getDerivedStateFromProps",value:function(e,r){return e.animationId!==r.prevAnimationId?{prevAnimationId:e.animationId,curPoints:e.points,prevPoints:r.curPoints}:e.points!==r.curPoints?{curPoints:e.points}:null}}]),t}(Q.PureComponent);P(R,"displayName","Scatter");P(R,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!nt.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});P(R,"getComposedData",function(i){var t=i.xAxis,n=i.yAxis,e=i.zAxis,r=i.item,a=i.displayedData,f=i.xAxisTicks,g=i.yAxisTicks,d=i.offset,y=r.props.tooltipType,o=X(r.props.children,at),s=j(t.dataKey)?r.props.dataKey:t.dataKey,p=j(n.dataKey)?r.props.dataKey:n.dataKey,l=e&&e.dataKey,m=e?e.range:$.defaultProps.range,v=m&&m[0],h=t.scale.bandwidth?t.scale.bandwidth():0,b=n.scale.bandwidth?n.scale.bandwidth():0,A=a.map(function(c,O){var S=k(c,s),Z=k(c,p),E=!j(l)&&k(c,l)||"-",W=[{name:j(t.dataKey)?r.props.name:t.name||t.dataKey,unit:t.unit||"",value:S,payload:c,dataKey:s,type:y},{name:j(n.dataKey)?r.props.name:n.name||n.dataKey,unit:n.unit||"",value:Z,payload:c,dataKey:p,type:y}];E!=="-"&&W.push({name:e.name||e.dataKey,unit:e.unit||"",value:E,payload:c,dataKey:l,type:y});var N=M({axis:t,ticks:f,bandSize:h,entry:c,index:O,dataKey:s}),F=M({axis:n,ticks:g,bandSize:b,entry:c,index:O,dataKey:p}),q=E!=="-"?e.scale(E):v,T=Math.sqrt(Math.max(q,0)/Math.PI);return x(x({},c),{},{cx:N,cy:F,x:N-T,y:F-T,xAxis:t,yAxis:n,zAxis:e,width:2*T,height:2*T,size:q,node:{x:S,y:Z,z:E},tooltipPayload:W,tooltipPosition:{x:N,y:F},payload:c},o&&o[O]&&o[O].props)});return x({points:A},d)});export{R as S,$ as Z};
