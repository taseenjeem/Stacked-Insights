import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Edit, Trash2, Calendar, Clock } from "lucide-react";
import Image from "next/image";

// Mock data for demonstration
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

const events = [
  {
    id: 1,
    title: "Web Development Workshop",
    thumbnail:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
    eventDate: "2024-04-15",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=300&fit=crop",
    eventDate: "2024-05-01",
    status: "Open for Registration",
  },
];

export default function ManageContentsPage() {
  return (
    <div className="container mx-auto min-h-screen space-y-8 py-8 pt-[70px]">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Contents</h1>
        <div className="space-x-4">
          <Button>
            <PlusCircle />
            Create New Blog
          </Button>
          <Button>
            <PlusCircle />
            Create New Event
          </Button>
        </div>
      </div>

      <Tabs defaultValue="blogs" className="w-full">
        <TabsList className="grid w-full max-w-[400px] grid-cols-2">
          <TabsTrigger value="blogs">Blogs</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="blogs" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Card key={blog.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="line-clamp-2 text-xl font-semibold">
                    {blog.title}
                  </h3>
                  <div className="mt-2 flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>
                      {new Date(blog.publishDate).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit />
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash2 />
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={event.thumbnail}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="line-clamp-2 text-xl font-semibold">
                    {event.title}
                  </h3>
                  <div className="mt-2 flex flex-col gap-2 text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>
                        {new Date(event.eventDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{event.status}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit />
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash2 />
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
