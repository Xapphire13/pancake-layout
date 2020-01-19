import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import styles from './utils/styles';
import { ensureStackItem } from './private/PrivateStackItem';

export type ZStackProps = {
  children: React.ReactNode[];
} & React.HTMLAttributes<HTMLDivElement>;

type StyleData = {
  width: number | undefined;
  height: number | undefined;
};

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    width: ({ width }: StyleData) => width,
    height: ({ height }: StyleData) => height
  }
});

export default function ZStack({ children, ...htmlProps }: ZStackProps) {
  const [childWidth, setChildWidth] = useState<number>();
  const [childHeight, setChildHeight] = useState<number>();
  const classes = useStyles({ width: childWidth, height: childHeight });

  const handleChildSized = (width: number, height: number) => {
    setChildWidth(prev => (prev == null || width > prev ? width : prev));
    setChildHeight(prev => (prev == null || height > prev ? height : prev));
  };

  return (
    <div {...htmlProps} {...styles(htmlProps.className, classes.container)}>
      {children.map((child, i) =>
        ensureStackItem(child, {
          key: i,
          absolute: true,
          onSized: handleChildSized
        })
      )}
    </div>
  );
}
