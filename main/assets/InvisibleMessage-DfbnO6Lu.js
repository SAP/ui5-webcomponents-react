import{o as l}from"./useIsomorphicLayoutEffect-CZEdMYkS.js";import{P as r}from"./Boot-Bi0-wsLc.js";const o={Polite:"Polite",Assertive:"Assertive"};let t,i;const a=e=>{e.style.position="absolute",e.style.clip="rect(1px,1px,1px,1px)",e.style.userSelect="none",e.style.left="-1000px",e.style.top="-1000px",e.style.pointerEvents="none"};r(()=>{t&&i||(t=document.createElement("span"),i=document.createElement("span"),t.classList.add("ui5-invisiblemessage-polite"),i.classList.add("ui5-invisiblemessage-assertive"),t.setAttribute("aria-live","polite"),i.setAttribute("aria-live","assertive"),t.setAttribute("role","alert"),i.setAttribute("role","alert"),a(t),a(i),l("ui5-announcement-area").appendChild(t),l("ui5-announcement-area").appendChild(i))});const c=(e,n)=>{const s=n===o.Assertive?i:t;s.textContent="",s.textContent=e,n!==o.Assertive&&n!==o.Polite&&console.warn('You have entered an invalid mode. Valid values are: "Polite" and "Assertive". The framework will automatically set the mode to "Polite".'),setTimeout(()=>{s.textContent===e&&(s.textContent="")},3e3)};export{o as e,c as p};
