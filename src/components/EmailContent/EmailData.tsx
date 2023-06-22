import { ReactNode } from "react";

export const EmailData = (props: { children: ReactNode }) => {
  return (
    <div className="text-gray-600 dark:text-gray-400">{props.children}</div>
  );
};
