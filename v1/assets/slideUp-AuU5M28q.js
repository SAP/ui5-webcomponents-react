import{a as m,d as f}from"./animate-DFaKyidW.js";const x=o=>{let a,i,d,p,s,g,r,y,l,n,h,B;const T=m({beforeStart:()=>{o.style.display="block",a=getComputedStyle(o),i=parseFloat(a.paddingTop),d=parseFloat(a.paddingBottom),p=parseFloat(a.marginTop),s=parseFloat(a.marginBottom),g=parseFloat(a.height),r=o.style.overflow,y=o.style.paddingTop,l=o.style.paddingBottom,n=o.style.marginTop,h=o.style.marginBottom,B=o.style.height,o.style.overflow="hidden",o.style.paddingTop="0",o.style.paddingBottom="0",o.style.marginTop="0",o.style.marginBottom="0",o.style.height="0"},duration:f,element:o,advance:t=>{o.style.display="block",o.style.paddingTop=`${i*t}px`,o.style.paddingBottom=`${d*t}px`,o.style.marginTop=`${p*t}px`,o.style.marginBottom=`${s*t}px`,o.style.height=`${g*t}px`}});return T.promise().then(()=>{o.style.overflow=r,o.style.paddingTop=y,o.style.paddingBottom=l,o.style.marginTop=n,o.style.marginBottom=h,o.style.height=B}),T},v=o=>{let a,i,d,p,s,g,r,y,l,n,h,B;const T=m({beforeStart:()=>{const t=o;a=getComputedStyle(t),i=parseFloat(a.paddingTop),d=parseFloat(a.paddingBottom),p=parseFloat(a.marginTop),s=parseFloat(a.marginBottom),g=parseFloat(a.height),r=t.style.overflow,y=t.style.paddingTop,l=t.style.paddingBottom,n=t.style.marginTop,h=t.style.marginBottom,B=t.style.height,t.style.overflow="hidden"},duration:f,element:o,advance:t=>{o.style.paddingTop=`${i-i*t}px`,o.style.paddingBottom=`${d-d*t}px`,o.style.marginTop=`${p-p*t}px`,o.style.marginBottom=`${s-s*t}px`,o.style.height=`${g-g*t}px`}});return T.promise().then(t=>{t instanceof Error||(o.style.overflow=r,o.style.paddingTop=y,o.style.paddingBottom=l,o.style.marginTop=n,o.style.marginBottom=h,o.style.height=B,o.style.display="none")}),T};export{x as a,v as s};
