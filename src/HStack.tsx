import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './utils/styles';
import { ensureStackItem } from './private/PrivateStackItem';

export type HStackProps = {
  children: React.ReactNode[];

  gap?: number;
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-evenly';
  alignItems?: 'start' | 'end' | 'center' | 'stretch';
} & React.HTMLAttributes<HTMLDivElement>;

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: ({ justify }: HStackProps) => {
      switch (justify) {
        case 'start':
          return 'flex-start';
        case 'end':
          return 'flex-end';
        default:
          return justify;
      }
    },
    alignItems: ({ alignItems }: HStackProps) => {
      switch (alignItems) {
        case 'start':
          return 'flex-start';
        case 'end':
          return 'flex-end';
        default:
          return alignItems;
      }
    }
  },
  gap: {
    marginLeft: ({ gap }: HStackProps) => gap
  }
});

export default function HStack({
  children,
  gap,
  justify,
  alignItems = 'stretch',
  ...htmlProps
}: HStackProps) {
  const classes = useStyles({ gap, justify, alignItems });
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
