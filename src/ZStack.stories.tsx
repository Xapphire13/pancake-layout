import React from 'react';
import { storiesOf } from '@storybook/react';
import ZStack from './ZStack';
import StackItem from './StackItem';

storiesOf('ZStack', module).add('Default', () => (
  <ZStack>
    <div style={{ backgroundColor: 'blue', color: 'white' }}>One</div>
    <StackItem style={{ backgroundColor: 'red', color: 'white', height: 200 }}>
      Two
    </StackItem>
    <div style={{ backgroundColor: 'green', color: 'white' }}>Three</div>
  </ZStack>
));
