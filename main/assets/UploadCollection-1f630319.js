import{j as e}from"./jsx-runtime-5926aa06.js";import{C as a,A as s}from"./DomRefTable.module-2f715ed5.js";import{D as d}from"./DocsHeader-662a8308.js";import{F as c}from"./Footer-71983116.js";import"./index-ebeaab24.js";import{M as h,C as r,a as l}from"./chunk-PCJTTTQV-1239f7ac.js";import{S as x}from"./SubcomponentsSection-6138f2fc.js";import{C as f,D as p,S as u,U as C}from"./UploadCollection.stories-8bbd417c.js";import{u as m}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-0cf5fcb8.js";import"./iframe-a6b75e9e.js";import"../sb-preview/runtime.js";import"./UI5Element-3b11b083.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d4224c1c.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-9aa64f88.js";import"./Icons-f64cf5a7.js";import"./decline-5f59d729.js";import"./i18n-defaults-80781f7e.js";import"./information-73174d4b.js";import"./class-map-18f572ce.js";import"./Button-86524f67.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-f002f496.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-cbae0ba3.js";import"./index-21075afe.js";import"./Integer-f7f172c9.js";import"./index-043b89bb.js";import"./Avatar-d2efa509.js";import"./ResizeHandler-13af62ac.js";import"./employee-ef49f0ae.js";import"./index-391a28aa.js";import"./index-b2ec230b.js";import"./Link-d41264a5.js";import"./WrappingType-b81e595a.js";import"./index-2c77de22.js";import"./TableOfContent-f7c228d1.js";import"./index-907594f0.js";import"./Label-9108dd9e.js";import"./index-9c09ad76.js";import"./index-13982d90.js";import"./index-680342a6.js";import"./Popover-76648ec8.js";import"./PopupsCommon.css-7ddbcd9a.js";import"./FocusableElements-baf79594.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-cca56078.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./index-931ee213.js";import"./index-071012d3.js";import"./Title-c6699a53.js";import"./ValueState-2c5e5904.js";import"./ListItem-d1dee57e.js";import"./ListItemBase-9b88c288.js";import"./ItemNavigation-4baedd26.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-9bf9c132.js";import"./RadioButton-c3da5c0b.js";import"./CheckBox-4c6776c5.js";import"./accept-1b3f8b1f.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-82b1b6d3.js";import"./Input-d4382bc9.js";import"./Suggestions.css-a555ea97.js";import"./ResponsivePopoverCommon.css-2fa8fc87.js";import"./ValueStateMessage.css-559bc063.js";import"./ProgressIndicator-4700931c.js";import"./AnimationMode-65ee5c83.js";import"./i18n-defaults-1f5a0024.js";import"./parameters-bundle.css-f9dc8928.js";import"./IllustratedMessage-e1dffafd.js";import"./Tent-7c05c9e8.js";const j=`**Since:** 0.9.0

A component to be used within the \`UploadCollection\`.
`;function to(n={}){const{wrapper:t}=Object.assign({},m(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,{})})):i();function i(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre",h1:"h1",h3:"h3"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:f}),`
`,e.jsx(d,{since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(o.h2,{id:"handling-drag-and-drop-of-files",children:"Handling drag and drop of files"}),`
`,e.jsxs(o.p,{children:["Per default, files can be added by dragging them into the ",e.jsx(o.code,{children:"UploadCollection"}),` component.
To use this functionality the `,e.jsx(o.code,{children:"onDrop"})," handler has to be manually adjusted.",e.jsx("br",{}),`
`,e.jsx(o.strong,{children:"Note:"})," Use ",e.jsx(o.code,{children:"event.preventDefault()"})," in the ",e.jsx(o.code,{children:"onDrop"})," handler, otherwise some browsers will open some files in a different tab."]}),`
`,e.jsxs(o.p,{children:["This example shows, how to dynamically render a ",e.jsx(o.code,{children:"UploadCollectionItem"})," by dropping files into the ",e.jsx(o.code,{children:"UploadCollection"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import React, { useState } from 'react';
import { Icon, Text, UploadCollection, UploadCollectionItem } from '@ui5/webcomponents-react';

export const UploadCollectionComponent = () => {
  const [children, setChildren] = useState([]);
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    files.forEach((file) => {
      setChildren((prev) => [
        ...prev,
        <UploadCollectionItem file={file} fileName={file.name} thumbnail={<Icon name="document" />}>
          <Text>Uploaded On: Right now</Text>
        </UploadCollectionItem>
      ]);
    });
  };
  return <UploadCollection onDrop={handleDrop}>{children}</UploadCollection>;
};
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"simulate-upload",children:"Simulate Upload"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(o.h3,{id:"code",children:"Code"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const SimulateUploadComponent = () => {
  const [children, setChildren] = useState([
    <UploadCollectionItem
      file={null}
      fileName={'file-name.txt'}
      thumbnail={<img src="https://sap.github.io/ui5-webcomponents/assets/images/logo.png" />}
    >
      <Text>Uploaded by: Susanne Schmitt · Uploaded On: 2019-04-20</Text>
    </UploadCollectionItem>
  ]);
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    files.forEach((file) => {
      setChildren((prev) => [
        ...prev,
        <UploadCollectionItem file={file} fileName={file.name} thumbnail={<Icon name="document" />}>
          <Text>{\`
Last
modified: \${file.lastModifiedDate} ·
Size: \${(file.size / 1000).toFixed(2)}KB\`}</Text>
        </UploadCollectionItem>
      ]);
    });
  };
  const simulateUpload = () => {
    if (children.length > 0) {
      Children.forEach(children, (child, index) => {
        if (child.props.uploadState === UploadState.Ready) {
          let progress = 0;
          const recTimeout = () => {
            setTimeout(() => {
              progress += Math.floor(Math.random() * 4) + 1;
              setChildren((prev) => {
                const updatedChildren = [...prev];
                updatedChildren[index] = cloneElement(prev[index], {
                  uploadState: UploadState.Uploading,
                  progress: Math.min(progress, 100)
                });
                return updatedChildren;
              });
              if (progress < 100) {
                recTimeout();
              } else {
                setChildren((prev) => {
                  const updatedChildren = [...prev];
                  updatedChildren[index] = cloneElement(prev[index], {
                    uploadState: UploadState.Complete
                  });
                  return updatedChildren;
                });
              }
            }, Math.floor(Math.random() * (1000 - 100 + 1)) + 100);
          };
          recTimeout();
        }
      });
    }
  };
  return (
    <UploadCollection
      onDrop={handleDrop}
      header={
        <FlexBox alignItems={FlexBoxAlignItems.Center}>
          <Title>Start upload:</Title>
          <Button onClick={simulateUpload}>Upload!</Button>
        </FlexBox>
      }
    >
      {children}
    </UploadCollection>
  );
};
`})}),`
`,e.jsx(l,{children:x}),`
`,e.jsx(o.h2,{id:"uploadcollectionitem",children:"UploadCollectionItem"}),`
`,e.jsx(l,{children:j}),`
`,e.jsx(s,{of:C}),`
`,e.jsx(c,{})]})}}export{to as default};
//# sourceMappingURL=UploadCollection-1f630319.js.map
