import Link from "next/link";
import { ModeToggle } from "./ModeToggler";
import MobileMenu from "./MobileMenu";
import ActiveLink from "./ActiveLink";
import SearchBlogs from "./SearchBlogs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";

export default async function Navbar() {
  const { userId } = await auth();
  const user = await currentUser();

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200 bg-zinc-50 bg-opacity-50 py-2 backdrop-blur-3xl dark:border-zinc-800 dark:bg-zinc-950">
      <header className="container flex items-center justify-between">
        <Link href={`/`} className="text-2xl font-semibold">
          Stacked Insights
        </Link>
        <div className="hidden md:block">
          <ul className="flex items-center gap-2">
            {userId && user ? (
              <SignOutButton />
            ) : (
              <>
                <ActiveLink href="/sign-in">Login</ActiveLink>
                <ActiveLink href="/register">Create An Account</ActiveLink>
              </>
            )}
            <SearchBlogs />
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
        <div className="flex gap-2 md:hidden">
          <SearchBlogs />
          <MobileMenu />
        </div>
      </header>
    </nav>
  );
}
