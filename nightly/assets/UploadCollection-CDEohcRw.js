import{j as e}from"./iframe-Bb_MgE3Z.js";import{useMDXComponents as d}from"./index-DKEbDWFi.js";import{A as p}from"./ArgTypesWithNote-4-0slHhR.js";import{C as s}from"./ControlsWithNote-Br6-EL5r.js";import{D as m}from"./DocsHeader-pqQ7E-qX.js";import{F as c}from"./CommandsAndQueries-c2dxMxjd.js";import{S as h}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as i,a as x,D as u}from"./blocks-C_ShsaTX.js";import{C as t,D as l,S as C,U as r}from"./UploadCollection.stories-CWztwxZQ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DayVNiXE.js";import"./information-C6jJlQn9.js";import"./sys-enter-2-CM5wN5Wl.js";import"./alert-Y-36vIFj.js";import"./Tag-B5i1kgB9.js";import"./index-DViW7Jtd.js";import"./index-Ck4df4kL.js";import"./Link-DNvb3KzX.js";import"./copy-CIv8JdSf.js";import"./copy-BzQS_3Hx.js";import"./GitHub-Mark-CIQdlUo7.js";import"./TableOfContent-Dyl8nPzW.js";import"./index-Cq06OFSr.js";import"./index-Na43IgM6.js";import"./addCustomCSSWithScoping-Bc03fLSU.js";import"./index-Ci9Y4xV9.js";import"./index-BfQwzX8T.js";import"./index-j0v7UbS8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHOTzJyN.js";import"./stop-hXnNezNb.js";import"./i18n-defaults-Cjp7arcT.js";import"./Input-cbgRVmBC.js";import"./ResponsivePopoverCommon.css-CsqmHnJg.js";import"./ValueStateMessage.css-BFdD6J-X.js";import"./Suggestions.css-Dlsv1RCW.js";import"./ProgressIndicator-CgxljHQC.js";import"./AnimationMode-D1hsT7R6.js";import"./parameters-bundle.css-34zgZIqy.js";import"./Tent-BUujp9Xm.js";import"./IllustratedMessage-DelxCU65.js";import"./sapIllus-Dialog-Tent-C6CWEzSF.js";import"./sapIllus-Scene-Tent-2yKp567E.js";import"./sapIllus-Spot-Tent-B36x4esc.js";import"./sapIllus-Dot-Tent-B06UNqtJ.js";function a(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
`,e.jsx(m,{of:t,since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h2,{id:"handling-drag-and-drop-of-files",children:"Handling drag and drop of files"}),`
`,e.jsxs(n.p,{children:["Per default, files can be added by dragging them into the ",e.jsx(n.code,{children:"UploadCollection"}),` component.
To use this functionality the `,e.jsx(n.code,{children:"onDrop"})," handler has to be manually adjusted.",e.jsx("br",{}),`
`,e.jsx(n.strong,{children:"Note:"})," Use ",e.jsx(n.code,{children:"event.preventDefault()"})," in the ",e.jsx(n.code,{children:"onDrop"})," handler, otherwise some browsers will open some files in a different tab."]}),`
`,e.jsxs(n.p,{children:["This example shows, how to dynamically render a ",e.jsx(n.code,{children:"UploadCollectionItem"})," by dropping files into the ",e.jsx(n.code,{children:"UploadCollection"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState } from 'react';
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
`,e.jsx(n.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"simulate-upload",children:"Simulate Upload"}),`
`,e.jsx(i,{of:C}),`
`,e.jsx(n.h3,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const SimulateUploadComponent = () => {
  const [children, setChildren] = useState([
    <UploadCollectionItem
      key={'0'}
      file={null}
      fileName={'file-name.txt'}
      uploadState={UploadState.Ready}
      thumbnail={
        <img src="https://raw.githubusercontent.com/SAP/ui5-webcomponents/main/docs/images/UI5_logo_water.png" />
      }
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
        <UploadCollectionItem
          key={file.name}
          file={file}
          fileName={file.name}
          uploadState={UploadState.Ready}
          thumbnail={<Icon name={documentIcon} />}
        >
          <Text>{\`Last modified: \${file.lastModifiedDate} · Size: \${(file.size / 1000).toFixed(2)}KB\`}</Text>
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
`,e.jsx(x,{children:h}),`
`,e.jsx(n.h2,{id:"uploadcollectionitem",children:"UploadCollectionItem"}),`
`,e.jsx(u,{of:r}),`
`,e.jsx(p,{metaOf:t,of:r}),`
`,e.jsx(c,{})]})}function pe(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{pe as default};
