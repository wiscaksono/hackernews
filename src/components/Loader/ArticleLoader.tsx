export const ArticleLoader = ({ idx }: { idx: number }) => {
  const randomWidth = `${Math.floor(Math.random() * 91) + 10}%`;
  return (
    <article className="space-y-2 w-full py-2">
      <div className="space-y-1">
        <div
          className="h-4 bg-gray-300 animate-pulse"
          style={{ animationDelay: `1.${idx}s`, width: randomWidth }}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="w-20 h-3 bg-gray-300" />
          <div className="w-20 h-3 bg-gray-300" />
        </div>
        <div className="w-28 h-3 bg-gray-300" />
      </div>
    </article>
  );
};
