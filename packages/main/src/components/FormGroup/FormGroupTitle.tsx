import { useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ElementType } from 'react';
import { classNames, styleData } from './FormGroupTitle.module.css.js';
import type { FormGroupPropTypes } from './index.js';

export function FormGroupTitle({
  as,
  className,
  titleText,
  style,
  uniqueId,
  ...rest
}: Omit<FormGroupPropTypes, 'children'> & { uniqueId: string }) {
  useStylesheet(styleData, FormGroupTitle.displayName);
  const CustomTag = as as ElementType;

  return (
    <CustomTag
      id={`${uniqueId}-group`}
      {...rest}
      className={clsx(classNames.title, className)}
      data-component-name="FormGroupTitle"
      style={style}
    >
      {titleText}
    </CustomTag>
  );
}

FormGroupTitle.displayName = 'FormGroupTitle';
