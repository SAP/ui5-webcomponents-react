import{m as l,r as s}from"./UI5Element-a4bd3d38.js";import{r as a}from"./Icons-74c917eb.js";import{s as g,a as u}from"./withWebComponent-7d7e5133.js";const m="not-editable",i="M443 104q5 7 5 12 0 6-5 11L118 453q-4 4-8 4L0 480l22-110q0-5 4-9L352 36q4-4 11-4t11 4zm-121 99l-46-45L52 381l46 46zm87-88l-46-44-64 64 45 45zm71 204l-63 64-65-64-33 32 66 63-66 66 33 32 65-66 63 66 32-32-66-66 66-63z",h=!1,d="SAP-icons-v4",v="@ui5/webcomponents-icons";a(m,{pathData:i,ltr:h,collection:d,packageName:v});const w="not-editable",r="M504 94q7 7 7 18t-7 18L130 505q-9 7-18 7H26q-11 0-18.5-7.5T0 486v-86q0-10 8-18L381 7q9-7 18-7 11 0 18 7zm-55 18l-50-50-50 50 50 50zm-86 86l-50-50L62 400l50 50zm142 270q7 7 7 18t-7.5 18.5T486 512t-18-7l-37-38-38 38q-7 7-18 7t-18.5-7.5T349 486q0-10 8-18l38-37-38-38q-8-8-8-18 0-11 7.5-18.5T375 349q10 0 18 8l38 37 37-37q8-8 18-8 11 0 18.5 7.5T512 375t-7 18l-38 38z",_=!1,L="SAP-icons-v5",f="@ui5/webcomponents-icons";a(w,{pathData:r,ltr:_,collection:L,packageName:f});l();const q=/[[\]{}()*+?.\\^$|]/g,b=t=>t.replace(q,"\\$&"),y=(t,e,o)=>{const n=new RegExp(`(^|\\s)${b(t.toLowerCase())}.*`,"g");return e.filter(p=>{const c=p[o];return n.lastIndex=0,n.test(c.toLowerCase())})},T=(t,e,o)=>e.filter(n=>n[o].toLowerCase().startsWith(t.toLowerCase())),$=(t,e,o)=>e.filter(n=>n[o].toLowerCase().includes(t.toLowerCase())),z=(t,e)=>e,D=Object.freeze(Object.defineProperty({__proto__:null,Contains:$,None:z,StartsWith:T,StartsWithPerTerm:y},Symbol.toStringTag,{value:"Module"}));s("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);s("@ui5/webcomponents","sap_fiori_3",async()=>u);const N={packageName:"@ui5/webcomponents",fileName:"themes/Suggestions.css",content:`.ui5-suggestions-popover {
	box-shadow: var(--sapContent_Shadow1);
}

.ui5-suggestions-popover::part(header),
.ui5-suggestions-popover::part(content) {
	padding: 0;
}

.ui5-suggestions-popover::part(footer) {
	padding: 0 1rem;
}

.ui5-suggestions-popover [ui5-li],
.ui5-suggestions-popover [ui5-li-suggestion-item] {
	height: var(--_ui5_list_item_dropdown_base_height);
}

.ui5-suggestions-popover [ui5-li]::part(icon),
.ui5-suggestions-popover [ui5-li-suggestion-item]::part(icon) {
	color: var(--sapList_TextColor);
}

.input-root-phone.native-input-wrapper {
	display: contents;
}

.input-root-phone.native-input-wrapper::before {
	display: none;
}

.native-input-wrapper .ui5-input-inner-phone {
	margin: 0;
}`};export{D as F,T as S,y as a,N as s};
//# sourceMappingURL=Suggestions.css-8d6efd26.js.map
