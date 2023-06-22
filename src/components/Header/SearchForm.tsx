import { FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

export const SearchForm = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form
      className="
        min-w-0
        flex-grow flex 
      "
      onSubmit={handleSubmit}
    >
      <input
        className="
          min-w-0 w-full p-2 rounded-l-lg 
          border-2 border-transparent
          bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-50
          focus:outline-none focus:border-primary-400 transition-colors
        "
        type="text"
        placeholder="Pesquisar..."
      />
      <button
        className="
          min-w-0 py-2 px-4 rounded-r-lg border-2 border-transparent
          bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-50
          focus:outline-none focus:border-primary-400 focus:text-primary-400
          transition-colors hover:border-primary-400 hover:text-primary-400
        "
      >
        <FiSearch />
      </button>
    </form>
  );
};
