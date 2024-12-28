import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, Circle, ArrowLeft } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

async function getTodo(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) {
    if (res.status === 404) notFound();
    throw new Error("Failed to fetch todo");
  }
  return res.json();
}

export default async function TodoDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const todo = await getTodo(params.id);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center justify-between">
            Todo #{todo.id}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start space-x-4">
            {todo.completed ? (
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            ) : (
              <Circle className="w-6 h-6 text-gray-300 flex-shrink-0" />
            )}
            <p className="text-lg">{todo.title}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/Todos">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Todos
            </Link>
          </Button>
          <Button variant={todo.completed ? "secondary" : "default"}>
            {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
