import{C as p}from"./defaults-0JJzmY2k.js";import{r as i}from"./index-OjgoNOWw.js";const u=(r,t,o)=>{var s;return((s=r.highlightColor)==null?void 0:s.call(r,p.getValueByDataKey(t,r.accessor),r,t))??r.color??`var(--sapChart_OrderedColor_${o%11+1})`};let a;const m=r=>{const t='normal 12pt "72","72full",Arial,Helvetica,sans-serif';a=a||(a=document.createElement("canvas"));const o=a.getContext("2d");return o.font=t,o.measureText(r).width},y=(r,t=13)=>(r==null?void 0:r.length)>t?`${r.slice(0,t-2)}...`:r,C=(r,t)=>{const o=r.find(n=>n.accessor===t);return{primaryMeasure:r[0]===o?r[1]??r[0]:r[0],secondaryMeasure:o}},g=(r,t,o={},s={})=>{const n=i.useMemo(()=>r.map(e=>({...o,...e})),[r,o]),c=i.useMemo(()=>t.map(e=>({...s,...e})),[t,s]);return{dimensions:n,measures:c}},h=r=>i.useCallback((t,o,s)=>{const n=r.find(({accessor:c})=>c===s.dataKey);return n&&typeof n.formatter=="function"?n.formatter(t):t},[r]);export{h as a,u as b,m as g,C as r,y as t,g as u};
//# sourceMappingURL=useTooltipFormatter-fICME04w.js.map
