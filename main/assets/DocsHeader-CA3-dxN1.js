import{j as t}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import"./chunk-HLWAVYOI-DfaEm5jZ.js";import{T as S,l as _,D as N,f as T}from"./index-CBIwcddH.js";import{c as d}from"./copy-DRlh-Vu-.js";import{B as h}from"./Button-C_Cuoo5O.js";import{F as k,c as I}from"./index-CLdwWUG3.js";import{T as L}from"./index-DNgsHEOA.js";import{c as j}from"./clsx-B-dksMZM.js";import{r as g}from"./index-DEe9W-hO.js";import{u as D}from"./utils-BbxDycPn.js";import{G}from"./GitHub-Mark-W2HRRVtA.js";import{a as u}from"./ProjectTemplate-Cz3WZgkK.js";import{T as q}from"./TableOfContent-Ih9maikN.js";import{L as b}from"./index-CnepguqB.js";import{L as i}from"./index-rDrF4wjJ.js";import{B as f}from"./index-ESfUDnIX.js";import{T as A}from"./index-Dvs4Bux0.js";const F="_infoTable_2qh1m_1",H="_copyBtn_2qh1m_20",E="_hoverTr_2qh1m_27",r={infoTable:F,copyBtn:H,hoverTr:E},O=()=>{const e=g.useContext(T).componentStories().at(0).id.startsWith("charts-"),s="https://github.com/SAP/ui5-webcomponents-react",c=`@ui5/webcomponents-react${e?"-charts":""}`;return t.jsxs(t.Fragment,{children:[t.jsx(b,{href:`https://www.npmjs.com/package/${c}`,children:t.jsx("img",{alt:"npm badge",src:`https://badgen.net/npm/v/${c}?icon=npm&label=&color=blue`})}),"   ",t.jsx(b,{title:"View On GitHub",href:s,children:t.jsx(G,{})})]})},$=({since:o,subComponents:e,mergeSubComponents:s})=>{const l=g.useContext(T).componentStories().at(0).kind.split("/"),y=l[l.length-1].replace("(experimental)","").trim(),m=D(y.replace("V2","")),p=s?[...e??[],...m??[]]:e??m,n=typeof ClipboardItem<"u",x=async C=>{const a=C.currentTarget.parentElement.querySelector("[data-import]");if(n&&a){const w=new Blob([a.outerHTML],{type:"text/html"}),B=new Blob([a.outerText],{type:"text/plain"}),v=new ClipboardItem({"text/html":w,"text/plain":B});await navigator.clipboard.write([v])}};return t.jsx("table",{className:r.infoTable,children:t.jsxs("tbody",{children:[t.jsxs("tr",{className:r.hoverTr,children:[t.jsx("th",{children:t.jsx(i,{children:"Usage"})}),t.jsxs("td",{"data-import-cell":n,children:[t.jsx(u,{}),n&&t.jsx(f,{design:h.Transparent,className:j("ui5-content-density-compact",r.copyBtn),onClick:x,icon:d,tooltip:"copy"})]})]}),o&&t.jsxs("tr",{children:[t.jsx("th",{children:t.jsx(i,{children:"Available since"})}),t.jsx("td",{children:t.jsx(A,{children:o})})]}),!!p.length&&t.jsxs("tr",{className:r.hoverTr,children:[t.jsx("th",{children:t.jsx(i,{children:"Subcomponents"})}),t.jsxs("td",{"data-import-cell":n,children:[t.jsx(u,{moduleNames:p}),n&&t.jsx(f,{design:h.Transparent,className:j("ui5-content-density-compact",r.copyBtn),onClick:x,icon:d,tooltip:"copy"})]})]})]})})},nt=({since:o,subComponents:e,mergeSubComponents:s})=>t.jsxs(L,{children:[t.jsxs(k,{alignItems:I.Center,children:[t.jsx(S,{}),t.jsx("span",{style:{flexGrow:1}}),t.jsx(O,{})]}),t.jsx(_,{}),t.jsx($,{since:o,subComponents:e,mergeSubComponents:s}),t.jsx(q,{}),t.jsx(N,{})]});export{nt as D};
