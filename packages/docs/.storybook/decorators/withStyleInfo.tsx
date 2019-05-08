import React, { Component } from 'react';
import { ContentDensity, Label, Text, ThemeProvider, Themes } from '@fiori-for-react/fiori3';

const withStyleContainer = {
  fontFamily:
    '-apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',
  color: 'rgb(68, 68, 68)',
  '-webkit-font-smoothing': 'antialiased',
  fontWeight: 300,
  lineHeight: 1.45,
  fontSize: '15px',
  border: '1px solid rgb(238, 238, 238)',
  padding: '20px 40px 40px',
  borderRadius: '2px',
  backgroundColor: 'rgb(255, 255, 255)',
  marginTop: '20px',
  marginBottom: '20px'
};

const titleStyle = {
  margin: '20px 0px 0px',
  padding: '0px 0px 5px',
  fontSize: '25px',
  borderBottom: '1px solid rgb(238, 238, 238)'
};

interface StorybookClass {
  name: string;
  storyContext: any;
  docgenInfo: DocGenInfo;
}

interface DocGenInfo {
  styleInfo: any;
}

class WithStyleInfo extends Component<any> {
  static STORY_NAME = /\|\s([\w\s-]+)$/;

  getDocGenInfo = () => {
    let docgen = null;
    const storyName = WithStyleInfo.STORY_NAME.exec(this.props.storyContext.kind)[1];
    // @ts-ignore
    if (Object.keys(STORYBOOK_REACT_CLASSES).length > 0) {
      // @ts-ignore
      Object.values(STORYBOOK_REACT_CLASSES).forEach((c: StorybookClass) => {
        if (!docgen && c.name === storyName && c.docgenInfo && c.docgenInfo.styleInfo) {
          docgen = c.docgenInfo;
        }
      });
    }
    return docgen;
  };

  render() {
    const { children } = this.props;
    const docgen = this.getDocGenInfo();

    if (!docgen || !docgen.styleInfo || docgen.styleInfo.attributes.length < 1) {
      return children;
    }
    const { styleInfo } = docgen;
    return (
      <div>
        {children}
        <div style={withStyleContainer}>
          <ThemeProvider theme={Themes.sap_fiori3_light} contentDensity={ContentDensity.Compact}>
            <h1 style={titleStyle}>Styling API</h1>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
              {styleInfo.attributes.map((info) => (
                <div style={{ marginBottom: '0.5rem' }}>
                  <Label>{`// ${info.comment}`}</Label>
                  <br />
                  <Text>{info.className}</Text>
                </div>
              ))}
            </div>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

export const withStyleInfo = (story, context) => {
  return <WithStyleInfo storyContext={context}>{story(context)}</WithStyleInfo>;
};
