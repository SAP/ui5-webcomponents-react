import{r as l}from"./index-f1f2c4b1.js";import{g as n,d as f}from"./defaults-e10dff20.js";import{g as p}from"./useTooltipFormatter-5b9f06db.js";const g=(t,r,o)=>l.useMemo(()=>{let a=0;const e=r[0];if(t instanceof Array&&e){const i=m=>r.map(s=>e.formatter(n(m,s.accessor,"")));a=Math.max(...t.map(i).flat().map(p)),a+=8}return a=Math.min(a,f),o==="middle"?[a,{width:"auto"}]:[a,{marginLeft:a,maxWidth:`calc(100% - ${a+10}px)`}]},[t,r]);export{g as u};
//# sourceMappingURL=useLongestYAxisLabel-19f01632.js.map
