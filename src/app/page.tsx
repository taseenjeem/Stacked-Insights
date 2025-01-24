import ArticleFeed from "@/components/pages/landing-page/ArticleFeed";
import Events from "@/components/pages/landing-page/Events";
import Topics from "@/components/pages/landing-page/Topics";

export default function LandingPage() {
  return (
    <>
      <div className="container min-h-screen pt-[70px]">
        <div className="flex items-start gap-2">
          <Topics />
          <ArticleFeed />
          <Events />
        </div>
      </div>
    </>
  );
}
