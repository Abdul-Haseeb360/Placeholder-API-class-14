import Link from "next/link";
import Navbar from "./Components/Navbar";
import Herosection from "./Components/Herosection";

export default async function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Herosection />
    </div>
  );
}
