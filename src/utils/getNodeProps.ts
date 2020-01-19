import React from 'react';

export default function getElementProps(element: React.ReactNode) {
  return (element as any).props ?? {};
}
