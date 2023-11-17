import{r as p}from"./VersionInfo-pP_ltRZs.js";const u=o=>{let t=o.parentElement;for(;t&&t.tagName.toLowerCase()!=="form";)t=t.parentElement;if(t instanceof HTMLFormElement)return t};class c{static syncNativeHiddenInput(t,r){const s=!!t.name||t.required,e=t.querySelector("input[data-ui5-form-support]");s?this.syncNativeElement(t,e,r):e&&t.removeChild(e)}static syncNativeHiddenTextArea(t,r){const s=!!t.name||t.required,e=t.querySelector("textarea[data-ui5-form-support]");s?this.syncNativeElement(t,e,r,"textarea"):e&&t.removeChild(e)}static syncNativeElement(t,r,s,e="input"){r||(r=document.createElement(e),r.style.clip="rect(0 0 0 0)",r.style.clipPath="inset(50%)",r.style.height="1px",r.style.overflow="hidden",r.style.position="absolute",r.style.whiteSpace="nowrap",r.style.width="1px",r.style.bottom="0",r.setAttribute("tabindex","-1"),r.required=t.required,r.setAttribute("data-ui5-form-support",""),r.setAttribute("aria-hidden","true"),r.addEventListener("focusin",()=>{var i;return(i=t.getFocusDomRef())==null?void 0:i.focus()}),r.slot="formSupport",t.appendChild(r)),r.name=t.name,(s||a)(t,r)}static syncNativeFileInput(t,r,s){const e=!!t.name;let i=t.querySelector('input[type="file"][data-ui5-form-support]');e&&!i&&(i=document.createElement("input"),i.type="file",i.setAttribute("data-ui5-form-support",""),i.slot="formSupport",i.style.position="absolute",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.opacity="0",t.multiple&&(i.multiple=!0),i.addEventListener("change",s),t.appendChild(i)),!e&&i&&t.removeChild(i),e&&(i.name=t.name,(r||a)(t,i))}static triggerFormSubmit(t){const r=u(t);if(r){if(!r.checkValidity()){r.reportValidity();return}if(!r.dispatchEvent(new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:t})))return;r.submit()}}static triggerFormReset(t){const r=u(t);r&&r.reset()}}const a=(o,t)=>{t.disabled=o.disabled,t.value=o.value};p("FormSupport",c);
//# sourceMappingURL=InputElementsFormSupport-za48ZVxZ.js.map
