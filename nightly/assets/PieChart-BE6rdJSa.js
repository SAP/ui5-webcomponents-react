import{j as v}from"./jsx-runtime-CLpGMVip.js";import{e as ze}from"./index-BQ73vKGB.js";import{c as Ve}from"./clsx-B-dksMZM.js";import{r as k,e as P}from"./index-D23YZj_x.js";import{e as xe,u as He,C as We,a as qe,b as Ge}from"./staticProps-DTJEdH3d.js";import{u as Ue}from"./useOnClickInternal-Bzi6oxFd.js";import{G as Je,d as ie,f as Ze,z as Qe,F as ne,i as q,H as Pe,g as V,s as H,I as re,J as ce,u as Xe,b as J,c as le,C as Ye,K as Ce,L as Z,x as et,S as tt,A as at,M as nt,e as Re,h as it,r as De,k as rt,p as Oe,l as ot,N as st,O as Le,n as lt,T as ct,o as ut}from"./ChartContainer-eZ9elVkO.js";import{P as dt,a as ft,b as mt}from"./Placeholder-CYtRjegj.js";import{u as pt}from"./useStylesheet-DNyxTWaC.js";import{h as vt}from"./withWebComponent-DfVDXLfc.js";var oe;function G(n){"@babel/helpers - typeof";return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},G(n)}function W(){return W=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(n[e]=i[e])}return n},W.apply(this,arguments)}function Ie(n,a){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,e)}return i}function d(n){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Ie(Object(i),!0).forEach(function(e){D(n,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Ie(Object(i)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))})}return n}function ht(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function _e(n,a){for(var i=0;i<a.length;i++){var e=a[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,je(e.key),e)}}function gt(n,a,i){return _e(n.prototype,a),_e(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function At(n,a,i){return a=se(a),bt(n,ke()?Reflect.construct(a,i,se(n).constructor):a.apply(n,i))}function bt(n,a){if(a&&(G(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yt(n)}function yt(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ke(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ke=function(){return!!n})()}function se(n){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},se(n)}function St(n,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),a&&ue(n,a)}function ue(n,a){return ue=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ue(n,a)}function D(n,a,i){return a=je(a),a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i,n}function je(n){var a=xt(n,"string");return G(a)=="symbol"?a:a+""}function xt(n,a){if(G(n)!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var e=i.call(n,a||"default");if(G(e)!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}var w=function(n){function a(i){var e;return ht(this,a),e=At(this,a,[i]),D(e,"pieRef",null),D(e,"sectorRefs",[]),D(e,"id",Xe("recharts-pie-")),D(e,"handleAnimationEnd",function(){var t=e.props.onAnimationEnd;e.setState({isAnimationFinished:!0}),J(t)&&t()}),D(e,"handleAnimationStart",function(){var t=e.props.onAnimationStart;e.setState({isAnimationFinished:!1}),J(t)&&t()}),e.state={isAnimationFinished:!i.isAnimationActive,prevIsAnimationActive:i.isAnimationActive,prevAnimationId:i.animationId,sectorToFocus:0},e}return St(a,n),gt(a,[{key:"isActiveIndex",value:function(e){var t=this.props.activeIndex;return Array.isArray(t)?t.indexOf(e)!==-1:e===t}},{key:"hasActiveIndex",value:function(){var e=this.props.activeIndex;return Array.isArray(e)?e.length!==0:e||e===0}},{key:"renderLabels",value:function(e){var t=this.props.isAnimationActive;if(t&&!this.state.isAnimationFinished)return null;var r=this.props,o=r.label,f=r.labelLine,p=r.dataKey,l=r.valueKey,h=ie(this.props,!1),g=ie(o,!1),R=ie(f,!1),L=o&&o.offsetRadius||20,b=e.map(function(u,A){var y=(u.startAngle+u.endAngle)/2,S=ce(u.cx,u.cy,u.outerRadius+L,y),x=d(d(d(d({},h),u),{},{stroke:"none"},g),{},{index:A,textAnchor:a.getTextAnchor(S.x,u.cx)},S),T=d(d(d(d({},h),u),{},{fill:"none",stroke:u.fill},R),{},{index:A,points:[ce(u.cx,u.cy,u.outerRadius,y),S]}),s=p;return q(p)&&q(l)?s="value":q(p)&&(s=l),P.createElement(Z,{key:"label-".concat(u.startAngle,"-").concat(u.endAngle,"-").concat(u.midAngle,"-").concat(A)},f&&a.renderLabelLineItem(f,T,"line"),a.renderLabelItem(o,x,V(u,s)))});return P.createElement(Z,{className:"recharts-pie-labels"},b)}},{key:"renderSectorsStatically",value:function(e){var t=this,r=this.props,o=r.activeShape,f=r.blendStroke,p=r.inactiveShape;return e.map(function(l,h){if((l==null?void 0:l.startAngle)===0&&(l==null?void 0:l.endAngle)===0&&e.length!==1)return null;var g=t.isActiveIndex(h),R=p&&t.hasActiveIndex()?p:null,L=g?o:R,b=d(d({},l),{},{stroke:f?l.fill:l.stroke,tabIndex:-1});return P.createElement(Z,W({ref:function(A){A&&!t.sectorRefs.includes(A)&&t.sectorRefs.push(A)},tabIndex:-1,className:"recharts-pie-sector"},et(t.props,l,h),{key:"sector-".concat(l==null?void 0:l.startAngle,"-").concat(l==null?void 0:l.endAngle,"-").concat(l.midAngle,"-").concat(h)}),P.createElement(tt,W({option:L,isActive:g,shapeType:"sector"},b)))})}},{key:"renderSectorsWithAnimation",value:function(){var e=this,t=this.props,r=t.sectors,o=t.isAnimationActive,f=t.animationBegin,p=t.animationDuration,l=t.animationEasing,h=t.animationId,g=this.state,R=g.prevSectors,L=g.prevIsAnimationActive;return P.createElement(at,{begin:f,duration:p,isActive:o,easing:l,from:{t:0},to:{t:1},key:"pie-".concat(h,"-").concat(L),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(b){var u=b.t,A=[],y=r&&r[0],S=y.startAngle;return r.forEach(function(x,T){var s=R&&R[T],I=T>0?nt(x,"paddingAngle",0):0;if(s){var O=Re(s.endAngle-s.startAngle,x.endAngle-x.startAngle),c=d(d({},x),{},{startAngle:S+I,endAngle:S+O(u)+I});A.push(c),S=c.endAngle}else{var K=x.endAngle,_=x.startAngle,$=Re(0,K-_),B=$(u),j=d(d({},x),{},{startAngle:S+I,endAngle:S+B+I});A.push(j),S=j.endAngle}}),P.createElement(Z,null,e.renderSectorsStatically(A))})}},{key:"attachKeyboardHandlers",value:function(e){var t=this;e.onkeydown=function(r){if(!r.altKey)switch(r.key){case"ArrowLeft":{var o=++t.state.sectorToFocus%t.sectorRefs.length;t.sectorRefs[o].focus(),t.setState({sectorToFocus:o});break}case"ArrowRight":{var f=--t.state.sectorToFocus<0?t.sectorRefs.length-1:t.state.sectorToFocus%t.sectorRefs.length;t.sectorRefs[f].focus(),t.setState({sectorToFocus:f});break}case"Escape":{t.sectorRefs[t.state.sectorToFocus].blur(),t.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var e=this.props,t=e.sectors,r=e.isAnimationActive,o=this.state.prevSectors;return r&&t&&t.length&&(!o||!it(o,t))?this.renderSectorsWithAnimation():this.renderSectorsStatically(t)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var e=this,t=this.props,r=t.hide,o=t.sectors,f=t.className,p=t.label,l=t.cx,h=t.cy,g=t.innerRadius,R=t.outerRadius,L=t.isAnimationActive,b=this.state.isAnimationFinished;if(r||!o||!o.length||!H(l)||!H(h)||!H(g)||!H(R))return null;var u=le("recharts-pie",f);return P.createElement(Z,{tabIndex:this.props.rootTabIndex,className:u,ref:function(y){e.pieRef=y}},this.renderSectors(),p&&this.renderLabels(o),De.renderCallByParent(this.props,null,!1),(!L||b)&&rt.renderCallByParent(this.props,o,!1))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.prevIsAnimationActive!==e.isAnimationActive?{prevIsAnimationActive:e.isAnimationActive,prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:[],isAnimationFinished:!0}:e.isAnimationActive&&e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:t.curSectors,isAnimationFinished:!0}:e.sectors!==t.curSectors?{curSectors:e.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(e,t){return e>t?"start":e<t?"end":"middle"}},{key:"renderLabelLineItem",value:function(e,t,r){if(P.isValidElement(e))return P.cloneElement(e,t);if(J(e))return e(t);var o=le("recharts-pie-label-line",typeof e!="boolean"?e.className:"");return P.createElement(Ye,W({},t,{key:r,type:"linear",className:o}))}},{key:"renderLabelItem",value:function(e,t,r){if(P.isValidElement(e))return P.cloneElement(e,t);var o=r;if(J(e)&&(o=e(t),P.isValidElement(o)))return o;var f=le("recharts-pie-label-text",typeof e!="boolean"&&!J(e)?e.className:"");return P.createElement(Ce,W({},t,{alignmentBaseline:"middle",className:f}),o)}}])}(k.PureComponent);oe=w;D(w,"displayName","Pie");D(w,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Je.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});D(w,"parseDeltaAngle",function(n,a){var i=re(a-n),e=Math.min(Math.abs(a-n),360);return i*e});D(w,"getRealPieData",function(n){var a=n.data,i=n.children,e=ie(n,!1),t=Ze(i,Oe);return a&&a.length?a.map(function(r,o){return d(d(d({payload:r},e),r),t[o]&&t[o].props)}):t.length?t.map(function(r){return d(d({},e),r.props)}):[]});D(w,"parseCoordinateOfPie",function(n,a){var i=a.top,e=a.left,t=a.width,r=a.height,o=Qe(t,r),f=e+ne(n.cx,t,t/2),p=i+ne(n.cy,r,r/2),l=ne(n.innerRadius,o,0),h=ne(n.outerRadius,o,o*.8),g=n.maxRadius||Math.sqrt(t*t+r*r)/2;return{cx:f,cy:p,innerRadius:l,outerRadius:h,maxRadius:g}});D(w,"getComposedData",function(n){var a=n.item,i=n.offset,e=a.type.defaultProps!==void 0?d(d({},a.type.defaultProps),a.props):a.props,t=oe.getRealPieData(e);if(!t||!t.length)return null;var r=e.cornerRadius,o=e.startAngle,f=e.endAngle,p=e.paddingAngle,l=e.dataKey,h=e.nameKey,g=e.valueKey,R=e.tooltipType,L=Math.abs(e.minAngle),b=oe.parseCoordinateOfPie(e,i),u=oe.parseDeltaAngle(o,f),A=Math.abs(u),y=l;q(l)&&q(g)?(Pe(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),y="value"):q(l)&&(Pe(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),y=g);var S=t.filter(function(c){return V(c,y,0)!==0}).length,x=(A>=360?S:S-1)*p,T=A-S*L-x,s=t.reduce(function(c,K){var _=V(K,y,0);return c+(H(_)?_:0)},0),I;if(s>0){var O;I=t.map(function(c,K){var _=V(c,y,0),$=V(c,h,K),B=(H(_)?_:0)/s,j;K?j=O.endAngle+re(u)*p*(_!==0?1:0):j=o;var Q=j+re(u)*((_!==0?L:0)+B*T),X=(j+Q)/2,Y=(b.innerRadius+b.outerRadius)/2,de=[{name:$,value:_,payload:c,dataKey:y,type:R}],fe=ce(b.cx,b.cy,Y,X);return O=d(d(d({percent:B,cornerRadius:r,name:$,tooltipPayload:de,midAngle:X,middleRadius:Y,tooltipPosition:fe},c),b),{},{value:V(c,y),startAngle:j,endAngle:Q,payload:c,paddingAngle:re(u)*p}),O})}return d(d({},b),{},{sectors:I,data:t})});var Pt=ot({chartName:"PieChart",GraphicalChild:w,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:dt},{axisType:"radiusAxis",AxisComp:ft}],formatAxisMap:st,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}});const Rt="@layer ui5-webcomponents-react{._piechart_1lomz_1 g:focus,._piechart_1lomz_1 path:focus{outline:none}._piechart_1lomz_1 [data-active-legend]{background:color-mix(in srgb,var(--sapSelectedColor),#0000 87%)}:is(._piechart_1lomz_1 [data-active-legend]) .recharts-legend-item-text{color:var(--sapTextColor)!important}}",Lt={piechart:"_piechart_1lomz_1"},It={color:"var (--sapTextColor)"},Ee=k.forwardRef((n,a)=>{var me;const{loading:i,loadingDelay:e,dataset:t,noLegend:r,noAnimation:o,tooltipConfig:f,onDataPointClick:p,onLegendClick:l,onClick:h,centerLabel:g,style:R,className:L,slot:b,ChartPlaceholder:u,children:A,...y}=n;pt(Rt,Ee.displayName);const[S,x]=vt(a),T=n["data-component-name"]==="DonutChart",s={margin:{right:30,left:30,bottom:30,top:30,...((me=n.chartConfig)==null?void 0:me.margin)??{}},legendPosition:"bottom",legendHorizontalAlign:"center",paddingAngle:0,outerRadius:"80%",resizeDebounce:250,tooltipItemStyle:It,...n.chartConfig},I=s.showActiveSegmentDataLabel??!0,O=k.useMemo(()=>({formatter:xe,...n.dimension}),[n.dimension]),c=k.useMemo(()=>({formatter:xe,...n.measure}),[n.measure]),K=m=>(typeof c.hideDataLabel=="function"?c.hideDataLabel(m):c.hideDataLabel)||s.activeSegment===m.index?null:k.isValidElement(c.DataLabel)?k.cloneElement(c.DataLabel,{...m,config:c}):v.jsx(Ce,{...m,alignmentBaseline:"middle",className:"recharts-pie-label-text",children:c.formatter(m.value)}),_=k.useCallback((m,C)=>[c.formatter(m),O.formatter(C)],[c.formatter,O.formatter]),$=He(l,()=>c.accessor),B=Ue(h),j=k.useCallback((m,C,E)=>{var N,U;m&&m&&typeof p=="function"&&p(ze(E,{value:m.value,dataKey:(U=(N=m.tooltipPayload)==null?void 0:N[0])==null?void 0:U.dataKey,name:m.name,payload:m.payload,dataIndex:C}))},[p]),Q=k.useCallback(m=>{var ye,Se;const C=Math.PI/180,{cx:E,cy:N,midAngle:U,innerRadius:Te,outerRadius:F,startAngle:pe,endAngle:ve,fill:M,payload:Ke,percent:Ne,value:Fe}=m,he=Math.sin(-C*U),z=Math.cos(-C*U),Me=E+(F+10)*z,$e=N+(F+10)*he,ge=E+(F+30)*z,Ae=N+(F+30)*he,ee=ge+(z>=0?1:-1)*22,te=Ae,be=z>=0?"start":"end",ae=(ye=x.current)==null?void 0:ye.querySelector(`.legend-item-${s.activeSegment}`);return ae!=null&&ae.dataset.activeLegend||(((Se=x.current)==null?void 0:Se.querySelectorAll(".recharts-legend-item")).forEach(Be=>Be.removeAttribute("data-active-legend")),ae.setAttribute("data-active-legend","true")),v.jsxs("g",{children:[T&&v.jsx("text",{x:E,y:N,dy:8,textAnchor:"middle",fill:M,children:Ke.name}),v.jsx(Le,{cx:E,cy:N,innerRadius:Te,outerRadius:F,startAngle:pe,endAngle:ve,fill:M}),v.jsx(Le,{cx:E,cy:N,startAngle:pe,endAngle:ve,innerRadius:F+6,outerRadius:F+10,fill:M}),I&&v.jsxs(v.Fragment,{children:[v.jsx("path",{d:`M${Me},${$e}L${ge},${Ae}L${ee},${te}`,stroke:M,fill:"none"}),v.jsx("circle",{cx:ee,cy:te,r:2,fill:M,stroke:"none"}),v.jsx("text",{x:ee+(z>=0?1:-1)*12,y:te,textAnchor:be,fill:M,children:c.formatter(Fe)}),v.jsx("text",{x:ee+(z>=0?1:-1)*12,y:te,dy:18,textAnchor:be,fill:M,children:`(${(Ne*100).toFixed(2)}%)`})]})]})},[I,s.activeSegment,T]),X=k.useCallback(m=>(typeof c.hideDataLabel=="function"?c.hideDataLabel(m):c.hideDataLabel)||s.activeSegment===m.index?null:w.renderLabelLineItem({},m,void 0),[s.activeSegment,c.hideDataLabel]),Y=k.useMemo(()=>{if(s.activeSegment!=null&&I){if(s.legendPosition==="bottom")return{paddingBlockStart:"30px"};if(s.legendPosition==="top")return{paddingBlockEnd:"30px"}}return null},[I,s.activeSegment,s.legendPosition]),{chartConfig:de,dimension:fe,measure:_t,...we}=y;return v.jsx(lt,{dataset:t,ref:S,loading:i,loadingDelay:e,Placeholder:u??mt,style:R,className:L,slot:b,resizeDebounce:s.resizeDebounce,...we,children:v.jsxs(Pt,{onClick:B,margin:s.margin,accessibilityLayer:s.accessibilityLayer,className:Ve(typeof p=="function"||typeof h=="function"?"has-click-handler":void 0,Lt.piechart),children:[v.jsxs(w,{onClick:j,innerRadius:s.innerRadius,outerRadius:s.outerRadius,paddingAngle:s.paddingAngle,nameKey:O.accessor,dataKey:c.accessor,data:t,animationBegin:0,isAnimationActive:!o,labelLine:X,label:K,activeIndex:s.activeSegment,activeShape:s.activeSegment!=null&&Q,rootTabIndex:-1,children:[g&&v.jsx(De,{position:"center",children:g}),t&&t.map((m,C)=>{var E;return v.jsx(Oe,{name:O.formatter(We.getValueByDataKey(m,O.accessor,"")),fill:((E=c.colors)==null?void 0:E[C])??`var(--sapChart_OrderedColor_${C%12+1})`},C)})]}),(f==null?void 0:f.active)!==!1&&v.jsx(ct,{cursor:qe,formatter:_,contentStyle:Ge,itemStyle:s.tooltipItemStyle,labelStyle:s.tooltipLabelStyle,...f}),!r&&v.jsx(ut,{verticalAlign:s.legendPosition,align:s.legendHorizontalAlign,onClick:$,wrapperStyle:Y,...s.legendConfig}),A]})})});Ee.displayName="PieChart";export{Ee as P};
