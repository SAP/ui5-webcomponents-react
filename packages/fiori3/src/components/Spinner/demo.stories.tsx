import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { Spinner } from './index';
import { Size } from '../../enums/Size';

const renderSpinner = () => <Spinner size={select('size', Size, Size.Medium)} />;

storiesOf('F4R Components | Spinner', module).add('Default', renderSpinner);
