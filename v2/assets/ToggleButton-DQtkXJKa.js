import{j as v,F as p,p as i,d as u,s as h,m as B,z as g}from"./jsx-runtime--4q9epG_.js";import{A as b}from"./Keys-Can65e7H.js";import{b as A,a as _}from"./Button-DiEZky6d.js";import{d as S}from"./parameters-bundle.css-Ct2Rzfjz.js";function f(){return v(p,{children:A.call(this,{ariaPressed:this.pressed})})}i("@ui5/webcomponents-theming","sap_horizon",async()=>u);i("@ui5/webcomponents","sap_horizon",async()=>S);const C=`:host(:not([hidden])){display:inline-block}:host([design="Emphasized"]:not([pressed])){text-shadow:var(--_ui5-v2-7-3_toggle_button_emphasized_text_shadow)}:host([pressed]),:host([design="Default"][pressed]),:host([design="Transparent"][pressed]),:host([design="Emphasized"][pressed]){background:var(--sapButton_Selected_Background);border-color:var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor);text-shadow:none}:host([pressed]:hover),:host([pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design="Default"][pressed]:hover),:host([design="Default"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design="Transparent"][pressed]:hover),:host([design="Transparent"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design="Emphasized"][pressed]:hover),:host([design="Emphasized"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Selected_Hover_Background);border-color:var(--sapButton_Selected_Hover_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([active]:not([disabled])),:host([design="Default"][active]:not([disabled])),:host([design="Transparent"][active]:not([disabled])),:host([design="Emphasized"][active]:not([disabled])){background:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design="Default"][pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design="Transparent"][pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design="Emphasized"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Selected_Background);border-color:var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([design="Negative"][pressed]){background:var(--sapButton_Reject_Selected_Background);border-color:var(--sapButton_Reject_Selected_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design="Negative"][active]:not([disabled])){background:var(--sapButton_Reject_Active_Background);border-color:var(--sapButton_Reject_Active_BorderColor);color:var(--sapButton_Reject_Active_TextColor)}:host([design="Negative"][pressed][active]:hover),:host([design="Negative"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Reject_Selected_Hover_Background);border-color:var(--sapButton_Reject_Selected_Hover_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design="Negative"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Reject_Selected_Background);border-color:var(--sapButton_Reject_Selected_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design="Positive"][pressed]){background:var(--sapButton_Accept_Selected_Background);border-color:var(--sapButton_Accept_Selected_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Positive"][active]:not([disabled])){background:var(--sapButton_Accept_Active_Background);border-color:var(--sapButton_Accept_Active_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Positive"][pressed][active]:hover),:host([design="Positive"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Accept_Selected_Hover_Background);border-color:var(--sapButton_Accept_Selected_Hover_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Positive"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Accept_Selected_Background);border-color:var(--sapButton_Accept_Selected_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Attention"][pressed]){background:var(--sapButton_Attention_Selected_Background);border-color:var(--sapButton_Attention_Selected_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}:host([design="Attention"][active]:not([disabled])){background:var(--sapButton_Attention_Active_Background);border-color:var(--sapButton_Attention_Active_BorderColor);color:var(--sapButton_Attention_Active_TextColor)}:host([design="Attention"][pressed][active]:hover),:host([design="Attention"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Attention_Selected_Hover_Background);border-color:var(--sapButton_Attention_Selected_Hover_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}:host([design="Attention"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Attention_Selected_Background);border-color:var(--sapButton_Attention_Selected_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}
`;var l=function(n,e,o,s){var a=arguments.length,t=a<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,o,s);else for(var d=n.length-1;d>=0;d--)(c=n[d])&&(t=(a<3?c(t):a>3?c(e,o,t):c(e,o))||t);return a>3&&t&&Object.defineProperty(e,o,t),t};let r=class extends _{constructor(){super(...arguments),this.pressed=!1}_onclick(){this.pressed=!this.pressed,g()&&this.getDomRef().focus()}_onkeyup(e){if(b(e)){e.preventDefault();return}super._onkeyup(e)}};l([h({type:Boolean})],r.prototype,"pressed",void 0);r=l([B({tag:"ui5-toggle-button",template:f,styles:[_.styles,C]})],r);r.define();const R=r;export{R as T};
