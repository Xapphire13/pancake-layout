import React from 'react';

export default function(component: React.ReactNode): string {
  return (
    (component as any).displayName ||
    (component as any).name ||
    (component as any).type?.displayName ||
    (component as any).type?.name ||
    'Component'
  );
}
