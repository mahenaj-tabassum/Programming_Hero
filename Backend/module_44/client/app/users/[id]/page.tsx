import { Suspense } from "react";
import UserDetails from "@/components/Users/UserDetails";

type UserDetailsPageProps = {
  params: Promise<{ id: string }>;
};

// Fetch user details after the dynamic route parameters are available.
const UserDetailsContent = async ({ params }: UserDetailsPageProps) => {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${encodeURIComponent(id)}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user details.");
  }

  const result = await response.json();
  const data = result.data;

  return <UserDetails userData={data} />;
};

// Keep dynamic data access inside Suspense.
const UserDetailsPage = ({ params }: UserDetailsPageProps) => {
  return (
    <Suspense
      fallback={
        <div className="p-6 text-center text-[#A0A79A]">
          Loading user details...
        </div>
      }
    >
      <UserDetailsContent params={params} />
    </Suspense>
  );
};

export default UserDetailsPage;
