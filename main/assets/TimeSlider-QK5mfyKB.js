import{h as u}from"./UI5Element-Y0uzLFOr.js";import{r as a}from"./Icons-WRZ8WMWs.js";const l="time-entry-request",i="M416 272q0 16-16 16H224V144q0-16 16-16t16 16v112h144q16 0 16 16zM256 0q53 0 99.5 20T437 75t55 81.5 20 99.5q0 49-17.5 92.5T447 426t-71 56-88 28v-32q40-6 75.5-25.5t61-49T465 336t15-80q0-46-17.5-87t-48-71.5-71.5-48T256 32q-38 0-72.5 12T121 77.5t-49 51T41 192H8q11-41 34.5-76.5t56-61 72.5-40T256 0zM144 480q16 0 16 16 0 6-4.5 11t-11.5 5H16q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zm0-64q16 0 16 16 0 6-4.5 11t-11.5 5H16q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zm0-64q16 0 16 16 0 6-4.5 11t-11.5 5H16q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128z",c=!1,q="SAP-icons-v4",T="@ui5/webcomponents-icons";a(l,{pathData:i,ltr:c,collection:q,packageName:T});const H="time-entry-request",m="M262 461q11 0 18.5 7t7.5 18-7.5 18.5T262 512h-6q-53 0-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0q44 0 84 14t73 39 56.5 59.5T503 188q2 5 2 6.5v3.5q0 11-7.5 18.5T479 224q-8 0-15.5-5.5T454 205q-9-34-27.5-62.5t-45-48.5T323 62.5 256 51q-42 0-79.5 16T111 111t-44 65.5T51 256t16 79.5 44 65.5 65.5 44 79.5 16h6zm0-365q11 0 18.5 7.5T288 122v131q0 8-5 15l-77 105q-8 11-20 11-11 0-18.5-7.5T160 358q0-7 5-15l72-98V122q0-11 7-18.5t18-7.5zm224 192q11 0 18.5 7.5T512 314t-7.5 18-18.5 7H378q-11 0-18.5-7t-7.5-18 7.5-18.5T378 288h108zm0 86q11 0 18.5 7.5T512 400t-7.5 18.5T486 426H378q-11 0-18.5-7.5T352 400t7.5-18.5T378 374h108zm0 87q11 0 18.5 7t7.5 18-7.5 18.5T486 512H378q-11 0-18.5-7.5T352 486t7.5-18 18.5-7h108z",f=!1,h="SAP-icons-v5",g="@ui5/webcomponents-icons";a(H,{pathData:m,ltr:f,collection:h,packageName:g});u();const n=(e,t=1)=>{const o=[];for(let r=0;r<e;r++)if(r%t===0){let s=r.toString();s.length===1&&(s=`0${s}`),o.push(s)}return o},z=(e,t)=>{let o=[];if(e.isTwelveHoursFormat?o=n(t||12,1):o=n(t||24,1),e.minHour===1)for(let r=0;r<o.length;r++){const s=parseInt(o[r])+1;s.toString().length===1?o[r]=`0${s.toString()}`:o[r]=s.toString()}return o},F=(e,t)=>n(e||60,t),w=(e,t)=>n(e||60,t),S=e=>{const t={minHour:0,maxHour:0,isTwelveHoursFormat:!1};return e==="hour0_23"?(t.minHour=0,t.maxHour=23,t.isTwelveHoursFormat=!1):e==="hour1_24"?(t.minHour=1,t.maxHour=24,t.isTwelveHoursFormat=!1):e==="hour0_11"?(t.minHour=0,t.maxHour=11,t.isTwelveHoursFormat=!0):e==="hour1_12"&&(t.minHour=1,t.maxHour=12,t.isTwelveHoursFormat=!0),t},x=(e,t)=>{const o=[!1,!1,!1,!1];for(let r=0;r<e.length;r++)t.maxHour!==0&&(o[0]=!0),t.maxHour!==0&&t.isTwelveHoursFormat&&(o[0]=!0),e[r].type==="minute"&&(o[1]=!0),e[r].type==="second"&&(o[2]=!0),e[r].type==="amPmMarker"&&(o[3]=!0);return o};export{x as a,w as b,F as c,z as d,S as g};
//# sourceMappingURL=TimeSlider-QK5mfyKB.js.map
