import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './utils/styles';
import ensureStackItem from './utils/ensureStackItem';
import VStackItem from './VStackItem';

export type VStackProps = {
  children: React.ReactNode[];

  gap?: number;
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-evenly';
  alignItems?: 'start' | 'end' | 'center' | 'stretch';
} & React.HTMLAttributes<HTMLDivElement>;

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: ({ justify }: VStackProps) => {
      switch (justify) {
        case 'start':
          return 'flex-start';
        case 'end':
          return 'flex-end';
        default:
          return justify;
      }
    },
    alignItems: ({ alignItems }: VStackProps) => {
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
    marginTop: ({ gap }: VStackProps) => gap
  }
});

export default function VStack({
  children,
  gap,
  justify,
  alignItems = 'stretch',
  ...htmlProps
}: VStackProps) {
  const classes = useStyles({ gap, justify, alignItems });
  return (
    <div {...htmlProps} {...styles(htmlProps.className, classes.container)}>
      {children.map((child, i) =>
        ensureStackItem(VStackItem, child, {
          key: i,
          ...styles(gap && i > 0 && classes.gap)
        })
      )}
    </div>
  );
}
