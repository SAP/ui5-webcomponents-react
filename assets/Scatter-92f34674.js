import{u as Y,i as T,_ as H,g as Q,c as U,a as w}from"./ChartContainer-4f9246c2.js";import{c as q}from"./_baseForOwn-2252ef3e.js";import{R as f,r as ee}from"./index-f1f2c4b1.js";import{S as te,a as R,L as K,d as re,A as ie,f as G,g as k,C as ne,b as ae,G as oe,c as J,E as se,e as le}from"./generateCategoricalChart-63f72a77.js";var L=function(){return null};L.displayName="ZAxis";L.defaultProps={zAxisId:0,range:[64,64],scale:"auto",type:"number"};function _(t){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(t)}function z(){return z=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},z.apply(this,arguments)}function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?M(Object(n),!0).forEach(function(r){S(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ce(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,X(r.key),r)}}function ue(t,e,n){return e&&W(t.prototype,e),n&&W(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function pe(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},C(t,e)}function fe(t){var e=me();return function(){var r=B(t),i;if(e){var a=B(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return ye(this,i)}}function ye(t,e){if(e&&(_(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return I(t)}function I(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function me(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},B(t)}function S(t,e,n){return e=X(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function X(t){var e=de(t,"string");return _(e)==="symbol"?e:String(e)}function de(t,e){if(_(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(_(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Z=function(t){pe(n,t);var e=fe(n);function n(){var r;ce(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=e.call.apply(e,[this].concat(a)),S(I(r),"state",{isAnimationFinished:!1}),S(I(r),"handleAnimationEnd",function(){r.setState({isAnimationFinished:!0})}),S(I(r),"handleAnimationStart",function(){r.setState({isAnimationFinished:!1})}),S(I(r),"id",Y("recharts-scatter-")),r}return ue(n,[{key:"renderSymbolsStatically",value:function(i){var a=this,o=this.props,y=o.shape,x=o.activeShape,p=o.activeIndex,m=R(this.props);return i.map(function(u,s){var c=A(A({key:"symbol-".concat(s)},m),u);return f.createElement(K,z({className:"recharts-scatter-symbol"},re(a.props,u,s),{key:"symbol-".concat(s),role:"img"}),n.renderSymbolItem(p===s?x:y,c))})}},{key:"renderSymbolsWithAnimation",value:function(){var i=this,a=this.props,o=a.points,y=a.isAnimationActive,x=a.animationBegin,p=a.animationDuration,m=a.animationEasing,u=a.animationId,s=this.state.prevPoints;return f.createElement(ie,{begin:x,duration:p,isActive:y,easing:m,from:{t:0},to:{t:1},key:"pie-".concat(u),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(c){var d=c.t,v=o.map(function(b,O){var g=s&&s[O];if(g){var l=T(g.cx,b.cx),h=T(g.cy,b.cy),P=T(g.size,b.size);return A(A({},b),{},{cx:l(d),cy:h(d),size:P(d)})}var E=T(0,b.size);return A(A({},b),{},{size:E(d)})});return f.createElement(K,null,i.renderSymbolsStatically(v))})}},{key:"renderSymbols",value:function(){var i=this.props,a=i.points,o=i.isAnimationActive,y=this.state.prevPoints;return o&&a&&a.length&&(!y||!H(y,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var i=this.props.isAnimationActive;if(i&&!this.state.isAnimationFinished)return null;var a=this.props,o=a.points,y=a.xAxis,x=a.yAxis,p=a.children,m=G(p,se);return m?m.map(function(u,s){var c=u.props.direction;return f.cloneElement(u,{key:s,data:o,xAxis:y,yAxis:x,layout:c==="x"?"vertical":"horizontal",dataPointFormatter:function(v,b){return{x:v.cx,y:v.cy,value:c==="x"?+v.node.x:+v.node.y,errorVal:k(v,b)}}})}):null}},{key:"renderLine",value:function(){var i=this.props,a=i.points,o=i.line,y=i.lineType,x=i.lineJointType,p=R(this.props),m=R(o),u,s;if(y==="joint")u=a.map(function(h){return{x:h.cx,y:h.cy}});else if(y==="fitting"){var c=Q(a),d=c.xmin,v=c.xmax,b=c.a,O=c.b,g=function(P){return b*P+O};u=[{x:d,y:g(d)},{x:v,y:g(v)}]}var l=A(A(A({},p),{},{fill:"none",stroke:p&&p.fill},m),{},{points:u});return f.isValidElement(o)?s=f.cloneElement(o,l):q(o)?s=o(l):s=f.createElement(ne,z({},l,{type:x})),f.createElement(K,{className:"recharts-scatter-line",key:"recharts-scatter-line"},s)}},{key:"render",value:function(){var i=this.props,a=i.hide,o=i.points,y=i.line,x=i.className,p=i.xAxis,m=i.yAxis,u=i.left,s=i.top,c=i.width,d=i.height,v=i.id,b=i.isAnimationActive;if(a||!o||!o.length)return null;var O=this.state.isAnimationFinished,g=U("recharts-scatter",x),l=p&&p.allowDataOverflow,h=m&&m.allowDataOverflow,P=l||h,E=w(v)?this.id:v;return f.createElement(K,{className:g,clipPath:P?"url(#clipPath-".concat(E,")"):null},l||h?f.createElement("defs",null,f.createElement("clipPath",{id:"clipPath-".concat(E)},f.createElement("rect",{x:l?u:u-c/2,y:h?s:s-d/2,width:l?c:c*2,height:h?d:d*2}))):null,y&&this.renderLine(),this.renderErrorBar(),f.createElement(K,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!b||O)&&ae.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(i,a){return i.animationId!==a.prevAnimationId?{prevAnimationId:i.animationId,curPoints:i.points,prevPoints:a.curPoints}:i.points!==a.curPoints?{curPoints:i.points}:null}},{key:"renderSymbolItem",value:function(i,a){var o;return f.isValidElement(i)?o=f.cloneElement(i,a):q(i)?o=i(a):typeof i=="string"&&(o=f.createElement(te,z({},a,{type:i}))),o}}]),n}(ee.PureComponent);S(Z,"displayName","Scatter");S(Z,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!oe.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});S(Z,"getComposedData",function(t){var e=t.xAxis,n=t.yAxis,r=t.zAxis,i=t.item,a=t.displayedData,o=t.xAxisTicks,y=t.yAxisTicks,x=t.offset,p=i.props.tooltipType,m=G(i.props.children,le),u=w(e.dataKey)?i.props.dataKey:e.dataKey,s=w(n.dataKey)?i.props.dataKey:n.dataKey,c=r&&r.dataKey,d=r?r.range:L.defaultProps.range,v=d&&d[0],b=e.scale.bandwidth?e.scale.bandwidth():0,O=n.scale.bandwidth?n.scale.bandwidth():0,g=a.map(function(l,h){var P=k(l,u),E=k(l,s),j=!w(c)&&k(l,c)||"-",$=[{name:w(e.dataKey)?i.props.name:e.name||e.dataKey,unit:e.unit||"",value:P,payload:l,dataKey:u,type:p},{name:w(n.dataKey)?i.props.name:n.name||n.dataKey,unit:n.unit||"",value:E,payload:l,dataKey:s,type:p}];j!=="-"&&$.push({name:r.name||r.dataKey,unit:r.unit||"",value:j,payload:l,dataKey:c,type:p});var N=J({axis:e,ticks:o,bandSize:b,entry:l,index:h,dataKey:u}),F=J({axis:n,ticks:y,bandSize:O,entry:l,index:h,dataKey:s}),V=j!=="-"?r.scale(j):v,D=Math.sqrt(Math.max(V,0)/Math.PI);return A(A({},l),{},{cx:N,cy:F,x:N-D,y:F-D,xAxis:e,yAxis:n,zAxis:r,width:2*D,height:2*D,size:V,node:{x:P,y:E,z:j},tooltipPayload:$,tooltipPosition:{x:N,y:F},payload:l},m&&m[h]&&m[h].props)});return A({points:g},x)});export{Z as S,L as Z};
//# sourceMappingURL=Scatter-92f34674.js.map
