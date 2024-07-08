import{j as h}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{e as Ke}from"./index-D8PAbW1n.js";import{c as Fe}from"./clsx-B-dksMZM.js";import{a as P,r as k}from"./index-DEe9W-hO.js";import{a as be,C as $e}from"./defaults-DLNdw0PG.js";import{u as Me,a as Be,b as ze}from"./staticProps-DsetRNqa.js";import{u as Ve}from"./useOnClickInternal-Chqq3b2P.js";import{u as We,c as de,a as ne,d as G,j as He,i as xe,b as qe,g as H,f as Ge,l as ae,w as Se,n as ie,C as Ue}from"./ChartContainer-BZVchXhN.js";import{P as Ze,a as Je,b as Qe}from"./Placeholder-D_0Sbysv.js";import{C as Xe,k as Ce,p as pe,L as Q,g as V,S as Ye,A as et,i as Ie,a as tt,G as at,l as nt,e as Le,c as it,m as rt,n as Pe,T as ot,d as st}from"./generateCategoricalChart-DbYaL5AJ.js";import{b as X,g as lt}from"./_baseForOwn-DVWQo5xw.js";import{u as ct}from"./useStylesheet-BlIIJPI8.js";var re;function U(n){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},U(n)}function q(){return q=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(n[e]=i[e])}return n},q.apply(this,arguments)}function Re(n,a){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,e)}return i}function p(n){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Re(Object(i),!0).forEach(function(e){D(n,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Re(Object(i)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))})}return n}function ut(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function _e(n,a){for(var i=0;i<a.length;i++){var e=a[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,ke(e.key),e)}}function dt(n,a,i){return a&&_e(n.prototype,a),i&&_e(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function pt(n,a,i){return a=oe(a),ft(n,De()?Reflect.construct(a,i||[],oe(n).constructor):a.apply(n,i))}function ft(n,a){if(a&&(U(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return W(n)}function De(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(De=function(){return!!n})()}function oe(n){return oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},oe(n)}function W(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function mt(n,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),a&&fe(n,a)}function fe(n,a){return fe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},fe(n,a)}function D(n,a,i){return a=ke(a),a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i,n}function ke(n){var a=ht(n,"string");return U(a)=="symbol"?a:String(a)}function ht(n,a){if(U(n)!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var e=i.call(n,a||"default");if(U(e)!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}var j=function(n){mt(a,n);function a(i){var e;return ut(this,a),e=pt(this,a,[i]),D(W(e),"pieRef",null),D(W(e),"sectorRefs",[]),D(W(e),"id",We("recharts-pie-")),D(W(e),"handleAnimationEnd",function(){var t=e.props.onAnimationEnd;e.setState({isAnimationFinished:!0}),X(t)&&t()}),D(W(e),"handleAnimationStart",function(){var t=e.props.onAnimationStart;e.setState({isAnimationFinished:!1}),X(t)&&t()}),e.state={isAnimationFinished:!i.isAnimationActive,prevIsAnimationActive:i.isAnimationActive,prevAnimationId:i.animationId,sectorToFocus:0},e}return dt(a,[{key:"isActiveIndex",value:function(e){var t=this.props.activeIndex;return Array.isArray(t)?t.indexOf(e)!==-1:e===t}},{key:"hasActiveIndex",value:function(){var e=this.props.activeIndex;return Array.isArray(e)?e.length!==0:e||e===0}},{key:"renderLabels",value:function(e){var t=this.props.isAnimationActive;if(t&&!this.state.isAnimationFinished)return null;var r=this.props,o=r.label,d=r.labelLine,m=r.dataKey,l=r.valueKey,v=ne(this.props,!1),g=ne(o,!1),R=ne(d,!1),_=o&&o.offsetRadius||20,y=e.map(function(c,A){var b=(c.startAngle+c.endAngle)/2,s=pe(c.cx,c.cy,c.outerRadius+_,b),x=p(p(p(p({},v),c),{},{stroke:"none"},g),{},{index:A,textAnchor:a.getTextAnchor(s.x,c.cx)},s),C=p(p(p(p({},v),c),{},{fill:"none",stroke:c.fill},R),{},{index:A,points:[pe(c.cx,c.cy,c.outerRadius,b),s],key:"line"}),u=m;return G(m)&&G(l)?u="value":G(m)&&(u=l),P.createElement(Q,{key:"label-".concat(c.startAngle,"-").concat(c.endAngle,"-").concat(c.midAngle,"-").concat(A)},d&&a.renderLabelLineItem(d,C),a.renderLabelItem(o,x,V(c,u)))});return P.createElement(Q,{className:"recharts-pie-labels"},y)}},{key:"renderSectorsStatically",value:function(e){var t=this,r=this.props,o=r.activeShape,d=r.blendStroke,m=r.inactiveShape;return e.map(function(l,v){if((l==null?void 0:l.startAngle)===0&&(l==null?void 0:l.endAngle)===0&&e.length!==1)return null;var g=t.isActiveIndex(v),R=m&&t.hasActiveIndex()?m:null,_=g?o:R,y=p(p({},l),{},{stroke:d?l.fill:l.stroke,tabIndex:-1});return P.createElement(Q,q({ref:function(A){A&&!t.sectorRefs.includes(A)&&t.sectorRefs.push(A)},tabIndex:-1,className:"recharts-pie-sector"},He(t.props,l,v),{key:"sector-".concat(l==null?void 0:l.startAngle,"-").concat(l==null?void 0:l.endAngle,"-").concat(l.midAngle,"-").concat(v)}),P.createElement(Ye,q({option:_,isActive:g,shapeType:"sector"},y)))})}},{key:"renderSectorsWithAnimation",value:function(){var e=this,t=this.props,r=t.sectors,o=t.isAnimationActive,d=t.animationBegin,m=t.animationDuration,l=t.animationEasing,v=t.animationId,g=this.state,R=g.prevSectors,_=g.prevIsAnimationActive;return P.createElement(et,{begin:d,duration:m,isActive:o,easing:l,from:{t:0},to:{t:1},key:"pie-".concat(v,"-").concat(_),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(y){var c=y.t,A=[],b=r&&r[0],s=b.startAngle;return r.forEach(function(x,C){var u=R&&R[C],E=C>0?lt(x,"paddingAngle",0):0;if(u){var K=xe(u.endAngle-u.startAngle,x.endAngle-x.startAngle),S=p(p({},x),{},{startAngle:s+E,endAngle:s+K(c)+E});A.push(S),s=S.endAngle}else{var T=x.endAngle,I=x.startAngle,M=xe(0,T-I),B=M(c),w=p(p({},x),{},{startAngle:s+E,endAngle:s+B+E});A.push(w),s=w.endAngle}}),P.createElement(Q,null,e.renderSectorsStatically(A))})}},{key:"attachKeyboardHandlers",value:function(e){var t=this;e.onkeydown=function(r){if(!r.altKey)switch(r.key){case"ArrowLeft":{var o=++t.state.sectorToFocus%t.sectorRefs.length;t.sectorRefs[o].focus(),t.setState({sectorToFocus:o});break}case"ArrowRight":{var d=--t.state.sectorToFocus<0?t.sectorRefs.length-1:t.state.sectorToFocus%t.sectorRefs.length;t.sectorRefs[d].focus(),t.setState({sectorToFocus:d});break}case"Escape":{t.sectorRefs[t.state.sectorToFocus].blur(),t.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var e=this.props,t=e.sectors,r=e.isAnimationActive,o=this.state.prevSectors;return r&&t&&t.length&&(!o||!qe(o,t))?this.renderSectorsWithAnimation():this.renderSectorsStatically(t)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var e=this,t=this.props,r=t.hide,o=t.sectors,d=t.className,m=t.label,l=t.cx,v=t.cy,g=t.innerRadius,R=t.outerRadius,_=t.isAnimationActive,y=this.state.isAnimationFinished;if(r||!o||!o.length||!H(l)||!H(v)||!H(g)||!H(R))return null;var c=de("recharts-pie",d);return P.createElement(Q,{tabIndex:this.props.rootTabIndex,className:c,ref:function(b){e.pieRef=b}},this.renderSectors(),m&&this.renderLabels(o),Ie.renderCallByParent(this.props,null,!1),(!_||y)&&tt.renderCallByParent(this.props,o,!1))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.prevIsAnimationActive!==e.isAnimationActive?{prevIsAnimationActive:e.isAnimationActive,prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:[],isAnimationFinished:!0}:e.isAnimationActive&&e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:t.curSectors,isAnimationFinished:!0}:e.sectors!==t.curSectors?{curSectors:e.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(e,t){return e>t?"start":e<t?"end":"middle"}},{key:"renderLabelLineItem",value:function(e,t){if(P.isValidElement(e))return P.cloneElement(e,t);if(X(e))return e(t);var r=de("recharts-pie-label-line",typeof e!="boolean"?e.className:"");return P.createElement(Xe,q({},t,{type:"linear",className:r}))}},{key:"renderLabelItem",value:function(e,t,r){if(P.isValidElement(e))return P.cloneElement(e,t);var o=r;if(X(e)&&(o=e(t),P.isValidElement(o)))return o;var d=de("recharts-pie-label-text",typeof e!="boolean"&&!X(e)?e.className:"");return P.createElement(Ce,q({},t,{alignmentBaseline:"middle",className:d}),o)}}]),a}(k.PureComponent);re=j;D(j,"displayName","Pie");D(j,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!at.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});D(j,"parseDeltaAngle",function(n,a){var i=ie(a-n),e=Math.min(Math.abs(a-n),360);return i*e});D(j,"getRealPieData",function(n){var a=n.props,i=a.data,e=a.children,t=ne(n.props,!1),r=Ge(e,Le);return i&&i.length?i.map(function(o,d){return p(p(p({payload:o},t),o),r&&r[d]&&r[d].props)}):r&&r.length?r.map(function(o){return p(p({},t),o.props)}):[]});D(j,"parseCoordinateOfPie",function(n,a){var i=a.top,e=a.left,t=a.width,r=a.height,o=nt(t,r),d=e+ae(n.props.cx,t,t/2),m=i+ae(n.props.cy,r,r/2),l=ae(n.props.innerRadius,o,0),v=ae(n.props.outerRadius,o,o*.8),g=n.props.maxRadius||Math.sqrt(t*t+r*r)/2;return{cx:d,cy:m,innerRadius:l,outerRadius:v,maxRadius:g}});D(j,"getComposedData",function(n){var a=n.item,i=n.offset,e=re.getRealPieData(a);if(!e||!e.length)return null;var t=a.props,r=t.cornerRadius,o=t.startAngle,d=t.endAngle,m=t.paddingAngle,l=t.dataKey,v=t.nameKey,g=t.valueKey,R=t.tooltipType,_=Math.abs(a.props.minAngle),y=re.parseCoordinateOfPie(a,i),c=re.parseDeltaAngle(o,d),A=Math.abs(c),b=l;G(l)&&G(g)?(Se(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),b="value"):G(l)&&(Se(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),b=g);var s=e.filter(function(S){return V(S,b,0)!==0}).length,x=(A>=360?s:s-1)*m,C=A-s*_-x,u=e.reduce(function(S,T){var I=V(T,b,0);return S+(H(I)?I:0)},0),E;if(u>0){var K;E=e.map(function(S,T){var I=V(S,b,0),M=V(S,v,T),B=(H(I)?I:0)/u,w;T?w=K.endAngle+ie(c)*m*(I!==0?1:0):w=o;var se=w+ie(c)*((I!==0?_:0)+B*C),le=(w+se)/2,ce=(y.innerRadius+y.outerRadius)/2,ue=[{name:M,value:I,payload:S,dataKey:b,type:R}],Y=pe(y.cx,y.cy,ce,le);return K=p(p(p({percent:B,cornerRadius:r,name:M,tooltipPayload:ue,midAngle:le,middleRadius:ce,tooltipPosition:Y},S),y),{},{value:V(S,b),startAngle:w,endAngle:se,payload:S,paddingAngle:ie(c)*m}),K})}return p(p({},y),{},{sectors:E,data:e})});var vt=it({chartName:"PieChart",GraphicalChild:j,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:Ze},{axisType:"radiusAxis",AxisComp:Je}],formatAxisMap:rt,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}});const gt={packageName:"@ui5/webcomponents-react-charts",fileName:"PieChart.module.css",content:".PieChart_piechart_1x62k_1 g:focus,.PieChart_piechart_1x62k_1 path:focus{outline:none}"},At={piechart:"PieChart_piechart_1x62k_1"},yt={color:"var (--sapTextColor)"},Z=k.forwardRef((n,a)=>{var Y;const{loading:i,loadingDelay:e,dataset:t,noLegend:r,noAnimation:o,tooltipConfig:d,onDataPointClick:m,onLegendClick:l,onClick:v,centerLabel:g,style:R,className:_,slot:y,ChartPlaceholder:c,children:A,...b}=n;ct(gt,Z.displayName);const s={margin:{right:30,left:30,bottom:30,top:30,...((Y=n.chartConfig)==null?void 0:Y.margin)??{}},legendPosition:"bottom",legendHorizontalAlign:"center",paddingAngle:0,outerRadius:"80%",resizeDebounce:250,tooltipItemStyle:yt,...n.chartConfig},x=s.showActiveSegmentDataLabel??!0,C=k.useMemo(()=>({formatter:be,...n.dimension}),[n.dimension]),u=k.useMemo(()=>({formatter:be,...n.measure}),[n.measure]),E=f=>(typeof u.hideDataLabel=="function"?u.hideDataLabel(f):u.hideDataLabel)||s.activeSegment===f.index?null:k.isValidElement(u.DataLabel)?k.cloneElement(u.DataLabel,{...f,config:u}):h.jsx(Ce,{...f,alignmentBaseline:"middle",className:"recharts-pie-label-text",children:u.formatter(f.value)}),K=k.useCallback((f,L)=>[u.formatter(f),C.formatter(L)],[u.formatter,C.formatter]),S=Me(l,()=>u.accessor),T=Ve(v),I=k.useCallback((f,L,O)=>{var N,J;f&&f&&typeof m=="function"&&m(Ke(O,{value:f.value,dataKey:(J=(N=f.tooltipPayload)==null?void 0:N[0])==null?void 0:J.dataKey,name:f.name,payload:f.payload,dataIndex:L}))},[m]),M=k.useCallback(f=>{const L=Math.PI/180,{cx:O,cy:N,midAngle:J,innerRadius:we,outerRadius:F,startAngle:me,endAngle:he,fill:$,payload:Oe,percent:je,value:Ee}=f,ve=Math.sin(-L*J),z=Math.cos(-L*J),Te=O+(F+10)*z,Ne=N+(F+10)*ve,ge=O+(F+30)*z,Ae=N+(F+30)*ve,ee=ge+(z>=0?1:-1)*22,te=Ae,ye=z>=0?"start":"end";return h.jsxs("g",{children:[h.jsx("text",{x:O,y:N,dy:8,textAnchor:"middle",fill:$,children:Oe.name}),h.jsx(Pe,{cx:O,cy:N,innerRadius:we,outerRadius:F,startAngle:me,endAngle:he,fill:$}),h.jsx(Pe,{cx:O,cy:N,startAngle:me,endAngle:he,innerRadius:F+6,outerRadius:F+10,fill:$}),x&&h.jsxs(h.Fragment,{children:[h.jsx("path",{d:`M${Te},${Ne}L${ge},${Ae}L${ee},${te}`,stroke:$,fill:"none"}),h.jsx("circle",{cx:ee,cy:te,r:2,fill:$,stroke:"none"}),h.jsx("text",{x:ee+(z>=0?1:-1)*12,y:te,textAnchor:ye,fill:$,children:u.formatter(Ee)}),h.jsx("text",{x:ee+(z>=0?1:-1)*12,y:te,dy:18,textAnchor:ye,fill:$,children:`(${(je*100).toFixed(2)}%)`})]})]})},[x]),B=k.useCallback(f=>(typeof u.hideDataLabel=="function"?u.hideDataLabel(f):u.hideDataLabel)||s.activeSegment===f.index?null:j.renderLabelLineItem({},f),[s.activeSegment,u.hideDataLabel]),w=k.useMemo(()=>{if(s.activeSegment!=null&&x){if(s.legendPosition==="bottom")return{paddingTop:"30px"};if(s.legendPosition==="top")return{paddingBottom:"30px"}}return null},[x,s.activeSegment,s.legendPosition]),{chartConfig:se,dimension:le,measure:ce,...ue}=b;return h.jsx(Ue,{dataset:t,ref:a,loading:i,loadingDelay:e,Placeholder:c??Qe,style:R,className:_,slot:y,resizeDebounce:s.resizeDebounce,...ue,children:h.jsxs(vt,{onClick:T,margin:s.margin,className:Fe(typeof m=="function"||typeof v=="function"?"has-click-handler":void 0,At.piechart),children:[h.jsxs(j,{onClick:I,innerRadius:s.innerRadius,outerRadius:s.outerRadius,paddingAngle:s.paddingAngle,nameKey:C.accessor,dataKey:u.accessor,data:t,animationBegin:0,isAnimationActive:!o,labelLine:B,label:E,activeIndex:s.activeSegment,activeShape:s.activeSegment!=null&&M,children:[g&&h.jsx(Ie,{position:"center",children:g}),t&&t.map((f,L)=>{var O;return h.jsx(Le,{name:C.formatter($e.getValueByDataKey(f,C.accessor,"")),fill:((O=u.colors)==null?void 0:O[L])??`var(--sapChart_OrderedColor_${L%11+1})`},L)})]}),(d==null?void 0:d.active)!==!1&&h.jsx(ot,{cursor:Be,formatter:K,contentStyle:ze,itemStyle:s.tooltipItemStyle,labelStyle:s.tooltipLabelStyle,...d}),!r&&h.jsx(st,{verticalAlign:s.legendPosition,align:s.legendHorizontalAlign,onClick:S,wrapperStyle:w}),A]})})});Z.displayName="PieChart";try{Z.displayName="PieChart",Z.__docgenInfo={description:`A Pie Chart is a type of graph that displays data in a circular graph.
The pieces of the graph are proportional to the fraction of the whole in each category.

In other words, each slice of the pie is relative to the size of that category in the group as a whole.
The entire “pie” represents 100 percent of a whole, while the pie “slices” represent portions of the whole.`,displayName:"PieChart",props:{}}}catch{}try{Z.displayName="PieChart",Z.__docgenInfo={description:`A Pie Chart is a type of graph that displays data in a circular graph.
The pieces of the graph are proportional to the fraction of the whole in each category.

In other words, each slice of the pie is relative to the size of that category in the group as a whole.
The entire “pie” represents 100 percent of a whole, while the pie “slices” represent portions of the whole.`,displayName:"PieChart",props:{}}}catch{}export{Z as P};
