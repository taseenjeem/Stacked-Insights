"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { useClerk, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function UserDropdown() {
  const { signOut } = useClerk();
  const { user } = useUser();

  const handleSignout = () => {
    signOut({ redirectUrl: "/" });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {user && (
            <Button
              variant="outline"
              size={"sm"}
              className="focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <div className="flex items-center gap-2">
                <Avatar className="h-5 w-5">
                  <AvatarImage
                    src={
                      user?.hasImage && user?.imageUrl
                        ? user.imageUrl
                        : "https://github.com/shadcn.png"
                    }
                  />
                </Avatar>
                <h3 className="text-sm leading-none">{user.fullName}</h3>
              </div>
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-full max-w-56">
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
    </>
  );
}
