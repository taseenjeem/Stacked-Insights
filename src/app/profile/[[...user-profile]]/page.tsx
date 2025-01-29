"use client";
import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<"dark" | undefined>(
    undefined,
  );

  useEffect(() => {
    if (theme === "system") {
      setCurrentTheme(systemTheme as undefined | "dark");
    } else {
      setCurrentTheme(theme as undefined | "dark");
    }
  }, [theme, systemTheme]);

  if (!currentTheme) return null;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <UserProfile
        appearance={{
          baseTheme: currentTheme === "dark" ? dark : undefined,
        }}
      />
    </div>
  );
}
