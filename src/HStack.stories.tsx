import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import HStack from './HStack';
import HStackItem from './HStackItem';

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
  .add('With wrap', () => (
    <HStack wrap style={{ maxWidth: 200 }}>
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
    </HStack>
  ))
  .add('With wrap and gap', () => (
    <HStack wrap gap={number('Gap Size', 8)} style={{ maxWidth: 200 }}>
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
    </HStack>
  ))
  .add('With wrap and VGap', () => (
    <HStack wrap vGap={number('Gap Size', 8)} style={{ maxWidth: 200 }}>
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
    </HStack>
  ))
  .add('Item Grow', () => (
    <HStack>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>One</div>
      <HStackItem style={{ backgroundColor: 'red', color: 'white' }} grow>
        Two
      </HStackItem>
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
      <HStackItem style={{ backgroundColor: 'blue', color: 'white' }}>
        One
      </HStackItem>
      <HStackItem style={{ backgroundColor: 'red', color: 'white' }}>
        Two
      </HStackItem>
      <HStackItem style={{ backgroundColor: 'green', color: 'white' }}>
        Three
      </HStackItem>
    </HStack>
  ));
