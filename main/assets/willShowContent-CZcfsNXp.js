const t=o=>Array.from(o).filter(e=>e.nodeType!==Node.COMMENT_NODE&&(e.nodeType!==Node.TEXT_NODE||(e.nodeValue||"").trim().length!==0)).length>0;export{t};
