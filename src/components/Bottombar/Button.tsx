import { ComponentPropsWithRef, ReactNode } from 'react';

interface ButtonType extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
  active?: boolean;
}

export const Button = ({ children, active, ...props }: ButtonType) => {
  return (
    <button
      className={`
        flex-1 p-2 mb-0.5 rounded-lg shadow
        text-gray-900 dark:text-gray-50 text-sm
        ${
          active
            ? 'bg-primary-300 dark:bg-primary-600'
            : 'bg-gray-200 dark:bg-gray-900'
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
};
