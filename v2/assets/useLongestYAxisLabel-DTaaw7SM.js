import{r as l}from"./index-RYns6xqu.js";import{C as p,d as f}from"./staticProps-BTLKcLWq.js";import{g as u}from"./useTooltipFormatter-BYVRJRnQ.js";const h=(a,r,e)=>l.useMemo(()=>{let t=0;const o=r[0];if(a instanceof Array&&o){const s=m=>r.map(i=>o.formatter(p.getValueByDataKey(m,i.accessor,"")));t=Math.max(...a.map(s).flat().map(u)),t+=8}return t=Math.min(t,f),e==="middle"?[t,{width:"auto"}]:[t,{marginLeft:t,maxWidth:`calc(100% - ${t+10}px)`}]},[a,r,e]);export{h as u};
