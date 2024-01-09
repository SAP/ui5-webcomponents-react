import{R as f,r as H}from"./index-OjgoNOWw.js";import{S as J,j as Q,L as K,A as U,g as B,C as tt,a as et,G as it,b as M,E as nt,h as rt}from"./generateCategoricalChart-JvfD5W-k.js";import{u as at,a as C,j as ot,i as k,b as st,f as X,k as lt,c as ct,d as w}from"./ChartContainer-_qNyFeGq.js";import{b as pt}from"./_baseForOwn-UZJwRxDU.js";var $=function(){return null};$.displayName="ZAxis";$.defaultProps={zAxisId:0,range:[64,64],scale:"auto",type:"number"};var ut=["option","isActive"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},D.apply(this,arguments)}function ft(e,t){if(e==null)return{};var n=yt(e,t),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function yt(e,t){if(e==null)return{};var n={},i=Object.keys(e),r,a;for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function mt(e){var t=e.option,n=e.isActive,i=ft(e,ut);return typeof t=="string"?f.createElement(J,D({option:f.createElement(Q,D({type:t},i)),isActive:n,shapeType:"symbols"},i)):f.createElement(J,D({option:t,isActive:n,shapeType:"symbols"},i))}function E(e){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(e)}function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},T.apply(this,arguments)}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?V(Object(n),!0).forEach(function(i){S(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function dt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,Y(i.key),i)}}function vt(e,t,n){return t&&G(e.prototype,t),n&&G(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ht(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},L(e,t)}function bt(e){var t=xt();return function(){var i=N(e),r;if(t){var a=N(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return At(this,r)}}function At(e,t){if(t&&(E(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return z(e)}function z(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},N(e)}function S(e,t,n){return t=Y(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y(e){var t=gt(e,"string");return E(t)==="symbol"?t:String(t)}function gt(e,t){if(E(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(E(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Z=function(e){ht(n,e);var t=bt(n);function n(){var i;dt(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),S(z(i),"state",{isAnimationFinished:!1}),S(z(i),"handleAnimationEnd",function(){i.setState({isAnimationFinished:!0})}),S(z(i),"handleAnimationStart",function(){i.setState({isAnimationFinished:!1})}),S(z(i),"id",at("recharts-scatter-")),i}return vt(n,[{key:"renderSymbolsStatically",value:function(r){var a=this,o=this.props,m=o.shape,O=o.activeShape,y=o.activeIndex,d=C(this.props);return r.map(function(s,c){var p=y===c,u=p?O:m,h=g(g({key:"symbol-".concat(c)},d),s);return f.createElement(K,T({className:"recharts-scatter-symbol"},ot(a.props,s,c),{key:"symbol-".concat(s==null?void 0:s.cx,"-").concat(s==null?void 0:s.cy,"-").concat(s==null?void 0:s.size),role:"img"}),f.createElement(mt,T({option:u,isActive:p},h)))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,a=this.props,o=a.points,m=a.isAnimationActive,O=a.animationBegin,y=a.animationDuration,d=a.animationEasing,s=a.animationId,c=this.state.prevPoints;return f.createElement(U,{begin:O,duration:y,isActive:m,easing:d,from:{t:0},to:{t:1},key:"pie-".concat(s),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(p){var u=p.t,h=o.map(function(b,A){var x=c&&c[A];if(x){var l=k(x.cx,b.cx),v=k(x.cy,b.cy),P=k(x.size,b.size);return g(g({},b),{},{cx:l(u),cy:v(u),size:P(u)})}var j=k(0,b.size);return g(g({},b),{},{size:j(u)})});return f.createElement(K,null,r.renderSymbolsStatically(h))})}},{key:"renderSymbols",value:function(){var r=this.props,a=r.points,o=r.isAnimationActive,m=this.state.prevPoints;return o&&a&&a.length&&(!m||!st(m,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var a=this.props,o=a.points,m=a.xAxis,O=a.yAxis,y=a.children,d=X(y,nt);return d?d.map(function(s,c){var p=s.props,u=p.direction,h=p.dataKey;return f.cloneElement(s,{key:"".concat(u,"-").concat(h,"-").concat(o[c]),data:o,xAxis:m,yAxis:O,layout:u==="x"?"vertical":"horizontal",dataPointFormatter:function(A,x){return{x:A.cx,y:A.cy,value:u==="x"?+A.node.x:+A.node.y,errorVal:B(A,x)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,a=r.points,o=r.line,m=r.lineType,O=r.lineJointType,y=C(this.props),d=C(o),s,c;if(m==="joint")s=a.map(function(v){return{x:v.cx,y:v.cy}});else if(m==="fitting"){var p=lt(a),u=p.xmin,h=p.xmax,b=p.a,A=p.b,x=function(P){return b*P+A};s=[{x:u,y:x(u)},{x:h,y:x(h)}]}var l=g(g(g({},y),{},{fill:"none",stroke:y&&y.fill},d),{},{points:s});return f.isValidElement(o)?c=f.cloneElement(o,l):pt(o)?c=o(l):c=f.createElement(tt,T({},l,{type:O})),f.createElement(K,{className:"recharts-scatter-line",key:"recharts-scatter-line"},c)}},{key:"render",value:function(){var r=this.props,a=r.hide,o=r.points,m=r.line,O=r.className,y=r.xAxis,d=r.yAxis,s=r.left,c=r.top,p=r.width,u=r.height,h=r.id,b=r.isAnimationActive;if(a||!o||!o.length)return null;var A=this.state.isAnimationFinished,x=ct("recharts-scatter",O),l=y&&y.allowDataOverflow,v=d&&d.allowDataOverflow,P=l||v,j=w(h)?this.id:h;return f.createElement(K,{className:x,clipPath:P?"url(#clipPath-".concat(j,")"):null},l||v?f.createElement("defs",null,f.createElement("clipPath",{id:"clipPath-".concat(j)},f.createElement("rect",{x:l?s:s-p/2,y:v?c:c-u/2,width:l?p:p*2,height:v?u:u*2}))):null,m&&this.renderLine(),this.renderErrorBar(),f.createElement(K,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!b||A)&&et.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}}]),n}(H.PureComponent);S(Z,"displayName","Scatter");S(Z,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!it.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});S(Z,"getComposedData",function(e){var t=e.xAxis,n=e.yAxis,i=e.zAxis,r=e.item,a=e.displayedData,o=e.xAxisTicks,m=e.yAxisTicks,O=e.offset,y=r.props.tooltipType,d=X(r.props.children,rt),s=w(t.dataKey)?r.props.dataKey:t.dataKey,c=w(n.dataKey)?r.props.dataKey:n.dataKey,p=i&&i.dataKey,u=i?i.range:$.defaultProps.range,h=u&&u[0],b=t.scale.bandwidth?t.scale.bandwidth():0,A=n.scale.bandwidth?n.scale.bandwidth():0,x=a.map(function(l,v){var P=B(l,s),j=B(l,c),_=!w(p)&&B(l,p)||"-",W=[{name:w(t.dataKey)?r.props.name:t.name||t.dataKey,unit:t.unit||"",value:P,payload:l,dataKey:s,type:y},{name:w(n.dataKey)?r.props.name:n.name||n.dataKey,unit:n.unit||"",value:j,payload:l,dataKey:c,type:y}];_!=="-"&&W.push({name:i.name||i.dataKey,unit:i.unit||"",value:_,payload:l,dataKey:p,type:y});var F=M({axis:t,ticks:o,bandSize:b,entry:l,index:v,dataKey:s}),R=M({axis:n,ticks:m,bandSize:A,entry:l,index:v,dataKey:c}),q=_!=="-"?i.scale(_):h,I=Math.sqrt(Math.max(q,0)/Math.PI);return g(g({},l),{},{cx:F,cy:R,x:F-I,y:R-I,xAxis:t,yAxis:n,zAxis:i,width:2*I,height:2*I,size:q,node:{x:P,y:j,z:_},tooltipPayload:W,tooltipPosition:{x:F,y:R},payload:l},d&&d[v]&&d[v].props)});return g({points:x},O)});export{Z as S,$ as Z};
