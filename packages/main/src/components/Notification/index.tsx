import '@ui5/webcomponents-icons/dist/icons/decline';
import '@ui5/webcomponents-icons/dist/icons/message-error';
import '@ui5/webcomponents-icons/dist/icons/message-success';
import '@ui5/webcomponents-icons/dist/icons/message-warning';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import { AvatarShape } from '@ui5/webcomponents-react/lib/AvatarShape';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Priority } from '@ui5/webcomponents-react/lib/Priority';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import React, { FC, forwardRef, ReactNode, RefObject, useCallback, useEffect, useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import styles from './Notification.jss';

export interface NotificationProptypes extends CommonProps {
  footer?: ReactNode | ReactNode[];
  avatar?: ReactNode | string;
  description?: string;
  title?: string;
  authorName?: string;
  loading?: boolean;
  datetime?: string;
  priority?: Priority;
  noCloseButton?: boolean;
  onClick?: (e: any) => any;
  noShowMoreButton?: boolean;
  truncate?: boolean;
  onClose?: (event: Event) => void;

  children?: React.ReactElement<NotificationProptypes> | React.ReactElement<NotificationProptypes>[];
  collapsed?: boolean;
  autoPriority?: boolean;
}

const useStyles = createUseStyles<keyof ReturnType<typeof styles>>(styles, { name: 'Notification' });

const WEIGHT = { None: 0, Low: 1, Medium: 2, High: 3 };

/**
 * <code>import { Notification } from '@ui5/webcomponents-react/lib/Notification';</code>
 */
const Notification: FC<NotificationProptypes> = forwardRef(
  (props: NotificationProptypes, ref: RefObject<HTMLDivElement>) => {
    const {
      footer,
      description,
      title,
      authorName,
      datetime,
      avatar,
      priority,
      onClick,
      children,
      collapsed,
      className,
      tooltip,
      style,
      autoPriority,
      noShowMoreButton,
      truncate,
      noCloseButton,
      onClose
    } = props;

    const classes = useStyles(props);
    const [visibleState, toggleVisible] = useState(true);
    const [showChildren, toggleChildrenVisible] = useState(!collapsed);
    const [showMore, toggleShowMore] = useState(!truncate);

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

    const handleClose = useCallback(
      (e) => {
        toggleVisible(false);
        onClose(Event.of(null, e));
      },
      [toggleVisible, onClose]
    );

    const handleNotificationClick = useCallback(
      (e) => {
        if (e.target.nodeName !== 'UI5-BUTTON' && e.target.nodeName !== 'UI5-ICON' && typeof onClick === 'function') {
          onClick(Event.of(null, e));
        }
      },
      [onClick]
    );

    const handleShowNotificationGroup = useCallback(() => {
      toggleChildrenVisible(!showChildren);
    }, [showChildren]);

    const handleShowMore = useCallback(() => {
      toggleShowMore(!showMore);
    }, [showMore]);

    const isLastChild = props['isLastChild'];
    const isChild = props['isChild'];

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
    }, [onClick, children, showChildren, isChild, isLastChild, style]);

    const contentStyles = useMemo(() => {
      return { padding: footer ? '1rem 1rem 0.5rem 1.25rem' : '1rem 1rem 1rem 1.25rem' };
    }, [footer]);

    const setAutoPriority = useMemo(() => {
      if (priority === Priority.High) return priority;
      const priorityArray = React.Children.map(children, (item) => {
        if (!React.isValidElement(item)) return null;
        return { weight: WEIGHT[item.props.priority], priority: item.props.priority };
      });
      if (Array.isArray(priorityArray)) {
        const highestPriority = priorityArray.reduce((prev, current) =>
          prev.weight > current.weight ? prev : current
        );
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
          return <Icon name="message-error" className={classes.error} />;
        case Priority.Medium:
          return <Icon name="message-warning" className={classes.warning} />;
        case Priority.Low:
          return <Icon name="message-success" className={classes.success} />;
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
            // @ts-ignore
            isLastChild: true,
            className: `${item.props.className} ${classes.notificationContainerChild}`
          });
        }
        return React.cloneElement(item, {
          // @ts-ignore
          isChild: true,
          className: `${item.props.className} ${classes.notificationContainerChild}`
        });
      });
    }, [children, classes.notificationContainerChild]);

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

    const passThroughProps = usePassThroughHtmlProps(props);

    if (!visibleState) return null;
    return (
      <>
        <div
          style={notificationContainerStyles}
          className={`${classes.notificationContainer} ${className}`}
          onClick={handleNotificationClick}
          title={tooltip}
          ref={ref}
          {...passThroughProps}
        >
          <div className={`${classes.priorityIndicator} ${indicatorClass}`} style={indicatorStyles} />
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div className={classes.header}>
              {priority && priority !== Priority.None && (
                <div className={classes.semanticIcon}>{renderSemanticIcon}</div>
              )}
              <div className={`${classes.title} ${truncate ? classes.titleEllipsised : ''}`}>{title}</div>
              {!noCloseButton && (
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
                  {!noShowMoreButton && (
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
  }
);

Notification.defaultProps = {
  truncate: true
};

Notification.displayName = 'Notification';

export { Notification };
