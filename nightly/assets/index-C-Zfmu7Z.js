const e=(i,a)=>{if(!i)return i;const l=i.detail===null||i.detail===void 0||typeof i.detail!="object",t=typeof i.detail=="number"?i.detail:null;return Object.defineProperty(i,"detail",{value:l?{}:i.detail,writable:!0,configurable:!0}),t&&Object.assign(i.detail,{nativeDetail:t}),Object.assign(i.detail,a),i};export{e};
