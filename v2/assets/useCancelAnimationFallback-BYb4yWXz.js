import{l as o,B as s,m}from"./ChartContainer-DKLAziNN.js";import{X as l,Y as c}from"./YAxisTicks-BGzy0Otv.js";import"./jsx-runtime-CLpGMVip.js";import"./CustomElementsScope-CyyomP-e.js";import{r as i}from"./index-D23YZj_x.js";import{d as p}from"./debounce-D7W5PopO.js";var T=o({chartName:"BarChart",GraphicalChild:s,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:l},{axisType:"yAxis",AxisComp:c}],formatAxisMap:m});const b=a=>{const[r,t]=i.useState(!0),n=()=>{t(!1),t(!0)},e=i.useRef(p(n,1500)).current;return{isMounted:r,handleBarAnimationStart:()=>{a||e()},handleBarAnimationEnd:()=>{a||e.cancel()}}};export{T as B,b as u};
