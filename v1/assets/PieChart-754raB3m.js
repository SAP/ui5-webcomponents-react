import{j as g}from"./useIsomorphicLayoutEffect-CikWMOA2.js";import{e as Ne}from"./index-CBpU8qq5.js";import{c as Ve}from"./clsx-B-dksMZM.js";import{a as P,r as L}from"./index-BP8_t0zE.js";import{a as be,C as qe}from"./defaults-CY85D38_.js";import{u as Ke,a as Fe,b as ze}from"./staticProps-3DmeqWTG.js";import{u as Me}from"./useOnClickInternal-Cyu2xiYx.js";import{u as $e,c as de,a as ie,d as Y,j as Be,i as Ae,b as We,g as H,f as He,l as ne,w as Ce,n as re,C as Ue}from"./ChartContainer-f9eumzpM.js";import{P as Ye,a as Ge,b as Ze}from"./Placeholder-DxUB2JXL.js";import{C as Je,k as xe,p as ue,L as J,g as B,S as Qe,A as Xe,i as ke,a as et,G as tt,l as at,e as Re,c as nt,m as it,n as we,T as rt,d as ot}from"./generateCategoricalChart-CnPVzUyH.js";import{b as Q,g as st}from"./_baseForOwn-B3hW39GE.js";import{u as lt}from"./useStylesheet-BlsaS3Lf.js";var oe;function G(n){"@babel/helpers - typeof";return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},G(n)}function U(){return U=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(n[e]=i[e])}return n},U.apply(this,arguments)}function Pe(n,a){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,e)}return i}function p(n){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Pe(Object(i),!0).forEach(function(e){_(n,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Pe(Object(i)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))})}return n}function ct(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function Se(n,a){for(var i=0;i<a.length;i++){var e=a[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,_e(e.key),e)}}function dt(n,a,i){return a&&Se(n.prototype,a),i&&Se(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function ut(n,a,i){return a=se(a),ht(n,Ie()?Reflect.construct(a,i||[],se(n).constructor):a.apply(n,i))}function ht(n,a){if(a&&(G(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return W(n)}function Ie(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ie=function(){return!!n})()}function se(n){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},se(n)}function W(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function pt(n,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),a&&he(n,a)}function he(n,a){return he=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},he(n,a)}function _(n,a,i){return a=_e(a),a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i,n}function _e(n){var a=ft(n,"string");return G(a)=="symbol"?a:String(a)}function ft(n,a){if(G(n)!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var e=i.call(n,a||"default");if(G(e)!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}var j=function(n){pt(a,n);function a(i){var e;return ct(this,a),e=ut(this,a,[i]),_(W(e),"pieRef",null),_(W(e),"sectorRefs",[]),_(W(e),"id",$e("recharts-pie-")),_(W(e),"handleAnimationEnd",function(){var t=e.props.onAnimationEnd;e.setState({isAnimationFinished:!0}),Q(t)&&t()}),_(W(e),"handleAnimationStart",function(){var t=e.props.onAnimationStart;e.setState({isAnimationFinished:!1}),Q(t)&&t()}),e.state={isAnimationFinished:!i.isAnimationActive,prevIsAnimationActive:i.isAnimationActive,prevAnimationId:i.animationId,sectorToFocus:0},e}return dt(a,[{key:"isActiveIndex",value:function(e){var t=this.props.activeIndex;return Array.isArray(t)?t.indexOf(e)!==-1:e===t}},{key:"hasActiveIndex",value:function(){var e=this.props.activeIndex;return Array.isArray(e)?e.length!==0:e||e===0}},{key:"renderLabels",value:function(e){var t=this.props.isAnimationActive;if(t&&!this.state.isAnimationFinished)return null;var o=this.props,r=o.label,d=o.labelLine,m=o.dataKey,l=o.valueKey,v=ie(this.props,!1),A=ie(r,!1),S=ie(d,!1),x=r&&r.offsetRadius||20,C=e.map(function(c,y){var s=(c.startAngle+c.endAngle)/2,f=ue(c.cx,c.cy,c.outerRadius+x,s),b=p(p(p(p({},v),c),{},{stroke:"none"},A),{},{index:y,textAnchor:a.getTextAnchor(f.x,c.cx)},f),u=p(p(p(p({},v),c),{},{fill:"none",stroke:c.fill},S),{},{index:y,points:[ue(c.cx,c.cy,c.outerRadius,s),f],key:"line"}),k=m;return Y(m)&&Y(l)?k="value":Y(m)&&(k=l),P.createElement(J,{key:"label-".concat(c.startAngle,"-").concat(c.endAngle,"-").concat(c.midAngle,"-").concat(y)},d&&a.renderLabelLineItem(d,u),a.renderLabelItem(r,b,B(c,k)))});return P.createElement(J,{className:"recharts-pie-labels"},C)}},{key:"renderSectorsStatically",value:function(e){var t=this,o=this.props,r=o.activeShape,d=o.blendStroke,m=o.inactiveShape;return e.map(function(l,v){if((l==null?void 0:l.startAngle)===0&&(l==null?void 0:l.endAngle)===0&&e.length!==1)return null;var A=t.isActiveIndex(v),S=m&&t.hasActiveIndex()?m:null,x=A?r:S,C=p(p({},l),{},{stroke:d?l.fill:l.stroke,tabIndex:-1});return P.createElement(J,U({ref:function(y){y&&!t.sectorRefs.includes(y)&&t.sectorRefs.push(y)},tabIndex:-1,className:"recharts-pie-sector"},Be(t.props,l,v),{key:"sector-".concat(l==null?void 0:l.startAngle,"-").concat(l==null?void 0:l.endAngle,"-").concat(l.midAngle,"-").concat(v)}),P.createElement(Qe,U({option:x,isActive:A,shapeType:"sector"},C)))})}},{key:"renderSectorsWithAnimation",value:function(){var e=this,t=this.props,o=t.sectors,r=t.isAnimationActive,d=t.animationBegin,m=t.animationDuration,l=t.animationEasing,v=t.animationId,A=this.state,S=A.prevSectors,x=A.prevIsAnimationActive;return P.createElement(Xe,{begin:d,duration:m,isActive:r,easing:l,from:{t:0},to:{t:1},key:"pie-".concat(v,"-").concat(x),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(C){var c=C.t,y=[],s=o&&o[0],f=s.startAngle;return o.forEach(function(b,u){var k=S&&S[u],T=u>0?st(b,"paddingAngle",0):0;if(k){var V=Ae(k.endAngle-k.startAngle,b.endAngle-b.startAngle),w=p(p({},b),{},{startAngle:f+T,endAngle:f+V(c)+T});y.push(w),f=w.endAngle}else{var E=b.endAngle,R=b.startAngle,z=Ae(0,E-R),M=z(c),O=p(p({},b),{},{startAngle:f+T,endAngle:f+M+T});y.push(O),f=O.endAngle}}),P.createElement(J,null,e.renderSectorsStatically(y))})}},{key:"attachKeyboardHandlers",value:function(e){var t=this;e.onkeydown=function(o){if(!o.altKey)switch(o.key){case"ArrowLeft":{var r=++t.state.sectorToFocus%t.sectorRefs.length;t.sectorRefs[r].focus(),t.setState({sectorToFocus:r});break}case"ArrowRight":{var d=--t.state.sectorToFocus<0?t.sectorRefs.length-1:t.state.sectorToFocus%t.sectorRefs.length;t.sectorRefs[d].focus(),t.setState({sectorToFocus:d});break}case"Escape":{t.sectorRefs[t.state.sectorToFocus].blur(),t.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var e=this.props,t=e.sectors,o=e.isAnimationActive,r=this.state.prevSectors;return o&&t&&t.length&&(!r||!We(r,t))?this.renderSectorsWithAnimation():this.renderSectorsStatically(t)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var e=this,t=this.props,o=t.hide,r=t.sectors,d=t.className,m=t.label,l=t.cx,v=t.cy,A=t.innerRadius,S=t.outerRadius,x=t.isAnimationActive,C=this.state.isAnimationFinished;if(o||!r||!r.length||!H(l)||!H(v)||!H(A)||!H(S))return null;var c=de("recharts-pie",d);return P.createElement(J,{tabIndex:this.props.rootTabIndex,className:c,ref:function(s){e.pieRef=s}},this.renderSectors(),m&&this.renderLabels(r),ke.renderCallByParent(this.props,null,!1),(!x||C)&&et.renderCallByParent(this.props,r,!1))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.prevIsAnimationActive!==e.isAnimationActive?{prevIsAnimationActive:e.isAnimationActive,prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:[],isAnimationFinished:!0}:e.isAnimationActive&&e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:t.curSectors,isAnimationFinished:!0}:e.sectors!==t.curSectors?{curSectors:e.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(e,t){return e>t?"start":e<t?"end":"middle"}},{key:"renderLabelLineItem",value:function(e,t){if(P.isValidElement(e))return P.cloneElement(e,t);if(Q(e))return e(t);var o=de("recharts-pie-label-line",typeof e!="boolean"?e.className:"");return P.createElement(Je,U({},t,{type:"linear",className:o}))}},{key:"renderLabelItem",value:function(e,t,o){if(P.isValidElement(e))return P.cloneElement(e,t);var r=o;if(Q(e)&&(r=e(t),P.isValidElement(r)))return r;var d=de("recharts-pie-label-text",typeof e!="boolean"&&!Q(e)?e.className:"");return P.createElement(xe,U({},t,{alignmentBaseline:"middle",className:d}),r)}}]),a}(L.PureComponent);oe=j;_(j,"displayName","Pie");_(j,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!tt.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});_(j,"parseDeltaAngle",function(n,a){var i=re(a-n),e=Math.min(Math.abs(a-n),360);return i*e});_(j,"getRealPieData",function(n){var a=n.props,i=a.data,e=a.children,t=ie(n.props,!1),o=He(e,Re);return i&&i.length?i.map(function(r,d){return p(p(p({payload:r},t),r),o&&o[d]&&o[d].props)}):o&&o.length?o.map(function(r){return p(p({},t),r.props)}):[]});_(j,"parseCoordinateOfPie",function(n,a){var i=a.top,e=a.left,t=a.width,o=a.height,r=at(t,o),d=e+ne(n.props.cx,t,t/2),m=i+ne(n.props.cy,o,o/2),l=ne(n.props.innerRadius,r,0),v=ne(n.props.outerRadius,r,r*.8),A=n.props.maxRadius||Math.sqrt(t*t+o*o)/2;return{cx:d,cy:m,innerRadius:l,outerRadius:v,maxRadius:A}});_(j,"getComposedData",function(n){var a=n.item,i=n.offset,e=oe.getRealPieData(a);if(!e||!e.length)return null;var t=a.props,o=t.cornerRadius,r=t.startAngle,d=t.endAngle,m=t.paddingAngle,l=t.dataKey,v=t.nameKey,A=t.valueKey,S=t.tooltipType,x=Math.abs(a.props.minAngle),C=oe.parseCoordinateOfPie(a,i),c=oe.parseDeltaAngle(r,d),y=Math.abs(c),s=l;Y(l)&&Y(A)?(Ce(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),s="value"):Y(l)&&(Ce(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),s=A);var f=e.filter(function(w){return B(w,s,0)!==0}).length,b=(y>=360?f:f-1)*m,u=y-f*x-b,k=e.reduce(function(w,E){var R=B(E,s,0);return w+(H(R)?R:0)},0),T;if(k>0){var V;T=e.map(function(w,E){var R=B(w,s,0),z=B(w,v,E),M=(H(R)?R:0)/k,O;E?O=V.endAngle+re(c)*m*(R!==0?1:0):O=r;var le=O+re(c)*((R!==0?x:0)+M*u),ce=(O+le)/2,X=(C.innerRadius+C.outerRadius)/2,ee=[{name:z,value:R,payload:w,dataKey:s,type:S}],h=ue(C.cx,C.cy,X,ce);return V=p(p(p({percent:M,cornerRadius:o,name:z,tooltipPayload:ee,midAngle:ce,middleRadius:X,tooltipPosition:h},w),C),{},{value:B(w,s),startAngle:O,endAngle:le,payload:w,paddingAngle:re(c)*m}),V})}return p(p({},C),{},{sectors:T,data:e})});var mt=nt({chartName:"PieChart",GraphicalChild:j,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:Ye},{axisType:"radiusAxis",AxisComp:Ge}],formatAxisMap:it,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}});const gt={packageName:"@ui5/webcomponents-react-charts",fileName:"PieChart.module.css",content:".PieChart_piechart_1x62k_1 g:focus,.PieChart_piechart_1x62k_1 path:focus{outline:none}"},vt={piechart:"PieChart_piechart_1x62k_1"},yt={color:"var (--sapTextColor)"},F=L.forwardRef((n,a)=>{var ee;const{loading:i,dataset:e,noLegend:t,noAnimation:o,tooltipConfig:r,onDataPointClick:d,onLegendClick:m,onClick:l,centerLabel:v,style:A,className:S,slot:x,ChartPlaceholder:C,children:c,...y}=n;lt(gt,F.displayName);const s={margin:{right:30,left:30,bottom:30,top:30,...((ee=n.chartConfig)==null?void 0:ee.margin)??{}},legendPosition:"bottom",legendHorizontalAlign:"center",paddingAngle:0,outerRadius:"80%",resizeDebounce:250,tooltipItemStyle:yt,...n.chartConfig},f=s.showActiveSegmentDataLabel??!0,b=L.useMemo(()=>({formatter:be,...n.dimension}),[n.dimension]),u=L.useMemo(()=>({formatter:be,...n.measure}),[n.measure]),k=h=>(typeof u.hideDataLabel=="function"?u.hideDataLabel(h):u.hideDataLabel)||s.activeSegment===h.index?null:L.isValidElement(u.DataLabel)?L.cloneElement(u.DataLabel,{...h,config:u}):g.jsx(xe,{...h,alignmentBaseline:"middle",className:"recharts-pie-label-text",children:u.formatter(h.value)}),T=L.useCallback((h,I)=>[u.formatter(h),b.formatter(I)],[u.formatter,b.formatter]),V=Ke(m,()=>u.accessor),w=Me(l),E=L.useCallback((h,I,D)=>{var N,Z;h&&h&&typeof d=="function"&&d(Ne(D,{value:h.value,dataKey:(Z=(N=h.tooltipPayload)==null?void 0:N[0])==null?void 0:Z.dataKey,name:h.name,payload:h.payload,dataIndex:I}))},[d]),R=L.useCallback(h=>{const I=Math.PI/180,{cx:D,cy:N,midAngle:Z,innerRadius:Le,outerRadius:q,startAngle:pe,endAngle:fe,fill:K,payload:De,percent:je,value:Te}=h,me=Math.sin(-I*Z),$=Math.cos(-I*Z),Oe=D+(q+10)*$,Ee=N+(q+10)*me,ge=D+(q+30)*$,ve=N+(q+30)*me,te=ge+($>=0?1:-1)*22,ae=ve,ye=$>=0?"start":"end";return g.jsxs("g",{children:[g.jsx("text",{x:D,y:N,dy:8,textAnchor:"middle",fill:K,children:De.name}),g.jsx(we,{cx:D,cy:N,innerRadius:Le,outerRadius:q,startAngle:pe,endAngle:fe,fill:K}),g.jsx(we,{cx:D,cy:N,startAngle:pe,endAngle:fe,innerRadius:q+6,outerRadius:q+10,fill:K}),f&&g.jsxs(g.Fragment,{children:[g.jsx("path",{d:`M${Oe},${Ee}L${ge},${ve}L${te},${ae}`,stroke:K,fill:"none"}),g.jsx("circle",{cx:te,cy:ae,r:2,fill:K,stroke:"none"}),g.jsx("text",{x:te+($>=0?1:-1)*12,y:ae,textAnchor:ye,fill:K,children:u.formatter(Te)}),g.jsx("text",{x:te+($>=0?1:-1)*12,y:ae,dy:18,textAnchor:ye,fill:K,children:`(${(je*100).toFixed(2)}%)`})]})]})},[f]),z=L.useCallback(h=>(typeof u.hideDataLabel=="function"?u.hideDataLabel(h):u.hideDataLabel)||s.activeSegment===h.index?null:j.renderLabelLineItem({},h),[s.activeSegment,u.hideDataLabel]),M=L.useMemo(()=>{if(s.activeSegment!=null&&f){if(s.legendPosition==="bottom")return{paddingTop:"30px"};if(s.legendPosition==="top")return{paddingBottom:"30px"}}return null},[f,s.activeSegment,s.legendPosition]),{chartConfig:O,dimension:le,measure:ce,...X}=y;return g.jsx(Ue,{dataset:e,ref:a,loading:i,Placeholder:C??Ze,style:A,className:S,slot:x,resizeDebounce:s.resizeDebounce,...X,children:g.jsxs(mt,{onClick:w,margin:s.margin,className:Ve(typeof d=="function"||typeof l=="function"?"has-click-handler":void 0,vt.piechart),children:[g.jsxs(j,{onClick:E,innerRadius:s.innerRadius,outerRadius:s.outerRadius,paddingAngle:s.paddingAngle,nameKey:b.accessor,dataKey:u.accessor,data:e,animationBegin:0,isAnimationActive:o===!1,labelLine:z,label:k,activeIndex:s.activeSegment,activeShape:s.activeSegment!=null&&R,children:[v&&g.jsx(ke,{position:"center",children:v}),e&&e.map((h,I)=>{var D;return g.jsx(Re,{name:b.formatter(qe.getValueByDataKey(h,b.accessor,"")),fill:((D=u.colors)==null?void 0:D[I])??`var(--sapChart_OrderedColor_${I%11+1})`},I)})]}),(r==null?void 0:r.active)!==!1&&g.jsx(rt,{cursor:Fe,formatter:T,contentStyle:ze,itemStyle:s.tooltipItemStyle,labelStyle:s.tooltipLabelStyle,...r}),!t&&g.jsx(ot,{verticalAlign:s.legendPosition,align:s.legendHorizontalAlign,onClick:V,wrapperStyle:M}),c]})})});F.defaultProps={noLegend:!1,noAnimation:!1};F.displayName="PieChart";try{F.displayName="PieChart",F.__docgenInfo={description:`A Pie Chart is a type of graph that displays data in a circular graph.
The pieces of the graph are proportional to the fraction of the whole in each category.

In other words, each slice of the pie is relative to the size of that category in the group as a whole.
The entire “pie” represents 100 percent of a whole, while the pie “slices” represent portions of the whole.`,displayName:"PieChart",props:{centerLabel:{defaultValue:null,description:"A label to display in the center of the `PieChart`.\nIf you use this prop to display a text, we recommend to increase `chartConfig.innerRadius` to have some free\nspace for the text.",name:"centerLabel",required:!1,type:{name:"string"}},dimension:{defaultValue:null,description:`A object which contains the configuration of the dimension.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs`,name:"dimension",required:!0,type:{name:"IChartDimension"}},measure:{defaultValue:null,description:"A object which contains the configuration of the measure. The object is defining one pie in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this pie should display. Supports object structures by using <code>'parent.child'</code>.\n\n**Optional properties**\n\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `DataLabel`: a custom component to be used for the data label\n- `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this segment. When passed a function it will be called for each data label with the corresponding chart properties.",name:"measure",required:!0,type:{name:"MeasureConfig"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"IPolarChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}try{F.displayName="PieChart",F.__docgenInfo={description:`A Pie Chart is a type of graph that displays data in a circular graph.
The pieces of the graph are proportional to the fraction of the whole in each category.

In other words, each slice of the pie is relative to the size of that category in the group as a whole.
The entire “pie” represents 100 percent of a whole, while the pie “slices” represent portions of the whole.`,displayName:"PieChart",props:{centerLabel:{defaultValue:null,description:"A label to display in the center of the `PieChart`.\nIf you use this prop to display a text, we recommend to increase `chartConfig.innerRadius` to have some free\nspace for the text.",name:"centerLabel",required:!1,type:{name:"string"}},dimension:{defaultValue:null,description:`A object which contains the configuration of the dimension.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs`,name:"dimension",required:!0,type:{name:"IChartDimension"}},measure:{defaultValue:null,description:"A object which contains the configuration of the measure. The object is defining one pie in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this pie should display. Supports object structures by using <code>'parent.child'</code>.\n\n**Optional properties**\n\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `DataLabel`: a custom component to be used for the data label\n- `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this segment. When passed a function it will be called for each data label with the corresponding chart properties.",name:"measure",required:!0,type:{name:"MeasureConfig"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"IPolarChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}export{F as P};
