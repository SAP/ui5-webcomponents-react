const c=new Map,g=(n,e)=>{c.set(n,e)},v=n=>c.get(n);class a{constructor(){this._eventRegistry=new Map}attachEvent(e,s){const r=this._eventRegistry,t=r.get(e);if(!Array.isArray(t)){r.set(e,[s]);return}t.includes(s)||t.push(s)}detachEvent(e,s){const r=this._eventRegistry,t=r.get(e);if(!t)return;const i=t.indexOf(s);i!==-1&&t.splice(i,1),t.length===0&&r.delete(e)}fireEvent(e,s){const t=this._eventRegistry.get(e);return t?t.map(i=>i.call(this,s)):[]}fireEventAsync(e,s){return Promise.all(this.fireEvent(e,s))}isHandlerAttached(e,s){const t=this._eventRegistry.get(e);return t?t.includes(s):!1}hasListeners(e){return!!this._eventRegistry.get(e)}}export{a as E,v as g,g as r};
