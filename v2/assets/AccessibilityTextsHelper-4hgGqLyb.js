const i=new WeakMap,l=new WeakMap,p={attributes:!0,childList:!0,characterData:!0,subtree:!0},k=t=>{const e=t;return e.accessibleNameRef?m(t):e.accessibleName?e.accessibleName:void 0},m=t=>{var a;const e=((a=t.accessibleNameRef)==null?void 0:a.split(" "))??[];let c="";return e.forEach((s,n)=>{const r=b(t,s),o=`${r&&r.textContent?r.textContent:""}`;o&&(c+=o,n<e.length-1&&(c+=" "))}),c},f=t=>{const e=new Set;u(t).forEach(n=>{e.add(n)});const c=t.accessibleNameRef,a=t.accessibleDescriptionRef,s=[c,a].filter(Boolean).join(" ");return(s?s.split(" "):[]).forEach(n=>{const r=b(t,n);r&&e.add(r)}),Array.from(e)},u=t=>{const e=t.getRootNode().querySelectorAll(`[for="${t.id}"]`);return Array.from(e)},b=(t,e)=>t.getRootNode().querySelector(`[id='${e}']`)||document.getElementById(e),g=t=>{const e=[];if(u(t).forEach(c=>{const a=c.textContent;a&&e.push(a)}),e.length)return e.join(" ")},E=t=>e=>{const c=e&&e.type==="property"&&e.name==="accessibleNameRef",a=e&&e.type==="property"&&e.name==="accessibleDescriptionRef";if(!c&&!a)return;const s=l.get(t);if(!s)return;const n=s.observedElements,r=f(t);n.forEach(o=>{r.includes(o)||d(s,o)}),r.forEach(o=>{n.includes(o)||(h(s,o),s.observedElements.push(o))}),s==null||s.callback()},y=(t,e)=>{if(l.has(t))return;const c=f(t),a=E(t),s={host:t,observedElements:c,callback:e,invalidationCallback:a};l.set(t,s),t.attachInvalidate(a),c.forEach(n=>{h(s,n)}),e()},h=(t,e)=>{let c=i.get(e);if(!c){c={observer:null,callbacks:[]};const a=new MutationObserver(()=>{c.callbacks.forEach(n=>{n()});const s=document.getElementById(e.id);t.host.id===e.getAttribute("for")||s||d(t,e)});c.observer=a,a.observe(e,p),i.set(e,c)}c.callbacks.includes(t.callback)||c.callbacks.push(t.callback)},d=(t,e)=>{var a;const c=i.get(e);c&&(c.callbacks=c.callbacks.filter(s=>s!==t.callback),c.callbacks.length||((a=c.observer)==null||a.disconnect(),i.delete(e))),t.observedElements=t.observedElements.filter(s=>s!==e)},R=t=>{const e=l.get(t);e&&([...e.observedElements].forEach(c=>{d(e,c)}),t.detachInvalidate(e.invalidationCallback),l.delete(t))},N=t=>{const e=t;return e.accessibleDescriptionRef?v(t):e.accessibleDescription?e.accessibleDescription:void 0},v=t=>{var a;const e=((a=t.accessibleDescriptionRef)==null?void 0:a.split(" "))??[];let c="";return e.forEach((s,n)=>{const r=b(t,s),o=`${r&&r.textContent?r.textContent:""}`;o&&(c+=o,n<e.length-1&&(c+=" "))}),c};export{k as A,m as E,N as L,g as M,R as T,v as p,y};
