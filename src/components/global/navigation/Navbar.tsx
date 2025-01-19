import Link from "next/link";
import { ModeToggle } from "./ModeToggler";
import MobileMenu from "./MobileMenu";
import ActiveLink from "./ActiveLink";

const navItems = [
  {
    id: "5",
    title: "Shop",
    href: "/shop",
  },
  {
    id: "2",
    title: "About",
    href: "/about",
  },
  {
    id: "3",
    title: "Services",
    href: "/services",
  },
  {
    id: "4",
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-300 bg-zinc-50 bg-opacity-50 py-2 backdrop-blur-3xl dark:border-zinc-800 dark:bg-zinc-950">
      <header className="container flex items-center justify-between">
        <Link href={`/`} className="text-2xl font-bold">
          Stacked Insights
        </Link>
        <div className="hidden md:block">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <ActiveLink href={item.href}>{item.title}</ActiveLink>
              </li>
            ))}
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
