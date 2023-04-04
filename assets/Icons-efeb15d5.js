import{g as R,k as N,l as _,d as u}from"./UI5Element-d1d93200.js";var r;(function(a){a[a.BACKSPACE=8]="BACKSPACE",a[a.TAB=9]="TAB",a[a.ENTER=13]="ENTER",a[a.SHIFT=16]="SHIFT",a[a.CONTROL=17]="CONTROL",a[a.ALT=18]="ALT",a[a.BREAK=19]="BREAK",a[a.CAPS_LOCK=20]="CAPS_LOCK",a[a.ESCAPE=27]="ESCAPE",a[a.SPACE=32]="SPACE",a[a.PAGE_UP=33]="PAGE_UP",a[a.PAGE_DOWN=34]="PAGE_DOWN",a[a.END=35]="END",a[a.HOME=36]="HOME",a[a.ARROW_LEFT=37]="ARROW_LEFT",a[a.ARROW_UP=38]="ARROW_UP",a[a.ARROW_RIGHT=39]="ARROW_RIGHT",a[a.ARROW_DOWN=40]="ARROW_DOWN",a[a.PRINT=44]="PRINT",a[a.INSERT=45]="INSERT",a[a.DELETE=46]="DELETE",a[a.DIGIT_0=48]="DIGIT_0",a[a.DIGIT_1=49]="DIGIT_1",a[a.DIGIT_2=50]="DIGIT_2",a[a.DIGIT_3=51]="DIGIT_3",a[a.DIGIT_4=52]="DIGIT_4",a[a.DIGIT_5=53]="DIGIT_5",a[a.DIGIT_6=54]="DIGIT_6",a[a.DIGIT_7=55]="DIGIT_7",a[a.DIGIT_8=56]="DIGIT_8",a[a.DIGIT_9=57]="DIGIT_9",a[a.A=65]="A",a[a.B=66]="B",a[a.C=67]="C",a[a.D=68]="D",a[a.E=69]="E",a[a.F=70]="F",a[a.G=71]="G",a[a.H=72]="H",a[a.I=73]="I",a[a.J=74]="J",a[a.K=75]="K",a[a.L=76]="L",a[a.M=77]="M",a[a.N=78]="N",a[a.O=79]="O",a[a.P=80]="P",a[a.Q=81]="Q",a[a.R=82]="R",a[a.S=83]="S",a[a.T=84]="T",a[a.U=85]="U",a[a.V=86]="V",a[a.W=87]="W",a[a.X=88]="X",a[a.Y=89]="Y",a[a.Z=90]="Z",a[a.WINDOWS=91]="WINDOWS",a[a.CONTEXT_MENU=93]="CONTEXT_MENU",a[a.TURN_OFF=94]="TURN_OFF",a[a.SLEEP=95]="SLEEP",a[a.NUMPAD_0=96]="NUMPAD_0",a[a.NUMPAD_1=97]="NUMPAD_1",a[a.NUMPAD_2=98]="NUMPAD_2",a[a.NUMPAD_3=99]="NUMPAD_3",a[a.NUMPAD_4=100]="NUMPAD_4",a[a.NUMPAD_5=101]="NUMPAD_5",a[a.NUMPAD_6=102]="NUMPAD_6",a[a.NUMPAD_7=103]="NUMPAD_7",a[a.NUMPAD_8=104]="NUMPAD_8",a[a.NUMPAD_9=105]="NUMPAD_9",a[a.NUMPAD_ASTERISK=106]="NUMPAD_ASTERISK",a[a.NUMPAD_PLUS=107]="NUMPAD_PLUS",a[a.NUMPAD_MINUS=109]="NUMPAD_MINUS",a[a.NUMPAD_COMMA=110]="NUMPAD_COMMA",a[a.NUMPAD_SLASH=111]="NUMPAD_SLASH",a[a.F1=112]="F1",a[a.F2=113]="F2",a[a.F3=114]="F3",a[a.F4=115]="F4",a[a.F5=116]="F5",a[a.F6=117]="F6",a[a.F7=118]="F7",a[a.F8=119]="F8",a[a.F9=120]="F9",a[a.F10=121]="F10",a[a.F11=122]="F11",a[a.F12=123]="F12",a[a.NUM_LOCK=144]="NUM_LOCK",a[a.SCROLL_LOCK=145]="SCROLL_LOCK",a[a.OPEN_BRACKET=186]="OPEN_BRACKET",a[a.PLUS=187]="PLUS",a[a.COMMA=188]="COMMA",a[a.SLASH=189]="SLASH",a[a.DOT=190]="DOT",a[a.PIPE=191]="PIPE",a[a.SEMICOLON=192]="SEMICOLON",a[a.MINUS=219]="MINUS",a[a.GREAT_ACCENT=220]="GREAT_ACCENT",a[a.EQUALS=221]="EQUALS",a[a.SINGLE_QUOTE=222]="SINGLE_QUOTE",a[a.BACKSLASH=226]="BACKSLASH"})(r||(r={}));const B=a=>(a.key?a.key==="Enter":a.keyCode===r.ENTER)&&!A(a),H=a=>(a.key?a.key==="Enter":a.keyCode===r.ENTER)&&s(a,!1,!1,!0),V=a=>(a.key?a.key==="Spacebar"||a.key===" ":a.keyCode===r.SPACE)&&!A(a),b=a=>(a.key?a.key==="Spacebar"||a.key===" ":a.keyCode===r.SPACE)&&s(a,!1,!1,!0),m=a=>(a.key?a.key==="Spacebar"||a.key===" ":a.keyCode===r.SPACE)&&s(a,!0,!1,!1),x=a=>(a.key?a.key==="ArrowLeft"||a.key==="Left":a.keyCode===r.ARROW_LEFT)&&!A(a),Q=a=>(a.key?a.key==="ArrowRight"||a.key==="Right":a.keyCode===r.ARROW_RIGHT)&&!A(a),$=a=>(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&!A(a),X=a=>(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&!A(a),j=a=>(a.key?a.key==="ArrowLeft"||a.key==="Left":a.keyCode===r.ARROW_LEFT)&&s(a,!0,!1,!1),J=a=>(a.key?a.key==="ArrowRight"||a.key==="Right":a.keyCode===r.ARROW_RIGHT)&&s(a,!0,!1,!1),Y=a=>(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&s(a,!0,!1,!1),Z=a=>(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&s(a,!0,!1,!1),z=a=>(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&s(a,!1,!1,!0),q=a=>(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&s(a,!1,!1,!0),n=a=>(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&s(a,!1,!0,!1),C=a=>(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&s(a,!1,!0,!1),d=a=>(a.key?a.key==="ArrowLeft"||a.key==="Left":a.keyCode===r.ARROW_LEFT)&&s(a,!1,!1,!0),K=a=>(a.key?a.key==="ArrowRight"||a.key==="Right":a.keyCode===r.ARROW_RIGHT)&&s(a,!1,!1,!0),v=a=>(a.key?a.key==="ArrowLeft"||a.key==="Left":a.keyCode===r.ARROW_LEFT)&&s(a,!0,!1,!0),e=a=>(a.key?a.key==="ArrowRight"||a.key==="Right":a.keyCode===r.ARROW_RIGHT)&&s(a,!0,!1,!0),aa=a=>(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&s(a,!0,!1,!0),ra=a=>(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&s(a,!0,!1,!0),ka=a=>(a.key?a.key==="Home":a.keyCode===r.HOME)&&!A(a),sa=a=>(a.key?a.key==="End":a.keyCode===r.END)&&!A(a),Aa=a=>(a.key?a.key==="Home":a.keyCode===r.HOME)&&s(a,!0,!1,!1),ca=a=>(a.key?a.key==="Home":a.keyCode===r.HOME)&&s(a,!1,!1,!0),ia=a=>(a.key?a.key==="End":a.keyCode===r.END)&&s(a,!0,!1,!1),fa=a=>(a.key?a.key==="End":a.keyCode===r.END)&&s(a,!1,!1,!0),Pa=a=>(a.key?a.key==="Escape"||a.key==="Esc":a.keyCode===r.ESCAPE)&&!A(a),la=a=>(a.key?a.key==="Tab":a.keyCode===r.TAB)&&!A(a),Da=a=>(a.key?a.key==="Tab":a.keyCode===r.TAB)&&s(a,!1,!1,!0),Ea=a=>(a.key?a.key==="Backspace":a.keyCode===r.BACKSPACE)&&!A(a),Sa=a=>(a.key?a.key==="Delete":a.keyCode===r.DELETE)&&!A(a),_a=a=>(a.key?a.key==="Delete":a.keyCode===r.DELETE)&&s(a,!1,!1,!0),ta=a=>(a.key?a.key==="Insert":a.keyCode===r.DELETE)&&s(a,!1,!1,!0),Ta=a=>(a.key?a.key==="Insert":a.keyCode===r.DELETE)&&s(a,!0,!1,!1),Ia=a=>(a.key?a.key==="PageUp":a.keyCode===r.PAGE_UP)&&!A(a),Ua=a=>(a.key?a.key==="PageDown":a.keyCode===r.PAGE_DOWN)&&!A(a),Ra=a=>(a.key?a.key==="PageUp":a.keyCode===r.PAGE_UP)&&s(a,!1,!1,!0),Na=a=>(a.key?a.key==="PageUp":a.keyCode===r.PAGE_UP)&&s(a,!1,!0,!1),ua=a=>(a.key?a.key==="PageDown":a.keyCode===r.PAGE_DOWN)&&s(a,!1,!1,!0),Oa=a=>(a.key?a.key==="PageDown":a.keyCode===r.PAGE_DOWN)&&s(a,!1,!0,!1),pa=a=>(a.key?a.key==="PageUp":a.keyCode===r.PAGE_UP)&&s(a,!0,!1,!0),ha=a=>(a.key?a.key==="PageDown":a.keyCode===r.PAGE_DOWN)&&s(a,!0,!1,!0),oa=a=>(a.key?a.key==="+":a.keyCode===r.PLUS)||a.keyCode===r.NUMPAD_PLUS&&!A(a),Ma=a=>(a.key?a.key==="-":a.keyCode===r.MINUS)||a.keyCode===r.NUMPAD_MINUS&&!A(a),wa=a=>a.key?O(a)||p(a):a.keyCode===r.F4&&!A(a)||a.keyCode===r.ARROW_DOWN&&s(a,!1,!0,!1),O=a=>a.key==="F4"&&!A(a),ga=a=>(a.key?a.key==="F4":a.keyCode===r.F4)&&s(a,!1,!1,!0),La=a=>(a.key?a.key==="F6":a.keyCode===r.F6)&&s(a,!1,!1,!1)||(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&s(a,!0,!0,!1),Fa=a=>(a.key?a.key==="F6":a.keyCode===r.F6)&&s(a,!1,!1,!0)||(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&s(a,!0,!0,!1),Wa=a=>(a.key?a.key==="F7":a.keyCode===r.F7)&&!A(a),p=a=>(a.key==="ArrowDown"||a.key==="Down"||a.key==="ArrowUp"||a.key==="Up")&&s(a,!1,!0,!1),Ga=a=>a.key==="Shift"||a.keyCode===r.SHIFT,ya=a=>(a.key==="A"||a.key==="a"||a.which===r.A)&&s(a,!0,!1,!1),Ba=a=>(a.key==="V"||a.key==="v"||a.which===r.V)&&s(a,!0,!1,!1),A=a=>a.shiftKey||a.altKey||t(a),t=a=>!!(a.metaKey||a.ctrlKey),s=(a,k,c,f)=>a.shiftKey===f&&a.altKey===c&&t(a)===k;var P;(function(a){a["SAP-icons"]="SAP-icons-v4",a.horizon="SAP-icons-v5",a["SAP-icons-TNT"]="tnt",a.BusinessSuiteInAppSymbols="business-suite"})(P||(P={}));const T=a=>P[a]?P[a]:a,h=new Map;var i;(function(a){a.SAPIconsV4="SAP-icons-v4",a.SAPIconsV5="SAP-icons-v5",a.SAPIconsTNTV2="tnt-v2",a.SAPIconsTNTV3="tnt-v3",a.SAPBSIconsV1="business-suite-v1",a.SAPBSIconsV2="business-suite-v2"})(i||(i={}));const o=a=>{const k=R(),c=h.get(k);return!a&&c?T(c):M(a)},M=a=>{const k=N();return a?a==="tnt"?k?i.SAPIconsTNTV2:i.SAPIconsTNTV3:a==="business-suite"?k?i.SAPBSIconsV1:i.SAPBSIconsV2:a:k?i.SAPIconsV4:i.SAPIconsV5},E=new Map,l=_("SVGIcons.registry",new Map),D=_("SVGIcons.promises",new Map),S="ICON_NOT_FOUND",Ha=(a,k)=>{E.set(a,k)},w=async a=>{if(!D.has(a)){if(!E.has(a))throw new Error(`No loader registered for the ${a} icons collection. Probably you forgot to import the "AllIcons.js" module for the respective package.`);const k=E.get(a);D.set(a,k(a))}return D.get(a)},g=a=>{Object.keys(a.data).forEach(k=>{const c=a.data[k];L(k,{pathData:c.path||c.paths,ltr:c.ltr,accData:c.acc,collection:a.collection,packageName:a.packageName})})},L=(a,k)=>{const c=`${k.collection}/${a}`;l.set(c,{pathData:k.pathData,ltr:k.ltr,accData:k.accData,packageName:k.packageName,customTemplate:k.customTemplate,viewBox:k.viewBox,collection:k.collection})},I=a=>{a.startsWith("sap-icon://")&&(a=a.replace("sap-icon://",""));let k;[a,k]=a.split("/").reverse(),a=a.replace("icon-",""),k&&(k=T(k)),k=o(k);const c=`${k}/${a}`;return{name:a,collection:k,registryKey:c}},F=a=>{const{registryKey:k}=I(a);return l.get(k)},W=async a=>{const{collection:k,registryKey:c}=I(a);let f=S;try{f=await w(k)}catch(U){console.error(U.message)}return f===S?f:(l.has(c)||g(f),l.get(c))},Va=async a=>{let k=F(a);if(k||(k=await W(a)),k&&k!==S&&k.accData)return(await u(k.packageName)).getText(k.accData)};export{ha as $,Z as A,Y as B,j as C,J as D,Ba as E,ta as F,b as G,Ea as H,Aa as I,ia as J,ya as K,_a as L,Ta as M,m as N,ca as O,fa as P,v as Q,e as R,n as S,C as T,Wa as U,Ra as V,aa as W,ua as X,ra as Y,O as Z,pa as _,Fa as a,H as a0,Na as a1,Oa as a2,ga as a3,oa as a4,Ma as a5,Ga as a6,B as b,V as c,Pa as d,Da as e,W as f,F as g,L as h,La as i,Va as j,la as k,wa as l,ka as m,sa as n,$ as o,X as p,x as q,Ha as r,Q as s,Ia as t,Ua as u,z as v,q as w,d as x,K as y,Sa as z};
//# sourceMappingURL=Icons-efeb15d5.js.map
