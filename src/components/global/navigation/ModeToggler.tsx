"use client";
import { MonitorSmartphone, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface ModeToggleProps {
  isMobile?: boolean;
}

export function ModeToggle({ isMobile = false }: ModeToggleProps) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={"sm"}
          className={`${isMobile ? "w-full" : ""} focus:ring-0`}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isMobile ? "center" : "end"}
        className={isMobile ? "w-full" : ""}
      >
        <DropdownMenuItem
          className={isMobile ? "w-full" : ""}
          onClick={() => setTheme("light")}
        >
          <Sun /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className={isMobile ? "w-full" : ""}
          onClick={() => setTheme("dark")}
        >
          <Moon /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className={isMobile ? "w-full" : ""}
          onClick={() => setTheme("system")}
        >
          <MonitorSmartphone /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
