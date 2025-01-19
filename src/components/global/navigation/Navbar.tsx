import Link from "next/link";
import { ModeToggle } from "./ModeToggler";
import MobileMenu from "./MobileMenu";
import ActiveLink from "./ActiveLink";
import SearchBlogs from "./SearchBlogs";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200 bg-zinc-50 bg-opacity-50 py-2 backdrop-blur-3xl dark:border-zinc-800 dark:bg-zinc-950">
      <header className="container flex items-center justify-between">
        <Link href={`/`} className="text-2xl font-semibold">
          Stacked Insights
        </Link>
        <div className="hidden md:block">
          <ul className="flex items-center gap-2">
            <ActiveLink href="/login">Login</ActiveLink>
            <ActiveLink href="/register">Create An Account</ActiveLink>
            <SearchBlogs />
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
        <MobileMenu />
      </header>
    </nav>
  );
}
