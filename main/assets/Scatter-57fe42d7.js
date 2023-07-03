import{u as Y,a as T,d as H,O as Q,e as U,b as w}from"./ChartContainer-e57533ac.js";import{i as q}from"./_baseForOwn-800a0312.js";import{R as f,r as ee}from"./index-ebeaab24.js";import{S as te,c as R,d as K,l as ie,A as re,k as G,h as k,e as ne,L as ae,G as oe,i as J,E as se,C as le}from"./generateCategoricalChart-6b5b295d.js";var L=function(){return null};L.displayName="ZAxis";L.defaultProps={zAxisId:0,range:[64,64],scale:"auto",type:"number"};function _(t){return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(t)}function z(){return z=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},z.apply(this,arguments)}function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?M(Object(n),!0).forEach(function(i){S(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function ce(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function W(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,X(i.key),i)}}function ue(t,e,n){return e&&W(t.prototype,e),n&&W(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function pe(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},C(t,e)}function fe(t){var e=me();return function(){var i=B(t),r;if(e){var a=B(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return ye(this,r)}}function ye(t,e){if(e&&(_(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return I(t)}function I(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function me(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},B(t)}function S(t,e,n){return e=X(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function X(t){var e=de(t,"string");return _(e)==="symbol"?e:String(e)}function de(t,e){if(_(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(_(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Z=function(t){pe(n,t);var e=fe(n);function n(){var i;ce(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return i=e.call.apply(e,[this].concat(a)),S(I(i),"state",{isAnimationFinished:!1}),S(I(i),"handleAnimationEnd",function(){i.setState({isAnimationFinished:!0})}),S(I(i),"handleAnimationStart",function(){i.setState({isAnimationFinished:!1})}),S(I(i),"id",Y("recharts-scatter-")),i}return ue(n,[{key:"renderSymbolsStatically",value:function(r){var a=this,o=this.props,y=o.shape,x=o.activeShape,p=o.activeIndex,m=R(this.props);return r.map(function(u,s){var c=A(A({key:"symbol-".concat(s)},m),u);return f.createElement(K,z({className:"recharts-scatter-symbol"},ie(a.props,u,s),{key:"symbol-".concat(s),role:"img"}),n.renderSymbolItem(p===s?x:y,c))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,a=this.props,o=a.points,y=a.isAnimationActive,x=a.animationBegin,p=a.animationDuration,m=a.animationEasing,u=a.animationId,s=this.state.prevPoints;return f.createElement(re,{begin:x,duration:p,isActive:y,easing:m,from:{t:0},to:{t:1},key:"pie-".concat(u),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(c){var d=c.t,v=o.map(function(b,O){var P=s&&s[O];if(P){var l=T(P.cx,b.cx),h=T(P.cy,b.cy),g=T(P.size,b.size);return A(A({},b),{},{cx:l(d),cy:h(d),size:g(d)})}var E=T(0,b.size);return A(A({},b),{},{size:E(d)})});return f.createElement(K,null,r.renderSymbolsStatically(v))})}},{key:"renderSymbols",value:function(){var r=this.props,a=r.points,o=r.isAnimationActive,y=this.state.prevPoints;return o&&a&&a.length&&(!y||!H(y,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var a=this.props,o=a.points,y=a.xAxis,x=a.yAxis,p=a.children,m=G(p,se);return m?m.map(function(u,s){var c=u.props.direction;return f.cloneElement(u,{key:s,data:o,xAxis:y,yAxis:x,layout:c==="x"?"vertical":"horizontal",dataPointFormatter:function(v,b){return{x:v.cx,y:v.cy,value:c==="x"?+v.node.x:+v.node.y,errorVal:k(v,b)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,a=r.points,o=r.line,y=r.lineType,x=r.lineJointType,p=R(this.props),m=R(o),u,s;if(y==="joint")u=a.map(function(h){return{x:h.cx,y:h.cy}});else if(y==="fitting"){var c=Q(a),d=c.xmin,v=c.xmax,b=c.a,O=c.b,P=function(g){return b*g+O};u=[{x:d,y:P(d)},{x:v,y:P(v)}]}var l=A(A(A({},p),{},{fill:"none",stroke:p&&p.fill},m),{},{points:u});return f.isValidElement(o)?s=f.cloneElement(o,l):q(o)?s=o(l):s=f.createElement(ne,z({},l,{type:x})),f.createElement(K,{className:"recharts-scatter-line",key:"recharts-scatter-line"},s)}},{key:"render",value:function(){var r=this.props,a=r.hide,o=r.points,y=r.line,x=r.className,p=r.xAxis,m=r.yAxis,u=r.left,s=r.top,c=r.width,d=r.height,v=r.id,b=r.isAnimationActive;if(a||!o||!o.length)return null;var O=this.state.isAnimationFinished,P=U("recharts-scatter",x),l=p&&p.allowDataOverflow,h=m&&m.allowDataOverflow,g=l||h,E=w(v)?this.id:v;return f.createElement(K,{className:P,clipPath:g?"url(#clipPath-".concat(E,")"):null},l||h?f.createElement("defs",null,f.createElement("clipPath",{id:"clipPath-".concat(E)},f.createElement("rect",{x:l?u:u-c/2,y:h?s:s-d/2,width:l?c:c*2,height:h?d:d*2}))):null,y&&this.renderLine(),this.renderErrorBar(),f.createElement(K,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!b||O)&&ae.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}},{key:"renderSymbolItem",value:function(r,a){var o;return f.isValidElement(r)?o=f.cloneElement(r,a):q(r)?o=r(a):typeof r=="string"&&(o=f.createElement(te,z({},a,{type:r}))),o}}]),n}(ee.PureComponent);S(Z,"displayName","Scatter");S(Z,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!oe.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});S(Z,"getComposedData",function(t){var e=t.xAxis,n=t.yAxis,i=t.zAxis,r=t.item,a=t.displayedData,o=t.xAxisTicks,y=t.yAxisTicks,x=t.offset,p=r.props.tooltipType,m=G(r.props.children,le),u=w(e.dataKey)?r.props.dataKey:e.dataKey,s=w(n.dataKey)?r.props.dataKey:n.dataKey,c=i&&i.dataKey,d=i?i.range:L.defaultProps.range,v=d&&d[0],b=e.scale.bandwidth?e.scale.bandwidth():0,O=n.scale.bandwidth?n.scale.bandwidth():0,P=a.map(function(l,h){var g=k(l,u),E=k(l,s),j=!w(c)&&k(l,c)||"-",$=[{name:w(e.dataKey)?r.props.name:e.name||e.dataKey,unit:e.unit||"",value:g,payload:l,dataKey:u,type:p},{name:w(n.dataKey)?r.props.name:n.name||n.dataKey,unit:n.unit||"",value:E,payload:l,dataKey:s,type:p}];j!=="-"&&$.push({name:i.name||i.dataKey,unit:i.unit||"",value:j,payload:l,dataKey:c,type:p});var N=J({axis:e,ticks:o,bandSize:b,entry:l,index:h,dataKey:u}),F=J({axis:n,ticks:y,bandSize:O,entry:l,index:h,dataKey:s}),V=j!=="-"?i.scale(j):v,D=Math.sqrt(Math.max(V,0)/Math.PI);return A(A({},l),{},{cx:N,cy:F,x:N-D,y:F-D,xAxis:e,yAxis:n,zAxis:i,width:2*D,height:2*D,size:V,node:{x:g,y:E,z:j},tooltipPayload:$,tooltipPosition:{x:N,y:F},payload:l},m&&m[h]&&m[h].props)});return A({points:P},x)});export{Z as S,L as Z};
//# sourceMappingURL=Scatter-57fe42d7.js.map
