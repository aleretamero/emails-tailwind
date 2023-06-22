import { ComponentPropsWithRef } from 'react';
import { Avatar } from './Avatar';

export interface TypeEmail {
  id: number;
  from: string;
  subject: string;
  body: string;
  createdAt: string;
}

interface TypeProps extends ComponentPropsWithRef<'article'> {
  email: TypeEmail;
}

export const EmailListItem = ({ email, ...props }: TypeProps) => {
  return (
    <article
      className="
        flex items-center gap-4 [&+article]:mt-2 p-2
        hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900
        rounded-lg transition-colors
      "
      {...props}
    >
      <Avatar letter={email.subject[0].toUpperCase()} />
      <div className='grow shrink basis-40'>
        <strong>{email.subject}</strong>
        <p>
          {email.body.length > 64
            ? email.body.slice(0, 64) + '...'
            : email.body}
        </p>
      </div>
    </article>
  );
};
