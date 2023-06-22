import { ReactNode } from 'react';

export const WriteButton = (props: { children: ReactNode }) => {
  return (
    <button
      className="
        bg-primary-300 hover:bg-primary-400
        dark:bg-primary-500 dark:hover:bg-primary-600
        py-2 w-full rounded-lg transition-colors
      "
    >
      {props.children}
    </button>
  );
};
