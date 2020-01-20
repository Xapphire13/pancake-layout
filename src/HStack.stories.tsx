import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import HStack from './HStack';
import StackItem from './StackItem';

storiesOf('Stacks/HStack', module)
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
  ))
  .add('Justify', () => (
    <HStack
      style={{ border: '1px dashed black' }}
      justify={select(
        'Justify',
        ['start', 'end', 'center', 'space-between', 'space-evenly'],
        'start'
      )}
    >
      <div style={{ backgroundColor: 'blue', color: 'white' }}>One</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Two</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Three</div>
    </HStack>
  ))
  .add('Align Items', () => (
    <HStack
      style={{ height: 400, border: '1px dashed black' }}
      alignItems={select(
        'Align Items',
        ['start', 'end', 'center', 'stretch'],
        'stretch'
      )}
    >
      <StackItem style={{ backgroundColor: 'blue', color: 'white' }}>
        One
      </StackItem>
      <StackItem style={{ backgroundColor: 'red', color: 'white' }}>
        Two
      </StackItem>
      <StackItem style={{ backgroundColor: 'green', color: 'white' }}>
        Three
      </StackItem>
    </HStack>
  ));
