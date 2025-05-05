import { Button } from "@/components/ui/button";
import EventCard from "@/components/ui/event-card";
import Link from "next/link";

export default function Events() {
  return (
    <aside className="hidden min-h-screen w-1/5 space-y-3 md:block">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Events</h1>
        <Button size={"sm"}>
          <Link href="/events">See All</Link>
        </Button>
      </div>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </aside>
  );
}
