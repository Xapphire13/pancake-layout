import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './utils/styles';
import { ensureStackItem } from './private/PrivateStackItem';

export type VStackProps = {
  children: React.ReactNode[];

  horizontalFill?: boolean;
  gap?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  gap: {
    marginTop: ({ gap }: VStackProps) => gap
  }
});

export default function VStack({
  children,
  horizontalFill,
  gap,
  ...htmlProps
}: VStackProps) {
  const classes = useStyles({ gap });
  return (
    <div {...htmlProps} {...styles(htmlProps.className, classes.container)}>
      {children.map((child, i) =>
        ensureStackItem(child, {
          key: i,
          ...styles(gap && i > 0 && classes.gap),
          horizontalFill
        })
      )}
    </div>
  );
}
