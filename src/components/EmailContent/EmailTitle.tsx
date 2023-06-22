import { ReactNode } from 'react';

export const EmailTitle = (props: { children: ReactNode }) => {
  return <h2 className="text-2xl font-bold mb-2">{props.children}</h2>;
};
