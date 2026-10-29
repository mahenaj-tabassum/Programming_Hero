import UserDetails from "@/components/Users/UserDetails";


const UserDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${encodeURIComponent(id)}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user details.");
  }

  const result = await response.json();
  const data = result.data;

  return <UserDetails userData={data} />;
};

export default UserDetailsPage;
