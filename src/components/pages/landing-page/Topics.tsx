import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Topics() {
  return (
    <aside className="min-h-screen w-1/5">
      <Card>
        <CardHeader>
          <CardTitle>
            Welcome to Stacked Insights – Where Ideas Take Shape
          </CardTitle>
          <CardDescription>
            Join a community driven by curiosity and innovation. Explore
            insightful blogs, share your thoughts, and stack your knowledge with
            us.
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

      <div className="mt-4 w-full rounded-lg border p-2">
        <h2 className="text-center text-lg font-semibold">Topics</h2>
        <Separator className="my-2" />
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
      </div>
    </aside>
  );
}
