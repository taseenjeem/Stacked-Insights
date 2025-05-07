import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, UserRoundPlus, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock user data for demonstration
const user = {
  name: "Sarah Johnson",
  username: "@sarahjohnson",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  bio: "Senior Full Stack Developer passionate about creating innovative web solutions. Experienced in React, Node.js, and cloud technologies.",
  position: "Senior Developer at TechCorp",
};

// Mock blogs data
const blogs = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    thumbnail:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    publishDate: "2024-03-20",
  },
  {
    id: 2,
    title: "Understanding Modern JavaScript",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    publishDate: "2024-03-18",
  },
];

// Mock events data
const events = [
  {
    id: 1,
    title: "Web Development Workshop",
    thumbnail:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
    eventDate: "2024-04-15",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Hub Conference Center, New York",
    availableSeats: 50,
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=300&fit=crop",
    eventDate: "2024-05-01",
    time: "9:00 AM - 6:00 PM",
    location: "Convention Center, San Francisco",
    availableSeats: 200,
  },
];

export default function ProfilePage() {
  return (
    <div className="container mx-auto min-h-screen px-4 py-8 pt-[71px]">
      <div className="mx-auto max-w-4xl">
        {/* Profile Header */}
        <div className="mb-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <Avatar className="h-32 w-32">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="mb-2 text-muted-foreground">{user.username}</p>
              <p className="mb-4 text-muted-foreground">{user.position}</p>
              <p className="mb-4 max-w-2xl">{user.bio}</p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start">
                <Button className="ml-auto md:ml-0">
                  <UserRoundPlus />
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="blogs" className="w-full">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2">
            <TabsTrigger value="blogs">Blogs</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          {/* Blogs Tab */}
          <TabsContent value="blogs" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {blogs.map((blog) => (
                <Link href={`/blog/${blog.id}`} key={blog.id}>
                  <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="mb-2 line-clamp-2 text-xl font-semibold">
                        {blog.title}
                      </h3>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <time>
                          {new Date(blog.publishDate).toLocaleDateString()}
                        </time>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {events.map((event) => (
                <Link href={`/event/${event.id}`} key={event.id}>
                  <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                        src={event.thumbnail}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="mb-2 line-clamp-2 text-xl font-semibold">
                        {event.title}
                      </h3>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          <time>
                            {new Date(event.eventDate).toLocaleDateString()}
                          </time>
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
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
