import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { JSSTheme } from '../../interfaces/JSSTheme';

/**
 * Style Class Generator Function
 *
 * @param {Object} obj - Current Theme Context by JSS Provider.
 * @param {string} obj.theme - Current Theme (sap_fiori_3)
 * @param {string} obj.contentDensity - Current Content Density (Cozy, Compact)
 * @param {object} obj.parameters - Theming parameters (e.g. LabelColor)
 */
const styles = ({ theme, contentDensity, parameters }: JSSTheme) => {
  // const isS = '@media (max-width: 600px)';
  // const isM = '@media (min-width: 601px) and (max-width: 1024px)';
  // const isL = '@media (min-width: 1025px) and (max-width: 1440px)';
  // const isXL = '@media (min-width: 1441px) and (max-width: 1920px)';
  // const isXXL = '(min-width: 1921px)';

  // function getHeaderAndFooterPaddings() {
  //   return {
  //     '& [data-bar-part="Left"]': {
  //       [isS]: {
  //         paddingLeft: '1rem'
  //       },
  //       [isM]: {
  //         paddingLeft: '2rem'
  //       },
  //       [isL]: {
  //         paddingLeft: '2rem'
  //       },
  //       [isXL]: {
  //         paddingLeft: '3rem'
  //       },
  //       [isXXL]: {
  //         paddingLeft: '3rem'
  //       }
  //     },
  //     '& [data-bar-part="Right"]': {
  //       [isS]: {
  //         paddingRight: '1rem'
  //       },
  //       [isM]: {
  //         paddingRight: '2rem'
  //       },
  //       [isL]: {
  //         paddingRight: '2rem'
  //       },
  //       [isXL]: {
  //         paddingRight: '3rem'
  //       },
  //       [isXXL]: {
  //         paddingRight: '3rem'
  //       }
  //     },
  //     '& [data-bar-part="Root"]': {
  //       height: ContentDensity.Compact === contentDensity ? '3rem' : '4rem',
  //       lineHeight: ContentDensity.Compact === contentDensity ? '3rem' : '4rem'
  //     }
  //   };
  // }

  return {
    pageContainer: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
      '& $pageHeader': {
        // ...getHeaderAndFooterPaddings()
      },
      '& $pageFooter': {
        // ...getHeaderAndFooterPaddings()
      },
      '& $contentSection': {
        // [isS]: {
        //   padding: '1rem 1rem 0 1rem'
        // },
        // [isM]: {
        //   padding: '1rem 2rem 0 2rem'
        // },
        // [isL]: {
        //   padding: '1rem 2rem 0 2rem'
        // },
        // [isXL]: {
        //   padding: '1rem 3rem 0 3rem'
        // },
        // [isXXL]: {
        //   padding: '1rem 3rem 0 3rem'
        // }
      }
    },
    backgroundStandard: {
      background: parameters.sapUiBaseBG
    },
    backgroundSolid: {
      background: parameters.sapUiShellBackground
    },
    backgroundList: {
      background: parameters.sapUiGroupContentBackground
    },
    backgroundTransparent: {
      background: 'transparent'
    },
    baseBar: {
      '& >*': {
        paddingLeft: '0rem',
        paddingRight: '0rem',
        '& [data-bar-part="Left"]': {
          paddingLeft: '0rem'
        },
        '& [data-bar-part="Right"]': {
          paddingRight: '0rem'
        }
      }
    },
    pageHeader: {
      top: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      background: parameters.sapUiPageHeaderBackground,
      '& >*': {
        background: parameters.sapUiPageHeaderBackground,
        boxShadow: `inset 0 -0.0625rem ${parameters.sapUiPageHeaderBorderColor}`
      }
    },
    contentSection: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      overflowY: 'auto',
      overflowX: 'hidden',
      // marginTop: '1px',
      // marginBottom: '1px',
      boxSizing: 'border-box'
      // backgroundColor: parameters.sapUiBaseBG
    },
    pageWithHeader: {
      '& $contentSection': {
        top: contentDensity === ContentDensity.Compact ? '2.5rem' : '2.75rem'
      }
    },
    pageWithFooter: {
      '& $contentSection': {
        bottom: contentDensity === ContentDensity.Compact ? '2.5rem' : '2.75rem'
      }
    },
    pageFooter: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      borderTop: `1px solid ${parameters.sapUiPageFooterBorderColor}`,
      '& >*': {
        height: contentDensity === ContentDensity.Compact ? '2.5rem' : '2.75rem',
        background: parameters.sapUiPageFooterBackground,
        borderTop: `0.0625rem solid ${parameters.sapUiPageFooterBorderColor}`
      }
    }
  };
};

export default styles;
