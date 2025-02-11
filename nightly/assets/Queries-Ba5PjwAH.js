import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as o}from"./index-ChplMHeC.js";import{M as r}from"./index-CUKrsg70.js";import"./index-BB5moKBb.js";import"./index-DWEXEIyt.js";import"./TagDesign-Dou_yO3g.js";import"./index-D23YZj_x.js";import"./index-DJ2M8xrO.js";import"./DocsRenderer-CFRXHY34-DLEuULsM.js";import"./Button-ClmCy2Cm.js";import"./jsx-runtime-DJfzgo3Z.js";import"./copy-BHzTzCpZ.js";import{C as a,F as p}from"./CommandsAndQueries-Dl6FkOAj.js";import{T as s}from"./TableOfContent-QtRkCFei.js";import"./WrappingType-CW8URInd.js";import"./Title-BR0HRFMn.js";import"./iframe-bgOVjlir.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Icon-9zGTEZoy.js";import"./CustomElementsScope-Cnxnu_QK.js";import"./Keys-Can65e7H.js";import"./parameters-bundle.css-3_Pq1j61.js";import"./decline-CK9cTtHa.js";import"./i18n-defaults-CifGXSvE.js";import"./information-DJOHIqln.js";import"./information-ix6q05KE.js";import"./sys-enter-2-FqE9Jd9Z.js";import"./sys-enter-2-FVzsVtg3.js";import"./i18n-defaults-CjsTKlnu.js";import"./index-DkMQ0k7r.js";import"./client-lwzJIAjg.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BdH9fu8C.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./EventProvider-ChtD9rRX.js";import"./Popover-ChT-u0ao.js";import"./PopupsCommon.css-_Z_CYCJm.js";import"./FocusableElements-BnnVWUNQ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C0NcOxBw.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-q6568XuN.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-D6kLlLz-.js";import"./index-BmN7WUzF.js";import"./Label-Cv3ZI2wV.js";import"./index-DGXqCTmO.js";import"./index-DhvWoo7_.js";import"./Link-BMGGPz7B.js";import"./index-K4JCeZsD.js";import"./index-DSrRVUVn.js";import"./Text-Bdc-nFmb.js";import"./addCustomCSSWithScoping-e6wN0F3P.js";import"./index-BTrRnRp2.js";import"./BusyIndicator-D3N-k1mY.js";import"./index-Bur18C1c.js";import"./index-S7gxAvta.js";import"./AvatarSize-BceVhWoP.js";import"./employee-Bfg7DU9E.js";import"./index-DVcw1VdZ.js";import"./I18nStore-Ck_ZDoO_.js";const l=JSON.parse(`[{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Returns the tab of the "},{"type":"inlineCode","value":"ui5-tabcontainer"},{"type":"text","value":" by its text."}]},{"type":"paragraph","children":[{"type":"strong","children":[{"type":"text","value":"Note:"}]},{"type":"text","value":" Has to be chained to a "},{"type":"inlineCode","value":"ui5-tabcontainer"},{"type":"text","value":"."}]},{"type":"paragraph","children":[{"type":"strong","children":[{"type":"text","value":"Note:"}]},{"type":"text","value":" This will not work for sub-tabs."}]}]},"tags":[{"title":"example","description":"cy.get('[ui5-tab-container]').findUi5TabByText('Tab 1');","lineNumber":7},{"title":"param","description":"The text of the tab that should be queried.","lineNumber":8,"type":{"type":"NameExpression","name":"string"},"name":"text"}],"loc":{"start":{"line":10,"column":6,"index":232},"end":{"line":19,"column":9,"index":599}},"context":{"loc":{"start":{"line":20,"column":6,"index":606},"end":{"line":20,"column":57,"index":657}},"file":"/home/runner/work/ui5-webcomponents-react/ui5-webcomponents-react/packages/cypress-commands/src/queries.ts"},"augments":[],"examples":[{"description":"cy.get('[ui5-tab-container]').findUi5TabByText('Tab 1');"}],"implements":[],"params":[{"title":"param","name":"text","lineNumber":8,"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The text of the tab that should be queried."}]}]},"type":{"type":"NameExpression","name":"string"}}],"properties":[],"returns":[{"title":"returns","type":{"type":"TypeApplication","expression":{"type":"NameExpression","name":"Chainable"},"applications":[{"type":"NameExpression","name":"Element"}]}}],"sees":[],"throws":[],"todos":[],"yields":[],"name":"findUi5TabByText","kind":"function","memberof":"Chainable","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"path":[{"name":"findUi5TabByText","kind":"function","scope":"instance"}],"namespace":"#findUi5TabByText"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Returns the open-popover button for sub-tabs by its text."}]},{"type":"paragraph","children":[{"type":"strong","children":[{"type":"text","value":"Note:"}]},{"type":"text","value":" Has to be chained to a "},{"type":"inlineCode","value":"ui5-tabcontainer"},{"type":"text","value":"."}]},{"type":"paragraph","children":[{"type":"strong","children":[{"type":"text","value":"Note:"}]},{"type":"text","value":" The tab only renders a button fur sub-tabs if the tab itself has content, otherwise the whole tab is responsible for opening the popover."}]}]},"tags":[{"title":"example","description":"cy.get('[ui5-tab-container]').findUi5TabOpenPopoverButtonByText('Tab 1.1');","lineNumber":7},{"title":"param","description":"The text of the sub-tab that should be queried.","lineNumber":8,"type":{"type":"NameExpression","name":"string"},"name":"text"}],"loc":{"start":{"line":22,"column":6,"index":665},"end":{"line":31,"column":9,"index":1163}},"context":{"loc":{"start":{"line":32,"column":6,"index":1170},"end":{"line":32,"column":74,"index":1238}},"file":"/home/runner/work/ui5-webcomponents-react/ui5-webcomponents-react/packages/cypress-commands/src/queries.ts"},"augments":[],"examples":[{"description":"cy.get('[ui5-tab-container]').findUi5TabOpenPopoverButtonByText('Tab 1.1');"}],"implements":[],"params":[{"title":"param","name":"text","lineNumber":8,"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The text of the sub-tab that should be queried."}]}]},"type":{"type":"NameExpression","name":"string"}}],"properties":[],"returns":[{"title":"returns","type":{"type":"TypeApplication","expression":{"type":"NameExpression","name":"Chainable"},"applications":[{"type":"NameExpression","name":"Element"}]}}],"sees":[],"throws":[],"todos":[],"yields":[],"name":"findUi5TabOpenPopoverButtonByText","kind":"function","memberof":"Chainable","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"path":[{"name":"findUi5TabOpenPopoverButtonByText","kind":"function","scope":"instance"}],"namespace":"#findUi5TabOpenPopoverButtonByText"},{"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Returns the element that represents the "},{"type":"inlineCode","value":"ui5-toolbar-button"},{"type":"text","value":".\\nWhen "},{"type":"inlineCode","value":"options.queryShadowButton"},{"type":"text","value":" is "},{"type":"inlineCode","value":"true"},{"type":"text","value":", the internal "},{"type":"inlineCode","value":"button"},{"type":"text","value":" element is returned, otherwise the "},{"type":"inlineCode","value":"ui5-button"},{"type":"text","value":" element."}]},{"type":"paragraph","children":[{"type":"strong","children":[{"type":"text","value":"Note:"}]},{"type":"text","value":" This query can either be chained to a "},{"type":"inlineCode","value":"ui5-toolbar"},{"type":"text","value":" or not be chained at all."}]},{"type":"paragraph","children":[{"type":"strong","children":[{"type":"text","value":"Note:"}]},{"type":"text","value":" The "},{"type":"inlineCode","value":"text"},{"type":"text","value":" next needs to be unique in the respective scope."}]}]},"tags":[{"title":"example","description":"cy.findToolbarButtonByText(\\"Button Text\\")","lineNumber":8},{"title":"example","description":"cy.get('[ui5-toolbar]').findToolbarButtonByText(\\"Button Text\\")","lineNumber":9},{"title":"param","description":"The text of the button to search for. This text should be unique within the toolbar to ensure a single button is returned.","lineNumber":11,"type":{"type":"NameExpression","name":"string"},"name":"text"},{"title":"param","description":"An optional object containing configuration options for the query.","lineNumber":12,"type":{"type":"OptionalType","expression":{"type":"NameExpression","name":"FindToolbarButtonByTextOptions"}},"name":"options"},{"title":"param","description":"If set to \`true\`, the internal \`button\` element will be returned instead of the \`ui5-button\` element.","lineNumber":13,"type":{"type":"OptionalType","expression":{"type":"NameExpression","name":"boolean"}},"name":"options.queryShadowButton","default":"false"}],"loc":{"start":{"line":34,"column":6,"index":1246},"end":{"line":48,"column":9,"index":2262}},"context":{"loc":{"start":{"line":49,"column":6,"index":2269},"end":{"line":49,"column":106,"index":2369}},"file":"/home/runner/work/ui5-webcomponents-react/ui5-webcomponents-react/packages/cypress-commands/src/queries.ts"},"augments":[],"examples":[{"description":"cy.findToolbarButtonByText(\\"Button Text\\")"},{"description":"cy.get('[ui5-toolbar]').findToolbarButtonByText(\\"Button Text\\")"}],"implements":[],"params":[{"title":"param","name":"text","lineNumber":11,"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"The text of the button to search for. This text should be unique within the toolbar to ensure a single button is returned."}]}]},"type":{"type":"NameExpression","name":"string"}},{"title":"param","name":"options","lineNumber":12,"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"An optional object containing configuration options for the query."}]}]},"type":{"type":"OptionalType","expression":{"type":"NameExpression","name":"FindToolbarButtonByTextOptions"}},"properties":[{"title":"param","name":"options.queryShadowButton","lineNumber":13,"description":{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"If set to "},{"type":"inlineCode","value":"true"},{"type":"text","value":", the internal "},{"type":"inlineCode","value":"button"},{"type":"text","value":" element will be returned instead of the "},{"type":"inlineCode","value":"ui5-button"},{"type":"text","value":" element."}]}]},"type":{"type":"NameExpression","name":"boolean"},"default":"false"}]}],"properties":[],"returns":[{"title":"returns","type":{"type":"TypeApplication","expression":{"type":"NameExpression","name":"Chainable"},"applications":[{"type":"NameExpression","name":"Element"}]}}],"sees":[],"throws":[],"todos":[],"yields":[],"name":"findToolbarButtonByText","kind":"function","memberof":"Chainable","scope":"instance","members":{"global":[],"inner":[],"instance":[],"events":[],"static":[]},"path":[{"name":"findToolbarButtonByText","kind":"function","scope":"instance"}],"namespace":"#findToolbarButtonByText"}]`);function i(t){const n={code:"code",h1:"h1",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Queries"}),`
`,e.jsx(s,{headingSelector:"h2"}),`
`,e.jsx(n.h1,{id:"queries",children:"Queries"}),`
`,e.jsxs(n.p,{children:["Here you can find all available Queries of the ",e.jsx(n.code,{children:"@ui5/webcomponents-cypress-commands"})," package."]}),`
`,e.jsx(a,{api:l}),`
`,e.jsx(p,{})]})}function Ce(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ce as default};
