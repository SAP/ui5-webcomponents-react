const __vite__fileDeps=["./index-3-_tf5dF.js","./index-BP8_t0zE.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as l}from"./iframe-BwzLgoB6.js";import{a as o,r as c}from"./index-BP8_t0zE.js";import{c as p}from"./client-Di-4O7We.js";import{g as h,h as d,H as E,i as f}from"./index-CxSnkb7G.js";var n=new Map,x=({callback:e,children:t})=>{let r=c.useRef();return c.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},R=async(e,t,r)=>{let s=await g(t,r);return new Promise(a=>{s.render(o.createElement(x,{callback:()=>a(null)},e))})},_=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},g=async(e,t)=>{let r=n.get(e);return r||(r=p.createRoot(e,t),n.set(e,r)),r},w={code:h,a:d,...E},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},A=class{constructor(){this.render=async(e,t,r)=>{let s={...w,...t==null?void 0:t.components},a=f;return new Promise((u,i)=>{l(()=>import("./index-3-_tf5dF.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:m})=>R(o.createElement(D,{showException:i,key:Math.random()},o.createElement(m,{components:s},o.createElement(a,{context:e,docsParameter:t}))),r)).then(()=>u())})},this.unmount=e=>{_(e)}}};export{A as D,w as d};
