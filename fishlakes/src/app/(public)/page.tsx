import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div>
        <h1>FishLakesApp</h1>
      </div>
    </main>
  );
}
