import{j as e}from"./jsx-runtime-5926aa06.js";import{C as m,A as s}from"./DomRefTable.module-6cfc4ed5.js";import{D as d}from"./DocsHeader-09052fea.js";import{F as c}from"./Footer-4d65d15f.js";import"./index-ebeaab24.js";import{M as h,C as r,a as l}from"./chunk-PCJTTTQV-c9b08a08.js";import{S as x}from"./SubcomponentsSection-6138f2fc.js";import{C as f,D as p,S as u,U as C}from"./UploadCollection.stories-6263ba24.js";import{u as a}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-91ba7822.js";import"./iframe-118e37f2.js";import"../sb-preview/runtime.js";import"./UI5Element-b1843653.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-aac9cdc2.js";import"./Icons-9f549e0f.js";import"./decline-d907918c.js";import"./i18n-defaults-80781f7e.js";import"./information-0f993e39.js";import"./class-map-6a9bd920.js";import"./Button-37a8c146.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-fca59c5d.js";import"./index-b9e92427.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-ded66bb3.js";import"./index-28672e3f.js";import"./Link-64c69167.js";import"./WrappingType-b81e595a.js";import"./index-38fceebb.js";import"./Label-350e96fc.js";import"./index-9c09ad76.js";import"./index-48a94bd2.js";import"./Popover-a3a62d04.js";import"./Integer-f7f172c9.js";import"./PopupUtils-2f7e8748.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-38257fbf.js";import"./FocusableElements-72585d9b.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-8726336f.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./index-de29405b.js";import"./index-f4c9ab22.js";import"./index-a23865fd.js";import"./Title-684c2d0e.js";import"./ValueState-2c5e5904.js";import"./ListItem-c43ad95c.js";import"./ListItemBase-5d83f75f.js";import"./ItemNavigation-5f1efe0b.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-50734768.js";import"./RadioButton-8c17b531.js";import"./CheckBox-f1563b72.js";import"./accept-31e71d55.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-82b13059.js";import"./Input-f79461a9.js";import"./Suggestions.css-c4e187f7.js";import"./ResponsivePopoverCommon.css-5e0f54ec.js";import"./ValueStateMessage.css-8827ddc0.js";import"./ProgressIndicator-4a02d0f8.js";import"./AnimationMode-fb7e718c.js";import"./i18n-defaults-44d0f21e.js";import"./parameters-bundle.css-5626463c.js";import"./IllustratedMessage-8ebf4636.js";import"./Tent-53ebadde.js";const j=`**Since:** 0.9.0

A component to be used within the \`UploadCollection\`.
`;function Ye(n={}){const{wrapper:t}=Object.assign({},a(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,{})})):i();function i(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre",h1:"h1",h3:"h3"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:f}),`
`,e.jsx(d,{since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:p}),`
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
`,e.jsx(c,{})]})}}export{Ye as default};
//# sourceMappingURL=UploadCollection-df38e266.js.map
