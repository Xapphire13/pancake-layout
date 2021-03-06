import React from 'react';
import { storiesOf } from '@storybook/react';
import ZStack from './ZStack';
import AlignmentContainer from './AlignmentContainer';
import Spacing from './Spacing';
import ZStackItem from './ZStackItem';

storiesOf('Stacks/ZStack', module).add('Default', () => (
  <ZStack>
    <AlignmentContainer
      vAnchor="top"
      hAnchor="center"
      style={{
        height: 300,
        width: 300,
        boxShadow: '5px 5px 8px #888',
        border: '1px solid #888',
        borderRadius: '5px'
      }}
    >
      <Spacing horizontal={8} vertical={8}>
        One
      </Spacing>
    </AlignmentContainer>
    <ZStackItem hAnchor="center" vAnchor="center">
      <AlignmentContainer
        vAnchor="top"
        hAnchor="center"
        style={{
          height: 200,
          width: 200,
          boxShadow: '5px 5px 8px #888',
          border: '1px solid #888',
          borderRadius: '5px'
        }}
      >
        <Spacing horizontal={8} vertical={8}>
          Two
        </Spacing>
      </AlignmentContainer>
    </ZStackItem>
    <ZStackItem hAnchor="center" vAnchor="center">
      <AlignmentContainer
        vAnchor="top"
        hAnchor="center"
        style={{
          height: 100,
          width: 100,
          boxShadow: '5px 5px 8px #888',
          border: '1px solid #888',
          borderRadius: '5px'
        }}
      >
        <Spacing horizontal={8} vertical={8}>
          Three
        </Spacing>
      </AlignmentContainer>
    </ZStackItem>
  </ZStack>
));
