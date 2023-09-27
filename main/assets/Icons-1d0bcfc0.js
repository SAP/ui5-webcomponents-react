import{o as p,h as g,d as U,n as M}from"./UI5Element-fe43d284.js";var r;(function(a){a[a.BACKSPACE=8]="BACKSPACE",a[a.TAB=9]="TAB",a[a.ENTER=13]="ENTER",a[a.SHIFT=16]="SHIFT",a[a.CONTROL=17]="CONTROL",a[a.ALT=18]="ALT",a[a.BREAK=19]="BREAK",a[a.CAPS_LOCK=20]="CAPS_LOCK",a[a.ESCAPE=27]="ESCAPE",a[a.SPACE=32]="SPACE",a[a.PAGE_UP=33]="PAGE_UP",a[a.PAGE_DOWN=34]="PAGE_DOWN",a[a.END=35]="END",a[a.HOME=36]="HOME",a[a.ARROW_LEFT=37]="ARROW_LEFT",a[a.ARROW_UP=38]="ARROW_UP",a[a.ARROW_RIGHT=39]="ARROW_RIGHT",a[a.ARROW_DOWN=40]="ARROW_DOWN",a[a.PRINT=44]="PRINT",a[a.INSERT=45]="INSERT",a[a.DELETE=46]="DELETE",a[a.DIGIT_0=48]="DIGIT_0",a[a.DIGIT_1=49]="DIGIT_1",a[a.DIGIT_2=50]="DIGIT_2",a[a.DIGIT_3=51]="DIGIT_3",a[a.DIGIT_4=52]="DIGIT_4",a[a.DIGIT_5=53]="DIGIT_5",a[a.DIGIT_6=54]="DIGIT_6",a[a.DIGIT_7=55]="DIGIT_7",a[a.DIGIT_8=56]="DIGIT_8",a[a.DIGIT_9=57]="DIGIT_9",a[a.A=65]="A",a[a.B=66]="B",a[a.C=67]="C",a[a.D=68]="D",a[a.E=69]="E",a[a.F=70]="F",a[a.G=71]="G",a[a.H=72]="H",a[a.I=73]="I",a[a.J=74]="J",a[a.K=75]="K",a[a.L=76]="L",a[a.M=77]="M",a[a.N=78]="N",a[a.O=79]="O",a[a.P=80]="P",a[a.Q=81]="Q",a[a.R=82]="R",a[a.S=83]="S",a[a.T=84]="T",a[a.U=85]="U",a[a.V=86]="V",a[a.W=87]="W",a[a.X=88]="X",a[a.Y=89]="Y",a[a.Z=90]="Z",a[a.WINDOWS=91]="WINDOWS",a[a.CONTEXT_MENU=93]="CONTEXT_MENU",a[a.TURN_OFF=94]="TURN_OFF",a[a.SLEEP=95]="SLEEP",a[a.NUMPAD_0=96]="NUMPAD_0",a[a.NUMPAD_1=97]="NUMPAD_1",a[a.NUMPAD_2=98]="NUMPAD_2",a[a.NUMPAD_3=99]="NUMPAD_3",a[a.NUMPAD_4=100]="NUMPAD_4",a[a.NUMPAD_5=101]="NUMPAD_5",a[a.NUMPAD_6=102]="NUMPAD_6",a[a.NUMPAD_7=103]="NUMPAD_7",a[a.NUMPAD_8=104]="NUMPAD_8",a[a.NUMPAD_9=105]="NUMPAD_9",a[a.NUMPAD_ASTERISK=106]="NUMPAD_ASTERISK",a[a.NUMPAD_PLUS=107]="NUMPAD_PLUS",a[a.NUMPAD_MINUS=109]="NUMPAD_MINUS",a[a.NUMPAD_COMMA=110]="NUMPAD_COMMA",a[a.NUMPAD_SLASH=111]="NUMPAD_SLASH",a[a.F1=112]="F1",a[a.F2=113]="F2",a[a.F3=114]="F3",a[a.F4=115]="F4",a[a.F5=116]="F5",a[a.F6=117]="F6",a[a.F7=118]="F7",a[a.F8=119]="F8",a[a.F9=120]="F9",a[a.F10=121]="F10",a[a.F11=122]="F11",a[a.F12=123]="F12",a[a.NUM_LOCK=144]="NUM_LOCK",a[a.SCROLL_LOCK=145]="SCROLL_LOCK",a[a.COLON=186]="COLON",a[a.PLUS=187]="PLUS",a[a.COMMA=188]="COMMA",a[a.SLASH=189]="SLASH",a[a.DOT=190]="DOT",a[a.PIPE=191]="PIPE",a[a.SEMICOLON=192]="SEMICOLON",a[a.MINUS=219]="MINUS",a[a.GREAT_ACCENT=220]="GREAT_ACCENT",a[a.EQUALS=221]="EQUALS",a[a.SINGLE_QUOTE=222]="SINGLE_QUOTE",a[a.BACKSLASH=226]="BACKSLASH"})(r||(r={}));const Q=a=>(a.key?a.key==="Enter":a.keyCode===r.ENTER)&&!c(a),z=a=>(a.key?a.key==="Enter":a.keyCode===r.ENTER)&&s(a,!1,!1,!0),$=a=>(a.key?a.key==="Spacebar"||a.key===" ":a.keyCode===r.SPACE)&&!c(a),n=a=>(a.key?a.key==="Spacebar"||a.key===" ":a.keyCode===r.SPACE)&&s(a,!1,!1,!0),X=a=>(a.key?a.key==="Spacebar"||a.key===" ":a.keyCode===r.SPACE)&&s(a,!0,!1,!1),Y=a=>(a.key?a.key==="ArrowLeft"||a.key==="Left":a.keyCode===r.ARROW_LEFT)&&!c(a),j=a=>(a.key?a.key==="ArrowRight"||a.key==="Right":a.keyCode===r.ARROW_RIGHT)&&!c(a),J=a=>(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&!c(a),Z=a=>(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&!c(a),q=a=>(a.key?a.key==="ArrowLeft"||a.key==="Left":a.keyCode===r.ARROW_LEFT)&&s(a,!0,!1,!1),C=a=>(a.key?a.key==="ArrowRight"||a.key==="Right":a.keyCode===r.ARROW_RIGHT)&&s(a,!0,!1,!1),d=a=>(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&s(a,!0,!1,!1),K=a=>(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&s(a,!0,!1,!1),v=a=>(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&s(a,!1,!1,!0),e=a=>(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&s(a,!1,!1,!0),aa=a=>(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&s(a,!1,!0,!1),ra=a=>(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&s(a,!1,!0,!1),ka=a=>(a.key?a.key==="ArrowLeft"||a.key==="Left":a.keyCode===r.ARROW_LEFT)&&s(a,!1,!1,!0),sa=a=>(a.key?a.key==="ArrowRight"||a.key==="Right":a.keyCode===r.ARROW_RIGHT)&&s(a,!1,!1,!0),ca=a=>(a.key?a.key==="ArrowLeft"||a.key==="Left":a.keyCode===r.ARROW_LEFT)&&s(a,!0,!1,!0),Aa=a=>(a.key?a.key==="ArrowRight"||a.key==="Right":a.keyCode===r.ARROW_RIGHT)&&s(a,!0,!1,!0),ia=a=>(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&s(a,!0,!1,!0),fa=a=>(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&s(a,!0,!1,!0),la=a=>(a.key?a.key==="Home":a.keyCode===r.HOME)&&!c(a),Pa=a=>(a.key?a.key==="End":a.keyCode===r.END)&&!c(a),Da=a=>(a.key?a.key==="Home":a.keyCode===r.HOME)&&s(a,!0,!1,!1),ta=a=>(a.key?a.key==="Home":a.keyCode===r.HOME)&&s(a,!1,!1,!0),_a=a=>(a.key?a.key==="End":a.keyCode===r.END)&&s(a,!0,!1,!1),Sa=a=>(a.key?a.key==="End":a.keyCode===r.END)&&s(a,!1,!1,!0),Ea=a=>(a.key?a.key==="Escape"||a.key==="Esc":a.keyCode===r.ESCAPE)&&!c(a),Ia=a=>(a.key?a.key==="Tab":a.keyCode===r.TAB)&&!c(a),Ta=a=>(a.key?a.key==="Tab":a.keyCode===r.TAB)&&s(a,!1,!1,!0),oa=a=>(a.key?a.key==="Backspace":a.keyCode===r.BACKSPACE)&&!c(a),Ua=a=>(a.key?a.key==="Delete":a.keyCode===r.DELETE)&&!c(a),Ra=a=>(a.key?a.key==="Delete":a.keyCode===r.DELETE)&&s(a,!1,!1,!0),Oa=a=>(a.key?a.key==="Insert":a.keyCode===r.DELETE)&&s(a,!1,!1,!0),Na=a=>(a.key?a.key==="Insert":a.keyCode===r.DELETE)&&s(a,!0,!1,!1),ua=a=>(a.key?a.key==="PageUp":a.keyCode===r.PAGE_UP)&&!c(a),ha=a=>(a.key?a.key==="PageDown":a.keyCode===r.PAGE_DOWN)&&!c(a),pa=a=>(a.key?a.key==="PageUp":a.keyCode===r.PAGE_UP)&&s(a,!1,!1,!0),ga=a=>(a.key?a.key==="PageUp":a.keyCode===r.PAGE_UP)&&s(a,!1,!0,!1),Ma=a=>(a.key?a.key==="PageDown":a.keyCode===r.PAGE_DOWN)&&s(a,!1,!1,!0),wa=a=>(a.key?a.key==="PageDown":a.keyCode===r.PAGE_DOWN)&&s(a,!1,!0,!1),La=a=>(a.key?a.key==="PageUp":a.keyCode===r.PAGE_UP)&&s(a,!0,!1,!0),Fa=a=>(a.key?a.key==="PageDown":a.keyCode===r.PAGE_DOWN)&&s(a,!0,!1,!0),Wa=a=>(a.key?a.key==="+":a.keyCode===r.PLUS)||a.keyCode===r.NUMPAD_PLUS&&!c(a),Ga=a=>(a.key?a.key==="-":a.keyCode===r.MINUS)||a.keyCode===r.NUMPAD_MINUS&&!c(a),ya=a=>a.key?w(a)||L(a):a.keyCode===r.F4&&!c(a)||a.keyCode===r.ARROW_DOWN&&s(a,!1,!0,!1),w=a=>a.key==="F4"&&!c(a),Ha=a=>(a.key?a.key==="F4":a.keyCode===r.F4)&&s(a,!1,!1,!0),Ba=a=>(a.key?a.key==="F6":a.keyCode===r.F6)&&s(a,!1,!1,!1)||(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&s(a,!0,!0,!1),Va=a=>(a.key?a.key==="F6":a.keyCode===r.F6)&&s(a,!1,!1,!0)||(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&s(a,!0,!0,!1),ba=a=>(a.key?a.key==="F7":a.keyCode===r.F7)&&!c(a),L=a=>(a.key==="ArrowDown"||a.key==="Down"||a.key==="ArrowUp"||a.key==="Up")&&s(a,!1,!0,!1),ma=a=>a.key==="Shift"||a.keyCode===r.SHIFT,xa=a=>(a.key==="A"||a.key==="a"||a.which===r.A)&&s(a,!0,!1,!1),Qa=a=>(a.key==="A"||a.key==="a"||a.which===r.A)&&s(a,!1,!1,!1),za=a=>(a.key==="P"||a.key==="p"||a.which===r.P)&&s(a,!1,!1,!1),c=a=>a.shiftKey||a.altKey||R(a),R=a=>!!(a.metaKey||a.ctrlKey),s=(a,k,A,f)=>a.shiftKey===f&&a.altKey===A&&R(a)===k,$a=a=>(a.key?"0123456789".indexOf(a.key)!==-1:a.keyCode>=r.DIGIT_0&&a.keyCode<=r.DIGIT_9)&&s(a,!1,!1,!1),na=a=>(a.key?a.key===":":a.keyCode===r.COLON)&&s(a,!1,!1,!0);var D;(function(a){a["SAP-icons"]="SAP-icons-v4",a.horizon="SAP-icons-v5",a["SAP-icons-TNT"]="tnt",a.BusinessSuiteInAppSymbols="business-suite"})(D||(D={}));const O=a=>D[a]?D[a]:a;var l;(function(a){a.SAPIconsV4="SAP-icons-v4",a.SAPIconsV5="SAP-icons-v5",a.SAPIconsTNTV2="tnt-v2",a.SAPIconsTNTV3="tnt-v3",a.SAPBSIconsV1="business-suite-v1",a.SAPBSIconsV2="business-suite-v2"})(l||(l={}));const i=new Map;i.set("SAP-icons",{legacy:l.SAPIconsV4,sap_horizon:l.SAPIconsV5});i.set("tnt",{legacy:l.SAPIconsTNTV2,sap_horizon:l.SAPIconsTNTV3});i.set("business-suite",{legacy:l.SAPBSIconsV1,sap_horizon:l.SAPBSIconsV2});const F=(a,k)=>{if(i.has(a)){i.set(a,{...k,...i.get(a)});return}i.set(a,k)},T=a=>{const k=p()?"legacy":"sap_horizon";return i.has(a)?i.get(a)[k]:a},W=new Map,G=a=>W.get(a),N=a=>{const k=G(g());return!a&&k?O(k):T(a||"SAP-icons")},y="legacy",_=new Map,u=U("SVGIcons.registry",new Map),t=U("SVGIcons.promises",new Map),S="ICON_NOT_FOUND",Xa=(a,k)=>{_.set(a,k)},H=async a=>{if(!t.has(a)){if(!_.has(a))throw new Error(`No loader registered for the ${a} icons collection. Probably you forgot to import the "AllIcons.js" module for the respective package.`);const k=_.get(a);t.set(a,k(a))}return t.get(a)},o=a=>{Object.keys(a.data).forEach(k=>{const A=a.data[k];B(k,{pathData:A.path||A.paths,ltr:A.ltr,accData:A.acc,collection:a.collection,packageName:a.packageName})})},B=(a,k)=>{const A=`${k.collection}/${a}`;u.set(A,{pathData:k.pathData,ltr:k.ltr,accData:k.accData,packageName:k.packageName,customTemplate:k.customTemplate,viewBox:k.viewBox,collection:k.collection})},h=a=>{a.startsWith("sap-icon://")&&(a=a.replace("sap-icon://",""));let k;return[a,k]=a.split("/").reverse(),a=a.replace("icon-",""),k&&(k=O(k)),{name:a,collection:k}},V=a=>{const{name:k,collection:A}=h(a);return E(A,k)},b=async a=>{const{name:k,collection:A}=h(a);let f=S;try{f=await H(N(A))}catch(P){console.error(P.message)}if(f===S)return f;const I=E(A,k);return I||(Array.isArray(f)?f.forEach(P=>{o(P),F(A,{[P.themeFamily||y]:P.collection})}):o(f),E(A,k))},E=(a,k)=>{const A=`${N(a)}/${k}`;return u.get(A)},Ya=async a=>{if(!a)return;let k=V(a);if(k||(k=await b(a)),k&&k!==S&&k.accData)return(await M(k.packageName)).getText(k.accData)};export{Ra as $,q as A,C as B,ka as C,sa as D,ca as E,Aa as F,Da as G,_a as H,Wa as I,Ga as J,Ya as K,oa as L,Ua as M,ra as N,aa as O,w as P,ma as Q,V as R,b as S,ya as T,ba as U,Ba as V,Va as W,La as X,Fa as Y,Oa as Z,xa as _,n as a,Na as a0,Xa as a1,Qa as a2,za as a3,na as a4,$a as a5,z as a6,ga as a7,wa as a8,Ha as a9,Y as b,j as c,J as d,Z as e,la as f,Pa as g,ua as h,Ea as i,ha as j,$ as k,Q as l,Ia as m,Ta as n,pa as o,ia as p,Ma as q,B as r,fa as s,d as t,K as u,v,e as w,X as x,ta as y,Sa as z};
//# sourceMappingURL=Icons-1d0bcfc0.js.map
