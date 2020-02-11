import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './utils/styles';
import ensureStackItem from './utils/ensureStackItem';
import HStackItem from './HStackItem';

export type HStackProps = {
  children: React.ReactNode[];

  gap?: number;
  hGap?: number;
  vGap?: number;
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-evenly';
  alignItems?: 'start' | 'end' | 'center' | 'stretch';
  wrap?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: ({ hGap, gap }: HStackProps) => -(hGap ?? gap ?? 0),
    marginTop: ({ vGap, gap }: HStackProps) => -(vGap ?? gap ?? 0),
    flexWrap: ({ wrap }: HStackProps) => (wrap ? 'wrap' : 'nowrap'),
    justifyContent: ({ justify }: HStackProps) => {
      switch (justify) {
        case 'start':
          return 'flex-start';
        case 'end':
          return 'flex-end';
        default:
          return 'normal';
      }
    },
    alignItems: ({ alignItems }: HStackProps) => {
      switch (alignItems) {
        case 'start':
          return 'flex-start';
        case 'end':
          return 'flex-end';
        default:
          return 'normal';
      }
    }
  },
  stackItem: {
    marginLeft: ({ gap, hGap }: HStackProps) => hGap ?? gap ?? 0,
    marginTop: ({ gap, vGap }: HStackProps) => vGap ?? gap ?? 0
  }
});

export default function HStack({
  children,
  gap,
  justify,
  alignItems = 'stretch',
  vGap,
  hGap,
  wrap,
  ...htmlProps
}: HStackProps) {
  const classes = useStyles({
    gap,
    vGap,
    hGap,
    justify,
    alignItems,
    wrap
  } as HStackProps);
  return (
    <div {...htmlProps} {...styles(htmlProps.className, classes.container)}>
      {children.map((child, i) =>
        ensureStackItem(HStackItem, child, {
          key: i,
          ...styles(classes.stackItem)
        })
      )}
    </div>
  );
}
