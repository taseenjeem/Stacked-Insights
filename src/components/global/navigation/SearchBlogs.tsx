"use client";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Search } from "lucide-react";
import SearchBar from "@/components/ui/search-bar";
import { useState } from "react";

export default function SearchBlogs() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"} size={"sm"}>
            <Search className="size-6" /> Search
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your Quest for Knowledge Starts Here!</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <SearchBar />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <Search className="size-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Your Quest for Knowledge Starts Here!</DrawerTitle>
          </DrawerHeader>
          <div className="mt-4">
            <SearchBar />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
