import { Dispatch, SetStateAction } from 'react';

import emails from '../../emails.json';

import { EmailListItem } from './EmailListItem';
import { TypeEmail } from './EmailListItem';

interface TypeProps {
  setOpenEmail: Dispatch<SetStateAction<TypeEmail | null>>;
}

export const EmailList = ({ setOpenEmail }: TypeProps) => {
  return (
    <div
      className="
        relative overflow-y-scroll grow-1
      "
    >
      {emails.map(email => (
        <EmailListItem
          key={email.id}
          onClick={() => setOpenEmail(email)}
          email={email}
        />
      ))}
    </div>
  );
};
