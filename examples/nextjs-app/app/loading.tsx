import { BusyIndicator } from '@ui5/webcomponents-react';
import classes from './loading.module.css';

import BusyIndicatorSize from '@ui5/webcomponents/dist/types/BusyIndicatorSize.js';

export default function HomeLoading() {
  return (
    <div className={classes.container}>
      <BusyIndicator active size={BusyIndicatorSize.L} delay={0} />
    </div>
  );
}
