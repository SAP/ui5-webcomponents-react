import { useStylesheet } from '@ui5/webcomponents-react-base';
import { Loader } from '../../../Loader/index.js';
import { classNames, styleData } from './DefaultLoadingComponent.module.css.js';

const DefaultLoadingComponent = ({ style }) => {
  useStylesheet(styleData, DefaultLoadingComponent.displayName);
  return <Loader delay={500} style={style} className={classNames.loader} />;
};

DefaultLoadingComponent.displayName = 'DefaultLoadingComponent';

export { DefaultLoadingComponent };
