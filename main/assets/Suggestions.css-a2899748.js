import{m as l,r as s}from"./UI5Element-11982a12.js";import{r as a}from"./Icons-234bf59e.js";import{s as g,a as u}from"./withWebComponent-99b005ba.js";const m="not-editable",i="M443 104q5 7 5 12 0 6-5 11L118 453q-4 4-8 4L0 480l22-110q0-5 4-9L352 36q4-4 11-4t11 4zm-121 99l-46-45L52 381l46 46zm87-88l-46-44-64 64 45 45zm71 204l-63 64-65-64-33 32 66 63-66 66 33 32 65-66 63 66 32-32-66-66 66-63z",h=!1,d="SAP-icons-v4",v="@ui5/webcomponents-icons";a(m,{pathData:i,ltr:h,collection:d,packageName:v});const w="not-editable",r="M499 88q8 7 8 19 0 10-8 18L126 504q-5 4-9 6t-10 2H27q-12 0-19.5-7.5T0 485v-80q0-10 8-18L382 8q8-8 18-8 11 0 19 8zm-136 99l-43-43L64 405l43 43zm80-80l-43-43-42 43 42 42zm61 331q8 8 8 18 0 8-8 18-7 7-18 7t-18-7l-33-34-33 34q-7 7-18 7t-18-7q-8-10-8-18 0-10 8-18l33-33-33-34q-8-8-8-17 0-10 8-18t18-8 18 8l33 33 33-33q8-8 18-8t18 8 8 18q0 9-8 17l-33 34z",_=!1,L="SAP-icons-v5",f="@ui5/webcomponents-icons";a(w,{pathData:r,ltr:_,collection:L,packageName:f});l();const q=/[[\]{}()*+?.\\^$|]/g,b=t=>t.replace(q,"\\$&"),y=(t,e,o)=>{const n=new RegExp(`(^|\\s)${b(t.toLowerCase())}.*`,"g");return e.filter(p=>{const c=p[o];return n.lastIndex=0,n.test(c.toLowerCase())})},$=(t,e,o)=>e.filter(n=>n[o].toLowerCase().startsWith(t.toLowerCase())),z=(t,e,o)=>e.filter(n=>n[o].toLowerCase().includes(t.toLowerCase())),C=(t,e)=>e,N=Object.freeze(Object.defineProperty({__proto__:null,Contains:z,None:C,StartsWith:$,StartsWithPerTerm:y},Symbol.toStringTag,{value:"Module"}));s("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);s("@ui5/webcomponents","sap_fiori_3",async()=>u);const T={packageName:"@ui5/webcomponents",fileName:"themes/Suggestions.css",content:`.ui5-suggestions-popover {
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
}`};export{N as F,$ as S,y as a,T as s};
//# sourceMappingURL=Suggestions.css-a2899748.js.map
