import { useState } from 'react';
import { Button } from './Button';
import {
  FiAlertOctagon,
  FiArchive,
  FiEdit3,
  FiFileText,
  FiInbox,
  FiMenu,
  FiTrash2,
  FiX,
} from 'react-icons/fi';

const inlineIcon = 'inline sm:mr-2 mb-1';
const smOnlyText = 'hidden sm:inline';

export const Bottombar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex gap-2 items-center relative md:hidden">
      <Button>
        <FiEdit3 className={inlineIcon} />
        <span className={smOnlyText}>Escrever</span>
      </Button>
      <Button active>
        <FiInbox className={inlineIcon} />
        <span className={smOnlyText}>Caixa de Entrada</span>
      </Button>
      <Button>
        <FiFileText className={inlineIcon} />
        <span className={smOnlyText}>Rascunhos</span>
      </Button>
      <Button onClick={() => setIsMenuOpen(state => !state)}>
        {isMenuOpen ? (
          <>
            <FiX className={inlineIcon} />
            <span className={smOnlyText}>Fechar</span>
          </>
        ) : (
          <>
            <FiMenu className={inlineIcon} />
            <span className={smOnlyText}>Mais</span>
          </>
        )}
      </Button>
      <div
        className={`
          ${isMenuOpen ? 'absolute' : 'hidden'}
          right-0 bottom-12 flex flex-col gap-2 w-40
        `}
      >
        <Button>
          <FiArchive className={inlineIcon} />
          <span className={smOnlyText}>Arquivados</span>
        </Button>
        <Button>
          <FiAlertOctagon className={inlineIcon} />
          <span className={smOnlyText}>Spam</span>
        </Button>
        <Button>
          <FiTrash2 className={inlineIcon} />
          <span className={smOnlyText}>Lixeira</span>
        </Button>
      </div>
    </div>
  );
};
