import{b as z}from"./_baseForOwn-62af832b.js";import{R as m,r as k}from"./index-f1f2c4b1.js";import{d as P}from"./ChartContainer-9156f903.js";import{a as Q}from"./generateCategoricalChart-4d82b0f2.js";import{d as U}from"./debounce-5c77766a.js";import{j}from"./jsx-runtime-d079401a.js";import{T as M}from"./ThemingParameters-7e2e4e30.js";import{t as C,g as A}from"./useTooltipFormatter-8aa0c2d1.js";import{d as $}from"./defaults-08caf72d.js";var Z=["x1","y1","x2","y2","key"],ee=["offset"];function O(e){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(e)}function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},T.apply(this,arguments)}function R(e,t){if(e==null)return{};var i=te(e,t),n,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function te(e,t){if(e==null)return{};var i={},n=Object.keys(e),r,a;for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&(i[r]=e[r]);return i}function L(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),i.push.apply(i,n)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?L(Object(i),!0).forEach(function(n){I(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):L(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function re(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,B(n.key),n)}}function ne(e,t,i){return t&&F(e.prototype,t),i&&F(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}function N(e,t){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},N(e,t)}function ae(e){var t=se();return function(){var n=S(e),r;if(t){var a=S(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return oe(this,r)}}function oe(e,t){if(t&&(O(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return le(e)}function le(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function se(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},S(e)}function I(e,t,i){return t=B(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function B(e){var t=ue(e,"string");return O(t)==="symbol"?t:String(t)}function ue(e,t){if(O(e)!=="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t||"default");if(O(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var G=function(e){ie(i,e);var t=ae(i);function i(){return re(this,i),t.apply(this,arguments)}return ne(i,[{key:"renderHorizontal",value:function(r){var a=this,o=this.props,s=o.x,u=o.width,f=o.horizontal;if(!r||!r.length)return null;var d=r.map(function(p,l){var h=g(g({},a.props),{},{x1:s,y1:p,x2:s+u,y2:p,key:"line-".concat(l),index:l});return i.renderLineItem(f,h)});return m.createElement("g",{className:"recharts-cartesian-grid-horizontal"},d)}},{key:"renderVertical",value:function(r){var a=this,o=this.props,s=o.y,u=o.height,f=o.vertical;if(!r||!r.length)return null;var d=r.map(function(p,l){var h=g(g({},a.props),{},{x1:p,y1:s,x2:p,y2:s+u,key:"line-".concat(l),index:l});return i.renderLineItem(f,h)});return m.createElement("g",{className:"recharts-cartesian-grid-vertical"},d)}},{key:"renderVerticalStripes",value:function(r){var a=this.props.verticalFill;if(!a||!a.length)return null;var o=this.props,s=o.fillOpacity,u=o.x,f=o.y,d=o.width,p=o.height,l=r.map(function(c){return Math.round(c+u-u)}).sort(function(c,y){return c-y});u!==l[0]&&l.unshift(0);var h=l.map(function(c,y){var b=!l[y+1],v=b?u+d-c:l[y+1]-c;if(v<=0)return null;var x=y%a.length;return m.createElement("rect",{key:"react-".concat(y),x:c,y:f,width:v,height:p,stroke:"none",fill:a[x],fillOpacity:s,className:"recharts-cartesian-grid-bg"})});return m.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},h)}},{key:"renderHorizontalStripes",value:function(r){var a=this.props.horizontalFill;if(!a||!a.length)return null;var o=this.props,s=o.fillOpacity,u=o.x,f=o.y,d=o.width,p=o.height,l=r.map(function(c){return Math.round(c+f-f)}).sort(function(c,y){return c-y});f!==l[0]&&l.unshift(0);var h=l.map(function(c,y){var b=!l[y+1],v=b?f+p-c:l[y+1]-c;if(v<=0)return null;var x=y%a.length;return m.createElement("rect",{key:"react-".concat(y),y:c,x:u,height:v,width:d,stroke:"none",fill:a[x],fillOpacity:s,className:"recharts-cartesian-grid-bg"})});return m.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},h)}},{key:"renderBackground",value:function(){var r=this.props.fill;if(!r||r==="none")return null;var a=this.props,o=a.fillOpacity,s=a.x,u=a.y,f=a.width,d=a.height;return m.createElement("rect",{x:s,y:u,width:f,height:d,stroke:"none",fill:r,fillOpacity:o,className:"recharts-cartesian-grid-bg"})}},{key:"render",value:function(){var r=this.props,a=r.x,o=r.y,s=r.width,u=r.height,f=r.horizontal,d=r.vertical,p=r.horizontalCoordinatesGenerator,l=r.verticalCoordinatesGenerator,h=r.xAxis,c=r.yAxis,y=r.offset,b=r.chartWidth,v=r.chartHeight,x=r.syncWithTicks,V=r.horizontalValues,E=r.verticalValues;if(!P(s)||s<=0||!P(u)||u<=0||!P(a)||a!==+a||!P(o)||o!==+o)return null;var q=this.props,_=q.horizontalPoints,w=q.verticalPoints;if((!_||!_.length)&&z(p)){var H=V&&V.length;_=p({yAxis:c?g(g({},c),{},{ticks:H?V:c.ticks}):void 0,width:b,height:v,offset:y},H?!0:x)}if((!w||!w.length)&&z(l)){var D=E&&E.length;w=l({xAxis:h?g(g({},h),{},{ticks:D?E:h.ticks}):void 0,width:b,height:v,offset:y},D?!0:x)}return m.createElement("g",{className:"recharts-cartesian-grid"},this.renderBackground(),f&&this.renderHorizontal(_),d&&this.renderVertical(w),f&&this.renderHorizontalStripes(_),d&&this.renderVerticalStripes(w))}}],[{key:"renderLineItem",value:function(r,a){var o;if(m.isValidElement(r))o=m.cloneElement(r,a);else if(z(r))o=r(a);else{var s=a.x1,u=a.y1,f=a.x2,d=a.y2,p=a.key,l=R(a,Z),h=Q(l);h.offset;var c=R(h,ee);o=m.createElement("line",T({},c,{x1:s,y1:u,x2:f,y2:d,fill:"none",key:p}))}return o}}]),i}(k.PureComponent);I(G,"displayName","CartesianGrid");I(G,"defaultProps",{horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]});var K=function(){return null};K.displayName="XAxis";K.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0};var J=function(){return null};J.displayName="YAxis";J.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1};const be=(e,t)=>k.useMemo(()=>({right:(e==null?void 0:e.right)??30,top:(e==null?void 0:e.top)??t?40:20,bottom:(e==null?void 0:e.bottom)??20,left:(e==null?void 0:e.left)??10}),[e,t]),W=30,xe=(e,t)=>{const[i,n]=k.useState(Array(t).fill(W)),r=k.useRef(i);return k.useEffect(()=>{const a=U(()=>{var d;const s=Array(t).fill(W);(d=e.current)==null||d.querySelectorAll(".xAxis").forEach((p,l)=>{var c;const h=(c=p==null?void 0:p.getBBox())==null?void 0:c.height;h>30&&(s[l]=h)});const u=r.current.length===s.length,f=r.current.every((p,l)=>s[l]===p);u&&f||(r.current=s,n(s))},75),o=new MutationObserver(a);return e.current&&o.observe(e.current,{characterData:!1,characterDataOldValue:!1,attributes:!1,childList:!0,subtree:!0}),()=>{a.cancel(),o.disconnect()}},[e,n,r]),i},X=e=>{const{x:t,y:i,payload:n,config:r,visibleTicksCount:a,width:o,secondYAxisConfig:s,tickFormatter:u,index:f}=e,d=o/a,p=d<=100,l=(u==null?void 0:u(n.value,f))??r.formatter(n.value);let h=l;if(p)h=C(l,11);else if(A(l)>d)for(let c=`${l}`.length;c>0&&(h=C(l,c),!(A(h)<=d));c--);return j.jsx("g",{style:{direction:"ltr"},transform:`translate(${t},${i+(s?0:10)})`,children:j.jsx("text",{fill:(s==null?void 0:s.color)??M.sapContent_LabelColor,transform:p?"rotate(-35)":void 0,textAnchor:p?"end":"middle",children:h})})};try{X.displayName="XAxisTicks",X.__docgenInfo={description:"",displayName:"XAxisTicks",props:{visibleTicksCount:{defaultValue:null,description:"",name:"visibleTicksCount",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},payload:{defaultValue:null,description:"",name:"payload",required:!1,type:{name:"any"}},config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IChartMeasure"}},secondYAxisConfig:{defaultValue:null,description:"",name:"secondYAxisConfig",required:!1,type:{name:"{ color: string; }"}},tickFormatter:{defaultValue:null,description:"",name:"tickFormatter",required:!1,type:{name:"(value: any, index: number) => string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}}}catch{}const Y=e=>{const{x:t,y:i,payload:n,config:r,secondYAxisConfig:a,tickFormatter:o,index:s}=e,u=(o==null?void 0:o(n.value,s))??r.formatter(n.value);let f=u;if(A(u)>$)for(let d=`${u}`.length;d>0&&(f=C(u,d),!(A(f)<=$));d--);return j.jsx("g",{transform:`translate(${t},${i+3})`,children:j.jsx("text",{fill:(a==null?void 0:a.color)??M.sapContent_LabelColor,textAnchor:a?"start":"end",children:f})})};try{Y.displayName="YAxisTicks",Y.__docgenInfo={description:"",displayName:"YAxisTicks",props:{x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},payload:{defaultValue:null,description:"",name:"payload",required:!1,type:{name:"any"}},config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IChartMeasure"}},secondYAxisConfig:{defaultValue:null,description:"",name:"secondYAxisConfig",required:!1,type:{name:"{ color: string; }"}},tickFormatter:{defaultValue:null,description:"",name:"tickFormatter",required:!1,type:{name:"(value: any, index: number) => string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}}}catch{}export{G as C,K as X,J as Y,xe as a,Y as b,X as c,be as u};
//# sourceMappingURL=YAxisTicks-42b5e60d.js.map
