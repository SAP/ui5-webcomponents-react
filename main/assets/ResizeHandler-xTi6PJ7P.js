import{i as o}from"./UI5Element-_cJDeK03.js";let i;const n=new Map,a=()=>(i||(i=new window.ResizeObserver(t=>{window.requestAnimationFrame(()=>{t.forEach(r=>{const s=n.get(r.target);s&&Promise.all(s.map(e=>e()))})})})),i),c=(t,r)=>{const s=n.get(t)||[];s.length||a().observe(t),n.set(t,[...s,r])},f=(t,r)=>{const s=n.get(t)||[];if(s.length===0)return;const e=s.filter(l=>l!==r);e.length===0?(a().unobserve(t),n.delete(t)):n.set(t,e)};class b{static register(r,s){let e=r;o(e)&&(e=e.getDomRef()),e instanceof HTMLElement?c(e,s):console.warn("Cannot register ResizeHandler for element",r)}static deregister(r,s){let e=r;o(e)&&(e=e.getDomRef()),e instanceof HTMLElement?f(e,s):console.warn("Cannot deregister ResizeHandler for element",r)}}export{b as R};
