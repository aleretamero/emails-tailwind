export const Avatar = (props: { letter: string }) => {
  return (
    <div
      className="
        rounded-full bg-rose-300 dark:bg-rose-600
        w-10 h-10 grid place-content-center
      "
    >
      <span className="mb-0.5">{props.letter}</span>
    </div>
  );
};
