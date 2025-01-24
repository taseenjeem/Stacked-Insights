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
          <div className="aspect-w-16 aspect-h-5 relative rounded-lg">
            <Image
              quality={50}
              src={thumbnail}
              alt="thumbnail image"
              className="rounded-md object-cover object-center"
              fill
            />
          </div>
          <CardTitle>
            <Link
              href={``}
              className="duration-300 hover:text-muted-foreground"
            >
              React 19: Unveiling the Game-Changing Features for Developers
            </Link>
          </CardTitle>
          <div className="flex flex-wrap gap-2">
            <Badge>Web Development</Badge>
            <Badge>React.js</Badge>
            <Badge>javascript</Badge>
            <Badge>compiler</Badge>
            <Badge>next.js</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
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
            <div className="flex flex-wrap items-center gap-5">
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
