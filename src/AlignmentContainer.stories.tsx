import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import AlignmentContainer from './AlignmentContainer';

storiesOf('AlignmentContainer', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <AlignmentContainer
      style={{ border: '1px dashed black', height: 200, width: 200 }}
      hAnchor={select('Horizontal Anchor', ['left', 'center', 'right'], 'left')}
      vAnchor={select('Vertical Anchor', ['top', 'center', 'bottom'], 'top')}
    >
      Test
    </AlignmentContainer>
  ));
