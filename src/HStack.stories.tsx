import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import HStack from './HStack';
import StackItem from './StackItem';

storiesOf('HStack', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <HStack>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>One</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Two</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Three</div>
    </HStack>
  ))
  .add('With gap', () => (
    <HStack gap={number('Gap Size', 8)}>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>One</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Two</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Three</div>
    </HStack>
  ))
  .add('Item Grow', () => (
    <HStack>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>One</div>
      <StackItem style={{ backgroundColor: 'red', color: 'white' }} grow>
        Two
      </StackItem>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Three</div>
    </HStack>
  ));
