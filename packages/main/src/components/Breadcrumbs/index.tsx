import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { BreadcrumbsSeparatorStyle } from '@ui5/webcomponents-react/dist/BreadcrumbsSeparatorStyle';
import { Label } from '@ui5/webcomponents-react/dist/Label';
import React, {
  Children,
  cloneElement,
  FC,
  forwardRef,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  Ref,
  useCallback,
  useRef,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';

const SeparatorStyles = {
  BackSlash: '\\',
  DoubleBackSlash: '\\\\',
  DoubleGreaterThan: '>>',
  DoubleSlash: '//',
  GreaterThan: '>',
  Slash: '/'
};

export interface BreadcrumbsPropTypes extends CommonProps {
  /**
   *  A list of all the active link elements in the Breadcrumbs control. Please use the `Link` component.
   */
  children: ReactNode | ReactNodeArray;
  /**
   * Determines the visual style of the separator between the Breadcrumbs elements.
   */
  separatorStyle?: BreadcrumbsSeparatorStyle;
  /**
   * Determines the text of current/last element in the Breadcrumbs path.
   */
  currentLocationText?: string;
}

const useStyles = createUseStyles(
  {
    list: {
      listStyleType: 'none',
      display: 'flex',
      alignItems: 'center',
      marginBlock: 0,
      paddingInline: 0,
      flexWrap: 'wrap',
      '& li': {
        display: 'flex',
        overflow: 'hidden'
      }
    },
    separatorInline: {
      margin: '0 0.25rem'
    },
    currentLocation: {
      fontFamily: ThemingParameters.sapFontFamily,
      fontSize: ThemingParameters.sapFontSize,
      color: ThemingParameters.sapContent_LabelColor,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      '&:focus': {
        outline: `${ThemingParameters.sapContent_FocusWidth} ${ThemingParameters.sapContent_FocusStyle} ${ThemingParameters.sapContent_FocusColor}`,
        outlineOffset: '-0.0625rem'
      }
    }
  },
  { name: 'Breadcrumbs' }
);

/**
 * Enables users to navigate between items by providing a list of links to previous steps in the user's navigation path.
 */
const Breadcrumbs: FC<BreadcrumbsPropTypes> = forwardRef((props: BreadcrumbsPropTypes, ref: Ref<HTMLDivElement>) => {
  const { children, separatorStyle, currentLocationText, tooltip, style, className, slot } = props;
  const classes = useStyles();
  const childrenArray = Children.toArray(children).filter(Boolean);
  const [focusedItem, setFocusedItem] = useState(0);
  const breadcrumbsRef = useRef(null);

  const handleItemFocus = (e) => {
    const currentId = parseInt(e.target.dataset.id);
    setFocusedItem(currentId);
  };

  const handleKeyDownInList = useCallback(
    (e) => {
      const target = e.target as HTMLElement;
      const currentId = parseInt(target.parentElement.id);
      const childrenLength = currentLocationText ? childrenArray.length : childrenArray.length - 1;
      if (e.key === 'ArrowRight' && currentId + 1 <= childrenLength) {
        breadcrumbsRef.current.children[currentId + 1].children[0].focus();
      }
      if (e.key === 'ArrowLeft' && currentId > 0) {
        breadcrumbsRef.current.children[currentId - 1].children[0].focus();
      }
    },
    [currentLocationText, childrenArray.length, breadcrumbsRef.current]
  );

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <nav
      ref={ref}
      title={tooltip}
      style={style}
      className={className}
      slot={slot}
      aria-label="Breadcrumb Trail"
      {...passThroughProps}
    >
      <ol className={classes.list} ref={breadcrumbsRef} onKeyDown={handleKeyDownInList}>
        {childrenArray.map((item, index) => {
          if (index === childrenArray.length - 1) {
            return (
              <li key={`bc-${index}`} id={`${index}`}>
                {cloneElement(item as ReactElement, {
                  tabIndex: focusedItem === index ? 0 : -1,
                  onFocus: handleItemFocus,
                  'data-id': index
                })}
                {currentLocationText && (
                  <Label className={classes.separatorInline} aria-hidden="true">
                    {SeparatorStyles[separatorStyle]}
                  </Label>
                )}
              </li>
            );
          }
          return (
            <li key={`bc-${index}`} id={`${index}`}>
              {cloneElement(item as ReactElement, {
                tabIndex: focusedItem === index ? 0 : -1,
                onFocus: handleItemFocus,
                'data-id': index
              })}
              <Label className={classes.separatorInline} aria-hidden="true">
                {SeparatorStyles[separatorStyle]}
              </Label>
            </li>
          );
        })}
        {currentLocationText && (
          <li key={`bc-${currentLocationText}`} id={`${childrenArray.length}`}>
            <div
              aria-current="page"
              tabIndex={focusedItem === childrenArray.length ? 0 : -1}
              className={classes.currentLocation}
              onFocus={handleItemFocus}
              data-id={childrenArray.length}
            >
              {currentLocationText}
            </div>
          </li>
        )}
      </ol>
    </nav>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';
Breadcrumbs.defaultProps = {
  separatorStyle: BreadcrumbsSeparatorStyle.Slash
};

export { Breadcrumbs };
