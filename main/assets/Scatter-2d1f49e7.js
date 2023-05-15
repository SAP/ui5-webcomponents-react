import{u as Y,a as k,d as H,O as Q,e as U,b as E}from"./ChartContainer-0b6407cf.js";import{i as q}from"./_baseForOwn-800a0312.js";import{R as y,r as ee}from"./index-ebeaab24.js";import{S as te,f as R,c as j,l as re,A as ne,k as G,d as ie,b as ae,G as oe,g as I,e as J,E as se,C as le}from"./generateCategoricalChart-fe5cdf87.js";var L=function(){return null};L.displayName="ZAxis";L.defaultProps={zAxisId:0,range:[64,64],scale:"auto",type:"number"};function w(t){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(t)}function z(){return z=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},z.apply(this,arguments)}function M(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,r)}return i}function A(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?M(Object(i),!0).forEach(function(r){P(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):M(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function ce(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function W(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,X(r.key),r)}}function ue(t,e,i){return e&&W(t.prototype,e),i&&W(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function pe(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},C(t,e)}function fe(t){var e=me();return function(){var r=B(t),n;if(e){var a=B(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return ye(this,n)}}function ye(t,e){if(e&&(w(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return K(t)}function K(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function me(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},B(t)}function P(t,e,i){return e=X(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function X(t){var e=de(t,"string");return w(e)==="symbol"?e:String(e)}function de(t,e){if(w(t)!=="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e||"default");if(w(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Z=function(t){pe(i,t);var e=fe(i);function i(){var r;ce(this,i);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=e.call.apply(e,[this].concat(a)),P(K(r),"state",{isAnimationFinished:!1}),P(K(r),"handleAnimationEnd",function(){r.setState({isAnimationFinished:!0})}),P(K(r),"handleAnimationStart",function(){r.setState({isAnimationFinished:!1})}),P(K(r),"id",Y("recharts-scatter-")),r}return ue(i,[{key:"renderSymbolsStatically",value:function(n){var a=this,o=this.props,m=o.shape,x=o.activeShape,p=o.activeIndex,d=R(this.props);return n.map(function(f,l){var s=A(A({key:"symbol-".concat(l)},d),f);return y.createElement(j,z({className:"recharts-scatter-symbol"},re(a.props,f,l),{key:"symbol-".concat(l),role:"img"}),i.renderSymbolItem(p===l?x:m,s))})}},{key:"renderSymbolsWithAnimation",value:function(){var n=this,a=this.props,o=a.points,m=a.isAnimationActive,x=a.animationBegin,p=a.animationDuration,d=a.animationEasing,f=a.animationId,l=this.state.prevPoints;return y.createElement(ne,{begin:x,duration:p,isActive:m,easing:d,from:{t:0},to:{t:1},key:"pie-".concat(f),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(s){var u=s.t,h=o.map(function(b,S){var g=l&&l[S];if(g){var c=k(g.cx,b.cx),v=k(g.cy,b.cy),O=k(g.size,b.size);return A(A({},b),{},{cx:c(u),cy:v(u),size:O(u)})}var D=k(0,b.size);return A(A({},b),{},{size:D(u)})});return y.createElement(j,null,n.renderSymbolsStatically(h))})}},{key:"renderSymbols",value:function(){var n=this.props,a=n.points,o=n.isAnimationActive,m=this.state.prevPoints;return o&&a&&a.length&&(!m||!H(m,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var n=this.props.isAnimationActive;if(n&&!this.state.isAnimationFinished)return null;var a=this.props,o=a.points,m=a.xAxis,x=a.yAxis,p=a.children,d=G(p,se);if(!d)return null;function f(s,u){return{x:s.cx,y:s.cy,value:+s.node.y,errorVal:I(s,u)}}function l(s,u){return{x:s.cx,y:s.cy,value:+s.node.x,errorVal:I(s,u)}}return d.map(function(s,u){var h=s.props.direction;return y.cloneElement(s,{key:u,data:o,xAxis:m,yAxis:x,layout:h==="x"?"vertical":"horizontal",dataPointFormatter:h==="x"?l:f})})}},{key:"renderLine",value:function(){var n=this.props,a=n.points,o=n.line,m=n.lineType,x=n.lineJointType,p=R(this.props),d=R(o),f,l;if(m==="joint")f=a.map(function(v){return{x:v.cx,y:v.cy}});else if(m==="fitting"){var s=Q(a),u=s.xmin,h=s.xmax,b=s.a,S=s.b,g=function(O){return b*O+S};f=[{x:u,y:g(u)},{x:h,y:g(h)}]}var c=A(A(A({},p),{},{fill:"none",stroke:p&&p.fill},d),{},{points:f});return y.isValidElement(o)?l=y.cloneElement(o,c):q(o)?l=o(c):l=y.createElement(ie,z({},c,{type:x})),y.createElement(j,{className:"recharts-scatter-line",key:"recharts-scatter-line"},l)}},{key:"render",value:function(){var n=this.props,a=n.hide,o=n.points,m=n.line,x=n.className,p=n.xAxis,d=n.yAxis,f=n.left,l=n.top,s=n.width,u=n.height,h=n.id,b=n.isAnimationActive;if(a||!o||!o.length)return null;var S=this.state.isAnimationFinished,g=U("recharts-scatter",x),c=p&&p.allowDataOverflow||d&&d.allowDataOverflow,v=E(h)?this.id:h;return y.createElement(j,{className:g,clipPath:c?"url(#clipPath-".concat(v,")"):null},c?y.createElement("defs",null,y.createElement("clipPath",{id:"clipPath-".concat(v)},y.createElement("rect",{x:f,y:l,width:s,height:u}))):null,m&&this.renderLine(),this.renderErrorBar(),y.createElement(j,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!b||S)&&ae.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(n,a){return n.animationId!==a.prevAnimationId?{prevAnimationId:n.animationId,curPoints:n.points,prevPoints:a.curPoints}:n.points!==a.curPoints?{curPoints:n.points}:null}},{key:"renderSymbolItem",value:function(n,a){var o;return y.isValidElement(n)?o=y.cloneElement(n,a):q(n)?o=n(a):typeof n=="string"&&(o=y.createElement(te,z({},a,{type:n}))),o}}]),i}(ee.PureComponent);P(Z,"displayName","Scatter");P(Z,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!oe.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});P(Z,"getComposedData",function(t){var e=t.xAxis,i=t.yAxis,r=t.zAxis,n=t.item,a=t.displayedData,o=t.xAxisTicks,m=t.yAxisTicks,x=t.offset,p=n.props.tooltipType,d=G(n.props.children,le),f=E(e.dataKey)?n.props.dataKey:e.dataKey,l=E(i.dataKey)?n.props.dataKey:i.dataKey,s=r&&r.dataKey,u=r?r.range:L.defaultProps.range,h=u&&u[0],b=e.scale.bandwidth?e.scale.bandwidth():0,S=i.scale.bandwidth?i.scale.bandwidth():0,g=a.map(function(c,v){var O=I(c,f),D=I(c,l),_=!E(s)&&I(c,s)||"-",$=[{name:E(e.dataKey)?n.props.name:e.name||e.dataKey,unit:e.unit||"",value:O,payload:c,dataKey:f,type:p},{name:E(i.dataKey)?n.props.name:i.name||i.dataKey,unit:i.unit||"",value:D,payload:c,dataKey:l,type:p}];_!=="-"&&$.push({name:r.name||r.dataKey,unit:r.unit||"",value:_,payload:c,dataKey:s,type:p});var N=J({axis:e,ticks:o,bandSize:b,entry:c,index:v,dataKey:f}),F=J({axis:i,ticks:m,bandSize:S,entry:c,index:v,dataKey:l}),V=_!=="-"?r.scale(_):h,T=Math.sqrt(Math.max(V,0)/Math.PI);return A(A({},c),{},{cx:N,cy:F,x:N-T,y:F-T,xAxis:e,yAxis:i,zAxis:r,width:2*T,height:2*T,size:V,node:{x:O,y:D,z:_},tooltipPayload:$,tooltipPosition:{x:N,y:F},payload:c},d&&d[v]&&d[v].props)});return A({points:g},x)});export{Z as S,L as Z};
//# sourceMappingURL=Scatter-2d1f49e7.js.map
