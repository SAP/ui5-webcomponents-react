import{j as t}from"./jsx-runtime-D6fbYt3N.js";import"./chunk-NUUEMKO5-CitV1qJ4.js";import{av as L,aw as S,ai as v,aq as g}from"./index-otl4KiOt.js";import{B as d}from"./Button-B25Pr19o.js";import{M as N,a as k}from"./index-Dv5mXzg4.js";import{c as h}from"./copy-B6jpU8Sl.js";import"./index-Crhoz4AB.js";import{c as j}from"./clsx-B-dksMZM.js";import{r as y}from"./index-DysCNOs_.js";import{u as I}from"./utils-B0qJiBJN.js";import{G as D}from"./GitHub-Mark-DLtQKbjK.js";import{a as u}from"./CommandsAndQueries-vuyALbb0.js";import{T as F}from"./TableOfContent-DRym89KV.js";import{T as G}from"./index-BAgCn3pd.js";import{F as M,c as R}from"./index-gSd2kvlA.js";import{L as c}from"./index-CaG1LRe9.js";import{L as b}from"./index-BihYjSJH.js";import{B as f}from"./index-DczEHKsk.js";import{T as A}from"./index-B56Kl_es.js";const H="_infoTable_1toma_1",E="_copyBtn_1toma_20",O="_hoverTr_1toma_27",$="_titleRow_1toma_39",q="_experimentalLabel_1toma_47",e={infoTable:H,copyBtn:E,hoverTr:O,titleRow:$,experimentalLabel:q},P=()=>{const s=y.useContext(g).componentStories().at(0).id.startsWith("charts-"),n="https://github.com/SAP/ui5-webcomponents-react",r=`@ui5/webcomponents-react${s?"-charts":""}`;return t.jsxs(t.Fragment,{children:[t.jsx(b,{href:`https://www.npmjs.com/package/${r}`,children:t.jsx("img",{alt:"npm badge",src:`https://badgen.net/npm/v/${r}?icon=npm&label=&color=blue`})}),"   ",t.jsx(b,{title:"View On GitHub",href:n,children:t.jsx(D,{})})]})},U=({since:o,subComponents:s,mergeSubComponents:n})=>{const i=y.useContext(g).componentStories().at(0).kind.split("/"),T=i[i.length-1].replace("(experimental)","").trim(),m=I(T.replace("V2","")),p=n?[...s??[],...m??[]]:s??m,a=typeof ClipboardItem<"u",x=async C=>{const l=C.currentTarget.parentElement.querySelector("[data-import]");if(a&&l){const w=new Blob([l.outerHTML],{type:"text/html"}),_=new Blob([l.outerText],{type:"text/plain"}),B=new ClipboardItem({"text/html":w,"text/plain":_});await navigator.clipboard.write([B])}};return t.jsx("table",{className:e.infoTable,children:t.jsxs("tbody",{children:[t.jsxs("tr",{className:e.hoverTr,children:[t.jsx("th",{children:t.jsx(c,{children:"Usage"})}),t.jsxs("td",{"data-import-cell":a,children:[t.jsx(u,{}),a&&t.jsx(f,{design:d.Transparent,className:j("ui5-content-density-compact",e.copyBtn),onClick:x,icon:h,tooltip:"copy"})]})]}),o&&t.jsxs("tr",{children:[t.jsx("th",{children:t.jsx(c,{children:"Available since"})}),t.jsx("td",{children:t.jsx(A,{children:o})})]}),!!p.length&&t.jsxs("tr",{className:e.hoverTr,children:[t.jsx("th",{children:t.jsx(c,{children:"Subcomponents"})}),t.jsxs("td",{"data-import-cell":a,children:[t.jsx(u,{moduleNames:p}),a&&t.jsx(f,{design:d.Transparent,className:j("ui5-content-density-compact",e.copyBtn),onClick:x,icon:h,tooltip:"copy"})]})]})]})})},mt=({since:o,subComponents:s,mergeSubComponents:n,isChart:r,experimental:i})=>t.jsxs(G,{children:[t.jsxs(M,{alignItems:R.Center,className:e.titleRow,children:[t.jsx(L,{}),i&&t.jsx(c,{className:e.experimentalLabel,children:"experimental"}),t.jsx("span",{style:{flexGrow:1}}),t.jsx(P,{})]}),t.jsx(S,{}),t.jsx(U,{since:o,subComponents:s,mergeSubComponents:n}),t.jsx(F,{}),t.jsx(v,{}),r&&t.jsxs(t.Fragment,{children:[t.jsx(N,{hideCloseButton:!0,design:k.Critical,children:"Charts only offer limited accessibility support with only basic built-in features, so it’s essential to ensure your implementation meets the accessibility standards of your application."}),t.jsx("br",{}),t.jsx("br",{})]})]});export{mt as D};
