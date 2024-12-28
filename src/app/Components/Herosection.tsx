import Link from "next/link";
import React from "react";

function Herosection() {
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-16 text-center ">
        <h1 className="text-4xl font-bold">
          Welcome to JSONPlaceholder Explorer
        </h1>
        <p className="mt-4 text-lg">Browse through mock data seamlessly</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 my-[76px]">
          <div className="bg-gradient-to-br from-purple-600 to-blue-500 p-6 rounded-lg shadow-lg text-white text-center">
            <h2 className="text-xl font-bold">Users 👤</h2>
            <p className="mt-2">Explore user profiles</p>
            <Link
              href="/Users"
              className="inline-block mt-4 bg-white font-bold text-purple-600 px-4 py-2 rounded hover:bg-purple-100 transition-colors"
            >
              View
            </Link>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-orange-400 p-6 rounded-lg shadow-lg text-white text-center">
            <h2 className="text-xl font-bold">Posts 📮</h2>
            <p className="mt-2">Read amazing posts</p>
            <Link
              href="/Posts"
              className="inline-block mt-4 font-bold bg-white text-pink-600 px-4 py-2 rounded hover:bg-pink-100 transition-colors"
            >
              View
            </Link>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-teal-500 p-6 rounded-lg shadow-lg text-white text-center">
            <h2 className="text-xl font-bold">Comments 💬</h2>
            <p className="mt-2">Join the conversation</p>
            <Link
              href="/Comments"
              className="inline-block mt-4 font-bold bg-white text-green-600 px-4 py-2 rounded hover:bg-green-100 transition-colors"
            >
              View
            </Link>
          </div>
          <div className="bg-gradient-to-br from-yellow-400 to-red-500 p-6 rounded-lg shadow-lg text-white text-center">
            <h2 className="text-xl font-bold">Todos 📝</h2>
            <p className="mt-2">Manage your tasks</p>
            <Link
              href="/Todos"
              className="inline-block mt-4 font-bold bg-white text-yellow-600 px-4 py-2 rounded hover:bg-yellow-100 transition-colors"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
