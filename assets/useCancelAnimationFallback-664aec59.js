import{k as r,j as o,l}from"./generateCategoricalChart-4d82b0f2.js";import{X as c,Y as m}from"./YAxisTicks-42b5e60d.js";import{r as i}from"./index-f1f2c4b1.js";import{d as p}from"./debounce-5c77766a.js";var C=r({chartName:"BarChart",GraphicalChild:o,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:c},{axisType:"yAxis",AxisComp:m}],formatAxisMap:l});const B=a=>{const[n,t]=i.useState(!0),s=()=>{t(!1),t(!0)},e=i.useRef(p(s,1500)).current;return{isMounted:n,handleBarAnimationStart:()=>{a||e()},handleBarAnimationEnd:()=>{a||e.cancel()}}};export{C as B,B as u};
//# sourceMappingURL=useCancelAnimationFallback-664aec59.js.map
