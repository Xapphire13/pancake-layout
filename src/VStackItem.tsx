import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './utils/styles';

export type VStackItemProps = {
  children: React.ReactNode;

  grow?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const useStyles = createUseStyles({
  container: {
    position: 'relative'
  },
  grow: {
    flexGrow: 1
  }
});

export default function VStackItem({
  children,
  grow,
  ...htmlProps
}: VStackItemProps) {
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
