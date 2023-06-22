import { useState } from 'react';
import { Header } from './components/Header';
import { Container } from './components/Container';
import { Sidebar } from './components/Sidebar';
import { EmailList } from './components/EmailList';
import { Bottombar } from './components/Bottombar';

import { TypeEmail } from './components/EmailList/EmailListItem';
import { EmailContent } from './components/EmailContent';

function App() {
  const [openEmail, setOpenEmail] = useState<TypeEmail | null>(null);

  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative">
          <Sidebar />
          <EmailList setOpenEmail={setOpenEmail} />
          {openEmail && <EmailContent email={openEmail} setOpenEmail={setOpenEmail}/>}
          <Bottombar />
        </div>
      </Container>
    </>
  );
}

export default App;
