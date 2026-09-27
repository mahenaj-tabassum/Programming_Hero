import Link from "next/link";
import { Dumbbell, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4">
      <div className="p-6 rounded-full bg-[#151921] border border-[#232732] mb-6">
        <Dumbbell size={48} className="text-accent" />
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
        404
      </h1>

      <h2 className="text-xl md:text-1.5xl font-bold mt-4 text-white">
        This workout doesn&apos;t exist
      </h2>

      <p className="text-[#8A93A0] mt-3 max-w-md">
        We couldn&apos;t find the page you were looking for. Return to the
        workout library and continue your fitness journey.
      </p>

      <Link href="/" className="btn-primary flex items-center gap-2 mt-8">
        <Home size={17} />
        Back to Home
      </Link>
    </div>
  );
}
