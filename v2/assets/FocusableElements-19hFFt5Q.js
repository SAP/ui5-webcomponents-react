import{t as r}from"./isElementHidden-B4HqmI2E.js";import{r as f}from"./isElementClickable-0ACQ4G_A.js";import{v as e}from"./withWebComponent-DUIvHLMA.js";const c=t=>t.hasAttribute("data-ui5-focus-trap"),g=async(t,n)=>!t||r(t)?null:a(t,!0),w=async(t,n)=>!t||r(t)?null:a(t,!1),d=t=>t.hasAttribute("data-ui5-focus-redirect")||!r(t),a=async(t,n,m)=>{let o,s,i=-1;t.shadowRoot?o=n?t.shadowRoot.firstChild:t.shadowRoot.lastChild:t instanceof HTMLSlotElement&&t.assignedNodes()?(s=t.assignedNodes(),i=n?0:s.length-1,o=s[i]):o=n?t.firstElementChild:t.lastElementChild;let l;for(;o;){const u=o;if(e(o)&&(o=await o.getFocusDomRefAsync()),!o)return null;if(o.nodeType===1&&d(o)&&!c(o)){if(f(o))return o&&typeof o.focus=="function"?o:null;if(l=await a(o,n),l)return l&&typeof l.focus=="function"?l:null}o=n?u.nextSibling:u.previousSibling,s&&!s[i].contains(o)&&(i=n?i+1:i-1,o=s[i])}return null};export{g as c,w as d};
