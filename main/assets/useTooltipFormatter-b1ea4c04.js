import{g as p}from"./defaults-b98222fb.js";import{r as i}from"./index-ebeaab24.js";const u=(r,t,o)=>{var s;return((s=r.highlightColor)==null?void 0:s.call(r,p(t,r.accessor),r,t))??r.color??`var(--sapChart_OrderedColor_${o%11+1})`};let c;const m=r=>{const t='normal 12pt "72","72full",Arial,Helvetica,sans-serif';c=c||(c=document.createElement("canvas"));const o=c.getContext("2d");return o.font=t,o.measureText(r).width},g=(r,t=13)=>(r==null?void 0:r.length)>t?`${r.slice(0,t-2)}...`:r,y=(r,t)=>{const o=r.find(n=>n.accessor===t);return{primaryMeasure:r[0]===o?r[1]??r[0]:r[0],secondaryMeasure:o}},C=(r,t,o={},s={})=>{const n=i.useMemo(()=>r.map(e=>({...o,...e})),[r,o]),a=i.useMemo(()=>t.map(e=>({...s,...e})),[t,s]);return{dimensions:n,measures:a}},h=r=>i.useCallback((t,o,s)=>{const n=r.find(({accessor:a})=>a===s.dataKey);return n&&typeof n.formatter=="function"?n.formatter(t):t},[r]);export{h as a,m as b,u as g,y as r,g as t,C as u};
//# sourceMappingURL=useTooltipFormatter-b1ea4c04.js.map
