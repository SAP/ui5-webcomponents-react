const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CcnH5Kt0.js","./index-RYns6xqu.js"])))=>i.map(i=>d[i]);
import{_ as m}from"./iframe-BtWloCrC.js";import{r as s,R as n}from"./index-RYns6xqu.js";import{al as p,am as h,an as E,ao as d}from"./index-DceGRCCg.js";import{c as R}from"./client-BzooOYO_.js";var a=new Map;function v(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var f=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var w=async(e,t,r)=>{let o=await g(t,r);if(v()){o.render(e);return}let{promise:i,resolve:u}=Promise.withResolvers();return o.render(s.createElement(f,{callback:u},e)),i},_=(e,t)=>{let r=a.get(e);r&&(r.unmount(),a.delete(e))},g=async(e,t)=>{let r=a.get(e);return r||(r=R(e,t),a.set(e,r)),r},x={code:p,a:h,...E},y=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},T=class{constructor(){this.render=async(e,t,r)=>{let o={...x,...t==null?void 0:t.components},i=d;return new Promise((u,l)=>{m(async()=>{const{MDXProvider:c}=await import("./index-CcnH5Kt0.js");return{MDXProvider:c}},__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:c})=>w(n.createElement(y,{showException:l,key:Math.random()},n.createElement(c,{components:o},n.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>u())})},this.unmount=e=>{_(e)}}};export{T as D,x as d};
