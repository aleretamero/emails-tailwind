import { ReactNode } from 'react';

export const Button = (props: { active?: boolean; children: ReactNode }) => {
  const backgroundColor = `${
    props.active ? 'bg-gray-200 dark:bg-gray-900' : ''
  }`;

  return (
    <button
      className={`
        py-2 px-4 w-full text-left rounded-lg 
        ${backgroundColor} transition-colors
         hover:bg-gray-200 dark:hover:bg-gray-900
      `}
    >
      {props.children}
    </button>
  );
};
