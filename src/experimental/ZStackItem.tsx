import React, { useRef, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import styles from '../utils/styles';

export type ZStackItemProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export type PrivateZStackItemProps = {
  onSized: (width: number, height: number) => void;
};

const useStyles = createUseStyles({
  container: {
    position: 'absolute'
  }
});

export default function ZStackItem(props: ZStackItemProps) {
  const { children, onSized, ...htmlProps } = props as ZStackItemProps &
    PrivateZStackItemProps;
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
      {...styles(htmlProps.className, classes.container)}
    >
      {children}
    </div>
  );
}
