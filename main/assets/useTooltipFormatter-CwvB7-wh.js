import{C as u}from"./defaults-9v-QOi5-.js";import{r as i}from"./index-BP8_t0zE.js";const d=(r,t,o)=>{var e;return((e=r.highlightColor)==null?void 0:e.call(r,u.getValueByDataKey(t,r.accessor),r,t))??r.color??`var(--sapChart_OrderedColor_${o%11+1})`};let c;const g=r=>{if(typeof document>"u")return r.length*7;const t='normal 12pt "72","72full",Arial,Helvetica,sans-serif';c=c||(c=document.createElement("canvas"));const o=c.getContext("2d");return o.font=t,o.measureText(r).width},m=(r,t=13)=>(r==null?void 0:r.length)>t?`${r.slice(0,t-2)}...`:r,C=(r,t)=>{const o=r.find(n=>n.accessor===t);return{primaryMeasure:r[0]===o?r[1]??r[0]:r[0],secondaryMeasure:o}};function f(r){let t=r.accessor;return typeof r.accessor=="function"&&(t=JSON.stringify(r)),t}const h=(r,t,o={},e={})=>{const n=i.useMemo(()=>r.map(s=>({...o,...s,reactKey:f(s)})),[r,o]),a=i.useMemo(()=>t.map(s=>({...e,...s,reactKey:f(s)})),[t,e]);return{dimensions:n,measures:a}},l=r=>i.useCallback((t,o,e)=>{const n=r.find(({accessor:a})=>a===e.dataKey);return n&&typeof n.formatter=="function"?n.formatter(t):t},[r]);export{l as a,d as b,g,C as r,m as t,h as u};
