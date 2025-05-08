import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="flex items-center gap-2">
      <Input
        required
        type="text"
        className="w-full focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Search..."
      />
      <Button type="submit" variant={"outline"}>
        <Search className="size-6" /> Search
      </Button>
    </form>
  );
}
