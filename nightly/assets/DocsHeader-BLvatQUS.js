import{j as t}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import"./chunk-HLWAVYOI-tol9v0Vp.js";import{T as S,l as _,D as N,f as T}from"./index-DuT2KoE2.js";import{c as d}from"./copy-DLiPdfEP.js";import{B as h}from"./Button-Bn9nox5u.js";import{F as k,c as I}from"./index-PGreZEtb.js";import{T as L}from"./index-6v2Oy41S.js";import{c as j}from"./clsx-B-dksMZM.js";import{r as g}from"./index-ClU-Tc1p.js";import{u as D}from"./utils-QdjPpgjN.js";import{G}from"./GitHub-Mark-CULGv64g.js";import{a as u}from"./CommandsAndQueries-CoRcnZzs.js";import{T as q}from"./TableOfContent-D7AfnOqM.js";import{L as b}from"./index-DQHUBJQm.js";import{L as i}from"./index-cb_1-UsB.js";import{B as f}from"./index-BhDaFkLK.js";import{T as A}from"./index-MkKF04B_.js";const F="_infoTable_2qh1m_1",H="_copyBtn_2qh1m_20",E="_hoverTr_2qh1m_27",r={infoTable:F,copyBtn:H,hoverTr:E},O=()=>{const e=g.useContext(T).componentStories().at(0).id.startsWith("charts-"),s="https://github.com/SAP/ui5-webcomponents-react",c=`@ui5/webcomponents-react${e?"-charts":""}`;return t.jsxs(t.Fragment,{children:[t.jsx(b,{href:`https://www.npmjs.com/package/${c}`,children:t.jsx("img",{alt:"npm badge",src:`https://badgen.net/npm/v/${c}?icon=npm&label=&color=blue`})}),"   ",t.jsx(b,{title:"View On GitHub",href:s,children:t.jsx(G,{})})]})},$=({since:o,subComponents:e,mergeSubComponents:s})=>{const l=g.useContext(T).componentStories().at(0).kind.split("/"),y=l[l.length-1].replace("(experimental)","").trim(),m=D(y.replace("V2","")),p=s?[...e??[],...m??[]]:e??m,n=typeof ClipboardItem<"u",x=async C=>{const a=C.currentTarget.parentElement.querySelector("[data-import]");if(n&&a){const w=new Blob([a.outerHTML],{type:"text/html"}),B=new Blob([a.outerText],{type:"text/plain"}),v=new ClipboardItem({"text/html":w,"text/plain":B});await navigator.clipboard.write([v])}};return t.jsx("table",{className:r.infoTable,children:t.jsxs("tbody",{children:[t.jsxs("tr",{className:r.hoverTr,children:[t.jsx("th",{children:t.jsx(i,{children:"Usage"})}),t.jsxs("td",{"data-import-cell":n,children:[t.jsx(u,{}),n&&t.jsx(f,{design:h.Transparent,className:j("ui5-content-density-compact",r.copyBtn),onClick:x,icon:d,tooltip:"copy"})]})]}),o&&t.jsxs("tr",{children:[t.jsx("th",{children:t.jsx(i,{children:"Available since"})}),t.jsx("td",{children:t.jsx(A,{children:o})})]}),!!p.length&&t.jsxs("tr",{className:r.hoverTr,children:[t.jsx("th",{children:t.jsx(i,{children:"Subcomponents"})}),t.jsxs("td",{"data-import-cell":n,children:[t.jsx(u,{moduleNames:p}),n&&t.jsx(f,{design:h.Transparent,className:j("ui5-content-density-compact",r.copyBtn),onClick:x,icon:d,tooltip:"copy"})]})]})]})})},nt=({since:o,subComponents:e,mergeSubComponents:s})=>t.jsxs(L,{children:[t.jsxs(k,{alignItems:I.Center,children:[t.jsx(S,{}),t.jsx("span",{style:{flexGrow:1}}),t.jsx(O,{})]}),t.jsx(_,{}),t.jsx($,{since:o,subComponents:e,mergeSubComponents:s}),t.jsx(q,{}),t.jsx(N,{})]});export{nt as D};
