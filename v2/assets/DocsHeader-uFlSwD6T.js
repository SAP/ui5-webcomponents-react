import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./chunk-NUUEMKO5-mStoiwSc.js";import{ap as y,aq as T,ai as C,ak as f}from"./index-DBhjLrsF.js";import{B as p}from"./Button-CN-iJYg4.js";import{M as B,a as v}from"./index-BBbw6PDx.js";import{c as x}from"./copy-Bps3bwPx.js";import"./index-DkpQr2NT.js";import{c as d}from"./clsx-B-dksMZM.js";import{r as b}from"./index-RYns6xqu.js";import{u as w}from"./utils-CmIE-JmY.js";import{G as S}from"./GitHub-Mark-DGRwmqGf.js";import{a as h}from"./CommandsAndQueries-DItTWv4Q.js";import{T as _}from"./TableOfContent-DB04WaQs.js";import{T as k}from"./index-3bMxEjh0.js";import{F as N,c as D}from"./index-DwKqG2yd.js";import{L as j}from"./index-Ci7P8uUK.js";import{L as a}from"./index-CHC2M3KR.js";import{B as u}from"./index-BV-iiYx7.js";import{T as I}from"./index-Nq8WqOTU.js";const L="_infoTable_2qh1m_1",F="_copyBtn_2qh1m_20",G="_hoverTr_2qh1m_27",n={infoTable:L,copyBtn:F,hoverTr:G},q=()=>{const s=b.useContext(f).componentStories().at(0).id.startsWith("charts-"),o="https://github.com/SAP/ui5-webcomponents-react",r=`@ui5/webcomponents-react${s?"-charts":""}`;return t.jsxs(t.Fragment,{children:[t.jsx(j,{href:`https://www.npmjs.com/package/${r}`,children:t.jsx("img",{alt:"npm badge",src:`https://badgen.net/npm/v/${r}?icon=npm&label=&color=blue`})}),"   ",t.jsx(j,{title:"View On GitHub",href:o,children:t.jsx(S,{})})]})},A=({since:e,subComponents:s,mergeSubComponents:o})=>{const c=b.useContext(f).componentStories().at(0).kind.split("/"),g=c[c.length-1].replace("(experimental)","").trim(),l=w(g.replace("V2","")),m=o?[...s??[],...l??[]]:s??l,i=typeof ClipboardItem<"u";return t.jsx("table",{className:n.infoTable,children:t.jsxs("tbody",{children:[t.jsxs("tr",{className:n.hoverTr,children:[t.jsx("th",{children:t.jsx(a,{children:"Usage"})}),t.jsxs("td",{"data-import-cell":i,children:[t.jsx(h,{}),i&&t.jsx(u,{design:p.Transparent,className:d("ui5-content-density-compact",n.copyBtn),onClick:void 0,icon:x,tooltip:"copy"})]})]}),e&&t.jsxs("tr",{children:[t.jsx("th",{children:t.jsx(a,{children:"Available since"})}),t.jsx("td",{children:t.jsx(I,{children:e})})]}),!!m.length&&t.jsxs("tr",{className:n.hoverTr,children:[t.jsx("th",{children:t.jsx(a,{children:"Subcomponents"})}),t.jsxs("td",{"data-import-cell":i,children:[t.jsx(h,{moduleNames:m}),i&&t.jsx(u,{design:p.Transparent,className:d("ui5-content-density-compact",n.copyBtn),onClick:void 0,icon:x,tooltip:"copy"})]})]})]})})},et=({since:e,subComponents:s,mergeSubComponents:o,isChart:r})=>t.jsxs(k,{children:[t.jsxs(N,{alignItems:D.Center,children:[t.jsx(y,{}),t.jsx("span",{style:{flexGrow:1}}),t.jsx(q,{})]}),t.jsx(T,{}),t.jsx(A,{since:e,subComponents:s,mergeSubComponents:o}),t.jsx(_,{}),t.jsx(C,{}),r&&t.jsxs(t.Fragment,{children:[t.jsx(B,{hideCloseButton:!0,design:v.Critical,children:"Charts only offer limited accessibility support with only basic built-in features, so it’s essential to ensure your implementation meets the accessibility standards of your application."}),t.jsx("br",{}),t.jsx("br",{})]})]});export{et as D};
