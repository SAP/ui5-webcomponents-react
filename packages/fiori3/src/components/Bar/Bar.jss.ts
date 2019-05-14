import { ContentDensity } from '@lib/ContentDensity';

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
    display: 'block',
    position: 'relative',
    height: ContentDensity.Compact === contentDensity ? '2.5rem' : '2.75rem',
    lineHeight: ContentDensity.Compact === contentDensity ? '2.5rem' : '2.75rem',
    '& ui5-button': {
      display: 'flex'
    }
  },
  // left container
  left: {
    position: 'absolute',
    left: '0',
    top: '0',
    height: '100%',
    paddingLeft: '0.5rem',
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
    display: 'inline-block',
    padding: '0 0.5rem 0 0.5rem',
    height: ContentDensity.Compact === contentDensity ? '2.5rem' : '2.75rem'
  },
  // right container
  right: {
    position: 'absolute',
    right: '0',
    top: '0',
    height: '100%',
    paddingRight: '0.5rem',
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center'
  }
});

export default styles;
