import{e as l}from"./i18nBundle-ZoJ37UJR.js";import{a as p}from"./UI5Element-Jt3C0_FN.js";var o;(function(e){e.Polite="Polite",e.Assertive="Assertive"})(o||(o={}));const n=o;let t,s;const r=e=>{e.style.position="absolute",e.style.clip="rect(1px,1px,1px,1px)",e.style.userSelect="none",e.style.left="-1000px",e.style.top="-1000px",e.style.pointerEvents="none"};p(()=>{t&&s||(t=document.createElement("span"),s=document.createElement("span"),t.classList.add("ui5-invisiblemessage-polite"),s.classList.add("ui5-invisiblemessage-assertive"),t.setAttribute("aria-live","polite"),s.setAttribute("aria-live","assertive"),t.setAttribute("role","alert"),s.setAttribute("role","alert"),r(t),r(s),l("ui5-static-area").appendChild(t),l("ui5-static-area").appendChild(s))});const v=(e,a)=>{const i=a===n.Assertive?s:t;i.textContent="",i.textContent=e,a!==n.Assertive&&a!==n.Polite&&console.warn('You have entered an invalid mode. Valid values are: "Polite" and "Assertive". The framework will automatically set the mode to "Polite".'),setTimeout(()=>{i.textContent===e&&(i.textContent="")},3e3)};export{n as I,v as a};
