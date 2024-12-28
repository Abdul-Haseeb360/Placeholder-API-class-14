import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, User } from "lucide-react";
import Link from "next/link";

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/Posts" className="text-blue-900 flex hover:underline mb-4">
        {" "}
        <ArrowLeft />
        Back to Directory
      </Link>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <User className="w-8 h-8 text-blue-500" />
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-justify">
          {post.body}
        </CardContent>
      </Card>
    </div>
  );
}
