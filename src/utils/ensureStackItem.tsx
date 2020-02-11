import React from 'react';
import getComponentName from './getComponentName';
import getElementProps from './getElementProps';
import styles from './styles';

export default function ensureStackItem<
  TStackProps extends React.HTMLAttributes<HTMLDivElement>
>(
  StackType: React.ComponentType<TStackProps>,
  element: React.ReactNode,
  extraProps?: { key?: React.Key } & Omit<TStackProps, 'children'>
) {
  const isStackItem = getComponentName(element).endsWith('StackItem');
  const childProps = isStackItem
    ? getElementProps(element)
    : { children: element };

  return (
    <StackType
      {...extraProps}
      {...childProps}
      {...styles(childProps.className, extraProps?.className)}
    />
  );
}
