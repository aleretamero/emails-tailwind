import { Dispatch, SetStateAction } from 'react';
import { TypeEmail } from '../EmailList/EmailListItem';
import { EmailCloseButton } from './EmailCloseButton';
import { EmailData } from './EmailData';
import { EmailTitle } from './EmailTitle';

interface TypeProps {
  email: TypeEmail;
  setOpenEmail: Dispatch<SetStateAction<TypeEmail | null>>;
}

export const EmailContent = ({ email, setOpenEmail }: TypeProps) => {
  const sendDate = new Date(email.createdAt);

  return (
    <div
      className="
        p-2 md:p-4 absolute lg:relative h-full w-full
        bg-gray-50 dark:bg-gray-700
        text-gray-900 dark:text-gray-50
        grow-[2] basis-96
      "
    >
      <EmailCloseButton onClick={() => setOpenEmail(null)} />
      <EmailTitle>{email.subject}</EmailTitle>
      <EmailData>De: {`<${email.from}>`}</EmailData>
      <EmailData>Para: {`<john.doe@email.com>`}</EmailData>
      <EmailData>
        Em: {sendDate.toLocaleDateString()} {sendDate.toLocaleTimeString()}
      </EmailData>
      <hr className="my-4" />
      <span>{email.body}</span>
    </div>
  );
};
