import { WriteButton } from './WriteButton';
import { Button } from './Button';
import {
  FiAlertOctagon,
  FiArchive,
  FiEdit3,
  FiFileText,
  FiInbox,
  FiSend,
  FiTrash2,
} from 'react-icons/fi';

const inlineicon = 'inline mr-1 mb-1';

export const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col items-start gap-2 grow-0 basis-48 shrink-1">
      <WriteButton>
        <FiEdit3 className={inlineicon} /> Escrever
      </WriteButton>
      <Button active>
        <FiInbox className={inlineicon} /> Caixa de Entrada
      </Button>
      <Button>
        <FiSend className={inlineicon} /> Enviados
      </Button>
      <Button>
        <FiFileText className={inlineicon} /> Rascunhos
      </Button>
      <Button>
        <FiArchive className={inlineicon} /> Arquivados
      </Button>
      <Button>
        <FiAlertOctagon className={inlineicon} /> Spam
      </Button>
      <Button>
        <FiTrash2 className={inlineicon} /> Lixeira
      </Button>
    </aside>
  );
};
