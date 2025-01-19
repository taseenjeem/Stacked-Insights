import * as React from "react";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Brand Center
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Discord Server
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Newsletter
            </h2>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
                aria-label="Email for newsletter"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2025{" "}
            <Link href="/" className="hover:underline">
              WalletXpress™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
