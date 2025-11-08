interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  source: { name: string };
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition transform"
    >
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-semibold text-lg">{article.title}</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">{article.description}</p>
        <p className="text-xs text-gray-500 mt-2">Source: {article.source.name}</p>
      </div>
    </a>
  );
}