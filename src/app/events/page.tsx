"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  Ticket,
  UserPen,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Mock data for demonstration
const events = [
  {
    id: 1,
    title: "Web Development Workshop 2024",
    organizer: "Vercel Inc.",
    thumbnail:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
    date: "2024-04-15",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Hub Conference Center, New York",
    price: 199,
    category: "Workshop",
    availableSeats: 50,
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    organizer: "Vercel Inc.",
    thumbnail:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=300&fit=crop",
    date: "2024-05-01",
    time: "9:00 AM - 6:00 PM",
    location: "Convention Center, San Francisco",
    price: 299,
    category: "Conference",
    availableSeats: 200,
  },
  {
    id: 3,
    title: "Mobile App Development Bootcamp",
    organizer: "Vercel Inc.",
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    date: "2024-04-20",
    time: "10:00 AM - 5:00 PM",
    location: "Innovation Hub, Austin",
    price: 249,
    category: "Workshop",
    availableSeats: 30,
  },
  {
    id: 4,
    title: "AI & Machine Learning Summit",
    organizer: "Vercel Inc.",
    thumbnail:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
    date: "2024-05-15",
    time: "9:00 AM - 5:00 PM",
    location: "Data Center, Seattle",
    price: 399,
    category: "Conference",
    availableSeats: 150,
  },
  {
    id: 5,
    title: "DevOps Practices Workshop",
    organizer: "Vercel Inc.",
    thumbnail:
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=500&h=300&fit=crop",
    date: "2024-04-25",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Campus, Boston",
    price: 199,
    category: "Workshop",
    availableSeats: 40,
  },
  {
    id: 6,
    title: "Cybersecurity Conference 2024",
    organizer: "Vercel Inc.",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
    date: "2024-05-10",
    time: "9:00 AM - 6:00 PM",
    location: "Security Center, Chicago",
    price: 349,
    category: "Conference",
    availableSeats: 180,
  },
];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8 pt-[70px]">
      <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <h1 className="text-3xl font-bold">Upcoming Events</h1>
        <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
          <div className="relative w-full flex-grow sm:max-w-[900px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <Input
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0 sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Conference">Conference</SelectItem>
              <SelectItem value="Workshop">Workshop</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <Card key={event.id} className="flex flex-col">
            <div className="relative h-48">
              <Image
                src={event.thumbnail}
                alt={event.title}
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <CardContent className="flex-grow pt-6">
              <h3 className="mb-4 line-clamp-2 text-xl font-semibold">
                {event.title}
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center">
                  <UserPen className="mr-2 h-4 w-4" />
                  <span>{event.organizer}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <span>{event.availableSeats} seats available</span>
                </div>
                <div className="flex items-center">
                  <Ticket className="mr-2 h-4 w-4" />
                  <span>$ {event.price}</span>
                </div>
              </div>
              <div className="mt-4">
                <Badge variant={"destructive"} className="bg-green-900">
                  Registration On Going
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <Link href={`/events/${event.id}`} className="w-full">
                <Button className="w-full">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground">
            No events found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
