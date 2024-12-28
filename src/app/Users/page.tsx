import React from 'react'
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import Navbar from '../Components/Navbar';
async function page() {
  const url = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await url.json();

  return (
    <div>
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">User Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {res.map((book: any, index: number) => (
          <div key={index}>
            <Link href={`/Users/${book.id}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <User className="w-8 h-8 text-blue-500" />
                  <CardTitle>{book.name}</CardTitle>
                </CardHeader>
                <CardContent>
                 <p className="text-sm text-gray-500">{book.email}</p>
               <p className="text-sm text-gray-500">{book.company.name}</p>
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
