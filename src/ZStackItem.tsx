import React, { useRef, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import styles from './utils/styles';

export type ZStackItemProps = {
  children: React.ReactNode;

  hAnchor?: 'left' | 'center' | 'right';
  vAnchor?: 'top' | 'center' | 'bottom';
} & React.HTMLAttributes<HTMLDivElement>;

export type PrivateZStackItemProps = {
  onSized: (width: number, height: number) => void;
};

const useStyles = createUseStyles({
  container: {
    position: 'absolute'
  },
  hAnchorLeft: {
    left: 0
  },
  hAnchorCenter: {
    left: '50%',
    transform: 'translateX(-50%)'
  },
  hAnchorRight: {
    right: 0
  },
  vAnchorTop: {
    top: 0
  },
  vAnchorCenter: {
    top: '50%',
    transform: 'translateY(-50%)'
  },
  vAnchorBottom: {
    bottom: 0
  },
  anchorCenterCenter: {
    transform: 'translate(-50%, -50%)'
  }
});

export default function ZStackItem(props: ZStackItemProps) {
  const {
    children,
    onSized,
    hAnchor,
    vAnchor,
    ...htmlProps
  } = props as ZStackItemProps & PrivateZStackItemProps;
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
      {...styles(
        htmlProps.className,
        classes.container,
        hAnchor === 'left' && classes.hAnchorLeft,
        hAnchor === 'center' && classes.hAnchorCenter,
        hAnchor === 'right' && classes.hAnchorRight,
        vAnchor === 'top' && classes.vAnchorTop,
        vAnchor === 'center' && classes.vAnchorCenter,
        vAnchor === 'bottom' && classes.vAnchorBottom,
        hAnchor === 'center' &&
          vAnchor === 'center' &&
          classes.anchorCenterCenter
      )}
    >
      {children}
    </div>
  );
}
