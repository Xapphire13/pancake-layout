import React, { useRef, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import styles from '../utils/styles';
import getComponentName from '../utils/getComponentName';
import getElementProps from '../utils/getNodeProps';

export type StackItemProps = {
  children: React.ReactNode;

  horizontalFill?: boolean;
  hAnchor?: 'left' | 'center' | 'right';
  vAnchor?: 'top' | 'center' | 'bottom';
  grow?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

type PrivateStackItemProps = {
  absolute?: boolean;
  onSized?: (width: number, height: number) => void;
};

type StyleData = {
  width: number | undefined;
  height: number | undefined;
};

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    width: ({ width, horizontalFill }: StyleData & StackItemProps) =>
      horizontalFill ? '100%' : width,
    height: ({ height }: StyleData) => height
  },
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  grow: {
    flexGrow: 1
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
  },
  hFill: {
    width: '100%'
  }
});

export default function PrivateStackItem({
  children,
  absolute,
  grow,
  onSized,
  horizontalFill,
  hAnchor = 'left',
  vAnchor = 'top',
  ...htmlProps
}: StackItemProps & PrivateStackItemProps) {
  const [size, setSize] = useState<{ width: number; height: number }>();
  const childContainerRef = useRef<HTMLDivElement>();
  const classes = useStyles({ ...size, horizontalFill });

  useEffect(() => {
    if (childContainerRef.current) {
      const {
        width,
        height
      } = childContainerRef.current.getBoundingClientRect();

      setSize({ width, height });
    }
  }, []);

  useEffect(() => {
    if (childContainerRef.current && onSized) {
      const rect = (
        childContainerRef.current.children[0] ?? childContainerRef.current
      ).getBoundingClientRect();
      onSized(rect.width, rect.height);
    }
  }, [onSized]);

  return (
    <div
      {...htmlProps}
      {...styles(
        htmlProps.className,
        classes.container,
        absolute && classes.absolute,
        grow && classes.grow
      )}
    >
      <div
        ref={childContainerRef}
        {...styles(
          hAnchor === 'left' && classes.hAnchorLeft,
          hAnchor === 'center' && classes.hAnchorCenter,
          hAnchor === 'right' && classes.hAnchorRight,
          vAnchor === 'top' && classes.vAnchorTop,
          vAnchor === 'center' && classes.vAnchorCenter,
          vAnchor === 'bottom' && classes.vAnchorBottom,
          hAnchor === 'center' &&
            vAnchor === 'center' &&
            classes.anchorCenterCenter,
          horizontalFill && classes.hFill
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function ensureStackItem(
  element: React.ReactNode,
  extraProps?: { key?: React.Key } & Omit<StackItemProps, 'children'> &
    PrivateStackItemProps
) {
  const isStackItem = ['StackItem', 'PrivateStackItem'].includes(
    getComponentName(element)
  );
  const childProps = isStackItem
    ? getElementProps(element)
    : { children: element };

  return (
    <PrivateStackItem
      {...childProps}
      {...extraProps}
      {...styles(childProps.className, extraProps.className)}
    />
  );
}
