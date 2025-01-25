import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Topics() {
  const user = await currentUser();

  return (
    <aside className="hidden min-h-screen w-1/5 space-y-3 md:block">
      {!user ? (
        <Card>
          <CardHeader>
            <CardTitle>
              Welcome to Stacked Insights – Where Ideas Take Shape
            </CardTitle>
            <CardDescription>
              Join a community driven by curiosity and innovation. Explore
              insightful blogs, share your thoughts, and stack your knowledge
              with us.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href={"/register"} className="w-full">
              <Button variant={"secondary"} className="w-full">
                Create New Account
              </Button>
            </Link>
            <Link href={"/sign-in"} className="w-full">
              <Button variant={"outline"} className="mt-2 w-full">
                Sign In
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Welcome back, {user.lastName}!</CardTitle>
            <CardDescription>
              Ready to dive into fresh insights and ideas? Let’s get started!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src={
                    user?.hasImage && user?.imageUrl
                      ? user.imageUrl
                      : "https://github.com/shadcn.png"
                  }
                />
              </Avatar>
              <div>
                <strong>{user.fullName}</strong>
                <p className="text-sm text-muted-foreground">
                  @{user.username}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link href={"/profile"} className="w-full">
                <Button variant={"secondary"} className="w-full">
                  Manage Profile
                </Button>
              </Link>
              <Link href={"/sign-in"} className="w-full">
                <Button variant={"outline"} className="mt-2 w-full">
                  Share Your Next Big Idea
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="w-full">
            <li className="w-full">
              <Link href={`/`} className="w-full">
                <Button variant={"ghost"} className="w-full justify-start">
                  Podcasts
                </Button>
              </Link>
              <Link href={`/`} className="w-full">
                <Button variant={"ghost"} className="w-full justify-start">
                  Podcasts
                </Button>
              </Link>
              <Link href={`/`} className="w-full">
                <Button variant={"ghost"} className="w-full justify-start">
                  Podcasts
                </Button>
              </Link>
              <Link href={`/`} className="w-full">
                <Button variant={"ghost"} className="w-full justify-start">
                  Podcasts
                </Button>
              </Link>
              <Link href={`/`} className="w-full">
                <Button variant={"ghost"} className="w-full justify-start">
                  Podcasts
                </Button>
              </Link>
              <Link href={`/`} className="w-full">
                <Button variant={"ghost"} className="w-full justify-start">
                  Podcasts
                </Button>
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </aside>
  );
}
