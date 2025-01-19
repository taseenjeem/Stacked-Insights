"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggler";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

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
            <SheetTitle className="hidden"></SheetTitle>
            <ul className="flex w-full flex-col items-center gap-2">
              <li className="w-full">
                <SheetClose asChild>
                  <Link href={``}>
                    <Button
                      size={"sm"}
                      variant={path === "/login" ? "default" : "ghost"}
                      className="w-full"
                    >
                      Login
                    </Button>
                  </Link>
                </SheetClose>
              </li>
              <li className="w-full">
                <SheetClose asChild>
                  <Link href={``}>
                    <Button
                      size={"sm"}
                      variant={path === "/register" ? "default" : "ghost"}
                      className="w-full"
                    >
                      Create An Account
                    </Button>
                  </Link>
                </SheetClose>
              </li>
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
