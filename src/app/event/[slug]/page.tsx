import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, Ticket } from "lucide-react";
import Image from "next/image";

// Mock data for demonstration
const event = {
  id: 1,
  title: "Web Development Workshop 2024",
  thumbnail:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
  date: "2024-04-15",
  time: "10:00 AM - 4:00 PM",
  location: "Tech Hub Conference Center, New York",
  price: 199,
  availableSeats: 50,
  description: `
    <p class="mb-4">Join us for an intensive one-day workshop where you'll learn the latest web development technologies and best practices from industry experts.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">What You'll Learn</h2>
    <ul class="list-disc pl-6 mb-6">
      <li>Modern JavaScript frameworks and libraries</li>
      <li>Responsive design principles</li>
      <li>Backend integration strategies</li>
      <li>Performance optimization techniques</li>
      <li>DevOps and deployment workflows</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Who Should Attend</h2>
    <p class="mb-4">This workshop is perfect for intermediate developers looking to upgrade their skills and stay current with modern web development practices.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">What's Included</h2>
    <ul class="list-disc pl-6 mb-6">
      <li>Full-day intensive workshop</li>
      <li>Lunch and refreshments</li>
      <li>Workshop materials and resources</li>
      <li>Certificate of completion</li>
      <li>Networking opportunities</li>
    </ul>
  `,
  speakers: [
    {
      name: "Sarah Johnson",
      role: "Lead Developer at TechCorp",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Senior Architect at WebScale",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
  ],
};

export default function EventDetailsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 pt-[70px]">
      <div className="mb-12 space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">{event.title}</h1>
      </div>

      <div className="relative mb-12 h-[400px] overflow-hidden rounded-lg">
        <Image
          src={event.thumbnail}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mb-12 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: event.description }}
          />

          <h2 className="mb-6 mt-12 text-2xl font-bold">Featured Speakers</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {event.speakers.map((speaker) => (
              <Card key={speaker.name}>
                <CardContent className="flex items-center space-x-4 p-6">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{speaker.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {speaker.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="mr-3 size-5 text-muted-foreground" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-3 size-5 text-muted-foreground" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-3 size-7 text-muted-foreground" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-3 size-5 text-muted-foreground" />
                  <span>{event.availableSeats} seats available</span>
                </div>
                <div className="flex items-center">
                  <Ticket className="mr-3 size-5 text-muted-foreground" />
                  <span>${event.price}</span>
                </div>
                <Button className="mt-4 w-full">Buy Ticket</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
