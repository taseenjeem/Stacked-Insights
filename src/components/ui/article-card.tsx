import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import thumbnail from "/public/images/react19.png";
import { Badge } from "./badge";
import { Calendar1, Heart, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";

export default function ArticleCard() {
  return (
    <article>
      <Card>
        <CardHeader className="space-y-4">
          <div className="aspect-h-5 aspect-w-16 relative rounded-lg">
            <Image
              quality={50}
              src={thumbnail}
              alt="thumbnail image"
              className="rounded-md object-cover object-center"
              fill
            />
          </div>
          <Link href={``} className="duration-300 hover:text-muted-foreground">
            <CardTitle className="text-xl leading-none md:text-2xl">
              React 19: Unveiling the Game-Changing Features for Developers
            </CardTitle>
          </Link>
          <div className="flex flex-wrap gap-2">
            <Badge>Web Development</Badge>
            <Badge>React.js</Badge>
            <Badge>javascript</Badge>
            <Badge>compiler</Badge>
            <Badge>next.js</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-between gap-y-5 md:flex-row md:items-center md:gap-y-0">
            <div className="flex items-center gap-x-3">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div>
                <strong>Md. Ta-Seen Fuad Jeem</strong>
                <p className="text-sm text-muted-foreground">@taseenjeem</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 md:gap-x-5">
              <span className="flex items-center gap-1">
                <Heart size={18} />
                <p>127 Likes</p>
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle size={18} />
                <p>127 Comments</p>
              </span>
              <span className="flex items-center gap-1">
                <Calendar1 size={18} />
                <p>Published at: 17 feb 2025</p>
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
