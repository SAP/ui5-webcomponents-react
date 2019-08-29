import React, { FC, ReactElement, useCallback, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { Button } from '@ui5/webcomponents-react/lib/Button';

interface Props {
  title?: string;
  subTitle?: string;
  image?: string;
  imageShapeCircle?: boolean;
  headerActions?: Array<ReactElement<any>>;
  renderHeaderContent?: () => JSX.Element;
  showHideHeaderButton?: boolean;
}

const objectPageHeaderStyles = ({ parameters }: JSSTheme) => ({
  header: {
    flexShrink: 0,
    backgroundColor: parameters.sapUiObjectHeaderBackground,
    '&$stickied': {
      '& $image': {
        opacity: '1',
        height: '3rem',
        width: '3rem',
        margin: '0.25rem 1rem 0.25rem 0'
      }
    }
  },
  titleBar: {
    padding: '0.5rem 2rem',
    display: 'block'
  },
  headerImage: {
    maxWidth: '5rem',
    maxHeight: '5rem',
    display: 'inline-block',
    marginRight: '2rem',
    marginBottom: '1rem'
  },
  image: {
    height: '0',
    width: '0',
    opacity: '0',
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  container: {
    display: 'inline-block',
    lineHeight: 'normal',
    verticalAlign: 'middle',
    width: '70%',
    boxSizing: 'border-box',
    paddingTop: '1.5rem'
  },
  title: {
    fontSize: '1.375rem',
    paddingRight: '1rem',
    verticalAlign: 'baseline',
    lineHeight: 'normal',
    display: 'inline-block',
    margin: '0',
    fontWeight: 'normal',
    color: parameters.sapUiBaseText
  },
  subTitle: {
    display: 'inline-block',
    wordBreak: 'break-word',
    verticalAlign: 'baseline',
    paddingTop: '0.5rem',
    fontSize: '0.875rem',
    color: parameters.sapUiContentLabelColor
  },
  actions: {
    position: 'absolute',
    top: '0',
    paddingTop: '0.75rem',
    right: '1.25rem',
    display: 'inline-block',
    float: 'right',
    verticalAlign: 'top',
    '& > *': {
      marginLeft: '0.5rem',
      padding: 0
    }
  },
  stickied: {},
  headerContent: {
    paddingTop: '1.5rem',
    paddingBottom: '0.25rem',
    transition: 'max-height 0.5s',
    maxHeight: '500px',
    overflow: 'hidden',
    paddingLeft: '2rem',
    position: 'relative'
  },
  headerCustomContent: {
    display: 'inline-block',
    verticalAlign: 'top',
    '& > *': {
      marginRight: '2rem',
      marginBottom: '1rem',
      lineHeight: '1.5rem'
    }
  }
});
const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof objectPageHeaderStyles>>(objectPageHeaderStyles, {
  name: 'ObjectPageHeader'
});

export const ObjectPageHeader: FC<Props> = (props) => {
  const [showHeader, setShowHeader] = useState(true);

  const changeHeader = useCallback(() => {
    setShowHeader(!showHeader);
  }, [showHeader]);

  const { title, image, subTitle, headerActions, renderHeaderContent, imageShapeCircle, showHideHeaderButton } = props;

  const classes = useStyles();

  return (
    <header className={classes.header}>
      {/* Title Bar */}
      <header className={classes.titleBar}>
        {image && (
          <span className={classes.image}>
            <img src={image} />
          </span>
        )}
        <span className={classes.container}>
          <h1 className={classes.title}>{title}</h1>
          <span className={classes.subTitle}>{subTitle}</span>
        </span>
        <span className={classes.actions}>{headerActions}</span>
      </header>
      {/* Header Content */}
      <div style={{ position: 'relative' }}>
        {showHeader && (
          <div className={classes.headerContent}>
            {image && (
              <span
                className={classes.headerImage}
                style={{ borderRadius: imageShapeCircle ? '50%' : 0, overflow: 'hidden' }}
              >
                <img src={image} style={{ width: '100%', height: '100%' }} />
              </span>
            )}
            {renderHeaderContent && <span className={classes.headerCustomContent}>{renderHeaderContent()}</span>}
          </div>
        )}
        {showHideHeaderButton && (
          <Button
            style={
              {
                position: 'absolute',
                '--_ui5_button_compact_height': '1rem',
                lineHeight: '1.25rem',
                bottom: 'calc(-1.25rem / 2)',
                left: 'calc(50% - 1rem)'
              } as any
            }
            icon={showHeader ? 'sap-icon://navigation-up-arrow' : 'sap-icon://navigation-down-arrow'}
            onClick={changeHeader}
          />
        )}
      </div>
    </header>
  );
};
