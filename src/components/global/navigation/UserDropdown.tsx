"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUserRound, LogOut, User } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";

export default function UserDropdown() {
  const { signOut } = useClerk();

  const handleSignout = () => {
    signOut({ redirectUrl: "/" });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size={"sm"}
            className="focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <CircleUserRound />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
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
