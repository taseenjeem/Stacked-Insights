import EventCard from "@/components/ui/event-card";

export default function Events() {
  return (
    <aside className="hidden min-h-screen w-1/5 space-y-3 md:block">
      <h1 className="text-2xl font-semibold">Events</h1>
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
