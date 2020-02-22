import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './utils/styles';

export type HStackItemProps = {
  children: React.ReactNode;

  grow?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    minWidth: 0
  },
  grow: {
    flexGrow: 1
  }
});

export default function HStackItem({
  children,
  grow,
  ...htmlProps
}: HStackItemProps) {
  const classes = useStyles();

  return (
    <div
      {...htmlProps}
      {...styles(htmlProps.className, classes.container, grow && classes.grow)}
    >
      {children}
    </div>
  );
}

HStackItem.displayName = 'HStackItem';
