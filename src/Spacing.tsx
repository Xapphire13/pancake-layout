import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './utils/styles';

export type SpacingProps = {
  children: React.ReactNode;

  inline?: boolean;
  before?: number;
  after?: number;
  top?: number;
  bottom?: number;
  vertical?: number;
  horizontal?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    display: ({ inline }) => (inline ? 'inline-block' : 'block'),
    marginTop: ({ top, vertical }: SpacingProps) => vertical ?? top ?? 0,
    marginBottom: ({ bottom, vertical }: SpacingProps) =>
      vertical ?? bottom ?? 0,
    marginLeft: ({ before, horizontal }: SpacingProps) =>
      horizontal ?? before ?? 0,
    marginRight: ({ after, horizontal }: SpacingProps) =>
      horizontal ?? after ?? 0
  }
});

export default function Spacing(props: SpacingProps) {
  const {
    children,
    before,
    after,
    top,
    bottom,
    horizontal,
    vertical,
    inline,
    ...htmlProps
  } = props;
  const classes = useStyles(props);

  return (
    <div {...htmlProps} {...styles(htmlProps.className, classes.container)}>
      {children}
    </div>
  );
}
