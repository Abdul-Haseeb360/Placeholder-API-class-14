import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";

async function getComments(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const comment = await getComments(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/Comments"
        className="text-blue-900 flex hover:underline mb-4"
      >
        {" "}
        <ArrowLeft />
        Back to Directory
      </Link>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <MessageCircle className="w-8 h-8 text-blue-500" />
            {comment.id}{" "}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-justify">
          <p className="text-sm text-gray-600 mb-2">Message: {comment.body}</p>
          <p className="text-sm text-gray-600 mb-2">Email: {comment.email}</p>
        </CardContent>
      </Card>
    </div>
  );
}
