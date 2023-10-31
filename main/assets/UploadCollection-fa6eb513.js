import{j as e}from"./jsx-runtime-d079401a.js";import{C as a,b as s}from"./DomRefTable.module-803d3766.js";import{D as d}from"./DocsHeader-04f08ac8.js";import{F as c}from"./Footer-615409be.js";import"./index-f1f2c4b1.js";import{M as h,C as r,b as l}from"./chunk-HLWAVYOI-6861bbec.js";import{S as x}from"./SubcomponentsSection-6138f2fc.js";import{C as f,D as p,S as u,U as C}from"./UploadCollection.stories-cdc1e1b3.js";import{u as m}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-9c3ea414.js";import"./iframe-d92733f7.js";import"../sb-preview/runtime.js";import"./UI5Element-9ae3ac4a.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./withWebComponent-70ea33bf.js";import"./utils-eb830979.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-085ae741.js";import"./Icons-aa504494.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./class-map-a35dc276.js";import"./Button-bda40b74.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-edeeca68.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-66afc8e6.js";import"./Integer-f7f172c9.js";import"./index-5f79dc0a.js";import"./Avatar-54e46144.js";import"./ResizeHandler-a1ba39c5.js";import"./employee-bd01b92f.js";import"./index-5738db1f.js";import"./index-9f894a3e.js";import"./Link-27f41eeb.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-c76a32fb.js";import"./index-18561614.js";import"./Label-2351773c.js";import"./index-c74c9f7f.js";import"./index-3ddc90f0.js";import"./index-dcf916d2.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0570471d.js";import"./BrowserScrollbar.css-35e4e851.js";import"./index-f82c8853.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./index-a095f659.js";import"./index-0569bdf9.js";import"./Title-9e1fec85.js";import"./ValueState-2c5e5904.js";import"./ListItem-8f7be23d.js";import"./ListItemBase-7c3bbca9.js";import"./ItemNavigation-53cee471.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-6d3cbaa3.js";import"./RadioButton-0df5d1bd.js";import"./CheckBox-05effb75.js";import"./accept-a3b0d940.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-562fbac6.js";import"./Input-bfce6809.js";import"./Suggestions.css-07dccdad.js";import"./ResponsivePopoverCommon.css-f284520a.js";import"./ValueStateMessage.css-29f8f350.js";import"./ProgressIndicator-7eec6fb9.js";import"./AnimationMode-5a8d55c8.js";import"./i18n-defaults-2dcf78e8.js";import"./parameters-bundle.css-1bee123e.js";import"./IllustratedMessage-c39c457c.js";import"./Tent-74a35d8a.js";const j=`**Since:** 0.9.0

A component to be used within the \`UploadCollection\`.
`;function oo(n={}){const{wrapper:t}=Object.assign({},m(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,{})})):i();function i(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre",h1:"h1",h3:"h3"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:f}),`
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
            setTimeout(
              () => {
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
              },
              Math.floor(Math.random() * (1000 - 100 + 1)) + 100
            );
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
`,e.jsx(c,{})]})}}export{oo as default};
//# sourceMappingURL=UploadCollection-fa6eb513.js.map
