import React from 'react';
import { storiesOf } from '@storybook/react';
import Spacing from './Spacing';

storiesOf('Spacing', module)
  .add('Default', () => (
    <div style={{ border: '1px dashed black', display: 'inline-block' }}>
      <Spacing top={8} after={16} bottom={24} before={32}>
        8 16 24 32
      </Spacing>
    </div>
  ))
  .add('Vertical', () => (
    <div style={{ border: '1px dashed black', display: 'inline-block' }}>
      <Spacing vertical={16}>16</Spacing>
    </div>
  ))
  .add('Horizontal', () => (
    <div style={{ border: '1px dashed black', display: 'inline-block' }}>
      <Spacing horizontal={16}>16</Spacing>
    </div>
  ));
