import{d as S,I as o}from"./UI5Element-427ec721.js";import{r as n}from"./index-f1f749bf.js";import{u as _}from"./I18nContext-bef5b452.js";import{u as R}from"./useIsomorphicLayoutEffect-a838da4a.js";const l=new o("defaultBundle"),f=e=>{const t=_();if(!t)throw new Error("'useI18nBundle()' may be used only in the context of a '<ThemeProvider>' component.");const E=n.useRef(t);return R(()=>{const{i18nBundles:s,setI18nBundle:T}=E.current;let a=!0;return s.hasOwnProperty(e)||S(e).then(A=>{a&&T(e,A)},()=>{}),()=>{a=!1}},[e]),t.i18nBundles[e]??l},O={key:"ABORT",defaultText:"Abort"},C={key:"CANCEL",defaultText:"Cancel"},L={key:"CLOSE",defaultText:"Close"},y={key:"DELETE",defaultText:"Delete"},x={key:"IGNORE",defaultText:"Ignore"},N={key:"NO",defaultText:"No"},r={key:"OK",defaultText:"OK"},k={key:"RETRY",defaultText:"Retry"},D={key:"YES",defaultText:"Yes"},i={key:"CLEAR_SORTING",defaultText:"Clear Sorting"},P={key:"SORT_ASCENDING",defaultText:"Sort Ascending"},V={key:"SORT_DESCENDING",defaultText:"Sort Descending"},F={key:"GROUP",defaultText:"Group"},U={key:"GROUPED",defaultText:"Grouped"},M={key:"UNGROUP",defaultText:"Ungroup"},B={key:"DRAG_TO_RESIZE",defaultText:"Drag to resize"},G={key:"PLEASE_WAIT",defaultText:"Please wait"},H={key:"CONFIRMATION",defaultText:"Confirmation"},W={key:"ERROR",defaultText:"Error"},p={key:"INFORMATION",defaultText:"Information"},w={key:"SUCCESS",defaultText:"Success"},h={key:"WARNING",defaultText:"Warning"},Y={key:"SHOW_MORE",defaultText:"Show more"},v={key:"SHOW_FILTER_BAR",defaultText:"Show Filter Bar"},m={key:"HIDE_FILTER_BAR",defaultText:"Hide Filter Bar"},g={key:"CLEAR",defaultText:"Clear"},b={key:"RESTORE",defaultText:"Restore"},X={key:"FILTERS",defaultText:"Filters"},K={key:"ADAPT_FILTERS",defaultText:"Adapt Filters"},z={key:"GO",defaultText:"Go"},Z={key:"SAVE",defaultText:"Save"},j={key:"BASIC",defaultText:"Basic"},q={key:"SEARCH_FOR_FILTERS",defaultText:"Search for filters"},J={key:"FIELDS_BY_ATTRIBUTE",defaultText:"Show Fields by Attribute"},Q={key:"VISIBLE",defaultText:"Visible"},$={key:"ACTIVE",defaultText:"Active"},ee={key:"VISIBLE_AND_ACTIVE",defaultText:"Visible and Active"},te={key:"MANDATORY",defaultText:"Mandatory"},ae={key:"LIST_VIEW",defaultText:"List View"},Ee={key:"GROUP_VIEW",defaultText:"Group View"},se={key:"SHOW_VALUES",defaultText:"Show Values"},Te={key:"HIDE_VALUES",defaultText:"Hide Values"},Ae={key:"FIELD",defaultText:"Field"},Se={key:"COLLAPSE_HEADER",defaultText:"Collapse Header"},oe={key:"EXPAND_HEADER",defaultText:"Expand Header"},ne={key:"PIN_HEADER",defaultText:"Pin Header"},_e={key:"UNPIN_HEADER",defaultText:"Unpin Header"},Re={key:"SEPARATOR",defaultText:"Separator"},le={key:"AVAILABLE_ACTIONS",defaultText:"Available Actions"},Ie={key:"X_OF_Y",defaultText:"Item {0} of {1}"},de={key:"MY_VIEWS",defaultText:"My Views"},ce={key:"SAVE_VIEW",defaultText:"Save View"},ue={key:"MANAGE_VIEWS",defaultText:"Manage Views"},fe={key:"VIEW",defaultText:"View"},Oe={key:"FILE_ALREADY_EXISTS",defaultText:"A file with this name already exists"},Ce={key:"SPECIFY_VIEW_NAME",defaultText:"Please specify a view name"},Le={key:"SET_AS_DEFAULT",defaultText:"Set as Default"},ye={key:"PUBLIC",defaultText:"Public"},xe={key:"APPLY_AUTOMATICALLY",defaultText:"Apply Automatically"},Ne={key:"SHARING",defaultText:"Sharing"},re={key:"DEFAULT",defaultText:"Default"},ke={key:"CREATED_BY",defaultText:"Created By"},De={key:"MANAGE",defaultText:"Manage"},ie={key:"PRIVATE",defaultText:"Private"},Pe={key:"MARK_AS_STANDARD",defaultText:"Use as standard view"},Ve={key:"MARK_AS_FAVORITE",defaultText:"Mark as favorite view"},Fe={key:"DELETE_VIEW",defaultText:"Delete view"},Ue={key:"SELECT_VIEW",defaultText:"Select view"},Me={key:"SEARCH_VARIANT",defaultText:"Search variant"},Be={key:"ALL",defaultText:"All"},Ge={key:"SEARCH",defaultText:"Search"},He={key:"SAVE_AS",defaultText:"Save As"},We={key:"RESET",defaultText:"Reset"},pe={key:"SELECTED_AS_FAVORITE",defaultText:"Selected as Favorite"},we={key:"UNSELECTED_AS_FAVORITE",defaultText:"Unselected as Favorite"},he={key:"SELECT",defaultText:"Select"},Ye={key:"SELECTED",defaultText:"Selected"},ve={key:"PRESS_ARROW_KEYS_TO_MOVE",defaultText:"Press ARROW keys to move"},me={key:"LIST_NO_DATA",defaultText:"No data"},ge={key:"EXPAND_NODE",defaultText:"Expand Node"},be={key:"COLLAPSE_NODE",defaultText:"Collapse Node"},Xe={key:"EXPAND_PRESS_SPACE",defaultText:"To expand the row, press the spacebar"},Ke={key:"COLLAPSE_PRESS_SPACE",defaultText:"To collapse the row, press the spacebar"},ze={key:"SELECT_PRESS_SPACE",defaultText:"To select the row, press the spacebar"},Ze={key:"UNSELECT_PRESS_SPACE",defaultText:"To unselect the row, press the spacebar"},je={key:"INVALID_TABLE",defaultText:"Invalid Table"},qe={key:"FILTERED",defaultText:"Filtered"},Je={key:"ARIA_DESC_CARD_HEADER",defaultText:"Card Header"},Qe={key:"SEMANTIC_COLOR_CRITICAL",defaultText:"Warning"},$e={key:"SEMANTIC_COLOR_GOOD",defaultText:"Good"},et={key:"SEMANTIC_COLOR_NEUTRAL",defaultText:"Neutral"},tt={key:"SEMANTIC_COLOR_ERROR",defaultText:"Critical"},at={key:"NUMERICCONTENT_DEVIATION_UP",defaultText:"Ascending"},Et={key:"NUMERICCONTENT_DEVIATION_DOWN",defaultText:"Descending"};export{He as $,le as A,Fe as B,C,B as D,Xe as E,qe as F,F as G,xe as H,je as I,pe as J,we as K,Z as L,Ve as M,at as N,Ne as O,G as P,re as Q,ke as R,et as S,ue as T,M as U,fe as V,Ge as W,Ie as X,ce as Y,Le as Z,de as _,$e as a,De as a0,Me as a1,Ue as a2,j as a3,r as a4,q as a5,X as a6,We as a7,Be as a8,$ as a9,H as aA,me as aB,Ye as aC,he as aD,ve as aE,Q as aa,ee as ab,te as ac,ae as ad,Ee as ae,se as af,Te as ag,Ae as ah,J as ai,g as aj,b as ak,v as al,m as am,z as an,K as ao,O as ap,L as aq,y as ar,x as as,N as at,k as au,D as av,h as aw,w as ax,p as ay,W as az,Qe as b,tt as c,Et as d,Je as e,i as f,P as g,V as h,Ke as i,ze as j,Ze as k,ge as l,be as m,U as n,oe as o,Se as p,_e as q,ne as r,Y as s,Re as t,f as u,Oe as v,Ce as w,ye as x,ie as y,Pe as z};
//# sourceMappingURL=i18n-defaults-c7cc2cc1.js.map
