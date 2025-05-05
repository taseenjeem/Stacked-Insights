import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function BlogCommentForm() {
  return (
    <form className="space-y-4">
      <Textarea
        className="w-full focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Write a comment..."
        rows={6}
      />
      <div className="flex justify-end">
        <Button>Make Comment</Button>
      </div>
    </form>
  );
}
