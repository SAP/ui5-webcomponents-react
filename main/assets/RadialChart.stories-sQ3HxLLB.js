import{j as h}from"./jsx-runtime-DtaoT6pD.js";import{F as J,c as De,a as H}from"./index-nT83TGBH.js";import{T as ae}from"./index-SpQb4Cav.js";import{T as _}from"./ThemingParameters-UghqSl-x.js";import{e as Be}from"./index-ENBflQbU.js";import{R as S,r as Ce}from"./index-OjgoNOWw.js";import{u as Te}from"./useOnClickInternal-0NwCcJNk.js";import{a as re,j as ne,i as Q,b as Ie,c as ie,f as Ee,n as Y,C as Ve}from"./ChartContainer-6QLP9J50.js";import{P as Pe,a as Fe,b as ze}from"./Placeholder-SBCsXRnJ.js";import{S as Ne,A as Me,L as z,a as qe,G as $e,o as Ke,q as We,t as Le,g as Ge,r as oe,s as Ue,p as Je,e as He,c as Qe,m as Xe}from"./generateCategoricalChart-ltrAgavw.js";import{b as se}from"./_baseForOwn-a7AeJH13.js";import"./clsx-Zbgk8kpT.js";import"./react-jss.esm-fzYOEaou.js";import"./theming.esm-g_6oAtQL.js";import"./i18n-defaults-8iJXv8tC.js";import"./i18nBundle-1RfbKOQr.js";import"./Language-JQ3LAQtE.js";import"./VersionInfo-zmLW7G4m.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./_baseUniq-_JZHYp0e.js";import"./index-CD-FFeO3.js";import"./throttle-SW6qI-oX.js";import"./isString-F2o_0UD_.js";import"./index-9ZYZw-bw.js";import"./iframe-Whx-QLhU.js";import"../sb-preview/runtime.js";import"./Label-fARuFZ49.js";import"./UI5Element-ZYvPEp0D.js";import"./CustomElementsScopeUtils-StEZUlti.js";import"./withWebComponent-c-uI2wMj.js";import"./utils-_oNUceU3.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-5NJLMpyi.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./react-content-loader.es-MhslfaKA.js";import"./tiny-invariant-csaaSLPr.js";import"./isPlainObject-F1bmvOby.js";import"./mapValues-_kP3xGjM.js";function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(e)}function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Z.apply(this,arguments)}function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?le(Object(r),!0).forEach(function(a){Ye(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function Ye(e,t,r){return t=Ze(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ze(e){var t=et(e,"string");return V(t)=="symbol"?t:String(t)}function et(e,t){if(V(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(V(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ce(e){return typeof e=="string"?parseInt(e,10):e}function tt(e,t){var r="".concat(t.cx||e.cx),a=parseInt(r,10),n="".concat(t.cy||e.cy),i=parseInt(n,10);return X(X(X({},t),e),{},{cx:a,cy:i})}function ue(e){return S.createElement(Ne,Z({shapeType:"sector",propTransformer:tt},e))}var at=["shape","activeShape","activeIndex","cornerRadius"],rt=["value","background"];function B(e){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(e)}function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?pe(Object(r),!0).forEach(function(a){w(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function de(e,t){if(e==null)return{};var r=nt(e,t),a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function nt(e,t){if(e==null)return{};var r={},a=Object.keys(e),n,i;for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function it(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,_e(a.key),a)}}function ot(e,t,r){return t&&me(e.prototype,t),r&&me(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function st(e,t,r){return t=K(t),lt(e,Oe()?Reflect.construct(t,r||[],K(e).constructor):t.apply(e,r))}function lt(e,t){if(t&&(B(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $(e)}function Oe(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Oe=function(){return!!e})()}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},K(e)}function $(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ct(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ee(e,t)}function ee(e,t){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,n){return a.__proto__=n,a},ee(e,t)}function w(e,t,r){return t=_e(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _e(e){var t=ut(e,"string");return B(t)=="symbol"?t:String(t)}function ut(e,t){if(B(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(B(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var F=function(e){ct(t,e);function t(){var r;it(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return r=st(this,t,[].concat(n)),w($(r),"state",{isAnimationFinished:!1}),w($(r),"handleAnimationEnd",function(){var o=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),se(o)&&o()}),w($(r),"handleAnimationStart",function(){var o=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),se(o)&&o()}),r}return ot(t,[{key:"getDeltaAngle",value:function(){var a=this.props,n=a.startAngle,i=a.endAngle,o=Y(i-n),l=Math.min(Math.abs(i-n),360);return o*l}},{key:"renderSectorsStatically",value:function(a){var n=this,i=this.props,o=i.shape,l=i.activeShape,m=i.activeIndex,c=i.cornerRadius,f=de(i,at),y=re(f,!1);return a.map(function(b,u){var v=u===m,p=s(s(s(s({},y),{},{cornerRadius:ce(c)},b),ne(n.props,b,u)),{},{key:"sector-".concat(u),className:"recharts-radial-bar-sector ".concat(b.className),forceCornerRadius:f.forceCornerRadius,cornerIsExternal:f.cornerIsExternal,isActive:v,option:v?l:o});return S.createElement(ue,p)})}},{key:"renderSectorsWithAnimation",value:function(){var a=this,n=this.props,i=n.data,o=n.isAnimationActive,l=n.animationBegin,m=n.animationDuration,c=n.animationEasing,f=n.animationId,y=this.state.prevData;return S.createElement(Me,{begin:l,duration:m,isActive:o,easing:c,from:{t:0},to:{t:1},key:"radialBar-".concat(f),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(b){var u=b.t,v=i.map(function(p,x){var A=y&&y[x];if(A){var T=Q(A.startAngle,p.startAngle),d=Q(A.endAngle,p.endAngle);return s(s({},p),{},{startAngle:T(u),endAngle:d(u)})}var j=p.endAngle,I=p.startAngle,W=Q(I,j);return s(s({},p),{},{endAngle:W(u)})});return S.createElement(z,null,a.renderSectorsStatically(v))})}},{key:"renderSectors",value:function(){var a=this.props,n=a.data,i=a.isAnimationActive,o=this.state.prevData;return i&&n&&n.length&&(!o||!Ie(o,n))?this.renderSectorsWithAnimation():this.renderSectorsStatically(n)}},{key:"renderBackground",value:function(a){var n=this,i=this.props.cornerRadius,o=re(this.props.background,!1);return a.map(function(l,m){l.value;var c=l.background,f=de(l,rt);if(!c)return null;var y=s(s(s(s(s({cornerRadius:ce(i)},f),{},{fill:"#eee"},c),o),ne(n.props,l,m)),{},{index:m,key:"sector-".concat(m),className:ie("recharts-radial-bar-background-sector",o==null?void 0:o.className),option:c,isActive:!1});return S.createElement(ue,y)})}},{key:"render",value:function(){var a=this.props,n=a.hide,i=a.data,o=a.className,l=a.background,m=a.isAnimationActive;if(n||!i||!i.length)return null;var c=this.state.isAnimationFinished,f=ie("recharts-area",o);return S.createElement(z,{className:f},l&&S.createElement(z,{className:"recharts-radial-bar-background"},this.renderBackground(i)),S.createElement(z,{className:"recharts-radial-bar-sectors"},this.renderSectors()),(!m||c)&&qe.renderCallByParent(s({},this.props),i))}}],[{key:"getDerivedStateFromProps",value:function(a,n){return a.animationId!==n.prevAnimationId?{prevAnimationId:a.animationId,curData:a.data,prevData:n.curData}:a.data!==n.curData?{curData:a.data}:null}}]),t}(Ce.PureComponent);w(F,"displayName","RadialBar");w(F,"defaultProps",{angleAxisId:0,radiusAxisId:0,minPointSize:0,hide:!1,legendType:"rect",data:[],isAnimationActive:!$e.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease",forceCornerRadius:!1,cornerIsExternal:!1});w(F,"getComposedData",function(e){var t=e.item,r=e.props,a=e.radiusAxis,n=e.radiusAxisTicks,i=e.angleAxis,o=e.angleAxisTicks,l=e.displayedData,m=e.dataKey,c=e.stackedData,f=e.barPosition,y=e.bandSize,b=e.dataStartIndex,u=Ke(f,t);if(!u)return null;var v=i.cx,p=i.cy,x=r.layout,A=t.props,T=A.children,d=A.minPointSize,j=x==="radial"?i:a,I=c?j.scale.domain():null,W=We({numericAxis:j}),L=Ee(T,He),je=l.map(function(R,E){var g,P,O,k,D,te;if(c?g=Le(c[b+E],I):(g=Ge(R,m),Array.isArray(g)||(g=[W,g])),x==="radial"){P=oe({axis:a,ticks:n,bandSize:y,offset:u.offset,entry:R,index:E}),D=i.scale(g[1]),k=i.scale(g[0]),O=P+u.size;var G=D-k;if(Math.abs(d)>0&&Math.abs(G)<Math.abs(d)){var Re=Y(G||d)*(Math.abs(d)-Math.abs(G));D+=Re}te={background:{cx:v,cy:p,innerRadius:P,outerRadius:O,startAngle:r.startAngle,endAngle:r.endAngle}}}else{P=a.scale(g[0]),O=a.scale(g[1]),k=oe({axis:i,ticks:o,bandSize:y,offset:u.offset,entry:R,index:E}),D=k+u.size;var U=O-P;if(Math.abs(d)>0&&Math.abs(U)<Math.abs(d)){var ke=Y(U||d)*(Math.abs(d)-Math.abs(U));O+=ke}}return s(s(s(s({},R),te),{},{payload:R,value:c?g:g[1],cx:v,cy:p,innerRadius:P,outerRadius:O,startAngle:k,endAngle:D},L&&L[E]&&L[E].props),{},{tooltipPayload:[Ue(t,R)],tooltipPosition:Je(v,p,(P+O)/2,(k+D)/2)})});return{data:je,layout:x}});var pt=Qe({chartName:"RadialBarChart",GraphicalChild:F,legendContent:"children",defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"angleAxis",AxisComp:Pe},{axisType:"radiusAxis",AxisComp:Fe}],formatAxisMap:Xe,defaultProps:{layout:"radial",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}});const dt={fill:_.sapContent_ImagePlaceholderBackground},we={fontSize:"1.25rem",fill:_.sapTextColor,fontFamily:_.sapFontFamily},C=Ce.forwardRef((e,t)=>{const{maxValue:r,value:a,displayValue:n,onDataPointClick:i,onClick:o,color:l,style:m,className:c,slot:f,noAnimation:y,chartConfig:b,displayValueStyle:u,...v}=e,p=[0,r],x=[{value:a}],A=(d,j,I)=>{d&&i&&i(Be(I,{value:d.value,payload:d.payload,dataIndex:j}))},T=Te(o);return h.jsx(Ve,{dataset:x,ref:t,Placeholder:ze,className:c,slot:f,resizeDebounce:250,style:m,...v,children:h.jsxs(pt,{onClick:T,innerRadius:"90%",outerRadius:"100%",barSize:10,data:x,cx:"50%",cy:"50%",startAngle:90,endAngle:-270,...b,children:[h.jsx(Pe,{type:"number",domain:p,tick:!1}),h.jsx(F,{isAnimationActive:y===!1,background:dt,dataKey:"value",fill:l??_.sapChart_OrderedColor_1,onClick:A}),n&&h.jsx("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",className:"progress-label",style:{...we,...u},children:n})]})})});C.defaultProps={maxValue:100,noAnimation:!1,displayValueStyle:we};C.displayName="RadialChart";try{C.displayName="RadialChart",C.__docgenInfo={description:"Displays a ring chart highlighting a current status.\nThe status can be emphasized by using the `color` prop.",displayName:"RadialChart",props:{value:{defaultValue:null,description:"The actual value which defines how much the ring is filled.",name:"value",required:!1,type:{name:"number"}},maxValue:{defaultValue:{value:"100"},description:"The maximum value of the ring. If `value` >= `maxValue`, the ring will be filled to 100%.\n\n__Default:__ `100`.",name:"maxValue",required:!1,type:{name:"number"}},displayValue:{defaultValue:null,description:"The value that should be displayed in the center of the `RadialChart`.",name:"displayValue",required:!1,type:{name:"string | number"}},displayValueStyle:{defaultValue:{value:`{
  fontSize: '1.25rem',
  fill: ThemingParameters.sapTextColor,
  fontFamily: ThemingParameters.sapFontFamily
}`},description:"Font size of the `displayValue`.\n\n__Default values:__\n\n- fontSize: `1.25rem`\n- fill: `ThemingParameters.sapTextColor`",name:"displayValueStyle",required:!1,type:{name:"CSSProperties"}},color:{defaultValue:null,description:"A custom color you want to apply to the ring fill. This props accepts any valid CSS color or CSS variable.",name:"color",required:!1,type:{name:"Color"}},onDataPointClick:{defaultValue:null,description:"`onDataPointClick` fires when the user clicks on the filled part of the ring.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<{ value: number; payload: unknown; dataIndex: number; }>) => void"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; dataIndex: number; value: number; }>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:`Defines possible configurations of the internally used [RadialBarChart](https://recharts.org/en-US/api/RadialBarChart).

__Note:__ It is possible to overwrite internally used props. Please use with caution!

__Default values:__

- margin: \`{ top: 5, right: 5, bottom: 5, left: 5 }\`
- innerRadius: \`"90%"\`
- outerRadius: \`"100%"\``,name:"chartConfig",required:!1,type:{name:"RadialChartConfig"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Yt={title:"RadialChart",component:C,args:{displayValue:"50%",value:50,maxValue:100}},N={},M={args:{color:"#f0ab00"}},q={render:()=>h.jsxs(J,{justifyContent:De.SpaceBetween,alignItems:H.Center,children:[h.jsx(C,{value:50,style:{height:"50px",width:"50px"},chartConfig:{innerRadius:"75%",margin:{top:0,right:0,bottom:0,left:0}},displayValue:"50%",displayValueStyle:{fontSize:_.sapFontSmallSize,fill:_.sapChart_OrderedColor_1}}),h.jsxs(J,{alignItems:H.Center,children:[h.jsx(C,{value:50,style:{width:"25px",height:"25px"},chartConfig:{innerRadius:"70%",margin:{top:0,right:0,bottom:0,left:0}}}),h.jsx(ae,{children:"50%"})]}),h.jsxs(J,{alignItems:H.Center,children:[h.jsx(C,{value:50,style:{height:"16px",width:"16px"},chartConfig:{innerRadius:"75%",margin:{top:0,right:0,bottom:0,left:0}}}),h.jsx(ae,{style:{fontSize:_.sapFontSmallSize},children:"50%"})]})]})};var fe,he,ye;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:"{}",...(ye=(he=N.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var ge,ve,be;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    color: '#f0ab00'
  }
}`,...(be=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var xe,Ae,Se;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    return <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} alignItems={FlexBoxAlignItems.Center}>
        <RadialChart value={50} style={{
        height: '50px',
        width: '50px'
      }} chartConfig={{
        innerRadius: '75%',
        margin: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }} displayValue={'50%'} displayValueStyle={{
        fontSize: ThemingParameters.sapFontSmallSize,
        fill: ThemingParameters.sapChart_OrderedColor_1
      }} />
        <FlexBox alignItems={FlexBoxAlignItems.Center}>
          <RadialChart value={50} style={{
          width: '25px',
          height: '25px'
        }} chartConfig={{
          innerRadius: '70%',
          margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }} />
          <Text>50%</Text>
        </FlexBox>
        <FlexBox alignItems={FlexBoxAlignItems.Center}>
          <RadialChart value={50} style={{
          height: '16px',
          width: '16px'
        }} chartConfig={{
          innerRadius: '75%',
          margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }} />
          <Text style={{
          fontSize: ThemingParameters.sapFontSmallSize
        }}>50%</Text>
        </FlexBox>
      </FlexBox>;
  }
}`,...(Se=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};const Zt=["Default","WithCustomColor","MicroRadialCharts"];export{N as Default,q as MicroRadialCharts,M as WithCustomColor,Zt as __namedExportsOrder,Yt as default};
