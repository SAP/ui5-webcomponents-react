import React, { forwardRef, ReactNode, RefObject, useCallback, useEffect, useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import styles from './Notification.jss';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import { AvatarShape } from '@ui5/webcomponents-react/lib/AvatarShape';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { Priority } from '@ui5/webcomponents-react/lib/Priority';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Label } from '@ui5/webcomponents-react/lib/Label';

export interface NotificationProptypes extends CommonProps {
  footer?: ReactNode | ReactNode[];
  avatar?: ReactNode | string;
  description?: string;
  title?: string;
  authorName?: string;
  loading?: boolean;
  datetime?: string;
  priority?: Priority;
  showCloseButton?: boolean;
  visible?: boolean;
  onClick?: (e: any) => any;
  hideShowMoreButton?: boolean;
  truncate?: boolean;

  children?: React.ReactElement<NotificationProptypes> | React.ReactElement<NotificationProptypes>[];
  collapsed?: boolean;
  autoPriority?: boolean;

  isChild?: boolean;
  isLastChild?: boolean;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'Notification' });

const Notification = forwardRef((props: NotificationProptypes, ref: RefObject<HTMLDivElement>) => {
  const {
    footer,
    description,
    title,
    authorName,
    datetime,
    avatar,
    priority,
    visible = true,
    onClick,
    children,
    collapsed = false,
    className,
    tooltip,
    style,
    isChild,
    isLastChild,
    autoPriority = true,
    hideShowMoreButton = false,
    truncate = true,
    showCloseButton = true
  } = props;

  const classes = useStyles(props);
  const [visibleState, toggleVisible] = useState(visible);
  const [showChildren, toggleChildrenVisible] = useState(!collapsed);
  const [showMore, toggleShowMore] = useState(!truncate);

  useEffect(() => {
    toggleVisible(visible);
  }, [visible]);

  useEffect(() => {
    toggleChildrenVisible(!collapsed);
  }, [collapsed]);

  useEffect(() => {
    toggleShowMore(!truncate);
  }, [truncate]);

  const renderAvatar = useMemo(() => {
    if (avatar) {
      return (
        <div className={classes.avatar}>
          {typeof avatar === 'string' ? (
            <Avatar size={AvatarSize.XS} shape={AvatarShape.Circle} initials={avatar} />
          ) : (
            avatar
          )}
        </div>
      );
    }
    return null;
  }, [avatar]);

  const handleClose = useCallback(() => {
    toggleVisible(false);
  }, [visibleState, visible]);

  const handleNotificationClick = useCallback(
    (e) => {
      if (e.target.nodeName !== 'UI5-BUTTON' && e.target.nodeName !== 'UI5-ICON' && !!onClick) {
        onClick(e);
      }
    },
    [onClick]
  );

  const handleShowNotificationGroup = useCallback(() => {
    toggleChildrenVisible(!showChildren);
  }, [children, showChildren]);

  const handleShowMore = useCallback(() => {
    toggleShowMore(!showMore);
  }, [showMore]);

  const notificationContainerStyles = useMemo(() => {
    const borderRadius = () => {
      if (isChild) {
        return '0';
      }
      if (isLastChild) {
        return '0 0 0.25rem 0.25rem';
      }
      if (children && showChildren) {
        return '0.25rem 0.25rem 0 0';
      }
      return '0.25rem';
    };
    const cursor = props.onClick ? 'pointer' : 'auto';
    return {
      ...style,
      borderRadius: borderRadius(),
      cursor
    };
  }, [onClick, children, showChildren, isChild, isLastChild]);

  const contentStyles = useMemo(() => {
    return { padding: footer ? '1rem 1rem 0.5rem 1.25rem' : '1rem 1rem 1rem 1.25rem' };
  }, [footer]);

  const setAutoPriority = useMemo(() => {
    const weight = { None: 0, Low: 1, Medium: 2, High: 3 };
    if (priority === Priority.High) return priority;
    const priorityArray = React.Children.map(children, (item) => {
      if (!React.isValidElement(item)) return null;
      return { weight: weight[item.props.priority], priority: item.props.priority };
    });
    if (Array.isArray(priorityArray)) {
      const highestPriority = priorityArray.reduce((prev, current) => (prev.weight > current.weight ? prev : current));
      return highestPriority.priority;
    }
    return null;
  }, [children, priority]);

  const renderSemanticIcon = useMemo(() => {
    let prio = priority;
    if (autoPriority && !!setAutoPriority) {
      prio = setAutoPriority;
    }
    switch (prio) {
      case Priority.High:
        return <Icon src="message-error" className={`${classes.error} ${classes.semanticIcon}`} />;
      case Priority.Medium:
        return <Icon src="message-warning" className={`${classes.warning} ${classes.semanticIcon}`} />;
      case Priority.Low:
        return <Icon src="message-success" className={`${classes.success} ${classes.semanticIcon}`} />;
      case Priority.None:
        return null;
      default:
        return null;
    }
  }, [priority, classes, autoPriority]);

  const indicatorClass = useMemo(() => {
    let prio = priority;
    if (autoPriority && !!setAutoPriority) {
      prio = setAutoPriority;
    }
    switch (prio) {
      case Priority.High:
        return classes.high;
      case Priority.Medium:
        return classes.medium;
      case Priority.Low:
        return classes.low;
      case Priority.None:
        return classes.none;
      default:
        return classes.none;
    }
  }, [priority, autoPriority]);

  const renderChildren = useMemo(() => {
    return React.Children.map(children, (item, index) => {
      if (React.Children.count(children) === index + 1) {
        return React.cloneElement(item, {
          isLastChild: true,
          className: `${item.props.className} ${classes.notificationContainerChild}`
        });
      }
      return React.cloneElement(item, {
        isChild: true,
        className: `${item.props.className} ${classes.notificationContainerChild}`
      });
    });
  }, [children]);

  const indicatorStyles = useMemo(() => {
    const borderRadius = () => {
      if (isChild) {
        return '0';
      }
      if (isLastChild) {
        return '0 0 0 0.25rem';
      }
      if (children && showChildren) {
        return '0.25rem 0 0 0';
      }
      return '0.25rem 0 0 0.25rem';
    };

    return { borderRadius: borderRadius() };
  }, [isChild, isLastChild, children, showChildren]);

  if (!visibleState) return null;
  return (
    <>
      <div
        style={notificationContainerStyles}
        className={`${classes.notificationContainer} ${className}`}
        onClick={handleNotificationClick}
        title={tooltip}
        ref={ref}
      >
        <div className={`${classes.priorityIndicator} ${indicatorClass}`} style={indicatorStyles} />
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <div className={classes.header}>
            {renderSemanticIcon}
            <Title
              level={TitleLevel.H6}
              className={truncate ? classes.titleEllipsised : classes.title}
              tooltip={title}
              wrap
            >
              {title}
            </Title>
            {showCloseButton && (
              <Button
                className={classes.closeButton}
                design={ButtonDesign.Transparent}
                icon="decline"
                onClick={handleClose}
              />
            )}
          </div>
          <div className={classes.contentAction}>
            <div className={classes.content} style={contentStyles}>
              {renderAvatar}
              <div className={classes.descriptionContainer}>
                <Text
                  className={!showMore ? classes.descriptionEllipsised : classes.descriptionFull}
                  tooltip={description}
                >
                  {description}
                </Text>
                <div className={classes.metadata}>
                  <Label>{authorName}</Label>
                  {authorName && datetime && <div className={classes.separator}>•</div>}
                  <Label>{datetime}</Label>
                </div>
              </div>
            </div>
            <div className={classes.footer}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                {!hideShowMoreButton && (
                  <Button design={ButtonDesign.Transparent} onClick={handleShowMore}>
                    {showMore ? 'Show Less' : 'Show More'}
                  </Button>
                )}
                {footer}
              </div>
            </div>
          </div>
          {children && (
            <Button
              design={ButtonDesign.Transparent}
              onClick={handleShowNotificationGroup}
              className={classes.showGroup}
            >
              {showChildren ? 'Collapse Group' : 'Expand Group'}
            </Button>
          )}
        </div>
      </div>
      {showChildren ? renderChildren : null}
    </>
  );
});

export { Notification };
