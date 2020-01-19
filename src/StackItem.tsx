import React from 'react';
import PrivateStackItem, { StackItemProps } from './private/PrivateStackItem';

export default function StackItem(props: StackItemProps) {
  return <PrivateStackItem {...props} />;
}
