export const ArticleLoader = ({ idx }: { idx: number }) => {
  return (
    <article className="space-y-2 w-full py-2">
      <div className="space-y-1">
        <div
          className="w-full h-4 bg-gray-300 animate-pulse"
          style={{ animationDelay: `1.${idx}s` }}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="w-20 h-3 bg-gray-300" />
        <div className="w-28 h-3 bg-gray-300" />
      </div>
    </article>
  );
};
