import{j as v}from"./jsx-runtime-d079401a.js";import{e as Ee}from"./index-99d317a4.js";import{c as Te}from"./clsx-1229b3e0.js";import{R as S,r as O}from"./index-f1f2c4b1.js";import{c as Ke}from"./react-jss.esm-2e5f50f2.js";import{a as be,g as Ne}from"./defaults-e10dff20.js";import{u as Ve,a as Fe,b as qe}from"./staticProps-d8b65b3f.js";import{u as Me}from"./useOnClickInternal-7ffac7fa.js";import{u as $e,a as G,i as Ae,_ as ze,d as U,c as Be,f as ne,w as Se,m as ae,C as We}from"./ChartContainer-4f9246c2.js";import{P as He,a as Ue,b as Ge}from"./Placeholder-94657ef5.js";import{C as Ye,n as xe,o as ie,a as re,p as de,L as J,g as W,d as Ze,A as Je,h as we,b as Qe,G as Xe,f as et,q as tt,e as Re,l as nt,r as at,T as rt,j as it}from"./generateCategoricalChart-63f72a77.js";import{c as Q,h as ot}from"./_baseForOwn-2252ef3e.js";import{i as st}from"./isPlainObject-d18d97c8.js";function Y(n){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Y(n)}function q(){return q=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])}return n},q.apply(this,arguments)}function Ce(n,a){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);a&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,r)}return i}function d(n){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Ce(Object(i),!0).forEach(function(r){D(n,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Ce(Object(i)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(i,r))})}return n}function lt(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function Pe(n,a){for(var i=0;i<a.length;i++){var r=a[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,Ie(r.key),r)}}function ct(n,a,i){return a&&Pe(n.prototype,a),i&&Pe(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function ut(n,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),a&&he(n,a)}function he(n,a){return he=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},he(n,a)}function dt(n){var a=ft();return function(){var r=oe(n),t;if(a){var e=oe(this).constructor;t=Reflect.construct(r,arguments,e)}else t=r.apply(this,arguments);return ht(this,t)}}function ht(n,a){if(a&&(Y(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return H(n)}function H(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ft(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function oe(n){return oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},oe(n)}function D(n,a,i){return a=Ie(a),a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i,n}function Ie(n){var a=pt(n,"string");return Y(a)==="symbol"?a:String(a)}function pt(n,a){if(Y(n)!=="object"||n===null)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var r=i.call(n,a||"default");if(Y(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}var _=function(n){ut(i,n);var a=dt(i);function i(r){var t;return lt(this,i),t=a.call(this,r),D(H(t),"pieRef",null),D(H(t),"sectorRefs",[]),D(H(t),"id",$e("recharts-pie-")),D(H(t),"handleAnimationEnd",function(){var e=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),Q(e)&&e()}),D(H(t),"handleAnimationStart",function(){var e=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),Q(e)&&e()}),t.state={isAnimationFinished:!r.isAnimationActive,prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,sectorToFocus:0},t}return ct(i,[{key:"isActiveIndex",value:function(t){var e=this.props.activeIndex;return Array.isArray(e)?e.indexOf(t)!==-1:t===e}},{key:"hasActiveIndex",value:function(){var t=this.props.activeIndex;return Array.isArray(t)?t.length!==0:t||t===0}},{key:"renderLabels",value:function(t){var e=this.props.isAnimationActive;if(e&&!this.state.isAnimationFinished)return null;var o=this.props,s=o.label,f=o.labelLine,p=o.dataKey,m=o.valueKey,y=re(this.props),R=re(s),x=re(f),C=s&&s.offsetRadius||20,w=t.map(function(c,g){var l=(c.startAngle+c.endAngle)/2,b=de(c.cx,c.cy,c.outerRadius+C,l),A=d(d(d(d({},y),c),{},{stroke:"none"},R),{},{index:g,textAnchor:i.getTextAnchor(b.x,c.cx)},b),u=d(d(d(d({},y),c),{},{fill:"none",stroke:c.fill},x),{},{index:g,points:[de(c.cx,c.cy,c.outerRadius,l),b],key:"line"}),I=p;return G(p)&&G(m)?I="value":G(p)&&(I=m),S.createElement(J,{key:"label-".concat(g)},f&&i.renderLabelLineItem(f,u),i.renderLabelItem(s,A,W(c,I)))});return S.createElement(J,{className:"recharts-pie-labels"},w)}},{key:"renderSectorsStatically",value:function(t){var e=this,o=this.props,s=o.activeShape,f=o.blendStroke,p=o.inactiveShape;return t.map(function(m,y){var R=p&&e.hasActiveIndex()?p:null,x=e.isActiveIndex(y)?s:R,C=d(d({},m),{},{stroke:f?m.fill:m.stroke});return S.createElement(J,q({ref:function(c){c&&!e.sectorRefs.includes(c)&&e.sectorRefs.push(c)},tabIndex:-1,className:"recharts-pie-sector"},Ze(e.props,m,y),{key:"sector-".concat(y)}),i.renderSectorItem(x,C))})}},{key:"renderSectorsWithAnimation",value:function(){var t=this,e=this.props,o=e.sectors,s=e.isAnimationActive,f=e.animationBegin,p=e.animationDuration,m=e.animationEasing,y=e.animationId,R=this.state,x=R.prevSectors,C=R.prevIsAnimationActive;return S.createElement(Je,{begin:f,duration:p,isActive:s,easing:m,from:{t:0},to:{t:1},key:"pie-".concat(y,"-").concat(C),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(w){var c=w.t,g=[],l=o&&o[0],b=l.startAngle;return o.forEach(function(A,u){var I=x&&x[u],j=u>0?ot(A,"paddingAngle",0):0;if(I){var P=Ae(I.endAngle-I.startAngle,A.endAngle-A.startAngle),T=d(d({},A),{},{startAngle:b+j,endAngle:b+P(c)+j});g.push(T),b=T.endAngle}else{var L=A.endAngle,M=A.startAngle,$=Ae(0,L-M),K=$(c),z=d(d({},A),{},{startAngle:b+j,endAngle:b+K+j});g.push(z),b=z.endAngle}}),S.createElement(J,null,t.renderSectorsStatically(g))})}},{key:"attachKeyboardHandlers",value:function(t){var e=this;t.onkeydown=function(o){if(!o.altKey)switch(o.key){case"ArrowLeft":{var s=++e.state.sectorToFocus%e.sectorRefs.length;e.sectorRefs[s].focus(),e.setState({sectorToFocus:s});break}case"ArrowRight":{var f=--e.state.sectorToFocus<0?e.sectorRefs.length-1:e.state.sectorToFocus%e.sectorRefs.length;e.sectorRefs[f].focus(),e.setState({sectorToFocus:f});break}case"Escape":{e.sectorRefs[e.state.sectorToFocus].blur(),e.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var t=this.props,e=t.sectors,o=t.isAnimationActive,s=this.state.prevSectors;return o&&e&&e.length&&(!s||!ze(s,e))?this.renderSectorsWithAnimation():this.renderSectorsStatically(e)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var t=this,e=this.props,o=e.hide,s=e.sectors,f=e.className,p=e.label,m=e.cx,y=e.cy,R=e.innerRadius,x=e.outerRadius,C=e.isAnimationActive,w=this.state.isAnimationFinished;if(o||!s||!s.length||!U(m)||!U(y)||!U(R)||!U(x))return null;var c=Be("recharts-pie",f);return S.createElement(J,{tabIndex:this.props.rootTabIndex,className:c,ref:function(l){t.pieRef=l}},this.renderSectors(),p&&this.renderLabels(s),we.renderCallByParent(this.props,null,!1),(!C||w)&&Qe.renderCallByParent(this.props,s,!1))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return e.prevIsAnimationActive!==t.isAnimationActive?{prevIsAnimationActive:t.isAnimationActive,prevAnimationId:t.animationId,curSectors:t.sectors,prevSectors:[],isAnimationFinished:!0}:t.isAnimationActive&&t.animationId!==e.prevAnimationId?{prevAnimationId:t.animationId,curSectors:t.sectors,prevSectors:e.curSectors,isAnimationFinished:!0}:t.sectors!==e.curSectors?{curSectors:t.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(t,e){return t>e?"start":t<e?"end":"middle"}},{key:"renderLabelLineItem",value:function(t,e){return S.isValidElement(t)?S.cloneElement(t,e):Q(t)?t(e):S.createElement(Ye,q({},e,{type:"linear",className:"recharts-pie-label-line"}))}},{key:"renderLabelItem",value:function(t,e,o){if(S.isValidElement(t))return S.cloneElement(t,e);var s=o;return Q(t)&&(s=t(e),S.isValidElement(s))?s:S.createElement(xe,q({},e,{alignmentBaseline:"middle",className:"recharts-pie-label-text"}),s)}},{key:"renderSectorItem",value:function(t,e){return S.isValidElement(t)?S.cloneElement(t,e):Q(t)?t(e):st(t)?S.createElement(ie,q({tabIndex:-1},e,t)):S.createElement(ie,q({tabIndex:-1},e))}}]),i}(O.PureComponent);D(_,"displayName","Pie");D(_,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Xe.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});D(_,"parseDeltaAngle",function(n,a){var i=ae(a-n),r=Math.min(Math.abs(a-n),360);return i*r});D(_,"getRealPieData",function(n){var a=n.props,i=a.data,r=a.children,t=re(n.props),e=et(r,Re);return i&&i.length?i.map(function(o,s){return d(d(d({payload:o},t),o),e&&e[s]&&e[s].props)}):e&&e.length?e.map(function(o){return d(d({},t),o.props)}):[]});D(_,"parseCoordinateOfPie",function(n,a){var i=a.top,r=a.left,t=a.width,e=a.height,o=tt(t,e),s=r+ne(n.props.cx,t,t/2),f=i+ne(n.props.cy,e,e/2),p=ne(n.props.innerRadius,o,0),m=ne(n.props.outerRadius,o,o*.8),y=n.props.maxRadius||Math.sqrt(t*t+e*e)/2;return{cx:s,cy:f,innerRadius:p,outerRadius:m,maxRadius:y}});D(_,"getComposedData",function(n){var a=n.item,i=n.offset,r=_.getRealPieData(a);if(!r||!r.length)return null;var t=a.props,e=t.cornerRadius,o=t.startAngle,s=t.endAngle,f=t.paddingAngle,p=t.dataKey,m=t.nameKey,y=t.valueKey,R=t.tooltipType,x=Math.abs(a.props.minAngle),C=_.parseCoordinateOfPie(a,i),w=_.parseDeltaAngle(o,s),c=Math.abs(w),g=p;G(p)&&G(y)?(Se(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),g="value"):G(p)&&(Se(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),g=y);var l=r.filter(function(P){return W(P,g,0)!==0}).length,b=(c>=360?l:l-1)*f,A=c-l*x-b,u=r.reduce(function(P,T){var L=W(T,g,0);return P+(U(L)?L:0)},0),I;if(u>0){var j;I=r.map(function(P,T){var L=W(P,g,0),M=W(P,m,T),$=(U(L)?L:0)/u,K;T?K=j.endAngle+ae(w)*f*(L!==0?1:0):K=o;var z=K+ae(w)*((L!==0?x:0)+$*A),le=(K+z)/2,ce=(C.innerRadius+C.outerRadius)/2,ue=[{name:M,value:L,payload:P,dataKey:g,type:R}],X=de(C.cx,C.cy,ce,le);return j=d(d(d({percent:$,cornerRadius:e,name:M,tooltipPayload:ue,midAngle:le,middleRadius:ce,tooltipPosition:X},P),C),{},{value:W(P,g),startAngle:K,endAngle:z,payload:P,paddingAngle:ae(w)*f}),j})}return d(d({},C),{},{sectors:I,data:r})});var mt=nt({chartName:"PieChart",GraphicalChild:_,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:He},{axisType:"radiusAxis",AxisComp:Ue}],formatAxisMap:at,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}});const gt=Ke({piechart:{"& g:focus,& path:focus":{outline:"none"}}},{name:"PieChartStyles"}),vt={color:"var (--sapTextColor)"},se=O.forwardRef((n,a)=>{var X;const{loading:i,dataset:r,noLegend:t,noAnimation:e,tooltipConfig:o,onDataPointClick:s,onLegendClick:f,onClick:p,centerLabel:m,style:y,className:R,slot:x,ChartPlaceholder:C,children:w,...c}=n,g=gt(),l={margin:{right:30,left:30,bottom:30,top:30,...((X=n.chartConfig)==null?void 0:X.margin)??{}},legendPosition:"bottom",legendHorizontalAlign:"center",paddingAngle:0,outerRadius:"80%",resizeDebounce:250,tooltipItemStyle:vt,...n.chartConfig},b=l.showActiveSegmentDataLabel??!0,A=O.useMemo(()=>({formatter:be,...n.dimension}),[n.dimension]),u=O.useMemo(()=>({formatter:be,...n.measure}),[n.measure]),I=h=>(typeof u.hideDataLabel=="function"?u.hideDataLabel(h):u.hideDataLabel)||l.activeSegment===h.index?null:O.isValidElement(u.DataLabel)?O.cloneElement(u.DataLabel,{...h,config:u}):v.jsx(xe,{...h,alignmentBaseline:"middle",className:"recharts-pie-label-text",children:u.formatter(h.value)}),j=O.useCallback((h,k)=>[u.formatter(h),A.formatter(k)],[u.formatter,A.formatter]),P=Ve(f,()=>u.accessor),T=Me(p),L=O.useCallback((h,k,E)=>{var N,Z;h&&h&&typeof s=="function"&&s(Ee(E,{value:h.value,dataKey:(Z=(N=h.tooltipPayload)==null?void 0:N[0])==null?void 0:Z.dataKey,name:h.name,payload:h.payload,dataIndex:k}))},[s]),M=O.useCallback(h=>{const k=Math.PI/180,{cx:E,cy:N,midAngle:Z,innerRadius:Le,outerRadius:V,startAngle:fe,endAngle:pe,fill:F,payload:ke,percent:De,value:_e}=h,me=Math.sin(-k*Z),B=Math.cos(-k*Z),Oe=E+(V+10)*B,je=N+(V+10)*me,ge=E+(V+30)*B,ve=N+(V+30)*me,ee=ge+(B>=0?1:-1)*22,te=ve,ye=B>=0?"start":"end";return v.jsxs("g",{children:[v.jsx("text",{x:E,y:N,dy:8,textAnchor:"middle",fill:F,children:ke.name}),v.jsx(ie,{cx:E,cy:N,innerRadius:Le,outerRadius:V,startAngle:fe,endAngle:pe,fill:F}),v.jsx(ie,{cx:E,cy:N,startAngle:fe,endAngle:pe,innerRadius:V+6,outerRadius:V+10,fill:F}),b&&v.jsxs(v.Fragment,{children:[v.jsx("path",{d:`M${Oe},${je}L${ge},${ve}L${ee},${te}`,stroke:F,fill:"none"}),v.jsx("circle",{cx:ee,cy:te,r:2,fill:F,stroke:"none"}),v.jsx("text",{x:ee+(B>=0?1:-1)*12,y:te,textAnchor:ye,fill:F,children:u.formatter(_e)}),v.jsx("text",{x:ee+(B>=0?1:-1)*12,y:te,dy:18,textAnchor:ye,fill:F,children:`(${(De*100).toFixed(2)}%)`})]})]})},[b]),$=O.useCallback(h=>(typeof u.hideDataLabel=="function"?u.hideDataLabel(h):u.hideDataLabel)||l.activeSegment===h.index?null:_.renderLabelLineItem(void 0,h),[l.activeSegment,u.hideDataLabel]),K=O.useMemo(()=>{if(l.activeSegment!=null&&b){if(l.legendPosition==="bottom")return{paddingTop:"30px"};if(l.legendPosition==="top")return{paddingBottom:"30px"}}return null},[b,l.activeSegment,l.legendPosition]),{chartConfig:z,dimension:le,measure:ce,...ue}=c;return v.jsx(We,{dataset:r,ref:a,loading:i,Placeholder:C??Ge,style:y,className:R,slot:x,resizeDebounce:l.resizeDebounce,...ue,children:v.jsxs(mt,{onClick:T,margin:l.margin,className:Te(typeof s=="function"||typeof p=="function"?"has-click-handler":void 0,g.piechart),children:[v.jsxs(_,{onClick:L,innerRadius:l.innerRadius,outerRadius:l.outerRadius,paddingAngle:l.paddingAngle,nameKey:A.accessor,dataKey:u.accessor,data:r,animationBegin:0,isAnimationActive:e===!1,labelLine:$,label:I,activeIndex:l.activeSegment,activeShape:l.activeSegment!=null&&M,children:[m&&v.jsx(we,{position:"center",children:m}),r&&r.map((h,k)=>{var E;return v.jsx(Re,{name:A.formatter(Ne(h,A.accessor,"")),fill:((E=u.colors)==null?void 0:E[k])??`var(--sapChart_OrderedColor_${k%11+1})`},k)})]}),(o==null?void 0:o.active)!==!1&&v.jsx(rt,{cursor:Fe,formatter:j,contentStyle:qe,itemStyle:l.tooltipItemStyle,labelStyle:l.tooltipLabelStyle,...o}),!t&&v.jsx(it,{verticalAlign:l.legendPosition,align:l.legendHorizontalAlign,onClick:P,wrapperStyle:K}),w]})})});se.defaultProps={noLegend:!1,noAnimation:!1};se.displayName="PieChart";try{se.displayName="PieChart",se.__docgenInfo={description:`A Pie Chart is a type of graph that displays data in a circular graph.
The pieces of the graph are proportional to the fraction of the whole in each category.

In other words, each slice of the pie is relative to the size of that category in the group as a whole.
The entire “pie” represents 100 percent of a whole, while the pie “slices” represent portions of the whole.`,displayName:"PieChart",props:{centerLabel:{defaultValue:null,description:"A label to display in the center of the `PieChart`.\nIf you use this prop to display a text, we recommend to increase `chartConfig.innerRadius` to have some free\nspace for the text.",name:"centerLabel",required:!1,type:{name:"string"}},dimension:{defaultValue:null,description:`A object which contains the configuration of the dimension.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs`,name:"dimension",required:!0,type:{name:"IChartDimension"}},measure:{defaultValue:null,description:"A object which contains the configuration of the measure. The object is defining one pie in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this pie should display. Supports object structures by using <code>'parent.child'</code>.\n\n**Optional properties**\n\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `DataLabel`: a custom component to be used for the data label\n- `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this segment. When passed a function it will be called for each data label with the corresponding chart properties.",name:"measure",required:!0,type:{name:"MeasureConfig"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"IPolarChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}export{se as P};
//# sourceMappingURL=PieChart-19455283.js.map
