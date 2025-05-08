"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Link as LinkIcon,
  List,
  ListOrdered,
  Undo,
  Redo,
  Heading1,
  Heading2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Image as ImageIcon,
  Quote,
  Code,
  Strikethrough,
  X,
} from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreateBlogPage() {
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right", "justify"],
      }),
      Image,
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Placeholder.configure({
        placeholder: "Write your blog content here...",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-lg dark:prose-invert max-w-none min-h-[300px] focus:outline-none",
      },
    },
  });

  const handleImageSubmit = () => {
    if (imageUrl) {
      editor?.chain().focus().setImage({ src: imageUrl }).run();
      setImageUrl("");
      setIsImageDialogOpen(false);
    }
  };

  const handleLinkSubmit = () => {
    if (linkUrl) {
      editor?.chain().focus().setLink({ href: linkUrl }).run();
      setLinkUrl("");
      setIsLinkDialogOpen(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-[71px]">
      <Card className="mx-auto max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl">Create New Blog Post</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Title Input */}
            <div className="space-y-2">
              <Label htmlFor="title">Blog Title</Label>
              <Input
                required
                id="title"
                placeholder="Enter your blog title"
                className="text-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            {/* Topic Input */}
            <div className="space-y-2">
              <Label htmlFor="topic">Blog topic</Label>
              <Select>
                <SelectTrigger className="focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0">
                  <SelectValue placeholder="Please select a topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Read Time Input */}
            <div className="space-y-2">
              <Label htmlFor="readTime">Read Time (in minutes)</Label>
              <Input
                required
                min={1}
                id="readTime"
                type="number"
                placeholder="e.g., 5"
                className="focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            {/* Thumbnail URL Input */}
            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail URL</Label>
              <Input
                required
                id="thumbnail"
                type="url"
                placeholder="Enter image URL for blog thumbnail"
                className="focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          {/* Rich Text Editor */}
          <div className="space-y-2">
            <Label>Content</Label>
            <Card>
              <CardContent className="p-4">
                {/* Editor Toolbar */}
                <div className="mb-4 flex flex-wrap border-b pb-4">
                  {/* Text Formatting */}
                  <div className="mb-2 flex flex-wrap gap-2">
                    <Toggle
                      variant="outline"
                      size="default"
                      pressed={editor?.isActive("bold")}
                      onPressedChange={() =>
                        editor?.chain().focus().toggleBold().run()
                      }
                    >
                      <Bold className="h-4 w-4" />
                    </Toggle>
                    <Toggle
                      variant="outline"
                      size="default"
                      pressed={editor?.isActive("italic")}
                      onPressedChange={() =>
                        editor?.chain().focus().toggleItalic().run()
                      }
                    >
                      <Italic className="h-4 w-4" />
                    </Toggle>
                    <Toggle
                      variant="outline"
                      size="default"
                      pressed={editor?.isActive("underline")}
                      onPressedChange={() =>
                        editor?.chain().focus().toggleUnderline().run()
                      }
                    >
                      <UnderlineIcon className="h-4 w-4" />
                    </Toggle>
                    <Toggle
                      variant="outline"
                      size="default"
                      pressed={editor?.isActive("strike")}
                      onPressedChange={() =>
                        editor?.chain().focus().toggleStrike().run()
                      }
                    >
                      <Strikethrough className="h-4 w-4" />
                    </Toggle>

                    <Toggle
                      variant="outline"
                      size="default"
                      pressed={editor?.isActive("heading", { level: 1 })}
                      onPressedChange={() =>
                        editor
                          ?.chain()
                          .focus()
                          .toggleHeading({ level: 1 })
                          .run()
                      }
                    >
                      <Heading1 className="h-4 w-4" />
                    </Toggle>
                    <Toggle
                      variant="outline"
                      size="default"
                      pressed={editor?.isActive("heading", { level: 2 })}
                      onPressedChange={() =>
                        editor
                          ?.chain()
                          .focus()
                          .toggleHeading({ level: 2 })
                          .run()
                      }
                    >
                      <Heading2 className="h-4 w-4" />
                    </Toggle>
                  </div>

                  {/* Lists and Alignment */}
                  <div className="mb-2 flex flex-wrap gap-2">
                    <Toggle
                      variant="outline"
                      size="default"
                      pressed={editor?.isActive("bulletList")}
                      onPressedChange={() =>
                        editor?.chain().focus().toggleBulletList().run()
                      }
                    >
                      <List className="h-4 w-4" />
                    </Toggle>
                    <Toggle
                      variant="outline"
                      size="default"
                      pressed={editor?.isActive("orderedList")}
                      onPressedChange={() =>
                        editor?.chain().focus().toggleOrderedList().run()
                      }
                    >
                      <ListOrdered className="h-4 w-4" />
                    </Toggle>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        editor?.chain().focus().setTextAlign("left").run()
                      }
                      className={
                        editor?.isActive({ textAlign: "left" })
                          ? "bg-accent"
                          : ""
                      }
                    >
                      <AlignLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        editor?.chain().focus().setTextAlign("center").run()
                      }
                      className={
                        editor?.isActive({ textAlign: "center" })
                          ? "bg-accent"
                          : ""
                      }
                    >
                      <AlignCenter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        editor?.chain().focus().setTextAlign("right").run()
                      }
                      className={
                        editor?.isActive({ textAlign: "right" })
                          ? "bg-accent"
                          : ""
                      }
                    >
                      <AlignRight className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        editor?.chain().focus().setTextAlign("justify").run()
                      }
                      className={
                        editor?.isActive({ textAlign: "justify" })
                          ? "bg-accent"
                          : ""
                      }
                    >
                      <AlignJustify className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Special Formatting */}
                  <div className="flex flex-wrap gap-2">
                    <Dialog
                      open={isLinkDialogOpen}
                      onOpenChange={setIsLinkDialogOpen}
                    >
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className={
                            editor?.isActive("link") ? "bg-accent" : ""
                          }
                        >
                          <LinkIcon className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Add Link</DialogTitle>
                          <DialogDescription>
                            Enter the URL for your link
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center space-x-2">
                          <div className="grid flex-1 gap-2">
                            <Label htmlFor="link">Link URL</Label>
                            <Input
                              id="link"
                              value={linkUrl}
                              onChange={(e) => setLinkUrl(e.target.value)}
                              placeholder="https://example.com"
                              className="focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </div>
                        </div>
                        <DialogFooter className="sm:justify-start">
                          <Button
                            type="button"
                            variant="secondary"
                            onClick={() => setIsLinkDialogOpen(false)}
                          >
                            <X />
                            Cancel
                          </Button>
                          <Button type="button" onClick={handleLinkSubmit}>
                            <LinkIcon />
                            Add Link
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Dialog
                      open={isImageDialogOpen}
                      onOpenChange={setIsImageDialogOpen}
                    >
                      <DialogTrigger asChild>
                        <Button variant="outline" size="icon">
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Add Image</DialogTitle>
                          <DialogDescription>
                            Enter the URL for your image
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center space-x-2">
                          <div className="grid flex-1 gap-2">
                            <Label htmlFor="image">Image URL</Label>
                            <Input
                              id="image"
                              value={imageUrl}
                              onChange={(e) => setImageUrl(e.target.value)}
                              placeholder="https://example.com/image.jpg"
                              className="focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </div>
                        </div>
                        <DialogFooter className="sm:justify-start">
                          <Button
                            type="button"
                            variant="secondary"
                            onClick={() => setIsImageDialogOpen(false)}
                          >
                            <X />
                            Cancel
                          </Button>
                          <Button type="button" onClick={handleImageSubmit}>
                            <ImageIcon />
                            Add Image
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Toggle
                      variant="outline"
                      size="default"
                      pressed={editor?.isActive("blockquote")}
                      onPressedChange={() =>
                        editor?.chain().focus().toggleBlockquote().run()
                      }
                    >
                      <Quote className="h-4 w-4" />
                    </Toggle>
                    <Toggle
                      variant="outline"
                      size="default"
                      pressed={editor?.isActive("code")}
                      onPressedChange={() =>
                        editor?.chain().focus().toggleCode().run()
                      }
                    >
                      <Code className="h-4 w-4" />
                    </Toggle>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => editor?.chain().focus().undo().run()}
                    >
                      <Undo className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => editor?.chain().focus().redo().run()}
                    >
                      <Redo className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Editor Content Area */}
                <EditorContent editor={editor} className="min-h-[300px]" />
              </CardContent>
            </Card>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button size="lg" className="px-8">
              Publish Blog
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
