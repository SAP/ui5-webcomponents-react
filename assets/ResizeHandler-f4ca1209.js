import{i as o}from"./UI5Element-d1d93200.js";let i;const n=new Map,l=()=>(i||(i=new window.ResizeObserver(t=>{t.forEach(r=>{const s=n.get(r.target);s&&Promise.all(s.map(e=>e()))})})),i),c=(t,r)=>{const s=n.get(t)||[];s.length||l().observe(t),n.set(t,[...s,r])},f=(t,r)=>{const s=n.get(t)||[];if(s.length===0)return;const e=s.filter(a=>a!==r);e.length===0?(l().unobserve(t),n.delete(t)):n.set(t,e)};class b{static register(r,s){let e=r;o(e)&&(e=e.getDomRef()),e instanceof HTMLElement?c(e,s):console.warn("Cannot register ResizeHandler for element",r)}static deregister(r,s){let e=r;o(e)&&(e=e.getDomRef()),e instanceof HTMLElement?f(e,s):console.warn("Cannot deregister ResizeHandler for element",r)}}export{b as R};
//# sourceMappingURL=ResizeHandler-f4ca1209.js.map
