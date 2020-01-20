import React, { useRef, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import styles from '../utils/styles';
import getComponentName from '../utils/getComponentName';
import getElementProps from '../utils/getNodeProps';

export type StackItemProps = {
  children: React.ReactNode;

  grow?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

type PrivateStackItemProps = {
  absolute?: boolean;
  onSized?: (width: number, height: number) => void;
};

const useStyles = createUseStyles({
  container: {
    position: 'relative'
  },
  absolute: {
    position: 'absolute'
  },
  grow: {
    flexGrow: 1
  }
});

export default function PrivateStackItem({
  children,
  absolute,
  grow,
  onSized,
  ...htmlProps
}: StackItemProps & PrivateStackItemProps) {
  const containerRef = useRef<HTMLDivElement>();
  const classes = useStyles();

  useEffect(() => {
    if (containerRef.current && onSized) {
      const { width, height } = (
        containerRef.current.children[0] ?? containerRef.current
      ).getBoundingClientRect();
      onSized(width, height);
    }
  }, [onSized]);

  return (
    <div
      ref={containerRef}
      {...htmlProps}
      {...styles(
        htmlProps.className,
        classes.container,
        absolute && classes.absolute,
        grow && classes.grow
      )}
    >
      {children}
    </div>
  );
}

export function ensureStackItem(
  element: React.ReactNode,
  extraProps?: { key?: React.Key } & Omit<StackItemProps, 'children'> &
    PrivateStackItemProps
) {
  const isStackItem = ['StackItem', 'PrivateStackItem'].includes(
    getComponentName(element)
  );
  const childProps = isStackItem
    ? getElementProps(element)
    : { children: element };

  return (
    <PrivateStackItem
      {...extraProps}
      {...childProps}
      {...styles(childProps.className, extraProps.className)}
    />
  );
}
