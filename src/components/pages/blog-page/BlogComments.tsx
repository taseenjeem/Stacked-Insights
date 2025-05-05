import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface BlogPostProps {
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export default function BlogComments({ author }: BlogPostProps) {
  return (
    <>
      <h3 className="text-2xl font-semibold">Comments</h3>
      <div className="mb-5 mt-3">
        <Separator />
      </div>

      <div className="space-y-4">
        <div className="rounded-md border p-4">
          <div className="flex justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{author.name}</div>
                <div className="text-sm text-muted-foreground">
                  {author.role}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">1w ago</p>
          </div>

          <p className="mt-4 italic">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            soluta animi pariatur nulla facilis repudiandae excepturi, dolores
            blanditiis? Animi, vitae. Enim voluptatibus saepe facilis tempora
            amet ipsa, quis rem veniam reprehenderit, voluptatum in. Debitis
            atque vel animi, consequuntur cum laboriosam, nemo quaerat magni
            error, eaque iste perferendis impedit blanditiis temporibus dolorum
            corrupti at excepturi quas odit. Velit magni minima repudiandae! Ex
            magni alias, ut quo totam corporis nisi vel consequatur vero
            repudiandae rerum deleniti architecto nemo exercitationem sit natus,
            aliquid possimus quos sapiente accusamus nesciunt ducimus officia!
            Est natus commodi excepturi a, doloribus, delectus, porro similique
            alias illo cumque dolores.
          </p>
        </div>
      </div>
    </>
  );
}
