"use client";
import ArticleCard from "@/components/ui/article-card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ArticleFeed() {
  const [blogs, setBlogs] = useState("discover");

  return (
    <div className="min-h-screen w-full space-y-3 md:w-3/5">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Article Feed</h1>
        <div className="space-x-3">
          <Button
            size={"sm"}
            variant={blogs === "discover" ? "default" : "outline"}
            onClick={() => setBlogs("discover")}
          >
            Discover
          </Button>
          <Button
            size={"sm"}
            variant={blogs === "following" ? "default" : "outline"}
            onClick={() => setBlogs("following")}
          >
            Following
          </Button>
        </div>
      </div>
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
