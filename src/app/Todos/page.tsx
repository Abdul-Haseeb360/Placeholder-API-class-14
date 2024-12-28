import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "../Components/Navbar";

async function fetchTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) throw new Error('Failed to fetch todos');
  return res.json();
}

export default async function TodosPage() {
  const todos = await fetchTodos();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-center font-bold mb-6">Todo List 📝</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {todos.map((todo: any) => (
            <Card key={todo.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-grow ">
                    <h2 >
                      {todo.title}
                    </h2>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/Todos/${todo.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

