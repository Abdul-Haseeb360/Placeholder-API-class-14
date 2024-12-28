import React from "react";
import Navbar from "../Components/Navbar";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

async function page() {
  const url = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await url.json();
  console.log(comments);
  return (
    <div>
      <Navbar />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 my-6 mx-6">
        {comments.map((comment: any, index: number) => (
          <div key={index}>
            <Link href={`/Comments/${comment.id}`}>
              <Card
                key={comment.id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600 gap-2 flex">
                    <MessageCircle /> Comment # {comment.id}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">{comment.name}</p>{" "}
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
