import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { Loader } from '@ui5/webcomponents-react/lib/Loader';
import React, { CSSProperties, useMemo } from 'react';
import { useTheme } from 'react-jss';
import { JSSTheme } from '../../../../interfaces/JSSTheme';

const DefaultLoadingComponent = () => {
  const { contentDensity } = useTheme() as JSSTheme;

  const styles: CSSProperties = useMemo(() => {
    return {
      position: 'absolute',
      top: contentDensity === ContentDensity.Compact ? '2rem' : '2.75rem',
      left: 0,
      right: 0,
      zIndex: 1
    };
  }, [contentDensity]);

  return <Loader delay={500} style={styles} />;
};

DefaultLoadingComponent.displayName = 'DefaultLoadingComponent';

export { DefaultLoadingComponent };
