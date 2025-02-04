import{j as t}from"./jsx-runtime-CLpGMVip.js";import"./DocsRenderer-CFRXHY34-7flfUGXn.js";import{f as L,h as S,D as N,e as g}from"./index-ZHsH_5ZF.js";import{B as d}from"./Button-C6xPwCPp.js";import{M as v,a as k}from"./index-D-wFFKPJ.js";import{c as h}from"./copy-BecmeJfP.js";import"./index-CW3wKhCl.js";import{c as j}from"./clsx-B-dksMZM.js";import{r as y}from"./index-D23YZj_x.js";import{u as D}from"./utils-CrkjJOCn.js";import{G as I}from"./GitHub-Mark-DQxIZPp2.js";import{a as u}from"./CommandsAndQueries-C0t-lKcY.js";import{T as F}from"./TableOfContent-QtRkCFei.js";import{T as G}from"./index-bbXpdfcc.js";import{F as M,c as R}from"./index-BMK-kPJD.js";import{L as c}from"./index-Dwb1LPrJ.js";import{L as b}from"./index-BM4FQHBF.js";import{B as f}from"./index-DWbw-aO0.js";import{T as A}from"./index-Cimm6LhF.js";const H="_infoTable_1toma_1",E="_copyBtn_1toma_20",O="_hoverTr_1toma_27",$="_titleRow_1toma_39",P="_experimentalLabel_1toma_47",e={infoTable:H,copyBtn:E,hoverTr:O,titleRow:$,experimentalLabel:P},U=()=>{const s=y.useContext(g).componentStories().at(0).id.startsWith("charts-"),n="https://github.com/SAP/ui5-webcomponents-react",r=`@ui5/webcomponents-react${s?"-charts":""}`;return t.jsxs(t.Fragment,{children:[t.jsx(b,{href:`https://www.npmjs.com/package/${r}`,children:t.jsx("img",{alt:"npm badge",src:`https://badgen.net/npm/v/${r}?icon=npm&label=&color=blue`})}),"   ",t.jsx(b,{title:"View On GitHub",href:n,children:t.jsx(I,{})})]})},V=({since:o,subComponents:s,mergeSubComponents:n})=>{const a=y.useContext(g).componentStories().at(0).kind.split("/"),T=a[a.length-1].replace("(experimental)","").trim(),m=D(T.replace("V2","")),p=n?[...s??[],...m??[]]:s??m,i=typeof ClipboardItem<"u",x=async C=>{const l=C.currentTarget.parentElement.querySelector("[data-import]");if(i&&l){const w=new Blob([l.outerHTML],{type:"text/html"}),_=new Blob([l.outerText],{type:"text/plain"}),B=new ClipboardItem({"text/html":w,"text/plain":_});await navigator.clipboard.write([B])}};return t.jsx("table",{className:e.infoTable,children:t.jsxs("tbody",{children:[t.jsxs("tr",{className:e.hoverTr,children:[t.jsx("th",{children:t.jsx(c,{children:"Usage"})}),t.jsxs("td",{"data-import-cell":i,children:[t.jsx(u,{}),i&&t.jsx(f,{design:d.Transparent,className:j("ui5-content-density-compact",e.copyBtn),onClick:x,icon:h,tooltip:"copy"})]})]}),o&&t.jsxs("tr",{children:[t.jsx("th",{children:t.jsx(c,{children:"Available since"})}),t.jsx("td",{children:t.jsx(A,{children:o})})]}),!!p.length&&t.jsxs("tr",{className:e.hoverTr,children:[t.jsx("th",{children:t.jsx(c,{children:"Subcomponents"})}),t.jsxs("td",{"data-import-cell":i,children:[t.jsx(u,{moduleNames:p}),i&&t.jsx(f,{design:d.Transparent,className:j("ui5-content-density-compact",e.copyBtn),onClick:x,icon:h,tooltip:"copy"})]})]})]})})},mt=({since:o,subComponents:s,mergeSubComponents:n,isChart:r,experimental:a})=>t.jsxs(G,{children:[t.jsxs(M,{alignItems:R.Center,className:e.titleRow,children:[t.jsx(L,{}),a&&t.jsx(c,{className:e.experimentalLabel,children:"experimental"}),t.jsx("span",{style:{flexGrow:1}}),t.jsx(U,{})]}),t.jsx(S,{}),t.jsx(V,{since:o,subComponents:s,mergeSubComponents:n}),t.jsx(F,{}),t.jsx(N,{}),r&&t.jsxs(t.Fragment,{children:[t.jsx(v,{hideCloseButton:!0,design:k.Critical,children:"Charts only offer limited accessibility support with only basic built-in features, so it’s essential to ensure your implementation meets the accessibility standards of your application."}),t.jsx("br",{}),t.jsx("br",{})]})]});export{mt as D};
