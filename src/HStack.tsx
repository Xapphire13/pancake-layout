import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './utils/styles';
import { ensureStackItem } from './private/PrivateStackItem';

export type HStackProps = {
  children: React.ReactNode[];

  gap?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row'
  },
  gap: {
    marginLeft: ({ gap }: HStackProps) => gap
  }
});

export default function HStack({ children, gap, ...htmlProps }: HStackProps) {
  const classes = useStyles({ gap });
  return (
    <div {...htmlProps} {...styles(htmlProps.className, classes.container)}>
      {children.map((child, i) =>
        ensureStackItem(child, {
          key: i,
          ...styles(gap && i > 0 && classes.gap)
        })
      )}
    </div>
  );
}
