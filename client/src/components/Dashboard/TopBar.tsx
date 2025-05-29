export const TopBar = ({ title }: { title: string }) => {
  return (
    <div className="border-b px-4 mb-4 mt-2 p-2 border-stone-200">
      <div className="flex items-center justify-between p-0.5">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </div>
  );
};
