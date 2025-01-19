"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ActiveLink({
  href,
  children,
  className,
}: ActiveLinkProps) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link href={href}>
      <Button
        size={"sm"}
        variant={isActive ? "default" : "ghost"}
        className={className}
      >
        {children}
      </Button>
    </Link>
  );
}
