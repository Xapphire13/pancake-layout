import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import StackItem from './StackItem';

storiesOf('StackItem', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <StackItem
      style={{
        backgroundColor: 'red',
        color: 'white',
        height: 200,
        width: 200
      }}
    >
      Two
    </StackItem>
  ))
  .add('Anchors', () => (
    <StackItem
      style={{
        backgroundColor: 'red',
        color: 'white',
        height: 200,
        width: 200
      }}
      hAnchor={select('Horizontal Anchor', ['left', 'center', 'right'], 'left')}
      vAnchor={select('Vertical Anchor', ['top', 'center', 'bottom'], 'top')}
    >
      Two
    </StackItem>
  ));
