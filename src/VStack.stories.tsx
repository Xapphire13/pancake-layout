import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import VStack from './VStack';
import StackItem from './StackItem';

storiesOf('VStack', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <VStack>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>One</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Two</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Three</div>
    </VStack>
  ))
  .add('With gap', () => {
    return (
      <VStack gap={number('Gap Size', 8)}>
        <div style={{ backgroundColor: 'blue', color: 'white' }}>One</div>
        <div style={{ backgroundColor: 'red', color: 'white' }}>Two</div>
        <div style={{ backgroundColor: 'green', color: 'white' }}>Three</div>
      </VStack>
    );
  })
  .add('Horizontal fill', () => (
    <VStack horizontalFill>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>One</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Two</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Three</div>
    </VStack>
  ))
  .add('Item Grow', () => (
    <VStack style={{ height: 400 }}>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>One</div>
      <StackItem style={{ backgroundColor: 'red', color: 'white' }} grow>
        Two
      </StackItem>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Three</div>
    </VStack>
  ));
