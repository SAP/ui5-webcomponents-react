import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';

const styles = {
  // outer container, controlling height and width
  bar: {
    width: '100%',
    display: 'block',
    position: 'relative',
    height: CssSizeVariables.sapWcrBarHeight,
    lineHeight: CssSizeVariables.sapWcrBarHeight,
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
    height: CssSizeVariables.sapWcrBarHeight
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
};

export default styles;
