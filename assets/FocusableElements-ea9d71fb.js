import{i as u}from"./isElementHidden-01c07146.js";import{i as f}from"./UI5Element-9ae3ac4a.js";const c=/^(?:a|area)$/i,d=/^(?:input|select|textarea|button)$/i,m=e=>{if(e.disabled)return!1;const s=e.getAttribute("tabindex");return s!=null?parseInt(s)>=0:d.test(e.nodeName)||c.test(e.nodeName)&&!!e.href},b=e=>e.hasAttribute("data-ui5-focus-trap"),E=async(e,s)=>!e||u(e)?null:a(e,!0,s),F=async(e,s)=>!e||u(e)?null:a(e,!1,s),h=e=>e.hasAttribute("data-ui5-focus-redirect")||!u(e),a=async(e,s,r)=>{let t,n,l=-1;e.shadowRoot?t=s?e.shadowRoot.firstChild:e.shadowRoot.lastChild:e instanceof HTMLSlotElement&&e.assignedNodes()?(n=e.assignedNodes(),l=s?0:n.length-1,t=n[l]):r?t=e:t=s?e.firstElementChild:e.lastElementChild;let i;for(;t;){const o=t;if(f(t)&&(t=await t.getFocusDomRefAsync()),!t)return null;if(t.nodeType===1&&h(t)&&!b(t)){if(m(t))return t&&typeof t.focus=="function"?t:null;if(i=await a(t,s),i)return i&&typeof i.focus=="function"?i:null}t=s?o.nextSibling:o.previousSibling,n&&!n[l].contains(t)&&(l=s?l+1:l-1,t=n[l])}return null};export{F as a,E as g,m as i};
//# sourceMappingURL=FocusableElements-ea9d71fb.js.map
