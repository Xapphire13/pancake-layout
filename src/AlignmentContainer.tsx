import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './utils/styles';

export type AlignmentContainerProps = {
  children: React.ReactNode;

  hAnchor?: 'left' | 'center' | 'right';
  vAnchor?: 'top' | 'center' | 'bottom';
} & React.HTMLAttributes<HTMLDivElement>;

const useStyles = createUseStyles({
  container: {
    position: 'relative'
  },
  hAnchorLeft: {
    position: 'absolute',
    left: 0
  },
  hAnchorCenter: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  hAnchorRight: {
    position: 'absolute',
    right: 0
  },
  vAnchorTop: {
    position: 'absolute',
    top: 0
  },
  vAnchorCenter: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  vAnchorBottom: {
    position: 'absolute',
    bottom: 0
  },
  anchorCenterCenter: {
    transform: 'translate(-50%, -50%)'
  }
});

export default function AlignmentContainer({
  children,
  hAnchor = 'left',
  vAnchor = 'top',
  ...htmlProps
}: AlignmentContainerProps) {
  const classes = useStyles();

  return (
    <div {...htmlProps} {...styles(htmlProps.className, classes.container)}>
      <div
        {...styles(
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
    </div>
  );
}
