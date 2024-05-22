import { useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ElementType } from 'react';
import { classNames, styleData } from './FormGroupTitle.module.css.js';
import type { FormGroupPropTypes } from './index.js';

export function FormGroupTitle({ as, className, titleText, style, ...rest }: Omit<FormGroupPropTypes, 'children'>) {
  useStylesheet(styleData, FormGroupTitle.displayName);
  const CustomTag = as as ElementType;

  return (
    <CustomTag
      {...rest}
      className={clsx(classNames.title, className)}
      title={titleText}
      aria-label={titleText}
      data-component-name="FormGroupTitle"
      style={style}
    >
      {titleText}
    </CustomTag>
  );
}

FormGroupTitle.displayName = 'FormGroupTitle';
