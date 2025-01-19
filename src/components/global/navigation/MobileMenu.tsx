"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggler";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navItems = [
  {
    id: "1",
    title: "Home",
    href: "/",
  },
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

export default function MobileMenu() {
  const path = usePathname();

  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size={"icon"}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="mt-5 w-full">
            <ul className="flex w-full flex-col items-center gap-2">
              {navItems.map((item) => (
                <li key={item.id} className="w-full">
                  <SheetClose asChild>
                    <Link href={item.href}>
                      <Button
                        size={"sm"}
                        variant={path === item.href ? "default" : "ghost"}
                        className="w-full"
                      >
                        {item.title}
                      </Button>
                    </Link>
                  </SheetClose>
                </li>
              ))}
              <li className="w-full">
                <ModeToggle isMobile />
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
