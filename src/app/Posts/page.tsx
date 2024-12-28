import React from 'react'
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Notebook } from "lucide-react";
import Navbar from '../Components/Navbar';

async function page() {
  const url = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await url.json();
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Posts Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post: any, index: number) => (
          <div key={index}>
            <Link href={`/Posts/${post.id}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Notebook className="w-8 h-8 text-blue-500" />
                  <CardTitle>{post.id}</CardTitle>
                </CardHeader>
                <CardContent>
               </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default page
