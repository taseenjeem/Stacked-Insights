import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bookmark, Calendar, Heart } from "lucide-react";
import Image from "next/image";

// Mock data for demonstration
const blogPost = {
  id: 1,
  title: "Getting Started with Web Development",
  author: {
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    role: "Senior Developer",
  },
  publishDate: "2024-03-20",
  readTime: "8 min read",
  thumbnail:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
  content: `
    <p class="mb-4">Web development is an exciting journey that combines creativity with technical skills. As you embark on this path, you'll discover the fundamental building blocks that make up the modern web.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Foundation: HTML, CSS, and JavaScript</h2>
    <p class="mb-4">Every web developer's journey begins with understanding these three core technologies. HTML provides structure, CSS adds style, and JavaScript brings interactivity to your web pages.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Modern Development Tools</h2>
    <p class="mb-4">Today's web development landscape is filled with powerful tools and frameworks that make building complex applications easier than ever. From React and Vue to Next.js and Svelte, developers have many options to choose from.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
    <p class="mb-4">As you progress in your journey, it's crucial to learn and follow best practices. This includes writing clean, maintainable code, optimizing performance, and ensuring accessibility for all users.</p>
  `,
};

export default function BlogDetailsPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 pt-[70px]">
      <div className="mb-12 space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">{blogPost.title}</h1>
        <div className="flex items-center justify-center space-x-4 text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <time>{new Date(blogPost.publishDate).toLocaleDateString()}</time>
          </div>
          <span>•</span>
          <span>{blogPost.readTime}</span>
        </div>
      </div>

      <div className="relative mb-12 h-[400px] overflow-hidden rounded-lg">
        <Image
          src={blogPost.thumbnail}
          alt={blogPost.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={blogPost.author.avatar}
                alt={blogPost.author.name}
              />
              <AvatarFallback>{blogPost.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{blogPost.author.name}</div>
              <div className="text-sm text-muted-foreground">
                {blogPost.author.role}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-2 md:w-auto">
          <Button variant={"outline"} className="w-full">
            <Heart />
            Like
          </Button>
          <Button variant={"outline"} className="w-full">
            <Bookmark />
            Save
          </Button>
        </div>
      </div>

      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: blogPost.content }}
      />
    </article>
  );
}
