import { BusyIndicator, BusyIndicatorSize } from '@ui5/webcomponents-react';
import classes from './loading.module.css';

export default function HomeLoading() {
  return (
    <div className={classes.container}>
      <BusyIndicator active size={BusyIndicatorSize.Large} delay={0} />
    </div>
  );
}
