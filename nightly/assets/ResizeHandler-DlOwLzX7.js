import{_ as l}from"./withWebComponent-DfVDXLfc.js";let r;const o=new Map,a=()=>(r||(r=new window.ResizeObserver(n=>{window.requestAnimationFrame(()=>{n.forEach(s=>{const t=o.get(s.target);t&&Promise.all(t.map(e=>e()))})})})),r),c=(n,s)=>{const t=o.get(n)||[];t.length||a().observe(n),o.set(n,[...t,s])},g=(n,s)=>{const t=o.get(n)||[];if(t.length===0)return;const e=t.filter(i=>i!==s);e.length===0?(a().unobserve(n),o.delete(n)):o.set(n,e)};class f{static register(s,t){let e=s;l(e)&&(e=e.getDomRef()),e instanceof HTMLElement?c(e,t):console.warn("Cannot register ResizeHandler for element",s)}static deregister(s,t){let e=s;l(e)&&(e=e.getDomRef()),e instanceof HTMLElement?g(e,t):console.warn("Cannot deregister ResizeHandler for element",s)}}export{f};
