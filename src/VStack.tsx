import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './utils/styles';
import ensureStackItem from './utils/ensureStackItem';
import VStackItem from './VStackItem';

export type VStackProps = {
  children: React.ReactNode[];

  gap?: number;
  hGap?: number;
  vGap?: number;
  wrap?: boolean;
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-evenly';
  alignItems?: 'start' | 'end' | 'center' | 'stretch';
} & React.HTMLAttributes<HTMLDivElement>;

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: ({ hGap, gap }: VStackProps) => -(hGap ?? gap ?? 0),
    marginTop: ({ vGap, gap }: VStackProps) => -(vGap ?? gap ?? 0),
    flexWrap: ({ wrap }: VStackProps) => (wrap ? 'wrap' : 'nowrap'),
    justifyContent: ({ justify }: VStackProps) => {
      switch (justify) {
        case 'start':
          return 'flex-start';
        case 'end':
          return 'flex-end';
        default:
          return justify ?? 'normal';
      }
    },
    alignItems: ({ alignItems }: VStackProps) => {
      switch (alignItems) {
        case 'start':
          return 'flex-start';
        case 'end':
          return 'flex-end';
        default:
          return alignItems ?? 'normal';
      }
    }
  },
  stackItem: {
    marginLeft: ({ gap, hGap }: VStackProps) => hGap ?? gap ?? 0,
    marginTop: ({ gap, vGap }: VStackProps) => vGap ?? gap ?? 0
  }
});

export default function VStack({
  children,
  gap,
  justify,
  alignItems = 'stretch',
  hGap,
  vGap,
  wrap,
  ...htmlProps
}: VStackProps) {
  const classes = useStyles({ gap, vGap, hGap, justify, alignItems, wrap });
  return (
    <div {...htmlProps} {...styles(htmlProps.className, classes.container)}>
      {children.map((child, i) =>
        ensureStackItem(VStackItem, child, {
          key: i,
          ...styles(classes.stackItem)
        })
      )}
    </div>
  );
}
