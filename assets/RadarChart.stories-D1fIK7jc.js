import{c as ke,s as Ee}from"./DemoProps-BWWtsAFv.js";import{j as A}from"./useIsomorphicLayoutEffect-BZqdrUgG.js";import{T as Re}from"./ThemingParameters-DOkJX3Ed.js";import{e as ee}from"./index-CBpU8qq5.js";import{a as u,g as Le,r as R}from"./index-BP8_t0zE.js";import{u as Te,C as Ne}from"./ChartDataLabel-DxcRT_-f.js";import{u as Ve,a as qe,b as Ie}from"./staticProps-3DmeqWTG.js";import{u as $e,a as ze}from"./useTooltipFormatter-CJJVsjly.js";import{a as k,c as W,i as q,b as Fe,d as te,C as Me}from"./ChartContainer-DVdCevVS.js";import{a as Ke}from"./defaults-CIc9mI4H.js";import{c as We,P as Pe,a as we,b as Be}from"./Placeholder-CB1VSPbs.js";import{p as L,D as Ge,L as X,A as Ue,a as He,G as Ye,g as ne,v as Xe,c as Ze,m as Je,T as Qe,d as et}from"./generateCategoricalChart-cGmIKBqB.js";import{b as I}from"./_baseForOwn-B3hW39GE.js";import"./_baseUniq-BbzeZuBs.js";import"./index-Dy6e-Nfq.js";import"./clsx-B-dksMZM.js";import"./i18n-defaults-CNtbapJN.js";import"./i18nBundle-VKnKJfRd.js";import"./Boot-DdVREbXE.js";import"./EventProvider-B3ZIXKWe.js";import"./I18nContext-RJHUyvz-.js";import"./useStylesheet-DdJpFDQo.js";import"./throttle-Cgcjdhlw.js";import"./isString-CadNZdQX.js";import"./index-DxJV5SPg.js";import"./iframe-0t0bluh7.js";import"../sb-preview/runtime.js";import"./Label-CxCcCr4B.js";import"./UI5Element-DH5oRWb7.js";import"./CustomElementsScope-5eeswjJY.js";import"./withWebComponent-CFCcsgaR.js";import"./utils-B_1Wl3Io.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-B3SMwW1O.js";import"./parameters-bundle.css-BZWwXjHP.js";import"./tiny-invariant-CCoILDQG.js";import"./react-content-loader.es-VoBEIBwl.js";import"./isPlainObject-DMxkze9F.js";import"./mapValues-COmDofVS.js";var tt=["cx","cy","innerRadius","outerRadius","gridType","radialLines"];function T(t){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(t)}function nt(t,e){if(t==null)return{};var n=at(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function at(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function j(){return j=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},j.apply(this,arguments)}function ae(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ae(Object(n),!0).forEach(function(a){rt(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function rt(t,e,n){return e=ot(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ot(t){var e=it(t,"string");return T(e)=="symbol"?e:String(e)}function it(t,e){if(T(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(T(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var st=function(e,n,a,r){var o="";return r.forEach(function(i,s){var l=L(n,a,e,i);s?o+="L ".concat(l.x,",").concat(l.y):o+="M ".concat(l.x,",").concat(l.y)}),o+="Z",o},lt=function(e){var n=e.cx,a=e.cy,r=e.innerRadius,o=e.outerRadius,i=e.polarAngles,s=e.radialLines;if(!i||!i.length||!s)return null;var l=N({stroke:"#ccc"},k(e,!1));return u.createElement("g",{className:"recharts-polar-grid-angle"},i.map(function(c){var d=L(n,a,r,c),p=L(n,a,o,c);return u.createElement("line",j({},l,{key:"line-".concat(c),x1:d.x,y1:d.y,x2:p.x,y2:p.y}))}))},ct=function(e){var n=e.cx,a=e.cy,r=e.radius,o=e.index,i=N(N({stroke:"#ccc"},k(e,!1)),{},{fill:"none"});return u.createElement("circle",j({},i,{className:W("recharts-polar-grid-concentric-circle",e.className),key:"circle-".concat(o),cx:n,cy:a,r}))},dt=function(e){var n=e.radius,a=e.index,r=N(N({stroke:"#ccc"},k(e,!1)),{},{fill:"none"});return u.createElement("path",j({},r,{className:W("recharts-polar-grid-concentric-polygon",e.className),key:"path-".concat(a),d:st(n,e.cx,e.cy,e.polarAngles)}))},ut=function(e){var n=e.polarRadius,a=e.gridType;return!n||!n.length?null:u.createElement("g",{className:"recharts-polar-grid-concentric"},n.map(function(r,o){var i=o;return a==="circle"?u.createElement(ct,j({key:i},e,{radius:r,index:o})):u.createElement(dt,j({key:i},e,{radius:r,index:o}))}))},Ae=function(e){var n=e.cx,a=n===void 0?0:n,r=e.cy,o=r===void 0?0:r,i=e.innerRadius,s=i===void 0?0:i,l=e.outerRadius,c=l===void 0?0:l,d=e.gridType,p=d===void 0?"polygon":d,m=e.radialLines,y=m===void 0?!0:m,b=nt(e,tt);return c<=0?null:u.createElement("g",{className:"recharts-polar-grid"},u.createElement(lt,j({cx:a,cy:o,innerRadius:s,outerRadius:c,gridType:p,radialLines:y},b)),u.createElement(ut,j({cx:a,cy:o,innerRadius:s,outerRadius:c,gridType:p,radialLines:y},b)))};Ae.displayName="PolarGrid";function pt(t){return t&&t.length?t[0]:void 0}var mt=pt,ht=mt;const ft=Le(ht);function E(t){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(t)}function B(){return B=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},B.apply(this,arguments)}function re(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?re(Object(n),!0).forEach(function(a){S(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function gt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function oe(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,je(a.key),a)}}function yt(t,e,n){return e&&oe(t.prototype,e),n&&oe(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function bt(t,e,n){return e=G(e),vt(t,Se()?Reflect.construct(e,n||[],G(t).constructor):e.apply(t,n))}function vt(t,e){if(e&&(E(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _(t)}function Se(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Se=function(){return!!t})()}function G(t){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},G(t)}function _(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ct(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Z(t,e)}function Z(t,e){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,r){return a.__proto__=r,a},Z(t,e)}function S(t,e,n){return e=je(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function je(t){var e=Pt(t,"string");return E(e)=="symbol"?e:String(e)}function Pt(t,e){if(E(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(E(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var V=function(t){Ct(e,t);function e(){var n;gt(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=bt(this,e,[].concat(r)),S(_(n),"state",{isAnimationFinished:!1}),S(_(n),"handleAnimationEnd",function(){var i=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),I(i)&&i()}),S(_(n),"handleAnimationStart",function(){var i=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),I(i)&&i()}),S(_(n),"handleMouseEnter",function(i){var s=n.props.onMouseEnter;s&&s(n.props,i)}),S(_(n),"handleMouseLeave",function(i){var s=n.props.onMouseLeave;s&&s(n.props,i)}),n}return yt(e,[{key:"renderDots",value:function(a){var r=this.props,o=r.dot,i=r.dataKey,s=k(this.props,!1),l=k(o,!0),c=a.map(function(d,p){var m=g(g(g({key:"dot-".concat(p),r:3},s),l),{},{dataKey:i,cx:d.x,cy:d.y,index:p,payload:d});return e.renderDotItem(o,m)});return u.createElement(X,{className:"recharts-radar-dots"},c)}},{key:"renderPolygonStatically",value:function(a){var r=this.props,o=r.shape,i=r.dot,s=r.isRange,l=r.baseLinePoints,c=r.connectNulls,d;return u.isValidElement(o)?d=u.cloneElement(o,g(g({},this.props),{},{points:a})):I(o)?d=o(g(g({},this.props),{},{points:a})):d=u.createElement(We,B({},k(this.props,!0),{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,points:a,baseLinePoints:s?l:null,connectNulls:c})),u.createElement(X,{className:"recharts-radar-polygon"},d,i?this.renderDots(a):null)}},{key:"renderPolygonWithAnimation",value:function(){var a=this,r=this.props,o=r.points,i=r.isAnimationActive,s=r.animationBegin,l=r.animationDuration,c=r.animationEasing,d=r.animationId,p=this.state.prevPoints;return u.createElement(Ue,{begin:s,duration:l,isActive:i,easing:c,from:{t:0},to:{t:1},key:"radar-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(m){var y=m.t,b=p&&p.length/o.length,C=o.map(function(h,x){var P=p&&p[Math.floor(x*b)];if(P){var U=q(P.x,h.x),w=q(P.y,h.y);return g(g({},h),{},{x:U(y),y:w(y)})}var H=q(h.cx,h.x),Y=q(h.cy,h.y);return g(g({},h),{},{x:H(y),y:Y(y)})});return a.renderPolygonStatically(C)})}},{key:"renderPolygon",value:function(){var a=this.props,r=a.points,o=a.isAnimationActive,i=a.isRange,s=this.state.prevPoints;return o&&r&&r.length&&!i&&(!s||!Fe(s,r))?this.renderPolygonWithAnimation():this.renderPolygonStatically(r)}},{key:"render",value:function(){var a=this.props,r=a.hide,o=a.className,i=a.points,s=a.isAnimationActive;if(r||!i||!i.length)return null;var l=this.state.isAnimationFinished,c=W("recharts-radar",o);return u.createElement(X,{className:c},this.renderPolygon(),(!s||l)&&He.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(a,r){return a.animationId!==r.prevAnimationId?{prevAnimationId:a.animationId,curPoints:a.points,prevPoints:r.curPoints}:a.points!==r.curPoints?{curPoints:a.points}:null}},{key:"renderDotItem",value:function(a,r){var o;return u.isValidElement(a)?o=u.cloneElement(a,r):I(a)?o=a(r):o=u.createElement(Ge,B({},r,{className:W("recharts-radar-dot",typeof a!="boolean"?a.className:"")})),o}}]),e}(R.PureComponent);S(V,"displayName","Radar");S(V,"defaultProps",{angleAxisId:0,radiusAxisId:0,hide:!1,activeDot:!0,dot:!1,legendType:"rect",isAnimationActive:!Ye.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});S(V,"getComposedData",function(t){var e=t.radiusAxis,n=t.angleAxis,a=t.displayedData,r=t.dataKey,o=t.bandSize,i=n.cx,s=n.cy,l=!1,c=[],d=n.type!=="number"?o??0:0;a.forEach(function(m,y){var b=ne(m,n.dataKey,y),C=ne(m,r),h=n.scale(b)+d,x=Array.isArray(C)?Xe(C):C,P=te(x)?void 0:e.scale(x);Array.isArray(C)&&C.length>=2&&(l=!0),c.push(g(g({},L(i,s,P,h)),{},{name:b,value:C,cx:i,cy:s,radius:P,angle:h,payload:m}))});var p=[];return l&&c.forEach(function(m){if(Array.isArray(m.value)){var y=ft(m.value),b=te(y)?void 0:e.scale(y);p.push(g(g({},m),{},{radius:b},L(i,s,b,m.angle)))}else p.push(m)}),{points:c,isRange:l,baseLinePoints:p}});var wt=Ze({chartName:"RadarChart",GraphicalChild:V,axisComponents:[{axisType:"angleAxis",AxisComp:Pe},{axisType:"radiusAxis",AxisComp:we}],formatAxisMap:Je,defaultProps:{layout:"centric",startAngle:90,endAngle:-270,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}});const At={formatter:t=>t},St={formatter:Ke,opacity:.5},O=R.forwardRef((t,e)=>{const{loading:n,dataset:a,noLegend:r,noAnimation:o,tooltipConfig:i,onDataPointClick:s,onLegendClick:l,onClick:c,style:d,className:p,slot:m,ChartPlaceholder:y,children:b,...C}=t,h={legendPosition:"bottom",legendHorizontalAlign:"center",dataLabel:!0,polarGridType:"circle",resizeDebounce:250,...t.chartConfig},{dimensions:x,measures:P}=$e(t.dimensions,t.measures,At,St),U=ze(P),w=x[0],H=Te(w),Y=w==null?void 0:w.accessor,Oe=Ve(l),D=R.useRef(!1),xe=R.useCallback((f,v)=>{var J,Q;typeof c=="function"&&!D.current&&c(ee(v,{payload:(Q=(J=f==null?void 0:f.activePayload)==null?void 0:J[0])==null?void 0:Q.payload,activePayloads:f==null?void 0:f.activePayload})),D.current&&(D.current=!1)},[c,D.current]),De=R.useCallback((f,v)=>{v.value&&s&&(s(ee({},{value:v.value,dataKey:v.dataKey,name:v.payload.label,dataIndex:v.index,payload:v.payload})),D.current=!0)},[s,D.current]),{chartConfig:jt,dimensions:Ot,measures:xt,..._e}=C;return A.jsx(Me,{dataset:a,ref:e,loading:n,Placeholder:y??Be,style:d,className:p,slot:m,resizeDebounce:h.resizeDebounce,..._e,children:A.jsxs(wt,{onClick:xe,data:a,margin:h.margin,className:typeof s=="function"?"has-click-handler":void 0,children:[A.jsx(Ae,{gridType:h.polarGridType}),A.jsx(Pe,{dataKey:Y,tickFormatter:w==null?void 0:w.formatter,tick:{fill:Re.sapContent_LabelColor}}),A.jsx(we,{}),P.map((f,v)=>A.jsx(V,{activeDot:{onClick:De},name:f.label??f.accessor,dataKey:f.accessor,stroke:f.color??`var(--sapChart_OrderedColor_${v%11+1})`,fill:f.color??`var(--sapChart_OrderedColor_${v%11+1})`,fillOpacity:f.opacity,label:A.jsx(Ne,{config:f,chartType:"radar",position:"outside"}),isAnimationActive:o===!1},f.reactKey)),(i==null?void 0:i.active)!==!1&&A.jsx(Qe,{cursor:qe,formatter:U,contentStyle:Ie,labelFormatter:H,...i}),!r&&A.jsx(et,{verticalAlign:h.legendPosition,align:h.legendHorizontalAlign,onClick:Oe}),b]})})});O.defaultProps={noLegend:!1,noAnimation:!1};O.displayName="RadarChart";try{O.displayName="RadarChart",O.__docgenInfo={description:"A radar or spider or web chart is a two-dimensional chart type designed to plot one or more series of values over multiple quantitative variables.",displayName:"RadarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties*
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs`,name:"dimensions",required:!0,type:{name:"IChartDimension[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one radar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this radar should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this radar.\n- `DataLabel`: a custom component to be used for the data label\n- `opacity`: radar opacity, defaults to `0.5`",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"ICartesianChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{O.displayName="RadarChart",O.__docgenInfo={description:"A radar or spider or web chart is a two-dimensional chart type designed to plot one or more series of values over multiple quantitative variables.",displayName:"RadarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties*
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs`,name:"dimensions",required:!0,type:{name:"IChartDimension[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one radar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this radar should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this radar.\n- `DataLabel`: a custom component to be used for the data label\n- `opacity`: radar opacity, defaults to `0.5`",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"ICartesianChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const hn={title:"RadarChart",component:O,args:{dimensions:[{accessor:"name",formatter:t=>`${t} 2019`}],measures:[{accessor:"users",label:"Users",formatter:t=>t.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:t=>`${t} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}],dataset:ke},argTypes:{dataset:{control:{disable:!0}}}},$={},z={args:{dimensions:[{accessor:"name"}],measures:[{accessor:"users",color:"red"}],dataset:Ee}},F={args:{dimensions:[{accessor:"name"}],measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},M={args:{dimensions:[{accessor:"name",formatter:t=>t.slice(0,3)}],measures:[{accessor:"users",formatter:t=>`${t/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{polarGridType:"polygon"}}},K={args:{dataset:[]}};var ie,se,le;$.parameters={...$.parameters,docs:{...(ie=$.parameters)==null?void 0:ie.docs,source:{originalSource:"{}",...(le=(se=$.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,de,ue;z.parameters={...z.parameters,docs:{...(ce=z.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name'
    }],
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(ue=(de=z.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,he;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name'
    }],
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(he=(me=F.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var fe,ge,ye;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name',
      formatter: element => element.slice(0, 3)
    }],
    measures: [{
      accessor: 'users',
      formatter: element => \`\${element / 10}\`,
      label: 'number of users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }],
    chartConfig: {
      polarGridType: 'polygon'
    }
  }
}`,...(ye=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var be,ve,Ce;K.parameters={...K.parameters,docs:{...(be=K.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(Ce=(ve=K.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};const fn=["Default","WithCustomColor","WithDataLabels","Polygon","LoadingPlaceholder"];export{$ as Default,K as LoadingPlaceholder,M as Polygon,z as WithCustomColor,F as WithDataLabels,fn as __namedExportsOrder,hn as default};
