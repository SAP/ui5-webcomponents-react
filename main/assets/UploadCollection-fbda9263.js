import{j as e,a as t,F as d}from"./jsx-runtime-670450c2.js";import{C as s,A as c}from"./DomRefTable.module-96410000.js";import{D as h}from"./DocsHeader-217ff5c2.js";import{F as f}from"./Footer-e29e7980.js";import"./index-f1f749bf.js";import{M as u,C as l,a as p}from"./index-510f8787.js";import{S as C}from"./SubcomponentsSection-6138f2fc.js";import{C as U,D as m,S as g,U as x}from"./UploadCollection.stories-4b6e1aaf.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-PCJTTTQV-4f9b07b4.js";import"./iframe-4d3249bf.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-e736e1f9.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./event-97133b94.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-459702a7.js";import"./Keys-3acbae73.js";import"./Button-876771f0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-6bc67b6a.js";import"./index-026b5b0e.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-b6b25fc2.js";import"./TableOfContent-87a494eb.js";import"./index-3bc07860.js";import"./Link-687260e5.js";import"./WrappingType-b81e595a.js";import"./index-15955256.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-e7c870e8.js";import"./Popover-907d427e.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./index-d4c58156.js";import"./index-0b5f9ad2.js";import"./index-97d5321b.js";import"./Title-b986a4bd.js";import"./languageAware-b2dd96bd.js";import"./ValueState-2c5e5904.js";import"./ListItem-b3713808.js";import"./ListItemBase-4ef398c9.js";import"./ItemNavigation-18222ac6.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-69e83aec.js";import"./RadioButton-6085072b.js";import"./CheckBox-2598fb75.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Input-a94543e4.js";import"./Suggestions.css-faab6178.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";import"./ProgressIndicator-14a91e4a.js";import"./AnimationMode-b8fd41f3.js";import"./i18n-defaults-0a7ef706.js";import"./parameters-bundle.css-6b4a2ffb.js";const b="A component to be used within the `UploadCollection`.\n";function mo(n={}){const{wrapper:i}=Object.assign({},a(),n.components);return i?e(i,Object.assign({},n,{children:e(r,{})})):r();function r(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre",h1:"h1",h3:"h3"},a(),n.components);return t(d,{children:[e(u,{of:U}),`
`,e(h,{since:"0.9.0"}),`
`,e("br",{}),`
`,e(o.h2,{children:"Example"}),`
`,e(l,{of:m}),`
`,e(o.h2,{children:"Properties"}),`
`,e(s,{of:m}),`
`,e(o.h2,{children:"Handling drag and drop of files"}),`
`,t(o.p,{children:["Per default, files can be added by dragging them into the ",e(o.code,{children:"UploadCollection"}),` component.
To use this functionality the `,e(o.code,{children:"onDrop"})," handler has to be manually adjusted.",e("br",{}),`
`,e(o.strong,{children:"Note:"})," Use ",e(o.code,{children:"event.preventDefault()"})," in the ",e(o.code,{children:"onDrop"})," handler, otherwise some browsers will open some files in a different tab."]}),`
`,t(o.p,{children:["This example shows, how to dynamically render a ",e(o.code,{children:"UploadCollectionItem"})," by dropping files into the ",e(o.code,{children:"UploadCollection"}),":"]}),`
`,e(o.pre,{children:e(o.code,{className:"language-jsx",children:`import React, { useState } from 'react';
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
`,e("br",{}),`
`,e(o.h1,{children:"More Examples"}),`
`,e("br",{}),`
`,e(o.h2,{children:"Simulate Upload"}),`
`,e(l,{of:g}),`
`,e(o.h3,{children:"Code"}),`
`,e(o.pre,{children:e(o.code,{className:"language-jsx",children:`const SimulateUploadComponent = () => {
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
`,e(p,{children:C}),`
`,e(o.h2,{children:"UploadCollectionItem"}),`
`,e(p,{children:b}),`
`,e(c,{of:x}),`
`,e(f,{})]})}}export{mo as default};
//# sourceMappingURL=UploadCollection-fbda9263.js.map
