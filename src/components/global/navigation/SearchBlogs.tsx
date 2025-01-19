import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SearchBar from "@/components/ui/search-bar";

export default function SearchBlogs() {
  return (
    <>
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
    </>
  );
}
