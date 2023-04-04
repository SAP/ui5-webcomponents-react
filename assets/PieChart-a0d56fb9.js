import{a as ne,j as R,F as je}from"./jsx-runtime-670450c2.js";import{e as Ke}from"./index-99d317a4.js";import{c as Ne}from"./clsx.m-1229b3e0.js";import{R as A,r as O}from"./index-f1f749bf.js";import{c as Fe}from"./react-jss.esm-2e28eff7.js";import{d as Ae,g as Ve}from"./defaults-bff504d9.js";import{u as qe,a as Me,b as Be}from"./staticProps-9dd6f0f9.js";import{u as $e}from"./useOnClickInternal-d27d7c1e.js";import{u as ze,a as Se,c as We,i as U,d as He,x as ae,b as G,B as Ce,w as re,C as Ue}from"./ChartContainer-d116e791.js";import{P as Ge,a as Ye,b as Ze}from"./Placeholder-f592fcef.js";import{d as Je,m as Re,n as oe,f as ie,p as he,c as J,g as W,l as Qe,A as Xe,j as xe,b as et,G as tt,k as nt,o as at,C as Ie,h as rt,q as it,T as ot,L as st}from"./generateCategoricalChart-d8b12081.js";import{i as Q,g as lt}from"./_baseForOwn-c7d9bea5.js";import{i as ct}from"./isPlainObject-237581f0.js";function Y(n){return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Y(n)}function q(){return q=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])}return n},q.apply(this,arguments)}function Pe(n,a){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);a&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,r)}return i}function d(n){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Pe(Object(i),!0).forEach(function(r){D(n,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Pe(Object(i)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(i,r))})}return n}function ut(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function we(n,a){for(var i=0;i<a.length;i++){var r=a[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,ke(r.key),r)}}function dt(n,a,i){return a&&we(n.prototype,a),i&&we(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function ht(n,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),a&&fe(n,a)}function fe(n,a){return fe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},fe(n,a)}function ft(n){var a=mt();return function(){var r=se(n),t;if(a){var e=se(this).constructor;t=Reflect.construct(r,arguments,e)}else t=r.apply(this,arguments);return pt(this,t)}}function pt(n,a){if(a&&(Y(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return H(n)}function H(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function mt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function se(n){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},se(n)}function D(n,a,i){return a=ke(a),a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i,n}function ke(n){var a=gt(n,"string");return Y(a)==="symbol"?a:String(a)}function gt(n,a){if(Y(n)!=="object"||n===null)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var r=i.call(n,a||"default");if(Y(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}var _=function(n){ht(i,n);var a=ft(i);function i(r){var t;return ut(this,i),t=a.call(this,r),D(H(t),"pieRef",null),D(H(t),"sectorRefs",[]),D(H(t),"id",ze("recharts-pie-")),D(H(t),"handleAnimationEnd",function(){var e=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),Q(e)&&e()}),D(H(t),"handleAnimationStart",function(){var e=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),Q(e)&&e()}),t.state={isAnimationFinished:!r.isAnimationActive,prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,sectorToFocus:0},t}return dt(i,[{key:"isActiveIndex",value:function(t){var e=this.props.activeIndex;return Array.isArray(e)?e.indexOf(t)!==-1:t===e}},{key:"hasActiveIndex",value:function(){var t=this.props.activeIndex;return Array.isArray(t)?t.length!==0:t||t===0}},{key:"renderLabels",value:function(t){var e=this.props.isAnimationActive;if(e&&!this.state.isAnimationFinished)return null;var o=this.props,s=o.label,f=o.labelLine,p=o.dataKey,m=o.valueKey,v=ie(this.props),x=ie(s),P=ie(f),S=s&&s.offsetRadius||20,w=t.map(function(c,g){var l=(c.startAngle+c.endAngle)/2,y=he(c.cx,c.cy,c.outerRadius+S,l),b=d(d(d(d({},v),c),{},{stroke:"none"},x),{},{index:g,textAnchor:i.getTextAnchor(y.x,c.cx)},y),u=d(d(d(d({},v),c),{},{fill:"none",stroke:c.fill},P),{},{index:g,points:[he(c.cx,c.cy,c.outerRadius,l),y],key:"line"}),I=p;return G(p)&&G(m)?I="value":G(p)&&(I=m),A.createElement(J,{key:"label-".concat(g)},f&&i.renderLabelLineItem(f,u),i.renderLabelItem(s,b,W(c,I)))});return A.createElement(J,{className:"recharts-pie-labels"},w)}},{key:"renderSectorsStatically",value:function(t){var e=this,o=this.props,s=o.activeShape,f=o.blendStroke,p=o.inactiveShape;return t.map(function(m,v){var x=p&&e.hasActiveIndex()?p:null,P=e.isActiveIndex(v)?s:x,S=d(d({},m),{},{stroke:f?m.fill:m.stroke});return A.createElement(J,q({ref:function(c){c&&!e.sectorRefs.includes(c)&&e.sectorRefs.push(c)},tabIndex:-1,className:"recharts-pie-sector"},Qe(e.props,m,v),{key:"sector-".concat(v)}),i.renderSectorItem(P,S))})}},{key:"renderSectorsWithAnimation",value:function(){var t=this,e=this.props,o=e.sectors,s=e.isAnimationActive,f=e.animationBegin,p=e.animationDuration,m=e.animationEasing,v=e.animationId,x=this.state,P=x.prevSectors,S=x.prevIsAnimationActive;return A.createElement(Xe,{begin:f,duration:p,isActive:s,easing:m,from:{t:0},to:{t:1},key:"pie-".concat(v,"-").concat(S),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(w){var c=w.t,g=[],l=o&&o[0],y=l.startAngle;return o.forEach(function(b,u){var I=P&&P[u],E=u>0?lt(b,"paddingAngle",0):0;if(I){var C=Se(I.endAngle-I.startAngle,b.endAngle-b.startAngle),j=d(d({},b),{},{startAngle:y+E,endAngle:y+C(c)+E});g.push(j),y=j.endAngle}else{var k=b.endAngle,M=b.startAngle,B=Se(0,k-M),K=B(c),$=d(d({},b),{},{startAngle:y+E,endAngle:y+K+E});g.push($),y=$.endAngle}}),A.createElement(J,null,t.renderSectorsStatically(g))})}},{key:"attachKeyboardHandlers",value:function(t){var e=this;t.onkeydown=function(o){if(!o.altKey)switch(o.key){case"ArrowLeft":{var s=++e.state.sectorToFocus%e.sectorRefs.length;e.sectorRefs[s].focus(),e.setState({sectorToFocus:s});break}case"ArrowRight":{var f=--e.state.sectorToFocus<0?e.sectorRefs.length-1:e.state.sectorToFocus%e.sectorRefs.length;e.sectorRefs[f].focus(),e.setState({sectorToFocus:f});break}case"Escape":{e.sectorRefs[e.state.sectorToFocus].blur(),e.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var t=this.props,e=t.sectors,o=t.isAnimationActive,s=this.state.prevSectors;return o&&e&&e.length&&(!s||!We(s,e))?this.renderSectorsWithAnimation():this.renderSectorsStatically(e)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var t=this,e=this.props,o=e.hide,s=e.sectors,f=e.className,p=e.label,m=e.cx,v=e.cy,x=e.innerRadius,P=e.outerRadius,S=e.isAnimationActive,w=this.state.isAnimationFinished;if(o||!s||!s.length||!U(m)||!U(v)||!U(x)||!U(P))return null;var c=He("recharts-pie",f);return A.createElement(J,{tabIndex:0,className:c,ref:function(l){t.pieRef=l}},this.renderSectors(),p&&this.renderLabels(s),xe.renderCallByParent(this.props,null,!1),(!S||w)&&et.renderCallByParent(this.props,s,!1))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return e.prevIsAnimationActive!==t.isAnimationActive?{prevIsAnimationActive:t.isAnimationActive,prevAnimationId:t.animationId,curSectors:t.sectors,prevSectors:[],isAnimationFinished:!0}:t.isAnimationActive&&t.animationId!==e.prevAnimationId?{prevAnimationId:t.animationId,curSectors:t.sectors,prevSectors:e.curSectors,isAnimationFinished:!0}:t.sectors!==e.curSectors?{curSectors:t.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(t,e){return t>e?"start":t<e?"end":"middle"}},{key:"renderLabelLineItem",value:function(t,e){return A.isValidElement(t)?A.cloneElement(t,e):Q(t)?t(e):A.createElement(Je,q({},e,{type:"linear",className:"recharts-pie-label-line"}))}},{key:"renderLabelItem",value:function(t,e,o){if(A.isValidElement(t))return A.cloneElement(t,e);var s=o;return Q(t)&&(s=t(e),A.isValidElement(s))?s:A.createElement(Re,q({},e,{alignmentBaseline:"middle",className:"recharts-pie-label-text"}),s)}},{key:"renderSectorItem",value:function(t,e){return A.isValidElement(t)?A.cloneElement(t,e):Q(t)?t(e):ct(t)?A.createElement(oe,q({tabIndex:-1},e,t)):A.createElement(oe,q({tabIndex:-1},e))}}]),i}(O.PureComponent);D(_,"displayName","Pie");D(_,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!tt.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1});D(_,"parseDeltaAngle",function(n,a){var i=re(a-n),r=Math.min(Math.abs(a-n),360);return i*r});D(_,"getRealPieData",function(n){var a=n.props,i=a.data,r=a.children,t=ie(n.props),e=nt(r,Ie);return i&&i.length?i.map(function(o,s){return d(d(d({payload:o},t),o),e&&e[s]&&e[s].props)}):e&&e.length?e.map(function(o){return d(d({},t),o.props)}):[]});D(_,"parseCoordinateOfPie",function(n,a){var i=a.top,r=a.left,t=a.width,e=a.height,o=at(t,e),s=r+ae(n.props.cx,t,t/2),f=i+ae(n.props.cy,e,e/2),p=ae(n.props.innerRadius,o,0),m=ae(n.props.outerRadius,o,o*.8),v=n.props.maxRadius||Math.sqrt(t*t+e*e)/2;return{cx:s,cy:f,innerRadius:p,outerRadius:m,maxRadius:v}});D(_,"getComposedData",function(n){var a=n.item,i=n.offset,r=_.getRealPieData(a);if(!r||!r.length)return null;var t=a.props,e=t.cornerRadius,o=t.startAngle,s=t.endAngle,f=t.paddingAngle,p=t.dataKey,m=t.nameKey,v=t.valueKey,x=t.tooltipType,P=Math.abs(a.props.minAngle),S=_.parseCoordinateOfPie(a,i),w=_.parseDeltaAngle(o,s),c=Math.abs(w),g=p;G(p)&&G(v)?(Ce(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),g="value"):G(p)&&(Ce(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),g=v);var l=r.filter(function(C){return W(C,g,0)!==0}).length,y=(c>=360?l:l-1)*f,b=c-l*P-y,u=r.reduce(function(C,j){var k=W(j,g,0);return C+(U(k)?k:0)},0),I;if(u>0){var E;I=r.map(function(C,j){var k=W(C,g,0),M=W(C,m,j),B=(U(k)?k:0)/u,K;j?K=E.endAngle+re(w)*f*(k!==0?1:0):K=o;var $=K+re(w)*((k!==0?P:0)+B*b),ce=(K+$)/2,ue=(S.innerRadius+S.outerRadius)/2,de=[{name:M,value:k,payload:C,dataKey:g,type:x}],X=he(S.cx,S.cy,ue,ce);return E=d(d(d({percent:B,cornerRadius:e,name:M,tooltipPayload:de,midAngle:ce,middleRadius:ue,tooltipPosition:X},C),S),{},{value:W(C,g),startAngle:K,endAngle:$,payload:C,paddingAngle:re(w)*f}),E})}return d(d({},S),{},{sectors:I,data:r})});var vt=rt({chartName:"PieChart",GraphicalChild:_,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:Ge},{axisType:"radiusAxis",AxisComp:Ye}],formatAxisMap:it,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}});const yt=Fe({piechart:{"& g:focus,& path:focus":{outline:"none"}}},{name:"PieChartStyles"}),bt={color:"var (--sapTextColor)"},le=O.forwardRef((n,a)=>{var X;const{loading:i,dataset:r,noLegend:t,noAnimation:e,tooltipConfig:o,onDataPointClick:s,onLegendClick:f,onClick:p,centerLabel:m,style:v,className:x,slot:P,ChartPlaceholder:S,children:w,...c}=n,g=yt(),l={margin:{right:30,left:30,bottom:30,top:30,...((X=n.chartConfig)==null?void 0:X.margin)??{}},legendPosition:"bottom",legendHorizontalAlign:"center",paddingAngle:0,outerRadius:"80%",resizeDebounce:250,tooltipItemStyle:bt,...n.chartConfig},y=l.showActiveSegmentDataLabel??!0,b=O.useMemo(()=>({formatter:Ae,...n.dimension}),[n.dimension]),u=O.useMemo(()=>({formatter:Ae,...n.measure}),[n.measure]),I=h=>(typeof u.hideDataLabel=="function"?u.hideDataLabel(h):u.hideDataLabel)||l.activeSegment===h.index?null:O.isValidElement(u.DataLabel)?O.cloneElement(u.DataLabel,{...h,config:u}):R(Re,{...h,alignmentBaseline:"middle",className:"recharts-pie-label-text",children:u.formatter(h.value)}),E=O.useCallback((h,L)=>[u.formatter(h),b.formatter(L)],[u.formatter,b.formatter]),C=qe(f,()=>u.accessor),j=$e(p),k=O.useCallback((h,L,T)=>{var N,Z;h&&h&&typeof s=="function"&&s(Ke(T,{value:h.value,dataKey:(Z=(N=h.tooltipPayload)==null?void 0:N[0])==null?void 0:Z.dataKey,name:h.name,payload:h.payload,dataIndex:L}))},[s]),M=O.useCallback(h=>{const L=Math.PI/180,{cx:T,cy:N,midAngle:Z,innerRadius:Le,outerRadius:F,startAngle:pe,endAngle:me,fill:V,payload:De,percent:_e,value:Oe}=h,ge=Math.sin(-L*Z),z=Math.cos(-L*Z),Ee=T+(F+10)*z,Te=N+(F+10)*ge,ve=T+(F+30)*z,ye=N+(F+30)*ge,ee=ve+(z>=0?1:-1)*22,te=ye,be=z>=0?"start":"end";return ne("g",{children:[R("text",{x:T,y:N,dy:8,textAnchor:"middle",fill:V,children:De.name}),R(oe,{cx:T,cy:N,innerRadius:Le,outerRadius:F,startAngle:pe,endAngle:me,fill:V}),R(oe,{cx:T,cy:N,startAngle:pe,endAngle:me,innerRadius:F+6,outerRadius:F+10,fill:V}),y&&ne(je,{children:[R("path",{d:`M${Ee},${Te}L${ve},${ye}L${ee},${te}`,stroke:V,fill:"none"}),R("circle",{cx:ee,cy:te,r:2,fill:V,stroke:"none"}),R("text",{x:ee+(z>=0?1:-1)*12,y:te,textAnchor:be,fill:V,children:u.formatter(Oe)}),R("text",{x:ee+(z>=0?1:-1)*12,y:te,dy:18,textAnchor:be,fill:V,children:`(${(_e*100).toFixed(2)}%)`})]})]})},[y]),B=O.useCallback(h=>(typeof u.hideDataLabel=="function"?u.hideDataLabel(h):u.hideDataLabel)||l.activeSegment===h.index?null:_.renderLabelLineItem(void 0,h),[l.activeSegment,u.hideDataLabel]),K=O.useMemo(()=>{if(l.activeSegment!=null&&y){if(l.legendPosition==="bottom")return{paddingTop:"30px"};if(l.legendPosition==="top")return{paddingBottom:"30px"}}return null},[y,l.activeSegment,l.legendPosition]),{chartConfig:$,dimension:ce,measure:ue,...de}=c;return R(Ue,{dataset:r,ref:a,loading:i,Placeholder:S??Ze,style:v,className:x,slot:P,resizeDebounce:l.resizeDebounce,...de,children:ne(vt,{onClick:j,margin:l.margin,className:Ne(typeof s=="function"||typeof p=="function"?"has-click-handler":void 0,g.piechart),children:[ne(_,{onClick:k,innerRadius:l.innerRadius,outerRadius:l.outerRadius,paddingAngle:l.paddingAngle,nameKey:b.accessor,dataKey:u.accessor,data:r,animationBegin:0,isAnimationActive:e===!1,labelLine:B,label:I,activeIndex:l.activeSegment,activeShape:l.activeSegment!=null&&M,children:[m&&R(xe,{position:"center",children:m}),r&&r.map((h,L)=>{var T;return R(Ie,{name:b.formatter(Ve(h,b.accessor,"")),fill:((T=u.colors)==null?void 0:T[L])??`var(--sapChart_OrderedColor_${L%11+1})`},L)})]}),(o==null?void 0:o.active)!==!1&&R(ot,{cursor:Me,formatter:E,contentStyle:Be,itemStyle:l.tooltipItemStyle,labelStyle:l.tooltipLabelStyle,...o}),!t&&R(st,{verticalAlign:l.legendPosition,align:l.legendHorizontalAlign,onClick:C,wrapperStyle:K}),w]})})});le.defaultProps={noLegend:!1,noAnimation:!1};le.displayName="PieChart";try{le.displayName="PieChart",le.__docgenInfo={description:`A Pie Chart is a type of graph that displays data in a circular graph.
The pieces of the graph are proportional to the fraction of the whole in each category.

In other words, each slice of the pie is relative to the size of that category in the group as a whole.
The entire “pie” represents 100 percent of a whole, while the pie “slices” represent portions of the whole.`,displayName:"PieChart",props:{centerLabel:{defaultValue:null,description:"A label to display in the center of the `PieChart`.\nIf you use this prop to display a text, we recommend to increase `chartConfig.innerRadius` to have some free\nspace for the text.",name:"centerLabel",required:!1,type:{name:"string"}},dimension:{defaultValue:null,description:`A object which contains the configuration of the dimension.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs`,name:"dimension",required:!0,type:{name:"IChartDimension"}},measure:{defaultValue:null,description:"A object which contains the configuration of the measure. The object is defining one pie in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this pie should display. Supports object structures by using <code>'parent.child'</code>.\n\n**Optional properties**\n\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `DataLabel`: a custom component to be used for the data label\n- `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this segment. When passed a function it will be called for each data label with the corresponding chart properties.",name:"measure",required:!0,type:{name:"MeasureConfig"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Position of the legend. Can be one of the following: `"top"`, `"left"`, `"right"`, `"bottom"`\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"IPolarChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"Props<string | number | (string | number)[], string | number> & { allowEscapeViewBox?: { x?: boolean; y?: boolean; }; reverseDirection?: { x?: boolean; y?: boolean; }; content?: ContentType<string | number | (string | number)[], string | number>; ... 14 more ...; useTranslate3d?: boolean; }"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}export{le as P};
//# sourceMappingURL=PieChart-a0d56fb9.js.map
