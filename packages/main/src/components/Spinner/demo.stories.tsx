import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Size } from '../../lib/Size';
import { Spinner } from '../../lib/Spinner';

const renderSpinner = () => <Spinner size={select('size', Size, Size.Medium)} />;

storiesOf('Components | Spinner', module).add('Default', renderSpinner);
