import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, number, withKnobs } from '@storybook/addon-knobs';
import VStack from './VStack';
import VStackItem from './VStackItem';

storiesOf('Stacks/VStack', module)
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
  .add('With wrap', () => (
    <VStack wrap style={{ maxHeight: 100 }}>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Red</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Green</div>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Red</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Green</div>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Red</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Green</div>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Red</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Green</div>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Red</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Green</div>
    </VStack>
  ))
  .add('With wrap and gap', () => (
    <VStack wrap gap={number('Gap Size', 8)} style={{ maxHeight: 100 }}>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Red</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Green</div>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Red</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Green</div>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Red</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Green</div>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Red</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Green</div>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Red</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Green</div>
    </VStack>
  ))
  .add('With wrap and HGap', () => (
    <VStack wrap hGap={number('Gap Size', 8)} style={{ maxHeight: 100 }}>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Red</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Green</div>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Red</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Green</div>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Red</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Green</div>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Red</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Green</div>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Red</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Green</div>
    </VStack>
  ))
  .add('Item Grow', () => (
    <VStack style={{ height: 400 }}>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>One</div>
      <VStackItem style={{ backgroundColor: 'red', color: 'white' }} grow>
        Two
      </VStackItem>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Three</div>
    </VStack>
  ))
  .add('Justify', () => (
    <VStack
      style={{ height: 400, border: '1px dashed black' }}
      justify={select(
        'Justify',
        ['start', 'end', 'center', 'space-between', 'space-evenly'],
        'start'
      )}
    >
      <div style={{ backgroundColor: 'blue', color: 'white' }}>One</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Two</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Three</div>
    </VStack>
  ))
  .add('Align Items', () => (
    <VStack
      style={{ height: 400, border: '1px dashed black' }}
      alignItems={select(
        'Align Items',
        ['start', 'end', 'center', 'stretch'],
        'stretch'
      )}
    >
      <div style={{ backgroundColor: 'blue', color: 'white' }}>One</div>
      <div style={{ backgroundColor: 'red', color: 'white' }}>Two</div>
      <div style={{ backgroundColor: 'green', color: 'white' }}>Three</div>
    </VStack>
  ));
