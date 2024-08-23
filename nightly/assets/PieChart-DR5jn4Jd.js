import{j as m}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{e as Ne}from"./index-C-Zfmu7Z.js";import{c as qe}from"./clsx-B-dksMZM.js";import{R as P,r as _}from"./index-RYns6xqu.js";import{c as Ae,u as Ke,C as Fe,a as ze,b as Be}from"./staticProps-BTLKcLWq.js";import{u as Me}from"./useOnClickInternal-CrvD_ZAc.js";import{u as $e,c as ue,C as We,y as ke,a as ae,z as he,d as U,L as Z,h as M,w as He,S as Ue,A as Ye,i as Ce,b as Ge,r as W,t as Ie,g as Je,G as Ze,f as Qe,F as Xe,H as ne,I as we,J as ie,o as De,k as et,K as tt,M as Pe,m as nt,T as at,n as it}from"./ChartContainer-BycPkCnd.js";import{P as rt,a as ot,b as st}from"./Placeholder-ASatqNLz.js";import{g as lt}from"./_baseUniq-DGDOfdbw.js";import{i as Q}from"./_getPrototype-B0L0C3AT.js";import{u as ct}from"./useStylesheet-DKtOrKyD.js";var re;function Y(a){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Y(a)}function H(){return H=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(a[e]=i[e])}return a},H.apply(this,arguments)}function Se(a,n){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),i.push.apply(i,e)}return i}function h(a){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?Se(Object(i),!0).forEach(function(e){R(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):Se(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function dt(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function xe(a,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,_e(e.key),e)}}function ut(a,n,i){return n&&xe(a.prototype,n),i&&xe(a,i),Object.defineProperty(a,"prototype",{writable:!1}),a}function ht(a,n,i){return n=oe(n),pt(a,Re()?Reflect.construct(n,i||[],oe(a).constructor):n.apply(a,i))}function pt(a,n){if(n&&(Y(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $(a)}function Re(){try{var a=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Re=function(){return!!a})()}function oe(a){return oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},oe(a)}function $(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function ft(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),n&&pe(a,n)}function pe(a,n){return pe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},pe(a,n)}function R(a,n,i){return n=_e(n),n in a?Object.defineProperty(a,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[n]=i,a}function _e(a){var n=mt(a,"string");return Y(n)=="symbol"?n:String(n)}function mt(a,n){if(Y(a)!="object"||!a)return a;var i=a[Symbol.toPrimitive];if(i!==void 0){var e=i.call(a,n||"default");if(Y(e)!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}var T=function(a){ft(n,a);function n(i){var e;return dt(this,n),e=ht(this,n,[i]),R($(e),"pieRef",null),R($(e),"sectorRefs",[]),R($(e),"id",$e("recharts-pie-")),R($(e),"handleAnimationEnd",function(){var t=e.props.onAnimationEnd;e.setState({isAnimationFinished:!0}),Q(t)&&t()}),R($(e),"handleAnimationStart",function(){var t=e.props.onAnimationStart;e.setState({isAnimationFinished:!1}),Q(t)&&t()}),e.state={isAnimationFinished:!i.isAnimationActive,prevIsAnimationActive:i.isAnimationActive,prevAnimationId:i.animationId,sectorToFocus:0},e}return ut(n,[{key:"isActiveIndex",value:function(e){var t=this.props.activeIndex;return Array.isArray(t)?t.indexOf(e)!==-1:e===t}},{key:"hasActiveIndex",value:function(){var e=this.props.activeIndex;return Array.isArray(e)?e.length!==0:e||e===0}},{key:"renderLabels",value:function(e){var t=this.props.isAnimationActive;if(t&&!this.state.isAnimationFinished)return null;var r=this.props,o=r.label,u=r.labelLine,f=r.dataKey,l=r.valueKey,g=ae(this.props,!1),y=ae(o,!1),S=ae(u,!1),x=o&&o.offsetRadius||20,b=e.map(function(c,v){var A=(c.startAngle+c.endAngle)/2,s=he(c.cx,c.cy,c.outerRadius+x,A),C=h(h(h(h({},g),c),{},{stroke:"none"},y),{},{index:v,textAnchor:n.getTextAnchor(s.x,c.cx)},s),k=h(h(h(h({},g),c),{},{fill:"none",stroke:c.fill},S),{},{index:v,points:[he(c.cx,c.cy,c.outerRadius,A),s],key:"line"}),d=f;return U(f)&&U(l)?d="value":U(f)&&(d=l),P.createElement(Z,{key:"label-".concat(c.startAngle,"-").concat(c.endAngle,"-").concat(c.midAngle,"-").concat(v)},u&&n.renderLabelLineItem(u,k),n.renderLabelItem(o,C,M(c,d)))});return P.createElement(Z,{className:"recharts-pie-labels"},b)}},{key:"renderSectorsStatically",value:function(e){var t=this,r=this.props,o=r.activeShape,u=r.blendStroke,f=r.inactiveShape;return e.map(function(l,g){if((l==null?void 0:l.startAngle)===0&&(l==null?void 0:l.endAngle)===0&&e.length!==1)return null;var y=t.isActiveIndex(g),S=f&&t.hasActiveIndex()?f:null,x=y?o:S,b=h(h({},l),{},{stroke:u?l.fill:l.stroke,tabIndex:-1});return P.createElement(Z,H({ref:function(v){v&&!t.sectorRefs.includes(v)&&t.sectorRefs.push(v)},tabIndex:-1,className:"recharts-pie-sector"},He(t.props,l,g),{key:"sector-".concat(l==null?void 0:l.startAngle,"-").concat(l==null?void 0:l.endAngle,"-").concat(l.midAngle,"-").concat(g)}),P.createElement(Ue,H({option:x,isActive:y,shapeType:"sector"},b)))})}},{key:"renderSectorsWithAnimation",value:function(){var e=this,t=this.props,r=t.sectors,o=t.isAnimationActive,u=t.animationBegin,f=t.animationDuration,l=t.animationEasing,g=t.animationId,y=this.state,S=y.prevSectors,x=y.prevIsAnimationActive;return P.createElement(Ye,{begin:u,duration:f,isActive:o,easing:l,from:{t:0},to:{t:1},key:"pie-".concat(g,"-").concat(x),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(b){var c=b.t,v=[],A=r&&r[0],s=A.startAngle;return r.forEach(function(C,k){var d=S&&S[k],O=k>0?lt(C,"paddingAngle",0):0;if(d){var N=Ce(d.endAngle-d.startAngle,C.endAngle-C.startAngle),w=h(h({},C),{},{startAngle:s+O,endAngle:s+N(c)+O});v.push(w),s=w.endAngle}else{var E=C.endAngle,I=C.startAngle,F=Ce(0,E-I),z=F(c),L=h(h({},C),{},{startAngle:s+O,endAngle:s+z+O});v.push(L),s=L.endAngle}}),P.createElement(Z,null,e.renderSectorsStatically(v))})}},{key:"attachKeyboardHandlers",value:function(e){var t=this;e.onkeydown=function(r){if(!r.altKey)switch(r.key){case"ArrowLeft":{var o=++t.state.sectorToFocus%t.sectorRefs.length;t.sectorRefs[o].focus(),t.setState({sectorToFocus:o});break}case"ArrowRight":{var u=--t.state.sectorToFocus<0?t.sectorRefs.length-1:t.state.sectorToFocus%t.sectorRefs.length;t.sectorRefs[u].focus(),t.setState({sectorToFocus:u});break}case"Escape":{t.sectorRefs[t.state.sectorToFocus].blur(),t.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var e=this.props,t=e.sectors,r=e.isAnimationActive,o=this.state.prevSectors;return r&&t&&t.length&&(!o||!Ge(o,t))?this.renderSectorsWithAnimation():this.renderSectorsStatically(t)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var e=this,t=this.props,r=t.hide,o=t.sectors,u=t.className,f=t.label,l=t.cx,g=t.cy,y=t.innerRadius,S=t.outerRadius,x=t.isAnimationActive,b=this.state.isAnimationFinished;if(r||!o||!o.length||!W(l)||!W(g)||!W(y)||!W(S))return null;var c=ue("recharts-pie",u);return P.createElement(Z,{tabIndex:this.props.rootTabIndex,className:c,ref:function(A){e.pieRef=A}},this.renderSectors(),f&&this.renderLabels(o),Ie.renderCallByParent(this.props,null,!1),(!x||b)&&Je.renderCallByParent(this.props,o,!1))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.prevIsAnimationActive!==e.isAnimationActive?{prevIsAnimationActive:e.isAnimationActive,prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:[],isAnimationFinished:!0}:e.isAnimationActive&&e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:t.curSectors,isAnimationFinished:!0}:e.sectors!==t.curSectors?{curSectors:e.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(e,t){return e>t?"start":e<t?"end":"middle"}},{key:"renderLabelLineItem",value:function(e,t){if(P.isValidElement(e))return P.cloneElement(e,t);if(Q(e))return e(t);var r=ue("recharts-pie-label-line",typeof e!="boolean"?e.className:"");return P.createElement(We,H({},t,{type:"linear",className:r}))}},{key:"renderLabelItem",value:function(e,t,r){if(P.isValidElement(e))return P.cloneElement(e,t);var o=r;if(Q(e)&&(o=e(t),P.isValidElement(o)))return o;var u=ue("recharts-pie-label-text",typeof e!="boolean"&&!Q(e)?e.className:"");return P.createElement(ke,H({},t,{alignmentBaseline:"middle",className:u}),o)}}]),n}(_.PureComponent);re=T;R(T,"displayName","Pie");R(T,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Ze.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});R(T,"parseDeltaAngle",function(a,n){var i=ie(n-a),e=Math.min(Math.abs(n-a),360);return i*e});R(T,"getRealPieData",function(a){var n=a.props,i=n.data,e=n.children,t=ae(a.props,!1),r=Qe(e,De);return i&&i.length?i.map(function(o,u){return h(h(h({payload:o},t),o),r&&r[u]&&r[u].props)}):r&&r.length?r.map(function(o){return h(h({},t),o.props)}):[]});R(T,"parseCoordinateOfPie",function(a,n){var i=n.top,e=n.left,t=n.width,r=n.height,o=Xe(t,r),u=e+ne(a.props.cx,t,t/2),f=i+ne(a.props.cy,r,r/2),l=ne(a.props.innerRadius,o,0),g=ne(a.props.outerRadius,o,o*.8),y=a.props.maxRadius||Math.sqrt(t*t+r*r)/2;return{cx:u,cy:f,innerRadius:l,outerRadius:g,maxRadius:y}});R(T,"getComposedData",function(a){var n=a.item,i=a.offset,e=re.getRealPieData(n);if(!e||!e.length)return null;var t=n.props,r=t.cornerRadius,o=t.startAngle,u=t.endAngle,f=t.paddingAngle,l=t.dataKey,g=t.nameKey,y=t.valueKey,S=t.tooltipType,x=Math.abs(n.props.minAngle),b=re.parseCoordinateOfPie(n,i),c=re.parseDeltaAngle(o,u),v=Math.abs(c),A=l;U(l)&&U(y)?(we(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),A="value"):U(l)&&(we(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),A=y);var s=e.filter(function(w){return M(w,A,0)!==0}).length,C=(v>=360?s:s-1)*f,k=v-s*x-C,d=e.reduce(function(w,E){var I=M(E,A,0);return w+(W(I)?I:0)},0),O;if(d>0){var N;O=e.map(function(w,E){var I=M(w,A,0),F=M(w,g,E),z=(W(I)?I:0)/d,L;E?L=N.endAngle+ie(c)*f*(I!==0?1:0):L=o;var se=L+ie(c)*((I!==0?x:0)+z*k),le=(L+se)/2,ce=(b.innerRadius+b.outerRadius)/2,de=[{name:F,value:I,payload:w,dataKey:A,type:S}],X=he(b.cx,b.cy,ce,le);return N=h(h(h({percent:z,cornerRadius:r,name:F,tooltipPayload:de,midAngle:le,middleRadius:ce,tooltipPosition:X},w),b),{},{value:M(w,A),startAngle:L,endAngle:se,payload:w,paddingAngle:ie(c)*f}),N})}return h(h({},b),{},{sectors:O,data:e})});var gt=et({chartName:"PieChart",GraphicalChild:T,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:rt},{axisType:"radiusAxis",AxisComp:ot}],formatAxisMap:tt,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}});const yt={packageName:"@ui5/webcomponents-react-charts",fileName:"PieChart.module.css",content:".PieChart_piechart_1x62k_1 g:focus,.PieChart_piechart_1x62k_1 path:focus{outline:none}"},vt={piechart:"PieChart_piechart_1x62k_1"},bt={color:"var (--sapTextColor)"},G=_.forwardRef((a,n)=>{var X;const{loading:i,loadingDelay:e,dataset:t,noLegend:r,noAnimation:o,tooltipConfig:u,onDataPointClick:f,onLegendClick:l,onClick:g,centerLabel:y,style:S,className:x,slot:b,ChartPlaceholder:c,children:v,...A}=a;ct(yt,G.displayName);const s={margin:{right:30,left:30,bottom:30,top:30,...((X=a.chartConfig)==null?void 0:X.margin)??{}},legendPosition:"bottom",legendHorizontalAlign:"center",paddingAngle:0,outerRadius:"80%",resizeDebounce:250,tooltipItemStyle:bt,...a.chartConfig},C=s.showActiveSegmentDataLabel??!0,k=_.useMemo(()=>({formatter:Ae,...a.dimension}),[a.dimension]),d=_.useMemo(()=>({formatter:Ae,...a.measure}),[a.measure]),O=p=>(typeof d.hideDataLabel=="function"?d.hideDataLabel(p):d.hideDataLabel)||s.activeSegment===p.index?null:_.isValidElement(d.DataLabel)?_.cloneElement(d.DataLabel,{...p,config:d}):m.jsx(ke,{...p,alignmentBaseline:"middle",className:"recharts-pie-label-text",children:d.formatter(p.value)}),N=_.useCallback((p,D)=>[d.formatter(p),k.formatter(D)],[d.formatter,k.formatter]),w=Ke(l,()=>d.accessor),E=Me(g),I=_.useCallback((p,D,j)=>{var V,J;p&&p&&typeof f=="function"&&f(Ne(j,{value:p.value,dataKey:(J=(V=p.tooltipPayload)==null?void 0:V[0])==null?void 0:J.dataKey,name:p.name,payload:p.payload,dataIndex:D}))},[f]),F=_.useCallback(p=>{const D=Math.PI/180,{cx:j,cy:V,midAngle:J,innerRadius:Le,outerRadius:q,startAngle:fe,endAngle:me,fill:K,payload:je,percent:Te,value:Oe}=p,ge=Math.sin(-D*J),B=Math.cos(-D*J),Ee=j+(q+10)*B,Ve=V+(q+10)*ge,ye=j+(q+30)*B,ve=V+(q+30)*ge,ee=ye+(B>=0?1:-1)*22,te=ve,be=B>=0?"start":"end";return m.jsxs("g",{children:[m.jsx("text",{x:j,y:V,dy:8,textAnchor:"middle",fill:K,children:je.name}),m.jsx(Pe,{cx:j,cy:V,innerRadius:Le,outerRadius:q,startAngle:fe,endAngle:me,fill:K}),m.jsx(Pe,{cx:j,cy:V,startAngle:fe,endAngle:me,innerRadius:q+6,outerRadius:q+10,fill:K}),C&&m.jsxs(m.Fragment,{children:[m.jsx("path",{d:`M${Ee},${Ve}L${ye},${ve}L${ee},${te}`,stroke:K,fill:"none"}),m.jsx("circle",{cx:ee,cy:te,r:2,fill:K,stroke:"none"}),m.jsx("text",{x:ee+(B>=0?1:-1)*12,y:te,textAnchor:be,fill:K,children:d.formatter(Oe)}),m.jsx("text",{x:ee+(B>=0?1:-1)*12,y:te,dy:18,textAnchor:be,fill:K,children:`(${(Te*100).toFixed(2)}%)`})]})]})},[C]),z=_.useCallback(p=>(typeof d.hideDataLabel=="function"?d.hideDataLabel(p):d.hideDataLabel)||s.activeSegment===p.index?null:T.renderLabelLineItem({},p),[s.activeSegment,d.hideDataLabel]),L=_.useMemo(()=>{if(s.activeSegment!=null&&C){if(s.legendPosition==="bottom")return{paddingTop:"30px"};if(s.legendPosition==="top")return{paddingBottom:"30px"}}return null},[C,s.activeSegment,s.legendPosition]),{chartConfig:se,dimension:le,measure:ce,...de}=A;return m.jsx(nt,{dataset:t,ref:n,loading:i,loadingDelay:e,Placeholder:c??st,style:S,className:x,slot:b,resizeDebounce:s.resizeDebounce,...de,children:m.jsxs(gt,{onClick:E,margin:s.margin,className:qe(typeof f=="function"||typeof g=="function"?"has-click-handler":void 0,vt.piechart),children:[m.jsxs(T,{onClick:I,innerRadius:s.innerRadius,outerRadius:s.outerRadius,paddingAngle:s.paddingAngle,nameKey:k.accessor,dataKey:d.accessor,data:t,animationBegin:0,isAnimationActive:!o,labelLine:z,label:O,activeIndex:s.activeSegment,activeShape:s.activeSegment!=null&&F,children:[y&&m.jsx(Ie,{position:"center",children:y}),t&&t.map((p,D)=>{var j;return m.jsx(De,{name:k.formatter(Fe.getValueByDataKey(p,k.accessor,"")),fill:((j=d.colors)==null?void 0:j[D])??`var(--sapChart_OrderedColor_${D%11+1})`},D)})]}),(u==null?void 0:u.active)!==!1&&m.jsx(at,{cursor:ze,formatter:N,contentStyle:Be,itemStyle:s.tooltipItemStyle,labelStyle:s.tooltipLabelStyle,...u}),!r&&m.jsx(it,{verticalAlign:s.legendPosition,align:s.legendHorizontalAlign,onClick:w,wrapperStyle:L}),v]})})});G.displayName="PieChart";try{G.displayName="PieChart",G.__docgenInfo={description:`A Pie Chart is a type of graph that displays data in a circular graph.
The pieces of the graph are proportional to the fraction of the whole in each category.

In other words, each slice of the pie is relative to the size of that category in the group as a whole.
The entire “pie” represents 100 percent of a whole, while the pie “slices” represent portions of the whole.`,displayName:"PieChart",props:{centerLabel:{defaultValue:null,description:"A label to display in the center of the `PieChart`.\nIf you use this prop to display a text, we recommend to increase `chartConfig.innerRadius` to have some free\nspace for the text.",name:"centerLabel",required:!1,type:{name:"string"}},dimension:{defaultValue:null,description:`A object which contains the configuration of the dimension.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs`,name:"dimension",required:!0,type:{name:"IChartDimension"}},measure:{defaultValue:null,description:"A object which contains the configuration of the measure. The object is defining one pie in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this pie should display. Supports object structures by using <code>'parent.child'</code>.\n\n**Optional properties**\n\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `DataLabel`: a custom component to be used for the data label\n- `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this segment. When passed a function it will be called for each data label with the corresponding chart properties.",name:"measure",required:!0,type:{name:"MeasureConfig"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'IPolarChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | "left" | "right"; resizeDebounce?: number; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}try{G.displayName="PieChart",G.__docgenInfo={description:`A Pie Chart is a type of graph that displays data in a circular graph.
The pieces of the graph are proportional to the fraction of the whole in each category.

In other words, each slice of the pie is relative to the size of that category in the group as a whole.
The entire “pie” represents 100 percent of a whole, while the pie “slices” represent portions of the whole.`,displayName:"PieChart",props:{centerLabel:{defaultValue:null,description:"A label to display in the center of the `PieChart`.\nIf you use this prop to display a text, we recommend to increase `chartConfig.innerRadius` to have some free\nspace for the text.",name:"centerLabel",required:!1,type:{name:"string"}},dimension:{defaultValue:null,description:`A object which contains the configuration of the dimension.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs`,name:"dimension",required:!0,type:{name:"IChartDimension"}},measure:{defaultValue:null,description:"A object which contains the configuration of the measure. The object is defining one pie in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this pie should display. Supports object structures by using <code>'parent.child'</code>.\n\n**Optional properties**\n\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `DataLabel`: a custom component to be used for the data label\n- `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this segment. When passed a function it will be called for each data label with the corresponding chart properties.",name:"measure",required:!0,type:{name:"MeasureConfig"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'IPolarChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | "left" | "right"; resizeDebounce?: number; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}export{G as P};
