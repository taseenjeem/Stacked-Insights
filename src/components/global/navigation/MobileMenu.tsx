"use client";
import { LogOut, Menu, User } from "lucide-react";
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
import { useClerk, useUser } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function MobileMenu() {
  const path = usePathname();
  const { user } = useUser();
  const { signOut } = useClerk();

  const handleSignout = () => {
    signOut({ redirectUrl: "/" });
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size={"icon"}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="mt-5 w-full">
            <SheetTitle className="hidden"></SheetTitle>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 rounded-lg border p-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={
                          user?.hasImage && user?.imageUrl
                            ? user.imageUrl
                            : "https://github.com/shadcn.png"
                        }
                      />
                    </Avatar>
                    <div>
                      <h3 className="text-sm leading-none">{user.fullName}</h3>
                      <p className="text-xs text-muted-foreground">
                        @{user.username}
                      </p>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-full max-w-56">
                  <DropdownMenuGroup className="mx-auto">
                    <DropdownMenuItem asChild>
                      <Link href={`/profile`}>
                        <User />
                        <span>Manage Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleSignout}>
                      <LogOut />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <ul className="flex w-full flex-col items-center gap-2">
                <li className="w-full">
                  <SheetClose asChild>
                    <Link href={`/login`}>
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
                    <Link href={`/register`}>
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
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
