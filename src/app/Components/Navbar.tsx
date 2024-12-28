import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "../../../public/json-file.png";
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="/"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Home
            </Link>
            <Link
              href="/Posts"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Posts
            </Link>
            <Link
              href="/Comments"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Comments
            </Link>
            <Link
              href="/Todos"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Todos
            </Link>
            <Link
              href="/Users"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Users
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-600"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link
                    href="/"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Home
                  </Link>
                  <Link
                    href="/Posts"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Posts
                  </Link>
                  <Link
                    href="/Comments"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Comments
                  </Link>
                  <Link
                    href="/Todos"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Todos
                  </Link>
                  <Link
                    href="/Users"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Users
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
