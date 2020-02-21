import React from 'react';

export default function(component: React.ReactNode): string {
  return (
    (component as any).type?.displayName ||
    (component as any).type?.name ||
    (component as any).name ||
    'Component'
  );
}
