import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2">
      <Input type="text" className="w-full" placeholder="Search..." />
      <Button variant={"outline"} className="px-3 py-2">
        <Search className="size-6" /> Search
      </Button>
    </div>
  );
}
