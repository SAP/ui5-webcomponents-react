import{j as v}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{e as Ne}from"./index-D8PAbW1n.js";import{c as Ke}from"./clsx-B-dksMZM.js";import{a as P,r as k}from"./index-DEe9W-hO.js";import{a as ye,C as Fe}from"./defaults-DG8f4hBh.js";import{u as $e,a as Me,b as Be}from"./staticProps-DsetRNqa.js";import{u as ze}from"./useOnClickInternal-Chqq3b2P.js";import{u as Ve,c as ue,a as ie,d as G,j as We,i as be,b as He,g as H,f as qe,l as ne,w as xe,n as re,C as Ge}from"./ChartContainer-C9_3oEwR.js";import{P as Ue,a as Ze,b as Je}from"./Placeholder-DdMj4CbJ.js";import{C as Qe,k as _e,p as de,L as Q,g as V,S as Xe,A as Ye,i as Ce,a as et,G as tt,l as at,e as Ie,c as nt,m as it,n as Se,T as rt,d as ot}from"./generateCategoricalChart-DI1whykX.js";import{b as X,g as st}from"./_baseForOwn-DVWQo5xw.js";import{u as lt}from"./useStylesheet-BlIIJPI8.js";var oe;function U(n){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},U(n)}function q(){return q=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(n[e]=i[e])}return n},q.apply(this,arguments)}function Pe(n,a){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,e)}return i}function f(n){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Pe(Object(i),!0).forEach(function(e){D(n,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Pe(Object(i)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))})}return n}function ct(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function Re(n,a){for(var i=0;i<a.length;i++){var e=a[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,De(e.key),e)}}function ut(n,a,i){return a&&Re(n.prototype,a),i&&Re(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function dt(n,a,i){return a=se(a),pt(n,Le()?Reflect.construct(a,i||[],se(n).constructor):a.apply(n,i))}function pt(n,a){if(a&&(U(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return W(n)}function Le(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Le=function(){return!!n})()}function se(n){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},se(n)}function W(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ft(n,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),a&&pe(n,a)}function pe(n,a){return pe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},pe(n,a)}function D(n,a,i){return a=De(a),a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i,n}function De(n){var a=mt(n,"string");return U(a)=="symbol"?a:String(a)}function mt(n,a){if(U(n)!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var e=i.call(n,a||"default");if(U(e)!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}var O=function(n){ft(a,n);function a(i){var e;return ct(this,a),e=dt(this,a,[i]),D(W(e),"pieRef",null),D(W(e),"sectorRefs",[]),D(W(e),"id",Ve("recharts-pie-")),D(W(e),"handleAnimationEnd",function(){var t=e.props.onAnimationEnd;e.setState({isAnimationFinished:!0}),X(t)&&t()}),D(W(e),"handleAnimationStart",function(){var t=e.props.onAnimationStart;e.setState({isAnimationFinished:!1}),X(t)&&t()}),e.state={isAnimationFinished:!i.isAnimationActive,prevIsAnimationActive:i.isAnimationActive,prevAnimationId:i.animationId,sectorToFocus:0},e}return ut(a,[{key:"isActiveIndex",value:function(e){var t=this.props.activeIndex;return Array.isArray(t)?t.indexOf(e)!==-1:e===t}},{key:"hasActiveIndex",value:function(){var e=this.props.activeIndex;return Array.isArray(e)?e.length!==0:e||e===0}},{key:"renderLabels",value:function(e){var t=this.props.isAnimationActive;if(t&&!this.state.isAnimationFinished)return null;var o=this.props,r=o.label,u=o.labelLine,h=o.dataKey,l=o.valueKey,g=ie(this.props,!1),b=ie(r,!1),R=ie(u,!1),_=r&&r.offsetRadius||20,x=e.map(function(c,A){var s=(c.startAngle+c.endAngle)/2,m=de(c.cx,c.cy,c.outerRadius+_,s),y=f(f(f(f({},g),c),{},{stroke:"none"},b),{},{index:A,textAnchor:a.getTextAnchor(m.x,c.cx)},m),d=f(f(f(f({},g),c),{},{fill:"none",stroke:c.fill},R),{},{index:A,points:[de(c.cx,c.cy,c.outerRadius,s),m],key:"line"}),C=h;return G(h)&&G(l)?C="value":G(h)&&(C=l),P.createElement(Q,{key:"label-".concat(c.startAngle,"-").concat(c.endAngle,"-").concat(c.midAngle,"-").concat(A)},u&&a.renderLabelLineItem(u,d),a.renderLabelItem(r,y,V(c,C)))});return P.createElement(Q,{className:"recharts-pie-labels"},x)}},{key:"renderSectorsStatically",value:function(e){var t=this,o=this.props,r=o.activeShape,u=o.blendStroke,h=o.inactiveShape;return e.map(function(l,g){if((l==null?void 0:l.startAngle)===0&&(l==null?void 0:l.endAngle)===0&&e.length!==1)return null;var b=t.isActiveIndex(g),R=h&&t.hasActiveIndex()?h:null,_=b?r:R,x=f(f({},l),{},{stroke:u?l.fill:l.stroke,tabIndex:-1});return P.createElement(Q,q({ref:function(A){A&&!t.sectorRefs.includes(A)&&t.sectorRefs.push(A)},tabIndex:-1,className:"recharts-pie-sector"},We(t.props,l,g),{key:"sector-".concat(l==null?void 0:l.startAngle,"-").concat(l==null?void 0:l.endAngle,"-").concat(l.midAngle,"-").concat(g)}),P.createElement(Xe,q({option:_,isActive:b,shapeType:"sector"},x)))})}},{key:"renderSectorsWithAnimation",value:function(){var e=this,t=this.props,o=t.sectors,r=t.isAnimationActive,u=t.animationBegin,h=t.animationDuration,l=t.animationEasing,g=t.animationId,b=this.state,R=b.prevSectors,_=b.prevIsAnimationActive;return P.createElement(Ye,{begin:u,duration:h,isActive:r,easing:l,from:{t:0},to:{t:1},key:"pie-".concat(g,"-").concat(_),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(x){var c=x.t,A=[],s=o&&o[0],m=s.startAngle;return o.forEach(function(y,d){var C=R&&R[d],j=d>0?st(y,"paddingAngle",0):0;if(C){var K=be(C.endAngle-C.startAngle,y.endAngle-y.startAngle),S=f(f({},y),{},{startAngle:m+j,endAngle:m+K(c)+j});A.push(S),m=S.endAngle}else{var T=y.endAngle,I=y.startAngle,M=be(0,T-I),B=M(c),E=f(f({},y),{},{startAngle:m+j,endAngle:m+B+j});A.push(E),m=E.endAngle}}),P.createElement(Q,null,e.renderSectorsStatically(A))})}},{key:"attachKeyboardHandlers",value:function(e){var t=this;e.onkeydown=function(o){if(!o.altKey)switch(o.key){case"ArrowLeft":{var r=++t.state.sectorToFocus%t.sectorRefs.length;t.sectorRefs[r].focus(),t.setState({sectorToFocus:r});break}case"ArrowRight":{var u=--t.state.sectorToFocus<0?t.sectorRefs.length-1:t.state.sectorToFocus%t.sectorRefs.length;t.sectorRefs[u].focus(),t.setState({sectorToFocus:u});break}case"Escape":{t.sectorRefs[t.state.sectorToFocus].blur(),t.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var e=this.props,t=e.sectors,o=e.isAnimationActive,r=this.state.prevSectors;return o&&t&&t.length&&(!r||!He(r,t))?this.renderSectorsWithAnimation():this.renderSectorsStatically(t)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var e=this,t=this.props,o=t.hide,r=t.sectors,u=t.className,h=t.label,l=t.cx,g=t.cy,b=t.innerRadius,R=t.outerRadius,_=t.isAnimationActive,x=this.state.isAnimationFinished;if(o||!r||!r.length||!H(l)||!H(g)||!H(b)||!H(R))return null;var c=ue("recharts-pie",u);return P.createElement(Q,{tabIndex:this.props.rootTabIndex,className:c,ref:function(s){e.pieRef=s}},this.renderSectors(),h&&this.renderLabels(r),Ce.renderCallByParent(this.props,null,!1),(!_||x)&&et.renderCallByParent(this.props,r,!1))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.prevIsAnimationActive!==e.isAnimationActive?{prevIsAnimationActive:e.isAnimationActive,prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:[],isAnimationFinished:!0}:e.isAnimationActive&&e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:t.curSectors,isAnimationFinished:!0}:e.sectors!==t.curSectors?{curSectors:e.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(e,t){return e>t?"start":e<t?"end":"middle"}},{key:"renderLabelLineItem",value:function(e,t){if(P.isValidElement(e))return P.cloneElement(e,t);if(X(e))return e(t);var o=ue("recharts-pie-label-line",typeof e!="boolean"?e.className:"");return P.createElement(Qe,q({},t,{type:"linear",className:o}))}},{key:"renderLabelItem",value:function(e,t,o){if(P.isValidElement(e))return P.cloneElement(e,t);var r=o;if(X(e)&&(r=e(t),P.isValidElement(r)))return r;var u=ue("recharts-pie-label-text",typeof e!="boolean"&&!X(e)?e.className:"");return P.createElement(_e,q({},t,{alignmentBaseline:"middle",className:u}),r)}}]),a}(k.PureComponent);oe=O;D(O,"displayName","Pie");D(O,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!tt.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});D(O,"parseDeltaAngle",function(n,a){var i=re(a-n),e=Math.min(Math.abs(a-n),360);return i*e});D(O,"getRealPieData",function(n){var a=n.props,i=a.data,e=a.children,t=ie(n.props,!1),o=qe(e,Ie);return i&&i.length?i.map(function(r,u){return f(f(f({payload:r},t),r),o&&o[u]&&o[u].props)}):o&&o.length?o.map(function(r){return f(f({},t),r.props)}):[]});D(O,"parseCoordinateOfPie",function(n,a){var i=a.top,e=a.left,t=a.width,o=a.height,r=at(t,o),u=e+ne(n.props.cx,t,t/2),h=i+ne(n.props.cy,o,o/2),l=ne(n.props.innerRadius,r,0),g=ne(n.props.outerRadius,r,r*.8),b=n.props.maxRadius||Math.sqrt(t*t+o*o)/2;return{cx:u,cy:h,innerRadius:l,outerRadius:g,maxRadius:b}});D(O,"getComposedData",function(n){var a=n.item,i=n.offset,e=oe.getRealPieData(a);if(!e||!e.length)return null;var t=a.props,o=t.cornerRadius,r=t.startAngle,u=t.endAngle,h=t.paddingAngle,l=t.dataKey,g=t.nameKey,b=t.valueKey,R=t.tooltipType,_=Math.abs(a.props.minAngle),x=oe.parseCoordinateOfPie(a,i),c=oe.parseDeltaAngle(r,u),A=Math.abs(c),s=l;G(l)&&G(b)?(xe(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),s="value"):G(l)&&(xe(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),s=b);var m=e.filter(function(S){return V(S,s,0)!==0}).length,y=(A>=360?m:m-1)*h,d=A-m*_-y,C=e.reduce(function(S,T){var I=V(T,s,0);return S+(H(I)?I:0)},0),j;if(C>0){var K;j=e.map(function(S,T){var I=V(S,s,0),M=V(S,g,T),B=(H(I)?I:0)/C,E;T?E=K.endAngle+re(c)*h*(I!==0?1:0):E=r;var le=E+re(c)*((I!==0?_:0)+B*d),ce=(E+le)/2,Y=(x.innerRadius+x.outerRadius)/2,ee=[{name:M,value:I,payload:S,dataKey:s,type:R}],p=de(x.cx,x.cy,Y,ce);return K=f(f(f({percent:B,cornerRadius:o,name:M,tooltipPayload:ee,midAngle:ce,middleRadius:Y,tooltipPosition:p},S),x),{},{value:V(S,s),startAngle:E,endAngle:le,payload:S,paddingAngle:re(c)*h}),K})}return f(f({},x),{},{sectors:j,data:e})});var ht=nt({chartName:"PieChart",GraphicalChild:O,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:Ue},{axisType:"radiusAxis",AxisComp:Ze}],formatAxisMap:it,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}});const vt={packageName:"@ui5/webcomponents-react-charts",fileName:"PieChart.module.css",content:".PieChart_piechart_1x62k_1 g:focus,.PieChart_piechart_1x62k_1 path:focus{outline:none}"},gt={piechart:"PieChart_piechart_1x62k_1"},At={color:"var (--sapTextColor)"},Z=k.forwardRef((n,a)=>{var ee;const{loading:i,dataset:e,noLegend:t,noAnimation:o,tooltipConfig:r,onDataPointClick:u,onLegendClick:h,onClick:l,centerLabel:g,style:b,className:R,slot:_,ChartPlaceholder:x,children:c,...A}=n;lt(vt,Z.displayName);const s={margin:{right:30,left:30,bottom:30,top:30,...((ee=n.chartConfig)==null?void 0:ee.margin)??{}},legendPosition:"bottom",legendHorizontalAlign:"center",paddingAngle:0,outerRadius:"80%",resizeDebounce:250,tooltipItemStyle:At,...n.chartConfig},m=s.showActiveSegmentDataLabel??!0,y=k.useMemo(()=>({formatter:ye,...n.dimension}),[n.dimension]),d=k.useMemo(()=>({formatter:ye,...n.measure}),[n.measure]),C=p=>(typeof d.hideDataLabel=="function"?d.hideDataLabel(p):d.hideDataLabel)||s.activeSegment===p.index?null:k.isValidElement(d.DataLabel)?k.cloneElement(d.DataLabel,{...p,config:d}):v.jsx(_e,{...p,alignmentBaseline:"middle",className:"recharts-pie-label-text",children:d.formatter(p.value)}),j=k.useCallback((p,L)=>[d.formatter(p),y.formatter(L)],[d.formatter,y.formatter]),K=$e(h,()=>d.accessor),S=ze(l),T=k.useCallback((p,L,w)=>{var N,J;p&&p&&typeof u=="function"&&u(Ne(w,{value:p.value,dataKey:(J=(N=p.tooltipPayload)==null?void 0:N[0])==null?void 0:J.dataKey,name:p.name,payload:p.payload,dataIndex:L}))},[u]),I=k.useCallback(p=>{const L=Math.PI/180,{cx:w,cy:N,midAngle:J,innerRadius:ke,outerRadius:F,startAngle:fe,endAngle:me,fill:$,payload:we,percent:Oe,value:je}=p,he=Math.sin(-L*J),z=Math.cos(-L*J),Ee=w+(F+10)*z,Te=N+(F+10)*he,ve=w+(F+30)*z,ge=N+(F+30)*he,te=ve+(z>=0?1:-1)*22,ae=ge,Ae=z>=0?"start":"end";return v.jsxs("g",{children:[v.jsx("text",{x:w,y:N,dy:8,textAnchor:"middle",fill:$,children:we.name}),v.jsx(Se,{cx:w,cy:N,innerRadius:ke,outerRadius:F,startAngle:fe,endAngle:me,fill:$}),v.jsx(Se,{cx:w,cy:N,startAngle:fe,endAngle:me,innerRadius:F+6,outerRadius:F+10,fill:$}),m&&v.jsxs(v.Fragment,{children:[v.jsx("path",{d:`M${Ee},${Te}L${ve},${ge}L${te},${ae}`,stroke:$,fill:"none"}),v.jsx("circle",{cx:te,cy:ae,r:2,fill:$,stroke:"none"}),v.jsx("text",{x:te+(z>=0?1:-1)*12,y:ae,textAnchor:Ae,fill:$,children:d.formatter(je)}),v.jsx("text",{x:te+(z>=0?1:-1)*12,y:ae,dy:18,textAnchor:Ae,fill:$,children:`(${(Oe*100).toFixed(2)}%)`})]})]})},[m]),M=k.useCallback(p=>(typeof d.hideDataLabel=="function"?d.hideDataLabel(p):d.hideDataLabel)||s.activeSegment===p.index?null:O.renderLabelLineItem({},p),[s.activeSegment,d.hideDataLabel]),B=k.useMemo(()=>{if(s.activeSegment!=null&&m){if(s.legendPosition==="bottom")return{paddingTop:"30px"};if(s.legendPosition==="top")return{paddingBottom:"30px"}}return null},[m,s.activeSegment,s.legendPosition]),{chartConfig:E,dimension:le,measure:ce,...Y}=A;return v.jsx(Ge,{dataset:e,ref:a,loading:i,Placeholder:x??Je,style:b,className:R,slot:_,resizeDebounce:s.resizeDebounce,...Y,children:v.jsxs(ht,{onClick:S,margin:s.margin,className:Ke(typeof u=="function"||typeof l=="function"?"has-click-handler":void 0,gt.piechart),children:[v.jsxs(O,{onClick:T,innerRadius:s.innerRadius,outerRadius:s.outerRadius,paddingAngle:s.paddingAngle,nameKey:y.accessor,dataKey:d.accessor,data:e,animationBegin:0,isAnimationActive:!o,labelLine:M,label:C,activeIndex:s.activeSegment,activeShape:s.activeSegment!=null&&I,children:[g&&v.jsx(Ce,{position:"center",children:g}),e&&e.map((p,L)=>{var w;return v.jsx(Ie,{name:y.formatter(Fe.getValueByDataKey(p,y.accessor,"")),fill:((w=d.colors)==null?void 0:w[L])??`var(--sapChart_OrderedColor_${L%11+1})`},L)})]}),(r==null?void 0:r.active)!==!1&&v.jsx(rt,{cursor:Me,formatter:j,contentStyle:Be,itemStyle:s.tooltipItemStyle,labelStyle:s.tooltipLabelStyle,...r}),!t&&v.jsx(ot,{verticalAlign:s.legendPosition,align:s.legendHorizontalAlign,onClick:K,wrapperStyle:B}),c]})})});Z.displayName="PieChart";try{Z.displayName="PieChart",Z.__docgenInfo={description:`A Pie Chart is a type of graph that displays data in a circular graph.
The pieces of the graph are proportional to the fraction of the whole in each category.

In other words, each slice of the pie is relative to the size of that category in the group as a whole.
The entire “pie” represents 100 percent of a whole, while the pie “slices” represent portions of the whole.`,displayName:"PieChart",props:{}}}catch{}try{Z.displayName="PieChart",Z.__docgenInfo={description:`A Pie Chart is a type of graph that displays data in a circular graph.
The pieces of the graph are proportional to the fraction of the whole in each category.

In other words, each slice of the pie is relative to the size of that category in the group as a whole.
The entire “pie” represents 100 percent of a whole, while the pie “slices” represent portions of the whole.`,displayName:"PieChart",props:{}}}catch{}export{Z as P};
