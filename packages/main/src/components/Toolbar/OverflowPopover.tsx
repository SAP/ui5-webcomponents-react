import iconOverflow from '@ui5/webcomponents-icons/dist/overflow.js';
import { Device, useI18nBundle, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { Dispatch, FC, HTMLAttributes, ReactElement, ReactNode, Ref, SetStateAction } from 'react';
import { isValidElement, cloneElement, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ButtonDesign, PopoverPlacementType, PopupAccessibleRole } from '../../enums/index.js';
import { WITH_X_ITEMS, SHOW_MORE, X_OF_Y } from '../../i18n/i18n-defaults.js';
import { getOverflowPopoverContext } from '../../internal/OverflowPopoverContext.js';
import { useCanRenderPortal } from '../../internal/ssr.js';
import { stopPropagation } from '../../internal/stopPropagation.js';
import { getUi5TagWithSuffix } from '../../internal/utils.js';
import type {
  ButtonPropTypes,
  PopoverDomRef,
  ToggleButtonDomRef,
  ToggleButtonPropTypes
} from '../../webComponents/index.js';
import { Popover, ToggleButton } from '../../webComponents/index.js';
import type { ToolbarPropTypes } from './index.js';

interface OverflowPopoverProps {
  lastVisibleIndex: number;
  classes: Record<string, string>;
  children: ReactNode[];
  portalContainer: Element;
  overflowContentRef: Ref<HTMLDivElement>;
  numberOfAlwaysVisibleItems?: number;
  overflowPopoverRef?: Ref<PopoverDomRef>;
  overflowButton?: ReactElement<ToggleButtonPropTypes> | ReactElement<ButtonPropTypes>;
  setIsMounted: Dispatch<SetStateAction<boolean>>;
  a11yConfig?: ToolbarPropTypes['a11yConfig'];
}

const isPhone = Device.isPhone();

export const OverflowPopover: FC<OverflowPopoverProps> = (props: OverflowPopoverProps) => {
  const {
    lastVisibleIndex,
    classes,
    children,
    portalContainer,
    overflowContentRef,
    numberOfAlwaysVisibleItems,
    overflowButton,
    overflowPopoverRef,
    setIsMounted,
    a11yConfig
  } = props;
  const [pressed, setPressed] = useState(false);
  const toggleBtnRef = useRef<ToggleButtonDomRef>(null);
  const [componentRef, popoverRef] = useSyncRef(overflowPopoverRef);
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const showMoreText = i18nBundle.getText(SHOW_MORE);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleToggleButtonClick = (e) => {
    e.stopPropagation();
    setPressed((prev) => {
      if (!prev) {
        if (popoverRef.current) {
          popoverRef.current.opener = e.target;
        }
        return true;
      }
      return false;
    });
  };

  const handleBeforeOpen = () => {
    if (toggleBtnRef.current) {
      toggleBtnRef.current.accessibilityAttributes = { expanded: true, hasPopup: 'Menu' };
    }
  };
  const handleAfterOpen = () => {
    setPressed(true);
  };

  const handleClose = (e) => {
    if (toggleBtnRef.current) {
      toggleBtnRef.current.accessibilityAttributes = { expanded: false, hasPopup: 'Menu' };
    }
    stopPropagation(e);
    setPressed(false);
  };

  useEffect(() => {
    const tagName = getUi5TagWithSuffix('ui5-toggle-button');
    customElements.whenDefined(tagName).then(() => {
      if (toggleBtnRef.current) {
        toggleBtnRef.current.accessibilityAttributes = { expanded: pressed, hasPopup: 'Menu' };
      }
    });
  }, []);

  const clonedOverflowButtonClick = (e) => {
    if (typeof overflowButton?.props?.onClick === 'function') {
      overflowButton.props.onClick(e);
    }
    if (!e.defaultPrevented) {
      handleToggleButtonClick(e);
    }
  };

  const canRenderPortal = useCanRenderPortal();

  const accessibleRole = (() => {
    if (a11yConfig?.overflowPopover?.contentRole) {
      return PopupAccessibleRole.None;
    }
    return a11yConfig?.overflowPopover?.role;
  })();

  const OverflowPopoverContextProvider = getOverflowPopoverContext().Provider;

  let startIndex = null;
  const filteredChildrenArray = children
    .map((item, index, arr) => {
      if (index > lastVisibleIndex && index > numberOfAlwaysVisibleItems - 1 && isValidElement(item)) {
        if (startIndex === null) {
          startIndex = index;
        }
        const labelProp = item?.props?.['data-accessible-name'] ? 'accessibleName' : 'aria-label';
        let labelVal = i18nBundle.getText(X_OF_Y, index + 1 - startIndex, arr.length - startIndex);
        if (item?.props?.[labelProp]) {
          labelVal += ' ' + item.props[labelProp];
        }
        if (item?.props?.id) {
          return cloneElement<HTMLAttributes<HTMLElement>>(item, {
            id: `${item.props.id}-overflow`,
            [labelProp]: labelVal
          });
        }
        // @ts-expect-error: if type is not defined, it's not a spacer
        if (item.type?.displayName === 'ToolbarSeparator') {
          return cloneElement(item as ReactElement, {
            style: {
              height: '0.0625rem',
              margin: '0.375rem 0.1875rem',
              width: '100%'
            },
            'aria-label': labelVal
          });
        }
        return cloneElement<HTMLAttributes<HTMLElement>>(item, {
          [labelProp]: labelVal
        });
      }
      return null;
    })
    .filter(Boolean);

  return (
    <OverflowPopoverContextProvider value={{ inPopover: true }}>
      {overflowButton ? (
        cloneElement(overflowButton, { onClick: clonedOverflowButtonClick })
      ) : (
        <ToggleButton
          ref={toggleBtnRef}
          design={ButtonDesign.Transparent}
          icon={iconOverflow}
          onClick={handleToggleButtonClick}
          pressed={pressed}
          accessibleName={showMoreText}
          tooltip={showMoreText}
          data-component-name="ToolbarOverflowButton"
        />
      )}
      {canRenderPortal &&
        createPortal(
          <Popover
            data-component-name="ToolbarOverflowPopover"
            className={clsx(classes.popover, isPhone && classes.popoverPhone)}
            placementType={PopoverPlacementType.Bottom}
            ref={componentRef}
            open={pressed}
            onAfterClose={handleClose}
            onBeforeOpen={handleBeforeOpen}
            onAfterOpen={handleAfterOpen}
            hideArrow
            accessibleRole={accessibleRole}
            accessibleName={i18nBundle.getText(WITH_X_ITEMS, filteredChildrenArray.length)}
          >
            <div
              className={classes.popoverContent}
              ref={overflowContentRef}
              role={a11yConfig?.overflowPopover?.contentRole}
              data-component-name="ToolbarOverflowPopoverContent"
            >
              {filteredChildrenArray}
            </div>
          </Popover>,
          portalContainer ?? document.body
        )}
    </OverflowPopoverContextProvider>
  );
};
