import{j as m}from"./jsx-runtime-CLpGMVip.js";import{e as Be}from"./index-BQ73vKGB.js";import{c as Me}from"./clsx-B-dksMZM.js";import{r as R,e as S}from"./index-D23YZj_x.js";import{e as Se,u as $e,C as We,a as He,b as Ue}from"./staticProps-Ba04PdBF.js";import{u as Ye}from"./useOnClickInternal-Bzi6oxFd.js";import{G as Ge,d as re,f as Je,z as Ze,F as ie,i as H,H as Pe,g as M,s as $,I as oe,J as de,u as Qe,b as J,c as ce,C as Xe,K as De,L as Z,x as et,S as tt,A as nt,M as at,e as xe,h as it,r as Le,k as rt,p as Re,l as ot,N as st,O as _e,n as lt,T as ct,o as dt}from"./ChartContainer-CDlUf6OG.js";import{P as ut,a as ht,b as pt}from"./Placeholder-HloWjcjM.js";import{u as ft}from"./useStylesheet-DNyxTWaC.js";import{h as mt}from"./withWebComponent-DfVDXLfc.js";var se;function U(a){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},U(a)}function W(){return W=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(a[e]=i[e])}return a},W.apply(this,arguments)}function ke(a,n){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),i.push.apply(i,e)}return i}function u(a){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?ke(Object(i),!0).forEach(function(e){D(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):ke(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function gt(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function Ie(a,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,je(e.key),e)}}function yt(a,n,i){return Ie(a.prototype,n),Ie(a,i),Object.defineProperty(a,"prototype",{writable:!1}),a}function bt(a,n,i){return n=le(n),vt(a,Te()?Reflect.construct(n,i,le(a).constructor):n.apply(a,i))}function vt(a,n){if(n&&(U(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return At(a)}function At(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Te(){try{var a=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Te=function(){return!!a})()}function le(a){return le=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},le(a)}function Ct(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),n&&ue(a,n)}function ue(a,n){return ue=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ue(a,n)}function D(a,n,i){return n=je(n),n in a?Object.defineProperty(a,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[n]=i,a}function je(a){var n=wt(a,"string");return U(n)=="symbol"?n:n+""}function wt(a,n){if(U(a)!="object"||!a)return a;var i=a[Symbol.toPrimitive];if(i!==void 0){var e=i.call(a,n||"default");if(U(e)!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}var O=function(a){function n(i){var e;return gt(this,n),e=bt(this,n,[i]),D(e,"pieRef",null),D(e,"sectorRefs",[]),D(e,"id",Qe("recharts-pie-")),D(e,"handleAnimationEnd",function(){var t=e.props.onAnimationEnd;e.setState({isAnimationFinished:!0}),J(t)&&t()}),D(e,"handleAnimationStart",function(){var t=e.props.onAnimationStart;e.setState({isAnimationFinished:!1}),J(t)&&t()}),e.state={isAnimationFinished:!i.isAnimationActive,prevIsAnimationActive:i.isAnimationActive,prevAnimationId:i.animationId,sectorToFocus:0},e}return Ct(n,a),yt(n,[{key:"isActiveIndex",value:function(e){var t=this.props.activeIndex;return Array.isArray(t)?t.indexOf(e)!==-1:e===t}},{key:"hasActiveIndex",value:function(){var e=this.props.activeIndex;return Array.isArray(e)?e.length!==0:e||e===0}},{key:"renderLabels",value:function(e){var t=this.props.isAnimationActive;if(t&&!this.state.isAnimationFinished)return null;var r=this.props,o=r.label,h=r.labelLine,f=r.dataKey,l=r.valueKey,g=re(this.props,!1),y=re(o,!1),P=re(h,!1),x=o&&o.offsetRadius||20,v=e.map(function(d,b){var A=(d.startAngle+d.endAngle)/2,C=de(d.cx,d.cy,d.outerRadius+x,A),w=u(u(u(u({},g),d),{},{stroke:"none"},y),{},{index:b,textAnchor:n.getTextAnchor(C.x,d.cx)},C),E=u(u(u(u({},g),d),{},{fill:"none",stroke:d.fill},P),{},{index:b,points:[de(d.cx,d.cy,d.outerRadius,A),C]}),s=f;return H(f)&&H(l)?s="value":H(f)&&(s=l),S.createElement(Z,{key:"label-".concat(d.startAngle,"-").concat(d.endAngle,"-").concat(d.midAngle,"-").concat(b)},h&&n.renderLabelLineItem(h,E,"line"),n.renderLabelItem(o,w,M(d,s)))});return S.createElement(Z,{className:"recharts-pie-labels"},v)}},{key:"renderSectorsStatically",value:function(e){var t=this,r=this.props,o=r.activeShape,h=r.blendStroke,f=r.inactiveShape;return e.map(function(l,g){if((l==null?void 0:l.startAngle)===0&&(l==null?void 0:l.endAngle)===0&&e.length!==1)return null;var y=t.isActiveIndex(g),P=f&&t.hasActiveIndex()?f:null,x=y?o:P,v=u(u({},l),{},{stroke:h?l.fill:l.stroke,tabIndex:-1});return S.createElement(Z,W({ref:function(b){b&&!t.sectorRefs.includes(b)&&t.sectorRefs.push(b)},tabIndex:-1,className:"recharts-pie-sector"},et(t.props,l,g),{key:"sector-".concat(l==null?void 0:l.startAngle,"-").concat(l==null?void 0:l.endAngle,"-").concat(l.midAngle,"-").concat(g)}),S.createElement(tt,W({option:x,isActive:y,shapeType:"sector"},v)))})}},{key:"renderSectorsWithAnimation",value:function(){var e=this,t=this.props,r=t.sectors,o=t.isAnimationActive,h=t.animationBegin,f=t.animationDuration,l=t.animationEasing,g=t.animationId,y=this.state,P=y.prevSectors,x=y.prevIsAnimationActive;return S.createElement(nt,{begin:h,duration:f,isActive:o,easing:l,from:{t:0},to:{t:1},key:"pie-".concat(g,"-").concat(x),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(v){var d=v.t,b=[],A=r&&r[0],C=A.startAngle;return r.forEach(function(w,E){var s=P&&P[E],_=E>0?at(w,"paddingAngle",0):0;if(s){var L=xe(s.endAngle-s.startAngle,w.endAngle-w.startAngle),c=u(u({},w),{},{startAngle:C+_,endAngle:C+L(d)+_});b.push(c),C=c.endAngle}else{var N=w.endAngle,k=w.startAngle,z=xe(0,N-k),F=z(d),T=u(u({},w),{},{startAngle:C+_,endAngle:C+F+_});b.push(T),C=T.endAngle}}),S.createElement(Z,null,e.renderSectorsStatically(b))})}},{key:"attachKeyboardHandlers",value:function(e){var t=this;e.onkeydown=function(r){if(!r.altKey)switch(r.key){case"ArrowLeft":{var o=++t.state.sectorToFocus%t.sectorRefs.length;t.sectorRefs[o].focus(),t.setState({sectorToFocus:o});break}case"ArrowRight":{var h=--t.state.sectorToFocus<0?t.sectorRefs.length-1:t.state.sectorToFocus%t.sectorRefs.length;t.sectorRefs[h].focus(),t.setState({sectorToFocus:h});break}case"Escape":{t.sectorRefs[t.state.sectorToFocus].blur(),t.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var e=this.props,t=e.sectors,r=e.isAnimationActive,o=this.state.prevSectors;return r&&t&&t.length&&(!o||!it(o,t))?this.renderSectorsWithAnimation():this.renderSectorsStatically(t)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var e=this,t=this.props,r=t.hide,o=t.sectors,h=t.className,f=t.label,l=t.cx,g=t.cy,y=t.innerRadius,P=t.outerRadius,x=t.isAnimationActive,v=this.state.isAnimationFinished;if(r||!o||!o.length||!$(l)||!$(g)||!$(y)||!$(P))return null;var d=ce("recharts-pie",h);return S.createElement(Z,{tabIndex:this.props.rootTabIndex,className:d,ref:function(A){e.pieRef=A}},this.renderSectors(),f&&this.renderLabels(o),Le.renderCallByParent(this.props,null,!1),(!x||v)&&rt.renderCallByParent(this.props,o,!1))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.prevIsAnimationActive!==e.isAnimationActive?{prevIsAnimationActive:e.isAnimationActive,prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:[],isAnimationFinished:!0}:e.isAnimationActive&&e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:t.curSectors,isAnimationFinished:!0}:e.sectors!==t.curSectors?{curSectors:e.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(e,t){return e>t?"start":e<t?"end":"middle"}},{key:"renderLabelLineItem",value:function(e,t,r){if(S.isValidElement(e))return S.cloneElement(e,t);if(J(e))return e(t);var o=ce("recharts-pie-label-line",typeof e!="boolean"?e.className:"");return S.createElement(Xe,W({},t,{key:r,type:"linear",className:o}))}},{key:"renderLabelItem",value:function(e,t,r){if(S.isValidElement(e))return S.cloneElement(e,t);var o=r;if(J(e)&&(o=e(t),S.isValidElement(o)))return o;var h=ce("recharts-pie-label-text",typeof e!="boolean"&&!J(e)?e.className:"");return S.createElement(De,W({},t,{alignmentBaseline:"middle",className:h}),o)}}])}(R.PureComponent);se=O;D(O,"displayName","Pie");D(O,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Ge.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});D(O,"parseDeltaAngle",function(a,n){var i=oe(n-a),e=Math.min(Math.abs(n-a),360);return i*e});D(O,"getRealPieData",function(a){var n=a.data,i=a.children,e=re(a,!1),t=Je(i,Re);return n&&n.length?n.map(function(r,o){return u(u(u({payload:r},e),r),t[o]&&t[o].props)}):t.length?t.map(function(r){return u(u({},e),r.props)}):[]});D(O,"parseCoordinateOfPie",function(a,n){var i=n.top,e=n.left,t=n.width,r=n.height,o=Ze(t,r),h=e+ie(a.cx,t,t/2),f=i+ie(a.cy,r,r/2),l=ie(a.innerRadius,o,0),g=ie(a.outerRadius,o,o*.8),y=a.maxRadius||Math.sqrt(t*t+r*r)/2;return{cx:h,cy:f,innerRadius:l,outerRadius:g,maxRadius:y}});D(O,"getComposedData",function(a){var n=a.item,i=a.offset,e=n.type.defaultProps!==void 0?u(u({},n.type.defaultProps),n.props):n.props,t=se.getRealPieData(e);if(!t||!t.length)return null;var r=e.cornerRadius,o=e.startAngle,h=e.endAngle,f=e.paddingAngle,l=e.dataKey,g=e.nameKey,y=e.valueKey,P=e.tooltipType,x=Math.abs(e.minAngle),v=se.parseCoordinateOfPie(e,i),d=se.parseDeltaAngle(o,h),b=Math.abs(d),A=l;H(l)&&H(y)?(Pe(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),A="value"):H(l)&&(Pe(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),A=y);var C=t.filter(function(c){return M(c,A,0)!==0}).length,w=(b>=360?C:C-1)*f,E=b-C*x-w,s=t.reduce(function(c,N){var k=M(N,A,0);return c+($(k)?k:0)},0),_;if(s>0){var L;_=t.map(function(c,N){var k=M(c,A,0),z=M(c,g,N),F=($(k)?k:0)/s,T;N?T=L.endAngle+oe(d)*f*(k!==0?1:0):T=o;var Q=T+oe(d)*((k!==0?x:0)+F*E),X=(T+Q)/2,ee=(v.innerRadius+v.outerRadius)/2,he=[{name:z,value:k,payload:c,dataKey:A,type:P}],pe=de(v.cx,v.cy,ee,X);return L=u(u(u({percent:F,cornerRadius:r,name:z,tooltipPayload:he,midAngle:X,middleRadius:ee,tooltipPosition:pe},c),v),{},{value:M(c,A),startAngle:T,endAngle:Q,payload:c,paddingAngle:oe(d)*f}),L})}return u(u({},v),{},{sectors:_,data:t})});var St=ot({chartName:"PieChart",GraphicalChild:O,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:ut},{axisType:"radiusAxis",AxisComp:ht}],formatAxisMap:st,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}});const Pt="@layer ui5-webcomponents-react{._piechart_1lomz_1 g:focus,._piechart_1lomz_1 path:focus{outline:none}._piechart_1lomz_1 [data-active-legend]{background:color-mix(in srgb,var(--sapSelectedColor),#0000 87%)}:is(._piechart_1lomz_1 [data-active-legend]) .recharts-legend-item-text{color:var(--sapTextColor)!important}}",xt={piechart:"_piechart_1lomz_1"},_t={color:"var (--sapTextColor)"},Y=R.forwardRef((a,n)=>{var fe;const{loading:i,loadingDelay:e,dataset:t,noLegend:r,noAnimation:o,tooltipConfig:h,onDataPointClick:f,onLegendClick:l,onClick:g,centerLabel:y,style:P,className:x,slot:v,ChartPlaceholder:d,children:b,...A}=a;ft(Pt,Y.displayName);const[C,w]=mt(n),E=a["data-component-name"]==="DonutChart",s={margin:{right:30,left:30,bottom:30,top:30,...((fe=a.chartConfig)==null?void 0:fe.margin)??{}},legendPosition:"bottom",legendHorizontalAlign:"center",paddingAngle:0,outerRadius:"80%",resizeDebounce:250,tooltipItemStyle:_t,...a.chartConfig},_=s.showActiveSegmentDataLabel??!0,L=R.useMemo(()=>({formatter:Se,...a.dimension}),[a.dimension]),c=R.useMemo(()=>({formatter:Se,...a.measure}),[a.measure]),N=p=>(typeof c.hideDataLabel=="function"?c.hideDataLabel(p):c.hideDataLabel)||s.activeSegment===p.index?null:R.isValidElement(c.DataLabel)?R.cloneElement(c.DataLabel,{...p,config:c}):m.jsx(De,{...p,alignmentBaseline:"middle",className:"recharts-pie-label-text",children:c.formatter(p.value)}),k=R.useCallback((p,I)=>[c.formatter(p),L.formatter(I)],[c.formatter,L.formatter]),z=$e(l,()=>c.accessor),F=Ye(g),T=R.useCallback((p,I,j)=>{var V,G;p&&p&&typeof f=="function"&&f(Be(j,{value:p.value,dataKey:(G=(V=p.tooltipPayload)==null?void 0:V[0])==null?void 0:G.dataKey,name:p.name,payload:p.payload,dataIndex:I}))},[f]),Q=R.useCallback(p=>{var Ce,we;const I=Math.PI/180,{cx:j,cy:V,midAngle:G,innerRadius:Ee,outerRadius:q,startAngle:me,endAngle:ge,fill:K,payload:Ne,percent:Ve,value:qe}=p,ye=Math.sin(-I*G),B=Math.cos(-I*G),Ke=j+(q+10)*B,ze=V+(q+10)*ye,be=j+(q+30)*B,ve=V+(q+30)*ye,te=be+(B>=0?1:-1)*22,ne=ve,Ae=B>=0?"start":"end",ae=(Ce=w.current)==null?void 0:Ce.querySelector(`.legend-item-${s.activeSegment}`);return ae!=null&&ae.dataset.activeLegend||(((we=w.current)==null?void 0:we.querySelectorAll(".recharts-legend-item")).forEach(Fe=>Fe.removeAttribute("data-active-legend")),ae.setAttribute("data-active-legend","true")),m.jsxs("g",{children:[E&&m.jsx("text",{x:j,y:V,dy:8,textAnchor:"middle",fill:K,children:Ne.name}),m.jsx(_e,{cx:j,cy:V,innerRadius:Ee,outerRadius:q,startAngle:me,endAngle:ge,fill:K}),m.jsx(_e,{cx:j,cy:V,startAngle:me,endAngle:ge,innerRadius:q+6,outerRadius:q+10,fill:K}),_&&m.jsxs(m.Fragment,{children:[m.jsx("path",{d:`M${Ke},${ze}L${be},${ve}L${te},${ne}`,stroke:K,fill:"none"}),m.jsx("circle",{cx:te,cy:ne,r:2,fill:K,stroke:"none"}),m.jsx("text",{x:te+(B>=0?1:-1)*12,y:ne,textAnchor:Ae,fill:K,children:c.formatter(qe)}),m.jsx("text",{x:te+(B>=0?1:-1)*12,y:ne,dy:18,textAnchor:Ae,fill:K,children:`(${(Ve*100).toFixed(2)}%)`})]})]})},[_,s.activeSegment,E]),X=R.useCallback(p=>(typeof c.hideDataLabel=="function"?c.hideDataLabel(p):c.hideDataLabel)||s.activeSegment===p.index?null:O.renderLabelLineItem({},p,void 0),[s.activeSegment,c.hideDataLabel]),ee=R.useMemo(()=>{if(s.activeSegment!=null&&_){if(s.legendPosition==="bottom")return{paddingBlockStart:"30px"};if(s.legendPosition==="top")return{paddingBlockEnd:"30px"}}return null},[_,s.activeSegment,s.legendPosition]),{chartConfig:he,dimension:pe,measure:kt,...Oe}=A;return m.jsx(lt,{dataset:t,ref:C,loading:i,loadingDelay:e,Placeholder:d??pt,style:P,className:x,slot:v,resizeDebounce:s.resizeDebounce,...Oe,children:m.jsxs(St,{onClick:F,margin:s.margin,accessibilityLayer:s.accessibilityLayer,className:Me(typeof f=="function"||typeof g=="function"?"has-click-handler":void 0,xt.piechart),children:[m.jsxs(O,{onClick:T,innerRadius:s.innerRadius,outerRadius:s.outerRadius,paddingAngle:s.paddingAngle,nameKey:L.accessor,dataKey:c.accessor,data:t,animationBegin:0,isAnimationActive:!o,labelLine:X,label:N,activeIndex:s.activeSegment,activeShape:s.activeSegment!=null&&Q,rootTabIndex:-1,children:[y&&m.jsx(Le,{position:"center",children:y}),t&&t.map((p,I)=>{var j;return m.jsx(Re,{name:L.formatter(We.getValueByDataKey(p,L.accessor,"")),fill:((j=c.colors)==null?void 0:j[I])??`var(--sapChart_OrderedColor_${I%12+1})`},I)})]}),(h==null?void 0:h.active)!==!1&&m.jsx(ct,{cursor:He,formatter:k,contentStyle:Ue,itemStyle:s.tooltipItemStyle,labelStyle:s.tooltipLabelStyle,...h}),!r&&m.jsx(dt,{verticalAlign:s.legendPosition,align:s.legendHorizontalAlign,onClick:z,wrapperStyle:ee,...s.legendConfig}),b]})})});Y.displayName="PieChart";try{Y.displayName="PieChart",Y.__docgenInfo={description:`A Pie Chart is a type of graph that displays data in a circular graph.
The pieces of the graph are proportional to the fraction of the whole in each category.

In other words, each slice of the pie is relative to the size of that category in the group as a whole.
The entire “pie” represents 100 percent of a whole, while the pie “slices” represent portions of the whole.`,displayName:"PieChart",props:{centerLabel:{defaultValue:null,description:"A label to display in the center of the `PieChart`.\nIf you use this prop to display a text, we recommend to increase `chartConfig.innerRadius` to have some free\nspace for the text.",name:"centerLabel",required:!1,type:{name:"string"}},dimension:{defaultValue:null,description:`A object which contains the configuration of the dimension.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs`,name:"dimension",required:!0,type:{name:"IChartDimension"}},measure:{defaultValue:null,description:"A object which contains the configuration of the measure. The object is defining one pie in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this pie should display. Supports object structures by using <code>'parent.child'</code>.\n\n**Optional properties**\n\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `DataLabel`: a custom component to be used for the data label\n- `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this segment. When passed a function it will be called for each data label with the corresponding chart properties.",name:"measure",required:!0,type:{name:"MeasureConfig"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'IPolarChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | "left" | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}try{Y.displayName="PieChart",Y.__docgenInfo={description:`A Pie Chart is a type of graph that displays data in a circular graph.
The pieces of the graph are proportional to the fraction of the whole in each category.

In other words, each slice of the pie is relative to the size of that category in the group as a whole.
The entire “pie” represents 100 percent of a whole, while the pie “slices” represent portions of the whole.`,displayName:"PieChart",props:{centerLabel:{defaultValue:null,description:"A label to display in the center of the `PieChart`.\nIf you use this prop to display a text, we recommend to increase `chartConfig.innerRadius` to have some free\nspace for the text.",name:"centerLabel",required:!1,type:{name:"string"}},dimension:{defaultValue:null,description:`A object which contains the configuration of the dimension.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs`,name:"dimension",required:!0,type:{name:"IChartDimension"}},measure:{defaultValue:null,description:"A object which contains the configuration of the measure. The object is defining one pie in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this pie should display. Supports object structures by using <code>'parent.child'</code>.\n\n**Optional properties**\n\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `DataLabel`: a custom component to be used for the data label\n- `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this segment. When passed a function it will be called for each data label with the corresponding chart properties.",name:"measure",required:!0,type:{name:"MeasureConfig"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'IPolarChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | "left" | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}export{Y as P};
