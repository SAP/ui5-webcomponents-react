import{t as l}from"./isElementHidden-B4HqmI2E.js";import{r as c}from"./isElementClickable-0ACQ4G_A.js";import{v as e}from"./withWebComponent-6t4MTiZ-.js";const f=t=>t.hasAttribute("data-ui5-focus-trap"),g=async(t,o)=>!t||l(t)?null:r(t,!0),w=async(t,o)=>!t||l(t)?null:r(t,!1),d=t=>t.hasAttribute("data-ui5-focus-redirect")||!l(t),r=async(t,o,h)=>{let n,i,s=-1;t.shadowRoot?n=o?t.shadowRoot.firstChild:t.shadowRoot.lastChild:t instanceof HTMLSlotElement&&t.assignedNodes()?(i=t.assignedNodes(),s=o?0:i.length-1,n=i[s]):n=o?t.firstElementChild:t.lastElementChild;let a;for(;n;){const u=n;if(e(n)&&(n=await n.getFocusDomRefAsync()),!n)return null;if(n.nodeType===1&&d(n)&&!f(n)){if(c(n))return n&&typeof n.focus=="function"?n:null;if(a=await r(n,o),a)return a&&typeof a.focus=="function"?a:null}n=o?u.nextSibling:u.previousSibling,i&&!i[s].contains(n)&&(s=o?s+1:s-1,n=i[s])}return null},m="ui5-content-native-scrollbars",C=()=>document.body.classList.contains(m);export{g as a,C as c,w as d};
