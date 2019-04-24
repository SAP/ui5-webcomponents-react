import { ContentDensity } from '@fiori-for-react/core/enums/ContentDensity';

/**
 * Style Class Generator Function
 *
 * @param {Object} themeContext - Current Theme Context by JSS Provider.
 * @param {string} obj.theme - Current Theme (sap_belize, sap_belize_plus, etc.)
 * @param {string} obj.contentDensity - Current Content Density (Cozy, Compact)
 * @param {object} obj.parameters - Theming parameters (e.g. LabelColor)
 */
const styles = ({ theme, contentDensity }) => ({
  // outer container, controlling height and width
  bar: {
    width: '100%',
    height: ContentDensity.Compact === contentDensity ? '2rem' : '3rem',
    lineHeight: ContentDensity.Compact === contentDensity ? '2rem' : '3rem',
    display: 'block',
    position: 'relative'
  },
  // left container
  left: {
    position: 'absolute',
    left: '0',
    top: '0',
    height: '100%',
    paddingLeft: '0.25rem',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center'
  },
  // center container
  center: {
    textAlign: 'center',
    width: '100%',
    height: '0',
    top: '0',
    left: '0'
  },
  // inner container around left, center, and right
  inner: {
    height: ContentDensity.Compact === contentDensity ? '2rem' : '3rem',
    padding: '0.25rem 0',
    display: 'inline-block'
  },
  // right container
  right: {
    position: 'absolute',
    right: '0',
    top: '0',
    height: '100%',
    paddingRight: '0.25rem',
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center'
  }
});

export default styles;
