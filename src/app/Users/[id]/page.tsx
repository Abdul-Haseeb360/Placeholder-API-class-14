import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  Globe,
  Mail,
  MapPin,
  Phone,
  User,
  ArrowLeft,
} from "lucide-react";
import React from "react";
import Link from "next/link";
async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  return res.json();
}

async function Page({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  return (
    <div className=" container ">
      <section className="p-8 font-bold w-fit mx-auto">
        <Link href="/Users" className="text-blue-900 flex hover:underline mb-4">
          {" "}
          <ArrowLeft />
          Back to Directory
        </Link>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <User className="w-8 h-8 text-blue-500" />
              {user.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-500" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-500" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-gray-500" />
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {user.website}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-gray-500" />
              <span>
                {user.company.name} - {user.company.catchPhrase}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-gray-500 mt-1" />
              <address className="not-italic">
                {user.address.street}, {user.address.suite}
                <br />
                {user.address.city}, {user.address.zipcode}
              </address>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default Page;
