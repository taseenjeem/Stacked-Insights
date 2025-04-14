import ArticleCard from "@/components/ui/article-card";

export default function ArticleFeed() {
  return (
    <div className="min-h-screen w-full space-y-3 md:w-3/5">
      <h1 className="text-2xl font-semibold">Article Feed</h1>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
}
