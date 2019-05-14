import { Size } from '@lib/Size';
import { Spinner } from '@lib/Spinner';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

const renderSpinner = () => <Spinner size={select('size', Size, Size.Medium)} />;

storiesOf('F4R Components | Spinner', module).add('Default', renderSpinner);
