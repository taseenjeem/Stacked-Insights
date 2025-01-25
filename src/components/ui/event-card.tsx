import Image from "next/image";
import { Card, CardHeader, CardTitle } from "./card";
import thumbnail from "/public/images/react19.png";
import Link from "next/link";
import { Badge } from "./badge";

export default function EventCard() {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="aspect-h-9 aspect-w-16 relative rounded-lg">
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
            className="text-lg leading-none duration-300 hover:text-muted-foreground"
          >
            React 19: Unveiling the Game-Changing Features for Developers
          </Link>
        </CardTitle>
        <div className="flex flex-wrap gap-2">
          <Badge variant={"destructive"}>Event</Badge>
          <Badge variant={"destructive"}>Registration On Going</Badge>
        </div>
      </CardHeader>
    </Card>
  );
}
